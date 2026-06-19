import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { getLandingPage } from '../src/content/landing-pages.js';
import { getStaticPage } from '../src/content/static-pages.js';
import { routes, SITE_URL, getOgImage } from '../src/seo/routes.js';
import { buildPageSchema, schemaToJsonLd } from '../src/seo/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const today = new Date().toISOString().slice(0, 10);

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function buildStaticNoscript(route) {
  const page = getStaticPage(route.path);
  if (!page) return '';

  const sections = page.sections
    .map(
      (section) =>
        `<section><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.body)}</p></section>`
    )
    .join('');

  return `<noscript id="static-prerender"><article><h1>${escapeHtml(page.h1)}</h1>${sections}</article></noscript>`;
}

function buildLandingNoscript(route) {
  const page = getLandingPage(route.path);
  if (!page) return '';

  const sections = page.sections
    .map((section) => {
      const bullets = section.bullets?.length
        ? `<ul>${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
        : '';
      return `<section><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.body)}</p>${bullets}</section>`;
    })
    .join('');

  const faq = page.faq?.length
    ? `<section><h2>Najczęstsze pytania</h2>${page.faq.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}</section>`
    : '';

  return `<noscript id="landing-prerender"><article><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.intro)}</p>${sections}${faq}</article></noscript>`;
}

function customizeHtml(template, route) {
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const ogTitle = route.ogTitle ?? route.title;
  const ogImage = getOgImage(route);
  const schemaBlock = `<script type="application/ld+json" id="kurcz-schema">${schemaToJsonLd(buildPageSchema(route))}</script>`;

  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(route.description)}">`
  );

  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonicalUrl}">`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}">\n</head>`);
  }

  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(ogTitle)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(route.description)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonicalUrl}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${ogImage}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${route.path === '/' ? 'website' : 'article'}">`);

  if (html.includes('name="twitter:image"')) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${ogImage}">`);
  }

  if (html.includes('id="kurcz-schema"')) {
    html = html.replace(/<script type="application\/ld\+json" id="kurcz-schema">[\s\S]*?<\/script>/, schemaBlock);
  } else {
    html = html.replace('</head>', `    ${schemaBlock}\n</head>`);
  }

  const routeScript = `<script>window.__KURCZ_ROUTE__="${route.path}";</script>`;
  if (!html.includes('__KURCZ_ROUTE__')) {
    html = html.replace('<body>', `<body>\n    ${routeScript}`);
  } else {
    html = html.replace(/window\.__KURCZ_ROUTE__="[^"]*"/, `window.__KURCZ_ROUTE__="${route.path}"`);
  }

  if (route.type === 'static') {
    const noscript = buildStaticNoscript(route);
    if (noscript && !html.includes('id="static-prerender"')) {
      html = html.replace('<div id="app">', `${noscript}\n    <div id="app">`);
    }
  }

  if (route.type === 'landing') {
    const noscript = buildLandingNoscript(route);
    if (noscript && !html.includes('id="landing-prerender"')) {
      html = html.replace('<div id="app">', `${noscript}\n    <div id="app">`);
    }
  }

  return html;
}

function writeRoutePage(template, route) {
  const html = customizeHtml(template, route);
  if (route.path === '/') {
    writeFileSync(join(distDir, 'index.html'), html, 'utf8');
    return;
  }

  const dir = join(distDir, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
}

function buildSitemap(urls) {
  const body = urls
    .map(
      ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

const template = readFileSync(join(distDir, 'index.html'), 'utf8');

for (const route of routes) {
  writeRoutePage(template, route);
}

const pageUrls = routes.map((route) => ({
  loc: `${SITE_URL}${route.path === '/' ? '/' : route.path}`,
  priority: route.priority,
  changefreq: route.changefreq,
}));

writeFileSync(join(distDir, 'sitemap-pages.xml'), buildSitemap(pageUrls), 'utf8');
writeFileSync(
  join(distDir, 'sitemap_index.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`,
  'utf8'
);

writeFileSync(
  join(distDir, 'robots.txt'),
  `User-agent: *
Allow: /

Disallow: /debug.html
Disallow: /assets/

Sitemap: ${SITE_URL}/sitemap_index.xml
`,
  'utf8'
);

console.log(`SEO post-build: ${routes.length} routes (w tym strony statyczne), sitemap_index.xml generated.`);
