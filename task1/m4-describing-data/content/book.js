/* ==========================================================================
   DESCRIBING DATA ACCURATELY (MODULE 4) · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA. Chapter 2 is the flagship
   lesson: Describing Percentages and Proportions.
   ========================================================================== */
OE.newBook({NS:'oe-m4book-v1-',TITLE:'Describing Data Accurately',NCH:6,
  DESC:'Describing Data Accurately, Module 4 of IELTS Academic Writing Task 1 Complete, in six chapters: Numbers and Units, Describing Percentages and Proportions, Approximation, Fractions, Ratios and Multiples, Points, Percentages and Shares, and Applying the Skills.',
  NEXT_BOOK:{url:'../m5-trends/',name:'Language for Trends and Change'}});

window.DD=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;const PURPLE='#4E4178';
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const DATA={
  /* Ch1: visitors to four national parks (millions); library loans (thousands) */
  PARKS:{x:['Highmoor','Lakeland','Redcliff','Westwood'],v:[2.4,4.1,1.2,0.85]},
  LOANS:{cols:['Type of loan','Loans (thousands)'],rows:[['Fiction',420],['Children’s books',380],['Non-fiction',260],['E-books',150],['Audiobooks',45]]},
  /* Ch2 (flagship): languages spoken at home by pupils (%); how students travel (%) */
  LANG:{cats:['English','Polish','Arabic','Urdu','Other'],v:[54,14,11,9,12]},
  TRAVEL:{cats:['Bus','Bicycle','Walking','Car','Train'],v:[38,27,19,11,5]},
  /* Ch3: hours online per week by age; household ownership (%) */
  ONLINE:{x:['16 to 24','25 to 34','35 to 54','55 to 64','65 and over'],v:[31,24,19,12,8]},
  OWN:{cols:['Item','% of households'],rows:[['Car',73],['Tablet computer',64],['Bicycle',48],['Dog',26],['Cat',21],['Piano',9]]},
  /* Ch4: salaries (€ thousands); electric buses */
  SAL:{cols:['Job','Average salary (€000s)'],rows:[['Surgeon',120],['Engineer',60],['Electrician',45],['Shop assistant',24],['Waiter',20]]},
  BUS:{x:['City X','City Y','City Z'],y2015:[20,15,40],y2025:[80,45,60]},
  /* Ch5: unemployment rate (%); household spending shares with totals */
  UNEMP:{x:['2010','2013','2016','2019','2022','2025'],v:[8.0,7.2,6.1,5.0,4.4,4.0]},
  SPEND:{cats:['Housing','Food','Transport','Other'],y2005:[35,20,15,30],y2025:[40,18,12,30],tot2005:2000,tot2025:2500},
  /* Ch6: main source of news (%); international flights (thousands) */
  NEWSSRC:{cats:['Television','Online','Newspapers','Radio'],y2010:[45,15,25,15],y2025:[30,42,10,18]},
  FLIGHTS:{x:['Airport A','Airport B','Airport C','Airport D'],y2015:[120,90,40,60],y2025:[180,95,120,45]}
};
const D=DATA,pct=v=>v+'%';
const two=(id,title,d,a,b,la,lb)=>({type:'pie',id,title,cats:d.cats,colors:COLS,pies:[{label:la,vals:d[a]},{label:lb,vals:d[b]}],fmt:pct});
const C={
  parks:{type:'bar',id:'ch-parks',title:['Visitors to four national parks in one country, 2024 (millions)'],x:D.PARKS.x,series:[{name:'Visitors',vals:D.PARKS.v,color:GREEN}],ymax:5,ystep:1,ylab:'Visitors (millions)',fmt:v=>v+' million',labels:1},
  loans:{type:'table',id:'ch-loans',title:['Loans from one city’s library service last year, by type (thousands)'],cols:D.LOANS.cols,rows:D.LOANS.rows},
  lang:{type:'pie',id:'ch-lang',title:['Main language spoken at home by primary school pupils in one city'],cats:D.LANG.cats,colors:COLS,pies:[{label:'',vals:D.LANG.v}],fmt:pct},
  travel:{type:'pie',id:'ch-travel',title:['How students at one university usually travel to classes'],cats:D.TRAVEL.cats,colors:COLS,pies:[{label:'',vals:D.TRAVEL.v}],fmt:pct},
  online:{type:'bar',id:'ch-online',title:['Average hours per week spent online for leisure, by age group'],x:D.ONLINE.x,series:[{name:'Hours',vals:D.ONLINE.v,color:NAVY}],ymax:35,ystep:5,ylab:'Hours per week',xlab:'Age group',fmt:v=>v+' hours',labels:1},
  own:{type:'table',id:'ch-own',title:['Percentage of households in one country that own six items'],cols:D.OWN.cols,rows:D.OWN.rows,fmt:pct},
  sal:{type:'table',id:'ch-sal',title:['Average annual salary in five jobs in one country (€ thousands)'],cols:D.SAL.cols,rows:D.SAL.rows},
  bus:{type:'bar',id:'ch-bus',title:['Number of electric buses in three cities, 2015 and 2025'],x:D.BUS.x,series:[{name:'2015',vals:D.BUS.y2015,color:GREY},{name:'2025',vals:D.BUS.y2025,color:GREEN}],ymax:100,ystep:20,ylab:'Electric buses',fmt:v=>v+' buses',labels:1},
  unemp:{id:'ch-unemp',title:['Unemployment rate in one country, 2010 to 2025'],x:D.UNEMP.x,series:[{name:'Unemployment',vals:D.UNEMP.v,color:NAVY}],ymin:0,ymax:10,ystep:2,ylab:'% of the workforce',fmt:v=>v.toFixed(1)+'%',points:1},
  spend:{type:'pie',id:'ch-spend',title:['How households in one country divided their monthly spending'],cats:D.SPEND.cats,colors:COLS,pies:[{label:'2005: total €2,000',vals:D.SPEND.y2005},{label:'2025: total €2,500',vals:D.SPEND.y2025}],fmt:pct},
  newssrc:two('ch-newssrc',['Main source of news for adults in one country, 2010 and 2025'],D.NEWSSRC,'y2010','y2025','2010','2025'),
  flights:{type:'bar',id:'ch-flights',title:['International flights from four airports in one country,','2015 and 2025 (thousands)'],x:D.FLIGHTS.x,series:[{name:'2015',vals:D.FLIGHTS.y2015,color:GREY},{name:'2025',vals:D.FLIGHTS.y2025,color:NAVY}],ymax:200,ystep:50,ylab:'Flights (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' flights',labels:1}
};
/* a small illustration: a figure turning into words */
const illus=(fig,words)=>`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="800" text-anchor="middle"><rect x="30" y="40" width="120" height="70" rx="12" fill="#FBE6CF"/><text x="90" y="85" font-size="28" fill="#292929">${fig}</text><path d="M160,75 H222" stroke="#F88B48" stroke-width="3"/><path d="M222,75 l-9,-6 v12 Z" fill="#F88B48"/><rect x="232" y="40" width="148" height="70" rx="12" fill="#E2EDD6"/><text x="306" y="81" font-size="14" fill="#2B6E43">${words}</text></g></svg>`;
return {DATA,C,illus};
})();
