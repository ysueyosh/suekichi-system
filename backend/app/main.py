from datetime import UTC, datetime
from uuid import uuid4

from fastapi import FastAPI

from .schemas import ContactRequest, ContactResponse

app = FastAPI(title="Contact API", version="0.1.0")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/contact", response_model=ContactResponse, status_code=201)
def create_contact(payload: ContactRequest) -> ContactResponse:
    # Minimal implementation: generate id and acknowledge receipt.
    _received_at = datetime.now(UTC).isoformat()
    _payload_copy = payload.model_dump()

    return ContactResponse(id=str(uuid4()), status="received")
