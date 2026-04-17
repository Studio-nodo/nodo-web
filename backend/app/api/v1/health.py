from fastapi import APIRouter

from app.config import get_settings

router = APIRouter()
settings = get_settings()


@router.get("/health")
async def health() -> dict:
    return {"status": "ok", "version": settings.app_version}
