/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 3 · THE PASSIVE IN PROCESSES
   ACTIVITY IDS (type · level)
     c3-voice   binary    Guided       Step 1  Active or passive?
     c3-fix     fix       Supported    Step 2  Form the passive
     c3-isare   choice    Supported    Step 2  Is or are?
     c3-agent   choice    Supported    Step 3  By or not?
     c3-agent2  binary    Supported    Step 3  Keep the agent?
     c3-build   builder   Supported    Step 4  Active and passive together
     c3-write   write     Independent  Step 5  Paper recycling
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 3',CT='The Passive in Processes',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="14" text-anchor="middle"><rect x="30" y="45" width="150" height="60" rx="12" fill="#FBE6CF"/><text x="105" y="81" fill="#292929">is + sorted</text><rect x="220" y="45" width="150" height="60" rx="12" fill="#E2EDD6"/><text x="295" y="81" fill="#292929">are + dried</text></g></svg>`;

const spreads=[
opening({n:3,title:CT,lede:'In a man-made process, what matters is what happens to the material, not who does it. That is why process answers use the present simple passive: the paper is sorted, the pulp is pressed. In this chapter I’ll show you when to use the passive, how to form it accurately, and when the active is better.',
  outcomes:['choose the passive for man-made processes and the active for natural ones','form the present simple passive: is or are + past participle',`decide when to include the ${T('agent')} with “by”`,'mix active and passive verbs in one description'],
  illus:ill,
  steps:[[1,'c3-s1','Passive or active?','Man-made or natural','Discover'],[2,'c3-s2','Forming the passive','Is or are + past participle','Understand'],[3,'c3-s3','By or not?','When to name the agent','Understand'],[4,'c3-s4','Mixing active and passive','What moves, what is done','Practise'],[5,'c3-s5','Chapter challenge','Paper recycling','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Passive or active?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Passive or active?</h2>${vid({title:'Passive or active?',len:'90 seconds',script:['Show the paper recycling diagram. Ask: who sorts the paper? We don’t know; it doesn’t matter.','Say: the paper is sorted. Present simple passive.','Show the butterfly cycle. The caterpillar feeds; the butterfly emerges. Nobody does it to them: active.','Finish: man-made, passive; natural, active.']})}<ul class="clean"><li><b>Man-made processes:</b> things are done to a material. Use the <b>present simple passive</b>: <i>the paper is sorted</i>.</li><li><b>Natural processes:</b> things happen by themselves. Use the <b>active</b>: <i>the caterpillar feeds; the adult emerges</i>.</li></ul>${chart('paper')}${mistake('<s>Workers sort the paper.</s> The diagram doesn’t show workers. Use the passive: <i>the paper is sorted</i>.')}${take('Man-made: present simple passive. Natural: active.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c3-voice"></div>`}),

sp('c3-s2','Forming the passive',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Forming the passive</h2>${vid({title:'Forming the passive',len:'90 seconds',script:['Write: is / are + past participle.','Singular: the pulp is pressed. Plural: the sheets are dried.','Uncountable nouns are singular: paper is, water is.','Irregular participles: made, taken, put, sent, held.']})}${insight('Is or are + past participle','The pulp <b>is pressed</b> into sheets. The sheets <b>are dried</b> by heated rollers.')}<ul class="clean"><li><b>Uncountable</b> nouns take <b>is</b>: paper is, pulp is, ink is, oil is.</li><li><b>Plural</b> nouns take <b>are</b>: sheets are, bottles are, olives are.</li><li>Watch the irregular participles: <i>made, taken, put, sent, held, spun</i>.</li></ul>${mistake('<s>The paper are sorted by type.</s> Paper is uncountable: <i>the paper is sorted</i>.')}${take('Is with uncountable and singular nouns; are with plurals; always the past participle.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c3-fix"></div><div data-act="c3-isare" style="margin-top:16px"></div>`}),

sp('c3-s3','By or not?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>By or not?</h2><p>Add “by” + the ${T('agent')} only when it gives useful information from the diagram, usually a machine or a method:</p><ul class="clean"><li><b>Useful:</b> <i>The sheets are dried <b>by heated rollers</b>.</i></li><li><b>Not useful:</b> <s>The paper is sorted by workers.</s> Who else? And the diagram doesn’t say.</li></ul>${note('“In”, “with” and “into” often do the same job: in a centrifuge, with water, into sheets.')}<div class="clear"></div>${take('Name the agent only if the diagram shows it and it adds information: a machine or a method.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c3-agent"></div><div data-act="c3-agent2" style="margin-top:16px"></div>`}),

sp('c3-s4','Mixing active and passive',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Mixing active and passive</h2><p>Even in a man-made process, some verbs describe what a material <b>does</b>, not what is done to it. These stay active:</p><ul class="clean"><li><b>Passive (done to it):</b> the pulp is screened; the ink is removed.</li><li><b>Active (it moves or changes):</b> the pulp <i>passes</i> through a screen; the water <i>drains</i> away; the paste <i>becomes</i> smooth.</li></ul>${insight('Both in one sentence','The pulp passes through a screen, where any staples are removed.')}${take('Done to it: passive. It moves or changes: active. Mixing them shows range.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-build"></div>`}),

sp('c3-s5','Chapter challenge: paper recycling',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write two body paragraphs describing how paper is recycled: stages 1 to 4, then 5 to 8.</p>${chart('paper2')}<ul class="clean" style="font-size:15px"><li>The present simple passive for each stage.</li><li>“By” only where the diagram names a method.</li><li>Varied sequencers from Chapter 2.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Man-made processes: present simple passive. Natural processes: active.','Is with uncountable and singular nouns, are with plurals, always the past participle.','Name the agent with “by” only when the diagram shows a useful machine or method.','Verbs for what a material does (passes, drains, becomes) stay active.']})
];

const acts={
'c3-voice':{type:'binary',level:'Guided',skill:'Choosing the voice',decision:'Is each sentence in the right voice?',labels:['Right voice','Wrong voice'],
  items:[{t:'The used paper is collected.',a:0,right:'A man-made process: passive.',wrong:'It is right: something is done to the paper.'},
         {t:'Machines press the pulp into sheets.',a:1,right:'Right. Use the passive: the pulp is pressed into sheets.',wrong:'Focus on the material: the pulp is pressed.'},
         {t:'The caterpillar is fed on leaves.',a:1,right:'Right. Nobody feeds it: the caterpillar feeds on leaves.',wrong:'A natural process: the caterpillar feeds (active).'},
         {t:'The adult butterfly emerges from the pupa.',a:0,right:'A natural process: active.',wrong:'It is right: emerges is active, and nothing is done to it.'}]},
'c3-fix':{type:'fix',level:'Supported',skill:'Forming the passive',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The paper are sorted by type.',ok:/paper is sorted/i,bad:/paper are/i,hint:'Paper is uncountable.',err:'are',fix:'is',why:'Uncountable nouns take a singular verb.',model:'The paper is sorted by type.'},
         {wrong:'The pulp is press into sheets.',ok:/is pressed/i,bad:/is press\b/i,hint:'Use the past participle.',err:'is press',fix:'is pressed',why:'Passive: is + past participle.',model:'The pulp is pressed into sheets.'},
         {wrong:'The sheets dried by heated rollers.',ok:/sheets are dried/i,bad:/sheets dried/i,hint:'The sheets don’t dry themselves here. Add the auxiliary.',err:'dried',fix:'are dried',why:'It needs the present simple passive: are dried.',model:'The sheets are dried by heated rollers.'},
         {wrong:'The ink is took out of the pulp.',ok:/is (taken|removed)/i,bad:/is took/i,hint:'“Took” is the past simple. You need the participle.',err:'is took',fix:'is taken / is removed',why:'The past participle of take is taken.',model:'The ink is removed from the pulp.'}]},
'c3-isare':{type:'choice',level:'Supported',skill:'Is or are',decision:'“The sheets ___ dried by heated rollers.”',
  opts:[{t:'are',ok:1,why:'“Sheets” is plural.'},{t:'is',why:'“Sheets” is plural: are.'},{t:'be',why:'Use a finite verb: are.'}]},
'c3-agent':{type:'choice',level:'Supported',skill:'The agent',decision:'Which sentence uses “by” best?',
  opts:[{t:'The sheets are dried by heated rollers.',ok:1,why:'The method comes from the diagram and adds information.'},{t:'The paper is collected by people.',why:'“By people” adds nothing.'},{t:'The pulp is pressed by someone into sheets.',why:'“By someone” adds nothing, and it breaks up the sentence.'}]},
'c3-agent2':{type:'binary',level:'Supported',skill:'The agent',decision:'Keep or cut the agent?',labels:['Keep it','Cut it'],
  items:[{t:'The oil is separated by a centrifuge.',a:0,right:'The machine is on the diagram. (“In a centrifuge” also works.)',wrong:'Keep it: the machine adds information.'},
         {t:'The bottles are put in bins by the public.',a:1,right:'Right. The diagram doesn’t show who, and it isn’t needed.',wrong:'The diagram doesn’t name anyone: cut it.'},
         {t:'The paper is sorted by workers.',a:1,right:'Right. “By workers” adds nothing.',wrong:'The diagram doesn’t say who, and it isn’t needed. Cut it.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'Active and passive',decision:'Build a sentence about stage 4.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['At the next stage,','the pulp passes','through a screen,','where staples','are removed.'],
  distract:[{t:'the pulp is passed by workers',why:'No workers are shown; and the pulp can simply “pass”.',fix:'the pulp passes'},{t:'is removed.',why:'“Staples” is plural: are removed.',fix:'are removed.'}],
  right:'Active for movement, passive for what is done, and “where” to join them.',orderMsg:'All the right pieces, but check the order: the sequencer, the active movement, the place, where, the passive.',incompleteMsg:'Good so far, but incomplete. Add what happens at the screen.'},
'c3-write':{type:'write',level:'Independent',skill:'The passive in a process',decision:'Write two body paragraphs about paper recycling.',prompt:'Stages 1 to 4, then 5 to 8. Then check your writing.',
  fields:[{k:'b1',label:'Body paragraph 1: stages 1 to 4',rows:5,ph:'First, used paper is collected…'},{k:'b2',label:'Body paragraph 2: stages 5 to 8',rows:5,ph:'Following this,…'}],
  checks:[{t:'You used the present simple passive.',fix:'Use is/are + past participle: is collected, are dried.',fn:v=>((v.b1+' '+v.b2).match(/\b(is|are)\s+(\w+ly\s+|then\s+|also\s+|first\s+|finally\s+)?(\w+ed|taken|given|made|put|sent|held|spun|cut|fed|left|kept|shown|driven|broken)\b/gi)||[]).length>=4},
          {t:'Paper and pulp take “is”.',fix:'Paper and pulp are uncountable: paper is, pulp is.',fn:v=>!/\b(paper|pulp|ink)\s+are\b/i.test(v.b1+' '+v.b2)},
          {t:'Body 1 covers stages 1 to 4.',fix:'Cover collecting, sorting, pulping and screening in paragraph 1.',fn:v=>/collect/i.test(v.b1)&&/sort/i.test(v.b1)&&/pulp/i.test(v.b1)&&/(screen|staple)/i.test(v.b1)},
          {t:'Body 2 covers stages 5 to 8.',fix:'Cover ink removal, pressing, drying and reels in paragraph 2.',fn:v=>/ink/i.test(v.b2)&&/press/i.test(v.b2)&&/dr(y|ied)/i.test(v.b2)&&/reel/i.test(v.b2)},
          {t:'No invented agents.',fix:'Remove “by workers”, “by people” or “by someone”.',fn:v=>!/by (workers|people|someone|employees|humans|staff)/i.test(v.b1+' '+v.b2)},
          {t:'Your answer is a good length (70 words or more).',fix:'Add detail: your two paragraphs are under 70 words.',fn:v=>((v.b1+' '+v.b2).match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="0">First, used paper is collected</button>, after which it is sorted by type. It is then mixed with water to make pulp. At the next stage, <button type="button" class="hl" data-n="1">the pulp passes through a screen, where any staples are removed</button>.</p><p><span class="plabel">Body 2</span>Following this, the ink is removed, and the clean pulp is pressed into sheets. <button type="button" class="hl" data-n="2">These sheets are then dried by heated rollers.</button> <button type="button" class="hl" data-n="3">Finally, the new paper is rolled onto large reels</button>, ready to be used again.</p>`,
  notes:['Present simple passive; “paper” is uncountable, so “is”.','Active for movement (passes), passive for what is done (are removed).','“By” names a method the diagram shows.','“Finally” marks the last stage.'],
  self:['I used is/are + past participle.','I used “is” with paper and pulp.','I named an agent only where it was useful.','I kept movement verbs active.'],revise:1}
};

const gloss={
  'agent':{term:'agent',def:'In a passive sentence, the person or thing that does the action, introduced by “by”.',path:'M40,50 H100 M140,50 H200 M100,50 L140,50',ex:'“The sheets are dried by heated rollers.”'},
  'pulp':{term:'pulp',def:'A soft, wet mass, for example of paper mixed with water.',path:'M30,60 C60,40 90,70 120,50 S180,40 210,60',ex:'“The paper is mixed with water to make pulp.”'},
  'reel':{term:'reel',def:'A large roll that paper, film or wire is wound onto.',path:'M120,45 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0',ex:'“The new paper is rolled onto large reels.”'}
};

const retrieval={
 'c3-s1':[{q:'A natural process uses…',opts:[{t:'mostly active verbs',ok:1,why:'Things happen by themselves.'},{t:'mostly passive verbs',why:'That is for man-made processes.'}]}],
 'c3-s2':[{q:'“The pulp ___ pressed.”',opts:[{t:'is',ok:1,why:'Uncountable.'},{t:'are',why:'Pulp is uncountable.'}]}],
 'c3-s3':[{q:'“The paper is sorted by workers.” Keep “by workers”?',opts:[{t:'No',ok:1,why:'It adds nothing.'},{t:'Yes',why:'Who else?'}]}],
 'c3-s4':[{q:'“The pulp ___ through a screen.”',opts:[{t:'passes',ok:1,why:'Movement: active.'},{t:'is passed by workers',why:'No workers are shown.'}]}],
 'c3-s5':[{q:'What dries the sheets?',opts:[{t:'Heated rollers',ok:1,why:'Stage 7.'},{t:'The sun',why:'Check the diagram.'}]}]
};

const minitest=[
 {q:'Which sentence suits a man-made process?',opts:[{t:'The bottles are washed.',ok:1,why:'Passive.'},{t:'Workers wash the bottles.',why:'Focus on the material.'},{t:'The bottles wash.',why:'Bottles don’t wash themselves.'}],sp:'c3-s1'},
 {q:'Which sentence suits a natural process?',opts:[{t:'The caterpillar feeds on leaves.',ok:1,why:'Active.'},{t:'The caterpillar is fed.',why:'Nobody feeds it.'},{t:'Leaves are eaten by the caterpillar by nature.',why:'Unnatural and wordy.'}],sp:'c3-s1'},
 {q:'Choose the correct passive.',opts:[{t:'The sheets are dried.',ok:1,why:'Plural + are + participle.'},{t:'The sheets is dried.',why:'Plural: are.'},{t:'The sheets are dry.',why:'That is an adjective, not the process.'}],sp:'c3-s2'},
 {q:'The past participle of “take” is…',opts:[{t:'taken',ok:1,why:'Irregular.'},{t:'took',why:'Past simple.'},{t:'taked',why:'Not a word.'}],sp:'c3-s2'},
 {q:'When should you use “by” + agent?',opts:[{t:'When the diagram shows a useful machine or method',ok:1,why:'It adds information.'},{t:'Always',why:'Usually unnecessary.'},{t:'Never',why:'Sometimes it is useful.'}],sp:'c3-s3'},
 {q:'Which agent is useful?',opts:[{t:'by heated rollers',ok:1,why:'A method from the diagram.'},{t:'by people',why:'Adds nothing.'},{t:'by someone',why:'Adds nothing.'}],sp:'c3-s3'},
 {q:'Which verb stays active?',opts:[{t:'passes (through a screen)',ok:1,why:'Movement.'},{t:'is removed',why:'Passive.'},{t:'is sorted',why:'Passive.'}],sp:'c3-s4'},
 {q:'Which is the last stage of paper recycling?',opts:[{t:'Rolled onto large reels',ok:1,why:'Stage 8.'},{t:'Dried by heated rollers',why:'Stage 7.'},{t:'Ink removed',why:'Stage 5.'}],sp:'c3-s5'}
];

const cannow=[['Choose passive or active for a process','c3-s1'],['Form the present simple passive accurately','c3-s2'],['Decide when to include the agent','c3-s3'],['Mix active and passive verbs in one description','c3-s4'],['Write body paragraphs for a man-made process','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{paper:C.paper,paper2:cp('paper','ch-paper2')},retrieval,minitest,cannow});
})();
