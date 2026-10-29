/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the bar chart
     c6-read1..2 choice   Supported    Step 1  Read the question
     c6-plan    choice    Supported    Step 2  Choose the plan
     c6-group   sort      Supported    Step 2  Which paragraph?
     c6-crit    binary    Supported    Step 3  Which criterion?
     c6-edit    choice    Independent  Step 3  The stronger version
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The bar chart shows the length of cycle lanes in one city in 2000, 2010 and 2020, and the line graph shows the percentage of commuters in the same city who cycled to work between 2000 and 2020';
const TASK_T='The table shows the number of visitors to a national park in each season in 2015 and 2025, and the pie chart shows the main activity of visitors to the park in 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.lanes,{id:'ch-lanes-hot',hot:1,hotBar:[0,2]});

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read both charts carefully, plan in two minutes, check your work against the four marking criteria and finish with a timed task.',
  outcomes:['read the unit and the time points of each chart','plan a two-chart answer in two minutes','check your writing against the four marking criteria','write a complete answer of at least 150 words in 20 minutes'],
  illus:illus('bar','line'),
  steps:[[1,'c6-s1','Read the question','Two units, two sets of years','Discover'],[2,'c6-s2','Plan in two minutes','Overview, two paragraphs, figures','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A complete answer, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things for <b>each</b> chart before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The unit:</b> kilometres? percentages? thousands?</li><li><b>The time points:</b> which years, and how many?</li><li><b>What they share:</b> the same place? the same years?</li><li><b>The connection:</b> do they move together, or in opposite directions?</li></ol>${chart('lanes')}${chart('cyc')}${note('The bar chart has three years; the line graph has five. Both run from 2000 to 2020 in the same city.')}<div class="clear"></div>${take('Unit, time points, what they share, the connection: for both charts, before you plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div><div data-act="c6-read2" style="margin-top:14px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the two cycling charts and a blank plan with four lines.','Overview: both grew a lot; the larger increases came after 2010 in both.','Body 1: cycle lanes 40, 95, 180 km.','Body 2: cyclists 4% to 21%; slow start, biggest rise 2015 to 2020. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> both grew a lot · larger increases after 2010 in both<br><b>Body 1 (bars):</b> 40 → 95 → 180 km · more than doubled by 2010 · 4.5 times by 2020<br><b>Body 2 (line):</b> 4% → 21% · slow start (+1) · biggest rise 2015 to 2020 (+8) · about one in five</div>${note('The link between the charts is time: both had their larger increases in the second decade. Say that they happened together, not that one caused the other.')}<div class="clear"></div>${take('Two minutes: the overview, one paragraph per chart, the figures you will use.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the cycling charts in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> does the overview cover both charts? Are the figures accurate, each with the unit of its own chart? No invented causes?</li><li><b>${T('Coherence and Cohesion')}:</b> one paragraph per chart, with a link between them?</li><li><b>${T('Lexical Resource')}:</b> are verbs of change and ratios accurate and varied?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> are the tenses and comparatives right?</li></ol>${mistake('More cycle lanes were built, so more people cycled to work.')}${insight('Stronger','Over the same period, the percentage of commuters who cycled to work rose from 4% to 21%.')}${take('Both charts in the overview, a unit for every figure, a link without a cause: check all four criteria before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the cycling charts in Step 1.</p><div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('lanes2')}${chart('cyc2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: with two charts, check that the overview covers both.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('park')}${chart('pact')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Read the unit and the time points of each chart before you plan.','Plan in two minutes: an overview for both, one paragraph per chart.','Link the charts by time or contrast, never by an invented cause.','Check all four criteria, and give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading the bar chart',decision:'Find each part of the bar chart.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title: what is measured.',x:'That is the horizontal axis: the three years.',y:'That is the vertical axis: the unit, kilometres.',point:'That is a single bar.'},
  targets:[{q:'What does the bar chart measure?',part:'title',ok:'The length of cycle lanes in one city.'},
           {q:'What is the unit?',part:'y',ok:'Kilometres: every figure needs “km”.'},
           {q:'Which years does it show?',part:'x',ok:'Three years: 2000, 2010 and 2020. The line graph has five points.'},
           {q:'How long were the cycle lanes in 2020?',part:'point',ok:'180 km, four and a half times the 2000 figure.'}]},
'c6-read1':{type:'choice',level:'Supported',skill:'Units',decision:'Which sentence uses both units correctly?',
  opts:[{t:'The city had 180 km of cycle lanes in 2020, when 21% of commuters cycled to work.',ok:1,why:'Kilometres for the bars, percentages for the line, the same year.'},{t:'Cycle lanes reached 180%, and cyclists 21 km.',why:'The units are swapped.'},{t:'Cycle lanes rose by 21%.',why:'21% is the cyclists’ figure, from the other chart.'}]},
'c6-read2':{type:'choice',level:'Supported',skill:'Reading the line graph',decision:'When did the share of commuters cycling rise most?',
  opts:[{t:'Between 2015 and 2020, by 8 percentage points',ok:1,why:'13% to 21%.'},{t:'Between 2000 and 2005',why:'Only 1 percentage point: 4% to 5%.'},{t:'Between 2010 and 2015',why:'5 percentage points: 8% to 13%. The next period was larger.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best?',
  opts:[{t:'Body 1: the cycle lanes. Body 2: the commuters, starting with “Over the same period”.',ok:1,why:'One paragraph per chart, linked by time.'},{t:'Body 1: 2000 and 2010. Body 2: 2020.',why:'Organising by year mixes the two charts and splits each trend.'},{t:'One long paragraph about both charts.',why:'Hard to follow: each chart needs its own paragraph.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Planning the body',decision:'Which paragraph does each note belong in?',cats:['Body 1: cycle lanes','Body 2: commuters cycling'],
  items:[{w:'40 → 95 → 180 km',c:0,m:'bar chart figures.'},{w:'More than doubled by 2010',c:0,m:'95 ÷ 40 ≈ 2.4.'},{w:'4% → 21%',c:1,m:'line graph figures.'},{w:'Biggest rise 2015 to 2020: +8 percentage points',c:1,m:'from the line graph.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'The overview mentions only the cycle lanes.',a:0,right:'An overview missing one chart is a Task Achievement problem.',wrong:'A clear overview of both charts is part of Task Achievement.'},
         {t:'“More lanes were built, so more people cycled.”',a:0,right:'An invented cause is an accuracy problem: Task Achievement.',wrong:'The charts don’t show a cause: Task Achievement.'},
         {t:'Both charts are mixed together in one paragraph with no link.',a:1,right:'Organisation: Coherence and Cohesion.',wrong:'This is about organisation: Coherence and Cohesion.'},
         {t:'“The percentage have risen to 21% in 2020.”',a:3,right:'Agreement and tense: grammar.',wrong:'“The percentage rose”: a grammar problem.'},
         {t:'“Increased” is used in every sentence.',a:2,right:'Repetition: Lexical Resource.',wrong:'This is about range of vocabulary: Lexical Resource.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Over the same period, the percentage of commuters who cycled to work rose more than fivefold, from 4% to 21%.',ok:1,why:'A link by time, both figures with the unit, and an accurate ratio: 21 ÷ 4 ≈ 5.3.'},
        {t:'Because of the new lanes, cycling went up a lot.',why:'An invented cause, and vague.'},
        {t:'Cycling was 4, 5, 8, 13 and 21.',why:'A list without units or comparison.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart illustrates…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1: the cycle lanes',rows:5},{k:'b2',label:'Body paragraph 2: the commuters',rows:5}],
  checks:[{t:'Your introduction names both charts.',fix:'Name both charts: the bar chart and the line graph.',fn:v=>/bar/i.test(v.intro)&&/line/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview covers both charts.',fix:'Mention both the cycle lanes and the commuters who cycled.',fn:v=>/lane/i.test(v.ov)&&/(commut|cycl)/i.test(v.ov.replace(/cycle lane/gi,''))},
          {t:'Body 1 gives lengths in km.',fix:'Give the length of the lanes in km.',fn:v=>/\d+\s*(km|kilomet)/i.test(v.b1)},
          {t:'Body 2 gives percentages.',fix:'Give the share of commuters as percentages.',fn:v=>/\d+\s*(%|per ?cent)/i.test(v.b2)},
          {t:'You linked the charts without claiming a cause.',fix:'Remove “because”, “so”, “as a result” or “due to”.',fn:v=>!/\b(because|due to|as a result|caused|led to|thanks to)\b/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart illustrates how many kilometres of cycle lanes one city had at three points between 2000 and 2020, <button type="button" class="hl" data-n="0">while the line graph shows what proportion of its commuters travelled to work by bicycle over the same twenty years.</button></p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="1">Overall, both the network of cycle lanes and the share of commuters who cycled grew considerably, and in both cases the larger increases came after 2010.</button></p><p><span class="plabel">Body 1</span>In 2000, the city had 40 km of cycle lanes. This more than doubled to 95 km by 2010, and the network then grew by a further 85 km to reach 180 km in 2020, four and a half times its original length.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="2">Over the same period, the percentage of commuters cycling to work rose from just 4% to 21%</button>, more than five times the 2000 figure. Growth was slow at first, with a rise of only 1 percentage point in the first five years, <button type="button" class="hl" data-n="3">but it accelerated in each later period</button>, and the largest increase, of 8 percentage points, came between 2015 and 2020. By 2020, roughly one commuter in five was cycling to work.</p>`,
  notes:['Both charts named and paraphrased; “over the same twenty years” shows they share a period.','A shared pattern in both charts, with no figures and no cause.','The link by time, not cause, and both figures with the unit.','Each five-year rise was bigger than the last: +1, +3, +5, +8.'],
  self:['My overview covers both charts.','Each figure has the unit of its own chart.','I linked the charts by time, not by cause.','I checked every ratio: 180 ÷ 40 = 4.5, and 21 ÷ 4 ≈ 5.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read both charts. Note the overview, one paragraph per chart and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check that the overview covers both charts, the units and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The table…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described both charts.',fix:'Describe both the seasons and the activities.',fn:v=>/summer/i.test(v.a)&&/walk/i.test(v.a)},
          {t:'You gave visitor numbers in full.',fix:'The table is in thousands: write 420,000, not 420.',fn:v=>/\d{2,3},000/.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The table compares how many people visited a national park during each season of 2015 and 2025, while the pie chart illustrates what visitors mainly did there in the later year.</p><p>Overall, the park attracted more visitors in 2025 than in 2015, and summer was by far the busiest season in both years. Walking was the most common activity, accounting for almost half of all visitors.</p><p>Summer visitor numbers rose from 310,000 to 420,000, the largest increase of any season, and summer accounted for more than half of all visitors in both years. Spring and autumn also became busier, rising to 150,000 and 160,000 respectively. Winter, the quietest season, was the only one to see a fall, from 40,000 to 35,000.</p><p>In 2025, walking was the main activity for 45% of visitors, more than twice the proportion who mainly went cycling (20%). Camping and watching wildlife followed, at 15% and 12%, while water sports were the least common main activity, at just 8%.</p>`,
  self:['I planned for about two minutes before writing.','My overview covers both charts, without figures.','The table figures are in thousands, written in full.','I used share language for the one-year pie chart.']}
};

const gloss={
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: an overview of both charts, the key features selected and accurate figures with their units. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'An overview that covers only one chart lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and clear links. A quarter of your Task 1 score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“One paragraph per chart, with a link between them, improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise, varied and accurate words, including verbs of change and ratios. A quarter of your Task 1 score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“More than doubled, accelerated, four and a half times.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately. A quarter of your Task 1 score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2020, roughly one commuter in five was cycling to work.”'}
};

const retrieval={
 'c6-s1':[{q:'The bar chart has three years and the line graph five. What do they share?',opts:[{t:'The same city and period',ok:1,why:'2000 to 2020, one city.'},{t:'The same unit',why:'km and %.'}]}],
 'c6-s2':[{q:'How do you start body paragraph 2?',opts:[{t:'Over the same period,…',ok:1,why:'A link by time.'},{t:'Because of this,…',why:'That claims a cause.'}]}],
 'c6-s3':[{q:'An overview with only one chart mainly affects…',opts:[{t:'Task Achievement',ok:1,why:'The overview must cover both.'},{t:'Grammar',why:'Grammar may be fine.'}]}],
 'c6-s4':[{q:'40 km → 180 km is…',opts:[{t:'four and a half times',ok:1,why:'180 ÷ 40 = 4.5.'},{t:'four times',why:'4 × 40 = 160.'}]}],
 'c6-s5':[{q:'Summer 420,000 out of 765,000 in 2025 is…',opts:[{t:'more than half',ok:1,why:'About 55%.'},{t:'about a third',why:'Check: 420 ÷ 765.'}]}]
};

const minitest=[
 {q:'What should you check for each chart first?',opts:[{t:'Its unit and time points',ok:1,why:'They may differ.'},{t:'Its colours',why:'Colours aren’t data.'},{t:'Only the larger chart',why:'Both charts.'}],sp:'c6-s1'},
 {q:'21% and 180 km in 2020. Which sentence is right?',opts:[{t:'The city had 180 km of lanes, and 21% of commuters cycled.',ok:1,why:'Each figure with its unit.'},{t:'Lanes reached 21%.',why:'Wrong chart.'},{t:'Cyclists reached 180 km.',why:'Wrong unit.'}],sp:'c6-s1'},
 {q:'Which plan is best for two charts with different measures?',opts:[{t:'One paragraph per chart, linked',ok:1,why:'Clear and connected.'},{t:'One paragraph per year',why:'Mixes the charts.'},{t:'No plan',why:'Planning saves time.'}],sp:'c6-s2'},
 {q:'“More lanes were built, so more people cycled.” mainly affects…',opts:[{t:'Task Achievement',ok:1,why:'An invented cause is inaccurate.'},{t:'Lexical Resource',why:'The words are fine.'},{t:'Grammar',why:'The grammar is fine.'}],sp:'c6-s3'},
 {q:'“The percentage have risen in 2020.” What is wrong?',opts:[{t:'It should be “The percentage rose”',ok:1,why:'Singular subject, finished time.'},{t:'Nothing',why:'Check the verb.'},{t:'It should be “more risen”',why:'Not a comparative.'}],sp:'c6-s3'},
 {q:'Cycling 4% → 21%. Which is accurate?',opts:[{t:'more than five times',ok:1,why:'21 ÷ 4 ≈ 5.3.'},{t:'six times',why:'6 × 4 = 24.'},{t:'rose by 17%',why:'17 percentage points.'}],sp:'c6-s4'},
 {q:'Which season was the only one to fall?',opts:[{t:'Winter',ok:1,why:'40,000 to 35,000.'},{t:'Autumn',why:'It rose to 160,000.'},{t:'Spring',why:'It rose to 150,000.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Check the unit and time points of each chart','c6-s1'],['Plan a two-chart answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer to a mixed task','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
addChapter({n:6,spreads,acts,gloss,charts:{lanes:C.lanes,cyc:C.cyc,lanes2:Object.assign({},C.lanes,{id:'ch-lanes2'}),cyc2:Object.assign({},C.cyc,{id:'ch-cyc2'}),'lanes-hot':HOT,park:C.park,pact:C.pact},retrieval,minitest,cannow});
})();
