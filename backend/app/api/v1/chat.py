import uuid

from fastapi import APIRouter, Depends, HTTPException
from langchain_classic.agents import AgentExecutor

from app.dependencies import get_agent
from app.schemas.chat import ChatRequest, ChatResponse, SourceDocument

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(
    payload: ChatRequest,
    agent: AgentExecutor = Depends(get_agent),
) -> ChatResponse:
    session_id = payload.session_id or str(uuid.uuid4())

    # Formatear historial para el prompt
    history_text = ""
    for msg in payload.history:
        prefix = "Usuario" if msg.role == "user" else "Asistente"
        history_text += f"{prefix}: {msg.content}\n"

    try:
        result = agent.invoke({
            "input": payload.message,
            "chat_history": history_text,
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error del agente: {e}")

    reply = result.get("output", "No pude generar una respuesta.")
    tool_used = None

    # Detectar si se usó alguna tool
    intermediate = result.get("intermediate_steps", [])
    if intermediate:
        last_action = intermediate[-1][0]
        tool_used = getattr(last_action, "tool", None)

    return ChatResponse(
        reply=reply,
        session_id=session_id,
        sources=[],
        tool_used=tool_used,
    )
