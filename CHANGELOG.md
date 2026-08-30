# Changelog

All notable changes to SkillCodex are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)  
Versioning: [Semantic Versioning](https://semver.org/)

## [Unreleased]

### Added

- Domain references: `auth-sessions.md`, `payments-pci.md`, `csp-headers.md`, `realtime-transports.md`.
- Expanded `compatibility` across all skills (incl. `antigravity`, `codex`, `github-copilot`, `windsurf`, `gemini-cli`, `cline`, `amp`, `opencode`, `roo`, `goose`, `kilo`, `kiro-cli`, `droid`, `openclaw`, `trae`).

### Changed

- Thickened `auth-handbook`, `payments-handbook`, `security-headers`, `webhook-receivers`, `realtime-handbook`, `react-email-templates` (When to Use, Related skills, deeper failure modes).
- Aligned `skillcodex-browser-ui` motion policy with Tier 0 / Tier 2 leaf rules.
- Hardened `package/src/validate.ts` (Scope/Safety, reference existence, compatibility set, skills-sh-catalog parity).
- CI runs `pnpm export-skills-sh` before validate; fixed `DIRECTORY.md` relative links.
- Removed empty orphan `package/src/skills/web-interface-guidelines.ts`.

## [1.3.0] - 2026-05-20

### Added

- **`pnpm export-skills-fork-layout`** — exports `skills/*` and `references/` in the **skills CLI public contract** (YAML `name` + `description`) with GitHub and raw URLs repointed to **[bh611627/skills](https://github.com/bh611627/skills)**; script at [`scripts/export-to-skills-fork-layout.ts`](./scripts/export-to-skills-fork-layout.ts).

### Changed

- `@skillcodex/skills` npm package **1.3.0** (regenerated exports and `skills-index.json` via `pnpm run sync`).
- [GIT_WORKFLOW.md](./GIT_WORKFLOW.md), [skills-sh-catalog/REQUIREMENTS.md](./skills-sh-catalog/REQUIREMENTS.md), [contrib/vercel-labs-skills/README.md](./contrib/vercel-labs-skills/README.md), [references/skills-ecosystem.md](./references/skills-ecosystem.md), [docs/usage.md](./docs/usage.md) — fork and upstream workflow documentation (catalog ownership, CLI-standard frontmatter wording).

## [1.2.0] - 2026-05-19

### Added

- **37 skills** in the catalog (handbooks: auth, observability, payments, server-caching, realtime, container-local-dev, storybook, data-layer, api, i18n, security-headers, edge, webhooks, github-actions-ci, dependency-migrations, markdown, react-email, monorepo, next-server-patterns, forms, client-data-fetching, error-loading-not-found, semantic-html-css, secure-dependencies; agents: code-assistant, testing-agent, typescript-refactor, env-config-agent, performance-audit, accessibility-audit, database-schema-agent, seo-expert, content-creator, python-productive; meta/UI: skill-creator, web-design-guidelines, skillcodex-browser-ui).
- **`skills-sh-catalog/`** - generated mirror of `skills/<slug>/SKILL.md` for [skills.sh/docs](https://www.skills.sh/docs) layout (`pnpm export-skills-sh`; checklist in [`REQUIREMENTS.md`](skills-sh-catalog/REQUIREMENTS.md)).
- **Docs:** [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md) (npm publish vs [skills.sh/docs](https://www.skills.sh/docs) CLI, telemetry, optional badge, security audits), [docs/skills-coverage-matrix.md](./docs/skills-coverage-matrix.md).
- **References:** `dependency-security.md`, `server-caching-patterns.md`, `data-layer-choice.md`.
- **README / DIRECTORY:** [skills.sh](https://skills.sh/bh611627/skillcodex) badge; publishing links; DIRECTORY intro aligned with official discovery model.

### Changed

- `@skillcodex/skills` npm package version **1.2.0** (all skill subpath exports regenerated via `pnpm run sync`).
- `next-server-patterns` (1.0.2), `api-handbook` (1.0.2), `database-schema-agent` (1.0.1), `github-actions-ci`, `webhook-receivers`, `env-config-agent`, `forms-and-validation` - cross-links and security/CI hardening.
- `docs/skills-discovery.md`, `docs/install-skills-cli.md`, `docs/usage.md`, `docs/contributing.md`, `.github/CONTRIBUTING.md`, `package/README.md`, `references/skills-ecosystem.md`, [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) - publishing and skills.sh documentation accuracy; redundant overview docs removed in favor of README + `GIT_WORKFLOW`.

## [1.0.0] - 2026-05-16

### Added

- Initial six skills: `web-design-guidelines`, `skillcodex-browser-ui`, `content-creator`, `seo-expert` (formerly `seo-agent`), `code-assistant`, `skill-creator`
- `SKILL_STANDARD.md` specification
- `TRUST.md` security model documentation
- Dual distribution: GitHub + npm (`@skillcodex/skills`)
- CI/CD pipeline (validate, publish, stale, security-scan workflows)
- Validation script with Unicode tag and bidi injection detection
- Six-agent expansion: `typescript-refactor`, `testing-agent`, `accessibility-audit`, `env-config-agent`, `performance-audit`, `database-schema-agent`
- TypeScript `SkillFrontmatter` type and `loadSkill()` helper
- npm package README with install and SKILL.md format guide
- `.github/CONTRIBUTING.md` and issue templates (`new_skill`, `bug_report`)
- `pnpm new-skill` scaffold CLI
- `examples/cursor-usage` and `examples/claude-code-usage` guides
- `skills-index.json` generated on sync
- Expanded `SECURITY.md` and `references/skill-safety.md`

### Changed

- Improved original skills: versions, `last_reviewed`, outcomes, troubleshooting sections
- Root README: badges, quick start, roadmap, ASCII demo
- Sync regenerates `package.json` exports and `src/index.ts`
