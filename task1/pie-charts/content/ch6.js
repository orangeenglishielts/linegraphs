/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read three pies
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
const {C,illus}=PIE;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The charts below show how teenagers in three age groups in one country divided their screen time between four activities';
const TASK_T='The charts below show how one charity spent its money in 2015 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read the question carefully, plan in two minutes, check your work against the four marking criteria and finish with a timed task.',
  outcomes:['read a pie chart question carefully, including pies for groups rather than years','plan an answer in two minutes','check your writing against the four marking criteria','write a complete answer of at least 150 words in 20 minutes'],
  illus:illus([70,15,10,5]),
  steps:[[1,'c6-s1','Read the question','Labels, shares, categories','Discover'],[2,'c6-s2','Plan in two minutes','Overview and groups first','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A complete answer, no clock','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Course review','Your results and your drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The pie labels:</b> years or groups? Years mean change; groups mean comparison.</li><li><b>Shares or amounts:</b> does the chart give totals? If not, write about shares only.</li><li><b>Every category:</b> count them, so you don’t miss one.</li><li><b>The time:</b> past, present, or a general statement?</li></ol>${chart('screen')}${note('These pies are labelled by age, not by year. So you compare the age groups. Nothing “rises” over time.')}<div class="clear"></div>${take('Labels, shares, categories, time. The pie labels decide whether you describe change or compare groups.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div><div data-act="c6-read2" style="margin-top:14px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the screen time pies and a blank plan with four lines.','Overview: gaming leads for the youngest; social media leads for the two older groups; videos the same at every age.','Body 1: the two activities that change with age, gaming and social media.','Body 2: the two that change least, videos and homework. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> gaming biggest for 13 to 14 · social media biggest for older groups · videos the same everywhere<br><b>Body 1:</b> gaming falls with age (40 → 20) · social media rises (25 → 40)<br><b>Body 2:</b> videos 25 at every age · homework smallest, 10 → 15</div>${note('With groups, describe a pattern across the groups: “fell with age”, “was higher among older teenagers”.')}<div class="clear"></div>${take('Two minutes: the overview, two groups of categories, the figures you will use.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the screen time charts in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are the key features covered, and the figures accurate? Shares, not amounts?</li><li><b>${T('Coherence and Cohesion')}:</b> are the paragraphs grouped logically, not one pie at a time?</li><li><b>${T('Lexical Resource')}:</b> are fractions and verbs for shares accurate and varied?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> are the tenses and comparatives right?</li></ol>${mistake('Gaming was 40%. It was 30%. It was 20%.')}${insight('Stronger','The share of screen time spent gaming fell with age, from 40% among 13- and 14-year-olds to just 20% among the oldest group, half the figure for the youngest.')}${take('Overview, grouping, accurate fractions, correct grammar: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox('The charts below show how teenagers in three age groups in one country divided their screen time between four activities.<br><br>Write at least 150 words.')}${chart('screen2')}${note('These are groups, not years. Use “with age” and “among older teenagers”, not “rose over time”.')}<div class="clear"></div>`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: stop at 20 minutes even if you are not happy. Task 2 needs the time.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox('The charts below show how one charity spent its money in 2015 and 2025.<br><br>Write at least 150 words.')}${chart('charity')}<div class="clear"></div>`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Check the pie labels first: years mean change, groups mean comparison.','Write about shares unless the chart gives totals.','Plan in two minutes: the overview, two groups of categories, the figures.','Check all four criteria, and give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading three pies',decision:'Find each part of the chart.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.screen,{id:'ch-screen-hot',hot:1,hotSlice:[2,1]}),
  parts:{title:'That is the title.',x:'That is a pie label: an age group.',legend:'That is the legend: the four activities.',point:'That is one segment.'},
  targets:[{q:'What is divided up?',part:'title',ok:'Teenagers’ screen time, in one country.'},
           {q:'What do the pie labels show: years or groups?',part:'x',ok:'Age groups: 13 to 14, 15 to 16 and 17 to 18. So you compare the groups; nothing changes over time.'},
           {q:'Which activities are compared?',part:'legend',ok:'Four: gaming, social media, watching videos and homework.'},
           {q:'What share of screen time did 17- and 18-year-olds spend on social media?',part:'point',ok:'40%, the largest share for that age group.'}],
  doneMsg:'<b>All four found.</b> Always check the pie labels: here they are groups, so you compare, not describe change.'},
'c6-read1':{type:'choice',level:'Supported',skill:'Groups, not years',decision:'Which sentence fits these charts?',
  opts:[{t:'The share of screen time spent on social media was higher among older teenagers.',ok:1,why:'The pies are age groups, so you compare the groups.'},{t:'Social media rose from 25% to 40% over time.',why:'There is no time period. The pies are three age groups at one time.'},{t:'Teenagers spent more hours on social media as they got older.',why:'The pies show shares, not hours.'}]},
'c6-read2':{type:'choice',level:'Supported',skill:'Spotting what stays the same',decision:'Which activity had the same share in all three age groups?',
  opts:[{t:'Watching videos, at 25%',ok:1,why:'A quarter of screen time in every group: a feature worth reporting.'},{t:'Homework',why:'Homework was 10%, 10% and 15%.'},{t:'Gaming',why:'Gaming fell with age: 40%, 30%, 20%.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the screen time charts?',
  opts:[{t:'Overview: gaming leads for the youngest, social media for the older two; videos the same. Body 1: gaming and social media. Body 2: videos and homework.',ok:1,why:'The overview has the main contrast and the constant. The body groups the activities that change with age and those that don’t.'},
        {t:'Body 1: the 13 to 14 pie. Body 2: the 15 to 16 pie. Body 3: the 17 to 18 pie.',why:'One pie per paragraph repeats every activity three times and hides the pattern.'},
        {t:'Overview: 40%, 35% and 40%. Body: everything else.',why:'Figures don’t belong in the overview, and “everything else” isn’t a plan.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which body paragraph does each activity belong in?',prompt:'Body 1: the activities that change with age. Body 2: the activities that hardly change.',cats:['Body 1','Body 2'],
  items:[{w:'Gaming: 40%, 30%, 20%',c:0,m:'falls steadily with age.'},{w:'Social media: 25%, 35%, 40%',c:0,m:'rises with age.'},{w:'Watching videos: 25%, 25%, 25%',c:1,m:'is the same in every group.'},{w:'Homework: 10%, 10%, 15%',c:1,m:'changes only slightly, for the oldest group.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammar'],
  items:[{t:'“Older teenagers spent more hours on social media.” (The pies give no hours.)',a:0,right:'Claiming amounts the chart doesn’t give is an accuracy problem: Task Achievement.',wrong:'The data claim is inaccurate: the pies show shares, not hours. That is Task Achievement.'},
         {t:'One paragraph for each pie.',a:1,right:'Organisation that hides the comparisons affects Coherence and Cohesion.',wrong:'This is about organisation: Coherence and Cohesion.'},
         {t:'“The majority” used for 40%.',a:2,right:'An inaccurate word choice affects Lexical Resource.',wrong:'This is an inaccurate word: Lexical Resource.'},
         {t:'“The share of gaming were lower.”',a:3,right:'“The share … was”: subject–verb agreement is grammar.',wrong:'This is a grammar error: the share was.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Social media followed the opposite pattern, rising from a quarter of screen time among the youngest group to 40% among the oldest.',ok:1,why:'A comparison across groups, an accurate fraction, and shares rather than hours.'},
        {t:'Social media was 25%, 35% and 40%.',why:'Accurate, but a list with no comparison or pattern.'},
        {t:'Social media rose over time from 25% to 40%.',why:'These are age groups, not years.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The pie charts compare…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction mentions teenagers, screen time and the age groups.',fix:'Include teenagers, their screen time and the three age groups.',fn:v=>/teen/i.test(v.intro)&&/screen/i.test(v.intro)&&/(age|group)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names gaming and social media.',fix:'Your overview needs the main contrast: gaming for the youngest, social media for the older groups.',fn:v=>/gam/i.test(v.ov)&&/social/i.test(v.ov)},
          {t:'You compared groups, not years.',fix:'These are age groups. Remove phrases like “over time” or “over the period”.',fn:v=>!/(over time|over the period|over the years|between \d{4})/i.test(v.ov+v.b1+v.b2)},
          {t:'You wrote about shares, not hours.',fix:'The pies show shares. Write “a bigger share of screen time”, not “more hours”.',fn:v=>!/\b(more|fewer|less) (hours|time)\b/i.test(v.ov+v.b1+v.b2)},
          {t:'You reported that watching videos was the same for all groups.',fix:'Report the constant: watching videos was 25% in every group.',fn:v=>/video/i.test(v.ov+v.b2)&&/(same|every|each|all three|constant|unchanged|identical)/i.test(v.ov+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The pie charts compare the way teenagers in three different age groups in one country <button type="button" class="hl" data-n="0">spent their screen time</button>, which was split between gaming, social media, watching videos and homework.</p><p><span class="plabel">Overview</span>Overall, gaming took up the largest share of screen time for the youngest group, <button type="button" class="hl" data-n="1">whereas social media was the main activity for the two older groups</button>. The share spent watching videos was the same at every age.</p><p><span class="plabel">Body 1</span>Among 13- and 14-year-olds, gaming accounted for 40% of screen time, <button type="button" class="hl" data-n="2">but this share fell with age</button>, to 30% for 15- and 16-year-olds and only 20% for the oldest group, half the figure for the youngest. Social media followed the opposite pattern, rising from a quarter of screen time to 35% and then 40%, <button type="button" class="hl" data-n="3">so it replaced gaming as the main activity from the age of 15</button>.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="4">Watching videos made up exactly a quarter of screen time in all three age groups.</button> Homework accounted for the smallest share at every age: 10% for the two younger groups, rising slightly to 15% for 17- and 18-year-olds.</p>`,
  notes:['A new verb (spent) and a new structure, with the four activities named. The meaning is the same, but I don’t copy the task’s wording.','The main contrast between the groups, with no figures.','“Fell with age” describes a pattern across groups. There is no time period, so I avoided “over time”.','The comparison across the groups: from 15 to 16, social media (35%) was larger than gaming (30%).','The constant: 25% in every group. Something that stays the same is worth reporting.'],
  self:['I compared the age groups and didn’t describe change over time.','I wrote about shares, not hours.','My body paragraphs are grouped by pattern, not by pie.','I checked every fraction and figure against the chart.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview, the grouping and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check shares not amounts, the overview and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The pie charts…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You covered all four areas of spending.',fix:'Mention projects, fundraising, administration and campaigns.',fn:v=>/project/i.test(v.a)&&/fundrais/i.test(v.a)&&/admin/i.test(v.a)&&/campaign/i.test(v.a)},
          {t:'You wrote about shares, not amounts of money.',fix:'The pies show shares. Write “a larger share”, not “more money”.',fn:v=>!/\b(more|less) money\b/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The pie charts compare how one charity divided its spending between four areas in 2015 and 2025.</p><p>Overall, most of the charity’s money went on its projects in both years, and this share grew. By contrast, the proportions spent on the other three areas all fell.</p><p>In 2015, projects accounted for 70% of the charity’s spending. Ten years later, this figure had risen by eight percentage points to 78%, more than three-quarters of the total. By then, the share spent on projects was more than three times the combined share of the other three areas.</p><p>Fundraising was the second largest area in both years, although its share fell from 15% to 12%. The share spent on administration fell even more sharply, from 10% to 6%, while campaigns made up the smallest share, dropping slightly from 5% to 4%. Taken together, these three areas accounted for just under a quarter of spending in 2025 (22%), compared with 30% in 2015.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the main pattern without figures.','I wrote about shares, not amounts of money.','I grouped the three smaller areas and checked my sums.']}
};

const gloss={
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: a clear overview, the key features selected and accurate figures. A quarter of your score.',path:'M120,45 m-38,0 a38,38 0 1,0 76,0 a38,38 0 1,0 -76,0 M120,45 L120,7',ex:'Claiming amounts that a pie chart doesn’t give lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and clear links. A quarter of your score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Grouping by pattern, not by pie, improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise, varied and accurate words, including fractions and verbs for shares. A quarter of your score.',path:'M120,45 L120,7 A38,38 0 0,1 153,64 Z',ex:'“Just over a third, accounted for, the vast majority.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately. A quarter of your score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2025, the share had risen to 78%.”'}
};

const retrieval={
 'c6-s1':[{q:'Pies labelled 13 to 14, 15 to 16, 17 to 18. What do you do?',opts:[{t:'Compare the groups',ok:1,why:'No time period.'},{t:'Describe change over time',why:'They are ages, not years.'}]}],
 'c6-s2':[{q:'What goes in the plan?',opts:[{t:'Overview, groups, key figures',ok:1,why:'Notes, not sentences.'},{t:'A full draft',why:'No time.'}]}],
 'c6-s3':[{q:'“The majority” for 40% affects…',opts:[{t:'Lexical Resource',ok:1,why:'An inaccurate word.'},{t:'Coherence and Cohesion',why:'That is organisation.'}]}],
 'c6-s4':[{q:'Gaming 40% → 20% across the age groups is…',opts:[{t:'for the oldest group, half the figure for the youngest',ok:1,why:'20 is half of 40.'},{t:'a fall over time',why:'These are groups, not years.'}]}],
 'c6-s5':[{q:'15% + 10% + 5% = 30%. In 2025, 12% + 6% + 4% = …',opts:[{t:'22%',ok:1,why:'Just under a quarter.'},{t:'25%',why:'Check the sum.'}]}]
};

const minitest=[
 {q:'Three pies labelled by age group. Which sentence fits?',opts:[{t:'The share spent gaming was lower among older teenagers.',ok:1,why:'A comparison of groups.'},{t:'Gaming fell over the period.',why:'No time period.'},{t:'Gaming fell by 20 hours.',why:'Shares, not hours.'}],sp:'c6-s1'},
 {q:'The pies give no totals. Which is safe?',opts:[{t:'a larger share of spending',ok:1,why:'Shares only.'},{t:'more money',why:'An amount.'},{t:'more hours',why:'An amount.'}],sp:'c6-s1'},
 {q:'Which plan is best?',opts:[{t:'Group activities by pattern across the pies',ok:1,why:'Each pattern in one place.'},{t:'One paragraph per pie',why:'That hides the pattern.'},{t:'No plan',why:'Planning saves time.'}],sp:'c6-s2'},
 {q:'“One paragraph per pie” mainly affects…',opts:[{t:'Coherence and Cohesion',ok:1,why:'Organisation.'},{t:'Grammatical Range and Accuracy',why:'Grammar may be fine.'},{t:'Lexical Resource',why:'Vocabulary may be fine.'}],sp:'c6-s3'},
 {q:'“The share of gaming were lower.” What is wrong?',opts:[{t:'The verb should be “was”',ok:1,why:'The subject is “the share”.'},{t:'It should be “more lower”',why:'Never “more lower”.'},{t:'Nothing',why:'Check the verb.'}],sp:'c6-s3'},
 {q:'Videos were 25% in all three groups. How do you report it?',opts:[{t:'Exactly a quarter in every age group',ok:1,why:'A constant is worth reporting.'},{t:'Leave it out: nothing changed',why:'A constant is a key feature.'},{t:'It rose slightly',why:'It didn’t change.'}],sp:'c6-s4'},
 {q:'Projects 70% → 78%. Which is accurate?',opts:[{t:'up by eight percentage points',ok:1,why:'The difference.'},{t:'up by 8%',why:'Use percentage points.'},{t:'the vast majority in 2015',why:'70% is more than two-thirds; keep “vast” for about 80% or more.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Check whether the pie labels are years or groups','c6-s1'],['Plan an answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer comparing groups','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
addChapter({n:6,spreads,acts,gloss,charts:{screen:C.screen,screen2:Object.assign({},C.screen,{id:'ch-screen2'}),charity:C.charity},retrieval,minitest,cannow});
})();
