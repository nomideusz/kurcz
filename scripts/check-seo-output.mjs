import { readFileSync } from 'node:fs';
import { landingPages, getLandingPage } from '../src/content/landing-pages.js';
import { getStaticPage } from '../src/content/static-pages.js';
import { getLocalizedRoute } from '../src/i18n/content.ts';
import { toLocalePath, toLogicalPath, normalizePath } from '../src/i18n/paths.js';
import { getFaqItems } from '../src/seo/faq-data.js';
import { getTopicFaq } from '../src/seo/topic-faq.js';
import { SITE_URL, routes, staticRoutes } from '../src/seo/routes.js';

function localizeHrefForCheck(logicalPath, locale) {
  const path = normalizePath(logicalPath);
  const localized = toLocalePath(path, locale);
  if (locale === 'en') {
    return localized === '/' ? '/en/' : `/en${localized}/`;
  }
  return localized === '/' ? '/' : `${localized}/`;
}

const DIST = new URL('../dist/', import.meta.url);
const errors = [];
const expectedMetadata = new Map();

function readOutput(path) {
  return readFileSync(new URL(path, DIST), 'utf8');
}

function outputPathFor(pathname) {
  return pathname === '/' ? 'index.html' : `${pathname.replace(/^\/|\/$/g, '')}/index.html`;
}

function decodeHtml(value) {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function match(html, pattern, label, outputPath) {
  const result = html.match(pattern)?.[1];
  if (!result) {
    errors.push(`${outputPath}: missing ${label}`);
  }
  return result ?? '';
}

function canonicalUrl(routePath, locale) {
  const logical = toLogicalPath(routePath);
  return `${SITE_URL}${localizeHrefForCheck(logical, locale)}`;
}

function logicalPathFromLoc(loc) {
  const pathname = new URL(loc).pathname;
  const bare = pathname.startsWith('/en/')
    ? pathname.replace(/^\/en(?=\/)/, '').replace(/\/$/, '') || '/'
    : pathname.replace(/\/$/, '') || '/';
  return toLogicalPath(bare);
}

function addExpectedMetadata(routePath, locale, expected) {
  expectedMetadata.set(canonicalUrl(routePath, locale), expected);
}

function checkPage(loc) {
  const url = new URL(loc);
  const outputPath = outputPathFor(url.pathname);
  const html = readOutput(outputPath);
  const locale = url.pathname.startsWith('/en/') || url.pathname === '/en/' ? 'en' : 'pl';
  const routePath = logicalPathFromLoc(loc);
  const expected = expectedMetadata.get(loc);

  const htmlLang = match(html, /<html[^>]+lang="([^"]+)"/, 'html lang', outputPath);
  const title = decodeHtml(match(html, /<title>(.*?)<\/title>/s, 'title', outputPath));
  const h1 = decodeHtml(match(html, /<h1[^>]*>(.*?)<\/h1>/s, 'h1', outputPath));
  const canonicalHref = match(
    html,
    /<link rel="canonical" href="([^"]+)"/,
    'canonical',
    outputPath,
  );

  if (htmlLang !== locale) {
    errors.push(`${outputPath}: expected lang=${locale}, got ${htmlLang}`);
  }
  if (!title) {
    errors.push(`${outputPath}: empty title`);
  } else if (expected && title !== expected.title) {
    errors.push(`${outputPath}: unexpected title "${title}"`);
  }
  if (!h1) {
    errors.push(`${outputPath}: empty h1`);
  } else if (expected && h1 !== expected.h1) {
    errors.push(`${outputPath}: unexpected h1 "${h1}"`);
  }
  if (canonicalHref !== loc) {
    errors.push(`${outputPath}: expected canonical ${loc}, got ${canonicalHref}`);
  }
  if (!/<meta name="robots" content="index, follow">/.test(html)) {
    errors.push(`${outputPath}: missing index, follow`);
  }

  const ogUrl = match(html, /<meta property="og:url" content="([^"]+)"/, 'og:url', outputPath);
  if (ogUrl !== loc) {
    errors.push(`${outputPath}: Open Graph URL differs from canonical`);
  }
  const expectedOgLocale = locale === 'en' ? 'en_US' : 'pl_PL';
  const alternateOgLocale = locale === 'en' ? 'pl_PL' : 'en_US';
  if (!html.includes(`<meta property="og:locale" content="${expectedOgLocale}">`)) {
    errors.push(`${outputPath}: incorrect Open Graph locale`);
  }
  if (!html.includes(`<meta property="og:locale:alternate" content="${alternateOgLocale}">`)) {
    errors.push(`${outputPath}: incorrect alternate Open Graph locale`);
  }

  const alternateLinks = [
    ...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g),
  ];
  const alternateLanguages = new Set(alternateLinks.map((link) => link[1]));
  const expectedAlternates = new Map([
    ['pl', canonicalUrl(routePath, 'pl')],
    ['en', canonicalUrl(routePath, 'en')],
    ['x-default', canonicalUrl(routePath, 'pl')],
  ]);
  for (const requiredLanguage of ['pl', 'en', 'x-default']) {
    if (!alternateLanguages.has(requiredLanguage)) {
      errors.push(`${outputPath}: missing ${requiredLanguage} hreflang`);
    }
  }
  for (const [, hreflang, href] of alternateLinks) {
    if (!new URL(href).pathname.endsWith('/')) {
      errors.push(`${outputPath}: hreflang URL lacks trailing slash: ${href}`);
    }
    if (expectedAlternates.get(hreflang) !== href) {
      errors.push(`${outputPath}: incorrect ${hreflang} hreflang target: ${href}`);
    }
  }
  for (const anchor of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const href = anchor[1];
    if (
      href.startsWith('/') &&
      !href.startsWith('//') &&
      !new URL(href, SITE_URL).pathname.endsWith('/') &&
      !/\.[^/]+$/.test(new URL(href, SITE_URL).pathname)
    ) {
      errors.push(`${outputPath}: internal link lacks trailing slash: ${href}`);
    }
  }

  const rawSchema = match(
    html,
    /<script type="application\/ld\+json">(.+?)<\/script>/s,
    'JSON-LD',
    outputPath,
  );
  if (!rawSchema) return;

  let schema;
  try {
    schema = JSON.parse(rawSchema);
  } catch {
    errors.push(`${outputPath}: invalid JSON-LD`);
    return;
  }

  const graph = schema['@graph'];
  if (!Array.isArray(graph)) {
    errors.push(`${outputPath}: JSON-LD has no @graph`);
    return;
  }

  const websiteSchema = graph.find((item) => item['@type'] === 'WebSite');
  const expectedLanguage = locale === 'en' ? 'en-US' : 'pl-PL';
  if (websiteSchema?.inLanguage !== expectedLanguage) {
    errors.push(`${outputPath}: website schema language is ${websiteSchema?.inLanguage}`);
  }

  const pageSchema = graph.find(
    (item) => item['@type'] === 'MedicalWebPage' || item['@type'] === 'WebPage',
  );
  if (!pageSchema) {
    errors.push(`${outputPath}: missing page schema`);
    return;
  }
  if (pageSchema.url !== loc) {
    errors.push(`${outputPath}: schema URL ${pageSchema.url} differs from canonical`);
  }
  if (pageSchema.inLanguage !== expectedLanguage) {
    errors.push(`${outputPath}: schema language is ${pageSchema.inLanguage}`);
  }
  if (pageSchema.isPartOf?.url !== canonicalUrl('/', locale)) {
    errors.push(`${outputPath}: schema isPartOf URL is not localized`);
  }

  if (routePath !== '/') {
    const breadcrumb = graph.find((item) => item['@type'] === 'BreadcrumbList');
    const currentBreadcrumb = breadcrumb?.itemListElement?.at(-1);
    if (currentBreadcrumb?.item !== loc) {
      errors.push(`${outputPath}: breadcrumb URL differs from canonical`);
    }
  }

  const route = routes.find((candidate) => candidate.path === routePath);
  const expectedFaq =
    routePath === '/'
      ? getFaqItems(locale).slice(0, 4)
      : routePath === '/faq'
      ? getFaqItems(locale)
      : route?.type === 'landing'
        ? (getLandingPage(routePath, locale)?.faq ?? [])
        : (getTopicFaq(routePath, locale) ?? []);
  if (expectedFaq.length) {
    const faqSchema = graph.find((item) => item['@type'] === 'FAQPage');
    const actualQuestions = faqSchema?.mainEntity?.map((item) => item.name);
    const expectedQuestions = expectedFaq.map((item) => item.question);
    if (JSON.stringify(actualQuestions) !== JSON.stringify(expectedQuestions)) {
      errors.push(`${outputPath}: FAQ schema does not match localized page content`);
    }
  }
}

for (const route of routes) {
  addExpectedMetadata(route.path, 'pl', route);
  addExpectedMetadata(route.path, 'en', getLocalizedRoute(route, 'en'));
}
for (const page of landingPages) {
  addExpectedMetadata(page.path, 'pl', page);
  addExpectedMetadata(page.path, 'en', getLandingPage(page.path, 'en'));
}
for (const route of staticRoutes) {
  addExpectedMetadata(route.path, 'pl', getStaticPage(route.path, 'pl'));
  addExpectedMetadata(route.path, 'en', getStaticPage(route.path, 'en'));
}

const errorPage = readOutput('404.html');
if (!/<meta name="robots" content="noindex, follow">/.test(errorPage)) {
  errors.push('404.html: missing noindex, follow');
}
if (/<link rel="canonical"/.test(errorPage)) {
  errors.push('404.html: must not declare a canonical URL');
}
if (/<link rel="alternate"|application\/ld\+json/.test(errorPage)) {
  errors.push('404.html: must not declare hreflang or structured data');
}
if (/<meta property="og:url"/.test(errorPage)) {
  errors.push('404.html: must not declare an Open Graph URL');
}

const robots = readOutput('robots.txt');
if (!robots.includes('Disallow: /api/')) {
  errors.push('robots.txt: API route is not disallowed');
}
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap-index.xml`)) {
  errors.push('robots.txt: sitemap index is missing');
}

const sitemap = readOutput('sitemap-0.xml');
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (matchResult) => matchResult[1],
);
const sitemapUrls = [
  ...sitemapLocs,
  ...[...sitemap.matchAll(/<xhtml:link[^>]+href="([^"]+)"/g)].map((matchResult) => matchResult[1]),
];
for (const url of sitemapUrls) {
  if (url.includes('/404')) {
    errors.push('sitemap: contains /404');
  }
  if (!new URL(url).pathname.endsWith('/')) {
    errors.push(`sitemap: URL lacks trailing slash: ${url}`);
  }
}
for (const entry of sitemap.matchAll(/<url>(.*?)<\/url>/gs)) {
  const loc = entry[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!loc) continue;

  const routePath = logicalPathFromLoc(loc);
  const alternateEntries = [...entry[1].matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
  const alternateMap = new Map(alternateEntries.map((link) => [link[1], link[2]]));
  const xDefaultCount = alternateEntries.filter((link) => link[1] === 'x-default').length;
  if (xDefaultCount !== 1) {
    errors.push(`sitemap: ${loc} has ${xDefaultCount} x-default links (expected 1)`);
  }
  const expectedAlternates = new Map([
    ['pl', canonicalUrl(routePath, 'pl')],
    ['en', canonicalUrl(routePath, 'en')],
    ['x-default', canonicalUrl(routePath, 'pl')],
  ]);
  for (const [language, expectedUrl] of expectedAlternates) {
    if (alternateMap.get(language) !== expectedUrl) {
      errors.push(`sitemap: ${loc} has incorrect ${language} alternate (got ${alternateMap.get(language)}, expected ${expectedUrl})`);
    }
  }
}

for (const loc of sitemapLocs) {
  checkPage(loc);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `SEO output verified: ${sitemapLocs.length} sitemap pages, localized metadata/schema, and 404 policy.`,
);
