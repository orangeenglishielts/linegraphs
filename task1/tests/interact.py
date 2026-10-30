"""Play every activity in a book and report problems.

- choice / binary / sort: picks the right answer for each item
- hotspots: selects each target part in order
- builder: builds the right sentence and checks it is accepted
- fix: types the model correction and checks it is accepted, and that the
  unchanged wrong sentence is rejected
- write: pastes the model answer (text only) into the fields and lists any
  checks the model itself fails (a model should pass its own checks)
- mini tests: opens each one and answers every question

python3 task1/tests/interact.py bar-charts
"""
import sys, os, re, json
from playwright.sync_api import sync_playwright

slug = sys.argv[1]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
url = 'file://' + os.path.join(root, slug, 'index.html')

JS = r"""
async () => {
 const out=[]; const C=window.BOOK; const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const sleep=ms=>new Promise(r=>setTimeout(r,ms));
 for (const [id,o] of Object.entries(C.ACTS)) {
  const el=$(`[data-act="${id}"]`); if(!el){out.push(id+': NOT PLACED ON ANY PAGE');continue}
  try{
  if(o.type==='choice'){const ans=o.opts.findIndex(x=>x.ok);if(ans<0)out.push(id+': no correct option');$$('.opt',el).find(b=>+b.dataset.i===ans).click();if(!$$('.opt.right',el).length)out.push(id+': right answer not marked')}
  else if(o.type==='binary'){o.items.forEach((it,k)=>{const r=$(`.rowq[data-k="${k}"]`,el);$$('.chip',r)[it.a].click();if(!r.classList.contains('right'))out.push(id+': item '+k+' not marked right')});}
  else if(o.type==='sort'){o.items.forEach((it,k)=>{const r=$(`.rowq[data-k="${k}"]`,el);$$('.chip',r)[it.c].click();if(!r.classList.contains('right'))out.push(id+': item '+k+' not right')});}
  else if(o.type==='hotspots'){for(const t of o.targets){const g=$$('.hot',el).find(g=>g.dataset.part===t.part);if(!g){out.push(id+': no hotspot for '+t.part);break}g.dispatchEvent(new MouseEvent('click',{bubbles:true}))}const fb=$('.fb',el).textContent;if(!/found/i.test(fb))out.push(id+': hotspots not completed: '+fb.slice(0,80))}
  else if(o.type==='builder'){$('.rst',el).click();for(const t of o.chips){const b=$$('.pool .chip',el).find(b=>b.textContent===t);if(!b){out.push(id+': chip missing '+t);break}b.click()}$('.chk',el).click();if(!$('.built',el).classList.contains('right'))out.push(id+': correct order not accepted: '+$('.fb',el).textContent.slice(0,90))}
  else if(o.type==='fix'){o.items.forEach((it,k)=>{const r=$(`.rowq[data-k="${k}"]`,el),ta=$('textarea',r);
      ta.value=it.wrong;$('.fx',r).click();if(r.classList.contains('right'))out.push(id+': item '+k+' accepts the unchanged wrong sentence');
      ta.value=it.model;$('.fx',r).click();if(!r.classList.contains('right'))out.push(id+': item '+k+' rejects its own model: '+it.model)})}
  else if(o.type==='write'){const tmp=document.createElement('div');tmp.innerHTML=o.model;
      const paras=$$('p',tmp).map(p=>{const lab=$('.plabel',p);if(lab)lab.remove();return p.textContent.trim()});if(!paras.length)paras.push(tmp.textContent.trim());const vals={};
      if(o.fields.length===1)vals[o.fields[0].k]=paras.join('\n\n');else o.fields.forEach((f,i)=>vals[f.k]=paras[i]||'');
      const failed=o.checks.filter(c=>{try{return !c.fn(vals)}catch(e){return true}}).map(c=>c.t);
      if(failed.length)out.push(id+': MODEL FAILS ITS OWN CHECKS: '+failed.join(' | '));
      $$('.f1 textarea',el).forEach(t=>{t.value=vals[t.dataset.k]||'';t.dispatchEvent(new Event('input'))});$('.chk',el).click();if($('.after',el).hidden)out.push(id+': model answer did not appear')}
  else if(o.type==='timer'){$('.tm-go',el).click();await sleep(300);$('.tm-reset',el).click()}
  else if(o.type==='motion'){$$('.chip',el)[0].click()}
  else if(o.type==='drawit'){const real=o.chart.series[0].vals;$$('input[type=range]',el).forEach(inp=>{inp.value=real[+inp.dataset.i];inp.dispatchEvent(new Event('input'))});$('.dw-go',el).click();if(!/Good prediction/.test($('.fb',el).textContent))out.push(id+': real values not accepted');if(o.hide.some(i=>real[i]<o.min||real[i]>o.max||Math.round((real[i]-o.min)/o.step)*o.step+o.min!==real[i]))out.push(id+': a real value is off the slider scale')}
  else if(o.type==='keyfeat'){for(const k of o.keys){const g=$(`.pt[data-kf="${k.j}-${k.i}"]`,el);if(!g){out.push(id+': no point '+k.j+'-'+k.i);break}g.dispatchEvent(new MouseEvent('click',{bubbles:true}))}if(o.keys.length!==o.pick)out.push(id+': pick count differs from key count');$('.kf-go',el).click();const t=$('.fb',el).textContent;if(!new RegExp('chose '+o.keys.length+' of my '+o.keys.length).test(t))out.push(id+': keys not accepted: '+t.slice(0,80))}
  else if(o.type==='errhunt'){const n=(o.text.match(/\[\[/g)||[]).length;$$('.eh-e',el).forEach(sp=>sp.dispatchEvent(new MouseEvent('click',{bubbles:true})));if(!new RegExp('Found '+n+' of '+n).test($('.eh-count',el).textContent))out.push(id+': not all errors found');if(o.text.split(/\[\[.+?\]\]/).some(p=>/\[\[|\]\]/.test(p)))out.push(id+': malformed markers')}
  else out.push(id+': type '+o.type+' not tested');
  }catch(e){out.push(id+': ERROR '+e.message)}
 }
 // mini tests
 for (const n of Object.keys(C.MINITESTS)) {const b=$(`[data-minitest="${n}"] .mt-start`);if(!b){out.push('minitest '+n+': no start button');continue}b.click();await sleep(50);
   $$('#ov .oe-try').forEach(d=>{$$('.opt',d)[0].click()});const sc=$('#ov .mt-score');if(!/You scored/.test(sc.textContent))out.push('minitest '+n+': did not finish');$('#mt-done').click()}
 // every data-go target exists
 $$('[data-go]').forEach(g=>{const v=g.dataset.go;if(!/^\d+$/.test(v)&&!C.SPREADS.some(s=>s.id===v))out.push('broken link: '+v)});
 // every glossary term used on a page exists
 $$('.term').forEach(t=>{if(!C.GLOSS[t.dataset.term])out.push('missing glossary entry: '+t.dataset.term)});
 // every retrieval and minitest page reference exists
 Object.keys(C.RETRIEVAL).forEach(k=>{if(!C.SPREADS.some(s=>s.id===k))out.push('retrieval for unknown page '+k)});
 Object.values(C.MINITESTS).flat().forEach(q=>{if(q.sp&&!C.SPREADS.some(s=>s.id===q.sp))out.push('minitest links unknown page '+q.sp);if(q.opts.filter(x=>x.ok).length!==1)out.push('minitest question without exactly one answer: '+q.q)});
 Object.values(C.CANNOW).flat().forEach(([q,id])=>{if(!C.SPREADS.some(s=>s.id===id))out.push('can-do links unknown page '+id)});
 return out;
}
"""
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1400, 'height': 1000})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(url); pg.evaluate('localStorage.clear()'); pg.goto(url); pg.wait_for_timeout(800)
    res = pg.evaluate(JS)
    n = pg.evaluate('Object.keys(window.BOOK.ACTS).length')
    print(f'{n} activities played')
    for r in res: print('  -', r)
    print('page errors:', errs or 'none')
    # stats
    st = pg.evaluate("""(()=>{const C=window.BOOK;return {spreads:C.SPREADS.length,pages:C.SPREADS.length*2,gloss:Object.keys(C.GLOSS).length,videos:C.VIDEOS.length,minitest:Object.values(C.MINITESTS).flat().length,retrieval:Object.values(C.RETRIEVAL).flat().length}})()""")
    print(st)
    b.close()
