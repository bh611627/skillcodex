# Calm layout (Apple-ish spacing)

Use with doc-style React/Next UIs. Less chrome, more air.

## Vibe

Lots of empty space. One idea per section. Typography does the work - not boxes and gradients.

## Spacing (stick to these)

`8` · `16` · `24` · `32` · `48` · `64` · `96` (px)

- Between paragraphs: 16–24
- Inside cards: 24
- Between sections: 48–96
- Page top/bottom: 64+ on desktop

## Layout

- Main reading width: `max-w-3xl` (about 48rem)
- Page padding: `px-4` phone, `px-8` desktop
- Vertical stacks: `gap-16` or `gap-24` between major blocks

## Type

- **Inter** or system UI
- Headings: `font-semibold tracking-tight text-balance`
- Body: `text-base leading-relaxed` (line-height ~1.65)
- Muted copy: one gray step down - still readable

## Colors

| | Light | Dark |
|---|-------|------|
| Background | `#fafaf9` | `#0f0f12` |
| Text | `#1c1c1e` | `#f5f5f7` |
| Muted | `#6b6b6f` | `#a1a1a6` |
| Border | `#e8e8ed` | `#2c2c2e` |

One accent (sage/stone). No blue-default buttons. No gradients.

## Surfaces

Cards: light border, `rounded-2xl`, `p-6`, small lift on hover (`-translate-y-0.5`). Nav: thin, sticky, plenty of side padding.
