# @skillcodex/skills

Curated [SkillCodex](https://github.com/bh611627/skillcodex) agent skills for React and Next.js — installable as TypeScript modules with full `SKILL.md` source included.

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
import seoAgent from "@skillcodex/skills/seo-agent";

console.log(seoAgent.name);           // "seo-agent"
console.log(seoAgent.description);    // one-line summary
console.log(seoAgent.outcomes);       // expected results
console.log(seoAgent.instructions);   // agent instructions body
console.log(seoAgent.skillMd);        // full SKILL.md (frontmatter + body)
```

List all skills:

```ts
import { skills, skillList } from "@skillcodex/skills";

Object.keys(skills); // ["content-creator", "seo-agent", ...]
```

## CLI (skills.sh-style)

```bash
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines
```

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
- **Issues:** https://github.com/bh611627/skillcodex/issues

MIT
