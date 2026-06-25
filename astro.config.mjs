// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  // Self-host Source Serif 4, subset to glyphs we actually use (Latin + Polish, weight
  // 400 only). Drops ~222 KB of variable font to a few KB so the H1 (LCP) no longer
  // waits on the font; Astro also emits metric-matched fallbacks → ~0 CLS.
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Source Serif 4',
        cssVariable: '--font-serif-src',
        weights: [400],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
