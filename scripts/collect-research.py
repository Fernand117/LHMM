"""Cache source readings outside the repository; retrieval is NOT fact-checking.

Requires pypdf in the external research-tools directory (not an app dependency).
The editorial review must select and read evidence before publishing a story.
"""
import concurrent.futures
import hashlib
import io
import json
import re
import sys
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin

import requests

TEMP = Path(r'C:\Users\venta\AppData\Local\Temp\opencode')
sys.path.insert(0, str(TEMP / 'lhmm-research-tools'))
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
CACHE = TEMP / 'lhmm-source-readings'
CACHE.mkdir(exist_ok=True)


class ArticleText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts, self.links, self.skip = [], [], 0

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if tag in ('script', 'style', 'nav', 'header', 'footer'):
            self.skip += 1
        if not self.skip:
            if tag in ('p', 'div', 'li', 'tr', 'td', 'br', 'h1', 'h2', 'h3', 'h4', 'section', 'article'):
                self.parts.append('\n')
            if tag == 'a' and data.get('href'):
                self.links.append(data['href'])
            if tag in ('iframe', 'embed') and data.get('src'):
                self.links.append(data['src'])

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'nav', 'header', 'footer'):
            self.skip = max(0, self.skip - 1)
        if not self.skip and tag in ('p', 'div', 'li', 'tr', 'h1', 'h2', 'h3', 'h4'):
            self.parts.append('\n')

    def handle_data(self, text):
        if not self.skip:
            self.parts.append(text)


document = json.loads((ROOT / 'src/data/imported/document.json').read_text(encoding='utf-8'))
reading_list = json.loads((ROOT / 'research/reading-list.json').read_text(encoding='utf-8'))
sources = [{'id': item['code'], **item} for item in document['sources']]
sources += reading_list
selected = set(sys.argv[1:])
if selected:
    sources = [item for item in sources if item['id'] in selected]


def collect(source):
    key = source['id']
    result_path = CACHE / f'{key}.json'
    if result_path.exists():
        return json.loads(result_path.read_text(encoding='utf-8'))
    result = {**source, 'retrievedAt': datetime.now(timezone.utc).isoformat()}
    try:
        response = requests.get(source['url'], timeout=60, headers={'User-Agent': 'LHMM historical source review/1.0'})
        result.update({'httpStatus': response.status_code, 'resolvedUrl': response.url})
        response.raise_for_status()
        content = response.content
        if len(content) > 60_000_000:
            raise ValueError('Source exceeds research cache size limit')
        result['sha256'] = hashlib.sha256(content).hexdigest()
        if content.startswith(b'%PDF'):
            (CACHE / f'{key}.pdf').write_bytes(content)
            pages = [page.extract_text() or '' for page in PdfReader(io.BytesIO(content)).pages]
            text = '\n\n'.join(f'=== PDF PAGE {index + 1} ===\n{page}' for index, page in enumerate(pages))
            result['pages'] = len(pages)
            result['links'] = []
        else:
            response.encoding = response.apparent_encoding or 'utf-8'
            parser = ArticleText()
            parser.feed(response.text)
            text = '\n'.join(line for line in (re.sub(r'\s+', ' ', line).strip() for line in ''.join(parser.parts).splitlines()) if line)
            result['links'] = list(dict.fromkeys(urljoin(response.url, link) for link in parser.links))
        (CACHE / f'{key}.txt').write_text(text, encoding='utf-8')
        result['characters'] = len(text)
        result['retrieval'] = 'saved'
    except Exception as error:
        result['retrieval'] = 'unavailable'
        result['error'] = str(error)
    result_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    return result


with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    for item in pool.map(collect, sources):
        print(json.dumps({key: item.get(key) for key in ['id', 'retrieval', 'httpStatus', 'characters', 'pages', 'error']}, ensure_ascii=False), flush=True)
print(f'Readings cached at {CACHE}. A successful download does not verify any historical assertion.')
