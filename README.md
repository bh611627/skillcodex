# SkillCodex

[![npm version](https://img.shields.io/npm/v/@skillcodex/skills.svg)](https://www.npmjs.com/package/@skillcodex/skills)
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

## Quick start in 30 seconds

```bash
# Install one skill into your agent (skills.sh CLI)
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines

# Or use the npm package in your app/tooling
npm install @skillcodex/skills
```

```bash
# Validate skills locally (contributors)
pnpm install && pnpm validate
```

- **GitHub:** [github.com/bh611627/skillcodex](https://github.com/bh611627/skillcodex)
- **npm:** [@skillcodex/skills](https://www.npmjs.com/package/@skillcodex/skills)
- **Directory:** [DIRECTORY.md](./DIRECTORY.md)

## Why SkillCodex?

Agent hosts are powerful but vague by default — “make my app better” produces inconsistent diffs, missing safety boundaries, and no measurable outcomes. SkillCodex packages **reviewed instructions** as `SKILL.md` files: explicit scope, risk levels, tool intent, and outcomes you can verify. Same discovery pattern as [skills.sh](https://www.skills.sh/) (`npx skills add`), with transparency (full markdown on GitHub) and an npm mirror for programmatic use.

## What a skill looks like in practice

```
User: "Audit my doc UI against SkillCodex design rules"
Agent (with web-design-guidelines loaded):
  → Reads references/design-guidelines.md
  → Returns file:line findings grouped by severity
  → Pass/fail checklist — no generic "looks good"
```

Without the skill, the agent often skips skeletons, motion in Server Components, or token consistency. With it, behavior is repeatable across Cursor, Claude Code, and skills.sh.

## Repository layout

| Layer | Role |
|-------|------|
| **`skills/`** | Each skill is a folder with `SKILL.md` (source of truth) |
| **`references/`** | Shared rules linked from skills |
| **`package/`** | npm package `@skillcodex/skills` — generated via `pnpm sync` |
| **`contrib/`** | Optional trees for upstream PRs |

Full map: [REPO_LAYOUT.md](./REPO_LAYOUT.md) · Branches / releases: [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)

## vs skills.sh

| skills.sh | SkillCodex |
|-----------|------------|
| Leaderboard by installs | **Outcomes** per skill — no fake counts |
| `npx skills add owner/repo` | Same; use `bh611627/skillcodex` |
| Browse opaque cards | Full **SKILL.md** + [DIRECTORY.md](./DIRECTORY.md) |

## Design rules (one file)

**[references/design-guidelines.md](./references/design-guidelines.md)** — all web UI rules. Implemented or audited via **`web-design-guidelines`**.

## Skills (outcomes)

| Skill | Outcome you get |
|-------|-----------------|
| [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | Doc UI build **or** file:line UI audit |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Full doc browser, skills.sh-style browse UI |
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, script, caption, hashtags |
| [seo-agent](./skills/seo-agent/SKILL.md) | SEO outline + Next CWV + structured data |
| [code-assistant](./skills/code-assistant/SKILL.md) | Focused diffs + review |
| [skill-creator](./skills/skill-creator/SKILL.md) | Valid SKILL.md + README row |
| [typescript-refactor](./skills/typescript-refactor/SKILL.md) | JS → strict TS refactor or audit |
| [testing-agent](./skills/testing-agent/SKILL.md) | Vitest/RTL + Playwright tests |
| [accessibility-audit](./skills/accessibility-audit/SKILL.md) | WCAG 2.2 AA file:line report |
| [env-config-agent](./skills/env-config-agent/SKILL.md) | Safe `.env.example` + typed env |
| [performance-audit](./skills/performance-audit/SKILL.md) | Bundle + CWV findings |
| [database-schema-agent](./skills/database-schema-agent/SKILL.md) | Prisma schema or audit |

**pnpm** for new Next apps; **match lockfile** in user projects.

## Docs

[SKILL_STANDARD.md](./SKILL_STANDARD.md) · [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md) · [CONTRIBUTING.md](.github/CONTRIBUTING.md) · [CHANGELOG.md](./CHANGELOG.md) · [SECURITY.md](./SECURITY.md) · [TRUST.md](./TRUST.md)

## Roadmap (next skills)

1. **api-route-agent** — Next.js Route Handlers + validation (zod) patterns
2. **i18n-agent** — App Router internationalization audit and setup
3. **auth-agent** — Session/OAuth patterns without secret leakage
4. **monorepo-agent** — pnpm workspaces + Turborepo layout for Next apps
5. **storybook-agent** — Component stories aligned with design-guidelines

MIT
