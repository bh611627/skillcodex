# Git workflow (SkillCodex)

## Branches

| Branch | Use |
|--------|-----|
| **`main`** | Default; matches GitHub; should stay deployable and documentation-accurate. |
| **`feature/<short-name>`** | New skills, refactors, or doc overhauls (e.g. `feature/web-design-tweaks`). |
| **`fix/<short-name>`** | Small corrections (typos, links, SECURITY-related ignores). |

Full map: [REPO_LAYOUT.md](./REPO_LAYOUT.md). Symbols like `+1 !17 ?4` in the shell: [REPO_LAYOUT.md § Git status symbols](./REPO_LAYOUT.md#git-status-symbols-common-shells).

## Typical change (skills + npm package)

```bash
git checkout main
git pull origin main
git checkout -b feature/my-change

# Edit skills/*/, references/*, package when needed
cd package && pnpm install && pnpm run sync && pnpm run build && pnpm run validate
cd ..
pnpm export-skills-sh

git add -p   # review hunks
git status   # confirm no .env, no dist/ unless you changed publish policy (dist is gitignored)
git commit -m "describe change"
git push -u origin feature/my-change
```

Open a **pull request** on GitHub into `main` (or merge locally if you are solo and prefer).

## Optional: PR to [vercel-labs/skills](https://github.com/vercel-labs/skills) (not required for SkillCodex)

**You do not need an upstream fork** to ship SkillCodex or install from this repo (`npx skills add https://github.com/bh611627/skillcodex --skill <slug>` per [skills.sh/docs](https://www.skills.sh/docs)).

When you choose to **offer a skill upstream** to Vercel’s **skills** CLI maintainers:

1. **Fork** `vercel-labs/skills` on GitHub (this org’s fork: [bh611627/skills](https://github.com/bh611627/skills)).
2. **Clone your fork** in a separate directory (not this repo), then create a **feature branch** - do not commit directly on the fork’s `main`.
3. **Copy** the skill from SkillCodex: `skills/<slug>/` or the generated mirror `skills-sh-catalog/skills/<slug>/`.
4. **Ship the same first-class `SKILL.md` the skills CLI ecosystem expects** (authoritative spec: [vercel-labs/skills README - Creating Skills](https://github.com/vercel-labs/skills#creating-skills); reference bundle: [skills/find-skills/SKILL.md](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)):
   - YAML frontmatter on that surface: **`name`** and **`description`** (optional `metadata.internal` for hidden skills). Your **SkillCodex** originals keep the full envelope (`tags`, `outcomes`, `version`, …) here; the fork PR is a **targeted export** of the instruction body, not a downgrade of your catalog.
   - One folder per skill: `skills/<kebab-name>/SKILL.md`.
   - Repo-root **`references/`** on **[bh611627/skills](https://github.com/bh611627/skills)** mirrors this repo so `../../references/...` links keep working—your fork stays a complete, self-owned install target.
5. **Automation:** from SkillCodex root, `pnpm export-skills-fork-layout /tmp/out` writes a **publish-ready tree** (`skills/*` in the CLI-standard frontmatter shape, plus `references/`) with GitHub and raw URLs **repointed to your `bh611627/skills` repo**. Copy `/tmp/out/*` into your fork clone, run **`pnpm format`** at the fork root, then commit as yours.
6. At the **fork root**: `pnpm install`, **`pnpm format`**, commit, push, open a PR to `vercel-labs/skills` `main`. Prefer **one skill per PR** unless a maintainer asked otherwise. Example path in this repo: [contrib/vercel-labs-skills](./contrib/vercel-labs-skills/README.md).

## What not to commit

- **Secrets:** see [SECURITY.md](./SECURITY.md)
- **`package/dist/`** - ignored; CI or maintainers run `pnpm run build` before `npm publish`
- **`node_modules/`**
- Editor-only paths under **`.cursor/`** (ignored)

## Releases (npm + skills.sh context)

1. Bump `version` in `package/package.json` and update [CHANGELOG.md](./CHANGELOG.md).
2. `cd package && pnpm run sync && pnpm run build && pnpm run validate`
3. `npm publish` (from `package/` with npm logged in) when ready.

**skills.sh:** there is no second upload step for the public directory - see [docs/publishing-skills-sh-and-npm.md](./docs/publishing-skills-sh-and-npm.md) and [skills.sh/docs](https://www.skills.sh/docs).

**Git tag (SkillCodex release):** after `main` is ready, e.g. `git tag -a v1.2.0 -m "SkillCodex 1.2.0" && git push origin v1.2.0`, then add a **GitHub Release** from that tag if you want release notes on GitHub.

## If you leaked a secret

Rotate the credential, then remove it from git history (e.g. `git filter-repo` or GitHub support). See [SECURITY.md](./SECURITY.md).
