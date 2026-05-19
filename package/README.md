# @skillcodex/skills

**AI agent skills** for React and Next.js - a curated **skills system** of reusable **workflows** for Cursor, Claude Code, and modern **developer tooling**. Installable TypeScript modules with full `SKILL.md` source.

Part of [SkillCodex](https://github.com/bh611627/skillcodex) - an open **automation framework** for consistent, outcome-driven agent behavior.

[![npm version](https://img.shields.io/npm/v/@skillcodex/skills.svg)](https://www.npmjs.com/package/@skillcodex/skills)
[![skills.sh](https://skills.sh/b/bh611627/skillcodex)](https://skills.sh/bh611627/skillcodex)

## Install

```bash
npm install @skillcodex/skills
```

```bash
pnpm add @skillcodex/skills
```

Requires **Node.js 18+**.

## Import a skill

```ts
import seoExpert from "@skillcodex/skills/seo-expert";

console.log(seoExpert.name);           // "seo-expert"
console.log(seoExpert.description);    // one-line summary
console.log(seoExpert.outcomes);       // expected results
console.log(seoExpert.instructions);   // instructions body
console.log(seoExpert.skillMd);       // full SKILL.md (frontmatter + body)
```

List all skills:

```ts
import { skills, skillList } from "@skillcodex/skills";

Object.keys(skills); // ["content-creator", "seo-expert", ...]
```

## CLI (skills.sh — one skill)

Per [skills.sh documentation](https://www.skills.sh/docs), install **only** the skill you need:

```bash
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines
```

The npm package below ships **all** skills as subpaths for programmatic use — not the same as a single-skill CLI install. **Maintainers:** [Publishing (repo docs)](https://github.com/bh611627/skillcodex/blob/main/docs/publishing-skills-sh-and-npm.md).

## SKILL.md format

Each skill is a folder with `SKILL.md`:

```markdown
---
name: my-skill
description: One-line summary under 200 characters
tags:
  - react
  - nextjs
version: 1.0.0
risk_level: low
tools_allowed: read-only
outcomes:
  - Measurable result one
  - Measurable result two
---

# Instructions

Step-by-step behavior for the agent.

## Scope and boundaries

What this skill does not do.

## Safety

Files read/written and approval rules.

## Outcomes

What the user receives when the skill succeeds.
```

Full spec: [SKILL_STANDARD.md](https://github.com/bh611627/skillcodex/blob/main/SKILL_STANDARD.md)

## Package contents

Published files: compiled `dist/` JavaScript + types, this README, and `skills-index.json` (skill catalog metadata).

## Links

- **npm:** https://www.npmjs.com/package/@skillcodex/skills
- **GitHub:** https://github.com/bh611627/skillcodex
- **skills.sh:** https://skills.sh/bh611627/skillcodex
- **Publishing:** https://github.com/bh611627/skillcodex/blob/main/docs/publishing-skills-sh-and-npm.md
- **Issues:** https://github.com/bh611627/skillcodex/issues

MIT
