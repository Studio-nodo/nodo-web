from pydantic import BaseModel, EmailStr
from langchain_classic.tools import BaseTool

from app.services.email_service import send_lead_notification


class EmailToolInput(BaseModel):
    recipient_name: str
    recipient_email: EmailStr
    subject: str
    body: str


class EmailTool(BaseTool):
    name: str = "send_lead_email"
    description: str = (
        "Úsala cuando el usuario quiera ser contactado por el equipo de Studio Nodo "
        "y haya proporcionado su nombre y email. "
        "Envía un email de captura de lead al equipo y una confirmación al usuario."
    )
    args_schema: type[BaseModel] = EmailToolInput

    def _run(
        self,
        recipient_name: str,
        recipient_email: str,
        subject: str,
        body: str,
    ) -> str:
        try:
            send_lead_notification(
                recipient_name=recipient_name,
                recipient_email=recipient_email,
                subject=subject,
                body=body,
            )
            return f"Email enviado correctamente a {recipient_email}."
        except Exception as e:
            return f"Error al enviar el email: {e}. Pedile al usuario que se contacte directamente."

    async def _arun(self, *args, **kwargs) -> str:
        return self._run(*args, **kwargs)
