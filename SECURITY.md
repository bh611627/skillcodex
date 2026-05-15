# Security

This repo is a public skill library. It should not contain secrets.

## Do not commit

- API keys, tokens, or passwords (`.env`, `.npmrc`, credential files)
- Private keys (`.pem`, `.key`)
- Build artifacts under `package/dist/` (generated locally)

## Safe to include

- Public GitHub URLs and skill markdown
- Generic placeholders like `@your-org/my-ai-skills` in skill templates

If you accidentally commit a secret, rotate it immediately and remove it from git history.
