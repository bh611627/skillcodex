# SkillCodex

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
```

**Open agent skills for React and Next.js.**

- **GitHub:** [github.com/bh611627/skillcodex](https://github.com/bh611627/skillcodex)
- **npm:** [@skillcodex/skills](https://www.npmjs.com/package/@skillcodex/skills)

Readable `SKILL.md` on GitHub. Installable modules on npm. Inspired by the clean directory style of [skills.sh](https://www.skills.sh/) with full skill text and clear outcomes.

---

## Try it now

**npm / pnpm**

```bash
pnpm add @skillcodex/skills
```

```ts
import seoAgent from "@skillcodex/skills/seo-agent";

console.log(seoAgent.description);
console.log(seoAgent.instructions);
console.log(seoAgent.outcomes);
```

**GitHub**

```bash
git clone https://github.com/bh611627/skillcodex.git
# open skills/seo-agent/SKILL.md in your agent
```

Browse a skill: [skills/seo-agent/SKILL.md](https://github.com/bh611627/skillcodex/tree/main/skills/seo-agent/SKILL.md)

---

## Skills

| Skill | Description | Tags |
|-------|-------------|------|
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, scripts, captions for social | `content` `marketing` |
| [seo-agent](./skills/seo-agent/SKILL.md) | SEO, Search Console, Next.js CWV | `seo` `nextjs` |
| [code-assistant](./skills/code-assistant/SKILL.md) | Write and review Next/React code | `development` `nextjs` |
| [documentation-ui](./skills/documentation-ui/SKILL.md) | Calm doc UI (DESIGNSPEC) | `ui` `design-system` |
| [web-interface-guidelines](./skills/web-interface-guidelines/SKILL.md) | A11y, forms, motion | `ui` `accessibility` |
| [skill-creator](./skills/skill-creator/SKILL.md) | Author new SKILL.md files | `meta` `skills` |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Full SkillCodex doc UI spec | `ui` `skillcodex` |

### Install per skill (npm)

```bash
pnpm add @skillcodex/skills
```

```ts
import contentCreator from "@skillcodex/skills/content-creator";
import codeAssistant from "@skillcodex/skills/code-assistant";
```

---

## Two formats

| | GitHub | npm |
|---|--------|-----|
| **Link** | [github.com/bh611627/skillcodex](https://github.com/bh611627/skillcodex) | [npmjs.com/package/@skillcodex/skills](https://www.npmjs.com/package/@skillcodex/skills) |
| **Path** | `skills/<name>/SKILL.md` | `@skillcodex/skills/<name>` |
| **Best for** | Browse, fork, copy into agents | Apps, scripts, programmatic use |

---

## vs skills.sh

| skills.sh | SkillCodex |
|-----------|------------|
| Install leaderboard | **Outcomes** per skill (what you get) |
| `npx skills add owner/repo` | `pnpm add @skillcodex/skills` + full markdown on GitHub |
| Opaque listing | Every skill readable in the repo |

---

## Docs

| Doc | |
|-----|---|
| [SKILL_STANDARD.md](./SKILL_STANDARD.md) | SKILL.md format |
| [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md) | What this repo is |
| [SECURITY.md](./SECURITY.md) | No secrets in the repo |
| [package/README.md](./package/README.md) | npm package API |
| [references/publishing.md](./references/publishing.md) | GitHub + npm distribution |

---

## Develop

```bash
cd package && pnpm run sync && pnpm run build
```

MIT
