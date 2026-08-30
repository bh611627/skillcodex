---
name: edge-runtime-handbook
description: Next.js Edge Runtime limits - what runs where and how to split Node-only code
tags:
  - edge
  - nextjs
  - runtime
version: 1.1.0
category: development
outcomes:
  - List of APIs unavailable on Edge in user code paths
  - Split plan for Prisma native fs crypto node APIs
  - Middleware vs edge route handler placement decision
stack:
  - next
  - typescript
last_reviewed: 2026-05-20
risk_level: low
tools_allowed: read-only
requires_user_approval: false
compatibility:
  - generic-markdown
  - skills-sh
  - cursor
  - claude-code
  - antigravity
  - codex
  - github-copilot
  - windsurf
  - gemini-cli
  - cline
  - amp
  - opencode
  - roo
  - goose
  - kilo
  - kiro-cli
  - droid
  - openclaw
  - trae
references:
  - references/stack-nextjs.md
  - references/skill-safety.md
---

# Instructions

## When to Use

- Use when deciding Edge vs Node for a Route Handler or middleware.
- Prefer `next-server-patterns` for general App Router placement.
- Prefer `auth-handbook` if Edge auth APIs are the blocker.

Explain **Edge vs Node** runtimes in **Next.js** for the user’s code. Always **verify against the installed Next version**.

### Decision matrix

| Workload | Prefer | Why |
|----------|--------|-----|
| Middleware auth gate (coarse) | Edge | Default; keep tiny |
| Prisma / native addons / `fs` | Node | Typical Edge blockers |
| Long-lived WS/SSE fan-out | Node (`realtime-handbook`) | Connection lifespan |
| Geo/header rewrite only | Edge | Low I/O |
| Heavy crypto / PDF / image ops | Node | CPU + APIs |

1. Flag imports: `fs`, native Prisma client, some `crypto` patterns, large WASM - usually **Node**.
2. **Middleware** defaults to Edge - keep fast; no heavy I/O or DB.
3. **Route segment config** `runtime = 'edge' | 'nodejs'` - justify per route.
4. **Env:** Edge often inlines `process.env` - secrets risk; public env only on Edge unless you know the deploy model.
5. **Split:** Edge validates + forwards to a Node Route Handler / internal API when needed.
6. **Observability:** many APM exporters are Node-only - split instrumentation (`observability-handbook`).

## Outcomes

- Table: file → current runtime → recommended runtime → blockers.

## Output Rules

Link to Next docs concepts by name; no fabricated API lists - say “verify against installed Next version”.

## Scope and boundaries

- **In scope:** runtime choice, import restrictions, split patterns.
- **Out of scope:** Cloudflare Workers specifics unless the user deploys there.

## Safety

- Read-only; warn on secret exposure on Edge.

## Troubleshooting

- **Prisma on Edge:** Data Proxy / driver adapter or move to Node - state tradeoffs.
- **Bundle too large for Edge:** move dependencies behind a Node route.
- **Middleware timeout:** shrink work; push DB to Node.

## Related skills

- [`next-server-patterns`](../next-server-patterns/SKILL.md) - Node vs Edge split
- [`server-caching-handbook`](../server-caching-handbook/SKILL.md) - edge-compatible caches
- [`auth-handbook`](../auth-handbook/SKILL.md) - session checks on Edge limits
- [`realtime-handbook`](../realtime-handbook/SKILL.md) - long-lived connections

**GitHub:** https://github.com/bh611627/skillcodex/tree/main/skills/edge-runtime-handbook/SKILL.md  
**npm:** https://www.npmjs.com/package/@skillcodex/skills
