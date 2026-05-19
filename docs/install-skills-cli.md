# Install with skills.sh CLI vs npm

Official skills ecosystem docs: [skills.sh documentation](https://www.skills.sh/docs). The CLI is open source at [vercel-labs/skills](https://github.com/vercel-labs/skills).

## One skill only (recommended for hosts)

Install **exactly one** SkillCodex skill into Cursor, Claude Code, or another supported host:

```bash
npx skills add https://github.com/bh611627/skillcodex --skill web-design-guidelines
```

Replace `web-design-guidelines` with any slug from [DIRECTORY.md](../DIRECTORY.md). This matches the `npx skills add <owner/repo>` pattern described on [skills.sh](https://www.skills.sh/docs) with an extra `--skill` flag for monorepos that ship many skills.

**Why this matters:** you do **not** need to clone the whole repo or install every skill - only the folder you select.

## Full npm package (Node apps and CI)

When you need **TypeScript imports** or a lockfile-friendly dependency:

```bash
npm install @skillcodex/skills
```

```ts
import { skills } from "@skillcodex/skills";
```

This bundles **all** published skills as subpaths (`@skillcodex/skills/seo-expert`, etc.). Use it when tooling must load many skills programmatically - not when you only want one markdown file in an editor.

## SkillCodex vs leaderboard installs

[skills.sh](https://www.skills.sh/) ranks skills using **anonymous install telemetry** from the CLI (see their [docs](https://www.skills.sh/docs)). SkillCodex lists **outcomes** in each `SKILL.md` instead of competing on install counts.

## Publishing this repo (npm vs skills.sh)

There is **no separate “upload every skill to skills.sh.”** The public directory at [skills.sh](https://www.skills.sh/) reflects **CLI installs and anonymous telemetry** as described in [their docs](https://www.skills.sh/docs). To ship the **npm** package, follow [docs/publishing-skills-sh-and-npm.md](./publishing-skills-sh-and-npm.md).

Optional README badge for this repo:

```markdown
[![skills.sh](https://skills.sh/b/bh611627/skillcodex)](https://skills.sh/bh611627/skillcodex)
```
