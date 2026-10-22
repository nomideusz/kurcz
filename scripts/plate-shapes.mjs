// Fits every engraved plate as low-poly shards (svelte-geometrize) for the "cramp lets go"
// entrance: src/components/Plate.astro draws them, then the engraving relaxes in over them.
// The plates are transparent, so each is flattened onto the linen ground first; fitted
// against the raw pixels the shards would chase the colour hidden under the alpha.
// Output is committed; rerun after adding or redrawing a plate: npm run plates:shapes
import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { generatePlaceholder } from '@nomideusz/svelte-geometrize/node';

const GROUND = '#dce3e4';
const rgb = (hex) => [0, 2, 4].map((i) => parseInt(hex.replace('#', '').slice(i, i + 2), 16));
const nearGround = (hex) => Math.hypot(...rgb(hex).map((c, i) => c - rgb(GROUND)[i])) < 40;
const dir = new URL('../assets/plates/', import.meta.url);
const names = [
  'hero-plate',
  ...(await readdir(dir)).filter((f) => /^card-.*-plate\.png$/.test(f)).map((f) => f.slice(0, -4)),
  ...(await readdir(new URL('guides/', dir))).map((f) => `guides/${f.slice(0, -4)}`),
];

const shapes = {};
for (const name of names.sort()) {
  const flat = await sharp(fileURLToPath(new URL(`${name}.png`, dir))).flatten({ background: GROUND }).png().toBuffer();
  const fit = await generatePlaceholder(flat, { preset: 'low-poly', shapes: 90 });
  // Shards the fit spent on the bare ground would paint a flat box over the linen texture.
  fit.s = fit.s.split(';').filter((s) => !nearGround(s.slice(-6))).join(';');
  shapes[name] = fit;
  console.log(name, JSON.stringify(shapes[name]).length);
}
await writeFile(new URL('../src/content/plate-shapes.json', import.meta.url), JSON.stringify(shapes, null, 1) + '\n');
