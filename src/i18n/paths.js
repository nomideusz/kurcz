/**
 * Canonical English URL segments for every logical (Polish) path.
 * Content lookup always uses the Polish path; EN URLs use these slugs.
 */
export const enPathByPl = {
  '/': '/',
  '/faq': '/faq',
  '/kontakt': '/contact',
  '/poradniki': '/guides',
  '/kurcze-miesniowe': '/muscle-cramps',
  '/pierwsza-pomoc': '/first-aid',
  '/profilaktyka': '/prevention',
  '/kurcz-vs-skurcz': '/cramp-vs-spasm',
  '/wibroakustyka': '/vibroacoustics',
  '/joga-a-kurcze': '/yoga-for-cramps',
  '/o-nas': '/about',
  '/regulamin': '/terms',
  '/polityka-prywatnosci': '/privacy',
  '/disclaimer-medyczny': '/medical-disclaimer',
  '/kurcze-nog': '/leg-cramps',
  '/kurcze-lydek': '/calf-cramps',
  '/kurcze-stop': '/foot-cramps',
  '/kurcze-nocne': '/night-cramps',
  '/kurcze-u-sportowcow': '/athlete-cramps',
  '/kurcze-u-kobiet-w-ciazy': '/pregnancy-calf-cramps',
  '/kurcze-u-osob-starszych': '/senior-cramps',
  '/kurcze-u-diabetykow': '/diabetes-cramps',
  '/niedobor-magnezu': '/magnesium-deficiency',
  '/kurcze-a-odwodnienie': '/dehydration-cramps',
  '/kurcze-a-leki': '/medication-cramps',
  '/rozciaganie-przy-kurczach': '/stretching-for-cramps',
  '/masaz-przy-kurczach': '/massage-for-cramps',
  '/suplementacja-magnezem': '/magnesium-supplements',
  '/kurcze-ud': '/thigh-cramps',
  '/kurcze-dloni': '/hand-cramps',
  '/elektrolity-a-kurcze': '/electrolytes-and-cramps',
  '/zespol-niespokojnych-nog-a-kurcze': '/rls-vs-cramps',
  '/kurcze-u-dzieci': '/cramps-in-children',
};

/** Reverse map: English slug → Polish logical path */
export const plPathByEn = Object.fromEntries(
  Object.entries(enPathByPl).map(([pl, en]) => [en, pl]),
);

export function normalizePath(path) {
  if (!path || path === '/') return '/';
  const bare = path.replace(/\/+$/, '') || '/';
  return bare.startsWith('/') ? bare : `/${bare}`;
}

/** Map a logical (PL) path to the path segment used in a given locale. */
export function toLocalePath(logicalPath, locale) {
  const path = normalizePath(logicalPath);
  if (locale === 'en') return enPathByPl[path] ?? path;
  return path;
}

/** Resolve any locale-facing path back to the Polish logical path used for content. */
export function toLogicalPath(pathOrSlug) {
  const path = normalizePath(pathOrSlug);
  return plPathByEn[path] ?? path;
}

export function absoluteLocaleUrl(origin, logicalPath, locale) {
  const base = origin.replace(/\/$/, '');
  const localized = toLocalePath(logicalPath, locale);
  if (locale === 'en') {
    return localized === '/' ? `${base}/en/` : `${base}/en${localized}/`;
  }
  return localized === '/' ? `${base}/` : `${base}${localized}/`;
}
