/* ==========================================================================
   MODULE 5 · LANGUAGE FOR TRENDS AND CHANGE · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA.
   ========================================================================== */
OE.newBook({NS:'oe-m5book-v1-',TITLE:'Language for Trends and Change',NCH:6,
  DESC:'Language for Trends and Change, Module 5 of IELTS Academic Writing Task 1 Complete, in six chapters: Verbs and Nouns of Change, The Size and Speed of Change, Time Expressions and Tenses, Peaks, Dips and Plateaus, Future and Projected Data, and Applying the Skills.',
  NEXT_BOOK:{url:'../m6-comparing/',name:'Comparing and Organising Information'}});

window.TRD=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
const DATA={
  /* Ch1 */
  BIKE:{x:['2000','2005','2010','2015','2020','2025'],v:[18,20,26,35,42,50]},
  CINE:{x:['2000','2005','2010','2015','2020','2025'],v:[120,112,98,90,84,80]},
  /* Ch2 */
  HOUSE:{x:['2014','2016','2018','2020','2022','2024'],v:[200,204,230,236,290,292]},
  WAGE:{x:['2014','2016','2018','2020','2022','2024'],v:[30,31.5,33,34.5,36,37.5]},
  /* Ch3 */
  LIB:{x:['1995','2005','2015','2025'],v:[40,52,47,61]},
  /* Ch4 */
  GAMES:{x:['2010','2012','2014','2016','2018','2020','2022','2024'],v:[4.0,4.6,4.1,4.7,4.2,7.5,5.6,5.6]},
  /* Ch5 */
  EBUS:{x:['2015','2020','2025','2030','2035','2040'],actual:[10,40,120,null,null,null],proj:[null,null,120,250,380,450]},
  AGE:{x:['2000','2010','2020','2030','2040','2050'],cx:[12,15,18,22,26,29],cy:[8,9,11,14,18,22]},
  /* Ch6 */
  TEEN:{x:['2005','2010','2015','2020','2025'],read:[45,40,32,25,20],stream:[30,45,70,95,110],sport:[60,58,62,57,55]},
  STAYS:{x:['2000','2008','2016','2024'],hotel:[20,22,25,24],hostel:[3,5,8,12],camp:[9,8,6,5]}
};
const D=DATA,pct=v=>v+'%',eurk=v=>'€'+(v*1000).toLocaleString('en-GB');
const C={
  bike:{id:'ch-m5bike',title:['People cycling to work in one city, 2000 to 2025 (thousands)'],x:D.BIKE.x,series:[{name:'Cyclists',vals:D.BIKE.v,color:GREEN}],ymin:0,ymax:60,ystep:20,ylab:'Cyclists (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' people',points:1,h:280},
  cine:{id:'ch-m5cine',title:['Cinema admissions in one country, 2000 to 2025 (millions)'],x:D.CINE.x,series:[{name:'Admissions',vals:D.CINE.v,color:NAVY}],ymin:0,ymax:150,ystep:50,ylab:'Admissions (millions)',fmt:v=>v+' million',points:1,h:280},
  house:{id:'ch-m5house',title:['Average house price in one town, 2014 to 2024 (€ thousands)'],x:D.HOUSE.x,series:[{name:'Price',vals:D.HOUSE.v,color:NAVY}],ymin:150,ymax:300,ystep:50,ylab:'Price (€ thousands)',fmt:eurk,points:1},
  wage:{id:'ch-m5wage',title:['Average annual salary in the same town, 2014 to 2024 (€ thousands)'],x:D.WAGE.x,series:[{name:'Salary',vals:D.WAGE.v,color:GREEN}],ymin:0,ymax:40,ystep:10,ylab:'Salary (€ thousands)',fmt:eurk,points:1,h:280},
  lib:{id:'ch-m5lib',title:['Members of a city library, 1995 to 2025 (thousands)'],x:D.LIB.x,series:[{name:'Members',vals:D.LIB.v,color:NAVY}],ymin:0,ymax:80,ystep:20,ylab:'Members (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' members',points:1,h:290},
  games:{id:'ch-m5games',title:['Sales of board games in one country, 2010 to 2024 (millions)'],x:D.GAMES.x,series:[{name:'Sales',vals:D.GAMES.v,color:NAVY}],ymin:0,ymax:8,ystep:2,ylab:'Games sold (millions)',fmt:v=>v.toFixed(1)+' million',points:1},
  ebus:{id:'ch-m5ebus',title:['Electric buses in one city, 2015 to 2040','(figures after 2025 are projections)'],x:D.EBUS.x,series:[{name:'Actual',vals:D.EBUS.actual,color:GREEN},{name:'Projected',vals:D.EBUS.proj,color:GREEN,dash:1}],ymin:0,ymax:500,ystep:100,ylab:'Number of electric buses',fmt:v=>v+' buses',points:1},
  age:{id:'ch-m5age',title:['Percentage of the population aged 65 and over in two countries,','2000 to 2050 (figures from 2030 are projections)'],x:D.AGE.x,series:[{name:'Country X',vals:D.AGE.cx,color:NAVY},{name:'Country Y',vals:D.AGE.cy,color:ORANGE}],ymin:0,ymax:30,ystep:10,ylab:'% of population',fmt:pct,points:1},
  teen:{id:'ch-m5teen',title:['Average minutes per day that teenagers in one country spent','on three activities, 2005 to 2025'],x:D.TEEN.x,series:[{name:'Reading',vals:D.TEEN.read,color:NAVY},{name:'Streaming video',vals:D.TEEN.stream,color:ORANGE},{name:'Sport',vals:D.TEEN.sport,color:GREEN}],ymin:0,ymax:120,ystep:30,ylab:'Minutes per day',fmt:v=>v+' minutes',points:1},
  stays:{type:'bar',id:'ch-m5stays',title:['Overnight stays in three types of accommodation in one country,','2000 to 2024 (millions)'],x:D.STAYS.x,series:[{name:'Hotels',vals:D.STAYS.hotel,color:NAVY},{name:'Hostels',vals:D.STAYS.hostel,color:ORANGE},{name:'Campsites',vals:D.STAYS.camp,color:GREEN}],ymax:30,ystep:10,ylab:'Overnight stays (millions)',fmt:v=>v+' million',labels:1}
};
/* a small trend illustration for chapter openings */
const illus=(d)=>`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><line x1="20" y1="132" x2="390" y2="132" stroke="#CFC6B4"/><line x1="20" y1="10" x2="20" y2="132" stroke="#CFC6B4"/><path d="${d}" fill="none" stroke="${ORANGE}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
return {DATA,C,illus};
})();
