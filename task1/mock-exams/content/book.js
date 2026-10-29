/* ==========================================================================
   TASK 1 MOCK EXAMS · SETTINGS AND SHARED DATA
   Seven full mock tasks, one for each task type. Every figure comes from DATA.
   Maps use MAP (maps book) and processes use PROC (processes book), loaded first.
   ========================================================================== */
OE.newBook({NS:'oe-mockbook-v1-',TITLE:'Task 1 Mock Exams',NCH:1,
  DESC:'Seven IELTS Academic Writing Task 1 mock exams, one for each task type: line graph, bar chart, pie charts, table, mixed charts, maps and a process diagram, each with a 20-minute timer, checks and a model answer.',
  NEXT_BOOK:null});

window.MOCK=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;const PURPLE='#4E4178';
const DATA={
  WATER:{x:['2000','2005','2010','2015','2020','2025'],a:[185,180,170,160,150,140],b:[110,118,125,135,142,150],c:[90,96,104,98,92,88]},
  LIB:{x:['16 to 24','25 to 44','45 to 64','65 and over'],y2004:[48,40,38,30],y2024:[35,32,36,44]},
  VISIT:{cats:['Shopping','Work','Eating out','Entertainment','Other'],y2005:[45,25,12,10,8],y2025:[28,24,22,16,10]},
  ECAR:{cols:['Region','2015','2020','2025'],rows:[['North',25,75,110],['South',12,90,180],['East',17,60,95],['West',2,32,70],['Central',2,18,90]]},
  ONLINE:{x:['2010','2013','2016','2019','2022','2025'],v:[5,8,12,19,24,26]},
  GOODS:{cats:['Clothing','Electronics','Groceries','Home goods','Books','Other'],v:[30,22,18,16,8,6]}
};
const D=DATA,pct=v=>v+'%',COLS=['#292929','#2B6E43','#F88B48','#9C968A','#4E4178','#7FB9A0'];
const {M}=MAP,{F}=PROC;
/* Westfield maps */
const WF_BASE=[
  {t:'water',d:'M12,66 C150,52 300,82 548,60',w:24,label:'River Wester',lx:110,ly:96},
  {t:'rail',d:'M12,352 L548,352',label:'Railway',lx:470,ly:340},
  {t:'road',d:'M280,74 L280,352',w:14,label:'Mill Lane',lx:340,ly:230}
];
const WF_2000=WF_BASE.concat([
  {t:'field',x:34,y:110,w:212,h:220,label:'Empty land'},
  {x:300,y:106,w:120,h:94,kind:'pub',label:'Factory'},
  {x:440,y:106,w:90,h:48,kind:'pub',label:'Warehouse'},{x:440,y:166,w:90,h:48,kind:'pub',label:'Warehouse'},
  {x:300,y:250,w:230,h:84,kind:'pub',label:'Freight yard'}
]);
const WF_2025=WF_BASE.concat([
  {t:'path',d:'M12,90 C150,76 300,104 548,84',label:'Riverside path',lx:430,ly:104},
  {x:60,y:126,w:120,h:76,kind:'pub',label:'School'},
  {t:'sport',x:60,y:222,w:170,h:100,label:'Sports field'},
  {x:300,y:116,w:120,h:94,kind:'shop',label:'Arts centre'},
  {x:440,y:116,w:90,h:44,kind:'house',label:'Flats'},{x:440,y:170,w:90,h:44,kind:'house',label:'Flats'},
  {t:'park',x:300,y:250,w:230,h:84,label:'Park'},
  {x:288,y:340,w:72,h:24,kind:'new',label:'Tram stop',fs:10}
]);
const TEA=[{icon:'tree',label:'Leaves picked|by hand'},{icon:'wind',label:'Withered with|warm air (12 hours)'},{icon:'rollers',label:'Rolled to break|the leaves'},{icon:'clock',label:'Oxidised in a humid|room (2 hours)'},{icon:'fire',label:'Dried|at 120°C'},{icon:'sort',label:'Sorted|by size'},{icon:'box',label:'Packed into|bags or boxes'},{icon:'truck',label:'Shipped|to shops'}];
const C={
  water:{id:'ch-mwater',title:['Average daily water use per person in three cities,','2000 to 2025 (litres)'],x:D.WATER.x,series:[{name:'City A',vals:D.WATER.a,color:NAVY},{name:'City B',vals:D.WATER.b,color:GREEN},{name:'City C',vals:D.WATER.c,color:ORANGE}],ymin:50,ymax:200,ystep:50,ylab:'Litres per person per day',fmt:v=>v+' litres',points:1},
  lib:{type:'bar',id:'ch-mlib',title:['Percentage of people in one country who used a public library,','by age group, 2004 and 2024'],x:D.LIB.x,series:[{name:'2004',vals:D.LIB.y2004,color:GREY},{name:'2024',vals:D.LIB.y2024,color:NAVY}],ymax:50,ystep:10,ylab:'% of age group',xlab:'Age group',fmt:pct,labels:1},
  visit:{type:'pie',id:'ch-mvisit',title:['Main reason for visiting a city centre, 2005 and 2025'],cats:D.VISIT.cats,colors:COLS,pies:[{label:'2005',vals:D.VISIT.y2005},{label:'2025',vals:D.VISIT.y2025}],fmt:pct},
  ecar:{type:'table',id:'ch-mecar',title:['Electric cars sold in five regions of one country, 2015 to 2025 (thousands)'],cols:D.ECAR.cols,rows:D.ECAR.rows},
  online:{id:'ch-monline',title:['Percentage of retail sales made online in one country, 2010 to 2025'],x:D.ONLINE.x,series:[{name:'Online sales',vals:D.ONLINE.v,color:NAVY}],ymin:0,ymax:30,ystep:10,ylab:'% of retail sales',fmt:pct,points:1,h:250},
  goods:{type:'pie',id:'ch-mgoods',title:['Goods bought online in 2025 (% of online spending)'],cats:D.GOODS.cats,colors:COLS,pies:[{label:'',vals:D.GOODS.v}],fmt:pct,r:78},
  wf00:M('ch-mwf00',['Westfield in 2000'],WF_2000),
  wf25:M('ch-mwf25',['Westfield in 2025'],WF_2025),
  tea:F('ch-mtea',['How tea is produced'],TEA)
};
return {DATA,C};
})();
