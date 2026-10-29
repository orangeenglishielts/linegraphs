/* ==========================================================================
   MASTERING BAR CHARTS · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read a horizontal bar chart
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
const {C,illus}=BAR;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The chart below shows the average number of minutes per day that adults in one country spent on six activities in 2004 and 2024';
const TASK_T='The chart below shows sales of three types of book in one country in 2010, 2015 and 2020';
const words=t=>(String(t).match(/\S+/g)||[]).length;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read the question carefully, plan in two minutes, check your work against the four marking criteria, and finish with a timed task.',
  outcomes:['read a bar chart question carefully, including a horizontal bar chart','plan an answer in two minutes','check your writing against the four marking criteria','write a complete answer of at least 150 words in 20 minutes'],
  illus:illus([70,96,28,22,64,54],[64,86,36,32,104,58]),
  steps:[[1,'c6-s1','Read the question','Chart, units, categories, years','Discover'],[2,'c6-s2','Plan in two minutes','Overview and groups first','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A complete answer, no clock','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Course review','Your results and your drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Most avoidable mistakes start in the first minute. Before you plan, check four things.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The type of chart:</b> vertical or ${T('horizontal bar chart','horizontal')}? Grouped? Years along the axis or in the legend?</li><li><b>The units:</b> minutes, percentages, thousands, millions?</li><li><b>Every category:</b> count them, so you don’t miss one in the overview.</li><li><b>The time:</b> one year, two years or a period? Past or future?</li></ol>${chart('time')}${note('In this horizontal chart, the activities run down the side and the minutes run along the bottom.')}<div class="clear"></div>${take('Chart type, units, categories, time. Thirty seconds of checking prevents most avoidable errors.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div><div data-act="c6-read2" style="margin-top:14px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the time-use chart and a blank plan with four lines.','Overview: the biggest activity and the most striking change.','Groups: the three biggest activities in body 1, the three smaller ones in body 2.','Figures: circle the eight to ten you will use. Then start writing.']})}<p>A two-minute plan saves time, because you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> paid work biggest in both years · social media soared and overtook housework<br><b>Body 1:</b> paid work and housework fell · social media 10 → 95<br><b>Body 2:</b> the three smaller activities rose slightly: travel and childcare +5, exercise +10</div>${note('A plan is notes, not sentences. Arrows and numbers are fine.')}<div class="clear"></div>${take('Two minutes: the overview, the two groups, the figures you will use.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the time-use chart in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are the key features covered, and the figures accurate?</li><li><b>${T('Coherence and Cohesion')}:</b> are the paragraphs grouped logically, and do the linking words make sense?</li><li><b>${T('Lexical Resource')}:</b> are the words precise and varied? (rose, soared, more than doubled)</li><li><b>${T('Grammatical Range and Accuracy')}:</b> do the tenses match the time, and are the comparatives correct? (higher, not more higher)</li></ol>${mistake('Time on paid work was 210. It was 190. Time on housework was 95. It was 80.')}${insight('Stronger','Both paid work and housework took up less time in 2024, falling from 210 to 190 minutes and from 95 to 80 minutes a day respectively.')}${take('Overview, grouping, precise words, accurate grammar: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox('The chart below shows the average number of minutes per day that adults in one country spent on six activities in 2004 and 2024.<br><br>Write at least 150 words.')}${chart('time2')}${note('Social media went from 10 minutes to 95. Check where that puts it in 2024 compared with the other activities.')}<div class="clear"></div>`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: stop at 20 minutes even if you are not happy. Task 2 needs the time.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox('The chart below shows sales of three types of book in one country in 2010, 2015 and 2020.<br><br>Write at least 150 words.')}${chart('bsales')}<div class="clear"></div>`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Check the chart type, the units, every category and the time before you plan.','Plan in two minutes: the overview, the two groups, the figures.','Check all four criteria: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.','Give Task 1 about 20 minutes: 2 to plan, 15 to write and 3 to check.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a horizontal bar chart',decision:'Find each part of the chart.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.time,{id:'ch-time-hot',hot:1,hotBar:[1,4]}),
  parts:{title:'That is the title.',x:'Those are the categories: the six activities.',y:'That is the value axis: the minutes per day.',legend:'That is the legend: which colour is which year.',point:'That is a single bar.'},
  targets:[{q:'What is being compared?',part:'x',ok:'In a horizontal chart, the categories run down the side: six activities.'},
           {q:'What unit are the figures in?',part:'y',ok:'The values run along the bottom: minutes per day.'},
           {q:'Which years are shown?',part:'legend',ok:'The legend shows two years, 2004 and 2024, so you compare two points in time, not a whole period.'},
           {q:'How long did adults spend on social media in 2024?',part:'point',ok:'95 minutes a day, up from just 10 in 2004.'}],
  doneMsg:'<b>All four found.</b> In a horizontal bar chart, read the categories down the side and the values along the bottom.'},
'c6-read1':{type:'choice',level:'Supported',skill:'The time reference',decision:'The chart shows 2004 and 2024. Which phrase is accurate?',
  opts:[{t:'in 2004 and 2024',ok:1,why:'The chart shows two separate years.'},{t:'between 2004 and 2024',why:'“Between” suggests every year in the period. The chart only has two years, so you can’t describe what happened in between.'},{t:'every year from 2004 to 2024',why:'There are only two years on the chart.'}]},
'c6-read2':{type:'choice',level:'Supported',skill:'Units',decision:'Adults spent 95 minutes a day on social media in 2024. What else could you write?',
  opts:[{t:'just over an hour and a half a day',ok:1,why:'95 minutes is 1 hour 35 minutes: just over an hour and a half. A good way to vary your figures.'},{t:'95% of their time',why:'The unit is minutes per day, not a percentage.'},{t:'nearly two hours a day',why:'Two hours is 120 minutes. 95 minutes is closer to an hour and a half.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the time-use chart?',
  opts:[{t:'Overview: paid work biggest; social media soared. Body 1: paid work, housework, social media. Body 2: travel, childcare, exercise.',ok:1,why:'The overview has the biggest category and the most striking change. The body groups the large activities and the small ones.'},
        {t:'Overview: 210, 95 and 10 minutes. Body 1: 2004. Body 2: 2024.',why:'The overview has figures, and organising by year repeats all six activities twice.'},
        {t:'Six body paragraphs, one per activity, then a conclusion.',why:'Six short paragraphs list the data and separate the comparisons. And Task 1 needs no conclusion.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which body paragraph does each activity belong in?',prompt:'Body 1: the activities that took the most time in 2024. Body 2: the smaller activities.',cats:['Body 1','Body 2'],
  items:[{w:'Paid work: 210 → 190 minutes',c:0,m:'was the biggest activity in both years.'},{w:'Housework: 95 → 80 minutes',c:0,m:'was one of the largest activities, and social media overtook it.'},{w:'Social media: 10 → 95 minutes',c:0,m:'became the second biggest activity in 2024, the most striking change.'},{w:'Travel: 55 → 60 minutes',c:1,m:'changed only slightly, like childcare.'},{w:'Childcare: 40 → 45 minutes',c:1,m:'rose by just five minutes, like travel.'},{w:'Exercise: 15 → 25 minutes',c:1,m:'was the smallest activity in 2024, with a modest rise.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammar'],
  items:[{t:'The answer has no overview.',a:0,right:'A clear overview is part of Task Achievement.',wrong:'A missing overview is a Task Achievement problem: it limits that score to Band 5.'},
         {t:'Every sentence starts with “Then”.',a:1,right:'Repetitive linking affects Coherence and Cohesion.',wrong:'This is about how sentences connect: Coherence and Cohesion.'},
         {t:'“The number of people rised.”',a:3,right:'“Rised” is a grammar error: the past of rise is rose.',wrong:'This is a verb form error: Grammatical Range and Accuracy.'},
         {t:'“Went up a lot” is used six times.',a:2,right:'Repeated, vague vocabulary affects Lexical Resource.',wrong:'This is about word choice and range: Lexical Resource.'},
         {t:'95 minutes is written as 59.',a:0,right:'Inaccurate data affects Task Achievement.',wrong:'Wrong figures are a Task Achievement problem.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Time spent on social media soared from just 10 to 95 minutes a day, so by 2024 it had overtaken housework.',ok:1,why:'A precise verb, both figures with the unit, and a comparison with another activity.'},
        {t:'Social media went up a lot. It was 95.',why:'Vague verb, no unit, no comparison, and two short sentences that don’t connect.'},
        {t:'Time spent on social media is rising to 95 minutes.',why:'Past years need the past simple: rose, soared. And it gives no starting figure.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction gives the two years and the unit of time.',fix:'Include the years (2004 and 2024) and what was measured: minutes a day.',fn:v=>/2004/.test(v.intro)&&/2024/.test(v.intro)&&/(minute|time|day)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task. Change the verb and the structure.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names paid work and social media.',fix:'Your overview needs the biggest activity (paid work) and the most striking change (social media).',fn:v=>/work/i.test(v.ov)&&/social/i.test(v.ov)},
          {t:'You reported that social media overtook housework.',fix:'Add the comparison: by 2024, social media had overtaken housework.',fn:v=>/(overt(ook|aken)|more than housework|surpass|exceed)/i.test(v.ov+v.b1+v.b2)},
          {t:'You used minutes as the unit.',fix:'Give figures with their unit: 95 minutes a day.',fn:v=>/minute/i.test(v.b1+v.b2)},
          {t:'You used the past simple or past perfect for the data.',fix:'These years are finished: use fell, rose, soared, had overtaken.',fn:v=>/\b(fell|rose|soared|increased|decreased|declined|dropped|grew|had)\b/i.test(v.b1+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart compares how many minutes a day adults in one country spent on six different activities <button type="button" class="hl" data-n="0">in 2004 and 2024</button>.</p><p><span class="plabel">Overview</span>Overall, paid work took up the most time in both years, although it fell slightly. <button type="button" class="hl" data-n="1">The most striking change was the dramatic rise in time spent on social media</button>, which overtook housework.</p><p><span class="plabel">Body 1</span>In 2004, adults spent an average of 210 minutes a day on paid work, <button type="button" class="hl" data-n="2">more than twice as long as on housework</button> (95 minutes). Twenty years later, both figures had fallen, to 190 and 80 minutes respectively. Over the same period, time spent on social media soared from just 10 minutes to 95 minutes, <button type="button" class="hl" data-n="3">making it the second most time-consuming activity</button>.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="4">The three remaining activities changed far less.</button> Time spent travelling and on childcare each rose by five minutes, to 60 and 45 minutes respectively, <button type="button" class="hl" data-n="5">while time spent exercising increased from 15 to 25 minutes a day</button>.</p>`,
  notes:['Two separate years, so “in 2004 and 2024”, not “between”.','The overview names the biggest activity and the most striking change, with no figures.','210 ÷ 95 is about 2.2, so “more than twice as long” is accurate. “Long” suits time.','I checked the ranking for 2024: paid work 190, social media 95, housework 80. That makes social media second.','A topic sentence for the second group: the smaller activities, with smaller changes.','The biggest change in this group, 10 minutes, finishes the paragraph.'],
  self:['I checked the chart type, units, categories and years before planning.','My overview has the biggest activity and the most striking change, with no figures.','My body paragraphs are grouped, with a topic sentence each.','My figures are accurate and have units, and my tenses match the years.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview, the grouping and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check tense, the overview and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The bar chart…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You covered all three types of book.',fix:'Mention printed books, e-books and audiobooks.',fn:v=>/print/i.test(v.a)&&/e-?book/i.test(v.a)&&/audio/i.test(v.a)},
          {t:'You wrote “million” after the numbers.',fix:'The axis is in millions: write 180 million copies, not 180.',fn:v=>/million/i.test(v.a)&&!/\d\s*millions\b/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The bar chart compares sales of printed books, e-books and audiobooks in one country in 2010, 2015 and 2020.</p><p>Overall, printed books remained by far the best-selling format throughout the period, although their sales declined steadily. By contrast, sales of both digital formats rose, with audiobooks growing the fastest.</p><p>Sales of printed books fell from 180 million copies in 2010 to 165 million in 2015 and 150 million in 2020, a decline of a sixth over the decade. Even so, in 2020 printed books still outsold e-books and audiobooks combined, which together sold 115 million copies.</p><p>E-book sales more than tripled, from 20 million to 70 million, although most of this growth came in the first five years, when sales rose by 35 million. Audiobooks grew even faster: sales rose ninefold, from 5 million to 45 million, with the biggest increase between 2015 and 2020. As a result, the gap between the two digital formats narrowed from 40 million copies in 2015 to 25 million in 2020.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the main trend and the main contrast, without figures.','I grouped the two digital formats and compared them.','I checked my figures, my tenses and my word count before the time ran out.']}
};

const gloss={
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: a clear overview, the key features selected, and accurate figures. A quarter of your score.',path:'M30,80 V20 H70 V80 M100,80 V45 H140 V80 M170,80 V60 H210 V80',ex:'“No overview” or “wrong figures” lowers Task Achievement.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs, and links between sentences that make sense. A quarter of your score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Grouping similar categories in one paragraph improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise, varied and accurate words for trends and comparisons. A quarter of your score.',path:'M30,80 V50 H60 V80 M90,80 V30 H120 V80 M150,80 V15 H180 V80',ex:'“Soared, more than doubled, dipped” instead of “went up a lot”.'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately, including tenses, comparatives and the passive. A quarter of your score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2024, social media had overtaken housework.”'}
};

const retrieval={
 'c6-s1':[{q:'2004 and 2024 only. Which phrase?',opts:[{t:'in 2004 and 2024',ok:1,why:'Two years.'},{t:'between 2004 and 2024',why:'That suggests the whole period.'}]}],
 'c6-s2':[{q:'How long should you plan?',opts:[{t:'About two minutes',ok:1,why:'Enough for the overview, the groups and the figures.'},{t:'Ten minutes',why:'That leaves too little time to write.'}]}],
 'c6-s3':[{q:'A missing overview affects…',opts:[{t:'Task Achievement',ok:1,why:'It limits that score.'},{t:'Lexical Resource',why:'That is vocabulary.'}]}],
 'c6-s4':[{q:'Social media 10 → 95 minutes. Which is accurate?',opts:[{t:'more than nine times as much',ok:1,why:'95 ÷ 10 = 9.5.'},{t:'five times as much',why:'That would be 50 minutes.'}]}],
 'c6-s5':[{q:'How long should you spend on Task 1?',opts:[{t:'About 20 minutes',ok:1,why:'Task 2 needs 40.'},{t:'30 minutes',why:'Task 2 is worth twice as much.'}]}]
};

const minitest=[
 {q:'In a horizontal bar chart, where are the categories?',opts:[{t:'Down the side',ok:1,why:'Values run along the bottom.'},{t:'Along the bottom',why:'That is where the values are.'},{t:'In the title',why:'The title names the topic.'}],sp:'c6-s1'},
 {q:'A chart shows only 2004 and 2024. Which phrase is accurate?',opts:[{t:'in 2004 and 2024',ok:1,why:'Two separate years.'},{t:'between 2004 and 2024',why:'That suggests every year.'},{t:'over the twenty-year period',why:'You can’t see what happened in between.'}],sp:'c6-s1'},
 {q:'What goes in a two-minute plan?',opts:[{t:'The overview, the two groups and the key figures',ok:1,why:'Notes, not sentences.'},{t:'A full first draft',why:'There isn’t time.'},{t:'A list of every figure',why:'Choose the key ones.'}],sp:'c6-s2'},
 {q:'“The number of visitors rised.” Which criterion does this affect?',opts:[{t:'Grammatical Range and Accuracy',ok:1,why:'A verb form error.'},{t:'Task Achievement',why:'The data is not wrong; the grammar is.'},{t:'Coherence and Cohesion',why:'That is about organisation.'}],sp:'c6-s3'},
 {q:'“Went up a lot” used six times affects…',opts:[{t:'Lexical Resource',ok:1,why:'Vague, repeated vocabulary.'},{t:'Grammatical Range and Accuracy',why:'It is grammatically correct.'},{t:'Task Achievement',why:'The figures may still be right.'}],sp:'c6-s3'},
 {q:'Paid work 210 minutes, housework 95. Which is accurate?',opts:[{t:'more than twice as long',ok:1,why:'210 ÷ 95 ≈ 2.2.'},{t:'three times as long',why:'That would be 285 minutes.'},{t:'about the same',why:'The gap is large.'}],sp:'c6-s4'},
 {q:'In the exam, how should you divide 20 minutes for Task 1?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 minutes of writing, no plan',why:'Planning saves time.'},{t:'10 to plan, 10 to write',why:'Not enough writing time.'}],sp:'c6-s5'},
 {q:'Printed books sold 150 million; e-books and audiobooks sold 115 million together. Which is accurate?',opts:[{t:'Printed books outsold the two digital formats combined.',ok:1,why:'150 > 115.'},{t:'Printed books sold twice as many as the digital formats combined.',why:'Twice 115 would be 230 million.'},{t:'The digital formats sold more than printed books.',why:'115 is less than 150.'}],sp:'c6-s5'}
];

const cannow=[['Check the chart type, units, categories and time before planning','c6-s1'],['Plan an answer in two minutes','c6-s2'],['Review an answer against the four marking criteria','c6-s3'],['Write a complete answer of at least 150 words','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
addChapter({n:6,spreads,acts,gloss,charts:{time:C.time,time2:Object.assign({},C.time,{id:'ch-time2'}),bsales:C.bsales},retrieval,minitest,cannow});
})();
