# React stack

Frontend only. Details: [stack-nextjs.md](./stack-nextjs.md). Icons: [icons-and-emoji.md](./icons-and-emoji.md).

## When to ask

| Situation | Action |
|-----------|--------|
| Greenfield, user did not name stack | Ask once: Next (default) or Vite? pnpm ok? |
| User named Next, pnpm, etc. | Do not ask |
| Lockfile exists | Match lockfile |

Default: **pnpm + Next.js + TypeScript + Tailwind v4**.

## Greenfield install

```bash
pnpm create next-app@latest app --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
pnpm add framer-motion react-markdown remark-gfm react-icons
```

Optional (user asks for emoji picker):

```bash
pnpm add @emoji-mart/react @emoji-mart/data
```

Use `set="apple"` in Emoji Mart ([icons-and-emoji.md](./icons-and-emoji.md)).

## Rules

- `.tsx` only
- Skill data: real files when user has them; mock seed only if none ([data-source.md](./data-source.md))
- No backend, DB, or auth unless user explicitly requests later
