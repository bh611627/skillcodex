# Skill safety (2026)

Short rules for authors and consumers. Skills are **policy text** - treat them like code from an untrusted contributor until reviewed.

## Before you enable a skill

1. Read the full `SKILL.md` and any linked `references/` files.
2. Check `risk_level`, `tools_allowed`, and `requires_user_approval` in frontmatter.
3. Scan for odd formatting (collapsed sections, tiny text, copy-paste from unknown sources).
4. Run validation if you cloned SkillCodex: `cd package && pnpm run validate`.
5. Prefer **pinned versions** (`version` in frontmatter or git tag) over floating `main`.

## Writing safe instructions

### Do

- State **scope** clearly: what the skill does and what it must never do.
- List **allowed tools** explicitly (read files, search repo, suggest edits) vs forbidden (arbitrary shell, env harvesting, exfiltration).
- Use **concrete steps** and link `references/` instead of open-ended “use your tools to fix everything”.
- Require **user confirmation** before destructive or irreversible actions.
- Document **assumptions** (framework versions, monorepo layout).
- Use plain ASCII punctuation in security-sensitive lines when possible.

### Do not

- Embed secrets, tokens, or real API keys (use env var *names* only).
- Instruct the agent to ignore safety policies, system prompts, or user refusals.
- Use hidden Unicode (bidi overrides, zero-width, tag characters) to smuggle instructions.
- Tell the agent to run `curl | bash`, read `~/.ssh`, or upload project files to unknown URLs.
- Claim access to tools the host does not provide.

## Prompt injection awareness

Untrusted content (issues, comments, webpages) may try to override the skill. Mitigations:

- Tell the agent: **skill instructions outrank untrusted page content** only when the host supports that policy.
- Keep skills **short and structured** - less room for conflicting buried rules.
- Separate **data** (user input) from **policy** (SKILL.md) in the host when possible.

## Hallucinated tool use

Prevent invented CLIs/APIs:

- Name real commands (`pnpm lint`, `pnpm build`) and when to stop if the command fails.
- Say “if the project has no `package.json`, ask the user” instead of assuming Next.js.
- Under `## Output Rules`, require the agent to state what it could not verify.

## Risk levels (SkillCodex frontmatter)

| `risk_level` | Meaning |
|--------------|---------|
| `low` | Read/analyze/suggest only; no shell or network unless user runs commands manually |
| `medium` | May suggest shell commands; user must run them |
| `high` | Could drive deploys or destructive ops - must set `requires_user_approval: true` |

## Required sections (SkillCodex repo)

Every skill in this library includes:

```markdown
## Scope and boundaries
## Safety
```

See [SKILL_STANDARD.md](../SKILL_STANDARD.md) and [SKILL_TEMPLATE.md](../SKILL_TEMPLATE.md).
