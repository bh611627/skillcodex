---
name: forms-and-validation
description: Accessible forms in React and Next.js with zod validation - server actions or client submit patterns
tags:
  - forms
  - react
  - zod
version: 1.0.1
category: development
outcomes:
  - Field-level error mapping tied to inputs
  - Schema split server vs shared types where App Router is used
  - Keyboard and screen reader checklist for the form
stack:
  - react
  - next
  - zod
  - typescript
last_reviewed: 2026-05-19
risk_level: low
tools_allowed: repo-files
requires_user_approval: false
compatibility:
  - generic-markdown
  - skills-sh
  - cursor
  - claude-code
  - antigravity
  - codex
  - github-copilot
  - windsurf
  - gemini-cli
  - cline
  - amp
  - opencode
  - roo
  - goose
  - kilo
  - kiro-cli
  - droid
  - openclaw
  - trae
references:
  - references/stack-nextjs.md
  - references/skill-safety.md
---

# Instructions

## When to Use

- Use for accessible forms with zod + Server Actions or client submit.
- Prefer `api-handbook` for pure JSON APIs without forms.
- Prefer `accessibility-audit` for a full WCAG pass after the form ships.

Build or audit **forms** with **zod** and accessible markup.

1. Choose pattern: **Server Action** with **`useActionState`** (React 19) or legacy `useFormState` naming in older docs - progressive enhancement vs controlled client form; match repo and installed `react` types.
2. Single zod schema (or layered: base + refine); map `flatten().fieldErrors` to fields.
3. Labels, `htmlFor`, `aria-invalid`, `aria-describedby` for errors; no placeholder-only labels.
4. Disable double-submit; optimistic UI only when user asks.
5. File uploads: size limits and accept list in copy, not insecure defaults.
## Outcomes

- Schema snippet + error wiring plan + a11y checklist.

## Output Rules

Show field error mapping table (field → zod path).

## Scope and boundaries

- **In scope:** one multi-field form or wizard step.
- **Out of scope:** payment PCI scope, captcha vendor selection unless user names one.

## Safety

- repo-files: edit form components only; no `.env` values.

## Troubleshooting

- **Next 15 form types:** align with current `react` types from repo lockfile.
- **Hydration on date pickers:** prefer server default string + client parse in island.

## Related skills

- [`api-handbook`](../api-handbook/SKILL.md) - Route Handler APIs behind forms
- [`client-data-fetching`](../client-data-fetching/SKILL.md) - client mutation patterns
- [`accessibility-audit`](../accessibility-audit/SKILL.md) - accessible error messaging

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/forms-and-validation/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
