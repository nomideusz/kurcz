import { generatePlaceholder } from '@nomideusz/svelte-geometrize/node';
import fs from 'fs';
import path from 'path';

const images = [
  'runner_stretching_calf.png',
  'magnesium_rich_foods.png',
  'leg_massage_relief.png',
  'vibroacoustic_therapy.png',
];

const imgDir = '/home/nom/dev/apps/kurcz/public/img';
const outputMap = {};

console.log('Generating geometrize shape placeholders...');

for (const img of images) {
  const fullPath = path.join(imgDir, img);
  console.log(`Processing ${img}...`);
  try {
    const placeholder = await generatePlaceholder(fullPath, { shapeCount: 40 });
    outputMap[img] = placeholder;
  } catch (err) {
    console.error(`Failed to geometrize ${img}:`, err);
  }
}

fs.writeFileSync(
  '/home/nom/dev/apps/kurcz/src/content/image-placeholders.json',
  JSON.stringify(outputMap, null, 2)
);

console.log('Placeholders successfully saved to src/content/image-placeholders.json!');
