# Using SkillCodex in Claude Code

## Install a skill

```bash
npx skills add https://github.com/bh611627/skillcodex --skill seo-agent
```

Claude Code reads `SKILL.md` from the skills directory configured by your host.

## Example 1: seo-agent

**Without skill** - “Improve SEO for my About page.”

Vague title suggestions, no JSON-LD, mixes Pages Router `next/head` with App Router APIs.

**With `seo-agent` loaded**

Deliverables in order:

1. Search intent (one sentence)
2. Title and meta (character counts)
3. H1 / H2 outline
4. JSON-LD block for the page type
5. OpenGraph + Twitter card checklist
6. Next.js-specific CWV notes

## Example 2: testing-agent

**Without skill** - “Add tests for `UserCard`.”

May use Jest patterns that do not match a Vitest repo.

**With `testing-agent` loaded**

- Colocated `UserCard.test.tsx` with RTL + user-event
- Commands: `pnpm test` and coverage flag if configured
- No arbitrary `setTimeout` waits

## Verify locally

```bash
git clone https://github.com/bh611627/skillcodex
cd skillcodex
pnpm install
pnpm validate
```

See [SKILL_STANDARD.md](../../SKILL_STANDARD.md) for the full format.
