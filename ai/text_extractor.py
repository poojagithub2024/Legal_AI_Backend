import os


def clean_text(text):
    """
    Basic text cleaning
    """

    text = text.replace("\n", " ")
    text = text.replace("\t", " ")

    while "  " in text:
        text = text.replace("  ", " ")

    return text.strip()
from pypdf import PdfReader
from docx import Document


def extract_pdf_text(file_path):

    text = ""

    pdf = PdfReader(file_path)

    for page in pdf.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text + " "

    return clean_text(text)


def extract_docx_text(file_path):

    doc = Document(file_path)

    text = ""

    for para in doc.paragraphs:
        text += para.text + " "

    return clean_text(text)