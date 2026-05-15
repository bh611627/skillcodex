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
