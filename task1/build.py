"""Build the index.html shell for each Orange English Task 1 book.

Each book folder holds content/book.js (settings) and content/ch1.js ... ch6.js.
The shell loads ../engine/book.css, ../engine/helpers.js, the content files,
then ../engine/engine.js. Video links already pasted into an index.html are kept.

Run:  python3 task1/build.py            (all books)
      python3 task1/build.py bar-charts (one book)
"""
import json, os, re, sys, html

ROOT = os.path.dirname(os.path.abspath(__file__))
BOOKS = {
    'bar-charts':   {'title': 'Mastering Bar Charts',   'chapters': 6},
    'pie-charts':   {'title': 'Mastering Pie Charts',   'chapters': 6},
    'tables':       {'title': 'Mastering Tables',       'chapters': 6},
    'mixed-charts': {'title': 'Mastering Mixed Charts', 'chapters': 6},
    'maps':         {'title': 'Mastering Maps',         'chapters': 6},
    'processes':    {'title': 'Mastering Process Diagrams', 'chapters': 6},
}

def video_titles(folder):
    """Read the video titles in order from the content files, for the comment in index.html."""
    out = []
    for n in range(1, 7):
        p = os.path.join(folder, 'content', f'ch{n}.js')
        if not os.path.exists(p):
            continue
        for m in re.finditer(r"vid\(\{title:'((?:[^'\\]|\\.)*)'", open(p, encoding='utf-8').read()):
            out.append((n, m.group(1).replace("\\'", "'")))
    return out

def build(slug):
    cfg = BOOKS[slug]
    folder = os.path.join(ROOT, slug)
    idx = os.path.join(folder, 'index.html')
    old = open(idx, encoding='utf-8').read() if os.path.exists(idx) else ''
    links = []
    m = re.search(r"window\.VIDEO_LINKS=(\[.*?\]);", old)
    if m:
        try:
            links = json.loads(m.group(1).replace("'", '"'))
        except Exception:
            links = []
    vids = video_titles(folder)
    links = (links + [''] * len(vids))[:len(vids)]
    vcomment = '\n'.join(f'   {i} Ch{n} {t}' for i, (n, t) in enumerate(vids))
    chapters = [f'ch{n}.js' for n in range(1, cfg['chapters'] + 1) if os.path.exists(os.path.join(folder, 'content', f'ch{n}.js'))]
    t = html.escape(cfg['title'])
    desc = html.escape(re.search(r"DESC:'((?:[^'\\]|\\.)*)'", open(os.path.join(folder, 'content', 'book.js'), encoding='utf-8').read()).group(1).replace("\\'", "'"))
    scripts = '\n'.join(f'<script src="content/{c}"></script>' for c in ['book.js'] + chapters)
    page = f'''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{t} · IELTS Academic Writing Task 1 · Orange English</title>
<meta name="description" content="{desc}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../engine/book.css">
<script>
/* VIDEO_LINKS: paste a Loom or YouTube link between the quotes. The script note disappears once a link is set.
{vcomment} */
window.VIDEO_LINKS={json.dumps(links)};
</script>
</head>
<body>
<a href="#book" class="sr-only">Skip to the book</a>
<header class="bk-top">
  <img src="../engine/logo.png" alt="Orange English">
  <div class="ttl"><b>{t}</b><span id="chapline">Chapter 1</span></div>
  <div class="tools">
    <button type="button" class="tbtn" id="toc">Contents</button>
    <button type="button" class="tbtn" id="glossbtn">Glossary</button>
    <button type="button" class="tbtn" id="fs" aria-label="Full screen"><span class="lab-long">Full screen</span><span aria-hidden="true" class="lab-ic">⤢</span></button>
  </div>
</header>
<main class="book-wrap">
  <div class="book" id="book" tabindex="-1"></div>
  <nav class="pager" aria-label="Page navigation"><div class="in">
    <button type="button" class="btn ghost" id="prev">← <span class="lab-long">Previous page</span><span class="lab-short">Back</span></button>
    <p class="where" id="where" aria-live="polite"></p>
    <button type="button" class="btn" id="next"><span class="lab-long">Next page</span><span class="lab-short">Next</span> →</button>
  </div></nav>
</main>
<footer class="bk-foot">
  <p>{t} · IELTS Academic Writing Task 1 · Orange English</p>
  <p>Orange English is an independent IELTS preparation provider and is not affiliated with the official IELTS partners.</p>
  <p><a href="#" id="simulate">Simulate a return visit</a> (for testing)</p>
</footer>
<div id="gloss" role="dialog" aria-modal="false" hidden></div>
<div id="ov" class="overlay" hidden></div>
<div id="printview" aria-hidden="true"></div>
<script src="../engine/helpers.js"></script>
{scripts}
<script src="../engine/engine.js"></script>
</body>
</html>
'''
    open(idx, 'w', encoding='utf-8').write(page)
    print(f'{slug}: {len(chapters)} chapters, {len(vids)} videos')

if __name__ == '__main__':
    for s in (sys.argv[1:] or [k for k in BOOKS if os.path.exists(os.path.join(ROOT, k, 'content', 'book.js'))]):
        build(s)
