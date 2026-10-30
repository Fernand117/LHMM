"""Print duplicate/suspect groups in the guide directory. Research aid, not a verdict."""
import itertools
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
entries = json.loads((ROOT / 'src/data/imported/document.json').read_text(encoding='utf-8'))['entries']
STOP = set('de la el los las del y en al por para con un una unos unas sobre tras durante como su sus se que o a'.split())


def tokens(text):
    text = re.sub(r'[^a-záéíóúñü0-9 ]', ' ', text.lower())
    return {word for word in text.split() if len(word) > 3 and word not in STOP}


for period in range(1, 7):
    items = [entry for entry in entries if entry['period'] == period]
    groups = []
    for a, b in itertools.combinations(items, 2):
        ta, tb = tokens(a['title']), tokens(b['title'])
        jaccard = len(ta & tb) / max(1, len(ta | tb))
        if jaccard >= 0.34:
            groups.append((jaccard, a['code'], b['code'], a['title'], b['title']))
    groups.sort(reverse=True)
    print(f'PERIOD {period}: {len(groups)} candidate pairs')
    for score, left, right, left_title, right_title in groups[:30]:
        print(f'{score:.2f} {left} {right} | {left_title} || {right_title}')
    print()
