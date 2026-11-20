import sys,os,base64
sys.path.insert(0,'/home/claude/cs2')
from content import SHEETS
from graphs import GRAPHS
FR='file:///home/claude/cs2/Fraunces.ttf'
LOGO='data:image/png;base64,'+base64.b64encode(open('/home/claude/cs2/logo.png','rb').read()).decode()
CSS=f"""
@font-face{{font-family:'Fraunces';src:url('{FR}') format('truetype');font-weight:600 700}}
@page{{size:A4;margin:0}}
*{{box-sizing:border-box;margin:0;padding:0}}
html,body{{width:210mm;height:297mm}}
body{{font-family:Inter,sans-serif;color:#292929;background:#FBF7F0;font-size:var(--fs,9.4pt);line-height:1.42;display:flex;flex-direction:column;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
header{{display:flex;align-items:center;gap:16pt;padding:13pt 30pt 9pt;border-bottom:3.5pt solid #F88B48;background:#fff}}
header .t{{flex:1}}
.eyebrow{{font-weight:700;font-size:6.8pt;letter-spacing:.16em;text-transform:uppercase;color:#B9541A}}
h1{{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:23pt;line-height:1.1;margin:3pt 0 3pt}}
header .sub{{font-size:9.4pt;color:#6B6359}}
header img{{height:44pt;width:auto}}
main{{flex:1;padding:13pt 30pt 0}}
.top{{display:grid;grid-template-columns:1fr auto;gap:13pt;margin-bottom:11pt;align-items:stretch}}
.left{{display:flex;flex-direction:column;gap:7pt}} .left .cap{{font-size:8.2pt;color:#6B6359;line-height:1.4;padding:0 2pt}}
.rule{{background:#fff;color:#292929;border:1pt solid #F5CAA8;border-left:5pt solid #F88B48;border-radius:7pt;padding:11pt 13pt;flex:1;display:flex;flex-direction:column;justify-content:center}}
.rule .eyebrow{{color:#B9541A;margin-bottom:5pt}}
.rule p{{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:12.6pt;line-height:1.28}}
.fig{{background:#fff;border:1pt solid #E4DED1;border-radius:7pt;padding:8pt 10pt 7pt}}
.fig{{display:flex;align-items:center}} .fig svg{{display:block;height:var(--gh,136pt);width:auto}}
.fig .cap{{font-size:8pt;color:#6B6359;margin-top:4pt;line-height:1.35}}
.cols{{display:flex;gap:13pt;align-items:flex-start}} .col{{flex:1;min-width:0}}
.card{{break-inside:avoid;border-radius:7pt;padding:8pt 11pt 8pt;margin:0 0 10pt;border:1pt solid #E4DED1;background:#fff}}
.card.peach{{background:#FFF0E6;border-color:#F5CAA8}}
.card.mint{{background:#EDF8F2;border-color:#BFE0CC}}
.card h2{{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:11.6pt;color:#B9541A;margin-bottom:5pt;line-height:1.2}}
.card.mint h2{{color:#2F7A49}}
.card p{{margin:0 0 5pt}} .card p:last-child{{margin-bottom:0}} .card p.tight{{margin-bottom:2pt}}
.card ul,.card ol{{margin:0 0 5pt;padding-left:13pt}} .card li{{margin-bottom:2.6pt}} .card ul:last-child,.card ol:last-child{{margin-bottom:0}}
.card li::marker{{color:#B9541A;font-weight:700}}
.card li:has(>.red:first-child),.card li:has(>.grn:first-child){{list-style:none;margin-left:-11pt}}
.tbl{{width:100%;border-collapse:collapse;margin:0 0 6pt;font-size:.93em}}
.tbl:last-child{{margin-bottom:0}}
.tbl th{{text-align:left;font-weight:700;font-size:6.6pt;letter-spacing:.12em;text-transform:uppercase;color:#6B6359;padding:0 6pt 3pt 0;vertical-align:bottom}}
.tbl td{{padding:4pt 6pt 4pt 0;border-top:.7pt solid #E4DED1;vertical-align:top}}
.tbl.nohead tr:first-child td,.tbl.nohead tr:first-child th{{border-top:0}}
.tbl.phr th{{font-size:8.4pt;letter-spacing:0;text-transform:none;color:#292929;padding:4pt 8pt 4pt 0;border-top:.7pt solid #E4DED1;vertical-align:top;width:40%}}
.tbl.budget th{{font-family:Fraunces,Georgia,serif;font-size:10pt;letter-spacing:0;text-transform:none;color:#B9541A;padding:4pt 8pt 4pt 0;border-top:.7pt solid #F5CAA8;line-height:1.05;width:14%;vertical-align:top}}
.tbl.budget td{{border-top-color:#F5CAA8}}
.tbl.three td:nth-child(2){{white-space:nowrap}}
.red{{color:#A8322E}} .grn{{color:#2F7A49}} .ex{{color:#55534E;font-style:italic}}
.no,.yes{{font-style:normal;font-weight:800;margin-right:2pt}}
footer{{display:flex;justify-content:space-between;gap:12pt;align-items:center;white-space:nowrap;padding:9pt 30pt 11pt;border-top:1pt solid #E4DED1;font-size:7.6pt;color:#6B6359;background:#fff}}
footer a{{color:#B9541A;font-weight:700;text-decoration:none}}
footer b{{color:#292929}}
"""
ARRANGE = """()=>{window.arrange=()=>{
 const cols=document.querySelector('.cols'); const cards=[...document.querySelectorAll('.card')].sort((a,b)=>(+a.dataset.i)-(+b.dataset.i));
 cols.innerHTML='<div class="col"></div><div class="col"></div>'; const [A,B]=cols.children;
 cards.forEach(c=>A.appendChild(c)); const gap=parseFloat(getComputedStyle(cards[0]).marginBottom);
 const h=cards.map(c=>c.getBoundingClientRect().height+gap); const n=cards.length; let best=null;
 for(let m=0;m<(1<<n);m++){ if(m&1) continue; // first card stays in the left column
   const L=[],R=[]; for(let i=0;i<n;i++)((m>>i)&1?R:L).push(i);
   if(!L.length||!R.length)continue;
   const lastMintOK=cards.every((c,i)=>!c.classList.contains('mint')|| (R.includes(i)&&R[R.length-1]===i) || (L.includes(i)&&L[L.length-1]===i));
   if(!lastMintOK)continue;
   const hl=L.reduce((s,i)=>s+h[i],0),hr=R.reduce((s,i)=>s+h[i],0); const sc=Math.max(hl,hr)+0.01*Math.abs(hl-hr);
   if(!best||sc<best.sc)best={sc,L,R}}
 A.innerHTML='';best.L.forEach(i=>A.appendChild(cards[i]));best.R.forEach(i=>B.appendChild(cards[i]));
}}"""

def page(n,s):
    svg,cap=GRAPHS[s['graph']]()
    cards=''.join(f'<section class="card {c}" data-i="{i}"><h2>{t}</h2>{h}</section>' for i,(c,t,h) in enumerate(s['cards']))
    url=f'https://orangeenglish.nl/ielts-writing-feedback?utm_source=cheatsheet&amp;utm_medium=pdf&amp;utm_campaign=linegraphs-ch{n}'
    return f"""<!DOCTYPE html><html lang="en-GB"><head><meta charset="utf-8"><title>Chapter {n} cheat sheet · {s['title']} · Orange English</title><style>{CSS}</style></head><body>
<header><div class="t"><div class="eyebrow">Mastering Line Graphs · Chapter {n} cheat sheet</div><h1>{s['title']}</h1><div class="sub">{s['sub']}</div></div><img src="{LOGO}" alt="Orange English"></header>
<main><div class="top"><div class="left"><div class="rule"><div class="eyebrow">If you remember one thing</div><p>{s['rule']}</p></div><p class="cap">{cap}</p></div><figure class="fig"{' style="--gh:108pt"' if s['graph']=='g6' else ''}>{svg}</figure></div>
<div class="cols">{cards}</div></main>
<footer><span><b>Get your Task 1 answer marked by a former IELTS examiner:</b> <a href="{url}">orangeenglish.nl/ielts-writing-feedback</a></span><span>Orange English</span></footer>
</body></html>"""
os.makedirs('/home/claude/cs2/out',exist_ok=True)
for n,s in SHEETS.items(): open(f'/home/claude/cs2/out/ch{n}.html','w').write(page(n,s))
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':794,'height':1123})
    for n in SHEETS:
        pg.goto(f'file:///home/claude/cs2/out/ch{n}.html'); pg.wait_for_timeout(300)
        pg.evaluate(ARRANGE)
        fit=lambda: pg.evaluate("()=>{arrange();return 1}") and pg.evaluate("()=>Math.max(...[...document.querySelectorAll('.card')].map(c=>c.getBoundingClientRect().bottom))<=document.querySelector('footer').getBoundingClientRect().top-14 && document.body.scrollHeight<=1123")
        fs=9.4
        while fs<10.6:
            pg.evaluate(f"()=>document.documentElement.style.setProperty('--fs','{fs+0.1:.1f}pt')")
            if not fit(): break
            fs+=0.1
        pg.evaluate(f"()=>document.documentElement.style.setProperty('--fs','{fs:.1f}pt')"); pg.evaluate("()=>arrange()"); print('font',round(fs,1))
        r=pg.evaluate("()=>({h:document.body.scrollHeight, main:document.querySelector('main').scrollHeight, mainBox:document.querySelector('main').clientHeight, colsH:document.querySelector('.cols').getBoundingClientRect().height, lastCard:Math.max(...[...document.querySelectorAll('.card')].map(c=>c.getBoundingClientRect().bottom)), footerTop:document.querySelector('footer').getBoundingClientRect().top, fr:document.fonts.check('700 12px Fraunces')})")
        print(n,r)
        pg.pdf(path=f'/home/claude/cs2/out/Chapter{n}_CheatSheet.pdf',format='A4',print_background=True,margin={'top':'0','bottom':'0','left':'0','right':'0'})
    b.close()
