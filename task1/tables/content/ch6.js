/* ==========================================================================
   MASTERING TABLES · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the table
     c6-read1..2 choice   Supported    Step 1  Read the question
     c6-plan    choice    Supported    Step 2  Choose the plan
     c6-group   sort      Supported    Step 2  Group for the body
     c6-crit    binary    Supported    Step 3  Which criterion?
     c6-edit    choice    Independent  Step 3  The stronger version
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The table below shows the number of vehicles of four types owned per 1,000 people in one city in 2000, 2012 and 2024';
const TASK_T='The table below shows the average number of hours per week that people in four age groups in one country spent watching television and online video';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.veh,{id:'ch-veh-hot',hot:1,hotCell:[3,3]});

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read the question carefully, plan in two minutes, check your work against the four marking criteria and finish with a timed task.',
  outcomes:['read a table question carefully: the unit, years or groups, and every row','plan an answer in two minutes','check your writing against the four marking criteria','write a complete answer of at least 150 words in 20 minutes'],
  illus:illus([[1,3],[0,3],[3,3]]),
  steps:[[1,'c6-s1','Read the question','Units, years, every row','Discover'],[2,'c6-s2','Plan in two minutes','Overview, groups, figures','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A complete answer, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The unit:</b> per person, per 1,000 people, thousands, percentages?</li><li><b>Years or groups:</b> years mean change; groups mean comparison.</li><li><b>Every row:</b> count them, so you don’t miss one.</li><li><b>The middle columns:</b> does anything happen there, such as a peak or a change of order?</li></ol>${chart('veh')}${note('“Per 1,000 people” is part of every figure. Write “450 cars per 1,000 people”, not “450 cars”.')}<div class="clear"></div>${take('Unit, years or groups, every row, the middle columns. Then plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div><div data-act="c6-read2" style="margin-top:14px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the vehicle table and a blank plan with four lines.','Overview: bicycles overtook cars; cars the only vehicle to fall throughout; e-scooters from none.','Body 1: the two common vehicles, cars and bicycles, and the crossover.','Body 2: the two less common, motorbikes with their peak in 2012, and e-scooters. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> bicycles overtook cars · cars fell throughout · e-scooters from none<br><b>Body 1:</b> cars 450 → 430 → 380 · bicycles 300 → 360 → 470 · crossover by 2024<br><b>Body 2:</b> motorbikes 40 → peak 55 → 48 · e-scooters 0 → 5 → 90</div>${note('The motorbikes are the reason to mention 2012: their figure peaked there. For cars and bicycles, 2012 shows that cars were still ahead, so the crossover came after 2012.')}<div class="clear"></div>${take('Two minutes: the overview, two groups of rows, the figures you will use.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the vehicle table in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are the key features selected, and every figure accurate, with its unit?</li><li><b>${T('Coherence and Cohesion')}:</b> are the paragraphs grouped by pattern, not by column?</li><li><b>${T('Lexical Resource')}:</b> are ratios, verbs of change and comparisons accurate and varied?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> are the tenses, comparatives and superlatives right?</li></ol>${mistake('In 2000 cars were 450. In 2012 cars were 430. In 2024 cars were 380.')}${insight('Stronger','Car ownership fell slightly to 430 per 1,000 people by 2012, and then more sharply to 380.')}${take('Overview, grouping, accurate figures with units, correct grammar: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the vehicle table in Step 1.</p><div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('veh2')}${note('Give every figure its unit: per 1,000 people. Bicycles and cars changed places, so check when.')}<div class="clear"></div>`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: stop at 20 minutes even if you are not happy. Task 2 needs the time.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('watch')}<div class="clear"></div>`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Read the unit first, and write it with every figure.','Check whether the columns are years or groups, and whether anything happens in the middle columns.','Plan in two minutes: the overview, two groups of rows, the figures.','Check all four criteria, and give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading the table',decision:'Find each part of the table.',prompt:'Select the part of the table that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title: what is measured, and the unit.',x:'That is a column heading: one of the three years.',y:'That is a row heading: one type of vehicle.',point:'That is one figure: one vehicle in one year.'},
  targets:[{q:'What is the unit of every figure?',part:'title',ok:'Vehicles owned per 1,000 people. Every figure needs “per 1,000 people”.'},
           {q:'Are the columns years or groups?',part:'x',ok:'Years: 2000, 2012 and 2024. So you describe change over time.'},
           {q:'Which vehicles are compared?',part:'y',ok:'Four rows: cars, bicycles, motorbikes and e-scooters.'},
           {q:'How many e-scooters were owned per 1,000 people in 2024?',part:'point',ok:'90 per 1,000 people, up from none at all in 2000.'}]},
'c6-read1':{type:'choice',level:'Supported',skill:'Units',decision:'Which sentence reports the figure accurately?',
  opts:[{t:'In 2000, there were 450 cars for every 1,000 people in the city.',ok:1,why:'The figure with its full unit.'},{t:'In 2000, there were 450 cars in the city.',why:'The figure is per 1,000 people, not the total for the city.'},{t:'In 2000, 450% of people owned a car.',why:'These are not percentages.'}]},
'c6-read2':{type:'choice',level:'Supported',skill:'The middle columns',decision:'Which vehicle makes 2012 important to mention?',
  opts:[{t:'Motorbikes: the figure peaked at 55 in 2012, then fell to 48.',ok:1,why:'A peak in a middle year disappears if you compare only 2000 and 2024.'},{t:'E-scooters: the figure was 5 in 2012.',why:'Five is worth a mention, but nothing changes direction there.'},{t:'None: compare 2000 and 2024 only.',why:'You would miss the motorbikes’ peak.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the vehicle table?',
  opts:[{t:'Body 1: cars and bicycles. Body 2: motorbikes and e-scooters.',ok:1,why:'The two common vehicles crossed over; the two less common ones are far smaller. Each paragraph has a clear point.'},{t:'Body 1: 2000. Body 2: 2012 and 2024.',why:'Organising by year separates each vehicle’s trend into pieces.'},{t:'One paragraph for each vehicle.',why:'Four short paragraphs, and the cars and bicycles crossover is split in two.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which body paragraph does each sentence belong in?',cats:['Body 1: cars and bicycles','Body 2: motorbikes and e-scooters'],
  items:[{w:'By 2024, bicycles had overtaken cars.',c:0,m:'the main crossover.'},{w:'Car ownership fell in both periods.',c:0,m:'the trend for cars.'},{w:'The figure for motorbikes peaked in 2012.',c:1,m:'a less common vehicle.'},{w:'E-scooters went from none to 90 per 1,000 people.',c:1,m:'a less common vehicle with a dramatic rise.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammar'],
  items:[{t:'The answer gives “450 cars” with no unit.',a:0,right:'Inaccurate data affects Task Achievement.',wrong:'A missing unit makes the figure wrong: Task Achievement.'},
         {t:'Body 1 is about 2000; Body 2 is about 2024.',a:1,right:'Organising by column affects Coherence and Cohesion.',wrong:'This is about organisation: Coherence and Cohesion.'},
         {t:'“Bicycles were the most common vehicle in 2024, they overtook cars.”',a:3,right:'Two sentences joined by a comma: a grammar error.',wrong:'This is a comma splice, a grammar error.'},
         {t:'“Increased” is used eight times.',a:2,right:'Repeated vocabulary affects Lexical Resource.',wrong:'This is about range of vocabulary: Lexical Resource.'},
         {t:'There is no overview.',a:0,right:'A clear overview is part of Task Achievement.',wrong:'A missing overview is a Task Achievement problem.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Bicycle ownership rose from 300 to 470 per 1,000 people, so by 2024 bicycles had overtaken cars as the most common vehicle.',ok:1,why:'The trend, the unit and the crossover, with the past perfect.'},
        {t:'Bicycles were 300, 360 and 470.',why:'Accurate, but a list with no unit or comparison.'},
        {t:'Bicycles became more popular because people care about the environment.',why:'The table gives no reasons.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The table gives figures for…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction mentions the vehicles, the city and the years.',fix:'Include the vehicles, the city, and 2000 and 2024.',fn:v=>/vehicle|car|bicycle/i.test(v.intro)&&/city/i.test(v.intro)&&/2000/.test(v.intro)&&/2024/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview reports that bicycles overtook cars.',fix:'The main change: bicycles overtook cars. Put it in the overview.',fn:v=>/bicycle|bike/i.test(v.ov)&&/car/i.test(v.ov)},
          {t:'You gave the unit: per 1,000 people.',fix:'Write “per 1,000 people” (or “for every 1,000 people”) with your figures.',fn:v=>/(per|for every|every) (1,?000|thousand)/i.test(v.b1+' '+v.b2)},
          {t:'You mentioned the motorbikes’ peak.',fix:'Motorbikes peaked in 2012: mention it.',fn:v=>/motorbike/i.test(v.b1+v.b2)&&/(peak|highest|55)/i.test(v.b1+v.b2)},
          {t:'You described the rise of e-scooters.',fix:'Describe the e-scooters: from none to 90 per 1,000 people.',fn:v=>/scooter/i.test(v.ov+v.b1+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The table gives figures for <button type="button" class="hl" data-n="0">how many cars, bicycles, motorbikes and e-scooters were owned for every 1,000 residents</button> of one city at three points between 2000 and 2024.</p><p><span class="plabel">Overview</span>Overall, bicycles overtook cars to become the most common vehicle, and car ownership was the only figure to fall in both periods. <button type="button" class="hl" data-n="1">The most striking change was the appearance of e-scooters</button>, which were not owned at all in 2000.</p><p><span class="plabel">Body 1</span>In 2000 there were 450 cars per 1,000 people, compared with 300 bicycles. Car ownership fell slightly to 430 by 2012 and then more sharply to 380, while the figure for bicycles rose to 360 and then climbed more steeply to 470. <button type="button" class="hl" data-n="2">As a result, bicycles had overtaken cars by 2024</button>, with 90 more per 1,000 people.</p><p><span class="plabel">Body 2</span>Motorbikes and e-scooters were far less common. <button type="button" class="hl" data-n="3">Motorbike ownership rose from 40 to a peak of 55 per 1,000 people in 2012</button> before falling back to 48. E-scooters followed a very different path: there were none in 2000 and only 5 per 1,000 people in 2012, <button type="button" class="hl" data-n="4">but by 2024 the figure had reached 90, eighteen times as many</button>.</p>`,
  notes:['A new structure (how many … were owned) and new words (residents) keep the meaning without copying.','Bicycles gained more vehicles (170), but e-scooters went from none at all to 90: a new kind of vehicle.','The crossover, with the past perfect, and a calculated gap: 470 − 380 = 90.','The peak in the middle year: the reason 2012 is in the answer.','A ratio from the middle year: 90 ÷ 5 = 18.'],
  self:['Every figure has its unit: per 1,000 people.','My overview reports the crossover, with no figures.','My body paragraphs are grouped by pattern, not by year.','I used 2012 where something happened there.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview, the grouping and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check units, the overview and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The table…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You covered all four age groups.',fix:'Mention all four age groups.',fn:v=>/16/.test(v.a)&&/25/.test(v.a)&&/45/.test(v.a)&&/65/.test(v.a)},
          {t:'You compared groups, not years.',fix:'These are age groups. Remove phrases like “over time”.',fn:v=>!/(over time|over the period|over the years)/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The table compares how much time people of different ages in one country spent each week watching television and online video, on average.</p><p>Overall, television viewing was higher in each older age group, while online video followed the opposite pattern. The two younger groups watched more online video than television, whereas the reverse was true for the two older groups. However, total viewing time was broadly similar in every age group.</p><p>People aged 16 to 24 spent 24 hours a week watching online video, four times as long as they spent watching television (6 hours). Among 25- to 44-year-olds the two figures were much closer, at 15 hours for online video and 12 for television.</p><p>By contrast, the 45 to 64 age group watched television for 20 hours a week, two and a half times as long as online video (8 hours). The gap was widest among the over-65s, who watched 28 hours of television but only 3 hours of online video. Taken together, each age group spent between 27 and 31 hours a week watching one or the other.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the main pattern without figures.','I compared the age groups and didn’t describe change over time.','I checked every ratio and sum before writing it.']}
};

const gloss={
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: a clear overview, the key features selected and accurate figures with their units. A quarter of your score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'Writing “450 cars” instead of “450 cars per 1,000 people” lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and clear links. A quarter of your score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Grouping by pattern, not by column, improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise, varied and accurate words, including ratios and verbs of change. A quarter of your score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“Overtook, peaked at, eighteen times as many.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately. A quarter of your score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2024, bicycles had overtaken cars.”'}
};

const retrieval={
 'c6-s1':[{q:'Figures “per 1,000 people”. How do you write 450?',opts:[{t:'450 per 1,000 people',ok:1,why:'Keep the unit.'},{t:'450 cars',why:'That sounds like a total.'}]}],
 'c6-s2':[{q:'Why mention 2012 for motorbikes?',opts:[{t:'The figure peaked there',ok:1,why:'A peak in a middle year.'},{t:'Every year must be mentioned',why:'Only when something happens.'}]}],
 'c6-s3':[{q:'Body 1 about 2000, Body 2 about 2024 mainly affects…',opts:[{t:'Coherence and Cohesion',ok:1,why:'Organisation.'},{t:'Lexical Resource',why:'That is vocabulary.'}]}],
 'c6-s4':[{q:'E-scooters 5 → 90 is…',opts:[{t:'eighteen times as many',ok:1,why:'90 ÷ 5.'},{t:'nine times as many',why:'9 × 5 = 45.'}]}],
 'c6-s5':[{q:'16 to 24: online 24, TV 6. Online video was…',opts:[{t:'four times as long',ok:1,why:'24 ÷ 6.'},{t:'twice as long',why:'2 × 6 = 12.'}]}]
};

const minitest=[
 {q:'What should you check first?',opts:[{t:'The unit of the figures',ok:1,why:'Every figure needs it.'},{t:'The largest figure',why:'You need its unit first.'},{t:'The number of words',why:'That comes at the end.'}],sp:'c6-s1'},
 {q:'Columns labelled by age group. Which sentence fits?',opts:[{t:'Television viewing was higher among older people.',ok:1,why:'A comparison of groups.'},{t:'Television viewing rose over time.',why:'No time period.'},{t:'Television viewing peaked in 2024.',why:'There are no years.'}],sp:'c6-s1'},
 {q:'Which plan is best for the vehicle table?',opts:[{t:'Cars and bicycles; motorbikes and e-scooters',ok:1,why:'Grouped by pattern.'},{t:'One paragraph per year',why:'Splits each trend.'},{t:'No plan',why:'Planning saves time.'}],sp:'c6-s2'},
 {q:'“Bicycles were most common in 2024, they overtook cars.” What is wrong?',opts:[{t:'A comma joins two sentences',ok:1,why:'Use a full stop or “as”.'},{t:'The tense',why:'The past simple is fine.'},{t:'Nothing',why:'Check the comma.'}],sp:'c6-s3'},
 {q:'“Increased” eight times mainly affects…',opts:[{t:'Lexical Resource',ok:1,why:'Range of vocabulary.'},{t:'Task Achievement',why:'The data may be right.'},{t:'Coherence and Cohesion',why:'Organisation may be fine.'}],sp:'c6-s3'},
 {q:'Cars 380, bicycles 470 in 2024. Which is accurate?',opts:[{t:'There were 90 more bicycles than cars per 1,000 people.',ok:1,why:'470 − 380.'},{t:'There were twice as many bicycles.',why:'Twice 380 is 760.'},{t:'Cars and bicycles were almost equal.',why:'A gap of 90.'}],sp:'c6-s4'},
 {q:'65 and over: TV 28, online 3. Total viewing: 31. 25 to 44: 12 + 15 = …',opts:[{t:'27',ok:1,why:'Totals were similar: 27 to 31.'},{t:'37',why:'Check the sum.'},{t:'17',why:'Check the sum.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Check the unit, the columns and every row','c6-s1'],['Plan an answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer to a table task','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
addChapter({n:6,spreads,acts,gloss,charts:{veh:C.veh,veh2:Object.assign({},C.veh,{id:'ch-veh2'}),'veh-hot':HOT,watch:C.watch},retrieval,minitest,cannow});
})();
