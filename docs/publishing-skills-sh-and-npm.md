# Publishing: skills.sh ecosystem vs npm

SkillCodex ships skills in **two separate channels**. They are **not** the same upload - treat them independently.

| Channel | What you ship | Who consumes it |
|---------|----------------|-----------------|
| **GitHub + [skills.sh](https://www.skills.sh/) CLI** | Public repo + valid `skills/<slug>/SKILL.md` files | Anyone running `npx skills add …` ([docs](https://www.skills.sh/docs)) |
| **[npm](https://www.npmjs.com/package/@skillcodex/skills)** | Built package `@skillcodex/skills` | Node apps, CI, TypeScript `import` |

Official skills CLI source: [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills).

## skills.sh catalog mirror (this repo)

All skills are also copied into **`skills-sh-catalog/skills/<slug>/SKILL.md`** so the tree matches the familiar [skills.sh](https://www.skills.sh/docs) layout (`skills/<name>/SKILL.md`). That folder is **generated** - edit only `skills/` then run:

```bash
pnpm export-skills-sh
```

Checklist for docs vs CLI: [`skills-sh-catalog/REQUIREMENTS.md`](../skills-sh-catalog/REQUIREMENTS.md).

**Contributing bundled skills to [vercel-labs/skills](https://github.com/vercel-labs/skills)** (fork, branch, PR, alignment with [skills.sh](https://www.skills.sh/docs) ecosystem): [GIT_WORKFLOW.md](../GIT_WORKFLOW.md) (section *Optional: PR to vercel-labs/skills*).

---

## 1. skills.sh (discovery and CLI installs)

### There is no “upload all skills to skills.sh”

Per [skills.sh documentation](https://www.skills.sh/docs):

- The **leaderboard** ranks skills using **anonymous install telemetry** from the `skills` CLI when users install skills - not a manual bulk upload of markdown.
- **Security:** routine audits are described on [skills.sh/docs](https://www.skills.sh/docs); report issues via [security.vercel.com](https://security.vercel.com/).

**What you do as maintainer:**

1. Keep the **GitHub repo public** (`bh611627/skillcodex`) and **`SKILL.md` files valid** (`cd package && pnpm run validate`).
2. Tell users to install **one skill** or the repo URL as documented:

   ```bash
   npx skills add https://github.com/bh611627/skillcodex --skill <slug>
   ```

   All slugs: [DIRECTORY.md](../DIRECTORY.md).

3. Optional **README badge** (from [skills.sh/docs](https://www.skills.sh/docs)):

   ```markdown
   [![skills.sh](https://skills.sh/b/bh611627/skillcodex)](https://skills.sh/bh611627/skillcodex)
   ```

   Replace `bh611627/skillcodex` if the repo moves.

4. **Ecosystem listing** beyond your own README is governed by **Vercel/skills.sh** (telemetry, audits). SkillCodex does not control leaderboard position; quality and installs drive visibility over time.

---

## 2. npm (programmatic package)

### When to publish

Publish when `skills/` or package exports change and consumers need a new **semver** (`package/package.json` `version`).

### Maintainer checklist

1. From repo root:

   ```bash
   cd package && pnpm install && pnpm run sync && pnpm run validate && pnpm run build
   ```

2. Bump **`package/package.json`** `version` (e.g. `1.2.0`) and update root [CHANGELOG.md](../CHANGELOG.md) with a `## [x.y.z] - date` section.

3. **Publish** (requires npm login and permission on `@skillcodex` scope):

   ```bash
   cd package && npm publish --access public
   ```

   Use `pnpm publish` if your org standardizes on pnpm for publish - either is fine if the tarball is the same.

4. **GitHub Release** (optional but nice): tag `v1.2.0` and paste changelog summary so `skills.sh` badge / links stay aligned with Git tags.

### What npm contains

- All skills as **subpath imports**: `@skillcodex/skills/<slug>`
- `skills-index.json` and full `SKILL.md` text in each module (see [package README](../package/README.md))

---

## 3. Keeping both in sync

| Change | GitHub | npm |
|--------|--------|-----|
| New `skills/foo/SKILL.md` | Commit + push | Run `pnpm run sync`, bump version, `npm publish` |
| Docs only under `docs/` | Commit + push | No npm publish unless you want README on npmjs updated from package README |
| `references/*.md` only | Commit + push | Same as docs - republish if packaged copies matter (sync copies skills into `package/skills/`) |

`pnpm run sync` copies each `skills/<slug>/SKILL.md` into `package/skills/<slug>/` and regenerates `src/index.ts` and `package.json` **exports**.

---

## 4. Related repo docs

- [install-skills-cli.md](./install-skills-cli.md) - `npx skills add` vs npm
- [skills-discovery.md](./skills-discovery.md) - leaderboard context
- [skills-coverage-matrix.md](./skills-coverage-matrix.md) - which skill covers which concern
- [references/skills-ecosystem.md](../references/skills-ecosystem.md) - Vercel CLI vs agent-skills bundle
