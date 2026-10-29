/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS (MODULE 3) · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA. Maps use MAP.M and processes
   use PROC.F (loaded first from the maps and processes books).
   ========================================================================== */
OE.newBook({NS:'oe-m3book-v1-',TITLE:'Writing Effective Overviews',NCH:6,
  DESC:'Writing Effective Overviews, Module 3 of IELTS Academic Writing Task 1 Complete, in six chapters: What an Overview Is, Overviews for Trends, Overviews for Comparisons, Overviews for Maps and Processes, Common Overview Mistakes and Applying the Skills.',
  NEXT_BOOK:{url:'../m4-describing-data/',name:'Describing Data Accurately'}});

window.OV=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;const PURPLE='#4E4178';
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const DATA={
  /* Ch1: passengers on three railway lines (millions) */
  TRAIN:{x:['2005','2010','2015','2020','2025'],coast:[12,14,17,21,26],valley:[18,17,15,14,12],north:[6,7,7,8,8]},
  /* Ch2: news readers (millions); solar panels (% of households) */
  NEWS:{x:['2000','2005','2010','2015','2020','2025'],print:[9.0,7.5,5.5,3.8,2.6,1.9],online:[0.5,1.8,3.9,6.2,8.4,9.6]},
  SOLAR:{x:['2008','2012','2016','2020','2024'],north:[2,4,7,11,15],south:[5,12,20,27,33],west:[3,5,9,10,11]},
  /* Ch3: volunteering by age and sex (%); council budget (%) */
  VOL:{x:['18 to 29','30 to 44','45 to 59','60 and over'],men:[14,11,16,24],women:[18,15,21,27]},
  BUDGET:{cats:['Social care','Education','Transport','Housing','Parks','Other'],v:[32,26,14,12,6,10]},
  /* Ch5: visitors to four attractions (thousands) */
  ATTR:{cols:['Attraction','2015','2025'],rows:[['Zoo',300,290],['Castle',220,260],['Aquarium',180,310],['Art gallery',150,140]]},
  /* Ch6: food waste recycling (% of households); household spending (€ per month) */
  FOODREC:{x:['Avon','Brent','Carlow','Dorne','Ely'],y2012:[12,25,30,8,40],y2024:[48,40,32,51,38]},
  HSPEND:{cols:['Category','2005','2015','2025'],rows:[['Housing',620,780,950],['Food',310,340,380],['Transport',180,210,200],['Leisure',120,160,230],['Clothing',90,80,70]]}
};
const D=DATA,pct=v=>v+'%',eur=v=>'€'+v;
const {M}=MAP,{F}=PROC;

/* Harbourside maps (chapter 4) */
const HB_BASE=[
  {t:'sea',d:'M12,300 C150,290 300,312 548,296 L548,400 L12,400 Z',label:'Sea',lx:80,ly:370},
  {t:'road',d:'M12,268 L548,262',w:14,label:'Coast Road',lx:480,ly:250},
  {t:'circle',x:505,y:330,r:11,fill:'#fff',label:'',part:'lighthouse'},{t:'text',x:505,y:358,label:'Lighthouse',fs:10.5}
];
const HB_1990=[{t:'rail',d:'M12,96 L548,96',label:'Freight railway',lx:110,ly:84}].concat(HB_BASE,[
  {x:60,y:176,w:100,h:60,kind:'pub',label:'Fish market'},
  {x:200,y:116,w:72,h:64,kind:'pub',label:'Warehouse'},{x:290,y:116,w:72,h:64,kind:'pub',label:'Warehouse'},
  {t:'car',x:400,y:150,w:110,h:80,label:'Car park'},
  {t:'pier',x:150,y:282,w:14,h:70,label:'Jetty',lx:192,ly:330}
]);
const HB_2025=[{t:'path',d:'M12,96 L548,96',label:'Cycle path',lx:110,ly:84}].concat(HB_BASE,[
  {x:60,y:176,w:100,h:60,kind:'shop',label:'Restaurant'},
  {x:200,y:116,w:72,h:64,kind:'shop',label:'Hotel'},{x:290,y:116,w:72,h:64,kind:'house',label:'Flats'},
  {t:'plaza',x:400,y:150,w:110,h:80,label:'Public square'},
  {t:'pier',x:150,y:282,w:14,h:70},{t:'pier',x:100,y:342,w:120,h:12,label:'Marina',lx:250,ly:350}
]);
const CHEESE=[{icon:'truck',label:'Milk collected|from farms'},{icon:'fire',label:'Heated|to 32°C'},{icon:'mix',label:'Starter culture|added and mixed'},{icon:'crush',label:'Solid curds|cut into pieces'},{icon:'filter',label:'Liquid whey|drained off'},{icon:'mould',label:'Curds pressed|into moulds'},{icon:'clock',label:'Left to mature|(6 months)'},{icon:'box',label:'Packaged|and sold'}];

const C={
  train:{id:'ch-train',title:['Passengers on three railway lines in one country,','2005 to 2025 (millions)'],x:D.TRAIN.x,series:[{name:'Coast line',vals:D.TRAIN.coast,color:NAVY},{name:'Valley line',vals:D.TRAIN.valley,color:GREEN},{name:'Northern line',vals:D.TRAIN.north,color:ORANGE}],ymin:0,ymax:30,ystep:10,ylab:'Passengers (millions)',fmt:v=>v+' million',points:1},
  news:{id:'ch-news',title:['Daily readers of printed and online news in one country,','2000 to 2025 (millions)'],x:D.NEWS.x,series:[{name:'Printed newspapers',vals:D.NEWS.print,color:NAVY},{name:'Online news',vals:D.NEWS.online,color:ORANGE}],ymin:0,ymax:10,ystep:2,ylab:'Readers (millions)',fmt:v=>v+' million',points:1},
  solar:{id:'ch-solar',title:['Percentage of households with solar panels in three regions,','2008 to 2024'],x:D.SOLAR.x,series:[{name:'North',vals:D.SOLAR.north,color:NAVY},{name:'South',vals:D.SOLAR.south,color:ORANGE},{name:'West',vals:D.SOLAR.west,color:GREEN}],ymin:0,ymax:40,ystep:10,ylab:'% of households',fmt:pct,points:1},
  vol:{type:'bar',id:'ch-vol',title:['Percentage of adults in one country who did voluntary work,','by age group and sex'],x:D.VOL.x,series:[{name:'Men',vals:D.VOL.men,color:NAVY},{name:'Women',vals:D.VOL.women,color:ORANGE}],ymax:30,ystep:10,ylab:'% of adults',xlab:'Age group',fmt:pct,labels:1},
  budget:{type:'pie',id:'ch-budget',title:['How one city council spent its budget last year'],cats:D.BUDGET.cats,colors:COLS,pies:[{label:'',vals:D.BUDGET.v}],fmt:pct},
  attr:{type:'table',id:'ch-attr',title:['Visitors to four attractions in one city, 2015 and 2025 (thousands)'],cols:D.ATTR.cols,rows:D.ATTR.rows},
  foodrec:{type:'bar',id:'ch-foodrec',title:['Percentage of households that recycled food waste in five cities,','2012 and 2024'],x:D.FOODREC.x,series:[{name:'2012',vals:D.FOODREC.y2012,color:GREY},{name:'2024',vals:D.FOODREC.y2024,color:GREEN}],ymax:60,ystep:20,ylab:'% of households',fmt:pct,labels:1},
  hspend:{type:'table',id:'ch-hspend',title:['Average monthly household spending in one country, 2005 to 2025 (€)'],cols:D.HSPEND.cols,rows:D.HSPEND.rows,fmt:eur},
  hb90:M('ch-hb90',['Harbourside in 1990'],HB_1990),
  hb25:M('ch-hb25',['Harbourside in 2025'],HB_2025),
  cheese:F('ch-cheese',['How cheese is made'],CHEESE)
};
/* a small illustration: a chart with a summary card */
const illus=(kind)=>{const pv={line:'<path d="M40,110 L90,90 L140,96 L190,60" fill="none" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M40,70 L90,74 L140,88 L190,104" fill="none" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/>',
  bar:[50,72,38,84].map((v,i)=>`<rect x="${40+i*38}" y="${120-v}" width="24" height="${v}" rx="3" fill="#2B6E43"/>`).join(''),
  pie:'<circle cx="115" cy="78" r="44" fill="#9C968A"/><path d="M115,78 L115,34 A44,44 0 0,1 156,94 Z" fill="#F88B48"/><path d="M115,78 L156,94 A44,44 0 0,1 90,114 Z" fill="#292929"/>'}[kind||'line'];
  return `<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><rect x="20" y="20" width="190" height="115" rx="10" fill="#fff" stroke="#E4DED1"/>${pv}<path d="M218,78 H246" stroke="#F88B48" stroke-width="3"/><path d="M246,78 l-8,-6 v12 Z" fill="#F88B48"/><rect x="256" y="40" width="124" height="76" rx="10" fill="#FBE6CF"/><text x="318" y="62" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="12" fill="#A84A12">Overall,</text>${[0,1,2].map(i=>`<rect x="270" y="${74+i*12}" width="${96-i*18}" height="6" rx="3" fill="#292929" opacity=".55"/>`).join('')}</svg>`};
return {DATA,C,illus};
})();
