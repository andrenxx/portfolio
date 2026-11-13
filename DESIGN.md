---
name: André Natividade — Portfolio
description: A recruiter-grade developer portfolio on a near-black navy ground with one navy-blue accent taken from his sweater in the portrait.
colors:
  ground: "#0a0c11"
  raise: "#10131a"
  raise-2: "#151924"
  ink: "#eceef4"
  ink-2: "#b0b6c6"
  ink-3: "#8a91a3"
  accent: "#253c6d"
  accent-text: "#6880bb"
  accent-hover: "#2f4a84"
  line: "rgba(236, 238, 244, 0.08)"
  line-2: "rgba(236, 238, 244, 0.14)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "8px"
  lg: "14px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  section: "clamp(56px, 8vw, 96px)"
  label-column: "240px"
  wrap: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    height: "40px"
    padding: "0 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.raise-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "40px"
    padding: "0 16px"
  lang-switch-active:
    backgroundColor: "{colors.raise-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
---

# Design System: André Natividade — Portfolio

## Overview

The category-standard developer portfolio, built to Linear's level of finish. Order and clarity carry the page: a fixed label column on the left, content on the right, hairline dividers between sections, nothing floating loose. Personality comes from one decision only, the name set huge in narrow heavy Archivo, with the surname in the navy-blue accent. Everything else is quiet and precise.

## Colors

### Primary
- **Navy** `#253c6d`: the single accent, taken from the navy sweater in the portrait. Fills the primary button (white text), list ticks and active states.
- **Navy text** `#6880bb`: the same hue lightened for text on the dark ground: surname, links, company names, focus rings. Primary buttons, links, the surname, focus rings, text selection, the tick marks in lists, the active card dot in the project demo. Never used as a large fill beyond buttons.

### Neutral
- **Ground** `#0a0c11`: page background, a near-black tinted toward navy.
- **Raise** `#10131a` and **Raise 2** `#151924`: the project demo surface and secondary buttons.
- **Ink** `#eceef4`: headings, names, primary text.
- **Ink 2** `#b0b6c6`: body copy.
- **Ink 3** `#8a91a3`: dates, stack lines, labels, footer.
- **Line** 8% and **Line 2** 14% white: hairline dividers and inset borders.

### Light theme
Follows `prefers-color-scheme`. Ground `#f5f6f9`, raise `#ffffff`, raise-2 `#eceff5`, ink `#0d1120`, ink-2 `#3b4254`, ink-3 `#596074`, lines at 9/15/24% of ink. The navy `#253c6d` serves both as fill and as text color (surname, links) on light. Shadows soften to 16–18% ink.

### Named Rules
- **One accent.** The navy accent is the only chromatic color on the page. Secondary text is tinted from the ground, never neutral grey.

## Typography

One family, Archivo, used at two widths. Display and section heads run narrow (font-stretch 68–72%), weight 800, uppercase. Body runs at normal width, weight 400.

### Hierarchy
- Name: up to 6rem, line-height 0.88, two lines.
- Section heads: 32–40px, uppercase, sticky in the label column on desktop.
- Lead: 18–21px, max 46ch.
- Body: 17px, max 64ch, `text-wrap: pretty`.
- Meta (dates, stack, labels): 14px in Ink 3, tabular numerals for dates.

### Named Rules
- **No eyebrows, no section numbers.** A heading stands on its own.
- **No monospace costume.** Monospace only for real code, which the page has none of.

## Layout

Max width 1120px with a fluid gutter. Each section is a two-column grid: a 240px label column holding the sticky section head, and the content column. Sections are separated by a 1px top hairline and 56–96px of vertical padding. Experience rows use a 150px date column. Below 860px the label column stacks above the content; below 760px the top nav collapses to initials plus the language switch, and the portrait moves above the name.

## Elevation & Depth

Flat by default. Depth appears only on the portrait and the project demo: a soft, offset drop shadow plus a 1px inset light border. The top bar uses a translucent ground with backdrop blur so content passes under it.

## Shapes

Radius 6px on small controls, 8px on buttons, 14px on the portrait and the project demo. Dividers are hairlines, never thick bars.

## Components

### Buttons
Primary is navy with white text; secondary is Raise 2 with a 1px inset Line 2 border. Both 40px tall (48px in the closing section), 8px radius, 600 weight. Hover lightens; external-link arrows nudge 1px up-right.

### Navigation
Sticky 60px bar: initials mark, section links in Ink 3 that lift to Ink on a Raise 2 hover pill, and a segmented PT / EN / ES switch with the current locale raised.

### Project demo (signature)
A single raised surface showing DumpIt's mechanism: the free-text input on top with a blinking accent caret, and three Kanban columns below separated by hairlines, cards marked by a small dot (accent for the active column). Captioned as an illustration.

## Do's and Don'ts

### Do:
- Tie every claim to a real role, number or project.
- Keep the navy accent as the only one.
- Keep the one motion moment: the name entering once on load.

### Don't:
- Don't add cards inside cards, metric strips, pill-tag clouds, eyebrows or section numbers.
- Don't use Inter, Geist or Space Grotesk.
- Don't add colored side borders, gradient text or glow halos.
