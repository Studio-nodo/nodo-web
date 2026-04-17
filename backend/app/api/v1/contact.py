from fastapi import APIRouter, HTTPException

from app.schemas.contact import ContactRequest, ContactResponse
from app.services.email_service import send_lead_notification

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
async def contact(payload: ContactRequest) -> ContactResponse:
    body = payload.message
    if payload.phone:
        body += f"\n\nTeléfono: {payload.phone}"

    try:
        send_lead_notification(
            recipient_name=payload.name,
            recipient_email=payload.email,
            subject="Consulta desde el formulario de contacto",
            body=body,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al enviar el email: {e}")

    return ContactResponse(
        success=True,
        message="Tu mensaje fue enviado. Te contactamos pronto.",
    )
