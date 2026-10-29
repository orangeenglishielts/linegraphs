/* ==========================================================================
   MASTERING TABLES · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from DATA.
   ========================================================================== */
OE.newBook({NS:'oe-tablebook-v1-',TITLE:'Mastering Tables',NCH:6,
  DESC:'Mastering Tables, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Tables, Finding the Story in the Numbers, Comparing Rows and Columns, Selecting from a Large Table, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:{url:'../mixed-charts/',name:'Mastering Mixed Charts'}});

window.TAB=(function(){
const DATA={
  /* Ch1 */
  RENT:{cols:['Area','2015','2025'],rows:[['City centre',950,1400],['Suburbs',700,980],['Small towns',520,650],['Rural areas',430,520]]},
  SPORT:{cols:['Activity','Under 30','30 to 59','60 and over'],rows:[['Swimming',420,380,260],['Gym',650,410,90],['Tennis',120,160,70],['Yoga',140,230,110]]},
  SERV:{cols:['Service','2000','2010','2020'],rows:[['Mobile phone',55,88,97],['Broadband internet',20,65,92],['Landline phone',92,70,41],['Cable TV',30,38,22]]},
  TRIP:{cols:['Way of travelling','2005','2025'],rows:[['Car',28,41],['Bus',35,33],['Train',30,26],['Bicycle',22,20]]},
  /* Ch2 */
  SHOP:{cols:['Product','Jan–Mar','Apr–Jun','Jul–Sep','Oct–Dec'],rows:[['Hot drinks',900,520,300,860],['Sandwiches',640,690,720,650],['Ice cream',120,480,950,210],['Umbrellas',85,40,25,110]]},
  AIR:{cols:['Airport','2005','2015','2025'],rows:[['Central',30,34,31],['North',12,18,25],['South',8,9,19]]},
  /* Ch3 */
  JOBS:{cols:['Occupation','Hours per week','Paid holiday (days per year)','Average salary (€000s)'],rows:[['Lawyer',50,25,88],['Software developer',39,28,62],['Teacher',42,40,41],['Nurse',38,27,36],['Chef',46,22,30]]},
  /* Ch4 */
  RENEW:{cols:['Region','2010','2015','2020','2025'],rows:[['West',30,36,44,52],['South',25,31,38,47],['Coast',18,24,33,41],['Central',14,20,29,38],['North',12,18,26,35],['East',8,10,13,15]]},
  /* Ch5 */
  SUBJ:{cols:['Subject','Men','Women'],rows:[['Business',55,52],['Engineering',62,18],['Computing',48,14],['Medicine',30,41],['Education',12,38]]},
  FOOD:{cols:['Food','2005','2015','2025'],rows:[['Coffee',9.00,12.50,18.20],['Cheese',8.50,9.80,12.60],['Bread',2.10,2.60,3.40],['Apples',1.80,2.20,2.60],['Rice',1.40,1.90,2.80]]},
  /* Ch6 */
  VEH:{cols:['Vehicle','2000','2012','2024'],rows:[['Cars',450,430,380],['Bicycles',300,360,470],['Motorbikes',40,55,48],['E-scooters',0,5,90]]},
  WATCH:{cols:['Age group','Television','Online video'],rows:[['16 to 24',6,24],['25 to 44',12,15],['45 to 64',20,8],['65 and over',28,3]]}
};
const D=DATA,eur=v=>'€'+v.toLocaleString('en-GB'),eur2=v=>'€'+v.toFixed(2);
const tab=(id,title,d,extra)=>Object.assign({type:'table',id,title,cols:d.cols,rows:d.rows},extra||{});
const C={
  rent:tab('ch-rent',['Average monthly rent for a one-bedroom flat in one country, by area, 2015 and 2025 (€)'],D.RENT,{fmt:eur}),
  sport:tab('ch-sport',['Average number of weekly users of four activities at a leisure centre, by age group'],D.SPORT),
  serv:tab('ch-serv',['Percentage of households in one country with access to four services, 2000 to 2020'],D.SERV,{fmt:v=>v+'%'}),
  trip:tab('ch-trip',['Average journey time to work in one city, by way of travelling, 2005 and 2025 (minutes)'],D.TRIP),
  shop:tab('ch-shop',['Items sold by a seaside shop in each quarter of one year'],D.SHOP),
  air:tab('ch-air',['Passengers using three airports in one country, 2005 to 2025 (millions)'],D.AIR),
  jobs:tab('ch-jobs',['Working hours, holidays and pay in five occupations in one country'],D.JOBS),
  renew:tab('ch-renew',['Percentage of energy from renewable sources in six regions of one country, 2010 to 2025'],D.RENEW,{fmt:v=>v+'%'}),
  subj:tab('ch-subj',['Students at universities in one country, by subject and gender (thousands)'],D.SUBJ),
  food:tab('ch-food',['Average price of five foods in one country, 2005 to 2025 (€ per kilo)'],D.FOOD,{fmt:eur2}),
  veh:tab('ch-veh',['Vehicles owned per 1,000 people in one city, 2000 to 2024'],D.VEH),
  watch:tab('ch-watch',['Average hours per week spent watching television and online video in one country, by age group'],D.WATCH)
};
/* a small table illustration for chapter openings */
const illus=(hl)=>{let s='<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><rect x="40" y="14" width="320" height="122" rx="8" fill="#fff" stroke="#E4DED1"/><line x1="40" y1="40" x2="360" y2="40" stroke="#292929" stroke-width="2"/>';
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){const x=56+c*78,y=52+r*21;const on=hl&&hl.some(([a,b])=>a===r&&b===c);s+=`<rect x="${x}" y="${y}" width="${c?46:60}" height="9" rx="4" fill="${on?'#F88B48':(c?'#CFC6B4':'#9C968A')}"/>`}
  for(let c=0;c<4;c++)s+=`<rect x="${56+c*78}" y="24" width="${c?40:56}" height="9" rx="4" fill="#292929"/>`;return s+'</svg>'};
return {DATA,C,illus};
})();
