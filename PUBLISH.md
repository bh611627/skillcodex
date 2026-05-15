# Publish SkillCodex (GitHub + npm)

How to put this repo on GitHub and publish `@skillcodex/skills` like a clean [skills.sh](https://www.skills.sh/) entry.

---

## Part 1: GitHub

### 1. Create a repo

On GitHub: **New repository** → name e.g. `skillcodex` → public → no README (you already have one).

### 2. Push from your machine

```bash
cd /path/to/Skills-Agent

git init
git add .
git commit -m "Initial SkillCodex skill library"
git branch -M main
git remote add origin https://github.com/bh611627/skillcodex.git
git push -u origin main
```

Replace `YOUR_USER/skillcodex` with your account and repo name.

### 3. What people use on GitHub

Anyone can browse:

```
https://github.com/bh611627/skillcodex/tree/main/skills/content-creator/SKILL.md
```

Clone and copy skills into their agent:

```bash
git clone https://github.com/bh611627/skillcodex.git
```

---

## Part 2: npm / pnpm package

Package lives in the **`package/`** folder. Name: `@skillcodex/skills`.

### 1. One-time setup

- [npmjs.com](https://www.npmjs.com/) account
- Create npm org **`skillcodex`** (or change `name` in `package/package.json` to your scope)

```bash
npm login
```

### 2. Set your repo URL in package.json

Edit `package/package.json`:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/bh611627/skillcodex.git"
},
"homepage": "https://github.com/bh611627/skillcodex#readme",
"bugs": {
  "url": "https://github.com/bh611627/skillcodex/issues"
}
```

### 3. Build before publish

```bash
cd package
pnpm install
pnpm run sync    # refresh from ../skills/*/SKILL.md
pnpm run build   # creates dist/
```

### 4. Publish to npm

Scoped packages need public access:

```bash
cd package
pnpm publish --access public
```

Bump version for updates:

```bash
# edit version in package.json, then:
pnpm publish --access public
```

### 5. How users install (skills.sh-style one-liner)

```bash
pnpm add @skillcodex/skills
```

```ts
import contentCreator from "@skillcodex/skills/content-creator";
```

```ts
import { skills } from "@skillcodex/skills";
```

---

## Part 3: Keep GitHub and npm in sync

After you edit any `skills/*/SKILL.md`:

```bash
cd package
pnpm run sync
pnpm run build
git add ../skills package/src package/dist package/package.json
git commit -m "Update skills"
git push

cd package && pnpm publish --access public
```

---

## Part 4: List on skills.sh (optional)

[skills.sh](https://www.skills.sh/) is a separate directory. To appear there you typically:

1. Publish skills in a public GitHub repo (done above)
2. Follow their docs for `npx skills add <owner/repo>` compatibility

SkillCodex also ships as **npm** (`@skillcodex/skills`), which skills.sh-style sites do not always list. Your README is the canonical install page until you register elsewhere.

---

## Checklist

- [ ] GitHub repo public, README shows skill table + install commands
- [ ] `package/dist` built, not committed (only source + build on publish)
- [ ] `pnpm publish --access public` succeeded
- [ ] Test: `pnpm add @skillcodex/skills` in a fresh project
- [ ] Tags on GitHub release optional: `v1.0.0`
