/* ==========================================================================
   MODULE 2 · ANALYSING VISUAL INFORMATION · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA.
   ========================================================================== */
OE.newBook({NS:'oe-m2book-v1-',TITLE:'Analysing Visual Information',NCH:6,
  DESC:'Analysing Visual Information, Module 2 of IELTS Academic Writing Task 1 Complete, in six chapters: Reading Any Visual, Finding Key Features, Selecting Data, Making Meaningful Comparisons, Static and Dynamic Data, and Applying the Skills.',
  NEXT_BOOK:{url:'../m3-overviews/',name:'Writing Effective Overviews'}});

window.F2=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const DATA={
  /* Ch1: reading time (minutes per day) and town populations (thousands) */
  READ:{x:['2000','2006','2012','2018','2024'],print:[32,30,27,22,20],ebook:[0,2,8,13,15]},
  TOWNS:{cols:['Town','2000','2020'],rows:[['Bramley',45,62],['Carwell',120,118],['Dunton',30,51],['Elmsby',75,90]]},
  /* Ch2: passengers at five stations (millions) */
  STN:{x:['Central','Harbour','Airport Link','University','Market'],y2010:[42,18,6,12,15],y2025:[55,16,24,19,15]},
  /* Ch3: tourist arrivals at five islands (thousands) */
  ISL:{cols:['Island','2005','2010','2015','2020','2025'],rows:[['Ardel',120,135,150,90,160],['Bresk',40,55,80,60,110],['Corran',200,190,185,120,170],['Dunmore',15,18,22,20,25],['Eskay',60,62,65,40,70]]},
  /* Ch4: weekly shop for a family of four (€) */
  SHOP:{x:['City A','City B','City C','City D','City E'],v:[140,210,175,105,280]},
  /* Ch5: office energy use (%) and house prices (€ thousands) */
  OFFICE:{cats:['Heating','Lighting','Computers','Kitchen','Other'],v:[35,30,20,10,5]},
  HOUSE:{x:['2005','2010','2015','2020','2025'],v:[180,210,195,240,300]},
  /* Ch6: weekly sport participation (%) and rental e-scooters (thousands) */
  SPORT:{x:['Football','Swimming','Dance','Cycling','Basketball'],boys:[48,30,6,25,20],girls:[22,34,28,18,12]},
  SCOOT:{x:['2019','2020','2021','2022','2023','2024','2025'],x1:[2,5,9,12,14,15,15],y1:[0,1,3,8,13,19,22],z1:[4,6,6,5,4,3,2]}
};
const D=DATA,pct=v=>v+'%';
const C={
  read:{id:'ch-f2read',title:['Average minutes per day spent reading printed books and e-books','by adults in one country, 2000 to 2024'],x:D.READ.x,series:[{name:'Printed books',vals:D.READ.print,color:NAVY},{name:'E-books',vals:D.READ.ebook,color:GREEN}],ymin:0,ymax:40,ystep:10,ylab:'Minutes per day',fmt:v=>v+' minutes',points:1},
  towns:{type:'table',id:'ch-f2towns',title:['Population of four towns in one region, 2000 and 2020 (thousands)'],cols:D.TOWNS.cols,rows:D.TOWNS.rows},
  stn:{type:'bar',id:'ch-f2stn',title:['Passengers using five railway stations in one city, 2010 and 2025 (millions)'],x:['Central','Harbour','Airport|Link','University','Market'],series:[{name:'2010',vals:D.STN.y2010,color:GREY},{name:'2025',vals:D.STN.y2025,color:NAVY}],ymax:60,ystep:20,ylab:'Passengers (millions)',fmt:v=>v+' million',labels:1,labelFmt:v=>v},
  isl:{type:'table',id:'ch-f2isl',title:['Tourist arrivals at five islands, 2005 to 2025 (thousands)'],cols:D.ISL.cols,rows:D.ISL.rows},
  shop:{type:'bar',id:'ch-f2shop',title:['Average cost of a weekly food shop for a family of four in five cities'],x:D.SHOP.x,series:[{name:'Cost',vals:D.SHOP.v,color:GREEN}],ymax:300,ystep:100,ylab:'Euros per week',fmt:v=>'€'+v,tick:v=>'€'+v,labels:1},
  office:{type:'pie',id:'ch-f2office',title:['How energy is used in an office building'],cats:D.OFFICE.cats,colors:COLS,pies:[{label:'',vals:D.OFFICE.v}],fmt:pct,r:78},
  house:{id:'ch-f2house',title:['Average house price in one region, 2005 to 2025 (€ thousands)'],x:D.HOUSE.x,series:[{name:'Price',vals:D.HOUSE.v,color:ORANGE}],ymin:0,ymax:300,ystep:100,ylab:'Price (€ thousands)',fmt:v=>'€'+v+',000',points:1,h:250},
  sport:{type:'bar',id:'ch-f2sport',title:['Percentage of boys and girls aged 12 to 16 in one country who took part','in five sports each week'],x:D.SPORT.x,series:[{name:'Boys',vals:D.SPORT.boys,color:NAVY},{name:'Girls',vals:D.SPORT.girls,color:ORANGE}],ymax:50,ystep:10,ylab:'% taking part',fmt:pct,labels:1},
  scoot:{id:'ch-f2scoot',title:['Number of e-scooters available to rent in three cities, 2019 to 2025 (thousands)'],x:D.SCOOT.x,series:[{name:'City X',vals:D.SCOOT.x1,color:NAVY},{name:'City Y',vals:D.SCOOT.y1,color:GREEN},{name:'City Z',vals:D.SCOOT.z1,color:ORANGE}],ymin:0,ymax:25,ystep:5,ylab:'E-scooters (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' e-scooters',points:1}
};
const illus=(kind)=>{const s={
  eye:`<ellipse cx="200" cy="75" rx="90" ry="45" fill="#FBE6CF"/><circle cx="200" cy="75" r="26" fill="#2B6E43"/><circle cx="200" cy="75" r="10" fill="#292929"/>`,
  star:`<path d="M60,120 L60,70 L110,70 L110,120 Z" fill="#E4DED1"/><path d="M140,120 L140,40 L190,40 L190,120 Z" fill="#F88B48"/><path d="M220,120 L220,90 L270,90 L270,120 Z" fill="#E4DED1"/><path d="M300,120 L300,60 L350,60 L350,120 Z" fill="#E4DED1"/><path d="M165,18 l5,10 11,1 -8,7 3,11 -11,-6 -11,6 3,-11 -8,-7 11,-1 Z" fill="#292929"/>`,
  sieve:[0,1,2,3,4,5,6,7].map(i=>`<circle cx="${60+i*40}" cy="45" r="9" fill="${i%3===0?'#F88B48':'#CFC6B4'}"/>`).join('')+`<path d="M60,80 H340 L260,125 H140 Z" fill="#E2EDD6"/>`+[0,1,2].map(i=>`<circle cx="${170+i*30}" cy="105" r="9" fill="#F88B48"/>`).join(''),
  scale:`<path d="M200,30 V120 M120,55 H280" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M100,55 L120,95 H80 Z M300,55 L320,85 H280 Z" fill="#F88B48"/><rect x="170" y="118" width="60" height="10" rx="4" fill="#292929"/>`,
  still:`<rect x="50" y="35" width="130" height="85" rx="10" fill="#FBE6CF"/><text x="115" y="84" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="16" fill="#292929">Static</text><rect x="220" y="35" width="130" height="85" rx="10" fill="#E2EDD6"/><path d="M235,105 L265,85 L295,92 L335,52" fill="none" stroke="#2B6E43" stroke-width="5" stroke-linecap="round"/>`,
  apply:`<rect x="80" y="30" width="240" height="95" rx="10" fill="#FBE6CF"/><path d="M110,60 H290 M110,80 H290 M110,100 H230" stroke="#292929" stroke-width="5" stroke-linecap="round"/>`}[kind];
  return `<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto">${s}</svg>`};
return {DATA,C,illus};
})();
