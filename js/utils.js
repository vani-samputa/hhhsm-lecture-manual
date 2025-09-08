/* Small utilities */

export const stripDiacritics = (s = '') =>
  s.normalize ? s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() : s.toLowerCase();

export const debounce = (fn, ms = 150) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};

export const by = (key, dir = 'asc') => (a, b) => {
  const av = (a[key] ?? '').toString();
  const bv = (b[key] ?? '').toString();
  if (av < bv) return dir === 'asc' ? -1 : 1;
  if (av > bv) return dir === 'asc' ? 1 : -1;
  return 0;
};

export const unique = (arr) => Array.from(new Set(arr)).filter(Boolean);