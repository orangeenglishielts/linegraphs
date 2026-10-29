/* ==========================================================================
   MODULE 1 · CHAPTER 4 · A WRITING PROCESS
   ACTIVITY IDS (type · level)
     c4-stage   sort      Guided       Step 1  Plan, write or check?
     c4-time    choice    Supported    Step 1  Sharing the 20 minutes
     c4-plan    choice    Supported    Step 2  The best plan
     c4-notes   sort      Supported    Step 2  Where does each note go?
     c4-parts   sort      Supported    Step 3  Which part?
     c4-check   fix       Supported    Step 4  The three-minute check
     c4-timer   timer     Challenge    Step 5  The clock
     c4-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 4',CT='A Writing Process',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);
const TASK='The chart below shows the percentage of households with solar panels in four regions of one country in 2010 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;

const spreads=[
opening({n:4,title:CT,lede:'Strong candidates don’t start writing the moment they see the chart. They plan, write and check, in that order, within 20 minutes. In this chapter I’ll give you a process you can use for every Task 1, and the four-part structure that goes with it.',
  outcomes:['divide 20 minutes into planning, writing and checking','make a two-minute plan in notes','use the four-part structure: introduction, overview, two body paragraphs','run a three-minute '+T('check')+' for the most common errors'],
  illus:illus('plan'),
  steps:[[1,'c4-s1','Plan, write, check','Twenty minutes, three stages','Discover'],[2,'c4-s2','Plan in two minutes','Notes, not sentences','Understand'],[3,'c4-s3','The four-part structure','What goes where','Understand'],[4,'c4-s4','Check in three minutes','The errors to look for','Practise'],[5,'c4-s5','Chapter challenge','A complete answer','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Plan, write, check',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Plan, write, check</h2>${vid({title:'Plan, write, check',len:'90 seconds',script:['Draw a 20-minute bar.','Divide it: 2 minutes to plan, 15 to write, 3 to check.','Say: the plan saves time, because you never stop to decide what comes next.','Say: the check catches the errors that cost easy marks.']})}<ul class="clean"><li><b>Plan (2 minutes):</b> read the task, find the overview, group the details, note the figures.</li><li><b>Write (15 minutes):</b> introduction, overview, two body paragraphs. Keep moving.</li><li><b>Check (3 minutes):</b> overview, accuracy, grammar, word count.</li></ul>${chart('solar')}${take('Two minutes to plan, fifteen to write, three to check.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c4-stage"></div><div data-act="c4-time" style="margin-top:16px"></div>`}),

sp('c4-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the solar chart and a blank plan with four lines.','Overview: all rose; South highest; West the biggest change.','Body 1: 2010, and the South.','Body 2: the West, then the North and the East.']})}<p>A plan is notes, not sentences. It answers three questions:</p><ul class="clean"><li>What is the overview?</li><li>How will I group the details into two paragraphs?</li><li>Which figures will I use?</li></ul><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> all four rose · South highest both years · West biggest change<br><b>Body 1:</b> 2010 low everywhere (3 to 9%) · South 9 → 38, biggest rise in points<br><b>Body 2:</b> West 3 → 27 (ninefold), overtook North and East · North 4 → 22 · East 6 → 19, lowest in 2025</div>${take('Two minutes, notes only: the overview, two groups, the figures.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c4-plan"></div><div data-act="c4-notes" style="margin-top:16px"></div>`}),

sp('c4-s3','The four-part structure',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The four-part structure</h2>${vid({title:'The four-part structure',len:'90 seconds',script:['Show four boxes.','Introduction: the task in your own words.','Overview: the main features, no figures.','Body 1 and Body 2: the details, grouped.','No conclusion: the overview does that job.']})}<ul class="clean"><li><b>Introduction:</b> one sentence that paraphrases the task.</li><li><b>Overview:</b> the main features, with no figures.</li><li><b>Body 1:</b> one group of details, with figures.</li><li><b>Body 2:</b> the other group, with figures and comparisons.</li></ul>${mistake('<s>In conclusion, solar power is becoming more popular.</s> No conclusion is needed, and “popular” is an interpretation. The overview sums up.')}${take('Introduction, overview, two body paragraphs. The same four parts every time.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c4-parts"></div>`}),

sp('c4-s4','Check in three minutes',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Check in three minutes</h2><p>In the last three minutes, look for the errors that cost the most marks:</p><ul class="clean"><li><b>Overview:</b> is it there, and free of figures?</li><li><b>Accuracy:</b> are the figures and trends right? Percentage points for changes between percentages?</li><li><b>Grammar:</b> tenses, agreement, irregular verbs.</li><li><b>Length:</b> at least 150 words.</li></ul>${insight('Count fast','Count the words in one typical line and multiply by the number of lines.')}${take('Overview, accuracy, grammar, length: the four checks.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-check"></div>`}),

sp('c4-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Use the whole process: plan for two minutes, write for fifteen and check for three. Start the clock when you’re ready.</p>${taskbox(TASK+'.<br><br>Write at least 150 words.')}${chart('solar2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-timer"></div><div data-act="c4-write" style="margin-top:16px"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Twenty minutes: two to plan, fifteen to write, three to check.','A plan is notes: the overview, two groups and the figures.','Four parts: introduction, overview, two body paragraphs. No conclusion.','Check the overview, accuracy, grammar and length.']})
];

const acts={
'c4-stage':{type:'sort',level:'Guided',skill:'The process',decision:'Plan, write or check?',cats:['Plan','Write','Check'],
  items:[{w:'Decide what the overview will say.',c:0,m:'before writing.'},{w:'Group the regions into two paragraphs.',c:0,m:'before writing.'},{w:'Write the introduction in your own words.',c:1,m:'writing.'},{w:'Look for “rised” and other verb errors.',c:2,m:'checking.'},{w:'Count your words.',c:2,m:'checking.'}]},
'c4-time':{type:'choice',level:'Supported',skill:'Timing',decision:'Which division of 20 minutes is best?',
  opts:[{t:'2 minutes planning, 15 writing, 3 checking',ok:1,why:'Every stage has time, and most goes to writing.'},{t:'20 minutes writing',why:'No plan and no check: easy marks lost.'},{t:'8 minutes planning, 12 writing',why:'Too little writing time, and no check.'}]},
'c4-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best?',
  opts:[{t:'Overview: all rose, South highest, West biggest change. Body 1: 2010 and the South. Body 2: the West, North and East.',ok:1,why:'An overview and two groups with a clear focus.'},{t:'Body 1: North and South. Body 2: East and West.',why:'No overview, and the groups have no common focus.'},{t:'Write every figure in order, then decide.',why:'That isn’t a plan.'}]},
'c4-notes':{type:'sort',level:'Supported',skill:'Planning',decision:'Where does each note go?',cats:['Overview','Body 1','Body 2'],
  items:[{w:'All four regions rose.',c:0,m:'the main pattern.'},{w:'2010: low everywhere, 3 to 9%.',c:1,m:'detail with figures.'},{w:'South 9 → 38%',c:1,m:'detail with figures.'},{w:'West 3 → 27%, ninefold',c:2,m:'detail with figures.'},{w:'East lowest in 2025 (19%)',c:2,m:'detail with figures.'}]},
'c4-parts':{type:'sort',level:'Supported',skill:'Structure',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The bar chart compares the proportion of homes fitted with solar panels in four parts of a single country.',c:0,m:'paraphrases the task.'},{w:'Overall, the proportion rose substantially in all four regions.',c:1,m:'the main feature, no figures.'},{w:'The West’s figure rose ninefold, from 3% to 27%.',c:2,m:'detail with figures.'},{w:'The South had the highest figure in both years.',c:1,m:'a main feature without figures.'},{w:'The East grew from 6% to 19%.',c:2,m:'detail with figures.'}]},
'c4-check':{type:'fix',level:'Supported',skill:'Checking',decision:'Fix the error in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The South rose by 29% between 2010 and 2025.',ok:/29 percentage points/i,bad:/by 29%/i,hint:'The figures are percentages.',err:'by 29%',fix:'by 29 percentage points',why:'A change between percentages is in percentage points.',model:'The South rose by 29 percentage points between 2010 and 2025.'},
         {wrong:'The figure for the North rised to 22%.',ok:/rose to 22/i,bad:/rised/i,hint:'“Rise” is irregular.',err:'rised',fix:'rose',why:'The past simple of rise is rose.',model:'The figure for the North rose to 22%.'},
         {wrong:'Overall, the South had 38% in 2025.',ok:/^overall,?[^0-9]*$/i,bad:/38/,hint:'Overviews have no figures.',err:'38% in 2025',fix:'the highest figure',why:'The overview describes patterns, not figures.',model:'Overall, the South had the highest figure in both years.'}]},
'c4-timer':{type:'timer',level:'Challenge',skill:'The process',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you.',
  phases:[{lab:'Plan',s:120,tip:'Overview, two groups, the figures.'},{lab:'Write',s:900,tip:'Introduction, overview, two body paragraphs.'},{lab:'Check',s:180,tip:'Overview, accuracy, grammar, length.'}]},
'c4-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'You mentioned all four regions.',fix:'Include the North, the South, the East and the West.',fn:v=>{const t=v.b1+' '+v.b2;return /north/i.test(t)&&/south/i.test(t)&&/east/i.test(t)&&/west/i.test(t)}},
          {t:'You used percentage points, not per cent, for a change.',fix:'A change between percentages is in percentage points.',fn:v=>!/\b(rose|increased|grew|fell) by \d+\s?%/i.test(v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span><button type="button" class="hl" data-n="0">The bar chart compares the proportion of homes fitted with solar panels in four parts of a single country</button> in 2010 and 2025.</p><p><span class="plabel">Overview</span>Overall, the proportion of households with solar panels rose substantially in all four regions, and the South had the highest figure in both years. <button type="button" class="hl" data-n="1">The most dramatic growth was in the West, which moved from last place to second.</button></p><p><span class="plabel">Body 1</span>In 2010, solar panels were rare everywhere, with figures ranging from just 3% in the West to 9% in the South. By 2025, the South still had the highest proportion, at 38%, <button type="button" class="hl" data-n="2">an increase of 29 percentage points</button>, the largest rise of any region.</p><p><span class="plabel">Body 2</span>The West saw the most striking change. <button type="button" class="hl" data-n="3">Its figure rose ninefold, from 3% to 27%</button>, so that it overtook both the North and the East. These two regions grew more modestly, the North from 4% to 22% and the East from 6% to 19%, which left the East with the lowest figure in 2025.</p>`,
  notes:['A new structure and new words: “homes fitted with”, “four parts of a single country”.','A key feature in the overview: a change of position, without figures.','Percentage points for the change between two percentages.','A ratio: 27 ÷ 3 = 9.'],
  self:['I planned for about two minutes.','My answer has all four parts.','I used percentage points for changes.','I checked the overview, accuracy, grammar and length.'],revise:1}
};

const gloss={
  'check':{term:'check',def:'The last three minutes: the overview, accuracy, grammar and length.',path:'M60,50 L100,80 L180,20',ex:'“In the check, look for missing percentage points.”'},
  'percentage points':{term:'percentage points',def:'The difference between two percentages. From 9% to 38% is a rise of 29 percentage points.',path:'M60,80 V60 H100 V80 M140,80 V20 H180 V80',ex:'“The South rose by 29 percentage points.”'},
  'ninefold':{term:'ninefold',def:'Nine times as much. 3% to 27% is a ninefold increase.',path:'M30,80 H60 V75 M90,80 H120 V20',ex:'“The West’s figure rose ninefold.”'}
};

const retrieval={
 'c4-s1':[{q:'How long for the check?',opts:[{t:'About 3 minutes',ok:1,why:'2 + 15 + 3 = 20.'},{t:'No time',why:'Always check.'}]}],
 'c4-s2':[{q:'A plan is written in…',opts:[{t:'notes',ok:1,why:'Fast.'},{t:'full sentences',why:'Too slow.'}]}],
 'c4-s3':[{q:'Does Task 1 need a conclusion?',opts:[{t:'No',ok:1,why:'The overview sums up.'},{t:'Yes',why:'Four parts only.'}]}],
 'c4-s4':[{q:'4% → 22% is a rise of…',opts:[{t:'18 percentage points',ok:1,why:'22 − 4.'},{t:'18%',why:'Use percentage points.'}]}],
 'c4-s5':[{q:'Which region had the lowest figure in 2025?',opts:[{t:'The East',ok:1,why:'19%.'},{t:'The West',why:'27%.'}]}]
};

const minitest=[
 {q:'How should you divide 20 minutes?',opts:[{t:'2 plan, 15 write, 3 check',ok:1,why:'Balanced.'},{t:'20 write',why:'No plan or check.'},{t:'10 plan, 10 write',why:'Too little writing.'}],sp:'c4-s1'},
 {q:'Why plan?',opts:[{t:'So you never stop to decide what comes next',ok:1,why:'It saves time.'},{t:'The examiner reads it',why:'Plans aren’t marked.'},{t:'To use more words',why:'No.'}],sp:'c4-s1'},
 {q:'What does a plan include?',opts:[{t:'The overview, two groups, the figures',ok:1,why:'Three questions.'},{t:'A full draft',why:'Too slow.'},{t:'Only the introduction',why:'Plan the whole answer.'}],sp:'c4-s2'},
 {q:'Which part has no figures?',opts:[{t:'The overview',ok:1,why:'Patterns only.'},{t:'Body 1',why:'Needs figures.'},{t:'Body 2',why:'Needs figures.'}],sp:'c4-s3'},
 {q:'How many body paragraphs, usually?',opts:[{t:'Two',ok:1,why:'Two groups.'},{t:'One',why:'Too long.'},{t:'Five',why:'Too many.'}],sp:'c4-s3'},
 {q:'Which is an accuracy check?',opts:[{t:'Are the figures and trends right?',ok:1,why:'Task Achievement.'},{t:'Is my handwriting nice?',why:'Not a criterion.'},{t:'Did I give my opinion?',why:'You shouldn’t.'}],sp:'c4-s4'},
 {q:'Choose the correct sentence.',opts:[{t:'The figure rose by 18 percentage points.',ok:1,why:'Points.'},{t:'The figure rised by 18%.',why:'Two errors.'},{t:'The figure rose by 18%.',why:'Use percentage points.'}],sp:'c4-s4'},
 {q:'3% to 27% is…',opts:[{t:'a ninefold increase',ok:1,why:'27 ÷ 3.'},{t:'a threefold increase',why:'That would be 9%.'},{t:'a rise of 24%',why:'24 percentage points.'}],sp:'c4-s5'}
];

const cannow=[['Divide 20 minutes into plan, write and check','c4-s1'],['Make a two-minute plan','c4-s2'],['Use the four-part structure','c4-s3'],['Run a three-minute check','c4-s4'],['Write a complete answer using the process','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{solar:C.solar,solar2:Object.assign({},C.solar,{id:'ch-f1solar2'})},retrieval,minitest,cannow});
})();
