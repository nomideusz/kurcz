// Generates branded Open Graph cards (1200x630 JPG) matching the site design.
// Run: node scripts/generate-og.mjs  → writes to public/og-image.jpg + public/og/*.jpg
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const FONT = 'DejaVu Sans';
const BRAND = '#0d9488';
const INK = '#0f172a';
const MUTED = '#64748b';

const cards = [
  { file: 'og-image.jpg', title: 'Kurcze mięśniowe — przyczyny, ulga i profilaktyka' },
  { file: 'og/kurcze-miesniowe.jpg', title: 'Kurcze mięśniowe' },
  { file: 'og/pierwsza-pomoc.jpg', title: 'Pierwsza pomoc przy kurczach' },
  { file: 'og/profilaktyka.jpg', title: 'Profilaktyka kurczy mięśniowych' },
  { file: 'og/kurcz-vs-skurcz.jpg', title: 'Kurcz a skurcz — różnice' },
  { file: 'og/wibroakustyka.jpg', title: 'Wibroakustyka a kurcze' },
  { file: 'og/joga-a-kurcze.jpg', title: 'Joga a kurcze mięśniowe' },
  { file: 'og/faq.jpg', title: 'Najczęstsze pytania o kurcze' },
];

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function svg(title) {
  const lines = wrap(title, 20);
  const fontSize = lines.length > 2 ? 64 : 76;
  const lineHeight = fontSize * 1.18;
  const blockHeight = lines.length * lineHeight;
  const startY = 340 - blockHeight / 2 + fontSize;
  const tspans = lines
    .map(
      (l, i) =>
        `<tspan x="90" y="${Math.round(startY + i * lineHeight)}">${esc(l)}</tspan>`
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="12" fill="${BRAND}"/>
  <g font-family="${FONT}">
    <circle cx="98" cy="92" r="11" fill="${BRAND}"/>
    <text x="120" y="104" font-size="38" font-weight="bold" fill="${INK}">Kurcz<tspan fill="${BRAND}">.pl</tspan></text>
    <text font-size="${fontSize}" font-weight="bold" fill="${INK}">${tspans}</text>
    <text x="90" y="560" font-size="30" fill="${MUTED}">Rzetelna wiedza o kurczach mięśniowych</text>
  </g>
</svg>`;
}

for (const card of cards) {
  const out = join(publicDir, card.file);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg(card.title)))
    .jpeg({ quality: 88 })
    .toFile(out);
  console.log('✓', card.file);
}
console.log(`Generated ${cards.length} OG images.`);
