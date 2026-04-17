from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # LLM y Embeddings
    google_api_key: str

    # Vector DB — comentado para pruebas locales sin Pinecone
    # pinecone_api_key: str
    # pinecone_index: str
    # pinecone_namespace: str = "studio-nodo-v1"

    # CORS (comma-separated origins)
    cors_origins: str = "http://localhost:3000"

    # Email SMTP — comentado para pruebas locales sin SMTP
    # smtp_host: str = "smtp.gmail.com"
    # smtp_port: int = 587
    # smtp_user: str
    # smtp_password: str
    # email_from: str
    # email_to_internal: str

    # App
    app_env: str = "development"
    app_version: str = "1.0.0"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",")]


@lru_cache
def get_settings() -> Settings:
    return Settings()
