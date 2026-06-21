// Regenerates brand raster assets (favicons, app icons, schema/social logo) from the new logo mark.
// Run: node scripts/generate-brand.mjs
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

const TEAL = '#0d9488';
const INK = '#0f172a';

// Rounded-tile mark (matches Logo.astro) — for the small favicon.
const tileMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="10" fill="${TEAL}"/>
  <path d="M5 20 H11 L14 9 L20 28 L24 14 H31" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Full-bleed mark (no rounding) — for app/touch icons (the OS applies its own mask).
const fullMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${TEAL}"/>
  <path d="M16 58 H34 L42 30 L58 74 L66 44 H84" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Full lockup on white — for Organization schema + social.
const lockup = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="180" viewBox="0 0 260 73">
  <rect width="260" height="73" fill="#ffffff"/>
  <rect x="6" y="12" width="48" height="48" rx="13" fill="${TEAL}"/>
  <path d="M14 38 H21 L25 24 L31 52 L35 32 H46" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="68" y="47" font-family="DejaVu Sans" font-size="34" font-weight="bold" fill="${INK}">kurcz<tspan fill="#0f766e">.pl</tspan></text>
</svg>`;

const jobs = [
  [tileMark, 'favicon-32x32.png', 32, 'png'],
  [fullMark, 'apple-touch-icon.png', 180, 'png'],
  [fullMark, 'android-chrome-192x192.png', 192, 'png'],
  [fullMark, 'android-chrome-512x512.png', 512, 'png'],
  [tileMark, 'favicon.ico', 32, 'png'], // PNG payload, .ico name — modern browsers accept it
];

for (const [svg, file, size] of jobs) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(join(pub, file));
  console.log('✓', file);
}

// Logo for schema/social (webp + a png fallback path used by Organization schema).
await sharp(Buffer.from(lockup)).webp({ quality: 92 }).toFile(join(pub, 'logo.webp'));
await sharp(Buffer.from(lockup)).webp({ quality: 92 }).toFile(join(pub, 'img', 'logo.webp'));
await sharp(Buffer.from(lockup)).png().toFile(join(pub, 'img', 'logo.png'));
console.log('✓ logo.webp + img/logo.webp + img/logo.png');
console.log('Brand assets regenerated.');
