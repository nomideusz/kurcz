---
version: 1
slug: "src-components-homepage-astro"
primary_target: "src/components/HomePage.astro"
related_targets: ["src/pages/[slug].astro","src/layouts/Layout.astro"]
---

# kurcz.pl — whole site (home, article template, hubs, FAQ, contact, 404, chrome)

Mode: Read. Visitors arrive from search on one question, read in depth over several sessions, on phones; seniors and pregnant women included.
Constraints: zero-JS content pages; PL first, EN mirror; YMYL, no invented authors, reviewers or claims; WCAG 2.1 AA. Content, SEO, disclaimers unchanged.
Chosen direction: the rolled #6, "mineral-water label and spa pump room" (seed 4101f0a0); the user pre-chose the roll. Replaces the patient-leaflet world (seed 76f3e27d). Must not read as: the old leaflet (saffron, black ink, Archivo Narrow, 1px/2px rules), Friendly Festivals, zaur.app's cobalt canvas, or the white-sheet + black-ink + one-spot + condensed-grotesk + hairline/uppercase-label kit. No mineral-water brand names; no claim that any water treats cramps.

## Direction contract

THESIS: kurcz.pl as the label on a Polish spa mineral-water bottle and the pump-room board beside it: the familiar, trusted place where a body's minerals are listed plainly, because cramps are so often a story of water, electrolytes and rest. It refuses the clinical health portal, the cream editorial magazine and the printed leaflet it replaces.

OWN-WORLD: a deep spring-green label (#0D5C45) owns the frame: masthead, hero bands, article headers and footer, edged with a soft wave line where the label meets the water. The ground is pale mineral water (#EBF3EF), never cream or white; reading panels sit on a lighter rinse (#F7FBF9) with rounded label corners. Ink is green-black. Pale gold (#E9C46A) appears only on the green, for numerals and the one round seal, the way medals sit on a label. Faint carbonation bubbles rise in the green bands. Display in Anybody, set wide (wdth ~125, heavy), like label lettering; reading face Atkinson Hyperlegible Next. Red appears only for doctor flags, always with a word and an icon.

STORY: the reader recognises a calm, trustworthy label, scans its composition table to find their situation, reads one section at a time in a quiet column, sees exactly when a doctor is needed, and moves on to the next guide; guides they have already read carry a filled drop.

FIRST VIEWPORT: home opens on the green label: a slim masthead (wide "kurcz" wordmark, text nav, search, language) runs into a full-bleed green band with rising bubbles. Left: the monumental wide "Kurcze mięśni", the lead paragraph, two pill actions (pale "pierwsza pomoc", outlined "poznaj przyczyny"). Right: the "Szybka ulga" panel set as a label's composition table, three steps with dotted leaders to their times (20–30 s), crowned by a gold round seal. A wave edge closes the band; the "Skład" (contents) table of situations begins below. Articles open with the same green band: crumbs, wide H1, intro, meta line; the contents sit beside the reading column as a "Skład artykułu" table. (Adapted in build: the article contents keep the existing "Spis treści" label for plain-language clarity with senior readers, set as a composition table with a green label strip and a row grid; index rows carry each guide's reading time as their value.)

FORM: mineral-water label + pump room, #6 on my ordered list, THE ROLL (the user pre-chose the roll over my #1 PTTK trail marking); seed key 4101f0a0. Signature: the composition table (label left, dotted leader, value right) used for every index: home contents, article contents, hubs, related guides. Raises from declined challengers: state is never shown by colour alone (emission-line rail); a CSS :visited drop marks guides already read, zero JS (cutting bench); index tables keep a visible row grid (Crouwel specimen); native details for FAQ disclosure (drawcord cape). Motion: none beyond hover and the details open state; reduced motion respected.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
