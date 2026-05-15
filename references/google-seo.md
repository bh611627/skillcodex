# Google SEO + Search Console (2026)

Frontend-focused. Assumes **Next.js** for metadata and performance fixes.

## What still matters

- **Helpful content** that matches search intent (not keyword stuffing)
- **Indexable** pages: canonical URLs, no accidental `noindex`
- **Core Web Vitals** from **field data** (CrUX) - what Search Console’s experience report shows
- **Mobile** usability and readable layout

## Core Web Vitals (thresholds)

| Metric | Good | Poor |
|--------|------|------|
| **LCP** | ≤ 2.5s | > 4s |
| **INP** | ≤ 200ms | > 500ms |
| **CLS** | ≤ 0.1 | > 0.25 |

INP replaced FID. Use Search Console → **Experience → Core Web Vitals** for URL groups. Lab tools (Lighthouse) are for debugging - rankings lean on field data.

## Search Console workflows

1. **Pages** - what’s indexed, excluded, or failing
2. **Performance** - queries, clicks, CTR (allow ~2–3 days lag on fresh data)
3. **Sitemaps** - submit `sitemap.xml`; fix errors
4. **Core Web Vitals** - fix “Poor” templates first (usually layout, JS weight, hero images)
5. **Mobile usability** - tap targets, viewport, text size

## Next.js fixes that actually move CWV

| Issue | Fix |
|-------|-----|
| Slow LCP | `next/image`, priority on hero, WebP/AVIF, avoid lazy-loading above-the-fold hero |
| CLS | width/height on images, `next/font`, reserve space for ads/embeds |
| High INP | less client JS, smaller bundles, defer third-party scripts, Server Components |

## Metadata checklist

- Unique `<title>` per page (roughly 50–60 chars)
- Meta description that sells the click (~140–160 chars)
- One clear **H1**; logical **H2** outline
- Canonical URL set when duplicates exist
- Open Graph + Twitter cards for share pages
- `robots.txt` + sitemap linked in Search Console

## Structured data

Use JSON-LD where it fits (Article, FAQ, Product, etc.). Validate in Search Console → **Enhancements** after deploy.

## Don’t

- Promise #1 rankings
- Hide text or cloak
- Block rendering with huge client bundles when the page could be mostly static
