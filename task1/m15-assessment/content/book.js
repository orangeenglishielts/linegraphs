/* ==========================================================================
   MODULE 15 · ASSESSMENT AND IMPROVEMENT · SETTINGS AND DATA
   The progress, portfolio and plan widgets read what the other books have
   saved in this browser (same site, so localStorage is shared):
     NS + 'results'  → {key:{first,spread,act}}   first-try results
     NS + 'd1-<id>'  → first draft of a writing task {field:text}
     NS + 'd2-<id>'  → revision
   ========================================================================== */
OE.newBook({NS:'oe-m15book-v1-',TITLE:'Assessment and Improvement',NCH:1,
  DESC:'Assessment and Improvement, the final module of the Orange English IELTS Academic Writing Task 1 course: a final check, a final timed task, a review of your writing portfolio and an individual revision plan.',
  NEXT_BOOK:null});

window.M15=(function(){
const {NAVY,GREEN,ORANGE,GREY}=OE;
/* every book in the course, in course order */
const BOOKS=[
  {ns:'oe-m1book-v1-',name:'Task 1 Foundations',url:'../m1-foundations/',part:'A',skill:'the task, the criteria and a writing process'},
  {ns:'oe-m2book-v1-',name:'Analysing Visual Information',url:'../m2-analysing/',part:'A',skill:'finding and selecting key features'},
  {ns:'oe-m3book-v1-',name:'Writing Effective Overviews',url:'../m3-overviews/',part:'A',skill:'overviews'},
  {ns:'oe-m4book-v1-',name:'Describing Data Accurately',url:'../m4-describing-data/',part:'A',skill:'numbers, percentages and proportions'},
  {ns:'oe-m5book-v1-',name:'Language for Trends and Change',url:'../m5-trends/',part:'A',skill:'describing change over time'},
  {ns:'oe-m6book-v1-',name:'Comparing and Organising Information',url:'../m6-comparing/',part:'A',skill:'comparisons and paragraph organisation'},
  {ns:'oe-linebook-v1-',name:'Mastering Line Graphs',url:'../../book/',part:'B',skill:'line graphs'},
  {ns:'oe-barbook-v1-',name:'Mastering Bar Charts',url:'../bar-charts/',part:'B',skill:'bar charts'},
  {ns:'oe-piebook-v1-',name:'Mastering Pie Charts',url:'../pie-charts/',part:'B',skill:'pie charts'},
  {ns:'oe-tablebook-v1-',name:'Mastering Tables',url:'../tables/',part:'B',skill:'tables'},
  {ns:'oe-mixedbook-v1-',name:'Mastering Mixed Charts',url:'../mixed-charts/',part:'B',skill:'mixed charts'},
  {ns:'oe-mapbook-v1-',name:'Mastering Maps',url:'../maps/',part:'B',skill:'maps'},
  {ns:'oe-procbook-v1-',name:'Mastering Process Diagrams',url:'../processes/',part:'B',skill:'process diagrams'},
  {ns:'oe-mockbook-v1-',name:'Task 1 Mock Exams',url:'../mock-exams/',part:'C',skill:'timed writing'},
  {ns:'oe-m15book-v1-',name:'Assessment and Improvement',url:'./',part:'C',skill:'this module'}
];
const DATA={FREE:{x:['Gaming','Sport','Reading','Social media'],y2010:[6,7,4,3],y2025:[11,5,2,12]}};
const C={
  free:{type:'bar',id:'ch-free',title:['Average hours per week that teenagers in one country spent','on four free-time activities, 2010 and 2025'],x:DATA.FREE.x,series:[{name:'2010',vals:DATA.FREE.y2010,color:GREY},{name:'2025',vals:DATA.FREE.y2025,color:NAVY}],ymax:14,ystep:2,ylab:'Hours per week',fmt:v=>v+' hours',labels:1}
};
C.free2=Object.assign({},C.free,{id:'ch-free2'});
return {BOOKS,DATA,C};
})();
