# Using SkillCodex in Cursor

## Install a skill

```bash
npx skills add https://github.com/bh611627/skillcodex --skill code-assistant
```

Or copy `skills/<name>/SKILL.md` into `.cursor/skills/` (project) or `~/.cursor/skills/` (global).

## Example 1: code-assistant

**Without skill** - user asks: “Fix the login button styling.”

The agent may rewrite entire files, change unrelated components, and mix npm/pnpm commands.

**With `code-assistant` loaded** - same prompt.

The agent:

1. Restates the goal in one line
2. Proposes a **small diff** (≤3 files)
3. Uses `pnpm` when `pnpm-lock.yaml` exists
4. Ends with how to run `pnpm lint` / `pnpm build`

## Example 2: accessibility-audit

**Without skill** - “Is my form accessible?”

Generic advice: “add labels” with no file references.

**With `accessibility-audit` loaded**

Output:

```
Critical
- src/components/LoginForm.tsx:42 - icon button missing aria-label

Major
- src/components/LoginForm.tsx:18 - error state color-only
```

## npm package (optional)

```ts
import codeAssistant from "@skillcodex/skills/code-assistant";
// Use codeAssistant.instructions in custom tooling
```

See [CONTRIBUTING.md](../../.github/CONTRIBUTING.md) to add skills.
