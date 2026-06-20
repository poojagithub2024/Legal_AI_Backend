from ai.risk_detector import detect_risk


def simulate_change(original_text, old_value, new_value):

    modified_text = original_text.replace(
        old_value,
        new_value
    )

    original_risk = detect_risk(original_text)

    modified_risk = detect_risk(modified_text)

    if modified_risk["risk_score"] < original_risk["risk_score"]:
        impact = "Risk Reduced"

    elif modified_risk["risk_score"] > original_risk["risk_score"]:
        impact = "Risk Increased"

    else:
        impact = "No Risk Change"

    return {
        "original_text": original_text,
        "modified_text": modified_text,
        "original_risk": original_risk,
        "modified_risk": modified_risk,
        "impact": impact
    }