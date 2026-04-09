# GitHub Actions バックエンドデプロイ手順メモ

## 目的

- `main` への push で `prod` 環境へデプロイ
- `develop` への push で `dev` 環境へデプロイ
- デプロイ対象: API Gateway + Lambda（SAM/CloudFormation）

## 対象ワークフローファイル

- `.github/workflows/deploy-backend.yml`

## `backend/contact-api-template.yaml` は必要か

- 必要です。
- 手動デプロイを行わない場合でも、GitHub Actions が SAM/CloudFormation デプロイ時に参照します。

## 起動条件（必要な変更時のみ自動デプロイ）

以下のファイルに変更があった場合のみ、ワークフローが起動します。

- `backend/contact-api-template.yaml`
- `backend/lambda/**`
- `.github/workflows/deploy-backend.yml`

そのため、フロントエンドのみの変更ではバックエンドデプロイは起動しません。

## Layer 更新方針

- 依存関係は Lambda Layer（`ContactDependenciesLayer`）で管理します。
- ワークフローは以下の変更を監視します。
  - `backend/lambda/requirements.txt`
- Layer ビルド（`pip install ... -t backend/layer/python`）は以下の時のみ実行されます。
  - requirements が変更されたとき
  - またはキャッシュが存在しない初回実行時

これにより、依存関係変更時のみ Layer を更新します。

## 必要な GitHub Environments

以下の2環境を作成します。

- `dev`
- `prod`

## 必要な Secrets（環境ごと）

- `AWS_ROLE_ARN`
- `SOURCE_EMAIL`
- `DESTINATION_EMAIL`

## 必要な Variables（環境ごと）

- `AWS_REGION`
- `ALLOWED_ORIGIN`

## AWS 設定の参照先

AWS 側で必要な設定は以下に分離しています。

- `backend/AWS_SETUP_REQUIRED.md`

## 補足

- ワークフローから `EnvironmentName` パラメータを渡しています。
  - dev ジョブ -> `EnvironmentName=dev`
  - prod ジョブ -> `EnvironmentName=prod`
- リソース名は環境ごとに分離され、衝突しない構成です。
  - API: `suekichi-contact-api-dev|prod`
  - Lambda: `suekichi-contact-lambda-dev|prod`
  - Layer: `suekichi-contact-layer-dev|prod`
