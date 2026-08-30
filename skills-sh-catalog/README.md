# skills.sh catalog mirror (generated)

This folder is a **generated copy** of [`skills/`](../skills/) for [skills.sh](https://www.skills.sh/)-style layout: one directory per skill with `SKILL.md`.

## Do not edit files here by hand

- **Source of truth:** [`skills/<slug>/SKILL.md`](../skills/)
- **Regenerate:** from repo root run `pnpm export-skills-sh`

## Install (same as primary tree)

Per [skills.sh/docs](https://www.skills.sh/docs), install from **this repository** (paths in frontmatter point at `references/` from the **repo root**, not from this subfolder):

```bash
npx skills add https://github.com/bh611627/skillcodex --skill <slug>
```

All slugs: [DIRECTORY.md](../DIRECTORY.md).

## Why this folder exists

- Single place to **browse every `SKILL.md`** in the skills.sh–expected shape (`skills/<slug>/SKILL.md`).
- Easier to compare with [vercel-labs/skills](https://github.com/vercel-labs/skills) layout when preparing upstream PRs (see [contrib/vercel-labs-skills](../contrib/vercel-labs-skills/README.md)).

**Last export:** 2026-08-30T18:53:38.191Z - **37** skills.
