# AI Library - UI Kit

Faithful recreation of the **AI Library** product (`ai.productizedcoach.com`) - the AI-tooling web app for productized coaches. Mobile-first, with a desktop sidebar layout.

## What's here

- `index.html` - interactive click-thru of the app: landing → dashboard → Tools list → Copy Studio mode-select → AI Zac chat → Business DNA intake.
- `Shell.jsx` - `<Shell>` (sidebar + header + mobile bottom nav), `<Sidebar>`, `<Header>`, `<MobileNav>`.
- `ToolCard.jsx` - `<ToolCard>` (standard) and `<DnaCard>` (the dashed-gold CTA).
- `Buttons.jsx` - `<PrimaryButton>`, `<OutlineButton>`, `<DarkButton>`, `<GhostButton>`, `<IconButton>`.
- `Inputs.jsx` - `<TextInput>`, `<TextArea>`, `<SearchInput>`.
- `Chat.jsx` - `<ChatBubble>`, `<ThinkingBubble>`, `<ChatComposer>`.
- `Hero.jsx` - `<HeroLogoBlock>` (the dark-green block with the gold glyph), `<GoldRule>`.
- `Screens.jsx` - `<LandingScreen>`, `<DashboardScreen>`, `<ToolsScreen>`, `<CopyStudioScreen>`, `<AIZacScreen>`, `<DNAScreen>`.

## Approach

Pixel-faithful to the source codebase (`Zachansen/productized-coach-platform`). Components mirror the real Tailwind classes one-to-one, but as plain CSS using the design-system tokens. Lucide icons are loaded as inline SVGs (a tiny subset - the kit ships its own `Icon` helper that renders by name).

This is a recreation, not production code. Click-throughs use simple React state, not Convex/Clerk.
