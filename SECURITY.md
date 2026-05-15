# Security

## Repo hygiene (this git repository)

This repo is public. It must not contain secrets.

**Do not commit**

- API keys, tokens, passwords (`.env`, `.env.*`, `.npmrc` with auth, credential JSON, `.netrc`)
- Private keys and certs (`.pem`, `.key`, `.p12`, `id_rsa`, keystores)
- Build output under `package/dist/` (generate locally with `pnpm run build`; it is listed in `.gitignore`)
- Cursor/IDE upload folders copied into the repo (`uploads/`, etc. — see root `.gitignore`)

**Safe to include**

- Public GitHub and npm URLs
- Skill markdown and references

If you commit a secret by mistake, rotate it immediately and remove it from git history.

## Skill threat model (agents)

Skills are **instructions**, not sandboxed programs. Risks include prompt injection, unsafe workflows, and hallucinated tool use. SkillCodex mitigates with curated content, required `## Safety` sections, frontmatter risk labels, and `pnpm run validate`.

Read:

- [TRUST.md](./TRUST.md) - ecosystem risks and SkillCodex controls (2026)
- [references/skill-safety.md](./references/skill-safety.md) - author and consumer checklist
