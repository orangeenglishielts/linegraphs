/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · BOOK SETTINGS AND SHARED DIAGRAMS
   Every diagram is drawn from the PROC specs below: numbered stages with a
   simple icon, laid out as a snake (linear process) or a ring (cycle).
   ========================================================================== */
OE.newBook({NS:'oe-procbook-v1-',TITLE:'Mastering Process Diagrams',NCH:6,
  DESC:'Mastering Process Diagrams, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Process Diagrams, Sequencing the Stages, The Passive in Processes, Combining Stages, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:null});

window.PROC=(function(){
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const D='#292929',G='#2B6E43',O='#F88B48',B='#5B9BB5',L='#B9D8E6',S='#E4DED1',Y='#F3C969';
const st=`fill="none" stroke="${D}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
/* icons in a 40 × 40 box */
const I={
  egg:`<ellipse cx="14" cy="24" rx="6" ry="7" fill="#FFF7E8" stroke="${D}" stroke-width="2"/><ellipse cx="26" cy="22" rx="6" ry="7" fill="#FFF7E8" stroke="${D}" stroke-width="2"/><path d="M4,34 C14,28 28,28 36,34" ${st} stroke="${G}"/>`,
  caterpillar:`${[8,15,22,29].map(x=>`<circle cx="${x}" cy="24" r="5" fill="${G}"/>`).join('')}<circle cx="34" cy="20" r="5" fill="${G}"/><path d="M34,14 L32,9 M36,14 L39,10" ${st}/>`,
  pupa:`<path d="M20,4 V9" ${st}/><path d="M20,9 C11,14 12,30 20,36 C28,30 29,14 20,9 Z" fill="#C9B79C" stroke="${D}" stroke-width="2"/><path d="M15,20 H25 M15,26 H25" ${st}/>`,
  butterfly:`<path d="M20,20 C12,6 2,10 6,20 C2,30 12,34 20,22 C28,34 38,30 34,20 C38,10 28,6 20,20 Z" fill="${O}" stroke="${D}" stroke-width="2"/><path d="M20,12 V30" ${st}/>`,
  tree:`<circle cx="20" cy="15" r="11" fill="${G}"/><circle cx="14" cy="14" r="2" fill="#7FB9A0"/><circle cx="24" cy="18" r="2" fill="#7FB9A0"/><path d="M20,24 V36" ${st} stroke-width="3"/>`,
  truck:`<rect x="3" y="12" width="22" height="16" rx="2" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M25,17 H32 L37,23 V28 H25 Z" fill="#fff" stroke="${D}" stroke-width="2"/><circle cx="10" cy="30" r="4" fill="${D}"/><circle cx="31" cy="30" r="4" fill="${D}"/>`,
  wash:`<path d="M12,6 C6,15 6,20 12,20 C18,20 18,15 12,6 Z" fill="${L}" stroke="${B}" stroke-width="2"/><path d="M27,12 C21,21 21,26 27,26 C33,26 33,21 27,12 Z" fill="${L}" stroke="${B}" stroke-width="2"/><path d="M5,34 H35" ${st}/>`,
  crush:`<rect x="6" y="6" width="28" height="9" rx="2" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M20,15 V22" ${st}/><path d="M6,34 L12,26 L17,32 L23,25 L28,31 L34,27" ${st} stroke="${O}"/>`,
  mix:`<path d="M6,16 H34 L31,34 H9 Z" fill="#FFF7E8" stroke="${D}" stroke-width="2"/><path d="M20,4 V22 M14,22 C17,26 23,26 26,22" ${st}/>`,
  spin:`<circle cx="20" cy="20" r="13" fill="none" stroke="${D}" stroke-width="2.2"/><path d="M20,7 A13,13 0 0 1 33,20" ${st} stroke="${O}"/><path d="M33,20 L36,15 M33,20 L28,17" ${st} stroke="${O}"/><circle cx="20" cy="20" r="3" fill="${D}"/>`,
  tank:`<ellipse cx="20" cy="9" rx="12" ry="4" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M8,9 V31 C8,36 32,36 32,31 V9" fill="none" stroke="${D}" stroke-width="2"/><path d="M8,22 C8,26 32,26 32,22 V31 C32,36 8,36 8,31 Z" fill="${Y}" opacity=".8"/>`,
  watertank:`<ellipse cx="20" cy="9" rx="12" ry="4" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M8,9 V31 C8,36 32,36 32,31 V9" fill="none" stroke="${D}" stroke-width="2"/><path d="M8,22 C8,26 32,26 32,22 V31 C32,36 8,36 8,31 Z" fill="${L}"/>`,
  bottle:`<path d="M16,4 H24 V11 C29,14 30,18 30,22 V35 H10 V22 C10,18 11,14 16,11 Z" fill="${L}" stroke="${D}" stroke-width="2"/><rect x="12" y="22" width="16" height="7" fill="#fff" opacity=".8"/>`,
  paper:`<path d="M9,4 H25 L31,10 V36 H9 Z" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M14,16 H26 M14,22 H26 M14,28 H22" ${st} stroke-width="1.8"/>`,
  sort:`<rect x="3" y="20" width="10" height="14" fill="${O}" stroke="${D}" stroke-width="1.8"/><rect x="15" y="20" width="10" height="14" fill="${L}" stroke="${D}" stroke-width="1.8"/><rect x="27" y="20" width="10" height="14" fill="${G}" stroke="${D}" stroke-width="1.8"/><path d="M8,6 V15 M20,6 V15 M32,6 V15" ${st} stroke-width="1.8"/>`,
  pulp:`<path d="M5,14 H35 L32,34 H8 Z" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M9,20 C13,17 17,23 21,20 S29,17 31,20" ${st} stroke="${B}"/>`,
  ink:`<path d="M20,5 C12,17 11,23 20,27 C29,23 28,17 20,5 Z" fill="${D}"/><path d="M8,34 L32,34" ${st} stroke="${O}"/><path d="M28,10 L35,3 M28,3 L35,10" ${st} stroke="${O}"/>`,
  rollers:`<circle cx="13" cy="15" r="8" fill="${S}" stroke="${D}" stroke-width="2"/><circle cx="27" cy="15" r="8" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M3,30 H37" ${st} stroke-width="3"/>`,
  reel:`<circle cx="20" cy="20" r="14" fill="#fff" stroke="${D}" stroke-width="2"/><circle cx="20" cy="20" r="9" fill="none" stroke="${D}" stroke-width="1.4"/><circle cx="20" cy="20" r="4" fill="${D}"/>`,
  sack:`<path d="M12,8 C10,14 7,22 8,34 H32 C33,22 30,14 28,8 Z" fill="#FFF7E8" stroke="${D}" stroke-width="2"/><path d="M12,8 H28" ${st}/><path d="M20,18 V28 M16,22 L20,18 L24,22" ${st} stroke="${G}"/>`,
  dough:`<path d="M5,24 H35 L31,34 H9 Z" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M8,24 C8,12 32,12 32,24" fill="#F3E3B5" stroke="${D}" stroke-width="2"/>`,
  clock:`<circle cx="20" cy="20" r="14" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M20,11 V20 L26,24" ${st}/>`,
  loaf:`<path d="M5,30 V22 C5,12 35,12 35,22 V30 Z" fill="#E7B877" stroke="${D}" stroke-width="2"/><path d="M14,16 L12,22 M21,15 L20,21 M28,16 L28,22" ${st} stroke-width="1.6"/>`,
  oven:`<rect x="5" y="6" width="30" height="28" rx="3" fill="${S}" stroke="${D}" stroke-width="2"/><rect x="10" y="14" width="20" height="14" fill="#fff" stroke="${D}" stroke-width="1.6"/><path d="M17,26 C14,22 18,20 17,17 C21,19 23,23 20,26 Z" fill="${O}"/>`,
  fire:`<path d="M20,4 C27,12 31,18 29,26 C27,33 13,33 11,26 C9,19 14,16 15,10 C17,14 18,15 20,4 Z" fill="${O}" stroke="${D}" stroke-width="2"/><path d="M20,20 C23,24 23,28 20,30 C17,28 17,24 20,20 Z" fill="${Y}"/>`,
  cool:`<path d="M20,4 V36 M6,12 L34,28 M6,28 L34,12" ${st} stroke="${B}"/><circle cx="20" cy="20" r="3" fill="${B}"/>`,
  box:`<path d="M5,14 L20,7 L35,14 V30 L20,37 L5,30 Z" fill="#E7C9A0" stroke="${D}" stroke-width="2"/><path d="M5,14 L20,21 L35,14 M20,21 V37" ${st} stroke-width="1.6"/>`,
  shop:`<rect x="6" y="16" width="28" height="18" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M4,16 L8,7 H32 L36,16 Z" fill="${O}" stroke="${D}" stroke-width="2"/><rect x="16" y="23" width="8" height="11" fill="${S}" stroke="${D}" stroke-width="1.6"/>`,
  cloud:`<path d="M10,26 C3,26 3,16 11,16 C12,8 24,7 26,14 C34,12 37,24 30,26 Z" fill="#fff" stroke="${D}" stroke-width="2"/>`,
  rain:`<path d="M10,20 C3,20 3,10 11,10 C12,2 24,1 26,8 C34,6 37,18 30,20 Z" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M12,25 L10,31 M20,25 L18,31 M28,25 L26,31 M16,32 L14,38 M24,32 L22,38" ${st} stroke="${B}"/>`,
  house:`<path d="M5,19 L20,6 L35,19" fill="${O}" stroke="${D}" stroke-width="2"/><rect x="9" y="19" width="22" height="16" fill="#fff" stroke="${D}" stroke-width="2"/><rect x="17" y="25" width="7" height="10" fill="${S}" stroke="${D}" stroke-width="1.5"/>`,
  gutter:`<path d="M4,16 L20,6 L36,16" fill="${O}" stroke="${D}" stroke-width="2"/><path d="M33,16 H37 V36" ${st} stroke="${B}" stroke-width="3"/><path d="M8,24 L6,30 M14,24 L12,30" ${st} stroke="${B}"/>`,
  filter:`<path d="M6,8 H34 L22,22 V33 L18,36 V22 Z" fill="#fff" stroke="${D}" stroke-width="2"/><path d="M10,12 H30" ${st} stroke="${G}" stroke-dasharray="2 3"/>`,
  pump:`<rect x="8" y="14" width="18" height="16" rx="3" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M26,22 H36 M17,14 V6 H28" ${st}/><path d="M33,18 L37,22 L33,26" ${st} stroke="${O}"/><circle cx="17" cy="22" r="4" fill="none" stroke="${D}" stroke-width="1.6"/>`,
  tap:`<path d="M6,12 H24 C30,12 32,16 32,22 V26" ${st} stroke-width="3"/><path d="M14,12 V6 M10,6 H18" ${st}/><path d="M32,30 C29,35 35,35 32,30 Z" fill="${B}" stroke="${B}"/>`,
  sun:`<circle cx="20" cy="20" r="8" fill="${Y}" stroke="${D}" stroke-width="2"/>${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;return `<path d="M${(20+12*Math.cos(r)).toFixed(1)},${(20+12*Math.sin(r)).toFixed(1)} L${(20+17*Math.cos(r)).toFixed(1)},${(20+17*Math.sin(r)).toFixed(1)}" ${st} stroke="${O}"/>`}).join('')}`,
  steam:`<path d="M4,34 C10,30 14,38 20,34 S30,30 36,34" ${st} stroke="${B}"/><path d="M13,26 C9,21 17,18 13,12 M21,26 C17,21 25,18 21,12 M29,26 C25,21 33,18 29,12" ${st} stroke="#9C968A"/>`,
  wind:`<path d="M4,13 H26 C32,13 32,6 27,6 M4,21 H33 C39,21 38,30 32,29 M4,29 H18" ${st}/>`,
  river:`<path d="M6,4 C20,12 4,22 18,28 C26,32 30,34 36,36" fill="none" stroke="${B}" stroke-width="6" stroke-linecap="round"/>`,
  wave:`<path d="M2,18 C8,12 14,24 20,18 S32,12 38,18" ${st} stroke="${B}"/><path d="M2,28 C8,22 14,34 20,28 S32,22 38,28" ${st} stroke="${B}"/>`,
  ground:`<path d="M2,14 H38" ${st} stroke="${G}" stroke-width="3"/><rect x="2" y="16" width="36" height="20" fill="#E7C9A0"/><path d="M12,18 V30 M20,18 V34 M28,18 V28" ${st} stroke="${B}" stroke-dasharray="3 3"/>`,
  bin:`<path d="M8,12 H32 L29,36 H11 Z" fill="${G}" stroke="${D}" stroke-width="2"/><path d="M6,12 H34 M16,8 H24" ${st}/><path d="M15,20 L17,30 M20,20 V30 M25,20 L23,30" ${st} stroke="#fff" stroke-width="1.6"/>`,
  factory:`<path d="M4,36 V18 L13,23 V18 L22,23 V18 L31,23 V36 Z" fill="${S}" stroke="${D}" stroke-width="2"/><rect x="29" y="6" width="6" height="18" fill="${S}" stroke="${D}" stroke-width="2"/>`,
  shards:`<path d="M6,30 L12,22 L16,30 Z M18,32 L22,20 L28,28 Z M28,34 L34,26 L36,34 Z M10,18 L16,12 L18,18 Z" fill="${L}" stroke="${D}" stroke-width="1.6"/>`,
  mould:`<path d="M5,8 H17 V36 H5 Z M23,8 H35 V36 H23 Z" fill="${S}" stroke="${D}" stroke-width="2"/><path d="M17,14 C21,14 21,30 17,30 M23,14 C19,14 19,30 23,30" fill="${O}" stroke="${D}" stroke-width="1.6"/>`,
  people:`<circle cx="13" cy="12" r="5" fill="${O}"/><circle cx="27" cy="12" r="5" fill="${G}"/><path d="M5,34 C5,22 21,22 21,34 Z" fill="${O}"/><path d="M19,34 C19,22 35,22 35,34 Z" fill="${G}"/>`
};
const lab=(x,y,t,fs)=>{const ls=String(t).split('|');return ls.map((ln,i)=>`<text x="${x}" y="${(y+(i-(ls.length-1)/2)*13+4).toFixed(1)}" text-anchor="middle" font-size="${fs||11}" font-weight="500" fill="${D}">${esc(ln)}</text>`).join('')};
const arrowHead=(x,y,ang,c)=>{const a=0.5,l=8;return `<path d="M${x},${y} L${(x-l*Math.cos(ang-a)).toFixed(1)},${(y-l*Math.sin(ang-a)).toFixed(1)} L${(x-l*Math.cos(ang+a)).toFixed(1)},${(y-l*Math.sin(ang+a)).toFixed(1)} Z" fill="${c||O}"/>`};
const line=(x1,y1,x2,y2,c)=>`<path d="M${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)}" stroke="${c||O}" stroke-width="2.4"/>`+arrowHead(x2,y2,Math.atan2(y2-y1,x2-x1),c);
function draw(o){
  const W=560,hot=!!o.hot,id=o.id,T=o.title?[].concat(o.title):[],top=T.length?14+T.length*17:8,n=o.steps.length,bw=o.bw||112,bh=o.bh||96;
  const grp=(part,label,inner,bb)=>hot&&part?`<g class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}">${bb?`<rect class="hit" x="${bb[0]}" y="${bb[1]}" width="${bb[2]}" height="${bb[3]}" rx="10"/>`:''}${inner}</g>`:inner;
  // positions
  let P=[],H;
  if(o.layout==='cycle'){const rx=o.rx||195,ry=o.ry||(n>6?150:125);H=top+2*ry+bh+28;const cx=W/2,cy=top+ry+bh/2+14;
    P=o.steps.map((s,i)=>{const a=-Math.PI/2+2*Math.PI*i/n;return [cx+rx*Math.cos(a),cy+ry*Math.sin(a)]})}
  else{const cols=o.cols||4,rows=Math.ceil(n/cols),gx=(W-24-cols*bw)/(cols-1),gy=40;H=top+rows*bh+(rows-1)*gy+28;
    P=o.steps.map((s,i)=>{const r=Math.floor(i/cols),c=r%2?cols-1-(i%cols):i%cols;return [12+bw/2+c*(bw+gx),top+14+bh/2+r*(bh+gy)]})}
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif"><title id="${id}-t">${esc(T.join(' '))}</title>`;
  let tt='';T.forEach((ln,i)=>{tt+=`<text x="${W/2}" y="${18+i*17}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="${D}">${esc(ln)}</text>`});
  s+=grp('title','Diagram title',tt,[60,2,W-120,T.length*17+6]);
  // arrows (behind boxes)
  const edge=(p,q)=>{const dx=q[0]-p[0],dy=q[1]-p[1];const tx=Math.abs(dx)>1e-6?(bw/2+4)/Math.abs(dx):Infinity,ty=Math.abs(dy)>1e-6?(bh/2+4)/Math.abs(dy):Infinity,t=Math.min(tx,ty);return [p[0]+dx*t,p[1]+dy*t]};
  const links=[];for(let i=0;i<n-1;i++)links.push([i,i+1]);if(o.layout==='cycle')links.push([n-1,0]);
  links.forEach(([a,b])=>{const p=P[a],q=P[b],e1=edge(p,q),e2=edge(q,p);s+=line(e1[0],e1[1],e2[0],e2[1])});
  if(o.center)s+=lab(W/2,P.reduce((a,p)=>a+p[1],0)/n,o.center,12);
  // boxes
  o.steps.forEach((st0,i)=>{const [cx,cy]=P[i],x=cx-bw/2,y=cy-bh/2;
    const inner=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="10" fill="#fff" stroke="#CFC6B4" stroke-width="1.5"/><circle cx="${x+13}" cy="${y+13}" r="10" fill="${O}"/><text x="${x+13}" y="${y+17}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="11" fill="${D}">${i+1}</text><g transform="translate(${cx-17},${y+6}) scale(.85)">${I[st0.icon]||''}</g>`+lab(cx,y+bh-24,st0.label,st0.fs||10.5);
    s+=grp('s'+(i+1),'Stage '+(i+1)+': '+String(st0.label).replace(/\|/g,' '),inner,null)});
  return s+'</svg>'}
const F=(id,title,steps,extra)=>Object.assign({type:'raw',id,title,steps,svg:draw},extra||{});

const STEPS={
  BUTTERFLY:[{icon:'egg',label:'Eggs laid|on a leaf'},{icon:'caterpillar',label:'Caterpillar hatches|and feeds'},{icon:'pupa',label:'Pupa|(chrysalis) forms'},{icon:'butterfly',label:'Adult butterfly|emerges'}],
  OLIVE:[{icon:'tree',label:'Olives picked|from trees'},{icon:'truck',label:'Taken by lorry|to the mill'},{icon:'wash',label:'Washed;|leaves removed'},{icon:'crush',label:'Crushed|into a paste'},{icon:'mix',label:'Paste mixed|for 30 minutes'},{icon:'spin',label:'Oil separated|in a centrifuge'},{icon:'tank',label:'Oil stored|in steel tanks'},{icon:'bottle',label:'Bottled|and sold'}],
  PAPER:[{icon:'bin',label:'Used paper|collected'},{icon:'sort',label:'Sorted|by type'},{icon:'pulp',label:'Mixed with water|to make pulp'},{icon:'filter',label:'Pulp screened;|staples removed'},{icon:'ink',label:'Ink|removed'},{icon:'rollers',label:'Pressed into|sheets'},{icon:'fire',label:'Dried by|heated rollers'},{icon:'reel',label:'Rolled onto|large reels'}],
  BREAD:[{icon:'sack',label:'Ingredients|weighed'},{icon:'mix',label:'Mixed|into dough'},{icon:'clock',label:'Left to rise|(1 hour)'},{icon:'dough',label:'Divided and|shaped'},{icon:'oven',label:'Baked at 230°C|(30 minutes)'},{icon:'clock',label:'Cooled|(2 hours)'},{icon:'box',label:'Sliced and|packaged'},{icon:'truck',label:'Delivered to|supermarkets'}],
  RAIN:[{icon:'rain',label:'Rain falls|on the roof'},{icon:'gutter',label:'Flows into|gutters and pipe'},{icon:'filter',label:'Filtered;|leaves removed'},{icon:'watertank',label:'Stored in an|underground tank'},{icon:'pump',label:'Pumped to|the house'},{icon:'tap',label:'Used for toilets|and the garden'}],
  WATER:[{icon:'sun',label:'Sun heats|sea water'},{icon:'steam',label:'Water|evaporates'},{icon:'cloud',label:'Vapour cools;|clouds form'},{icon:'wind',label:'Wind carries|clouds inland'},{icon:'rain',label:'Rain or snow|falls'},{icon:'river',label:'Rivers carry|water to the sea'}],
  GLASS:[{icon:'bin',label:'Bottles put in|recycling bins'},{icon:'truck',label:'Collected|by lorry'},{icon:'sort',label:'Sorted|by colour'},{icon:'wash',label:'Washed;|labels removed'},{icon:'shards',label:'Crushed into|small pieces'},{icon:'fire',label:'Melted at|1,500°C'},{icon:'mould',label:'Moulded into|new bottles'},{icon:'shop',label:'Filled and|sent to shops'}]
};
const C={
  butterfly:F('ch-butterfly',['The life cycle of a butterfly'],STEPS.BUTTERFLY,{layout:'cycle',rx:150,ry:110}),
  olive:F('ch-olive',['How olive oil is produced'],STEPS.OLIVE),
  paper:F('ch-paper',['How paper is recycled'],STEPS.PAPER),
  bread:F('ch-bread',['How bread is made in a factory'],STEPS.BREAD),
  rain:F('ch-rain',['How rainwater is collected and used in a house'],STEPS.RAIN,{cols:3}),
  water:F('ch-water',['The water cycle'],STEPS.WATER,{layout:'cycle',rx:190,ry:125}),
  glass:F('ch-glass',['How glass bottles are recycled'],STEPS.GLASS,{layout:'cycle',rx:214,ry:180})
};
const n=k=>STEPS[k].length;
return {C,F,STEPS,n};
})();
