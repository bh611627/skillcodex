# SkillCodex design guidelines

> **STRICTLY UI/UX ONLY** - no backend, no APIs, no database, no authentication logic.
>
> Build a **premium documentation-style** UI for browsing, reading, and creating `SKILL.md` files (like [skills.sh](https://www.skills.sh/) but clearer). Inspired by SkillCodex - not SkillForge.

**Feel:** extremely clean, highly readable, Apple-level refined, documentation-first, calm, structured, minimal, professional. **NOT** AI-slop, flashy, gradient-heavy, glassmorphism, or SaaS-dashboard / SaaS-landing style.

Canonical web UI rules: **this file**. Use agent skill **web-design-guidelines** to implement or audit doc UIs (merged former `documentation-ui`).

---

## Package manager

| Task | Tool |
|------|------|
| New Next/React doc UI | **pnpm** (fast default) |
| Install `@skillcodex/skills` | **npm** |
| Existing user project | **Match lockfile** (`pnpm-lock.yaml` → pnpm, `package-lock.json` → npm) |

**UI stack (React - do not drop the core):** **React**, **TypeScript**, **Tailwind CSS**, **react-markdown**, **remark-gfm**, **react-icons**. Host with **Next.js (App Router)** or **Vite + React**; same layout and component rules apply.

**Motion:** prefer **`<div>` + Tailwind** (`transition-[transform,opacity]`, `hover:` - see **Motion** below). **framer-motion** is **optional**; use only in **client** code. **Do not** use `motion.div` in React Server Components (e.g. Next without `'use client'`) - it will error; use a **`<div>`** or a small **client** child component.

```bash
# Next.js (common for doc UIs)
pnpm create next-app@latest skillcodex-ui --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd skillcodex-ui && pnpm install
pnpm add react-markdown remark-gfm react-icons
# optional, only if you need enter/exit orchestration beyond CSS:
pnpm add framer-motion
pnpm dev
```

```bash
# Vite + React - install Tailwind using current Vite + Tailwind docs, then:
pnpm add react-markdown remark-gfm react-icons
# optional: pnpm add framer-motion
pnpm dev
```

---

## vs skills.sh (fill the gaps)

| skills.sh | SkillCodex UI should add |
|-----------|---------------------------|
| Install leaderboard | **Outcomes** per skill (what you get) - no fake install counts |
| `npx skills add owner/repo` | Show **GitHub path** + `npm install @skillcodex/skills` + clone command |
| Opaque listing | Full **SKILL.md** readable; metadata visible before install |
| Directory only | Dual format: GitHub markdown + npm module |
| Search leaderboard | Client search + tag filter + **URL state** `?page=&q=&tag=` |
| - | **Create skill** page (form + live markdown preview, client export) |
| - | **Guidelines** page (design + web interface rules) |
| - | **Skeleton loading** everywhere content loads |

---

## Anti-patterns (forbidden)

- SaaS landing (hero, **pricing strip**, **testimonial carousel** as primary funnel, logo wall, conversion funnels)
- SaaS dashboard (dense analytics, KPI widgets, chart grids)
- Gradients, glassmorphism (`backdrop-blur`), neon, glow
- `transition: all`
- Custom CSS classes when Tailwind utilities suffice
- Multiple accent colors or default blue buttons

---

## Core principles

- clarity over decoration
- **whitespace is a design feature** - generous vertical rhythm
- content-first; readability is highest priority
- mobile-first, then `md:` / `lg:`
- Tailwind utilities in TSX; CSS vars only for theme tokens (`bg-[var(--bg)]`, etc.)

### Whitespace rhythm (px)

`8` · `16` · `24` · `32` · `48` · `64` · `96`

- paragraph gap: 16-24
- card padding: `p-6` (24)
- between sections: `space-y-12` / `md:space-y-16` / `md:space-y-24`
- page vertical: `py-16 md:py-24`
- reading column: `max-w-3xl mx-auto`
- page padding: `px-4 md:px-8`

---

## Color and typography

**Light (default):** soft off-white bg, deep charcoal text (not #000), light gray borders, **one** muted sage/stone accent.

**Dark (toggle):** near-black bg `#0f0f12`, soft white text, same accent adapted for contrast. WCAG contrast required.

```css
:root { --bg:#fafaf9; --text:#1c1c1e; --muted:#6b6b6f; --border:#e8e8ed; --surface:#fff; --accent:#5c6b5a; }
.dark { --bg:#0f0f12; --text:#f5f5f7; --muted:#a1a1a6; --border:#2c2c2e; --surface:#161618; --accent:#8fa88c; }
```

- Font: Inter or system UI; mono for code
- H1 large semibold `text-balance`; H2 medium semibold; body `text-base leading-relaxed` (~1.65)
- Use `…` not `...`; `-` in UI lists not em dashes

---

## Components (Tailwind)

| Component | Rules |
|-----------|--------|
| **Skill card** | title, description, tag pills, subtle hover lift (`-translate-y-0.5`), View link, no glow |
| **Buttons** | `rounded-xl`, soft border/fill; **`cursor-pointer`**; **`hover:`** state (not `transition-all`); **`focus-visible:ring-2`**; **`disabled:opacity-50 disabled:cursor-not-allowed`** |
| **Inputs** | clean border or underline, `focus-visible:ring-2`, labels required |
| **Markdown** | remark-gfm, GitHub-like code blocks, section spacing, long-form readable |
| **Pagination** | numbered + prev/next, minimal, sync `?page=` in URL |
| **ThemeToggle** | light default; `localStorage` + `class="dark"` on `html` |

### Testimonials / trust quotes (doc UIs only)

Allowed when they read as **documentation trust** (short quotes, calm cards)-not a marketing page.

- **Avatar:** In **Next.js**, use `next/image` with fixed `width` / `height`. In **Vite/plain React**, use `<img>` with explicit `width`/`height` (or CSS aspect + `object-cover`) and the same **`alt`** rules. Shape: `rounded-full` or `rounded-xl`.
- **Quote:** bounded width, generous padding, body typography-no star-rating widgets or “As seen in” logo strips
- **Motion:** optional subtle fade-in; no auto-rotating carousels for core content

### Buttons and links (interaction)

- **`<button type="button">`** for on-page actions; **`next/link`** (Next) or **`react-router` `<Link>`** / **`<a href>`** for navigation-never a `div` with `onClick` for navigation
- **Cursor:** `cursor-pointer` on interactive elements; `cursor-not-allowed` when `disabled`
- **Hover:** visible state change (background, border, or lift per motion rules)
- **Focus:** `focus-visible` ring; never bare `outline-none` without a replacement

**Icons:** react-icons only (one library). Emoji Mart `set="apple"` only if user asks for picker.

**Footer:** `© {new Date().getFullYear()} {brand}` in root layout (`app/layout.tsx` on Next or root component on Vite) - never hardcode year.

---

## Skeleton loading (mandatory)

Before real content on every surface:

- home skill grid → `DocCardSkeleton` x6-8
- detail → `DetailSkeleton`
- sidebar / preview / lists → `LoadingBlock` rows
- soft neutral `animate-pulse`; `motion-reduce:animate-none`; optional subtle shimmer; `aria-busy="true"`

```tsx
<div className="animate-pulse rounded-lg bg-[var(--border)]/70 h-4 w-full motion-reduce:animate-none" aria-hidden="true" />
```

---

## Motion (prefer `<div>` + Tailwind; framer-motion optional)

**Primary pattern (no library):** opacity and transform via Tailwind on a **`<div>`** - works in Server and Client components, no `motion.div` pitfalls.

**Allowed:** opacity, transform, fade-in, hover lift, toast transitions, microinteractions.

**Forbidden:** `transition: all`, bounce, decorative loops. Honor **`prefers-reduced-motion`** (`motion-reduce:*` in Tailwind).

```tsx
// Card hover - use <div>, not motion.div, unless you need JS-driven variants
<div
  className="transition-[transform,opacity] duration-200 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:hover:translate-y-0"
>
  …
</div>
```

### When to use framer-motion

Use **only** when CSS cannot handle the animation (e.g. coordinated enter/exit, layout id). Then:

1. Put the component in a **Client Component** (Next: `'use client'` at top of file). **`motion` does not belong in Server Components.**
2. `import { motion } from "framer-motion"` and use **`motion.div`** (or `motion` + `as="div"` patterns per your version).

### Fixing common `motion.div` errors

| Issue | Fix |
|-------|-----|
| “Event handlers cannot be passed to Client Component props” / RSC errors | Move animated UI into a file with **`'use client'`**, or replace **`motion.div`** with **`<div className="...">`** + Tailwind transitions. |
| `motion` used in default-export Server Component | Same: client child **or** **`<div>`** only. |
| TypeScript complaints on `motion` | Prefer **`<div>` + Tailwind**; if you keep `motion`, ensure `framer-motion` types resolve and the component is client-only. |
| Lint / hybrid rendering issues | Default to **`div`**; add framer-motion only in isolated client leaf components. |

**Skeletons:** always **`<div className="animate-pulse ...">`**, never `motion` for pulse placeholders.

---

## Web interface guidelines (apply to all UI)

- icon buttons: `aria-label`
- semantic HTML (`button`, `a`, `label`, `nav`, `main`, `article`)
- `focus-visible` only; never `outline-none` without replacement
- forms: labels, types, autocomplete, inline errors, no paste block
- **Next.js:** `next/link`, `next/image` + width/height, lazy below fold. **Vite/React:** semantic `<a>` / router `<Link>`, `<img alt>` + dimensions or CSS constraints
- toasts: `aria-live="polite"`
- destructive actions: confirm
- URL reflects filters/pagination (nuqs or `useSearchParams`)

Optional deep audit: fetch `vercel-labs/web-interface-guidelines/main/command.md`.

---

## Pages (route shape - adapt to your router)

**Next.js:** `app/page.tsx`, `app/skills/[slug]/page.tsx`, etc. **Vite + react-router:** `/`, `/skills/:slug`, same UX.

### 1. Home `/`

Grid/list hybrid, search (client), tag filter (client), pagination, theme toggle, skeleton grid, sticky minimal nav.

### 2. Detail `/skills/[slug]`

Centered markdown reader; header with title, description, tags, version, **outcomes list**; right rail (desktop): Copy Skill, Use Skill (show install commands), metadata; DetailSkeleton while loading.

### 3. Create `/create` (UI only)

Split: left form (name, description, tags, instructions, output format) + right live markdown preview. Labels, validation, toast on copy/export. Client download .md only - no server save.

### 4. Guidelines `/guidelines`

Doc layout explaining design + web interface rules; same spacing/tokens.

---

## SkillCodex platform (two formats)

**GitHub (primary):** `skills/<name>/SKILL.md` - browse, fork, copy into agents.

**npm (developer):** `npm install @skillcodex/skills` then `import x from "@skillcodex/skills/<name>"`.

Write once as SKILL.md; share on GitHub; optional npm mirror. Every skill lists **outcomes** (expected results).

---

## Checklist

- [ ] STRICT UI only - no backend/API/DB/auth
- [ ] Mobile-first Tailwind; whitespace rhythm; no SaaS/gradient/glass
- [ ] Skeletons on all content surfaces (`<div className="animate-pulse">`); motion via **`<div>` + Tailwind** unless a tiny client leaf needs framer-motion
- [ ] Outcomes visible on detail; skills.sh gaps addressed
- [ ] Buttons: `cursor-pointer`, hover, `focus-visible`, disabled cursor; real `<button>` / `Link`
- [ ] Testimonials (if any): `next/image` avatars with **alt**, doc-trust layout-not marketing carousel
- [ ] Package manager matches user project lockfile
- [ ] `pnpm dev` runs
