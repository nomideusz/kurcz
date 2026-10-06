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
  // Plates are optimised to webp at build time (sharp), so pages stay plain static files.
  adapter: netlify({ imageCDN: false }),
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
  // Self-hosted, subset faces (Latin + Polish). Cabin is the one humanist sans of the
  // classroom wall chart: headings and rail lettering bold and condensed on its width axis,
  // reading text at normal width, with a Verdana fallback.
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Cabin',
        cssVariable: '--font-sans-src',
        weights: ['400 700'],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Verdana', 'sans-serif'],
        options: { experimental: { variableAxis: { wdth: [['75', '100']] } } },
        // Astro's generated metric fallback for this face comes out at size-adjust 37%,
        // which would shrink text during swap; plain Verdana is the safer stand-in.
        optimizedFallbacks: false,
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
