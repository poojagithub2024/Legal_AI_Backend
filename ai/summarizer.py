from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

print("Loading Summarization Model...")

tokenizer = AutoTokenizer.from_pretrained(
    "sshleifer/distilbart-cnn-12-6"
)

model = AutoModelForSeq2SeqLM.from_pretrained(
    "sshleifer/distilbart-cnn-12-6"
)

print("Model Loaded Successfully!")


def generate_summary(text):

    inputs = tokenizer(
        text,
        return_tensors="pt",
        max_length=1024,
        truncation=True
    )

    summary_ids = model.generate(
        inputs["input_ids"],
        max_length=50,
        min_length=20,
        num_beams=4,
        early_stopping=True
    )

    summary = tokenizer.decode(
        summary_ids[0],
        skip_special_tokens=True
    )

    return summary