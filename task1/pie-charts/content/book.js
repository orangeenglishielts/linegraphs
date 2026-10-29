/* ==========================================================================
   MASTERING PIE CHARTS · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA. Every pie adds up to 100.
   ========================================================================== */
OE.newBook({NS:'oe-piebook-v1-',TITLE:'Mastering Pie Charts',NCH:6,
  DESC:'Mastering Pie Charts, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Pie Charts, Describing Proportions, Comparing Pies, Selecting and Grouping Segments, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:{url:'../tables/',name:'Mastering Tables'}});

window.PIE=(function(){
const COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0','#C9B79C','#D9D2C3'];
const DATA={
  /* Ch1 */
  TRAVEL:{cats:['Car','Bus','Bicycle','Walking','Train'],y2005:[40,30,10,15,5],y2025:[15,25,30,20,10]},
  HOMEENERGY:{cats:['Heating','Hot water','Appliances','Cooking','Lighting'],v:[45,20,17,10,8]},
  BUDGET:{cats:['Education','Health','Transport','Housing','Parks'],y2000:[35,25,15,15,10],y2020:[30,32,12,10,16]},
  ELEC:{cats:['Coal','Gas','Nuclear','Wind','Solar'],y2000:[50,25,15,5,5],y2020:[15,35,15,25,10]},
  LAND:{cats:['Farmland','Forest','Grassland','Towns and cities','Water'],y1990:[55,20,12,10,3],y2020:[42,24,10,18,6]},
  /* Ch2 */
  HOLIDAY:{cats:['Beach','City break','Countryside','Visiting family','Cruise','Other'],v:[34,26,18,12,4,6]},
  MUSEUMAGE:{cats:['Under 18','18 to 34','35 to 54','55 and over'],v:[22,31,27,20]},
  /* Ch3 */
  MUSIC:{cats:['Streaming','Downloads','CDs and vinyl','Radio'],y2010:[10,30,45,15],y2017:[45,25,20,10],y2024:[72,8,10,10]},
  LUNCH:{cats:['Home-made','Bought sandwich','Café or restaurant','Delivered takeaway','No lunch'],y2004:[45,30,10,5,10],y2024:[30,25,20,20,5]},
  /* Ch4 */
  WASTE:{cats:['Food','Paper','Plastic','Garden','Glass','Other','Metal','Textiles'],v:[28,21,14,11,8,7,6,5]},
  JOBS:{cats:['Manufacturing','Agriculture','Construction','Retail','Business and finance','Public sector'],y1980:[30,15,9,14,12,20],y2020:[14,4,8,16,24,34]},
  /* Ch5 */
  VISIT:{cats:['Tourism','Business','Friends and family','Study','Other'],y2014:[48,26,16,6,4],y2024:[40,18,22,12,8]},
  UNI:{cats:['Government grants','Tuition fees','Research contracts','Other income','Donations'],y2005:[55,25,12,5,3],y2025:[30,45,15,8,2]},
  /* Ch6 */
  SCREEN:{cats:['Gaming','Social media','Watching videos','Homework'],a1314:[40,25,25,10],a1516:[30,35,25,10],a1718:[20,40,25,15]},
  CHARITY:{cats:['Projects','Fundraising','Administration','Campaigns'],y2015:[70,15,10,5],y2025:[78,12,6,4]}
};
const D=DATA,pct=v=>v+'%';
const two=(id,title,d,a,b,la,lb,extra)=>Object.assign({type:'pie',id,title,cats:d.cats,colors:COLS,pies:[{label:la,vals:d[a]},{label:lb,vals:d[b]}],fmt:pct},extra||{});
const C={
  travel:two('ch-travel',['How students at one university travelled to the campus,','2005 and 2025'],D.TRAVEL,'y2005','y2025','2005','2025'),
  homeenergy:{type:'pie',id:'ch-homeenergy',title:['How energy is used in an average home in one country'],cats:D.HOMEENERGY.cats,colors:COLS,pies:[{label:'',vals:D.HOMEENERGY.v}],fmt:pct},
  budget:two('ch-budget',['How one city council divided its spending,','2000 and 2020'],D.BUDGET,'y2000','y2020','2000','2020'),
  elec:two('ch-elec',['Sources of electricity in one country, 2000 and 2020'],D.ELEC,'y2000','y2020','2000','2020'),
  land:two('ch-land',['How land was used in one region, 1990 and 2020'],D.LAND,'y1990','y2020','1990','2020'),
  holiday:{type:'pie',id:'ch-holiday',title:['Type of main holiday taken by adults in one country last year'],cats:D.HOLIDAY.cats,colors:COLS,pies:[{label:'',vals:D.HOLIDAY.v}],fmt:pct},
  museumage:{type:'pie',id:'ch-museumage',title:['Age of visitors to a city museum last year'],cats:D.MUSEUMAGE.cats,colors:COLS,pies:[{label:'',vals:D.MUSEUMAGE.v}],fmt:pct},
  music:{type:'pie',id:'ch-music',title:['How people in one country listened to recorded music,','2010, 2017 and 2024'],cats:D.MUSIC.cats,colors:COLS,pies:[{label:'2010',vals:D.MUSIC.y2010},{label:'2017',vals:D.MUSIC.y2017},{label:'2024',vals:D.MUSIC.y2024}],fmt:pct},
  lunch:two('ch-lunch',['What office workers in one city had for lunch on weekdays,','2004 and 2024'],D.LUNCH,'y2004','y2024','2004','2024'),
  waste:{type:'pie',id:'ch-waste',title:['Household waste produced in one city, by type'],cats:D.WASTE.cats,colors:COLS,pies:[{label:'',vals:D.WASTE.v}],fmt:pct},
  jobs:two('ch-jobs',['Employment by sector in one country, 1980 and 2020'],D.JOBS,'y1980','y2020','1980','2020'),
  visit:two('ch-visit',['Main reason for visiting one city, 2014 and 2024'],D.VISIT,'y2014','y2024','2014','2024'),
  uni:two('ch-uni',['Sources of income for one university, 2005 and 2025'],D.UNI,'y2005','y2025','2005','2025'),
  screen:{type:'pie',id:'ch-screen',title:['How teenagers in one country divided their screen time,','by age group'],cats:D.SCREEN.cats,colors:COLS,pies:[{label:'Aged 13 to 14',vals:D.SCREEN.a1314},{label:'Aged 15 to 16',vals:D.SCREEN.a1516},{label:'Aged 17 to 18',vals:D.SCREEN.a1718}],fmt:pct},
  charity:two('ch-charity',['How one charity spent its money, 2015 and 2025'],D.CHARITY,'y2015','y2025','2015','2025')
};
/* a small pie illustration for chapter openings */
const illus=(vals)=>{let s='<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto">';const tot=vals.reduce((a,b)=>a+b,0);let a0=-Math.PI/2;const cx=200,cy=75,R=66;
  vals.forEach((v,i)=>{const a1=a0+2*Math.PI*v/tot,lg=(a1-a0)>Math.PI?1:0;s+=`<path d="M${cx},${cy} L${(cx+R*Math.cos(a0)).toFixed(1)},${(cy+R*Math.sin(a0)).toFixed(1)} A${R},${R} 0 ${lg},1 ${(cx+R*Math.cos(a1)).toFixed(1)},${(cy+R*Math.sin(a1)).toFixed(1)} Z" fill="${COLS[i%COLS.length]}" stroke="#FAF8F3" stroke-width="2"/>`;a0=a1});return s+'</svg>'};
return {DATA,C,COLS,illus};
})();
