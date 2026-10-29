/* ==========================================================================
   MODULE 5 · CHAPTER 6 · APPLYING THE SKILLS
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the graph
     c6-read1   choice    Supported    Step 1  Which line?
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
const {C}=TRD;
const P='Chapter 6',CT='Applying the Skills',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The graph below shows the average number of minutes per day that teenagers in one country spent on three activities between 2005 and 2025';
const TASK_T='The chart below shows the number of overnight stays in three types of accommodation in one country between 2000 and 2024';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.teen,{id:'ch-m5teen-hot',hot:1,hotPoint:[1,4]});
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="72" r="52" fill="#FBE6CF"/><path d="M200,72 L200,32" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,72 L228,87" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="144" fill="#292929">20 minutes</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings the language of change together in complete answers. You’ll read a graph with three lines, plan in two minutes, check your work against the four marking criteria and finish with a timed task on a bar chart over time.',
  outcomes:['read a graph with several lines and find where they cross','plan an answer in two minutes, grouping lines by their trend','check your language of change against the four criteria',`write a complete answer in 20 minutes with accurate verbs, ${T('overtook')} and size words`],
  illus:ill,
  steps:[[1,'c6-s1','Read the question','Three lines, two crossings','Discover'],[2,'c6-s2','Plan in two minutes','Overview, groups, figures','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A line graph, untimed','Apply'],[5,'c6-s5','The timed task','A bar chart, 20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The unit:</b> minutes per day.</li><li><b>The period:</b> finished years, so past simple.</li><li><b>Each line’s trend:</b> up, down, or fluctuating.</li><li><b>Where lines cross:</b> a change of order is a key feature.</li></ol>${chart('teen')}${note('Streaming crossed both other lines. Note when: between 2005 and 2010 (reading) and between 2010 and 2015 (sport).')}<div class="clear"></div>${take('Unit, period, each trend, the crossings: check them all before you plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the teenager graph and a blank plan with four lines.','Overview: streaming rose dramatically and became the main activity; reading fell; sport changed little.','Body 1: streaming, the biggest change, and the two crossings.','Body 2: reading and sport. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> streaming up dramatically, top from 2015 · reading down · sport little change<br><b>Body 1:</b> streaming 30 → 110 · overtook reading by 2010, sport by 2015<br><b>Body 2:</b> reading 45 → 20 · sport 55 to 62, ends at 55</div>${note('Start with the line that changed most. Group the others by their trend.')}<div class="clear"></div>${take('Two minutes: overview, the biggest change first, the others grouped.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the graph in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter of your Task 1 score. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are the key changes and crossings covered accurately?</li><li><b>${T('Coherence and Cohesion')}:</b> are the lines grouped logically?</li><li><b>${T('Lexical Resource')}:</b> do the size words match the figures?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> are the verb forms and prepositions right: rose by, peaked at, had overtaken?</li></ol>${mistake('<s>Streaming rised dramatical to 110 minutes.</s>')}${insight('Stronger','Time spent streaming rose dramatically, reaching 110 minutes a day in 2025.')}${take('Overview, grouping, size words, verb forms: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('teen2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: a bar chart over time needs the same language of change as a line graph.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('stays')}<div class="clear"></div>`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Find each trend and every crossing before you plan.','Start with the biggest change, then group the rest by trend.','Check that every size word matches a calculated change.','Give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a line graph',decision:'Find each part of the graph.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title.',x:'That is the horizontal axis: the years.',y:'That is the vertical axis: minutes per day.',legend:'That is the legend: which line is which activity.',line:'That is one of the lines.',point:'That is a single point.'},
  targets:[{q:'What is the unit?',part:'y',ok:'Minutes per day.'},{q:'Which line is which activity?',part:'legend',ok:'The legend: reading, streaming video, sport.'},{q:'How long did teenagers spend streaming in 2025?',part:'point',ok:'110 minutes a day, the highest figure on the graph.'}]},
'c6-read1':{type:'choice',level:'Supported',skill:'Reading the trends',decision:'Which sentence is accurate?',
  opts:[{t:'Streaming overtook sport between 2010 and 2015.',ok:1,why:'2010: 45 against 58. 2015: 70 against 62.'},{t:'Reading overtook streaming in 2015.',why:'Streaming overtook reading, by 2010.'},{t:'Sport fell sharply.',why:'It stayed between 55 and 62 minutes.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the teenager graph?',
  opts:[{t:'Body 1: streaming and the crossings. Body 2: reading and sport.',ok:1,why:'The biggest change first; the other two grouped.'},{t:'Body 1: 2005 to 2015. Body 2: 2015 to 2025.',why:'Splitting by time breaks each trend in two.'},{t:'One paragraph for each year.',why:'Five paragraphs of lists.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Planning the body',decision:'Which paragraph does each note belong in?',cats:['Body 1: streaming','Body 2: reading and sport'],
  items:[{w:'30 → 110 minutes',c:0,m:'streaming.'},{w:'Overtook sport by 2015',c:0,m:'streaming.'},{w:'45 → 20 minutes',c:1,m:'reading.'},{w:'Between 55 and 62 minutes',c:1,m:'sport.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'The answer never says that streaming overtook the other activities.',a:0,right:'A missing key feature: Task Achievement.',wrong:'Leaving out a key feature affects Task Achievement.'},
         {t:'“Sport rose dramatically.”',a:2,right:'A size word that doesn’t match the figures: Lexical Resource (and Task Achievement, because it misreports the data).',wrong:'This is about word choice.'},
         {t:'“Reading has fell to 20 minutes.”',a:3,right:'A verb form error: grammar.',wrong:'“Has fell” is a grammar error: fell.'},
         {t:'The lines are described in a random order, jumping between them.',a:1,right:'Organisation: Coherence and Cohesion.',wrong:'This is about organisation.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Reading time fell in every five-year period, from 45 to just 20 minutes a day, less than half its original level.',ok:1,why:'Accurate verb, figures with units, and a calculated comparison.'},{t:'Reading falled to 20.',why:'Wrong verb form, no unit.'},{t:'Reading fell dramatically to 20 minutes because teenagers prefer screens.',why:'An invented reason.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The line graph illustrates…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'You described all three activities.',fix:'Include reading, streaming and sport.',fn:v=>{const t=v.b1+' '+v.b2;return /read/i.test(t)&&/stream/i.test(t)&&/sport/i.test(t)}},
          {t:'You reported a crossing.',fix:'Say that streaming overtook reading and sport.',fn:v=>/(overt|surpass|exceed|cross)/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'Your irregular verbs are correct.',fix:'Check: rose, fell, grew.',fn:v=>!/\b(rised|falled|growed|has fell|have fell|has rose)\b/i.test(v.b1+' '+v.b2)},
          {t:'You didn’t call sport dramatic or sharp.',fix:'Sport changed little: use “fluctuated” or “remained fairly stable”.',fn:v=>!/sport\w*\s+(\w+\s+){0,3}(rose|fell|grew|declined|dropped)\s+(dramatically|sharply)|(dramatic|sharp)\s+(rise|fall|drop|increase|decline)\s+in\s+(time spent on\s+)?sport/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The line graph illustrates how long teenagers in one country spent each day, on average, reading, streaming video and doing sport over the twenty years from 2005 to 2025.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the time spent streaming video rose dramatically, making it by far the most time-consuming activity by the end of the period.</button> Reading time, by contrast, declined, while the time spent on sport changed relatively little.</p><p><span class="plabel">Body 1</span>In 2005, teenagers spent 30 minutes a day streaming video, half as long as they spent on sport (60 minutes). <button type="button" class="hl" data-n="1">This figure rose in every five-year period, overtaking reading by 2010 and sport by 2015</button>, and it reached 110 minutes in 2025, <button type="button" class="hl" data-n="2">more than three and a half times its 2005 level</button>.</p><p><span class="plabel">Body 2</span>Reading followed the opposite trend, falling in every period from 45 minutes to just 20, less than half its original level. <button type="button" class="hl" data-n="3">Meanwhile, the time spent on sport fluctuated between 55 and 62 minutes</button>, finishing slightly lower than at the start.</p>`,
  notes:['The biggest change and the change of order, with no figures.','Two crossings, with the periods when they happened.','110 ÷ 30 ≈ 3.7: more than three and a half times.','A range for a fluctuating line.'],
  self:['My overview gives the main trends without figures.','I reported where the lines crossed.','My size words match the figures.','My verb forms are correct.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note each trend, any crossing and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check verb forms, size words and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The bar chart…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described all three types of accommodation.',fix:'Include hotels, hostels and campsites.',fn:v=>/hotel/i.test(v.a)&&/hostel/i.test(v.a)&&/camp/i.test(v.a)},
          {t:'You gave figures with “million”.',fix:'Write 24 million, not 24.',fn:v=>/\d+\s*million/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The bar chart compares how many nights visitors spent in hotels, hostels and campsites in one country at four points from 2000 to 2024.</p><p>Overall, hotels were by far the most popular type of accommodation throughout the period. The number of stays in hostels rose considerably, while campsites became less popular, so that by the end of the period hostels had overtaken campsites.</p><p>Hotel stays rose from 20 million in 2000 to a peak of 25 million in 2016, before falling slightly to 24 million in 2024. In every year shown, the figure for hotels was at least double that for either of the other types.</p><p>Hostels recorded just 3 million stays in 2000, but this figure rose in every period, reaching 12 million in 2024, four times its original level. Campsites, by contrast, declined in every period, from 9 million to 5 million, a fall of almost half. As a result, hostels overtook campsites between 2008 and 2016.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the main trends without figures.','I reported where hostels overtook campsites.','My size words and verb forms are accurate.']}
};

const gloss={
  'overtook':{term:'overtook',def:'Went past another line or category. Past participle: overtaken.',path:'M20,70 L220,20 M20,40 L220,55',ex:'“Streaming overtook sport between 2010 and 2015.”'},
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: a clear overview, the key features and accurate figures. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'Leaving out a crossing lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and clear links. A quarter of your Task 1 score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Grouping lines by their trend improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: accurate, varied words, including size and speed words. A quarter of your Task 1 score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“Rose dramatically, fluctuated, levelled off.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately. A quarter of your Task 1 score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2024, hostels had overtaken campsites.”'}
};

const retrieval={
 'c6-s1':[{q:'Why look for crossing lines?',opts:[{t:'A change of order is a key feature',ok:1,why:'Overview material.'},{t:'They are decoration',why:'They matter.'}]}],
 'c6-s2':[{q:'Which line goes first in the body?',opts:[{t:'The one that changed most',ok:1,why:'Biggest change first.'},{t:'The shortest',why:'Start with the key feature.'}]}],
 'c6-s3':[{q:'“Sport rose dramatically” (range 55 to 62) mainly affects…',opts:[{t:'Lexical Resource',ok:1,why:'Wrong size word.'},{t:'Grammar',why:'The grammar is fine.'}]}],
 'c6-s4':[{q:'Streaming 30 → 110 minutes is…',opts:[{t:'more than three and a half times',ok:1,why:'≈ 3.7.'},{t:'four times',why:'4 × 30 = 120.'}]}],
 'c6-s5':[{q:'Hostels 3 → 12 million is…',opts:[{t:'four times',ok:1,why:'12 ÷ 3.'},{t:'three times',why:'3 × 3 = 9.'}]}]
};

const minitest=[
 {q:'What should you check first?',opts:[{t:'The unit and the period',ok:1,why:'Minutes per day, finished years.'},{t:'The colours',why:'Not data.'},{t:'The word count',why:'That is at the end.'}],sp:'c6-s1'},
 {q:'When did streaming overtake reading?',opts:[{t:'Between 2005 and 2010',ok:1,why:'30 < 45, then 45 > 40.'},{t:'Between 2015 and 2020',why:'Earlier.'},{t:'It never did',why:'It did, by 2010.'}],sp:'c6-s1'},
 {q:'Which plan is best for three lines?',opts:[{t:'Biggest change first, then the others grouped',ok:1,why:'Clear and logical.'},{t:'One paragraph per year',why:'Lists.'},{t:'Alphabetical order',why:'No logic.'}],sp:'c6-s2'},
 {q:'“Reading has fell” mainly affects…',opts:[{t:'Grammatical Range and Accuracy',ok:1,why:'Verb form.'},{t:'Coherence and Cohesion',why:'Organisation is fine.'},{t:'Task Achievement',why:'The data may be right.'}],sp:'c6-s3'},
 {q:'Sport: 60, 58, 62, 57, 55. Which is accurate?',opts:[{t:'fluctuated between 55 and 62 minutes',ok:1,why:'A range.'},{t:'rose sharply',why:'It barely changed.'},{t:'fell dramatically',why:'Only 5 minutes overall.'}],sp:'c6-s4'},
 {q:'Reading 45 → 20 minutes is…',opts:[{t:'less than half its original level',ok:1,why:'Half would be 22.5.'},{t:'exactly half',why:'Half would be 22.5.'},{t:'a third',why:'A third would be 15.'}],sp:'c6-s4'},
 {q:'Campsites 9 → 5 million is a fall of…',opts:[{t:'almost half',ok:1,why:'4 ÷ 9 ≈ 0.44.'},{t:'more than half',why:'That would leave less than 4.5.'},{t:'a quarter',why:'Calculate: 4 ÷ 9.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Read a graph with several lines and find the crossings','c6-s1'],['Plan an answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer describing change','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{teen:C.teen,teen2:cp('teen','ch-m5teen2'),'teen-hot':HOT,stays:C.stays},retrieval,minitest,cannow});
})();
