/**
 * Regenerate src/skills from parent skills folders + index/changelog fragments.
 * Run: pnpm run sync
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  existsSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, "..");
const repoRoot = join(packageRoot, "..");
const skillsDir = join(repoRoot, "skills");
const outDir = join(packageRoot, "src", "skills");
const packagedSkillsDir = join(packageRoot, "skills");

mkdirSync(outDir, { recursive: true });
mkdirSync(packagedSkillsDir, { recursive: true });

function esc(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function splitBody(body: string): {
  instructions: string;
  outputRules: string | undefined;
} {
  const outIdx = body.indexOf("\n## Output Rules");
  if (outIdx === -1) return { instructions: body, outputRules: undefined };
  return {
    instructions: body.slice(0, outIdx).trim(),
    outputRules: body.slice(outIdx).trim(),
  };
}

interface IndexEntry {
  slug: string;
  description: string;
  tags: string[];
  version?: string;
  risk_level?: string;
  last_reviewed?: string;
}

const folders = readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const indexEntries: IndexEntry[] = [];

for (const name of folders) {
  const path = join(skillsDir, name, "SKILL.md");
  const raw = readFileSync(path, "utf8");
  const { data: meta, content: body } = matter(raw);
  const { instructions, outputRules } = splitBody(body);

  const m = meta as Record<string, unknown>;
  const tags = Array.isArray(m.tags) ? (m.tags as string[]) : [];
  const outcomes = Array.isArray(m.outcomes) ? m.outcomes : undefined;
  const stack = Array.isArray(m.stack) ? m.stack : undefined;
  const references = Array.isArray(m.references) ? m.references : undefined;
  const compatibility = Array.isArray(m.compatibility)
    ? m.compatibility
    : undefined;

  indexEntries.push({
    slug: name,
    description: String(m.description ?? ""),
    tags,
    version: m.version ? String(m.version) : undefined,
    risk_level: m.risk_level ? String(m.risk_level) : undefined,
    last_reviewed: m.last_reviewed ? String(m.last_reviewed) : undefined,
  });

  const varName = name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  const code = `import { defineSkill } from "../types.js";

const skillMd = \`${esc(raw)}\`;

export const ${varName} = defineSkill({
  name: ${JSON.stringify(m.name ?? name)},
  description: ${JSON.stringify(m.description ?? "")},
  tags: ${JSON.stringify(tags)},
  version: ${m.version ? JSON.stringify(String(m.version)) : "undefined"},
  category: ${m.category ? JSON.stringify(String(m.category)) : "undefined"},
  lastReviewed: ${m.last_reviewed ? JSON.stringify(String(m.last_reviewed)) : "undefined"},
  riskLevel: ${m.risk_level ? JSON.stringify(String(m.risk_level)) : "undefined"},
  toolsAllowed: ${m.tools_allowed ? JSON.stringify(String(m.tools_allowed)) : "undefined"},
  requiresUserApproval: ${m.requires_user_approval === true ? "true" : m.requires_user_approval === false ? "false" : "undefined"},
  compatibility: ${compatibility ? JSON.stringify(compatibility) : "undefined"},
  outcomes: ${outcomes ? JSON.stringify(outcomes) : "undefined"},
  stack: ${stack ? JSON.stringify(stack) : "undefined"},
  references: ${references ? JSON.stringify(references) : "undefined"},
  instructions: \`${esc(instructions)}\`,
  outputRules: ${outputRules ? `\`${esc(outputRules)}\`` : "undefined"},
  skillMd,
  githubPath: ${JSON.stringify(`skills/${name}/SKILL.md`)},
});

export default ${varName};
`;

  writeFileSync(join(outDir, `${name}.ts`), code);

  const skillOutDir = join(packagedSkillsDir, name);
  mkdirSync(skillOutDir, { recursive: true });
  writeFileSync(join(skillOutDir, "SKILL.md"), raw);

  console.log("wrote", name);
}

const exportLines: string[] = [];
const importLines: string[] = [];
const skillsMapLines: string[] = [];

for (const name of folders) {
  const exportName = name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  const varName =
    exportName.charAt(0).toLowerCase() + exportName.slice(1);
  importLines.push(
    `import ${varName} from "./skills/${name}.js";`,
  );
  exportLines.push(
    `export { default as ${varName} } from "./skills/${name}.js";`,
  );
  skillsMapLines.push(`  "${name}": ${varName},`);
}

const indexTs = `export type { SkillModule, SkillFrontmatter } from "./types.js";
export { defineSkill, loadSkill } from "./types.js";

${exportLines.join("\n")}

${importLines.join("\n")}
import type { SkillModule } from "./types.js";

/** All skills keyed by slug. */
export const skills: Record<string, SkillModule> = {
${skillsMapLines.join("\n")}
};

export const skillList: SkillModule[] = Object.values(skills);

export default skills;
`;

writeFileSync(join(packageRoot, "src", "index.ts"), indexTs);
console.log("wrote src/index.ts");

const pkgPath = join(packageRoot, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
  exports: Record<string, unknown>;
  [key: string]: unknown;
};
const exports: Record<string, unknown> = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
  },
  "./package.json": "./package.json",
};
for (const name of folders) {
  exports[`./${name}`] = {
    types: `./dist/skills/${name}.d.ts`,
    import: `./dist/skills/${name}.js`,
  };
}
pkg.exports = exports;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("updated package.json exports");

writeFileSync(
  join(packageRoot, "skills-index.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      skills: indexEntries,
    },
    null,
    2,
  ) + "\n",
);
console.log("wrote skills-index.json");

let changelogFragment = "";
try {
  const tag = execSync("git describe --tags --abbrev=0 2>/dev/null", {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  const diff = execSync(`git diff --name-only ${tag}..HEAD -- skills/`, {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  if (diff) {
    changelogFragment = `Skills changed since \`${tag}\`:\n\n${diff
      .split("\n")
      .map((f) => `- ${f}`)
      .join("\n")}\n`;
  } else {
    changelogFragment = `No skill file changes since \`${tag}\`.\n`;
  }
} catch {
  changelogFragment =
    "_No git tags found - CHANGELOG_AUTO.md lists all skills in this sync._\n\n" +
    indexEntries.map((e) => `- skills/${e.slug}/SKILL.md`).join("\n") +
    "\n";
}

writeFileSync(join(packageRoot, "CHANGELOG_AUTO.md"), changelogFragment);
console.log("wrote CHANGELOG_AUTO.md");
console.log("Done. Run pnpm build.");
