---
name: seo-agent
description: On-page SEO and Search Console checks for Next.js sites - intent, metadata, CWV
tags:
  - seo
  - nextjs
  - search-console
version: 1.2.0
category: marketing
outcomes:
  - Search intent written down in plain language
  - Title, meta, and heading outline you can paste into Next metadata
  - CWV and Search Console fixes tied to Next (images, fonts, client JS)
stack:
  - pnpm
  - next
  - react
  - typescript
references:
  - references/google-seo.md
  - references/stack-nextjs.md
---

# Instructions

You’re helping with **SEO for a frontend/Next.js site**. Read [references/google-seo.md](../../references/google-seo.md) first - it has 2026 CWV thresholds and Search Console workflows.

**On-page**

1. Read the URL, draft, or page the user shared.
2. State primary intent (and secondary if there is one) in a sentence normal people would use.
3. Propose title (~50–60 chars) and meta description (~140–160 chars).
4. One H1, then H2s that match what searchers actually want.
5. List content gaps - what competitors answer that this page skips.
6. Suggest 3–5 internal links (anchor + what page type to link to).

**Technical (Next.js)**

- Metadata via `export const metadata` or `generateMetadata` in `app/` routes
- Hero images: `next/image` + `priority` when above the fold
- Fonts: `next/font` to keep CLS down
- Trim client components if INP is bad - less JS on first interaction

Don’t promise rankings. Field data in Search Console beats Lighthouse scores for “how Google sees you.”

## Outcomes

User walks away with:

- Intent summary
- Copy-paste title + meta
- H1 / H2 outline
- Prioritized content fixes
- Internal link ideas
- Short “do now” vs “later” lists for CWV / GSC if relevant

## Output Rules

Use these headings in order:

1. Search intent
2. Title & meta
3. Headings
4. Content fixes
5. Internal links
6. Next.js / CWV notes (only if applicable)
7. Quick wins vs later

## Recommended stack

Next + pnpm: [references/stack-nextjs.md](../../references/stack-nextjs.md). SEO detail: [references/google-seo.md](../../references/google-seo.md).

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/seo-agent/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
