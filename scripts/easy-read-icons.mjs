// Easy Read icons: hand-drawn stick-figure style, 100 x 100 viewBox, strokes in currentColor so icons
// follow light mode, dark mode and forced colours. Writes one SVG per icon into src/assets/easy-read-icons/.
// The icon meanings are in the Icon dictionary (C = core icons used in every issue, N = icons for one issue).
// roughjs is not a site dependency; to redraw the icons run:
//   npm i --no-save roughjs@4.6.6 && node scripts/easy-read-icons.mjs
import fs from 'node:fs';
import rough from 'roughjs';

const gen = rough.generator();
const SW = 4;
const base = { stroke: '#000', strokeWidth: SW, roughness: 0.6, bowing: 0.6, disableMultiStroke: true };

function icon(seed) {
  const out = [];
  const o = (extra = {}) => ({ ...base, seed, ...extra });
  const add = (dr) => gen.toPaths(dr).forEach((p) => out.push(`<path d="${p.d}" stroke-width="${p.strokeWidth}"/>`));
  const api = {
    line: (x1, y1, x2, y2, e) => add(gen.line(x1, y1, x2, y2, o(e))),
    poly: (pts, e) => add(gen.linearPath(pts, o(e))),
    rect: (x, y, w, h, e) => add(gen.rectangle(x, y, w, h, o(e))),
    circle: (cx, cy, r, e) => add(gen.circle(cx, cy, r * 2, o({ roughness: 0.4, ...e }))),
    ellipse: (cx, cy, w, h, e) => add(gen.ellipse(cx, cy, w, h, o(e))),
    path: (d, e) => add(gen.path(d, o(e))),
    dot: (cx, cy, r = 2.6) => out.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" stroke="none"/>`),
    raw: (s) => out.push(s),
    star(cx, cy, R, e) {
      const pts = [];
      for (let i = 0; i < 11; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        const rr = i % 2 ? R * 0.45 : R;
        pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
      }
      return pts;
    },
    // Stick figure: joints in units of the head radius r, as in the cover stick-figure script
    fig(cx, cy, r, { arms, legs, bodyEnd = 5.75 }) {
      const P = ([x, y]) => [cx + x * r, cy + y * r];
      const seg = (pts) => { const q = pts.map(P); for (let i = 0; i < q.length - 1; i++) api.line(...q[i], ...q[i + 1]); };
      api.circle(cx, cy, r);
      seg([[0, 1], [0, bodyEnd]]);
      arms.forEach(seg);
      legs.forEach(seg);
      return P;
    },
  };
  return { api, out };
}

const CHEER = { arms: [[[0, 1.6], [-3.1, -1.5]], [[0, 1.6], [3.1, -1.5]]], legs: [[[0, 5.6], [-3.0, 9.5]], [[0, 5.6], [3.0, 9.5]]] };
const STAND = { arms: [[[0, 1.5], [-1.6, 5.2]], [[0, 1.5], [1.6, 5.2]]], legs: [[[0, 5.75], [-1.3, 10]], [[0, 5.75], [1.3, 10]]] };

const ICONS = {
  'c01-accessibility': (d) => {
    d.path('M30,14 A42,42 0 1 0 64,12', { roughness: 0.9 });
    d.path('M26,18 A44,44 0 0 1 46,9', { roughness: 1, strokeWidth: 3 });
    d.fig(50, 32, 6, CHEER);
  },
  'c02-disabled-people': (d) => {
    // 2 x 2: white cane, hearing aid / wheelchair, a disability you cannot see (dashed heart)
    const r = 4;
    const P1 = d.fig(20, 8, r, STAND); const h1 = P1([1.6, 5.2]); d.line(h1[0], h1[1], h1[0] + 6, 47);
    d.fig(70, 8, r, STAND); d.path('M75,2.5 Q81,8 75,14', { strokeWidth: 3.6 });
    d.fig(20, 60, r, { bodyEnd: 4.3, arms: [[[0, 1.5], [1.4, 3.8]]], legs: [[[0, 4.3], [2.4, 4.3], [2.6, 7.4]]] });
    d.circle(19.5, 85, 9.5, { roughness: 0.5 }); d.line(15, 66, 15, 80);
    d.fig(66, 54, r, STAND);
    d.raw('<path d="M86,80 C79,74 75,70 78,65 C80.5,61.5 85,62.5 86,66 C87,62.5 91.5,61.5 94,65 C97,70 93,74 86,80 Z" stroke-width="3.2" stroke-dasharray="3.2 2.6"/>');
  },
  'c03-website': (d) => {
    d.rect(10, 18, 80, 64); d.line(10, 31, 90, 31);
    d.dot(17, 24.5, 2); d.dot(24, 24.5, 2); d.dot(31, 24.5, 2);
    d.line(20, 45, 80, 45); d.line(20, 57, 72, 57); d.line(20, 69, 58, 69);
  },
  'c04-app': (d) => {
    d.path('M34,8 H66 Q72,8 72,14 V86 Q72,92 66,92 H34 Q28,92 28,86 V14 Q28,8 34,8 Z');
    d.line(44, 15, 56, 15);
    d.rect(36, 28, 12, 12); d.rect(52, 28, 12, 12); d.rect(36, 46, 12, 12); d.rect(52, 46, 12, 12);
    d.circle(50, 82, 3);
  },
  'c05-law': (d) => {
    d.rect(22, 8, 56, 84);
    d.line(32, 22, 68, 22); d.line(32, 32, 68, 32); d.line(32, 42, 68, 42); d.line(32, 52, 56, 52);
    d.circle(60, 72, 11); d.circle(60, 72, 6);
  },
  'c06-check': (d) => {
    d.rect(8, 12, 60, 48); d.line(8, 23, 68, 23);
    d.line(16, 34, 52, 34); d.line(16, 44, 44, 44);
    d.circle(62, 60, 15); d.line(73, 71, 90, 88, { strokeWidth: 6 });
  },
  'c07-problem': (d) => {
    d.fig(26, 26, 6, STAND);
    d.rect(50, 28, 40, 60);
    d.line(50, 43, 90, 43); d.line(50, 58, 90, 58); d.line(50, 73, 90, 73);
    d.line(70, 28, 70, 43); d.line(60, 43, 60, 58); d.line(80, 43, 80, 58); d.line(70, 58, 70, 73); d.line(60, 73, 60, 88); d.line(80, 73, 80, 88);
  },
  'c08-utku-says': (d) => {
    d.fig(28, 46, 5, CHEER);
    d.path('M54,8 H92 V36 H70 L58,46 L61,36 H54 Z');
    d.dot(64, 22); d.dot(73, 22); d.dot(82, 22);
  },
  'c09-question': (d) => {
    d.path('M18,30 Q18,12 34,12 Q50,12 50,28 Q50,40 36,44 L36,58', { strokeWidth: 5 });
    d.dot(36, 70, 3.5);
    d.rect(62, 28, 22, 22); d.path('M66,39 L72,45 L81,31');
    d.rect(62, 60, 22, 22);
  },
  'c10-full-issue': (d) => {
    d.path('M50,26 Q32,16 8,20 L8,80 Q32,76 50,86');
    d.path('M50,26 Q68,16 92,20 L92,80 Q68,76 50,86');
    d.line(50, 26, 50, 86);
    d.line(16, 34, 42, 36); d.line(16, 46, 42, 48); d.line(16, 58, 42, 60);
    d.line(58, 36, 84, 34); d.line(58, 48, 84, 46); d.line(58, 60, 84, 58);
  },
  'c11-feedback': (d) => {
    d.path('M12,16 H88 V64 H42 L26,82 L29,64 H12 Z');
    d.dot(33, 40, 3.5); d.dot(50, 40, 3.5); d.dot(67, 40, 3.5);
  },
  'c12-settings': (d) => {
    d.path('M28,48 H72 A15,15 0 0 1 72,78 H28 A15,15 0 0 1 28,48 Z');
    d.circle(72, 63, 10);
    d.circle(24, 22, 7);
    for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; d.line(24 + 11 * Math.cos(a), 22 + 11 * Math.sin(a), 24 + 16 * Math.cos(a), 22 + 16 * Math.sin(a), { strokeWidth: 3 }); }
    d.path('M78,8 A13,13 0 1 0 90,28 A10,10 0 1 1 78,8 Z');
  },
  'c13-ai': (d) => {
    d.rect(22, 32, 56, 46); d.line(50, 32, 50, 18); d.circle(50, 13, 4);
    d.circle(38, 50, 5); d.circle(62, 50, 5); d.line(38, 66, 62, 66);
    d.line(14, 46, 14, 62); d.line(86, 46, 86, 62);
  },
  'c14-europe': (d) => {
    for (let i = 0; i < 12; i++) { const a = (i * Math.PI) / 6; d.poly(d.star(50 + 36 * Math.cos(a), 50 + 36 * Math.sin(a), 6.5), { strokeWidth: 3 }); }
  },
  'n01-small-buttons': (d) => {
    [20, 50, 80].forEach((x) => d.poly(d.star(x, 24, 13), { strokeWidth: 3.4 }));
    d.path('M55,96 L55,58 Q55,47 65,47 Q75,47 75,58 L75,96');
    d.line(52, 44, 47, 39, { strokeWidth: 3 }); d.line(78, 44, 83, 39, { strokeWidth: 3 });
  },
  'n02-star-rating': (d) => {
    [18, 50].forEach((x) => d.poly(d.star(x, 50, 15), { strokeWidth: 3.6 }));
    const s = d.star(82, 50, 15);
    d.raw(`<path d="M${s.map((p) => p.join(',')).join(' L')}" stroke-width="2.6" stroke-dasharray="3 3"/>`);
    d.poly(s.slice(5, 11), { strokeWidth: 3.6 });
  },
  'n03-accessibleeu': (d) => {
    for (let i = 0; i < 12; i++) { const a = (i * Math.PI) / 6; d.poly(d.star(50 + 40 * Math.cos(a), 50 + 40 * Math.sin(a), 5), { strokeWidth: 2.6 }); }
    d.fig(50, 34, 4.5, CHEER);
  },
  'n04-report': (d) => {
    d.rect(20, 8, 60, 84);
    d.line(30, 20, 70, 20); d.line(30, 30, 58, 30);
    d.rect(30, 62, 8, 18); d.rect(45, 50, 8, 30); d.rect(60, 40, 8, 40);
    d.line(26, 82, 74, 82);
  },
  'n05-hotel': (d) => {
    d.line(12, 44, 12, 84); d.line(12, 72, 90, 72); d.line(90, 62, 90, 84);
    d.rect(12, 60, 78, 12); d.ellipse(27, 53, 20, 10);
    d.circle(56, 22, 7); d.line(63, 22, 88, 22); d.line(82, 22, 82, 29); d.line(88, 22, 88, 29);
  },
  'n06-guide-dog': (d) => {
    const P = d.fig(28, 22, 5.5, STAND); const h = P([1.6, 5.2]);
    d.line(h[0], h[1], 60, h[1]); d.line(60, h[1], 60, 64);
    d.line(54, 64, 82, 64); d.circle(87, 56, 5.5);
    d.line(56, 64, 53, 82); d.line(61, 64, 61, 82); d.line(78, 64, 78, 82); d.line(82, 64, 85, 82);
    d.line(54, 64, 46, 56); d.path('M90,52 L94,47', { strokeWidth: 3 });
  },
  'n07-white-cane': (d) => {
    const P = d.fig(38, 18, 6, STAND); const h = P([1.6, 5.2]);
    d.line(h[0], h[1], 70, 79, { strokeWidth: 3.2 });
  },
  'n08-smart-glasses': (d) => {
    d.circle(31, 58, 14); d.circle(69, 58, 14);
    d.path('M45,56 Q50,50 55,56');
    d.line(17, 55, 8, 48); d.line(83, 55, 92, 48);
    d.dot(80, 46, 3.2);
    d.path('M38,30 Q50,20 62,30', { strokeWidth: 3 }); d.path('M30,22 Q50,6 70,22', { strokeWidth: 3 });
  },
  'n09-headings': (d) => {
    d.rect(18, 8, 64, 84);
    d.line(28, 22, 66, 22, { strokeWidth: 8 });
    d.line(28, 36, 72, 36, { strokeWidth: 2.5 }); d.line(28, 44, 68, 44, { strokeWidth: 2.5 }); d.line(28, 52, 70, 52, { strokeWidth: 2.5 });
    d.line(28, 64, 56, 64, { strokeWidth: 6 });
    d.line(28, 76, 72, 76, { strokeWidth: 2.5 }); d.line(28, 84, 62, 84, { strokeWidth: 2.5 });
  },
  'c15-easy-read': (d) => {
    // A page laid out like Easy Read: a picture on the left, short lines on the right
    d.rect(10, 10, 80, 80);
    d.fig(30, 26, 5, { ...CHEER, legs: [[[0, 5.6], [-2.6, 8.6]], [[0, 5.6], [2.6, 8.6]]] });
    d.line(50, 30, 80, 30); d.line(50, 44, 74, 44); d.line(50, 58, 78, 58);
    d.line(22, 76, 78, 76);
  },
};

const OUT = 'src/assets/easy-read-icons';
fs.mkdirSync(OUT, { recursive: true });
let seed = 11;
for (const [name, draw] of Object.entries(ICONS)) {
  const { api, out } = icon(seed++);
  draw(api);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${out.join('')}</svg>`;
  fs.writeFileSync(`${OUT}/${name}.svg`, svg);
}
console.log(`Wrote ${Object.keys(ICONS).length} icons`);
