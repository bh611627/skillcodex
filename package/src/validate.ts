/**
 * Validate SkillCodex SKILL.md files.
 * Run: pnpm run validate
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(__dirname, "..", "..", "skills");

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const UNICODE_TAG = /[\u{E0000}-\u{E007F}]/u;
const BIDI_OVERRIDE = /[\u202A-\u202E\u2066-\u2069]/u;

const VALID_RISK = new Set(["low", "medium", "high"]);
const VALID_TOOLS = new Set(["read-only", "repo-files", "suggest-shell"]);

interface SkillResult {
  slug: string;
  path: string;
  errors: string[];
  warnings: string[];
}

const results: SkillResult[] = [];

function addResult(slug: string, relPath: string): SkillResult {
  const r: SkillResult = { slug, path: relPath, errors: [], warnings: [] };
  results.push(r);
  return r;
}

function scanSecurity(raw: string, r: SkillResult): void {
  if (UNICODE_TAG.test(raw)) {
    r.errors.push("possible Unicode tag injection detected");
  }
  if (BIDI_OVERRIDE.test(raw)) {
    r.errors.push("possible bidi override detected");
  }
}

const dirs = readdirSync(skillsDir, { withFileTypes: true }).filter((d) =>
  d.isDirectory(),
);

for (const d of dirs) {
  const slug = d.name;
  const relPath = `skills/${slug}/SKILL.md`;
  const absPath = join(skillsDir, slug, "SKILL.md");
  const r = addResult(slug, relPath);

  let raw: string;
  try {
    raw = readFileSync(absPath, "utf8");
  } catch {
    r.errors.push("SKILL.md not found");
    continue;
  }

  scanSecurity(raw, r);

  let parsed: ReturnType<typeof matter>;
  try {
    parsed = matter(raw);
  } catch {
    r.errors.push("invalid YAML frontmatter");
    continue;
  }

  const fm = parsed.data as Record<string, unknown>;
  const body = parsed.content;

  const name = fm.name;
  if (typeof name !== "string" || !name.trim()) {
    r.errors.push("name must be a non-empty string");
  } else if (!KEBAB.test(name)) {
    r.errors.push(`name "${name}" is not valid kebab-case`);
  } else if (name !== slug) {
    r.errors.push(
      `name "${name}" does not match folder "${slug}" (use kebab-case)`,
    );
  }

  const description = fm.description;
  if (typeof description !== "string" || !description.trim()) {
    r.errors.push("description must be a non-empty string");
  } else {
    if (description.includes("\n")) {
      r.errors.push("description must be a single line");
    }
    if (description.length > 200) {
      r.errors.push(
        `description is ${description.length} characters (max 200)`,
      );
    }
  }

  const tags = fm.tags;
  if (!Array.isArray(tags) || tags.length === 0) {
    r.errors.push("tags must be an array with at least one element");
  }

  if (!body.includes("# Instructions")) {
    r.errors.push("markdown body must contain '# Instructions' heading");
  }

  if (fm.version === undefined || fm.version === null || fm.version === "") {
    r.warnings.push("no version field");
  }

  if (
    fm.last_reviewed === undefined ||
    fm.last_reviewed === null ||
    fm.last_reviewed === ""
  ) {
    r.warnings.push("no review date");
  }

  const outcomes = fm.outcomes;
  if (!Array.isArray(outcomes) || outcomes.length === 0) {
    r.warnings.push("no outcomes defined");
  }

  const riskLevel = fm.risk_level;
  if (riskLevel === undefined || riskLevel === null || riskLevel === "") {
    r.warnings.push("no risk_level field");
  } else if (typeof riskLevel === "string" && !VALID_RISK.has(riskLevel)) {
    r.warnings.push("invalid risk_level");
  }

  const toolsAllowed = fm.tools_allowed;
  if (toolsAllowed !== undefined && toolsAllowed !== null && toolsAllowed !== "") {
    if (
      typeof toolsAllowed === "string" &&
      !VALID_TOOLS.has(toolsAllowed)
    ) {
      r.warnings.push("invalid tools_allowed");
    }
  }

  if (riskLevel === "high" && fm.requires_user_approval !== true) {
    r.errors.push("high risk skills must set requires_user_approval: true");
  }
}

let passed = 0;
let failed = 0;
let warningCount = 0;

for (const r of results) {
  const hasErrors = r.errors.length > 0;
  const symbol = hasErrors ? "✗" : "✓";
  console.log(`${symbol} ${r.path}`);
  for (const e of r.errors) {
    console.log(`  ERROR: ${e}`);
  }
  for (const w of r.warnings) {
    console.log(`  WARN:  ${w}`);
    warningCount++;
  }
  if (hasErrors) failed++;
  else passed++;
}

console.log(
  `\nSummary: ${passed} passed, ${failed} failed, ${warningCount} warnings`,
);

if (failed > 0) {
  process.exit(1);
}
