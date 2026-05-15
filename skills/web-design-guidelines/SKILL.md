---
name: web-design-guidelines
description: Audit UI vs design-guidelines + web interface rules - outcomes with file:line report
tags:
  - ui
  - accessibility
  - design
version: 1.9.0
category: development
outcomes:
  - Terse file:line findings for a11y, whitespace, skeletons, anti-SaaS violations
  - Checklist pass/fail you can act on immediately
stack:
  - pnpm
  - next
  - react
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
---

# Instructions

Audit against [design-guidelines.md](../../references/design-guidelines.md). Flag missing skeletons, poor whitespace, custom CSS over Tailwind, gradients, glass, SaaS patterns, a11y gaps.

Fetch `https://raw.githubusercontent.com/bh611627/skillcodex/main/references/design-guidelines.md` if local file missing.

Output grouped `file:line` findings + checklist. Optional: Vercel `web-interface-guidelines/main/command.md`.

## Outcomes

Actionable audit list or explicit pass.

## Output Rules

By file. No preamble.

## Scope and boundaries

- UI review only.

## Safety

- Suggest only.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/web-design-guidelines/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
