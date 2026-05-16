#!/usr/bin/env tsx
/**
 * Interactive scaffold for a new SkillCodex skill.
 * Run: pnpm new-skill
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const skillsDir = join(repoRoot, "skills");

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

async function prompt(
  rl: ReturnType<typeof createInterface>,
  question: string,
  def?: string,
): Promise<string> {
  const suffix = def ? ` [${def}]` : "";
  const answer = (await rl.question(`${question}${suffix}: `)).trim();
  return answer || def || "";
}

function template(name: string, fields: Record<string, string | string[]>): string {
  const tags = (fields.tags as string[])
    .map((t) => `  - ${t}`)
    .join("\n");
  const today = new Date().toISOString().slice(0, 10);

  return `---
name: ${name}
description: ${fields.description}
tags:
${tags}
version: 1.0.0
category: ${fields.category}
outcomes:
  - Outcome one — replace with a measurable result
  - Outcome two — replace with a measurable result
last_reviewed: ${today}
risk_level: ${fields.risk_level}
tools_allowed: ${fields.tools_allowed}
requires_user_approval: ${fields.risk_level === "high" ? "true" : "false"}
compatibility:
  - cursor
  - claude-code
  - skills-sh
  - generic-markdown
---

# Instructions

<!-- Describe what the agent should do, step by step. Be specific. -->

1. First step
2. Second step

## Scope and boundaries

<!-- What this skill does NOT do. Keep it focused. -->

- **In scope:**
- **Out of scope:**

## Safety

<!-- What files this skill reads/writes. User approval requirements. -->

- **Tools:** ${fields.tools_allowed}

## Outcomes

<!-- What the user gets when this skill runs successfully. -->

- Replace placeholder outcomes in frontmatter and here.

## Output Rules

State mode and deliverables clearly.

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/${name}/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
`;
}

async function main(): Promise<void> {
  const rl = createInterface({ input, output });

  try {
    let name = await prompt(rl, "Skill name (kebab-case)");
    while (!KEBAB.test(name)) {
      console.error("Name must be kebab-case (e.g. my-new-skill).");
      name = await prompt(rl, "Skill name (kebab-case)");
    }

    const skillPath = join(skillsDir, name, "SKILL.md");
    if (existsSync(skillPath)) {
      console.error(`Already exists: ${skillPath}`);
      process.exit(1);
    }

    const description = await prompt(rl, "One-line description");
    const tagsRaw = await prompt(rl, "Tags (comma-separated)", "react,nextjs");
    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const category = await prompt(rl, "Category", "development");
    const risk_level = await prompt(rl, "risk_level (low|medium|high)", "low");
    const tools_allowed = await prompt(
      rl,
      "tools_allowed (read-only|repo-files|suggest-shell)",
      "read-only",
    );

    mkdirSync(join(skillsDir, name), { recursive: true });
    writeFileSync(
      skillPath,
      template(name, {
        description,
        tags,
        category,
        risk_level,
        tools_allowed,
      }),
    );

    console.log(`\nCreated ${skillPath}\n`);
    console.log("Running validator...\n");

    try {
      execSync("pnpm run validate", { cwd: join(repoRoot, "package"), stdio: "inherit" });
    } catch {
      console.warn("\nValidator reported issues — edit SKILL.md and run pnpm validate again.\n");
    }

    console.log(`Add to your agent:\n  npx skills add https://github.com/bh611627/skillcodex --skill ${name}\n`);
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
