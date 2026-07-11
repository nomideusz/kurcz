# Kurcz.pl

Statyczna strona edukacyjna o kurczach mięśniowych — przyczyny, pierwsza pomoc i profilaktyka.

Zbudowana w [Astro](https://astro.build) (statyczny HTML, zero JS na stronach treściowych) dla maksymalnej szybkości i indeksowalności.

## Stack

- **Astro 5** — statyczny generator stron (SSG)
- **Tailwind CSS v4** — style (`@tailwindcss/vite`, motyw w `src/styles/global.css`)
- **Inter** — self-hosted (`@fontsource-variable/inter`)
- **@astrojs/sitemap** — sitemap
- **GTM + Consent Mode v2 + Umami** — analityka (gated zgodą na cookies)
- **EmailJS** — formularz kontaktowy

## Rozwój

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/ + automatyczna kontrola SEO
npm run check:seo  # sprawdza canonical, hreflang, JSON-LD i sitemapę w dist/
npm run preview
```

## Skrypty pomocnicze

```bash
node scripts/generate-og.mjs      # generuje karty Open Graph (public/og/*.jpg)
node scripts/generate-brand.mjs   # generuje favicony / ikony / logo z marki
```

## Struktura

- `src/pages/` — trasy (home, `[slug]` dla stron tematycznych/poradników/statycznych, faq, kontakt, poradniki, 404)
- `src/components/` — komponenty (Header, Footer, Logo, sekcje, FAQ, formularz)
- `src/layouts/Layout.astro` — szkielet HTML + SEO (meta, canonical, OG, JSON-LD)
- `src/content/` + `src/seo/` — dane treści i SEO (trasy, schema, FAQ)

## Wdrożenie

Produkcja działa na Netlify. Konfiguracja w `netlify.toml` uruchamia `npm run build`,
który po kompilacji automatycznie sprawdza SEO wszystkich stron z mapy witryny.
