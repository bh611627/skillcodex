# Skill coverage matrix (2026)

How SkillCodex skills map to **product engineering** concerns for **Next.js 15+**, **React 19**, **TypeScript 5**, **pnpm**, and **Node 20/22 LTS**. Use with [`references/stack-nextjs.md`](../references/stack-nextjs.md). Skills are either **broad** (most apps) or **specialist** (when you build that feature); both are first-class.

## By concern

| Concern | Primary skills | Supporting references |
|---------|----------------|------------------------|
| **Stack defaults** | (implicit in many skills) | `references/stack-nextjs.md` |
| **RSC / App Router** | `next-server-patterns`, `edge-runtime-handbook` | `references/server-caching-patterns.md` |
| **Errors / UX** | `error-loading-not-found` | `observability-handbook` |
| **HTML / CSS / a11y entry** | `semantic-html-css` | `accessibility-audit`, `web-design-guidelines` |
| **Forms** | `forms-and-validation` | `api-handbook`, `security-headers` |
| **Client data** | `client-data-fetching` | `next-server-patterns` |
| **HTTP APIs** | `api-handbook` | `realtime-handbook`, `webhook-receivers` |
| **Webhooks** | `webhook-receivers` | `payments-handbook`, `api-handbook` |
| **Auth** | `auth-handbook` | `env-config-agent`, `security-headers` |
| **Payments / PCI** | `payments-handbook` | `webhook-receivers` |
| **Caching / scale** | `server-caching-handbook` | `references/server-caching-patterns.md`, `next-server-patterns` |
| **Realtime** | `realtime-handbook` | `api-handbook`, `edge-runtime-handbook` |
| **Data / ORM** | `database-schema-agent` (Prisma), `data-layer-handbook` | `references/data-layer-choice.md` |
| **i18n** | `i18n-handbook` | `seo-expert` |
| **SEO** | `seo-expert` | `references/google-seo.md` |
| **Performance** | `performance-audit` | `next-server-patterns`, `semantic-html-css` |
| **Security (HTTP)** | `security-headers` | `api-handbook`, `markdown-pipeline` |
| **Secrets / env** | `env-config-agent` | `auth-handbook`, [`references/skill-safety.md`](../references/skill-safety.md) |
| **Supply chain** | `secure-dependencies` | `references/dependency-security.md`, `github-actions-ci` |
| **CI** | `github-actions-ci` | `secure-dependencies`, `container-local-dev` |
| **Monorepo** | `monorepo-tooling` | `storybook-handbook`, `typescript-refactor` |
| **Upgrades** | `dependency-migrations` | `secure-dependencies`, `data-layer-handbook` |
| **Containers** | `container-local-dev` | `github-actions-ci` |
| **Observability** | `observability-handbook` | `error-loading-not-found` |
| **Docs / MDX** | `markdown-pipeline` | `semantic-html-css` |
| **Email** | `react-email-templates` | `web-design-guidelines` |
| **Design system UI** | `web-design-guidelines`, `storybook-handbook` | [`references/design-guidelines.md`](../references/design-guidelines.md) |
| **Skill browser UI** | `skillcodex-browser-ui` | `web-design-guidelines` |
| **Type system** | `typescript-refactor` | `code-assistant` |
| **Tests** | `testing-agent` | `accessibility-audit`, `forms-and-validation` |
| **Python** | `python-productive` | - |
| **Marketing copy** | `content-creator` | - |
| **Authoring skills** | `skill-creator` | [`SKILL_STANDARD.md`](../SKILL_STANDARD.md) |
| **Day-to-day edits** | `code-assistant` | `typescript-refactor` |

## Gaps intentionally narrow

- **Legal / tax / regional compliance** text stays out of skills; payments skill stays at **PCI + integration** level.
- **Specific cloud IAM** is out of scope unless a future skill is added with narrow scope.

## Maintenance

When adding a skill:

1. Update this matrix **one row** (or extend a cell).
2. Add the slug to [`DIRECTORY.md`](../DIRECTORY.md), [README skill catalog](../README.md), and [bug report template](../.github/ISSUE_TEMPLATE/bug_report.yml).
3. Run `cd package && pnpm run sync && pnpm run validate`.
4. Run `pnpm export-skills-sh` from the repo root to refresh [`skills-sh-catalog/`](../skills-sh-catalog/).
5. If the skill changes npm exports, follow [publishing-skills-sh-and-npm.md](./publishing-skills-sh-and-npm.md) for version and release notes.
