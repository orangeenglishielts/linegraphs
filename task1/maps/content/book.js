/* ==========================================================================
   MASTERING MAPS · BOOK SETTINGS AND SHARED MAPS
   Every map in the book is drawn from the specs in MAPS below.
   Map space: 560 × 400. North is always at the top (compass top right).
   ========================================================================== */
OE.newBook({NS:'oe-mapbook-v1-',TITLE:'Mastering Maps',NCH:6,
  DESC:'Mastering Maps, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Maps, Describing Changes, Location and Direction, Selecting and Grouping Changes, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:{url:'../processes/',name:'Mastering Processes'}});

window.MAP=(function(){
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const COL={land:'#F6F2E8',field:'#E2EDD6',wood:'#CFE3D3',tree:'#7FB9A0',treeDk:'#2B6E43',water:'#B9D8E6',road:'#DDD5C6',roadEdge:'#C9BFAE',bldg:'#FFFFFF',house:'#F8D9BF',shop:'#FBE6CF',pub:'#E4DED1',dark:'#292929',car:'#E9E5DC',sand:'#F3E3B5',sport:'#CFE6C4'};
/* label helper: centred, wraps on | */
const lab=(x,y,t,o={})=>String(t).split('|').map((ln,i,a)=>`<text x="${x}" y="${y+(i-(a.length-1)/2)*12.5+4}" text-anchor="middle" font-size="${o.fs||11}" font-weight="${o.fw||600}" fill="${o.fill||COL.dark}"${o.it?' font-style="italic"':''}>${esc(ln)}</text>`).join('');
function el(e){
  const L=e.label||'';
  switch(e.t){
    case 'field':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" fill="${COL.field}" stroke="#C7D9B8" stroke-dasharray="4 3"/>`+(L?lab(e.x+e.w/2,e.y+e.h/2,L,{fw:500,it:1,fill:'#4C6B3C'}):'');
    case 'sport':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" rx="4" fill="${COL.sport}" stroke="#9FC48E"/><rect x="${e.x+8}" y="${e.y+8}" width="${e.w-16}" height="${e.h-16}" fill="none" stroke="#fff" stroke-width="1.5"/>`+(L?lab(e.x+e.w/2,e.y+e.h/2,L):'');
    case 'sand':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" rx="${e.r||10}" fill="${COL.sand}"/>`+(L?lab(e.x+e.w/2,e.y+e.h/2,L,{fw:500,it:1}):'');
    case 'wood':case 'park':{let s=`<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" rx="${e.t==='park'?8:14}" fill="${e.t==='park'?COL.field:COL.wood}"${e.t==='park'?` stroke="#9FC48E"`:''}/>`;
      const n=e.n!=null?e.n:Math.max(3,Math.round(e.w*e.h/1400));let k=0;for(let i=0;i<n;i++){const fx=((i*0.7548776662+0.5)%1),fy=((i*0.5698402910+0.5)%1);const cx=e.x+12+fx*(e.w-24),cy=e.y+12+fy*(e.h-24);
        if(L&&Math.abs(cx-(e.x+e.w/2))<e.w*0.32&&Math.abs(cy-(e.y+e.h/2))<13)continue;s+=`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(k++%3)?6:7.5}" fill="${(i%4)?COL.tree:COL.treeDk}"/>`}
      return s+(L?lab(e.x+e.w/2,e.y+e.h/2,L,{fill:'#1F4D30'}):'')}
    case 'water':return e.d?`<path d="${e.d}" fill="none" stroke="${COL.water}" stroke-width="${e.w||20}" stroke-linecap="round" stroke-linejoin="round"/>`+(L?lab(e.lx,e.ly,L,{it:1,fw:500,fill:'#2F6177'}):''):`<${e.rx?'ellipse':'rect'} ${e.rx?`cx="${e.x}" cy="${e.y}" rx="${e.rx}" ry="${e.ry}"`:`x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}"`} fill="${e.fill||COL.water}"${e.stroke?` stroke="${e.stroke}" stroke-width="2" stroke-dasharray="5 3"`:''}/>`+(L?lab(e.lx||e.x+(e.w||0)/2,e.ly||e.y+(e.h||0)/2,L,{it:1,fw:500,fill:'#2F6177'}):'');
    case 'land':return `<path d="${e.d}" fill="${COL.land}" stroke="#E2D6B8" stroke-width="2"/>`;
    case 'pier':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" fill="#C9AD86" stroke="#8C7553"/>`+(L?lab(e.lx,e.ly,L,{fs:10.5}):'');
    case 'hut':return `<circle cx="${e.x}" cy="${e.y}" r="${e.r||7}" fill="${COL.house}" stroke="${COL.dark}" stroke-width="1"/>`;
    case 'palm':return `<circle cx="${e.x}" cy="${e.y}" r="6" fill="${COL.tree}"/><circle cx="${e.x}" cy="${e.y}" r="2" fill="${COL.treeDk}"/>`;
    case 'plaza':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" rx="${e.r||3}" fill="#F1E7D2" stroke="#C9B48E" stroke-dasharray="5 3"/>`+(L?lab(e.lx!=null?e.lx:e.x+e.w/2,e.ly!=null?e.ly:e.y+e.h/2,L,{fs:10.5,fw:500,it:1,fill:'#6B655A'}):'');
    case 'sea':return `<path d="${e.d}" fill="${COL.water}"/>`+(L?lab(e.lx,e.ly,L,{it:1,fw:500,fill:'#2F6177',fs:12}):'');
    case 'road':return `<path d="${e.d}" fill="none" stroke="${COL.roadEdge}" stroke-width="${(e.w||12)+3}" stroke-linecap="${e.cap||'butt'}" stroke-linejoin="round"/><path d="${e.d}" fill="none" stroke="${COL.road}" stroke-width="${e.w||12}" stroke-linecap="${e.cap||'butt'}" stroke-linejoin="round"/>`+(L?lab(e.lx,e.ly,L,{fs:10.5,fw:500,it:1,fill:'#6B655A'}):'');
    case 'path':return `<path d="${e.d}" fill="none" stroke="#B9A88E" stroke-width="3" stroke-dasharray="5 4" stroke-linecap="round"/>`+(L?lab(e.lx,e.ly,L,{fs:10.5,fw:500,it:1,fill:'#6B655A'}):'');
    case 'rail':return `<path d="${e.d}" fill="none" stroke="${COL.dark}" stroke-width="4"/><path d="${e.d}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="8 8"/>`+(L?lab(e.lx,e.ly,L,{fs:10.5,fw:500,it:1}):'');
    case 'bridge':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" fill="#BDB3A0" stroke="${COL.dark}" stroke-width="1.2"/>`+(L?lab(e.lx,e.ly,L,{fs:10.5}):'');
    case 'houses':{let s='';const c=e.c||4,r=e.r||2,sx=e.sx||16,sy=e.sy||16;for(let i=0;i<c;i++)for(let j=0;j<r;j++)s+=`<rect x="${e.x+i*sx}" y="${e.y+j*sy}" width="${sx-5}" height="${sy-5}" fill="${COL.house}" stroke="${COL.dark}" stroke-width="1"/>`;
      return s+(L?lab(e.lx!=null?e.lx:e.x+c*sx/2-2,e.ly!=null?e.ly:e.y+r*sy+10,L):'')}
    case 'car':return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" fill="${COL.car}" stroke="#AFA796"/>`+lab(e.x+e.w/2,e.y+e.h/2-(L?7:0),'P',{fs:15,fw:800,fill:'#6B655A'})+(L?lab(e.x+e.w/2,e.y+e.h/2+10,L,{fs:10}):'');
    case 'circle':return `<circle cx="${e.x}" cy="${e.y}" r="${e.r}" fill="${e.fill||COL.pub}" stroke="${COL.dark}" stroke-width="1.2"/>`+(L?lab(e.x,e.ly||e.y,L,{fs:10}):'');
    case 'text':return lab(e.x,e.y,L,{fs:e.fs||11,fw:e.fw||500,it:e.it,fill:e.fill});
    default:{ /* building */ const f={house:COL.house,shop:COL.shop,pub:COL.pub,new:COL.bldg}[e.kind]||COL.bldg;
      return `<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" rx="2" fill="${f}" stroke="${COL.dark}" stroke-width="1.3"/>`+(L?lab(e.x+e.w/2,e.y+e.h/2,L,{fs:e.fs||10.5}):'')}
  }
}
function draw(o){
  const W=560,H=o.h||400,hot=!!o.hot,id=o.id,T=o.title?[].concat(o.title):[];const top=T.length?14+T.length*17:8;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-t" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui,sans-serif"><title id="${id}-t">${esc(T.join(' '))}</title>`;
  const grp=(part,label,inner,bb)=>hot&&part?`<g class="hot" data-part="${part}" tabindex="0" role="button" aria-label="${esc(label)}">${bb?`<rect class="hit" x="${bb[0]}" y="${bb[1]}" width="${bb[2]}" height="${bb[3]}" rx="6"/>`:''}${inner}</g>`:inner;
  let tt='';T.forEach((ln,i)=>{tt+=`<text x="${W/2}" y="${18+i*17}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="${COL.dark}">${esc(ln)}</text>`});
  s+=grp(o.titlePart||'title','Map title',tt,[60,2,W-120,T.length*17+6]);
  const mx=12,my=top,mw=W-24,mh=H-top-12;
  s+=`<defs><clipPath id="${id}-clip"><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="10"/></clipPath></defs><g clip-path="url(#${id}-clip)"><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" fill="${o.bg||COL.land}"/>`;
  o.els.forEach(e=>{s+=grp(e.part,e.aria||e.label||e.part,el(e),e.part?e.bb||(e.w&&e.h?[e.x-3,e.y-3,e.w+6,e.h+6]:null):null)});
  s+=`</g><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="10" fill="none" stroke="#CFC6B4" stroke-width="1.5"/>`;
  // compass
  const cx=o.compass?o.compass[0]:W-40,cy=o.compass?o.compass[1]:my+30;const cmp=`<circle cx="${cx}" cy="${cy}" r="17" fill="#fff" stroke="#CFC6B4"/><path d="M${cx},${cy-13} L${cx+6},${cy+4} L${cx},${cy} L${cx-6},${cy+4} Z" fill="#F88B48"/><text x="${cx}" y="${cy+15}" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="9.5" fill="${COL.dark}">N</text>`;
  s+=grp('compass','Compass',cmp,[cx-20,cy-20,40,40]);
  if(o.scale){const sx=mx+16,sy=H-22;s+=grp('scale','Scale',`<rect x="${sx-4}" y="${sy-14}" width="${o.scale.px+52}" height="22" rx="4" fill="#fff" fill-opacity=".85"/><line x1="${sx}" y1="${sy}" x2="${sx+o.scale.px}" y2="${sy}" stroke="${COL.dark}" stroke-width="2"/><line x1="${sx}" y1="${sy-4}" x2="${sx}" y2="${sy+4}" stroke="${COL.dark}" stroke-width="2"/><line x1="${sx+o.scale.px}" y1="${sy-4}" x2="${sx+o.scale.px}" y2="${sy+4}" stroke="${COL.dark}" stroke-width="2"/><text x="${sx+o.scale.px+6}" y="${sy+4}" font-size="10.5" fill="${COL.dark}">${esc(o.scale.t)}</text>`,[sx-6,sy-16,o.scale.px+56,26])}
  return s+'</svg>'}
const M=(id,title,els,extra)=>Object.assign({type:'raw',id,title,els,svg:draw},extra||{});

/* ---------------- Ashby village (chapters 1 to 3) ---------------- */
const ASHBY_BASE=[
  {t:'rail',d:'M12,70 L548,70',label:'Railway',lx:430,ly:58},
  {t:'water',d:'M12,352 C120,338 200,366 300,352 S470,338 548,350',w:22,label:'River Ash',lx:120,ly:378},
  {t:'road',d:'M280,70 L280,400',w:14,label:'Main Road',lx:250,ly:250},
  {t:'bridge',x:270,y:340,w:20,h:24},
  {x:90,y:82,w:52,h:22,kind:'pub',label:'Station',part:'station'},
  {t:'houses',x:40,y:110,c:6,r:3,label:'Houses',part:'houses',bb:[34,104,98,70]},
  {x:170,y:150,w:56,h:40,kind:'pub',label:'Church',part:'church'},
];
const ASHBY_2000=ASHBY_BASE.concat([
  {x:60,y:250,w:90,h:52,kind:'pub',label:'School',part:'school'},
  {t:'field',x:300,y:84,w:236,h:150,label:'Farmland',part:'farmland'},
  {x:300,y:250,w:70,h:34,kind:'shop',label:'Post office',part:'postoffice'},
  {t:'wood',x:390,y:250,w:146,h:80,label:'Woodland',part:'woodland'}
]);
const ASHBY_2025=ASHBY_BASE.concat([
  {x:60,y:250,w:90,h:52,kind:'pub',label:'School',part:'school'},{x:150,y:250,w:50,h:52,kind:'pub',label:'New|wing',part:'schoolext'},
  {t:'road',d:'M287,160 L420,160 L420,226',w:10,label:'Elm Close',lx:350,ly:148,part:'newroad',bb:[286,152,142,16]},
  {t:'houses',x:310,y:94,c:6,r:2,sx:17,sy:17,lx:360,ly:84},{t:'houses',x:432,y:94,c:5,r:2,sx:17,sy:17},
  {t:'houses',x:310,y:176,c:6,r:2,sx:17,sy:17},{t:'houses',x:432,y:176,c:5,r:2,sx:17,sy:17},
  {t:'text',x:420,y:92,label:'',fs:1},
  {t:'text',x:470,y:226,label:'Housing estate',fw:700,part:'estate'},
  {x:300,y:250,w:70,h:34,kind:'shop',label:'Café',part:'cafe'},
  {x:392,y:250,w:84,h:44,kind:'shop',label:'Supermarket',part:'supermarket'},
  {t:'car',x:482,y:250,w:54,h:44,label:'Car park',part:'carpark'},
  {t:'wood',x:392,y:300,w:144,h:30,n:7},
  {t:'path',d:'M120,316 L120,372',label:'Footbridge',lx:162,ly:330,part:'footbridge',bb:[104,312,90,64]},
  {t:'bridge',x:110,y:340,w:20,h:24}
]);

/* ---------------- Millbrook town centre (chapter 4) ---------------- */
const MILL_BASE=[
  {t:'water',d:'M505,30 C482,150 528,262 496,410',w:34,label:'River Mill',lx:500,ly:374},
  {t:'road',d:'M240,30 L240,410',w:12,label:'Station Road',lx:285,ly:168},
  {t:'houses',x:122,y:62,c:4,r:3,sx:17,sy:17,label:'Terraced houses',part:'houses',bb:[116,56,76,74]},
  {x:206,y:182,w:68,h:56,kind:'pub',label:'Market|square',part:'market'},
  {t:'park',x:30,y:250,w:176,h:130,label:'Park',part:'park'}
];
const MILL_1995=[{t:'road',d:'M12,210 L478,210',w:16,label:'High Street',lx:120,ly:232,part:'highstreet',bb:[12,198,466,26]}].concat(MILL_BASE,[
  {x:36,y:68,w:70,h:44,kind:'pub',label:'Cinema',part:'cinema'},
  {x:300,y:70,w:126,h:84,kind:'pub',label:'Factory',part:'factory'},
  {x:282,y:250,w:96,h:54,kind:'pub',label:'Bus station',part:'busstation'},
  {t:'car',x:390,y:316,w:80,h:60,label:'Car park',part:'carpark'}
]);
const MILL_2025=[{t:'plaza',x:12,y:200,w:466,h:20,label:'High Street (pedestrians only)',lx:120,ly:232,part:'highstreet',bb:[12,196,466,28]}].concat(MILL_BASE,[
  {x:36,y:68,w:70,h:44,kind:'pub',label:'Gym',part:'gym'},
  {x:300,y:70,w:56,h:84,kind:'house',label:'Flats',part:'flats'},{x:370,y:70,w:56,h:84,kind:'house',label:'Flats'},
  {x:282,y:250,w:120,h:58,kind:'shop',label:'Shopping|centre',part:'shopping'},
  {x:390,y:322,w:80,h:50,kind:'pub',label:'Bus station',part:'busstation'},
  {t:'path',d:'M474,40 C456,150 500,262 470,400',label:'Cycle path',lx:438,ly:180,part:'cyclepath',bb:[440,40,50,360]}
]);

/* ---------------- Greenhill Park (chapter 5) ---------------- */
const PARK_BASE=[
  {t:'road',d:'M12,215 L70,215',w:12,label:'Entrance',lx:42,ly:200},
  {t:'water',x:285,y:215,rx:120,ry:56,label:'Lake',part:'lake'},
  {t:'park',x:40,y:268,w:110,h:96,n:0,label:'Playground',part:'playground'},
  {t:'wood',x:180,y:296,w:200,h:84,label:'Woodland',part:'woodland'}
];
const PARK_2005=PARK_BASE.concat([
  {t:'car',x:40,y:64,w:84,h:60,label:'Car park',part:'carpark'},
  {x:210,y:80,w:70,h:40,kind:'shop',label:'Café',part:'cafe'},
  {t:'sport',x:372,y:62,w:126,h:70,label:'Tennis courts',part:'tennis'},
  {t:'field',x:400,y:280,w:126,h:100,label:'Open grass',part:'grass'}
]);
const PARK_2025=PARK_BASE.concat([
  {t:'car',x:40,y:64,w:140,h:60,label:'Car park',part:'carpark'},
  {x:210,y:80,w:110,h:40,kind:'shop',label:'Restaurant',part:'restaurant'},{t:'plaza',x:210,y:122,w:110,h:20,label:'Outdoor seating',lx:265,ly:132},
  {t:'sport',x:372,y:62,w:126,h:70,label:'Skate park',part:'skate'},
  {t:'sport',x:400,y:280,w:126,h:100,label:'Football pitch',part:'pitch'},
  {t:'path',d:'M165,215 C165,140 405,140 405,215 C405,290 165,290 165,215',label:'',part:'lakepath',bb:[160,150,250,130]},
  {t:'pier',x:352,y:168,w:12,h:32,label:'Boat hire',lx:396,ly:190,part:'boats'},
  {t:'text',x:285,y:290,label:'Footpath round the lake',fs:10.5,it:1,fill:'#6B655A'}
]);

/* ---------------- Hillcrest School (chapter 6, practice) ---------------- */
const SCH_BASE=[
  {t:'road',d:'M12,52 L548,52',w:14,label:'Hill Road',lx:470,ly:76},
  {x:190,y:120,w:150,h:90,kind:'pub',label:'Main building',part:'main'}
];
const SCH_NOW=SCH_BASE.concat([
  {t:'road',d:'M110,52 L110,90',w:10},
  {t:'car',x:40,y:90,w:130,h:90,label:'Car park',part:'carpark'},
  {x:200,y:250,w:60,h:40,kind:'pub',label:'Library',part:'library'},
  {t:'park',x:280,y:240,w:120,h:120,label:'Garden',part:'garden'},
  {t:'field',x:410,y:80,w:130,h:300,label:'Playing field',part:'field'}
]);
const SCH_PLAN=SCH_BASE.concat([
  {t:'road',d:'M110,52 L110,90',w:10},{t:'road',d:'M265,52 L265,120',w:10,label:'New entrance',lx:316,ly:86,part:'entrance',bb:[255,52,90,68]},
  {t:'car',x:40,y:90,w:130,h:50,label:'Car park',part:'carpark'},
  {x:40,y:148,w:130,h:32,kind:'new',label:'Bicycle shelter',part:'bikes'},
  {x:200,y:250,w:60,h:40,kind:'pub',label:'Library',part:'library'},{x:200,y:290,w:60,h:40,kind:'pub',label:'Extension',fs:9.5,part:'libext'},
  {x:280,y:240,w:100,h:70,kind:'pub',label:'Science|block',part:'science'},{t:'park',x:280,y:318,w:100,h:44,n:3},
  {x:410,y:80,w:130,h:110,kind:'pub',label:'Sports hall',part:'hall'},
  {t:'field',x:410,y:200,w:130,h:180,label:'Playing field',part:'field'}
]);

/* ---------------- Palm Island (chapter 6, timed) ---------------- */
const ISLAND='M110,215 C100,120 190,70 290,74 C400,78 480,130 470,215 C462,300 380,355 285,352 C180,350 118,300 110,215 Z';
const PALMS=(pts)=>pts.map(([x,y])=>({t:'palm',x,y}));
const ISL_2000=[{t:'land',d:ISLAND},{t:'sand',x:112,y:150,w:60,h:140,r:30,label:'Beach',part:'beach'}].concat(
  PALMS([[200,120],[240,104],[280,100],[330,108],[380,124],[420,160],[440,210],[420,262],[380,300],[330,322],[280,326],[230,316],[200,280],[220,180],[270,160],[320,170],[370,190],[400,230],[350,250],[300,240],[250,230],[260,280],[320,290]]),
  [{t:'text',x:288,y:374,label:'Sea',it:1,fill:'#2F6177',fs:12}]);
const ISL_2025=[{t:'land',d:ISLAND},{t:'sand',x:112,y:150,w:60,h:140,r:30,label:'Beach',part:'beach'},
  {t:'water',x:60,y:220,rx:30,ry:60,fill:'#DCEEF5',stroke:'#fff'},{t:'text',x:52,y:220,label:'Swimming|area',fs:10,it:1,fill:'#2F6177',part:'swim'}].concat(
  [[190,140],[188,170],[188,200],[188,230],[188,260],[190,290]].map(([x,y])=>({t:'hut',x,y})),
  [{t:'text',x:214,y:118,label:'Huts',fs:10.5,part:'huts'},
   {t:'path',d:'M196,215 L280,215 L280,150 M280,215 L280,330'},
   {x:250,y:196,w:60,h:36,kind:'pub',label:'Reception',fs:9.5,part:'reception'},
   {x:250,y:126,w:64,h:30,kind:'shop',label:'Restaurant',fs:9.5,part:'restaurant'},
   {t:'pier',x:272,y:330,w:16,h:62,label:'Pier',lx:308,ly:372,part:'pier'}],
  PALMS([[340,108],[380,124],[420,160],[440,210],[420,262],[380,300],[330,322],[370,190],[400,230],[350,250],[350,150]]),
  [{t:'text',x:470,y:374,label:'Sea',it:1,fill:'#2F6177',fs:12}]);
const C={
  ashby00:M('ch-ashby00',['Ashby village in 2000'],ASHBY_2000,{compass:[36,205]}),
  ashby25:M('ch-ashby25',['Ashby village in 2025'],ASHBY_2025,{compass:[36,205]}),
  mill95:M('ch-mill95',['Millbrook town centre in 1995'],MILL_1995),
  mill25:M('ch-mill25',['Millbrook town centre in 2025'],MILL_2025),
  park05:M('ch-park05',['Greenhill Park in 2005'],PARK_2005),
  park25:M('ch-park25',['Greenhill Park in 2025'],PARK_2025),
  schnow:M('ch-schnow',['Hillcrest School: present layout'],SCH_NOW,{compass:[36,355]}),
  schplan:M('ch-schplan',['Hillcrest School: planned layout'],SCH_PLAN,{compass:[36,355]}),
  isl00:M('ch-isl00',['Palm Island in 2000'],ISL_2000,{bg:'#B9D8E6'}),
  isl25:M('ch-isl25',['Palm Island in 2025'],ISL_2025,{bg:'#B9D8E6'})
};
return {C,M,COL,ASHBY_2000,ASHBY_2025};
})();
