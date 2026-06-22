from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.models.database import get_db
from app.models.document import Document
from app.services.pdf_extractor import extract_text_from_pdf

router = APIRouter()

@router.post("/extract-text/{document_id}")
def extract_text(document_id: int, db: Session = Depends(get_db)):

    document = (
        db.query(Document)
        .filter(Document.id == document_id)
        .first()
    )

    print("File path:", document.filepath)

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    extracted_text = extract_text_from_pdf(
        document.filepath
    )

    return {
        "document_id": document.id,
        "filename": document.filename,
        "text": extracted_text
        
    }

