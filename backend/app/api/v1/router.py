from fastapi import APIRouter

from app.api.v1 import chat, contact, health

router = APIRouter(prefix="/api/v1")

router.include_router(health.router, tags=["health"])
router.include_router(chat.router, tags=["chat"])
router.include_router(contact.router, tags=["contact"])
