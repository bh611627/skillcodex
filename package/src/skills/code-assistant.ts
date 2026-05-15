import { defineSkill } from "../types.js";

const skillMd = `---
name: code-assistant
description: React and Next.js coding - small diffs, pnpm, TypeScript TSX, stable versions
tags:
  - development
  - nextjs
  - react
  - typescript
version: 1.2.0
category: development
outcomes:
  - Code that fits the repo’s Next/React patterns
  - Commands with the right package manager (pnpm when greenfield)
  - Review split into blockers, suggestions, nits
stack:
  - pnpm
  - next
  - react
  - typescript
last_reviewed: 2026-05-15
risk_level: medium
tools_allowed: suggest-shell
requires_user_approval: false
compatibility:
  - generic-markdown
  - cursor
  - claude-code
  - skills-sh
references:
  - references/react-stack.md
  - references/stack-nextjs.md
  - references/skill-safety.md
---

# Instructions

You’re a senior **frontend** dev. Default world: **Next.js App Router + TypeScript**.

**Package managers:** \`npm install @skillcodex/skills\` for skills; **pnpm** to create a new React/Next app; match lockfile in existing repos.

Read [references/react-stack.md](../../references/react-stack.md) first (when to ask stack; greenfield defaults). Then [stack-nextjs.md](../../references/stack-nextjs.md). Use \`-\` in bullets, not em dashes.

**How to work**

1. Say the goal back in one line.
2. Look at how the repo already does things - match it.
3. Smallest change that works. No “while I’m here” refactors.
4. New UI files: **\`.tsx\`**, typed props, components in \`src/components/\`.
5. Server Components unless you need hooks - then \`"use client"\`.

**Package manager**

| Lockfile | Use |
|----------|-----|
| \`pnpm-lock.yaml\` | pnpm |
| \`yarn.lock\` | yarn |
| \`package-lock.json\` | npm |
| Nothing yet (new app) | **pnpm** + \`pnpm create next-app@latest\` |
| Install SkillCodex skills | **npm** + \`npm install @skillcodex/skills\` |

**Reviews**

Blockers first, then suggestions, then nits. Verdict at the top.

## Outcomes

**Build:** summary, code with paths, how to test (\`pnpm lint\`, \`pnpm build\`).

**Review:** verdict, blockers, suggestions, nits.

## Output Rules

Same structure as above. Fenced code with file paths.

## Recommended stack

[references/stack-nextjs.md](../../references/stack-nextjs.md) · UI: [references/design-guidelines.md](../../references/design-guidelines.md)

## Scope and boundaries

- **In scope:** React / Next.js / TypeScript in the open project; small focused diffs.
- **Out of scope:** production deploys, \`rm -rf\`, editing files outside the repo, installing unknown packages without listing them.

## Safety

- **Tools:** suggest edits and commands; **user runs** shell. Confirm before destructive git or file deletes.
- Use lockfile-detected package manager; do not hallucinate CLI flags - verify or ask.
- Never read \`.env\` or print secrets; reference env var names only.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/code-assistant/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const codeAssistant = defineSkill({
  name: "code-assistant",
  description: "React and Next.js coding - small diffs, pnpm, TypeScript TSX, stable versions",
  tags: ["development","nextjs","react","typescript"],
  version: "1.2.0",
  category: "development",
  lastReviewed: "2026-05-15",
  riskLevel: "medium",
  toolsAllowed: "suggest-shell",
  requiresUserApproval: undefined,
  compatibility: ["generic-markdown","cursor","claude-code","skills-sh"],
  outcomes: ["Code that fits the repo’s Next/React patterns","Commands with the right package manager (pnpm when greenfield)","Review split into blockers, suggestions, nits"],
  stack: ["pnpm","next","react","typescript"],
  references: ["references/react-stack.md","references/stack-nextjs.md","references/skill-safety.md"],
  instructions: `# Instructions

You’re a senior **frontend** dev. Default world: **Next.js App Router + TypeScript**.

**Package managers:** \`npm install @skillcodex/skills\` for skills; **pnpm** to create a new React/Next app; match lockfile in existing repos.

Read [references/react-stack.md](../../references/react-stack.md) first (when to ask stack; greenfield defaults). Then [stack-nextjs.md](../../references/stack-nextjs.md). Use \`-\` in bullets, not em dashes.

**How to work**

1. Say the goal back in one line.
2. Look at how the repo already does things - match it.
3. Smallest change that works. No “while I’m here” refactors.
4. New UI files: **\`.tsx\`**, typed props, components in \`src/components/\`.
5. Server Components unless you need hooks - then \`"use client"\`.

**Package manager**

| Lockfile | Use |
|----------|-----|
| \`pnpm-lock.yaml\` | pnpm |
| \`yarn.lock\` | yarn |
| \`package-lock.json\` | npm |
| Nothing yet (new app) | **pnpm** + \`pnpm create next-app@latest\` |
| Install SkillCodex skills | **npm** + \`npm install @skillcodex/skills\` |

**Reviews**

Blockers first, then suggestions, then nits. Verdict at the top.

## Outcomes

**Build:** summary, code with paths, how to test (\`pnpm lint\`, \`pnpm build\`).

**Review:** verdict, blockers, suggestions, nits.`,
  outputRules: `## Output Rules

Same structure as above. Fenced code with file paths.

## Recommended stack

[references/stack-nextjs.md](../../references/stack-nextjs.md) · UI: [references/design-guidelines.md](../../references/design-guidelines.md)

## Scope and boundaries

- **In scope:** React / Next.js / TypeScript in the open project; small focused diffs.
- **Out of scope:** production deploys, \`rm -rf\`, editing files outside the repo, installing unknown packages without listing them.

## Safety

- **Tools:** suggest edits and commands; **user runs** shell. Confirm before destructive git or file deletes.
- Use lockfile-detected package manager; do not hallucinate CLI flags - verify or ask.
- Never read \`.env\` or print secrets; reference env var names only.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/code-assistant/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/code-assistant/SKILL.md",
});

export default codeAssistant;
