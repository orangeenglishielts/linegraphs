/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 1 · UNDERSTANDING PROCESS DIAGRAMS
   ACTIVITY IDS (type · level)
     c1-kind    sort      Guided       Step 1  Natural or man-made?
     c1-parts   hotspots  Guided       Step 2  Read the diagram
     c1-shape1..2 choice  Supported    Step 3  Linear or cycle?
     c1-phase   sort      Supported    Step 4  Group the stages
     c1-ov      choice    Independent  Step 4  The best overview
     c1-write   write     Independent  Step 5  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,howto,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 1',CT='Understanding Process Diagrams',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The diagram below shows how olive oil is produced';
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="800" font-size="12" text-anchor="middle">${[0,1,2,3].map(i=>`<rect x="${20+i*96}" y="45" width="72" height="60" rx="10" fill="#fff" stroke="#CFC6B4" stroke-width="2"/><circle cx="${34+i*96}" cy="59" r="9" fill="#F88B48"/><text x="${34+i*96}" y="63" fill="#292929">${i+1}</text>`).join('')}${[0,1,2].map(i=>`<path d="M${94+i*96},75 H${114+i*96}" stroke="#F88B48" stroke-width="3"/><path d="M${114+i*96},75 l-7,-5 v10 Z" fill="#F88B48"/>`).join('')}</g></svg>`;

const spreads=[
opening({n:1,title:CT,lede:'A process diagram shows how something happens or how something is made, one stage at a time. There are usually no figures to compare. Instead, you describe a sequence clearly and accurately. In this chapter I’ll show you how to read a process diagram and write your first introduction and overview.',
  outcomes:['tell a natural process from a man-made one','read the title, the first and last stages and the arrows',`tell a ${T('linear')} process from a ${T('cycle')}`,'write an overview with the number of stages, the start and the end'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:ill,
  steps:[[1,'c1-s1','Meet the process','Natural or man-made','Discover'],[2,'c1-s2','Read the diagram','Title, start, end, arrows','Understand'],[3,'c1-s3','Linear or cycle?','Where does it end?','Understand'],[4,'c1-s4','The big picture','Stages and phases','Practise'],[5,'c1-s5','Chapter challenge','Olive oil','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Count the stages and find the start and the end before you write.','linear','Olive oil production is a linear process')}),

sp('c1-s1','Meet the process',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Meet the process</h2>${vid({title:'Meet the process',len:'90 seconds',script:['Show the butterfly life cycle and the olive oil process side by side.','Ask: which happens in nature? Which is made by people?','Say: natural processes use active verbs (the caterpillar feeds); man-made ones use the passive (the olives are crushed).','Finish: read the title to find out which kind you have.']})}<p>Process diagrams come in two kinds:</p><ul class="clean"><li><b>Natural:</b> something that happens in nature, such as a life cycle or the water cycle.</li><li><b>Man-made:</b> how something is produced or treated, such as olive oil, bread or recycled paper.</li></ul>${chart('butterfly')}${chart('olive')}${note('The kind matters for your grammar: natural processes mostly use active verbs; man-made processes mostly use the passive. Chapter 3 shows you how.')}<div class="clear"></div>${take('Natural or man-made? The title tells you, and it decides much of your grammar.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-kind"></div>`}),

sp('c1-s2','Read the diagram',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read the diagram</h2>${vid({title:'Read the diagram',len:'90 seconds',script:['Point to the title: what is being produced.','Find the first stage and the last stage.','Follow the arrows: the order is not always left to right.','Count the stages: eight.']})}<p>Before you write, find four things:</p><ul class="clean"><li><b>The title:</b> what is happening or being produced.</li><li><b>The first stage:</b> where it starts.</li><li><b>The last stage:</b> where it ends.</li><li><b>The arrows:</b> the order. In the olive oil diagram, the second row runs from right to left.</li></ul>${mistake('<s>After stage 4, the oil is bottled.</s> Follow the arrows: stage 4 leads down to stage 5, not to the left-hand end of the second row.')}${take('Title, first stage, last stage, arrows. Then count the stages.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-parts"></div>`}),

sp('c1-s3','Linear or cycle?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Linear or cycle?</h2>${vid({title:'Linear or cycle?',len:'90 seconds',script:['Trace the olive oil arrows: they stop at the bottle.','Trace the butterfly arrows: the adult lays eggs, and the cycle starts again.','Say: a linear process has an end; a cycle repeats.','Show the overview words: a linear process of eight stages; a cycle of four stages.']})}<ul class="clean"><li><b>A ${T('linear')} process</b> has a clear beginning and end. Olive oil starts with picking and ends with bottling.</li><li><b>A ${T('cycle')}</b> returns to its start and repeats. The adult butterfly lays eggs, and the cycle begins again.</li></ul>${insight('In the overview','“The production of olive oil is a linear process of eight stages.” / “The life cycle of a butterfly has four main stages, and it repeats.”')}${take('Linear: a start and an end. Cycle: it repeats. Say which in your overview.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the two diagrams in Step 1.</p><div data-act="c1-shape1"></div><div data-act="c1-shape2" style="margin-top:14px"></div>`}),

sp('c1-s4','The big picture',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The big picture</h2><p>The overview of a process does three things:</p><ul class="clean"><li>says how many stages there are,</li><li>names the first and the last stage,</li><li>says whether it is linear or a cycle, natural or man-made.</li></ul><p>Then look for <b>phases</b>: groups of stages that belong together. They will become your body paragraphs.</p>${insight('Olive oil in three phases','Harvesting and transport (1 and 2) · making the oil (3 to 6) · storing and bottling (7 and 8).')}${take('Overview: number of stages, start, end, kind. Then find the phases.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the olive oil diagram in Step 1.</p><div data-act="c1-phase"></div><div data-act="c1-ov" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: olive oil',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task.</p>${taskbox(TASK+'.')}${chart('olive2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Process diagrams are natural (active verbs) or man-made (mostly passive).','Find the title, the first and last stages and the arrows, then count the stages.','A linear process has a start and an end; a cycle repeats.','The overview gives the number of stages, the start, the end and the kind of process.']})
];

const acts={
'c1-kind':{type:'sort',level:'Guided',skill:'Kinds of process',decision:'Is each process natural or man-made?',cats:['Natural','Man-made'],
  items:[{w:'The life cycle of a butterfly',c:0,m:'it happens in nature.'},{w:'How olive oil is produced',c:1,m:'people make it.'},{w:'The water cycle',c:0,m:'it happens in nature.'},{w:'How glass bottles are recycled',c:1,m:'a human process.'},{w:'How a volcano erupts',c:0,m:'a natural event.'},{w:'How bread is made in a factory',c:1,m:'a production process.'}]},
'c1-parts':{type:'hotspots',level:'Guided',skill:'Reading a process diagram',decision:'Find each part of the diagram.',prompt:'Select the part of the diagram that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.olive,{id:'ch-olive-hot',hot:1}),
  parts:{title:'That is the title.',s1:'That is stage 1.',s2:'That is stage 2.',s3:'That is stage 3.',s4:'That is stage 4.',s5:'That is stage 5.',s6:'That is stage 6.',s7:'That is stage 7.',s8:'That is stage 8.'},
  targets:[{q:'What does the diagram show?',part:'title',ok:'How olive oil is produced: a man-made process.'},
           {q:'Where does the process begin?',part:'s1',ok:'Stage 1: the olives are picked from the trees.'},
           {q:'Where does the process end?',part:'s8',ok:'Stage 8: the oil is bottled and sold. The second row runs right to left.'},
           {q:'Which stage comes straight after the olives are crushed?',part:'s5',ok:'Stage 5: the paste is mixed. Follow the arrow down from stage 4.'}],
  doneMsg:'<b>All found.</b> Title, start, end, arrows: check them before you write.'},
'c1-shape1':{type:'choice',level:'Supported',skill:'Linear or cycle',decision:'Which description is accurate?',
  opts:[{t:'Olive oil production is linear; the butterfly’s life is a cycle.',ok:1,why:'The olive arrows stop at the bottle; the butterfly’s arrows return to the eggs.'},{t:'Both are cycles.',why:'The olive oil process ends with bottling.'},{t:'Both are linear.',why:'The adult butterfly lays eggs and the cycle repeats.'}]},
'c1-shape2':{type:'choice',level:'Supported',skill:'Counting stages',decision:'How many stages are there in the butterfly’s life cycle?',
  opts:[{t:'Four',ok:1,why:'Eggs, caterpillar, pupa, adult.'},{t:'Eight',why:'That is the olive oil process.'},{t:'Three',why:'Count again: the adult is a stage too.'}]},
'c1-phase':{type:'sort',level:'Supported',skill:'Finding phases',decision:'Which phase does each stage belong to?',cats:['Harvest and transport','Making the oil','Storage and sale'],
  items:[{w:'Olives picked from trees',c:0,m:'stage 1.'},{w:'Taken by lorry to the mill',c:0,m:'stage 2.'},{w:'Crushed into a paste',c:1,m:'stage 4.'},{w:'Oil separated in a centrifuge',c:1,m:'stage 6.'},{w:'Oil stored in steel tanks',c:2,m:'stage 7.'},{w:'Bottled and sold',c:2,m:'stage 8.'}]},
'c1-ov':{type:'choice',level:'Independent',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, olive oil production is a linear process of eight stages, beginning with the picking of the olives and ending when the oil is bottled and sold.',ok:1,why:'Number of stages, start, end and kind.'},{t:'Overall, the paste is mixed for 30 minutes.',why:'One detail: body paragraph material.'},{t:'Overall, olive oil is healthy and popular.',why:'An opinion, and not from the diagram.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The diagram illustrates…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction says what is produced.',fix:'Include olive oil and the idea of production.',fn:v=>/olive/i.test(v.intro)&&/(produc|made|make|process)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,”.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'Your overview gives the number of stages.',fix:'Say how many stages there are: eight.',fn:v=>/\b(eight|8)[\s-]+(\w+\s+)?(stages?|steps?)\b/i.test(v.ov)},
          {t:'Your overview gives the start and the end.',fix:'Name the first stage (picking) and the last (bottling).',fn:v=>/(pick|harvest|tree)/i.test(v.ov)&&/(bottl|sold|sale)/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The diagram illustrates the process by which olive oil is made, from the harvest to the point of sale.</button></p><p><button type="button" class="hl" data-n="1">Overall, the production of olive oil is a linear process of eight stages</button>, <button type="button" class="hl" data-n="2">beginning with the picking of olives from the trees and ending with the bottling and sale of the oil</button>. <button type="button" class="hl" data-n="3">Most of the stages turn the olives into oil after they arrive at the mill.</button></p>`,
  notes:['A new structure (the process by which … is made) and the range, from start to end.','The kind of process and the number of stages.','The first and last stages, as nouns: the picking, the bottling.','The big picture: where most of the process happens.'],
  self:['My introduction says what is produced.','I didn’t copy the task sentence.','My overview gives the number of stages.','My overview names the start and the end.'],revise:1}
};

const gloss={
  'linear':{term:'linear',def:'Going in one direction, from a clear start to a clear end.',path:'M20,45 H200 M192,38 L202,45 L192,52',ex:'“Olive oil production is a linear process.”'},
  'cycle':{term:'cycle',def:'A process that returns to its start and repeats.',path:'M120,15 A32,32 0 1 1 88,45 M88,45 L82,35 M88,45 L96,37',ex:'“The life cycle of a butterfly has four stages.”'},
  'stage':{term:'stage',def:'One step in a process. Use it to count: a process of eight stages.',path:'M30,60 H70 V40 H110 V20 H150',ex:'“At the next stage, the paste is mixed.”'}
};

const retrieval={
 'c1-s1':[{q:'How bread is made in a factory is…',opts:[{t:'man-made',ok:1,why:'People produce it.'},{t:'natural',why:'It is a factory process.'}]}],
 'c1-s2':[{q:'Why follow the arrows?',opts:[{t:'The order is not always left to right',ok:1,why:'Rows can reverse.'},{t:'They show the figures',why:'They show the order.'}]}],
 'c1-s3':[{q:'A process that repeats is…',opts:[{t:'a cycle',ok:1,why:'It returns to the start.'},{t:'linear',why:'Linear has an end.'}]}],
 'c1-s4':[{q:'What does a process overview include?',opts:[{t:'Number of stages, start, end, kind',ok:1,why:'The big picture.'},{t:'Every stage',why:'That is the body.'}]}],
 'c1-s5':[{q:'How many stages in the olive oil process?',opts:[{t:'Eight',ok:1,why:'Count them.'},{t:'Six',why:'Count again.'}]}]
};

const minitest=[
 {q:'Which is a natural process?',opts:[{t:'The water cycle',ok:1,why:'Nature.'},{t:'How paper is recycled',why:'Man-made.'},{t:'How olive oil is produced',why:'Man-made.'}],sp:'c1-s1'},
 {q:'Man-made processes mostly use…',opts:[{t:'the passive',ok:1,why:'The olives are crushed.'},{t:'only the active',why:'The focus is on what happens to the material.'},{t:'the future',why:'Processes use the present.'}],sp:'c1-s1'},
 {q:'In the olive oil diagram, what comes after stage 4?',opts:[{t:'Stage 5: the paste is mixed',ok:1,why:'Follow the arrow down.'},{t:'Stage 8: bottling',why:'That is the end.'},{t:'Stage 1',why:'It is not a cycle.'}],sp:'c1-s2'},
 {q:'What should you count before writing?',opts:[{t:'The stages',ok:1,why:'For the overview.'},{t:'The words in the title',why:'Not useful.'},{t:'The icons’ colours',why:'Not data.'}],sp:'c1-s2'},
 {q:'The butterfly’s life cycle is…',opts:[{t:'a cycle of four stages',ok:1,why:'It repeats.'},{t:'a linear process',why:'It returns to the eggs.'},{t:'a process of eight stages',why:'Four.'}],sp:'c1-s3'},
 {q:'Which belongs in the overview?',opts:[{t:'It is a linear process of eight stages.',ok:1,why:'The big picture.'},{t:'The paste is mixed for 30 minutes.',why:'A detail.'},{t:'The oil is stored in steel tanks.',why:'A detail.'}],sp:'c1-s4'},
 {q:'Which stages turn the olives into oil?',opts:[{t:'3 to 6',ok:1,why:'Washing, crushing, mixing, separating.'},{t:'1 and 2',why:'Harvest and transport.'},{t:'7 and 8',why:'Storage and sale.'}],sp:'c1-s4'},
 {q:'Which overview opening is best?',opts:[{t:'Overall, olive oil production is a linear process of eight stages.',ok:1,why:'Kind and number.'},{t:'Overall, olive oil is delicious.',why:'An opinion.'},{t:'Overall, stage 3 is washing.',why:'A detail.'}],sp:'c1-s5'}
];

const cannow=[['Tell a natural process from a man-made one','c1-s1'],['Read the title, start, end and arrows','c1-s2'],['Tell a linear process from a cycle','c1-s3'],['Find the phases of a process','c1-s4'],['Write an introduction and overview for a process','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{butterfly:C.butterfly,olive:C.olive,olive2:cp('olive','ch-olive2'),'olive-hot':Object.assign({},C.olive,{id:'ch-olive-hot',hot:1})},retrieval,minitest,cannow});
})();
