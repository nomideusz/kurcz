// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurcz.pl',
  // Canonical URLs have no trailing slash — keep the sitemap consistent.
  trailingSlash: 'never',
  // Static-first: every page is prerendered. The Netlify adapter exists only so the
  // contact endpoint (src/pages/api/contact.ts, prerender = false) runs as a function.
  output: 'static',
  adapter: netlify(),
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
