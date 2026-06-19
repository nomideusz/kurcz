# TECHNICZNE ZADANIE SEO DLA KURCZ.PL

## Cel

Przygotować portal edukacyjny **kurcz.pl** pod poprawną indeksację Google, rozwój SEO treści zdrowotnych (YMYL), bloga, FAQ oraz przyszły ruch z AI Search.

Kurcz.pl to serwis informacyjny o kurczach mięśniowych — nie sklep internetowy. Dokument opisuje wymagania techniczne SEO dostosowane do architektury treści medyczno-edukacyjnych.

---

## Stan obecny (audyt kodu — czerwiec 2026)

| Element | Status | Uwagi |
|---------|--------|-------|
| Title, meta description | ✅ | Per-strona (prerender + router) |
| Meta keywords | ✅ | Obecne, niski priorytet dla Google |
| Open Graph | ✅ | Per-strona w prerenderze |
| robots.txt | ✅ | Bez `Crawl-delay`, wskazuje `sitemap_index.xml` |
| sitemap_index.xml | ✅ | Automatyczny przy buildzie — **27 tras** w `sitemap-pages.xml` |
| Przyjazne URL | ✅ | 9 tematów + 13 landing pages + hub `/poradniki` + 4 statyczne |
| Canonical | ✅ | W `<head>` każdej strony |
| Schema.org | ✅ | Organization, WebSite, MedicalWebPage, WebPage, FAQPage, BreadcrumbList |
| GTM / GA4 | ✅ | GTM-P7N9JKMT; GA4 `G-TXFQKNHYQ2` — tag w panelu GTM + Consent Mode v2 |
| Umami Analytics | ✅ | `umami.zaur.app`, ładowany po zgodzie cookies; CWV + zdarzenia niestandardowe |
| Cookie consent | ✅ | Banner + `localStorage`; GA/Umami tylko po akceptacji |
| Breadcrumbs | ✅ | Widoczne + `BreadcrumbList` schema (tematy, landingi, statyczne) |
| FAQ (treść) | ✅ | `/faq` (7 pytań), FAQ tematyczne, FAQ na landing pages |
| FAQ (schema FAQPage) | ✅ | `/faq`, landing pages, wybrane tematy |
| Landing pages SEO | ✅ | 13 stron w `src/content/landing-pages.js` |
| Hub poradników | ✅ | `/poradniki` — indeks 13 poradników w 3 kategoriach |
| Blog | ❌ | Etap 3 — planowany `/blog/[slug]` |
| Strony statyczne | ✅ | `/o-nas`, `/regulamin`, `/polityka-prywatnosci`, `/disclaimer-medyczny` |
| Obrazy WebP + alt | ⚠️ Częściowo | Lazy loading i alt na kluczowych obrazach; brak plików OG w `/public/og/` |
| PWA / Service Worker | ✅ | VitePWA w `vite.config.js` |
| noindex debug.html | ✅ | meta robots noindex |
| Przekierowanie legacy sitemap | ✅ | nginx: `/sitemap.xml` → 301 → `/sitemap_index.xml` |

---

## STRUKTURA URL — TEMATY GŁÓWNE

**Wdrożono.** Wcześniej cała treść działała jako jedna strona z kotwicami (`/#section`). Obecnie każdy temat ma własny URL i prerenderowany HTML.

Fragmenty URL (`#`) nie są traktowane przez Google jako osobne strony — legacy hashe przekierowywane są client-side (`src/js/router.js` → `hashToPath`).

### Docelowa struktura głównych tematów

| Obecna kotwica | Docelowy URL | H1 (propozycja) |
|----------------|--------------|-----------------|
| `#home` | `/` | Zrozumieć kurcze mięśniowe |
| `#intro` | `/kurcze-miesniowe` | Kurcze mięśniowe — przyczyny, objawy i leczenie |
| `#treatment` | `/pierwsza-pomoc` | Natychmiastowa pomoc przy kurczach mięśniowych |
| `#prevention` | `/profilaktyka` | Skuteczna profilaktyka kurczy mięśniowych |
| `#comparison` | `/kurcz-vs-skurcz` | Kurcz a skurcz — kluczowe różnice |
| `#wibroakustyka` | `/wibroakustyka` | Wibroakustyka w walce z kurczami |
| `#yoga` | `/joga-a-kurcze` | Joga jako skuteczna metoda na kurcze mięśniowe |
| `#faq` | `/faq` | Najczęściej zadawane pytania o kurcze mięśniowe |
| `#contact` | `/kontakt` | Kontakt — Kurcz.pl |

---

## PODSTRONY TEMATYCZNE (landing pages SEO)

**Wdrożono 13 landing pages** (`src/content/landing-pages.js`). Indeks: `/poradniki`.

### Zaimplementowane

| URL | Status |
|-----|--------|
| `/kurcze-lydek` | ✅ |
| `/kurcze-stop` | ✅ |
| `/kurcze-nocne` | ✅ |
| `/kurcze-u-sportowcow` | ✅ |
| `/kurcze-u-kobiet-w-ciazy` | ✅ |
| `/kurcze-u-osob-starszych` | ✅ |
| `/kurcze-u-diabetykow` | ✅ |
| `/niedobor-magnezu` | ✅ |
| `/kurcze-a-odwodnienie` | ✅ |
| `/kurcze-a-leki` | ✅ |
| `/rozciaganie-przy-kurczach` | ✅ |
| `/masaz-przy-kurczach` | ✅ |
| `/suplementacja-magnezem` | ✅ |

### Planowane (nie wdrożone)

```
/kurcze-ud
/niedobor-potasu
/kurcze-a-stres
/elektrolity-przy-kurczach
```

Każda landing page ma: unikalną treść, FAQ, linki powiązane, breadcrumbs (`Strona główna > Poradniki > …`), schema `MedicalWebPage` + `FAQPage`, prerender `<noscript>`.

---

## PRZEKIEROWANIA 301

### Hashe legacy (client-side)

Wdrożono w `src/js/router.js` — fragment URL nie trafia do serwera, więc nginx nie może przekierować `/#section`. Przekierowanie odbywa się po załadowaniu strony (`history.replaceState`).

```
https://kurcz.pl/#intro        → https://kurcz.pl/kurcze-miesniowe
https://kurcz.pl/#treatment    → https://kurcz.pl/pierwsza-pomoc
https://kurcz.pl/#prevention   → https://kurcz.pl/profilaktyka
https://kurcz.pl/#comparison   → https://kurcz.pl/kurcz-vs-skurcz
https://kurcz.pl/#wibroakustyka → https://kurcz.pl/wibroakustyka
https://kurcz.pl/#yoga         → https://kurcz.pl/joga-a-kurcze
https://kurcz.pl/#faq          → https://kurcz.pl/faq
https://kurcz.pl/#contact      → https://kurcz.pl/kontakt
```

### Legacy sitemap (nginx)

Wdrożono w `nginx.conf`:

```
/sitemap.xml  →  301  →  /sitemap_index.xml
```

Rekomendacja: w GSC zgłosić `https://kurcz.pl/sitemap_index.xml` i usunąć stary wpis `sitemap.xml` (opcjonalnie).

---

## SITEMAP

**Wdrożono.** Skrypt `scripts/post-build-seo.js` generuje sitemap przy `pnpm build`.

### Obecna struktura (27 URL)

```
/sitemap_index.xml
└── /sitemap-pages.xml   — wszystkie indeksowane trasy (tematy, landingi, /poradniki, statyczne)
```

Zawartość `sitemap-pages.xml`:

- strona główna + 8 tematów głównych (w tym `/kontakt`, `/faq`)
- 13 landing pages SEO
- hub `/poradniki`
- 4 strony statyczne (`/o-nas`, `/regulamin`, `/polityka-prywatnosci`, `/disclaimer-medyczny`)

### Docelowa struktura (gdy powstanie blog)

```
/sitemap_index.xml
├── /sitemap-pages.xml       — strona główna, kontakt, o nas, regulamin itd.
├── /sitemap-topics.xml      — tematy główne i landing pages (opcjonalny podział)
├── /sitemap-blog.xml        — wpisy blogowe
└── /sitemap-guides.xml      — poradniki (obecnie `/poradniki` w pages)
```

---

## ROBOTS.TXT

Obecny `robots.txt` jest poprawny (brak `Crawl-delay`).

### Docelowy robots.txt

```
User-agent: *
Allow: /

Disallow: /debug.html
Disallow: /assets/
Disallow: /api/

Sitemap: https://kurcz.pl/sitemap_index.xml
```

---

## SEO DLA STRON TEMATYCZNYCH

Każda strona tematyczna (główna i podstrona) musi mieć możliwość ręcznego ustawienia:

- SEO Title
- Meta Description
- H1 (jeden na stronę)
- opis SEO nad lub pod treścią główną
- FAQ (opcjonalnie, per temat)
- canonical URL
- obraz wyróżniający
- alt dla obrazu
- disclaimer medyczny (YMYL)

### Przykład dla strony tematycznej

**URL:** `/kurcze-lydek`

**H1:** Kurcze łydek — przyczyny, pierwsza pomoc i profilaktyka

**SEO Title:** Kurcze łydek — jak szybko ulżyć bólowi? | Kurcz.pl

**Meta Description:** Bolesne kurcze łydek w nocy lub po treningu? Poznaj skuteczne techniki rozciągania, pierwszą pomoc i sposoby zapobiegania nawrotom kurczy łydek.

---

## SEO DLA ARTYKUŁÓW BLOGOWYCH

Każdy artykuł musi mieć:

- unikalny URL (slug)
- unikalny SEO Title
- unikalny Meta Description
- jeden H1
- treść artykułu z nagłówkami H2–H3
- zdjęcie główne z atrybutem alt
- canonical URL
- breadcrumbs
- schema.org `Article` lub `BlogPosting`
- disclaimer medyczny
- datę publikacji i aktualizacji
- informację o autorze / recenzji merytorycznej (E-E-A-T)

### Przykłady URL

```
/blog/kurcze-lydek-w-nocy-co-robic
/blog/czy-magnez-pomaga-na-kurcze
/blog/kiedy-kurcze-wymagaja-wizyty-u-lekarza
/blog/kurcz-vs-skurcz-roznica
/blog/wibroakustyka-a-kurcze-miesniowe
```

---

## SCHEMA.ORG

**Wdrożono** JSON-LD generowany per strona (`src/seo/schema.js`, wstrzykiwany w prerenderze).

### Strona główna

- `Organization` ✅
- `WebSite` ✅
- `MedicalWebPage` (opcjonalnie) — na podstronach tematycznych

### Strony tematyczne i landing pages

- `BreadcrumbList` ✅
- `MedicalWebPage` ✅
- `FAQPage` ✅ (gdy strona ma FAQ)

### Hub `/poradniki` i strony statyczne

- `WebPage` ✅
- `BreadcrumbList` ✅

### Do wdrożenia (blog)

- `Article` / `BlogPosting`
- `author` z danymi autora
- `ContactPage` (opcjonalnie dla `/kontakt`)

### Przykład FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Jaka jest różnica między kurczem a skurczem mięśni?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "..."
    }
  }]
}
```

---

## BREADCRUMBS

**Wdrożono** (`src/components/Breadcrumbs.js`, landing pages, strony statyczne).

### Przykłady

```
Strona główna > Kurcze mięśniowe
Strona główna > Poradniki > Kurcze łydek
Strona główna > Poradniki
Strona główna > O nas
```

Schema.org `BreadcrumbList` generowany w `buildPageSchema()`.

---

## CANONICAL

Każda indeksowana strona musi mieć canonical URL.

### Przykład

```html
<link rel="canonical" href="https://kurcz.pl/kurcze-lydek" />
```

Dla wersji z parametrami (np. `?utm_*`) canonical powinien wskazywać czysty URL bez parametrów śledzenia.

---

## FILTRY I PARAMETRY

Jeśli w przyszłości pojawią się filtry (np. w blogu: kategoria, tag, sortowanie):

- canonical do głównej wersji strony
- `noindex` dla kombinacji filtrów bez wartości SEO
- indeksować tylko ręcznie wybrane landing pages

Parametry UTM (`utm_source`, `utm_medium` itd.) — canonical bez parametrów.

---

## BLOG I PORADNIKI

### Hub poradników — wdrożono

```
/poradniki                  — indeks 13 landing pages w 3 kategoriach
```

Pliki: `src/content/poradniki-hub.js`, `src/components/PoradnikiPage.js`.

Kategorie na `/poradniki`:

1. Kurcze według lokalizacji i sytuacji (7 poradników)
2. Przyczyny i czynniki ryzyka (3)
3. Metody ulgi i profilaktyki (3)

Nawigacja: Header → **Więcej → Poradniki**; stopka → kolumna Poradniki + link w menu głównym.

### Blog — planowany (etap 3)

```
/blog
/blog/[slug]
```

Docelowe huby tematyczne pod `/poradniki/[temat]` — opcjonalnie w przyszłości; obecnie landing pages linkują do tematów głównych (`/kurcze-miesniowe`, `/pierwsza-pomoc`, `/profilaktyka`).

---

## FAQ

**Częściowo wdrożono.**

| Lokalizacja | Status |
|-------------|--------|
| Globalne FAQ → `/faq` | ✅ 7 pytań, `FAQPage` schema |
| FAQ na stronach tematycznych | ✅ wybrane tematy (`src/seo/topic-faq.js`) |
| FAQ na landing pages | ✅ per strona w `landing-pages.js` |
| FAQ pod artykułem blogowym | ❌ wymaga bloga |
| Edycja bez rebuildu (CMS/Markdown) | ❌ treść w plikach JS |

Treść FAQ edytowalna w kodzie: `src/seo/faq-data.js`, `src/seo/topic-faq.js`, `src/content/landing-pages.js`.

---

## GOOGLE ANALYTICS 4 I GOOGLE TAG MANAGER

**Wdrożono.**

| Element | Wartość / plik |
|---------|----------------|
| GTM ID | `GTM-P7N9JKMT` (`index.html`) |
| GA4 Measurement ID | `G-TXFQKNHYQ2` (tag w panelu GTM) |
| Consent Mode v2 | Domyślnie `denied`; aktualizacja po akceptacji bannera |
| Cookie banner | `src/components/CookieConsent.js` |
| Konfiguracja | `src/seo/analytics-config.js`, `src/js/consent.js` |

GTM w `<head>` i `<body>`. GA4 podłączany przez GTM z respektowaniem `analytics_storage`.

### Umami Analytics (wdrożono)

| Element | Wartość / plik |
|---------|----------------|
| Host | `https://umami.zaur.app/script.js` |
| Website ID | `eb613710-3de9-4a68-b7cf-baba6fe224cc` |
| Loader | `src/js/umami.js` — tylko po zgodzie cookies |
| Konfiguracja | `data-do-not-track`, `data-performance` (CWV), `data-domains=kurcz.pl,www.kurcz.pl` |

### Zdarzenia niestandardowe (Umami)

| Zdarzenie | Opis |
|-----------|------|
| `cookie_consent` | Akceptacja wszystkich cookies |
| `contact_form_submit` | Wysłanie formularza kontaktowego |
| `contact_form_error` | Błąd walidacji / wysyłki |
| `contact_click` | Kliknięcie telefonu lub e-maila |
| `faq_open` | Rozwinięcie FAQ (faq / topic / landing) |
| `outbound_click` | Link partnerski (footer, sekcje) |
| `related_topic_click` | Link powiązany na landing page |
| `guide_click` | Kliknięcie karty na `/poradniki` |

### Zdarzenia rekomendowane (GA4 przez GTM — do skonfigurowania w panelu)

| Zdarzenie | Opis |
|-----------|------|
| `page_view` | Odsłona strony |
| `scroll` | Scroll depth (25%, 50%, 75%, 100%) |
| `faq_expand` | Rozwinięcie pytania FAQ |
| `contact_form_submit` | Wysłanie formularza kontaktowego |
| `outbound_click` | Kliknięcie linku partnerskiego |

---

## GOOGLE SEARCH CONSOLE

Po wdrożeniu `sitemap_index.xml` dodać sitemap w Google Search Console:

```
https://kurcz.pl/sitemap_index.xml
```

Zweryfikować właściwość domeny (DNS lub plik HTML).

---

## OPEN GRAPH

**Wdrożono per strona** w prerenderze (`scripts/post-build-seo.js`).

- strona główna ✅
- strony tematyczne ✅ (dedykowane ścieżki OG w `src/seo/routes.js`)
- landing pages ✅ (domyślnie `/og-image.jpg`)
- hub `/poradniki` ✅
- strony statyczne ✅
- artykuły blogowe ❌ (etap 3)

### Brakujące pliki graficzne

Ścieżki OG skonfigurowane — wymagane pliki JPG 1200×630 w `/public/og/` (obecnie tylko README).

---

## WYDAJNOŚĆ STRONY (Core Web Vitals)

Stack: Vite + Alpine.js + Tailwind + **prerender wielostronicowy** (`scripts/post-build-seo.js`).

### Wdrożone

- prerender HTML per route (LCP + indeksacja treści)
- preload hero (`hero_square.webp`)
- lazy loading obrazów poniżej foldu
- minifikacja JS/CSS (build Vite)
- Umami `data-performance` — zbieranie CWV od odwiedzających (po zgodzie)

### Do poprawy

- pliki OG w `/public/og/`
- `font-display: swap` dla Google Fonts
- ograniczenie animacji blob na mobile (INP)
- monitoring CWV w Search Console

### Metryki docelowe

| Metryka | Cel |
|---------|-----|
| LCP | < 2,5 s |
| INP | < 200 ms |
| CLS | < 0,1 |

---

## OBRAZY

Każdy obraz powinien mieć:

- poprawną nazwę pliku (słowa kluczowe, bez losowych hashy w nazwie pliku źródłowego)
- atrybut `alt` opisujący treść
- format WebP (z fallbackiem jeśli potrzebny)
- optymalny rozmiar

### Przykłady

**Nazwa pliku:** `kurcz-pl-kurcze-lydek-rozciaganie.webp`

**Alt:** `Rozciąganie mięśnia łydki przy bolesnym kurczu — technika pierwszej pomocy`

Obecnie część obrazów ma alt (Hero, Logo, Wibroakustyka, PartnerSection) — uzupełnić we wszystkich komponentach.

---

## INDEKSACJA

### Powinny trafiać do indeksu

- strona główna
- strony tematyczne i podstrony
- blog i poradniki
- FAQ
- strony statyczne (o nas, kontakt)

### Nie powinny trafiać do indeksu

- `/debug.html`
- wewnętrzne assety (`/assets/`)
- strony z parametrami filtrów (jeśli powstaną)
- wersje draft / podgląd

### Strony systemowe

Upewnić się, że mają `noindex`:

```
/debug.html          → noindex, nofollow
/generate-favicon.html → noindex (jeśli publicznie dostępna)
```

---

## MENU I LINKOWANIE WEWNĘTRZNE

**Wdrożono** — menu oparte na URL (`src/seo/routes.js` → `navItems`).

### Menu główne (Header)

**Priorytet 1 (widoczne):** Strona główna, Informacje, Pierwsza pomoc, Profilaktyka, Kontakt

**Priorytet 2 (dropdown „Więcej”):** Kurcz vs. skurcz, **Poradniki**, Wibroakustyka, Joga, FAQ

### Linkowanie wewnętrzne

- landing pages → `/poradniki`, powiązane tematy, tematy główne
- `/poradniki` → wszystkie 13 poradników + linki do sekcji głównych
- stopka → Poradniki, 6 wyróżnionych poradników, tematy, partnerzy, strony prawne

---

## STOPKA

**Wdrożono.**

- Nawigacja tematów (URL, nie kotwice)
- **Poradniki** — link do `/poradniki` + 6 wyróżnionych poradników
- Informacje prawne: O nas, Kontakt, Regulamin, Polityka prywatności, Disclaimer medyczny, FAQ
- Partnerzy: Wibroakustyka.ai, Kompi.pl, Intertech Poland, Szkoły Jogi
- Disclaimer YMYL w treści stopki

---

## STRONY STATYCZNE

**Wdrożono** (`src/content/static-pages.js`, `src/components/StaticPage.js`).

```
/o-nas                    ✅
/regulamin                ✅
/polityka-prywatnosci     ✅
/disclaimer-medyczny      ✅
/kontakt                  ✅ (strona tematyczna, nie static type)
/faq                      ✅ (strona tematyczna)
```

---

## AI SEO / AI SEARCH

Przygotować stronę technicznie pod rozwój treści eksperckich:

- blog z artykułami opartymi na pytaniach użytkowników
- FAQ z konkretnymi odpowiedziami (format Q&A)
- poradniki tematyczne (huby treści)
- schema.org (FAQPage, Article, MedicalWebPage)
- jasne nagłówki H1–H3
- linkowanie wewnętrzne między tematami
- daty aktualizacji treści
- informacje o autorach / weryfikacji merytorycznej (E-E-A-T)

To będzie potrzebne dla Google AI Overviews, ChatGPT Search, Gemini, Perplexity i Bing Copilot — szczególnie w kategorii zdrowia (YMYL).

### Rekomendowane typy treści pod AI Search

- „Co robić gdy…” (pierwsza pomoc)
- „Kiedy iść do lekarza…”
- „Kurcze vs. …” (porównania)
- „Czy X pomaga na kurcze…”
- „Najczęstsze przyczyny kurczy u …” (grupy docelowe)

---

## ARCHITEKTURA TECHNICZNA

**Wdrożono opcję 1:** prerender/SSG przy buildzie + Vite + Alpine.js.

| Plik | Rola |
|------|------|
| `src/seo/routes.js` | Definicja tras, meta SEO, nawigacja |
| `scripts/post-build-seo.js` | Prerender HTML, sitemap, robots.txt, schema per URL |
| `src/js/router.js` | Routing client-side, legacy hash redirect |
| `src/content/landing-pages.js` | Treść 13 landing pages |
| `src/content/poradniki-hub.js` | Hub `/poradniki` |
| `src/content/static-pages.js` | Strony prawne / o nas |
| `nginx.conf` | `try_files` + redirect sitemap |

Każda trasa ma własny `dist/[path]/index.html` z meta, canonical, OG i `<noscript>` dla crawlerów.

### Następny krok architektury (etap 3)

Markdown / CMS dla bloga i FAQ — bez pełnej migracji frameworka.

---

## PRIORYTETY WDROŻENIA

### Etap 1 — krytyczne (indeksacja)

- [x] Przyjazne URL zamiast hashy
- [x] Przekierowania 301 z `/#section` na nowe URL (client-side; hash nie trafia do serwera)
- [x] Poprawiony `sitemap_index.xml` (bez hashy)
- [x] `robots.txt` — aktualizacja (Disallow debug)
- [x] Canonical na każdej stronie
- [x] Schema.org: Organization, WebSite, FAQPage (dla /faq)
- [x] GTM + GA4 (GTM-P7N9JKMT — podłącz GA4 w panelu GTM)
- [x] `noindex` dla `/debug.html`
- [x] Prerender/SSG treści głównych (LCP + indeksacja)

**Szacowany czas etapu 1:** 3–5 dni roboczych

### Etap 2 — ważne (jakość SEO)

- [x] SEO Title / Meta Description / H1 per strona tematyczna
- [x] Breadcrumbs + BreadcrumbList schema
- [x] Open Graph per strona (z dedykowanymi ścieżkami OG per temat)
- [x] Rozszerzenie FAQ + FAQPage schema na podstronach tematycznych
- [x] Strony statyczne (regulamin, polityka, disclaimer, o nas)
- [x] Optymalizacja obrazów (lazy loading, alt, wymiary)
- [ ] Obrazy OG per temat (ścieżki skonfigurowane — wymaga plików graficznych w `/public/og/`)

**Szacowany czas etapu 2:** 4–7 dni roboczych

### Etap 3 — rozwój (content + AI Search)

- [ ] Blog + system slugów
- [x] Hub poradników (`/poradniki`) — indeks 13 landing pages w 3 kategoriach
- [x] Landing pages pod konkretne frazy — 13 stron w `src/content/landing-pages.js`
- [x] Linkowanie wewnętrzne i mapa treści (related links, footer, `/poradniki`)
- [ ] CMS / Markdown workflow dla treści
- [ ] E-E-A-T: autorzy, daty, recenzja merytoryczna
- [ ] Monitoring Search Console + Core Web Vitals
- [ ] Dodatkowe landing pages (`/kurcze-ud`, `/niedobor-potasu`, `/kurcze-a-stres`)

**Szacowany czas etapu 3:** ciągły rozwój treści, 2–4 tygodnie na infrastrukturę bloga

---

## PROŚBA O INFORMACJĘ ZWROTNĄ — STAN NA CZERWIEC 2026

| Pytanie | Odpowiedź |
|---------|-----------|
| Co wdrożono? | Etapy 1–2 ukończone; etap 3 częściowo (landing pages, hub `/poradniki`, Umami) |
| Co wymaga dopracowania? | Pliki OG, blog/CMS, E-E-A-T, GSC monitoring, tag GA4 w GTM |
| Czy URL działa bez hashy? | Tak — 27 tras z prerenderem |
| Czy sitemap automatyczna? | Tak — `pnpm build` → 27 URL |
| Czy SEO Title/Description/H1 edytowalne? | Tak — w `routes.js`, `landing-pages.js`, `static-pages.js`, `poradniki-hub.js` |
| Blog / CMS? | Nie — treści w plikach JS; Markdown planowany na etap 3 |
| E-E-A-T / weryfikacja medyczna? | Do ustalenia — istotne dla YMYL |

---

## ZAŁĄCZNIK — MAPA TREŚCI (stan wdrożenia)

```
/                           Hub główny ✅
├── /kurcze-miesniowe       Przegląd tematu ✅
├── /pierwsza-pomoc         ✅
├── /profilaktyka           ✅
├── /kurcz-vs-skurcz        ✅
├── /wibroakustyka          ✅
├── /joga-a-kurcze          ✅
├── /faq                    ✅
├── /kontakt                ✅
├── /poradniki              Hub poradników ✅
│   ├── /kurcze-lydek       ✅
│   ├── /kurcze-stop        ✅
│   ├── /kurcze-nocne       ✅
│   ├── /kurcze-u-sportowcow ✅
│   ├── /kurcze-u-kobiet-w-ciazy ✅
│   ├── /kurcze-u-osob-starszych ✅
│   ├── /kurcze-u-diabetykow ✅
│   ├── /niedobor-magnezu   ✅
│   ├── /kurcze-a-odwodnienie ✅
│   ├── /kurcze-a-leki      ✅
│   ├── /rozciaganie-przy-kurczach ✅
│   ├── /masaz-przy-kurczach ✅
│   └── /suplementacja-magnezem ✅
├── /blog                   ❌ planowany
│   └── /blog/[slug]        ❌
├── /o-nas                  ✅
├── /regulamin              ✅
├── /polityka-prywatnosci   ✅
└── /disclaimer-medyczny    ✅
```

**27 tras** w sitemap (9 tematów + 13 landingów + `/poradniki` + 4 statyczne; `/` liczona raz).

---

## PLIKI KLUCZOWE (implementacja)

| Obszar | Ścieżki |
|--------|---------|
| Trasy i meta SEO | `src/seo/routes.js`, `meta.js`, `schema.js` |
| Landing pages | `src/content/landing-pages.js`, `src/components/LandingPage.js` |
| Hub poradników | `src/content/poradniki-hub.js`, `src/components/PoradnikiPage.js` |
| Strony statyczne | `src/content/static-pages.js`, `src/components/StaticPage.js` |
| Build / prerender | `scripts/post-build-seo.js`, `nginx.conf` |
| Analityka | `src/seo/analytics-config.js`, `src/js/consent.js`, `src/js/umami.js` |
| Cookie banner | `src/components/CookieConsent.js` |

---

*Dokument zaktualizowany po wdrożeniu etapów 1–2 oraz części etapu 3 (landing pages, hub `/poradniki`, Umami). Ostatnia aktualizacja: czerwiec 2026.*
