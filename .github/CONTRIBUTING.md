# Contributing to SkillCodex

Thank you for helping grow the curated skill library for React and Next.js developers.

## Code of conduct

Be respectful and constructive. Harassment and spam are not tolerated. Report concerns via [GitHub Issues](https://github.com/bh611627/skillcodex/issues).

## Adding a new skill

1. Create a folder under `skills/` using **kebab-case** (e.g. `skills/my-new-skill/`).
2. Add `SKILL.md` with YAML frontmatter and a markdown body.
3. The folder name must **exactly match** the `name` field in frontmatter.

### Required frontmatter

```yaml
---
name: my-new-skill
description: One-line summary under 200 characters
tags:
  - react
  - nextjs
---
```

### Recommended frontmatter

Also include: `version`, `category`, `outcomes`, `stack`, `last_reviewed`, `risk_level`, `tools_allowed`, `requires_user_approval`, `compatibility`, `references`.

See [SKILL_STANDARD.md](../SKILL_STANDARD.md) for the full spec. Use [SKILL_TEMPLATE.md](../SKILL_TEMPLATE.md) as a starting point.

### Required body sections

Every `SKILL.md` must include:

- `# Instructions` - step-by-step behavior for the agent
- `## Scope and boundaries` - what the skill does **not** do
- `## Safety` - files read/written, tool boundaries, approval requirements
- `## Outcomes` - measurable results for the user

Optional but encouraged: `## Output Rules`, `## Troubleshooting`.

### Scaffold a new skill locally

```bash
pnpm new-skill
```

This creates `skills/<name>/SKILL.md` and runs validation.

## Local validation

From the repo root:

```bash
pnpm validate
```

Or from `package/`:

```bash
cd package && pnpm run validate
```

Validation checks frontmatter, required headings, kebab-case naming, and scans for Unicode tag / bidi injection characters. Warnings (missing `version`, `outcomes`, etc.) do not fail the build; errors do.

Before opening a PR, also run:

```bash
pnpm build
pnpm sync   # if you changed skills/ - regenerates package/src/skills/*.ts
```

## Pull request checklist

- [ ] Folder name matches `name` in frontmatter (kebab-case)
- [ ] `description` is a single line under 200 characters
- [ ] `tags` has at least one entry
- [ ] `last_reviewed` is set to today's date (ISO `YYYY-MM-DD`)
- [ ] `outcomes` lists at least two concrete, measurable results
- [ ] `risk_level` and `tools_allowed` are set appropriately
- [ ] `compatibility` lists hosts tested (`cursor`, `claude-code`, `skills-sh`, `generic-markdown`)
- [ ] Body includes `# Instructions`, `## Scope and boundaries`, `## Safety`, `## Outcomes`
- [ ] `pnpm validate` passes with zero errors
- [ ] Skill tested on at least one agent host (Cursor, Claude Code, or skills.sh)
- [ ] [DIRECTORY.md](../DIRECTORY.md) updated if adding a user-facing skill row (maintainers may do this on merge)
- [ ] No secrets, API keys, or real env values in the diff

## Security

Read [TRUST.md](../TRUST.md) and [references/skill-safety.md](../references/skill-safety.md) before authoring. Do not use hidden Unicode, bidi overrides, or instructions that tell agents to ignore safety policies.

## Questions

Open a [discussion or issue](https://github.com/bh611627/skillcodex/issues) if you are unsure whether a skill fits the catalog scope (React / Next.js / TypeScript ecosystem).
