from fastapi import FastAPI

from app.models.database import engine, Base
from app.models.document import Document

from app.routes.upload import router as upload_router
from app.routes.extract import router as extract_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(upload_router)
app.include_router(extract_router)

@app.get("/")
def home():
    return {
        "message": "Legal AI Backend Running"
    }