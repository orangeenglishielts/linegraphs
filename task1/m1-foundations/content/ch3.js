/* ==========================================================================
   MODULE 1 · CHAPTER 3 · THE SEVEN TASK TYPES
   ACTIVITY IDS (type · level)
     c3-type    sort      Guided       Step 1  Which task type?
     c3-best    choice    Supported    Step 2  What does it ask?
     c3-table   binary    Supported    Step 2  Can you say this?
     c3-sd      sort      Supported    Step 3  Static or dynamic?
     c3-lang    choice    Supported    Step 3  The right language
     c3-tense   sort      Supported    Step 4  Which verb form?
     c3-mpx     choice    Independent  Step 4  Maps and processes
     c3-write   write     Independent  Step 5  Three introductions
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,copied,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 3',CT='The Seven Task Types',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const TP='The pie chart below shows how water is used in an average home in one country';
const TT='The table below shows the average price of a cup of coffee in three cities in 2015 and 2025';
const TR='The diagram below shows how honey is produced';

const spreads=[
opening({n:3,title:CT,lede:'Task 1 comes in seven forms: line graphs, bar charts, pie charts, tables, mixed charts, maps and process diagrams. They share the same four-part answer, but each asks for something slightly different. In this chapter I’ll show you how to recognise each type in seconds, and what it asks you to do.',
  outcomes:['recognise all seven task types','say what each type asks you to describe','tell '+T('static')+' data from '+T('dynamic')+' data','choose the right verb forms for maps and processes'],
  illus:illus('seven'),
  steps:[[1,'c3-s1','Seven task types','Recognise them fast','Discover'],[2,'c3-s2','Charts with numbers','Line, bar, pie, table','Understand'],[3,'c3-s3','Static or dynamic?','Time changes everything','Understand'],[4,'c3-s4','Maps, processes, mixed','Beyond numbers','Practise'],[5,'c3-s5','Chapter challenge','Three introductions','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Seven task types',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Seven task types</h2>${vid({title:'Seven task types',len:'2 minutes',script:['Show seven thumbnails in a row.','Name each and give one word for what it shows: change, comparison, shares, exact figures, two visuals, places, stages.','Say: the task sentence always names the type. Read it first.']})}<ul class="clean"><li><b>Line graph:</b> change over time.</li><li><b>Bar chart:</b> comparison of categories, sometimes over time.</li><li><b>Pie chart:</b> shares of a whole.</li><li><b>Table:</b> exact figures in rows and columns.</li><li><b>Mixed charts:</b> two visuals on one topic.</li><li><b>Map:</b> how a place changed, or will change.</li><li><b>Process diagram:</b> the stages of how something happens or is made.</li></ul>${chart('water')}${take('The task sentence names the type. Read it first, and you know what to look for.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c3-type"></div>`}),

sp('c3-s2','Charts with numbers',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Charts with numbers</h2>${vid({title:'Charts with numbers',len:'90 seconds',script:['Line and bar: look for change and comparison.','Pie: shares of a whole, not amounts.','Table: no picture, so you find the pattern yourself.']})}<p>Four task types give you numbers. Each one has its own focus:</p><ul class="clean"><li><b>Line graph:</b> trends: rising, falling, peaking, crossing.</li><li><b>Bar chart:</b> which categories are bigger or smaller, and by how much.</li><li><b>Pie chart:</b> proportions. Without totals, write about <i>shares</i>, not amounts.</li><li><b>Table:</b> exact figures. You must find the pattern yourself.</li></ul>${chart('coffee')}${take('Line: trends. Bar: comparison. Pie: shares. Table: find the pattern in exact figures.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c3-best"></div><p class="small" style="margin-top:16px">Use the coffee table on the left page.</p><div data-act="c3-table"></div>`}),

sp('c3-s3','Static or dynamic?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Static or dynamic?</h2>${vid({title:'Static or dynamic?',len:'90 seconds',script:['Show the exercise bar chart: age groups, no years. Static.','Show the museum line graph: six years. Dynamic.','Show the language for each: compare for static, describe change for dynamic.']})}<ul class="clean"><li><b>${T('static')}:</b> one point in time. You <b>compare</b>: <i>the highest, twice as much as, the largest share</i>.</li><li><b>${T('dynamic')}:</b> two or more points in time. You <b>describe change</b>: <i>rose, fell, doubled, overtook</i>.</li></ul>${mistake('<s>Exercise increased to 52 minutes for teenagers.</s> The exercise chart has no years, so nothing increased. Say: <i>teenagers exercised for 52 minutes a day</i>.')}${take('No time: compare. Time: describe change, and compare too.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c3-sd"></div><div data-act="c3-lang" style="margin-top:16px"></div>`}),

sp('c3-s4','Maps, processes, mixed',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Maps, processes, mixed</h2><ul class="clean"><li><b>Maps</b> show places. Describe what changed and where, usually with the past passive: <i>a car park was built</i>. A plan for the future uses <i>will be built</i>.</li><li><b>Processes</b> show stages. Describe them in order, usually with the present passive: <i>the honey is put into jars</i>.</li><li><b>Mixed charts</b> combine two visuals. Describe each one, and link them where they connect.</li></ul>${chart('village')}${chart('honey')}${take('Maps: changes and places, past passive. Processes: stages in order, present passive. Mixed: both visuals, linked.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-tense"></div><div data-act="c3-mpx" style="margin-top:16px"></div>`}),

sp('c3-s5','Chapter challenge: three introductions',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an introduction for three different task types. Paraphrase each task sentence in one sentence of your own.</p><div class="oe-insight"><span class="lab">The three tasks</span>1. ${TP}.<br>2. ${TT}.<br>3. ${TR}.</div>${note('Change the verb (shows → illustrates, compares) and the structure, and keep every detail: the place, the years, the categories.')}<div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Seven task types: line, bar, pie, table, mixed, map and process.','Line: trends. Bar: comparison. Pie: shares. Table: find the pattern yourself.','Static data: compare. Dynamic data: describe change, and compare.','Maps use the past passive (or future for plans); processes use the present passive.']})
];

const acts={
'c3-type':{type:'sort',level:'Guided',skill:'Task types',decision:'Which task type is each task?',cats:['Line, bar, pie or table','Map','Process','Mixed charts'],
  items:[{w:'The diagram shows how glass is recycled.',c:2,m:'stages: a process.'},{w:'The maps show a town centre in 1990 and today.',c:1,m:'a place at two times.'},{w:'The graph shows the price of petrol from 2000 to 2020.',c:0,m:'a line graph.'},{w:'The bar chart shows rainfall in five cities, and the table shows their temperatures.',c:3,m:'two visuals together.'},{w:'The diagram shows the stages in the life of a frog.',c:2,m:'a natural process.'},{w:'The plans show a school now and after its redevelopment.',c:1,m:'a map with a future plan.'}]},
'c3-best':{type:'choice',level:'Supported',skill:'What each type asks',decision:'The pie chart of water use has no totals. Which sentence fits it?',prompt:'Use the pie chart in Step 1.',
  opts:[{t:'Showers accounted for just over a third of household water use.',ok:1,why:'A share, accurately described: 34% is just over a third.'},{t:'Households used 34 litres of water in the shower.',why:'The pie gives percentages, not litres.'},{t:'Water used for showers rose to 34%.',why:'The pie shows one time only: nothing rose.'}]},
'c3-table':{type:'binary',level:'Supported',skill:'Reading a table',decision:'Can you say this, based on the coffee table?',labels:['Yes','No'],
  items:[{t:'Coffee became more expensive in all three cities.',a:0,right:'Every 2025 price is higher than in 2015.',wrong:'Yes: all three prices rose.'},
         {t:'The price in Northport rose by half.',a:0,right:'€2.40 to €3.60 is an increase of €1.20, half of €2.40.',wrong:'Yes: €1.20 is half of €2.40.'},
         {t:'Eastham had the highest price in both years.',a:1,right:'Right. Northport was highest in 2025 (€3.60).',wrong:'Eastham led in 2015, but Northport was highest in 2025.'},
         {t:'Coffee is more popular in Northport.',a:1,right:'Right. The table shows prices, not popularity.',wrong:'The table says nothing about popularity.'}]},
'c3-sd':{type:'sort',level:'Supported',skill:'Static or dynamic',decision:'Static or dynamic?',cats:['Static','Dynamic'],
  items:[{w:'Exercise time by age group',c:0,m:'no years.'},{w:'Museum visitors, 2015 to 2025',c:1,m:'six years.'},{w:'Household water use (one pie)',c:0,m:'one point in time.'},{w:'Coffee prices in 2015 and 2025',c:1,m:'two years.'},{w:'Two pies: university travel in 2010 and 2025',c:1,m:'two years, so change.'}]},
'c3-lang':{type:'choice',level:'Supported',skill:'Static language',decision:'Which sentence suits the static exercise chart?',
  opts:[{t:'People aged 65 and over exercised for 7 minutes longer than those aged 50 to 64.',ok:1,why:'A comparison between groups: 31 − 24 = 7.'},{t:'Exercise increased among the over-65s.',why:'No years: nothing increased.'},{t:'Exercise peaked in 2015.',why:'There are no years on this chart.'}]},
'c3-tense':{type:'sort',level:'Supported',skill:'Verb forms',decision:'Which verb form suits each task?',cats:['Past passive','Present passive','Future passive'],
  items:[{w:'Maps of a town in 1995 and 2025',c:0,m:'past changes: was built.'},{w:'How honey is produced',c:1,m:'a process: is put into jars.'},{w:'A park now and the planned changes',c:2,m:'a plan: will be built.'},{w:'How paper is recycled',c:1,m:'a process: is collected.'},{w:'An island before and after tourism',c:0,m:'past changes: were built.'}]},
'c3-mpx':{type:'choice',level:'Independent',skill:'Maps and processes',decision:'Which sentence describes the honey diagram correctly?',prompt:'Use the honey diagram in Step 4.',
  opts:[{t:'Once the nectar has been stored in the hive, the honey is spun from the combs.',ok:1,why:'Stages in order, with the present passive.'},{t:'The honey was spun from the combs in 2020.',why:'A process has no date: use the present.'},{t:'Bees make honey because they need food.',why:'The diagram gives no reasons.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Introductions for different types',decision:'Write an introduction for each task.',prompt:'One sentence each. Then check your writing.',
  fields:[{k:'p',label:'1. The pie chart (water use)',rows:2},{k:'t',label:'2. The table (coffee prices)',rows:2},{k:'r',label:'3. The diagram (honey)',rows:2}],
  checks:[{t:'Pie: you kept the details.',fix:'Include water, the home and one country.',fn:v=>/water/i.test(v.p)&&/(home|household)/i.test(v.p)&&/country/i.test(v.p)},
          {t:'Table: you kept the years and the cities.',fix:'Include coffee, three cities, 2015 and 2025.',fn:v=>/coffee/i.test(v.t)&&/(three|3)\s+cities/i.test(v.t)&&/2015/.test(v.t)&&/2025/.test(v.t)},
          {t:'Diagram: you kept the topic.',fix:'Include honey and the idea of production.',fn:v=>/honey/i.test(v.r)&&/(produc|made|making|stages|process)/i.test(v.r)},
          {t:'You paraphrased all three.',fix:'One of your introductions copies eight or more words from its task.',fn:v=>v.p.trim()&&v.t.trim()&&v.r.trim()&&!copied(v.p,TP,8)&&!copied(v.t,TT,8)&&!copied(v.r,TR,8)}],
  modelTitle:'My model introductions',
  model:`<p>1. <button type="button" class="hl" data-n="0">The pie chart illustrates the proportion of household water that goes to five different uses</button> in a typical home in one country.</p><p>2. <button type="button" class="hl" data-n="1">The table compares what a cup of coffee cost, on average,</button> in three cities in 2015 and 2025.</p><p>3. <button type="button" class="hl" data-n="2">The diagram illustrates the four stages involved in making honey</button>, from the collection of nectar to the filling of jars.</p>`,
  notes:['“The proportion of … that goes to” suits a pie chart: shares.','“What … cost” turns the noun phrase into a clause.','For a process, count the stages and give the start and end.'],
  self:['Each introduction is one sentence.','I changed the verb and the structure.','I kept every detail.','I didn’t add any data or opinions.'],revise:1}
};

const gloss={
  'static':{term:'static',def:'Data for one point in time. You compare the figures; nothing rises or falls.',path:'M40,80 V40 H80 V80 M110,80 V20 H150 V80 M180,80 V55 H220 V80',ex:'“Teenagers exercised the most.”'},
  'dynamic':{term:'dynamic',def:'Data for two or more points in time. You describe change and compare.',path:'M20,70 L80,55 L140,40 L220,20',ex:'“Visitors to the science museum rose to 190,000.”'},
  'process diagram':{term:'process diagram',def:'A diagram that shows the stages of how something happens or is made.',path:'M30,50 H80 M100,50 H150 M170,50 H220',ex:'“The diagram illustrates how honey is produced.”'}
};

const retrieval={
 'c3-s1':[{q:'“The diagram shows the stages in making glass” is a…',opts:[{t:'process',ok:1,why:'Stages.'},{t:'map',why:'No places.'}]}],
 'c3-s2':[{q:'A pie chart with no totals: write about…',opts:[{t:'shares',ok:1,why:'Not amounts.'},{t:'amounts',why:'Not given.'}]}],
 'c3-s3':[{q:'Age groups, no years: the data is…',opts:[{t:'static',ok:1,why:'Compare.'},{t:'dynamic',why:'No time.'}]}],
 'c3-s4':[{q:'A process usually uses…',opts:[{t:'the present passive',ok:1,why:'is collected.'},{t:'the past passive',why:'That is for past maps.'}]}],
 'c3-s5':[{q:'€2.40 → €3.60 is a rise of…',opts:[{t:'a half',ok:1,why:'€1.20.'},{t:'a third',why:'That would be €0.80.'}]}]
};

const minitest=[
 {q:'How many Task 1 types are there?',opts:[{t:'Seven',ok:1,why:'Line, bar, pie, table, mixed, map, process.'},{t:'Four',why:'Seven.'},{t:'Ten',why:'Seven.'}],sp:'c3-s1'},
 {q:'Which type shows how a place changed?',opts:[{t:'Map',ok:1,why:'Places and changes.'},{t:'Process',why:'Stages.'},{t:'Pie',why:'Shares.'}],sp:'c3-s1'},
 {q:'A table needs you to…',opts:[{t:'find the pattern in exact figures',ok:1,why:'No picture to help.'},{t:'copy every figure',why:'Select.'},{t:'guess the trend',why:'Calculate it.'}],sp:'c3-s2'},
 {q:'Which suits a pie chart without totals?',opts:[{t:'just over a third of water use',ok:1,why:'A share.'},{t:'34 litres',why:'No litres given.'},{t:'more water',why:'An amount.'}],sp:'c3-s2'},
 {q:'Which chart is dynamic?',opts:[{t:'Museum visitors, 2015 to 2025',ok:1,why:'Several years.'},{t:'Exercise by age group',why:'Static.'},{t:'One pie of water use',why:'Static.'}],sp:'c3-s3'},
 {q:'Which verb suits static data?',opts:[{t:'accounted for',ok:1,why:'No change.'},{t:'rose',why:'Change.'},{t:'fell',why:'Change.'}],sp:'c3-s3'},
 {q:'A plan for a park next year uses…',opts:[{t:'will be built',ok:1,why:'Future passive.'},{t:'was built',why:'Past.'},{t:'is built',why:'Process language.'}],sp:'c3-s4'},
 {q:'How many stages are in the honey diagram?',opts:[{t:'Four',ok:1,why:'Count them.'},{t:'Three',why:'Count again.'},{t:'Six',why:'Count again.'}],sp:'c3-s5'}
];

const cannow=[['Recognise all seven task types','c3-s1'],['Say what each numerical chart asks','c3-s2'],['Tell static from dynamic data','c3-s3'],['Choose verb forms for maps and processes','c3-s4'],['Write introductions for different task types','c3-s5']];
addChapter({n:3,spreads,acts,gloss,charts:{water:C.wateruse,coffee:C.coffee,village:C.village,honey:C.honey},retrieval,minitest,cannow});
})();
