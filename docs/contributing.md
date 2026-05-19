# Contributing

Thank you for improving SkillCodex. Full guidelines live in [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md).

## Quick start

1. Fork and clone the repo.
2. `pnpm install`
3. `pnpm new-skill` or edit an existing `skills/<slug>/SKILL.md`
4. `pnpm validate` - must pass with zero errors
5. `pnpm export-skills-sh` - refresh `skills-sh-catalog/` mirror for [skills.sh](https://www.skills.sh/docs) layout
6. Open a PR using the skill or bug issue template

## What we look for

- Skills focused on **React / Next.js / TypeScript** workflows
- Clear **outcomes**, **safety**, and **scope** sections
- No secrets, hidden Unicode, or “ignore previous instructions” patterns
- Evidence the skill was tested on at least one agent host

## Resources

- [SKILL_STANDARD.md](../SKILL_STANDARD.md)
- [SKILL_TEMPLATE.md](../SKILL_TEMPLATE.md)
- [docs/skills-coverage-matrix.md](./skills-coverage-matrix.md) — where a new skill should fit
- [docs/publishing-skills-sh-and-npm.md](./publishing-skills-sh-and-npm.md) — npm vs [skills.sh](https://www.skills.sh/docs) for maintainers
- [references/skill-safety.md](../references/skill-safety.md)
