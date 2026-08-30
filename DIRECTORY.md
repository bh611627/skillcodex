# Skill directory (skills.sh-style)

Same install model as [skills.sh](https://www.skills.sh/) - one row per skill; CLI docs: [skills.sh/docs](https://www.skills.sh/docs). SkillCodex adds **outcomes** in each `SKILL.md` and documents **npm vs CLI** in [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md). A **generated** parallel tree for the skills.sh folder shape lives under [`skills-sh-catalog/skills/`](./skills-sh-catalog/) (run `pnpm export-skills-sh` after edits).

| # | Skill | Topics | GitHub `SKILL.md` | Add with CLI |
|---|--------|--------|-------------------|----------------|
| 1 | `web-design-guidelines` | `ui` `design-system` `nextjs` | [skills/web-design-guidelines](https://github.com/bh611627/skillcodex/tree/main/skills/web-design-guidelines/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines` |
| 2 | `skillcodex-browser-ui` | `ui` `nextjs` `skillcodex` | [skills/skillcodex-browser-ui](https://github.com/bh611627/skillcodex/tree/main/skills/skillcodex-browser-ui/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill skillcodex-browser-ui` |
| 3 | `content-creator` | `content` `marketing` | [skills/content-creator](https://github.com/bh611627/skillcodex/tree/main/skills/content-creator/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill content-creator` |
| 4 | `seo-expert` | `seo` `nextjs` `search-console` | [skills/seo-expert](https://github.com/bh611627/skillcodex/tree/main/skills/seo-expert/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill seo-expert` |
| 5 | `code-assistant` | `development` `nextjs` | [skills/code-assistant](https://github.com/bh611627/skillcodex/tree/main/skills/code-assistant/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill code-assistant` |
| 6 | `skill-creator` | `meta` `skills` | [skills/skill-creator](https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill skill-creator` |
| 7 | `typescript-refactor` | `typescript` `refactor` | [skills/typescript-refactor](https://github.com/bh611627/skillcodex/tree/main/skills/typescript-refactor/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill typescript-refactor` |
| 8 | `testing-agent` | `testing` `vitest` `playwright` | [skills/testing-agent](https://github.com/bh611627/skillcodex/tree/main/skills/testing-agent/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill testing-agent` |
| 9 | `accessibility-audit` | `a11y` `wcag` | [skills/accessibility-audit](https://github.com/bh611627/skillcodex/tree/main/skills/accessibility-audit/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill accessibility-audit` |
| 10 | `env-config-agent` | `env` `nextjs` `security` | [skills/env-config-agent](https://github.com/bh611627/skillcodex/tree/main/skills/env-config-agent/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill env-config-agent` |
| 11 | `performance-audit` | `performance` `nextjs` | [skills/performance-audit](https://github.com/bh611627/skillcodex/tree/main/skills/performance-audit/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill performance-audit` |
| 12 | `database-schema-agent` | `prisma` `database` | [skills/database-schema-agent](https://github.com/bh611627/skillcodex/tree/main/skills/database-schema-agent/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill database-schema-agent` |
| 13 | `python-productive` | `python` `uv` `pydantic` | [skills/python-productive](https://github.com/bh611627/skillcodex/tree/main/skills/python-productive/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill python-productive` |
| 14 | `next-server-patterns` | `nextjs` `app-router` `rsc` | [skills/next-server-patterns](https://github.com/bh611627/skillcodex/tree/main/skills/next-server-patterns/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill next-server-patterns` |
| 15 | `api-handbook` | `api` `rest` `openapi` | [skills/api-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/api-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill api-handbook` |
| 16 | `forms-and-validation` | `forms` `zod` `react` | [skills/forms-and-validation](https://github.com/bh611627/skillcodex/tree/main/skills/forms-and-validation/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill forms-and-validation` |
| 17 | `i18n-handbook` | `i18n` `nextjs` `locales` | [skills/i18n-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/i18n-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill i18n-handbook` |
| 18 | `security-headers` | `security` `csp` `headers` | [skills/security-headers](https://github.com/bh611627/skillcodex/tree/main/skills/security-headers/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill security-headers` |
| 19 | `monorepo-tooling` | `monorepo` `pnpm` `turbo` | [skills/monorepo-tooling](https://github.com/bh611627/skillcodex/tree/main/skills/monorepo-tooling/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill monorepo-tooling` |
| 20 | `github-actions-ci` | `ci` `github-actions` | [skills/github-actions-ci](https://github.com/bh611627/skillcodex/tree/main/skills/github-actions-ci/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill github-actions-ci` |
| 21 | `dependency-migrations` | `dependencies` `migration` | [skills/dependency-migrations](https://github.com/bh611627/skillcodex/tree/main/skills/dependency-migrations/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill dependency-migrations` |
| 22 | `markdown-pipeline` | `markdown` `mdx` `docs` | [skills/markdown-pipeline](https://github.com/bh611627/skillcodex/tree/main/skills/markdown-pipeline/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill markdown-pipeline` |
| 23 | `react-email-templates` | `email` `react` `transactional` | [skills/react-email-templates](https://github.com/bh611627/skillcodex/tree/main/skills/react-email-templates/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill react-email-templates` |
| 24 | `webhook-receivers` | `webhooks` `nextjs` `security` | [skills/webhook-receivers](https://github.com/bh611627/skillcodex/tree/main/skills/webhook-receivers/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill webhook-receivers` |
| 25 | `edge-runtime-handbook` | `edge` `nextjs` `runtime` | [skills/edge-runtime-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/edge-runtime-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill edge-runtime-handbook` |
| 26 | `error-loading-not-found` | `nextjs` `errors` `ux` | [skills/error-loading-not-found](https://github.com/bh611627/skillcodex/tree/main/skills/error-loading-not-found/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill error-loading-not-found` |
| 27 | `semantic-html-css` | `html` `css` `a11y` | [skills/semantic-html-css](https://github.com/bh611627/skillcodex/tree/main/skills/semantic-html-css/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill semantic-html-css` |
| 28 | `secure-dependencies` | `security` `pnpm` `supply-chain` | [skills/secure-dependencies](https://github.com/bh611627/skillcodex/tree/main/skills/secure-dependencies/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill secure-dependencies` |
| 29 | `client-data-fetching` | `react-query` `nextjs` `data` | [skills/client-data-fetching](https://github.com/bh611627/skillcodex/tree/main/skills/client-data-fetching/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill client-data-fetching` |
| 30 | `auth-handbook` | `auth` `nextjs` `security` | [skills/auth-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/auth-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill auth-handbook` |
| 31 | `observability-handbook` | `logging` `tracing` `nextjs` | [skills/observability-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/observability-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill observability-handbook` |
| 32 | `payments-handbook` | `payments` `pci` `nextjs` | [skills/payments-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/payments-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill payments-handbook` |
| 33 | `server-caching-handbook` | `caching` `redis` `nextjs` | [skills/server-caching-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/server-caching-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill server-caching-handbook` |
| 34 | `realtime-handbook` | `sse` `websockets` `nextjs` | [skills/realtime-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/realtime-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill realtime-handbook` |
| 35 | `container-local-dev` | `docker` `compose` `nextjs` | [skills/container-local-dev](https://github.com/bh611627/skillcodex/tree/main/skills/container-local-dev/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill container-local-dev` |
| 36 | `storybook-handbook` | `storybook` `react` `design-system` | [skills/storybook-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/storybook-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill storybook-handbook` |
| 37 | `data-layer-handbook` | `prisma` `drizzle` `sql` | [skills/data-layer-handbook](https://github.com/bh611627/skillcodex/tree/main/skills/data-layer-handbook/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill data-layer-handbook` |

## npm (programmatic)

```bash
npm install @skillcodex/skills
```

```ts
import webDesignGuidelines from "@skillcodex/skills/web-design-guidelines";
```

Use **subpath imports** for one module at a time. The full package ships every skill; the **CLI `--skill` flag** installs a single skill into a host without pulling the whole tree.

## Compared to skills.sh

| skills.sh | This directory |
|-----------|----------------|
| Leaderboard driven by **anonymous install telemetry** from the CLI ([docs](https://www.skills.sh/docs)) | **Outcomes** in each `SKILL.md`; quality over install counts |
| `npx skills add owner/repo` | Same pattern; repo is `bh611627/skillcodex`; use `--skill <slug>` for one skill |
| Skill name in table | Folder name = skill slug = npm subpath |

## skills.sh vs Vercel repos

`npx skills` comes from [vercel-labs/skills](https://github.com/vercel-labs/skills). Vercel’s published **skills bundle** is [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills), not the CLI repo. See [references/skills-ecosystem.md](./references/skills-ecosystem.md).
