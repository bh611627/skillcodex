---
name: skillcodex-browser-ui
description: Build SkillCodex doc UI in Next.js - real skills when provided, mock only if empty, skeletons, react-icons
tags:
  - ui
  - nextjs
  - skillcodex
version: 1.2.0
category: development
outcomes:
  - Four routes wired to real SKILL.md data when user supplied it, or minimal mock seed only when none exists
  - react-icons default; Emoji Mart apple set only if user wants emoji picker
stack:
  - pnpm
  - next
  - react
  - typescript
  - tailwindcss
  - framer-motion
  - react-icons
references:
  - references/react-stack.md
  - references/data-source.md
  - references/DESIGNSPEC.md
  - references/ui-pages.md
  - references/components.md
  - references/icons-and-emoji.md
  - references/publishing.md
---

# Instructions

Build the SkillCodex documentation UI. **UI only** - no API/DB/auth unless user asks later.

Read `data-source.md` first:

| User situation | Data |
|----------------|------|
| Full command, existing `skills/`, or pasted SKILL.md | **Use their data.** No mock. |
| Empty UI scaffold, no skill files | **Add small mock seed** in `src/data/skills.ts` |

Then: `react-stack.md`, `DESIGNSPEC.md`, `ui-pages.md`, `components.md`, `icons-and-emoji.md`.

**Stack:** greenfield + user silent -> ask once (Next + pnpm). User already specified -> do not ask.

**Icons:** react-icons. Emoji Mart `set="apple"` only if user asks.

**Skeletons:** DocCardSkeleton, DetailSkeleton while loading (real or mock).

**Pages:** home, `/skills/[slug]`, `/create`, `/guidelines`.

**vs skills.sh:** outcomes, copy/use, GitHub + npm links. No fake install counts.

## Outcomes

Runnable Next app, correct data source choice documented, four routes, skeletons, theme toggle.

## Output Rules

1. Data source (real vs mock) and why  
2. File tree  
3. Key files  
4. `pnpm dev`

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/skillcodex-browser-ui/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
