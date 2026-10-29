"""Render every spread of a book, report script errors and save screenshots.

python3 task1/tests/render.py bar-charts [outdir] [--only c1-] [--mobile]
"""
import sys, os
from playwright.sync_api import sync_playwright

slug = sys.argv[1]
out = sys.argv[2] if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else '/tmp/claude-0/-home-claude/b2122184-d9bc-57e8-9ff3-dbd73faa8204/scratchpad/shots'
only = sys.argv[sys.argv.index('--only') + 1] if '--only' in sys.argv else ''
mobile = '--mobile' in sys.argv
os.makedirs(out, exist_ok=True)
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
url = 'file://' + os.path.join(root, slug, 'index.html')

with sync_playwright() as p:
    b = p.chromium.launch()
    vp = {'width': 390, 'height': 844} if mobile else {'width': 1400, 'height': 1000}
    pg = b.new_page(viewport=vp, is_mobile=mobile, has_touch=mobile)
    errs = []
    pg.on('pageerror', lambda e: errs.append('PAGEERROR ' + str(e)))
    pg.on('console', lambda m: m.type == 'error' and 'ERR_TUNNEL' not in m.text and 'fonts.g' not in m.text and errs.append('CONSOLE ' + m.text))
    pg.goto(url)
    pg.wait_for_timeout(800)
    pg.evaluate("localStorage.clear()")
    pg.goto(url)
    pg.wait_for_timeout(800)
    ids = pg.evaluate("window.BOOK.SPREADS.map(s=>s.id)")
    print(len(ids), 'spreads')
    for i, sid in enumerate(ids):
        if only and not sid.startswith(only):
            continue
        pg.evaluate(f"document.querySelector('#ov').hidden=true")
        sides = ['left', 'right'] if mobile else ['left']
        for side in sides:
            pg.evaluate(f"""(()=>{{const b=document.createElement('button');b.dataset.go='{sid}';document.body.appendChild(b);b.click();b.remove()}})()""")
            if mobile and side == 'right':
                pg.keyboard.press('ArrowRight')
            pg.wait_for_timeout(350)
            info = pg.evaluate("""(()=>{const a=document.querySelector('.spread.active');const ps=[...a.querySelectorAll('.page')];
              return ps.map(p=>{const r=p.getBoundingClientRect();let over=[];p.querySelectorAll('*').forEach(e=>{const q=e.getBoundingClientRect();if(q.width>0&&(q.right>r.right+2||q.left<r.left-2)&&getComputedStyle(e).position!=='absolute')over.push(e.tagName+'.'+(e.className.baseVal!==undefined?e.className.baseVal:e.className))});return {w:Math.round(r.width),over:[...new Set(over)].slice(0,4)}})})()""")
            for k, x in enumerate(info):
                if x['over']:
                    print(f'  OVERFLOW {sid} page{k}:', x['over'])
            name = f"{out}/{slug}_{i:02d}_{sid}{'_m'+side if mobile else ''}.png"
            pg.screenshot(path=name, full_page=True)
    print('errors:', errs[:20] if errs else 'none')
    b.close()
