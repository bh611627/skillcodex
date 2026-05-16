# Introduction to SkillCodex

SkillCodex is an open-source **AI agent skills** library for **React** and **Next.js** developers. It packages team know-how as `SKILL.md` files — a portable **skills system** that works across Cursor, Claude Code, skills.sh, and custom tooling.

## Core concepts

| Term | Meaning |
|------|---------|
| **Skill** | A folder with `SKILL.md` (YAML frontmatter + markdown instructions) |
| **Outcome** | A measurable result when the skill runs successfully |
| **Reference** | Shared rule file under `references/` linked from skills |
| **Validation** | Offline checks for frontmatter, safety sections, and injection chars |

## How it fits your stack

SkillCodex is a **developer productivity tool**, not a hosted agent:

- **GitHub** — browse, fork, and PR skills like code
- **npm** — `import` skills in dashboards, CLIs, or internal tools
- **skills.sh CLI** — `npx skills add` for one-command agent install

## Ecosystem

- [skills.sh](https://www.skills.sh/) — discovery and install CLI
- [SKILL_STANDARD.md](../SKILL_STANDARD.md) — format specification
- [references/skills-ecosystem.md](../references/skills-ecosystem.md) — comparison with Vercel agent-skills

## Who it is for

- Frontend and full-stack teams standardizing **AI workflows**
- Maintainers publishing **automation-friendly** instructions with safety metadata
- Tool builders needing structured skill JSON via `skills-index.json`

Next: [Usage](./usage.md) · [Contributing](./contributing.md)
