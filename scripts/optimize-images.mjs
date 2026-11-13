// Makes images lighter so the site loads fast (a Google ranking factor).
// Runs automatically at the end of `npm run fetch-images`; safe to run again.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.log('sharp not available: skipping image optimisation.');
  process.exit(0);
}

// 1) Sky background -> compact WebP (the CSS uses /images/sky.webp)
const sky = 'public/images/sky-is-the-limit.png';
if (existsSync(sky)) {
  await sharp(sky).resize({ width: 2560, withoutEnlargement: true }).webp({ quality: 82 }).toFile('public/images/sky.webp');
  console.log('created public/images/sky.webp');
}

// 1b) About photo -> 1200px JPEG (the original PNG is several MB)
const about = 'public/images/about-rohit.png';
if (existsSync(about)) {
  await sharp(about).resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile('public/images/about-rohit.jpg');
  console.log('created public/images/about-rohit.jpg');
}

// 2) Blog images: max 1400px wide, re-compressed in the same format
const dir = 'public/images/blog';
if (existsSync(dir)) {
  for (const file of await readdir(dir)) {
    const ext = path.extname(file).toLowerCase();
    const full = path.join(dir, file);
    const input = await readFile(full);
    let img = sharp(input).resize({ width: 1400, withoutEnlargement: true });
    if (ext === '.jpg' || ext === '.jpeg') img = img.jpeg({ quality: 80, mozjpeg: true });
    else if (ext === '.webp') img = img.webp({ quality: 80 });
    else if (ext === '.png') img = img.png({ compressionLevel: 9 });
    else continue;
    const out = await img.toBuffer();
    if (out.length < input.length) {
      await writeFile(full, out);
      console.log(`optimised ${file}: ${Math.round(input.length / 1024)} KB -> ${Math.round(out.length / 1024)} KB`);
    }
  }
}
