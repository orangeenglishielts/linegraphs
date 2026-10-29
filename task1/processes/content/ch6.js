/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 6 · WRITING A COMPLETE ANSWER
   ACTIVITY IDS (type · level)
     c6-parts   hotspots  Guided       Step 1  Read the cycle
     c6-read1   choice    Supported    Step 1  Natural or man-made?
     c6-plan    choice    Supported    Step 2  Choose the plan
     c6-group   sort      Supported    Step 2  Which paragraph?
     c6-crit    binary    Supported    Step 3  Which criterion?
     c6-edit    choice    Independent  Step 3  The stronger version
     c6-practice write    Independent  Step 4  Untimed practice
     c6-timer   timer     Challenge    Step 5  The 20-minute clock
     c6-timed   write     Challenge    Step 5  The timed task
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 6',CT='Writing a Complete Answer',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const TASK_P='The diagram below shows the water cycle';
const TASK_T='The diagram below shows how glass bottles are recycled';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const HOT=Object.assign({},C.water,{id:'ch-water-hot',hot:1});
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="75" r="52" fill="#FBE6CF"/><path d="M200,75 L200,35" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,75 L228,90" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="146" fill="#292929">20 minutes</text></g></svg>`;

const spreads=[
opening({n:6,title:CT,lede:'This chapter brings everything together under exam conditions. You’ll read a natural cycle carefully, plan in two minutes, check your work against the four marking criteria and finish with a timed task on a man-made process.',
  outcomes:['read a cycle: where to start, and how it repeats','plan a process answer in two minutes','check your writing against the four marking criteria',`write a complete answer of at least 150 words in 20 minutes, choosing active or passive for each ${T('stage')}`],
  illus:ill,
  steps:[[1,'c6-s1','Read the question','A natural cycle','Discover'],[2,'c6-s2','Plan in two minutes','Overview, phases, stages','Understand'],[3,'c6-s3','Self-editing','The four criteria','Practise'],[4,'c6-s4','Writing practice','The water cycle, untimed','Apply'],[5,'c6-s5','The timed task','20 minutes','Apply'],['R','c6-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c6-s1','Read the question',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read the question</h2><p>Check four things before you plan.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Natural or man-made?</b> It decides active or passive.</li><li><b>Linear or cycle?</b> A cycle has no real end: say that it repeats.</li><li><b>Where to start:</b> follow the numbers, or the most logical first stage.</li><li><b>The number of stages.</b></li></ol>${chart('water')}${note('The water cycle is natural, so most verbs are active: water evaporates, clouds form, rain falls. “Is carried by the wind” is passive, and that is fine too.')}<div class="clear"></div>${take('Natural or man-made, linear or cycle, the start, the number of stages: check all four before you plan.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c6-parts"></div><div data-act="c6-read1" style="margin-top:16px"></div>`}),

sp('c6-s2','Plan in two minutes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Plan in two minutes</h2>${vid({title:'Planning in two minutes',len:'2 minutes',script:['Show the water cycle and a blank plan with four lines.','Overview: natural, six stages, a cycle; sea to sky to land and back.','Body 1: stages 1 to 3, from the sea into the clouds.','Body 2: stages 4 to 6, from the clouds back to the sea. Then start writing.']})}<p>A two-minute plan means you never stop to decide what comes next.</p><div class="oe-insight"><span class="lab">My plan</span><b>Overview:</b> natural cycle · six stages · sea → air → land → sea<br><b>Body 1 (into the air):</b> sun heats sea · evaporates · cools, clouds form<br><b>Body 2 (back to the sea):</b> wind carries clouds inland · rain or snow · rivers carry it back · repeats</div>${note('Split a cycle where the material changes place: here, from the sea into the air, then from the air back to the sea.')}<div class="clear"></div>${take('Two minutes: the overview, two phases, the stages in each.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the water cycle in Step 1.</p><div data-act="c6-plan"></div><div data-act="c6-group" style="margin-top:16px"></div>`}),

sp('c6-s3','Self-editing',{
 left:`${head('Step 3 · Practise','Learn')}<h2>Self-editing</h2><p>Examiners mark Task 1 on four criteria, each worth a quarter of your Task 1 score. Run through these questions every time you finish.</p><ol style="padding-left:20px;margin:6px 0 12px;display:grid;gap:6px;font-size:14.5px"><li><b>${T('Task Achievement')}:</b> is there a clear overview? Are all the stages covered, in order, with any details?</li><li><b>${T('Coherence and Cohesion')}:</b> are the sequencers varied, and the paragraphs split by phase?</li><li><b>${T('Lexical Resource')}:</b> are the labels paraphrased, not copied?</li><li><b>${T('Grammatical Range and Accuracy')}:</b> is the voice right for each stage, and the passive formed correctly?</li></ol>${mistake('<s>Sun heats sea water. Water evaporates. Vapour cools; clouds form.</s> Copied labels, with no linking.')}${insight('Stronger','The cycle begins when the sun heats the water in the sea, causing some of it to evaporate. As the water vapour rises, it cools and condenses into clouds.')}${take('Overview, phases, paraphrased labels, the right voice: check all four before you finish.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c6-crit"></div><div data-act="c6-edit" style="margin-top:16px"></div>`}),

sp('c6-s4','Writing practice',{
 left:`${head('Step 4 · Apply','Learn')}<h2>Writing practice</h2><p>Write a complete answer. There is no time limit: focus on accuracy. Use your plan from Step 2, then run the self-editing checklist.</p>${taskbox(TASK_P+'.<br><br>Write at least 150 words.')}${chart('water2')}`,
 right:`${head('Step 4 · Writing task','Explore')}<div data-act="c6-practice"></div>`}),

sp('c6-s5','The timed task',{
 left:`${head('Step 5 · Apply','Learn')}<h2>The timed task</h2>${vid({title:'The 20-minute budget',len:'90 seconds',script:['In the exam you have 60 minutes for both tasks. Task 2 is worth twice as much, so give Task 1 about 20 minutes.','Show the three stages: plan for 2 minutes, write for 15, check for 3.','Say: this one is man-made, so most verbs are passive.','Start the clock on the right.']})}<p>Give yourself 20 minutes: 2 to plan, 15 to write and 3 to check. Start the clock, then write your answer below it.</p>${taskbox(TASK_T+'.<br><br>Write at least 150 words.')}${chart('glass')}`,
 right:`${head('Step 5 · Timed task','Explore')}<div data-act="c6-timer"></div><div data-act="c6-timed" style="margin-top:16px"></div>`}),

review({n:6,title:CT,write:'c6-practice',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your practice answer: two drafts',
  learned:['Natural or man-made decides the voice; linear or cycle decides how you end.','Plan in two minutes: the overview, two phases, the stages in each.','Check all four criteria, especially paraphrased labels and the passive.','Give Task 1 about 20 minutes.']})
];

const acts={
'c6-parts':{type:'hotspots',level:'Guided',skill:'Reading a cycle',decision:'Find each part of the diagram.',prompt:'Select the part of the diagram that answers each question, in order. You can use Tab and Enter.',
  chart:HOT,
  parts:{title:'That is the title.',s1:'That is stage 1.',s2:'That is stage 2.',s3:'That is stage 3.',s4:'That is stage 4.',s5:'That is stage 5.',s6:'That is stage 6.'},
  targets:[{q:'What does the diagram show?',part:'title',ok:'The water cycle: a natural process.'},
           {q:'Which stage starts the cycle?',part:'s1',ok:'Stage 1: the sun heats the sea water.'},
           {q:'At which stage do clouds form?',part:'s3',ok:'Stage 3: the vapour cools and clouds form.'},
           {q:'Which stage leads back to the start?',part:'s6',ok:'Stage 6: rivers carry the water back to the sea, and the cycle repeats.'}],
  doneMsg:'<b>All found.</b> A cycle has no real end: say that it repeats.'},
'c6-read1':{type:'choice',level:'Supported',skill:'Voice',decision:'Which sentence suits the water cycle best?',
  opts:[{t:'The water vapour cools and forms clouds.',ok:1,why:'A natural process: active verbs.'},{t:'The water vapour is cooled by workers.',why:'No workers are involved: it is natural.'},{t:'Clouds were formed.',why:'A process is described in the present.'}]},
'c6-plan':{type:'choice',level:'Supported',skill:'Planning',decision:'Which plan is best for the water cycle?',
  opts:[{t:'Body 1: from the sea into the clouds (1 to 3). Body 2: from the clouds back to the sea (4 to 6).',ok:1,why:'Each paragraph follows the water to a new place.'},{t:'Body 1: stage 1. Body 2: stages 2 to 6.',why:'Unbalanced, and the first phase is cut short.'},{t:'One paragraph for each stage.',why:'Six tiny paragraphs.'}]},
'c6-group':{type:'sort',level:'Supported',skill:'Grouping stages',decision:'Which paragraph does each stage belong in?',cats:['Body 1: into the air','Body 2: back to the sea'],
  items:[{w:'The sun heats sea water',c:0,m:'stage 1.'},{w:'Water evaporates',c:0,m:'stage 2.'},{w:'Clouds form',c:0,m:'stage 3.'},{w:'Wind carries clouds inland',c:1,m:'stage 4.'},{w:'Rain or snow falls',c:1,m:'stage 5.'},{w:'Rivers carry water to the sea',c:1,m:'stage 6.'}]},
'c6-crit':{type:'binary',level:'Supported',skill:'The four criteria',decision:'Which criterion does each problem affect most?',labels:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{t:'The answer leaves out stage 4.',a:0,right:'A missing stage: Task Achievement.',wrong:'Leaving out a stage affects Task Achievement.'},
         {t:'Every sentence starts with “Then”.',a:1,right:'Repetitive linking: Coherence and Cohesion.',wrong:'This is about how ideas are linked.'},
         {t:'The labels are copied word for word.',a:2,right:'Copied wording: Lexical Resource.',wrong:'This is about vocabulary: Lexical Resource.'},
         {t:'“The rain is fallen over the land.”',a:3,right:'“Fall” has no passive: a grammar error.',wrong:'This is a grammar error: the rain falls.'}]},
'c6-edit':{type:'choice',level:'Independent',skill:'Self-editing',decision:'Which version is stronger?',
  opts:[{t:'The clouds are then carried inland by the wind, and over the land the water falls as rain or snow.',ok:1,why:'A sequencer, paraphrased labels, and two stages joined.'},{t:'Wind carries clouds inland. Rain or snow falls.',why:'Copied labels with no linking.'},{t:'Then the wind carries clouds, then it rains.',why:'Repetitive “then”, and the snow is missing.'}]},
'c6-practice':{type:'write',level:'Independent',skill:'A complete answer, untimed',decision:'Write a complete answer.',prompt:'At least 150 words. Introduction, overview and two body paragraphs. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The diagram illustrates…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5,ph:'The cycle begins when…'},{k:'b2',label:'Body paragraph 2',rows:5,ph:'These clouds are then…'}],
  checks:[{t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK_P,8)},
          {t:'Your overview says it is a natural cycle.',fix:'Say that it is natural, and that it is a cycle that repeats.',fn:v=>/natural/i.test(v.ov)&&/(cycle|repeat|again|continuous)/i.test(v.ov)},
          {t:'Your overview gives the number of stages.',fix:'Say how many stages there are: six.',fn:v=>/\b(six|6)[\s-]+(\w+\s+)?(stages?|steps?)\b/i.test(v.ov)},
          {t:'You used active verbs for natural stages.',fix:'Natural stages are active: water evaporates, clouds form.',fn:v=>/\bevaporat(e|es|ing)\b/i.test(v.b1+' '+v.b2)&&!/is evaporated/i.test(v.b1+' '+v.b2)},
          {t:'You covered all six stages.',fix:'Include the sun, evaporation, clouds, wind, rain or snow, and rivers.',fn:v=>{const t=v.b1+' '+v.b2;return /sun/i.test(t)&&/evaporat/i.test(t)&&/cloud/i.test(t)&&/wind/i.test(t)&&/(rain|snow)/i.test(t)&&/river/i.test(t)}},
          {t:'You said that the cycle repeats.',fix:'End by saying that the cycle begins again.',fn:v=>/(again|repeat|start(s)? over|begin(s)? anew)/i.test(v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.intro+' '+v.ov+' '+v.b1+' '+v.b2)>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The diagram illustrates the continuous cycle by which water moves between the sea, the air and the land.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the water cycle is a natural process made up of six main stages.</button> Water rises from the sea into the air, falls onto the land and then returns to the sea, <button type="button" class="hl" data-n="1">so the process has no real beginning or end</button>.</p><p><span class="plabel">Body 1</span>The cycle can be said to begin when the sun heats the water in the sea. <button type="button" class="hl" data-n="2">As a result, some of this water evaporates and rises into the air as water vapour.</button> At the next stage, the vapour cools, and it condenses to form clouds.</p><p><span class="plabel">Body 2</span>These clouds are then carried inland by the wind. Over the land, the water they contain falls back to the ground in the form of rain or snow. Finally, rivers carry this water back to the sea, <button type="button" class="hl" data-n="3">where it is heated by the sun once again and the whole cycle repeats itself.</button></p>`,
  notes:['The kind of process and the number of stages.','A cycle has no real end, and the overview says so.','Active verbs for a natural process: evaporates, rises, condenses.','The return to the start shows that it is a cycle.'],
  self:['My overview says natural, cycle, six stages.','I used active verbs for natural stages.','I paraphrased the labels.','I ended by showing that the cycle repeats.'],revise:1},
'c6-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock when you are ready.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Natural or man-made? Note the overview, two phases and the stages.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check the voice of every verb, the overview and your word count.'}]},
'c6-timed':{type:'write',level:'Challenge',skill:'Timed writing',decision:'Write your answer.',prompt:'Allow about 20 minutes and write at least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, use the self-review checklist.',
  fields:[{k:'a',label:'My answer',rows:14,ph:'The diagram illustrates…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK_T,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You gave the number of stages.',fix:'Say how many stages there are: eight.',fn:v=>/\b(eight|8)[\s-]+(\w+\s+)?(stages?|steps?)\b/i.test(v.a)},
          {t:'You included the temperature.',fix:'Include the melting temperature: 1,500°C.',fn:v=>/1,?500/.test(v.a)},
          {t:'You used the passive.',fix:'A man-made process: use is/are + past participle.',fn:v=>(v.a.match(/\b(is|are)\s+(\w+ly\s+|then\s+|also\s+|first\s+|finally\s+)?(\w+ed|taken|given|made|put|sent|held|spun|cut|fed|left|kept|shown|driven|broken)\b/gi)||[]).length>=3},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The diagram illustrates the process by which used glass bottles are recycled and made into new ones.</p><p>Overall, this is a cycle of eight stages, beginning when bottles are put into recycling bins and ending when new bottles are filled and sent to shops, after which the cycle can start again. The glass is first collected and prepared, and it is then melted and reshaped.</p><p>First, used bottles are placed in recycling bins, from where they are collected by lorry. They are then sorted according to their colour, after which they are washed and their labels are removed. At the next stage, the clean glass is crushed into small pieces.</p><p>These pieces are melted at a temperature of 1,500°C, and the molten glass is moulded into new bottles. Finally, the new bottles are filled and delivered to shops, and once they have been used, they can be placed in recycling bins again.</p>`,
  self:['I planned for about two minutes before writing.','My overview gives the stages, the start, the end, and that it is a cycle.','I used the passive for a man-made process.','I included the temperature.']}
};

const gloss={
  'evaporate':{term:'evaporate',def:'To change from a liquid into a gas. An active verb: water evaporates.',path:'M30,80 C60,70 90,90 120,80 M70,60 C60,45 80,40 70,25 M110,60 C100,45 120,40 110,25',ex:'“Some of the water evaporates.”'},
  'condense':{term:'condense',def:'To change from a gas into a liquid, for example when vapour cools and forms clouds.',path:'M40,60 C30,60 30,40 45,40 C50,25 80,25 85,38 C100,35 105,60 90,60 Z',ex:'“The vapour cools and condenses to form clouds.”'},
  'Task Achievement':{term:'Task Achievement',def:'How well you answer the task: an overview, every stage, in order, accurately. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'Leaving out a stage lowers your Task Achievement score.'},
  'Coherence and Cohesion':{term:'Coherence and Cohesion',def:'How clearly your answer is organised: logical paragraphs and varied linking. A quarter of your Task 1 score.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Varied sequencers improve cohesion.”'},
  'Lexical Resource':{term:'Lexical Resource',def:'Your vocabulary: paraphrased labels and precise verbs. A quarter of your Task 1 score.',path:'M20,70 L80,50 L140,30 L220,20',ex:'“Evaporates, condenses, is moulded into.”'},
  'Grammatical Range and Accuracy':{term:'Grammatical Range and Accuracy',def:'Your grammar: a range of structures used accurately, including the passive. A quarter of your Task 1 score.',path:'M20,70 L80,40 L140,52 L220,20',ex:'“Having been washed, the glass is crushed.”'}
};

const retrieval={
 'c6-s1':[{q:'The water cycle is…',opts:[{t:'a natural cycle',ok:1,why:'It repeats, in nature.'},{t:'a man-made linear process',why:'Natural, and it repeats.'}]}],
 'c6-s2':[{q:'Where should you split a cycle?',opts:[{t:'Where the material moves to a new place',ok:1,why:'Sea to air, air to sea.'},{t:'After stage 1',why:'Too short.'}]}],
 'c6-s3':[{q:'“The rain is fallen over the land.” What is wrong?',opts:[{t:'“Fall” has no passive: the rain falls',ok:1,why:'Intransitive verbs have no passive.'},{t:'Nothing',why:'“Fall” can’t be passive.'}]}],
 'c6-s4':[{q:'What carries the clouds inland?',opts:[{t:'The wind',ok:1,why:'Stage 4.'},{t:'Rivers',why:'Stage 6, back to the sea.'}]}],
 'c6-s5':[{q:'At what temperature is the glass melted?',opts:[{t:'1,500°C',ok:1,why:'Stage 6.'},{t:'230°C',why:'That is the bread.'}]}]
};

const minitest=[
 {q:'Which verb suits the water cycle best?',opts:[{t:'evaporates',ok:1,why:'Active, natural, present simple.'},{t:'is evaporated',why:'Possible, but the active is more natural for a natural process.'},{t:'was evaporating',why:'Use the present simple.'}],sp:'c6-s1'},
 {q:'How should a cycle answer end?',opts:[{t:'By showing that the cycle repeats',ok:1,why:'It has no real end.'},{t:'With a conclusion',why:'No conclusion.'},{t:'With the first stage again in full',why:'One phrase is enough.'}],sp:'c6-s1'},
 {q:'Which plan is best for the water cycle?',opts:[{t:'Into the air (1 to 3), back to the sea (4 to 6)',ok:1,why:'Two phases.'},{t:'One paragraph per stage',why:'Too many.'},{t:'Stage 1, then 2–6',why:'Unbalanced.'}],sp:'c6-s2'},
 {q:'Copied labels mainly affect…',opts:[{t:'Lexical Resource',ok:1,why:'Vocabulary.'},{t:'Task Achievement',why:'The content may be complete.'},{t:'Grammar',why:'The grammar may be fine.'}],sp:'c6-s3'},
 {q:'Which is stronger?',opts:[{t:'The clouds are then carried inland by the wind.',ok:1,why:'Full sentence, sequencer.'},{t:'Wind carries clouds inland.',why:'Copied label.'},{t:'Then wind, then rain.',why:'Notes.'}],sp:'c6-s3'},
 {q:'How many stages are in the water cycle diagram?',opts:[{t:'Six',ok:1,why:'Count them.'},{t:'Four',why:'Count again.'},{t:'Eight',why:'That is glass recycling.'}],sp:'c6-s4'},
 {q:'Glass recycling is…',opts:[{t:'a man-made cycle',ok:1,why:'People do it, and it repeats.'},{t:'a natural cycle',why:'It is man-made.'},{t:'a linear process',why:'The new bottles can be recycled again.'}],sp:'c6-s5'},
 {q:'How should you divide 20 minutes?',opts:[{t:'2 to plan, 15 to write, 3 to check',ok:1,why:'Every stage has time.'},{t:'20 to write',why:'No plan or check.'},{t:'10 to plan, 10 to write',why:'Too little writing time.'}],sp:'c6-s5'}
];

const cannow=[['Read a cycle: kind, start, stages','c6-s1'],['Plan a process answer in two minutes','c6-s2'],['Review an answer against the four criteria','c6-s3'],['Write a complete answer for a natural process','c6-s4'],['Write a complete process answer in 20 minutes','c6-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:6,spreads,acts,gloss,charts:{water:C.water,water2:cp('water','ch-water2'),'water-hot':HOT,glass:C.glass},retrieval,minitest,cannow});
})();
