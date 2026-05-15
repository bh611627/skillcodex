import { defineSkill } from "../types.js";

const skillMd = `---
name: skill-creator
description: Author SkillCodex SKILL.md - outcomes, dual GitHub+npm format, safety metadata
tags:
  - meta
  - skills
  - nextjs
version: 1.5.0
category: meta
outcomes:
  - Valid SKILL.md with outcomes, safety, and compatibility fields
  - README table row and validation-ready frontmatter
stack:
  - pnpm
  - next
references:
  - references/design-guidelines.md
  - references/react-stack.md
  - references/publishing.md
  - references/skill-safety.md
  - references/interoperability.md
last_reviewed: 2026-05-15
risk_level: low
tools_allowed: repo-files
requires_user_approval: false
compatibility:
  - generic-markdown
  - cursor
  - claude-code
  - skills-sh
---

# Instructions

Author **SkillCodex** skills (not a deployed product UI unless asked).

1. Folder \`skills/<kebab-name>/\` = \`name\` in YAML.
2. Required: \`name\`, \`description\`, \`tags\`, \`version\`, \`last_reviewed\`, \`risk_level\`, \`tools_allowed\`, \`compatibility\`.
3. **\`outcomes\`** - list 2-4 concrete results the user gets (required).
4. Sections: Instructions, Outcomes, Output Rules, Scope and boundaries, Safety.
5. UI skills: link only [design-guidelines.md](../../references/design-guidelines.md); stack includes **framer-motion** when UI.
6. Dual format footer: GitHub tree URL + npm package link.
7. **Package manager in stack:** pnpm for greenfield Next; match user lockfile if they have one.
8. \`cd package && pnpm run validate\` before merge.

## Outcomes

- Complete SKILL.md
- README row
- Outcomes clearly state user results

## Output Rules

SKILL.md fence, README row, checklist.

## Scope and boundaries

- Skill authoring only.

## Safety

- No secrets; honest risk_level.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const skillCreator = defineSkill({
  name: "skill-creator",
  description: "Author SkillCodex SKILL.md - outcomes, dual GitHub+npm format, safety metadata",
  tags: ["meta","skills","nextjs"],
  version: "1.5.0",
  category: "meta",
  lastReviewed: "2026-05-15",
  riskLevel: "low",
  toolsAllowed: "repo-files",
  requiresUserApproval: undefined,
  compatibility: ["generic-markdown","cursor","claude-code","skills-sh"],
  outcomes: ["Valid SKILL.md with outcomes, safety, and compatibility fields","README table row and validation-ready frontmatter"],
  stack: ["pnpm","next"],
  references: ["references/design-guidelines.md","references/react-stack.md","references/publishing.md","references/skill-safety.md","references/interoperability.md"],
  instructions: `# Instructions

Author **SkillCodex** skills (not a deployed product UI unless asked).

1. Folder \`skills/<kebab-name>/\` = \`name\` in YAML.
2. Required: \`name\`, \`description\`, \`tags\`, \`version\`, \`last_reviewed\`, \`risk_level\`, \`tools_allowed\`, \`compatibility\`.
3. **\`outcomes\`** - list 2-4 concrete results the user gets (required).
4. Sections: Instructions, Outcomes, Output Rules, Scope and boundaries, Safety.
5. UI skills: link only [design-guidelines.md](../../references/design-guidelines.md); stack includes **framer-motion** when UI.
6. Dual format footer: GitHub tree URL + npm package link.
7. **Package manager in stack:** pnpm for greenfield Next; match user lockfile if they have one.
8. \`cd package && pnpm run validate\` before merge.

## Outcomes

- Complete SKILL.md
- README row
- Outcomes clearly state user results`,
  outputRules: `## Output Rules

SKILL.md fence, README row, checklist.

## Scope and boundaries

- Skill authoring only.

## Safety

- No secrets; honest risk_level.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/skill-creator/SKILL.md",
});

export default skillCreator;
