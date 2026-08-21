# 日本語コピー・アーカイブ（HUB / moristack.com）

このディレクトリは 2026-08-20 の英語一本化で撤去した日本語コピーの保管庫です。
ビルドからは参照されません。文言の更新義務はありません（撤去時点のスナップショット）。

## ファイル

- `hub-content.json` — 旧 `src/lib/content.ts` の `JA` オブジェクトを JSON 化したもの。仕様書 §3.1 で削除した全 UI コピー（nav / hero / about / services / guides / founder / footer / contactEmail）を含む。

## なぜ JSON か

TypeScript として残すとビルド対象から外す設定（`tsconfig` の exclude や別エントリポイント等）が必要になり、外した瞬間に型が静かに腐る。JSON なら純粋なデータとして無害に保存でき、復活時に型を当て直せばよい。

## 復活手順

`docs/2026-08-20-english-only-and-poko-spec.md` §7.2 を参照。
