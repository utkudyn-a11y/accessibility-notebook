// Runs axe (WCAG 2.0/2.1/2.2 A and AA rules) on every page in the built site.
// Then warns (does not fail) when a page outgrows the size and speed budget below.
// Usage: npm run build && npm run test:a11y   (starts its own static server on dist/)
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const DIST = path.resolve('dist');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(DIST, p);
  if (!file.startsWith(DIST) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  const ext = path.extname(file);
  // text is sent gzipped, as Cloudflare does, so the speed check sees realistic sizes
  if (/^\.(html|css|js|svg|xml)$/.test(ext)) {
    res.writeHead(200, { 'content-type': TYPES[ext], 'content-encoding': 'gzip' });
    return res.end(zlib.gzipSync(fs.readFileSync(file)));
  }
  res.writeHead(200, { 'content-type': TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(0);
const base = `http://localhost:${server.address().port}`;

const pages = ['/404.html', '/admin/', ...[...fs.readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)];
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
let failed = 0;
for (const [w, label] of [[1280, 'desktop'], [390, 'mobile']]) {
  // Reduced motion: check the settled page, not paper sheets caught mid-throw (they wait off-place until scrolled to)
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: 'load' });
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
    if (r.violations.length) {
      failed++;
      console.log(`\n✗ ${label} ${p}`);
      for (const v of r.violations) console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length}) e.g. ${v.nodes[0].target.join(' ')}`);
    }
  }
  await ctx.close();
}

// Budget: page HTML (gzipped) and, on the list pages that grow with every issue, how fast the main
// content shows on a slow phone (slow 4G, 4x slower CPU, median of 3). Over budget = time for "load more".
const HTML_KB = 100, LCP_S = 1.5;
const warnings = [];
for (const p of pages) {
  const f = path.join(DIST, p.endsWith('/') ? p + 'index.html' : p);
  const kb = zlib.gzipSync(fs.readFileSync(f)).length / 1024;
  if (kb > HTML_KB) warnings.push(`${p}: HTML ${kb.toFixed(0)} KB gzipped (budget ${HTML_KB} KB)`);
}
const latest = pages.filter((p) => /^\/notes\/\d+\/$/.test(p)).sort((a, b) => parseInt(b.slice(7)) - parseInt(a.slice(7)))[0];
const speed = [];
for (const p of ['/', '/originals/', '/news/', '/inspirations/', '/notes/', latest].filter(Boolean)) {
  const runs = [];
  for (let k = 0; k < 3; k++) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Network.enable');
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6e6 / 8, uploadThroughput: 750e3 / 8 });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await page.addInitScript(() => { window.__lcp = 0; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); });
    await page.goto(base + p, { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    runs.push(await page.evaluate(() => window.__lcp / 1000));
    await ctx.close();
  }
  const lcp = runs.sort((a, b) => a - b)[1];
  speed.push(`${p} ${lcp.toFixed(2)} s`);
  if (lcp > LCP_S) warnings.push(`${p}: main content shows after ${lcp.toFixed(2)} s on a slow phone (budget ${LCP_S} s)`);
}
await browser.close();
console.log(`\nSpeed on a slow phone: ${speed.join(' · ')}`);
if (warnings.length) console.log(`\n⚠ Over budget (consider "load more"):\n  ${warnings.join('\n  ')}`);
server.close();
console.log(`\n${pages.length} pages x 2 viewports checked, ${failed} page(s) with violations.`);
process.exit(failed ? 1 : 0);
