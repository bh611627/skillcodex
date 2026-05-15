# @skillcodex/skills

npm package for [SkillCodex](../README.md) agent skills.

## Install

```bash
pnpm add @skillcodex/skills
```

## Usage

```ts
import contentCreator from "@skillcodex/skills/content-creator";

// Structured fields
contentCreator.name;
contentCreator.description;
contentCreator.tags;
contentCreator.outcomes;
contentCreator.instructions;

// Full SKILL.md source
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

## Maintain

```bash
pnpm run sync   # from ../skills/*/SKILL.md
pnpm run build
```

Publish: see [../PUBLISH.md](../PUBLISH.md).
