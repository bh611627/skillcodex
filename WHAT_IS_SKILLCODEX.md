# What is SkillCodex?

**SkillCodex** is a system for creating, organizing, and publishing AI agent skills (`SKILL.md`) - like [skills.sh](https://www.skills.sh/) with clearer docs and dual install paths.

- **GitHub:** https://github.com/bh611627/skillcodex
- **npm:** https://www.npmjs.com/package/@skillcodex/skills

## Core idea

A **skill** = structured markdown instructions for an agent.

| Format | Use |
|--------|-----|
| **GitHub** | `skills/<name>/SKILL.md` - share, browse, portfolio |
| **npm** | `npm install @skillcodex/skills` - apps and scripts |

Write once. Share on GitHub. Optional npm module. Every skill declares **outcomes** (what success looks like).

## UI (optional)

Premium **documentation-style** browser - UI/UX only. Full spec: [references/design-guidelines.md](./references/design-guidelines.md).

**Stack:** pnpm for new Next apps (or match user lockfile). framer-motion, Tailwind, react-icons.

## Other docs

| Need | File |
|------|------|
| SKILL format | [SKILL_STANDARD.md](./SKILL_STANDARD.md) |
| Stack / pnpm | [references/react-stack.md](./references/react-stack.md) |
| Data rules | [references/data-source.md](./references/data-source.md) |
| Trust | [TRUST.md](./TRUST.md) |
