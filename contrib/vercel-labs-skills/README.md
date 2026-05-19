# Add this skill to [vercel-labs/skills](https://github.com/vercel-labs/skills)

**Full upstream + [skills.sh](https://www.skills.sh/) workflow** (fork, branch, minimal frontmatter, `pnpm format`, PR, releases): [GIT_WORKFLOW.md](../../GIT_WORKFLOW.md) (*Optional: PR to vercel-labs/skills*).

You **cannot** push to Vercel’s repo directly. You **fork** it, copy this bundle into your fork, then open a **pull request**.

**This SkillCodex repo** (`main`, feature branches, npm publish): see [**GIT_WORKFLOW.md**](../../GIT_WORKFLOW.md) at the repo root.

This folder mirrors what belongs **inside** the Skills CLI repo at `skills/web-design-guidelines/`.  
Upstream already has [`skills/find-skills`](https://github.com/vercel-labs/skills/tree/main/skills/find-skills); your PR **adds** `skills/web-design-guidelines`.

## Steps

### 1. Fork and clone

1. Open [vercel-labs/skills](https://github.com/vercel-labs/skills) → **Fork** (your GitHub account).
2. Clone **your fork** (replace `YOUR_USER`):

   ```bash
   git clone https://github.com/YOUR_USER/skills.git
   cd skills
   ```

### 2. Copy the skill from SkillCodex

From this SkillCodex repo on your machine (path may differ):

```bash
git checkout -b add-web-design-guidelines-skill

cp -r /home/bilalh/Documents/Skills-Agent/contrib/vercel-labs-skills/skills/web-design-guidelines skills/
```

Or if your SkillCodex clone is elsewhere, use that path instead of `/home/bilalh/Documents/Skills-Agent`.

### 3. Match repo conventions

- Compare your `skills/web-design-guidelines/SKILL.md` with [`skills/find-skills/SKILL.md`](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md) (YAML shape: they use `name` + `description` only; trim extra frontmatter if maintainers require strict parity).
- From the **fork root** run:

  ```bash
  pnpm format
  ```

  (Required by their [AGENTS.md](https://github.com/vercel-labs/skills/blob/main/AGENTS.md) for commits.)

### 4. Commit and push

```bash
git add skills/web-design-guidelines
git status   # confirm only intended files
git commit -m "add web-design-guidelines agent skill"
git push -u origin add-web-design-guidelines-skill
```

### 5. Open the pull request

- On GitHub: your fork → **Compare & pull request** → base: **`vercel-labs/skills`** branch **`main`**, compare: **`add-web-design-guidelines-skill`**.
- Or with GitHub CLI (from the `skills` folder, with `gh` authenticated):

  ```bash
  gh pr create --repo vercel-labs/skills --head YOUR_USER:add-web-design-guidelines-skill \
    --title "Add web-design-guidelines skill" \
    --body "$(cat <<'EOF'
## Summary
Adds `skills/web-design-guidelines` for documentation-style React UIs (SkillCodex-aligned).

## Source
Derived from https://github.com/bh611627/skillcodex (MIT).

## Test plan
- [ ] Skill folder exists at `skills/web-design-guidelines/SKILL.md`
- [ ] `pnpm format` passes
EOF
)"
```

Wait for **Vercel maintainers** to review; merge is up to them.

## Skill content note

The bundled **`SKILL.md`** is **React-first** (TypeScript, Tailwind, optional framer-motion in client only). For **`motion.div`** issues, prefer **`<div>` + Tailwind** as documented in the skill.
