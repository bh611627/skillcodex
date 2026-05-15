# Publishing skills (GitHub + npm)

SkillCodex skills ship in two places:

- **GitHub:** https://github.com/bh611627/skillcodex
- **npm:** https://www.npmjs.com/package/@skillcodex/skills

## GitHub (primary)

```
skills/<skill-name>/SKILL.md
```

For: sharing, portfolios, browsing on GitHub, copying into agents.

```bash
git clone https://github.com/bh611627/skillcodex.git
# use skills/<name>/SKILL.md in your agent
```

## npm (developer)

```bash
pnpm add @skillcodex/skills
```

```ts
import contentCreator from "@skillcodex/skills/content-creator";
```

Package source in this repo: `package/` (run `pnpm run sync` to refresh from `skills/`).

## Package manager

- Greenfield: **pnpm**
- Existing repo: match lockfile
- UI install snippet on detail page: show `pnpm add @skillcodex/skills` by default

## vs skills.sh (what SkillCodex adds)

| skills.sh | SkillCodex |
|-----------|------------|
| Install leaderboard | **Outcomes** per skill |
| Opaque add command | Full SKILL.md + GitHub path |
| Unknown contents | Readable instructions + output rules |
| Single install path | GitHub + npm documented |

Do not fabricate download counts or stars.
