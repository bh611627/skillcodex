export type { SkillModule } from "./types.js";
export { defineSkill } from "./types.js";

export { default as contentCreator } from "./skills/content-creator.js";
export { default as seoAgent } from "./skills/seo-agent.js";
export { default as codeAssistant } from "./skills/code-assistant.js";
export { default as documentationUi } from "./skills/documentation-ui.js";
export { default as webInterfaceGuidelines } from "./skills/web-interface-guidelines.js";
export { default as skillCreator } from "./skills/skill-creator.js";
export { default as skillcodexBrowserUi } from "./skills/skillcodex-browser-ui.js";

import contentCreator from "./skills/content-creator.js";
import seoAgent from "./skills/seo-agent.js";
import codeAssistant from "./skills/code-assistant.js";
import documentationUi from "./skills/documentation-ui.js";
import webInterfaceGuidelines from "./skills/web-interface-guidelines.js";
import skillCreator from "./skills/skill-creator.js";
import skillcodexBrowserUi from "./skills/skillcodex-browser-ui.js";
import type { SkillModule } from "./types.js";

/** All skills keyed by slug. */
export const skills: Record<string, SkillModule> = {
  "content-creator": contentCreator,
  "seo-agent": seoAgent,
  "code-assistant": codeAssistant,
  "documentation-ui": documentationUi,
  "web-interface-guidelines": webInterfaceGuidelines,
  "skill-creator": skillCreator,
  "skillcodex-browser-ui": skillcodexBrowserUi,
};

export const skillList: SkillModule[] = Object.values(skills);

export default skills;
