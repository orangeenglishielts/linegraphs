/* ==========================================================================
   MODULE 2 · CHAPTER 1 · READING ANY VISUAL
   ACTIVITY IDS (type · level)
     c1-title   sort      Guided       Step 1  What, where, when?
     c1-unit1   choice    Supported    Step 2  Read the unit
     c1-unit2   fix       Supported    Step 2  Write the unit
     c1-parts   hotspots  Guided       Step 3  Find each part
     c1-leg     choice    Supported    Step 3  Read the legend
     c1-val     binary    Supported    Step 4  Accurate or not?
     c1-time    choice    Supported    Step 4  Time words
     c1-write   write     Independent  Step 5  Two introductions
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,copied,howto,opening,review,addChapter}=OE;
const {C,illus}=F2;
const P='Chapter 1',CT='Reading Any Visual',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TR='The graph below shows the average amount of time per day that adults in one country spent reading printed books and e-books between 2000 and 2024';
const TT='The table below shows the population of four towns in one region in 2000 and 2020';

const spreads=[
opening({n:1,title:CT,lede:'Every Task 1 answer depends on reading the visual correctly. A missed unit or a misread legend can turn an otherwise good answer into an inaccurate one. In this chapter I’ll show you a simple check that works for any graph, chart or table.',
  outcomes:['read a title for what, where and when','find the '+T('unit')+' and write it with every figure','use the legend and categories to tell the data apart','read values and time periods accurately'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('eye'),
  steps:[[1,'c1-s1','The title','What, where, when','Discover'],[2,'c1-s2','Axes and units','What is measured, and how','Understand'],[3,'c1-s3','Legend and categories','Which is which','Understand'],[4,'c1-s4','Reading values','Accurate figures and times','Practise'],[5,'c1-s5','Chapter challenge','Two introductions','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Read the title, the axes, the units and the legend before you look at the data.','unit','Every figure needs its unit')}),

sp('c1-s1','The title',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The title</h2>${vid({title:'Read the title',len:'90 seconds',script:['Read the title of the reading graph aloud.','Underline what: minutes spent reading printed books and e-books.','Underline who and where: adults in one country.','Underline when: 2000 to 2024. Say: these details all go into your introduction.']})}<p>The title tells you three things. All three belong in your introduction:</p><ul class="clean"><li><b>What</b> is measured: minutes per day spent reading.</li><li><b>Where</b> and who: adults in one country.</li><li><b>When</b>: 2000 to 2024.</li></ul>${chart('read')}${take('What, where, when: read the title first, and keep all three in your introduction.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-title"></div>`}),

sp('c1-s2','Axes and units',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Axes and units</h2>${vid({title:'Axes and units',len:'90 seconds',script:['Point to the vertical axis: minutes per day.','Point to the horizontal axis: years.','Show the town table: thousands. Say: 62 means 62,000 people.','Finish: every figure you write carries its unit.']})}<p>The ${T('unit')} tells you what each number means:</p><ul class="clean"><li><b>Minutes per day:</b> 20 means 20 minutes.</li><li><b>Thousands:</b> 62 means 62,000.</li><li><b>Percentages:</b> 30 means 30% of a whole.</li></ul>${chart('towns')}${mistake('<s>Bramley had 62 people in 2020.</s> The table is in thousands: <i>Bramley had 62,000 inhabitants.</i>')}${take('Find the unit on the axis, in the title or in the table heading, and write it with every figure.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-unit1"></div><div data-act="c1-unit2" style="margin-top:16px"></div>`}),

sp('c1-s3','Legend and categories',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Legend and categories</h2><p>When a chart has more than one line, bar or slice, the ${T('legend')} tells you which is which. The categories are the things being compared: here, printed books and e-books.</p>${insight('Check the legend first','In the reading graph, the dark line is printed books and the green line is e-books. Mixing them up would reverse every sentence you write.')}${note('Some charts label the lines directly instead of using a legend. Either way, check before you describe.')}<div class="clear"></div>${take('Legend first: know which line, bar or slice is which before you describe anything.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c1-parts"></div><div data-act="c1-leg" style="margin-top:16px"></div>`}),

sp('c1-s4','Reading values',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Reading values</h2><p>Read figures carefully, and use time words that match the data:</p><ul class="clean"><li><b>Points on the line:</b> use the exact value if it is clear; otherwise <i>about</i> or <i>just over</i>.</li><li><b>in</b> + a year: <i>in 2024, adults read e-books for 15 minutes a day</i>.</li><li><b>between … and</b> or <b>from … to</b> for a period.</li><li><b>by</b> + a year: the state reached at that point: <i>by 2024, e-book reading had risen to 15 minutes</i>.</li></ul>${mistake('<s>Printed books fell to 20 minutes in 2000.</s> Read the time axis again: 20 minutes is the figure for 2024.')}${take('Exact values when they are clear, approximations when they aren’t, and time words that match.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the reading graph in Step 1.</p><div data-act="c1-val"></div><div data-act="c1-time" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: two introductions',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an introduction for each task. Keep what, where and when; change the words.</p><div class="oe-insight"><span class="lab">Task 1</span>${TR}.</div><div class="oe-insight"><span class="lab">Task 2</span>${TT}.</div>${chart('read2')}${chart('towns2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['The title gives what, where and when: keep all three in your introduction.','Find the unit and write it with every figure.','Check the legend before you describe anything.','Read values carefully, and use in, by, between and from … to accurately.']})
];

const acts={
'c1-title':{type:'sort',level:'Guided',skill:'Reading a title',decision:'Does each part of the title tell you what, where or when?',cats:['What','Where and who','When'],
  items:[{w:'minutes per day spent reading',c:0,m:'what is measured.'},{w:'printed books and e-books',c:0,m:'the categories measured.'},{w:'adults in one country',c:1,m:'who and where.'},{w:'2000 to 2024',c:2,m:'the period.'}]},
'c1-unit1':{type:'choice',level:'Supported',skill:'Units',decision:'What does 120 in the Carwell row mean?',prompt:'Use the town table on the left page.',
  opts:[{t:'120,000 people lived in Carwell in 2000.',ok:1,why:'The table is in thousands.'},{t:'120 people lived in Carwell.',why:'Read the title: thousands.'},{t:'Carwell grew by 120%.',why:'It is a population, not a change.'}]},
'c1-unit2':{type:'fix',level:'Supported',skill:'Units',decision:'Add the missing unit.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Dunton grew from 30 to 51 between 2000 and 2020.',ok:/30,000.*51,000|30 000.*51 000/i,bad:/from 30 to 51/i,hint:'The table is in thousands.',err:'30 to 51',fix:'30,000 to 51,000',why:'Every figure needs its unit.',model:'Dunton grew from 30,000 to 51,000 people between 2000 and 2020.'},
         {wrong:'In 2024, adults read printed books for 20 a day.',ok:/20 minutes/i,bad:/20 a day/i,hint:'20 what?',err:'20 a day',fix:'20 minutes a day',why:'Write the unit: minutes.',model:'In 2024, adults read printed books for 20 minutes a day.'}]},
'c1-parts':{type:'hotspots',level:'Guided',skill:'Parts of a graph',decision:'Find each part of the graph.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.read,{id:'ch-f2read-hot',hot:1,hotPoint:[1,4]}),
  parts:{title:'That is the title.',x:'That is the time axis: the years.',y:'That is the value axis: minutes per day.',legend:'That is the legend: which line is which.',line:'That is one of the lines.',point:'That is a single data point.'},
  targets:[{q:'What is measured?',part:'title',ok:'Minutes per day spent reading printed books and e-books.'},
           {q:'What is the unit?',part:'y',ok:'Minutes per day.'},
           {q:'Which line is e-books?',part:'legend',ok:'The legend shows that the green line is e-books.'},
           {q:'How long did adults spend reading e-books in 2024?',part:'point',ok:'15 minutes a day.'}]},
'c1-leg':{type:'choice',level:'Supported',skill:'The legend',decision:'Which sentence reads the legend correctly?',
  opts:[{t:'In 2000, adults spent no time reading e-books, but 32 minutes reading printed books.',ok:1,why:'The green line starts at 0; the dark line at 32.'},{t:'In 2000, adults spent 32 minutes reading e-books.',why:'The lines are swapped: 32 is printed books.'},{t:'E-books were always more popular than printed books.',why:'Printed books were ahead in every year.'}]},
'c1-val':{type:'binary',level:'Supported',skill:'Reading values',decision:'Accurate or not?',labels:['Accurate','Not accurate'],
  items:[{t:'Time spent reading printed books fell from 32 to 20 minutes a day.',a:0,right:'2000 to 2024.',wrong:'It is accurate.'},
         {t:'By 2024, e-book reading had risen to 15 minutes a day.',a:0,right:'“By” + the end point.',wrong:'It is accurate: 15 in 2024.'},
         {t:'E-books overtook printed books in 2018.',a:1,right:'Right. In 2018, printed books were 22 and e-books 13.',wrong:'Printed books were still ahead: 22 against 13.'},
         {t:'Total reading time was about the same in 2000 and 2006.',a:0,right:'32 + 0 and 30 + 2: both 32 minutes.',wrong:'It is accurate: 32 minutes in both years.'}]},
'c1-time':{type:'choice',level:'Supported',skill:'Time words',decision:'Which sentence uses the time words correctly?',
  opts:[{t:'Between 2000 and 2024, time spent on printed books fell by 12 minutes a day.',ok:1,why:'“Between … and” for a period; 32 − 20 = 12.'},{t:'In 2000 to 2024, printed books fell.',why:'Use “between … and” or “from … to” for a period.'},{t:'By 2000, e-books had risen to 15 minutes.',why:'15 minutes is the 2024 figure.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introductions',decision:'Write an introduction for each task.',prompt:'One sentence each. Then check your writing.',
  fields:[{k:'r',label:'Task 1: the reading graph',rows:3},{k:'t',label:'Task 2: the town table',rows:3}],
  checks:[{t:'Task 1: you kept what, who and when.',fix:'Include reading, printed books and e-books, adults, and 2000 to 2024.',fn:v=>/read/i.test(v.r)&&/e-?books?/i.test(v.r)&&/adult/i.test(v.r)&&/2000/.test(v.r)&&/2024/.test(v.r)},
          {t:'Task 2: you kept what, where and when.',fix:'Include population, four towns, the region, 2000 and 2020.',fn:v=>/(population|people|inhabitants|residents|lived)/i.test(v.t)&&/town/i.test(v.t)&&/2000/.test(v.t)&&/2020/.test(v.t)},
          {t:'You paraphrased both tasks.',fix:'One of your introductions copies eight or more words from the task.',fn:v=>v.r.trim()&&v.t.trim()&&!copied(v.r,TR,8)&&!copied(v.t,TT,8)}],
  modelTitle:'My model introductions',
  model:`<p>1. <button type="button" class="hl" data-n="0">The line graph compares how long adults in one country spent each day, on average,</button> reading printed books and e-books over the period from 2000 to 2024.</p><p>2. <button type="button" class="hl" data-n="1">The table gives figures for the number of people living in four towns</button> in one region in 2000 and 2020.</p>`,
  notes:['“How long … spent each day” replaces “the average amount of time per day”.','“The number of people living in” replaces “the population of”.'],
  self:['I kept what, where and when.','I changed the words and the structure.','I added no data or opinions.','Each introduction is one sentence.'],revise:1}
};

const gloss={
  'unit':{term:'unit',def:'What each number measures: minutes, thousands, per cent, euros. Write it with every figure.',path:'M40,80 V20 M40,80 H220',ex:'“62 in a table of thousands means 62,000.”'},
  'legend':{term:'legend',def:'The key that shows which colour or line stands for which category.',path:'M40,40 H80 M40,60 H80 M100,40 H200 M100,60 H180',ex:'“The legend shows that the green line is e-books.”'},
  'axis':{term:'axis',def:'One of the two scales of a graph: usually time along the bottom, values up the side.',path:'M40,10 V80 H220',ex:'“The vertical axis shows minutes per day.”'}
};

const retrieval={
 'c1-s1':[{q:'A title tells you…',opts:[{t:'what, where and when',ok:1,why:'All three go in the introduction.'},{t:'the answer',why:'You find the features.'}]}],
 'c1-s2':[{q:'51 in a table of thousands is…',opts:[{t:'51,000',ok:1,why:'Multiply by 1,000.'},{t:'51',why:'Add the unit.'}]}],
 'c1-s3':[{q:'What tells you which line is which?',opts:[{t:'The legend',ok:1,why:'Or direct labels.'},{t:'The title',why:'The legend does.'}]}],
 'c1-s4':[{q:'“___ 2024, e-books had risen to 15 minutes.”',opts:[{t:'By',ok:1,why:'The point reached.'},{t:'Since',why:'Use by.'}]}],
 'c1-s5':[{q:'How many towns are in the table?',opts:[{t:'Four',ok:1,why:'Count the rows.'},{t:'Five',why:'Four.'}]}]
};

const minitest=[
 {q:'Which belongs in the introduction?',opts:[{t:'What, where and when',ok:1,why:'From the title.'},{t:'The highest figure',why:'Overview or body.'},{t:'An opinion',why:'Never.'}],sp:'c1-s1'},
 {q:'Where can you find the unit?',opts:[{t:'On the axis, in the title or in a heading',ok:1,why:'Check all three.'},{t:'Only in the legend',why:'Rarely there.'},{t:'Nowhere',why:'Every visual has one.'}],sp:'c1-s2'},
 {q:'Carwell 120 → 118 (thousands). Which is accurate?',opts:[{t:'Carwell’s population fell slightly, by 2,000.',ok:1,why:'120,000 − 118,000.'},{t:'Carwell lost 2 people.',why:'Thousands.'},{t:'Carwell grew.',why:'It fell.'}],sp:'c1-s2'},
 {q:'Which line was higher in every year?',opts:[{t:'Printed books',ok:1,why:'Always ahead.'},{t:'E-books',why:'Always behind.'},{t:'They were equal',why:'No.'}],sp:'c1-s3'},
 {q:'Why check the legend first?',opts:[{t:'So you don’t mix up the categories',ok:1,why:'Every sentence depends on it.'},{t:'It has the figures',why:'It has the key.'},{t:'It isn’t necessary',why:'It is.'}],sp:'c1-s3'},
 {q:'Printed books 32 → 20. The fall was…',opts:[{t:'12 minutes a day',ok:1,why:'32 − 20.'},{t:'12%',why:'Minutes, not per cent.'},{t:'20 minutes',why:'20 is the end figure.'}],sp:'c1-s4'},
 {q:'Choose the correct phrase.',opts:[{t:'from 2000 to 2024',ok:1,why:'A period.'},{t:'in 2000 to 2024',why:'Use from … to.'},{t:'since 2000 to 2024',why:'Since doesn’t take “to”.'}],sp:'c1-s4'},
 {q:'Dunton 30 → 51 (thousands) is a rise of…',opts:[{t:'21,000',ok:1,why:'51,000 − 30,000.'},{t:'21',why:'Add the unit.'},{t:'51,000',why:'That is the end figure.'}],sp:'c1-s5'}
];

const cannow=[['Read a title for what, where and when','c1-s1'],['Find the unit and write it with every figure','c1-s2'],['Use the legend to tell categories apart','c1-s3'],['Read values and time periods accurately','c1-s4'],['Write introductions for a graph and a table','c1-s5']];
addChapter({n:1,spreads,acts,gloss,charts:{read:C.read,towns:C.towns,read2:Object.assign({},C.read,{id:'ch-f2read2'}),towns2:Object.assign({},C.towns,{id:'ch-f2towns2'})},retrieval,minitest,cannow});
})();
