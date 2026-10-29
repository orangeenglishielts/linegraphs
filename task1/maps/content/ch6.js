/* ==========================================================================
   MASTERING MAPS · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the plan
     c6-read1   choice    Supported    Step 1  Past or plan?
     c6-plan    choice    Supported    Step 2  Choose the plan
     c6-group   sort      Supported    Step 2  Which paragraph?
     c6-crit    binary    Supported    Step 3  Which criterion?
     c6-fut     fix       Independent  Step 3  The future passive
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The maps below show the present layout of Hillcrest School and the planned changes to it';
const TASK_T='The maps below show an island before and after the construction of tourist facilities';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.schplan,{id:'ch-schplan-hot',hot:1});
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="75" r="52" fill="#FBE6CF"/><path d="M200,75 L200,35" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,75 L228,90" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="146" fill="#292929">20 minutes</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read the question carefully, including a plan for the future, plan in two minutes, check your work against the four marking criteria and finish with a timed task.',
  outcomes:['tell a past-to-present task from a plan, and choose the tense','plan a map answer in two minutes','check your writing against the four marking criteria',`write a complete answer of at least 150 words in 20 minutes, using ${T('will be built')} for plans`],
  illus:ill,
  steps:[[1,'c6-s1','Read the question','Past or plan?','Discover'],[2,'c6-s2','Plan in two minutes','Overview, route, changes','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','A plan, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Past or plan?</b> “In 2000 and 2025” is the past. “The planned changes” is the future.</li><li><b>The tense:</b> past passive (was built) or future passive (will be built).</li><li><b>The compass and fixed features.</b></li><li><b>Every change, and what stays the same.</b></li></ol>${chart('schnow')}${chart('schplan')}${note('With a plan, everything that changes is in the future: “will be built”, “will be extended”. What exists now is in the present: “The school currently has…”.')}<div class="clear"></div>${take('Past or plan decides your tense. Check it before you write a word.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the two school maps and a blank plan with four lines.','Overview: new buildings for teaching and sport; less green space; main building unchanged.','Body 1, the north: new entrance, smaller car park and bicycle shelter, sports hall on the playing field.','Body 2, the south: library extension, science block on the garden. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> new teaching and sports buildings · less green space and parking · main building unchanged<br><b>Body 1 (north):</b> new entrance from Hill Road · car park smaller + bicycle shelter · sports hall on north of playing field<br><b>Body 2 (south):</b> library extended south · science block replaces most of garden</div>${note('Follow a route: the north of the site first, then the south.')}<div class="clear"></div>${take('Two minutes: the overview, a route through two areas, the changes in each.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the school maps in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter of your Task 1 score. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are all the key changes covered, accurately, with what stays the same?</li><li><b>${T('Coherence and Cohesion')}:</b> do the paragraphs follow a route, one area or group each?</li><li><b>${T('Lexical Resource')}:</b> are the verbs of change precise: converted, extended, replaced?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> is the passive correct, in the right tense?</li></ol>${mistake('A sports hall will build on the playing field.')}${insight('Stronger','A sports hall will be built on the northern part of the playing field.')}${take('Overview, route, precise verbs, the right passive: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-fut" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('schnow2')}${chart('schplan2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: with a map, check the tense of every passive verb.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('isl00')}${chart('isl25')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Past or plan decides the tense: was built or will be built.','Plan in two minutes: the overview, a route through two areas, the changes.','Check all four criteria, especially the passive.','Give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a plan',decision:'Find each part of the planned layout.',prompt:'Select the part of the map that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title.',compass:'That is the compass.',main:'That is the main building.',entrance:'That is the new entrance.',carpark:'That is the car park.',bikes:'That is the bicycle shelter.',library:'That is the library.',libext:'That is the library extension.',science:'That is the science block.',hall:'That is the sports hall.',field:'That is the playing field.'},
  targets:[{q:'Does this map show the present or the future?',part:'title',ok:'The title says “planned layout”: the future.'},
           {q:'What will be built on part of the playing field?',part:'hall',ok:'A sports hall, in the north-east.'},
           {q:'What will replace most of the garden?',part:'science',ok:'A science block.'},
           {q:'What will lead from Hill Road to the main building?',part:'entrance',ok:'A new entrance road.'}],
  doneMsg:'<b>All found.</b> With a plan, describe these changes in the future passive: will be built.'},
'c6-read1':{type:'choice',level:'Supported',skill:'Choosing the tense',decision:'Which sentence suits this task?',
  opts:[{t:'A science block will be built on most of the garden.',ok:1,why:'A plan: future passive.'},{t:'A science block was built on most of the garden.',why:'It hasn’t happened yet: it is a plan.'},{t:'A science block is built on most of the garden.',why:'Present simple suggests a fact now. Use will be built.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the school maps?',
  opts:[{t:'Body 1: the north (entrance, car park, sports hall). Body 2: the south (library, science block).',ok:1,why:'A route through two areas, each with a clear focus.'},{t:'One paragraph for the present map and one for the planned map.',why:'This separates each change into two halves.'},{t:'One paragraph for each building.',why:'Too many short paragraphs.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping by area',decision:'Which paragraph does each change belong in?',cats:['Body 1: the north','Body 2: the south'],
  items:[{w:'A new entrance from Hill Road',c:0,m:'north.'},{w:'A smaller car park and a bicycle shelter',c:0,m:'north-west.'},{w:'A sports hall on the playing field',c:0,m:'north-east.'},{w:'A library extension',c:1,m:'south.'},{w:'A science block on the garden',c:1,m:'south.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'The answer doesn’t mention the sports hall.',a:0,right:'A missing key change: Task Achievement.',wrong:'Leaving out a key feature affects Task Achievement.'},
         {t:'“A sports hall will build.”',a:3,right:'A passive error: grammar.',wrong:'The passive is wrong: will be built.'},
         {t:'The paragraphs jump from the north to the south and back again.',a:1,right:'No route: Coherence and Cohesion.',wrong:'This is about organisation.'},
         {t:'“The garden will be changed into a science block.”',a:2,right:'Vague verb: “replaced by” is precise.',wrong:'This is about word choice: Lexical Resource.'}]},
'c6-fut':{type:'fix',level:'Independent',skill:'The future passive',decision:'Fix the verb in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'A sports hall will build on the playing field.',ok:/will be (built|constructed)/i,bad:/will build/i,hint:'The sports hall won’t build anything. Make it passive.',err:'will build',fix:'will be built',why:'Future passive: will be + past participle.',model:'A sports hall will be built on the playing field.'},
         {wrong:'The library will extended to the south.',ok:/will be extended/i,bad:/will extended/i,hint:'Add the missing part of the passive.',err:'will extended',fix:'will be extended',why:'Future passive: will be + past participle.',model:'The library will be extended to the south.'},
         {wrong:'Most of the garden was replaced by a science block.',ok:/will be replaced/i,bad:/was replaced/i,hint:'This is a plan, not the past.',err:'was replaced',fix:'will be replaced',why:'A plan needs the future passive.',model:'Most of the garden will be replaced by a science block.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The first map illustrates…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5,ph:'In the north of the site,…'},{k:'b2',label:'Body paragraph 2',rows:5,ph:'In the south,…'}],
  checks:[{t:'Your introduction names the school and says it is a plan.',fix:'Include Hillcrest School, now and the planned changes.',fn:v=>/hillcrest/i.test(v.intro)&&/(plan|propos|will|future)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview starts with “Overall,” and says what will stay the same.',fix:'Start with “Overall,” and say what will remain: the main building.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&/(remain|unchanged|same|stay)/i.test(v.ov)},
          {t:'You used the future passive.',fix:'Describe the plan with “will be built”, “will be extended”.',fn:v=>((v.b1+' '+v.b2).match(/will be \w+/gi)||[]).length>=3},
          {t:'You didn’t describe the plan in the past.',fix:'The changes haven’t happened: replace “was built” with “will be built”.',fn:v=>!/\b(was|were) (built|extended|replaced|constructed|reduced|added|created)\b/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'You covered the main changes.',fix:'Include the entrance, car park, sports hall, library and science block.',fn:v=>{const t=v.b1+' '+v.b2;return /entrance/i.test(t)&&/car park/i.test(t)&&/sports hall/i.test(t)&&/library/i.test(t)&&/science/i.test(t)}},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The first map illustrates Hillcrest School as it is today, <button type="button" class="hl" data-n="0">while the second shows how its site will look after a number of proposed changes.</button></p><p><span class="plabel">Overview</span>Overall, the school will gain several new facilities for teaching and sport, <button type="button" class="hl" data-n="1">largely at the expense of its green spaces and its car park</button>. The main building will remain as it is.</p><p><span class="plabel">Body 1</span>In the north of the site, a new entrance will be created from Hill Road, leading directly to the main building. The car park in the north-west <button type="button" class="hl" data-n="2">will be reduced in size</button>, and a bicycle shelter will be built on its southern part. To the east, a sports hall will be constructed on the northern section of the playing field, which will therefore become considerably smaller.</p><p><span class="plabel">Body 2</span>In the south, the library <button type="button" class="hl" data-n="3">will be extended southwards</button>. Most of the garden next to it will be replaced by a new science block, leaving only a small area of garden to the south of the new building.</p>`,
  notes:['“As it is today … will look”: present and future, a clear introduction for a plan.','“At the expense of”: what will be lost to make room for the new facilities.','Future passive throughout: will be reduced, will be built.','A direction adverb: southwards.'],
  self:['I used the future passive for every planned change.','My overview says what will stay the same.','My paragraphs follow a route.','I chose precise verbs: extended, replaced, reduced.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Past or plan? Note the overview, your route and the changes.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check every passive verb, the overview and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The two maps…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described the main new facilities.',fix:'Include the huts, the reception, the restaurant and the pier.',fn:v=>/hut|accommodation/i.test(v.a)&&/reception/i.test(v.a)&&/restaurant/i.test(v.a)&&/pier/i.test(v.a)},
          {t:'You used the past passive.',fix:'Describe the changes with the passive: was built, were constructed.',fn:v=>(v.a.match(/\b(was|were|had been)\s+(\w+ly\s+)?(\w+ed|built|cut|made|knocked down|turned into|kept|added)\b/gi)||[]).length>=2},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The two maps illustrate how a small island changed between 2000 and 2025, during which time it was developed for tourism.</p><p>Overall, the island was transformed from an undeveloped natural area into a holiday destination, with most of the new facilities in the west and the centre. The eastern half of the island, however, remained largely covered in trees.</p><p>In 2000, the island had nothing on it apart from a beach on its western coast and trees across the rest of its area. By 2025, most of the trees in the west and centre had been cleared, and a row of six huts had been built just inland from the beach, and part of the sea beside the beach had become a swimming area.</p><p>In the centre of the island, a reception building was constructed, with a restaurant directly to its north. These were linked by footpaths to the huts in the west, and a new pier was built on the southern coast, connected to the reception by another path.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the general change and what stayed the same.','I used the past passive correctly.','My paragraphs follow a route: west, then the centre and south.']}
};

const gloss={
  'will be built':{term:'will be built',def:'The future passive: will be + past participle. Use it for every change in a plan.',path:'M40,80 V40 H90 V80 M140,80 V20 H200 V80',ex:'“A sports hall will be built on the playing field.”'},
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: an overview, all the key changes, described accurately. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'Leaving out a key change lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and clear links. A quarter of your Task 1 score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Following a route through the map improves coherence.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: precise verbs of change and location phrases. A quarter of your Task 1 score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“Converted into, replaced by, extended southwards.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately, including the passive. A quarter of your Task 1 score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“By 2025, six huts had been built.”'}
};

const retrieval={
 'c6-s1':[{q:'“The planned changes” means you use…',opts:[{t:'will be + past participle',ok:1,why:'Future passive.'},{t:'was + past participle',why:'That is the past.'}]}],
 'c6-s2':[{q:'Best body plan for a map?',opts:[{t:'A route: one area per paragraph',ok:1,why:'Easy to follow.'},{t:'One paragraph per map',why:'Splits each change.'}]}],
 'c6-s3':[{q:'“A sports hall will build.” What is wrong?',opts:[{t:'It needs “will be built”',ok:1,why:'Passive.'},{t:'Nothing',why:'The hall doesn’t build.'}]}],
 'c6-s4':[{q:'What stays the same at Hillcrest School?',opts:[{t:'The main building',ok:1,why:'Unchanged in the plan.'},{t:'The garden',why:'Mostly replaced.'}]}],
 'c6-s5':[{q:'Six huts appeared between 2000 and 2025. “By 2025, six huts ___.”',opts:[{t:'had been built',ok:1,why:'Past perfect passive with “by”.'},{t:'will be built',why:'This is the past.'}]}]
};

const minitest=[
 {q:'“The maps show a park now and its planned redevelopment.” Which tense for the changes?',opts:[{t:'Future passive',ok:1,why:'A plan.'},{t:'Past passive',why:'Not yet happened.'},{t:'Present continuous',why:'Use will be.'}],sp:'c6-s1'},
 {q:'Which title tells you a map is a plan?',opts:[{t:'Hillcrest School: planned layout',ok:1,why:'“Planned”.'},{t:'Ashby village in 2000',why:'A past year.'},{t:'Palm Island in 2025',why:'A past year here.'}],sp:'c6-s1'},
 {q:'Which plan follows a route?',opts:[{t:'The north, then the south',ok:1,why:'One area at a time.'},{t:'The present map, then the plan',why:'Splits each change.'},{t:'Biggest change first, then smallest',why:'Jumps around.'}],sp:'c6-s2'},
 {q:'“The paragraphs jump around the map.” This mainly affects…',opts:[{t:'Coherence and Cohesion',ok:1,why:'Organisation.'},{t:'Grammatical Range and Accuracy',why:'Grammar may be fine.'},{t:'Lexical Resource',why:'Words may be fine.'}],sp:'c6-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'The library will be extended.',ok:1,why:'Future passive.'},{t:'The library will extended.',why:'Add “be”.'},{t:'The library will be extend.',why:'Use the participle.'}],sp:'c6-s3'},
 {q:'What will happen to the playing field?',opts:[{t:'It will become smaller, with a sports hall on its northern part',ok:1,why:'Compare the maps.'},{t:'It will be replaced completely',why:'Part of it remains.'},{t:'It will stay the same',why:'A sports hall takes part of it.'}],sp:'c6-s4'},
 {q:'Which describes the island in 2000 accurately?',opts:[{t:'It was undeveloped, with a beach and trees.',ok:1,why:'No buildings.'},{t:'It had a small hotel.',why:'No buildings at all.'},{t:'It had a pier.',why:'The pier is new by 2025.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Tell a past task from a plan, and choose the tense','c6-s1'],['Plan a map answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer about a plan','c6-s4'],['Write a complete map answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{schnow:C.schnow,schplan:C.schplan,schnow2:cp('schnow','ch-schnow2'),schplan2:cp('schplan','ch-schplan2'),'schplan-hot':HOT,isl00:C.isl00,isl25:C.isl25},retrieval,minitest,cannow});
})();
