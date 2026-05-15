#!/usr/bin/env node
/**
 * Validate SkillCodex SKILL.md files (2026 safety + quality checks).
 * Run: pnpm run validate
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(__dirname, "..", "..", "skills");

const HIDDEN_UNICODE =
  /[\u200B-\u200F\u202A-\u202E\u2060-\u2064\uFEFF\u{E0000}-\u{E007F}]/u;

const REQUIRED_SECTIONS = ["## Scope and boundaries", "## Safety"];

const REQUIRED_FM = ["name", "description", "tags"];
const RECOMMENDED_FM = ["version", "last_reviewed", "risk_level", "tools_allowed"];

let failed = false;

function fail(msg) {
  console.error("FAIL:", msg);
  failed = true;
}

function warn(msg) {
  console.warn("WARN:", msg);
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return null;
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
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (!kv) continue;
    key = kv[1];
    const v = kv[2].trim();
    if (!v) continue;
    fm[key] = v === "true" ? true : v === "false" ? false : v;
  }
  flush();
  return { fm, body: m[2] };
}

const dirs = readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory());

for (const d of dirs) {
  const name = d.name;
  const path = join(skillsDir, name, "SKILL.md");
  const raw = readFileSync(path, "utf8");
  console.log("\n==", name, "==");

  if (HIDDEN_UNICODE.test(raw)) {
    fail(`${name}: hidden Unicode detected (bidi / zero-width / tag chars)`);
  }

  const parsed = parseFrontmatter(raw);
  if (!parsed) {
    fail(`${name}: missing valid YAML frontmatter`);
    continue;
  }

  const { fm, body } = parsed;

  if (fm.name !== name) fail(`${name}: frontmatter name must match folder`);
  for (const k of REQUIRED_FM) {
    if (!fm[k]) fail(`${name}: missing required frontmatter '${k}'`);
  }
  if (!Array.isArray(fm.tags) || fm.tags.length === 0) {
    fail(`${name}: tags must be a non-empty list`);
  }

  for (const k of RECOMMENDED_FM) {
    if (!fm[k]) warn(`${name}: missing recommended '${k}'`);
  }

  if (fm.risk_level && !["low", "medium", "high"].includes(fm.risk_level)) {
    fail(`${name}: risk_level must be low | medium | high`);
  }

  if (fm.risk_level === "high" && fm.requires_user_approval !== true) {
    fail(`${name}: high risk skills must set requires_user_approval: true`);
  }

  if (!body.includes("# Instructions")) {
    fail(`${name}: body must include '# Instructions'`);
  }

  for (const section of REQUIRED_SECTIONS) {
    if (!body.includes(section)) {
      fail(`${name}: missing required section '${section}'`);
    }
  }

  const lower = raw.toLowerCase();
  const suspicious = [
    "ignore previous",
    "ignore all previous",
    "disregard your",
    "curl | bash",
    "curl|bash",
  ];
  for (const phrase of suspicious) {
    if (lower.includes(phrase)) {
      warn(`${name}: contains suspicious phrase '${phrase}' - review manually`);
    }
  }
}

if (failed) {
  console.error("\nValidation failed.");
  process.exit(1);
}

console.log("\nAll skills passed validation.");
