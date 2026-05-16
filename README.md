# SkillCodex - AI agent skills and reusable workflows for React & Next.js

**SkillCodex** is a curated **skills system** for AI agents: structured `SKILL.md` instructions that turn vague prompts into repeatable **workflows** with clear outcomes, safety boundaries, and modern dev tooling support. Built for **Cursor**, **Claude Code**, [skills.sh](https://www.skills.sh/), and any host that reads agent skills.

Use it as a **developer productivity tool** and lightweight **automation framework** for frontend teams - not a black-box plugin. Every skill is readable markdown on GitHub, with an optional npm package for apps and CI.

[![npm version](https://img.shields.io/npm/v/@skillcodex/skills.svg)](https://www.npmjs.com/package/@skillcodex/skills)
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

### For Node.js / tooling

```bash
npm install @skillcodex/skills
# or
pnpm add @skillcodex/skills
```

Requires **Node.js 18+**.

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
2. Run `npx skills add … --skill <slug>` **or** copy `skills/<slug>/SKILL.md` into your agent skills folder.
3. Invoke with a concrete task (see [examples](./examples/)).

### Import from npm (TypeScript)

```ts
import seoAgent from "@skillcodex/skills/seo-agent";

seoAgent.name;           // "seo-agent"
seoAgent.description;    // one-line summary
seoAgent.instructions;   // agent body
seoAgent.outcomes;       // measurable results
seoAgent.skillMd;        // full SKILL.md source
```

```ts
import { skills, skillList } from "@skillcodex/skills";
```

More detail: [docs/usage.md](./docs/usage.md)

---

## Examples (what developers search for)

| Goal | Skill | Example prompt |
|------|-------|----------------|
| Next.js SEO + metadata | [seo-agent](./skills/seo-agent/SKILL.md) | “Audit my About page metadata and add JSON-LD” |
| Small focused code diffs | [code-assistant](./skills/code-assistant/SKILL.md) | “Fix login button styles without rewriting the file” |
| Vitest + RTL tests | [testing-agent](./skills/testing-agent/SKILL.md) | “Add tests for `UserCard.tsx`” |
| WCAG 2.2 AA audit | [accessibility-audit](./skills/accessibility-audit/SKILL.md) | “File:line a11y report for the checkout form” |
| JS → strict TypeScript | [typescript-refactor](./skills/typescript-refactor/SKILL.md) | “Migrate `utils/` to strict TS” |
| Core Web Vitals / bundle | [performance-audit](./skills/performance-audit/SKILL.md) | “Find LCP and bundle issues in my App Router app” |
| Safe env setup | [env-config-agent](./skills/env-config-agent/SKILL.md) | “Create `.env.example` and typed env with zod” |
| Prisma schema | [database-schema-agent](./skills/database-schema-agent/SKILL.md) | “Review schema for missing indexes” |
| Doc UI (skills.sh-style) | [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | “Build a skill browser with skeletons and outcomes” |

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
- **Modern dev tooling** - pnpm, Next.js App Router, Vitest, Playwright, Prisma patterns baked in.
- **AI + human readable** - structured for agents *and* code review in PRs.

Compared to [skills.sh](https://www.skills.sh/): same `npx skills add` discovery, but **outcomes** instead of install counts, and every skill is auditable markdown.

---

## Skill catalog

| Skill | Outcome |
|-------|---------|
| [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | Doc UI build or file:line design audit |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Full documentation browser UI |
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, script, caption, hashtags |
| [seo-agent](./skills/seo-agent/SKILL.md) | SEO outline, JSON-LD, OpenGraph checklist |
| [code-assistant](./skills/code-assistant/SKILL.md) | Focused diffs + code review |
| [skill-creator](./skills/skill-creator/SKILL.md) | Valid new `SKILL.md` + metadata |
| [typescript-refactor](./skills/typescript-refactor/SKILL.md) | Strict TS migration or audit |
| [testing-agent](./skills/testing-agent/SKILL.md) | Vitest/RTL + Playwright tests |
| [accessibility-audit](./skills/accessibility-audit/SKILL.md) | WCAG 2.2 AA report |
| [env-config-agent](./skills/env-config-agent/SKILL.md) | Safe env + typed config |
| [performance-audit](./skills/performance-audit/SKILL.md) | Bundle + CWV findings |
| [database-schema-agent](./skills/database-schema-agent/SKILL.md) | Prisma schema or audit |

---

## Repository layout

| Path | Purpose |
|------|---------|
| `skills/` | Source of truth - one `SKILL.md` per skill |
| `references/` | Shared rules (design, SEO, safety) |
| `package/` | npm package `@skillcodex/skills` |
| `docs/` | Introduction, usage, contributing |
| `examples/` | Cursor and Claude Code guides |

[REPO_LAYOUT.md](./REPO_LAYOUT.md) · [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) · [CHANGELOG.md](./CHANGELOG.md)

---

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/introduction.md](./docs/introduction.md) | Concepts and ecosystem |
| [docs/usage.md](./docs/usage.md) | Install paths and npm API |
| [docs/contributing.md](./docs/contributing.md) | Add or improve skills |
| [SKILL_STANDARD.md](./SKILL_STANDARD.md) | `SKILL.md` format spec |
| [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md) | Short overview |
| [SECURITY.md](./SECURITY.md) · [TRUST.md](./TRUST.md) | Safety model |

---

## Roadmap

1. **api-route-agent** - Route Handlers + zod validation
2. **i18n-agent** - App Router i18n setup and audit
3. **auth-agent** - Session/OAuth without secret leakage
4. **monorepo-agent** - pnpm workspaces + Turborepo
5. **storybook-agent** - Stories aligned with design-guidelines

---

## Contributing

PRs welcome. See [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) and run `pnpm validate` before opening a PR.

```bash
pnpm new-skill   # interactive scaffold
```

MIT © SkillCodex contributors
