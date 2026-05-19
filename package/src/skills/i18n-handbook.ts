import { defineSkill } from "../types.js";

const skillMd = `---
name: i18n-handbook
description: Internationalization for Next.js App Router — locale routing, message files, and RTL layout checks
tags:
  - i18n
  - nextjs
  - localization
version: 1.0.0
category: development
outcomes:
  - Locale strategy table default locales and fallbacks
  - File layout for messages or dictionaries consistent with repo
  - RTL and date number formatting checklist
stack:
  - next
  - react
  - typescript
last_reviewed: 2026-05-19
risk_level: low
tools_allowed: read-only
requires_user_approval: false
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

Plan **i18n** for **Next.js App Router** without locking to one vendor library unless the repo already uses it.

1. Routing: \`[locale]\` segment vs subdomain — pros for SEO and DX; pick one.
2. Message catalogs: namespace per feature; avoid mega JSON files.
3. **SEO:** \`hreflang\` pairs, canonical per locale, localized titles in \`metadata\`.
4. **RTL:** \`dir\` on \`html\` or layout wrapper; mirror spacing where needed.
5. Dates and numbers: \`Intl\` or established lib — match stack.

## Outcomes

- Locale routing sketch + message file tree + SEO checklist.

## Output Rules

Bullets; no full translation file content unless user provides strings.

## Scope and boundaries

- **In scope:** routing, catalogs, metadata, RTL checklist.
- **Out of scope:** legal translation procurement, TMS integration.

## Safety

- Read-only; do not call paid translation APIs.

## Troubleshooting

- **404 on locale:** middleware matcher and default redirect.
- **Wrong locale flash:** cookie vs accept-language priority documented.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/i18n-handbook/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;

export const i18nHandbook = defineSkill({
  name: "i18n-handbook",
  description: "Internationalization for Next.js App Router — locale routing, message files, and RTL layout checks",
  tags: ["i18n","nextjs","localization"],
  version: "1.0.0",
  category: "development",
  lastReviewed: "Tue May 19 2026 05:00:00 GMT+0500 (Pakistan Standard Time)",
  riskLevel: "low",
  toolsAllowed: "read-only",
  requiresUserApproval: false,
  compatibility: ["cursor","claude-code","skills-sh","generic-markdown"],
  outcomes: ["Locale strategy table default locales and fallbacks","File layout for messages or dictionaries consistent with repo","RTL and date number formatting checklist"],
  stack: ["next","react","typescript"],
  references: ["references/stack-nextjs.md","references/skill-safety.md"],
  instructions: `# Instructions

Plan **i18n** for **Next.js App Router** without locking to one vendor library unless the repo already uses it.

1. Routing: \`[locale]\` segment vs subdomain — pros for SEO and DX; pick one.
2. Message catalogs: namespace per feature; avoid mega JSON files.
3. **SEO:** \`hreflang\` pairs, canonical per locale, localized titles in \`metadata\`.
4. **RTL:** \`dir\` on \`html\` or layout wrapper; mirror spacing where needed.
5. Dates and numbers: \`Intl\` or established lib — match stack.

## Outcomes

- Locale routing sketch + message file tree + SEO checklist.`,
  outputRules: `## Output Rules

Bullets; no full translation file content unless user provides strings.

## Scope and boundaries

- **In scope:** routing, catalogs, metadata, RTL checklist.
- **Out of scope:** legal translation procurement, TMS integration.

## Safety

- Read-only; do not call paid translation APIs.

## Troubleshooting

- **404 on locale:** middleware matcher and default redirect.
- **Wrong locale flash:** cookie vs accept-language priority documented.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/i18n-handbook/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills`,
  skillMd,
  githubPath: "skills/i18n-handbook/SKILL.md",
});

export default i18nHandbook;
