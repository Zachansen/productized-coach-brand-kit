# Productized Coach Design System

> **What to look at:** open the **Design System** tab in the side panel - every card there is a reviewable specimen of one piece of the system (a color group, a type size, a button set, a chat bubble, etc). Click any card to see it bigger; flag with comments to revise.
>
> Big picture: this is the brand and product design system for **The Productized Coach** - a coaching brand and AI-tooling platform helping coaches and consultants build productized offers, sales pages, and acquisition systems.

## Where things live

| What | Where |
|---|---|
| Color tokens, type scale, semantic vars | `colors_and_type.css` |
| Brand fonts (Libre Baskerville + Work Sans) | `fonts/` |
| Logos (full lockup + emblem, dark / light / cream) | `assets/logos/` |
| Lucide icon usage | `assets/icons/` (CDN-loaded in HTML) |
| Reviewable design-system cards | `preview/*.html` |
| AI Library product UI kit (interactive) | `ui_kits/ai-library/` - open `index.html` |
| Claude Code / Agent Skill manifest | `SKILL.md` |

> **Recently extended.** Beyond the marquee brand surface (serif headings, gold rule, dark-green anchors), the system now also covers a neutral gray ladder, semantic status colors, a dark-mode palette, a utility type pairing for dense data UI, an ornament family (double rule / asterism / diamond / initial cap), product signature marks, motion specimens, an accessibility floor, and an explicit "avoid" gallery. See the new sections below.

---

## Aesthetic direction

Editorial, confident, "Mad Men meets modern coaching app." Libre Baskerville serif headlines, Work Sans body, deep dark-green ink, gold rule dividers, Lucide line icons. Light backgrounds dominate; dark-green + gold sections are *occasional* anchors, not the canvas.

**Backgrounds - cleaned up.** The previous warm-cream `#F8F7F5` canvas was reading as beige/muted; the canvas is now a clean cool-white `#FBFBFB`. Cream stays in the palette but only as an intentional accent (section blocks, the rare highlighted card). Never as the global page background.

---

## Sources

- **Brand kit repo (logos / fonts / palette of record):** https://github.com/Zachansen/productized-coach-brand-kit
- **Product codebase (AI Library web app):** https://github.com/Zachansen/productized-coach-platform - Next.js 16 App Router, TypeScript, Tailwind v4, Convex, Clerk, Lucide icons.
- Marketing site (`productizedcoach.com` / `ai.productizedcoach.com`) - referenced via product copy.

The reader of this design system does not need access to the above; everything they need is mirrored locally. Sources are listed for traceability.

---

## Products represented

The Productized Coach ecosystem ships under one brand but spans:

1. **AI Library** (`ai.productizedcoach.com`) - the flagship. Mobile-first web app with ~40+ AI tools for coaches: Offer Therapist, North Star Promise Generator, Productized Offer Builder, Copy Studio, AI Zac (chat coach), VSL Generator, Belief Engineering Ads, etc. Sidebar nav on desktop, bottom tab bar on mobile.
2. **Marketing / brand presence** - site, decks, docs, social, ads. Same vintage palette + serif headlines.

The UI kit covers AI Library. There's no separate marketing-site codebase available, so we don't recreate one.

---

## Content fundamentals

Voice: **direct, no-BS, casual but strategic, with a coach's swagger.** Talks to you, not at you. Assumes the reader is a working coach or consultant - busy, smart, allergic to fluff.

- **Casing:** Sentence case for nearly everything (buttons, headers, body). Title Case only for proper-noun product names ("Business DNA", "North Star Promise", "Copy Studio"). All-caps reserved for tiny gold eyebrow labels.
- **Person:** Always second-person ("you", "your"). AI Zac and Copy Studio say "I" when introducing themselves.
- **Verbs over nouns.** "Build your foundation," not "Foundation creation."
- **Specificity.** Numbers, dollar amounts, time-to-completion: "$3K-$15K offer docs", "Takes about 5 minutes", "200+ clients", "average $7K/month".
- **Length.** Headers 2-5 words. Tool descriptions one sentence, under 10 words. Body under 2 short paragraphs.
- **Tone markers:** contractions, em-dashes, "killer" / "stop the scroll" / "play" / "win back". Never ironic, never apologetic.
- **Emoji:** none, anywhere. Visual punctuation = Lucide icons + the gold rule.
- **Signature phrases (lift directly):** "Hey, {firstName}", "What are we building today?", "Hell Island", "North Star Promise", "Cash Cycle", "Productized Offer", "Mid-ticket", "Stop the scroll", "Belief Engineering", "Finger-Pointing Language".

---

## Visual foundations

**Vibe:** editorial, confident. Light canvas dominates. Dark sections are accents, used sparingly. Generous whitespace. Letterforms do most of the visual work.

**Colors.**
- Canvas `#FBFBFB` (cool off-white) - global page background.
- White `#FFFFFF` - cards, sidebar, header, modals.
- Dark Green `#013121` - headlines, dark anchor blocks, the home-screen logo plate.
- Dark Spring Green `#1C6E42` - primary buttons, active nav, links.
- Sage cascade `#498B68 → #84C2A1 → #9DD9B9` - hover states, soft accents.
- Jet `#32312E` - body text (warm near-black, never pure black).
- Gold `#C4A265` - eyebrow labels, the gold rule, "premium" treatments around dark cards.
- Cream `#FAF8F3` - *opt-in* accent only (a section block, a featured card). Never the page background.

**Type - full-strength ink, no muted gray.**
- **Headings:** Libre Baskerville (400 / 700), always Dark Green. Letter-spacing `-0.01em`.
- **Body:** Work Sans variable, **18 px / 1.65** in Jet at full opacity (recommended). 17px and 16px are available for compact contexts. Earlier "muted" body styles have been removed - body is full-strength `--fg-strong`.
- **Lead paragraph:** 19 px / 1.5, weight 500, in Dark Green. Used for the first paragraph after a heading or hero subtitles.
- **Eyebrow label:** Work Sans 700, 12 px, all-caps, `tracking-widest` (0.14 em), Dark Green text with a gold dot accent.

**Spacing.** 4-px grid (Tailwind v4). Sections breathe at `py-8 md:py-10`; pages cap at `max-w-3xl px-5`. Cards use `p-5` interior. Stack rhythm `space-y-3` for card lists, `mb-8` between section blocks.

**Borders.** Default hairline is now `#ECECEA` (neutral). The warm-cream `#E8E0D0` is still available as `--border-warm` for the rare gold/featured card. Inputs use a 1.5px taupe border; focus shifts to the spring-green accent with a soft halo.

**Corner radii.** `rounded-2xl` (16) on cards and inputs. `rounded-xl` (12) on buttons and icon tiles. `rounded-md` (6) on the chat-bubble tail corner. `rounded-full` only for pills/avatars. Nothing sharp-cornered.

**Shadows.** Almost none. `shadow-sm` on resting buttons / lifted cards, `shadow-md` on hover. No inner shadows, no colored glows, no stacked drops. Hierarchy comes from the gold rule, not elevation.

**The Gold Rule.** A 1px horizontal divider with `linear-gradient(90deg, transparent, #C4A265, transparent)` fill. Used between sections, after page titles, as a centered hero ornament (`w-12` or `w-24`). The signature vintage motif - use it liberally between major content blocks.

**Animation.** Subtle, editorial. Page entries: `fade-in` (0.3s ease-out, 8px Y) and `fade-in-up` (0.4s, 16px). Step transitions: `slide-in-right` / `slide-in-left` (0.35s, 24px X). Generating: `gentle-pulse` on the dark-green plate (2s, 0.6→1 opacity, 1→1.05 scale). Easing is always `ease-out` or `cubic-bezier(0.455, 0.03, 0.515, 0.955)`. No springs.

**Hover.** Cards: border lifts to `gold/40`, shadow `sm → md`. Buttons: bg darkens. Nav: bg `transparent → bg-soft`, text `→ accent`.
**Press.** `active:scale-[0.98]` everywhere. Mobile-tab uses `active:scale-95`.

**Transparency / blur.** Almost none. Opacity is reserved for "coming soon"-style de-emphasis (≥ 50%). No backdrop-blur. No glassmorphism.

**Imagery.** No photographic backgrounds. No illustrations beyond the logo emblem. Visual interest = type + gold rule + dark-green plate + Lucide line icons. If photography is added in marketing: warm-toned, slightly grainy, B&W or muted-warm. Never cool-blue corporate-stock.

**Layout.** Mobile-first; works at 360px. Desktop = 256px sidebar + flex-1 content. Pages center on `max-w-3xl` (or `max-w-2xl` for chat / `max-w-lg` for forms). Top header sticky `h-16`. Mobile bottom nav fixed `h-[60px]`. Centered, not full-bleed.

**Cards (the canonical "tool row").** Notion/Capacities-flavored: a tight horizontal row with a 28px pastel-tile + tonal-darker glyph on the left, name + one-line description, optional category meta on the right. Hover = subtle gray wash, not shadow. Each tool gets its own tile color (gold / green / spring / rose / violet / clay / sky) - see `preview/components-toolcard.html`.

---

## Iconography

**System:** [Lucide](https://lucide.dev) - strictly. Loaded via `lucide-react` in the product, mirrored as inline SVG in the UI kit's `Icon.jsx`. Stroke-based, 24 px default, 2 px stroke, rounded line caps.

**Sizing scale.** 14 (inline / chips) · 16 (button + send actions) · 20 (nav + back) · 22 (mobile tab) · 24 (tool tile) · 28 (empty-state hero) · 32 (landing-page hero plate).

**Color application.**
- `text-accent` (Dark Spring Green) - default tool-tile glyph
- `text-gold` - premium / featured / dark-bg contexts
- `text-muted` - chevrons, dividers, "coming soon"
- `text-white` - on rare dark-green button or "Done" check
- `text-fg` - header back-arrow, neutral nav

**Active vs inactive nav.** Mobile tab uses `strokeWidth={2.5}` for active, `2` for inactive - a subtle weight shift instead of a color flood.

**Logo as iconography.** The PC emblem (stylized "p" with a curl forming "c") is the brand mark - favicon, avatar, watermark only. Three flat-color variants: Dark Green, Jet, White. Never recolored, gradient-filled, or shadowed.

**No emoji. No Unicode chars as icons. No custom hand-drawn SVG** (the home-screen wallet/book glyph is the only sanctioned exception).

**Substitutions:** none - Lucide is in the codebase.

---

## Extended foundations

### Neutral gray ladder

The brand palette is warm and editorial, but real product UI also needs cool-warm neutrals for borders, dividers, placeholders, secondary text, and disabled states. The 7-step ladder is calibrated against jet ink (`#32312E`), not pure black, so it sits beside the brand colors without feeling foreign.

| Token | Hex | Role |
|---|---|---|
| `--color-gray-50`  | `#F7F7F6` | Subtle surface tint |
| `--color-gray-100` | `#ECECEA` | Hairline border (default) |
| `--color-gray-200` | `#DCDCD8` | Divider, disabled border |
| `--color-gray-300` | `#BFBEB9` | Placeholder, mute icon |
| `--color-gray-400` | `#8E8C86` | Secondary meta |
| `--color-gray-500` | `#6B6963` | Tertiary text on light |
| `--color-gray-700` | `#3F3D38` | Utility heading ink |

Body text remains `--fg-strong` (`#32312E`). Grays are for *meta*, not *message*.

### Semantic status colors

Calibrated to the brand - no neon. Each pair = ink + bg.

| State | Ink | Bg | Use |
|---|---|---|---|
| Success | `#3F7A56` | `#E5EFE7` | Saved, uploaded, onboarded |
| Warning | `#B8943C` | `#F7EFD8` | Limit nearing, review needed |
| Error   | `#B6443A` | `#F4DEDA` | Failed, invalid, destructive |
| Info    | `#466478` | `#DDE6EC` | Tips, neutral notices |

Tokens: `--color-success` / `--color-success-bg`, etc. Pair the ink with its bg or use the ink alone on a white surface - never invert.

### Dark mode

Not an inversion - a different palette. Charcoal-green canvas, gold doing more of the visual lifting, sage shifted lighter for legible accent text. Activate by adding `data-theme="dark"` on `<html>`.

| Token | Light | Dark |
|---|---|---|
| `--bg`             | `#FBFBFB` | `#14201A` |
| `--bg-elevated`    | `#FFFFFF` | `#1B2922` |
| `--fg-strong`      | `#1A1A1A` | `#FAF6E8` |
| `--fg-muted`       | `#6B6963` | `#D8D2BE` |
| `--accent`         | `#1C6E42` | `#84C2A1` |
| `--border`         | `#ECECEA` | `#2A3A32` |

The gold rule still works in dark mode - gold against charcoal is the system's strongest pairing.

**Legibility note.** Dark-mode subtext is *intentionally* a strong warm-white (`#D8D2BE`, ~10:1 on canvas), not the dim sage you'd see in a typical dark theme. Older readers shouldn't have to squint at gray-on-charcoal "muted" text. Use `--fg-muted` freely for captions and meta - it still passes WCAG AAA.

### Utility type pairing

For dense workhorse UI - settings tables, billing rows, history logs, raw data - the editorial Libre Baskerville + gold accents are *too much*. Use the utility pairing instead:

- Family: `--font-utility` (Work Sans only, no serif)
- Color: `--color-gray-700` for ink, `--color-gray-500` for headers
- Weight: 400 body, 600 headers
- Numerals: `font-variant-numeric: tabular-nums` on counts and money

This is the *only* sanctioned departure from "headings always Libre Baskerville." It applies to data UIs, not editorial surfaces.

### Ornament family

The gold rule has siblings - use them sparingly to vary rhythm:

- **Double rule** - two 1px gold lines, 4px apart. Vintage editorial feel for opening pages and section breaks.
- **Diamond** - gold rule with a centered rotated square. For "end of section" closures.
- **Asterism** - three small serif asterisks centered, in gold. For deep section breaks in long-form content.
- **Initial cap** - 3em Libre Baskerville bold drop cap on the first letter of a paragraph. For long-form essays only - not UI.

Don't mix. Pick one ornament per page.

### Signature marks

Major products and concepts in the ecosystem get a 1-color line-mark beyond the wordmark - useful for navigation tiles, deck section dividers, and dark-mode accent tiles. Marks are gold-on-dark-green by default and follow the Lucide stroke language (24×24, 2px stroke, rounded caps).

Current set: Business DNA (helix-ladder), North Star Promise (compass + star), Cash Cycle (orbit + coin), Hell Island (flame + tide), AI Zac (compass needle), Copy Studio (quill nib), Productized Offer (stacked blocks), Belief Engineering (mind-gear).

### Motion specimens

Four motion patterns, all tuned for "editorial confidence" - no springs, no bounces.

| Specimen | Curve | Use |
|---|---|---|
| **Reveal** (scaleX 0→1, 600ms) | `cubic-bezier(.6,.05,.2,1)` | Section openers, gold rules drawing in |
| **Lift** (translateY 0→-6px, 200ms) | `ease-out` | Card hover; pair with `shadow-sm → shadow-md` |
| **Pulse** (scale 0.6→2.6, 1000ms loop) | `ease-out` | Live indicator on AI streaming, on-air calls |
| **Marquee** (translateX 0→-50%, 14s loop) | `linear` | Eyebrow kickers on landing pages |

Reduced-motion: shorten reveal/lift to instant; freeze pulse and marquee.

### Accessibility floor

These are non-negotiable.

- **Contrast.** Body text on canvas ≥ 4.5:1 (WCAG AA normal). The default pair `#32312E` on `#FBFBFB` is ~14.6:1 - we're well above the floor. Gold (`#C4A265`) on dark-green (`#013121`) is ~7.1:1 - pass. Gold on white (`#FFFFFF`) is ~2.6:1 - **eyebrow / decoration only, never body**.
- **Tap targets.** Minimum 44 × 44 px on touch surfaces (iOS HIG). Preferred 56px for primary CTAs.
- **Focus ring.** `box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 35%, transparent)` plus a gold border. Always visible on `:focus-visible`. Never `outline: none` without a replacement.
- **Reduced motion.** Honor `prefers-reduced-motion: reduce` on every motion specimen.

### Avoid (the don'ts)

The brand reads "editorial coaching firm," not "AI startup landing page." Specifically:

- ❌ **Neon / magenta gradients.** The canvas stays cream/white; backgrounds are quiet.
- ❌ **Emoji bullets.** Use a gold dot, en-dash, or numbered serif initial.
- ❌ **Left-bar accent cards** (the indigo `border-l-4` cliché). Use a top gold rule instead.
- ❌ **Stretched / warped wordmark.** Resize uniformly only.
- ❌ **Long all-caps body.** Caps are for eyebrows, not paragraphs (≥ 12 words).
- ❌ **Inter / system-ui for headings.** Headings are Libre Baskerville. Always.
- ❌ **Drop shadows on type.** No glow, no neon outline.
- ❌ **Carousels / sliders for primary content.** Stack and scroll instead.

See `preview/brand-avoid.html` for the visual gallery.

---

## Chat patterns (which to use when)

Chat is the dominant interaction in AI Library - it shows up in AI Zac, every tool's input flow, and every "AI wrote something back" moment. One bubble component can't serve all those contexts well, so the system ships **three distinct patterns**, each tuned to a different mode of use.

| Pattern | When to use | Why |
|---|---|---|
| **Notion cards** *(default)* | Every tool conversation: Offer Therapist, Copy Studio, North Star Promise Generator, VSL Generator, etc. - anywhere the AI's output is *artifact-like* (a draft, a framework, a list, a structured deliverable). | First-class slots for frameworks, drafts, code blocks. Hover-revealed Copy/Regenerate/Use/Save actions attach to the artifact. Scales to 20+ turn sessions. Mobile-first. Reads as "memo on the desk," not "friend texting." |
| **Editorial dialogue** | AI Zac standalone chat only - the casual back-and-forth coaching conversation. | Gold rule + serif sender labels match the editorial brand. Conversational. Fits short turns. Doesn't compete with AI Zac's voice. |
| **Letter / correspondence** | Signature moments only: weekly briefing screens, onboarding, "AI Zac wrote you back" notification-as-app-screen, daily recap. Not a default chat surface. | Goes hardest on the Mad Men brand. Dateline, salutation, drop-cap, signature. Use sparingly - one letter in a high-stakes context, never as a working chat. |

**Rule of thumb:** if the user is *working* (building an offer, drafting copy), use Notion cards. If they're *thinking* with AI Zac, use Editorial dialogue. If they're being *spoken to* in a marquee moment, use Letter.

---

## Reference

This is the brand system for **The Productized Coach** - used to build product UI (AI Library), marketing surfaces, decks, and any branded artifact. Anything you generate for this brand should compose from the tokens, components, and patterns documented above and rendered in `preview/`.
