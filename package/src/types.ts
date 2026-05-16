import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

export interface SkillFrontmatter {
  name: string;
  description: string;
  tags: string[];
  version?: string;
  category?: string;
  outcomes?: string[];
  stack?: string[];
  references?: string[];
  last_reviewed?: string;
  risk_level?: "low" | "medium" | "high";
  tools_allowed?: "read-only" | "repo-files" | "suggest-shell";
  requires_user_approval?: boolean;
  compatibility?: string[];
}

export interface SkillModule {
  name: string;
  description: string;
  tags: string[];
  version?: string;
  category?: string;
  lastReviewed?: string;
  riskLevel?: "low" | "medium" | "high";
  toolsAllowed?: "read-only" | "repo-files" | "suggest-shell";
  requiresUserApproval?: boolean;
  compatibility?: string[];
  outcomes?: string[];
  stack?: string[];
  references?: string[];
  instructions: string;
  outputRules?: string;
  /** Full SKILL.md source (frontmatter + body). */
  skillMd: string;
  githubPath: string;
}

export function defineSkill(skill: SkillModule): SkillModule {
  return Object.freeze(skill);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Load a skill from the installed package by slug (reads generated src/skills/*.ts source
 * via the embedded skillMd in dist, or falls back to skills-index + SKILL path in dev).
 */
export function loadSkill(slug: string): {
  frontmatter: SkillFrontmatter;
  body: string;
} {
  const candidates = [
    join(__dirname, "..", "skills", slug, "SKILL.md"),
    join(__dirname, "..", "..", "skills", slug, "SKILL.md"),
  ];

  const path = candidates.find((p) => existsSync(p));
  if (!path) {
    throw new Error(
      `Skill "${slug}" not found. Install @skillcodex/skills and use a valid slug.`,
    );
  }

  const raw = readFileSync(path, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as SkillFrontmatter,
    body: content.trim(),
  };
}
