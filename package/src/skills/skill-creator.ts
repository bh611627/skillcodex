import { defineSkill } from "../types.js";

const skillMd = `---
name: skill-creator
description: Write SKILL.md files for SkillCodex - outcomes, stack, refs, GitHub paths
tags:
  - meta
  - skills
  - nextjs
version: 1.3.0
category: meta
outcomes:
  - Valid SKILL.md plus README table row
  - references/ links for token savings
  - Publishing block with GitHub + npm links
stack:
  - pnpm
  - next
references:
  - references/react-stack.md
  - references/publishing.md
  - references/DESIGNSPEC.md
---

# Instructions

Author a **SkillCodex** skill (markdown library, not a deployed website).

1. Folder \`skills/<kebab-name>/\` matches \`name\` in YAML.
2. Required: \`name\`, \`description\`, \`tags\`.
3. Add: \`outcomes\`, \`stack\`, \`references\`, \`version\`, \`category\`.
4. Sections: \`# Instructions\`, \`## Outcomes\`, \`## Output Rules\`, \`## Recommended stack\`.
5. UI skills: link \`DESIGNSPEC.md\`, \`data-source.md\`, \`react-stack.md\`, \`ui-pages.md\`, \`components.md\`, \`icons-and-emoji.md\` as needed.
6. SEO skills: link \`google-seo.md\`.
7. End with GitHub tree URL + npm package URL (see [publishing.md](../../references/publishing.md)).
8. Use \`-\` in lists. **No em dashes** in skill text.
9. Frontend only in stack field (no Python/uv).

Put long rules in \`references/\`, keep SKILL.md short.

Read [publishing.md](../../references/publishing.md) for GitHub + npm link wording.

## Outcomes

- Full SKILL.md
- README table line
- Validation checklist

## Output Rules

1. SKILL.md fence 2. README row 3. Checklist

## Recommended stack

[publishing.md](../../references/publishing.md) · [react-stack.md](../../references/react-stack.md)

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const skillCreator = defineSkill({
  name: "skill-creator",
  description: "Write SKILL.md files for SkillCodex - outcomes, stack, refs, GitHub paths",
  tags: ["meta","skills","nextjs"],
  version: "1.3.0",
  category: "meta",
  outcomes: ["Valid SKILL.md plus README table row","references/ links for token savings","Publishing block with GitHub + npm links"],
  stack: ["pnpm","next"],
  references: ["references/react-stack.md","references/publishing.md","references/DESIGNSPEC.md"],
  instructions: `# Instructions

Author a **SkillCodex** skill (markdown library, not a deployed website).

1. Folder \`skills/<kebab-name>/\` matches \`name\` in YAML.
2. Required: \`name\`, \`description\`, \`tags\`.
3. Add: \`outcomes\`, \`stack\`, \`references\`, \`version\`, \`category\`.
4. Sections: \`# Instructions\`, \`## Outcomes\`, \`## Output Rules\`, \`## Recommended stack\`.
5. UI skills: link \`DESIGNSPEC.md\`, \`data-source.md\`, \`react-stack.md\`, \`ui-pages.md\`, \`components.md\`, \`icons-and-emoji.md\` as needed.
6. SEO skills: link \`google-seo.md\`.
7. End with GitHub tree URL + npm package URL (see [publishing.md](../../references/publishing.md)).
8. Use \`-\` in lists. **No em dashes** in skill text.
9. Frontend only in stack field (no Python/uv).

Put long rules in \`references/\`, keep SKILL.md short.

Read [publishing.md](../../references/publishing.md) for GitHub + npm link wording.

## Outcomes

- Full SKILL.md
- README table line
- Validation checklist`,
  outputRules: `## Output Rules

1. SKILL.md fence 2. README row 3. Checklist

## Recommended stack

[publishing.md](../../references/publishing.md) · [react-stack.md](../../references/react-stack.md)

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/skill-creator/SKILL.md",
});

export default skillCreator;
