from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.models.database import get_db
from app.models.document import Document

from ai.text_extractor import extract_pdf_text
from ai.summarizer import generate_summary
from ai.clause_extractor import extract_clauses
from ai.risk_detector import detect_risk
from ai.ner_extractor import extract_entities
from ai.text_extractor import (
    extract_pdf_text,
    extract_docx_text
)
from ai.risk_detector import (
    detect_risk,
    generate_suggestions
)
 
router = APIRouter()


@router.post("/analyze/{document_id}")
def analyze_document(
    document_id: int,
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

    if document.filename.endswith(".pdf"):
        text = extract_pdf_text(document.filepath)

    elif document.filename.endswith(".docx"):
        text = extract_docx_text(document.filepath)

    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type"
        )


    summary = generate_summary(text)

    clauses = extract_clauses(text)

    risk = detect_risk(text)

    entities = extract_entities(text)

    suggestions = generate_suggestions(
    risk["risk_level"]
    )

    return {
        "document_id": document.id,
        "filename": document.filename,
        "summary": summary,
        "clauses": clauses,
        "riskLevel": risk["risk_level"],
        "riskScore": risk["risk_score"],
        "entities": entities,
        "suggestions": suggestions
    }