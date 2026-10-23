// Makes smaller WebP copies of the site's images and writes src/data/images.json.
// Runs before every build. Existing copies are kept, so only new images are converted
// (if you replace an image under the same name, delete its files in public/images/webp/ first).
// Originals stay where they are: old emails, LinkedIn posts and social previews keep working.
//
// public/images/notes-28-cover.jpg -> public/images/webp/notes-28-cover-480.webp, -800.webp, -1280.webp, -1600.webp
// Social preview images (*-og.png) are not converted: LinkedIn does not always show WebP.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PUB = path.join(ROOT, 'public');
const OUT_DIR = path.join(PUB, 'images', 'webp');
const MANIFEST = path.join(ROOT, 'src', 'data', 'images.json');
const WIDTHS = [480, 800, 1280, 1600];

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.warn('optimize-images: sharp is not installed; keeping the existing WebP files and manifest.');
  process.exit(0);
}

const sources = [
  ...fs.readdirSync(path.join(PUB, 'images'))
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !/-og\.png$/i.test(f))
    .map((f) => `/images/${f}`),
  '/logo.png',
];

fs.mkdirSync(OUT_DIR, { recursive: true });
const manifest = {};
let made = 0;

for (const src of sources) {
  const file = path.join(PUB, src);
  const { width, height } = await sharp(file).metadata();
  const base = path.basename(src).replace(/\.[^.]+$/, '');
  const isPng = /\.png$/i.test(src);
  // Logo: shown at 48 px (header) and 160 px (pledge card); the original is 160 px. Others: a few widths up to the original size.
  const widths = src === '/logo.png' ? [96, 160] : [...WIDTHS.filter((w) => w < width), width].filter((w, i, a) => a.indexOf(w) === i);
  const entry = { width, height, webp: [] };
  for (const w of widths) {
    const rel = `/images/webp/${base}-${w}.webp`;
    const out = path.join(PUB, rel);
    if (!fs.existsSync(out)) {
      // Screenshots (PNG) get a higher quality so text in them stays sharp.
      await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: isPng ? 90 : 80, effort: 6 }).toFile(out);
      made++;
    }
    entry.webp.push([rel, w]);
  }
  // Keep the original when WebP would not be smaller at full size.
  const full = path.join(PUB, entry.webp.at(-1)[0]);
  if (fs.statSync(full).size < fs.statSync(file).size) manifest[src] = entry;
}

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
console.log(`optimize-images: ${sources.length} images, ${made} new WebP files.`);
