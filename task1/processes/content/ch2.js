/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 2 · SEQUENCING THE STAGES
   ACTIVITY IDS (type · level)
     c2-seq     sort      Guided       Step 1  Start, middle or end?
     c2-vary    choice    Supported    Step 2  The more varied version
     c2-comma   binary    Supported    Step 2  Correct or not?
     c2-fix     fix       Supported    Step 3  Time clauses
     c2-build   builder   Supported    Step 4  Two stages, one sentence
     c2-order   choice    Independent  Step 4  Which order?
     c2-write   write     Independent  Step 5  Stages 1 to 5
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 2',CT='Sequencing the Stages',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="12" text-anchor="middle">${[['First','#FBE6CF'],['Next','#E2EDD6'],['Then','#E2EDD6'],['Finally','#FBE6CF']].map(([t,c],i)=>`<rect x="${18+i*94}" y="52" width="80" height="44" rx="22" fill="${c}"/><text x="${58+i*94}" y="79" fill="#292929">${t}</text>`).join('')}</g></svg>`;

const spreads=[
opening({n:2,title:CT,lede:'A process answer is a journey through the stages. Sequencing words guide the reader from one stage to the next, but “then … then … then” soon becomes tiring. In this chapter I’ll show you a range of sequencing language, including time clauses that join two stages in one sentence.',
  outcomes:['use sequencers for the start, the middle and the end','vary your sequencing and punctuate it correctly',`join stages with ${T('once')}, after and as soon as`,'join two stages in one sentence with which, where and before'],
  illus:ill,
  steps:[[1,'c2-s1','Sequencers','Start, middle, end','Discover'],[2,'c2-s2','Variety and commas','Not then, then, then','Understand'],[3,'c2-s3','Time clauses','Once, after, as soon as','Understand'],[4,'c2-s4','Two stages, one sentence','Which, where, before','Practise'],[5,'c2-s5','Chapter challenge','Stages 1 to 5','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Sequencers',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Sequencers</h2>${vid({title:'Sequencers',len:'90 seconds',script:['Show three columns: start, middle, end.','Fill them: first, to begin with; next, then, after that, following this, at the next stage; finally, in the final stage.','Read the olive oil diagram aloud using a different sequencer for each stage.']})}<ul class="clean"><li><b>The start:</b> first, firstly, to begin with, the process begins when…</li><li><b>The middle:</b> next, then, after that, following this, ${T('subsequently')}, at the next stage</li><li><b>The end:</b> finally, in the final stage, the process ends when…</li></ul>${chart('c2olive')}${take('Sequencers for the start, the middle and the end. Choose different ones as you move through the stages.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c2-seq"></div>`}),

sp('c2-s2','Variety and commas',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Variety and commas</h2>${vid({title:'Variety and commas',len:'90 seconds',script:['Read a paragraph that starts every sentence with “Then”.','Ask: how does it sound? Repetitive.','Rewrite it with next, after that, at the next stage and a time clause.','Point out the commas after the sequencers.']})}<p>Use a different sequencer for each sentence, and put a comma after a sequencer that starts the sentence. (“Then” at the start usually takes no comma: Then the paste is mixed.)</p>${insight('Varied','<b>Next,</b> the olives are crushed. <b>After that,</b> the paste is mixed. <b>At the next stage,</b> the oil is separated.')}${mistake('<s>Then the olives are crushed. Then the paste is mixed. Then the oil is separated.</s> Correct, but repetitive. Overusing one linker can hold back your Coherence and Cohesion score.')}${note('“Then” can also sit inside the sentence: “the paste is then mixed”.')}<div class="clear"></div>${take('Vary the sequencer, and add a comma after it at the start of a sentence.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-vary"></div><div data-act="c2-comma" style="margin-top:16px"></div>`}),

sp('c2-s3','Time clauses',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Time clauses</h2>${vid({title:'Time clauses',len:'2 minutes',script:['Write: Once the olives have been washed, they are crushed.','Say: the time clause joins two stages and shows the order.','Show the tense: present, or present perfect, never “will”.','Show alternatives: after, as soon as, when.']})}<p>A time clause joins two stages and shows their order:</p><ul class="clean"><li><b>${T('once')}:</b> <i>Once the olives have been washed, they are crushed.</i></li><li><b>after:</b> <i>After the paste has been mixed, the oil is separated.</i></li><li><b>as soon as:</b> <i>As soon as the olives arrive at the mill, they are washed.</i></li></ul>${mistake('<s>After the olives will be washed, they are crushed.</s> No “will” in a time clause: <i>after the olives are washed / have been washed</i>.')}${take('Once, after, as soon as + present or present perfect. Never “will” in the time clause.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-fix"></div>`}),

sp('c2-s4','Two stages, one sentence',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Two stages, one sentence</h2><p>Joining stages makes your writing flow and shows a range of structures:</p><ul class="clean"><li><b>where:</b> <i>The olives are taken by lorry to the mill, where they are washed.</i></li><li><b>which:</b> <i>They are crushed into a paste, which is then mixed for 30 minutes.</i></li><li><b>before:</b> <i>The oil is stored in steel tanks before it is bottled.</i></li></ul>${note('Don’t join everything. A mix of short and longer sentences reads best.')}<div class="clear"></div>${take('Where for a place, which for a thing, before for the next step. Mix joined and single sentences.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><div data-act="c2-order"></div></div>`}),

sp('c2-s5','Chapter challenge: stages 1 to 5',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing stages 1 to 5 of the olive oil process.</p>${chart('c2olive2')}<ul class="clean" style="font-size:15px"><li>A different sequencer for each sentence.</li><li>At least one time clause (once, after, as soon as).</li><li>At least one joined sentence (where, which, before).</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Sequencers for the start, the middle and the end.','Vary them, and put a comma after a sequencer at the start of a sentence.','Once, after, as soon as + present or present perfect, never “will”.','Join stages with where, which and before, and mix sentence lengths.']})
];

const acts={
'c2-seq':{type:'sort',level:'Guided',skill:'Sequencers',decision:'Where in a process does each sequencer belong?',cats:['The start','The middle','The end'],
  items:[{w:'To begin with,',c:0,m:'starts the process.'},{w:'Following this,',c:1,m:'moves to the next stage.'},{w:'Finally,',c:2,m:'the last stage.'},{w:'At the next stage,',c:1,m:'moves on.'},{w:'First,',c:0,m:'starts the process.'},{w:'In the final stage,',c:2,m:'the last stage.'}]},
'c2-vary':{type:'choice',level:'Supported',skill:'Variety',decision:'Which version is stronger?',
  opts:[{t:'First, the olives are picked. Next, they are taken to the mill, where they are washed. After that, they are crushed.',ok:1,why:'Three different sequencers and a joined sentence.'},{t:'Then the olives are picked. Then they are taken to the mill. Then they are washed. Then they are crushed.',why:'Accurate, but “then” every time is repetitive.'},{t:'The olives are picked, taken, washed, crushed.',why:'A list, with no sequencing or detail.'}]},
'c2-comma':{type:'binary',level:'Supported',skill:'Punctuation',decision:'Is each sentence correctly punctuated?',labels:['Correct','Not correct'],
  items:[{t:'Next, the olives are crushed into a paste.',a:0,right:'A comma after the sequencer.',wrong:'It is correct: comma after “Next”.'},
         {t:'After that the paste is mixed for 30 minutes.',a:1,right:'Right. Add a comma: After that, …',wrong:'A comma is needed after “After that”.'},
         {t:'The paste is then mixed for 30 minutes.',a:0,right:'“Then” inside the sentence needs no comma.',wrong:'It is correct: “then” mid-sentence needs no comma.'},
         {t:'Finally the oil, is bottled.',a:1,right:'Right. The comma goes after “Finally”, not after “oil”.',wrong:'The comma is in the wrong place: Finally, the oil is bottled.'}]},
'c2-fix':{type:'fix',level:'Supported',skill:'Time clauses',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'After the olives will be washed, they are crushed.',ok:/after the olives (are|have been) washed/i,bad:/will be washed/i,hint:'No “will” in a time clause.',err:'will be washed',fix:'are washed / have been washed',why:'Time clauses use the present or present perfect.',model:'After the olives have been washed, they are crushed.'},
         {wrong:'Once the paste mixed, the oil is separated.',ok:/once the paste (is|has been) mixed/i,bad:/paste mixed/i,hint:'The paste doesn’t mix itself. Add the passive auxiliary.',err:'the paste mixed',fix:'the paste has been mixed',why:'It needs a passive: has been mixed.',model:'Once the paste has been mixed, the oil is separated.'},
         {wrong:'As soon as the olives arrive at the mill they are washed.',ok:/mill, they are washed/i,bad:/mill they/i,hint:'A time clause at the start of a sentence needs a comma after it.',err:'mill they',fix:'mill, they',why:'Put a comma after an opening time clause.',model:'As soon as the olives arrive at the mill, they are washed.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Joining stages',decision:'Join stages 2 and 3 in one sentence.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Next,','the olives are taken by lorry','to the mill,','where','they are washed','and any leaves are removed.'],
  distract:[{t:'which',why:'For a place, use “where”.',fix:'where'},{t:'they will be washed',why:'A process is described in the present: they are washed.',fix:'they are washed'}],
  right:'A sequencer, stage 2, “where” for the place, and stage 3.',orderMsg:'All the right pieces, but check the order: the sequencer, stage 2 and the place, where, then stage 3.',incompleteMsg:'Good so far, but incomplete. Finish stage 3.'},
'c2-order':{type:'choice',level:'Independent',skill:'Following the arrows',decision:'Which sentence describes stages 6 to 8 in the right order?',
  opts:[{t:'The oil is separated in a centrifuge and stored in steel tanks before it is finally bottled and sold.',ok:1,why:'6, 7, 8: separated, stored, bottled.'},{t:'The oil is bottled and then stored in steel tanks.',why:'Storage (7) comes before bottling (8).'},{t:'After the oil is bottled, it is separated in a centrifuge.',why:'Separation (6) comes long before bottling (8).'}]},
'c2-write':{type:'write',level:'Independent',skill:'Sequencing',decision:'Write one body paragraph about stages 1 to 5.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'To begin with,…'}],
  checks:[{t:'You described stages 1 to 5.',fix:'Cover picking, transport, washing, crushing and mixing.',fn:v=>/pick|harvest/i.test(v.a)&&/(lorry|truck|mill)/i.test(v.a)&&/wash/i.test(v.a)&&/crush/i.test(v.a)&&/mix/i.test(v.a)},
          {t:'You used at least three different sequencers.',fix:'Vary your sequencers: first, next, after that, at the next stage, following this.',fn:v=>{const L=['first','firstly','to begin with','next','then','after that','following this','subsequently','at the next stage','after which','finally','once','as soon as'];return L.filter(w=>new RegExp('\\b'+w+'\\b','i').test(v.a)).length>=3}},
          {t:'You used a time clause.',fix:'Add a time clause: Once … , / After … , / As soon as … ,',fn:v=>/\b(once|as soon as|after(?! (that|this|which))|when)\b/i.test(v.a)},
          {t:'You joined two stages with where, which or before.',fix:'Join two stages: …, where … / …, which … / … before …',fn:v=>/\b(where|which|before)\b/i.test(v.a)},
          {t:'No “will” in your process.',fix:'Describe the process in the present: are crushed, not will be crushed.',fn:v=>!/\bwill\b/i.test(v.a)},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">To begin with,</button> the olives are picked from the trees, <button type="button" class="hl" data-n="1">after which they are taken by lorry to the mill</button>. <button type="button" class="hl" data-n="2">Once they arrive,</button> they are washed and any leaves are removed. At the next stage, the clean olives are crushed into a paste, <button type="button" class="hl" data-n="3">which is then mixed for 30 minutes</button>. By the end of these five stages, the olives have been turned into a paste from which the oil can be separated.</p>`,
  notes:['A start sequencer, with a comma.','“After which” joins stages 1 and 2 without starting a new sentence.','A time clause in the present: once they arrive.','“Which” joins stages 4 and 5; “then” sits inside the sentence.'],
  self:['I used a different sequencer for each sentence.','I used a time clause with the present tense.','I joined stages with where, which or before.','I followed the arrows.'],revise:1}
};

const gloss={
  'once':{term:'once',def:'As soon as; after. It starts a time clause and takes the present or present perfect.',path:'M40,50 H110 M130,50 H200 M110,50 L130,50',ex:'“Once the olives have been washed, they are crushed.”'},
  'subsequently':{term:'subsequently',def:'After that. A formal sequencer for the middle of a process.',path:'M30,60 H90 V40 H150 V20 H210',ex:'“The oil is subsequently stored in steel tanks.”'},
  'centrifuge':{term:'centrifuge',def:'A machine that spins very fast to separate liquids from solids.',path:'M120,45 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0',ex:'“The oil is separated in a centrifuge.”'}
};

const retrieval={
 'c2-s1':[{q:'Which sequencer starts a process?',opts:[{t:'To begin with,',ok:1,why:'The start.'},{t:'Finally,',why:'The end.'}]}],
 'c2-s2':[{q:'“Next the oil is stored.” What is missing?',opts:[{t:'A comma after Next',ok:1,why:'Next, the oil…'},{t:'Nothing',why:'Add the comma.'}]}],
 'c2-s3':[{q:'“After the oil ___ separated, it is stored.”',opts:[{t:'has been',ok:1,why:'Present perfect passive.'},{t:'will be',why:'No will in a time clause.'}]}],
 'c2-s4':[{q:'To join a stage and a place, use…',opts:[{t:'where',ok:1,why:'…the mill, where…'},{t:'which',why:'For things.'}]}],
 'c2-s5':[{q:'How long is the paste mixed?',opts:[{t:'30 minutes',ok:1,why:'Stage 5.'},{t:'1 hour',why:'Check the diagram.'}]}]
};

const minitest=[
 {q:'Which sequencer belongs in the middle?',opts:[{t:'Following this,',ok:1,why:'Moves on.'},{t:'To begin with,',why:'The start.'},{t:'In the final stage,',why:'The end.'}],sp:'c2-s1'},
 {q:'Which is correctly punctuated?',opts:[{t:'After that, the paste is mixed.',ok:1,why:'Comma after the sequencer.'},{t:'After that the paste, is mixed.',why:'Comma in the wrong place.'},{t:'After, that the paste is mixed.',why:'Keep “After that” together.'}],sp:'c2-s2'},
 {q:'Why vary sequencers?',opts:[{t:'Repetitive linking can lower your Coherence and Cohesion score',ok:1,why:'Range matters.'},{t:'To add words',why:'Quality, not quantity.'},{t:'It isn’t necessary',why:'It is.'}],sp:'c2-s2'},
 {q:'Choose the correct time clause.',opts:[{t:'Once the olives are washed, they are crushed.',ok:1,why:'Present.'},{t:'Once the olives will be washed, they are crushed.',why:'No will.'},{t:'Once washed the olives, they are crushed.',why:'Word order.'}],sp:'c2-s3'},
 {q:'Which needs a comma?',opts:[{t:'As soon as the olives arrive they are washed.',ok:1,why:'After an opening time clause.'},{t:'The olives are washed as soon as they arrive.',why:'No comma needed at the end.'},{t:'The olives are then washed.',why:'No comma needed.'}],sp:'c2-s3'},
 {q:'“They are crushed into a paste, ___ is then mixed.”',opts:[{t:'which',ok:1,why:'For a thing.'},{t:'where',why:'For a place.'},{t:'who',why:'For people.'}],sp:'c2-s4'},
 {q:'Should you join every pair of stages?',opts:[{t:'No: mix joined and single sentences',ok:1,why:'Variety reads best.'},{t:'Yes, always',why:'Too many long sentences are hard to follow.'},{t:'Never',why:'Joining shows range.'}],sp:'c2-s4'},
 {q:'Which order is right for the olive oil process?',opts:[{t:'Separated, stored, bottled',ok:1,why:'6, 7, 8.'},{t:'Bottled, stored, separated',why:'Backwards.'},{t:'Stored, separated, bottled',why:'Separation comes first.'}],sp:'c2-s5'}
];

const cannow=[['Use sequencers for the start, middle and end','c2-s1'],['Vary sequencers and punctuate them correctly','c2-s2'],['Join stages with once, after and as soon as','c2-s3'],['Join stages with where, which and before','c2-s4'],['Write a well-sequenced body paragraph','c2-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:2,spreads,acts,gloss,charts:{c2olive:cp('olive','ch2-olive'),c2olive2:cp('olive','ch2-olive2')},retrieval,minitest,cannow});
})();
