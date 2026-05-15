# What is SkillCodex?

Markdown skill library for React / Next agents.

- **GitHub:** https://github.com/bh611627/skillcodex
- **npm:** https://www.npmjs.com/package/@skillcodex/skills

| Need | Open |
|------|------|
| Format rules | [SKILL_STANDARD.md](./SKILL_STANDARD.md) |
| Build doc UI | [skills/skillcodex-browser-ui](./skills/skillcodex-browser-ui/SKILL.md) |
| Design + skeletons | [references/DESIGNSPEC.md](./references/DESIGNSPEC.md) |
| Icons | [references/icons-and-emoji.md](./references/icons-and-emoji.md) (react-icons; Emoji Mart apple set if user asks) |
| Stack | [references/react-stack.md](./references/react-stack.md) |
| Real vs mock data | [references/data-source.md](./references/data-source.md) |
| Distribution | [references/publishing.md](./references/publishing.md) |

UI builds: no backend. Use **real** skill data when the user gave a full command or already has `skills/`; add **mock seed** only when they have no data yet ([data-source.md](./references/data-source.md)). Ask stack once on greenfield if they did not say Next/pnpm.
