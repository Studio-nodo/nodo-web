from pydantic import BaseModel, Field


class Message(BaseModel):
    role: str = Field(..., pattern="^(user|assistant)$")
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)
    session_id: str | None = None
    history: list[Message] = Field(default_factory=list, max_length=10)


class SourceDocument(BaseModel):
    content: str
    metadata: dict = {}


class ChatResponse(BaseModel):
    reply: str
    session_id: str
    sources: list[SourceDocument] = []
    tool_used: str | None = None
