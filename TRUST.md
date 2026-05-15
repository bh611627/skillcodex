# Trust, security, and quality (2026)

SkillCodex is a **curated** skill library. This document explains real risks in the wider agent-skills ecosystem and what this repo does to reduce them.

**Canonical install points**

- GitHub: https://github.com/bh611627/skillcodex
- npm: https://www.npmjs.com/package/@skillcodex/skills

---

## 1. Security: skills are instructions, not a sandbox

### The problem (ecosystem-wide)

A skill is natural-language policy loaded into an agent. That creates real attack surface:

| Risk | What goes wrong |
|------|------------------|
| **Prompt injection** | Hidden or adversarial text in `SKILL.md` steers the agent (including [Unicode tag / bidi tricks](https://embracethered.com/blog/posts/2026/scary-agent-skills/) that survive casual review). |
| **Unsafe workflows** | Steps that encourage deleting data, disabling guards, or running irreversible commands without confirmation. |
| **Hallucinated tool use** | Vague instructions cause the agent to invent tools, APIs, or CLI flags that do not exist in the user’s environment. |
| **Over-privilege** | When a host gives the agent shell, filesystem, or network access, a skill effectively inherits that power ([OWASP Agentic Skills Top 10](https://owasp.org/www-project-agentic-skills-top-10/) proposal, 2026). |

No markdown file can fully “secure” an agent. **The host product** (Cursor, Claude Code, custom runners) must enforce permissions, approvals, and logging.

### What SkillCodex does

| Control | Detail |
|---------|--------|
| **Curated source** | Skills here are maintainer-authored for this repo, not an open upload feed. |
| **Human-readable policy** | Every skill includes `## Scope and boundaries` and `## Safety` (see [SKILL_STANDARD.md](./SKILL_STANDARD.md)). |
| **Explicit tool posture** | Frontmatter `tools_allowed` and `risk_level` state what the skill expects. |
| **No secrets in git** | [SECURITY.md](./SECURITY.md) - never commit keys or `.env`. |
| **Automated checks** | `pnpm run validate` in `package/` scans for hidden Unicode and required sections. |
| **Conservative defaults** | Skills in this repo default to `risk_level: low` and `tools_allowed: read-only` unless documented otherwise. |

**You should still:** read `SKILL.md` before enabling a skill from *any* registry, prefer pinned versions, and require user approval for shell/network/deploy actions in your agent host.

Authoring rules: [references/skill-safety.md](./references/skill-safety.md).

---

## 2. Quality: open registries vs curated libraries

### The problem

Anyone can publish a skill to many directories. Quality varies:

- Some skills are excellent and maintained.
- Some are outdated (wrong framework versions, deprecated APIs).
- Some are vague (“be helpful with SEO”) and produce inconsistent agent behavior.

### What SkillCodex does

| Practice | Detail |
|----------|--------|
| **Outcomes-first** | Each skill lists measurable `outcomes` so success is checkable. |
| **Version + review date** | `version` and `last_reviewed` in frontmatter. |
| **Stack pinned in references** | e.g. [stack-nextjs.md](./references/stack-nextjs.md) for concrete versions. |
| **Validation checklist** | [SKILL_STANDARD.md](./SKILL_STANDARD.md) before merge. |
| **Single domain scope** | React / Next.js frontend skills only - reduces vague “do everything” skills. |

SkillCodex does **not** claim every skill is perfect forever. Check `last_reviewed` and open an issue if something is wrong.

---

## 3. Standards: fragmentation in 2026

### The problem

Adoption is growing, but formats and loaders still differ:

| Surface | Typical shape |
|---------|----------------|
| **GitHub + SKILL.md** | Folder per skill, YAML frontmatter + markdown body |
| **[skills.sh](https://www.skills.sh/)** | Directory + `npx skills add owner/repo` |
| **Cursor** | `.cursor/skills` or rules + skills |
| **Claude Code** | `SKILL.md` with progressive disclosure |
| **npm packages** | Compiled JSON/TS modules (this repo’s `package/`) |

The same *idea* (portable agent instructions) appears under different paths, metadata fields, and security models.

### What SkillCodex does

| Practice | Detail |
|----------|--------|
| **Portable core** | `name`, `description`, `tags`, `# Instructions`, outcomes - works as markdown in any agent that accepts instructions. |
| **`compatibility` frontmatter** | Declares tested hosts (see [SKILL_STANDARD.md](./SKILL_STANDARD.md)). |
| **Dual distribution** | GitHub (source of truth) + npm (programmatic). |
| **Documented mapping** | [references/interoperability.md](./references/interoperability.md) - how fields map across tools. |

We align with the emerging **Agent Skills** pattern (markdown + frontmatter + optional references). We do not pretend one repo format is already universal.

---

## Quick reference

| I am… | Read |
|-------|------|
| Installing skills | [SECURITY.md](./SECURITY.md), [references/skill-safety.md](./references/skill-safety.md) |
| Writing skills | [SKILL_STANDARD.md](./SKILL_STANDARD.md), [skills/skill-creator](./skills/skill-creator/SKILL.md) |
| Building a skill UI | [references/design-guidelines.md](./references/design-guidelines.md), [skills/skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) |
| Validating locally | `cd package && pnpm run validate` |
