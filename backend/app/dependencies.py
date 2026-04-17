from functools import lru_cache

from langchain_classic.agents import AgentExecutor

from app.agent.rag_agent import build_agent


@lru_cache
def get_agent() -> AgentExecutor:
    """Construye el AgentExecutor una sola vez y lo cachea para toda la vida del proceso."""
    return build_agent()
