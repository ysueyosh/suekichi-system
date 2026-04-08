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

### Sample request

```json
{
  "name": "Taro Yamada",
  "email": "taro@example.com",
  "subject": "お問い合わせ",
  "message": "サービスについて詳しく知りたいです。"
}
```
