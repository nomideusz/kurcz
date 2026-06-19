import { landingRoutes } from '../content/landing-pages.js';

export const SITE_URL = 'https://kurcz.pl';
export const SITE_NAME = 'Kurcz.pl';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** @deprecated Legacy hash anchors — redirect client-side to path */
export const hashToPath = {
  home: '/',
  intro: '/kurcze-miesniowe',
  treatment: '/pierwsza-pomoc',
  prevention: '/profilaktyka',
  comparison: '/kurcz-vs-skurcz',
  wibroakustyka: '/wibroakustyka',
  yoga: '/joga-a-kurcze',
  faq: '/faq',
  contact: '/kontakt',
};

export const topicRoutes = [
  {
    path: '/',
    type: 'topic',
    sectionId: 'home',
    h1: 'Zrozumieć kurcze mięśniowe',
    breadcrumbLabel: 'Strona główna',
    title: 'Kurcze mięśniowe - przyczyny, objawy i skuteczne leczenie | Kurcz.pl',
    description: 'Dowiedz się wszystkiego o kurczach mięśniowych. Poznaj najczęstsze przyczyny, skuteczne metody leczenia, pierwszą pomoc, wibroakustykę i profilaktykę.',
    ogTitle: 'Kurcze mięśniowe - przyczyny i szybka ulga | Kurcz.pl',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/kurcze-miesniowe',
    type: 'topic',
    sectionId: 'intro',
    h1: 'Kurcze mięśniowe — przyczyny, objawy i leczenie',
    breadcrumbLabel: 'Kurcze mięśniowe',
    title: 'Kurcze mięśniowe — przyczyny, objawy i leczenie | Kurcz.pl',
    description: 'Poznaj medyczne podłoże kurczy mięśniowych: najczęstsze przyczyny, objawy, czynniki ryzyka oraz sprawdzone metody leczenia i prewencji.',
    ogImage: `${SITE_URL}/og/kurcze-miesniowe.jpg`,
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/pierwsza-pomoc',
    type: 'topic',
    sectionId: 'treatment',
    h1: 'Natychmiastowa pomoc przy kurczach mięśniowych',
    breadcrumbLabel: 'Pierwsza pomoc',
    title: 'Pierwsza pomoc przy kurczach mięśniowych — szybka ulga | Kurcz.pl',
    description: 'Natychmiastowa pomoc przy bolesnych kurczach: techniki rozciągania, masaż, ciepło i zimno, nawodnienie oraz ćwiczenia po ustąpieniu kurczu.',
    ogImage: `${SITE_URL}/og/pierwsza-pomoc.jpg`,
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/profilaktyka',
    type: 'topic',
    sectionId: 'prevention',
    h1: 'Skuteczna profilaktyka kurczy mięśniowych',
    breadcrumbLabel: 'Profilaktyka',
    title: 'Profilaktyka kurczy mięśniowych — jak zapobiegać | Kurcz.pl',
    description: 'Skuteczna profilaktyka kurczy mięśniowych: nawodnienie, dieta bogata w magnez i potas, regularne ćwiczenia rozciągające oraz zdrowe nawyki.',
    ogImage: `${SITE_URL}/og/profilaktyka.jpg`,
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/kurcz-vs-skurcz',
    type: 'topic',
    sectionId: 'comparison',
    h1: 'Kurcz a skurcz — kluczowe różnice',
    breadcrumbLabel: 'Kurcz vs. skurcz',
    title: 'Kurcz a skurcz mięśni — różnice medyczne | Kurcz.pl',
    description: 'Czym różni się kurcz od skurczu mięśni? Wyjaśniamy terminologię medyczną i potoczną oraz kiedy mówimy o patologicznym kurczu mięśnia.',
    ogImage: `${SITE_URL}/og/kurcz-vs-skurcz.jpg`,
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/wibroakustyka',
    type: 'topic',
    sectionId: 'wibroakustyka',
    h1: 'Wibroakustyka w walce z kurczami mięśniowymi',
    breadcrumbLabel: 'Wibroakustyka',
    title: 'Wibroakustyka a kurcze mięśniowe — terapia | Kurcz.pl',
    description: 'Jak terapia wibroakustyczna pomaga przy kurczach mięśniowych? Poznaj działanie fal dźwiękowych, korzyści i nowoczesne metody profilaktyki.',
    ogImage: `${SITE_URL}/og/wibroakustyka.jpg`,
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/joga-a-kurcze',
    type: 'topic',
    sectionId: 'yoga',
    h1: 'Joga jako skuteczna metoda na kurcze mięśniowe',
    breadcrumbLabel: 'Joga a kurcze',
    title: 'Joga a kurcze mięśniowe — naturalna profilaktyka | Kurcz.pl',
    description: 'Regularna praktyka jogi zapobiega kurczom mięśniowym. Dowiedz się, jak asany, oddech i rozciąganie wspierają zdrowie mięśni.',
    ogImage: `${SITE_URL}/og/joga-a-kurcze.jpg`,
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/faq',
    type: 'topic',
    sectionId: 'faq',
    h1: 'Najczęściej zadawane pytania o kurcze mięśniowe',
    breadcrumbLabel: 'FAQ',
    title: 'FAQ — najczęstsze pytania o kurcze mięśniowe | Kurcz.pl',
    description: 'Odpowiedzi na najczęstsze pytania o kurcze mięśniowe: kiedy iść do lekarza, leki, kurcze nocne, niedobory witamin i wibroakustyka.',
    ogImage: `${SITE_URL}/og/faq.jpg`,
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/kontakt',
    type: 'topic',
    sectionId: 'contact',
    h1: 'Kontakt — Kurcz.pl',
    breadcrumbLabel: 'Kontakt',
    title: 'Kontakt — Kurcz.pl',
    description: 'Skontaktuj się z zespołem Kurcz.pl. Masz pytania o kurcze mięśniowe? Napisz do nas — chętnie pomożemy.',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 0.6,
    changefreq: 'yearly',
  },
];

export const staticRoutes = [
  {
    path: '/o-nas',
    type: 'static',
    h1: 'O nas — Kurcz.pl',
    breadcrumbLabel: 'O nas',
    title: 'O nas — Kurcz.pl',
    description: 'Poznaj misję Kurcz.pl — portalu edukacyjnego o kurczach mięśniowych. Rzetelne informacje oparte na wiedzy medycznej.',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    path: '/regulamin',
    type: 'static',
    h1: 'Regulamin serwisu Kurcz.pl',
    breadcrumbLabel: 'Regulamin',
    title: 'Regulamin — Kurcz.pl',
    description: 'Regulamin korzystania z serwisu Kurcz.pl — zasady użytkowania, odpowiedzialność i prawa użytkowników.',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    path: '/polityka-prywatnosci',
    type: 'static',
    h1: 'Polityka prywatności — Kurcz.pl',
    breadcrumbLabel: 'Polityka prywatności',
    title: 'Polityka prywatności — Kurcz.pl',
    description: 'Polityka prywatności Kurcz.pl — informacje o przetwarzaniu danych osobowych, plikach cookies i analityce.',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
  },
  {
    path: '/disclaimer-medyczny',
    type: 'static',
    h1: 'Disclaimer medyczny — Kurcz.pl',
    breadcrumbLabel: 'Disclaimer medyczny',
    title: 'Disclaimer medyczny — Kurcz.pl',
    description: 'Disclaimer medyczny Kurcz.pl — informacje edukacyjne nie zastępują porady lekarskiej. Ważne zastrzeżenia YMYL.',
    ogImage: DEFAULT_OG_IMAGE,
    priority: 0.4,
    changefreq: 'yearly',
  },
];

export const routes = [...topicRoutes, ...landingRoutes, ...staticRoutes];

/** @deprecated use DEFAULT_OG_IMAGE */
export const OG_IMAGE = DEFAULT_OG_IMAGE;

export function getRouteByPath(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return routes.find((route) => route.path === normalized) ?? topicRoutes[0];
}

export function getRouteBySectionId(sectionId) {
  return topicRoutes.find((route) => route.sectionId === sectionId) ?? topicRoutes[0];
}

export function getPathForSection(sectionId) {
  return getRouteBySectionId(sectionId).path;
}

export function getOgImage(route) {
  return route.ogImage ?? DEFAULT_OG_IMAGE;
}

export function isStaticRoute(route) {
  return route.type === 'static';
}

export function isLandingRoute(route) {
  return route.type === 'landing';
}

export function isStandaloneRoute(route) {
  return route.type === 'static' || route.type === 'landing';
}

export const navItems = [
  { id: 'home', path: '/', label: 'Strona główna', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', priority: 1 },
  { id: 'intro', path: '/kurcze-miesniowe', label: 'Informacje', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', priority: 1 },
  { id: 'treatment', path: '/pierwsza-pomoc', label: 'Pierwsza pomoc', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', priority: 1 },
  { id: 'prevention', path: '/profilaktyka', label: 'Profilaktyka', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', priority: 1 },
  { id: 'comparison', path: '/kurcz-vs-skurcz', label: 'Kurcz vs. skurcz', icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6', priority: 2 },
  { id: 'wibroakustyka', path: '/wibroakustyka', label: 'Wibroakustyka', icon: 'M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z', priority: 2 },
  { id: 'yoga', path: '/joga-a-kurcze', label: 'Joga', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', priority: 2 },
  { id: 'faq', path: '/faq', label: 'FAQ', icon: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z', priority: 2 },
  { id: 'contact', path: '/kontakt', label: 'Kontakt', icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z', priority: 1 },
];

export const footerLegalLinks = [
  { path: '/o-nas', label: 'O nas' },
  { path: '/kontakt', label: 'Kontakt' },
  { path: '/regulamin', label: 'Regulamin' },
  { path: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { path: '/disclaimer-medyczny', label: 'Disclaimer medyczny' },
  { path: '/faq', label: 'FAQ' },
];
