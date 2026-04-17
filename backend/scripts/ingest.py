"""
Script de ingesta: indexa los documentos de /docs en Pinecone.
Ejecutar desde la raíz de /backend:
    python -m scripts.ingest
"""

import os
import sys
from pathlib import Path

# Asegurar que el módulo app sea importable
sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv()

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_pinecone import PineconeVectorStore

DOCS_DIR = Path(__file__).parent.parent / "docs"
CHUNK_SIZE = 800
CHUNK_OVERLAP = 100


def main() -> None:
    google_api_key = os.environ["GOOGLE_API_KEY"]
    pinecone_api_key = os.environ["PINECONE_API_KEY"]
    pinecone_index = os.environ["PINECONE_INDEX"]
    pinecone_namespace = os.environ.get("PINECONE_NAMESPACE", "studio-nodo-v1")

    md_files = list(DOCS_DIR.glob("*.md"))
    if not md_files:
        print(f"No se encontraron archivos .md en {DOCS_DIR}")
        sys.exit(1)

    print(f"Cargando {len(md_files)} archivo(s)...")
    docs = []
    for path in md_files:
        loader = TextLoader(str(path), encoding="utf-8")
        docs.extend(loader.load())

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
        separators=["\n\n", "\n", " ", ""],
    )
    chunks = splitter.split_documents(docs)
    print(f"Total chunks: {len(chunks)}")

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001",
        google_api_key=google_api_key,
    )

    print(f"Haciendo upsert en Pinecone (index={pinecone_index}, namespace={pinecone_namespace})...")
    PineconeVectorStore.from_documents(
        documents=chunks,
        embedding=embeddings,
        index_name=pinecone_index,
        namespace=pinecone_namespace,
    )

    print("Ingesta completada.")


if __name__ == "__main__":
    main()
