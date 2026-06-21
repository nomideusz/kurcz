// Generates branded Open Graph cards (1200x630 JPG) matching the site design.
// Run: node scripts/generate-og.mjs  → writes to public/og-image.jpg + public/og/*.jpg
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Warm-paper editorial brand. DejaVu Serif approximates Newsreader for raster output.
const SERIF = 'DejaVu Serif';
const SANS = 'DejaVu Sans';
const PAPER = '#F4EFE6';
const INK = '#182438';
const ACCENT = '#DC4B2E';
const FAINT = '#8A7F6E';
const LINE = '#E0D7C7';

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

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
  const lines = wrap(title, 22);
  const fontSize = lines.length > 2 ? 62 : 74;
  const lineHeight = fontSize * 1.16;
  const blockHeight = lines.length * lineHeight;
  const startY = 340 - blockHeight / 2 + fontSize;
  const tspans = lines
    .map((l, i) => `<tspan x="90" y="${Math.round(startY + i * lineHeight)}">${esc(l)}</tspan>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect width="1200" height="10" fill="${ACCENT}"/>
  <text x="90" y="104" font-family="${SERIF}" font-size="40" font-weight="bold" fill="${INK}">kurcz<tspan fill="${ACCENT}">.pl</tspan></text>
  <text x="90" y="150" font-family="${SANS}" font-size="20" letter-spacing="2" fill="${FAINT}">PORADNIK ZDROWIA · MIĘŚNIE</text>
  <text font-family="${SERIF}" font-size="${fontSize}" fill="${INK}">${tspans}</text>
  <rect x="90" y="520" width="40" height="3" fill="${ACCENT}"/>
  <text x="90" y="560" font-family="${SANS}" font-size="28" fill="${FAINT}">Rzetelna wiedza o kurczach mięśniowych</text>
</svg>`;
}

for (const card of cards) {
  const out = join(publicDir, card.file);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg(card.title))).jpeg({ quality: 88 }).toFile(out);
  console.log('✓', card.file);
}
console.log(`Generated ${cards.length} OG images.`);
