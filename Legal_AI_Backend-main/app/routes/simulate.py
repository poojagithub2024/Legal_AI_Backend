from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.models.database import get_db
from app.models.document import Document

from ai.text_extractor import extract_pdf_text
from ai.what_if_simulator import simulate_change

router = APIRouter()


class SimulationRequest(BaseModel):
    old_value: str
    new_value: str


@router.post("/simulate/{document_id}")
def simulate_document(
    document_id: int,
    request: SimulationRequest,
    db: Session = Depends(get_db)
):

    document = (
        db.query(Document)
        .filter(Document.id == document_id)
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    original_text = extract_pdf_text(
        document.filepath
    )

    result = simulate_change(
        original_text,
        request.old_value,
        request.new_value
    )

    return result