// Takes screenshots of key pages (for design review). Usage: node scripts/screens.mjs <outdir>
import { chromium } from 'playwright';
const out = process.argv[2] || 'screens';
const base = process.env.BASE_URL || 'http://localhost:4321';
const exe = process.env.CHROME_PATH;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const pages = [['home', '/'], ['issue28', '/notes/28/'], ['originals', '/originals/'], ['news', '/news/'], ['indetail', '/in-detail/what-changed-in-en-301-549-version-4-1-1/']];
for (const [w, tag] of [[1280, 'desktop'], [390, 'mobile']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  for (const [name, url] of pages) {
    await p.goto(base + url, { waitUntil: 'networkidle' });
    await p.screenshot({ path: `${out}/${name}-${tag}.png`, fullPage: name === 'home' });
  }
  await ctx.close();
}
await browser.close();
