import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// On-demand endpoint (everything else is prerendered static).
export const prerender = false;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

// Tiny in-memory rate limiter (per Node process): max 5 submissions / 10 min / IP.
const HITS = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  HITS.set(ip, recent);
  return recent.length > MAX_HITS;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

let transporter: nodemailer.Transporter | null = null;
function getTransport() {
  if (transporter) return transporter;
  const port = Number(process.env.SMTP_PORT ?? 587);
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'mail.zaur.app',
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user: process.env.SMTP_USER ?? '', pass: process.env.SMTP_PASS ?? '' },
  });
  return transporter;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (rateLimited(clientAddress ?? 'unknown')) {
    return json(429, { ok: false, error: 'Zbyt wiele prób. Spróbuj ponownie później.' });
  }

  let data: Record<string, string> = {};
  try {
    const ct = request.headers.get('content-type') ?? '';
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries([...form.entries()].map(([k, v]) => [k, String(v)]));
    }
  } catch {
    return json(400, { ok: false, error: 'Nieprawidłowe dane.' });
  }

  // Honeypot — bots fill this hidden field. Pretend success, drop silently.
  if (data.company) return json(200, { ok: true });

  const name = (data.from_name ?? '').trim();
  const email = (data.reply_to ?? '').trim();
  const message = (data.message ?? '').trim();

  if (!name || name.length > 120) return json(400, { ok: false, error: 'Podaj imię.' });
  if (!isEmail(email)) return json(400, { ok: false, error: 'Podaj poprawny adres e-mail.' });
  if (message.length < 5 || message.length > 5000)
    return json(400, { ok: false, error: 'Wiadomość jest za krótka lub za długa.' });

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[contact] SMTP credentials not configured');
    return json(500, { ok: false, error: 'Formularz jest chwilowo niedostępny.' });
  }

  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER;
  const from = process.env.CONTACT_FROM ?? `Kurcz.pl <${process.env.SMTP_USER}>`;

  try {
    await getTransport().sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `Kurcz.pl — wiadomość od ${name}`,
      text: `Imię: ${name}\nE-mail: ${email}\n\n${message}\n`,
    });
    return json(200, { ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return json(502, { ok: false, error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' });
  }
};
