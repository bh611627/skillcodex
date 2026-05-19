---
name: web-design-guidelines
description: Web design for documentation-style UIs - build or audit per SkillCodex design rules (React, TypeScript, Tailwind). Use for doc browsers, skill directories, UI review, testimonials with avatars, and accessible buttons. Tier 0 CSS motion on div by default; Tier 1 CSS keyframes on div; Tier 2 Framer only in named client leaves — never mix motion APIs in one file.
version: "2.4.0"
tags:
  - ui
  - design-system
  - accessibility
  - react
  - documentation
---

# Web design guidelines (SkillCodex doc UI)

This skill merges **doc UI implementation** (build) and **UI review (audit)**.

Canonical rules live at **SkillCodex** (design-guidelines):  
https://github.com/bh611627/skillcodex/blob/main/references/design-guidelines.md  

**STRICT UI ONLY** — no backend, API, database, or auth logic.

**Stack (React only):** **React** + **TypeScript** + **Tailwind CSS** + **react-markdown** + **remark-gfm** + **react-icons**. Use **optional** `framer-motion` only in **Tier 2** isolated client files (see **Motion policy** in the canonical doc). Default is **Tier 0**: `<div>` + Tailwind transitions everywhere.

**skills.sh CLI:** one-skill installs follow [skills.sh/docs](https://www.skills.sh/docs) — `npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines`. Implementors should read the **full** upstream `design-guidelines.md` (not excerpts) before building or auditing.

---

## Motion: shell + optional leaf (Tier 0 first)

**Do not** alternate `motion.div` and `<div>` in the same module — split a `*Motion.tsx` leaf **or** use Tier 0 only. Delete unused `framer-motion` imports when downgrading.

**Tier 0 (default):** `<div>` + Tailwind + shared `CARD_HOVER` on card shells. Works in Server and Client components.

**Tier 1:** CSS `animate-*` / keyframes on `div` only — still no Framer.

**Tier 2 (optional):** New file with `'use client'` line 1, filename suffix **`Motion`** or **`Client`** (e.g. `SkillCardMotion.tsx`). Import `motion` only there.

- **Next.js App Router:** never `motion.*` in a Server Component file — split a client leaf or use Tier 0 only.
- **Skeletons:** always `<div className="animate-pulse …">` — never `motion` for pulse.
- **Shared token:** use `CARD_HOVER` from design-guidelines so hover behavior is one string project-wide on shells.

---

## Mode A - Build / implement doc UI

Use when the user wants a **premium documentation-style** interface (browse, search, detail, **outcomes** visible — **no fake install counts**).

1. Apply **design-guidelines** end-to-end:  
   https://raw.githubusercontent.com/bh611627/skillcodex/main/references/design-guidelines.md  
   Read the **entire** file. Include **Design vocabulary**, **Motion policy** (shell vs leaf), **Named visual styles**, and **Industry layout tables** when the user names an industry or visual direction.
2. **Tailwind-first**, mobile-first, mandatory **skeleton loaders** on async surfaces (`<div className="animate-pulse …">`).
3. **Package manager:** **pnpm** for new projects; **match the user’s lockfile** in existing repos. For SkillCodex npm modules use **`npm install @skillcodex/skills`**.
4. **Data / content:** follow SkillCodex **data-source** rules when mirroring a skill registry:  
   https://github.com/bh611627/skillcodex/blob/main/references/data-source.md  
5. **Motion:** Tier 0 everywhere unless user explicitly needs orchestrated animation — then add one `*Motion.tsx` client file only.

**Output:** commands, file paths, checklist pass/fail.

---

## Mode B - Audit / review existing UI

Use when the user asks to review, audit, or check accessibility.

1. Read project **TSX/JSX** against **design-guidelines** (URL above).
2. Flag: missing skeletons, weak whitespace, custom CSS where Tailwind suffices, heavy gradients, glassmorphism, sales-led landing patterns, a11y gaps, **testimonials without `alt`**, **buttons** without pointer/hover/focus, **`motion` in a server file**, **mixed motion API in one module**, **motion.div / div churn**, wrong layout table row or named style for stated industry.
3. Optional deep pass: Vercel **Web Interface Guidelines** —  
   `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`

**Output:** grouped **`file:line`** findings + checklist. No preamble.

---

## Outcomes

- **Build:** Components wired; skeletons on load; theme + tokens; motion tier policy respected; dev server runs.
- **Audit:** Actionable list or explicit pass.

## Output rules

State **Mode A** or **Mode B**. Then evidence (paths or findings).

## Scope and boundaries

- **Frontend documentation UIs** only — not sales-led marketing sites.

## Safety

- **Build:** edit UI files; user runs install/dev.
- **Audit:** suggest only; use public raw URLs for guidelines.

---

## References (SkillCodex)

| Topic | URL |
|-------|-----|
| Design guidelines | https://github.com/bh611627/skillcodex/blob/main/references/design-guidelines.md |
| React stack / tooling | https://github.com/bh611627/skillcodex/blob/main/references/react-stack.md |
| Data rules | https://github.com/bh611627/skillcodex/blob/main/references/data-source.md |
| This skill (full SKILL.md) | https://github.com/bh611627/skillcodex/tree/main/skills/web-design-guidelines/SKILL.md |
| npm | https://www.npmjs.com/package/@skillcodex/skills |

**CLI install:** `npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines`
