// Small helpers shared by the Pages Functions.
export const SITE_HOST = /^(accessibilitynotebook\.com|([a-z0-9-]+\.)?accessibility-notebook\.pages\.dev|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/;

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

// Requests from other sites are refused (browsers always send Origin on POST).
export const fromSite = (request) => {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try { return SITE_HOST.test(new URL(origin).host); } catch { return false; }
};

// Plain text only: no control characters, normalised line breaks, trimmed, at most `max` characters.
export const clean = (s, max) =>
  String(s ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').replace(/\n{3,}/g, '\n\n').trim().slice(0, max);
