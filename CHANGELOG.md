# Changelog

All notable changes to SkillCodex are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)  
Versioning: [Semantic Versioning](https://semver.org/)

## [Unreleased]

### Added

- `skills-sh-catalog/` — generated mirror of all `skills/<slug>/SKILL.md` under `skills-sh-catalog/skills/` for [skills.sh/docs](https://www.skills.sh/docs) layout; `pnpm export-skills-sh`; [`REQUIREMENTS.md`](skills-sh-catalog/REQUIREMENTS.md) checklist.

## [1.2.0] - 2026-05-19

### Added

- **37 skills** in the catalog (handbooks: auth, observability, payments, server-caching, realtime, container-local-dev, storybook, data-layer, api, i18n, security-headers, edge, webhooks, github-actions-ci, dependency-migrations, markdown, react-email, monorepo, next-server-patterns, forms, client-data-fetching, error-loading-not-found, semantic-html-css, secure-dependencies; agents: code-assistant, testing-agent, typescript-refactor, env-config-agent, performance-audit, accessibility-audit, database-schema-agent, seo-expert, content-creator, python-productive; meta/UI: skill-creator, web-design-guidelines, skillcodex-browser-ui).
- **Docs:** [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md) (npm publish vs [skills.sh/docs](https://www.skills.sh/docs) CLI, telemetry, optional badge, security audits), [docs/skills-coverage-matrix.md](./docs/skills-coverage-matrix.md).
- **References:** `dependency-security.md`, `server-caching-patterns.md`, `data-layer-choice.md`.
- **README / DIRECTORY:** [skills.sh](https://skills.sh/bh611627/skillcodex) badge; publishing links; DIRECTORY intro aligned with official discovery model.

### Changed

- `@skillcodex/skills` npm package version **1.2.0** (all skill subpath exports regenerated via `pnpm run sync`).
- `next-server-patterns` (1.0.2), `api-handbook` (1.0.2), `database-schema-agent` (1.0.1), `github-actions-ci`, `webhook-receivers`, `env-config-agent`, `forms-and-validation` — cross-links and security/CI hardening.
- `docs/skills-discovery.md`, `docs/install-skills-cli.md`, `docs/introduction.md`, `docs/usage.md`, `docs/contributing.md`, `.github/CONTRIBUTING.md`, `package/README.md`, `WHAT_IS_SKILLCODEX.md`, `references/skills-ecosystem.md` — publishing and skills.sh documentation accuracy.

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
