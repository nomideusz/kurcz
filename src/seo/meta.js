import { getOgImage } from './routes.js';
import { buildPageSchema, schemaToJsonLd } from './schema.js';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = data;
}

export function applyRouteMeta(route) {
  const canonicalUrl = `${route.path === '/' ? 'https://kurcz.pl' : `https://kurcz.pl${route.path}`}`;
  const ogTitle = route.ogTitle ?? route.title;
  const ogImage = getOgImage(route);

  document.title = route.title;
  upsertMeta('name', 'description', route.description);
  upsertLink('canonical', canonicalUrl);

  upsertMeta('property', 'og:title', ogTitle);
  upsertMeta('property', 'og:description', route.description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:image', ogImage);
  upsertMeta('property', 'og:type', route.path === '/' ? 'website' : 'article');
  upsertMeta('property', 'og:locale', 'pl_PL');

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', ogTitle);
  upsertMeta('name', 'twitter:description', route.description);
  upsertMeta('name', 'twitter:image', ogImage);

  upsertJsonLd('kurcz-schema', schemaToJsonLd(buildPageSchema(route)));
}
