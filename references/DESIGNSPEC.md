# DESIGNSPEC

Premium **documentation-style** SKILL.md UI. **UI only** - no backend, API, DB, or auth. Data rules: [data-source.md](./data-source.md).

## Feel

- Clean, calm, Apple-like whitespace (not SaaS dashboard)
- No gradients, glass, neon, or flashy motion
- Content-first; one accent color (muted sage/stone, not default blue)

## Layout and spacing

- Mobile-first; reading column `max-w-3xl`
- Spacing scale: **8 / 16 / 24 / 32 / 48 / 64 / 96** px
- Section gaps: 48-96px; card padding: 24px
- Sticky minimal nav; optional collapsible sidebar
- Grid for skill list on home

## Typography

- Inter or system UI; monospace for code
- H1 semibold `text-balance`; body `leading-relaxed` (~1.65)
- Use `-` in UI copy lists; avoid em dashes

## Color

| Token | Light | Dark |
|-------|-------|------|
| bg | `#fafaf9` | `#0f0f12` |
| text | `#1c1c1e` | `#f5f5f7` |
| muted | `#6b6b6f` | `#a1a1a6` |
| border | `#e8e8ed` | `#2c2c2e` |

Light mode is default. Dark via ThemeToggle + localStorage.

## Components

See [components.md](./components.md) for TSX. Names: DocCard, TagRow, PlainButton, LoadingBlock, ContentWidth.

| UI | Notes |
|----|--------|
| DocCard | title, summary, tags, hover lift, View link |
| PlainButton | rounded-xl, soft border/fill |
| Input | border or underline, `:focus-visible` |
| Markdown | GitHub-like code, quotes, list spacing |
| Pagination | numbers + prev/next, sync `?page=` in URL |
| Toast | copy, save, use skill |

## Skeleton (mandatory)

Every place content appears must have a skeleton state first:

- Home card grid -> `DocCardSkeleton` x N
- Detail body -> lines + code block placeholder
- Create preview pane -> markdown skeleton
- Sidebar / filter panel -> LoadingBlock rows

Use `LoadingBlock` / `DocCardSkeleton` from [components.md](./components.md). Soft neutral fill, `animate-pulse`, `motion-reduce:animate-none`. No harsh contrast.

## Motion

- framer-motion: **opacity** and **transform** only
- Card hover: `-translate-y-0.5`, ~200ms
- Forbidden: `transition: all`, bounce, decorative loops
- `prefers-reduced-motion`: disable transform

## Icons

Default: **react-icons**. Emoji picker only if user asks: **Emoji Mart**, `set="apple"`. Full detail: [icons-and-emoji.md](./icons-and-emoji.md).

## UX

- Feedback on every action (toast or `aria-live`)
- Visible hover and focus
- Confirm destructive actions
