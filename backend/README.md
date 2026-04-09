# Backend (FastAPI)

## Setup

1. Create virtual environment (already created in this project):
   - `.venv`
2. Install dependencies:
   - `./.venv/Scripts/python.exe -m pip install -r requirements.txt`

## Run

- `./.venv/Scripts/python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`

## Endpoints

- `GET /health`
- `POST /api/contact`

## API Gateway + Lambda (CloudFormation)

CloudFormation (SAM) template is available at:

- `contact-api-template.yaml`

### Environment variables (Lambda)

- `SOURCE_EMAIL`: SES verified sender email
- `DESTINATION_EMAIL`: notification destination email
- `ALLOWED_ORIGIN`: CORS origin (e.g. `https://example.com`)
- `DRY_RUN`: `true` for local/dry-run, `false` for actual SES sending

### Deploy

```powershell
sam build -t contact-api-template.yaml
sam deploy --guided
```

### Local run

1. Copy `sam-local-env.example.json` to `sam-local-env.json` and edit values.
2. Start local API:

```powershell
sam local start-api -t contact-api-template.yaml --env-vars sam-local-env.json
```

3. Test request:

```powershell
curl -X POST "http://127.0.0.1:3000/contact" -H "Content-Type: application/json" -d "{\"type\":\"company\",\"companyName\":\"株式会社サンプル\",\"name\":\"山田 太郎\",\"email\":\"taro@example.com\",\"phoneNumber\":\"03-1234-5678\",\"inquiryType\":\"dev_web_system\",\"content\":\"お問い合わせ本文です。\"}"
```

### Frontend setting

Set API endpoint in frontend environment variable:

- `NEXT_PUBLIC_CONTACT_API_URL`

### Sample request

```json
{
  "name": "Taro Yamada",
  "email": "taro@example.com",
  "subject": "お問い合わせ",
  "message": "サービスについて詳しく知りたいです。"
}
```
