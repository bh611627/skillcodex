#!/usr/bin/env node
/**
 * Regenerate src/skills from parent skills folders.
 * Run: pnpm run sync
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const skillsDir = join(root, "..", "skills");
const outDir = join(root, "src", "skills");

mkdirSync(outDir, { recursive: true });

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("Invalid SKILL.md frontmatter");
  const fm = {};
  let key = null;
  let list = [];
  const flush = () => {
    if (key && list.length) fm[key] = list;
    list = [];
  };
  for (const line of m[1].split("\n")) {
    const li = line.match(/^\s*-\s+(.+)$/);
    if (li && key) {
      list.push(li[1].trim());
      continue;
    }
    flush();
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    key = kv[1];
    const v = kv[2].trim();
    if (!v) continue;
    fm[key] = v;
  }
  flush();
  return { meta: fm, body: m[2].trim() };
}

function splitBody(body) {
  const outIdx = body.indexOf("\n## Output Rules");
  if (outIdx === -1) return { instructions: body, outputRules: undefined };
  return {
    instructions: body.slice(0, outIdx).trim(),
    outputRules: body.slice(outIdx).trim(),
  };
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const folders = readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const name of folders) {
  const path = join(skillsDir, name, "SKILL.md");
  const raw = readFileSync(path, "utf8");
  const { meta, body } = parseFrontmatter(raw);
  const { instructions, outputRules } = splitBody(body);

  const tags = Array.isArray(meta.tags) ? meta.tags : [];
  const outcomes = Array.isArray(meta.outcomes) ? meta.outcomes : undefined;
  const stack = Array.isArray(meta.stack) ? meta.stack : undefined;
  const references = Array.isArray(meta.references) ? meta.references : undefined;

  const varName = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const code = `import { defineSkill } from "../types.js";

const skillMd = \`${esc(raw)}\`;

export const ${varName} = defineSkill({
  name: ${JSON.stringify(meta.name || name)},
  description: ${JSON.stringify(meta.description || "")},
  tags: ${JSON.stringify(tags)},
  version: ${meta.version ? JSON.stringify(meta.version) : "undefined"},
  category: ${meta.category ? JSON.stringify(meta.category) : "undefined"},
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
  console.log("wrote", name);
}

console.log("Done. Run pnpm build.");
