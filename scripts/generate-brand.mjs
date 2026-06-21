// Regenerates brand raster assets (favicons, app icons, schema/social logo).
// Warm-paper editorial brand: terracotta accent, serif wordmark.
// Run: node scripts/generate-brand.mjs
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

const SERIF = 'DejaVu Serif';
const PAPER = '#F4EFE6';
const INK = '#182438';
const ACCENT = '#DC4B2E';

// Square icon — accent ground, cream serif "k" with a paper dot (echoes the .pl accent).
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${ACCENT}"/>
  <text x="50" y="50" font-family="${SERIF}" font-size="74" font-weight="bold" fill="${PAPER}"
        text-anchor="middle" dominant-baseline="central">k</text>
</svg>`;

// Wordmark lockup on paper — for Organization schema + social.
const lockup = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="180" viewBox="0 0 260 73">
  <rect width="260" height="73" fill="${PAPER}"/>
  <text x="22" y="48" font-family="${SERIF}" font-size="42" font-weight="bold" fill="${INK}">kurcz<tspan fill="${ACCENT}">.pl</tspan></text>
</svg>`;

const jobs = [
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
  ['favicon.ico', 32], // PNG payload, .ico name — modern browsers accept it
];

for (const [file, size] of jobs) {
  await sharp(Buffer.from(icon(size))).resize(size, size).png().toFile(join(pub, file));
  console.log('✓', file);
}

await sharp(Buffer.from(lockup)).webp({ quality: 92 }).toFile(join(pub, 'logo.webp'));
await sharp(Buffer.from(lockup)).webp({ quality: 92 }).toFile(join(pub, 'img', 'logo.webp'));
await sharp(Buffer.from(lockup)).png().toFile(join(pub, 'img', 'logo.png'));
console.log('✓ logo.webp + img/logo.webp + img/logo.png');
console.log('Brand assets regenerated.');
