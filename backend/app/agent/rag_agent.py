from langchain_classic.agents import AgentExecutor, create_react_agent
from langchain_classic.memory import ConversationBufferWindowMemory

# from langchain_classic.tools.retriever import create_retriever_tool  # TODO: descomentar con Pinecone
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

# from app.agent.retriever import get_vectorstore  # TODO: descomentar con Pinecone
from app.agent.tools.email_tool import EmailTool
from app.config import get_settings

settings = get_settings()

SYSTEM_PROMPT = """\
Sos el asistente virtual de Studio Nodo, un studio de diseño y desarrollo web con IA.
Respondés siempre en español, de forma clara, profesional y amigable.
Solo hablás sobre los servicios, tecnologías y procesos de Studio Nodo.
Si no encontrás información relevante, derivás al equipo de contacto.
Cuando el usuario quiera que lo contacten y brinde su nombre y email, usás la herramienta send_lead_email.

Conocés los servicios de Studio Nodo:
- Landing Pages: diseño + desarrollo de alta conversión con animaciones modernas
- Web Corporativa: sitios institucionales completos con CMS
- E-Commerce: tiendas online con carrito y pagos integrados
- Agente IA: bots inteligentes para atención al cliente y automatización
- Dashboard IA: paneles de datos con analytics e integraciones
- Automatización de Redes: gestión automática de contenido con IA

Tenés acceso a las siguientes herramientas:

{tools}

Usá el siguiente formato:

Question: la pregunta del usuario
Thought: lo que pensás hacer
Action: la herramienta a usar, una de [{tool_names}]
Action Input: el input para la herramienta
Observation: el resultado de la herramienta
... (podés repetir Thought/Action/Action Input/Observation N veces)
Thought: ya sé la respuesta final
Final Answer: la respuesta final para el usuario

Historial de conversación:
{chat_history}

Question: {input}
Thought: {agent_scratchpad}"""


def build_agent() -> AgentExecutor:
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
        temperature=0.3,
        max_output_tokens=1024,
        google_api_key=settings.google_api_key,
    )

    # TODO: descomentar cuando Pinecone esté configurado
    # vectorstore = get_vectorstore()
    # retriever = vectorstore.as_retriever(search_kwargs={"k": 4})
    # retriever_tool = create_retriever_tool(
    #     retriever=retriever,
    #     name="retrieve_studio_info",
    #     description=(
    #         "Busca información sobre Studio Nodo: servicios, tecnologías, procesos y FAQ. "
    #         "Úsala siempre que el usuario pregunte sobre el studio."
    #     ),
    # )
    # tools = [retriever_tool, EmailTool()]

    tools = [EmailTool()]

    prompt = PromptTemplate.from_template(SYSTEM_PROMPT)

    memory = ConversationBufferWindowMemory(
        k=5,
        memory_key="chat_history",
        return_messages=False,
    )

    agent = create_react_agent(llm=llm, tools=tools, prompt=prompt)

    return AgentExecutor(
        agent=agent,
        tools=tools,
        memory=memory,
        handle_parsing_errors=True,
        max_iterations=6,
        verbose=True,  # True para ver el razonamiento del agente en consola
    )
