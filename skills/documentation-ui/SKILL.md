---
name: documentation-ui
description: Premium doc UI per design-guidelines - Tailwind, framer-motion, STRICT UI only
tags:
  - ui
  - design-system
  - nextjs
version: 1.7.0
category: development
outcomes:
  - Tokens, cards, skeletons, theme toggle wired with Apple-level whitespace
  - Mobile-first Tailwind layout ready for pnpm dev
stack:
  - pnpm
  - next
  - react
  - typescript
  - tailwindcss
  - framer-motion
  - react-icons
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

Implement UI per [design-guidelines.md](../../references/design-guidelines.md).

**STRICT UI ONLY.** Tailwind-first, mobile-first, mandatory skeletons, framer-motion for subtle motion. No gradients, glass, SaaS landing/dashboard.

**pnpm** for new app; match user lockfile; **npm** for `@skillcodex/skills`.

## Outcomes

- design-guidelines checklist passed
- Component files listed with paths

## Output Rules

pnpm commands, files, checklist pass/fail.

## Scope and boundaries

- Frontend doc UI only.

## Safety

- UI files only.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/documentation-ui/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
