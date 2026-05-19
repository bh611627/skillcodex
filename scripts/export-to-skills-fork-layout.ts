// @ts-nocheck - run via `pnpm export-skills-fork-layout`; types live in package/
/**
 * Export your catalog for **[bh611627/skills](https://github.com/bh611627/skills)** (or any clone of the skills CLI repo).
 *
 * - **Authoritative authoring stays in SkillCodex** (full frontmatter, validation, npm package).
 * - This script emits the **skills CLI public contract**: YAML with `name` + `description` only, same as upstream’s
 *   [Creating Skills](https://github.com/vercel-labs/skills#creating-skills) and [find-skills/SKILL.md](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)—so installs and discovery treat your fork as a first-class source.
 * - Instruction bodies are unchanged; GitHub / raw URLs are rewritten so **your repo** is the canonical link target.
 *
 * Usage: `pnpm export-skills-fork-layout [outputDir]` - default outputDir: `/tmp/skillcodex-fork-export`
 */
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const SKILLS_DIR = join(ROOT, "skills");
const REFS_DIR = join(ROOT, "references");
const OUT =
  process.argv[2]?.trim() || join("/tmp", "skillcodex-fork-export");

function rewriteForkUrls(s: string): string {
  return s
    .replaceAll(
      "https://github.com/bh611627/skillcodex/tree/main/skills/",
      "https://github.com/bh611627/skills/tree/main/skills/",
    )
    .replaceAll(
      "https://github.com/bh611627/skillcodex.git",
      "https://github.com/bh611627/skills.git",
    )
    .replaceAll(
      "https://github.com/bh611627/skillcodex",
      "https://github.com/bh611627/skills",
    )
    .replaceAll("github.com/bh611627/skillcodex", "github.com/bh611627/skills")
    .replaceAll(
      "raw.githubusercontent.com/bh611627/skillcodex/main/",
      "raw.githubusercontent.com/bh611627/skills/main/",
    )
    .replaceAll(
      "npx skills add https://github.com/bh611627/skillcodex",
      "npx skills add https://github.com/bh611627/skills",
    )
    .replaceAll(
      "npx skills add bh611627/skillcodex",
      "npx skills add bh611627/skills",
    );
}

function normalizeDescription(desc: unknown, slug: string): string {
  if (typeof desc !== "string" || !desc.trim()) {
    throw new Error(`${slug}: missing description`);
  }
  const one = desc.replace(/\s+/g, " ").trim();
  return one;
}

function main(): void {
  rmSync(OUT, { recursive: true, force: true });
  const outSkills = join(OUT, "skills");
  const outRefs = join(OUT, "references");
  mkdirSync(outSkills, { recursive: true });
  mkdirSync(outRefs, { recursive: true });

  for (const name of readdirSync(REFS_DIR)) {
    const p = join(REFS_DIR, name);
    if (!statSync(p).isFile()) continue;
    const text = rewriteForkUrls(readFileSync(p, "utf8"));
    writeFileSync(join(outRefs, name), text, "utf8");
  }

  const dirs = readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  for (const slug of dirs) {
    const abs = join(SKILLS_DIR, slug, "SKILL.md");
    const raw = readFileSync(abs, "utf8");
    const { data, content: body } = matter(raw);
    const name = data.name;
    if (typeof name !== "string" || name !== slug) {
      throw new Error(`${slug}: frontmatter name must match folder (${name})`);
    }
    const description = normalizeDescription(data.description, slug);
    const fm = ["---", `name: ${name}`, `description: ${description}`, "---"].join(
      "\n",
    );
    const outMd = `${fm}\n${rewriteForkUrls(body)}`;
    const destDir = join(outSkills, slug);
    mkdirSync(destDir, { recursive: true });
    writeFileSync(join(destDir, "SKILL.md"), outMd, "utf8");
    console.log("wrote", join("skills", slug, "SKILL.md"));
  }

  console.log("\nDone. Copy to fork:", OUT);
}

main();
