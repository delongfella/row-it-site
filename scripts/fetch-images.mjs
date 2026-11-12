// One-time helper: downloads every image the site uses from the live WordPress site
// into public/images/. Run it ONCE, before WordPress hosting is switched off:
//   npm run fetch-images
import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const base = 'https://row-it.in/wp-content/uploads/';
const files = [
  // [path on the live site, saved as]
  ['2024/12/sky-is-the-limit.png', 'sky-is-the-limit.png'],
  ['2025/06/row.png', 'row.png'],
  ['2025/05/untitled-design-1.png', 'about-rohit.png'],
  ['2025/07/fogged-window-texture-260nw-717898558.webp', 'blog/fogged-window-texture-260nw-717898558.webp'],
  ['2025/07/tree.jpg', 'blog/tree.jpg'],
  ['2025/07/picture-of-different-color-lens.png', 'blog/picture-of-different-color-lens.png'],
  ['2025/06/desire.jpeg', 'blog/desire.jpeg'],
  ['2025/05/1724395251335.jpeg', 'blog/1724395251335.jpeg'],
  ['2025/05/26033278-0427-4ae7-839a-e73fa98ff1d3_902x918.jpg', 'blog/26033278-0427-4ae7-839a-e73fa98ff1d3_902x918.jpg'],
  ['2025/05/55b2e817-562e-4643-ac10-d6b0b93f5a42_805x1423.jpg', 'blog/55b2e817-562e-4643-ac10-d6b0b93f5a42_805x1423.jpg'],
  ['2025/05/53f55d4d-32a5-4059-ac6f-a69355385678_737x702.png', 'blog/53f55d4d-32a5-4059-ac6f-a69355385678_737x702.png'],
  ['2025/05/c98d641e-a226-4971-bfbf-c73ba4184ab0_1080x1080.webp', 'blog/c98d641e-a226-4971-bfbf-c73ba4184ab0_1080x1080.webp'],
  ['2025/05/1726202742449.png', 'blog/1726202742449.png'],
  ['2025/05/1834e941-8ead-4126-8c7e-932155fefde3_1080x1080.jpg', 'blog/1834e941-8ead-4126-8c7e-932155fefde3_1080x1080.jpg'],
  ['2025/05/1729684677635.jpeg', 'blog/1729684677635.jpeg'],
  ['2025/05/1736684989094.jpeg', 'blog/1736684989094.jpeg'],
  ['2025/05/1747302606380.jpeg', 'blog/1747302606380.jpeg'],
];

await mkdir('public/images/blog', { recursive: true });
let ok = 0;
const failed = [];
for (const [from, to] of files) {
  const dest = `public/images/${to}`;
  if (existsSync(dest)) { ok++; continue; }
  try {
    const res = await fetch(base + from);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    ok++;
    console.log('saved', dest);
  } catch (e) {
    failed.push(`${from} (${e.message})`);
  }
}
if (existsSync('public/images/row.png')) await copyFile('public/images/row.png', 'public/favicon.png');
console.log(`\nDone: ${ok}/${files.length} images in place.`);
if (failed.length) console.log('Failed:\n' + failed.join('\n'));

await import('./optimize-images.mjs');
