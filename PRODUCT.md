# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: people who get muscle cramps again and again and are reading up on them, not people in the middle of a cramp. They want to know why it happens (magnesium, hydration, medication, pregnancy, age, exercise, night cramps), what helps, and how to prevent the next one. They read in depth, often in several sessions, and often arrive from a search engine on a specific question.

Secondary audiences named in `/o-nas`: athletes, physical workers, seniors and pregnant women. Someone who needs immediate relief is served too, but is not the first audience pages are designed for.

## Product Purpose
kurcz.pl ("kurcz" is Polish for cramp) is a free, bilingual (Polish-first, English mirror) health guide to muscle cramps. It covers causes, first aid and prevention.

Success means two things together:
1. **Organic search traffic** for cramp-related queries in Polish and English. This is health (YMYL) content, so trust signals and accuracy decide rankings.
2. **A public-good resource**: reliable, plain-language help that actually leaves the reader better informed, with no business metric beyond that.

Cross-links to partner sites are secondary. They are not a conversion goal.

## Positioning
A single-topic, editorially calm reference on cramps, in Polish first. It goes deeper and is more focused than general health portals, and it has no ads or affiliate pressure. It is fast and static, with zero JS on content pages.

## Operating Context
- Visitors arrive mostly from search onto a specific topic page (`/[slug]`), then move to related guides through hubs (`/poradniki`, `/kurcze-miesniowe`) and related links.
- Content is mirrored in Polish (root) and English (`/en/`, with its own slugs), linked by hreflang.
- An AI search widget (Cloudflare AI Search) answers questions over the site's content. It carries its own disclaimer.
- Contact goes through the `/kontakt` form (SMTP).

## Capabilities and Constraints
- Stack: Astro 5 static output, Tailwind v4, and a single Svelte 5 island: the AI search (`client:idle`). The language switch is a plain link. Deployed on Netlify (`@astrojs/netlify`, `netlify.toml`). The Dockerfile and CapRover config are legacy.
- About 34 pages per language: home, around 26 topic/guide pages, hubs, FAQ, contact, about, terms, privacy, medical disclaimer, 404.
- Content lives in JS data files (`src/content/landing-pages.js`, `topic-pages.js`, `static-pages.js`). SEO and schema code is in `src/seo/`.
- Build runs `check:seo` and `check:search` as postbuild gates.
- GTM with Consent Mode v2.
- Content pages must stay zero-JS by default for speed and indexability.

## Brand Commitments
- Name and wordmark: plain lowercase "kurcz.pl" set in Cabin (narrowed, semibold), taking the colour of its surface: light on the slate cloth rail, slate on the linen footer (`src/components/Logo.astro`). The raster logos `public/logo.webp` and `public/logo-white.webp` (used in structured data) predate it and were not redrawn.
- Visual identity: a classroom anatomy wall chart, recorded in `DESIGN.md`. Every guide has its own engraved anatomical plate (`assets/plates/`, mapped in `src/content/plates.ts`, shared by PL and EN) that explains the topic; no stock photography.
- Voice: calm, reassuring, editorial and plain-spoken. It explains without alarming and without selling. Reference line: "Rzetelne i proste informacje o przyczynach, natychmiastowej uldze oraz zapobieganiu bolesnym kurczom mięśniowym — zgodne z aktualną wiedzą medyczną."
- Authorship stays organizational ("Kurcz.pl"). This is a confirmed decision.

## Evidence on Hand
- Medical disclaimers: the full page `/disclaimer-medyczny` (emergency number 112, do not change medication on your own), a box on every topic page, a footer line, and a separate disclaimer for AI answers.
- Structured data: MedicalWebPage, Organization (Facebook and Instagram `sameAs`, `publishingPrinciples` pointing to the disclaimer), FAQPage, BreadcrumbList. Dates are site-wide constants, not per article.
- `/o-nas` cites editorial standards based on Cochrane and Mayo Clinic.
- **Absent, and must not be fabricated:** named authors, medical reviewers, credentials, testimonials, patient stories, user counts and clinical claims beyond the cited sources. `/o-nas` currently mentions unnamed "eksperci" (experts). Do not expand that into named or credentialed people.

## Product Principles
1. **Accuracy over reach.** This is YMYL content. Never trade correctness or a needed disclaimer for engagement or SEO tricks.
2. **Depth for the returning reader.** Pages should reward careful reading: clear structure, causes linked to prevention, and easy paths to related guides.
3. **Calm, not clinical, not salesy.** Reassure and inform. Partner links are offered as context, never pushed.
4. **Fast and indexable by default.** Static HTML first. Add JS only where it earns its place.
5. **Polish first, English as a true mirror.** Both languages get equal care, and neither is a machine afterthought.

## Accessibility & Inclusion
Readers include seniors and pregnant women, often on phones. Text must be readable (comfortable size and contrast, no reliance on colour alone), and relief steps must be easy to follow. Target WCAG 2.1 AA.
