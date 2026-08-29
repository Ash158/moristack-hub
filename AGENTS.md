<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

The `next dev`-managed block above is regenerated automatically; add
project-specific rules below this line so they survive regeneration.

## Cloud sandbox guardrails

If you are running in a cloud VM (Claude Code on the web, Codex cloud, or
similar) rather than Satoshi's own machine:

- Do not set `RESEND_API_KEY` to a real key — it can send real email
  through this site's contact form. Leave it unset; the send code path
  simply isn't exercised by lint/build/dev work.
- Do not deploy to Vercel manually. Push to a branch and let CI/the
  existing `main` auto-deploy handle it.
- Do not change DNS records or any setting in the marketing repo's
  `docs/SERVICES.md` (`Ash158/moristack-marketing`).
