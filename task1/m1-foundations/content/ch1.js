/* ==========================================================================
   MODULE 1 · CHAPTER 1 · WHAT TASK 1 ASKS
   ACTIVITY IDS (type · level)
     c1-facts   binary    Guided       Step 1  True or false?
     c1-verbs   sort      Supported    Step 2  Select, describe or compare?
     c1-cmp     choice    Supported    Step 2  A real comparison
     c1-scope   binary    Supported    Step 3  Include or leave out?
     c1-why     choice    Supported    Step 3  Why not?
     c1-keys    sort      Supported    Step 4  Key feature or detail?
     c1-best    choice    Independent  Step 4  The best selection
     c1-write   write     Independent  Step 5  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 1',CT='What Task 1 Asks',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The chart below shows the average number of minutes per day that people in five age groups in one country spent exercising';

const spreads=[
opening({n:1,title:CT,lede:'Before you can write a strong Task 1 answer, you need to know exactly what the examiner is looking for. Many candidates lose marks not because their English is weak, but because they misread the task: they explain, give opinions or list every number. In this chapter I’ll show you what Task 1 really asks.',
  outcomes:['state the time, the length and the format of Academic Task 1','explain the three things every answer does: '+T('summarise')+', report and compare','recognise what doesn’t belong: opinions, reasons and guesses','choose the key features of a simple chart'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('clock'),
  steps:[[1,'c1-s1','Meet the task','Time, length, format','Discover'],[2,'c1-s2','Three jobs','Summarise, report, compare','Understand'],[3,'c1-s3','What doesn’t belong','Opinions, reasons, guesses','Understand'],[4,'c1-s4','Key features','What a reader must know','Practise'],[5,'c1-s5','Chapter challenge','Your first overview','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Task 1 describes. It never asks you to explain or give an opinion.','summarise','Summarise the main features of the chart')}),

sp('c1-s1','Meet the task',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Meet the task</h2>${vid({title:'Meet the task',len:'90 seconds',script:['Show a Task 1 question paper: the instruction, the chart, the word count.','Say: 60 minutes for both writing tasks. Task 1 should take about 20.','Point to “at least 150 words”: a minimum, not a target to hit exactly.','Read the last line: summarise, select, report, compare.']})}<p>In IELTS Academic Writing you have <b>60 minutes</b> for two tasks. Task 1 should take about <b>20 minutes</b>, because Task 2 is worth twice as much.</p><ul class="clean"><li><b>Length:</b> at least 150 words. Most strong answers are 160 to 190.</li><li><b>Input:</b> one or more visuals: a graph, chart, table, map or diagram.</li><li><b>Output:</b> a factual, formal description. No title, no bullet points, no conclusion.</li></ul>${taskbox(TASK+'.<br><br>Write at least 150 words.')}${chart('exer')}${take('About 20 minutes, at least 150 words, a formal description of the visual in paragraphs.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-facts"></div>`}),

sp('c1-s2','Three jobs',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Three jobs</h2>${vid({title:'Three jobs',len:'2 minutes',script:['Read the last line of every task: summarise the information by selecting and reporting the main features, and make comparisons where relevant.','Underline three jobs: select, report, compare.','Show one sentence for each job about the exercise chart.']})}<p>The last line of every task tells you what to do:</p><ul class="clean"><li><b>Select:</b> choose the main features. You don’t need every figure.</li><li><b>Report:</b> describe them accurately, with figures as evidence.</li><li><b>Compare:</b> show how the figures relate to each other.</li></ul>${insight('All three in one sentence','Teenagers were the most active group, exercising for 52 minutes a day, more than twice as long as people aged 50 to 64 (24 minutes).')}${take('Select, report, compare. A sentence that only lists a figure does one job out of three.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c1-verbs"></div><div data-act="c1-cmp" style="margin-top:16px"></div>`}),

sp('c1-s3','What doesn’t belong',{
 left:`${head('Step 3 · Understand','Learn')}<h2>What doesn’t belong</h2><p>Task 1 tests how well you describe what you can see. Three things are never asked for:</p><ul class="clean"><li><b>Opinions:</b> <s>It is worrying that older people exercise so little.</s></li><li><b>Reasons:</b> <s>Teenagers exercise more because they play sport at school.</s></li><li><b>Guesses:</b> <s>Exercise levels will probably fall in the future.</s> (Unless the chart shows a projection.)</li></ul>${mistake('<s>In my opinion, everyone should exercise for an hour a day.</s> This belongs in a Task 2 essay, not in Task 1.')}${note('If the chart doesn’t show it, don’t write it. Ask yourself: where on the chart is this?')}<div class="clear"></div>${take('Describe only what the visual shows. No opinions, no reasons, no guesses.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c1-scope"></div><div data-act="c1-why" style="margin-top:16px"></div>`}),

sp('c1-s4','Key features',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Key features</h2><p>A ${T('key feature')} is something a reader must know to understand the chart. For a simple bar chart, look for:</p><ul class="clean"><li>the highest and the lowest figures,</li><li>the general pattern,</li><li>any exception to the pattern.</li></ul>${insight('The exercise chart','Highest: 13 to 17 (52 minutes). Lowest: 50 to 64 (24 minutes). Pattern: exercise generally fell with age. Exception: the over-65s (31 minutes) exercised more than the two groups below them in age.')}${take('Highest, lowest, pattern, exception. These are your key features.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c1-keys"></div><div data-act="c1-best" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: your first overview',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an introduction and an overview for this task.</p>${taskbox(TASK+'.')}${chart('exer2')}${note('The introduction says what the chart shows, in your own words. The overview gives the pattern and the exception, with no figures.')}<div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Task 1 takes about 20 minutes and needs at least 150 words, in paragraphs.','Every answer selects, reports and compares.','No opinions, no reasons and no guesses: describe only what the visual shows.','Key features: the highest, the lowest, the pattern and any exception.']})
];

const acts={
'c1-facts':{type:'binary',level:'Guided',skill:'The exam format',decision:'True or false?',labels:['True','False'],
  items:[{t:'You should spend about 20 minutes on Task 1.',a:0,right:'Task 2 needs the other 40.',wrong:'It is true: about 20 minutes, because Task 2 is worth twice as much.'},
         {t:'Task 1 answers must be exactly 150 words.',a:1,right:'Right. 150 is the minimum; most strong answers are longer.',wrong:'150 is a minimum, not an exact target.'},
         {t:'You should give your answer a title.',a:1,right:'Right. No title: start with your introduction.',wrong:'There is no title in a Task 1 answer.'},
         {t:'Task 2 is worth twice as much as Task 1.',a:0,right:'So give Task 2 more time.',wrong:'It is true: Task 2 carries twice the weight.'},
         {t:'You can use bullet points if they are clear.',a:1,right:'Right. Write in paragraphs.',wrong:'Bullet points are not acceptable: write in paragraphs.'}]},
'c1-verbs':{type:'sort',level:'Supported',skill:'The three jobs',decision:'Which job does each sentence mainly do?',cats:['Select','Report','Compare'],
  items:[{w:'The most striking feature is the high figure for teenagers.',c:0,m:'it chooses what matters.'},{w:'People aged 30 to 49 exercised for 27 minutes a day.',c:1,m:'it reports a figure accurately.'},{w:'The over-65s exercised for longer than people aged 50 to 64.',c:2,m:'it relates two figures.'},{w:'The two middle-aged groups are worth describing together.',c:0,m:'it decides how to group information.'},{w:'Teenagers exercised more than twice as long as the 50 to 64 group.',c:2,m:'it relates two figures with a calculation.'}]},
'c1-cmp':{type:'choice',level:'Supported',skill:'Comparing',decision:'Which sentence makes an accurate comparison?',
  opts:[{t:'People aged 18 to 29 exercised for 38 minutes, 14 minutes less than teenagers.',ok:1,why:'52 − 38 = 14: a calculated, accurate comparison.'},{t:'People aged 18 to 29 exercised for 38 minutes.',why:'Accurate, but it reports without comparing.'},{t:'People aged 18 to 29 exercised twice as long as teenagers.',why:'Inaccurate: they exercised less than teenagers.'}]},
'c1-scope':{type:'binary',level:'Supported',skill:'What belongs',decision:'Include it in a Task 1 answer, or leave it out?',labels:['Include','Leave out'],
  items:[{t:'People aged 50 to 64 exercised the least, at 24 minutes a day.',a:0,right:'A key feature from the chart.',wrong:'This is a fact from the chart: include it.'},
         {t:'Older people probably have less free time.',a:1,right:'Right. A guess about the reason.',wrong:'The chart gives no reasons. Leave it out.'},
         {t:'This is a serious problem for public health.',a:1,right:'Right. An opinion.',wrong:'An opinion: Task 1 doesn’t ask for one.'},
         {t:'Exercise generally decreased with age.',a:0,right:'The general pattern.',wrong:'This is the pattern on the chart: include it.'}]},
'c1-why':{type:'choice',level:'Supported',skill:'What belongs',decision:'Why should you leave out “Teenagers exercise more because of school sport”?',
  opts:[{t:'The chart doesn’t show the reason, so it isn’t a description.',ok:1,why:'Task 1 describes what the visual shows.'},{t:'It is grammatically wrong.',why:'The grammar is fine; the problem is the content.'},{t:'It is too short.',why:'Length isn’t the problem.'}]},
'c1-keys':{type:'sort',level:'Supported',skill:'Key features',decision:'Key feature or minor detail?',cats:['Key feature','Minor detail'],
  items:[{w:'Teenagers exercised the most.',c:0,m:'the highest figure.'},{w:'The 30 to 49 group exercised for 27 minutes.',c:1,m:'a middle figure.'},{w:'Exercise generally fell with age.',c:0,m:'the pattern.'},{w:'The over-65s broke the pattern.',c:0,m:'the exception.'},{w:'The 50 to 64 group exercised 3 minutes less than the 30 to 49 group.',c:1,m:'a small difference between middle groups.'}]},
'c1-best':{type:'choice',level:'Independent',skill:'Selecting',decision:'Which plan selects best?',
  opts:[{t:'The general fall with age, the highest group, the lowest group and the rise for the over-65s.',ok:1,why:'Pattern, extremes and the exception.'},{t:'All five figures, from the youngest to the oldest.',why:'This is a list, not a selection.'},{t:'The 18 to 29 group and the 30 to 49 group.',why:'Two middle figures miss the key features.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction gives the topic, the groups and the place.',fix:'Include exercise, the age groups and “one country”.',fn:v=>/exercis/i.test(v.intro)&&/(age|group)/i.test(v.intro)&&/country/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview gives the general pattern.',fix:'Say how exercise changed with age.',fn:v=>/(age|older|younger|youngest|oldest)/i.test(v.ov)},
          {t:'Your overview has no opinions or reasons.',fix:'Remove words like “because”, “should” or “worrying”.',fn:v=>!/\b(because|should|worrying|unfortunately|sadly|probably)\b/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The bar chart compares the daily exercise time of five age groups in one country, on average.</button></p><p><button type="button" class="hl" data-n="1">Overall, the amount of time spent exercising generally fell with age</button>, from teenagers, who were the most active, to the second-oldest group, who exercised the least. <button type="button" class="hl" data-n="2">However, the oldest group was more active than the two groups immediately younger than it.</button></p>`,
  notes:['A new structure (the daily exercise time of five age groups) keeps the meaning without copying.','The pattern, with the highest and lowest groups described in words.','The exception: 31 minutes is more than 27 and 24.'],
  self:['My introduction is in my own words.','My overview gives the pattern and the exception.','My overview has no figures.','I gave no opinions or reasons.'],revise:1}
};

const gloss={
  'summarise':{term:'summarise',def:'Give the main points briefly, without every detail.',path:'M20,70 L80,50 L140,40 L220,20',ex:'“Summarise the information by selecting the main features.”'},
  'key feature':{term:'key feature',def:'Something a reader must know to understand the visual: the highest, the lowest, the main pattern, an exception.',path:'M20,70 L80,30 L140,60 L220,20',ex:'“The highest figure is a key feature.”'},
  'formal':{term:'formal',def:'Suitable for academic writing: no contractions, no slang, no personal comments.',path:'M30,30 H210 M30,50 H190 M30,70 H200',ex:'“Write did not, not didn’t.”'}
};

const retrieval={
 'c1-s1':[{q:'How long should you spend on Task 1?',opts:[{t:'About 20 minutes',ok:1,why:'Task 2 needs 40.'},{t:'About 40 minutes',why:'That is Task 2.'}]}],
 'c1-s2':[{q:'Which job does “more than twice as long as” do?',opts:[{t:'Compare',ok:1,why:'It relates two figures.'},{t:'Select',why:'It compares.'}]}],
 'c1-s3':[{q:'“Teenagers exercise more because of school.” Include it?',opts:[{t:'No: it gives a reason',ok:1,why:'The chart shows no reasons.'},{t:'Yes',why:'Reasons don’t belong.'}]}],
 'c1-s4':[{q:'Which is a key feature?',opts:[{t:'The lowest figure',ok:1,why:'An extreme.'},{t:'A middle figure',why:'Usually a detail.'}]}],
 'c1-s5':[{q:'Does the overview need figures?',opts:[{t:'No',ok:1,why:'Patterns in words.'},{t:'Yes',why:'Figures go in the body.'}]}]
};

const minitest=[
 {q:'What is the minimum length for Task 1?',opts:[{t:'150 words',ok:1,why:'A minimum.'},{t:'250 words',why:'That is Task 2.'},{t:'100 words',why:'Too short.'}],sp:'c1-s1'},
 {q:'Which is part of a Task 1 answer?',opts:[{t:'Paragraphs',ok:1,why:'Always paragraphs.'},{t:'A title',why:'No title.'},{t:'Bullet points',why:'Never.'}],sp:'c1-s1'},
 {q:'Which three jobs does the task ask for?',opts:[{t:'Select, report, compare',ok:1,why:'The last line of every task.'},{t:'Explain, predict, recommend',why:'Not in Task 1.'},{t:'List, copy, conclude',why:'No.'}],sp:'c1-s2'},
 {q:'“Teenagers exercised for 52 minutes.” What is missing?',opts:[{t:'A comparison',ok:1,why:'Relate it to another figure.'},{t:'An opinion',why:'Never.'},{t:'A reason',why:'Never.'}],sp:'c1-s2'},
 {q:'Which sentence belongs in Task 1?',opts:[{t:'The over-65s exercised more than the 50 to 64 group.',ok:1,why:'A comparison from the chart.'},{t:'Older people should exercise more.',why:'An opinion.'},{t:'Retired people have more free time.',why:'A reason.'}],sp:'c1-s3'},
 {q:'When can you write about the future?',opts:[{t:'Only when the visual shows a projection',ok:1,why:'Otherwise it is a guess.'},{t:'Always, in the conclusion',why:'No conclusion, no guesses.'},{t:'Never',why:'Projections on a chart can be described.'}],sp:'c1-s3'},
 {q:'Which is an exception in the exercise chart?',opts:[{t:'The over-65s',ok:1,why:'More active than the two groups before them.'},{t:'Teenagers',why:'They are the highest, following the pattern.'},{t:'The 30 to 49 group',why:'It follows the pattern.'}],sp:'c1-s4'},
 {q:'52 and 24 minutes. Which is accurate?',opts:[{t:'more than twice as long',ok:1,why:'2 × 24 = 48.'},{t:'three times as long',why:'3 × 24 = 72.'},{t:'about the same',why:'A big difference.'}],sp:'c1-s5'}
];

const cannow=[['State the time, length and format of Task 1','c1-s1'],['Select, report and compare','c1-s2'],['Leave out opinions, reasons and guesses','c1-s3'],['Choose the key features of a simple chart','c1-s4'],['Write an introduction and an overview','c1-s5']];
addChapter({n:1,spreads,acts,gloss,charts:{exer:C.exer,exer2:Object.assign({},C.exer,{id:'ch-f1exer2'})},retrieval,minitest,cannow});
})();
