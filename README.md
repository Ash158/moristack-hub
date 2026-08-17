# moristack-hub

The MORISTACK apex brand hub. A small Next.js 16 site that lives at
`moristack.com` and replaces the previous "Choose your language" stub.

## Stack

- Next.js 16.3 (App Router) + React 19.2
- TypeScript 5
- Tailwind CSS 4
- `@vercel/analytics` + `@vercel/speed-insights`

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

- `/` — language gate + service list
- `/en` — English home
- `/ja` — 日本語ホーム
- `/en/services`, `/ja/services` — service directory
- `/en/about`, `/ja/about` — about page
- `/en/contact`, `/ja/contact` — contact page
- `/sitemap.xml`, `/robots.txt`

## Content

Edit `src/lib/services.ts` to add, edit, or retire a product.
Every user-facing string lives in one of the page files; copy is bilingual.

## See also

- `.minimax-context.md` — Mavis session context
