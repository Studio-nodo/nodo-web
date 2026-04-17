from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=2000)
    phone: str | None = Field(default=None, max_length=30)


class ContactResponse(BaseModel):
    success: bool
    message: str
