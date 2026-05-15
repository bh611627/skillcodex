# SkillCodex - SKILL.md Standard

SkillCodex defines how AI agent skills are stored in a GitHub repository. Each skill is one folder with one `SKILL.md` file.

> This repo is **markdown only**. For UI/design rules, use agent skills `documentation-ui` and `web-interface-guidelines` - see [WHAT_IS_SKILLCODEX.md](./WHAT_IS_SKILLCODEX.md).

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

## Publishing formats

Skills in this standard support two equivalent representations:

**GitHub (primary)** - browse and share as markdown:

```
skills/<skill-name>/SKILL.md
```

**npm (developer)** - install and import in code:

```bash
pnpm add @your-org/my-ai-skills
```

```js
import skill from "@your-org/my-ai-skills/content-creator";
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

### Body (required)

The body must start with this heading:

```markdown
# Instructions
```

Under `# Instructions`, write clear, structured behavior rules for the AI agent.

### Body (optional sections)

```markdown
## Outcomes

What the user should receive when the skill completes successfully.

## Output Rules

Constraints on how the agent should format its response.

## Recommended stack

Packages and tools that keep agent projects organized (use project lockfile for package manager).

## Token-saving references

Put repeatable rules in `references/` - short markdown agents load instead of full docs:

| File | Contents |
|------|----------|
| [references/react-stack.md](./references/react-stack.md) | Stack picker: ask on greenfield if unspecified; pnpm + Next default |
| [references/stack-nextjs.md](./references/stack-nextjs.md) | Next 15, React 19, **TSX only**, Tailwind 4 |
| [references/DESIGNSPEC.md](./references/DESIGNSPEC.md) | Doc UI design system (no backend) |
| [references/data-source.md](./references/data-source.md) | Real skills vs mock seed |
| [references/ui-pages.md](./references/ui-pages.md) | Home, detail, create, guidelines pages |
| [references/publishing.md](./references/publishing.md) | GitHub + npm dual format |
| [references/google-seo.md](./references/google-seo.md) | Search Console, CWV, Next SEO |
| [references/icons-and-emoji.md](./references/icons-and-emoji.md) | react-icons; Emoji Mart apple set if user asks |
| [references/components.md](./references/components.md) | DocCard, PlainButton, LoadingBlock, ContentWidth |

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
- [ ] `# Instructions` heading exists
- [ ] Outcomes are listed (frontmatter or `## Outcomes` section)
- [ ] Instructions are specific enough for an agent to follow without guessing
