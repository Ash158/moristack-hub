# moristack-hub

The MORISTACK apex brand hub. A small Next.js 16 site that lives at
`moristack.com` — the English-only top-of-funnel surface for the
MORISTACK brand (CALL and PLAN each run on their own product site).

## Stack

- Next.js 16.3 (App Router) + React 19.2
- TypeScript 5
- Tailwind CSS 4
- `@vercel/analytics` + `@vercel/speed-insights`
- Resend (transactional email via the `/api/request` route)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

Pushes to `main` deploy to production via Vercel. Preview deploys are
created for every PR.

## Routes

- `/` — apex home (hero + services + guides)
- `/about` — about / company
- `/contact` — contact (email only)
- `/guides` — hub guides index
- `/guides/[slug]` — individual guides
- `/request` — request form (posts to `/api/request`)
- `/api/request` — Resend-backed request handler
- `/opengraph-image` — generated OG image
- `/sitemap.xml`, `/robots.txt`

## Content

Edit `src/lib/content.ts` to add, edit, or retire a product or copy
block. Every user-facing string lives in this single content module
or in the page files that import it.

## See also

- `.minimax-context.md` — Mavis session context
