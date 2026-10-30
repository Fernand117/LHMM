"""Locate passages in cached readings; print PDF page locators, never approve facts."""
import argparse
import re
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('source')
parser.add_argument('pattern')
parser.add_argument('--limit', type=int, default=10)
parser.add_argument('--radius', type=int, default=5)
parser.add_argument('--from-page', type=int, default=1)
parser.add_argument('--to-page', type=int, default=10000)
args = parser.parse_args()
path = Path(r'C:\Users\venta\AppData\Local\Temp\opencode\lhmm-source-readings') / f'{args.source}.txt'
lines = path.read_text(encoding='utf-8').splitlines()
page, page_number, hits, previous = '', 0, 0, -100
for index, line in enumerate(lines):
    if line.startswith('=== PDF PAGE'):
        page = line
        page_number = int(re.search(r'\d+', line).group())
    if args.from_page <= page_number <= args.to_page and re.search(args.pattern, line, re.I) and index > previous + args.radius:
        print(f'\n{args.source} | {page} | line {index + 1}')
        print('\n'.join(lines[max(0, index - args.radius):index + args.radius + 1]))
        hits += 1
        previous = index
        if hits >= args.limit:
            break
print(f'\nDisplayed {hits} located passages, not a verification verdict.')
