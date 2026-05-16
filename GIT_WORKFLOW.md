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

git add -p   # review hunks
git status   # confirm no .env, no dist/ unless you changed publish policy (dist is gitignored)
git commit -m "describe change"
git push -u origin feature/my-change
```

Open a **pull request** on GitHub into `main` (or merge locally if you are solo and prefer).

## What not to commit

- **Secrets:** see [SECURITY.md](./SECURITY.md)
- **`package/dist/`** - ignored; CI or maintainers run `pnpm run build` before `npm publish`
- **`node_modules/`**
- Editor-only paths under **`.cursor/`** (ignored)

## Releases (npm)

1. Bump `version` in `package/package.json`
2. `cd package && pnpm run sync && pnpm run build && pnpm run validate`
3. `npm publish` (from `package/` with npm logged in) when ready

## If you leaked a secret

Rotate the credential, then remove it from git history (e.g. `git filter-repo` or GitHub support). See [SECURITY.md](./SECURITY.md).
