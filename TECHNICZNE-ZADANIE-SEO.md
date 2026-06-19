# TECHNICZNE ZADANIE SEO DLA KURCZ.PL

## Cel

Przygotować portal edukacyjny **kurcz.pl** pod poprawną indeksację Google, rozwój SEO treści zdrowotnych (YMYL), bloga, FAQ oraz przyszły ruch z AI Search.

Kurcz.pl to serwis informacyjny o kurczach mięśniowych — nie sklep internetowy. Dokument opisuje wymagania techniczne SEO dostosowane do architektury treści medyczno-edukacyjnych.

---

## Stan obecny (audyt kodu)

| Element | Status | Uwagi |
|---------|--------|-------|
| Title, meta description | ✅ | Per-strona (prerender + router) |
| Meta keywords | ✅ | Obecne, niski priorytet dla Google |
| Open Graph | ✅ | Per-strona w prerenderze |
| robots.txt | ✅ | Bez `Crawl-delay`, wskazuje sitemap_index |
| sitemap_index.xml | ✅ | Automatyczny przy buildzie |
| Przyjazne URL | ✅ | 9 tras + prerender HTML |
| Canonical | ✅ | W `<head>` każdej strony |
| Schema.org | ✅ | Organization, WebSite, MedicalWebPage, FAQPage |
| GTM / GA4 | ✅ | GTM-P7N9JKMT w index.html (wszystkie strony po buildzie) |
| Breadcrumbs | ❌ | Etap 2 |
| FAQ (treść) | ✅ | Sekcja FAQ w SPA, 7 pytań |
| FAQ (schema FAQPage) | ✅ | Na `/faq` |
| Blog / poradniki | ❌ | Etap 3 |
| Strony statyczne | ❌ | Etap 2 |
| Obrazy WebP + alt | ⚠️ Częściowo | Kilka obrazów z alt, hero w WebP |
| PWA / Service Worker | ✅ | VitePWA w `vite.config.js` |
| noindex debug.html | ✅ | meta robots noindex |

---

## STRUKTURA URL — TEMATY GŁÓWNE

Obecnie cała treść działa jako jedna strona z kotwicami, np.:

```
https://kurcz.pl/#treatment
https://kurcz.pl/#prevention
https://kurcz.pl/#faq
```

Fragmenty URL (`#`) nie są traktowane przez Google jako osobne strony. Należy wdrożyć przyjazne adresy bez parametrów i hashy.

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

Przygotować możliwość tworzenia podstron pod konkretne zapytania wyszukiwania.

### Kurcze według lokalizacji i kontekstu

```
/kurcze-lydek
/kurcze-stop
/kurcze-ud
/kurcze-nocne
/kurcze-u-sportowcow
/kurcze-u-kobiet-w-ciazy
/kurcze-u-osob-starszych
/kurcze-u-diabetykow
```

### Przyczyny i czynniki ryzyka

```
/niedobor-magnezu
/niedobor-potasu
/kurcze-a-odwodnienie
/kurcze-a-leki
/kurcze-a-stres
```

### Metody leczenia i ulgi

```
/rozciaganie-przy-kurczach
/masaz-przy-kurczach
/elektrolity-przy-kurczach
/suplementacja-magnezem
```

Każda podstrona powinna mieć unikalną treść, linkowanie do tematu nadrzędnego oraz powiązane artykuły blogowe.

---

## PRZEKIEROWANIA 301

Wdrożyć przekierowania 301 ze starych adresów z kotwicami na nowe adresy SEO.

Przykłady:

```
https://kurcz.pl/#intro        → https://kurcz.pl/kurcze-miesniowe
https://kurcz.pl/#treatment  → https://kurcz.pl/pierwsza-pomoc
https://kurcz.pl/#prevention → https://kurcz.pl/profilaktyka
https://kurcz.pl/#comparison → https://kurcz.pl/kurcz-vs-skurcz
https://kurcz.pl/#wibroakustyka → https://kurcz.pl/wibroakustyka
https://kurcz.pl/#yoga       → https://kurcz.pl/joga-a-kurcze
https://kurcz.pl/#faq        → https://kurcz.pl/faq
https://kurcz.pl/#contact    → https://kurcz.pl/kontakt
```

Konfiguracja w Nginx (Docker) lub na poziomie hostingu (Railway / Captain Deploy).

---

## SITEMAP

Obecna sitemap zawiera URL z fragmentami hash — należy zastąpić ją pełną, automatyczną strukturą.

### Sitemap powinna zawierać

- stronę główną
- wszystkie tematy główne
- wszystkie podstrony tematyczne
- wszystkie wpisy blogowe
- strony FAQ (globalne i tematyczne)
- strony poradnikowe
- strony statyczne

### Rekomendowana struktura

```
/sitemap_index.xml
```

A w niej:

```
/sitemap-pages.xml       — strona główna, kontakt, o nas, regulamin itd.
/sitemap-topics.xml      — tematy główne i podstrony tematyczne
/sitemap-blog.xml        — wpisy blogowe
/sitemap-guides.xml      — poradniki
/sitemap-faq.xml         — strony FAQ
```

Sitemap powinna być generowana automatycznie przy buildzie (Vite plugin / skrypt) lub z CMS, gdy treści będą edytowalne.

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

Obecnie brak danych strukturalnych. Wdrożyć JSON-LD:

### Strona główna

- `Organization`
- `WebSite` (z `SearchAction`, jeśli będzie wyszukiwarka)
- `MedicalWebPage` (opcjonalnie, ze względu na charakter YMYL)

### Strony tematyczne

- `BreadcrumbList`
- `MedicalWebPage` lub `WebPage`
- `FAQPage` (jeśli strona zawiera FAQ)

### Artykuły blogowe

- `Article` / `BlogPosting`
- `BreadcrumbList`
- `author` z danymi autora

### FAQ

- `FAQPage`

### Kontakt

- `ContactPage`

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

Wdrożyć widoczne breadcrumbs na każdej podstronie.

### Przykład

```
Strona główna > Kurcze mięśniowe > Kurcze łydek
Strona główna > Blog > Kurcze łydek w nocy — co robić?
Strona główna > Pierwsza pomoc > Rozciąganie przy kurczach
```

Breadcrumbs powinny być oznaczone schema.org `BreadcrumbList`.

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

Przygotować strukturę bloga i hubów poradnikowych:

```
/blog
/poradniki
/poradniki/kurcze-lydek
/poradniki/pierwsza-pomoc
/poradniki/profilaktyka
/poradniki/wibroakustyka
/poradniki/joga
/poradniki/kurcz-vs-skurcz
```

### Każdy wpis blogowy powinien mieć

- SEO Title
- Meta Description
- H1
- slug
- zdjęcie główne + alt
- spis treści (TOC)
- sekcję FAQ (opcjonalnie)
- linkowanie do stron tematycznych
- linkowanie do powiązanych artykułów
- schema.org `BlogPosting` lub `Article`
- datę publikacji i `dateModified`

---

## FAQ

Obecnie FAQ istnieje jako sekcja accordion w SPA (7 pytań w `FaqSection.js`).

### Docelowa struktura FAQ

- globalne FAQ → `/faq`
- FAQ na stronie tematycznej (np. `/kurcze-lydek#faq`)
- FAQ pod artykułem blogowym

FAQ powinno być oznaczone schema.org `FAQPage`.

Treść FAQ powinna być edytowalna bez przebudowy całej aplikacji (Markdown / CMS / pliki JSON).

---

## GOOGLE ANALYTICS 4 I GOOGLE TAG MANAGER

Obecnie brak analityki. Wdrożyć Google Tag Manager na wszystkich stronach.

GTM musi być dodany:

- w sekcji `<head>`
- bezpośrednio po otwarciu `<body>`

Następnie przez GTM podłączyć GA4.

### Rekomendowane zdarzenia (portal informacyjny)

| Zdarzenie | Opis |
|-----------|------|
| `page_view` | Odsłona strony |
| `scroll` | Scroll depth (25%, 50%, 75%, 100%) |
| `faq_expand` | Rozwinięcie pytania FAQ |
| `contact_form_submit` | Wysłanie formularza kontaktowego |
| `contact_click` | Kliknięcie CTA „Skontaktuj się” |
| `phone_click` | Kliknięcie numeru telefonu |
| `email_click` | Kliknięcie adresu e-mail |
| `outbound_click` | Kliknięcie linku partnerskiego (wibroakustyka.ai, kompi.pl itd.) |
| `cta_click` | Kliknięcie głównych CTA (np. „Natychmiastowa pomoc”) |
| `section_view` | Wejście w sekcję tematyczną (do czasu migracji z SPA) |

---

## GOOGLE SEARCH CONSOLE

Po wdrożeniu `sitemap_index.xml` dodać sitemap w Google Search Console:

```
https://kurcz.pl/sitemap_index.xml
```

Zweryfikować właściwość domeny (DNS lub plik HTML).

---

## OPEN GRAPH

Obecnie Open Graph jest tylko na stronie głównej.

### Dodać Open Graph dla

- strony głównej ✅ (już jest)
- stron tematycznych
- artykułów blogowych
- strony FAQ

### Podstawowe tagi

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://kurcz.pl/og/kurcze-lydek.jpg" />
<meta property="og:url" content="https://kurcz.pl/kurcze-lydek" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="pl_PL" />
<meta name="twitter:card" content="summary_large_image" />
```

Przygotować dedykowane obrazy OG (1200×630 px) per główny temat.

---

## WYDAJNOŚĆ STRONY (Core Web Vitals)

Stack: Vite + Alpine.js + Tailwind — lekki, ale SPA z client-side rendering może wpływać na LCP i indeksację.

### Priorytety

- szybkie ładowanie obrazów hero (preload już jest dla `hero_square.webp`)
- lazy loading dla obrazów poniżej pierwszego ekranu
- kompresja obrazów WebP
- poprawne wymiary obrazów (`width` / `height` — zapobiega CLS)
- minimalizacja JS i CSS (terser + cssnano już w buildzie)
- rozważyć SSG / prerender dla stron treściowych
- font-display: swap dla Google Fonts
- ograniczyć animacje blob na mobile (INP)

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

Obecne menu (Header) opiera się na scroll do kotwic. Po migracji na URL:

### Menu główne — proponowane pozycje

- Kurcze mięśniowe
- Pierwsza pomoc
- Profilaktyka
- Kurcz vs. skurcz
- Wibroakustyka
- Joga
- FAQ
- Blog (nowe)
- Kontakt

Każda strona tematyczna powinna linkować do:

- strony nadrzędnej (hub)
- 2–4 powiązanych podstron
- 1–2 artykułów blogowych
- sekcji FAQ (jeśli istnieje)

---

## STOPKA

Obecna stopka zawiera nawigację kotwicową i partnerów. Uzupełnić o linki do stron statycznych:

- O nas → `/o-nas`
- Kontakt → `/kontakt`
- Regulamin → `/regulamin`
- Polityka prywatności → `/polityka-prywatnosci`
- Disclaimer medyczny → `/disclaimer-medyczny`
- Blog → `/blog`
- FAQ → `/faq`
- Główne tematy (linki do hubów tematycznych)

Partnerzy (zachować):

- Wibroakustyka.ai
- Kompi.pl
- Intertech Poland
- Szkoły Jogi

---

## STRONY STATYCZNE

Przygotować lub sprawdzić strony:

```
/o-nas
/kontakt
/regulamin
/polityka-prywatnosci
/disclaimer-medyczny
/faq
```

### Disclaimer medyczny (wymagany dla YMYL)

Treść z stopki powinna być rozwinięta na dedykowanej stronie:

> Informacje zawarte na stronie mają charakter edukacyjny i nie zastępują porady lekarskiej. W przypadku problemów zdrowotnych zawsze skonsultuj się z lekarzem.

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

## ARCHITEKTURA TECHNICZNA — MIGRACJA SPA → WIELOSTRONNICOWA

Obecna architektura: **Vite + Alpine.js**, jedna strona HTML, komponenty ładowane dynamicznie.

### Opcje migracji (od najlżejszej)

1. **Prerender / SSG** — Vite plugin (np. `vite-plugin-ssg`) generuje statyczne HTML per route przy buildzie. Minimalna przebudowa, dobra dla treści statycznych.

2. **Multi-page Vite** — osobne pliki HTML per temat (`kurcze-lydek.html` → `/kurcze-lydek`). Proste, bez frameworka routingu.

3. **Astro / 11ty** — migracja komponentów do SSG z Markdown dla bloga. Większy nakład, najlepsze długoterminowo dla content site.

4. **Vue/React Router** — pełny SPA z history API. Wymaga SSR lub prerender dla SEO.

### Rekomendacja

Dla kurcz.pl optymalna jest **opcja 1 (SSG/prerender) + Markdown dla bloga/FAQ**, przy zachowaniu obecnego stacku Vite + Alpine.js tam, gdzie interaktywność jest potrzebna.

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
- [ ] Huby poradnikowe
- [ ] Landing pages pod konkretne frazy (kurcze łydek, kurcze nocne itd.)
- [ ] CMS / Markdown workflow dla treści
- [ ] E-E-A-T: autorzy, daty, recenzja merytoryczna
- [ ] Linkowanie wewnętrzne i mapa treści
- [ ] Monitoring Search Console + Core Web Vitals

**Szacowany czas etapu 3:** ciągły rozwój treści, 2–4 tygodnie na infrastrukturę bloga

---

## PROŚBA O INFORMACJĘ ZWROTNĄ

Proszę o informację:

1. **Które z tych elementów są już wdrożone?**
   - Patrz tabela „Stan obecny” na początku dokumentu.

2. **Które wymagają doprogramowania?**
   - Routing wielostronicowy, sitemap, schema.org, GTM, blog, strony statyczne, breadcrumbs, canonical per page.

3. **Ile czasu zajmie wdrożenie etapu 1?**
   - Szacunek: **3–5 dni roboczych** (przy opcji SSG/prerender bez pełnej migracji frameworka).

4. **Czy obecna architektura (Vite + Alpine.js SPA) pozwala na zmianę URL bez przebudowy całego serwisu?**
   - Tak, częściowo — wymagany prerender lub multi-page build. Pełny SPA bez SSR nie wystarczy dla SEO wielostronicowego.

5. **Czy możemy wdrożyć sitemap_index.xml?**
   - Tak — skrypt generujący sitemap przy `pnpm build` na podstawie listy routes/treści.

6. **Czy możemy ręcznie edytować SEO Title, Meta Description, H1 i FAQ dla każdej strony tematycznej?**
   - Obecnie nie — wymaga wprowadzenia warstwy treści (Markdown frontmatter, JSON config lub headless CMS).

7. **Czy planowany jest blog / CMS, czy treści pozostają w kodzie?**
   - Decyzja wpływa na wybór architektury etapu 3.

8. **Czy treści medyczne będą weryfikowane przez specjalistę (E-E-A-T)?**
   - Istotne dla YMYL i AI Search w kategorii zdrowia.

---

## ZAŁĄCZNIK — MAPA TREŚCI (propozycja)

```
/                           Hub główny
├── /kurcze-miesniowe       Przegląd tematu
│   ├── /kurcze-lydek
│   ├── /kurcze-stop
│   ├── /kurcze-nocne
│   └── /kurcze-u-sportowcow
├── /pierwsza-pomoc
│   ├── /rozciaganie-przy-kurczach
│   └── /masaz-przy-kurczach
├── /profilaktyka
│   ├── /niedobor-magnezu
│   └── /suplementacja-magnezem
├── /kurcz-vs-skurcz
├── /wibroakustyka
├── /joga-a-kurcze
├── /faq
├── /blog
│   └── /blog/[slug]
├── /poradniki
│   └── /poradniki/[temat]
├── /kontakt
├── /o-nas
├── /regulamin
├── /polityka-prywatnosci
└── /disclaimer-medyczny
```

---

*Dokument przygotowany na podstawie audytu repozytorium kurcz.pl (Vite, Alpine.js, SPA z kotwicami). Data: czerwiec 2025.*
