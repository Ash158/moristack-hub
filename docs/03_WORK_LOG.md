# Work Log — MORISTACK (moristack.com)

時系列の作業履歴。現状のスナップショットは `docs/00_CURRENT_STATUS.md` を参照 (hub には現状ステータス doc 未作成のため、本ファイル単独運用)。

---

## 2026-09-02 — 4 サイト横断セキュリティ監査 + 修正

森長指示により、MORISTACK 4 サイト (hub/call/plan/poko) 横断監査を 4 worker 並列で read-only 実施、hub の Medium 6 件を修正。

### 検出 findings (hub)

- Medium 6件:
  - `X-Content-Type-Options: nosniff` 欠落 (MIME sniffing 抑止なし)
  - `Content-Security-Policy` 欠落 (XSS 被害拡大抑止なし)
  - `X-Frame-Options` / CSP `frame-ancestors` なし (clickjacking 対策なし)
  - `Referrer-Policy` なし (外部サイトへの流入時にパスがリファラで漏れる)
  - `Permissions-Policy` なし (camera/microphone/sensor API の抑止なし)
  - `POST /api/request` に rate limit なし (`RESEND_API_KEY` 設定時に `support@moristack.com` 経由で spam 送信リスク)

### 修正 push

- `next.config.mjs` の `headers()` に 5 ヘッダ追加 (CSP with Turnstile/og.moristack.com allowlist, X-Content-Type-Options nosniff, X-Frame-Options DENY, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy で camera/microphone/geolocation/payment/sensors 無効化)
- `public/.well-known/security.txt` 作成 (RFC 9116 準拠、Contact: support@moristack.com, Expires: 2027-09-02)
- `src/proxy.ts` (Next.js 16 新形式、旧 `middleware.ts` の後継) で `/api/request` IP 単位 rate limit (5 req/min, 50 req/day, 429 + Retry-After)。Vercel KV / Upstash 移行は TODO コメントで明記。
- `src/app/api/request/route.ts` に email ヘッダインジェクション対策 (CRLF strip + regex + 254 char cap)

### commit

- `c016a61`: feat(security): hub - add 5 defense-in-depth headers, security.txt, /api/request rate limit (main 直 push、Vercel auto-deploy)

### 本番確認 (Vercel auto-deploy 後)

- 5 ヘッダ全て付与確認 (`curl -I https://moristack.com`)
- `/.well-known/security.txt` → 200
- `/api/request` 連続 6 回 POST → 6 回目 429 (`{"error":"rate_limited"}`)
- email ヘッダインジェクション: CRLF 混入値 → 400 (CRLF strip + regex 不一致)

### 残作業 (森長側)

- DNS 硬化: `docs/security-dns-hardening-2026-09-02.md` 参照
- Web Analytics OFF: `docs/vercel-web-analytics-off-procedure-2026-09-02.md` 参照
- Vercel env 監査 (RESEND_API_KEY 設定判断、STRIPE/TURNSTILE テストキー混入チェック)
- hstspreload.org 登録 (`includeSubDomains; preload` 前提)

### 関連ドキュメント

- 4 サイト横断監査 topic memory: `~/.minimax/agents/mavis/memory/topics/moristack-security-2026-09-02.md`
- 関連 work log: `電話代行サービス/app/docs/03_WORK_LOG.md` / `Japan旅行プラン/docs/03_WORK_LOG.md`
- Next.js 16 rename learning: agent memory `Next.js 16 middleware.ts → proxy.ts rename は export 関数名も変更必要 (2026-09-02)`
