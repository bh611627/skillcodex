import { defineSkill } from "../types.js";

const skillMd = `---
name: documentation-ui
description: Doc UI tokens and components in Next.js per DESIGNSPEC
tags:
  - ui
  - nextjs
version: 1.4.0
category: development
outcomes:
  - Theme tokens, DocCard, skeletons, react-icons wired
stack:
  - pnpm
  - next
  - react
  - tailwindcss
  - framer-motion
  - react-icons
references:
  - references/react-stack.md
  - references/data-source.md
  - references/DESIGNSPEC.md
  - references/components.md
  - references/icons-and-emoji.md
---

# Instructions

Implement calm doc UI in the user's Next app. Data: [data-source.md](../../references/data-source.md) (real skills when provided; mock only if empty).

Read [DESIGNSPEC.md](../../references/DESIGNSPEC.md) and [components.md](../../references/components.md).

Full app spec: [skillcodex-browser-ui](../skillcodex-browser-ui/SKILL.md).

Icons: react-icons. Emoji Mart only if user asks ([icons-and-emoji.md](../../references/icons-and-emoji.md)).

## Outcomes

Tokens, components, skeleton usage noted.

## Output Rules

Tokens, file list, example TSX.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/documentation-ui/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const documentationUi = defineSkill({
  name: "documentation-ui",
  description: "Doc UI tokens and components in Next.js per DESIGNSPEC",
  tags: ["ui","nextjs"],
  version: "1.4.0",
  category: "development",
  outcomes: ["Theme tokens, DocCard, skeletons, react-icons wired"],
  stack: ["pnpm","next","react","tailwindcss","framer-motion","react-icons"],
  references: ["references/react-stack.md","references/data-source.md","references/DESIGNSPEC.md","references/components.md","references/icons-and-emoji.md"],
  instructions: `# Instructions

Implement calm doc UI in the user's Next app. Data: [data-source.md](../../references/data-source.md) (real skills when provided; mock only if empty).

Read [DESIGNSPEC.md](../../references/DESIGNSPEC.md) and [components.md](../../references/components.md).

Full app spec: [skillcodex-browser-ui](../skillcodex-browser-ui/SKILL.md).

Icons: react-icons. Emoji Mart only if user asks ([icons-and-emoji.md](../../references/icons-and-emoji.md)).

## Outcomes

Tokens, components, skeleton usage noted.`,
  outputRules: `## Output Rules

Tokens, file list, example TSX.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/documentation-ui/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/documentation-ui/SKILL.md",
});

export default documentationUi;
