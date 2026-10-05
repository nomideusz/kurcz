// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import { absoluteLocaleUrl, toLogicalPath } from './src/i18n/paths.js';

const SITE = 'https://kurcz.pl';

function logicalPathFromSitemapUrl(urlString) {
  const pathname = new URL(urlString).pathname;
  const bare =
    pathname === '/en' || pathname === '/en/'
      ? '/'
      : pathname.startsWith('/en/')
        ? pathname.slice(3).replace(/\/$/, '') || '/'
        : pathname.replace(/\/$/, '') || '/';
  return toLogicalPath(bare);
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Netlify serves directory pages with trailing slashes. Generate the same URL
  // form in HTML, redirects, hreflang, and the sitemap.
  trailingSlash: 'always',
  // Static-first: every page is prerendered. The Netlify adapter exists only so the
  // contact endpoint (src/pages/api/contact.ts, prerender = false) runs as a function.
  output: 'static',
  adapter: netlify(),
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // EN uses different slugs than PL, so we build hreflang pairs ourselves.
      serialize(item) {
        const logical = logicalPathFromSitemapUrl(item.url);
        item.links = [
          { lang: 'pl', url: absoluteLocaleUrl(SITE, logical, 'pl') },
          { lang: 'en', url: absoluteLocaleUrl(SITE, logical, 'en') },
          { lang: 'x-default', url: absoluteLocaleUrl(SITE, logical, 'pl') },
        ];
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    svelte(),
  ],
  // Self-hosted, subset faces (Latin + Polish). Anybody, set wide, is the label lettering
  // (its width axis comes only through the Google provider); Atkinson Hyperlegible Next
  // (Braille Institute) is the reading face, chosen for low-vision and senior readers.
  // Astro emits metric-matched fallbacks → ~0 CLS.
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Anybody',
        cssVariable: '--font-head-src',
        weights: ['600 900'],
        styles: ['normal'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Verdana', 'sans-serif'],
        options: { experimental: { variableAxis: { wdth: [['100', '140']] } } },
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Atkinson Hyperlegible Next',
        cssVariable: '--font-body-src',
        weights: [400, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Verdana', 'sans-serif'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
