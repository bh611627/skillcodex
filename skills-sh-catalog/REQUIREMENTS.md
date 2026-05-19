# skills.sh alignment checklist (SkillCodex)

This checklist maps **[skills.sh documentation](https://www.skills.sh/docs)** to this repo. Run **`pnpm validate`** and **`pnpm export-skills-sh`** before releases.

## From [skills.sh/docs](https://www.skills.sh/docs)

| Requirement | How SkillCodex satisfies it |
|-------------|-----------------------------|
| Skills installable via official CLI | Public GitHub repo; users run `npx skills add https://github.com/bh611627/skillcodex --skill <slug>` ([Getting started](https://www.skills.sh/docs)) |
| Discoverable content | Each skill is `SKILL.md` with YAML + markdown; [DIRECTORY.md](../DIRECTORY.md) lists all slugs |
| Leaderboard / ranking | Driven by **anonymous CLI telemetry** when people install - not a manual upload ([How skills are ranked](https://www.skills.sh/docs)) |
| Security expectations | Routine ecosystem audits described on [skills.sh/docs](https://www.skills.sh/docs); we run [validate](../package/src/validate.ts) + [security-scan workflow](../.github/workflows/) + [SECURITY.md](../SECURITY.md) |

## Repo-specific (SkillCodex)

| Requirement | Check |
|-------------|--------|
| `name` matches folder (kebab-case) | `pnpm validate` |
| `description` single line, ≤200 chars | `pnpm validate` |
| `tags` non-empty | `pnpm validate` |
| `# Instructions` present | `pnpm validate` |
| No Unicode tag / bidi injection | `pnpm validate` + CI scan |
| `risk_level: high` ⇒ `requires_user_approval: true` | `pnpm validate` |
| `compatibility` includes `skills-sh` where reviewed | Frontmatter (recommended for all catalog skills) |

## Optional README badge

From [skills.sh/docs - Badge](https://www.skills.sh/docs):

\`\`\`markdown
[![skills.sh](https://skills.sh/b/bh611627/skillcodex)](https://skills.sh/bh611627/skillcodex)
\`\`\`

## Optional: bundled skill in [vercel-labs/skills](https://github.com/vercel-labs/skills)

Upstream uses **fork + feature branch + PR**; skills there often have **minimal** YAML (`name`, `description` only) per [`find-skills/SKILL.md`](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md). Full workflow: [GIT_WORKFLOW.md](../GIT_WORKFLOW.md) (*Optional: PR to vercel-labs/skills*). Example bundle folder: [contrib/vercel-labs-skills](../contrib/vercel-labs-skills/README.md).

## Publishing
