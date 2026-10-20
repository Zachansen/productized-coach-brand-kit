---
name: productized-coach-brand-kit
description: Applies the current Productized Coach / Productized OS visual brand system to design and aesthetic work only. Use whenever creating or editing the look of Productized Coach, Productized OS, AI Library, coaching platform, marketing visuals, decks, documents, worksheets, spreadsheets, HTML, React UI, app screens, ads, landing pages, or branded artifacts. This skill is not for copywriting, messaging, phrasing, tone, or word choice. Follow the bundled guide, logos, colors, typography, layout, UI patterns, motion, accessibility rules, and visual avoid list before producing final output.
---

# Productized Coach Brand Kit

Use this skill for design and aesthetics only.

It exists to keep future artifacts visually on brand:

- Color
- Typography
- Layout
- Spacing
- UI components
- Logo usage
- Icon usage
- Motion
- Accessibility
- Overall visual feel

Do not use this skill for:

- Copywriting
- Messaging
- Phrasing
- Tone of voice
- Headlines
- Hooks
- Sales language
- Word choice
- Offer positioning

If the artifact needs words, preserve the user's supplied words unless they ask separately for copy help.

The full source guide lives at:

`references/brand-guide/`

The source zip was:

`C:\Users\zacha\Projects\_active\productized-os\Brand\Brand Colors and Style Guide.zip`

## First move

Before making any branded visual artifact:

1. Identify the visual surface: UI, deck, document, worksheet, spreadsheet, landing page, ad creative, app screen, or internal tool.
2. Apply the quick visual rules below.
3. For coded or high-fidelity visual work, read the relevant file from `references/brand-guide/`.
4. Use bundled logos from `assets/logos/` when a logo is needed.
5. Leave text alone unless the user separately asks for wording.

## Visual feel

The aesthetic is:

- Editorial
- Confident
- Premium
- Calm
- Strategic
- Sharp but not flashy
- "Mad Men meets modern coaching app"

It should look like a serious coaching firm with strong product taste.

Not like:

- Generic AI startup
- Neon SaaS page
- Beige lifestyle brand
- Corporate template
- Crypto dashboard
- Over-designed creator brand

## Core rules

Use the brand like this:

- Light canvas dominates.
- Dark green sections are occasional anchors, not the whole page.
- Gold is a rule, tiny accent, premium detail, or dark-section detail.
- Cream is an intentional accent only, never the global background.
- Visual interest comes from type, spacing, gold rules, dark green plates, and Lucide icons.
- Avoid photographic backgrounds by default.
- Avoid illustrations beyond the logo emblem unless the user specifically asks.
- Keep the interface composed and restrained.

## Color tokens

Use these as the default palette:

| Token | Hex | Use |
|---|---:|---|
| Canvas | `#FBFBFB` | Global page background |
| White | `#FFFFFF` | Cards, headers, sidebars, modals |
| Dark Green | `#013121` | Headlines, anchors, dark plates |
| Dark Spring Green | `#1C6E42` | Buttons, links, active nav |
| Sea Green | `#498B68` | Hover and tertiary accents |
| Cambridge Blue | `#84C2A1` | Soft accent |
| Celadon | `#9DD9B9` | Light accent, success tint |
| Jet | `#32312E` | Primary text color, warm near-black |
| Gold | `#C4A265` | Rules, premium accents, small labels |
| Cream | `#FAF8F3` | Rare accent blocks, featured cards |
| Hairline | `#ECECEA` | Default borders and dividers |

Semantic colors:

| State | Ink | Background |
|---|---:|---:|
| Success | `#3F7A56` | `#E5EFE7` |
| Warning | `#B8943C` | `#F7EFD8` |
| Error | `#B6443A` | `#F4DEDA` |
| Info | `#466478` | `#DDE6EC` |

Gold on white is decoration only.

Do not use gold as body text on white.

## Typography

Use type as a visual system, not a copy system.

Fonts:

- Headings and display: `Libre Baskerville`
- Body, labels, navigation, inputs, and UI: `Work Sans`
- Dense utility UI: `Work Sans` only

Visual rules:

- Headings use Dark Green.
- Body/UI text uses Jet.
- Display type can be large, sparse, and editorial.
- Dense UI should be tighter, cleaner, and less ornamental.
- Use tabular numerals for counts, money, and table values.
- Do not use Inter or system UI for branded headings.
- Do not overuse all caps. Reserve it for tiny labels only.

Recommended scale:

- Eyebrow or tiny label: 12px, Work Sans 700, wide tracking
- Caption: 13px
- Small UI: 14px
- Compact body/UI: 16px
- Comfortable body: 18px / 1.65
- Lead visual text: 19px / 1.5, weight 500
- Section heading: 24px to 36px
- Hero/display: 36px to 48px when the surface supports it

## Layout

Default layout rules:

- Mobile-first.
- Must work at 360px wide.
- Center pages around `max-w-3xl`.
- Use `max-w-2xl` for chat or narrow app surfaces.
- Use `max-w-lg` for forms.
- Desktop app layout can use a 256px sidebar plus flexible content.
- Header height around 64px.
- Mobile bottom nav around 60px.
- Sections breathe at `py-8 md:py-10`.
- Cards use around `p-5`.
- Use a 4px spacing grid.

Composition:

- Give the page air.
- Keep section rhythm obvious.
- Stack primary content instead of hiding it in carousels.
- Use full-width bands or clean constrained layouts.
- Avoid nested card-on-card compositions.
- Avoid cluttered ornamentation.

## Cards and surfaces

Cards:

- Cards and inputs: 16px radius.
- Buttons and icon tiles: 12px radius.
- Pills and avatars only: full radius.
- Borders: `#ECECEA` hairline.
- Shadows: almost none.
- Hover can lift from `shadow-sm` to `shadow-md`.
- Use a top gold rule when a card needs emphasis.
- Avoid left-border accent cards.

Tool rows:

- Tight horizontal row.
- 28px pastel tile on the left.
- Tonal-darker glyph inside the tile.
- Name and one-line description can exist if the product needs them, but do not invent new copy.
- Optional category/meta on the right.
- Hover should feel like a subtle gray wash, not a dramatic lift.

## Gold rule

The gold rule is the main brand ornament.

Use it:

- Between major sections
- After page titles
- As a centered hero ornament
- At widths like `w-12` or `w-24`

CSS:

```css
.gold-rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, #C4A265, transparent);
  border: 0;
}
```

Use one ornament style per page.

Good ornament options:

- Gold rule
- Double gold rule
- Diamond
- Asterism
- Initial cap for long-form editorial surfaces only

## Icons and logos

Use Lucide icons only.

Icon rules:

- Stroke based
- 2px stroke
- Rounded caps
- 24px default
- 14px for inline or chips
- 16px for button actions
- 20px for nav or back actions
- 22px for mobile tabs
- 28px for empty-state hero icons
- 32px for landing-page hero plates
- Active mobile nav can use 2.5px stroke

Avoid:

- Emoji
- Unicode symbols as fake icons
- Random custom SVGs
- Filled icon sets
- Icons with mismatched stroke weight

Logo files:

| File | Use |
|---|---|
| `assets/logos/full-dark-green.svg` | Default full lockup on light backgrounds |
| `assets/logos/full-jet.svg` | Neutral full lockup |
| `assets/logos/full-white.svg` | Full lockup on dark backgrounds |
| `assets/logos/emblem-dark-green.svg` | Favicon, avatar, watermark on light |
| `assets/logos/emblem-jet.svg` | Neutral emblem |
| `assets/logos/emblem-white.svg` | Emblem on dark |
| `assets/logos/emblem-jet.png` | Raster fallback |

Never:

- Recolor the logo
- Stretch it
- Warp it
- Add gradients
- Add outlines
- Add drop shadows
- Put it on low-contrast backgrounds

## Motion

Motion should feel editorial and calm.

Use:

- Fade in: 0.3s ease-out, 8px Y
- Fade in up: 0.4s ease-out, 16px Y
- Slide in: 0.35s ease-out, 24px X
- Gentle pulse for generating states
- Gold rule reveal for section openers

Avoid:

- Springs
- Bounces
- Flashy animation
- Constant motion
- Decorative motion that competes with the content

Always honor `prefers-reduced-motion: reduce`.

## Accessibility floor

Meet these every time:

- Web Content Accessibility Guidelines contrast floor: 4.5:1 for body text
- Tap targets: minimum 44 x 44px
- Primary touch targets: 56px preferred
- Visible `:focus-visible` style
- No `outline: none` unless replaced with a real focus treatment
- Reduced-motion support for animation
- Gold on white is not accessible for body text

## Chat and AI surfaces

Use the right visual pattern:

| Pattern | Use when |
|---|---|
| Notion cards | Default for tool workflows and artifact-like AI output |
| Editorial dialogue | AI Zac standalone coaching conversation |
| Letter / correspondence | Signature moments like weekly briefings, onboarding, daily recaps |

Rule of thumb:

- If the user is working, use Notion cards.
- If the user is thinking with AI Zac, use Editorial dialogue.
- If the app is presenting a marquee moment, use Letter.

This is visual guidance only.

Do not invent the message inside the chat, card, or letter.

## File-type application

### HTML and React

Use `references/brand-guide/colors_and_type.css` as the source of truth.

Prefer semantic tokens:

```css
:root {
  --bg: #FBFBFB;
  --bg-elevated: #FFFFFF;
  --fg: #32312E;
  --fg-strong: #013121;
  --accent: #1C6E42;
  --rule-gold: #C4A265;
  --border: #ECECEA;
  --font-heading: 'Libre Baskerville', Georgia, 'Times New Roman', serif;
  --font-body: 'Work Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

For AI Library style interfaces, inspect:

- `references/brand-guide/ui_kits/ai-library/README.md`
- `references/brand-guide/ui_kits/ai-library/kit.css`
- `references/brand-guide/ui_kits/ai-library/Screens.jsx`

### Presentations

Use:

- Light canvas
- Big Libre Baskerville section titles
- Work Sans supporting text where text already exists
- Dark Green title ink
- Gold rule between sections
- Sparse slides
- Strong visual hierarchy
- No stock-photo hero unless the user specifically asks
- Full lockup on cover and final slides when useful

Do not write slide copy.

Only style or structure the existing words unless the user separately asks for wording.

### Documents and worksheets

Use:

- Libre Baskerville for title and headings
- Work Sans for body areas
- Dark Green headings
- Jet body text where text already exists
- Gold rule under major headings
- Clear scan rhythm
- Strong margins
- Light canvas or white surfaces

Do not rewrite the content.

### Spreadsheets

Use:

- Work Sans only
- Dark Green header row with white text
- White and Canvas alternating rows
- Hairline borders
- Gold only for premium or key-marker accents
- Tabular numerals
- Clean alignment and readable spacing

Do not rename columns, rewrite labels, or change wording unless asked.

## Avoid list

Do not produce:

- Neon or magenta gradients
- Emoji bullets
- Indigo left-border accent cards
- Stretched wordmarks
- Long all-caps paragraphs
- Inter headings
- System-ui headings
- Drop shadows on type
- Glows
- Glassmorphism
- Carousels for primary content
- Cool-blue corporate stock imagery
- Dark green or gold everywhere
- Overly beige pages
- One-note green pages
- Decorative clutter
- New copy or rewritten phrasing

The brand wins through restraint.

## Reference guide

For deeper work, load only the needed reference:

| Need | Read |
|---|---|
| Full visual guide | `references/brand-guide/README.md` |
| Color and type tokens | `references/brand-guide/colors_and_type.css` |
| Logo examples | `references/brand-guide/preview/brand-logos.html` |
| Avoid examples | `references/brand-guide/preview/brand-avoid.html` |
| Buttons | `references/brand-guide/preview/components-buttons.html` |
| Inputs | `references/brand-guide/preview/components-inputs.html` |
| Navigation | `references/brand-guide/preview/components-navigation.html` |
| Tool cards | `references/brand-guide/preview/components-toolcard.html` |
| Chat patterns | `references/brand-guide/preview/components-chat-cards.html` |
| Motion | `references/brand-guide/preview/motion-specimens.html` |
| AI Library UI kit | `references/brand-guide/ui_kits/ai-library/` |

## Final check

Before handing work back:

- The output looks editorial, confident, calm, and premium.
- It uses Libre Baskerville plus Work Sans when visual.
- It uses Dark Green, Jet, Canvas, White, Gold, and Spring Green correctly.
- The page is not beige, neon, blue-corporate, or one-note green.
- The gold rule appears when a section needs brand rhythm.
- Logos are used from bundled assets and not recolored.
- Lucide icons are used instead of emoji.
- Layout is clean, breathable, and mobile-safe.
- Accessibility basics are handled.
- No new copy was created unless the user separately asked for copy.
