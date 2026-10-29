/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-split   choice    Supported    Step 4  Where to split
     c5-group   sort      Supported    Step 4  Which body paragraph?
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The diagram below shows how rainwater is collected and used in a house';
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="11" text-anchor="middle">${[['Introduction','#E4DED1'],['Overview','#FBE6CF'],['Body 1','#E2EDD6'],['Body 2','#E2EDD6']].map(([t,c],i)=>`<rect x="${20+i*92}" y="40" width="84" height="70" rx="8" fill="${c}"/><text x="${62+i*92}" y="80" fill="#292929">${t}</text>`).join('')}</g></svg>`;

const spreads=[
opening({n:5,title:CT,lede:'A process answer has the same four parts as every Task 1 answer. The overview and the split between the body paragraphs are what make it clear. In this chapter I’ll show you how to structure a complete process answer, and you’ll write one of your own.',
  outcomes:['use the four-part shape for a process','paraphrase the task with “the way in which” and similar structures','write an overview with the number of stages, the start, the end and the main phases',`split the body where one ${T('phase')} ends`],
  illus:ill,
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','Paraphrase the task','Understand'],[3,'c5-s3','The overview','Stages, start, end, phases','Understand'],[4,'c5-s4','The body paragraphs','Split where a phase ends','Practise'],[5,'c5-s5','Chapter challenge','A complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four boxes: introduction, overview, body 1, body 2.','Say what goes in each for a process: what it shows; stages, start, end; one phase per body paragraph.','Stress: no conclusion, and no comments on whether the process is a good idea.']})}<ul class="clean"><li><b>Introduction:</b> what the diagram shows, paraphrased.</li><li><b>Overview:</b> the number of stages, the start and the end, and the main phases.</li><li><b>Body 1 and Body 2:</b> the stages in order, one phase or group of phases each.</li></ul>${chart('rain')}${mistake('<s>In conclusion, collecting rainwater saves money.</s> No conclusion, and no opinions or benefits that the diagram doesn’t show.')}${take('Introduction, overview, two body paragraphs. No conclusion, no opinions.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the diagram on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'The introduction',len:'90 seconds',script:['Show the task: how rainwater is collected and used in a house.','Change the structure: the way in which / the process by which.','Change the verbs: collected → captured; used → put to use.','Keep: rainwater, a house.']})}<p>Process tasks often begin “The diagram shows how…”. Change the structure:</p><ul class="clean"><li><b>the way in which:</b> <i>the way in which a house can collect rainwater and put it to use</i></li><li><b>the process by which:</b> <i>the process by which rainwater is captured and used in a home</i></li></ul>${taskbox(TASK+'.')}${mistake('<s>The diagram shows how water is cleaned.</s> This changes the topic: the diagram shows collection and use.')}${take('The way in which / the process by which, new verbs, every detail kept.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2>${vid({title:'The overview',len:'2 minutes',script:['Count the stages: six.','Find the start: rain falls on the roof. The end: the water is used.','Name the phases: collecting and cleaning, then storing and using.','Write it in two sentences, with no detail about individual stages.']})}<p>A process overview gives:</p><ul class="clean"><li>the number of stages,</li><li>the first and the last stage,</li><li>the main phases, in a few words.</li></ul>${insight('Overview','Overall, there are six stages in the process, beginning with rain falling on the roof and ending with the water being used in the house and garden. The water is first collected and filtered, and then stored until it is pumped to the house.')}<p class="small">Use the diagram in Step 1.</p>${take('Stages, start, end, phases: no detail about individual stages.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','The body paragraphs',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The body paragraphs</h2><p>Split the body where one phase ends. For the rainwater system:</p><ul class="clean"><li><b>Body 1: collecting and filtering</b> (stages 1 to 3).</li><li><b>Body 2: storing and using</b> (stages 4 to 6).</li></ul><p>Start each paragraph by naming its phase or its first stage, then go through the stages in order.</p>${note('Equal halves don’t matter. A paragraph of three stages and one of five is fine if each covers a complete phase.')}<div class="clear"></div>${take('Split where a phase ends. Start each paragraph with its phase or first stage.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the diagram in Step 1.</p><div data-act="c5-split"></div><div data-act="c5-group" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write a complete answer: introduction, overview and two body paragraphs. Aim for at least 150 words.</p>${taskbox(TASK+'.')}${chart('rain2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, two body paragraphs. No conclusion, no opinions.','Paraphrase with “the way in which” or “the process by which”.','The overview gives the number of stages, the start, the end and the phases.','Split the body where a phase ends, and start each paragraph with its phase or first stage.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The diagram illustrates the way in which a house can collect rainwater and put it to use.',c:0,m:'what the diagram shows, paraphrased.'},
         {w:'Overall, there are six stages, from rain falling on the roof to the water being used.',c:1,m:'stages, start, end.'},
         {w:'The water runs into the gutters and down a pipe.',c:2,m:'one stage in detail.'},
         {w:'The water is first collected and filtered, and then stored until it is needed.',c:1,m:'the phases in a few words.'},
         {w:'Leaves are removed by a filter.',c:2,m:'one stage in detail.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Which introduction is best?',
  opts:[{t:'The diagram illustrates the way in which a house can collect rainwater and put it to use.',ok:1,why:'A new structure (the way in which) and new verbs, with the same meaning.'},{t:'The diagram below shows how rainwater is collected and used in a house.',why:'Copied from the task.'},{t:'The diagram shows how rainwater helps the environment.',why:'This changes the topic and adds an opinion.'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Good paraphrase, or does it change the meaning?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“how rainwater is collected” → “the way in which rainwater is captured”',a:0,right:'Same meaning, new structure.',wrong:'This keeps the meaning.'},
         {t:'“in a house” → “in a home”',a:0,right:'Same meaning.',wrong:'This keeps the meaning.'},
         {t:'“collected and used” → “cleaned and sold”',a:1,right:'Right: nothing is sold.',wrong:'This changes what happens to the water.'},
         {t:'“rainwater” → “drinking water”',a:1,right:'Right: the diagram doesn’t say it is drunk.',wrong:'The water is used for toilets and the garden, not drinking.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, there are six stages, beginning with rain falling on the roof and ending with the water being used in the house and garden.',ok:1,why:'Number of stages, start and end.'},{t:'Overall, leaves are removed by a filter.',why:'One stage in detail: body material.'},{t:'Overall, this is an excellent way to save water.',why:'An opinion the diagram doesn’t give.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'The process has six stages.',a:0,right:'The number of stages.',wrong:'This is the big picture: overview.'},
         {t:'The water is stored in an underground tank.',a:1,right:'One stage: body.',wrong:'One stage in detail: body.'},
         {t:'The water is collected and filtered before it is stored and used.',a:0,right:'The phases in a few words.',wrong:'This sums up the phases: overview.'},
         {t:'A pump carries the water up to the house.',a:1,right:'One stage: body.',wrong:'One stage in detail: body.'}]},
'c5-split':{type:'choice',level:'Supported',skill:'Splitting the body',decision:'Where is the best place to split the body?',
  opts:[{t:'After stage 3: collecting and filtering, then storing and using.',ok:1,why:'Each paragraph covers a complete phase.'},{t:'After stage 1: the rain, then everything else.',why:'The first paragraph would be one sentence.'},{t:'After stage 5: everything, then the use.',why:'The second paragraph would be too short, and the phases are mixed.'}]},
'c5-group':{type:'sort',level:'Supported',skill:'Grouping stages',decision:'Which body paragraph does each stage belong in?',cats:['Body 1: collecting and filtering','Body 2: storing and using'],
  items:[{w:'Rain falls on the roof',c:0,m:'stage 1.'},{w:'Flows into gutters and a pipe',c:0,m:'stage 2.'},{w:'Filtered; leaves removed',c:0,m:'stage 3.'},{w:'Stored in an underground tank',c:1,m:'stage 4.'},{w:'Pumped to the house',c:1,m:'stage 5.'},{w:'Used for toilets and the garden',c:1,m:'stage 6.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The diagram illustrates…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5,ph:'The process begins when…'},{k:'b2',label:'Body paragraph 2',rows:5,ph:'After being filtered,…'}],
  checks:[{t:'Your introduction mentions rainwater and a house.',fix:'Include rainwater and the house.',fn:v=>/rain/i.test(v.intro)&&/(house|home)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview gives the number of stages.',fix:'Say how many stages there are: six.',fn:v=>/\b(six|6)[\s-]+(\w+\s+)?(stages?|steps?)\b/i.test(v.ov)},
          {t:'Your overview starts with “Overall,”.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'You used the present simple passive.',fix:'Use is/are + past participle: is filtered, is stored.',fn:v=>((v.b1+' '+v.b2).match(/\b(is|are)\s+(\w+ly\s+|then\s+|also\s+|first\s+|finally\s+)?(\w+ed|taken|given|made|put|sent|held|spun|cut|fed|left|kept|shown|driven|broken)\b/gi)||[]).length>=3},
          {t:'Body 1 covers stages 1 to 3; Body 2 covers 4 to 6.',fix:'Split after the filter: collecting and filtering, then storing and using.',fn:v=>/roof/i.test(v.b1)&&/filter/i.test(v.b1)&&/tank/i.test(v.b2)&&/pump/i.test(v.b2)},
          {t:'No opinions or benefits.',fix:'Remove comments such as “saves money” or “good for the environment”.',fn:v=>!/\b(save|saves|saving|environment|eco|cheap|benefit|excellent|good idea)\b/i.test(v.intro+v.ov+v.b1+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span><button type="button" class="hl" data-n="0">The diagram illustrates the way in which a house can collect rainwater and put it to use.</button></p><p><span class="plabel">Overview</span>Overall, there are six stages in the process, <button type="button" class="hl" data-n="1">beginning with rain falling on the roof and ending with the water being used in the house and garden</button>. The water is first collected and filtered, and it is then stored until it is pumped to the house. The first three stages collect and clean the water, and the last three store it and deliver it for use.</p><p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="2">The process begins when rain falls on the roof of the house.</button> The water then runs off the roof into the gutters, from where it flows down a pipe. At the next stage, it passes through a filter, and any leaves that it has carried with it are removed.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">After being filtered, the water is stored in a tank under the ground.</button> From the tank, it is pumped up to the house, where it is used for two purposes: flushing the toilets inside the house and watering the garden outside.</p>`,
  notes:['“The way in which” replaces “how”, and the verbs change.','Start and end as -ing phrases: rain falling, the water being used.','The first phase begins with the natural stage: active verbs.','A participle clause links the two phases; the man-made stages use the passive.'],
  self:['My introduction keeps the meaning without copying.','My overview gives the stages, start, end and phases.','I split the body where a phase ends.','I gave no opinions or benefits.'],revise:1}
};

const gloss={
  'phase':{term:'phase',def:'A group of stages in a process with one purpose.',path:'M20,60 H100 M140,60 H220 M20,50 V70 M100,50 V70 M140,50 V70 M220,50 V70',ex:'“The first phase is collecting the water.”'},
  'gutter':{term:'gutter',def:'A channel along the edge of a roof that carries rainwater away.',path:'M20,40 H200 V60 M200,60 V90',ex:'“The water runs into the gutters.”'},
  'the way in which':{term:'the way in which',def:'A formal alternative to “how”, useful for introductions.',path:'M30,50 H210 M200,42 L212,50 L200,58',ex:'“The diagram illustrates the way in which rainwater is collected.”'}
};

const retrieval={
 'c5-s1':[{q:'Does a process answer need a conclusion?',opts:[{t:'No',ok:1,why:'The overview sums up.'},{t:'Yes',why:'Four parts only.'}]}],
 'c5-s2':[{q:'A formal way to replace “how”:',opts:[{t:'the way in which',ok:1,why:'Or: the process by which.'},{t:'the reason why',why:'Changes the meaning.'}]}],
 'c5-s3':[{q:'Which belongs in a process overview?',opts:[{t:'The number of stages',ok:1,why:'The big picture.'},{t:'What the filter removes',why:'A detail.'}]}],
 'c5-s4':[{q:'Where should the body be split?',opts:[{t:'Where a phase ends',ok:1,why:'One phase each.'},{t:'After the first stage',why:'Too short.'}]}],
 'c5-s5':[{q:'Where is the water stored?',opts:[{t:'In an underground tank',ok:1,why:'Stage 4.'},{t:'On the roof',why:'Check the diagram.'}]}]
};

const minitest=[
 {q:'Which sentence does not belong in a process answer?',opts:[{t:'Collecting rainwater is good for the environment.',ok:1,why:'An opinion.'},{t:'The water is stored in a tank.',why:'A stage.'},{t:'There are six stages.',why:'Overview.'}],sp:'c5-s1'},
 {q:'Which introduction is best?',opts:[{t:'The diagram illustrates the process by which rainwater is captured and used in a home.',ok:1,why:'New structure and verbs.'},{t:'The diagram shows rain.',why:'Vague.'},{t:'The diagram below shows how rainwater is collected and used in a house.',why:'Copied.'}],sp:'c5-s2'},
 {q:'Which paraphrase changes the meaning?',opts:[{t:'rainwater → drinking water',ok:1,why:'Not shown.'},{t:'house → home',why:'Same.'},{t:'how → the way in which',why:'Same.'}],sp:'c5-s2'},
 {q:'What should the overview give?',opts:[{t:'Stages, start, end, phases',ok:1,why:'The big picture.'},{t:'Every stage in detail',why:'That is the body.'},{t:'The benefits of the system',why:'Not shown.'}],sp:'c5-s3'},
 {q:'Which is an overview sentence?',opts:[{t:'The water is collected and filtered before it is stored and used.',ok:1,why:'The phases.'},{t:'A pump carries the water to the house.',why:'One stage.'},{t:'Leaves are removed.',why:'One stage.'}],sp:'c5-s3'},
 {q:'How should a body paragraph begin?',opts:[{t:'By naming its phase or first stage',ok:1,why:'The reader knows where they are.'},{t:'With an opinion',why:'Never.'},{t:'With “In conclusion”',why:'No conclusion.'}],sp:'c5-s4'},
 {q:'Must the two body paragraphs have the same number of stages?',opts:[{t:'No: follow the phases',ok:1,why:'Complete phases matter more.'},{t:'Yes, always',why:'Not necessary.'},{t:'Only for cycles',why:'Phases decide.'}],sp:'c5-s4'},
 {q:'What is the water used for?',opts:[{t:'Toilets and the garden',ok:1,why:'Stage 6.'},{t:'Drinking',why:'Not shown.'},{t:'Cooking',why:'Not shown.'}],sp:'c5-s5'}
];

const cannow=[['Use the four-part shape for a process','c5-s1'],['Paraphrase a process task','c5-s2'],['Write an overview: stages, start, end, phases','c5-s3'],['Split the body where a phase ends','c5-s4'],['Write a complete process answer','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss:Object.fromEntries(Object.entries(gloss).filter(([k])=>k!=='phase')),charts:{rain:C.rain,rain2:cp('rain','ch-rain2')},retrieval,minitest,cannow});
})();
