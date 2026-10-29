/* ==========================================================================
   MODULE 6 · CHAPTER 6 · APPLYING THE SKILLS
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the chart
     c6-read1   choice    Supported    Step 1  The biggest change
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
const {C}=CMP;
const P='Chapter 6',CT='Applying the Skills',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The chart below shows the percentage of workers in five sectors in one country who worked from home at least one day a week in 2019 and 2024';
const TASK_T='The table below shows the number of students enrolled on four language courses at a college in 2015, 2020 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.wfh,{id:'ch-m6wfh-hot',hot:1,hotBar:[1,1]});
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="72" r="52" fill="#FBE6CF"/><path d="M200,72 L200,32" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,72 L228,87" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="144" fill="#292929">20 minutes</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings comparison and organisation together in complete answers. You’ll read a bar chart, group the categories, plan in two minutes, check your work against the four marking criteria and finish with a timed task on a table.',
  outcomes:['find the biggest differences and changes in a chart','group categories into two focused body paragraphs','check your comparisons and cohesion against the four criteria',`write a complete answer in 20 minutes with accurate comparisons and ${T('percentage points')}`],
  illus:ill,
  steps:[[1,'c6-s1','Read the question','Changes and comparisons','Discover'],[2,'c6-s2','Plan in two minutes','Groups and paragraphs','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A bar chart, untimed','Apply'],[5,'c6-s5','The timed task','A table, 20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>The unit:</b> percentages of workers.</li><li><b>The years:</b> 2019 and 2024, both finished: past simple.</li><li><b>The biggest changes:</b> calculate them in percentage points.</li><li><b>The groups:</b> which sectors behave alike?</li></ol>${chart('wfh')}${note('IT and finance both rose by 35 percentage points. Health and retail rose by only 4 and 3.')}<div class="clear"></div>${take('Unit, years, the biggest changes, the groups: check them all before you plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the home-working chart and a blank plan with four lines.','Overview: up in every sector; far more in IT and finance; IT highest; retail and health lowest.','Body 1: the big risers, IT and finance, plus education.','Body 2: health and retail, small rises. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> up everywhere · far more in IT and finance · IT highest · retail and health lowest<br><b>Body 1:</b> IT 45 → 80 · finance 30 → 65 (both +35 points) · education 10 → 25<br><b>Body 2:</b> health 8 → 12 · retail 5 → 8, lowest</div>${note('Group by the size of the change, so each paragraph has one focus.')}<div class="clear"></div>${take('Two minutes: overview, two groups, the figures for each.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter of your Task 1 score. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are the key differences covered accurately, in percentage points?</li><li><b>${T('Coherence and Cohesion')}:</b> does each paragraph have one focus? Are references clear and linkers natural?</li><li><b>${T('Lexical Resource')}:</b> are comparison words accurate and varied?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> are comparatives and superlatives formed correctly?</li></ol>${mistake('<s>Finance rose by 35%, more higher than education.</s>')}${insight('Stronger','In finance, the proportion rose by 35 percentage points, far more than in education (15 points).')}${take('Overview, focus, accurate comparison words, correct forms: check all four.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('wfh2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: in a table, find the leader at the start, the leader at the end, and the biggest change.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('lang')}<div class="clear"></div>`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Calculate the biggest changes and differences before you plan.','Group categories by how they behave, one focus per paragraph.','Check comparison words, forms and references against the four criteria.','Give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a bar chart',decision:'Find each part of the chart.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title.',x:'That is the horizontal axis: the five sectors.',y:'That is the vertical axis: the percentage of workers.',legend:'That is the legend: which colour is which year.',point:'That is a single bar.'},
  targets:[{q:'What unit are the figures in?',part:'y',ok:'Percentages of workers.'},{q:'Which years are compared?',part:'legend',ok:'2019 and 2024.'},{q:'What percentage of finance workers worked from home in 2024?',part:'point',ok:'65%, up from 30% in 2019.'}]},
'c6-read1':{type:'choice',level:'Supported',skill:'Biggest changes',decision:'Which sentence is accurate?',
  opts:[{t:'IT and finance both rose by 35 percentage points.',ok:1,why:'80 − 45 and 65 − 30.'},{t:'Education rose by the most.',why:'+15 points, less than IT and finance.'},{t:'Retail fell slightly.',why:'It rose, from 5% to 8%.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the home-working chart?',
  opts:[{t:'Body 1: IT, finance and education (big rises). Body 2: health and retail (small rises).',ok:1,why:'Grouped by the size of the change.'},{t:'Body 1: 2019. Body 2: 2024.',why:'This separates each sector’s change.'},{t:'One paragraph for each sector.',why:'Five short paragraphs.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which paragraph does each sector belong in?',cats:['Body 1: big rises','Body 2: small rises'],
  items:[{w:'IT: 45% → 80%',c:0,m:'+35 points.'},{w:'Finance: 30% → 65%',c:0,m:'+35 points.'},{w:'Education: 10% → 25%',c:0,m:'+15 points.'},{w:'Health: 8% → 12%',c:1,m:'+4 points.'},{w:'Retail: 5% → 8%',c:1,m:'+3 points.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'“Finance rose by 35%.” (It rose by 35 percentage points.)',a:0,right:'An inaccurate figure: Task Achievement.',wrong:'The data is reported wrongly: Task Achievement.'},
         {t:'“IT was more higher than finance.”',a:3,right:'A double comparative: grammar.',wrong:'This is a grammar error: higher.'},
         {t:'Every sentence begins with “Moreover”.',a:1,right:'Mechanical linking: Coherence and Cohesion.',wrong:'This is about linking.'},
         {t:'“Retail rose dramatically.” (5% to 8%)',a:2,right:'A size word that doesn’t fit: Lexical Resource (and Task Achievement, because it misreports the data).',wrong:'This is about word choice.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'In finance, the proportion more than doubled, from 30% to 65%, while in retail it rose only slightly, from 5% to 8%.',ok:1,why:'Accurate multiples and size words, linked with while.'},{t:'Finance rose by 35% and retail rose by 3%.',why:'These are percentage points, and there is no comparison.'},{t:'Finance was more higher than retail.',why:'A double comparative, with no figures.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'You covered all five sectors.',fix:'Include IT, finance, education, health and retail.',fn:v=>{const t=v.b1+' '+v.b2;return /\bIT\b/.test(t)&&/financ/i.test(t)&&/educat/i.test(t)&&/health/i.test(t)&&/retail/i.test(t)}},
          {t:'You used percentage points for a change.',fix:'A change between percentages is in percentage points.',fn:v=>/percentage points?/i.test(v.b1+' '+v.b2)},
          {t:'No double comparatives.',fix:'Remove “more” before an -er form.',fn:v=>!/more (higher|lower|bigger|smaller|greater)/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'You used a contrast linker.',fix:'Add while, whereas or by contrast.',fn:v=>/\b(while|whereas|by contrast|in contrast|however)\b/i.test(v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart compares the proportion of employees in five areas of the economy in one country who did some of their work from home, at least weekly, in 2019 and in 2024.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, home working became more common in every sector, but the increase was far greater in IT and finance than elsewhere.</button> IT had the highest proportion of home workers in both years, while retail and health remained the sectors where home working was least common.</p><p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="1">The largest increases were in IT and finance, where the proportion of employees working from home rose by 35 percentage points in each case.</button> In IT, the figure climbed from 45% to 80%, <button type="button" class="hl" data-n="2">while in finance it more than doubled, from 30% to 65%</button>. Education also saw a notable rise, from just 10% to a quarter of workers (25%).</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">By contrast, home working remained rare in health and retail.</button> The proportion of health workers who worked from home rose only slightly, from 8% to 12%, and the figure for retail grew from 5% to 8%, the lowest of all five sectors in 2024.</p>`,
  notes:['The general pattern and the biggest difference, with no figures.','A topic sentence for the group, in percentage points.','A reference (it) and a calculated multiple: 65 ÷ 30 ≈ 2.2.','A signpost and topic sentence for the contrasting group.'],
  self:['My overview gives the main pattern without figures.','Each body paragraph has one group.','I used percentage points for changes.','My comparatives are formed correctly.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the leaders, the biggest change and your groups.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check comparisons, references and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The table…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described all four courses.',fix:'Include Spanish, Chinese, French and German.',fn:v=>/spanish/i.test(v.a)&&/chinese/i.test(v.a)&&/french/i.test(v.a)&&/german/i.test(v.a)},
          {t:'You reported a change of leader.',fix:'Spanish overtook French: report it.',fn:v=>/(overt|replac|took over|surpass|most popular)/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The table gives enrolment figures for four language courses offered by one college at three points between 2015 and 2025.</p><p>Overall, Spanish and Chinese grew in popularity, while the number of students taking French fell. Spanish replaced French as the most popular course, and Chinese saw by far the most dramatic growth.</p><p>In 2015, French was the most popular course, with 140 students, followed by Spanish (120). However, Spanish enrolments rose to 150 in 2020 and 170 in 2025, so Spanish had overtaken French by 2020. French, by contrast, declined to 110 and then 95 students, a fall of about a third.</p><p>Chinese started as the least popular course, with just 40 students, but this figure had more than doubled to 85 by 2020 and reached 130 in 2025, more than three times the original number. As a result, Chinese had overtaken German by 2020 and French by 2025. German enrolments changed little, dipping from 90 to 80 before recovering slightly to 85.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the main changes without figures.','I reported the changes of order.','My multiples and fractions are accurate.']}
};

const gloss={
  'percentage points':{term:'percentage points',def:'The difference between two percentages. From 30% to 65% is a rise of 35 percentage points.',path:'M60,80 V50 H100 V80 M140,80 V15 H180 V80',ex:'“The proportion rose by 35 percentage points.”'},
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: a clear overview, the key features and accurate figures. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'Calling percentage points “%” lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: focused paragraphs, clear references and natural linking. A quarter of your Task 1 score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“One group per paragraph improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise, varied comparison and size words. A quarter of your Task 1 score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“More than doubled, rose only slightly, by far.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately. A quarter of your Task 1 score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“Spanish had overtaken French by 2020.”'}
};

const retrieval={
 'c6-s1':[{q:'IT 45% → 80% is a rise of…',opts:[{t:'35 percentage points',ok:1,why:'80 − 45.'},{t:'35%',why:'Percentage points.'}]}],
 'c6-s2':[{q:'Group the sectors by…',opts:[{t:'the size of the change',ok:1,why:'One focus each.'},{t:'the year',why:'Splits each change.'}]}],
 'c6-s3':[{q:'“More higher” mainly affects…',opts:[{t:'Grammatical Range and Accuracy',ok:1,why:'A form error.'},{t:'Task Achievement',why:'The data may be fine.'}]}],
 'c6-s4':[{q:'Finance 30% → 65% is…',opts:[{t:'more than double',ok:1,why:'≈ 2.2.'},{t:'triple',why:'3 × 30 = 90.'}]}],
 'c6-s5':[{q:'Chinese 40 → 130 is…',opts:[{t:'more than three times',ok:1,why:'3.25.'},{t:'four times',why:'4 × 40 = 160.'}]}]
};

const minitest=[
 {q:'Which sectors rose by the same amount?',opts:[{t:'IT and finance',ok:1,why:'35 points each.'},{t:'Health and retail',why:'4 and 3 points.'},{t:'Education and IT',why:'15 and 35 points.'}],sp:'c6-s1'},
 {q:'Which sector had the lowest figure in 2024?',opts:[{t:'Retail',ok:1,why:'8%.'},{t:'Health',why:'12%.'},{t:'Education',why:'25%.'}],sp:'c6-s1'},
 {q:'Which plan keeps comparisons together?',opts:[{t:'Big rises in Body 1, small rises in Body 2',ok:1,why:'Grouped by change.'},{t:'2019 in Body 1, 2024 in Body 2',why:'Splits each change.'},{t:'Alphabetical order',why:'No logic.'}],sp:'c6-s2'},
 {q:'“Finance rose by 35%” (30% → 65%) is…',opts:[{t:'inaccurate: 35 percentage points',ok:1,why:'Points, not per cent.'},{t:'accurate',why:'It rose by 117% in relative terms.'},{t:'too formal',why:'It is inaccurate.'}],sp:'c6-s3'},
 {q:'Which is a natural link?',opts:[{t:'By contrast, home working remained rare in retail.',ok:1,why:'A real contrast.'},{t:'Moreover, furthermore, retail rose.',why:'Stacked linkers.'},{t:'Firstly, retail.',why:'Not a sentence.'}],sp:'c6-s3'},
 {q:'Education 10% → 25% is…',opts:[{t:'two and a half times',ok:1,why:'25 ÷ 10.'},{t:'double',why:'Double would be 20%.'},{t:'triple',why:'Triple would be 30%.'}],sp:'c6-s4'},
 {q:'When did Spanish overtake French?',opts:[{t:'Between 2015 and 2020',ok:1,why:'2020: 150 against 110.'},{t:'Between 2020 and 2025',why:'Already ahead by 2020.'},{t:'It never did',why:'It did.'}],sp:'c6-s5'},
 {q:'French 140 → 95 is a fall of…',opts:[{t:'about a third',ok:1,why:'45 ÷ 140 ≈ 0.32.'},{t:'about a half',why:'Half would leave 70.'},{t:'about a quarter',why:'A quarter would leave 105.'}],sp:'c6-s5'}
];

const cannow=[['Find the biggest changes and differences','c6-s1'],['Group categories into two body paragraphs','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer with accurate comparisons','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{wfh:C.wfh,wfh2:cp('wfh','ch-m6wfh2'),'wfh-hot':HOT,lang:C.lang},retrieval,minitest,cannow});
})();
