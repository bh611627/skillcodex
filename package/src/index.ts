export type { SkillModule, SkillFrontmatter } from "./types.js";
export { defineSkill, loadSkill } from "./types.js";

export { default as accessibilityAudit } from "./skills/accessibility-audit.js";
export { default as codeAssistant } from "./skills/code-assistant.js";
export { default as contentCreator } from "./skills/content-creator.js";
export { default as databaseSchemaAgent } from "./skills/database-schema-agent.js";
export { default as envConfigAgent } from "./skills/env-config-agent.js";
export { default as performanceAudit } from "./skills/performance-audit.js";
export { default as seoAgent } from "./skills/seo-agent.js";
export { default as skillCreator } from "./skills/skill-creator.js";
export { default as skillcodexBrowserUi } from "./skills/skillcodex-browser-ui.js";
export { default as testingAgent } from "./skills/testing-agent.js";
export { default as typescriptRefactor } from "./skills/typescript-refactor.js";
export { default as webDesignGuidelines } from "./skills/web-design-guidelines.js";

import accessibilityAudit from "./skills/accessibility-audit.js";
import codeAssistant from "./skills/code-assistant.js";
import contentCreator from "./skills/content-creator.js";
import databaseSchemaAgent from "./skills/database-schema-agent.js";
import envConfigAgent from "./skills/env-config-agent.js";
import performanceAudit from "./skills/performance-audit.js";
import seoAgent from "./skills/seo-agent.js";
import skillCreator from "./skills/skill-creator.js";
import skillcodexBrowserUi from "./skills/skillcodex-browser-ui.js";
import testingAgent from "./skills/testing-agent.js";
import typescriptRefactor from "./skills/typescript-refactor.js";
import webDesignGuidelines from "./skills/web-design-guidelines.js";
import type { SkillModule } from "./types.js";

/** All skills keyed by slug. */
export const skills: Record<string, SkillModule> = {
  "accessibility-audit": accessibilityAudit,
  "code-assistant": codeAssistant,
  "content-creator": contentCreator,
  "database-schema-agent": databaseSchemaAgent,
  "env-config-agent": envConfigAgent,
  "performance-audit": performanceAudit,
  "seo-agent": seoAgent,
  "skill-creator": skillCreator,
  "skillcodex-browser-ui": skillcodexBrowserUi,
  "testing-agent": testingAgent,
  "typescript-refactor": typescriptRefactor,
  "web-design-guidelines": webDesignGuidelines,
};

export const skillList: SkillModule[] = Object.values(skills);

export default skills;
