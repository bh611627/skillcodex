import { defineSkill } from "../types.js";

const skillMd = `---
name: database-schema-agent
description: Design or audit Prisma schemas for Next.js — relations, indexes, naming, migration notes
tags:
  - prisma
  - database
  - nextjs
  - schema
version: 1.0.0
category: development
outcomes:
  - Valid schema.prisma with migration steps (Mode A)
  - OR audit report for indexes, N+1 risk, and naming (Mode B)
stack:
  - prisma
  - "@prisma/client"
  - pnpm
last_reviewed: 2026-05-16
risk_level: medium
tools_allowed: repo-files
requires_user_approval: true
compatibility:
  - cursor
  - claude-code
  - skills-sh
  - generic-markdown
references:
  - references/stack-nextjs.md
  - references/skill-safety.md
---

# Instructions

Design or review **Prisma** data models for **Next.js** applications.

## Mode A — generate schema

1. Parse the user’s plain-English domain model (entities, relationships, enums).
2. Produce \`schema.prisma\` with:
   - \`@@map\` / \`@map\` only if user prefers snake_case tables
   - IDs (\`cuid()\` or \`uuid()\` — match repo if exists)
   - indexes on foreign keys and frequent filters
3. Include migration commands: \`pnpm exec prisma migrate dev --name init\` (or match project scripts).
4. **Requires user approval** before writing files.

## Mode B — audit existing schema

1. Read \`prisma/schema.prisma\` and related queries if present.
2. Report: missing indexes, ambiguous relations, cascade risks, N+1-prone includes, naming inconsistencies.
3. Suggest fixes as diffs or bullet list — no writes unless approved.

## Outcomes

- **Mode A:** copy-paste-ready schema + migration instructions.
- **Mode B:** prioritized audit with severity labels.

## Output Rules

State mode. For Mode A, fence \`schema.prisma\` only after approval summary.

## Scope and boundaries

- **In scope:** Prisma schema design and review for Node/Next backends.
- **Out of scope:** raw SQL production migrations without user review, multi-database sharding, destructive data migrations.

## Safety

- **Mode A** writes schema files — \`requires_user_approval: true\`.
- Never embed production database URLs or passwords; use \`env("DATABASE_URL")\` only.
- Warn before \`onDelete: Cascade\` on high-cardinality relations.

## Troubleshooting

- **Migrate drift:** suggest \`prisma migrate status\` before new migrations.
- **PlanetScale / serverless:** note provider-specific limitations if user names them.
- **Monorepo:** confirm \`schema.prisma\` path (\`packages/db\` vs root).

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/database-schema-agent/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const databaseSchemaAgent = defineSkill({
  name: "database-schema-agent",
  description: "Design or audit Prisma schemas for Next.js — relations, indexes, naming, migration notes",
  tags: ["prisma","database","nextjs","schema"],
  version: "1.0.0",
  category: "development",
  lastReviewed: "Sat May 16 2026 05:00:00 GMT+0500 (Pakistan Standard Time)",
  riskLevel: "medium",
  toolsAllowed: "repo-files",
  requiresUserApproval: true,
  compatibility: ["cursor","claude-code","skills-sh","generic-markdown"],
  outcomes: ["Valid schema.prisma with migration steps (Mode A)","OR audit report for indexes, N+1 risk, and naming (Mode B)"],
  stack: ["prisma","@prisma/client","pnpm"],
  references: ["references/stack-nextjs.md","references/skill-safety.md"],
  instructions: `# Instructions

Design or review **Prisma** data models for **Next.js** applications.

## Mode A — generate schema

1. Parse the user’s plain-English domain model (entities, relationships, enums).
2. Produce \`schema.prisma\` with:
   - \`@@map\` / \`@map\` only if user prefers snake_case tables
   - IDs (\`cuid()\` or \`uuid()\` — match repo if exists)
   - indexes on foreign keys and frequent filters
3. Include migration commands: \`pnpm exec prisma migrate dev --name init\` (or match project scripts).
4. **Requires user approval** before writing files.

## Mode B — audit existing schema

1. Read \`prisma/schema.prisma\` and related queries if present.
2. Report: missing indexes, ambiguous relations, cascade risks, N+1-prone includes, naming inconsistencies.
3. Suggest fixes as diffs or bullet list — no writes unless approved.

## Outcomes

- **Mode A:** copy-paste-ready schema + migration instructions.
- **Mode B:** prioritized audit with severity labels.`,
  outputRules: `## Output Rules

State mode. For Mode A, fence \`schema.prisma\` only after approval summary.

## Scope and boundaries

- **In scope:** Prisma schema design and review for Node/Next backends.
- **Out of scope:** raw SQL production migrations without user review, multi-database sharding, destructive data migrations.

## Safety

- **Mode A** writes schema files — \`requires_user_approval: true\`.
- Never embed production database URLs or passwords; use \`env("DATABASE_URL")\` only.
- Warn before \`onDelete: Cascade\` on high-cardinality relations.

## Troubleshooting

- **Migrate drift:** suggest \`prisma migrate status\` before new migrations.
- **PlanetScale / serverless:** note provider-specific limitations if user names them.
- **Monorepo:** confirm \`schema.prisma\` path (\`packages/db\` vs root).

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/database-schema-agent/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/database-schema-agent/SKILL.md",
});

export default databaseSchemaAgent;
