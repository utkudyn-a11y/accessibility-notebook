// Looks up the WebP copies made by scripts/optimize-images.mjs (src/data/images.json).
import manifest from '../data/images.json';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// { width, height, srcset } for an image, or null when there is no WebP copy.
export const webp = (src) => {
  const e = manifest[src];
  return e ? { width: e.width, height: e.height, srcset: e.webp.map(([u, w]) => `${u} ${w}w`).join(', ') } : null;
};

// <picture> markup for Markdown images: WebP when the browser supports it, the original otherwise.
// width/height stop the page from jumping while the image loads.
export const pictureHtml = (src, alt = '', { sizes = '(min-width: 58rem) 54rem, calc(100vw - 2rem)', title } = {}) => {
  const w = webp(src);
  const t = title ? ` title="${esc(title)}"` : '';
  const img = `<img src="${esc(src)}" alt="${esc(alt)}"${t}${w ? ` width="${w.width}" height="${w.height}"` : ''} loading="lazy" decoding="async">`;
  return w ? `<picture><source type="image/webp" srcset="${w.srcset}" sizes="${sizes}">${img}</picture>` : img;
};
