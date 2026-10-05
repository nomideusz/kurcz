---
name: kurcz.pl
description: The patient leaflet for muscle cramps. Leaflet paper, black ink rules, one saffron box colour.
colors:
  spot: "#f2a20c"
  spot-deep: "#c47e00"
  spot-wash: "#fcebc4"
  warn: "#c4161c"
  paper: "#fafaf7"
  sheet: "#ffffff"
  panel: "#f0efe9"
  ink: "#151515"
  body: "#262626"
  muted: "#57564f"
  rule: "#d6d5ce"
typography:
  display:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(2.375rem, 5.4vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.72
  small:
    fontFamily: "Atkinson Hyperlegible Next, Verdana, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  xs: "2px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  row: "20px"
  section: "80px"
  container: "1240px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.xs}"
    padding: "0 24px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "#3a3a3a"
  button-rule:
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "0 24px"
    height: "48px"
  button-rule-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  chip-number:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.xs}"
    padding: "0 6px"
    height: "28px"
  chip-red-flag:
    backgroundColor: "{colors.warn}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.xs}"
    padding: "0 6px"
    height: "28px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "12px 16px"
  input-field-focus:
    backgroundColor: "{colors.sheet}"
  list-row-hover:
    backgroundColor: "{colors.spot-wash}"
---

# Design System: kurcz.pl

## Overview

**Creative North Star: "Ulotka dla pacjenta"**

kurcz.pl reads like the patient leaflet folded inside every medicine box in Poland: thin off-white paper, black ink, numbered sections, plain answers, and warnings in ruled boxes. The home page, the hubs and the footer are the box itself, printed in one flat saffron spot colour with embossed Braille. Each article is the leaflet unfolded: a numbered contents list, numbered sections that match it, and a red-flag box where a doctor is needed.

Density is that of a reference document, not a magazine. Structure comes from horizontal rules (1px and 2px black lines, plus a pale hairline between list rows), not from cards, fills or shadows. Lists are ruled rows that flood with a pale saffron wash on hover. The only motion is that hover wash, a small arrow nudge, and the open state of native disclosures; reduced motion is respected.

The system rejects the health-portal card grid, the cream-and-serif editorial magazine, the clinical blue look, the spa look, and anything loud or trendy. Light theme only: dark mode was deliberately left out, because a printed leaflet has no dark mode.

**Key Characteristics:**
- One spot colour (saffron) on leaflet paper under black ink.
- 1px and 2px black rules carry all structure; no shadows, no gradients.
- Square corners with a 2px soften on chips, buttons and fields.
- Condensed bold heads (Archivo Narrow) over a hyperlegible body (Atkinson Hyperlegible Next).
- The numbering apparatus: numbered contents, numbered sections, numbered steps, numbered red flags.
- Drawn square-cap SVG arrows; no Unicode glyphs as icons.
- No photographs or figures in articles.

## Colors

One printed spot colour, one warning red, and a paper-and-ink neutral set.

### Primary
- **Box Saffron** (spot): the medicine-box colour. Full-bleed bands (home box front, hub headers, 404, footer), the 6px strip at the top of the masthead, number chips, the 3px link underline, text selection, and the outer ring of the focus indicator.
- **Embossed Saffron** (spot-deep): only for the Braille dots on a saffron band, where a slightly darker tone of the same ink reads as embossing.
- **Saffron Wash** (spot-wash): hover flood on links and ruled list rows, and the success message ground in the contact form.

### Secondary
- **Warning Red** (warn): reserved for doctor red flags. The solid warning triangle, the red-flag number chips (white numerals), and error messages in forms. Never decorative.

### Neutral
- **Leaflet Paper** (paper): the page ground and the masthead.
- **Sheet White** (sheet): panels laid on the page: the quick-relief leaflet, warning boxes, the contact form, the cookie bar, the search dialog.
- **Panel Grey** (panel): quiet fills only: the AI-answer disclaimer box, skeleton loaders, the scrollbar track.
- **Ink** (ink): headings, rules (1px and 2px), solid buttons, and the strongest text.
- **Body Ink** (body): running text.
- **Muted Ink** (muted): descriptions under list titles, meta lines, placeholders.
- **Hairline** (rule): 1px dividers between rows inside a 2px-ruled list.

### Named Rules
**The One Box Colour Rule.** Saffron is the only accent. It appears as full-width bands, number chips, link underlines and hover washes, never as a tint on cards, never as a second hue next to another accent.

**The Red Means Doctor Rule.** Warning red marks only the things that mean "stop reading and see a doctor" (and form errors). Sequences and contents are numbered in saffron; red chips with white numerals are for red flags alone.

## Typography

**Display Font:** Archivo Narrow 700 (with Arial Narrow, sans-serif), self-hosted via Astro's fonts API.
**Body Font:** Atkinson Hyperlegible Next 400/700 (with Verdana, sans-serif).
**Label/Mono Font:** the system monospace stack, only for the keyboard hint in search.

**Character:** a condensed, upright, slightly tight head over a body face designed for low-vision legibility. It reads like pharmaceutical print set by someone who cares about older readers.

### Hierarchy
- **Display** (700, clamp(3.25rem, 9vw, 6rem), 0.92): the home H1 on the saffron band, and the 404 numeral.
- **Headline** (700, clamp(2.375rem, 5.4vw, 4rem), 0.98): article and hub H1s (hubs run slightly larger, up to 4.5rem).
- **Title** (700, 2rem to 2.5rem, 1.08): section heads on home and hubs; article H2s run at 1.75rem to 2.125rem with the section number chip before them.
- **Title small** (700, 1.375rem to 1.625rem, tight): list-row titles, FAQ questions.
- **Body** (400, 1.0625rem, 1.6): interface text and lists.
- **Prose** (400, 1.125rem, 1.72, max 68ch): article paragraphs.
- **Small** (400, 0.9375rem): row descriptions, nav links, meta. Nothing that carries content goes below 0.8125rem (footer legal line only).
- **Label** (700, 0.875rem, 0.06em, uppercase, condensed): headings of navigation blocks only (contents, footer columns, disclaimer, search panels).

### Named Rules
**The Condensed Head Rule.** Every heading is Archivo Narrow 700, ink, balanced wrap. Step titles inside the quick-relief list are the one exception: set in the body face bold, because they are instructions, not headings.

**The Caps Are Navigation Rule.** Uppercase tracked caps label navigation blocks (contents, footer columns, panels). They are never placed above a heading as a kicker or eyebrow.

## Layout

A single 1240px container with 16px gutters (32px from the sm breakpoint). Section pages use a two-column rail at lg: a left heading column (18rem on home and hubs, 16rem on articles) and a content column, 64px apart; below lg it stacks. Article reading measure is capped at 46rem for the column and 68ch for paragraphs and lists.

Lists of links sit in a 2px top rule and split into two columns from sm (40px column gap), each row closed by a 1px rule, with 20px vertical row padding. Sections are spaced about 80px apart. The home box front lays the white quick-relief panel over the bottom edge of the saffron band (56px overlap at lg). The masthead is sticky, 64px tall plus the 6px saffron strip; anchor scroll padding is 88px.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is stated in print terms: a white sheet with a 1px ink border laid on paper, or laid across the edge of a saffron band. The only box-shadow in the system is the focus ring (3px ink outline, 2px offset, 6px saffron ring), which is a state signal, not elevation. The search dialog dims the page with a 55% ink backdrop.

### Named Rules
**The Printed Sheet Rule.** If something needs to sit above something else, give it a white ground and a 1px or 2px ink border. Never a shadow, never a blur.

## Shapes

Square. Panels, warning boxes, sections and bands have hard 0px corners. Chips, buttons, fields and icon buttons take a 2px soften (rounded xs), the only radius in the system. Rules are 1px (structure inside a block, borders of sheets) or 2px (heavy rule: list tops, warning boxes, article header base, secondary button). Small solid ink squares mark bullets and the active mobile nav item. The Braille dots on the box band are the one circular form, and they are native to the world.

## Components

### Buttons
Plain, heavy, rectangular; there are only two.
- **Shape:** near-square (2px), at least 48px tall, 24px side padding, body face bold.
- **Ink (primary):** solid ink with white text; hover lifts to a dark grey. One per group, for the primary action (first aid, send, go home).
- **Rule (secondary):** transparent with a 2px ink border and ink text; hover inverts to ink.
- **Focus:** the global focus ring. Disabled solid buttons go mid-grey.
- An action that leads somewhere carries the drawn arrow after its label.

### Chips
- **Number chip:** saffron square, black condensed numeral, tabular figures, 28px tall (24px in the contents list). Numbers sequences: contents, sections, relief steps, situations.
- **Contents chip (rail):** in the desktop contents rail the chip is outlined in ink and fills saffron when its section is current.
- **Red-flag chip:** warning red with a white numeral. Used only in the "when to see a doctor" lists.
- **Time tag:** a 1px ink outline around a condensed time ("20–30 s") beside a relief step.

### Cards / Containers
There are no cards. Containers are printed sheets:
- **Leaflet panel:** white, 1px ink border, a 2px ink rule under its heading, 1px ink rule above its footer link.
- **Warning box:** white, 2px ink border, solid red triangle, then a 1px-ruled list of red-flag rows.
- **Saffron band:** full-bleed box front for home, hubs and 404; the footer is the same band, with the wordmark chip inverted.

### Inputs / Fields
- **Style:** 1px ink border, paper ground, 2px corners, 12px by 16px padding, 1.0625rem text, bold label above.
- **Focus:** ground turns white, plus the global focus ring.
- **Error / Success:** messages in a 2px box; red border and red bold text for errors, saffron wash with ink border for success.

### Navigation
- **Masthead:** paper ground, 6px saffron strip on top, 1px ink rule below. Wordmark left; text links in the body face at 0.9375rem; hover washes saffron; the current page is bold with a 3px ink bar on the masthead rule. First aid is always bold.
- **Mobile:** a 40px outlined square toggle with square-cap bars; the menu opens with a saffron first-aid block, then ruled rows with an ink square for the current page.
- **Breadcrumbs:** small ink text, links underlined at 35% ink, slash separators, current page bold.
- **Footer:** the saffron band; caps column heads over a 1px ink rule; outlined square social buttons that invert to ink.

### Ruled Link List (signature)
The main way to move between guides. A 2px ink top rule, then rows closed by 1px rules (hairline or ink). Each row: optional number chip, a condensed title (in topic lists, underlined with a 3px saffron line), a muted one-line description, and a drawn arrow that nudges right on hover. The whole row washes saffron on hover.

### Leaflet Link
Inline links are ink with a 3px saffron underline offset 3px; hover floods the link with saffron wash. In prose they are bold.

### Numbered Prose
Article H2s receive an automatic saffron number chip, counted to match the contents list. Prose lists sit in a 2px top rule with hairline rows and a small ink square for each bullet.

### Disclosure (FAQ and mobile contents)
Native details elements, zero JS. Ruled rows; a 28px outlined square with a plus that rotates to a cross and fills saffron when open.

### Wordmark
Lowercase condensed "kurcz" with ".pl" set on a saffron chip; on a saffron ground the chip inverts to ink with saffron text.

### Icons
Drawn SVG. Arrows (internal) and the diagonal external arrow use a 2.2 stroke with square caps. The warning triangle is solid red with a white bar and square dot.

## Do's and Don'ts

### Do:
- **Do** number every sequence with saffron chips: contents, sections, steps, situations.
- **Do** build structure from 1px and 2px ink rules and white sheets on paper.
- **Do** use the solid ink button for the single primary action and the 2px ruled button for the alternative.
- **Do** keep paragraphs at 1.125rem with a 68ch measure, and keep content text at 0.9375rem or larger.
- **Do** use the drawn square-cap arrow for anything that leads onward.
- **Do** keep every claim of authorship organizational ("Kurcz.pl"); never show a medical reviewer, author credit or badge that does not exist.

### Don't:
- **Don't** use shadows, gradients, blurs or rounded cards; the only radius is 2px.
- **Don't** add a second accent hue; saffron is the only box colour.
- **Don't** use warning red for anything except doctor red flags and form errors, and don't number ordinary sequences in red.
- **Don't** put a kicker or eyebrow line above headings; uppercase caps are for navigation-block headings only.
- **Don't** use Unicode characters (arrows, checks, stars) as icons.
- **Don't** add photographs or figure plates to articles; ink line drawings are the only figure form under consideration.
- **Don't** add a dark theme; the leaflet is light only.
