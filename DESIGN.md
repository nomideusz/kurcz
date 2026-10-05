---
name: kurcz.pl
description: A calm, bilingual guide to muscle cramps, set as the label on a Polish spa mineral-water bottle and the pump-room board beside it.
colors:
  label: "#0d5c45"
  label-deep: "#08432f"
  on-label: "#f1f8f4"
  on-label-soft: "#c3e2d2"
  gold: "#ecc66a"
  ground: "#eaf3ee"
  sheet: "#f8fbf9"
  panel: "#dbe9e2"
  wash: "#d3e9dd"
  rule: "#b9d1c4"
  ink: "#0e2a1f"
  body: "#1d382d"
  muted: "#45604f"
  warn: "#b3261e"
  warn-wash: "#fbecea"
typography:
  display:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 132"
  headline-hub:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "clamp(2.25rem, 5.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  headline-article:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 122"
  title:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 118"
  row-title:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.375
    fontVariation: "'wdth' 112"
  tag:
    fontFamily: "Anybody, Verdana, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-prose:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.72
  small:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  field: "10px"
  label: "14px"
  pill: "999px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  row-y: "16px"
  row-x: "20px"
  section: "96px"
components:
  button-solid:
    backgroundColor: "{colors.label}"
    textColor: "{colors.on-label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.label-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.wash}"
  button-pale:
    backgroundColor: "{colors.on-label}"
    textColor: "{colors.label-deep}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-pale-hover:
    backgroundColor: "{colors.wash}"
  button-line-pale:
    backgroundColor: "transparent"
    textColor: "{colors.on-label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-line-pale-hover:
    backgroundColor: "{colors.label-deep}"
  composition-table:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.label}"
  composition-row:
    textColor: "{colors.ink}"
    typography: "{typography.row-title}"
    padding: "16px 20px"
  composition-row-hover:
    backgroundColor: "{colors.wash}"
  input-field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  input-field-focus:
    backgroundColor: "{colors.sheet}"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  doctor-panel:
    backgroundColor: "{colors.warn-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
---

# Design System: kurcz.pl

## Overview

**Creative North Star: "The Mineral-Water Label and the Pump Room"**

kurcz.pl reads like the label on a Polish spa mineral-water bottle and the pump-room board beside it: the familiar, trusted place where a body's minerals are listed plainly. A deep spring-green label owns the frame (masthead, hero bands, page headers, footer) and meets the pale mineral-water ground along a soft wave edge. Reading happens on a lighter rinse, in rounded panels with label corners, in a calm column set in a face designed for low-vision readers.

The signature is the composition table: name on the left, a dotted leader, the value on the right, inside a rounded rinse panel ruled into a visible grid. Every index uses it: the home situations and sections, article contents, hubs and related guides. Values carry information (a guide's reading time, a relief step's duration), and a drop beside each row fills once that guide has been opened. Density is moderate and generous for older readers; the system is code-led with no generated imagery, and motion stops at hover and the native details open state.

The world explicitly rejects the discarded patient-leaflet system (saffron spot, black ink, Archivo Narrow, hairline rules), Friendly Festivals, zaur.app's cobalt deploy canvas, and the generic kit of white sheet, black ink, one spot colour, condensed grotesk and uppercase tracked labels.

**Key Characteristics:**
- Spring-green label frame, pale mineral-water ground, never cream or white.
- Wave edge wherever the label meets the water.
- Composition tables with dotted leaders and a visible row grid for every index.
- Wide, heavy Anybody lettering over Atkinson Hyperlegible Next reading text.
- Gold is a medal, not a palette colour; red is a doctor flag, never decoration.
- Zero-JS states: :visited read-drops, native details disclosure.

## Colors

A two-sided palette: the green label and its pale lettering, and the mineral-water side in green-tinted neutrals, with gold and red held in strict reserve.

### Primary
- **Spring-Green Label** (label): the frame. Masthead, hero and page-header bands, footer, solid buttons, row icons, leaders and row values, bullet rings, link underlines.
- **Deep Label Green** (label-deep): hover state of anything on the green, the relief panel's header strip, the mobile menu sheet, text on pale buttons.
- **Label Lettering** (on-label): text and headings on the green; the pale button fill.
- **Soft Label Lettering** (on-label-soft): secondary text on the green (meta lines, footer tagline and disclaimer, meta icons).

### Secondary
- **Medal Gold** (gold): numerals and the one seal on the green, plus accessibility affordances (the focus halo, ::selection). Documented exception: the wordmark's ".pl" is gold.

### Tertiary
- **Doctor-Flag Red** (warn): only for "see a doctor" flags: the 2px border of the doctor panel and the warning icon on each flag.
- **Flag Wash** (warn-wash): the doctor panel's ground.

### Neutral
- **Mineral Water** (ground): the page ground; also the contact field fill.
- **Rinse** (sheet): reading panels, composition tables, the article sheet, the cookie bar, the read-drop's empty fill.
- **Pump-Room Panel** (panel): scrollbar track and quiet panels.
- **Wash** (wash): hover fill on rows, line buttons, links (water rising under the ink) and the current TOC entry.
- **Water Rule** (rule): hairlines between rows, list items and fields; the composition grid.
- **Green-Black Ink** (ink): headings, row titles, link text, strong text.
- **Body Green** (body): running text.
- **Muted Green** (muted): row descriptions, captions, placeholders, inactive TOC entries.

### Named Rules
**The Medal Rule.** Gold sits on the green, as a medal sits on a label: numerals and the one round seal. Outside that it appears only as an accessibility affordance (gold focus halo outside the ink ring, gold ::selection) and on the wordmark's ".pl". It is never a fill, border or text colour on the water side.

**The Flag Rule.** Red appears only for doctor flags, and every flag carries a warning icon and words. State is never conveyed by colour alone: the read-drop changes fill and is explained in a caption, the current TOC entry is bold with a filled ring, the active nav item is bold with an underbar.

**The Water Ground Rule.** The ground is pale mineral water and reading surfaces are the rinse. No cream, no paper white, no grey.

## Typography

**Display Font:** Anybody (variable, weights 600–900, wdth 100–140, Google provider) with Verdana, sans-serif
**Body Font:** Atkinson Hyperlegible Next (400, 700, italic; fontsource) with Verdana, sans-serif
**Mono:** system monospace stack, rarely used

**Character:** Anybody set wide and heavy is label lettering: monumental on the green, compact and wide in table rows. Atkinson Hyperlegible Next, from the Braille Institute, carries the reading for seniors and low-vision readers. Both self-host with metric-matched fallbacks.

### Hierarchy
- **Display** (800, clamp(3rem, 8.4vw, 5.75rem), 0.94, wdth 132): the home H1 only.
- **Headline** (800, wdth 125 hub / 122 article): hub and service page H1 at clamp(2.25rem, 5.4vw, 4rem); article H1 at clamp(2rem, 4.6vw, 3.5rem). The 404 numeral is gold at wdth 140.
- **Title** (800, 1.875rem → 2.25rem at sm, 1.08, wdth 118): section headings on the water. Article prose H2 is 1.625rem → 2rem at 1.12; H3 1.25rem.
- **Row Title** (700, 1.1875rem, snug, wdth 112): composition-row names; the relief step titles use 1.125rem.
- **Body** (400, 1.0625rem, 1.6): interface and descriptive text. Article prose is 1.125rem at 1.72, capped at 68ch.
- **Tag** (700, 0.9375rem, 1.2, wdth 112, letter-spacing 0, sentence case): navigation-block headings (footer columns, the contents strip, the disclaimer label).

### Named Rules
**The Width Axis Rule.** Astro's @font-face for Anybody carries no font-stretch range, so width is driven only through `font-variation-settings: 'wdth' var(--wdth)` on headings, `.font-head` and `.tag`. The default is 118; set `--wdth` on the element to change it (home H1 132, hub H1 125, article H1 122, rows and tags 112). Never use `font-stretch`.

**The Sentence Case Rule.** No eyebrows or kickers above headings, no uppercase tracked labels, no section number chips. Headings and tags are sentence case with zero or negative tracking. Numbering appears only where the sequence carries information (the relief steps).

**The Plain Words Rule.** The article contents keep the plain label "Spis treści" for clarity with senior readers rather than a themed name.

## Layout

A single 1240px container with 16px gutters on phones and 32px from sm. Sections on the water use a two-column split at lg: an 18rem heading column (16rem on articles and related links) beside the content, 64px apart; below lg everything stacks. Sections are separated by roughly 96px (mt-24), with 80–128px above the first table after a band.

Articles: the green band holds crumbs, H1, intro and a meta line (clock and calendar icons). Below, a sticky contents table (16rem, top 96px) sits beside a 48rem rinse sheet with 40px padding on desktop; below lg the contents become a native details block inside the sheet.

Home: the band is a 1fr / 27rem grid; the relief panel sits on the wave edge and overlaps it by 80px at lg. Composition tables run one column on phones, two at sm, one at lg (beside the heading column) and two again at xl.

The sticky header is 64px; `scroll-padding-top` is 88px so anchors clear it. Smooth scrolling is turned off under reduced motion.

## Elevation & Depth

Mostly flat colour-field layering: green label over pale water, rinse panels over the ground. Shadows are soft and green-tinted, only lifting reading surfaces off the water. There are no hard offset shadows.

### Shadow Vocabulary
- **Rinse Lift** (`box-shadow: 0 1px 2px rgb(8 67 47 / 0.08), 0 10px 28px -8px rgb(8 67 47 / 0.16)`): composition tables, the article sheet, the contact form panel.
- **Seal Panel Lift** (`box-shadow: 0 18px 40px -12px rgb(4 40 28 / 0.45)`): the home relief panel where it overlaps the green band.
- **Bottom Bar Lift** (`box-shadow: 0 -8px 24px rgb(8 67 47 / 0.15)`): the cookie consent bar.
- **Row Grid** (`box-shadow: 0 -1px 0 #b9d1c4, -1px 0 0 #b9d1c4`): each composition row draws its own top and left hairline; the panel's overflow clips the outer ones.

### Named Rules
**The Rinse Lift Rule.** Only rinse reading surfaces lift. Bands, buttons, rows and fields stay flat.

## Shapes

Rounded label corners (14px) on every panel: composition tables, the article sheet, the relief panel, the doctor panel, the mobile first-aid card. Fields use a slightly tighter 10px. Actions and filters are full pills; icon buttons, step numerals, bullet rings and the seal are circles. The label meets the water along a 14px-high wave (64px period, repeated) as a mask, below a band (`wave`) or above the footer (`wave-top`). Borders are 2px where they define a control (line buttons, fields, the doctor panel, bullet rings) and 1px hairlines between rows.

## Components

### Buttons
Soft, confident pills.
- **Shape:** full pill (999px), minimum height 48px, 24px inline padding, bold body face at 1.0625rem, an optional trailing arrow.
- **On the water:** solid green with pale lettering (hover deep green); line variant with a 2px green border and green text (hover wash).
- **On the label:** pale fill with deep-green text (hover wash); pale line variant at 70% border opacity (hover deep green, full border).
- **Focus:** the global ring, a 3px ink outline offset 2px plus a 6px gold halo, visible on both grounds.
- **Transitions:** background, colour and border at 120ms ease-out.

### Filter Pills
- **Style:** 40px tall pill, 2px green border, green bold text, with a muted count; hover wash. Used for the guides hub's jump links.

### Composition Table (signature)
- **Panel:** rinse, 14px corners, Rinse Lift, overflow hidden, ruled into a visible grid by per-row hairlines.
- **Row:** optional 28px green icon, then the name in Row Title, a 2px dotted green leader at 45% opacity, the reading-time value ("~N min", bold, tabular, green), the read-drop, and an arrow that nudges 2px right on hover. A muted description sits below. Rows aligned on the last baseline (`items-baseline-last`) so the leader meets the final line of a wrapped name. Hover fills the row with wash.
- **Read-drop:** an outlined drop whose fill is the rinse and turns green once the guide is visited, using CSS :visited (fill only, opaque to opaque, since :visited may only change colours). Chrome partitions visited history, so it shows for visits initiated from kurcz.pl. A caption explains the filled drop.
- **Contents variant:** the desktop "Spis treści" is a composition table with a green label strip carrying the tag heading; entries have a green ring that fills for the current section, which also goes bold on wash.

### Relief Panel and Seal
The home "Szybka ulga" panel: a rinse panel with a deep-green header strip, three numbered steps (green circles with pale numerals), dotted leaders to their durations, and a muted body line per step. The one gold round seal (dashed deep-green ring, rotated -8deg) crowns the strip with the step count.

### Doctor Panel
- **Style:** 14px corners, 2px red border, flag-wash ground; a solid warning icon above the heading; each flag a bold ink line with a red warning icon. Appears once on home and once per article.

### Inputs / Fields
- **Style:** 2px rule border, mineral-water fill, 10px corners, 12px by 16px padding, 1.0625rem ink text; bold ink labels above.
- **Hover / Focus:** border moves toward green on hover; on focus the border goes green and the fill becomes rinse, plus the global focus ring.

### Navigation
- **Header:** sticky 64px green bar; wordmark left, text nav centre at 0.9375rem in pill hover targets (hover deep green). The active item is bold with a 3px pale underbar; "pierwsza pomoc" is bold as the priority route. Search and language are outlined pills on the green.
- **Mobile:** a 40px circular menu toggle opens a deep-green sheet led by a pale first-aid card, then ruled rows; the active row is bold with a pale dot.
- **Footer:** a green band with a wave above, wordmark, tag-headed link columns, partners with external icons, the medical disclaimer in soft lettering, and circular social buttons.

### Prose
Article sections sit 56px apart. Bullets are bubbles: 12px green rings, with each item separated by a hairline. Links are ink with a 2px green underline offset 4px; the wash rises under them on hover.

### FAQ
Native details inside a composition panel, hairline-separated; the summary carries the question and a 32px green ring with a plus that rotates 45deg and fills green when open.

## Do's and Don'ts

### Do:
- **Do** open every page on the green label band with a wave edge, and close it with the wave-topped green footer.
- **Do** set every index as a composition table: name, dotted leader, an informative value, read-drop, arrow.
- **Do** drive Anybody's width with `--wdth` (118 default; 132 home H1, 125 hubs, 122 articles, 112 rows and tags).
- **Do** keep reading text in Atkinson Hyperlegible Next at 1.125rem / 1.72 and at most 68ch in articles.
- **Do** pair every doctor flag with a warning icon and words, and every state change with more than colour.
- **Do** keep content pages zero-JS: :visited for read state, native details for disclosure.
- **Do** respect reduced motion; motion stops at hover transitions and the details open state.

### Don't:
- **Don't** use gold outside numerals and the one seal on the green, the focus halo, ::selection and the wordmark's ".pl".
- **Don't** use red for anything but doctor flags.
- **Don't** add eyebrows, kickers, uppercase tracked labels or section number chips.
- **Don't** use cream, paper white or grey grounds; the ground is mineral water.
- **Don't** set width with `font-stretch`; the Astro font face has no stretch range.
- **Don't** add hard offset shadows or lift anything but rinse reading surfaces.
- **Don't** echo the old leaflet (saffron, black ink, Archivo Narrow, hairline/uppercase labels), Friendly Festivals, or zaur.app's cobalt canvas.
- **Don't** name mineral-water brands or imply any water treats cramps.
