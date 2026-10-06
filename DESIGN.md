---
name: kurcz.pl
description: A calm, bilingual guide to muscle cramps, set as a cloth-bound classroom anatomy wall chart.
colors:
  slate: "#284442"
  slate-deep: "#1b302e"
  on-slate: "#dcddd5"
  on-slate-soft: "#b3b8ad"
  madder: "#b26252"
  madder-deep: "#8a3524"
  ochre: "#c09a55"
  warn: "#b3261e"
  warn-wash: "#f3e3e0"
  ground: "#dce3e4"
  paper: "#e9eeee"
  panel: "#cfd8d9"
  wash: "#c9d4d5"
  rule: "#a3b2b2"
  ink: "#1b2826"
  body: "#26332f"
  muted: "#475553"
typography:
  display:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "clamp(3rem, 13vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 86"
  section:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 86"
  title:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.1
    fontVariation: "'wdth' 86"
  lead:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
    fontVariation: "'wdth' 86"
  small:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  numeral:
    fontFamily: "Cabin, Verdana, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 0.85
    fontFeature: "'lnum', 'tnum'"
    fontVariation: "'wdth' 86"
rounded:
  hairline: "3px"
  strip: "4px"
  control: "6px"
  frame: "7px"
  round: "9999px"
spacing:
  unit: "clamp(10px, 1vw, 18.72px)"
  rail: "max(260px, calc(var(--u) * 19.86))"
  gutter-sm: "1rem"
  gutter-md: "2rem"
  frame-inset: "3px"
  section: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.madder}"
    textColor: "{colors.on-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.madder-deep}"
    textColor: "{colors.on-slate}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-line-hover:
    backgroundColor: "{colors.wash}"
  chart-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "3px"
    height: "15rem"
  cloth-strip:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.on-slate}"
    typography: "{typography.title}"
    rounded: "{rounded.strip}"
    padding: "0.26em 0.75em 0.325em"
  cloth-strip-hover:
    backgroundColor: "{colors.slate-deep}"
  cloth-strip-warn:
    backgroundColor: "{colors.madder-deep}"
    textColor: "{colors.on-slate}"
    rounded: "{rounded.strip}"
    padding: "0.625rem 1rem"
  chip-category:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    rounded: "{rounded.control}"
    padding: "0 1rem"
    height: "2.75rem"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  plate-key:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "1.45em"
  rail-nav:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.on-slate}"
    width: "{spacing.rail}"
---

# Design System: kurcz.pl

## Overview

**Creative North Star: "Classroom Anatomy Chart"**

kurcz.pl is a cloth-bound wall chart from a school biology room. A slate book-cloth rail, its spine bound with two rounded cords, holds a cool linen chart sheet. On the sheet sit engraved anatomical plates: muscle tinted red, bone and tendon in ivory line, with ochre callout discs and a printed key. Every chart on the sheet sits in the same thin slate frame under a cloth title strip, as the mini charts pinned to a teaching board would.

The interface stays flat and ruled. All engraving lives in the plates. The UI is lettering, 2px slate rules, hairline grids and cloth. Materials carry the depth: woven cloth on the rail, the title strips and the one primary button, and linen grain on the ground. Density is calm and generous. One fluid unit, 1% of the 1872px comp width, scales the desktop chart so the rail, hero and cards keep the comp's proportions on any wide screen.

Images explain. Each picture is an engraved plate of the anatomy or the remedy a page discusses. None is decoration or stock photography.

**Key Characteristics:**
- Slate cloth rail with a two-cord spine; on desktop the cloth also wraps the linen page on three sides.
- Cool linen ground with a procedural grain; the paper has a thin slate rule inset from its edge.
- Engraved plates on transparent backgrounds, one per guide, shared by PL and EN.
- Framed chart cards: 2px slate frame, 3px inset, cloth title strip.
- Madder cloth for the single primary action; ochre for callouts, numerals and bullets.
- One humanist sans (Cabin), condensed on its width axis for lettering and full width for reading.

## Colors

The chart has two materials: slate cloth with ochre and madder accents, and a cool grey-green linen sheet ruled in slate.

### Primary
- **Book-Cloth Slate** (slate): the rail, every cloth title strip, frames, 2px section rules, headings, outline buttons and icon strokes. This colour is the binding of the chart.
- **Deep Slate** (slate-deep): the pressed state of cloth, used for hovered title strips and hovered rail controls.
- **Cloth Lettering** (on-slate) and **Faded Cloth Lettering** (on-slate-soft): all text and rules on cloth. The soft tone is only for the rail's search hint.

### Secondary
- **Madder** (madder): the muscle red of the plates, used in the UI only for the one primary button, which carries a soft-light cloth grain. **Madder Deep** (madder-deep) is its hover.

### Tertiary
- **Callout Ochre** (ochre): plate callout discs, legend keys, the relief-step numerals on the cloth, prose bullets, the active TOC dot, the active rail-link underline, the 404 numeral, the "all guides" disc and text selection.

### Warn
- **Warn Red** (warn) with **Warn Wash** (warn-wash): reserved for error states (form and search failures). "When to see a doctor" red flags are drawn in madder-deep cloth instead, so the chart keeps its own palette.

### Neutral
- **Linen Ground** (ground): the sheet and the body background, under the linen texture (`assets/plates/ground.png`, a procedural seamless grain at 512px). The rail, the cover around the sheet and every cloth strip share one procedural book-cloth weave (`assets/plates/rail-cloth.png`, 512px); the spine is `assets/plates/rail-binding.png`, cut from the comp and repeated down the rail.
- **Chart Paper** (paper): inputs, the cookie bar, the search dialog and the paper-light callout letters on plates.
- **Panel** (panel) and **Wash** (wash): loading skeletons, the scrollbar track and the hover fill on rows, links and outline controls.
- **Hairline Rule** (rule): 1px dividers inside tables, lists and the legend frame.
- **Ink** (ink): leads, row metadata, strong text and link text. **Body** (body): reading text. **Muted** (muted): descriptions, crumbs, captions and meta lines.

### Named Rules
**The One Red Frame Rule.** Exactly one kind of frame says "see a doctor": the chart frame in madder-deep under a madder-deep cloth strip. The warning icon and the words carry the alarm; colour alone never does. Warn red is kept for error states only.

**The One Madder Action Rule.** A view has at most one madder button. Every other action is a slate outline or an ink link.

**The Ochre Callout Rule.** Ochre marks and points, and it never fills a surface. Letters on the plate's own callout discs are paper-light. At legend size the key letter is ink on ochre, for AA contrast.

## Typography

**Display Font:** Cabin variable (with Verdana, sans-serif)
**Body Font:** Cabin variable (with Verdana, sans-serif)

**Character:** Cabin is the only face, a humanist chart-room sans. Lettering (headings, the rail, buttons, card titles and tags) is narrowed on the width axis to 86 (the axis is loaded at 75–100). Reading text stays at full width. Headings are slate, weight 700, line-height 1.05, with balanced wrapping.

### Hierarchy
- **Display** (700, clamp(3rem, 13vw, 4.5rem); on lg 6.3 units, 1): the home hero title only.
- **Headline** (700, clamp(2.25rem, 6vw, 3.5rem); on lg max(2.75rem, 4.2 units), 1.02): article titles. Hub and service titles use clamp(2.5rem, 7vw, 3.75rem), and on lg max(3.25rem, 4.6 units).
- **Section** (700, 1.875rem, 2.25rem from sm, 3 units on lg): home and hub section heads under a 2px slate rule. Prose h2 is 1.75rem, or 2.125rem from sm.
- **Title** (600, 1.375rem; on lg max(1.25rem, 1.62 units), 1.1): chart-card strips and prose h3. Index row titles are 1.25rem/600 in slate.
- **Lead** (400, 1.1875–1.25rem, 1.3–1.5): hero and page intros in ink, at most 44rem wide.
- **Body** (400, 1.125rem, 1.72): prose in body colour, held to a 68ch measure. Prose list items are 1.0625rem.
- **Label** (700, 1rem, 1.2, sentence case): footer column heads, the disclaimer head and search section heads.
- **Small** (0.875–0.9375rem): crumbs, meta, footer links and the cookie text. Text never goes below 0.875rem.
- **Numeral** (700, 2.75rem; on lg max(2.5rem, 3.6 units), 0.85, lining tabular figures): ochre relief-step numbers on the cloth.

### Named Rules
**The Narrowed Lettering Rule.** Anything lettered onto the chart (headings, rail, buttons, strips) uses Cabin at wdth 86. Paragraphs never do.

**The Sentence-Case Rule.** Labels and tags are sentence case. Nav items, crumbs and the wordmark are lower case, as in the copy. There are no uppercase tracked labels and no eyebrows above headings.

## Layout

**Desktop (lg, 64rem and up).** The layout is a two-column grid: a rail track (`--rail`, max(260px, 19.86 units)) and the sheet. The rail is sticky and full-height and scrolls on its own. From top to bottom it holds the wordmark, a rule, six nav links, the search button, an EN/kontakt row, a 2px rule, and the "Szybka ulga" panel with three ochre-numbered steps. The sheet is slate cloth with 0.5-unit padding on the top, right and bottom, and the linen paper sits inside it. Measurements on desktop are multiples of the unit `--u` (clamp(10px, 1vw, 18.72px)), taken from the comp.

**Gutters.** These are 1rem on phones, 2rem from sm (40rem), and on lg 3.2 units left and 4.8 units right. Sections are separated by 4rem, or 4 units on lg. Each section opens under a 2px slate rule at 70% opacity.

**Home.** The hero title and lead sit at the left. The engraved leg plate runs absolutely at the right edge, 43.8 units wide, and fades in from the top. Its legend is inside the drawing. Below it is a 3-column grid of chart cards (columns in the comp ratio 21.55 : 23.24 : 24.67) holding eight guide cards and an "all guides" card. After that come the topic index (a two-column chart table with plate thumbnails), the red doctor frame and the FAQ.

**Article.** A header grid puts the title, lead and meta on the left and the guide's plate in a 34-unit right column, closed by a 2px rule. The body is one reading column up to 48rem wide, with a 19-unit sticky framed contents chart beside it. The doctor frame and the disclaimer follow, then FAQ and related guides as plate-thumbnail rows.

**Below lg.** The rail folds into a sticky top bar: the wordmark, a search icon button and a menu button, each 44px. The menu opens the same rail as a drawer holding nav, language and contact, and quick relief. On the home page the "Szybka ulga" panel appears inline after the hero as a 7px-cornered cloth panel. The hero plate stacks above the title, and its legend sits under the plate as a wrapping row. Chart cards are 15rem tall: one column on phones, two from sm. Article plates move above the title, capped at 15rem tall. The contents chart becomes a collapsible ruled `<details>`. Chart tables drop to one column.

## Elevation & Depth

The interface is flat. Depth comes from the materials: woven cloth over the linen, the paper set into the cloth, and the engraving in the plates. Chart cards, frames and tables carry no drop shadow. Only overlays lift.

### Shadow Vocabulary
- **Paper set in cloth** (`box-shadow: inset 0 1px 3px rgb(10 16 15 / 0.35), 0 0 0 1px rgb(10 16 15 / 0.35)`): the linen page on desktop, plus a 2px slate outline inset by 0.5 units.
- **Spine cord** (`box-shadow: 2px 0 3px rgb(10 16 15 / 0.35)`): the two-cord binding strip at the rail's left edge.
- **Rail edge** (`box-shadow: inset -2px 0 0 rgb(10 16 15 / 0.35), inset -3px 0 0 rgb(220 221 213 / 0.12)`): the fold where the rail meets the sheet.
- **Overlay lift** (`box-shadow: 0 -8px 24px rgb(10 16 15 / 0.18)`): the cookie bar.
- **Callout emboss** (`text-shadow: 0 1px 1px rgb(60 42 12 / 0.55)`): paper-light letters on the plate's ochre discs.

### Named Rules
**The Engraving Stays In The Plate Rule.** Hatching, tint and modelling belong to the plates. UI surfaces are flat fills, cloth texture or linen, ruled in slate.

## Shapes

The chart's corners are only softened. Frames (chart cards, chart frames, chart tables, the inline relief panel and the contact warning) are 7px with a 2px slate border and a 3px inset. Cloth title strips nest at 4px inside them. Controls (buttons, inputs, category chips) are 6px, and so are the paper's corners on desktop. Small rail controls, the legend box and link focus areas are 3px. Callout discs, legend keys, read marks, TOC dots, the FAQ toggle and the footer social buttons are full circles. Rules are 2px slate between sections and 1px rule-colour inside lists. The index leader is a 2px dotted line at 45% opacity.

## Components

### Buttons
- **Shape:** gently softened (6px), at least 3rem tall, 1.5rem side padding, weight 700, narrowed lettering.
- **Primary (madder cloth):** madder fill and 2px border, on-slate text, a cloth texture at soft-light (420px tile of the shared book cloth). On hover it moves to madder-deep over 120ms.
- **Line:** a 2px slate border with ink text on the linen. On hover the fill becomes wash.
- **Focus (global):** a 3px ink outline, offset 2px, with a 6px ochre halo, so it shows on both linen and cloth.

### Chips
- **Category chip:** a 6px, 2px slate outline, 44px tall, slate semibold text with a muted count. On hover the fill becomes wash. It is used for the hub's category jump links.

### Cards / Containers
- **Chart card:** a 7px frame with a 2px slate border and 3px padding, then a cloth title strip (4px, centred title), the guide's engraved vignette (object-fit contain) and the reading time at the bottom right, haloed in ground. On hover the paper lightens, the strip deepens to slate-deep and the plate scales to 1.03 over 240ms.
- **Chart frame + cloth strip:** the same frame around any sheet chart, such as the contents chart or the contact form, headed by a cloth strip.
- **Red frame (see a doctor):** the frame in madder-deep under a madder-deep cloth strip (soft-light grain, 512px), with a warning icon and the title. Its rows carry madder-deep warning icons and 1px rules. The contact page's "no medical advice" note uses the same madder-deep border and icon.
- **Chart table:** a 7px slate frame, clipped, holding one or two columns of rows. Each row draws its own top and left hairline, so the grid needs no outer-edge logic.

### Inputs / Fields
- **Style:** a 6px corner, 2px slate border at 70% opacity, a paper fill, ink text, 0.75rem by 1rem padding and 1.0625rem text. Labels are 1rem/700 ink above the field.
- **Focus:** the border becomes solid slate, plus the global ink ring and ochre halo.

### Navigation
- **Rail:** on-slate lettering on cloth. Links are 1.25rem (on lg max(1.125rem, 1.82 units)); the current page is bold, others medium. On hover a 2px underline appears in currentColor. The current page carries an ochre underline. Search is a 3px-cornered 1.5px on-slate outline field. Below lg the rail is a top bar with a menu toggle (see Layout).
- **Breadcrumbs:** small, muted, lower case, with ink links on a slate/50 underline.
- **Contents chart:** a framed chart with a cloth strip. Its rows have a slate ring dot that fills ochre on the current section.

### Plate and Key (signature)
An engraved plate with transparent background on the linen. Ochre callout discs drawn into the plate are lettered A, B, C in paper-light Cabin 700 at 3.1cqw, with an emboss. The key lists the letters as 1.45em ochre discs with ink letters beside plain labels. On wide screens the key floats in a 3px-cornered rule-bordered linen box inside the drawing. Below lg it sits under the plate as a wrapping row. On entrance the plate settles (700ms, opacity and 0.75rem rise, cubic-bezier(0.22, 1, 0.36, 1)), then each callout pins in turn (360ms scale from 0.3, staggered 120ms after 420ms).

### Chart Index Row
The guide's plate thumbnail (4rem by 3rem, 7.5rem by 5rem from sm), then the slate title, a dotted leader, "~N min" in tabular figures, a read mark and an arrow. The read mark is an empty linen ring that fills slate once the guide has been visited, done in CSS only. The description is muted below. On hover the row fills wash and the arrow moves 2px.

### Relief Steps
Three steps on cloth. Each has an ochre numeral and a medium-weight step text, separated by 2px on-slate rules. They appear in the rail and, below lg, in the inline home panel.

### FAQ Accordion
A native `<details>` inside a chart table. The question is a 1.25rem/600 heading. The toggle is a 32px slate ring with a plus that rotates 45° when open and fills slate.

## Do's and Don'ts

### Do:
- **Do** give every guide its own engraved plate and use it twice: in the article header and as the guide's thumbnail in hub rows, cards and related links.
- **Do** put every chart on the sheet in the 7px slate frame with a 3px inset and head it with a 4px cloth strip.
- **Do** size desktop layout in units of `--u` so it keeps the comp's proportions, and fall back to rem below lg.
- **Do** keep reading text at 68ch and full Cabin width, and keep lettering at wdth 86.
- **Do** pair every red flag with the warning icon and words.
- **Do** honour reduced motion: all animation stops, transitions drop to 0.01ms and smooth scroll turns off.

### Don't:
- **Don't** use stock photography or decorative images. A picture must explain anatomy or a remedy.
- **Don't** use warn red for anything except error states; red flags use madder-deep cloth.
- **Don't** add a second madder button to a view, and don't fill surfaces with ochre.
- **Don't** set paper-light letters on legend-size ochre keys. They fail AA, so use ink.
- **Don't** add drop shadows to cards, frames or tables. Only overlays lift.
- **Don't** put eyebrows or uppercase tracked labels above headings.
