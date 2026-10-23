// Text normalisation shared by the search index and the search page.
// Lowercase, no accents ("Altın Gün" = "altin gun"), simple plural stemming ("CAPTCHAs" = "captcha").
export const fold = (s) =>
  s.toLowerCase().replace(/ı/g, 'i').normalize('NFD').replace(/[̀-ͯ]/g, '');

export const stem = (w) => {
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
};

export const processTerm = (term) => {
  const t = fold(term).replace(/[^a-z0-9]/g, '');
  return t ? stem(t) : null;
};
