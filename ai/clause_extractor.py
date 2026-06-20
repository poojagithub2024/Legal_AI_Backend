import re
CLAUSE_KEYWORDS = {

    "Payment Clause": [
        "pay",
        "payment",
        "rent",
        "fee",
        "amount",
        "invoice",
        "salary"
    ],

    "Penalty Clause": [
        "penalty",
        "fine",
        "charge",
        "compensation",
        "damages"
    ],

    "Termination Clause": [
        "terminate",
        "termination",
        "cancel",
        "resignation",
        "breach"
    ],

    "Renewal Clause": [
        "renew",
        "renewal",
        "extend",
        "extension"
    ]
}
def extract_clauses(text):

    clauses = {}

    sentences = re.split(r'[.!?]+', text)

    for sentence in sentences:

        sentence = sentence.strip()

        if not sentence:
            continue

        for clause_type, keywords in CLAUSE_KEYWORDS.items():

            for keyword in keywords:

                if keyword.lower() in sentence.lower():

                    if clause_type not in clauses:
                        clauses[clause_type] = []

                    clauses[clause_type].append(sentence)

                    break

    return clauses