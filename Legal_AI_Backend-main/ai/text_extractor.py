import os
from pypdf import PdfReader
from docx import Document


def clean_text(text):
    """
    Cleans up duplicate spaces and trims lines, 
    but PRESERVES structural newlines (\n) to prevent text bleeding.
    """
    # Split by newlines so we can clean each line individually
    lines = text.split("\n")
    cleaned_lines = []

    for line in lines:
        # Replace tabs with spaces
        line = line.replace("\t", " ")
        # Clean up double or triple spaces within the line
        while "  " in line:
            line = line.replace("  ", " ")
        
        cleaned_line = line.strip()
        # Only keep lines that aren't completely blank
        if cleaned_line:
            cleaned_lines.append(cleaned_line)

    # Rejoin lines with a clean newline break
    return "\n".join(cleaned_lines)


def extract_pdf_text(file_path):
    text = ""
    pdf = PdfReader(file_path)

    for page in pdf.pages:
        page_text = page.extract_text()
        if page_text:
            # Add a newline after each page break to keep text separated
            text += page_text + "\n"

    return clean_text(text)


def extract_docx_text(file_path):
    doc = Document(file_path)
    text_lines = []

    for para in doc.paragraphs:
        if para.text.strip():
            text_lines.append(para.text)

    # Combine all paragraphs using a standard line break
    full_text = "\n".join(text_lines)
    return clean_text(full_text)