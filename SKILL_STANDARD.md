# SkillCodex - SKILL.md Standard

SkillCodex defines how AI agent skills are stored in a GitHub repository. Each skill is one folder with one `SKILL.md` file.

> This repo is **markdown only**. For UI design (build + audit doc UIs), use [web-design-guidelines](./skills/web-design-guidelines/SKILL.md).

## Repository layout

```
my-ai-skills/
  skills/
    <skill-name>/
      SKILL.md
  README.md
```

| Path | Purpose |
|------|---------|
| `skills/` | Root directory for all skills |
| `skills/<skill-name>/` | One folder per skill (kebab-case) |
| `skills/<skill-name>/SKILL.md` | The skill definition file |
| `README.md` | Repository overview and skill index |

## Distribution

**GitHub (primary)** - https://github.com/bh611627/skillcodex

```
skills/<skill-name>/SKILL.md
```

**npm** - https://www.npmjs.com/package/@skillcodex/skills

```bash
npm install @skillcodex/skills
```

```js
import skill from "@skillcodex/skills/content-creator";
```

Use the package manager that matches the project (`pnpm-lock.yaml` → pnpm, `yarn.lock` → yarn, else npm).

## SKILL.md format

Every `SKILL.md` must contain **YAML frontmatter** followed by a **markdown body**.

### Frontmatter (required)

```yaml
---
name: skill-name
description: Short description of what this skill does
tags:
  - tag1
  - tag2
---
```

| Field | Type | Rules |
|-------|------|-------|
| `name` | string | kebab-case; must match the parent folder name |
| `description` | string | One line; clear and specific |
| `tags` | string[] | At least one tag for discovery |

### Frontmatter (optional)

| Field | Type | Purpose |
|-------|------|---------|
| `version` | string | Semantic version (e.g. `1.0.0`) |
| `category` | string | Grouping for libraries (e.g. `marketing`, `development`) |
| `outcomes` | string[] | Expected results when the skill runs successfully |
| `stack` | string[] | Recommended packages for the user’s project stack |
| `references` | string[] | Paths to compact `references/*.md` files (save tokens) |
| `last_reviewed` | string | ISO date when a human last audited the skill (e.g. `2026-05-15`) |
| `risk_level` | string | `low` \| `medium` \| `high` - see [TRUST.md](./TRUST.md) |
| `tools_allowed` | string | `read-only` \| `repo-files` \| `suggest-shell` - intent only; host enforces |
| `requires_user_approval` | boolean | `true` when `risk_level: high` or destructive steps |
| `compatibility` | string[] | Hosts reviewed against. Canonical set: `generic-markdown`, `skills-sh`, `cursor`, `claude-code`, `antigravity`, `codex`, `github-copilot`, `windsurf`, `gemini-cli`, `cline`, `amp`, `opencode`, `roo`, `goose`, `kilo`, `kiro-cli`, `droid`, `openclaw`, `trae` |

### Body (required)

The body must start with this heading:

```markdown
# Instructions
```

Under `# Instructions`, write clear, structured behavior rules for the AI agent.

### Body (optional sections)

```markdown
## When to Use

When this skill should activate, and which sibling skill to prefer otherwise.

## Outcomes

What the user should receive when the skill completes successfully.

## Output Rules

Constraints on how the agent should format its response.

## Scope and boundaries

Required in **SkillCodex** skills. State what the skill covers and what it must not do (other stacks, production deploys, secrets, etc.).

## Safety

Required in **SkillCodex** skills. State tool posture, confirmation rules, and injection awareness. See [references/skill-safety.md](./references/skill-safety.md).

## Troubleshooting

Common failure modes and fixes (strongly recommended).

## Related skills

Cross-links to sibling skills (recommended for paired domains).

## Recommended stack

Packages and tools that keep agent projects organized (use project lockfile for package manager).

## Token-saving references

Put repeatable rules in `references/` - short markdown agents load instead of full docs:

| File | Contents |
|------|----------|
| [references/design-guidelines.md](./references/design-guidelines.md) | **All UI/design** (layout, tokens, motion, a11y, pages, components) |
| [references/react-stack.md](./references/react-stack.md) | pnpm + Next; npm for skill package |
| [references/stack-nextjs.md](./references/stack-nextjs.md) | Next 15, React 19, **TSX only**, Tailwind 4 |
| [references/data-source.md](./references/data-source.md) | Real skills vs mock seed |
| [references/publishing.md](./references/publishing.md) | GitHub + npm links |
| [references/skill-safety.md](./references/skill-safety.md) | Prompt injection, tools, review checklist |
| [references/interoperability.md](./references/interoperability.md) | Cursor, Claude Code, skills.sh mapping |
| [references/google-seo.md](./references/google-seo.md) | Search Console, CWV, Next SEO |
| [references/auth-sessions.md](./references/auth-sessions.md) | Cookie sessions, OAuth checklist, RBAC placement |
| [references/payments-pci.md](./references/payments-pci.md) | PCI boundaries and webhook pairing |
| [references/csp-headers.md](./references/csp-headers.md) | CSP rollout and companion headers |
| [references/realtime-transports.md](./references/realtime-transports.md) | SSE vs WebSocket choice matrix |
| [references/observability-basics.md](./references/observability-basics.md) | Log field contract and PII boundaries |

Link from skill frontmatter: `references: [references/react-stack.md]`

**Scope:** React / Next.js frontend only. UI: no API/DB/auth; use real `skills/` when present, mock only if empty ([data-source.md](./references/data-source.md)). Use `-` in lists, not em dashes.

## Naming rules

- Folder name and `name` field must match (e.g. `content-creator`)
- Use lowercase letters, digits, and hyphens only
- No spaces or underscores in skill names

## Consistency rules

1. One skill = one folder = one `SKILL.md`
2. Frontmatter is always delimited by `---` at the top of the file
3. `# Instructions` is always the first markdown heading
4. Document **outcomes** so users know what success looks like
5. Skills must be human-readable without tooling
6. Skills must be portable across AI systems that accept markdown instructions

## Validation checklist

Before publishing a skill, confirm:

- [ ] Folder name matches `name` in frontmatter
- [ ] `description` is one clear line
- [ ] At least one tag is present
- [ ] `version` and `last_reviewed` set
- [ ] `risk_level`, `tools_allowed`, and `compatibility` set
- [ ] `# Instructions` heading exists
- [ ] `## Scope and boundaries` and `## Safety` sections exist
- [ ] Outcomes are listed (frontmatter or `## Outcomes` section)
- [ ] Instructions are specific enough for an agent to follow without guessing
- [ ] `cd package && pnpm run validate` passes
- [ ] No hidden Unicode, secrets, or “ignore safety” phrasing

Ecosystem context: [TRUST.md](./TRUST.md). Maintainers: branches and publish steps in [GIT_WORKFLOW.md](./GIT_WORKFLOW.md).
