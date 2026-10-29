/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 4 · OVERVIEWS FOR MAPS AND PROCESSES
   ACTIVITY IDS (type · level)
     c4-chg     sort      Guided       Step 1  Changed or not?
     c4-mapov   choice    Supported    Step 2  The best map overview
     c4-mapbin  binary    Supported    Step 2  Overview or body?
     c4-proc1..2 choice   Supported    Step 3  Read the process
     c4-build   builder   Supported    Step 4  A process overview
     c4-fix     fix       Independent  Step 4  Overview, not stage
     c4-write   write     Independent  Step 5  Two overviews
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C}=OV;
const P='Chapter 4',CT='Overviews for Maps and Processes',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><rect x="20" y="20" width="160" height="110" rx="8" fill="#F6F2E8" stroke="#E4DED1"/><path d="M20,100 C80,90 120,110 180,96 L180,130 L20,130 Z" fill="#B9D8E6"/><rect x="45" y="40" width="40" height="28" fill="#FBE6CF" stroke="#292929"/><rect x="100" y="40" width="50" height="28" fill="#F8D9BF" stroke="#292929"/>${[0,1,2,3].map(i=>`<rect x="${215+i*44}" y="55" width="34" height="34" rx="8" fill="#fff" stroke="#CFC6B4" stroke-width="2"/><circle cx="${222+i*44}" cy="62" r="6" fill="#F88B48"/>`).join('')}${[0,1,2].map(i=>`<path d="M${250+i*44},72 H${258+i*44}" stroke="#F88B48" stroke-width="2.5"/>`).join('')}</svg>`;

const spreads=[
opening({n:4,title:CT,lede:'Maps and process diagrams have no figures, so the overview can’t be about the highest or lowest. Instead, a map overview describes the general change and what stayed the same, and a process overview gives the shape of the whole process. In this chapter I’ll show you both.',
  outcomes:['answer three questions for a map overview: what changed, where, and what stayed the same',`describe a general change with “${T('transformed from … into')}”`,'answer four questions for a process overview: how many stages, the start, the end, and the kind of process','keep individual stages out of the overview'],
  illus:ill,
  steps:[[1,'c4-s1','Map overviews','Three questions','Discover'],[2,'c4-s2','The language of change','Transformed from … into','Understand'],[3,'c4-s3','Process overviews','Four questions','Understand'],[4,'c4-s4','Overview, not stage','The shape of the process','Practise'],[5,'c4-s5','Chapter challenge','A map and a process','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Map overviews',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Map overviews</h2>${vid({title:'Map overviews',len:'2 minutes',script:['Show Harbourside in 1990 and 2025.','Ask: what was the area for in 1990? Fishing and freight. In 2025? Leisure and tourism.','Ask: what stayed the same? The coast road and the lighthouse.','Say: general change plus what stayed the same is your map overview.']})}<p>A map overview answers three questions:</p><ul class="clean"><li><b>What was the general change?</b> What kind of place was it, and what kind of place did it become?</li><li><b>Where did most change happen?</b></li><li><b>What stayed the same?</b></li></ul>${chart('hb90')}${chart('hb25')}${take('Map overview: the general change, where it happened, and what stayed the same.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two maps on the left page.</p><div data-act="c4-chg"></div>`}),

sp('c4-s2','The language of change',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The language of change</h2>${vid({title:'The language of change',len:'90 seconds',script:['List the changes: fish market to restaurant, warehouses to a hotel and flats, car park to a square, jetty to marina, railway to cycle path.','Ask: what do they have in common? Work became leisure.','Say it in one phrase: transformed from a working harbour into a leisure area.']})}<p>Look for what the changes have in common, then name it:</p><ul class="clean"><li><b>was ${T('transformed from … into')}:</b> <i>the harbour was transformed from a working port into a leisure and tourist area.</i></li><li><b>became more / less…:</b> <i>the area became far less industrial.</i></li><li><b>remained unchanged:</b> <i>the coast road and the lighthouse remained unchanged.</i></li></ul>${insight('Overview','Overall, Harbourside was transformed from a working harbour into an area for leisure and tourism, with every working site given a new use. Only the coast road and the lighthouse remained unchanged.')}${mistake('<s>Overall, the fish market was converted into a restaurant.</s> One change is a detail. The overview names the pattern.')}${take('Name what the changes have in common, then add what stayed the same.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c4-mapov"></div><div data-act="c4-mapbin" style="margin-top:16px"></div>`}),

sp('c4-s3','Process overviews',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Process overviews</h2>${vid({title:'Process overviews',len:'90 seconds',script:['Show the cheese diagram. Count the stages: eight.','Find the start and the end: milk collected; packaged and sold.','Is it linear or a cycle? Linear. Natural or man-made? Man-made.','Say: those four answers are your process overview.']})}<p>A process overview answers four questions:</p><ul class="clean"><li><b>How many stages?</b></li><li><b>What is the first stage, and the last?</b></li><li><b>Is it ${T('linear')} or a cycle?</b></li><li><b>Is it natural or man-made?</b></li></ul>${chart('cheese')}${take('Process overview: the number of stages, the start, the end, and the kind of process.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the diagram on the left page.</p><div data-act="c4-proc1"></div><div data-act="c4-proc2" style="margin-top:14px"></div>`}),

sp('c4-s4','Overview, not stage',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Overview, not stage</h2><p>The overview gives the shape of the whole process. It doesn’t describe any one stage in detail.</p>${insight('Overview','Overall, cheese-making is a linear, man-made process of eight stages, beginning with the collection of milk from farms and ending with the packaging and sale of the cheese. Before it is sold, the cheese is left to mature for six months.')}${mistake('<s>Overall, first the milk is collected, and then it is heated to 32°C.</s> That is the start of the body: individual stages with detail.')}${note('A stage that stands out, such as a long maturing period, can go in the overview as one general phrase.')}<div class="clear"></div>${take('Count, start, end, kind; perhaps one stage that stands out. No step-by-step detail.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-build"></div><div data-gate="c4-build" hidden style="margin-top:16px"><div data-act="c4-fix"></div></div>`}),

sp('c4-s5','Chapter challenge: a map and a process',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview for each task. Try not to look back at my overviews.</p>${taskbox('Task A: The maps below show the Harbourside area of a town in 1990 and 2025.')}${taskbox('Task B: The diagram below shows how cheese is made.')}<p class="small">Use the maps in Step 1 and the diagram in Step 3.</p>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['A map overview: the general change, where it happened, and what stayed the same.','Name what the changes have in common: transformed from … into.','A process overview: the number of stages, the start, the end, and the kind of process.','Keep individual stages out of the overview.']})
];

const acts={
'c4-chg':{type:'sort',level:'Guided',skill:'Spotting change',decision:'Did each feature change between 1990 and 2025?',cats:['Changed','Stayed the same'],
  items:[{w:'The fish market',c:0,m:'now a restaurant.'},{w:'The lighthouse',c:1,m:'unchanged.'},{w:'The warehouses',c:0,m:'now a hotel and flats.'},{w:'The coast road',c:1,m:'unchanged.'},{w:'The car park',c:0,m:'now a public square.'},{w:'The freight railway',c:0,m:'now a cycle path.'}]},
'c4-mapov':{type:'choice',level:'Supported',skill:'Map overviews',decision:'Which is the best overview of the Harbourside maps?',
  opts:[{t:'Overall, Harbourside was transformed from a working harbour into an area for leisure and tourism, while the coast road and the lighthouse remained unchanged.',ok:1,why:'The general change and what stayed the same.'},{t:'Overall, the car park was replaced by a public square.',why:'One change: a detail.'},{t:'Overall, Harbourside is now a much nicer place to visit.',why:'An opinion, and present tense.'}]},
'c4-mapbin':{type:'binary',level:'Supported',skill:'Overview or body',decision:'Overview or body paragraph?',labels:['Overview','Body'],
  items:[{t:'The area became far less industrial.',a:0,right:'The pattern behind all the changes.',wrong:'This sums up the changes: overview.'},
         {t:'The jetty was extended to form a marina.',a:1,right:'One change: body.',wrong:'One specific change: body.'},
         {t:'Only the coast road and the lighthouse remained unchanged.',a:0,right:'What stayed the same is big picture.',wrong:'Unchanged features belong in the overview.'},
         {t:'The freight railway was turned into a cycle path.',a:1,right:'One change: body.',wrong:'One specific change: body.'}]},
'c4-proc1':{type:'choice',level:'Supported',skill:'Counting stages',decision:'How many stages does the cheese process have?',
  opts:[{t:'Eight',ok:1,why:'From collecting the milk to selling the cheese.'},{t:'Six',why:'Count again, including the first and last.'},{t:'Ten',why:'Count the numbered boxes.'}]},
'c4-proc2':{type:'choice',level:'Supported',skill:'Kind of process',decision:'Which description is accurate?',
  opts:[{t:'A man-made, linear process',ok:1,why:'People make cheese, and the process ends with selling it.'},{t:'A natural cycle',why:'It is man-made, and it doesn’t return to the start.'},{t:'A man-made cycle',why:'The arrows stop at “packaged and sold”.'}]},
'c4-build':{type:'builder',level:'Supported',skill:'Process overviews',decision:'Build a process overview sentence.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall, cheese-making is','a linear process of eight stages,','beginning with the collection of milk','and ending with the packaging','and sale of the cheese.'],
  distract:[{t:'heated to 32°C,',why:'One stage’s detail: body.',fix:'a linear process of eight stages,'},{t:'a natural cycle,',why:'It is man-made and linear.',fix:'a linear process of eight stages,'}],
  right:'The kind of process, the number of stages, the start and the end.',orderMsg:'All the right pieces, but check the order: the kind and number, the start, then the end.',incompleteMsg:'Good so far, but incomplete. Add the end of the process.'},
'c4-fix':{type:'fix',level:'Independent',skill:'Overview, not stage',decision:'Rewrite each sentence as an overview sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Overall, first the milk is collected, and then it is heated to 32°C.',ok:/(eight|8)[\s-]+(\w+\s+)?(stages?|steps?)/i,bad:/32/,hint:'Give the shape of the process: how many stages, start and end.',err:'first … heated to 32°C',fix:'a process of eight stages, from … to …',why:'Individual stages and temperatures belong in the body.',model:'Overall, cheese-making has eight stages, from collecting the milk to selling the cheese.'},
         {wrong:'Overall, the curds are pressed into moulds and left for six months.',ok:/matur/i,bad:/pressed into moulds/i,hint:'If you mention a stage in the overview, keep only the point that stands out.',err:'pressed into moulds and left for six months',fix:'the cheese is left to mature before it is sold',why:'One general point about a stage, not a list of steps.',model:'Overall, the cheese is left to mature for a long period before it is sold.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Map and process overviews',decision:'Write an overview for each task.',prompt:'Then check your writing.',
  fields:[{k:'map',label:'Task A: map overview',rows:4,ph:'Overall, Harbourside…'},{k:'proc',label:'Task B: process overview',rows:4,ph:'Overall, cheese-making…'}],
  checks:[{t:'Both overviews start with “Overall,” or similar.',fix:'Start each overview with “Overall,”.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.map)&&/^\s*(overall|in general|it is clear)/i.test(v.proc)},
          {t:'Your map overview gives the general change.',fix:'Say what kind of area it became: industrial to leisure or tourism.',fn:v=>/(leisure|touris|industr|working|transform)/i.test(v.map)},
          {t:'Your map overview says what stayed the same.',fix:'Add the coast road and the lighthouse.',fn:v=>/(remain|unchanged|same|still)/i.test(v.map)},
          {t:'Your process overview gives the number of stages.',fix:'Say how many stages there are: eight.',fn:v=>/\b(eight|8)[\s-]+(\w+\s+)?(stages?|steps?)\b/i.test(v.proc)},
          {t:'Your process overview gives the start and the end.',fix:'Name the first stage (milk collected) and the last (packaged and sold).',fn:v=>/milk/i.test(v.proc)&&/(packag|sold|sale)/i.test(v.proc)},
          {t:'No step-by-step detail in the process overview.',fix:'Remove the temperature and other stage details.',fn:v=>!/32/.test(v.proc)}],
  modelTitle:'My model overviews',
  model:`<p><span class="plabel">Task A</span><button type="button" class="hl" data-n="0">Overall, Harbourside was transformed from a working harbour into an area for leisure and tourism</button>, with every working site given a new use. <button type="button" class="hl" data-n="1">Only the coast road and the lighthouse remained unchanged.</button></p><p><span class="plabel">Task B</span><button type="button" class="hl" data-n="2">Overall, cheese-making is a linear, man-made process of eight stages</button>, beginning with the collection of milk from farms and ending with the packaging and sale of the cheese. <button type="button" class="hl" data-n="3">Before it is sold, the cheese is left to mature for six months.</button></p>`,
  notes:['What the changes have in common.','What stayed the same completes the big picture.','The kind of process and the number of stages.','One stage that stands out, described in a single phrase.'],
  self:['My map overview gives the general change and what stayed the same.','My process overview gives the number of stages, the start and the end.','I said whether the process is linear or a cycle.','Neither overview describes individual changes or stages in detail.'],revise:1}
};

const gloss={
  'transformed from … into':{term:'transformed from … into',def:'Completely changed from one kind of place into another. Ideal for the general change in a map overview.',path:'M20,60 L110,60 M130,30 L220,30 M110,60 L130,30',ex:'“Harbourside was transformed from a working harbour into a leisure area.”'},
  'linear':{term:'linear',def:'Going in one direction, from a clear start to a clear end.',path:'M20,45 H200 M192,38 L202,45 L192,52',ex:'“Cheese-making is a linear process.”'},
  'curds':{term:'curds',def:'The soft, solid part that forms when milk thickens in cheese-making. The liquid left over is whey.',path:'M40,60 C40,40 80,40 80,60 Z M100,60 C100,40 140,40 140,60 Z',ex:'“The curds are cut into pieces.”'}
};

const retrieval={
 'c4-s1':[{q:'A map overview answers…',opts:[{t:'what changed, where, and what stayed the same',ok:1,why:'Three questions.'},{t:'which building was biggest',why:'A detail.'}]}],
 'c4-s2':[{q:'Which phrase names a general change?',opts:[{t:'was transformed from … into',ok:1,why:'The whole area.'},{t:'was converted into',why:'Usually one building.'}]}],
 'c4-s3':[{q:'Which question belongs in a process overview?',opts:[{t:'How many stages are there?',ok:1,why:'The shape of the process.'},{t:'What temperature is used?',why:'A detail.'}]}],
 'c4-s4':[{q:'Can one stage appear in the overview?',opts:[{t:'Yes, as a general point',ok:1,why:'For example, a long maturing period.'},{t:'Yes, with all its details',why:'Details go in the body.'}]}],
 'c4-s5':[{q:'What stayed the same at Harbourside?',opts:[{t:'The coast road and the lighthouse',ok:1,why:'Unchanged.'},{t:'The jetty',why:'It became a marina.'}]}]
};

const minitest=[
 {q:'What does a map overview describe?',opts:[{t:'The general change and what stayed the same',ok:1,why:'The big picture.'},{t:'Every change in order',why:'That is the body.'},{t:'Whether the changes were good',why:'No opinions.'}],sp:'c4-s1'},
 {q:'Which feature changed at Harbourside?',opts:[{t:'The car park',ok:1,why:'Now a public square.'},{t:'The lighthouse',why:'Unchanged.'},{t:'The coast road',why:'Unchanged.'}],sp:'c4-s1'},
 {q:'Which is an overview sentence?',opts:[{t:'Overall, the area became far less industrial.',ok:1,why:'A pattern.'},{t:'The jetty became a marina.',why:'A detail.'},{t:'The area is better now.',why:'An opinion.'}],sp:'c4-s2'},
 {q:'“Only the coast road and the lighthouse remained unchanged.” Where does it go?',opts:[{t:'The overview',ok:1,why:'What stayed the same.'},{t:'The introduction',why:'No.'},{t:'Nowhere',why:'It matters.'}],sp:'c4-s2'},
 {q:'What are the four questions for a process overview?',opts:[{t:'How many stages, start, end, kind',ok:1,why:'The shape.'},{t:'Temperatures, times, places, costs',why:'Details.'},{t:'Who, why, when, where',why:'Not from the diagram.'}],sp:'c4-s3'},
 {q:'The cheese process is…',opts:[{t:'linear and man-made',ok:1,why:'It ends; people do it.'},{t:'a natural cycle',why:'Neither.'},{t:'a man-made cycle',why:'It ends with selling.'}],sp:'c4-s3'},
 {q:'Which is an overview sentence for a process?',opts:[{t:'Overall, the process has eight stages, from collecting milk to selling cheese.',ok:1,why:'Count, start, end.'},{t:'First, the milk is collected.',why:'A stage: body.'},{t:'The milk is heated to 32°C.',why:'A detail.'}],sp:'c4-s4'},
 {q:'Which stage has a length of time given?',opts:[{t:'Maturing (six months)',ok:1,why:'The only stage with a time.'},{t:'Heating',why:'A temperature, not a time.'},{t:'Packaging',why:'No time shown.'}],sp:'c4-s5'}
];

const cannow=[['Answer three questions for a map overview','c4-s1'],['Describe a general change with “transformed from … into”','c4-s2'],['Answer four questions for a process overview','c4-s3'],['Keep individual stages out of the overview','c4-s4'],['Write overviews for a map and a process','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{hb90:C.hb90,hb25:C.hb25,cheese:C.cheese},retrieval,minitest,cannow});
})();
