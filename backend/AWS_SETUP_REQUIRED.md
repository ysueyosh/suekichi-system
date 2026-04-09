# AWS 設定項目（バックエンドデプロイ）

このファイルは、GitHub Actionsで `API Gateway + Lambda` を自動デプロイするために、AWS側で事前に設定が必要な項目のみをまとめています。

## 1. IAM OIDC ロール作成

GitHub Actions から AWS にアクセスするため、OIDC フェデレーション用ロールを作成します。

- ロール名例: `github-actions-suekichi-deploy-role`
- GitHub OIDC Provider: `token.actions.githubusercontent.com`
- ロール ARN は GitHub Secret `AWS_ROLE_ARN` に設定

### 信頼ポリシーで制限する項目

- 対象リポジトリ: `<OWNER>/<REPO>`
- 対象ブランチ: `main`, `develop`
- 必要に応じて `environment` 条件でも制限

## 2. ロールに付与する権限

最低限、以下のデプロイ関連権限が必要です。

- CloudFormation 操作
  - `cloudformation:CreateStack`
  - `cloudformation:UpdateStack`
  - `cloudformation:DescribeStacks`
  - `cloudformation:DescribeStackEvents`
  - `cloudformation:GetTemplateSummary`
  - `cloudformation:CreateChangeSet`
  - `cloudformation:DescribeChangeSet`
  - `cloudformation:ExecuteChangeSet`
  - `cloudformation:DeleteChangeSet`
- S3（SAMアーティファクト）
  - `s3:CreateBucket`
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucket`
- Lambda
  - `lambda:CreateFunction`
  - `lambda:UpdateFunctionCode`
  - `lambda:UpdateFunctionConfiguration`
  - `lambda:GetFunction`
  - `lambda:PublishLayerVersion`
- API Gateway
  - `apigateway:*`（または必要最小権限）
- IAM（CloudFormationでロール作成/更新が必要な場合）
  - `iam:CreateRole`
  - `iam:AttachRolePolicy`
  - `iam:PutRolePolicy`
  - `iam:PassRole`
- CloudWatch Logs
  - `logs:CreateLogGroup`
  - `logs:CreateLogStream`
  - `logs:PutLogEvents`
- SES（お問い合わせメール送信）
  - `ses:SendEmail`
  - `ses:SendRawEmail`

## 3. SES 設定

- `SOURCE_EMAIL` は SES で検証済みにする
- `DESTINATION_EMAIL` は通知先メールアドレス
- SES sandbox 中は送信先も検証済みが必要
- 本番運用は sandbox 解除申請を推奨

## 4. リージョン整合性

- `AWS_REGION`（GitHub Variable）と SES 検証リージョンを合わせる
- API Gateway / Lambda / SES を同一リージョンで運用するのが安全

## 5. GitHub に渡す値（AWS由来）

以下は AWS 設定後に GitHub Environment に登録します。

### Secrets（dev/prod それぞれ）

- `AWS_ROLE_ARN`
- `SOURCE_EMAIL`
- `DESTINATION_EMAIL`

### Variables（dev/prod それぞれ）

- `AWS_REGION`
- `ALLOWED_ORIGIN`

## 6. 動作確認（AWS視点）

- CloudFormation Stack 作成/更新が成功する
- Lambda が作成される
- API Gateway エンドポイントが作成される
- SES 送信が成功する
- CloudWatch Logs にエラーログが出力される
