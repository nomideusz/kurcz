// Stable, ASCII-safe slug for in-page anchor ids (shared by TOC + headings).
const MAP = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => MAP[c] ?? c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}
