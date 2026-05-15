# SkillCodex

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
```

Agent skills for React / Next.js - plus a **documentation-style UI spec** to browse skills like [skills.sh](https://www.skills.sh/), with more clarity.

- **GitHub:** [github.com/bh611627/skillcodex](https://github.com/bh611627/skillcodex)
- **npm:** [@skillcodex/skills](https://www.npmjs.com/package/@skillcodex/skills)

---

## vs skills.sh

| skills.sh | SkillCodex |
|-----------|------------|
| Install leaderboard | **Outcomes** per skill (no fake counts) |
| `npx skills add repo` | Full `SKILL.md` on GitHub + `npm install @skillcodex/skills` |
| Opaque cards | Readable instructions + metadata |
| Directory | GitHub markdown **and** npm modules |
| - | Create-skill UI + guidelines page + skeletons |

---

## Design (one file)

**[references/design-guidelines.md](./references/design-guidelines.md)** - STRICT UI only, whitespace, Tailwind mobile-first, framer-motion, skeletons, pages, anti-SaaS rules.

```bash
pnpm create next-app@latest my-docs --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-docs && pnpm install && pnpm add framer-motion react-markdown remark-gfm react-icons && pnpm dev
```

Use **pnpm** for new apps; **match lockfile** in existing projects.

---

## Install

```bash
npm install @skillcodex/skills
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines
```

---

## Skills (with outcomes)

| Skill | Outcome you get |
|-------|-----------------|
| [documentation-ui](./skills/documentation-ui/SKILL.md) | Doc UI matching design-guidelines checklist |
| [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | `file:line` audit + pass/fail checklist |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Four routes, skeletons, skills.sh-style browse |
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, script, caption, hashtags |
| [seo-agent](./skills/seo-agent/SKILL.md) | SEO outline + Next CWV fixes |
| [code-assistant](./skills/code-assistant/SKILL.md) | Focused diffs + review checklist |
| [skill-creator](./skills/skill-creator/SKILL.md) | Valid SKILL.md + README row |

---

## Docs

[SKILL_STANDARD.md](./SKILL_STANDARD.md) · [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md) · [TRUST.md](./TRUST.md)

MIT
