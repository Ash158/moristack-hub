# DNS 硬化手順書 (2026-09-02)

MORISTACK 4 サイト (hub / call / plan / poko) 共通の DNS 硬化手順。
2026-09-02 セキュリティ監査 (4 サイト横断) の残作業として森長側で順次進める。

## 0. 前提

| 項目 | 値 |
|---|---|
| ドメインレジストラ / DNS | Vercel DNS (`stsm158-8105s-projects` team) |
| メール受信 (MX) | ImprovMX (`mx1/mx2.improvmx.com`) |
| メール送信 (個人) | Google Workspace (`_spf.google.com` include) |
| 自動送信メール | Resend (`resend._domainkey.moristack.com` DKIM 署名済) |
| 監査実施日 | 2026-09-02 |
| 関連 | topic memory `moristack-security-2026-09-02` |
| 4 サイト production HTTPS | 確認済 (mixed content なし) |

## 1. SPF 硬化 (`~all` → `-all`)

### 現状 (2026-09-02 確認)

```bash
$ dig TXT moristack.com +short
"v=spf1 include:spf.improvmx.com include:_spf.google.com ~all"
```

`~all` = softfail (なりすましを警告マークするが届ける)。
`-all` = hard fail (なりすましを SPF 評価で拒否)。

### 変更手順 (Vercel DNS)

1. https://vercel.com/stsm158-8105s-projects/stsm158-8105s.com (または moristack-hub プロジェクトの DNS タブ) を開く
2. TXT record `moristack.com` を以下に更新:

   ```
   v=spf1 include:spf.improvmx.com include:_spf.google.com -all
   ```

3. 保存 → 反映確認

```bash
dig TXT moristack.com +short
# 期待: "v=spf1 include:spf.improvmx.com include:_spf.google.com -all"
```

### リスクと推奨

- 既存 SPF pass していたメールが突然 fail する可能性あり (例: Resend の SPF include 漏れ、第三者経由送信)
- **推奨**: `-all` 化前に 1-2 週間 `~all` で運用し、Resend dashboard / Gmail 送信元ログ / DMARC rua レポートで SPF 失敗率を監視
- 失敗率 < 1% であれば `-all` に進める

## 2. DMARC 段階移行 (`p=quarantine` → `p=reject`)

### 現状 (2026-09-02 確認)

```bash
$ dig TXT _dmarc.moristack.com +short
"v=DMARC1; p=quarantine; rua=mailto:support@moristack.com"
```

### 段階移行計画

| フェーズ | 期間 | ポリシ | 目的 |
|---|---|---|---|
| 1 (現) | 1-3 ヶ月 | `p=quarantine` | なりすましを spam フォルダへ隔離、レポートで失敗率観測 |
| 2 | quarantine で失敗率 < 1% 確認後 | `p=reject` | なりすましを完全拒否 |

`rua=mailto:support@moristack.com` で aggregate レポート (日次 / 送信元ドメイン単位) を受信。Gmail で定期的に確認、失敗率が許容範囲 (< 1%) であれば `p=reject` に進める。

### 変更手順 (Phase 2: `p=reject` 移行時)

1. 同じ Vercel DNS タブ
2. TXT record `_dmarc.moristack.com` を以下に更新:

   ```
   v=DMARC1; p=reject; rua=mailto:support@moristack.com; ruf=mailto:support@moristack.com
   ```

3. 保存 → 反映確認

```bash
dig TXT _dmarc.moristack.com +short
# 期待: "v=DMARC1; p=reject; rua=mailto:support@moristack.com; ruf=mailto:support@moristack.com"
```

### 推奨

- `ruf` (forensic report) を追加すると、なりすまし試行の詳細 (From / To / 件名 / SPF / DKIM 結果) が届く
- 移行タイミング目安: **2026-12 頃** (1-3 ヶ月 quarantine 運用後)
- 失敗率モニタリング: Gmail `support@moristack.com` で `dmarc-*@example.com` からのレポート確認 (または `dig` で rua レポート受信先確認後、MxToolbox / Postmark DMARC digester で分析)

## 3. HSTS Preload 登録

### 現状 (2026-09-02 確認、4 サイト production)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

`includeSubDomains` および `preload` フラグ付き = 登録要件を満たす。

### 登録手順

1. https://hstspreload.org を開く
2. `moristack.com` を入力 (apex ドメイン)
3. 「Check status and eligibility」クリック
4. 確認ダイアログで「I understand that I can never remove this subdomain from the preload list. Once added, it cannot easily be undone.」をチェック + ドメイン入力
5. 申請送信 → **数日〜数週**で Chrome / Firefox / Safari / Edge の preload list 入り

**重要**: `includeSubDomains` フラグ付きなので、申請は **apex (`moristack.com`) のみ**で OK。サブドメイン (`call.`, `plan.`, `poko.`) も自動的に preload 対象。

### リスク

- 一度 preload 入りすると、6 ヶ月以内に取り下げ不可
- HTTPS-only が前提 (mixed content があると接続不可)
- 監査時確認済: 4 サイト全 HTTPS 化済、mixed content なし

### 確認方法 (申請受理後)

- Chrome: `chrome://net-internals/#hsts` で `moristack.com` 検索 → "preloaded" 表示
- Firefox: about:config で `network.stricttransportsecurity.preloadlist` true 確認
- 外部: https://hstspreload.org で `moristack.com` 検索 → "Is preloaded: Yes"

## 4. CAA (確認のみ、変更不要)

```bash
$ dig CAA moristack.com +short
0 issue "sectigo.com"
0 issue "letsencrypt.org"
0 issue "pki.goog"
```

主要 CA 全て許可済。Vercel の自動証明書発行 + 将来の CA 切替に対応できる構成。

## 5. 実施チェックリスト

- [ ] SPF `~all` → `-all` 反映 (推奨: 1-2 週間 `~all` 監視後)
- [ ] DMARC `p=quarantine` 1-3 ヶ月運用後 `p=reject` 移行
- [ ] DMARC `ruf=mailto:support@moristack.com` 追加 (任意、forensic report)
- [ ] hstspreload.org 申請 (apex `moristack.com` のみ、`includeSubDomains` で 4 サイトカバー)
- [ ] 申請受理確認 (`chrome://net-internals/#hsts` で "preloaded" 表示)
- [ ] Google Search Console で HSTS 確認 (optional)
- [ ] DNS 変更後、`support@moristack.com` で 4 サイト (hub / call / plan) からのメール送受信テスト

## 6. ロールバック

各変更は Vercel DNS の変更履歴から復元可能。緊急時は以下:

- SPF revert: `v=spf1 include:spf.improvmx.com include:_spf.google.com ~all`
- DMARC revert: `v=DMARC1; p=quarantine; rua=mailto:support@moristack.com`
- HSTS preload: 申請取り消しは 6 ヶ月待つ (preload list 性質上、即時取り下げ不可)

## 7. 参考リンク

- 監査結果: topic memory `moristack-security-2026-09-02` (`/Users/satoshi/.minimax/agents/mavis/memory/topics/moristack-security-2026-09-02.md`)
- MDN HSTS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
- hstspreload.org: https://hstspreload.org
- DMARC 仕様: https://www.rfc-editor.org/rfc/rfc7489
- SPF 仕様: https://www.rfc-editor.org/rfc/rfc7208
- Google DMARC digester: https://dmarc.postmarkapp.com/

## 8. 実施日記録

| 項目 | 実施日 | 実施者 | 結果 |
|---|---|---|---|
| SPF `-all` | 未 | — | — |
| DMARC `p=reject` | 未 (Phase 2、2026-12 目安) | — | — |
| HSTS preload 申請 | 未 | — | — |

---

Last updated: 2026-09-02
Owner: 森長 (MORISTACK)
Audit: https://github.com/Ash158/moristack-hub (commit c016a61 / call 7804b53 / plan 91f78aa)
