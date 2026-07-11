---
name: Siddhartha Chandra
description: Personal portfolio — warm, grounded, substantive.
colors:
  deep-teal: "#075a4e"
  rust: "#8a3018"
  paper: "#faf8f5"
  ink: "#1a1816"
  muted: "#5c534a"
  line: "#d4cdc2"
  soft: "#ece4da"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.65rem, 7vw, 5.2rem)"
    fontWeight: 720
    lineHeight: 1.1
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.1rem"
    fontWeight: 720
    lineHeight: 1.1
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 1.45vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.92rem"
    fontWeight: 650
    letterSpacing: "normal"
  small:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  xs: "2px"
  sm: "6px"
  md: "8px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-link:
    backgroundColor: "rgba(251, 250, 247, 0.74)"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.35rem 0.72rem"
    border: "1px solid {colors.line}"
  button-link-hover:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.deep-teal}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.35rem 0.72rem"
    border: "1px solid {colors.line}"
  nav-link-hover:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.deep-teal}"
    border: "1px solid {colors.deep-teal}"
  card:
    backgroundColor: "rgba(251, 250, 247, 0.72)"
    rounded: "{rounded.md}"
    border: "1px solid {colors.line}"
    padding: "2rem"
  card-hover:
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
---

# Design System: Siddhartha Chandra

## 1. Overview

**Creative North Star: "The Study"**

A warm, grounded personal site that reads like a well-kept study — books on shelves, a clear desk, natural light. The visual system communicates capability through precision and restraint. Nothing flashy, nothing performative. Every element earns its place by serving the content.

The palette centers on a warm off-white paper background with deep teal as the anchor accent and rust as a secondary voice. Typography stays in the system sans-serif stack for reliability and readability. Surfaces are flat at rest with borders defining structure; hover states add a soft shadow and color shift as a deliberate response.

**Key Characteristics:**
- Warm but not decorative — the paper tone is a room, not a texture.
- Flat by default, shadows as response to interaction only.
- Rounded edges are gentle but not exaggerated (8px containers, pill-shaped interactive elements).
- Teal + rust read as deliberate, not accidental: one cool anchor, one warm counterpoint.
- Night mode inverts the room: deep warm charcoal, brighter accents for contrast.

## 2. Colors

A restrained, two-accent palette on a warm neutral ground.

### Primary
- **Deep Teal** (`#075a4e`): Primary accent. Used for links, hover states on nav and buttons, strong heading emphasis, and the wordmark's semantic anchor. Signals competence and calm.

### Secondary
- **Rust** (`#8a3018`): Secondary accent. Used for section headings (h2), wordmark surname, hover color on links, and the kicker label. Provides warm counterpoint to the teal.

### Neutral
- **Paper** (`#faf8f5`): Body background. A warm off-white — the room, not the decoration.
- **Ink** (`#1a1816`): Primary text color. A warm near-black, not pure #000.
- **Muted** (`#5c534a`): Secondary text. Used for hero copy, date stamps, role durations, card body text. Hits ≥4.5:1 against Paper.
- **Line** (`#d4cdc2`): Borders and dividers. A tinted warm gray that separates without visual weight.
- **Soft** (`#ece4da`): Hover and tinted surface backgrounds. One step darker than Paper, used for hover states and blockquote backgrounds.

### Named Rules
**The Rarity Rule.** Deep Teal is used on ≤25% of any given surface. Its rarity is what gives it weight. Use it deliberately — on links, headings, card accents, and interactive states — but never let it carry the surface alone.

## 3. Typography

**Display Font:** System UI sans-serif stack (`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Body Font:** Same stack (single-family system)

**Character:** A single-family system-sans approach. Reliability and performance over personality — the font disappears so the content speaks. The weight range (400–760) provides enough hierarchy without a second face.

### Hierarchy
- **Display** (720, `clamp(2.65rem, 7vw, 5.2rem)`, 1.1): Hero H1. Capped at 14ch width. Used only on the home page hero.
- **Headline** (720, `1.1rem–1.15rem`, 1.1): Card and role title headings; resume section h2/h3. Runs at the top of each signal/role/post-card component.
- **Title** (600, `1.05rem`, 1.3): Resume subtitle and section subheads.
- **Body** (400, `clamp(1rem, 1.45vw, 1.18rem)`, 1.6): All prose content. Max line length 42rem (~65–70ch).
- **Label** (650, `0.92rem`, 1): Navigation links, button text, profile note, tags. Paired with pill-shaped interactive elements.
- **Small label** (600, `0.8rem–0.9rem`): Meta text, role dates, table headers, footer text. Lowered emphasis.
- **Kicker** (750, `0.78rem`, uppercase `0.12em` tracking): Section kickers used sparingly — hero and page titles only.

### Named Rules
**The One-Stack Rule.** Never introduce a second font family. The system stack handles all roles. If a serif or display face is ever added, it must be for a deliberate, limited purpose (e.g., pull quotes or the wordmark), not as a general hierarchy tool.

## 4. Elevation

Flat by default. Depth is conveyed through borders (1px `var(--line)`) and tonal background shifts (`var(--soft)` on hover). Shadows are reserved for interactive state changes only — they signal affordance, not architecture.

### Hover Shadow
- **Card hover** (`box-shadow: 0 2px 8px rgba(0,0,0,0.08)`): Applied on card hover to indicate interactivity. Subtle enough to never compete with content. The shadow color `rgba(0,0,0,0.08)` is the canonical shadow value; the blur radius is capped at 8px.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to hover or focus. No surface carries a shadow as its resting state.

## 5. Components

### Buttons
- **Shape:** Full pill shape (999px).
- **Primary (button-link):** Paper background (`rgba(251,250,247,0.74)`) with 1px Line border, Ink text. Hover shifts to Soft background, Deep Teal border and text — the color migration signals intent.
- **States:** Hover triggers border + text color shift. No additional shadow on button hover (the color shift is sufficient).

### Navigation Links
- **Shape:** Full pill shape (999px), same as buttons — nav items and action buttons share a visual vocabulary.
- **Style:** Ink text, 1px Line border. Hover shifts to Soft background, Deep Teal border and text.
- **Active:** `aria-current="page"` uses the same hover treatment to mark the current page.

### Cards / Containers
- **Corner Style:** Gentle rounding (8px).
- **Background:** Paper at 0.72 opacity (`rgba(251,250,247,0.72)`) — enough to separate from the body background while staying transparent to the grid pattern beneath.
- **Border:** 1px solid Line.
- **Shadow Strategy:** None at rest. On hover, a soft shadow (`0 2px 8px rgba(0,0,0,0.08)`) lifts the card.
- **Internal Padding:** 2rem all sides.

### Wordmark
- **Style:** Two-line inline grid (`display: inline-grid`). First line: "Siddhartha" in Ink. Second line: "Chandra" in Rust. Font-weight 760. No hover treatment (not interactive).
- **Role:** Site identity marker, not a link back to home (anchor wraps it for accessibility, but the visual behaves as a static mark).

### Profile Panel
- **Image:** Rounded corners (8px), 1px Line border, slight saturation and contrast adjustment for print-to-screen matching.
- **Caption:** Muted color, smaller body size (0.92rem). Runs below the photo as a personal note.

### Tags / Chips (Tools section)
- **Style:** Inline spans, no container styling. Inherit body color, no background, no border. Deliberately minimal — tools are listed, not packaged.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Teal sparingly — the Rarity Rule applies across every surface.
- **Do** use Rust as the warm counterpoint — secondary headings, wordmark surname, kicker labels.
- **Do** keep surfaces flat at rest. Hover-only shadows, never resting shadows.
- **Do** use the single system-sans stack for all typography.
- **Do** use pill-shaped interactive elements (nav links, buttons) and 8px rounding for container cards.
- **Do** vary spacing for rhythm — sections use a 3–4rem vertical rhythm on a grid.

### Don't:
- **Don't** use gradient text, glassmorphism, or decorative grid backgrounds — the site is warm, not trendy.
- **Don't** use side-stripe borders (border-left/right > 1px as accent on cards or callouts).
- **Don't** add a second font family without a specific, limited purpose.
- **Don't** use card grids where every card is identically sized with icon + heading + text — vary the layout.
- **Don't** use tiny uppercase tracked kickers above every section; one on the hero is enough.
- **Don't** round cards beyond 8px — 12px+ reads as the AI rounding tell.
- **Don't** use box-shadows wider than 8px blur — soft and subtle or nothing.
