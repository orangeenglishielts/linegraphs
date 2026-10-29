/* ==========================================================================
   MASTERING MIXED CHARTS · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA. Each task pairs two visuals.
   ========================================================================== */
OE.newBook({NS:'oe-mixedbook-v1-',TITLE:'Mastering Mixed Charts',NCH:6,
  DESC:'Mastering Mixed Charts, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Mixed Charts, Finding the Connection, Selecting from Two Charts, Comparing Across Charts, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:{url:'../maps/',name:'Mastering Maps'}});

window.MIX=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0','#C9B79C'];
const DATA={
  /* Ch1: sports centre, line + pie */
  MEMB:{x:['2015','2017','2019','2021','2023','2025'],v:[1200,1350,1500,1100,1650,2000]},
  USE:{cats:['Gym','Swimming','Fitness classes','Racket sports','Other'],v:[40,25,20,10,5]},
  /* Ch2: climate, bar + line; cafés, line + bar */
  MONTHS:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  RAIN:[80,65,60,45,40,25,15,20,35,60,85,95],
  TEMP:[6,7,10,13,17,21,24,23,19,14,9,6],
  CAFES:{x:['2010','2013','2016','2019','2022','2025'],v:[120,150,210,260,240,300]},
  COFFEE:{x:['2010','2015','2020','2025'],v:[2.20,2.60,3.10,3.80]},
  /* Ch3: waste, pie + bar */
  WASTE:{cats:['Food','Paper','Plastic','Glass','Garden','Other'],v:[35,25,15,10,8,7]},
  RECYC:{x:['Food','Paper','Plastic','Glass','Garden'],v:[15,70,30,65,55]},
  /* Ch4: international students, line + table */
  INTL:{x:['2005','2010','2015','2020','2025'],v:[40,55,80,70,110]},
  SUBJ:{cols:['Subject','% of international students'],rows:[['Business',34],['Engineering',22],['Computing',18],['Medicine',10],['Other subjects',16]]},
  /* Ch5: smartphones, line + pie */
  PHONE:{x:['2010','2013','2016','2019','2022','2025'],young:[45,70,85,92,95,97],old:[10,18,30,48,62,74]},
  PUSE:{cats:['Messaging','Social media','Browsing the internet','Watching video','Phone calls','Other'],v:[32,26,18,14,6,4]},
  /* Ch6: cycling, bar + line; national park, table + pie */
  LANES:{x:['2000','2010','2020'],v:[40,95,180]},
  CYC:{x:['2000','2005','2010','2015','2020'],v:[4,5,8,13,21]},
  PARK:{cols:['Season','2015','2025'],rows:[['Spring',120,150],['Summer',310,420],['Autumn',140,160],['Winter',40,35]]},
  PACT:{cats:['Walking','Cycling','Camping','Watching wildlife','Water sports'],v:[45,20,15,12,8]}
};
const D=DATA,pct=v=>v+'%';
const pie=(id,title,d,extra)=>Object.assign({type:'pie',id,title,cats:d.cats,colors:COLS,pies:[{label:'',vals:d.v}],fmt:pct,r:78},extra||{});
const C={
  memb:{id:'ch-memb',title:['Number of members of a city sports centre, 2015 to 2025'],x:D.MEMB.x,series:[{name:'Members',vals:D.MEMB.v,color:NAVY}],ymin:0,ymax:2000,ystep:500,ylab:'Members',fmt:v=>v.toLocaleString('en-GB')+' members',h:250},
  use:pie('ch-use',['How members used the sports centre in 2025 (% of visits)'],D.USE),
  rain:{type:'bar',id:'ch-rain',title:['Average monthly rainfall in one city (mm)'],x:D.MONTHS,series:[{name:'Rainfall',vals:D.RAIN,color:GREEN}],ymax:100,ystep:25,ylab:'Rainfall (mm)',fmt:v=>v+' mm',h:240},
  temp:{id:'ch-temp',title:['Average monthly temperature in the same city (°C)'],x:D.MONTHS,series:[{name:'Temperature',vals:D.TEMP,color:ORANGE}],ymin:0,ymax:30,ystep:10,ylab:'Temperature (°C)',fmt:v=>v+'°C',h:240},
  cafes:{id:'ch-cafes',title:['Number of cafés in one city, 2010 to 2025'],x:D.CAFES.x,series:[{name:'Cafés',vals:D.CAFES.v,color:NAVY}],ymin:0,ymax:300,ystep:100,ylab:'Number of cafés',fmt:v=>v+' cafés',h:240},
  coffee:{type:'bar',id:'ch-coffee',title:['Average price of a cup of coffee in the same city'],x:D.COFFEE.x,series:[{name:'Price',vals:D.COFFEE.v,color:GREEN}],ymax:4,ystep:1,ylab:'Price (€)',fmt:v=>'€'+v.toFixed(2),tick:v=>'€'+v,labels:1,h:240},
  waste:pie('ch-waste',['Household waste in one country, by type (% of total weight)'],D.WASTE),
  recyc:{type:'bar',id:'ch-recyc',title:['Percentage of each type of household waste recycled'],x:D.RECYC.x,series:[{name:'Recycled',vals:D.RECYC.v,color:GREEN}],ymax:80,ystep:20,ylab:'% recycled',fmt:pct,labels:1,h:240},
  intl:{id:'ch-intl',title:['International students at universities in one country,','2005 to 2025 (thousands)'],x:D.INTL.x,series:[{name:'Students',vals:D.INTL.v,color:NAVY}],ymin:0,ymax:120,ystep:30,ylab:'Students (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' students',h:260},
  subj:{type:'table',id:'ch-subj',title:['Subjects studied by international students in 2025'],cols:D.SUBJ.cols,rows:D.SUBJ.rows,fmt:pct},
  phone:{id:'ch-phone',title:['Percentage of adults in one country who owned a smartphone,','by age group, 2010 to 2025'],x:D.PHONE.x,series:[{name:'Aged 18 to 34',vals:D.PHONE.young,color:GREEN},{name:'Aged 55 and over',vals:D.PHONE.old,color:NAVY}],ymin:0,ymax:100,ystep:25,ylab:'% of adults',fmt:pct,h:280},
  puse:pie('ch-puse',['Main use of smartphones by owners in 2025'],D.PUSE),
  lanes:{type:'bar',id:'ch-lanes',title:['Length of cycle lanes in one city (km)'],x:D.LANES.x,series:[{name:'Cycle lanes',vals:D.LANES.v,color:GREEN}],ymax:200,ystep:50,ylab:'Kilometres',fmt:v=>v+' km',labels:1,h:240},
  cyc:{id:'ch-cyc',title:['Percentage of commuters in the same city who cycled to work'],x:D.CYC.x,series:[{name:'Cyclists',vals:D.CYC.v,color:NAVY}],ymin:0,ymax:25,ystep:5,ylab:'% of commuters',fmt:pct,h:240},
  park:{type:'table',id:'ch-park',title:['Visitors to a national park, by season, 2015 and 2025 (thousands)'],cols:D.PARK.cols,rows:D.PARK.rows},
  pact:pie('ch-pact',['Main activity of visitors to the park in 2025'],D.PACT)
};
/* a small two-chart illustration for chapter openings: kinds from 'line','bar','pie','table' */
const mini=(k,x0)=>{const w=160,y0=20,h=110;let s=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="8" fill="#fff" stroke="#E4DED1"/>`;
  if(k==='line')s+=`<path d="M${x0+14},${y0+90} L${x0+50},${y0+70} L${x0+86},${y0+76} L${x0+120},${y0+40} L${x0+146},${y0+24}" fill="none" stroke="${NAVY}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  if(k==='bar')[50,72,38,84].forEach((v,i)=>{s+=`<rect x="${x0+18+i*34}" y="${y0+98-v}" width="22" height="${v}" rx="3" fill="${GREEN}"/>`});
  if(k==='pie'){const cx=x0+w/2,cy=y0+h/2;s+=`<circle cx="${cx}" cy="${cy}" r="40" fill="${GREY}"/><path d="M${cx},${cy} L${cx},${cy-40} A40,40 0 0,1 ${cx+38},${cy+12} Z" fill="${ORANGE}"/><path d="M${cx},${cy} L${cx+38},${cy+12} A40,40 0 0,1 ${cx-20},${cy+35} Z" fill="${NAVY}"/>`}
  if(k==='table')for(let r=0;r<4;r++)for(let c=0;c<3;c++)s+=`<rect x="${x0+16+c*46}" y="${y0+18+r*22}" width="${c?30:40}" height="9" rx="4" fill="${r===0?'#292929':(c?'#CFC6B4':'#9C968A')}"/>`;
  return s};
const illus=(a,b)=>`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto">${mini(a,20)}<text x="200" y="82" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="26" fill="#F88B48">+</text>${mini(b,220)}</svg>`;
return {DATA,C,COLS,illus};
})();
