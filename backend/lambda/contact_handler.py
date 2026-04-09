import base64
import json
import logging
import os
from typing import Any

import boto3

logger = logging.getLogger()
logger.setLevel(logging.ERROR)

ses = boto3.client("ses", region_name=os.environ.get("AWS_REGION", "ap-northeast-1"))

INQUIRY_TYPE_LABELS = {
    "dev_web_system": "Webシステム開発",
    "dev_website": "Webサイト制作",
    "dev_app": "モバイルアプリ開発",
    "ai_solution": "AIソリューション",
    "consultation": "技術相談・コンサルティング",
    "other": "その他",
}

REQUIRED_FIELDS = [
    "type",
    "name",
    "email",
    "phoneNumber",
    "inquiryType",
    "content",
]


def _response(status_code: int, body: dict[str, Any], origin: str) -> dict[str, Any]:
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST",
        },
        "body": json.dumps(body, ensure_ascii=False),
    }


def _parse_event_body(event: dict[str, Any]) -> dict[str, Any]:
    raw_body = event.get("body") or "{}"
    if event.get("isBase64Encoded"):
        raw_body = base64.b64decode(raw_body).decode("utf-8")
    return json.loads(raw_body)


def _validate_payload(payload: dict[str, Any]) -> tuple[bool, str]:
    for field in REQUIRED_FIELDS:
        value = payload.get(field)
        if value is None or str(value).strip() == "":
            return False, f"{field} is required"

    if payload.get("type") == "company" and str(payload.get("companyName", "")).strip() == "":
        return False, "companyName is required when type is company"

    return True, ""


def _build_mail_body(payload: dict[str, Any]) -> str:
    inquiry_type = INQUIRY_TYPE_LABELS.get(payload.get("inquiryType", ""), "未指定")

    lines = [
        "お問い合わせを受信しました。",
        "",
        f"種別: {'法人' if payload.get('type') == 'company' else '個人'}",
        f"会社名/屋号: {payload.get('companyName', '')}",
        f"担当者名: {payload.get('name', '')}",
        f"電話番号: {payload.get('phoneNumber', '')}",
        f"メールアドレス: {payload.get('email', '')}",
        f"お問い合わせ種別: {inquiry_type}",
        "",
        "お問い合わせ内容:",
        str(payload.get("content", "")),
    ]
    return "\n".join(lines)


def handler(event: dict[str, Any], _context: Any) -> dict[str, Any]:
    origin = os.environ.get("ALLOWED_ORIGIN", "*")

    method = (
        event.get("requestContext", {}).get("http", {}).get("method")
        or event.get("httpMethod")
        or ""
    ).upper()

    if method == "OPTIONS":
        return _response(204, {"ok": True}, origin)

    if method != "POST":
        return _response(405, {"message": "Method Not Allowed"}, origin)

    try:
        payload = _parse_event_body(event)
    except Exception:
        logger.error("failed to parse request body", exc_info=True)
        return _response(400, {"message": "Invalid JSON body"}, origin)

    is_valid, message = _validate_payload(payload)
    if not is_valid:
        return _response(400, {"message": message}, origin)

    source_email = os.environ.get("SOURCE_EMAIL", "").strip()
    destination_email = os.environ.get("DESTINATION_EMAIL", source_email).strip()

    if not source_email:
        logger.error("SOURCE_EMAIL is not configured")
        return _response(500, {"message": "Email settings are not configured"}, origin)

    if os.environ.get("DRY_RUN", "false").lower() == "true":
        return _response(202, {"message": "Accepted (dry-run)"}, origin)

    try:
        ses.send_email(
            Source=source_email,
            Destination={"ToAddresses": [destination_email]},
            Message={
                "Subject": {"Data": "[Contact] スエキチシステムへのお問い合わせ"},
                "Body": {"Text": {"Data": _build_mail_body(payload)}},
            },
            ReplyToAddresses=[payload["email"]],
        )
    except Exception:
        logger.error("failed to send email", exc_info=True)
        return _response(500, {"message": "Failed to process contact request"}, origin)

    return _response(201, {"message": "Contact request received"}, origin)
