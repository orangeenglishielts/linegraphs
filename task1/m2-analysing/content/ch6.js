/* ==========================================================================
   MODULE 2 · CHAPTER 6 · APPLYING THE SKILLS
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the chart
     c6-read    choice    Supported    Step 1  Key features
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
const {C,illus}=F2;
const P='Chapter 6',CT='Applying the Skills',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The chart below shows the percentage of boys and girls aged 12 to 16 in one country who took part in five sports each week';
const TASK_T='The graph below shows the number of e-scooters available to rent in three cities between 2019 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.sport,{id:'ch-f2sport-hot',hot:1,hotBar:[1,2]});

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings the whole module together. You’ll read a chart with the checks from Chapters 1, 2 and 5, find its key features, select and compare, and write two complete answers: one untimed and one under exam conditions.',
  outcomes:['read a chart fully before writing','find the key features and plan around them','check your answer against the four criteria','write a complete answer of at least 150 words in 20 minutes, using '+T('selection')+' and comparison'],
  illus:illus('apply'),
  steps:[[1,'c6-s1','Read the question','The full check','Discover'],[2,'c6-s2','Plan in two minutes','Key features into paragraphs','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A complete answer, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Run the checks from Chapters 1, 2 and 5: read the visual, decide whether it is static or dynamic, then find the key features.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Title:</b> what, who, where, when.</li><li><b>Axes and units:</b> percentages of each group.</li><li><b>Legend:</b> boys and girls.</li><li><b>Static or dynamic:</b> no time, so compare.</li><li><b>Key features:</b> the highest for each group, the biggest gaps, which group leads in each sport.</li></ol>${chart('sport')}${take('Five-point check, then key features, then plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the sports chart and a blank plan.','Overview: football top for boys, swimming top for girls; boys ahead in three sports, widest gap in football.','Body 1: the sports where boys led.','Body 2: the sports where girls led, and dance.']})}<div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> football top for boys · swimming top for girls · boys ahead in 3 of 5, widest gap in football<br><b>Body 1 (boys ahead):</b> football 48 v 22 (more than twice) · cycling 25 v 18 · basketball 20 v 12<br><b>Body 2 (girls ahead):</b> swimming 34 v 30 · dance 28 v 6 (more than four times), boys’ lowest</div>${note('Grouping by “who leads” keeps every comparison inside one paragraph.')}<div class="clear"></div>${take('Two minutes: the overview, two groups, the figures and comparisons you will use.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Run through the four criteria every time you finish:</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>Task Achievement:</b> a clear overview, the key features, accurate figures?</li><li><b>Coherence and Cohesion:</b> logical groups, purposeful linking?</li><li><b>Lexical Resource:</b> precise comparison language?</li><li><b>Grammatical Range and Accuracy:</b> accurate comparatives and tenses?</li></ol>${mistake('Football 48 and 22. Swimming 30 and 34. Dance 6 and 28.')}${insight('Stronger','Almost half of boys played football each week, more than twice the proportion of girls.')}${take('Overview, grouping, precise comparisons, accurate grammar: check all four.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on selection and accurate comparison.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('sport2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['Give Task 1 about 20 minutes: Task 2 is worth twice as much.','Plan for 2 minutes, write for 15, check for 3.','This chart is dynamic: describe change, and compare.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('scoot')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Read the visual fully: title, units, legend, static or dynamic, key features.','Plan in two minutes, grouping so that comparisons stay together.','Check all four criteria before you finish.','Give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a bar chart',decision:'Find each part of the chart.',prompt:'Select the part that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title.',x:'Those are the categories: five sports.',y:'That is the value axis: the percentage taking part.',legend:'That is the legend: boys and girls.',point:'That is a single bar.'},
  targets:[{q:'Who and what does the chart describe?',part:'title',ok:'Boys and girls aged 12 to 16 in one country, and five sports each week.'},
           {q:'What is the unit?',part:'y',ok:'The percentage of each group taking part.'},
           {q:'Which colour is girls?',part:'legend',ok:'The legend shows girls in orange.'},
           {q:'What percentage of girls danced each week?',part:'point',ok:'28%, more than four times the figure for boys.'}]},
'c6-read':{type:'choice',level:'Supported',skill:'Key features',decision:'Which is a key feature?',
  opts:[{t:'Football was most popular among boys, but swimming among girls.',ok:1,why:'The top sport differs between the groups.'},{t:'Basketball was 20% for boys.',why:'A single figure, not a feature.'},{t:'The chart has five sports.',why:'Layout, not data.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best?',
  opts:[{t:'Body 1: the sports where boys led. Body 2: the sports where girls led.',ok:1,why:'Every boy and girl comparison stays in one paragraph.'},{t:'Body 1: boys. Body 2: girls.',why:'This separates every comparison.'},{t:'One paragraph per sport.',why:'Five short paragraphs.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which paragraph does each sport belong in?',cats:['Body 1: boys led','Body 2: girls led'],
  items:[{w:'Football',c:0,m:'48% against 22%.'},{w:'Swimming',c:1,m:'34% against 30%.'},{w:'Dance',c:1,m:'28% against 6%.'},{w:'Cycling',c:0,m:'25% against 18%.'},{w:'Basketball',c:0,m:'20% against 12%.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'There is no overview.',a:0,right:'A clear overview is part of Task Achievement.',wrong:'A missing overview affects Task Achievement.'},
         {t:'The comparisons between boys and girls are split across two paragraphs.',a:1,right:'Less effective organisation: Coherence and Cohesion.',wrong:'This is about organisation: Coherence and Cohesion.'},
         {t:'“Girls were more higher in dance.”',a:3,right:'A comparative error: grammar.',wrong:'“More higher” is a grammar error.'},
         {t:'“A lot more” is used in every comparison.',a:2,right:'Imprecise, repeated wording: Lexical Resource.',wrong:'This is about word choice.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Dance showed the most striking contrast: 28% of girls danced every week, more than four times the figure for boys.',ok:1,why:'A key feature, an accurate ratio (28 ÷ 6 ≈ 4.7) and precise wording.'},{t:'Girls danced a lot more than boys.',why:'Vague: by how much?'},{t:'Dance was 28 and 6.',why:'A list, without units or comparison.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names the top sport for each group.',fix:'Football was top for boys; swimming for girls.',fn:v=>/football/i.test(v.ov)&&/swim/i.test(v.ov)},
          {t:'You compared boys and girls with a ratio.',fix:'Add a ratio: more than twice, more than four times.',fn:v=>/(twice|times)/i.test(v.b1+' '+v.b2)},
          {t:'No verbs of change: the chart is static.',fix:'Remove rose, fell or increased: there are no years.',fn:v=>!/\b(rose|fell|increased|decreased|grew|dropped)\b/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart compares the proportion of boys and girls between the ages of 12 and 16 in one country who did five different sports every week.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, football was by far the most popular sport among boys, whereas swimming was the most popular among girls.</button> Boys were more likely than girls to take part in three of the five sports, with the widest gap in football.</p><p><span class="plabel">Body 1</span>Almost half of boys (48%) played football each week, <button type="button" class="hl" data-n="1">more than twice the proportion of girls (22%)</button>. Boys also led in cycling and basketball, at 25% and 20% respectively, compared with 18% and 12% for girls.</p><p><span class="plabel">Body 2</span>Girls, on the other hand, were more active in swimming and dance. Swimming attracted 34% of girls, slightly more than boys (30%), <button type="button" class="hl" data-n="2">while dance showed the most striking contrast</button>: 28% of girls danced every week, <button type="button" class="hl" data-n="3">more than four times the figure for boys, which was just 6%</button>, the lowest of any sport for either group.</p>`,
  notes:['The top sport for each group, with no figures. 48% against 30% makes “by far” accurate.','A ratio: 48 ÷ 22 ≈ 2.2.','A key feature introduced as a contrast.','A ratio (28 ÷ 6 ≈ 4.7) and the lowest figure on the chart.'],
  self:['My overview names the key features without figures.','My paragraphs are grouped by who leads.','Every comparison says by how much.','I used no verbs of change.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Five-point check, key features, groups, figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Overview, accuracy, units, grammar and word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The line graph…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described all three cities.',fix:'Include City X, City Y and City Z.',fn:v=>/city x/i.test(v.a)&&/city y/i.test(v.a)&&/city z/i.test(v.a)},
          {t:'You wrote numbers in full.',fix:'The graph is in thousands: write 22,000, not 22.',fn:v=>/\d{1,2},000/.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The line graph illustrates how many rental e-scooters were available in three cities between 2019 and 2025.</p><p>Overall, numbers rose substantially in City X and City Y, with City Y overtaking City X towards the end of the period. In City Z, by contrast, the number of e-scooters rose slightly at first but then declined, finishing lower than it started.</p><p>In 2019, City Z had the most e-scooters, at 4,000, followed by City X with 2,000, while City Y had none at all. City X expanded rapidly to 12,000 by 2022 and then levelled off at around 15,000. City Y grew more slowly at first, but it then rose sharply, overtaking City X between 2023 and 2024 and reaching 22,000 in 2025.</p><p>City Z followed a different pattern. Its fleet grew to 6,000 in 2020 and stayed at that level in 2021, before falling steadily to just 2,000 in 2025, half its 2019 figure.</p>`,
  self:['I planned for about two minutes.','My overview gives the main trends without figures.','I described change and compared the cities.','I wrote every figure with its unit.']}
};

const gloss={
  'selection':{term:'selection',def:'Choosing the key features and the figures that support them, rather than listing everything.',path:'M30,30 H210 M60,50 H180 M100,70 H140',ex:'“Good selection leaves room for comparison.”'},
  'levelled off':{term:'levelled off',def:'Stopped rising or falling and stayed at about the same level.',path:'M20,75 L90,35 L150,22 L220,20',ex:'“City X levelled off at around 15,000.”'},
  'fleet':{term:'fleet',def:'All the vehicles of one kind run by a city or company.',path:'M30,60 H70 M90,60 H130 M150,60 H190',ex:'“City Z’s fleet fell to 2,000.”'}
};

const retrieval={
 'c6-s1':[{q:'The sports chart has no years. It is…',opts:[{t:'static',ok:1,why:'Compare.'},{t:'dynamic',why:'No time.'}]}],
 'c6-s2':[{q:'Best grouping for the sports chart?',opts:[{t:'By which group led',ok:1,why:'Comparisons stay together.'},{t:'Boys, then girls',why:'Separates comparisons.'}]}],
 'c6-s3':[{q:'“Girls were more higher” affects…',opts:[{t:'Grammatical Range and Accuracy',ok:1,why:'A comparative error.'},{t:'Task Achievement',why:'Grammar.'}]}],
 'c6-s4':[{q:'28% compared with 6% is…',opts:[{t:'more than four times',ok:1,why:'≈ 4.7.'},{t:'twice',why:'No.'}]}],
 'c6-s5':[{q:'When did City Y overtake City X?',opts:[{t:'Between 2023 and 2024',ok:1,why:'13 < 14 in 2023; 19 > 15 in 2024.'},{t:'In 2020',why:'X was well ahead.'}]}]
};

const minitest=[
 {q:'What is the first step with any chart?',opts:[{t:'The full check',ok:1,why:'Title, units, legend, time, features.'},{t:'Start writing',why:'Read first.'},{t:'Count the words',why:'Later.'}],sp:'c6-s1'},
 {q:'Which sport was most popular among girls?',opts:[{t:'Swimming',ok:1,why:'34%.'},{t:'Dance',why:'28%.'},{t:'Football',why:'22%.'}],sp:'c6-s1'},
 {q:'Why group by who led?',opts:[{t:'Each comparison stays in one paragraph',ok:1,why:'Clear.'},{t:'It is shorter',why:'It is clearer.'},{t:'It isn’t necessary',why:'It helps coherence.'}],sp:'c6-s2'},
 {q:'Body 1 all boys, Body 2 all girls mainly affects…',opts:[{t:'Coherence and Cohesion',ok:1,why:'Organisation.'},{t:'Lexical Resource',why:'Words may be fine.'},{t:'Grammar',why:'Grammar may be fine.'}],sp:'c6-s3'},
 {q:'Which is stronger?',opts:[{t:'Almost half of boys played football, more than twice the proportion of girls.',ok:1,why:'Selected and compared.'},{t:'Football 48 and 22.',why:'A list.'},{t:'Boys liked football.',why:'Vague.'}],sp:'c6-s3'},
 {q:'48% and 22%. Boys’ figure was…',opts:[{t:'more than twice the girls’',ok:1,why:'≈ 2.2.'},{t:'three times',why:'66%.'},{t:'about the same',why:'No.'}],sp:'c6-s4'},
 {q:'City Z went from 4,000 to 2,000. That is…',opts:[{t:'half its 2019 figure',ok:1,why:'2 ÷ 4.'},{t:'a quarter',why:'No.'},{t:'a rise',why:'A fall.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 plan, 15 write, 3 check',ok:1,why:'Balanced.'},{t:'20 write',why:'No plan or check.'},{t:'10 plan, 10 write',why:'Too little writing.'}],sp:'c6-s5'}
];

const cannow=[['Read a chart fully before writing','c6-s1'],['Plan around the key features','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer for a static chart','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
addChapter({n:6,spreads,acts,gloss,charts:{sport:C.sport,sport2:Object.assign({},C.sport,{id:'ch-f2sport2'}),'sport-hot':HOT,scoot:C.scoot},retrieval,minitest,cannow});
})();
