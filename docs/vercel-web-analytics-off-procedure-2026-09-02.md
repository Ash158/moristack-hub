# Vercel Web Analytics / Speed Insights OFF 手順 (2026-09-02)

2026-09-02 セキュリティ監査の付随調査で判明した、MORISTACK 4 サイト (hub / call / plan / poko) の Vercel Web Analytics / Speed Insights 設定状況と OFF 手順。

## 0. 現状 (2026-09-02 Vercel API 取得)

`/v9/projects/{idOrName}` 経由で確認:

| Site | webAnalytics.enabledAt | hasData | speedInsights.dataReceivedAt |
|---|---|---|---|
| **moristack-hub** | 2026-08-23 (OFF 操作履歴なし) | True | 2026-08-19 |
| **app (call)** | 2026-08-08 | True | 2026-08-19 |
| **japan-trip-plan** | 2026-08-10 | True | 2026-08-19 |
| **poko-ai-tutor** (pause) | — | — | — (proxy.ts 503 で計測なし) |

**全 3 サイトで Web Analytics / Speed Insights が ON + 計測データ受信済み。**

## 1. 課金影響

| 機能 | Hobby | Pro |
|---|---|---|
| **Speed Insights** | 2,500 events/月 無料 | 10,000 events/月 |
| **Web Analytics** | **なし** (計測できない) | $100/月 / project |

MORISTACK は Pro plan (Vercel Hobby では Web Analytics 利用不可) と推定。**ON のままなら $100/月 × project 数**課金される。

- 3 サイト ON なら $300/月
- 過去誰かが 4 サイト ON にしていた場合 $400/月 (poko は pause 中なので $0)
- **森長 memory 2026-08-25 「hub 100 ドルするからやらない」** と矛盾 → 過去 OFF 操作が反映されていない / 記憶違いの可能性

## 2. hub の Web Analytics / Speed Insights を OFF にする手順

### 2.1 Vercel Dashboard 経由 (森長ブラウザ操作)

1. https://vercel.com/stsm158-8105s-projects/moristack-hub/settings/analytics を開く
2. 「Web Analytics」セクション → 「Disable」クリック
3. 確認ダイアログで「Disable」確定
4. 「Speed Insights」セクション → 「Disable」クリック
5. 確認ダイアログで「Disable」確定

完了後、`/v9/projects/moristack-hub` の `webAnalytics.enabledAt` / `speedInsights.id` が `null` になっているはず (Vercel API で再確認)。

```bash
rtk vercel api /v9/projects/moristack-hub 2>&1 | python3 -c "import json,sys; d=json.load(sys.stdin); print('webAnalytics:', d.get('webAnalytics')); print('speedInsights:', d.get('speedInsights'))"
# 期待: webAnalytics: None / speedInsights: None
```

### 2.2 Vercel CLI 経由 (Mavis 操作可能、要森長許可)

Vercel API list に `/speed-insights/toggle` あり。Web Analytics の toggle endpoint は list 結果にない (おそらく Dashboard のみ、または別 API)。

```bash
# Speed Insights toggle (hub のみ)
# 注意: 現状が OFF なら ON、ON なら OFF に toggle (冪等でない)
# 実行前に ON/OFF 状態確認必須
rtk vercel api /speed-insights/toggle --project moristack-hub  # 正確な syntax 要確認
```

**推奨**: 森長が Dashboard で操作 (2.1)。CLI は最終手段。

### 2.3 コード側で計測タグを削除 (最終手段)

```bash
# hub: src/app/layout.tsx から AnalyticsWithQaExclusion と SpeedInsights を削除
# + package.json から @vercel/analytics, @vercel/speed-insights 削除
# + npm uninstall
```

Dashboard 操作で十分なので非推奨。

## 3. call / plan の判断

| 選択肢 | メリット | デメリット |
|---|---|---|
| **A. 全部 OFF** (hub 方針に揃える) | $300/月 削減、メモリ整合 | 計測データ取得不能 (GSC + Speed Insights Hobby 枠で代替) |
| **B. call/plan だけ ON 維持** | 母数極小期の visitor データ保持 | $200/月 課金 |
| **C. 全部 ON 維持** | 計測データ継続 | $300/月 課金継続、hub メモリとの不整合 |

**推奨**: A (全部 OFF) — 1 人運用で母数極小 (Vercel Speed Insights Hobby 2,500/月枠で十分) のため、Web Analytics Pro の投資対効果低い。代替計測は Google Search Console + Speed Insights Hobby 枠。

## 4. Speed Insights Hobby 枠の計測確認

OFF にしても Speed Insights (Hobby 枠 2,500 events/月) は維持可能 = 森長 1 人運用で必要十分。Web Analytics だけ OFF にして、Speed Insights は Hobby 内で運用する選択肢も。

判断:
- Web Analytics だけ OFF (Speed Insights 維持) = $100/月 削減 × project 数
- Web Analytics + Speed Insights 両方 OFF = Speed Insights 計測も停止 (Performance データ取得不能)

## 5. 確認チェックリスト

- [ ] hub Web Analytics OFF (Vercel Dashboard または CLI)
- [ ] hub Speed Insights: Hobby 維持 / OFF 森長判断
- [ ] call Web Analytics: 森長判断 (推奨: OFF)
- [ ] call Speed Insights: 森長判断
- [ ] plan Web Analytics: 森長判断 (推奨: OFF)
- [ ] plan Speed Insights: 森長判断
- [ ] poko: pause 中、proxy.ts 503 で計測なし、再開時に再判断
- [ ] 4 サイト OFF 完了後、`/v9/projects/{id}` で `webAnalytics: None` 確認
- [ ] 課金反映確認: Vercel Dashboard の Billing セクションで $0 になっているか翌月確認

## 6. 関連

- 監査結果: topic memory `moristack-security-2026-09-02`
- 関連手順書: `docs/security-dns-hardening-2026-09-02.md` (DNS 硬化)
- Vercel Web Analytics 公式: https://vercel.com/docs/analytics/quickstart
- Vercel Speed Insights 公式: https://vercel.com/docs/speed-insights/quickstart

---

Last updated: 2026-09-02
Owner: 森長 (MORISTACK)
Verified: Vercel API `/v9/projects/{idOrName}` (2026-09-02 12:06 JST)
