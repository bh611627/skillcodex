/**
 * Copy every skills/<slug>/SKILL.md into skills-sh-catalog/skills/<slug>/SKILL.md
 * so the skills.sh-oriented tree stays in lockstep with the source of truth.
 *
 * Run: pnpm export-skills-sh
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const srcSkills = join(repoRoot, "skills");
const destRoot = join(repoRoot, "skills-sh-catalog", "skills");

if (existsSync(destRoot)) {
  rmSync(destRoot, { recursive: true });
}
mkdirSync(destRoot, { recursive: true });

const dirs = readdirSync(srcSkills, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

let count = 0;
for (const name of dirs) {
  const src = join(srcSkills, name, "SKILL.md");
  if (!existsSync(src)) continue;
  const destDir = join(destRoot, name);
  mkdirSync(destDir, { recursive: true });
  cpSync(src, join(destDir, "SKILL.md"));
  count++;
}

const readme = `# skills.sh catalog mirror (generated)

This folder is a **generated copy** of [\`skills/\`](../skills/) for [skills.sh](https://www.skills.sh/)-style layout: one directory per skill with \`SKILL.md\`.

## Do not edit files here by hand

- **Source of truth:** [\`skills/<slug>/SKILL.md\`](../skills/)
- **Regenerate:** from repo root run \`pnpm export-skills-sh\`

## Install (same as primary tree)

Per [skills.sh/docs](https://www.skills.sh/docs), install from **this repository** (paths in frontmatter point at \`references/\` from the **repo root**, not from this subfolder):

\`\`\`bash
npx skills add https://github.com/bh611627/skillcodex --skill <slug>
\`\`\`

All slugs: [DIRECTORY.md](../DIRECTORY.md).

## Why this folder exists

- Single place to **browse every \`SKILL.md\`** in the skills.sh–expected shape (\`skills/<slug>/SKILL.md\`).
- Easier to compare with [vercel-labs/skills](https://github.com/vercel-labs/skills) layout when preparing upstream PRs (see [contrib/vercel-labs-skills](../contrib/vercel-labs-skills/README.md)).

**Last export:** ${new Date().toISOString()} — **${count}** skills.
`;

writeFileSync(join(repoRoot, "skills-sh-catalog", "README.md"), readme, "utf8");
console.log(`Exported ${count} skills to skills-sh-catalog/skills/`);
