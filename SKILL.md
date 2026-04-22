---
name: productized-coach-brand-kit
description: Applies the Productized Coach brand — logos, fonts, and colors — to documents, presentations, and artifacts. Use when creating any .docx, .pptx, .xlsx, HTML, React, or styled output for Productized Coach. Automatically applies Libre Baskerville for headlines and Work Sans for body text, plus the green/neutral color palette, and provides logo files in SVG and PNG.
---

# Productized Coach Brand Kit

Apply these logos, fonts, and colors to all document and artifact creation.

## Logos

Logo files live in `assets/logos/` next to this skill.

| File | Variant | Color | When to use |
|------|---------|-------|-------------|
| `full-dark-green.svg` | Full lockup | Dark Green #013121 | Default on light backgrounds |
| `full-jet.svg` | Full lockup | Jet #32312E | Neutral/monochrome layouts |
| `full-white.svg` | Full lockup | White #FFFFFF | On dark or photo backgrounds |
| `emblem-dark-green.svg` | Emblem only | Dark Green #013121 | Favicon, avatar, tight spaces |
| `emblem-jet.svg` | Emblem only | Jet #32312E | Neutral/monochrome layouts |
| `emblem-white.svg` | Emblem only | White #FFFFFF | Dark backgrounds |
| `emblem-jet.png` | Emblem only (raster) | Jet #32312E | Fallback when SVG isn't supported |

Use the full lockup for headers and covers. Use the emblem for tight spaces, favicons, and watermarks. Always pick the color variant with the strongest contrast against the background. Don't recolor, stretch, or outline the logos.

## Fonts

| Use | Font |
|-----|------|
| Headlines, Titles, Subheadlines | Libre Baskerville |
| Body Text, Labels, UI Elements | Work Sans |

## Colors

### Main Palette

| Name | Hex | Use |
|------|-----|-----|
| Dark Green | #013121 | Primary brand color, headers, accents |
| Dark Spring Green | #1C6E42 | Secondary green, buttons, links |
| Jet | #32312E | Body text, dark backgrounds |
| Seasalt | #F8F7F5 | Light backgrounds, cards |
| White | #FFFFFF | Backgrounds, contrast |

### Extended Palette

| Name | Hex | Use |
|------|-----|-----|
| Sea Green | #498B68 | Tertiary accent, highlights |
| Cambridge Blue | #84C2A1 | Soft accent, hover states |
| Celadon | #9DD9B9 | Light accent, success states |
| Taupe Gray | #968F8E | Muted text, borders, dividers |

## Application by File Type

### Word Documents (.docx)
```javascript
// Styles config
styles: {
  default: { document: { run: { font: "Work Sans", size: 22 } } },
  paragraphStyles: [
    { id: "Title", run: { font: "Libre Baskerville", bold: true, color: "013121" } },
    { id: "Heading1", run: { font: "Libre Baskerville", bold: true, color: "013121" } },
    { id: "Heading2", run: { font: "Libre Baskerville", bold: true, color: "1C6E42" } }
  ]
}
```

### Presentations (.pptx)
- Title slides: Libre Baskerville, Dark Green (#013121)
- Section headers: Libre Baskerville, Dark Spring Green (#1C6E42)
- Body text: Work Sans, Jet (#32312E)
- Backgrounds: Seasalt (#F8F7F5) or White (#FFFFFF)
- Accent elements: Sea Green (#498B68) or Cambridge Blue (#84C2A1)

### HTML/React Artifacts
```css
:root {
  --color-primary: #013121;
  --color-secondary: #1C6E42;
  --color-accent: #498B68;
  --color-text: #32312E;
  --color-bg: #F8F7F5;
  --color-white: #FFFFFF;
  --color-muted: #968F8E;
  --font-heading: 'Libre Baskerville', Georgia, serif;
  --font-body: 'Work Sans', system-ui, sans-serif;
}
```

### Spreadsheets (.xlsx)
- Header row background: Dark Green (#013121), white text
- Subheader background: Dark Spring Green (#1C6E42), white text
- Alternating rows: White / Seasalt (#F8F7F5)
- All text: Work Sans
