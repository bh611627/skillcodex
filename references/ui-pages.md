# UI pages (SkillCodex browser)

**Strict:** UI only. No API, DB, or auth. **Data:** see [data-source.md](./data-source.md) - use real `skills/` when the user provided them; add mock in `src/data/skills.ts` only when there is no source yet.

Fill gaps vs skills.sh: show **outcomes**, GitHub + npm links, clone/copy actions. **No fake install counts.**

## 1. Home (`/`)

- Grid of DocCards (hybrid with list on narrow screens)
- Search input (filters in-memory skill list client-side)
- Filter dropdown by tag/category (client-side)
- Pagination with **URL** `?page=2&q=seo&tag=marketing`
- ThemeToggle in nav
- DocCardSkeleton grid until skill list is ready (loading parse or fetch from local files)
- Nav icons via react-icons ([icons-and-emoji.md](./icons-and-emoji.md))
- Sticky minimal header: logo, nav links, theme toggle

## 2. Skill detail (`/skills/[slug]`)

- Centered markdown reader (react-markdown + remark-gfm)
- Header: title, description, tags, version, category, **outcomes list**
- Right rail (desktop) or stacked (mobile):
  - Copy Skill (clipboard + toast)
  - Use Skill (toast + show GitHub clone path or copy path)
  - Metadata box: GitHub path, stack pills
- DetailSkeleton until markdown content loads
- GitHub-style code blocks in prose

## 3. Create skill (`/create`)

Split layout (stack on mobile):

**Left form (labels required, focus-visible):**

- name, description, tags, instructions, output format

**Right:**

- Live markdown preview from form state
- Inline validation messages
- Toast on "Export markdown" / "Copy"

No backend save. Optional: download .md file client-side only.

## 4. Guidelines (`/guidelines`)

- Doc layout explaining Web Interface Guidelines
- Sections from [web-interface-guidelines](../skills/web-interface-guidelines/SKILL.md) themes
- Same spacing/tokens as rest of site

## Data shape (mock seed or real records)

```ts
export type SkillRecord = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  category: string;
  version: string;
  outcomes: string[];
  stack: string[];
  markdown: string; // full SKILL.md body or file content
  githubPath: string;
  githubUrl: string; // https://github.com/bh611627/skillcodex/tree/main/skills/<slug>/SKILL.md
  npmUrl: string; // https://www.npmjs.com/package/@skillcodex/skills
  cloneCommand: string; // git clone https://github.com/bh611627/skillcodex.git
  installCommand: string; // pnpm add @skillcodex/skills
};
```

**Prefer:** load from repo `skills/*/SKILL.md` when this library is in the project. **Else:** seed mock per [data-source.md](./data-source.md).

## Routing (Next.js)

```
src/app/page.tsx
src/app/skills/[slug]/page.tsx
src/app/create/page.tsx
src/app/guidelines/page.tsx
```

Use `next/link` for nav. Use `useSearchParams` for pagination/filters on home.
