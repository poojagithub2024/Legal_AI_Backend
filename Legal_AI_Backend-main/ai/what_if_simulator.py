def evaluate_phrase_risk(text: str) -> int:
    """
    Helper function to calculate a fast, dynamic risk score 
    based on the presence of high-risk legal terms.
    """
    score = 10  # Standard baseline risk score
    text_upper = text.upper()

    # High-risk keywords that bump up the risk score
    high_risk_words = ["IMMEDIATELY", "WITHOUT NOTICE", "WITHOUT ANY SEVERANCE", "5 YEARS", "GLOBALLY", "FINES"]
    for word in high_risk_words:
        if word in text_upper:
            score += 20

    # Low-risk / protective keywords that drop the risk score
    safe_words = ["30 DAYS WRITTEN NOTICE", "MUTUAL AGREEMENT", "PRO-RATA COMPENSATION", "1 YEAR", "REASONABLE"]
    for word in safe_words:
        if word in text_upper:
            score -= 15

    # Clamp the risk score between 0 and 100
    return max(0, min(100, score))


def simulate_change(original_text, old_value, new_value):
    # Perform the interactive replacement from the frontend input
    modified_text = original_text.replace(old_value, new_value)

    # 1. Dynamically analyze risk scores of the change
    # If the user didn't change anything or the old phrase wasn't found:
    if old_value not in original_text or old_value == new_value:
        return {
            "original_text": original_text,
            "modified_text": original_text,
            "original_risk": {"risk_score": evaluate_phrase_risk(original_text), "risk_level": "Unchanged"},
            "modified_risk": {"risk_score": evaluate_phrase_risk(original_text), "risk_level": "Unchanged"},
            "impact": "No text changes detected or original phrase matching failed."
        }

    # 2. Extract dynamic risks based on the text adjustments
    original_score = evaluate_phrase_risk(old_value)
    modified_score = evaluate_phrase_risk(new_value)

    # 3. Determine systemic impact values
    if modified_score < original_score:
        impact = f"Risk Reduced! Replacing '{old_value}' with '{new_value}' significantly protects the signer."
        risk_level = "Low"
    elif modified_score > original_score:
        impact = f"Risk Increased! Adding '{new_value}' increases liability compared to the original clause terms."
        risk_level = "High"
    else:
        impact = "No Risk Change. The modifications maintain comparable legal obligations."
        risk_level = "Medium"

    return {
        "original_text": old_value,
        "modified_text": new_value,
        "original_risk": {"risk_score": original_score, "risk_level": "High" if original_score > 20 else "Medium"},
        "modified_risk": {"risk_score": modified_score, "risk_level": risk_level},
        "impact": impact
    }