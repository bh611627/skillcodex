export type { SkillModule, SkillFrontmatter } from "./types.js";
export { defineSkill, loadSkill } from "./types.js";

export { default as accessibilityAudit } from "./skills/accessibility-audit.js";
export { default as apiHandbook } from "./skills/api-handbook.js";
export { default as authHandbook } from "./skills/auth-handbook.js";
export { default as clientDataFetching } from "./skills/client-data-fetching.js";
export { default as codeAssistant } from "./skills/code-assistant.js";
export { default as containerLocalDev } from "./skills/container-local-dev.js";
export { default as contentCreator } from "./skills/content-creator.js";
export { default as dataLayerHandbook } from "./skills/data-layer-handbook.js";
export { default as databaseSchemaAgent } from "./skills/database-schema-agent.js";
export { default as dependencyMigrations } from "./skills/dependency-migrations.js";
export { default as edgeRuntimeHandbook } from "./skills/edge-runtime-handbook.js";
export { default as envConfigAgent } from "./skills/env-config-agent.js";
export { default as errorLoadingNotFound } from "./skills/error-loading-not-found.js";
export { default as formsAndValidation } from "./skills/forms-and-validation.js";
export { default as githubActionsCi } from "./skills/github-actions-ci.js";
export { default as i18nHandbook } from "./skills/i18n-handbook.js";
export { default as markdownPipeline } from "./skills/markdown-pipeline.js";
export { default as monorepoTooling } from "./skills/monorepo-tooling.js";
export { default as nextArchitecture } from "./skills/next-architecture.js";
export { default as nextServerPatterns } from "./skills/next-server-patterns.js";
export { default as observabilityHandbook } from "./skills/observability-handbook.js";
export { default as paymentsHandbook } from "./skills/payments-handbook.js";
export { default as performanceAudit } from "./skills/performance-audit.js";
export { default as prReviewWorkflow } from "./skills/pr-review-workflow.js";
export { default as pythonProductive } from "./skills/python-productive.js";
export { default as reactEmailTemplates } from "./skills/react-email-templates.js";
export { default as realtimeHandbook } from "./skills/realtime-handbook.js";
export { default as secureDependencies } from "./skills/secure-dependencies.js";
export { default as securityHeaders } from "./skills/security-headers.js";
export { default as semanticHtmlCss } from "./skills/semantic-html-css.js";
export { default as seoExpert } from "./skills/seo-expert.js";
export { default as serverCachingHandbook } from "./skills/server-caching-handbook.js";
export { default as skillCreator } from "./skills/skill-creator.js";
export { default as skillcodexBrowserUi } from "./skills/skillcodex-browser-ui.js";
export { default as storybookHandbook } from "./skills/storybook-handbook.js";
export { default as tddVitest } from "./skills/tdd-vitest.js";
export { default as testingAgent } from "./skills/testing-agent.js";
export { default as typescriptRefactor } from "./skills/typescript-refactor.js";
export { default as webDesignGuidelines } from "./skills/web-design-guidelines.js";
export { default as webhookReceivers } from "./skills/webhook-receivers.js";

import accessibilityAudit from "./skills/accessibility-audit.js";
import apiHandbook from "./skills/api-handbook.js";
import authHandbook from "./skills/auth-handbook.js";
import clientDataFetching from "./skills/client-data-fetching.js";
import codeAssistant from "./skills/code-assistant.js";
import containerLocalDev from "./skills/container-local-dev.js";
import contentCreator from "./skills/content-creator.js";
import dataLayerHandbook from "./skills/data-layer-handbook.js";
import databaseSchemaAgent from "./skills/database-schema-agent.js";
import dependencyMigrations from "./skills/dependency-migrations.js";
import edgeRuntimeHandbook from "./skills/edge-runtime-handbook.js";
import envConfigAgent from "./skills/env-config-agent.js";
import errorLoadingNotFound from "./skills/error-loading-not-found.js";
import formsAndValidation from "./skills/forms-and-validation.js";
import githubActionsCi from "./skills/github-actions-ci.js";
import i18nHandbook from "./skills/i18n-handbook.js";
import markdownPipeline from "./skills/markdown-pipeline.js";
import monorepoTooling from "./skills/monorepo-tooling.js";
import nextArchitecture from "./skills/next-architecture.js";
import nextServerPatterns from "./skills/next-server-patterns.js";
import observabilityHandbook from "./skills/observability-handbook.js";
import paymentsHandbook from "./skills/payments-handbook.js";
import performanceAudit from "./skills/performance-audit.js";
import prReviewWorkflow from "./skills/pr-review-workflow.js";
import pythonProductive from "./skills/python-productive.js";
import reactEmailTemplates from "./skills/react-email-templates.js";
import realtimeHandbook from "./skills/realtime-handbook.js";
import secureDependencies from "./skills/secure-dependencies.js";
import securityHeaders from "./skills/security-headers.js";
import semanticHtmlCss from "./skills/semantic-html-css.js";
import seoExpert from "./skills/seo-expert.js";
import serverCachingHandbook from "./skills/server-caching-handbook.js";
import skillCreator from "./skills/skill-creator.js";
import skillcodexBrowserUi from "./skills/skillcodex-browser-ui.js";
import storybookHandbook from "./skills/storybook-handbook.js";
import tddVitest from "./skills/tdd-vitest.js";
import testingAgent from "./skills/testing-agent.js";
import typescriptRefactor from "./skills/typescript-refactor.js";
import webDesignGuidelines from "./skills/web-design-guidelines.js";
import webhookReceivers from "./skills/webhook-receivers.js";
import type { SkillModule } from "./types.js";

/** All skills keyed by slug. */
export const skills: Record<string, SkillModule> = {
  "accessibility-audit": accessibilityAudit,
  "api-handbook": apiHandbook,
  "auth-handbook": authHandbook,
  "client-data-fetching": clientDataFetching,
  "code-assistant": codeAssistant,
  "container-local-dev": containerLocalDev,
  "content-creator": contentCreator,
  "data-layer-handbook": dataLayerHandbook,
  "database-schema-agent": databaseSchemaAgent,
  "dependency-migrations": dependencyMigrations,
  "edge-runtime-handbook": edgeRuntimeHandbook,
  "env-config-agent": envConfigAgent,
  "error-loading-not-found": errorLoadingNotFound,
  "forms-and-validation": formsAndValidation,
  "github-actions-ci": githubActionsCi,
  "i18n-handbook": i18nHandbook,
  "markdown-pipeline": markdownPipeline,
  "monorepo-tooling": monorepoTooling,
  "next-architecture": nextArchitecture,
  "next-server-patterns": nextServerPatterns,
  "observability-handbook": observabilityHandbook,
  "payments-handbook": paymentsHandbook,
  "performance-audit": performanceAudit,
  "pr-review-workflow": prReviewWorkflow,
  "python-productive": pythonProductive,
  "react-email-templates": reactEmailTemplates,
  "realtime-handbook": realtimeHandbook,
  "secure-dependencies": secureDependencies,
  "security-headers": securityHeaders,
  "semantic-html-css": semanticHtmlCss,
  "seo-expert": seoExpert,
  "server-caching-handbook": serverCachingHandbook,
  "skill-creator": skillCreator,
  "skillcodex-browser-ui": skillcodexBrowserUi,
  "storybook-handbook": storybookHandbook,
  "tdd-vitest": tddVitest,
  "testing-agent": testingAgent,
  "typescript-refactor": typescriptRefactor,
  "web-design-guidelines": webDesignGuidelines,
  "webhook-receivers": webhookReceivers,
};

export const skillList: SkillModule[] = Object.values(skills);

export default skills;
