# Changelog

All notable changes to SkillCodex are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)  
Versioning: [Semantic Versioning](https://semver.org/)

## [Unreleased]

## [1.1.0] - 2026-05-16

### Added

- CI/CD pipeline (validate, publish, stale, security-scan workflows)
- Validation script with Unicode tag and bidi injection detection
- Six new skills: `typescript-refactor`, `testing-agent`, `accessibility-audit`, `env-config-agent`, `performance-audit`, `database-schema-agent`
- TypeScript `SkillFrontmatter` type and `loadSkill()` helper
- npm package README with install and SKILL.md format guide
- `.github/CONTRIBUTING.md` and issue templates (`new_skill`, `bug_report`)
- `pnpm new-skill` scaffold CLI
- `examples/cursor-usage` and `examples/claude-code-usage` guides
- `skills-index.json` generated on sync
- Expanded `SECURITY.md` and `references/skill-safety.md`

### Changed

- Improved all six original skills: versions, `last_reviewed`, outcomes, troubleshooting sections
- Root README: badges, quick start, roadmap, ASCII demo
- Sync regenerates `package.json` exports and `src/index.ts`

## [1.0.0] - 2026-05-16

### Added

- Initial six skills: `web-design-guidelines`, `skillcodex-browser-ui`, `content-creator`, `seo-agent`, `code-assistant`, `skill-creator`
- `SKILL_STANDARD.md` specification
- `TRUST.md` security model documentation
- Dual distribution: GitHub + npm (`@skillcodex/skills`)
