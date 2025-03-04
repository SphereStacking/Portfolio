---
title: プロジェクト
---

<script setup>
import SkillIcon from '../.vitepress/components/SkillIcon.vue'
</script>

# プロジェクト一覧

## 某 中小企業DX支援SaaS企業

### 中小企業DX支援プラットフォームの開発

**期間:** 2023/08 ～ 現在  
**概要:** ビジネスマッチング、チャット機能、安否確認ホームページ、福利厚生サイトなど、複数の機能追加とバグ修正に携わり、DX推進を支援しています。

| 技術スタック                         | <div class="flex flex-wrap gap-1"><SkillIcon skill="fuelphp" /> <SkillIcon skill="laravel" /> <SkillIcon skill="vue" /> <SkillIcon skill="go" /> <SkillIcon skill="nuxt" /> <SkillIcon skill="vuetify" /> <SkillIcon skill="docker" /> <SkillIcon skill="aws" /></div> |
|--------------------------------------|--------------------------------------------------------|
| 規模感                               | 6万社(22万人)                                         |
| チーム                               | 25人                                                   |
| 職務                                 | 開発担当                                              |
| 担当業務                             | 開発                                                   |

### メール配信共通基盤開発 (2024/05 ～ 2024/010)

**期間:** 2024/03 ～ 2024/10  
**概要:** コアシステムに内包されていたメール配信機能のリプレイスに対応。設計が完了した段階でプロジェクトに参画しました。特定のシステムに依存していたことや、パフォーマンス面への考慮、拡張性が不足している点を指摘  
**詳細:** その後、データベース設計の見直しや、現行の処理件数の数値化、並列処理の導入などを提案し、パフォーマンスの最適化に向けた改善を行っています。

| 技術スタック                             | <div class="flex flex-wrap gap-1"><SkillIcon skill="laravel" /> <SkillIcon skill="sendgrid" /> <SkillIcon skill="aws" /> <SkillIcon skill="aws-sqs" /> <SkillIcon skill="aws-lambda" /> <SkillIcon skill="docker" /></div> |
|------------------------------------------|----------------------------------------------------|
| 規模感                                   | 10万件/日                                           |
| チーム                                   | 4人                                                 |
| 職務                                     | 開発担当                                            |
| 担当業務                                 | 開発 / テスト / パフォーマンスチューニング           |

### リポジトリ内の秘匿情報の移行対応

**期間:** 2023/09 ～ 2024/04  
**概要:** リポジトリに直書きされていた秘匿情報をマスクし、環境変数に移行することでセキュリティ強化を実施しました。  
**詳細:** 影響範囲の少ない箇所から段階的にリリース計画を策定し、ユーザーへの影響やバグを発生させることなく、すべての秘匿情報の移行を完了させました。

| 技術スタック         | <div class="flex flex-wrap gap-1"><SkillIcon skill="laravel" /> <SkillIcon skill="aws" /> <SkillIcon skill="python" /></div> |
|----------------------|----------------------|
| 規模感               | 全体で約900件         |
| チーム               | 5人                 |
| 職務                 | 作業リーダー        |
| 担当業務             | 開発                 |

## 某 宇宙地上システム エンジニアリング企業

### 企業HPのリニューアル

**期間:** 2022/10 ～ 2022/11  
**概要:** 既存の企業HPは生のHTMLで作成されており、デザインが非常に古く、不正サイトのような印象を与えていました。これにより、企業の信頼性が損なわれていたため、ブランディング強化を目的に、サイトのリニューアルを提案・実施しました。

| 技術スタック   | <div class="flex flex-wrap gap-1"><SkillIcon skill="php" /> <SkillIcon skill="wordpress" /></div> |
|----------------|-----------------|
| 規模感         | 小規模           |
| チーム         | 2人             |
| 職務           | 開発補助        |
| 担当業務       | 技術選定 / 要件ヒアリング / 開発 |

### 民間小型衛星 管制WEBサービス開発

**期間:** 2022/03 ～ 2022/09  
**概要:** 既存のAPIサーバーを基盤に、フロントエンド開発を担当しました。WebSocketを活用し、リアルタイムで受信した衛星の監視データを工学値に変換し、画面上に表示する機能を実装しました。

| 技術スタック                   | <div class="flex flex-wrap gap-1"><SkillIcon skill="angular" /> <SkillIcon skill="docker" /> <SkillIcon skill="bootstrap" /> <SkillIcon skill="winui" /> <SkillIcon skill="wpf" /></div> |
|--------------------------------|-----------------------------------------|
| 規模感                         | 中規模                                   |
| チーム                         | 1人(+他社4人)                            |
| 職務                           | 開発担当                                |
| 担当業務                       | 要件ヒアリング / 開発                   |

### 衛星試験装置の制御SW開発

**期間:** 2021/04 ～ 2023/07  
**概要:** 計測装置を事前に設定したパラメータで自動制御するソフトウェアの開発を担当しました。通信プロトコルの策定を行い、接点信号を用いた制御と通信制御の双方を実装しました。

| 技術スタック         | <div class="flex flex-wrap gap-1"><SkillIcon skill="windows" /> <SkillIcon skill="sqlserver" /> <SkillIcon skill="dotnet" /> <SkillIcon skill="cs" /></div> |
|----------------------|-------------------------------|
| 規模感               |                                 |
| チーム               | 4人(+他社10人)                  |
| 職務                 | 開発担当                       |
| 担当業務             | 基本設計 / 詳細設計 / 開発 / テスト仕様書の作成 / テスト実施 |

### 社内業務支援WEBサービスの開発

**期間:** 2020/04 ～ 2023/07  
**概要:** 社内環境の整備が不十分で、管理コストが増大していたため、上層部に改善案を提案しました。業務フロー全体の見直しを行い従来は紙やExcelで管理されていた申請書、資産管理、文書管理、プロジェクト管理、案件管理などをデジタル化した基幹WEBシステムを開発し、社内工数の大幅な削減を実現しました。

| 技術スタック                                 | <div class="flex flex-wrap gap-1"><SkillIcon skill="windows" /> <SkillIcon skill="postgresql" /> <SkillIcon skill="laravel" /> <SkillIcon skill="vue" /> <SkillIcon skill="aws" /> <SkillIcon skill="docker" /> <SkillIcon skill="tailwind" /></div> |
|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| 規模感                                       | 100人程が使用                                                                                                           |
| チーム                                       | 1人                                                     |
| 職務                                         | プロジェクトリーダー / 開発担当                        |
| 担当フェーズ                                 | 要件定義 / プログラミング / システムメンテナンス / 機能追加 / システム改修 / ユーザーからの問い合わせ対応 / 障害対応 |

### ロケット射場設備 民間小型ロケット管制整備

**期間:** 2020/04 ～ 2023/07  
**概要:** 射場全体の整備を請け負い、開発を行った。SW開発を担当しました。SW開発は2社のベンダーとの連携が必要であり、そのための調整やコミュニケーションを行いつつ開発を行いました。

| 技術スタック         | <div class="flex flex-wrap gap-1"><SkillIcon skill="windows" /> <SkillIcon skill="dotnet" /> <SkillIcon skill="cs" /></div> |
|----------------------|--------------------------------------------------------------------------------------------------------------------------|
| 規模感               | 4拠点 請負                                                                                                           |
| チーム               | 10人+(2社ベンダー)                                                                                                  |
| 職務                 | 開発                                                                                                               |
| 担当業務             | 技術選定 / ベンダーコントロール / 要件定義書の作成 / 基本設計書の作成 / 詳細設計書の作成 / 開発 / テスト仕様書の作成 / テスト実施 / 機能追加 / システム改修 |

### 新規地上局整備に伴う人工衛星追跡 管制ソフト開発

**期間:** 2019/06 ～ 2021/10  
**概要:** SW開発の初期段階から参画し、工場試験までを担当する予定でしたが、機能追加や調整作業にも積極的に取り組みました。その結果、客先から高く評価され、インテグレーション試験ではSW部門の現場リーダーを任されました。試験手順書の作成、現場対応、そして試験計画の立案から実施までを主導しました。

| 技術スタック                                         | <div class="flex flex-wrap gap-1"><SkillIcon skill="windows" /> <SkillIcon skill="dotnet" /> <SkillIcon skill="cs" /> <SkillIcon skill="cpp" /></div> |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| 規模感                                               | 1拠点 請負                                                                                                           |
| チーム                                               | 3人+他社20人                                                                                                       |
| 職務                                                 | 開発担当、インテグレーション試験 SW現場責任者 |
| 担当業務                                             | 詳細設計 / 開発 / テスト仕様書の作成 / テスト実施 / システムメンテナンス / 機能追加 / ユーザーからの問い合わせ対応 / 障害対応 |

### 人工衛星追跡局 保守/運用/開発/SW・HW更新

**期間:** 2016/05 ～ 2023/07  
**概要:** 30年運用されているシステムのHW更新に伴うSWの更新作業を実施した。監視制御信号を接点からLAN信号への変更に伴う通信プロトコルの変更  
監視衛星追加にともなうシステムアップデート対応

| 技術スタック         | <div class="flex flex-wrap gap-1"><SkillIcon skill="linux" /> <SkillIcon skill="cpp" /> <SkillIcon skill="cs" /></div> |
|----------------------|--------------------------------------------------------------------------------------------------------------------------|
| 規模感               | 5拠点 請負                                                                                                           |
| チーム               | 2人+他社20人                                                                                                       |
| 職務                 | 開発担当                                                                                                           |
| 担当業務             | システムメンテナンス / 機能追加 / システム改修 / テスト仕様書の作成 / テスト実施 / ユーザーからの問い合わせ対応 / 障害対応 |
