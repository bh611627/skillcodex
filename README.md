# SkillCodex - AI agent skills and reusable workflows for React & Next.js

**SkillCodex** is a curated **skills system** for AI agents: structured `SKILL.md` instructions that turn vague prompts into repeatable **workflows** with clear outcomes, safety boundaries, and modern dev tooling support. Built for **Cursor**, **Claude Code**, [skills.sh](https://www.skills.sh/), and any host that reads agent skills.

Use it as a **developer productivity tool** and lightweight **automation framework** for frontend teams - not a black-box plugin. Every skill is readable markdown on GitHub, with an optional npm package for apps and CI.

[![npm version](https://img.shields.io/npm/v/@skillcodex/skills.svg)](https://www.npmjs.com/package/@skillcodex/skills)
[![skills.sh](https://skills.sh/b/bh611627/skillcodex)](https://skills.sh/bh611627/skillcodex)
[![GitHub release](https://img.shields.io/github/v/release/bh611627/skillcodex)](https://github.com/bh611627/skillcodex/releases)
[![license](https://img.shields.io/github/license/bh611627/skillcodex.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
```

Install into Cursor (`.cursor/skills/`), Claude Code, or skills.sh-compatible hosts.

### One skill via CLI (matches [skills.sh/docs](https://www.skills.sh/docs))

```bash
npx skills add https://github.com/bh611627/skillcodex --skill seo-expert
```

Only **that** skill is added to the host - not the whole repo. Replace `seo-expert` with any slug from [DIRECTORY.md](./DIRECTORY.md). Details: [docs/install-skills-cli.md](./docs/install-skills-cli.md).

### For Node.js / tooling

```bash
npm install @skillcodex/skills
# or
pnpm add @skillcodex/skills
```

Requires **Node.js 18+**. **Publishing:** npm package and [skills.sh](https://www.skills.sh/) CLI discovery are separate - see [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md).

### For contributors

```bash
git clone https://github.com/bh611627/skillcodex.git
cd skillcodex
pnpm install
pnpm validate
```

---

## Usage

### Load a skill in your agent

1. Pick a skill from the [directory](./DIRECTORY.md) or table below.
2. Run `npx skills add https://github.com/bh611627/skillcodex --skill <slug>` **or** copy `skills/<slug>/SKILL.md` into your host skills folder.
3. Read the **full** `SKILL.md` plus linked `references/` files before acting - see [docs/read-full-documentation.md](./docs/read-full-documentation.md).
4. Invoke with a concrete task (see [examples](./examples/)).

### Import from npm (TypeScript)

```ts
import seoExpert from "@skillcodex/skills/seo-expert";

seoExpert.name;           // "seo-expert"
seoExpert.description;    // one-line summary
seoExpert.instructions;   // skill body
seoExpert.outcomes;       // measurable results
seoExpert.skillMd;        // full SKILL.md source
```

```ts
import { skills, skillList } from "@skillcodex/skills";
```

More detail: [docs/usage.md](./docs/usage.md)

---

## Examples (what developers search for)

| Goal | Skill | Example prompt |
|------|-------|----------------|
| Next.js SEO + metadata | [seo-expert](./skills/seo-expert/SKILL.md) | “Audit my About page metadata and add JSON-LD” |
| Python uv + Pydantic v2 | [python-productive](./skills/python-productive/SKILL.md) | “Set up pyproject with uv lock and Pydantic models” |
| Small focused code diffs | [code-assistant](./skills/code-assistant/SKILL.md) | “Fix login button styles without rewriting the file” |
| Vitest + RTL tests | [testing-agent](./skills/testing-agent/SKILL.md) | “Add tests for `UserCard.tsx`” |
| WCAG 2.2 AA audit | [accessibility-audit](./skills/accessibility-audit/SKILL.md) | “File:line a11y report for the checkout form” |
| JS → strict TypeScript | [typescript-refactor](./skills/typescript-refactor/SKILL.md) | “Migrate `utils/` to strict TS” |
| Core Web Vitals / bundle | [performance-audit](./skills/performance-audit/SKILL.md) | “Find LCP and bundle issues in my App Router app” |
| Safe env setup | [env-config-agent](./skills/env-config-agent/SKILL.md) | “Create `.env.example` and typed env with zod” |
| Prisma schema | [database-schema-agent](./skills/database-schema-agent/SKILL.md) | “Review schema for missing indexes” |
| Doc UI (skills.sh-style) | [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | “Build a skill browser with skeletons and outcomes” |
| App Router server vs client | [next-server-patterns](./skills/next-server-patterns/SKILL.md) | “Where should this data fetch live - RSC, Route Handler, or client?” |
| REST / Route Handlers | [api-handbook](./skills/api-handbook/SKILL.md) | “Design CRUD handlers with zod and consistent errors” |
| Forms + zod | [forms-and-validation](./skills/forms-and-validation/SKILL.md) | “Server Actions form with accessible errors” |
| Locales + routing | [i18n-handbook](./skills/i18n-handbook/SKILL.md) | “Add `en`/`de` with metadata and hreflang” |
| CSP + headers | [security-headers](./skills/security-headers/SKILL.md) | “Roll out CSP with nonces without breaking Next” |
| pnpm + Turborepo | [monorepo-tooling](./skills/monorepo-tooling/SKILL.md) | “Wire turbo pipelines for two Next apps” |
| GitHub Actions | [github-actions-ci](./skills/github-actions-ci/SKILL.md) | “CI: lint, typecheck, test, build with pnpm cache” |
| Major upgrades | [dependency-migrations](./skills/dependency-migrations/SKILL.md) | “Plan Next 14 → 15 with test gates” |
| MDX / docs | [markdown-pipeline](./skills/markdown-pipeline/SKILL.md) | “Safe MDX for user comments with GFM” |
| Transactional email | [react-email-templates](./skills/react-email-templates/SKILL.md) | “Receipt email + plain-text twin” |
| Webhooks | [webhook-receivers](./skills/webhook-receivers/SKILL.md) | “Stripe webhook Route Handler with idempotency” |
| Edge vs Node | [edge-runtime-handbook](./skills/edge-runtime-handbook/SKILL.md) | “Can this Prisma call run on Edge?” |
| error / 404 / loading UX | [error-loading-not-found](./skills/error-loading-not-found/SKILL.md) | “Add `error.tsx` and `not-found` without breaking layouts” |
| HTML + CSS baseline | [semantic-html-css](./skills/semantic-html-css/SKILL.md) | “Landmarks and heading order for my dashboard shell” |
| Supply chain / audits | [secure-dependencies](./skills/secure-dependencies/SKILL.md) | “CI policy for frozen lockfile + high-severity audit” |
| TanStack Query + Next | [client-data-fetching](./skills/client-data-fetching/SKILL.md) | “Prefetch on server and hydrate QueryClient without double fetch” |
| Sessions + OAuth | [auth-handbook](./skills/auth-handbook/SKILL.md) | “Cookie session + PKCE callback checklist for App Router” |
| Logs + request IDs | [observability-handbook](./skills/observability-handbook/SKILL.md) | “Structured JSON logs without PII for Route Handlers” |
| Checkout + PCI | [payments-handbook](./skills/payments-handbook/SKILL.md) | “PSP Elements + webhook fulfillment boundaries” |
| Cache stampedes | [server-caching-handbook](./skills/server-caching-handbook/SKILL.md) | “revalidateTag storm + Redis singleflight plan” |
| Live updates | [realtime-handbook](./skills/realtime-handbook/SKILL.md) | “SSE vs WebSocket for notifications with auth” |
| Docker dev | [container-local-dev](./skills/container-local-dev/SKILL.md) | “Multi-stage Next image + compose Postgres” |
| Storybook | [storybook-handbook](./skills/storybook-handbook/SKILL.md) | “CSF3 + a11y addon for our design system package” |
| ORM choice | [data-layer-handbook](./skills/data-layer-handbook/SKILL.md) | “Prisma vs Drizzle for edge + serverless Postgres” |

Step-by-step host guides: [Cursor](./examples/cursor-usage/README.md) · [Claude Code](./examples/claude-code-usage/README.md)

### Before / after (agent behavior)

```
Without skill:  vague advice, full-file rewrites, mixed npm/pnpm
With skill:     scoped diff, file:line findings, stated outcomes, safety limits
```

---

## Why this project matters

- **Reusable workflows** - capture how your team *actually* ships (SEO, a11y, TS strictness) once, reuse everywhere.
- **Trust** - full `SKILL.md` on GitHub; validation catches prompt-injection Unicode and missing safety sections.
- **Quality bar** - skills target **stable LTS** stacks (see `references/stack-nextjs.md`), spell out security tradeoffs, and cross-link related skills so agents do not contradict each other.
- **AI + human readable** - structured for agents *and* code review in PRs.

Compared to [skills.sh](https://www.skills.sh/): same `npx skills add` install path ([docs](https://www.skills.sh/docs)), but SkillCodex emphasizes **outcomes** and **auditable** markdown. The skills.sh leaderboard ranks by **anonymous CLI telemetry**, not manual uploads - see [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md).

---

## Skill catalog

| Skill | Outcome |
|-------|---------|
| [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | Doc UI build or file:line design audit |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Full documentation browser UI |
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, script, caption, hashtags |
| [seo-expert](./skills/seo-expert/SKILL.md) | SEO outline, JSON-LD, OpenGraph checklist, URL notes |
| [python-productive](./skills/python-productive/SKILL.md) | uv, Pydantic v2, Ruff, typing, native speed-ups when justified |
| [code-assistant](./skills/code-assistant/SKILL.md) | Focused diffs + code review |
| [skill-creator](./skills/skill-creator/SKILL.md) | Valid new `SKILL.md` + metadata |
| [typescript-refactor](./skills/typescript-refactor/SKILL.md) | Strict TS migration or audit |
| [testing-agent](./skills/testing-agent/SKILL.md) | Vitest/RTL + Playwright tests |
| [accessibility-audit](./skills/accessibility-audit/SKILL.md) | WCAG 2.2 AA report |
| [env-config-agent](./skills/env-config-agent/SKILL.md) | Safe env + typed config |
| [performance-audit](./skills/performance-audit/SKILL.md) | Bundle + CWV findings |
| [database-schema-agent](./skills/database-schema-agent/SKILL.md) | Prisma schema or audit |
| [next-server-patterns](./skills/next-server-patterns/SKILL.md) | RSC, Server Actions, Route Handlers boundaries |
| [api-handbook](./skills/api-handbook/SKILL.md) | REST-ish APIs, errors, versioning, OpenAPI sketch |
| [forms-and-validation](./skills/forms-and-validation/SKILL.md) | Server Actions + zod + a11y errors |
| [i18n-handbook](./skills/i18n-handbook/SKILL.md) | Locales, routing, metadata, RTL notes |
| [security-headers](./skills/security-headers/SKILL.md) | CSP, HSTS, Permissions-Policy rollout |
| [monorepo-tooling](./skills/monorepo-tooling/SKILL.md) | pnpm workspaces + Turborepo for Next |
| [github-actions-ci](./skills/github-actions-ci/SKILL.md) | PR checks, cache, job graph |
| [dependency-migrations](./skills/dependency-migrations/SKILL.md) | Ordered major upgrades + rollback |
| [markdown-pipeline](./skills/markdown-pipeline/SKILL.md) | MDX/Markdown + sanitize + GFM |
| [react-email-templates](./skills/react-email-templates/SKILL.md) | Transactional React email + text/plain |
| [webhook-receivers](./skills/webhook-receivers/SKILL.md) | Verify, idempotency, status codes |
| [edge-runtime-handbook](./skills/edge-runtime-handbook/SKILL.md) | Edge vs Node split in Next |
| [error-loading-not-found](./skills/error-loading-not-found/SKILL.md) | `error` / `not-found` / `loading` / `global-error` UX |
| [semantic-html-css](./skills/semantic-html-css/SKILL.md) | Semantic structure, focus, motion-safe CSS |
| [secure-dependencies](./skills/secure-dependencies/SKILL.md) | Lockfiles, audits, install-script policy, CI gates |
| [client-data-fetching](./skills/client-data-fetching/SKILL.md) | TanStack Query v5 + RSC hydration patterns |
| [auth-handbook](./skills/auth-handbook/SKILL.md) | Sessions, OAuth, RBAC placement |
| [observability-handbook](./skills/observability-handbook/SKILL.md) | Logs, correlation IDs, client error hygiene |
| [payments-handbook](./skills/payments-handbook/SKILL.md) | PCI boundaries, PSP tokens, webhooks |
| [server-caching-handbook](./skills/server-caching-handbook/SKILL.md) | Tags, stampedes, Redis, `unstable_cache` |
| [realtime-handbook](./skills/realtime-handbook/SKILL.md) | SSE vs WebSockets, auth, scale |
| [container-local-dev](./skills/container-local-dev/SKILL.md) | Dockerfile + Compose for Next |
| [storybook-handbook](./skills/storybook-handbook/SKILL.md) | Storybook 8, a11y addon, CSF3 |
| [data-layer-handbook](./skills/data-layer-handbook/SKILL.md) | Prisma vs Drizzle vs SQL, pooling |

---

## Repository layout

| Path | Purpose |
|------|---------|
| `skills/` | Source of truth - one `SKILL.md` per skill |
| `skills-sh-catalog/skills/` | **Generated** mirror of `skills/` for [skills.sh](https://www.skills.sh/docs) layout - run `pnpm export-skills-sh` after skill changes |
| `references/` | Shared rules (design, SEO, safety) |
| `package/` | npm package `@skillcodex/skills` |
| `docs/` | Usage, publishing, contributing |
| `examples/` | Cursor and Claude Code guides |

[REPO_LAYOUT.md](./REPO_LAYOUT.md) · [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) · [CHANGELOG.md](./CHANGELOG.md)

---

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/usage.md](./docs/usage.md) | Install paths and npm API |
| [docs/install-skills-cli.md](./docs/install-skills-cli.md) | `npx skills add` vs npm; [skills.sh](https://www.skills.sh/docs) alignment |
| [docs/read-full-documentation.md](./docs/read-full-documentation.md) | Read full `SKILL.md` + references before acting |
| [docs/skills-coverage-matrix.md](./docs/skills-coverage-matrix.md) | Which skill covers which engineering concern |
| [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md) | npm publish vs [skills.sh](https://www.skills.sh/docs) CLI / leaderboard (no bulk upload) |
| [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) | Branches, releases, optional PR to [vercel-labs/skills](https://github.com/vercel-labs/skills) |
| [docs/skills-discovery.md](./docs/skills-discovery.md) | Discovery, scope, leaderboard context |
| [docs/contributing.md](./docs/contributing.md) | Add or improve skills |
| [SKILL_STANDARD.md](./SKILL_STANDARD.md) | `SKILL.md` format spec |
| [SECURITY.md](./SECURITY.md) · [TRUST.md](./TRUST.md) | Safety model |

---

## Roadmap

1. **Kubernetes-handbook** - deploy manifests, probes, and Next standalone beyond Docker Compose  
2. **Passkeys-webauthn** - deep skill when auth-handbook is not enough for passwordless-only products  
3. **Visual-regression-handbook** - Playwright screenshots + policy beyond Storybook a11y  
4. **Rate-limiting-handbook** - token bucket at edge + app coordination (today split across `api-handbook` / infra)

---

## Contributing

PRs welcome. See [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) and run `pnpm validate` before opening a PR.

```bash
pnpm new-skill   # interactive scaffold
```

MIT © SkillCodex contributors
