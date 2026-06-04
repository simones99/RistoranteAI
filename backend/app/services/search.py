import os

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "..", "data")


def search_documents(query: str) -> list[dict]:
    results = []
    query_lower = query.lower()

    for filename in sorted(os.listdir(DATA_DIR)):
        if not filename.endswith(".md"):
            continue

        filepath = os.path.join(DATA_DIR, filename)
        with open(filepath) as f:
            content = f.read()

        paragraphs = content.split("\n\n")
        for paragraph in paragraphs:
            if query_lower in paragraph.lower():
                results.append({
                    "file": filename,
                    "text": paragraph.strip(),
                })

    return results