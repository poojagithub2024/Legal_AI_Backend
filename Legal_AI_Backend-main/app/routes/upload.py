from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import os

from app.models.database import get_db
from app.models.document import Document

router = APIRouter()

# 1. Set folder name
UPLOAD_FOLDER = "uploads"

# 2. FORCE Python to automatically create the folder if it's missing
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    new_document = Document(
        filename=file.filename,
        filepath=file_path
    )

    db.add(new_document)
    db.commit()
    db.refresh(new_document)

    return {
        "message": "File uploaded successfully",
        "document_id": new_document.id,
        "filename": new_document.filename
    }