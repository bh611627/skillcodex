# Usage

## Install into an AI agent

```bash
npx skills add https://github.com/bh611627/skillcodex --skill seo-expert
```

Replace `seo-expert` with any slug from [DIRECTORY.md](../DIRECTORY.md).

### Cursor

Copy or sync skills to `.cursor/skills/` (project) or `~/.cursor/skills/` (global). See [examples/cursor-usage](../examples/cursor-usage/README.md).

### Claude Code

Use the skills directory configured by your host. See [examples/claude-code-usage](../examples/claude-code-usage/README.md).

## Use from npm

```bash
npm install @skillcodex/skills
```

```ts
import codeAssistant from "@skillcodex/skills/code-assistant";

console.log(codeAssistant.instructions);
console.log(codeAssistant.outcomes);
```

### List all skills

```ts
import { skills, skillList } from "@skillcodex/skills";

Object.keys(skills);
```

### Load raw frontmatter

```ts
import { loadSkill } from "@skillcodex/skills";

const { frontmatter, body } = loadSkill("seo-expert");
```

## Validate locally

```bash
pnpm install
pnpm validate   # from repo root
pnpm build      # compile npm package
```

## Author a new skill

```bash
pnpm new-skill
```

Then edit `skills/<name>/SKILL.md` and run `pnpm validate`.

## Common prompts

| Skill | Prompt |
|-------|--------|
| `code-assistant` | “Fix X with a minimal diff, max 3 files” |
| `seo-expert` | “Title, meta, JSON-LD, and OG checklist for /pricing” |
| `accessibility-audit` | “WCAG audit for `src/components/Form.tsx`” |
| `testing-agent` | “Vitest tests for `Button` with user-event” |

See [README.md](../README.md) for the full catalog.

## Publishing (maintainers)

Releasing **npm** and understanding **skills.sh** discovery are separate: [publishing-skills-sh-and-npm.md](./publishing-skills-sh-and-npm.md).
