---
target: homepage
total_score: 37
p0_count: 2
p1_count: 3
timestamp: 2026-07-11T21-56-31Z
slug: layouts-home-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | `aria-current="page"` on nav, hover states everywhere, 404 explains itself |
| 2 | Match System / Real World | 4 | Natural language, jargon-minimal |
| 3 | User Control and Freedom | 3 | No external-link indicators on GitHub/LinkedIn |
| 4 | Consistency and Standards | 4 | Pill shapes, same card style, single font stack |
| 5 | Error Prevention | 4 | Simple site, few failure modes. 404 exists |
| 6 | Recognition Rather Than Recall | 4 | Nav always visible, clear labels |
| 7 | Flexibility and Efficiency | 2 | No skip-to-content, no keyboard shortcuts, no reduced-motion |
| 8 | Aesthetic and Minimalist Design | 4 | Clean, restrained. Tools section is the weak point |
| 9 | Error Recovery | 4 | 404 gives clear message + two CTAs |
| 10 | Help and Documentation | 4 | Site is self-explanatory |
| **Total** | | **37/40** | **Good — minor hardening needed** |

## Anti-Patterns Verdict

Not AI-generated. Detector found 11 findings (all in CSS, 0 in layouts). No slop, no gradient text, no glassmorphism, no decorative grids.

## Overall Impression

Genuinely well-designed — cleaner than 90% of portfolio sites. Issues cluster around completing what's been started: hardening accessibility, tightening the emotional arc's ending, eliminating the few elements that betray the otherwise meticulous restraint.

## What's Working

1. The two-line wordmark — a genuine piece of brand design.
2. Card hover language — consistent, tactile, predictable.
3. Palette discipline — teal used with genuine restraint.

## Priority Issues

**[P0] Missing focus indicators** — No `:focus-visible` anywhere. WCAG 2.4.7 failure.

**[P0] No skip-to-content link** — Keyboard users tab through 5 nav items before content. WCAG 2.4.1.

**[P1] Tools section is keyword dump** — 14 flat tags, no narrative. Emotionally flat ending.

**[P1] Shadow blur exceeds DESIGN.md spec** — 10px vs spec'd 8px. Opacity 0.06 vs 0.08.

**[P1] Blockquote side-stripe banned** — 3px border-left on blockquote violates anti-reference.

**[P2] No external link indicators** — GitHub/LinkedIn open in same tab, no warning.

**[P2] Resume subtitle undersells** — Omits AI, teaching, startup building.

**[P2] 404 copy references internal history** — Meaningless to first-time visitors.

**[P2] Resume h2 uses Deep Teal instead of Rust** — Design system drift.

**[P3] 6 font sizes off documented ramp** — Minor type scale drift.

**[P3] Wordmark is `<a>` but has no hover** — Code says interactive, design says not.

**[P3] No prefers-reduced-motion** — Transitions have no reduced-motion fallback.

**[P3] Profile photo as favicon** — Unrecognizable at 16x16px.

## Persona Red Flags

**Jordan (First-Timer):** Wordmark has no hover affordance despite being a link. "About" label on home ambiguous.

**Casey (Mobile User):** 14 tools tags wrap chaotically on mobile. Blog is thin (2 posts).

**Riley (Stress Tester):** No reduced-motion, shadow drift, wordmark affordance mismatch. Confirmed contrast passes at 5.52:1.

**Recruiter:** Warm landing, then resume subtitle pigeonholes. Blog too thin to showcase writing.

## Minor Observations

- `prof_pic_old.jpg` unused in assets/img
- `aria-current` uses string containment (fragile)
- Blog dedup post redirects to Notion — should signal external link
- `--glow` at 4% opacity may be imperceptible
- Resume hero has border-bottom, page-hero doesn't (inconsistent)
- Blog dates use uppercase tracked kicker class — heavy for dates
