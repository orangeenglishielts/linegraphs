/* ==========================================================================
   MASTERING MAPS · CHAPTER 3 · LOCATION AND DIRECTION
   ACTIVITY IDS (type · level)
     c3-where1..2 choice  Guided       Step 1  Where is it?
     c3-fixed   binary    Supported    Step 2  Accurate or not?
     c3-fix     fix       Supported    Step 3  The right preposition
     c3-find    hotspots  Supported    Step 4  Find it on the map
     c3-build   builder   Supported    Step 4  Change + location
     c3-write   write     Independent  Step 5  The western side
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 3',CT='Location and Direction',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#292929" text-anchor="middle"><rect x="40" y="50" width="60" height="44" fill="#E4DED1" stroke="#292929"/><text x="70" y="76">School</text><rect x="100" y="50" width="30" height="44" fill="#fff" stroke="#F88B48" stroke-width="2.5"/><text x="115" y="112" fill="#A84A12">next to</text><rect x="190" y="20" width="18" height="110" fill="#DDD5C6"/><rect x="230" y="50" width="60" height="30" fill="#FBE6CF" stroke="#292929"/><text x="260" y="69">Café</text><text x="199" y="145" fill="#A84A12">opposite</text><path d="M135,72 H185" stroke="#F88B48" stroke-dasharray="4 3"/><path d="M300,120 C330,112 350,128 380,118" stroke="#B9D8E6" stroke-width="10" fill="none"/><rect x="333" y="100" width="12" height="36" fill="#BDB3A0" stroke="#292929"/><text x="340" y="92" fill="#A84A12">across</text></g></svg>`;

const spreads=[
opening({n:3,title:CT,lede:'A change means little unless the reader knows where it happened. “A footbridge was built” is incomplete; “a footbridge was built across the river, south of the school” is clear. In this chapter I’ll show you the location language that makes a map answer precise.',
  outcomes:['use location phrases: next to, opposite, between, at the end of','use the fixed features to locate changes: along the river, '+T('off')+' Main Road','choose the right preposition: across or along, in or to','combine a change and its location in one sentence'],
  illus:ill,
  steps:[[1,'c3-s1','Where is it?','Next to, opposite, between','Discover'],[2,'c3-s2','Using fixed features','Along, beside, off','Understand'],[3,'c3-s3','The right preposition','Across or along, in or to','Understand'],[4,'c3-s4','Change + location','One clear sentence','Practise'],[5,'c3-s5','Chapter challenge','West of Main Road','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Where is it?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Where is it?</h2>${vid({title:'Where is it?',len:'90 seconds',script:['Show Ashby in 2025. Point to the supermarket.','Say: it is between the café and the car park.','Point to the café: it is opposite the school, across Main Road.','Finish: one feature is located by the features around it.']})}<p>Locate a feature by the features around it:</p><ul class="clean"><li><b>next to / beside:</b> the new wing is next to the school.</li><li><b>opposite:</b> on the other side of a road. The café is opposite the school.</li><li><b>between:</b> the supermarket is between the café and the car park.</li><li><b>at the end of:</b> the car park is at the end of the row of new buildings east of the café.</li></ul>${chart('c3a25')}${take('Locate each feature by its neighbours: next to, opposite, between, at the end of.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the map on the left page.</p><div data-act="c3-where1"></div><div data-act="c3-where2" style="margin-top:14px"></div>`}),

sp('c3-s2','Using fixed features',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Using fixed features</h2>${vid({title:'Using fixed features',len:'90 seconds',script:['Trace the fixed features: the railway, Main Road, the river.','Say: almost everything can be located from one of them.','Examples: the station is beside the railway; Elm Close leads off Main Road; trees remain along the river.','Finish: use the fixed features as landmarks.']})}<p>Roads, rivers and railways are your landmarks:</p><ul class="clean"><li><b>along / alongside:</b> following its length. Trees remain along the river.</li><li><b>beside:</b> next to. The station is beside the railway.</li><li><b>${T('off')}:</b> branching from a road. Elm Close leads off Main Road.</li><li><b>on the east/west side of:</b> the supermarket is on the east side of Main Road.</li></ul>${insight('One landmark, many features','To the east of Main Road: the estate, the café, the supermarket, the car park. One phrase locates them all.')}${take('Use the fixed features as landmarks: along, beside, off, on the east side of.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the map in Step 1.</p><div data-act="c3-fixed"></div>`}),

sp('c3-s3','The right preposition',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The right preposition</h2><p>These pairs are easy to confuse:</p><ul class="clean"><li><b>across</b> (from one side to the other) / <b>along</b> (following the length): a bridge goes <i>across</i> a river; a path runs <i>along</i> it.</li><li><b>in the north of</b> (inside) / <b>to the north of</b> (outside).</li><li><b>opposite</b> (facing, across a road) / <b>in front of</b> (directly before the entrance).</li><li><b>next to</b>, never <i>next the</i>.</li></ul>${mistake('<s>A footbridge was built along the river.</s> A bridge crosses a river: <i>across the river.</i>')}${take('Across crosses; along follows. In = inside; to = outside. Next to, with “to”.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c3-fix"></div>`}),

sp('c3-s4','Change + location',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Change + location</h2><p>The strongest map sentences combine the change and its location. The location can go at the start or the end:</p>${insight('Location at the end','A footbridge was built across the river, to the south of the school.')}${insight('Location at the start','To the east of the café, a supermarket and a car park were built.')}${note('Starting with the location helps you move around the map: “Further south,…”, “To the east of the café,…”.')}<div class="clear"></div>${take('Every change gets a location. Put it at the start to move the reader around the map.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-find"></div><div data-gate="c3-find" hidden style="margin-top:16px"><div data-act="c3-build"></div></div>`}),

sp('c3-s5','Chapter challenge: west of Main Road',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the <b>western</b> side of Ashby: what changed, and what stayed the same.</p>${chart('ashby00w')}${chart('ashby25w')}<ul class="clean" style="font-size:15px"><li>A topic sentence that says where.</li><li>A location for every change.</li><li>What stayed the same.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Locate features by their neighbours: next to, opposite, between, at the end of.','Use the fixed features as landmarks: along, beside, off, on the east side of.','Across crosses; along follows. In = inside; to = outside.','Every change gets a location, often at the start of the sentence.']})
];

const acts={
'c3-where1':{type:'choice',level:'Guided',skill:'Location',decision:'Where is the supermarket?',
  opts:[{t:'Between the café and the car park',ok:1,why:'The café is to its west and the car park to its east.'},{t:'Opposite the station',why:'The station is in the north-west, far away.'},{t:'Next to the church',why:'The church is west of Main Road.'}]},
'c3-where2':{type:'choice',level:'Guided',skill:'Location',decision:'Which sentence about the café is accurate?',
  opts:[{t:'The café is on the east side of Main Road, opposite the school.',ok:1,why:'Across the road from the school.'},{t:'The café is next to the church.',why:'The church is further north, on the other side of the road.'},{t:'The café is in the north-east of the village.',why:'That is the housing estate.'}]},
'c3-fixed':{type:'binary',level:'Supported',skill:'Fixed features',decision:'Is each sentence accurate for Ashby in 2025?',labels:['Accurate','Not accurate'],
  items:[{t:'The station is beside the railway.',a:0,right:'It sits just south of the line.',wrong:'It is accurate: the station is next to the railway.'},
         {t:'Elm Close leads off Main Road into the housing estate.',a:0,right:'It branches east from Main Road.',wrong:'It is accurate: Elm Close branches off Main Road.'},
         {t:'A narrow strip of trees remains along the river, south of the supermarket.',a:0,right:'Following the river’s length.',wrong:'It is accurate: the strip follows the river.'},
         {t:'The car park is on the west side of Main Road.',a:1,right:'Right. It is at the eastern end, beside the supermarket.',wrong:'Look again: the car park is east of Main Road.'}]},
'c3-fix':{type:'fix',level:'Supported',skill:'Prepositions',decision:'Fix the preposition in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'A footbridge was built along the river.',ok:/across the river/i,bad:/along the river/i,hint:'Does a bridge follow the river, or cross it?',err:'along',fix:'across',why:'A bridge goes from one bank to the other: across.',model:'A footbridge was built across the river.'},
         {wrong:'The new wing was added next the school.',ok:/next to the school|beside the school|to the school/i,bad:/next the/i,hint:'“Next” needs another word.',err:'next the',fix:'next to',why:'The phrase is “next to”.',model:'The new wing was added next to the school.'},
         {wrong:'The housing estate was built to the north-east of the village.',ok:/in the north-east of the village/i,bad:/to the north-east of the village/i,hint:'Is the estate inside or outside the village?',err:'to the north-east of',fix:'in the north-east of',why:'The estate is inside the village, so use “in”.',model:'The housing estate was built in the north-east of the village.'},
         {wrong:'The café is in front of the school, on the other side of Main Road.',ok:/opposite the school/i,bad:/in front of/i,hint:'Which word means “facing, across a road”?',err:'in front of',fix:'opposite',why:'Across a road is “opposite”.',model:'The café is opposite the school, on the other side of Main Road.'}]},
'c3-find':{type:'hotspots',level:'Supported',skill:'Following locations',decision:'Find each feature from its location.',prompt:'Select each feature on the map, in order.',
  chart:Object.assign({},C.ashby25,{id:'ch3-ashby25-hot',hot:1}),
  parts:{title:'That is the title.',compass:'That is the compass.',station:'That is the station.',houses:'Those are the houses in the north-west.',church:'That is the church.',school:'That is the original school building.',schoolext:'That is the new wing of the school.',newroad:'That is Elm Close.',estate:'That is the housing estate label.',cafe:'That is the café.',supermarket:'That is the supermarket.',carpark:'That is the car park.',footbridge:'That is the footbridge.'},
  targets:[{q:'The building between the café and the car park',part:'supermarket',ok:'The supermarket.'},
           {q:'The building added to the east side of the school',part:'schoolext',ok:'The new wing.'},
           {q:'What crosses the river to the south of the school',part:'footbridge',ok:'The footbridge.'},
           {q:'The road leading off Main Road into the estate',part:'newroad',ok:'Elm Close.'}],
  doneMsg:'<b>All found.</b> Precise locations let the reader find every change.'},
'c3-build':{type:'builder',level:'Supported',skill:'Change + location',decision:'Build a sentence about the footbridge.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['To the south of the school,','a footbridge','was built','across the river.'],
  distract:[{t:'along the river.',why:'A bridge crosses a river.',fix:'across the river.'},{t:'In the south of the school,',why:'The bridge is outside the school: “to the south of”.',fix:'To the south of the school,'}],
  right:'Location first, then the change, with accurate prepositions.',orderMsg:'All the right pieces, but check the order: the location, the feature, the verb, where it crosses.',incompleteMsg:'Good so far, but incomplete. Add where the bridge goes.'},
'c3-write':{type:'write',level:'Independent',skill:'Location and change',decision:'Write one body paragraph about the western side of Ashby.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'On the western side of Main Road,…'}],
  checks:[{t:'Your first sentence says where.',fix:'Start with a topic sentence: On the western side of Main Road,…',fn:v=>/west/i.test((v.a.split(/[.!?]/)[0]||''))},
          {t:'You described the school extension.',fix:'Describe the school: extended with a new wing.',fn:v=>/school/i.test(v.a)&&/(extend|wing|enlarg|expand)/i.test(v.a)},
          {t:'You described the footbridge with “across”.',fix:'Describe the footbridge: built across the river.',fn:v=>/footbridge|bridge/i.test(v.a)&&/across/i.test(v.a)},
          {t:'You said what stayed the same.',fix:'Add what remained: the houses, the church, the station.',fn:v=>/(remain|unchanged|same|still)/i.test(v.a)},
          {t:'You used the passive for changes.',fix:'Use the passive: was extended, was built.',fn:v=>/\b(was|were)\s+(\w+ly\s+)?(\w+ed|built|cut|made|kept|added)\b/i.test(v.a)},
          {t:'Your paragraph is a good length (50 words or more).',fix:'Add detail: your paragraph is under 50 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=50}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">On the western side of Main Road, the changes were far smaller.</button> The school, in the south-west of the village, <button type="button" class="hl" data-n="1">was extended, with a new wing added to its eastern side</button>. <button type="button" class="hl" data-n="2">To the south of the school, a footbridge was built across the river.</button> However, <button type="button" class="hl" data-n="3">the houses and the church in the north-west, as well as the station beside the railway, remained unchanged.</button></p>`,
  notes:['A topic sentence with the location and the big picture for this side.','The change, and exactly where it was added.','Location first, then the change; “across” for a bridge.','What stayed the same, each with a location.'],
  self:['My topic sentence says where.','Every change has a location.','I used across and along correctly.','I said what stayed the same.'],revise:1}
};

const gloss={
  'off':{term:'off',def:'Of a road: branching from a bigger road.',path:'M120,10 V90 M120,50 H210',ex:'“Elm Close leads off Main Road.”'},
  'opposite':{term:'opposite',def:'Facing something, on the other side of a road or space.',path:'M30,30 H90 V70 H30 Z M110,10 V90 M130,30 H190 V70 H130 Z',ex:'“The café is opposite the school.”'},
  'across':{term:'across',def:'From one side to the other, as a bridge crosses a river.',path:'M20,50 C80,40 160,60 220,50 M120,20 V80',ex:'“A footbridge was built across the river.”'}
};

const retrieval={
 'c3-s1':[{q:'On the other side of a road, facing it:',opts:[{t:'opposite',ok:1,why:'Across the road.'},{t:'next to',why:'Same side, beside it.'}]}],
 'c3-s2':[{q:'A road branching from Main Road leads ___ Main Road.',opts:[{t:'off',ok:1,why:'Branching from.'},{t:'across',why:'That crosses it.'}]}],
 'c3-s3':[{q:'A path that follows a river runs…',opts:[{t:'along it',ok:1,why:'Following its length.'},{t:'across it',why:'That crosses it.'}]}],
 'c3-s4':[{q:'Where can the location go?',opts:[{t:'At the start or the end',ok:1,why:'Both work.'},{t:'Only at the end',why:'The start is often better.'}]}],
 'c3-s5':[{q:'Should you mention what stayed the same?',opts:[{t:'Yes, briefly',ok:1,why:'It is part of the picture.'},{t:'No',why:'Unchanged features are key too.'}]}]
};

const minitest=[
 {q:'The supermarket has the café on one side and the car park on the other. It is…',opts:[{t:'between the café and the car park',ok:1,why:'In the middle.'},{t:'opposite the café',why:'They are next to each other.'},{t:'off the café',why:'“Off” is for roads.'}],sp:'c3-s1'},
 {q:'Choose the correct phrase.',opts:[{t:'next to the school',ok:1,why:'next to'},{t:'next the school',why:'Add “to”.'},{t:'next of the school',why:'Use “to”.'}],sp:'c3-s1'},
 {q:'Trees follow the river’s length. They are…',opts:[{t:'along the river',ok:1,why:'Following it.'},{t:'across the river',why:'That crosses it.'},{t:'off the river',why:'“Off” is for roads.'}],sp:'c3-s2'},
 {q:'Which phrase locates everything east of the main road at once?',opts:[{t:'on the east side of Main Road',ok:1,why:'One landmark.'},{t:'opposite',why:'Needs a specific feature.'},{t:'between',why:'Needs two features.'}],sp:'c3-s2'},
 {q:'The estate is inside the village, in the top right. It is…',opts:[{t:'in the north-east of the village',ok:1,why:'Inside: in.'},{t:'to the north-east of the village',why:'That is outside.'},{t:'on the north-east of the village',why:'Use “in”.'}],sp:'c3-s3'},
 {q:'A bridge was built ___ the river.',opts:[{t:'across',ok:1,why:'From bank to bank.'},{t:'along',why:'That follows it.'},{t:'next',why:'Not a preposition alone.'}],sp:'c3-s3'},
 {q:'Which sentence combines a change and its location best?',opts:[{t:'To the east of the café, a supermarket was built.',ok:1,why:'Location + change.'},{t:'A supermarket was built.',why:'Where?'},{t:'There is a supermarket.',why:'No change, no location.'}],sp:'c3-s4'},
 {q:'Which is the best topic sentence for the west side?',opts:[{t:'On the western side of Main Road, the changes were far smaller.',ok:1,why:'Where, and the big picture.'},{t:'The school was extended.',why:'A detail, not a topic sentence.'},{t:'There were some changes.',why:'Vague: where?'}],sp:'c3-s5'}
];

const cannow=[['Locate features with next to, opposite, between','c3-s1'],['Use roads, rivers and railways as landmarks','c3-s2'],['Choose between across and along, in and to','c3-s3'],['Combine a change and its location in one sentence','c3-s4'],['Write a body paragraph with precise locations','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{c3a25:cp('ashby25','ch3-ashby25'),ashby00w:cp('ashby00','ch3-ashby00w'),ashby25w:cp('ashby25','ch3-ashby25w'),'c3hot':Object.assign({},C.ashby25,{id:'ch3-ashby25-hot',hot:1})},retrieval,minitest,cannow});
})();
