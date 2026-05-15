# Skill directory (skills.sh-style)

Same idea as [skills.sh](https://www.skills.sh/) - one row per skill. SkillCodex adds **outcomes** instead of install leaderboards.

| # | Skill | Topics | GitHub `SKILL.md` | Add with CLI |
|---|--------|--------|-------------------|----------------|
| 1 | `web-design-guidelines` | `ui` `design-system` `nextjs` `accessibility` | [skills/web-design-guidelines](https://github.com/bh611627/skillcodex/tree/main/skills/web-design-guidelines/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines` |
| 2 | `skillcodex-browser-ui` | `ui` `nextjs` `skillcodex` | [skills/skillcodex-browser-ui](https://github.com/bh611627/skillcodex/tree/main/skills/skillcodex-browser-ui/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill skillcodex-browser-ui` |
| 3 | `content-creator` | `content` `marketing` | [skills/content-creator](https://github.com/bh611627/skillcodex/tree/main/skills/content-creator/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill content-creator` |
| 4 | `seo-agent` | `seo` `nextjs` | [skills/seo-agent](https://github.com/bh611627/skillcodex/tree/main/skills/seo-agent/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill seo-agent` |
| 5 | `code-assistant` | `development` `nextjs` | [skills/code-assistant](https://github.com/bh611627/skillcodex/tree/main/skills/code-assistant/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill code-assistant` |
| 6 | `skill-creator` | `meta` `skills` | [skills/skill-creator](https://github.com/bh611627/skillcodex/tree/main/skills/skill-creator/SKILL.md) | `npx skills add https://github.com/bh611627/skillcodex --skill skill-creator` |

## npm (programmatic)

```bash
npm install @skillcodex/skills
```

```ts
import webDesignGuidelines from "@skillcodex/skills/web-design-guidelines";
```

## Compared to skills.sh

| skills.sh | This directory |
|-----------|----------------|
| Leaderboard by installs | **Outcomes** in each `SKILL.md` (no fake metrics) |
| `npx skills add owner/repo` | Same pattern; repo is `bh611627/skillcodex` |
| Skill name in table | Folder name = skill slug = npm subpath |

## skills.sh vs Vercel repos

`npx skills` comes from [vercel-labs/skills](https://github.com/vercel-labs/skills). Vercel’s published **skills bundle** is [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills), not the CLI repo. See [references/skills-ecosystem.md](./references/skills-ecosystem.md).
