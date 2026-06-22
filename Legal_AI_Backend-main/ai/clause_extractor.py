import re

def extract_clauses(text: str) -> dict:
    """
    Analyzes contract text using structural parsing to isolate legal clauses
    distinctly and prevent text bleeding/duplication on the dashboard cards.
    """
    # Initialize separate fields to avoid duplication fallback issues
    payment_clause = ""
    penalty_clause = ""
    termination_clause = ""

    # Split text into clean paragraphs or structural lines
    paragraphs = [p.strip() for p in text.split("\n") if p.strip()]

    for para in paragraphs:
        # 1. Target Payment terms (e.g., POSITION AND DUTIES, salary, monthly)
        if any(kw in para.upper() for kw in ["SALARY", "COMPENSATION", "PAYMENT", "CALCULATED MONTHLY", "DUTIES"]):
            # Filter out paragraphs that belong strictly to Termination to avoid cross-contamination
            if "TERMINATION" not in para.upper():
                payment_clause += para + " "

        # 2. Target Penalty terms (e.g., LIQUIDATION FEE, BREACH, PENALTY, FINES)
        if any(kw in para.upper() for kw in ["PENALTY", "LIQUIDATION", "VIOLATION", "BREACH", "LIABLE FOR"]):
            if "TERMINATION" not in para.upper():
                penalty_clause += para + " "

        # 3. Target Termination terms (e.g., TERMINATION AND SEVERANCE, NOTICE)
        if any(kw in para.upper() for kw in ["TERMINATION", "SEVERANCE", "TERMINATE", "NOTICE"]):
            termination_clause += para + " "

    # Clean up and apply strict fallback text if specific clauses are absent
    payment_clause = payment_clause.strip() or "Position, duties, and baseline monthly salary structures are not explicitly defined."
    penalty_clause = penalty_clause.strip() or "No explicit liquidation fee parameter or breach penalty clause detected in this contract."
    termination_clause = termination_clause.strip() or "Termination notice guidelines and severance rules are not specified."

    # Return structured keys that automatically map down into your React Dashboard setup
    return {
        "payment_clause": payment_clause,
        "penalty_clause": penalty_clause,
        "termination_clause": termination_clause
    }