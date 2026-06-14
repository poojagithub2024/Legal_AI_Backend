from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import os

from app.models.database import get_db
from app.models.document import Document

router = APIRouter()

UPLOAD_FOLDER = "uploads"

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