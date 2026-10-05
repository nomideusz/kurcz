---
version: 1
slug: "src-components-homepage-astro"
primary_target: "src/components/HomePage.astro"
related_targets: ["src/pages/[slug].astro","src/layouts/Layout.astro"]
---

# kurcz.pl — whole site (home, article template, hubs, FAQ, contact, 404, chrome)

Mode: Read. Visitors arrive from search on one question, read in depth over several sessions, on phones; seniors and pregnant women included.
Constraints: zero-JS content pages; PL first, EN mirror; YMYL, no invented authors, reviewers or claims; WCAG 2.1 AA.
Chosen direction: "Ulotka dla pacjenta", picked over the rolled timetable (seed 76f3e27d). User ruled out clinical, spa, loud/trendy, and the old cream+serif+plum look.
Memorable moment: the home page is the medicine box (a saffron band with Braille), and each article is the unfolded leaflet: a numbered contents list, numbered sections, and warnings in ruled boxes.

## Direction contract

THESIS: kurcz.pl as the patient leaflet everyone in Poland already knows how to read: numbered sections, plain answers, warnings where they apply. It refuses the health-portal card grid and the cream editorial magazine.

OWN-WORLD: thin leaflet paper (#FAFAF7) under black ink; 1px black rules and 2px heavy rules, never soft shadows or rounded cards. One box spot colour, saffron (#F2A20C), used as full-width bands (the box front on home and hubs, the band in the masthead) and as numbered chips with black numerals. Headings in Archivo Narrow bold, body in Atkinson Hyperlegible Next. A red triangle marks warnings. Braille dots spell "kurcz" on the box band. Links are ink with a thick saffron underline, highlighted on hover.

STORY: the reader sees at once that this is a calm, plain reference with no selling. They find their situation in the numbered contents, read one numbered section at a time, see exactly where a doctor is needed, and move to the next guide.

FIRST VIEWPORT: home has a slim masthead (wordmark, text nav, search, language), then a full-bleed saffron box band. On the left, Braille dots over a monumental condensed "Kurcze mięśni", the lead paragraph, two actions (solid black "pierwsza pomoc", ruled "poznaj przyczyny"). On the right, the white leaflet panel "Szybka ulga": 3 numbered steps with times (20–30 s), laid over the lower edge of the band with a 1px ink rule, no shadow. The numbered "Spis treści" of situations starts below the fold line. Articles open with a white sheet: crumbs, numbered kicker, condensed H1, intro, meta line, then the contents list as numbered chips.

FORM: patient leaflet + medicine box, my top-ranked candidate (#1), taken as IMPECCABLE'S PICK; seed key 76f3e27d. Signature: the numbering apparatus (contents → numbered sections → numbered warnings). Motion: none beyond hover highlight and the details open state; reduced motion is respected.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
