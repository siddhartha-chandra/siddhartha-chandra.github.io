# Design System: Siddhartha Chandra

## North star: Connected thinking

A precise, confident personal site where systems, data, and people meet. The signature is a living point sculpture, not a dashboard: visitors can explore three connected forms while the content stays clear and credible.

The owner selected this direction over an expressive collage concept. It replaces the earlier warm editorial “Study” direction.

## Palette

| Token | Light | Dark |
| --- | --- | --- |
| Paper | `#f7f7f2` | `#141a17` |
| Ink | `#202621` | `#eeefe5` |
| Muted | `#62695f` | `#a8b2a4` |
| Line | `#d7dbcf` | `#354036` |
| Accent | `#335c45` | `#bfdb9b` |
| Soft | `#edefe6` | `#1e2720` |

Use sage sparingly on a warm ivory or deep graphite ground. Keep body text at 4.5:1 contrast or better. Dark mode is an equally considered composition, not a color-filtered afterthought.

## Typography and rhythm

- One system-sans stack, with weights 450–660 and tight display tracking.
- Oversized, short display headings; calm, generously spaced supporting text.
- Relative font sizes, wrapping navigation, and responsive columns accommodate text enlargement.
- A 1280px maximum shell, with 56px desktop and 20px mobile minimum side margins.
- Fine rules, generous vertical rhythm, and asymmetric editorial sections rather than identical card grids.
- Inner-page heroes pair a large heading with a concise introduction. Long-form posts use a narrower reading column.

## Shared components

- The eight-spoke identity, primary navigation, theme control, and conversational footer are shared includes.
- Navigation uses a pill outline for the current page; nested writing pages use `aria-current="location"`.
- Controls are pill-shaped with visible keyboard focus. Main controls have 44px targets.
- Containers use 8px rounding, flat backgrounds, and fine borders. Subtle shadows appear only on interactive hover.
- Resume history and writing indexes use ruled rows, not stacks of cards.
- The project detail retains its interactive Rubik’s cube and live-solver link.
- Factual copy comes from existing portfolio/resume/project content. Do not invent metrics, affiliations, or claims.

## Motion

The home sculpture is a dependency-free canvas drawing of three parametric forms: a knot (systems), wave (data), and sphere (people). Pointer position adjusts its viewpoint; the selector changes the form.

- Always provide a pause/play control and a non-animated SVG fallback.
- Reduced-motion preferences start the sculpture paused; changing the preference updates playback.
- Stop requesting frames when the sculpture is offscreen or the document is hidden.
- Mode changes remain usable while paused; supporting content is never animation-dependent.
- Keep the kinetic signature on the home page. Inner pages should be quiet enough to read.

## Avoid

Gradient text, glassmorphism, decorative UI grids, fake telemetry, incessant animation, identical icon/heading/body card grids, excessive rounding, and resting drop shadows. The sculpture should communicate connection and curiosity without obscuring the person or the work.
