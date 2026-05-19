# Discovery and scope

## skills.sh leaderboard

The public directory at [skills.sh](https://www.skills.sh/) lists skills from many GitHub repos. Official behavior is documented at [skills.sh/docs](https://www.skills.sh/docs), including:

- **Ranking** — anonymous **install telemetry** from the `skills` CLI (which skills get installed), not editorial “upload” of markdown to a central CMS.
- **Security** — routine audits are described there; report issues via [security.vercel.com](https://security.vercel.com/).
- **Badge** — optional install badge for your README: see [Publishing: skills.sh vs npm](./publishing-skills-sh-and-npm.md).

SkillCodex **does not** mirror every leaderboard entry. We optimize for:

- **Depth** — full `SKILL.md`, `references/`, validation, typed npm exports
- **React / Next.js** focus plus selected adjacent stacks (e.g. Python productivity)
- **Safety metadata** — `risk_level`, `tools_allowed`, `requires_user_approval`

## How users get SkillCodex skills

| Path | Command / action |
|------|------------------|
| **One skill into an agent** | `npx skills add https://github.com/bh611627/skillcodex --skill <slug>` — slugs in [DIRECTORY.md](../DIRECTORY.md) |
| **All skills in Node/CI** | `npm install @skillcodex/skills` — see [usage.md](./usage.md) |
| **Maintainer: npm release** | [publishing-skills-sh-and-npm.md](./publishing-skills-sh-and-npm.md) |

## Requesting a new skill

Open an issue with the “Propose a new skill” template or send a PR following [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md). High-volume topics from the broader ecosystem are welcome as **proposals**; each skill still needs review, outcomes, and tests on a real host.

## What we fixed (maintenance notes)

When SkillCodex changes behavior or docs, we log rationale in [CHANGELOG.md](../CHANGELOG.md) (for example: granular CLI install docs, SEO reference updates, rename to clearer slugs like `seo-expert`).
