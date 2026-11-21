/* Orange English diagnostic engine (Nov 2026): varied, quick, visual tasks.
   Each page defines LINES, TITLE, Q, AREAS, score, G, app, i, and result().
   Task types: rank, order, build, tapg, spot, yesno, mc, multi, match. */
(function(){
const css=`
.dq-top{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.dq-bar{flex:1;height:12px;background:var(--line);border-radius:99px;overflow:hidden}
.dq-bar span{display:block;height:100%;background:var(--green);border-radius:99px;transition:width .35s}
.dq-n{font:600 13px/1 var(--f-ui);color:var(--muted);white-space:nowrap}
.dq-streak{font:700 12px/1 var(--f-ui);color:var(--orange-ink);background:var(--orange-soft);padding:5px 9px;border-radius:99px;white-space:nowrap}
.dq-p{font:700 clamp(19px,4.6vw,22px)/1.3 var(--f-display);margin:2px 0 14px;text-wrap:balance}
.dq-sub{color:var(--muted);font-size:14px;margin:-8px 0 12px}
.dq-cards{display:grid;gap:10px}
.dq-card{position:relative;text-align:left;font:inherit;font-size:15.5px;line-height:1.45;color:var(--ink);background:var(--surface);border:2px solid var(--line);border-bottom-width:4px;border-radius:14px;padding:13px 14px 13px 50px;cursor:pointer;min-height:52px;transition:transform .08s}
.dq-card:active{transform:translateY(2px)}
.dq-card .num{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:28px;height:28px;border-radius:50%;border:2px solid var(--line);display:grid;place-items:center;font:700 14px/1 var(--f-ui);color:var(--muted)}
.dq-card.on{border-color:var(--orange);background:var(--orange-soft)}
.dq-card.on .num{background:var(--orange);border-color:var(--orange);color:#fff}
.dq-card.right{border-color:var(--green);background:var(--green-soft)}.dq-card.wrong{border-color:var(--red-ink);background:var(--red-soft)}
.dq-line{min-height:56px;border-bottom:2px solid var(--line);display:flex;flex-wrap:wrap;gap:8px;align-items:flex-end;padding:6px 0 10px;margin-bottom:16px;font-size:16px}
.dq-line .txt{padding:8px 2px}
.dq-slot{min-width:80px;border-bottom:2px dashed var(--orange);height:40px}
.dq-bank{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.dq-tile{font:500 15.5px/1.2 var(--f-body);color:var(--ink);background:var(--surface);border:2px solid var(--line);border-bottom-width:4px;border-radius:12px;padding:10px 13px;cursor:pointer;min-height:44px}
.dq-tile.used{visibility:hidden}
.dq-tile:active{transform:translateY(2px)}
.dq-words{display:flex;flex-wrap:wrap;gap:6px;font-size:18px;line-height:1.4;margin:6px 0 4px}
.dq-w{font:inherit;color:var(--ink);background:none;border:0;border-bottom:2px dotted var(--line);padding:4px 3px;border-radius:6px;cursor:pointer;min-height:40px}
.dq-w.on{background:var(--orange-soft);border-bottom-color:var(--orange)}
.dq-w.right{background:var(--green-soft)}.dq-w.wrong{background:var(--red-soft)}
.dq-quote{font-size:18px;line-height:1.5;background:var(--surface);border:2px solid var(--line);border-radius:14px;padding:16px;margin-bottom:14px}
.dq-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.dq-two .dq-card{padding:16px;text-align:center;font-weight:600}
.dq-match{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.dq-col{display:grid;gap:10px;align-content:start}
.dq-m{font:500 15px/1.3 var(--f-body);color:var(--ink);background:var(--surface);border:2px solid var(--line);border-bottom-width:4px;border-radius:12px;min-height:58px;padding:8px;cursor:pointer;display:grid;place-items:center}
.dq-m svg{width:100%;max-width:110px;height:40px}
.dq-m.on{border-color:var(--orange);background:var(--orange-soft)}
.dq-m.done{border-color:var(--green);background:var(--green-soft);opacity:.55;cursor:default}
.dq-m.bad{border-color:var(--red-ink);background:var(--red-soft)}
.dq-graph{margin:0 0 14px}
.dq-gbtn{font:600 13px/1 var(--f-ui);background:var(--surface);color:var(--ink);border:1.5px solid var(--line);border-radius:99px;padding:9px 13px;cursor:pointer;margin-bottom:10px}
.hit{stroke:var(--orange);stroke-opacity:0;stroke-width:22;stroke-linecap:round;fill:none;cursor:pointer}
.hit:hover{stroke-opacity:.15}.hit.sel{stroke-opacity:.38}.hit.right{stroke:var(--green);stroke-opacity:.45}.hit.wrong{stroke:var(--red-ink);stroke-opacity:.38}
.hit:focus{outline:none}.hit:focus-visible{stroke-opacity:.25}
.dq-guess{display:inline-flex;gap:8px;align-items:center;font-size:13px;color:var(--muted);cursor:pointer;margin:14px 0 0}
.dq-guess input{width:18px;height:18px}
.dq-check{width:100%;margin-top:16px;padding:16px;font-size:16px;text-transform:none}
.dq-check:disabled{background:var(--line);color:var(--muted);cursor:default}
.dq-fb{margin:16px -20px -20px;padding:18px 20px 20px;border-radius:0 0 14px 14px}
.dq-fb.ok{background:var(--green-soft)}.dq-fb.no{background:var(--red-soft)}
.dq-fb h3{font:800 20px/1.2 var(--f-display);margin:0 0 6px}
.dq-fb.ok h3{color:var(--green-ink)}.dq-fb.no h3{color:var(--red-ink)}
.dq-fb p{margin:0 0 6px;font-size:15px}
.dq-fb .btn{width:100%;margin-top:10px;padding:16px}
.dq-fb.ok .btn{background:var(--green);color:#fff}
@keyframes dqpop{0%{transform:scale(1)}40%{transform:scale(1.03)}100%{transform:scale(1)}}
@keyframes dqshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
@media (prefers-reduced-motion:no-preference){.pop{animation:dqpop .3s}.shake{animation:dqshake .3s}}
@media (max-width:380px){.dq-card{font-size:15px}.dq-two{grid-template-columns:1fr}}`;
document.head.insertAdjacentHTML('beforeend','<style>'+css+'</style>');

const X=k=>44+k*64, Y=v=>200-v*1.6;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const YEARS=[2000,2005,2010,2015,2020];
window.chartSVG=function(mode){
  const grid=[0,25,50,75,100].map(v=>`<line x1="44" x2="300" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="36" y="${Y(v)+4}" font-size="11" text-anchor="end">${v}%</text>`).join('')+
    YEARS.map((yr,k)=>`<text x="${X(k)}" y="218" font-size="11" text-anchor="middle">${yr}</text>`).join('');
  const lines=LINES.map(([n,d,c])=>{const pts=d.map((v,k)=>[X(k),Y(v)]),last=pts[pts.length-1];
    return `<polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round"/>`+
      pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${c}"/>`).join('')+
      `<text x="${last[0]+6}" y="${last[1]+4}" font-size="11" font-weight="600" fill="${c}" style="fill:${c}">${n}</text>`}).join('');
  let hits='';
  if(mode==='seg')LINES.forEach(([n,d],s)=>{for(let k=0;k<d.length-1;k++)hits+=`<line class="hit" tabindex="0" role="button" aria-label="${n}, ${YEARS[k]} to ${YEARS[k+1]}" data-id="${s}:${k}" x1="${X(k)}" y1="${Y(d[k])}" x2="${X(k+1)}" y2="${Y(d[k+1])}"/>`});
  if(mode==='line')LINES.forEach(([n,d],s)=>{hits+=`<polyline class="hit" tabindex="0" role="button" aria-label="${n}" data-id="${s}" points="${d.map((v,k)=>X(k)+','+Y(v)).join(' ')}"/>`});
  return `<p class="chart-title">${TITLE}</p><svg class="chart" viewBox="0 0 360 236" role="img" aria-label="${esc(ARIA)}">${grid}${hits?'':lines}${hits?lines+hits:''}</svg>`;
};
const spark=d=>{const mx=Math.max(...d),mn=Math.min(...d),r=mx-mn||1;return `<svg viewBox="0 0 100 40" aria-hidden="true"><polyline points="${d.map((v,k)=>(6+k*88/(d.length-1))+','+(34-(v-mn)/r*28)).join(' ')}" fill="none" stroke="var(--orange)" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/></svg>`};
const shuffle=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(p=>p[1]);
const OK=["Nice!","Spot on.","Exactly right.","Well done.","That's it."],NO=["Not quite.","Almost.","Not this time."];
let streak=0;

window.render=function(){
  answered=false;const q=Q[i];const hd=document.querySelector('header');if(hd)hd.hidden=true;let st={sel:[],placed:[],miss:0,done:0};
  const needG=q.t!=='tapg'&&q.g;
  app.innerHTML=`<section class="card" id="dq">
    <div class="dq-top"><div class="dq-bar" aria-hidden="true"><span style="width:${i/Q.length*100}%"></span></div><span class="dq-n">${i+1}/${Q.length}</span>${streak>=2?`<span class="dq-streak">${streak} in a row</span>`:''}</div>
    <div class="dq-p">${q.p}</div>${q.sub?`<p class="dq-sub">${q.sub}</p>`:''}
    ${q.t==='tapg'?`<div class="dq-graph">${chartSVG(q.mode)}</div>`:(q.g?`<div class="dq-graph">${chartSVG()}</div>`:`<button type="button" class="dq-gbtn" aria-expanded="false">Show the graph</button><div class="dq-graph" hidden></div>`)}
    <div id="dq-body"></div>
    ${q.t==='yesno'||q.t==='match'?'':`<label class="dq-guess"><input type="checkbox" id="guess"> Not sure? Tick if you're guessing</label><button type="button" class="btn dq-check" disabled>Check</button>`}
    <div id="fb"></div></section>`;
  const root=document.getElementById('dq'),body=document.getElementById('dq-body'),chk=root.querySelector('.dq-check');
  const gb=root.querySelector('.dq-gbtn');if(gb)gb.onclick=()=>{const g=gb.nextElementSibling;if(!g.innerHTML)g.innerHTML=chartSVG();g.hidden=!g.hidden;gb.setAttribute('aria-expanded',!g.hidden);gb.textContent=g.hidden?'Show the graph':'Hide the graph'};
  const ready=v=>{if(chk)chk.disabled=!v};
  let grade=()=>false;

  if(q.t==='rank'||q.t==='order'){
    const items=shuffle(q.items.map((t,k)=>({t,k})));
    body.innerHTML=`<div class="dq-cards">${items.map(o=>`<button type="button" class="dq-card" data-k="${o.k}"><span class="num"></span>${o.t}</button>`).join('')}</div>`;
    const draw=()=>body.querySelectorAll('.dq-card').forEach(b=>{const n=st.sel.indexOf(+b.dataset.k);b.classList.toggle('on',n>=0);b.querySelector('.num').textContent=n>=0?n+1:''});
    body.querySelectorAll('.dq-card').forEach(b=>b.onclick=()=>{if(answered)return;const k=+b.dataset.k,n=st.sel.indexOf(k);if(n>=0)st.sel.splice(n);else st.sel.push(k);draw();ready(st.sel.length===q.items.length)});
    grade=()=>{const ok=st.sel.every((k,n)=>k===n);body.querySelectorAll('.dq-card').forEach(b=>{const k=+b.dataset.k;b.classList.add(st.sel.indexOf(k)===k?'right':'wrong')});return ok};
  }
  else if(q.t==='build'){
    const tiles=shuffle(q.tiles.map((t,k)=>({t,k})));
    body.innerHTML=`<div class="dq-line">${q.pre?`<span class="txt">${q.pre}</span>`:''}<span id="dq-zone" style="display:contents"></span>${q.ans.length===1?'':''}${q.post?`<span class="txt">${q.post}</span>`:''}</div><div class="dq-bank">${tiles.map(o=>`<button type="button" class="dq-tile" data-k="${o.k}">${o.t}</button>`).join('')}</div>`;
    const zone=body.querySelector('#dq-zone');
    const draw=()=>{zone.innerHTML=st.placed.length?st.placed.map((k,n)=>`<button type="button" class="dq-tile" data-n="${n}">${q.tiles[k]}</button>`).join(''):'<span class="dq-slot"></span>';
      zone.querySelectorAll('.dq-tile').forEach(b=>b.onclick=()=>{if(answered)return;st.placed.splice(+b.dataset.n,1);draw()});
      body.querySelectorAll('.dq-bank .dq-tile').forEach(b=>b.classList.toggle('used',st.placed.includes(+b.dataset.k)));
      ready(st.placed.length>0)};
    body.querySelectorAll('.dq-bank .dq-tile').forEach(b=>b.onclick=()=>{if(answered)return;const k=+b.dataset.k;if(st.placed.includes(k))return;if(q.ans.length===1)st.placed=[k];else st.placed.push(k);draw()});
    draw();
    grade=()=>st.placed.length===q.ans.length&&st.placed.every((k,n)=>q.tiles[k]===q.ans[n]);
  }
  else if(q.t==='tapg'){
    const hits=root.querySelectorAll('.hit'),N=q.ans.length;
    const tog=h=>{if(answered)return;const id=h.dataset.id,n=st.sel.indexOf(id);if(n>=0)st.sel.splice(n,1);else{st.sel.push(id);if(st.sel.length>N)st.sel.shift()}
      hits.forEach(x=>x.classList.toggle('sel',st.sel.includes(x.dataset.id)));ready(st.sel.length===N)};
    hits.forEach(h=>{h.onclick=()=>tog(h);h.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tog(h)}}});
    body.innerHTML=`<p class="small" style="margin:0">${N===1?'Tap one part of a line.':`Tap ${N===2?'two':N} ${q.mode==='line'?'lines':'parts of the lines'}.`} Tap again to undo.</p>`;
    grade=()=>{hits.forEach(h=>{const id=h.dataset.id;h.classList.remove('sel');if(q.ans.includes(id))h.classList.add('right');else if(st.sel.includes(id))h.classList.add('wrong')});return st.sel.length===N&&st.sel.every(x=>q.ans.includes(x))};
  }
  else if(q.t==='spot'){
    const w=q.s.split(' ');
    body.innerHTML=`<div class="dq-words">${w.map((x,k)=>`<button type="button" class="dq-w" data-k="${k}">${x}</button>`).join('')}</div>`;
    body.querySelectorAll('.dq-w').forEach(b=>b.onclick=()=>{if(answered)return;st.sel=[+b.dataset.k];body.querySelectorAll('.dq-w').forEach(x=>x.classList.toggle('on',x===b));ready(true)});
    grade=()=>{const ok=st.sel[0]===q.ans;body.querySelectorAll('.dq-w').forEach(b=>{const k=+b.dataset.k;b.classList.remove('on');if(k===q.ans)b.classList.add('right');else if(k===st.sel[0])b.classList.add('wrong')});return ok};
  }
  else if(q.t==='mc'||q.t==='multi'){
    const N=q.t==='multi'?q.ans.length:1,ans=q.t==='multi'?q.ans:[q.c];
    const items=shuffle(q.o.map((t,k)=>({t,k})));
    body.innerHTML=`<div class="dq-cards">${items.map(o=>`<button type="button" class="dq-card" data-k="${o.k}" style="padding-left:14px">${o.t}</button>`).join('')}</div>`;
    body.querySelectorAll('.dq-card').forEach(b=>b.onclick=()=>{if(answered)return;const k=+b.dataset.k,n=st.sel.indexOf(k);if(n>=0)st.sel.splice(n,1);else{if(N===1)st.sel=[];st.sel.push(k);if(st.sel.length>N)st.sel.shift()}
      body.querySelectorAll('.dq-card').forEach(x=>x.classList.toggle('on',st.sel.includes(+x.dataset.k)));ready(st.sel.length===N)});
    grade=()=>{body.querySelectorAll('.dq-card').forEach(b=>{const k=+b.dataset.k;b.classList.remove('on');if(ans.includes(k))b.classList.add('right');else if(st.sel.includes(k))b.classList.add('wrong')});return st.sel.length===N&&st.sel.every(k=>ans.includes(k))};
  }
  else if(q.t==='yesno'){
    body.innerHTML=`<div class="dq-quote">${q.s}</div><div class="dq-two">${q.o.map((t,k)=>`<button type="button" class="dq-card" data-k="${k}">${t}</button>`).join('')}</div><label class="dq-guess"><input type="checkbox" id="guess"> Not sure? Tick if you're guessing</label>`;
    body.querySelectorAll('.dq-card').forEach(b=>b.onclick=()=>{if(answered)return;const k=+b.dataset.k;body.querySelectorAll('.dq-card').forEach(x=>{const n=+x.dataset.k;if(n===q.ans)x.classList.add('right');else if(n===k)x.classList.add('wrong')});finish(k===q.ans)});
  }
  else if(q.t==='match'){
    const L=shuffle(q.pairs.map((p,k)=>({p,k}))),R=shuffle(q.pairs.map((p,k)=>({p,k})));let pick=null;
    body.innerHTML=`<div class="dq-match"><div class="dq-col">${L.map(o=>`<button type="button" class="dq-m" data-side="l" data-k="${o.k}" aria-label="Trend shape ${o.k+1}">${spark(o.p[0])}</button>`).join('')}</div><div class="dq-col">${R.map(o=>`<button type="button" class="dq-m" data-side="r" data-k="${o.k}">${o.p[1]}</button>`).join('')}</div></div>`;
    const bs=body.querySelectorAll('.dq-m');
    bs.forEach(b=>b.onclick=()=>{if(answered||b.classList.contains('done'))return;
      if(!pick||pick.dataset.side===b.dataset.side){if(pick)pick.classList.remove('on');pick=b;b.classList.add('on');return}
      const a=pick;pick=null;a.classList.remove('on');
      if(a.dataset.k===b.dataset.k){a.classList.add('done');b.classList.add('done');st.done++;if(st.done===q.pairs.length)finish(st.miss===0)}
      else{st.miss++;[a,b].forEach(x=>{x.classList.add('bad','shake');setTimeout(()=>x.classList.remove('bad','shake'),450)})}});
  }

  if(chk)chk.onclick=()=>{if(answered)return;finish(grade())};
  function finish(ok){
    if(answered)return;answered=true;
    const g=document.getElementById('guess');G[i]={a:q.a,guess:!!(g&&g.checked),ok};if(g)g.disabled=true;
    if(ok){score[q.a]++;streak++}else streak=0;
    if(chk)chk.remove();const gl=root.querySelector('.dq-guess');if(gl)gl.style.opacity=.5;
    root.classList.add(ok?'pop':'shake');
    const last=i===Q.length-1;
    const fb=document.getElementById('fb');
    fb.innerHTML=`<div class="dq-fb ${ok?'ok':'no'}" role="status"><h3>${(ok?OK:NO)[Math.floor(Math.random()*(ok?OK:NO).length)]}</h3>${!ok&&q.fix?`<p><b>Answer:</b> ${q.fix}</p>`:''}${q.t==='match'&&ok===false?`<p>You matched them all in the end, with ${st.miss} wrong ${st.miss===1?'try':'tries'} on the way.</p>`:''}<p>${q.e}</p><button type="button" class="btn" id="next">${last?'See my result':'Continue'}</button></div>`;
    const nb=document.getElementById('next');nb.focus({preventScroll:true});
    fb.scrollIntoView({behavior:'smooth',block:'nearest'});
    nb.onclick=()=>{i++;if(i<Q.length)render();else{streak=0;const hd=document.querySelector('header');if(hd)hd.hidden=false;result()}window.scrollTo({top:0})};
  }
};
})();
