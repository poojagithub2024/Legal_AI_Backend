import re

RISK_KEYWORDS = {
    "HIGH": [
        "penalty",
        "fine",
        "legal action",
        "breach",
        "lawsuit",
        "indemnity",
        "damages"
    ],

    "MEDIUM": [
        "termination",
        "terminate",
        "liability",
        "damage",
        "obligation",
        "restriction"
    ],

    "LOW": [
        "renewal",
        "notice",
        "payment",
        "invoice",
        "agreement"
    ]
}


def detect_risk(text):

    high_count = 0
    medium_count = 0
    low_count = 0

    text = text.lower()

    for keyword in RISK_KEYWORDS["HIGH"]:
        if keyword in text:
            high_count += 1

    for keyword in RISK_KEYWORDS["MEDIUM"]:
        if keyword in text:
            medium_count += 1

    for keyword in RISK_KEYWORDS["LOW"]:
        if keyword in text:
            low_count += 1

    risk_score = (high_count * 3) + (medium_count * 2) + (low_count * 1)

    penalty_match = re.search(r'rs\s*(\d+)', text)

    if penalty_match:

        penalty_amount = int(penalty_match.group(1))

        if penalty_amount >= 50000:
            risk_score += 3

        elif penalty_amount >= 20000:
            risk_score += 2

        elif penalty_amount >= 10000:
            risk_score += 1

    if risk_score >= 6:
        risk_level = "HIGH"

    elif risk_score >= 3:
        risk_level = "MEDIUM"

    else:
        risk_level = "LOW"

    return {
        "risk_level": risk_level,
        "risk_score": risk_score
    }


def generate_suggestions(risk_level):

    if risk_level == "HIGH":
        return [
            "Review all penalty and indemnity clauses carefully.",
            "Seek legal advice before signing the contract.",
            "Negotiate high-risk obligations and damages clauses.",
            "Verify all financial liabilities and penalties."
        ]

    elif risk_level == "MEDIUM":
        return [
            "Review termination and liability clauses.",
            "Clarify ambiguous contract terms.",
            "Check obligations and restrictions carefully."
        ]

    else:
        return [
            "No major risks detected.",
            "Review the document before final approval.",
            "Ensure payment and renewal terms are understood."
        ]