# SkillCodex

```
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
```

Agent skills for React / Next.js - structured like [skills.sh](https://www.skills.sh/) (directory + `npx skills add`), with **outcomes** instead of install leaderboards.

- **GitHub:** [github.com/bh611627/skillcodex](https://github.com/bh611627/skillcodex)
- **npm:** [@skillcodex/skills](https://www.npmjs.com/package/@skillcodex/skills)
- **Directory (skills.sh-style table):** [DIRECTORY.md](./DIRECTORY.md)

## Repository layout

| Layer | Role |
|-------|------|
| **`skills/`** | Each skill is a folder with `SKILL.md` (source of truth) |
| **`references/`** | Shared rules linked from skills |
| **`package/`** | npm package `@skillcodex/skills` — generated from `skills/` via sync |
| **`contrib/`** | Optional trees for upstream PRs (e.g. Vercel CLI repo) |

Full map: [REPO_LAYOUT.md](./REPO_LAYOUT.md) · Branches / releases: [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)

---

## Try it (same pattern as skills.sh)

```bash
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines
```

```bash
npm install @skillcodex/skills
```

---

## vs skills.sh

| skills.sh | SkillCodex |
|-----------|------------|
| Leaderboard by installs | **Outcomes** per skill - no fake counts |
| `npx skills add owner/repo` | Same; use `bh611627/skillcodex` |
| Browse opaque cards | Full **SKILL.md** + [DIRECTORY.md](./DIRECTORY.md) |

---

## Design rules (one file)

**[references/design-guidelines.md](./references/design-guidelines.md)** - all web UI rules. Implemented or audited via skill **`web-design-guidelines`** (build + review).

---

## Skills (outcomes)

| Skill | Outcome you get |
|-------|-----------------|
| [web-design-guidelines](./skills/web-design-guidelines/SKILL.md) | Doc UI build **or** file:line UI audit per design-guidelines |
| [skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) | Full doc browser, skills.sh-style browse UI |
| [content-creator](./skills/content-creator/SKILL.md) | Hooks, script, caption, hashtags |
| [seo-agent](./skills/seo-agent/SKILL.md) | SEO outline + Next CWV |
| [code-assistant](./skills/code-assistant/SKILL.md) | Focused diffs + review |
| [skill-creator](./skills/skill-creator/SKILL.md) | Valid SKILL.md + README row |

**pnpm** for new Next apps; **match lockfile** in user projects.

---

## Docs

[SKILL_STANDARD.md](./SKILL_STANDARD.md) · [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md) · [DIRECTORY.md](./DIRECTORY.md) · [REPO_LAYOUT.md](./REPO_LAYOUT.md) · [references/skills-ecosystem.md](./references/skills-ecosystem.md) · [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) · [SECURITY.md](./SECURITY.md) · [TRUST.md](./TRUST.md)

**Upstreams:** [contrib/vercel-labs-skills](contrib/vercel-labs-skills/README.md) — optional bundle for PRs to `vercel-labs/skills`.

MIT
