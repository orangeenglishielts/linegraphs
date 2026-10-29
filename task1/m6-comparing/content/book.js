/* ==========================================================================
   MODULE 6 · COMPARING AND ORGANISING INFORMATION · SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA.
   ========================================================================== */
OE.newBook({NS:'oe-m6book-v1-',TITLE:'Comparing and Organising Information',NCH:6,
  DESC:'Comparing and Organising Information, Module 6 of IELTS Academic Writing Task 1 Complete, in six chapters: Comparatives and Superlatives, Linking Comparisons, Grouping Information, Organising Paragraphs, Cohesion and Referencing, and Applying the Skills.',
  NEXT_BOOK:{url:'../../book/',name:'Mastering Line Graphs'}});

window.CMP=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;const PURPLE='#4E4178';
const DATA={
  /* Ch1 */
  GYM:{x:['Norhaven','Eastport','Kelby','Marlow Bay','Stenton'],v:[420,610,380,590,300]},
  /* Ch2 */
  CHORE:{x:['Cooking','Cleaning','Shopping','Repairs','Childcare'],men:[3,2,3,4,5],women:[7,6,3,1,9]},
  /* Ch3 */
  GROW:{cols:['Product','Change in sales, 2020 to 2025'],rows:[['Plant-based milk',62],['Organic fruit',48],['Ready salads',40],['Bread',3],['Eggs',1],['Frozen meals',-12],['Sweets',-18],['Fizzy drinks',-25]]},
  TRAIN:{x:['2000','2004','2008','2012','2016','2020'],v:[3.0,3.8,4.5,4.4,3.6,2.9]},
  /* Ch4 */
  LEIS:{x:['Eating out','Concerts and events','Sport','Books'],a:[45,30,20,5],b:[40,15,25,10],c:[35,10,15,20]},
  /* Ch5 */
  MUS:{x:['2010','2015','2020','2025'],sci:[300,320,360,400],art:[250,240,230,180]},
  /* Ch6 */
  WFH:{x:['IT','Finance','Education','Health','Retail'],y2019:[45,30,10,8,5],y2024:[80,65,25,12,8]},
  LANG:{cols:['Course','2015','2020','2025'],rows:[['Spanish',120,150,170],['Chinese',40,85,130],['French',140,110,95],['German',90,80,85]]}
};
const D=DATA,pct=v=>v+'%';
const C={
  gym:{type:'bar',id:'ch-m6gym',title:['Average annual cost of gym membership in five cities (€)'],x:D.GYM.x,series:[{name:'Cost',vals:D.GYM.v,color:NAVY}],ymax:700,ystep:100,ylab:'Euros per year',fmt:v=>'€'+v,tick:v=>'€'+v,labels:1},
  chore:{type:'bar',id:'ch-m6chore',title:['Average hours per week that men and women in one country','spent on five household tasks'],x:D.CHORE.x,series:[{name:'Men',vals:D.CHORE.men,color:NAVY},{name:'Women',vals:D.CHORE.women,color:ORANGE}],ymax:10,ystep:2,ylab:'Hours per week',fmt:v=>v+' hours',labels:1},
  grow:{type:'table',id:'ch-m6grow',title:['Percentage change in sales of eight products at a supermarket chain, 2020 to 2025'],cols:D.GROW.cols,rows:D.GROW.rows,fmt:v=>(v>0?'+':v<0?'−':'')+Math.abs(v)+'%'},
  train:{id:'ch-m6train',title:['Train journeys between two cities, 2000 to 2020 (millions)'],x:D.TRAIN.x,series:[{name:'Journeys',vals:D.TRAIN.v,color:NAVY}],ymin:0,ymax:5,ystep:1,ylab:'Journeys (millions)',fmt:v=>v.toFixed(1)+' million',points:1,h:290},
  leis:{type:'bar',id:'ch-m6leis',title:['Average weekly spending on four leisure activities in one country,','by age group (€)'],x:D.LEIS.x,series:[{name:'18 to 29',vals:D.LEIS.a,color:ORANGE},{name:'30 to 49',vals:D.LEIS.b,color:GREEN},{name:'50 and over',vals:D.LEIS.c,color:NAVY}],ymax:50,ystep:10,ylab:'Euros per week',fmt:v=>'€'+v,tick:v=>'€'+v,labels:1},
  mus:{id:'ch-m6mus',title:['Visitors to two museums in one city, 2010 to 2025 (thousands)'],x:D.MUS.x,series:[{name:'Science Museum',vals:D.MUS.sci,color:GREEN},{name:'Art Gallery',vals:D.MUS.art,color:ORANGE}],ymin:0,ymax:500,ystep:100,ylab:'Visitors (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' visitors',points:1},
  wfh:{type:'bar',id:'ch-m6wfh',title:['Percentage of workers in five sectors in one country who worked from home','at least one day a week, 2019 and 2024'],x:D.WFH.x,series:[{name:'2019',vals:D.WFH.y2019,color:GREY},{name:'2024',vals:D.WFH.y2024,color:NAVY}],ymax:100,ystep:20,ylab:'% of workers',fmt:pct,labels:1},
  lang:{type:'table',id:'ch-m6lang',title:['Students enrolled on four language courses at a college, 2015 to 2025'],cols:D.LANG.cols,rows:D.LANG.rows}
};
/* a small comparison illustration for chapter openings */
const illus=(a,b)=>{let s='<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><line x1="20" y1="132" x2="390" y2="132" stroke="#CFC6B4"/>';
  a.forEach((v,i)=>{const x=30+i*72;s+=`<rect x="${x}" y="${132-v}" width="26" height="${v}" rx="3" fill="${NAVY}"/>`;if(b)s+=`<rect x="${x+30}" y="${132-b[i]}" width="26" height="${b[i]}" rx="3" fill="${ORANGE}"/>`});return s+'</svg>'};
return {DATA,C,illus};
})();
