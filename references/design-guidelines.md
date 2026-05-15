# SkillCodex design guidelines

> **STRICTLY UI/UX ONLY** - no backend, no APIs, no database, no authentication logic.
>
> Build a **premium documentation-style** UI for browsing, reading, and creating `SKILL.md` files (like [skills.sh](https://www.skills.sh/) but clearer). Inspired by SkillCodex - not SkillForge.

**Feel:** extremely clean, highly readable, Apple-level refined, documentation-first, calm, structured, minimal, professional. **NOT** AI-slop, flashy, gradient-heavy, glassmorphism, or SaaS-dashboard / SaaS-landing style.

Data: [data-source.md](./data-source.md). Stack: [react-stack.md](./react-stack.md).

---

## Package manager

| Task | Tool |
|------|------|
| New Next/React doc UI | **pnpm** (fast default) |
| Install `@skillcodex/skills` | **npm** |
| Existing user project | **Match lockfile** (`pnpm-lock.yaml` → pnpm, `package-lock.json` → npm) |

```bash
pnpm create next-app@latest skillcodex-ui --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd skillcodex-ui && pnpm install
pnpm add framer-motion react-markdown remark-gfm react-icons
pnpm dev
```

**UI stack (do not drop):** Next.js App Router, TypeScript, Tailwind v4, **framer-motion**, react-markdown, remark-gfm, react-icons.

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

- SaaS landing (hero, pricing, testimonials, logo wall, funnels)
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
| **Buttons** | `rounded-xl` (10-14px feel), soft border/fill, subtle hover |
| **Inputs** | clean border or underline, `focus-visible:ring-2`, labels required |
| **Markdown** | remark-gfm, GitHub-like code blocks, section spacing, long-form readable |
| **Pagination** | numbered + prev/next, minimal, sync `?page=` in URL |
| **ThemeToggle** | light default; `localStorage` + `class="dark"` on `html` |

**Icons:** react-icons only (one library). Emoji Mart `set="apple"` only if user asks for picker.

**Footer:** `© {new Date().getFullYear()} {brand}` in `app/layout.tsx` - never hardcode year.

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

## Motion (framer-motion)

**Allowed:** opacity, transform, fade-in, hover lift, toast transitions, microinteractions.

**Forbidden:** `transition: all`, bounce, decorative loops. Honor `prefers-reduced-motion`.

```tsx
// example card hover
className="transition-[transform,opacity] duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
```

---

## Web interface guidelines (apply to all UI)

- icon buttons: `aria-label`
- semantic HTML (`button`, `a`, `label`, `nav`, `main`, `article`)
- `focus-visible` only; never `outline-none` without replacement
- forms: labels, types, autocomplete, inline errors, no paste block
- `next/link`, `next/image` + width/height, lazy below fold
- toasts: `aria-live="polite"`
- destructive actions: confirm
- URL reflects filters/pagination (nuqs or `useSearchParams`)

Optional deep audit: fetch `vercel-labs/web-interface-guidelines/main/command.md`.

---

## Pages

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
- [ ] framer-motion + skeletons on all content surfaces
- [ ] Outcomes visible on detail; skills.sh gaps addressed
- [ ] Package manager matches user project lockfile
- [ ] `pnpm dev` runs
