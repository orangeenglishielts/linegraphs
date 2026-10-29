/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 6 · APPLYING THE SKILLS
   ACTIVITY IDS (type · level)
     c6-errs    sort      Guided       Step 1  Which accuracy error?
     c6-acc     binary    Supported    Step 1  Accurate or not?
     c6-ov      choice    Supported    Step 2  The news overview
     c6-lang    choice    Supported    Step 2  The best data sentence
     c6-crit    binary    Supported    Step 3  Which criterion?
     c6-edit    fix       Independent  Step 3  The accuracy check
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C}=DD;
const P='Chapter 6',CT='Applying the Skills',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The pie charts below show the main source of news for adults in one country in 2010 and 2025';
const TASK_T='The chart below shows the number of international flights from four airports in one country in 2015 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="72" r="52" fill="#FBE6CF"/><path d="M200,72 L200,32" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,72 L228,87" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="144" fill="#292929">20 minutes, every figure accurate</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings every accuracy skill together: units, proportions, approximations, ratios, percentage points and shares. You’ll run an accuracy check, write a complete answer about two pie charts, and finish with a timed task.',
  outcomes:['recognise every kind of accuracy error',`run an ${T('accuracy check')} on your own writing`,'write a complete answer with accurate data language','write a complete answer of at least 150 words in 20 minutes'],
  illus:ill,
  steps:[[1,'c6-s1','Accuracy errors','Every kind, in one place','Discover'],[2,'c6-s2','Plan with accuracy','The news pies','Understand'],[3,'c6-s3','Self-editing','The accuracy check','Practise'],[4,'c6-s4','Writing practice','The news pies, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Accuracy errors',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Accuracy errors</h2><p>Every chapter of this module fixed one kind of accuracy error. Here they are together:</p><ul class="clean"><li><b>Units:</b> <s>Lakeland had 4.1.</s> → 4.1 million visitors.</li><li><b>Proportions:</b> <s>the vast majority (54%)</s> → just over half.</li><li><b>Approximations:</b> <s>almost half (52%)</s> → just over half.</li><li><b>Ratios:</b> <s>twice more than</s> → twice as much as.</li><li><b>Points:</b> <s>fell by 4% (8% → 4%)</s> → fell by 4 percentage points.</li><li><b>Shares:</b> <s>spent less money (share fell)</s> → a smaller share.</li></ul>${take('Units, proportions, approximations, ratios, points, shares: six checks for every figure.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-errs"></div><div data-act="c6-acc" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan with accuracy',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan with accuracy</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the news pies.','Overview: online overtook television; TV and newspapers fell; radio changed little.','Write the key figures with their accurate phrases: 45% almost half; 42% almost tripled from 15%; newspapers fell from a quarter to a tenth.','Group: Body 1, the sources that fell; Body 2, the sources that grew.']})}<p>In your two-minute plan, write the accurate phrase next to each key figure. Then you won’t have to calculate while you write.</p>${chart('newssrc')}<div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> online overtook TV · TV and newspapers lost share · radio little change<br><b>Body 1 (fell):</b> TV 45% (almost half) → 30% (−15 points) · newspapers a quarter → a tenth<br><b>Body 2 (grew):</b> online 15% → 42% (almost tripled) · radio 15% → 18% (slight)</div>${take('Plan the accurate phrase next to every key figure.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the pie charts on the left page.</p><div data-act="c6-ov"></div><div data-act="c6-lang" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Accuracy affects two criteria: <b>Task Achievement</b> (are the figures right?) and <b>Lexical Resource</b> (are the words for them precise?). In your three checking minutes, run the ${T('accuracy check')} on every figure:</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li>Does it have its unit?</li><li>Does the proportion phrase match its strength?</li><li>Does the approximation go in the right direction?</li><li>Is the ratio calculated and in the “as … as” pattern?</li><li>Are changes between percentages in points?</li><li>Are shares kept apart from amounts?</li></ol>${take('Six questions for every figure, in your last three minutes.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the accuracy check.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('newssrc2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: use the check stage for the accuracy check.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('flights')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Six checks for every figure: units, proportions, approximations, ratios, points, shares.','Plan the accurate phrase next to each key figure.','Accuracy affects Task Achievement and Lexical Resource.','Use the last three minutes for the accuracy check.']})
];

const acts={
'c6-errs':{type:'sort',level:'Guided',skill:'Accuracy errors',decision:'What kind of error is each one?',cats:['Unit','Proportion','Ratio','Points'],
  items:[{w:'Airport A handled 180.',c:0,m:'180 what? 180,000 flights.'},{w:'The vast majority of adults (45%) watched TV news.',c:1,m:'45% is almost half, not a majority.'},{w:'Airport C had three times more flights than before.',c:2,m:'use: three times as many flights as.'},{w:'Television’s share fell by 15%.',c:3,m:'45% → 30% is 15 percentage points.'}]},
'c6-acc':{type:'binary',level:'Supported',skill:'Accuracy',decision:'Is each sentence accurate for the news pies?',labels:['Accurate','Not accurate'],
  items:[{t:'In 2010, almost half of adults got their news mainly from television.',a:0,right:'45%: almost half.',wrong:'It is accurate: 45% is just under half.'},
         {t:'Online news almost tripled its share.',a:0,right:'15% → 42%: 2.8 times.',wrong:'It is accurate: 42 ÷ 15 = 2.8.'},
         {t:'Newspapers’ share halved.',a:1,right:'Right. 25% → 10% is more than halved: it fell to two-fifths of its earlier level.',wrong:'Half of 25 is 12.5; it fell further, to 10%.'},
         {t:'Fewer people listened to the radio in 2025.',a:1,right:'Right. Radio’s share rose, and the pies give no numbers of people.',wrong:'Radio’s share rose, 15% → 18%, and the pies show shares only.'}]},
'c6-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which overview of the news pies is best?',
  opts:[{t:'Overall, online sources overtook television to become the main source of news, while television and newspapers both lost share. Radio changed relatively little.',ok:1,why:'The change at the top, the losers, the stable source: no figures.'},{t:'Overall, online news rose from 15% to 42%.',why:'Figures, and only one source.'},{t:'Overall, fewer people watched television.',why:'The pies show shares, not numbers of people.'}]},
'c6-lang':{type:'choice',level:'Supported',skill:'Accurate data language',decision:'Which sentence about newspapers is most accurate?',
  opts:[{t:'Newspapers’ share fell from a quarter to just a tenth, a drop of 15 percentage points.',ok:1,why:'Accurate fractions and points.'},{t:'Newspapers’ share fell by 15%.',why:'25% → 10% is 15 percentage points (or a 60% fall).'},{t:'Newspapers lost most of their readers.',why:'The pies show shares, not readers.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The criteria',decision:'Which criterion does each accuracy problem affect most?',labels:['Task Achievement','Lexical Resource'],
  items:[{t:'Airport C is said to have doubled (40,000 → 120,000).',a:0,right:'A wrong fact about the data: Task Achievement.',wrong:'The figure is misrepresented: Task Achievement.'},
         {t:'“The amount of flights” instead of “the number of flights”.',a:1,right:'A word-choice error: Lexical Resource.',wrong:'This is about word choice (amount for uncountables, number for countables): Lexical Resource.'},
         {t:'Airport A is said to handle 180 flights.',a:0,right:'A wrong figure: Task Achievement.',wrong:'180 flights is wrong (180,000): Task Achievement.'},
         {t:'“Twice more than” instead of “twice as many as”.',a:1,right:'Mainly a wrong form of an expression: Lexical Resource.',wrong:'This is mainly about the expression: Lexical Resource.'}]},
'c6-edit':{type:'fix',level:'Independent',skill:'The accuracy check',decision:'Fix the accuracy error in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Airport C had three times more flights in 2025.',ok:/three times as many|tripled|trebled/i,bad:/times more/i,hint:'Use the as … as pattern.',err:'three times more',fix:'three times as many … as',why:'Number + times + as many + as.',model:'Airport C had three times as many flights in 2025 as in 2015.'},
         {wrong:'Television’s share fell by 15% between 2010 and 2025.',ok:/(15|fifteen) percentage points/i,bad:/by 15%/i,hint:'45% → 30%: subtract.',err:'by 15%',fix:'by 15 percentage points',why:'A change between percentages is in points.',model:'Television’s share fell by 15 percentage points between 2010 and 2025.'},
         {wrong:'Airport D handled 45 flights in 2025.',ok:/45,000/i,bad:/45 flights/i,hint:'Check the axis: thousands.',err:'45 flights',fix:'45,000 flights',why:'The chart is in thousands.',model:'Airport D handled 45,000 flights in 2025.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The two pie charts compare…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview reports that online overtook television.',fix:'The main change: online became the main source.',fn:v=>/online/i.test(v.ov)&&/(overt|main|largest|most common)/i.test(v.ov)},
          {t:'You used percentage points for a change in share.',fix:'Describe at least one change in percentage points.',fn:v=>/percentage points?/i.test(v.b1+' '+v.b2)},
          {t:'No “by X%” for changes in share.',fix:'45% → 30% is 15 percentage points, not 15%.',fn:v=>!/(fell|rose|dropped|increased|decreased) by (3|15|27)%/i.test(v.b1+' '+v.b2)},
          {t:'You wrote about shares, not numbers of people.',fix:'The pies show shares: write “a smaller share”, not “fewer people”.',fn:v=>!/\b(fewer|more) (people|adults|viewers|readers|listeners)\b/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The two pie charts compare the main ways in which adults in one country got their news in 2010 and in 2025.</p><p><span class="plabel">Overview</span>Overall, online sources overtook television to become the main source of news, while the shares for television and newspapers both declined. Radio changed relatively little.</p><p><span class="plabel">Body 1</span>In 2010, television was the main source of news for <button type="button" class="hl" data-n="0">almost half of adults (45%)</button>. By 2025, its share had fallen by 15 percentage points to 30%, <button type="button" class="hl" data-n="1">just under a third</button>. Newspapers saw an even greater relative decline: <button type="button" class="hl" data-n="2">their share fell from a quarter to just a tenth</button>, less than half of its earlier level.</p><p><span class="plabel">Body 2</span>Online news followed the opposite pattern. Only 15% of adults relied mainly on online sources in 2010, <button type="button" class="hl" data-n="3">but this figure almost tripled to 42% by 2025</button>, making online news the most common source. Radio’s share, meanwhile, rose only slightly, from 15% to 18%, just under a fifth. By 2025, online sources alone accounted for a larger share than television and newspapers combined (40%).</p>`,
  notes:['45% is just below half: almost half.','30% is just below 33.3%: just under a third.','25% is a quarter, 10% a tenth; 10 ÷ 25 = 0.4, less than half.','42 ÷ 15 = 2.8: almost tripled.'],
  self:['Every proportion phrase matches its figure.','Changes in share are in percentage points.','I wrote about shares, not numbers of people.','I ran the accuracy check.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview and the accurate phrase for each key figure.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Run the accuracy check: units, proportions, ratios, points.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The bar chart…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|it is clear)/i.test(v.a)},
          {t:'You wrote figures in full, in thousands.',fix:'The chart is in thousands: write 180,000, not 180.',fn:v=>(v.a.match(/\b\d{2,3},000\b/g)||[]).length>=4},
          {t:'No “times more than”.',fix:'Use “three times as many … as”.',fn:v=>!/\btimes more than\b|\btwice more\b/i.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The bar chart compares how many international flights left four airports in a single country in 2015 and ten years later, in 2025.</p><p>Overall, the number of flights rose at three of the four airports, most dramatically at Airport C, while Airport D was the only one to see a fall. Airport A remained the busiest in both years.</p><p>In 2015, Airport A handled 120,000 international flights, more than any other airport. By 2025, this figure had risen by half to 180,000. Airport C grew far faster, tripling its number of flights from 40,000 to 120,000, so that it overtook Airport B to become the second busiest airport. Its increase of 80,000 flights was also the largest of the four in absolute terms.</p><p>Airport B saw only a slight increase, from 90,000 to 95,000 flights. Airport D, by contrast, lost a quarter of its flights, which fell from 60,000 to 45,000, making it the least busy of the four airports in 2025.</p>`,
  self:['I planned the accurate phrase for each key figure.','My overview has no figures.','Every figure is in full, with its unit.','My ratios are calculated: by half, tripled, a quarter.']}
};

const gloss={
  'accuracy check':{term:'accuracy check',def:'Six questions for every figure: unit, proportion, approximation, ratio, points, shares.',path:'M30,50 L60,80 L120,20 M140,30 H220 M140,50 H220 M140,70 H200',ex:'“Run the accuracy check in your last three minutes.”'},
  'relied on':{term:'relied on',def:'Depended on; used as the main source.',path:'M40,70 H200 M120,70 V20',ex:'“Only 15% of adults relied mainly on online sources.”'},
  'tripled':{term:'tripled',def:'Became three times as large. Also “trebled”.',path:'M40,80 V60 H70 V80 M140,80 V20 H170 V80',ex:'“Airport C tripled its number of flights.”'}
};

const retrieval={
 'c6-s1':[{q:'“The vast majority (54%)” is which kind of error?',opts:[{t:'Proportion',ok:1,why:'Wrong strength.'},{t:'Unit',why:'The unit is fine.'}]}],
 'c6-s2':[{q:'Online 15% → 42% is…',opts:[{t:'almost tripled',ok:1,why:'2.8 times.'},{t:'doubled',why:'Double would be 30%.'}]}],
 'c6-s3':[{q:'A wrong figure mainly affects…',opts:[{t:'Task Achievement',ok:1,why:'Accuracy of the data.'},{t:'Coherence and Cohesion',why:'That is organisation.'}]}],
 'c6-s4':[{q:'Newspapers 25% → 10%. Which is accurate?',opts:[{t:'from a quarter to a tenth',ok:1,why:'Accurate fractions.'},{t:'halved',why:'It fell further than half.'}]}],
 'c6-s5':[{q:'Airport A 120,000 → 180,000 is…',opts:[{t:'a 50% rise',ok:1,why:'×1.5.'},{t:'doubled',why:'Double is 240,000.'}]}]
};

const minitest=[
 {q:'“Airport C had three times more flights.” Which error?',opts:[{t:'Ratio pattern',ok:1,why:'Use three times as many … as.'},{t:'Unit',why:'No figure here.'},{t:'Points',why:'Not a percentage change.'}],sp:'c6-s1'},
 {q:'“Television’s share fell by 15%” (45% → 30%). Fix?',opts:[{t:'fell by 15 percentage points',ok:1,why:'Subtract.'},{t:'fell by 45%',why:'No.'},{t:'fell by 30%',why:'No.'}],sp:'c6-s1'},
 {q:'What should your plan include for each key figure?',opts:[{t:'The accurate phrase for it',ok:1,why:'No calculating while writing.'},{t:'An opinion',why:'No opinions.'},{t:'Nothing',why:'Plan accuracy.'}],sp:'c6-s2'},
 {q:'Television 45% in 2010 is…',opts:[{t:'almost half',ok:1,why:'Just under 50%.'},{t:'the majority',why:'Under half.'},{t:'just over half',why:'Under half.'}],sp:'c6-s2'},
 {q:'“The amount of flights” mainly affects…',opts:[{t:'Lexical Resource',ok:1,why:'Word choice: the number of flights.'},{t:'Coherence and Cohesion',why:'Not organisation.'},{t:'Grammatical Range and Accuracy',why:'It is a word-choice error.'}],sp:'c6-s3'},
 {q:'Which is safe for pie charts without totals?',opts:[{t:'a smaller share of adults',ok:1,why:'Shares.'},{t:'fewer people',why:'Numbers unknown.'},{t:'5 million fewer',why:'Unknown.'}],sp:'c6-s4'},
 {q:'Airport D 60,000 → 45,000 is…',opts:[{t:'a fall of a quarter',ok:1,why:'15,000 ÷ 60,000.'},{t:'a fall of a third',why:'That would be 40,000.'},{t:'halved',why:'Half would be 30,000.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Recognise every kind of accuracy error','c6-s1'],['Plan the accurate phrase for each key figure','c6-s2'],['Run the accuracy check','c6-s3'],['Write a complete answer with accurate data language','c6-s4'],['Write a complete answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{newssrc:C.newssrc,newssrc2:cp('newssrc','ch-newssrc2'),flights:C.flights},retrieval,minitest,cannow});
})();
