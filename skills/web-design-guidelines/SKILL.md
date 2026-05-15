---
name: web-design-guidelines
description: Web design for SkillCodex doc UIs - React + TypeScript + Tailwind; build or audit per design-guidelines. Prefer div + CSS motion; use framer-motion only in client components.
tags:
  - ui
  - design-system
  - accessibility
  - react
  - documentation
version: 2.1.0
category: development
outcomes:
  - Doc UI implemented with design-guidelines checklist passed (tokens, skeletons, whitespace)
  - OR file:line audit + pass/fail for a11y, motion, anti-SaaS violations
stack:
  - react
  - typescript
  - tailwindcss
  - react-markdown
  - remark-gfm
  - react-icons
  - pnpm
  - framer-motion
last_reviewed: 2026-05-15
risk_level: low
tools_allowed: repo-files
requires_user_approval: false
compatibility:
  - generic-markdown
  - cursor
  - claude-code
  - skills-sh
references:
  - references/design-guidelines.md
  - references/react-stack.md
  - references/data-source.md
---

# Instructions

This skill merges **doc UI implementation** (formerly `documentation-ui`) and **UI review (audit)**.

Canonical rules live in [design-guidelines.md](../../references/design-guidelines.md) only. **STRICT UI ONLY** - no backend, API, DB, auth.

**Stack:** **React** + **TypeScript** + **Tailwind** + **react-markdown** + **remark-gfm** + **react-icons**. Next.js or Vite as host is fine. **Motion:** default to **`<div>` + Tailwind** transitions; **`framer-motion`** only in **client** components (`'use client'` in Next). If `motion.div` causes RSC or build errors, replace with **`div`** + Tailwind (see design-guidelines **Motion** section).

---

## Mode A - Build / implement doc UI

Use when the user wants a **premium documentation-style** interface (like [skills.sh](https://www.skills.sh/) structure: browse, search, detail, outcomes visible - but **no fake install counts**).

1. Apply [design-guidelines.md](../../references/design-guidelines.md) end-to-end (including **testimonials with avatar images** and **buttons** with `cursor-pointer`, hover, `focus-visible`, and **motion on `div`** unless a client-only leaf needs Framer).
2. **Tailwind-first**, mobile-first, mandatory **skeletons** (`animate-pulse` on **`<div>`**, not `motion`).
3. **pnpm** for new app; **match user lockfile** in existing repos; **npm** for `@skillcodex/skills`.
4. Optional **Next**: `next/image`, `next/link`. Optional **framer-motion** in client files only.
5. Data: [data-source.md](../../references/data-source.md).

Output: pnpm commands, file paths, checklist pass/fail.

---

## Mode B - Audit / review existing UI

Use when the user asks to review, audit, or check accessibility.

1. Read project TSX against [design-guidelines.md](../../references/design-guidelines.md).
2. If file missing locally, fetch `https://raw.githubusercontent.com/bh611627/skillcodex/main/references/design-guidelines.md`.
3. Flag: missing skeletons, weak whitespace, custom CSS over Tailwind, gradients, glass, SaaS landing/dashboard, a11y gaps; testimonials without **alt** on avatars; buttons without pointer/hover/focus; **`motion` / `motion.div` in Server Components** (Next) without `'use client'`.
4. Optional deep pass: Vercel `web-interface-guidelines/main/command.md`.

Output: grouped `file:line` findings + checklist. No preamble.

---

## Outcomes

- **Build:** components wired, skeletons on load, theme + tokens, `pnpm dev` works.
- **Audit:** actionable list or explicit pass.

## Output Rules

State which mode. Then evidence (files or findings).

## Scope and boundaries

- Frontend documentation UIs only - not SaaS marketing sites.

## Safety

- Build: edit UI files; user runs pnpm.
- Audit: suggest only; public raw URLs for guidelines.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/web-design-guidelines/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
