import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from app.config import get_settings

settings = get_settings()


def _send(msg: MIMEMultipart) -> None:
    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.ehlo()
        server.starttls()
        server.login(settings.smtp_user, settings.smtp_password)
        server.send_message(msg)


def send_lead_notification(
    recipient_name: str,
    recipient_email: str,
    subject: str,
    body: str,
) -> None:
    """Envía dos emails: uno interno de notificación y uno de confirmación al lead."""

    # 1. Email interno al equipo de Studio Nodo
    internal = MIMEMultipart("alternative")
    internal["From"] = settings.email_from
    internal["To"] = settings.email_to_internal
    internal["Subject"] = f"[Nuevo lead] {subject} — {recipient_name}"

    internal_html = f"""
    <h2>Nuevo lead desde el agente / formulario</h2>
    <table>
      <tr><td><b>Nombre:</b></td><td>{recipient_name}</td></tr>
      <tr><td><b>Email:</b></td><td>{recipient_email}</td></tr>
      <tr><td><b>Asunto:</b></td><td>{subject}</td></tr>
    </table>
    <hr>
    <p>{body}</p>
    """
    internal.attach(MIMEText(internal_html, "html"))
    _send(internal)

    # 2. Email de confirmación al lead
    confirm = MIMEMultipart("alternative")
    confirm["From"] = settings.email_from
    confirm["To"] = recipient_email
    confirm["Subject"] = "Recibimos tu consulta — Studio Nodo"

    confirm_html = f"""
    <h2>Hola {recipient_name},</h2>
    <p>Recibimos tu mensaje. El equipo de <b>Studio Nodo</b> te contactará pronto.</p>
    <p>—<br>Studio Nodo</p>
    """
    confirm.attach(MIMEText(confirm_html, "html"))
    _send(confirm)
