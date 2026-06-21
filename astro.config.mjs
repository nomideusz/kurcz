// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurcz.pl',
  // Canonical URLs have no trailing slash — keep the sitemap consistent.
  trailingSlash: 'never',
  // Static-first: every page is prerendered. The Node adapter exists only so the
  // contact endpoint (src/pages/api/contact.ts, prerender = false) can run on-demand.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
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
