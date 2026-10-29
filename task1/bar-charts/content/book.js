/* ==========================================================================
   MASTERING BAR CHARTS · BOOK SETTINGS AND SHARED DATA
   Every figure in the book comes from the DATA object below. The checks in
   task1/tests/check_bar.py recalculate the claims made in the text.
   ========================================================================== */
OE.newBook({NS:'oe-barbook-v1-',TITLE:'Mastering Bar Charts',NCH:6,
  DESC:'Mastering Bar Charts, an interactive book for IELTS Academic Writing Task 1 in six chapters: Understanding Bar Charts, Comparing Categories, Bar Charts Over Time, Selecting and Grouping Data, Structuring the Response and Writing a Complete Answer.',
  NEXT_BOOK:{url:'../pie-charts/',name:'Mastering Pie Charts'}});

window.BAR=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
const DATA={
  /* Ch1 */
  LEISURE:{x:['Watching TV','Reading','Sport','Gaming','Socialising'],young:[9,3,5,9,10],old:[16,7,2,1,6]},
  COMMUTE:{x:['Car','Bus','Train','Bicycle','Walking'],v:[38,21,17,14,10]},
  ATTRACT:{x:['Museum','Zoo','Castle','Gallery'],y2010:[120,95,60,40],y2020:[150,80,110,45]},
  CLUBS:{x:['Swimming','Tennis','Football','Yoga'],y2015:[300,180,260,60],y2025:[420,150,280,240]},
  WATER:{x:['Showering','Toilet','Laundry','Cooking and drinking','Garden'],y2000:[40,35,20,10,15],y2020:[48,25,15,10,6]},
  /* Ch2 */
  SPEND:{x:['Housing','Food','Transport','Leisure','Clothing'],v:[950,420,310,180,90]},
  PASS:{x:['Maths','English','Science','History'],a:[82,75,64,58],b:[41,78,66,29]},
  BOOKS:{x:['Under 12','12–17','18–34','35–59','60+'],v:[24,9,6,8,18]},
  /* Ch3 */
  EBIKE:{x:['2018','2019','2020','2021','2022','2023','2024'],v:[40,55,90,85,120,150,145]},
  DEVICE:{x:['Desktop computer','Laptop','Tablet'],y2005:[70,25,0],y2015:[55,62,38],y2025:[30,78,61]},
  CINEMA:{x:['Under 25','25–44','45 and over'],y2000:[48,30,12],y2010:[42,33,20],y2020:[30,31,27]},
  /* Ch4 */
  EXER:{x:['16–24','25–34','35–44','45–54','55–64','65+'],y2010:[52,44,38,35,30,22],y2020:[55,47,41,42,40,34]},
  FLATS:{x:['Centre','Harbour','North','South','East','West'],y2015:[420,380,210,200,190,230],y2025:[610,590,250,240,220,260]},
  /* Ch5 */
  RECYC:{x:['Paper','Glass','Plastic','Food waste'],y2005:[45,40,12,5],y2025:[72,66,38,41]},
  STUD:{x:['Asia','Europe','Africa','Americas','Middle East'],y2012:[60,35,10,12,8],y2022:[95,30,22,15,18]},
  /* Ch6 */
  BSALES:{x:['Printed books','E-books','Audiobooks'],y2010:[180,20,5],y2015:[165,55,15],y2020:[150,70,45]},
  TIME:{x:['Paid work','Housework','Childcare','Exercise','Social media','Travel'],y2004:[210,95,40,15,10,55],y2024:[190,80,45,25,95,60]}
};
const D=DATA,pct=v=>v+'%';
const C={
  leisure:{type:'bar',id:'ch-leisure',title:['Average hours per week spent on five leisure activities,','by age group, in one country'],x:D.LEISURE.x,series:[{name:'Aged 18 to 30',vals:D.LEISURE.young,color:GREEN},{name:'Aged over 60',vals:D.LEISURE.old,color:NAVY}],ymax:20,ystep:5,ylab:'Hours per week',fmt:v=>v+' hours'},
  commute:{type:'bar',id:'ch-commute',title:['How workers in one city travel to work'],x:D.COMMUTE.x,series:[{name:'Workers',vals:D.COMMUTE.v,color:NAVY}],ymax:40,ystep:10,ylab:'% of workers',fmt:pct,labels:1},
  attract:{type:'bar',id:'ch-attract',title:['Number of visitors to four attractions in one city,','2010 and 2020'],x:D.ATTRACT.x,series:[{name:'2010',vals:D.ATTRACT.y2010,color:GREY},{name:'2020',vals:D.ATTRACT.y2020,color:NAVY}],ymax:160,ystep:40,ylab:'Visitors (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' visitors'},
  clubs:{type:'bar',id:'ch-clubs',title:['Members of four clubs at a sports centre, 2015 and 2025'],x:D.CLUBS.x,series:[{name:'2015',vals:D.CLUBS.y2015,color:GREY},{name:'2025',vals:D.CLUBS.y2025,color:NAVY}],ymax:450,ystep:150,ylab:'Number of members',fmt:v=>v+' members'},
  water:{type:'bar',id:'ch-water',title:['Average water used per person per day for five purposes','in one country, 2000 and 2020'],x:['Showering','Toilet','Laundry','Cooking|and drinking','Garden'],series:[{name:'2000',vals:D.WATER.y2000,color:GREY},{name:'2020',vals:D.WATER.y2020,color:GREEN}],ymax:50,ystep:10,ylab:'Litres per person per day',fmt:v=>v+' litres'},
  spend:{type:'bar',id:'ch-spend',title:['Average monthly household spending in one country'],x:D.SPEND.x,series:[{name:'Spending',vals:D.SPEND.v,color:NAVY}],ymax:1000,ystep:250,ylab:'Euros per month',fmt:v=>'€'+v,tick:v=>'€'+v,labels:1},
  pass:{type:'bar',id:'ch-pass',title:['Percentage of students who passed exams in four subjects','at two schools'],x:D.PASS.x,series:[{name:'School A',vals:D.PASS.a,color:GREEN},{name:'School B',vals:D.PASS.b,color:NAVY}],ymax:100,ystep:20,ylab:'% of students who passed',fmt:pct,labels:1},
  books:{type:'bar',id:'ch-books',title:['Average number of books borrowed per library member','in one year, by age group'],x:D.BOOKS.x,series:[{name:'Books',vals:D.BOOKS.v,color:NAVY}],ymax:25,ystep:5,ylab:'Books per member',xlab:'Age group',fmt:v=>v+' books',labels:1},
  ebike:{type:'bar',id:'ch-ebike',title:['Electric bicycles sold in one country, 2018 to 2024'],x:D.EBIKE.x,series:[{name:'Sales',vals:D.EBIKE.v,color:GREEN}],ymax:160,ystep:40,ylab:'Sales (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' bicycles',labels:1},
  device:{type:'bar',id:'ch-device',title:['Percentage of households in one country that owned three','types of computer, 2005, 2015 and 2025'],x:D.DEVICE.x,series:[{name:'2005',vals:D.DEVICE.y2005,color:GREY},{name:'2015',vals:D.DEVICE.y2015,color:GREEN},{name:'2025',vals:D.DEVICE.y2025,color:NAVY}],ymax:80,ystep:20,ylab:'% of households',fmt:pct,labels:1},
  cinema:{type:'bar',id:'ch-cinema',title:['Cinema tickets sold in one country, by age group,','2000, 2010 and 2020'],x:D.CINEMA.x,series:[{name:'2000',vals:D.CINEMA.y2000,color:GREY},{name:'2010',vals:D.CINEMA.y2010,color:GREEN},{name:'2020',vals:D.CINEMA.y2020,color:NAVY}],ymax:50,ystep:10,ylab:'Tickets sold (millions)',xlab:'Age group',fmt:v=>v+' million tickets'},
  exer:{type:'bar',id:'ch-exer',title:['Percentage of adults who exercised at least three times a week,','by age group, 2010 and 2020'],x:D.EXER.x,series:[{name:'2010',vals:D.EXER.y2010,color:GREY},{name:'2020',vals:D.EXER.y2020,color:NAVY}],ymax:60,ystep:10,ylab:'% of adults',xlab:'Age group',fmt:pct,labels:1},
  flats:{type:'bar',id:'ch-flats',title:['Average price of a flat in six districts of one city,','2015 and 2025'],x:D.FLATS.x,series:[{name:'2015',vals:D.FLATS.y2015,color:GREY},{name:'2025',vals:D.FLATS.y2025,color:NAVY}],ymax:700,ystep:100,ylab:'Price (€ thousands)',fmt:v=>'€'+v+',000'},
  recyc:{type:'bar',id:'ch-recyc',title:['Percentage of four types of household waste recycled in one country,','2005 and 2025'],x:D.RECYC.x,series:[{name:'2005',vals:D.RECYC.y2005,color:GREY},{name:'2025',vals:D.RECYC.y2025,color:GREEN}],ymax:80,ystep:20,ylab:'% recycled',fmt:pct,labels:1},
  stud:{type:'bar',id:'ch-stud',title:['International students at universities in one country,','by region of origin, 2012 and 2022'],x:D.STUD.x,series:[{name:'2012',vals:D.STUD.y2012,color:GREY},{name:'2022',vals:D.STUD.y2022,color:NAVY}],ymax:100,ystep:20,ylab:'Students (thousands)',fmt:v=>(v*1000).toLocaleString('en-GB')+' students'},
  bsales:{type:'bar',id:'ch-bsales',title:['Sales of three types of book in one country,','2010, 2015 and 2020'],x:D.BSALES.x,series:[{name:'2010',vals:D.BSALES.y2010,color:GREY},{name:'2015',vals:D.BSALES.y2015,color:GREEN},{name:'2020',vals:D.BSALES.y2020,color:NAVY}],ymax:200,ystep:50,ylab:'Copies sold (millions)',fmt:v=>v+' million copies'},
  time:{type:'bar',horiz:1,id:'ch-time',title:['Average minutes per day that adults in one country spent','on six activities, 2004 and 2024'],x:D.TIME.x,series:[{name:'2004',vals:D.TIME.y2004,color:GREY},{name:'2024',vals:D.TIME.y2024,color:NAVY}],ymax:240,ystep:60,ylab:'Minutes per day',fmt:v=>v+' minutes'}
};
/* a small bar illustration for chapter openings */
const illus=(a,b)=>{let s='<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><line x1="20" y1="132" x2="390" y2="132" stroke="#CFC6B4"/><line x1="20" y1="10" x2="20" y2="132" stroke="#CFC6B4"/>';
  const st=350/a.length,w=b?Math.min(26,st*0.38):Math.min(46,st*0.65);
  a.forEach((v,i)=>{const x=40+i*st;s+=`<rect x="${x}" y="${132-v}" width="${w}" height="${v}" rx="3" fill="${GREEN}"/>`;if(b)s+=`<rect x="${x+w+2}" y="${132-b[i]}" width="${w}" height="${b[i]}" rx="3" fill="${NAVY}"/>`});return s+'</svg>'};
return {DATA,C,illus};
})();
