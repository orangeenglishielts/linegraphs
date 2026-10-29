/* ==========================================================================
   MODULE 1 · TASK 1 FOUNDATIONS · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA. Maps use MAP.M and the process
   uses PROC.F (both loaded before this file).
   ========================================================================== */
OE.newBook({NS:'oe-m1book-v1-',TITLE:'Task 1 Foundations',NCH:6,
  DESC:'Task 1 Foundations, Module 1 of IELTS Academic Writing Task 1 Complete, in six chapters: What Task 1 Asks, The Four Marking Criteria, The Seven Task Types, A Writing Process, Band 6 and Band 7 Compared, and a Diagnostic Task.',
  NEXT_BOOK:{url:'../m2-analysing/',name:'Analysing Visual Information'}});

window.F1=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const DATA={
  /* Ch1: static bar */
  EXER:{x:['13 to 17','18 to 29','30 to 49','50 to 64','65 and over'],v:[52,38,27,24,31]},
  /* Ch2: line, two museums (thousands of visitors) */
  MUS:{x:['2015','2017','2019','2021','2023','2025'],sci:[120,135,150,140,170,190],art:[160,155,150,130,125,120]},
  /* Ch3: one small example of each type */
  WATERUSE:{cats:['Shower','Toilet','Washing machine','Kitchen','Garden'],v:[34,26,18,12,10]},
  COFFEE:{cols:['City','2015','2025'],rows:[['Northport','€2.40','€3.60'],['Southvale','€2.10','€2.80'],['Eastham','€2.90','€3.20']]},
  /* Ch4: dynamic bar, solar panels (% of households) */
  SOLAR:{x:['North','South','East','West'],y2010:[4,9,6,3],y2025:[22,38,19,27]},
  /* Ch5: two pies, how students travel to a university */
  UNI:{cats:['Car','Bus','Bicycle','Walking','Train'],y2010:[40,30,15,10,5],y2025:[22,28,30,14,6]},
  /* Ch6: diagnostic line, electricity sources (% of total) */
  ELEC:{x:['2000','2005','2010','2015','2020','2025'],coal:[60,52,40,28,15,8],gas:[25,30,34,36,38,35],ren:[15,18,26,36,47,57]}
};
const D=DATA,pct=v=>v+'%';
const {M}=MAP,{F}=PROC;
const C={
  exer:{type:'bar',id:'ch-f1exer',title:['Average minutes of exercise per day in one country, by age group'],x:D.EXER.x,series:[{name:'Minutes',vals:D.EXER.v,color:NAVY}],ymax:60,ystep:20,ylab:'Minutes per day',xlab:'Age group',fmt:v=>v+' minutes',labels:1,labelFmt:v=>v},
  mus:{id:'ch-f1mus',title:['Visitors to two museums in one city, 2015 to 2025 (thousands)'],x:D.MUS.x,series:[{name:'Science museum',vals:D.MUS.sci,color:GREEN},{name:'Art museum',vals:D.MUS.art,color:NAVY}],ymin:100,ymax:200,ystep:25,ylab:'Visitors (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' visitors',points:1},
  wateruse:{type:'pie',id:'ch-f1water',title:['How water is used in an average home in one country'],cats:D.WATERUSE.cats,colors:COLS,pies:[{label:'',vals:D.WATERUSE.v}],fmt:pct,r:78},
  coffee:{type:'table',id:'ch-f1coffee',title:['Average price of a cup of coffee in three cities, 2015 and 2025'],cols:D.COFFEE.cols,rows:D.COFFEE.rows},
  solar:{type:'bar',id:'ch-f1solar',title:['Percentage of households with solar panels in four regions of one country,','2010 and 2025'],x:D.SOLAR.x,series:[{name:'2010',vals:D.SOLAR.y2010,color:GREY},{name:'2025',vals:D.SOLAR.y2025,color:ORANGE}],ymax:40,ystep:10,ylab:'% of households',fmt:pct,labels:1},
  uni:{type:'pie',id:'ch-f1uni',title:['How students travel to a university in one city, 2010 and 2025'],cats:D.UNI.cats,colors:COLS,pies:[{label:'2010',vals:D.UNI.y2010},{label:'2025',vals:D.UNI.y2025}],fmt:pct},
  elec:{id:'ch-f1elec',title:['Sources of electricity in one country, 2000 to 2025 (% of total)'],x:D.ELEC.x,series:[{name:'Coal',vals:D.ELEC.coal,color:NAVY},{name:'Gas',vals:D.ELEC.gas,color:ORANGE},{name:'Renewables',vals:D.ELEC.ren,color:GREEN}],ymin:0,ymax:60,ystep:20,ylab:'% of electricity',fmt:pct,points:1},
  village:M('ch-f1village',['Lowmoor village in 2025'],[
    {t:'road',d:'M12,200 L548,200',w:14,label:'High Road',lx:90,ly:186},
    {x:60,y:80,w:90,h:60,kind:'pub',label:'School'},{x:180,y:80,w:120,h:60,kind:'shop',label:'Supermarket'},
    {t:'houses',x:340,y:80,c:6,r:3,label:'New houses'},{t:'park',x:60,y:230,w:220,h:130,label:'Park'},
    {t:'car',x:340,y:240,w:140,h:90,label:'Car park'}]),
  honey:F('ch-f1honey',['How honey is produced'],[{icon:'tree',label:'Bees collect|nectar'},{icon:'house',label:'Nectar stored|in the hive'},{icon:'spin',label:'Honey spun|from the combs'},{icon:'bottle',label:'Honey put|into jars'}],{cols:4})
};
/* a two-colour opening illustration */
const illus=(kind)=>{const s={
  clock:`<circle cx="200" cy="75" r="52" fill="#FBE6CF"/><path d="M200,75 L200,35" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,75 L228,90" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/>`,
  four:[['TA','#FBE6CF'],['CC','#E2EDD6'],['LR','#FBE6CF'],['GRA','#E2EDD6']].map(([t,c],i)=>`<rect x="${24+i*92}" y="40" width="80" height="70" rx="10" fill="${c}"/><text x="${64+i*92}" y="82" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="18" fill="#292929">${t}</text>`).join(''),
  seven:[0,1,2,3,4,5,6].map(i=>`<rect x="${18+i*53}" y="50" width="44" height="50" rx="8" fill="${i%2?'#E2EDD6':'#FBE6CF'}"/><text x="${40+i*53}" y="81" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="16" fill="#292929">${i+1}</text>`).join(''),
  plan:[['Plan','2'],['Write','15'],['Check','3']].map(([t,m],i)=>`<rect x="${30+i*120}" y="45" width="${i===1?110:100}" height="60" rx="10" fill="${i===1?'#E2EDD6':'#FBE6CF'}"/><text x="${80+i*120}" y="72" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="15" fill="#292929">${t}</text><text x="${80+i*120}" y="92" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#55534E">${m} min</text>`).join(''),
  bands:`<rect x="60" y="80" width="110" height="40" rx="8" fill="#FBE6CF"/><text x="115" y="106" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="16" fill="#292929">Band 6</text><rect x="230" y="40" width="110" height="80" rx="8" fill="#E2EDD6"/><text x="285" y="86" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="16" fill="#292929">Band 7</text>`,
  check:`<circle cx="200" cy="75" r="50" fill="#E2EDD6"/><path d="M175,77 L195,97 L228,58" fill="none" stroke="#2B6E43" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`}[kind];
  return `<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto">${s}</svg>`};
return {DATA,C,illus};
})();
