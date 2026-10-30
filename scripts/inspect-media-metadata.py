"""Inspect Wikimedia Commons metadata for a candidate image. Research aid only."""
import json
import sys
import urllib.parse
import urllib.request

files = sys.argv[1:]
headers = {'User-Agent': 'LHMM/0.1 educational history atlas (source attribution audit)'}
for name in files:
    params = urllib.parse.urlencode({
        'action': 'query', 'format': 'json', 'titles': f'File:{name}',
        'prop': 'imageinfo', 'iiprop': 'url|extmetadata',
    })
    request = urllib.request.Request(f'https://commons.wikimedia.org/w/api.php?{params}', headers=headers)
    data = json.load(urllib.request.urlopen(request))
    page = next(iter(data['query']['pages'].values()))
    info = page.get('imageinfo', [{}])[0]
    meta = info.get('extmetadata', {})
    print(json.dumps({
        'file': name,
        'descriptionurl': info.get('descriptionurl'),
        'url': info.get('url'),
        'license': meta.get('LicenseShortName', {}).get('value'),
        'licenseUrl': meta.get('LicenseUrl', {}).get('value'),
        'artist': meta.get('Artist', {}).get('value'),
        'credit': meta.get('Credit', {}).get('value'),
        'date': meta.get('DateTimeOriginal', {}).get('value'),
        'description': meta.get('ImageDescription', {}).get('value'),
    }, ensure_ascii=False, indent=2))
