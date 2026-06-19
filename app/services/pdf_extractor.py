import fitz

def extract_text_from_pdf(pdf_path):

    text = ""

    with fitz.open(pdf_path) as pdf:

        print("Pages:", len(pdf))

        for page_num, page in enumerate(pdf):

            page_text = page.get_text("text")

            print(f"\nPage {page_num+1}:")
            print(repr(page_text[:200]))

            text += page_text

    return text