/**
 * Helpers for turning AI Search results into links for the reader's language.
 *
 * The index holds PL and EN pages in one namespace and retrieval mixes them freely —
 * a Polish question regularly ranks an /en/ page first. PL logical paths and EN English
 * slugs are paired via src/i18n/paths.ts.
 */

import { toLogicalPath, toLocalePath } from '../i18n/paths.js';

/** Rewrite an indexed source URL to `locale`, returning a site-relative path. */
export function localizeUrl(raw, locale) {
  let path;
  try {
    path = new URL(raw, 'https://kurcz.pl').pathname;
  } catch {
    return raw;
  }
  const bare = path.replace(/^\/en(?=\/|$)/, '') || '/';
  const logical = toLogicalPath(bare);
  const localized = toLocalePath(logical, locale === 'en' ? 'en' : 'pl');
  if (locale !== 'en') {
    return localized === '/' ? '/' : `${localized}/`;
  }
  return localized === '/' ? '/en/' : `/en${localized}/`;
}

/** Page titles are indexed with the site suffix; strip it for compact result rows. */
export function cleanTitle(title) {
  return String(title ?? '')
    .replace(/\s*\|\s*Kurcz\.pl\s*$/i, '')
    .trim();
}

/**
 * Collapse ranked chunks into at most `limit` unique pages.
 * Chunks arrive ranked, so the first sighting of a URL sets its position; a later chunk
 * only overrides the title/description if it carries metadata in the reader's language.
 */
export function toHits(chunks, locale, limit = 6) {
  const byUrl = new Map();

  for (const chunk of chunks ?? []) {
    const meta = chunk?.item?.metadata ?? {};
    const key = chunk?.item?.key;
    if (!key || !meta.title) continue;

    const url = localizeUrl(key, locale);
    const matched = meta.language === locale;
    const existing = byUrl.get(url);

    if (!existing) {
      byUrl.set(url, {
        url,
        title: cleanTitle(meta.title),
        description: meta.description ?? '',
        score: chunk.score ?? 0,
        matched,
      });
    } else if (matched && !existing.matched) {
      existing.title = cleanTitle(meta.title);
      existing.description = meta.description ?? '';
      existing.matched = true;
    }
  }

  return [...byUrl.values()].slice(0, limit);
}
