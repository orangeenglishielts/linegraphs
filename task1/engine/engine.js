
/* ==========================================================================
   ORANGE ENGLISH INTERACTIVE BOOK · ENGINE
   Shared by every Orange English Task 1 book. Each book sets window.BOOK
   (NS, TITLE, NCH, SPREADS, ACTS, GLOSS, CHARTS, VIDEOS, RETRIEVAL,
   MINITESTS, CANNOW, EXTRAS, ALSO, SHEETS, DIAG) before this script.
   Charts: line (default), bar (vertical or horiz), pie, table, raw (maps, processes).
   Reusable: store, charts, glossary, activities
   (choice, binary, sort, hotspots, sections, motion, builder, fix, write,
   timer, annotate, selfcheck), journal, retrieval, navigation, bookmark.
   Links: data-go takes a spread index or a spread id (data-go="dict").
   Content lives in content.js (SPREADS, ACTS, GLOSS, RETRIEVAL).
   ========================================================================== */
(function(){
'use strict';
const C=window.BOOK;  // content
const NS=C.NS||'oe-book-';const NCH=C.NCH||6;
const S={get(k,d){try{const v=localStorage.getItem(NS+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
         set(k,v){try{localStorage.setItem(NS+k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const strip=s=>String(s).replace(/<[^>]+>/g,'');
const words=t=>(String(t).match(/[A-Za-z0-9€%'’\-.,]+/g)||[]).filter(w=>/[A-Za-z0-9]/.test(w)).length;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const results=S.get('results',{});
function track(actId,itemId,first,spread){const k=actId+(itemId!=null?':'+itemId:'');if(!(k in results)){results[k]={first,spread,act:actId};S.set('results',results)}refreshReviews()}

/* ---------------- charts ---------------- */
function lineChart(o){
  const W=o.w||560,H=o.h||330,L=58,R=18,titleLines=o.title?[].concat(o.title):[],T=16+titleLines.length*17+(titleLines.length?8:0);
  const multi=o.series.length>1,B=multi?80:50,pw=W-L-R,ph=H-T-B,n=o.x.length,ymin=o.ymin||0;
  const X=i=>L+pw*i/(n-1),Y=v=>T+ph*(1-(v-ymin)/(o.ymax-ymin));
  const hot=!!o.hot,id=o.id;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif">`;
  s+=`<title id="${id}-t">${esc(titleLines.join(' '))}</title>`;
  const grp=(part,label,inner,hit)=>hot?`<g class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}">${hit}${inner}</g>`:inner;
  // title
  if(titleLines.length){let t='';titleLines.forEach((ln,i)=>{t+=`<text x="${W/2}" y="${18+i*17}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="#292929">${esc(ln)}</text>`});
    s+=grp('title','Graph title',t,`<rect class="hit" x="${L-10}" y="2" width="${pw+20}" height="${titleLines.length*17+8}" rx="6"/>`)}
  // grid
  let yt='';for(let v=ymin;v<=o.ymax+1e-9;v+=o.ystep){const y=Y(v);s+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="#ECE7DC" stroke-width="1"/>`;yt+=`<text x="${L-8}" y="${y+4}" text-anchor="end" font-size="11.5" fill="#55534E">${esc(o.tick?o.tick(v):v)}</text>`}
  yt+=`<text transform="translate(16 ${T+ph/2}) rotate(-90)" text-anchor="middle" font-size="12" font-weight="600" fill="#292929">${esc(o.ylab)}</text>`;
  s+=grp('y','Vertical axis',yt,`<rect class="hit" x="2" y="${T-6}" width="${L-4}" height="${ph+12}" rx="6"/>`);
  s+=`<line x1="${L}" x2="${W-R}" y1="${T+ph}" y2="${T+ph}" stroke="#292929" stroke-width="1.2"/>`;
  let xt='';o.x.forEach((lab,i)=>{xt+=`<text x="${X(i)}" y="${T+ph+18}" text-anchor="middle" font-size="11.5" fill="#55534E">${esc(lab)}</text>`});
  if(o.xlab)xt+=`<text x="${L+pw/2}" y="${T+ph+36}" text-anchor="middle" font-size="12" font-weight="600" fill="#292929">${esc(o.xlab)}</text>`;
  s+=grp('x','Horizontal axis',xt,`<rect class="hit" x="${L-14}" y="${T+ph+4}" width="${pw+28}" height="${o.xlab?40:22}" rx="6"/>`);
  // sections (bands under lines)
  if(o.sections){o.sections.forEach((b,k)=>{const x0=X(b.a),x1=X(b.b);s+=`<g class="band" data-sec="${k}" tabindex="0" role="button" aria-label="Section ${b.lab}, ${esc(o.x[b.a])} to ${esc(o.x[b.b])}"><rect x="${x0}" y="${T}" width="${x1-x0}" height="${ph}"/><text class="bandlab" x="${(x0+x1)/2}" y="${T+14}" text-anchor="middle">${b.lab}</text></g>`})}
  // lines
  o.series.forEach((se,j)=>{let pen='M';const d=se.vals.map((v,i)=>{if(v==null){pen='M';return ''}const c=pen+X(i).toFixed(1)+','+Y(v).toFixed(1);pen='L';return c}).filter(Boolean).join(' ');
    const path=`<path d="${d}" fill="none" stroke="${se.color}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"${se.dash?` stroke-dasharray="${se.dash===1?'7 5':se.dash}"`:''}/>`;
    s+=hot?`<g class="hot" data-part="line" tabindex="0" role="button" aria-label="${esc(se.name)} line"><path class="hitp" d="${d}" fill="none" stroke="transparent" stroke-width="16"/>${path}</g>`:path});
  if(o.sections){o.sections.forEach((b,k)=>{const se=o.series[0];let d='';for(let i=b.a;i<=b.b;i++)d+=(i===b.a?'M':'L')+X(i).toFixed(1)+','+Y(se.vals[i]).toFixed(1)+' ';s+=`<path class="seg" data-seg="${k}" d="${d}"/>`})}
  // points
  o.series.forEach((se,j)=>se.vals.forEach((v,i)=>{if(v==null||(se.noPt&&se.noPt.includes(i)))return;const cx=X(i),cy=Y(v),tip=`${se.name}, ${o.x[i]}: ${o.fmt?o.fmt(v):v}`;
    const dot=`<circle class="dot" cx="${cx}" cy="${cy}" r="4.2" fill="#fff" stroke="${se.color}" stroke-width="2.4"/>`;
    if(hot&&o.hotPoint&&o.hotPoint[0]===j&&o.hotPoint[1]===i){s+=`<g class="hot" data-part="point" tabindex="0" role="button" aria-label="Data point, ${esc(tip)}"><circle class="hit" cx="${cx}" cy="${cy}" r="13"/>${dot}</g>`}
    else if(o.points&&!hot){s+=`<g class="pt" tabindex="0" role="img" aria-label="${esc(tip)}" data-tip="${esc(tip)}"><circle cx="${cx}" cy="${cy}" r="12" fill="transparent"/>${dot}</g>`}
    else s+=dot}));
  // marks (numbered annotations)
  (o.marks||[]).forEach(m=>{const cx=m.x!=null?L+pw*m.x/(n-1):X(m.i),cy=Y(m.v);s+=`<g><circle cx="${cx}" cy="${cy}" r="10.5" fill="#F88B48" stroke="#fff" stroke-width="2"/><text x="${cx}" y="${cy+4}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="11" fill="#292929">${m.n}</text></g>`});
  // legend
  if(multi){let lg='',lx=L;const ly=H-22;o.series.forEach(se=>{lg+=`<line x1="${lx}" x2="${lx+26}" y1="${ly}" y2="${ly}" stroke="${se.color}" stroke-width="3.2"${se.dash?` stroke-dasharray="${se.dash===1?'7 5':se.dash}"`:''}/><text x="${lx+32}" y="${ly+4}" font-size="12" fill="#292929">${esc(se.name)}</text>`;lx+=40+se.name.length*7.2+18});
    s+=grp('legend','Legend',lg,`<rect class="hit" x="${L-8}" y="${ly-14}" width="${lx-L}" height="28" rx="6"/>`)}
  return s+'</svg>';
}
/* ---------------- more chart types: bar, pie, table, raw (maps, processes) ---------------- */
const PAL=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const fmtv=(o,v)=>o.fmt?o.fmt(v):v;
function svgTitle(o,W,L,pw){const tl=o.title?[].concat(o.title):[];let t='';tl.forEach((ln,i)=>{t+=`<text x="${W/2}" y="${18+i*17}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="#292929">${esc(ln)}</text>`});return{tl,t,hit:`<rect class="hit" x="${(L||10)-10}" y="2" width="${(pw||W-20)+20}" height="${tl.length*17+8}" rx="6"/>`}}
function legendRow(o,items,W,y,L,grp){let lg='',lx=L;items.forEach(it=>{lg+=`<rect x="${lx}" y="${y-7}" width="14" height="14" rx="3" fill="${it.color}"/><text x="${lx+20}" y="${y+4}" font-size="12" fill="#292929">${esc(it.name)}</text>`;lx+=30+it.name.length*7+16});
  return grp('legend','Legend',lg,`<rect class="hit" x="${L-8}" y="${y-14}" width="${lx-L}" height="28" rx="6"/>`)}
function barChart(o){
  const hz=!!o.horiz,ser=o.series,ns=ser.length,n=o.x.length,ymin=o.ymin||0,hot=!!o.hot,id=o.id;
  const W=o.w||560,tl=o.title?[].concat(o.title):[],T=16+tl.length*17+(tl.length?8:0);
  const labW=hz?(o.labW||Math.min(170,10+Math.max(...o.x.map(x=>String(x).length))*6.6)):0;
  const H=o.h||(hz?T+n*(ns*16+14)+(ns>1?84:56):340);
  const L=hz?labW+12:58,R=hz?36:18,B=hz?(ns>1?84:56):(ns>1?(o.xlab?96:80):(o.xlab?66:50)),pw=W-L-R,ph=H-T-B;
  const grp=(part,label,inner,hit)=>hot?`<g class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}">${hit}${inner}</g>`:inner;
  const V=v=>(v-ymin)/(o.ymax-ymin);
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif"><title id="${id}-t">${esc(tl.join(' '))}</title>`;
  const st=svgTitle(o,W,L,pw);if(tl.length)s+=grp('title','Chart title',st.t,st.hit);
  // value axis + grid
  let vt='';for(let v=ymin;v<=o.ymax+1e-9;v+=o.ystep){if(hz){const x=L+pw*V(v);s+=`<line x1="${x}" x2="${x}" y1="${T}" y2="${T+ph}" stroke="#ECE7DC"/>`;vt+=`<text x="${x}" y="${T+ph+16}" text-anchor="middle" font-size="11.5" fill="#55534E">${esc(o.tick?o.tick(v):v)}</text>`}
    else{const y=T+ph*(1-V(v));s+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="#ECE7DC"/>`;vt+=`<text x="${L-8}" y="${y+4}" text-anchor="end" font-size="11.5" fill="#55534E">${esc(o.tick?o.tick(+v.toFixed(6)):+v.toFixed(6))}</text>`}}
  if(hz){vt+=`<text x="${L+pw/2}" y="${T+ph+34}" text-anchor="middle" font-size="12" font-weight="600" fill="#292929">${esc(o.ylab)}</text>`;s+=grp('y','Value axis',vt,`<rect class="hit" x="${L-14}" y="${T+ph+2}" width="${pw+28}" height="40" rx="6"/>`)}
  else{vt+=`<text transform="translate(16 ${T+ph/2}) rotate(-90)" text-anchor="middle" font-size="12" font-weight="600" fill="#292929">${esc(o.ylab)}</text>`;s+=grp('y','Vertical axis',vt,`<rect class="hit" x="2" y="${T-6}" width="${L-4}" height="${ph+12}" rx="6"/>`)}
  // bars
  const band=(hz?ph:pw)/n,gw=band*(o.gap||0.72),bw=gw/ns;
  const base=hz?L+pw*V(Math.max(ymin,0)):T+ph*(1-V(Math.max(ymin,0)));
  let ct='';o.x.forEach((lab,i)=>{const c=(hz?T:L)+band*i+band/2;
    if(hz)ct+=`<text x="${L-8}" y="${c+4}" text-anchor="end" font-size="12" fill="#292929">${esc(lab)}</text>`;
    else{const parts=String(lab).split('|');parts.forEach((p,k)=>{ct+=`<text x="${c}" y="${T+ph+18+k*14}" text-anchor="middle" font-size="11.5" fill="#55534E">${esc(p)}</text>`})}});
  if(!hz&&o.xlab)ct+=`<text x="${L+pw/2}" y="${T+ph+(String(o.x.join('')).includes('|')?50:38)}" text-anchor="middle" font-size="12" font-weight="600" fill="#292929">${esc(o.xlab)}</text>`;
  s+=hz?grp('x','Categories',ct,`<rect class="hit" x="2" y="${T-4}" width="${L-6}" height="${ph+8}" rx="6"/>`):grp('x','Horizontal axis',ct,`<rect class="hit" x="${L-14}" y="${T+ph+4}" width="${pw+28}" height="${o.xlab?44:26}" rx="6"/>`);
  ser.forEach((se,j)=>se.vals.forEach((v,i)=>{if(v==null)return;const a=(hz?T:L)+band*i+(band-gw)/2+bw*j,len=(hz?pw:ph)*(V(v)-V(Math.max(ymin,0)));
    const r=hz?`x="${base}" y="${a+1}" width="${Math.max(0,len)}" height="${bw-2}"`:`x="${a+1}" y="${base-len}" width="${bw-2}" height="${Math.max(0,len)}"`;
    const col=(se.colors&&se.colors[i])||se.color||PAL[j],tip=`${se.name?se.name+', ':''}${o.x[i]}: ${fmtv(o,v)}`;
    const rect=`<rect class="bar tipa" ${r} fill="${col}" rx="2"${se.hatch?' fill-opacity=".55"':''}/>`;
    let lbl='';if(o.labels){lbl=hz?`<text x="${base+len+5}" y="${a+bw/2+4}" font-size="11" font-weight="600" fill="#292929">${esc(o.labelFmt?o.labelFmt(v):fmtv(o,v))}</text>`:`<text x="${a+bw/2}" y="${base-len-5}" text-anchor="middle" font-size="11" font-weight="600" fill="#292929">${esc(o.labelFmt?o.labelFmt(v):fmtv(o,v))}</text>`}
    if(hot&&o.hotBar&&o.hotBar[0]===j&&o.hotBar[1]===i)s+=`<g class="hot" data-part="point" tabindex="0" role="button" aria-label="One bar, ${esc(tip)}"><rect class="hit" ${hz?`x="${base-4}" y="${a-3}" width="${len+8}" height="${bw+6}"`:`x="${a-3}" y="${base-len-4}" width="${bw+6}" height="${len+8}"`} rx="4"/>${rect}</g>`;
    else if(!hot&&o.points!==0)s+=`<g class="pt" tabindex="0" role="img" aria-label="${esc(tip)}" data-tip="${esc(tip)}">${rect}${lbl}</g>`;
    else s+=rect+lbl}));
  s+=hz?`<line x1="${base}" x2="${base}" y1="${T}" y2="${T+ph}" stroke="#292929" stroke-width="1.2"/>`:`<line x1="${L}" x2="${W-R}" y1="${base}" y2="${base}" stroke="#292929" stroke-width="1.2"/>`;
  (o.marks||[]).forEach(m=>{const j=m.j||0,a=(hz?T:L)+band*m.i+(band-gw)/2+bw*j+bw/2,v=m.v!=null?m.v:ser[j].vals[m.i],len=(hz?pw:ph)*(V(v)-V(Math.max(ymin,0)));const off=o.labels?(hz?40:30):14,cx=hz?base+len+off:a,cy=hz?a:base-len-off;
    s+=`<g><circle cx="${cx}" cy="${cy}" r="10.5" fill="#F88B48" stroke="#fff" stroke-width="2"/><text x="${cx}" y="${cy+4}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="11" fill="#292929">${m.n}</text></g>`});
  if(ns>1)s+=legendRow(o,ser.map((se,j)=>({name:se.name,color:se.color||PAL[j]})),W,H-22,hz?Math.max(14,L-labW):L,grp);
  return s+'</svg>'}
function pieChart(o){
  const pies=o.pies,np=pies.length,hot=!!o.hot,id=o.id,W=o.w||560,tl=o.title?[].concat(o.title):[],T=16+tl.length*17+(tl.length?8:0);
  const R=o.r||(np===1?105:np===2?88:np===3?70:56),cellW=W/np,lgRows=Math.ceil(o.cats.reduce((a,c)=>a+30+c.length*7+16,0)/(W-40)),PT=T+(pies.some(p=>p.label)?40:24),H=o.h||PT+2*R+44+lgRows*24+12;
  const grp=(part,label,inner,hit)=>hot?`<g class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}">${hit}${inner}</g>`:inner;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif"><title id="${id}-t">${esc(tl.join(' '))}</title>`;
  const st=svgTitle(o,W,20,W-40);if(tl.length)s+=grp('title','Chart title',st.t,st.hit);
  const cols=o.colors||PAL;
  pies.forEach((p,k)=>{const cx=cellW*k+cellW/2,cy=PT+R,tot=p.vals.reduce((a,b)=>a+b,0);let a0=-Math.PI/2;const placed=[];
    const lab=`<text x="${cx}" y="${T+8}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="12.5" fill="#292929">${esc(p.label||'')}</text>`;
    s+=p.label?grp('x','Pie label',lab,`<rect class="hit" x="${cx-55}" y="${T-7}" width="110" height="21" rx="6"/>`):'';
    p.vals.forEach((v,i)=>{if(!v)return;const a1=a0+2*Math.PI*v/tot,lg=(a1-a0)>Math.PI?1:0,x0=cx+R*Math.cos(a0),y0=cy+R*Math.sin(a0),x1=cx+R*Math.cos(a1),y1=cy+R*Math.sin(a1),am=(a0+a1)/2;
      const d=v>=tot?`M${cx-R},${cy} a${R},${R} 0 1,0 ${2*R},0 a${R},${R} 0 1,0 ${-2*R},0`:`M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${lg},1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`;
      const tip=`${o.cats[i]}${p.label?', '+p.label:''}: ${fmtv(o,v)}`;const sl=`<path class="slice tipa" d="${d}" fill="${cols[i%cols.length]}" stroke="#fff" stroke-width="1.5"/>`;
      const share=v/tot;let lr=share<0.07?R+15:R*0.64,tx=cx+lr*Math.cos(am),ty=cy+lr*Math.sin(am);if(share<0.07){let guard=0;while(guard++<6&&placed.some(q=>Math.abs(q[0]-tx)<30&&Math.abs(q[1]-ty)<14)){lr+=14;tx=cx+lr*Math.cos(am);ty=cy+lr*Math.sin(am)}placed.push([tx,ty])}const dark=['#292929','#2B6E43','#4E4178'].includes(cols[i%cols.length]);
      const txt=o.noLabels?'':`<text x="${tx.toFixed(1)}" y="${(ty+4).toFixed(1)}" text-anchor="middle" font-size="${share<0.07?10.5:11.5}" font-weight="700" fill="${share<0.07?'#292929':(dark?'#fff':'#292929')}">${esc(o.labelFmt?o.labelFmt(v):fmtv(o,v))}</text>`;
      if(hot&&o.hotSlice&&o.hotSlice[0]===k&&o.hotSlice[1]===i)s+=`<g class="hot" data-part="point" tabindex="0" role="button" aria-label="One segment, ${esc(tip)}">${sl.replace('class="slice tipa"','class="slice tipa hit2"')}${txt}</g>`;
      else if(!hot)s+=`<g class="pt" tabindex="0" role="img" aria-label="${esc(tip)}" data-tip="${esc(tip)}">${sl}${txt}</g>`;else s+=sl+txt;a0=a1})});
  // legend (wraps)
  let lg='',lx=20,ly=PT+2*R+40;o.cats.forEach((c,i)=>{const w=30+c.length*7+16;if(lx+w>W-10){lx=20;ly+=24}lg+=`<rect x="${lx}" y="${ly-7}" width="14" height="14" rx="3" fill="${cols[i%cols.length]}"/><text x="${lx+20}" y="${ly+4}" font-size="12" fill="#292929">${esc(c)}</text>`;lx+=w});
  s+=grp('legend','Legend',lg,`<rect class="hit" x="12" y="${PT+2*R+26}" width="${W-24}" height="${ly-(PT+2*R+26)+18}" rx="6"/>`);
  return s+'</svg>'}
function tableChart(o){const hot=!!o.hot;const h=(part,label,inner,tag,attrs)=>hot?`<${tag} class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}"${attrs||''}>${inner}</${tag}>`:`<${tag}${attrs||''}>${inner}</${tag}>`;
  const tl=o.title?[].concat(o.title).join(' '):'';
  let t=`<div class="dtable-wrap"><table class="dtable"><caption>${hot?`<span class="hot" data-part="title" tabindex="0" role="button" aria-label="Table title">${esc(tl)}</span>`:esc(tl)}</caption>`;
  t+=`<thead><tr>${o.cols.map((c,j)=>j===0?`<th scope="col">${esc(c)}</th>`:(hot?`<th scope="col" class="hot" data-part="x" tabindex="0" role="button" aria-label="Column heading ${esc(c)}">${esc(c)}</th>`:`<th scope="col">${esc(c)}</th>`)).join('')}</tr></thead><tbody>`;
  o.rows.forEach((r,i)=>{t+=`<tr>${r.map((c,j)=>{if(j===0)return hot?`<th scope="row" class="hot" data-part="y" tabindex="0" role="button" aria-label="Row heading ${esc(c)}">${esc(c)}</th>`:`<th scope="row">${esc(c)}</th>`;
    const cell=esc(o.fmt&&typeof c==='number'?o.fmt(c):c);if(hot&&o.hotCell&&o.hotCell[0]===i&&o.hotCell[1]===j)return `<td class="hot" data-part="point" tabindex="0" role="button" aria-label="One figure, ${esc(r[0])}, ${esc(o.cols[j])}">${cell}</td>`;
    const hl=o.hl&&o.hl.some(([a,b])=>a===i&&b===j);return `<td${hl?' class="hlc"':''}>${cell}</td>`}).join('')}</tr>`});
  t+=`</tbody></table>${o.note?`<p class="dtable-note">${o.note}</p>`:''}</div>`;return t}
function drawChart(o){if(o.type==='bar')return barChart(o);if(o.type==='pie')return pieChart(o);if(o.type==='table')return tableChart(o);if(o.type==='raw')return typeof o.svg==='function'?o.svg(o):o.svg;return lineChart(o)}

function chartBox(o,extra){return `<figure class="chart${o.type?' chart-'+o.type:''}" data-chart="${o.id}">${drawChart(o)}<span class="tip" aria-hidden="true"></span>${extra||''}</figure>`}
function enhanceCharts(root){$$('.chart',root).forEach(ch=>{if(ch._en)return;ch._en=1;const tip=$('.tip',ch);
  const show=g=>{const c=$('.tipa',g)||$('circle.dot',g)||g,r=c.getBoundingClientRect(),b=ch.getBoundingClientRect();tip.textContent=g.dataset.tip;tip.style.left=(r.left+r.width/2-b.left)+'px';tip.style.top=(r.top-b.top)+'px';tip.classList.add('on')};
  const hide=()=>tip.classList.remove('on');
  $$('.pt',ch).forEach(g=>{g.addEventListener('pointerenter',()=>show(g));g.addEventListener('pointerleave',hide);g.addEventListener('focus',()=>show(g));g.addEventListener('blur',hide);g.addEventListener('click',()=>show(g))})})}

/* ---------------- glossary ---------------- */
let glossReturn=null;
function openGloss(key,from){const g=C.GLOSS[key];if(!g)return;glossReturn=from||document.activeElement;const p=$('#gloss');
  p.innerHTML=`<button class="x" aria-label="Close glossary">✕</button><span class="eyebrow">Glossary</span><h4 id="gl-h">${esc(g.term)}</h4><p class="def">${g.def}</p><svg viewBox="0 0 240 90" aria-hidden="true"><line x1="10" y1="80" x2="230" y2="80" stroke="#E4DED1"/><path class="ln" pathLength="1" d="${g.path}"/></svg><p class="ex">${g.ex}</p><p class="pron">Pronunciation: recording to be added.</p>`;
  p.hidden=false;p.setAttribute('aria-labelledby','gl-h');$('.x',p).onclick=closeGloss;$('.x',p).focus()}
function closeGloss(){const p=$('#gloss');if(p.hidden)return;p.hidden=true;if(glossReturn&&glossReturn.focus)glossReturn.focus()}
document.addEventListener('click',e=>{const t=e.target.closest('.term');if(t){e.preventDefault();if(t.closest('#ov')){closeOverlay();openGloss(t.dataset.term,document.getElementById('glossbtn'))}else openGloss(t.dataset.term,t)}});

/* ---------------- journal ---------------- */
function journal(){return S.get('journal',[])}
function journalBtn(host,entry){if(!host||$('.jbtn',host))return;const key=entry.key;const saved=journal().some(j=>j.key===key);
  const b=document.createElement('button');b.type='button';b.className='btn ghost jbtn';b.style.marginTop='10px';b.style.minHeight='36px';b.style.padding='6px 12px';b.style.fontSize='12.5px';
  const set=on=>{b.textContent=on?'Saved to your journal ✓':'Save to my journal';b.disabled=on};set(saved);
  b.onclick=()=>{const j=journal();if(!j.some(x=>x.key===key)){j.push(Object.assign({ts:Date.now()},entry));S.set('journal',j)}set(true);renderDict()};host.appendChild(b)}
function jEntry(act,item,mistake,better,why){return{key:act.id+':'+item+':'+strip(mistake),where:act._spreadTitle,mistake:strip(mistake),better:strip(better),why:strip(why)}}

/* ---------------- activities ---------------- */
function head(o){return `<div class="meta"><span class="level ${o.level.toLowerCase()}">${o.level}</span>${o.skill?`<span class="small">${o.skill}</span>`:''}</div>${o.decision?`<span class="decision">${o.decision}</span>`:''}${o.prompt?`<p class="prompt">${o.prompt}</p>`:''}`}
const mix=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const A={};
A.choice=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+`<div class="opts">${mix(o.opts.map((x,i)=>[x,i])).map(([x,i])=>`<button type="button" class="opt" data-i="${i}">${x.t}<span class="why" hidden>${x.why}</span></button>`).join('')}</div><div class="jhost"></div>`;
  const btns=$$('.opt',el).sort((a,b)=>a.dataset.i-b.dataset.i),ans=o.opts.findIndex(x=>x.ok);
  const reveal=(p,init)=>{btns.forEach((b,i)=>{b.disabled=true;$('.why',b).hidden=false;b.classList.add(i===ans?'right':(i===p?'wrong':'other'))});
    if(!init){track(o.id,null,p===ans,o._spread);S.set('a-'+o.id,p);gate(o.id)}
    if(p!==ans&&o.journal!==false)journalBtn($('.jhost',el),jEntry(o,'',o.jm?o.jm(o.opts[p]):o.opts[p].t,o.jb?o.jb(o.opts[ans]):o.opts[ans].t,o.opts[p].why))};
  btns.forEach((b,i)=>b.onclick=()=>reveal(i));const sv=S.get('a-'+o.id,null);if(sv!==null)reveal(sv,true)};
A.binary=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+`<div class="rows">${o.items.map((it,k)=>`<div class="rowq" data-k="${k}"><p class="q">${it.t}</p><div class="bt">${o.labels.map((l,j)=>`<button type="button" class="chip" data-j="${j}">${l}</button>`).join('')}</div><p class="why"></p><div class="jhost"></div></div>`).join('')}</div>`;
  const st=S.get('a-'+o.id,{});
  $$('.rowq',el).forEach(r=>{const k=+r.dataset.k,it=o.items[k];const pick=(j,init)=>{$$('.chip',r).forEach(c=>{c.disabled=true;const jj=+c.dataset.j;if(jj===it.a)c.classList.add('right');else if(jj===j)c.classList.add('wrong')});
      r.classList.add(j===it.a?'right':'wrong');const w=$('.why',r);w.innerHTML=(j===it.a?'<b>Good decision.</b> ':'<b>Look again.</b> ')+(j===it.a?it.right:it.wrong);w.classList.add('show');
      if(!init){st[k]=j;S.set('a-'+o.id,st);track(o.id,k,j===it.a,o._spread)}
      if(j!==it.a)journalBtn($('.jhost',r),jEntry(o,k,`${o.labels[j]}: ${it.t}`,`${o.labels[it.a]}`,it.wrong))};
    $$('.chip',r).forEach(c=>c.onclick=()=>pick(+c.dataset.j));if(k in st)pick(st[k],true)})};
A.sort=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+`<div class="rows">${o.items.map((it,k)=>`<div class="rowq" data-k="${k}"><p class="q"><b>${it.w}</b></p><div class="bt">${o.cats.map((c,j)=>`<button type="button" class="chip" data-j="${j}">${c}</button>`).join('')}</div><p class="why"></p><div class="jhost"></div></div>`).join('')}</div><p class="small sorted" style="margin-top:10px"></p>`;
  const st=S.get('a-'+o.id,{}),done=()=>{const n=Object.keys(st).length;$('.sorted',el).textContent=`${n} of ${o.items.length} sorted`;if(n>0)gate(o.id)};
  $$('.rowq',el).forEach(r=>{const k=+r.dataset.k,it=o.items[k];const pick=(j,init)=>{$$('.chip',r).forEach(c=>{c.disabled=true;const jj=+c.dataset.j;if(jj===it.c)c.classList.add('right');else if(jj===j)c.classList.add('wrong')});
      r.classList.add(j===it.c?'right':'wrong');const w=$('.why',r);w.innerHTML=(j===it.c?'<b>Yes.</b> ':`<b>Not quite.</b> `)+`“${it.w}” ${it.m}`+(j===it.c?'':` It belongs with ${o.cats[it.c].toLowerCase()}.`);w.classList.add('show');
      if(!init){st[k]=j;S.set('a-'+o.id,st);track(o.id,k,j===it.c,o._spread)}
      if(j!==it.c)journalBtn($('.jhost',r),jEntry(o,k,`${it.w} = ${o.cats[j].toLowerCase()}`,`${it.w} = ${o.cats[it.c].toLowerCase()}`,`“${it.w}” ${it.m}`));done()};
    $$('.chip',r).forEach(c=>c.onclick=()=>pick(+c.dataset.j));if(k in st)pick(st[k],true)});done()};
A.hotspots=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+`<ol class="targets">${o.targets.map((t,k)=>`<li data-k="${k}"><span class="mk">${k+1}</span><span>${t.q}</span></li>`).join('')}</ol>`+chartBox(o.chart)+`<div class="fb" aria-live="polite"></div>`;
  const st=S.get('a-'+o.id,{i:0,miss:{}});const lis=$$('.targets li',el),fb=$('.fb',el),ch=$('.chart',el);
  const paint=()=>{lis.forEach((li,k)=>{li.className=k<st.i?'ok':(k===st.i?'now':'');$('.mk',li).textContent=k<st.i?'✓':k+1});
    $$('.hot',ch).forEach(g=>{g.classList.toggle('found',o.targets.slice(0,st.i).some(t=>t.part===g.dataset.part))});
    if(st.i>=o.targets.length){fb.innerHTML=o.doneMsg||'<b>All found.</b> Before you write about any chart, check these parts first: title, axes, units, legend.';fb.classList.add('show');gate(o.id)}};
  $$('.hot',ch).forEach(g=>{const go=()=>{if(st.i>=o.targets.length)return;const t=o.targets[st.i],part=g.dataset.part;
      if(part===t.part){if(!st.miss[st.i])track(o.id,st.i,true,o._spread);fb.innerHTML=`<b>Yes.</b> ${t.ok}`;st.i++;}
      else{if(!st.miss[st.i]){st.miss[st.i]=1;track(o.id,st.i,false,o._spread)}fb.innerHTML=`<b>Not this one.</b> ${o.parts[part]} You are looking for something else: ${t.q.toLowerCase()}.`;g.classList.add('miss');setTimeout(()=>g.classList.remove('miss'),900)}
      fb.classList.add('show');S.set('a-'+o.id,st);paint()};
    g.addEventListener('click',go);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});
  paint()};
A.sections=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+chartBox(o.chart)+`<div class="secpick"><p class="small sel-lab">Select a section on the graph (A to ${o.chart.sections[o.chart.sections.length-1].lab}), then choose a word.</p><div class="bt phrases">${o.labels.map((l,j)=>`<button type="button" class="chip" data-j="${j}" disabled>${l}</button>`).join('')}</div></div><div class="fb" aria-live="polite"></div><div class="jhost"></div><p class="small secs-done" style="margin-top:8px"></p>`;
  const st=S.get('a-'+o.id,{}),ch=$('.chart',el),bands=$$('.band',ch),segs=$$('.seg',ch),chips=$$('.secpick .chip',el),fb=$('.fb',el);let cur=null;
  const mark=()=>{bands.forEach((b,k)=>b.classList.toggle('done',k in st&&k!==cur));$('.secs-done',el).textContent=`${Object.keys(st).length} of ${o.chart.sections.length} sections labelled`};
  const select=k=>{cur=k;bands.forEach((b,j)=>b.classList.toggle('sel',j===k));segs.forEach((s,j)=>s.classList.toggle('on',j===k));const sc=o.chart.sections[k];
    $('.sel-lab',el).innerHTML=`<b>Section ${sc.lab}</b> (${o.chart.x[sc.a]} to ${o.chart.x[sc.b]}): which word describes this part of the line?`;chips.forEach(c=>{c.disabled=false;c.classList.remove('right','wrong')});
    if(k in st)paintAns(k,st[k]);else{fb.classList.remove('show');$('.jhost',el).innerHTML=''}mark()};
  const paintAns=(k,j)=>{const sc=o.chart.sections[k],ok=j===sc.t;chips.forEach(c=>{const jj=+c.dataset.j;c.classList.toggle('right',jj===sc.t);c.classList.toggle('wrong',jj===j&&!ok)});
    fb.innerHTML=(ok?'<b>Yes.</b> ':'<b>Look again.</b> ')+o.explain(sc,j);fb.classList.add('show');$('.jhost',el).innerHTML='';
    if(!ok)journalBtn($('.jhost',el),jEntry(o,k,`Section ${sc.lab}: ${o.labels[j]}`,o.labels[sc.t],strip(o.explain(sc,j))))};
  bands.forEach((b,k)=>{b.addEventListener('click',()=>select(k));b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(k)}});
    b.addEventListener('pointerenter',()=>segs[k].classList.add('on'));b.addEventListener('pointerleave',()=>{if(cur!==k)segs[k].classList.remove('on')});
    b.addEventListener('focus',()=>segs[k].classList.add('on'));b.addEventListener('blur',()=>{if(cur!==k)segs[k].classList.remove('on')})});
  chips.forEach(c=>c.onclick=()=>{if(cur===null)return;const j=+c.dataset.j;if(!(cur in st)){st[cur]=j;S.set('a-'+o.id,st);track(o.id,cur,j===o.chart.sections[cur].t,o._spread)}paintAns(cur,st[cur]);mark()});
  mark()};
A.motion=(el,o)=>{el.classList.add('oe-try','motion');el.innerHTML=head(o)+`<div class="phrases">${o.items.map((it,k)=>`<button type="button" class="chip" data-k="${k}" aria-pressed="false">${it.p}</button>`).join('')}</div><svg viewBox="0 0 300 150" aria-hidden="true" style="width:100%;height:auto;background:var(--cream);border-radius:8px"><line x1="20" y1="132" x2="290" y2="132" stroke="#CFC6B4"/><line x1="20" y1="12" x2="20" y2="132" stroke="#CFC6B4"/><path class="ln" pathLength="1" d="${o.items[0].d}"/></svg><p class="note" aria-live="polite">Select a phrase, or move your mouse over one.</p>`;
  const path=$('path.ln',el),note=$('.note',el),chips=$$('.chip',el);let pinned=null;
  const showK=k=>{const it=o.items[k];path.setAttribute('d',it.d);path.classList.remove('draw');void path.getBoundingClientRect();path.classList.add('draw');note.innerHTML=`<b>${it.p}</b>: ${it.n}`};
  chips.forEach((c,k)=>{c.onclick=()=>{pinned=k;chips.forEach((x,j)=>x.setAttribute('aria-pressed',j===k));showK(k);S.set('a-'+o.id,k);track(o.id,null,true,o._spread)};
    c.addEventListener('pointerenter',()=>showK(k));c.addEventListener('focus',()=>showK(k));c.addEventListener('pointerleave',()=>{if(pinned!==null)showK(pinned)})})};
A.builder=(el,o)=>{el.classList.add('oe-try');el.innerHTML=head(o)+`<div class="built" aria-label="Your sentence" aria-live="polite"></div><div class="pool"></div><div class="row" style="margin-top:10px"><button type="button" class="btn chk">Check my sentence</button><button type="button" class="btn ghost rst">Start again</button></div><div class="fb" aria-live="polite"></div><div class="jhost"></div>`;
  const built=$('.built',el),pool=$('.pool',el),fb=$('.fb',el);const all=o.chips.concat(o.distract.map(d=>d.t));
  const order=S.get('ord-'+o.id,null)||all.map((v,i)=>[((i*7919)%13)+Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);S.set('ord-'+o.id,order);
  const mk=(t,inBuilt)=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=t;b.onclick=()=>{if(inBuilt){b.remove();pool.appendChild(mk(t,false))}else{b.remove();built.appendChild(mk(t,true))}built.className='built';fb.classList.remove('show')};return b};
  const reset=()=>{built.innerHTML='';pool.innerHTML='';built.className='built';fb.classList.remove('show');$('.jhost',el).innerHTML='';order.forEach(t=>pool.appendChild(mk(t,false)))};reset();
  $('.rst',el).onclick=reset;
  $('.chk',el).onclick=()=>{const got=$$('.chip',built).map(b=>b.textContent);const bad=o.distract.filter(d=>got.includes(d.t));let ok=false,msg='';
    if(!got.length)msg='Add some pieces first. Select them in order.';
    else if(bad.length)msg=bad.map(d=>`<b>“${d.t}”</b>: ${d.why}`).join('<br>');
    else if(got.length<o.chips.length)msg=o.incompleteMsg||'Good so far, but the sentence is incomplete. A full description needs what changed, how, the figures and the time.';
    else if(got.join(' ')!==o.chips.join(' '))msg=o.orderMsg||'All the right pieces, but check the order: what changed, the verb, the adverb, the figures, then the time.';
    else{ok=true;msg=o.right}
    built.className='built '+(ok?'right':'wrong');fb.innerHTML=(ok?'<b>Accurate.</b> ':'<b>Not yet.</b> ')+msg;fb.classList.add('show');
    if(got.length)track(o.id,null,ok,o._spread);$('.jhost',el).innerHTML='';
    if(bad.length)journalBtn($('.jhost',el),jEntry(o,bad[0].t,bad[0].t,bad[0].fix,bad[0].why))}};
A.fix=(el,o)=>{el.classList.add('oe-try');const st=S.get('a-'+o.id,{});
  el.innerHTML=head(o)+`<div class="rows">${o.items.map((it,k)=>`<div class="rowq" data-k="${k}"><label class="q" for="${o.id}-${k}" style="display:block"><b>${k+1}.</b> ${esc(it.wrong)}</label><textarea id="${o.id}-${k}" class="fixin" rows="2" autocomplete="off" spellcheck="false">${esc((st[k]&&st[k].v)||it.wrong)}</textarea><div class="row" style="margin-top:8px"><button type="button" class="chip fx">Check</button></div><p class="why" aria-live="polite"></p><div class="jhost"></div></div>`).join('')}</div>`;
  $$('.rowq',el).forEach(r=>{const k=+r.dataset.k,it=o.items[k],inp=$('textarea',r),w=$('.why',r);
    const check=init=>{const v=inp.value.trim(),ok=it.ok.test(v)&&!it.bad.test(v),s=st[k]||{n:0};if(!init){s.n++;s.v=v;s.ok=ok;st[k]=s;S.set('a-'+o.id,st);if(s.n===1||ok)track(o.id,k,ok&&s.n===1,o._spread)}
      r.classList.toggle('right',ok);r.classList.toggle('wrong',!ok);
      w.innerHTML=ok?`<b>Fixed.</b> ${it.why}`:(v===it.wrong?`<b>Not yet.</b> The sentence hasn't changed. ${it.hint}`:`<b>Not yet.</b> ${it.hint}`)+(!ok&&s.n>=2?`<br><span class="small">My version: <i>${esc(it.model)}</i></span>`:'');w.classList.add('show');
      if(!ok||s.n>1)journalBtn($('.jhost',r),jEntry(o,k,it.err,it.fix,it.why))};
    $('.fx',r).onclick=()=>check(false);inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();check(false)}});if(st[k])check(true)});
  if(Object.keys(st).length)gate(o.id)};
function annotHTML(o){return `<div class="oe-reflect" style="padding:0;border:0;background:none"><div class="anno"><div class="model">${o.model}</div><aside class="notes" aria-live="polite"><span class="lab">Examiner's notes</span><p>Select a highlighted phrase to see why I wrote it that way.</p></aside></div></div>`}
function wireAnnot(el,o){$$('.hl',el).forEach(b=>{b.setAttribute('aria-pressed','false');b.onclick=()=>{$$('.hl',el).forEach(x=>x.setAttribute('aria-pressed',x===b));$('.notes',el).innerHTML=`<span class="lab">Examiner's note</span><q>${b.textContent}</q><p>${o.notes[b.dataset.n]}</p>`}})}
A.write=(el,o)=>{el.classList.add('oe-workshop','oe-try');
  const fieldHTML=(pfx,vals)=>o.fields.map(f=>`<label class="small" for="${o.id}-${pfx}-${f.k}" style="display:block;font-weight:600;color:var(--dark);margin:10px 0 4px">${f.label}</label><textarea id="${o.id}-${pfx}-${f.k}" data-k="${f.k}" rows="${f.rows||4}" style="min-height:${(f.rows||4)*28}px" placeholder="${esc(f.ph||'')}">${esc((vals||{})[f.k]||'')}</textarea><div class="wc"></div>`).join('');
  const d1=S.get('d1-'+o.id,null),d2=S.get('d2-'+o.id,null),cur=S.get('w-'+o.id,{});
  el.innerHTML=head(o)+`<div class="f1">${fieldHTML('a',d1||cur)}</div><div class="row" style="margin-top:12px"><button type="button" class="btn chk">Check my writing</button><button type="button" class="btn ghost cpy">Copy my answer</button><button type="button" class="btn ghost dl">Download</button><span class="small cpmsg" aria-live="polite"></span></div><ul class="checks" aria-live="polite"></ul><p class="small chknote" hidden style="margin-top:8px">These quick checks only look for a few patterns in your text, such as the word count or a figure in the overview. They can't judge accuracy or grammar, so compare your answer with my model too.</p><div class="after" hidden></div>`;
  const vals=()=>{const v={};$$('.f1 textarea',el).forEach(t=>v[t.dataset.k]=t.value);return v};
  const wc=root=>$$('textarea',root).forEach(t=>{const u=()=>{t.nextElementSibling.textContent=words(t.value)+' words'};t.addEventListener('input',u);u()});
  wc($('.f1',el));$$('.f1 textarea',el).forEach(t=>t.addEventListener('input',()=>S.set('w-'+o.id,vals())));
  const answerText=()=>{const parts=[];const add=(root,title)=>{const t=$$('textarea',root).map(x=>(o.fields.length>1?(o.fields.find(f=>f.k===x.dataset.k)||{}).label+'\n':'')+x.value.trim()).filter(x=>x.trim()).join('\n\n');if(t)parts.push((title?title+'\n\n':'')+t)};
    add($('.f1',el),$('.f2',el)?'First draft':'');const f2=$('.f2',el);if(f2)add(f2,'Revision');return (o.decision?o.decision+'\n\n':'')+parts.join('\n\n')};
  const say=m=>{$('.cpmsg',el).textContent=m};
  $('.cpy',el).onclick=()=>{const t=answerText();const fallback=()=>{const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}ta.remove();say(ok?'Copied.':'Select your text and copy it with your keyboard.')};
    try{navigator.clipboard.writeText(t).then(()=>say('Copied.'),fallback)}catch(e){fallback()}};
  $('.dl',el).onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([answerText()],{type:'text/plain;charset=utf-8'}));a.download='orange-english-'+o.id+'.txt';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);say('Downloaded.')};
  const runChecks=(v,ul)=>{let pass=0;$('.chknote',el).hidden=false;ul.innerHTML=o.checks.map(c=>{const ok=!!c.fn(v);if(ok)pass++;return `<li class="${ok?'pass':'todo'}"><span class="mk">${ok?'✓':'!'}</span><span>${ok?c.t:(c.fix||c.t)}</span></li>`}).join('');return pass};
  const after=()=>{const a=$('.after',el);if(!a.hidden)return;a.hidden=false;
    a.innerHTML=`<h3 style="margin-top:20px">${o.modelTitle||'My model answer'}</h3>${o.notes?annotHTML(o):`<div class="draft" style="background:var(--paper)">${o.model}</div>`}`+
      (o.self?`<h3>Check your own writing</h3><ul class="selfcheck" style="list-style:none;display:grid;gap:8px">${o.self.map((s,i)=>`<li><label style="display:flex;gap:10px;font-size:15px;cursor:pointer"><input type="checkbox" data-i="${i}" style="width:20px;height:20px;margin-top:3px;accent-color:var(--green-ink)"> <span>${s}</span></label></li>`).join('')}</ul>`:'')+
      (o.revise?`<h3>Improve it</h3><p class="small">Rewrite using the checks and my model. Both versions are kept in your portfolio at the end of the chapter.</p><div class="f2">${fieldHTML('b',S.get('d2-'+o.id,null)||S.get('d1-'+o.id,null))}</div><div class="row" style="margin-top:10px"><button type="button" class="btn save2">Save my revision</button><span class="small saved2"></span></div><ul class="checks c2"></ul>`:'');
    if(o.notes)wireAnnot(a,o);const sc=S.get('sc-'+o.id,{});$$('.selfcheck input',a).forEach(i=>{i.checked=!!sc[i.dataset.i];i.onchange=()=>{sc[i.dataset.i]=i.checked;S.set('sc-'+o.id,sc)}});
    if(o.revise){wc($('.f2',a));$('.save2',a).onclick=()=>{const v={};$$('.f2 textarea',a).forEach(t=>v[t.dataset.k]=t.value);S.set('d2-'+o.id,v);const p=runChecks(v,$('.c2',a));$('.saved2',a).textContent=`Saved. ${p} of ${o.checks.length} checks met.`;refreshReviews()}}};
  $('.chk',el).onclick=()=>{const v=vals();if(!Object.values(v).join('').trim()){$('.checks',el).innerHTML='<li class="todo"><span class="mk">!</span><span>Write something first. It doesn\'t need to be perfect.</span></li>';return}
    const p=runChecks(v,$('.checks',el));if(!S.get('d1-'+o.id,null)){S.set('d1-'+o.id,v);track(o.id,null,p===o.checks.length,o._spread)}gate(o.id);after();refreshReviews()};
  if(d1){runChecks(d1,$('.checks',el));after()}};

A.timer=(el,o)=>{el.classList.add('oe-try','oe-timer');const total=o.phases.reduce((a,p)=>a+p.s,0);const fmt=t=>Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
  el.innerHTML=head(o)+`<div class="tm"><span class="tm-clock" aria-hidden="true">${fmt(total)}</span><span class="tm-phase" aria-live="polite">Ready to start</span></div><div class="tm-bar" aria-hidden="true">${o.phases.map(p=>`<i style="flex:${p.s}"><b></b></i>`).join('')}</div><div class="tm-labs" aria-hidden="true">${o.phases.map(p=>`<span style="flex:${p.s}">${p.lab} ${Math.round(p.s/60)}</span>`).join('')}</div><p class="small tm-tip" style="margin-top:8px">${o.phases.map(p=>`<b>${p.lab}:</b> ${p.tip}`).join(' ')}</p><div class="row" style="margin-top:10px"><button type="button" class="btn tm-go">Start ${fmt(total)}</button><button type="button" class="btn ghost tm-reset">Reset</button></div>`;
  const clock=$('.tm-clock',el),ph=$('.tm-phase',el),tip=$('.tm-tip',el),bars=$$('.tm-bar b',el),goB=$('.tm-go',el);let st=S.get('t-'+o.id,{rem:total,end:null}),iv=null,lastLab='';
  const rem=()=>st.end?Math.max(0,Math.ceil((st.end-Date.now())/1000)):st.rem;
  const paint=()=>{const r=rem(),el2=total-r;clock.textContent=fmt(r);clock.classList.toggle('urgent',r>0&&r<=o.phases[o.phases.length-1].s);
    let acc=0,k=-1;o.phases.forEach((p,i)=>{bars[i].style.width=(Math.max(0,Math.min(1,(el2-acc)/p.s))*100)+'%';if(k<0&&el2<acc+p.s)k=i;acc+=p.s});if(k<0)k=o.phases.length-1;const lab=r<=0?'Time\'s up. Stop writing, then check your answer below.':(!st.end&&r===total?'Ready to start':(st.end?'':'Paused · ')+o.phases[k].lab+' · '+o.phases[k].tip);
    if(lab!==lastLab){ph.textContent=lab;lastLab=lab}
    if(r<=0&&st.end){st={rem:0,end:null};S.set('t-'+o.id,st);stop();goB.textContent='Start again';}};
  const stop=()=>{if(iv){clearInterval(iv);iv=null}};
  const run=()=>{stop();iv=setInterval(paint,250);paint()};
  goB.onclick=()=>{if(st.end){st={rem:rem(),end:null};S.set('t-'+o.id,st);stop();goB.textContent='Resume';paint()}
    else{const r=rem()>0?rem():total;st={rem:r,end:Date.now()+r*1000};S.set('t-'+o.id,st);goB.textContent='Pause';run()}};
  $('.tm-reset',el).onclick=()=>{stop();st={rem:total,end:null};S.set('t-'+o.id,st);goB.textContent='Start '+fmt(total);paint()};
  if(st.end&&rem()>0){goB.textContent='Pause';run()}else{if(st.end){st={rem:0,end:null};S.set('t-'+o.id,st)}if(st.rem<total)goB.textContent=st.rem>0?'Resume':'Start again';paint()}};


/* ---------------- predict the data (draw it, then reveal) ----------------
   {type:'drawit', chart:{bar or line spec, one series}, hide:[indices], min, max, step, tol, note}
   Students set each hidden value with a slider, then compare with the real data. */
A.drawit=(el,o)=>{el.classList.add('oe-try','drawit');const se=o.chart.series[0],real=se.vals,isBar=o.chart.type==='bar',fmt=v=>o.chart.fmt?o.chart.fmt(v):v;
  const st=S.get('a-'+o.id,null)||{g:{},done:false};o.hide.forEach(i=>{if(st.g[i]==null)st.g[i]=o.start!=null?o.start:Math.round(((o.min+o.max)/2)/o.step)*o.step});
  el.innerHTML=head(o)+`<figure class="chart chart-${isBar?'bar':'line'}"><div class="dw-svg"></div><span class="tip" aria-hidden="true"></span></figure><div class="dw-ctl">${o.hide.map(i=>`<label class="dw-row"><span class="dw-lab">${esc(o.chart.x[i])}</span><input type="range" min="${o.min}" max="${o.max}" step="${o.step}" value="${st.g[i]}" data-i="${i}" aria-label="Your prediction for ${esc(o.chart.x[i])}"><output>${esc(fmt(st.g[i]))}</output></label>`).join('')}</div><div class="row" style="margin-top:10px"><button type="button" class="btn dw-go">Show the real data</button></div><div class="fb" aria-live="polite"></div><div class="jhost"></div>`;
  const box=$('.dw-svg',el),fb=$('.fb',el),ORANGE='#F88B48',NAVY=se.color||'#292929';
  const spec=()=>{const g=i=>st.g[i];let series;
    if(isBar){series=st.done?[{name:'Real data',vals:real,color:NAVY},{name:'Your prediction',vals:real.map((v,i)=>o.hide.includes(i)?g(i):null),color:ORANGE}]
      :[{name:se.name,vals:real.map((v,i)=>o.hide.includes(i)?g(i):v),color:NAVY,colors:real.map((v,i)=>o.hide.includes(i)?ORANGE:NAVY)}]}
    else{const first=Math.min(...o.hide),pred=real.map((v,i)=>i===first-1?v:(o.hide.includes(i)?g(i):null));
      series=st.done?[{name:'Real data',vals:real,color:NAVY},{name:'Your prediction',vals:pred,color:ORANGE,dash:1}]
      :[{name:se.name,vals:real.map((v,i)=>o.hide.includes(i)?null:v),color:NAVY},{name:'Your prediction',vals:pred,color:ORANGE,dash:1}]}
    return Object.assign({},o.chart,{id:o.chart.id+'-dw',series,labels:0})};
  const draw=()=>{box.innerHTML=drawChart(spec());const ch=$('.chart',el);ch._en=0;enhanceCharts(el)};
  const inputs=$$('input[type=range]',el);
  inputs.forEach(inp=>inp.addEventListener('input',()=>{const i=+inp.dataset.i;st.g[i]=+inp.value;inp.nextElementSibling.textContent=fmt(+inp.value);S.set('a-'+o.id,st);draw()}));
  const reveal=init=>{st.done=true;S.set('a-'+o.id,st);inputs.forEach(x=>x.disabled=true);$('.dw-go',el).hidden=true;draw();
    const res=o.hide.map(i=>{const d=st.g[i]-real[i],ok=Math.abs(d)<=o.tol;return {i,d,ok}}),allOk=res.every(r=>r.ok);
    fb.innerHTML=(allOk?'<b>Good prediction.</b> ':'<b>Here is the real data.</b> ')+`<ul class="clean" style="margin:6px 0">${res.map(r=>`<li><b>${esc(o.chart.x[r.i])}:</b> you said ${esc(fmt(st.g[r.i]))}, the real figure was ${esc(fmt(real[r.i]))}${r.ok?' (close)':r.d>0?' (too high)':' (too low)'}.</li>`).join('')}</ul>`+(o.note||'');fb.classList.add('show');
    if(!init)track(o.id,null,allOk,o._spread);gate(o.id)};
  $('.dw-go',el).onclick=()=>reveal(false);draw();if(st.done)reveal(true)};

/* ---------------- mark the key features ----------------
   {type:'keyfeat', chart, pick:3, keys:[{j,i,why}], notes:{'j-i':'why not'}, other:'default reason'}
   Students select points or bars they would write about, then compare with my choices. */
A.keyfeat=(el,o)=>{el.classList.add('oe-try','keyfeat');const spec=Object.assign({},o.chart,{id:o.chart.id+'-kf',points:1});
  el.innerHTML=head(o)+chartBox(spec)+`<p class="small kf-count" aria-live="polite"></p><div class="row" style="margin-top:6px"><button type="button" class="btn kf-go" disabled>Compare with my choices</button><button type="button" class="btn ghost kf-clear">Clear</button></div><div class="fb" aria-live="polite"></div>`;
  const map=[];spec.series.forEach((se,j)=>se.vals.forEach((v,i)=>{if(v!=null)map.push(j+'-'+i)}));
  const pts=$$('.chart .pt',el);pts.forEach((g,n)=>{g.dataset.kf=map[n];g.setAttribute('role','button');g.setAttribute('aria-pressed','false')});
  const st=S.get('a-'+o.id,null)||{sel:[],done:false},isKey=k=>o.keys.some(x=>x.j+'-'+x.i===k),fb=$('.fb',el),go=$('.kf-go',el);
  const label=k=>{const [j,i]=k.split('-').map(Number),se=spec.series[j];return (spec.series.length>1?se.name+', ':'')+spec.x[i]+': '+fmtv(spec,se.vals[i])};
  const paint=()=>{pts.forEach(g=>{const k=g.dataset.kf,on=st.sel.includes(k);g.classList.toggle('kf-sel',on);g.setAttribute('aria-pressed',on);
      g.classList.toggle('kf-key',st.done&&isKey(k));g.classList.toggle('kf-no',st.done&&on&&!isKey(k))});
    $('.kf-count',el).textContent=st.done?'':`${st.sel.length} of ${o.pick} selected`;go.disabled=st.done||st.sel.length!==o.pick;$('.kf-clear',el).hidden=st.done};
  const toggle=k=>{if(st.done)return;const n=st.sel.indexOf(k);if(n>=0)st.sel.splice(n,1);else if(st.sel.length<o.pick)st.sel.push(k);S.set('a-'+o.id,st);paint()};
  pts.forEach(g=>{g.addEventListener('click',()=>toggle(g.dataset.kf));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle(g.dataset.kf)}})});
  $('.kf-clear',el).onclick=()=>{st.sel=[];S.set('a-'+o.id,st);paint()};
  const reveal=init=>{st.done=true;S.set('a-'+o.id,st);paint();const hits=o.keys.filter(x=>st.sel.includes(x.j+'-'+x.i)).length,wrong=st.sel.filter(k=>!isKey(k));
    fb.innerHTML=`<b>You chose ${hits} of my ${o.keys.length} key features.</b><ul class="clean" style="margin:6px 0">`+o.keys.map(x=>{const k=x.j+'-'+x.i,got=st.sel.includes(k);return `<li class="${got?'kf-got':'kf-miss'}"><b>${got?'✓':'Missed:'} ${esc(label(k))}.</b> ${x.why}</li>`}).join('')+wrong.map(k=>`<li class="kf-wr"><b>Not a key feature: ${esc(label(k))}.</b> ${(o.notes&&o.notes[k])||o.other||'A detail, not one of the features a reader needs.'}</li>`).join('')+'</ul>';
    fb.classList.add('show');if(!init)track(o.id,null,hits===o.keys.length,o._spread);gate(o.id)};
  go.onclick=()=>reveal(false);paint();if(st.done)reveal(true)};

/* ---------------- error hunt ----------------
   {type:'errhunt', text:'…[[wrong|right|why]]…', tries:3}
   Students select the mistakes in a paragraph. Every word can be selected. */
A.errhunt=(el,o)=>{el.classList.add('oe-try','errhunt');const parts=o.text.split(/\[\[(.+?)\]\]/),errs=[];let html='';
  parts.forEach((p,n)=>{if(n%2){const [w,r,why]=p.split('|');errs.push({w,r,why});html+=`<span class="eh-w eh-e" tabindex="0" role="button" data-k="${errs.length-1}">${esc(w)}</span>`}
    else html+=p.split(/(\s+)/).map(t=>/^\s+$/.test(t)||!t?t:`<span class="eh-w" tabindex="0" role="button">${esc(t)}</span>`).join('')});
  el.innerHTML=head(o)+`<p class="eh-text">${html}</p><p class="small eh-count" aria-live="polite"></p><div class="fb" aria-live="polite"></div><div class="row" style="margin-top:8px"><button type="button" class="btn ghost eh-show" hidden>Show me the rest</button></div><div class="jhost"></div>`;
  const st=S.get('a-'+o.id,null)||{found:{},miss:0,shown:false},fb=$('.fb',el),count=$('.eh-count',el);
  const fix=(k,how)=>{const sp=$(`.eh-e[data-k="${k}"]`,el),e=errs[k];sp.classList.add(how==='found'?'eh-found':'eh-shown');sp.innerHTML=`<s>${esc(e.w)}</s> <ins>${esc(e.r)}</ins>`;sp.removeAttribute('tabindex');sp.removeAttribute('role')};
  const paint=()=>{const n=Object.keys(st.found).length;count.textContent=st.shown?`You found ${Object.values(st.found).filter(v=>v==='found').length} of ${errs.length} mistakes.`:`Found ${n} of ${errs.length} mistakes`+(st.miss?` · ${st.miss} wrong ${st.miss===1?'guess':'guesses'}`:'');
    $('.eh-show',el).hidden=st.shown||n>=errs.length||st.miss<(o.tries||3);if(n>=errs.length&&!st.shown)gate(o.id)};
  Object.entries(st.found).forEach(([k,how])=>fix(+k,how));
  const pick=sp=>{if(sp.classList.contains('eh-found')||sp.classList.contains('eh-shown')||st.shown)return;
    if(sp.classList.contains('eh-e')){const k=+sp.dataset.k,e=errs[k];st.found[k]='found';fix(k,'found');track(o.id,k,true,o._spread);fb.innerHTML=`<b>Found it.</b> “${esc(e.w)}” → “${esc(e.r)}”. ${e.why}`}
    else{st.miss++;sp.classList.add('eh-no');setTimeout(()=>sp.classList.remove('eh-no'),700);fb.innerHTML=`<b>No mistake there.</b> “${esc(sp.textContent)}” is fine. Keep looking.`}
    fb.classList.add('show');S.set('a-'+o.id,st);paint();if(Object.keys(st.found).length>=errs.length&&!st.shown)fb.innerHTML+=`<br><b>All ${errs.length} found.</b> ${o.done||''}`};
  $$('.eh-w',el).forEach(sp=>{sp.addEventListener('click',()=>pick(sp));sp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(sp)}})});
  $('.eh-show',el).onclick=()=>{errs.forEach((e,k)=>{if(!st.found[k]){st.found[k]='shown';fix(k,'shown');track(o.id,k,false,o._spread);journalBtn($('.jhost',el),jEntry(o,k,e.w,e.r,e.why))}});st.shown=true;S.set('a-'+o.id,st);
    fb.innerHTML='<b>Here are the ones you missed</b>, in orange. '+errs.map((e,k)=>st.found[k]==='shown'?`<br>“${esc(e.w)}” → “${esc(e.r)}”. ${e.why}`:'').join('');fb.classList.add('show');paint();gate(o.id)};
  paint()};

/* ---------------- gates (explanations that appear after a first try) ---------------- */
function gate(id){$$(`[data-gate="${id}"]`).forEach(g=>{g.hidden=false});$$(`[data-gateph="${id}"]`).forEach(g=>{g.hidden=true})}
function applyGates(){$$('[data-gate]').forEach(g=>{const id=g.dataset.gate;if(Object.keys(results).some(k=>results[k].act===id)||S.get('d1-'+id,null))gate(id)})}

/* ---------------- reviews, portfolio, dictionary ---------------- */
function refreshReviews(){$$('[data-review]').forEach(box=>{const ch=+box.dataset.review;const miss=Object.entries(results).filter(([k,r])=>!r.first&&C.SPREADS[r.spread]&&C.SPREADS[r.spread].ch===ch);
    const bySpread={};miss.forEach(([k,r])=>{(bySpread[r.spread]=bySpread[r.spread]||new Set()).add(C.ACTS[r.act]?strip(C.ACTS[r.act].skill||C.ACTS[r.act].decision||''):'')});
    const done=Object.values(results).filter(r=>C.SPREADS[r.spread]&&C.SPREADS[r.spread].ch===ch).length;
    box.innerHTML=!done?'<p class="small">Your results will appear here as you work through the chapter.</p>':
      (miss.length?`<p>You answered ${done} questions in this chapter. These pages are worth another look:</p><ul class="clean">${Object.entries(bySpread).map(([s,set])=>`<li><a href="#" data-go="${s}">${esc(C.SPREADS[s].title)}</a><span class="small"> · ${esc([...set].filter(Boolean).join('; '))}</span></li>`).join('')}</ul>`:`<p>You answered ${done} questions in this chapter and got every one right first time.</p>`)});
  $$('[data-portfolio]').forEach(box=>{const id=box.dataset.portfolio,o=C.ACTS[id],d1=S.get('d1-'+id,null),d2=S.get('d2-'+id,null);const fmt=d=>d?o.fields.map(f=>(o.fields.length>1?`${f.label.split(':')[0]}: `:'')+(d[f.k]||'')).join('\n\n'):'';
    box.innerHTML=`<div class="oe-workshop" style="padding:0;border:0;background:none"><div class="portfolio"><div class="draft"><h4>First draft</h4>${d1?esc(fmt(d1)):'<span class="small">Not written yet.</span>'}</div><div class="draft"><h4>Revision</h4>${d2?esc(fmt(d2)):'<span class="small">Not revised yet.</span>'}</div></div></div>`});
  $$('[data-jcount]').forEach(b=>{const n=journal().length;b.textContent=n===1?'1 entry':n+' entries'})}
function renderDict(){const box=$('#dict-list');if(!box)return;const j=journal();
  box.innerHTML=j.length?j.map((e,i)=>`<div class="rowq"><p class="small" style="margin-bottom:6px">${esc(e.where||'')}</p><dl style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:14.5px"><dt style="font-weight:700;color:var(--orange-ink)">My mistake</dt><dd>${esc(e.mistake)}</dd><dt style="font-weight:700;color:var(--green-ink)">Better</dt><dd>${esc(e.better)}</dd><dt style="font-weight:700">Why</dt><dd>${esc(e.why)}</dd></dl><button type="button" class="chip" data-del="${i}" style="margin-top:8px">Remove</button></div>`).join(''):'<p class="small">Nothing saved yet. When you make a mistake in an activity, select “Save to my journal” and it will appear here.</p>';
  $$('[data-del]',box).forEach(b=>b.onclick=()=>{const jj=journal();jj.splice(+b.dataset.del,1);S.set('journal',jj);renderDict();refreshReviews()});refreshReviews()}
function printDict(){const j=journal(),pv=$('#printview');pv.innerHTML=`<h1 style="font-family:Montserrat,sans-serif;font-size:22px;margin-bottom:4px">My error dictionary</h1><p style="font-size:12px;color:#55534E;margin-bottom:14px">${esc(C.TITLE||'Orange English')} · Orange English · ${new Date().toLocaleDateString('en-GB')}</p><table style="width:100%;border-collapse:collapse;font-size:12.5px"><thead><tr>${['My mistake','Better expression','Why'].map(h=>`<th style="text-align:left;border-bottom:2px solid #292929;padding:6px">${h}</th>`).join('')}</tr></thead><tbody>${j.map(e=>`<tr>${[e.mistake,e.better,e.why].map(c=>`<td style="vertical-align:top;border-bottom:1px solid #ccc;padding:6px">${esc(c)}</td>`).join('')}</tr>`).join('')||'<tr><td colspan="3" style="padding:6px">No entries yet.</td></tr>'}</tbody></table>`;
  pv.insertAdjacentHTML('afterbegin','<div class="pv-bar"><button type="button" class="btn" id="pv-print">Print</button><button type="button" class="btn ghost" id="pv-close">Close print view</button><span class="small">If the print window does not open, use your browser\'s Print command.</span></div>');
  document.body.classList.add('printing');pv.setAttribute('aria-hidden','false');const doPrint=()=>{try{window.print()}catch(e){}};
  $('#pv-print').onclick=doPrint;$('#pv-close').onclick=()=>{document.body.classList.remove('printing');pv.setAttribute('aria-hidden','true');pv.innerHTML='';const b=$$('.dict-print').find(x=>x.offsetParent);if(b)b.focus()};$('#pv-close').focus();setTimeout(doPrint,250)}

/* ---------------- render spreads ---------------- */
const book=$('#book');const total=C.SPREADS.length*2;
C.SPREADS.forEach((sp,i)=>{const d=document.createElement('div');d.className='spread';d.dataset.s=i;
  const rib=`<button type="button" class="ribbon" aria-label="Bookmark this page" aria-pressed="false"><svg viewBox="0 0 22 46" aria-hidden="true"><path d="M1 0H21V44L11 35L1 44Z"/></svg></button>`;
  d.innerHTML=`<section class="page left" aria-label="Page ${i*2+1}">${rib}${sp.left}<span class="pgnum">${i*2+1}</span></section><section class="page right" aria-label="Page ${i*2+2}">${rib}${sp.right}<span class="pgnum">${i*2+2}</span></section>`;
  book.appendChild(d)});
// charts placed by content as <div data-chartph="ID">
$$('[data-chartph]').forEach(ph=>{const o=C.CHARTS[ph.dataset.chartph];if(!o){console.error('Missing chart: '+ph.dataset.chartph);ph.outerHTML='<p class="small">[Chart missing: '+esc(ph.dataset.chartph)+']</p>';return}ph.outerHTML=chartBox(o)});
// videos
const VL=window.VIDEO_LINKS||[];
$$('[data-video]').forEach(v=>{const k=+v.dataset.video,url=(VL[k]||'').trim(),meta=C.VIDEOS[k];let src='';
  if(url){const yt=url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/),lm=url.match(/loom\.com\/(?:share|embed)\/([\w]+)/);src=yt?'https://www.youtube.com/embed/'+yt[1]:(lm?'https://www.loom.com/embed/'+lm[1]:url)}
  v.outerHTML=src?`<div class="vid"><iframe src="${esc(src)}" title="${esc(meta.title)}" allow="fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`:
   `<div class="vid" role="img" aria-label="Video placeholder: ${esc(meta.title)}"><span class="play"></span><span class="cap">${esc(meta.title)}</span><span class="len">Video · about ${esc(meta.len)}</span></div><div class="script"><b>Video script for Lindsey (hidden once a link is added)</b><ol>${meta.script.map(s=>`<li>${s}</li>`).join('')}</ol></div>`});
// activities
Object.entries(C.ACTS).forEach(([id,o])=>{o.id=id;const el=$(`[data-act="${id}"]`);if(!el)return;const sp=+el.closest('.spread').dataset.s;o._spread=sp;o._spreadTitle=C.SPREADS[sp].title;A[o.type](el,o)});
enhanceCharts(document);applyGates();
// go-to links & contents
const spreadIndex=v=>/^\d+$/.test(v)?+v:C.SPREADS.findIndex(x=>x.id===v);
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){e.preventDefault();const s=spreadIndex(g.dataset.go);if(s<0)return;closeOverlay();go(s,'left',1)}});
$$('.dict-print').forEach(b=>b.onclick=printDict);renderDict();refreshReviews();

/* ---------------- navigation ---------------- */
const mq=window.matchMedia('(max-width:819px)');const mobile=()=>mq.matches;
let pos=S.get('pos',{s:0,side:'left'});if(!C.SPREADS[pos.s])pos={s:0,side:'left'};
const HASHGO={'error-dictionary':'dict'};C.SPREADS.forEach(sp=>{const m=/^c(\d+)-(open|review)$/.exec(sp.id||'');if(m)HASHGO[(m[2]==='open'?'chapter-':'review-')+m[1]]=sp.id});
const hashSpread=()=>{const id=HASHGO[(location.hash||'').slice(1)];return id?spreadIndex(id):-1};
{const h=hashSpread();if(h>=0)pos={s:h,side:'left'}}
window.addEventListener('hashchange',()=>{const h=hashSpread();if(h>=0){try{closeOverlay()}catch(e){}go(h,'left',1)}});
function views(){const v=[];C.SPREADS.forEach((sp,i)=>{if(!mobile())v.push({s:i,side:'left'});else(sp.exploreFirst?['right','left']:['left','right']).forEach(side=>v.push({s:i,side}))});return v}
function vIndex(){const v=views();const k=v.findIndex(x=>x.s===pos.s&&(!mobile()||x.side===pos.side));return k<0?v.findIndex(x=>x.s===pos.s):k}
function render(dir,focus){$$('.spread',book).forEach(d=>{const on=+d.dataset.s===pos.s;d.classList.toggle('active',on);d.classList.remove('turn-next','turn-prev','show-left','show-right');
    if(on){d.classList.add('show-'+(mobile()?pos.side:'left'));if(dir)d.classList.add(dir>0?'turn-next':'turn-prev')}});
  const sp=C.SPREADS[pos.s],v=views(),k=vIndex();const pn=pos.s*2+(pos.side==='right'?2:1);
  $('#where').innerHTML=`<b>${esc(sp.chLabel)}</b> · ${mobile()?`Page ${k+1} of ${v.length}`:`Pages ${pos.s*2+1} and ${pos.s*2+2} of ${total}`}`;
  $('#chapline').textContent=sp.chLabel+(sp.chTitle?' · '+sp.chTitle:'');
  $('#prev').disabled=k<=0;$('#next').disabled=k>=v.length-1;
  const bm=S.get('bm',null);$$('.ribbon').forEach(r=>{const s=+r.closest('.spread').dataset.s,side=r.closest('.page').classList.contains('right')?'right':'left';const on=!!bm&&bm.s===s&&(!mobile()||bm.side===side||(!bm.side));r.setAttribute('aria-pressed',on);r.setAttribute('aria-label',on?'Bookmarked page (select to remove)':'Bookmark this page')});
  S.set('pos',pos);S.set('last',Date.now());
  if(focus){const pg=$(`.spread.active .page.${mobile()?pos.side:'left'}`);const h=pg&&$('h1,h2',pg);if(h){h.setAttribute('tabindex','-1');h.focus({preventScroll:true})}window.scrollTo({top:Math.max(0,$('#book').getBoundingClientRect().top+window.scrollY-70),behavior:'auto'})}}
function step(d){const v=views(),k=vIndex(),n=k+d;if(n<0||n>=v.length)return;pos={s:v[n].s,side:v[n].side};render(d,1)}
function go(s,side,focus){const dir=s>pos.s?1:(s<pos.s?-1:0);const sp=C.SPREADS[s];pos={s,side:side||(mobile()&&sp&&sp.exploreFirst?'right':'left')};render(dir,focus)}
$('#prev').onclick=()=>step(-1);$('#next').onclick=()=>step(1);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeGloss();closeOverlay();return}
  if(e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target;if(t.closest('input,textarea,select,[contenteditable]')||!$('#ov').hidden)return;
  if(e.key==='ArrowRight'){e.preventDefault();step(1)}else if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}});
mq.addEventListener?mq.addEventListener('change',()=>render(0,0)):mq.addListener(()=>render(0,0));
// bookmark ribbon
document.addEventListener('click',e=>{const r=e.target.closest('.ribbon');if(!r)return;const s=+r.closest('.spread').dataset.s,side=r.closest('.page').classList.contains('right')?'right':'left';
  const bm=S.get('bm',null);if(bm&&bm.s===s&&(!mobile()||bm.side===side))S.set('bm',null);else S.set('bm',{s,side:mobile()?side:'left'});render(0,0)});
// fullscreen
$('#fs').onclick=()=>{try{const w=$('.book-wrap');if(document.fullscreenElement)document.exitFullscreen();else if(w.requestFullscreen)w.requestFullscreen().catch(()=>{})}catch(e){}};

/* ---------------- overlays: contents, resume, retrieval ---------------- */
function closeOverlay(){const ov=$('#ov');if(ov.hidden)return;ov.hidden=true;ov.innerHTML='';if(ov._ret&&ov._ret.focus)ov._ret.focus()}
function openOverlay(html,label){const ov=$('#ov');ov._ret=document.activeElement;ov.innerHTML=`<div class="card" role="dialog" aria-modal="true" aria-label="${esc(label)}">${html}</div>`;ov.hidden=false;const f=$('button,a',ov);if(f)f.focus()}
$('#ov').addEventListener('click',e=>{if(e.target.id==='ov')closeOverlay()});
$('#toc').onclick=()=>{let h='<h3>Contents</h3><div class="menu">';let ch=null;C.SPREADS.forEach((sp,i)=>{if(sp.chLabel!==ch){ch=sp.chLabel;h+=`<h4>${esc(sp.chLabel)}${sp.chTitle?' · '+esc(sp.chTitle):''}</h4>`}h+=`<button type="button" class="tbtn" data-go="${i}" style="display:block;width:100%;text-align:left;margin-bottom:4px;border-color:transparent">${esc(sp.title)} <span class="small">· page ${i*2+1}</span></button>`});
  {const items=[];for(let n=1;n<=NCH;n++){const bits=[];if(EXTRAS[n])bits.push(`${extraLink(EXTRAS[n])} <span class="small">(${EXTRAS[n].lvl})</span>`);if(ALSO[n])bits.push(`${extraLink(ALSO[n])} <span class="small">(${ALSO[n].lvl})</span>`);if(C.SHEETS)bits.push(`<a href="${sheetURL(n)}" target="_blank" rel="noopener">cheat sheet</a>`);if(bits.length)items.push(`<li>Chapter ${n}: ${bits.join(' · ')}</li>`)}
    if(C.DIAG)items.push(`<li><a href="${C.DIAG.before}">First diagnostic</a> · <a href="${C.DIAG.after}">Final diagnostic</a></li>`);
    if(items.length)h+=`<h4>Extra practice${C.SHEETS?' and cheat sheets':''}</h4><ul style="margin:0 0 12px;padding-left:18px;display:grid;gap:4px">${items.join('')}</ul>`}
  h+=`<h4>Glossary</h4><p>${Object.entries(C.GLOSS).map(([k,g])=>`<button type="button" class="term" data-term="${k}">${esc(g.term)}</button>`).join(' · ')}</p></div><div class="row" style="margin-top:14px"><button type="button" class="btn ghost" id="ovx">Close</button></div>`;openOverlay(h,'Contents');$('#ovx').onclick=closeOverlay};
$('#glossbtn').onclick=()=>{openOverlay(`<h3>Glossary</h3><p>Select a term to see its definition, a small graph and a model sentence.</p><div class="menu"><div class="row" style="gap:8px">${Object.entries(C.GLOSS).map(([k,g])=>`<button type="button" class="chip term" data-term="${k}" style="border-bottom:1.5px solid var(--line)">${esc(g.term)}</button>`).join('')}</div></div><div class="row" style="margin-top:14px"><button type="button" class="btn ghost" id="ovx">Close</button></div>`,'Glossary');$('#ovx').onclick=closeOverlay};
function resumeTarget(){const bm=S.get('bm',null);return bm||pos}
function resumeCard(){const t=resumeTarget(),sp=C.SPREADS[t.s];if(!sp||(t.s===0&&!S.get('bm',null)))return;
  openOverlay(`<span class="eyebrow">Welcome back</span><h3>Continue where you left off?</h3><p>${S.get('bm',null)?'Your bookmark':'You stopped'} at <b>${esc(sp.title)}</b>${sp.chLabel!==sp.title?', '+esc(sp.chLabel):''}, page ${t.s*2+(t.side==='right'?2:1)}.</p><div class="row"><button type="button" class="btn" id="rc-go">Continue</button><button type="button" class="btn ghost" id="rc-start">Start at the beginning</button></div>`,'Continue where you left off');
  $('#rc-go').onclick=()=>{closeOverlay();go(t.s,t.side,1)};$('#rc-start').onclick=()=>{closeOverlay();go(0,'left',1)}}
function retrieval(){const completed=new Set(Object.values(results).map(r=>r.spread));let pool=[];C.SPREADS.forEach((sp,i)=>{if(completed.has(i)&&C.RETRIEVAL[sp.id])C.RETRIEVAL[sp.id].forEach(q=>pool.push(q))});
  let note='';if(pool.length<3){note='<p class="small">(Test mode: you haven\'t completed many pages yet, so these come from the first steps.)</p>';C.SPREADS.forEach(sp=>{(C.RETRIEVAL[sp.id]||[]).forEach(q=>{if(pool.length<6&&!pool.includes(q))pool.push(q)})})}
  pool=pool.map(q=>[Math.random(),q]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]).slice(0,3);const t=resumeTarget(),sp=C.SPREADS[t.s];
  openOverlay(`<span class="eyebrow">Retrieval practice</span><h3>Before we continue, can you remember what you learned?</h3><p>Three quick questions. Remembering before you read on makes it stick.</p>${note}<div class="rq" style="display:grid;gap:12px;max-height:52vh;overflow:auto"></div><div class="row" style="margin-top:14px"><button type="button" class="btn" id="rt-go">Continue to my page</button><span class="small rt-score"></span></div>`,'Retrieval practice');
  const box=$('.rq');let score=0,answered=0;pool.forEach((q,k)=>{const d=document.createElement('div');d.className='oe-try';d.style.padding='14px';d.innerHTML=`<span class="decision" style="font-size:15px">${q.q}</span><div class="opts">${mix(q.opts.map((x,i)=>[x,i])).map(([x,i])=>`<button type="button" class="opt" data-i="${i}" style="font-size:14.5px;padding:9px 12px">${x.t}<span class="why" hidden>${x.why}</span></button>`).join('')}</div>`;box.appendChild(d);
    const bs=$$('.opt',d).sort((a,b)=>a.dataset.i-b.dataset.i),ans=q.opts.findIndex(x=>x.ok);bs.forEach((b,i)=>b.onclick=()=>{bs.forEach((x,j)=>{x.disabled=true;$('.why',x).hidden=false;x.classList.add(j===ans?'right':(j===i?'wrong':'other'))});answered++;if(i===ans)score++;$('.rt-score').textContent=`${score} of ${answered} remembered`})});
  $('#rt-go').onclick=()=>{closeOverlay();if(sp)go(t.s,t.side,1)}}
$('#simulate').onclick=e=>{e.preventDefault();retrieval()};


/* ---------------- end-of-chapter mini tests ---------------- */
const MINITESTS=C.MINITESTS||{};
const EXTRAS=C.EXTRAS||{};
const ALSO=C.ALSO||{};
const CANNOW=C.CANNOW||{};
const sheetURL=n=>(C.SHEETS&&typeof C.SHEETS==='string'?C.SHEETS:'cheatsheets/Chapter{n}_CheatSheet.pdf').replace('{n}',n);
const spLink=id=>{const i=spreadIndex(id);if(i<0)return '';return `<a href="#" data-go="${id}">Chapter ${id.charAt(1)} · ${esc(C.SPREADS[i].title)}, page ${i*2+1}</a>`};
const shuffle=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
function extraLink(x){return `<a href="${x.url}" >${x.name}</a>`}
function nextStep(n,own){return nextStep0(n,own)+(ALSO[n]?`<p style="margin:6px 0 0"><b>Also for everyone:</b> ${extraLink(ALSO[n])}.</p>`:'')}
function nextStep0(n,own){const x=EXTRAS[n];
  if(n===NCH)return C.DIAG?`<p style="margin:6px 0 0">Next: take the <a href="${C.DIAG.after}">final diagnostic</a> to measure your progress.</p>`:(C.NEXT_BOOK?`<p style="margin:6px 0 0">Next: <a href="${C.NEXT_BOOK.url}">${esc(C.NEXT_BOOK.name)}</a>.</p>`:'');
  if(!x)return '';
  if(x.lvl.startsWith('Foundation'))return own<=6?`<p style="margin:6px 0 0"><b>Recommended next:</b> ${extraLink(x)}, extra practice for this chapter.</p>`:`<p style="margin:6px 0 0"><b>Optional:</b> ${extraLink(x)}, if you’d like more practice.</p>`;
  if(x.lvl==='Band 7+')return own>=7?`<p style="margin:6px 0 0"><b>You’re ready for Band 7+:</b> ${extraLink(x)}.</p>`:`<p style="margin:6px 0 0">Review the pages below first. The Band 7+ page, ${extraLink(x)}, will be there when you’re ready.</p>`;
  return `<p style="margin:6px 0 0"><b>Recommended for everyone:</b> ${extraLink(x)}.</p>`}
function miniCard(box){const n=+box.dataset.minitest,qs=MINITESTS[n];if(!qs)return;const total=qs.length+(n>1?2:0),best=S.get('mt-'+n,null);
  box.innerHTML=`<div class="oe-insight" style="margin:14px 0"><span class="lab">Mini test</span><p style="margin:4px 0 10px">${qs.length} questions on Chapter ${n}${n>1?', plus 2 review questions from earlier chapters':''}. Check what you remember before you move on.</p><div class="row"><button type="button" class="btn mt-start">${best?'Try again':'Start the mini test'}</button>${best?`<span class="small">Best score: ${best.best} / ${best.total||total}</span>`:''}</div></div>`;
  $('.mt-start',box).onclick=()=>miniTest(n)}
function miniTest(n){
  const own=MINITESTS[n].map(q=>Object.assign({},q,{ch:n}));let rev=[];
  if(n>1){const pool=[];for(let k=1;k<n;k++)MINITESTS[k].forEach(q=>pool.push(Object.assign({},q,{ch:k,rev:1})));rev=shuffle(pool).slice(0,2)}
  const qs=own.concat(rev).map(q=>Object.assign({},q,{opts:shuffle(q.opts)})),N=qs.length;
  openOverlay(`<span class="eyebrow">Chapter ${n} · Mini test</span><h3>${N} questions</h3><p class="small">Choose an answer to see why it is right or wrong. If you miss one, the page that teaches it is linked underneath.</p><div class="rq" style="display:grid;gap:12px;max-height:52vh;overflow:auto"></div><div class="row" style="margin-top:14px"><button type="button" class="btn" id="mt-done">Close</button><span class="small mt-score" aria-live="polite">0 of ${N} answered</span></div>`,'Chapter '+n+' mini test');
  const box=$('.rq');let score=0,ownScore=0,answered=0;const missed=[];
  qs.forEach((q,k)=>{const d=document.createElement('div');d.className='oe-try';d.style.padding='14px';
    d.innerHTML=`${q.rev?`<span class="small" style="display:block;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px">Review · Chapter ${q.ch}</span>`:''}<p style="font-weight:700;font-size:15px;margin:0 0 8px">${k+1}. ${q.q}</p><div class="opts">${q.opts.map((x,i)=>`<button type="button" class="opt" data-i="${i}" style="font-size:14.5px;padding:9px 12px">${x.t}<span class="why" hidden>${x.why}</span></button>`).join('')}</div><div class="mt-rev"></div>`;box.appendChild(d);
    const bs=$$('.opt',d),ans=q.opts.findIndex(x=>x.ok);
    bs.forEach((b,i)=>b.onclick=()=>{bs.forEach((x,j)=>{x.disabled=true;$('.why',x).hidden=false;x.classList.add(j===ans?'right':(j===i?'wrong':'other'))});
      answered++;if(i===ans){score++;if(!q.rev)ownScore++}else{if(q.sp){$('.mt-rev',d).innerHTML=`<p class="small" style="margin:8px 0 0">Review: ${spLink(q.sp)}</p>`;if(!missed.includes(q.sp))missed.push(q.sp)}}
      const el=$('.mt-score');if(answered<N){el.textContent=`${answered} of ${N} answered · ${score} correct`;return}
      const prev=S.get('mt-'+n,null);S.set('mt-'+n,{best:Math.max(score,prev?prev.best:0),last:score,total:N});
      const msg=score===N?'Excellent: you’re ready for the next chapter.':(score>=N-2?'Good. Read the explanations for the ones you missed.':'Go back to the pages below before you move on.');
      el.textContent=`You scored ${score} out of ${N}. ${msg}`;
      const sum=document.createElement('div');sum.className='oe-insight';sum.style.padding='14px';
      sum.innerHTML=`<span class="lab">Your next step</span>${nextStep(n,ownScore)}${missed.length?`<p style="margin:8px 0 4px"><b>Pages to review:</b></p><ul style="margin:0;padding-left:18px">${missed.map(id=>`<li>${spLink(id)}</li>`).join('')}</ul>`:''}`;
      box.appendChild(sum);sum.scrollIntoView({block:'nearest'})})});
  $('#mt-done').onclick=()=>{closeOverlay();$$('[data-minitest]').forEach(miniCard)}}
function extrasBox(box){const n=+box.dataset.extras,x=EXTRAS[n];
  box.innerHTML=`<div class="oe-insight" style="margin:14px 0"><span class="lab">Extra practice</span>${x?`<p style="margin:4px 0 4px">${extraLink(x)} <span class="small">· ${x.lvl}</span></p><p class="small" style="margin:0 0 10px">${x.who}</p>`:''}${ALSO[n]?`<p style="margin:4px 0 4px">${extraLink(ALSO[n])} <span class="small">· ${ALSO[n].lvl}</span></p><p class="small" style="margin:0 0 10px">${ALSO[n].who}</p>`:''}${C.SHEETS?`<p style="margin:${x?0:'4px 0 0'}"><a href="${sheetURL(n)}" target="_blank" rel="noopener">Download the Chapter ${n} cheat sheet</a> <span class="small">· one printable page</span></p>`:''}</div>`;if(!x&&!ALSO[n]&&!C.SHEETS)box.innerHTML=''}
function canBox(box){const n=+box.dataset.cannow,items=CANNOW[n];if(!items)return;const st=S.get('can-'+n,{});
  box.innerHTML=`<h2>Can you now…?</h2><p class="small" style="margin:0 0 8px">Tick what you can do confidently. If you can’t tick one yet, go back to its page.</p><ul style="list-style:none;padding:0;margin:0 0 12px">${items.map(([q,id],k)=>`<li style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px"><input type="checkbox" id="can-${n}-${k}" data-k="${k}" style="margin-top:6px;flex:none"${st[k]?' checked':''}><span><label for="can-${n}-${k}">${q}</label><br><span class="small">${spLink(id)}</span></span></li>`).join('')}</ul><div style="height:8px"></div>`;
  $$('input',box).forEach(i=>i.onchange=()=>{st[i.dataset.k]=i.checked;S.set('can-'+n,st)})}
function progressBox(box){let bf=null,af=null;const D=C.DIAG;if(!D){box.innerHTML=`<div class="oe-insight" style="margin:14px 0"><span class="lab">Help me improve this course</span><p style="margin:4px 0 0">Please answer the short course survey in the next lesson of your course. It takes about three minutes, and I read every reply.</p></div>`;return}
  try{bf=JSON.parse(localStorage.getItem(D.keyBefore||'oe-diagnostic-before')||'null');af=JSON.parse(localStorage.getItem(D.keyAfter||'oe-diagnostic-after')||'null')}catch(e){}
  box.innerHTML=`<div class="oe-insight" style="margin:14px 0"><span class="lab">Measure your progress</span><p style="margin:4px 0 10px">${bf?`Before the course, you scored <b>${bf.total} / ${D.max||12}</b> on the diagnostic. `:''}${af?`Your final diagnostic score is <b>${af.total} / ${D.max||12}</b>. `:''}The final diagnostic uses a new graph and tests the same four skills as the first one.</p><div class="row"><a class="btn" href="${D.after}" style="text-decoration:none">${af?'Retake':'Take'} the final diagnostic</a></div></div>
  <div class="oe-insight" style="margin:14px 0"><span class="lab">Help me improve this course</span><p style="margin:4px 0 0">Please answer the short course survey in the next lesson of your course. It takes about three minutes, and I read every reply.</p></div>`}
$$('[data-extras]').forEach(extrasBox);$$('[data-cannow]').forEach(canBox);$$('[data-progress]').forEach(progressBox);
$$('[data-minitest]').forEach(miniCard);

/* ---------------- start ---------------- */
const prevLast=S.get('last',0);render(0,0);
const returning=S.get('bm',null)||pos.s>0;
if(returning){if(prevLast&&Date.now()-prevLast>12*3600*1000)retrieval();else if(hashSpread()<0)resumeCard()}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')S.set('last',Date.now())});
})();

