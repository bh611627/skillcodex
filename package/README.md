# @skillcodex/skills

npm package for [SkillCodex](https://github.com/bh611627/skillcodex).

- **npm:** https://www.npmjs.com/package/@skillcodex/skills
- **GitHub:** https://github.com/bh611627/skillcodex

## Install

```bash
pnpm add @skillcodex/skills
```

## Usage

```ts
import contentCreator from "@skillcodex/skills/content-creator";

contentCreator.name;
contentCreator.description;
contentCreator.tags;
contentCreator.outcomes;
contentCreator.instructions;
contentCreator.skillMd;
```

```ts
import { skills, skillList } from "@skillcodex/skills";

skills["seo-agent"];
```

## Exports

| Path | Skill |
|------|-------|
| `@skillcodex/skills/content-creator` | Content |
| `@skillcodex/skills/seo-agent` | SEO |
| `@skillcodex/skills/code-assistant` | Code |
| `@skillcodex/skills/documentation-ui` | Doc UI |
| `@skillcodex/skills/web-interface-guidelines` | A11y |
| `@skillcodex/skills/skill-creator` | Meta |
| `@skillcodex/skills/skillcodex-browser-ui` | Browser UI |

## Maintain (from this repo)

```bash
pnpm run sync   # from ../skills/*/SKILL.md
pnpm run build
```
