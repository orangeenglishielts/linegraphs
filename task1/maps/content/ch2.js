/* ==========================================================================
   MASTERING MAPS · CHAPTER 2 · DESCRIBING CHANGES
   ACTIVITY IDS (type · level)
     c2-why     choice    Guided       Step 1  Why the passive?
     c2-verbs   sort      Supported    Step 2  Verbs of change
     c2-match   choice    Supported    Step 2  The right verb
     c2-fix     fix       Supported    Step 3  Fix the passive
     c2-build   builder   Supported    Step 4  Replaced by
     c2-repl    binary    Independent  Step 4  Accurate or not?
     c2-write   write     Independent  Step 5  The eastern side
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 2',CT='Describing Changes',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><rect x="40" y="35" width="110" height="80" fill="#E2EDD6" stroke="#C7D9B8" stroke-dasharray="4 3"/><text x="95" y="80" text-anchor="middle" font-family="Inter,sans-serif" font-style="italic" font-size="13" fill="#4C6B3C">Farmland</text><text x="200" y="70" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="13" fill="#F88B48">was replaced by</text><path d="M160,82 H240 M232,76 L240,82 L232,88" stroke="#F88B48" stroke-width="2.5" fill="none"/>${[0,1,2,3,4].map(i=>`<rect x="${255+i*22}" y="40" width="16" height="16" fill="#F8D9BF" stroke="#292929"/><rect x="${255+i*22}" y="62" width="16" height="16" fill="#F8D9BF" stroke="#292929"/><rect x="${255+i*22}" y="84" width="16" height="16" fill="#F8D9BF" stroke="#292929"/>`).join('')}</svg>`;

const spreads=[
opening({n:2,title:CT,lede:'A map answer is built on verbs of change: things are built, demolished, converted, extended and replaced. Because the focus is on the place, not on who changed it, these verbs are usually passive. In this chapter I’ll show you the verbs examiners expect and how to use the passive accurately.',
  outcomes:['explain why map answers use the passive','choose the right verb for each kind of change',`form the passive accurately: was ${T('converted into')}, were demolished`,'use “replaced by” and “made way for” correctly'],
  illus:ill,
  steps:[[1,'c2-s1','Why the passive?','The place, not the builder','Discover'],[2,'c2-s2','Verbs of change','Built, demolished, converted','Understand'],[3,'c2-s3','Forming the passive','Was or were + past participle','Understand'],[4,'c2-s4','Replaced by','Which way round?','Practise'],[5,'c2-s5','Chapter challenge','East of Main Road','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Why the passive?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Why the passive?</h2>${vid({title:'Why the passive?',len:'90 seconds',script:['Show the farmland in 2000 and the housing estate in 2025.','Ask: who built the houses? We don’t know, and it doesn’t matter.','Show the sentence: The farmland was replaced by a housing estate.','Finish: the passive keeps the place at the front of the sentence.']})}<p>On a map, we don’t know who made the changes, and it doesn’t matter. What matters is the place. The passive puts the place first:</p><ul class="clean"><li><s>Someone built a supermarket.</s></li><li><b>A supermarket was built</b> next to the river.</li></ul>${chart('c2ashby00')}${chart('c2ashby25')}${mistake('<s>They built a housing estate.</s> “They” is vague: who? Use the passive: <i>A housing estate was built.</i>')}${take('Map answers focus on the place, so most change verbs are passive: was built, was converted, were demolished.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the maps on the left page.</p><div data-act="c2-why"></div>`}),

sp('c2-s2','Verbs of change',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Verbs of change</h2>${vid({title:'Verbs of change',len:'2 minutes',script:['Show five boxes: new, removed, changed use, bigger, no change.','Fill each with verbs: built, demolished, converted into, extended, remained.','Match them to Ashby: estate built, woodland cleared, post office converted, school extended, church remained.','Finish: choose the verb that matches exactly what happened.']})}<ul class="clean"><li><b>Something new:</b> was built, was constructed, was added, was opened</li><li><b>Something removed:</b> was demolished, was knocked down, was ${T('cleared')} (trees, land)</li><li><b>A new use, same building:</b> was ${T('converted into')}, was turned into</li><li><b>Old → new:</b> was replaced by, made way for</li><li><b>Bigger:</b> was extended, was expanded, was enlarged</li><li><b>No change:</b> remained, stayed the same, was unchanged</li></ul>${note('Buildings are demolished. Trees and land are cleared. A building that keeps its walls but changes its use is converted.')}<div class="clear"></div>${take('Match the verb to the change: new, removed, new use, bigger, or unchanged.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-verbs"></div><div data-act="c2-match" style="margin-top:16px"></div>`}),

sp('c2-s3','Forming the passive',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Forming the passive</h2>${vid({title:'Forming the passive',len:'90 seconds',script:['Write: was / were + past participle.','Singular: The school was extended. Plural: Two houses were demolished.','Show common errors: was build, were demolish.','Finish: check the participle and was or were every time.']})}<p>The past simple passive has two parts:</p>${insight('Was or were + past participle','The school <b>was extended</b>. Several trees <b>were cut down</b>. A new road <b>was built</b>.')}<ul class="clean"><li>Singular subject: <b>was</b>. Plural subject: <b>were</b>.</li><li>The past participle, not the base form: <i>built</i>, not <i>build</i>.</li><li>For a plan, use the future passive: <i>will be built</i>.</li></ul>${mistake('<s>A café was open in the old post office.</s> “Was open” describes a state. For the change, write: <i>the post office was converted into a café.</i>')}${take('Was/were + past participle. Check the subject (singular or plural) and the participle.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-fix"></div>`}),

sp('c2-s4','Replaced by',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Replaced by: which way round?</h2><p>“Replace” is the verb students most often get backwards. The old thing comes first in the passive:</p>${insight('Old → new','<b>The farmland</b> (old) was replaced by <b>a housing estate</b> (new).')}<ul class="clean"><li><b>Active:</b> A housing estate (new) replaced the farmland (old).</li><li><b>Made way for:</b> Most of the woodland (old) ${T('made way for')} a supermarket (new).</li></ul>${mistake('<s>The housing estate was replaced by the farmland.</s> This says the houses came first. Check the years.')}${take('Old was replaced by new. Old made way for new. Check the direction against the years.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><div data-act="c2-repl"></div></div>`}),

sp('c2-s5','Chapter challenge: east of Main Road',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the changes to the <b>east</b> of Main Road.</p>${chart('c2ashby00b')}${chart('c2ashby25b')}<ul class="clean" style="font-size:15px"><li>Four or five sentences.</li><li>At least three different passive verbs.</li><li>Say where each change happened.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['The passive keeps the focus on the place: a supermarket was built.','Match the verb to the change: built, demolished or cleared, converted into, extended, remained.','Was or were + past participle; will be + past participle for plans.','Old was replaced by new; old made way for new.']})
];

const acts={
'c2-why':{type:'choice',level:'Guided',skill:'The passive',decision:'Which sentence is best for a map answer?',
  opts:[{t:'A supermarket and a car park were built on part of the woodland.',ok:1,why:'Passive: the focus is on what changed and where.'},{t:'They built a supermarket and a car park.',why:'“They” is vague. Who? The passive avoids the problem.'},{t:'Some builders made a supermarket.',why:'The map doesn’t show who built it, and “made” is imprecise.'}]},
'c2-verbs':{type:'sort',level:'Supported',skill:'Verbs of change',decision:'What kind of change does each verb describe?',cats:['Something new','Something removed','A new use','Bigger'],
  items:[{w:'was constructed',c:0,m:'built from new.'},{w:'was demolished',c:1,m:'a building knocked down.'},{w:'was converted into',c:2,m:'the same building, a new use.'},{w:'was extended',c:3,m:'made bigger.'},{w:'was cleared',c:1,m:'trees or land removed.'},{w:'was enlarged',c:3,m:'made bigger.'}]},
'c2-match':{type:'choice',level:'Supported',skill:'Choosing the verb',decision:'The post office building is still there in 2025, but it is now a café. Which verb fits?',
  opts:[{t:'The post office was converted into a café.',ok:1,why:'Same building, new use: converted into.'},{t:'The post office was demolished.',why:'The building is still there.'},{t:'The post office was extended.',why:'It is the same size.'}]},
'c2-fix':{type:'fix',level:'Supported',skill:'Forming the passive',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'A new road was build into the housing estate.',ok:/was (built|constructed)/i,bad:/was build\b/i,hint:'Use the past participle.',err:'was build',fix:'was built',why:'The passive needs the past participle: built.',model:'A new road was built into the housing estate.'},
         {wrong:'Most of the trees was cut down.',ok:/trees were (cut|cleared|removed|felled)/i,bad:/trees was/i,hint:'“Trees” is plural.',err:'was cut down',fix:'were cut down',why:'A plural subject takes “were”.',model:'Most of the trees were cut down.'},
         {wrong:'The post office converted into a café.',ok:/was (converted|turned) into/i,bad:/office converted/i,hint:'The post office didn’t convert itself. Add the auxiliary.',err:'converted into',fix:'was converted into',why:'Without “was”, the sentence is active and says the post office did the converting.',model:'The post office was converted into a café.'},
         {wrong:'A new wing was extend to the school.',ok:/(was extended|was added|school was extended|new wing was (added|built))/i,bad:/was extend\b/i,hint:'Use a past participle. Which verb fits a new wing?',err:'was extend',fix:'was added / the school was extended',why:'“Was extend” is not a passive; and a wing is added, while the school is extended.',model:'The school was extended with a new wing.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Replaced by',decision:'Build a sentence about the farmland.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['The farmland','in the north-east of the village','was replaced by','a large housing estate.'],
  distract:[{t:'replaced',why:'The farmland didn’t do the replacing. Use the passive: was replaced by.',fix:'was replaced by'},{t:'in the south-west of the village',why:'The farmland was in the north-east.',fix:'in the north-east of the village'}],
  right:'Old thing, where, the passive, new thing.',orderMsg:'All the right pieces, but check the order: the old feature, where it was, the verb, the new feature.',incompleteMsg:'Good so far, but incomplete. Add what replaced it.'},
'c2-repl':{type:'binary',level:'Independent',skill:'Replaced by',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Most of the woodland made way for a supermarket and a car park.',a:0,right:'Old made way for new.',wrong:'It is accurate: the woodland (old) made way for the supermarket (new).'},
         {t:'The café was replaced by the post office.',a:1,right:'Right. It is backwards: the post office came first.',wrong:'Check the years: the post office (2000) became the café (2025).'},
         {t:'A housing estate replaced the farmland.',a:0,right:'Active, and the right way round: new replaced old.',wrong:'This is accurate: the new estate replaced the old farmland.'},
         {t:'All of the woodland was cleared.',a:1,right:'Right. A narrow strip of trees remained by the river.',wrong:'Look again: some trees remained along the river.'}]},
'c2-write':{type:'write',level:'Independent',skill:'Describing changes',decision:'Write one body paragraph about the changes east of Main Road.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'The most significant changes took place…'}],
  checks:[{t:'You described the farmland.',fix:'Describe what happened to the farmland: a housing estate.',fn:v=>/farm/i.test(v.a)&&/(hous|estate|homes)/i.test(v.a)},
          {t:'You described the post office.',fix:'Describe the post office: converted into a café.',fn:v=>/post office/i.test(v.a)&&/caf/i.test(v.a)},
          {t:'You described the woodland.',fix:'Describe the woodland: mostly cleared for a supermarket and a car park.',fn:v=>/wood|trees/i.test(v.a)&&/supermarket/i.test(v.a)},
          {t:'You used at least three passive verbs.',fix:'Use the passive: was replaced by, was converted into, was built, were cleared.',fn:v=>(v.a.match(/\b(was|were|had been)\s+(\w+ly\s+)?(\w+ed|built|cut|made|knocked down|turned into|kept|added)\b/gi)||[]).length>=3},
          {t:'You said where the changes happened.',fix:'Add locations: in the north-east, next to the river, east of Main Road.',fn:v=>/(north|south|east|west|next to|beside|along|near)/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">The most significant changes took place to the east of Main Road.</button> The farmland in the north-east <button type="button" class="hl" data-n="1">was replaced by a large housing estate</button>, and a new road, Elm Close, was built leading off Main Road into it. Further south, <button type="button" class="hl" data-n="2">the post office was converted into a café</button>. Most of the woodland next to the river <button type="button" class="hl" data-n="3">was cleared to make way for a supermarket and a car park</button>, although a narrow strip of trees remained along the riverbank.</p>`,
  notes:['A topic sentence that says where: the reader knows what the paragraph is about.','Old was replaced by new.','Same building, new use: converted into.','Trees are cleared, not demolished; and “make way for” shows old → new.'],
  self:['I used the passive for changes.','I chose verbs that match each change.','I said where each change happened.','I checked was and were.'],revise:1}
};

const gloss={
  'converted into':{term:'converted into',def:'Changed to a new use, in the same building.',path:'M40,30 H110 V80 H40 Z M130,55 H160 M152,49 L160,55 L152,61 M170,30 H240 V80 H170 Z',ex:'“The post office was converted into a café.”'},
  'cleared':{term:'cleared',def:'Of trees or land: removed so that something else can be built.',path:'M30,70 L60,40 L90,70 M130,70 H220',ex:'“Most of the woodland was cleared.”'},
  'made way for':{term:'made way for',def:'Was removed so that something new could replace it. Old made way for new.',path:'M20,60 L110,60 M130,30 L220,30 M110,60 L130,30',ex:'“Most of the woodland made way for a supermarket.”'}
};

const retrieval={
 'c2-s1':[{q:'Why use the passive on a map?',opts:[{t:'The focus is on the place, not who changed it',ok:1,why:'We don’t know who did it.'},{t:'It is always more formal',why:'Focus is the reason.'}]}],
 'c2-s2':[{q:'Trees removed for building: which verb?',opts:[{t:'cleared',ok:1,why:'For trees and land.'},{t:'demolished',why:'For buildings.'}]}],
 'c2-s3':[{q:'“Several houses ___ demolished.”',opts:[{t:'were',ok:1,why:'Plural subject.'},{t:'was',why:'Houses is plural.'}]}],
 'c2-s4':[{q:'Farmland (2000) → houses (2025). Which is right?',opts:[{t:'The farmland was replaced by houses.',ok:1,why:'Old was replaced by new.'},{t:'The houses were replaced by farmland.',why:'Backwards.'}]}],
 'c2-s5':[{q:'A building keeps its walls but gets a new use. It was…',opts:[{t:'converted',ok:1,why:'Same building, new use.'},{t:'demolished',why:'It is still there.'}]}]
};

const minitest=[
 {q:'Which sentence suits a map answer best?',opts:[{t:'A car park was built next to the supermarket.',ok:1,why:'Passive, focus on the place.'},{t:'They built a car park.',why:'Who? Vague.'},{t:'A car park builds next to the supermarket.',why:'Wrong voice and tense.'}],sp:'c2-s1'},
 {q:'Which verb means “made bigger”?',opts:[{t:'extended',ok:1,why:'Also expanded, enlarged.'},{t:'converted',why:'A new use.'},{t:'cleared',why:'Removed.'}],sp:'c2-s2'},
 {q:'The church is unchanged. You write…',opts:[{t:'The church remained.',ok:1,why:'Or: stayed the same.'},{t:'The church was remained.',why:'“Remain” is never passive.'},{t:'The church was converted.',why:'It didn’t change.'}],sp:'c2-s2'},
 {q:'Choose the correct passive.',opts:[{t:'A new road was built.',ok:1,why:'was + built'},{t:'A new road was build.',why:'Use the participle.'},{t:'A new road built.',why:'Add “was”.'}],sp:'c2-s3'},
 {q:'Which form describes a plan?',opts:[{t:'will be built',ok:1,why:'Future passive.'},{t:'was built',why:'Past.'},{t:'is building',why:'Active, and not a plan.'}],sp:'c2-s3'},
 {q:'Woodland (2000) → supermarket (2025). Which is right?',opts:[{t:'Most of the woodland made way for a supermarket.',ok:1,why:'Old made way for new.'},{t:'The supermarket made way for the woodland.',why:'Backwards.'},{t:'The woodland was converted into a supermarket.',why:'Trees aren’t converted; they are cleared.'}],sp:'c2-s4'},
 {q:'“A housing estate replaced the farmland.” Is it accurate?',opts:[{t:'Yes: new replaced old',ok:1,why:'Active, right direction.'},{t:'No: it is backwards',why:'It is the right way round.'},{t:'No: it must be passive',why:'Active is also correct here.'}],sp:'c2-s4'},
 {q:'What does a good map body paragraph include?',opts:[{t:'What changed, the right verb, and where',ok:1,why:'Change + location.'},{t:'Figures and percentages',why:'Maps have none.'},{t:'Reasons for the changes',why:'Task 1 describes.'}],sp:'c2-s5'}
];

const cannow=[['Explain why map answers use the passive','c2-s1'],['Choose the right verb for each kind of change','c2-s2'],['Form the passive accurately','c2-s3'],['Use “replaced by” and “made way for” the right way round','c2-s4'],['Write a body paragraph describing changes on a map','c2-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:2,spreads,acts,gloss,charts:{c2ashby00:cp('ashby00','ch2-ashby00'),c2ashby25:cp('ashby25','ch2-ashby25'),c2ashby00b:cp('ashby00','ch2-ashby00b'),c2ashby25b:cp('ashby25','ch2-ashby25b')},retrieval,minitest,cannow});
})();
