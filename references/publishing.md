# Publishing skills (GitHub + npm)

Write once as SKILL.md. Two ways to distribute.

## GitHub (primary)

```
skills/<skill-name>/SKILL.md
```

For: sharing, portfolios, browsing on GitHub, human review.

## npm (developer)

```bash
pnpm add @skillcodex/skills
```

```ts
import contentCreator from "@skillcodex/skills/content-creator";
```

Package source in this repo: `package/` (run `pnpm run sync` to refresh from `skills/`).

Object shape (when compiled):

```ts
{
  name: string;
  description: string;
  tags: string[];
  outcomes?: string[];
  stack?: string[];
  instructions: string;
  outputRules?: string;
}
```

For: agents, apps, programmatic use.

## Package manager

- Greenfield: **pnpm**
- Existing repo: match lockfile
- UI install snippet on detail page: show `pnpm add ...` by default

## vs skills.sh (what SkillCodex adds)

| skills.sh | SkillCodex |
|-----------|------------|
| Install leaderboard | **Outcomes** per skill |
| Opaque add command | Full SKILL.md + GitHub path |
| Unknown contents | Readable instructions + output rules |
| Single install path | GitHub + npm documented |

Do not fabricate download counts or stars.
