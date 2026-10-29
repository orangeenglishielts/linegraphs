/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 6 · APPLYING THE SKILLS
   ACTIVITY IDS (type · level)
     c6-focus   sort      Guided       Step 1  What does each overview need?
     c6-types   binary    Supported    Step 1  Good overview for its task?
     c6-ov      choice    Supported    Step 2  The food waste overview
     c6-plan    choice    Supported    Step 2  Plan the body
     c6-check   binary    Supported    Step 3  Five-mistake check
     c6-edit    choice    Independent  Step 3  The stronger overview
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C}=OV;
const P='Chapter 6',CT='Applying the Skills',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The chart below shows the percentage of households that recycled food waste in five cities in 2012 and 2024';
const TASK_T='The table below shows the average monthly spending of households in one country on five categories in 2005, 2015 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="72" r="52" fill="#FBE6CF"/><path d="M200,72 L200,32" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,72 L228,87" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="144" fill="#292929">Overall, …</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'You now know how to write an overview for every kind of Task 1 chart. In this chapter you’ll check what each task type needs, write a complete answer with a strong overview at its centre, and finish with a timed task.',
  outcomes:['choose the right overview focus for every task type','write an overview first, then plan the body around it',`check an overview against the ${T('five-mistake check')}`,'write a complete answer of at least 150 words in 20 minutes'],
  illus:ill,
  steps:[[1,'c6-s1','Every task type','What each overview needs','Discover'],[2,'c6-s2','Overview first','Then plan the body','Understand'],[3,'c6-s3','Self-editing','The five-mistake check','Practise'],[4,'c6-s4','Writing practice','Food waste, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Every task type',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Every task type</h2><p>Each kind of task has its own overview focus:</p><ul class="clean"><li><b>Trends over time</b> (line graphs, bar charts and tables with years): the overall direction, crossovers.</li><li><b>Comparisons</b> (static data): the largest, the smallest, a pattern across groups.</li><li><b>Pie charts:</b> the largest share; for two years, which shares grew and shrank.</li><li><b>Mixed charts:</b> one key feature from each chart.</li><li><b>Maps:</b> the general change, and what stayed the same.</li><li><b>Processes:</b> the number of stages, the start and end, linear or cycle.</li></ul>${take('Match the overview to the task type: trends, comparisons, shares, two charts, changes or stages.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-focus"></div><div data-act="c6-types" style="margin-top:16px"></div>`}),

sp('c6-s2','Overview first',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Overview first</h2>${vid({title:'Overview first',len:'2 minutes',script:['Show the food waste chart.','Write the overview before anything else: four cities rose, one fell; Dorne went from lowest to highest.','Then plan the body: Body 1, the big risers; Body 2, the small changes.','Say: the overview tells you how to group the body.']})}<p>Plan the overview first. Then the body paragraphs give the evidence for it, in the same groups.</p>${chart('foodrec')}<div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> rose in four of five cities · dramatic in Dorne and Avon · Ely the only fall · Dorne lowest → highest<br><b>Body 1:</b> Dorne and Avon, the big rises<br><b>Body 2:</b> Brent, Carlow and Ely, the smaller changes</div>${take('Write the overview plan first. Its groups become your body paragraphs.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c6-ov"></div><div data-act="c6-plan" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Before you move on from your overview, run the ${T('five-mistake check')}:</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>Figures?</b> Remove them.</li><li><b>Details?</b> Replace them with the pattern.</li><li><b>Opinions or reasons?</b> Remove them.</li><li><b>“In conclusion”?</b> Use “Overall,”, after the introduction.</li><li><b>Vague or inaccurate?</b> Make it specific, and check it against every bar, line or row.</li></ol>${mistake('<s>Overall, recycling went up everywhere.</s> Inaccurate: Ely fell. And it misses the most striking change.')}${insight('Stronger','Overall, the proportion of households recycling food waste rose in four of the five cities, most dramatically in Dorne and Avon, while Ely saw a small fall.')}${take('Run the five-mistake check on every overview before you write the body.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 2.</p><div data-act="c6-check"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on the overview first, then the body.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('foodrec2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: use your two planning minutes to decide the overview.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('hspend')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Match the overview to the task type.','Plan the overview first; its groups become the body paragraphs.','Run the five-mistake check on every overview.','Give Task 1 about 20 minutes, with two minutes to decide the overview.']})
];

const acts={
'c6-focus':{type:'sort',level:'Guided',skill:'Overview focus',decision:'What should the overview focus on?',cats:['Overall direction','Largest and smallest','General change','Stages, start and end'],
  items:[{w:'A line graph of prices, 2000 to 2025',c:0,m:'a trend over time.'},{w:'A bar chart comparing five countries in one year',c:1,m:'static comparison.'},{w:'Two maps of a village, 1990 and 2025',c:2,m:'a map.'},{w:'A diagram of how paper is recycled',c:3,m:'a process.'},{w:'A table of sales in four shops in one month',c:1,m:'static comparison.'}]},
'c6-types':{type:'binary',level:'Supported',skill:'Overviews for every type',decision:'Is each overview right for its task type?',labels:['Right','Not right'],
  items:[{t:'Process: Overall, the process has seven stages, from harvesting to packaging.',a:0,right:'Count, start and end.',wrong:'This gives the shape of the process: right.'},
         {t:'Map: Overall, a new car park was built next to the school.',a:1,right:'Right. One change, not the general change.',wrong:'One change is a detail: a map overview needs the general change.'},
         {t:'Mixed: Overall, sales rose steadily, and clothing was the largest category of online spending.',a:0,right:'One feature from each chart.',wrong:'It covers both charts: right.'},
         {t:'Static bar chart: Overall, spending rose in every country.',a:1,right:'Right. One year only: nothing rose.',wrong:'Static data needs comparison, not change.'}]},
'c6-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which is the best overview of the food waste chart?',
  opts:[{t:'Overall, the proportion rose in four of the five cities, most dramatically in Dorne and Avon, and Dorne went from the lowest rate to the highest.',ok:1,why:'The pattern, the biggest changes, and the change of order.'},{t:'Overall, food waste recycling rose in all five cities.',why:'Ely fell slightly, from 40% to 38%.'},{t:'Overall, Dorne rose from 8% to 51%.',why:'Figures, and only one city.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning the body',decision:'Which body plan follows from the overview?',
  opts:[{t:'Body 1: Dorne and Avon, the big rises. Body 2: Brent, Carlow and Ely, the smaller changes.',ok:1,why:'The groups come straight from the overview.'},{t:'Body 1: 2012. Body 2: 2024.',why:'This separates each city’s change into two halves.'},{t:'One paragraph per city.',why:'Five short paragraphs with no grouping.'}]},
'c6-check':{type:'binary',level:'Supported',skill:'The five-mistake check',decision:'Does each overview pass the check?',labels:['Passes','Fails'],
  items:[{t:'Overall, Ely was the only city where the rate fell.',a:0,right:'Specific, true, no figures.',wrong:'It is accurate and has no figures: it passes.'},
         {t:'Overall, Dorne was the best city for recycling.',a:1,right:'Right. “Best” is an opinion.',wrong:'“Best” is a judgement: it fails.'},
         {t:'In conclusion, rates rose in most cities.',a:1,right:'Right. Use “Overall,”.',wrong:'“In conclusion” fails the check.'},
         {t:'Overall, the proportion of households recycling food waste changed.',a:1,right:'Right. Too vague.',wrong:'This could describe any chart: too vague.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'Overall, rates rose in most cities, most sharply in Dorne, which went from the lowest rate to the highest, while Ely saw a small fall.',ok:1,why:'Specific and accurate, with the key change.'},{t:'Overall, recycling went up everywhere.',why:'Inaccurate: Ely fell.'},{t:'Overall, Dorne went from 8% to 51%.',why:'Figures, and one city only.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview is accurate about Ely.',fix:'Ely fell: don’t say the rate rose everywhere.',fn:v=>!/\b(all|every) (five |the )?cit(y|ies)\b/i.test(v.ov)||/ely/i.test(v.ov)},
          {t:'Your overview names the biggest changes.',fix:'Mention Dorne and Avon, or Dorne going from lowest to highest.',fn:v=>/dorne/i.test(v.ov)},
          {t:'Your body paragraphs cover all five cities.',fix:'Include Avon, Brent, Carlow, Dorne and Ely.',fn:v=>['avon','brent','carlow','dorne','ely'].every(c=>new RegExp('\\b'+c+'\\b','i').test(v.b1+' '+v.b2))},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart compares the proportion of homes in five cities that recycled their food waste in 2012 and twelve years later, in 2024.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the proportion rose in four of the five cities, most dramatically in Dorne and Avon, while it fell slightly in Ely.</button> <button type="button" class="hl" data-n="1">Dorne went from having the lowest rate to the highest.</button></p><p><span class="plabel">Body 1</span>The most dramatic increases were in Dorne and Avon. In Dorne, only 8% of households recycled food waste in 2012, the lowest figure of the five cities, but by 2024 this had risen to 51%, more than six times as high and the highest rate of all. The figure for Avon quadrupled, from 12% to 48%.</p><p><span class="plabel">Body 2</span>Brent also saw a considerable rise, from a quarter of households to 40%. By contrast, the rate in Carlow barely changed, edging up from 30% to 32%, while Ely, which had the highest rate in 2012 at 40%, <button type="button" class="hl" data-n="2">was the only city where the figure fell, dropping slightly to 38%.</button></p>`,
  notes:['The pattern, the biggest changes and the exception, with no figures.','The change of order: overview material.','The exception from the overview, now with its figures as evidence.'],
  self:['I planned the overview before the body.','My overview passes the five-mistake check.','My body paragraphs follow the overview’s groups.','Every figure is accurate.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Decide the overview first, then the groups for the body.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Run the five-mistake check on your overview, then check the word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The table…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|it is clear)/i.test(v.a)},
          {t:'You gave figures in euros.',fix:'Give figures with €, for example €950.',fn:v=>(v.a.match(/€\s?\d/g)||[]).length>=4},
          {t:'You reported the fall in clothing.',fix:'Clothing was the only category to fall throughout: report it.',fn:v=>/clothing/i.test(v.a)&&/(fell|fall|declin|decreas|drop|less)/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The table shows how much an average household in one country spent each month on five categories of goods and services in 2005, 2015 and 2025.</p><p>Overall, spending rose in four of the five categories over the twenty years, and housing remained by far the largest expense. Leisure spending grew fastest, while clothing was the only category to fall throughout.</p><p>Housing costs rose from €620 a month in 2005 to €780 in 2015 and €950 in 2025, an increase of €330. Spending on food also rose steadily, from €310 to €380, and food remained the second-largest category in every year. Transport followed a different pattern, rising to €210 in 2015 before falling slightly to €200.</p><p>The most striking change was in leisure, where spending almost doubled, from €120 to €230, so that by 2025 it had overtaken transport. Clothing, by contrast, fell in both periods, from €90 to just €70, and it remained the smallest category throughout.</p>`,
  self:['I decided the overview in my two planning minutes.','My overview passes the five-mistake check.','I grouped the categories in the body.','I checked every figure and every euro sign.']}
};

const gloss={
  'five-mistake check':{term:'five-mistake check',def:'A quick test for every overview: no figures, no details, no opinions or reasons, no conclusion, nothing vague or inaccurate.',path:'M30,50 L60,80 L120,20 M140,30 H220 M140,50 H220 M140,70 H200',ex:'“Run the five-mistake check before you write the body.”'},
  'quadrupled':{term:'quadrupled',def:'Became four times as large.',path:'M40,80 V65 H70 V80 M140,80 V20 H170 V80',ex:'“The figure for Avon quadrupled, from 12% to 48%.”'},
  'edging up':{term:'edging up',def:'Rising very slightly.',path:'M20,60 L220,52',ex:'“The rate in Carlow edged up from 30% to 32%.”'}
};

const retrieval={
 'c6-s1':[{q:'A map overview focuses on…',opts:[{t:'the general change and what stayed the same',ok:1,why:'No figures on a map.'},{t:'the largest building',why:'A detail.'}]}],
 'c6-s2':[{q:'Why plan the overview first?',opts:[{t:'Its groups become the body paragraphs',ok:1,why:'Overview, then evidence.'},{t:'It is the shortest part',why:'It shapes the whole answer.'}]}],
 'c6-s3':[{q:'“Overall, recycling went up everywhere.” Problem?',opts:[{t:'Inaccurate: Ely fell',ok:1,why:'Check every bar.'},{t:'None',why:'Ely fell.'}]}],
 'c6-s4':[{q:'Which city went from lowest to highest?',opts:[{t:'Dorne',ok:1,why:'8% to 51%.'},{t:'Avon',why:'Second highest in 2024.'}]}],
 'c6-s5':[{q:'Leisure €120 → €230 is…',opts:[{t:'almost double',ok:1,why:'Double would be €240.'},{t:'more than double',why:'€230 is less than €240.'}]}]
};

const minitest=[
 {q:'What should a process overview give?',opts:[{t:'The number of stages, start and end',ok:1,why:'The shape.'},{t:'The temperature at each stage',why:'A detail.'},{t:'The largest figure',why:'Processes rarely have figures.'}],sp:'c6-s1'},
 {q:'What should a mixed-chart overview give?',opts:[{t:'One key feature from each chart',ok:1,why:'Both charts.'},{t:'Only the bigger chart',why:'Both.'},{t:'Every figure',why:'Figures go in the body.'}],sp:'c6-s1'},
 {q:'What comes first in your plan?',opts:[{t:'The overview',ok:1,why:'It decides the groups.'},{t:'The figures',why:'They support the overview.'},{t:'The conclusion',why:'No conclusion.'}],sp:'c6-s2'},
 {q:'Which body plan follows the food waste overview?',opts:[{t:'Big rises, then smaller changes',ok:1,why:'The overview’s groups.'},{t:'2012, then 2024',why:'Splits each change.'},{t:'Alphabetical order',why:'No grouping.'}],sp:'c6-s2'},
 {q:'Which passes the five-mistake check?',opts:[{t:'Overall, Ely was the only city where the rate fell.',ok:1,why:'Specific, true, no figures.'},{t:'Overall, Dorne was the best.',why:'Opinion.'},{t:'In conclusion, rates rose.',why:'Conclusion.'}],sp:'c6-s3'},
 {q:'Dorne 8% → 51%. Which is accurate?',opts:[{t:'more than six times as high',ok:1,why:'6.4.'},{t:'five times as high',why:'5 × 8 = 40.'},{t:'quadrupled',why:'4 × 8 = 32.'}],sp:'c6-s4'},
 {q:'Which category was the only one to fall throughout?',opts:[{t:'Clothing',ok:1,why:'€90, €80, €70.'},{t:'Transport',why:'It rose, then fell.'},{t:'Food',why:'It rose.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Match the overview to the task type','c6-s1'],['Plan the overview first and group the body around it','c6-s2'],['Run the five-mistake check','c6-s3'],['Write a complete answer with a strong overview','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{foodrec:C.foodrec,foodrec2:cp('foodrec','ch-foodrec2'),hspend:C.hspend},retrieval,minitest,cannow});
})();
