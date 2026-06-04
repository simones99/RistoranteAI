import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="RistoranteAI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "data")

@app.get("/api/health")
async def health():
    return {"status": "ok", "message": "Lo chef è al lavoro!"}

@app.get("/api/documents")
async def list_documents():
    files = os.listdir(DATA_DIR)
    documents = [
        {"name": f, "path": os.path.join(DATA_DIR, f)}
        for f in sorted(files)
        if f.endswith(".md")
    ]
    return {"documents": documents}