/* ==========================================================================
   MASTERING MAPS · CHAPTER 1 · UNDERSTANDING MAPS
   ACTIVITY IDS (type · level)
     c1-type    sort      Guided       Step 1  What kind of map task?
     c1-parts   hotspots  Guided       Step 2  Read the map
     c1-dir1..3 choice    Supported    Step 3  Which direction?
     c1-diff    sort      Supported    Step 4  Changed or unchanged?
     c1-ov      choice    Independent  Step 4  The best overview
     c1-write   write     Independent  Step 5  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 1',CT='Understanding Maps',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The maps below show the village of Ashby in 2000 and 2025';
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><rect x="20" y="15" width="160" height="120" rx="8" fill="#F6F2E8" stroke="#E4DED1"/><rect x="40" y="35" width="50" height="30" fill="#E2EDD6"/><rect x="110" y="80" width="40" height="30" fill="#fff" stroke="#292929"/><path d="M20,120 C80,110 120,130 180,118" stroke="#B9D8E6" stroke-width="8" fill="none"/><text x="200" y="82" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="24" fill="#F88B48">→</text><rect x="220" y="15" width="160" height="120" rx="8" fill="#F6F2E8" stroke="#E4DED1"/>${[0,1,2,3].map(i=>`<rect x="${236+i*14}" y="36" width="10" height="10" fill="#F8D9BF" stroke="#292929"/><rect x="${236+i*14}" y="52" width="10" height="10" fill="#F8D9BF" stroke="#292929"/>`).join('')}<rect x="310" y="80" width="40" height="30" fill="#fff" stroke="#292929"/><rect x="350" y="80" width="20" height="30" fill="#FBE6CF" stroke="#292929"/><path d="M220,120 C280,110 320,130 380,118" stroke="#B9D8E6" stroke-width="8" fill="none"/></svg>`;

const spreads=[
opening({n:1,title:CT,lede:'Map tasks look completely different from charts: there are no numbers at all. Instead, you describe how a place changed, or how it will change. Many candidates find them the hardest Task 1 type, but they follow a clear pattern. In this chapter I’ll show you how to read a map task and write your first introduction and overview.',
  outcomes:['recognise the three kinds of map task','read a map’s title, year and compass','describe where things are with compass directions such as '+T('north-east'),'spot what changed and what stayed the same between two maps'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:ill,
  steps:[[1,'c1-s1','Meet the map task','Three kinds of map','Discover'],[2,'c1-s2','Read the map','Title, year, compass','Understand'],[3,'c1-s3','Compass directions','Where things are','Understand'],[4,'c1-s4','Spot the changes','Changed and unchanged','Practise'],[5,'c1-s5','Chapter challenge','Ashby village','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('There are no figures in a map task. Describe the changes instead.','gave way to','The farmland gave way to a housing estate')}),

sp('c1-s1','Meet the map task',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Meet the map task</h2>${vid({title:'Meet the map task',len:'90 seconds',script:['Show the two Ashby maps side by side.','Ask: what is the task asking? How the village changed.','Show two other task sentences: a plan for a school, two possible sites for a supermarket.','Finish: read the task sentence to find out which kind of map task it is.']})}<p>There are three kinds of map task:</p><ul class="clean"><li><b>Past to present:</b> two maps of the same place at different times. Describe what changed.</li><li><b>Present to planned:</b> the place now and a plan for the future. Describe what <i>will</i> change.</li><li><b>Possible locations:</b> one map with two or more possible sites for something new. Compare the sites.</li></ul>${chart('ashby00')}${note('Past to present is the most common kind. The task sentence tells you which one you have.')}<div class="clear"></div>${take('Read the task sentence first: past to present, present to planned, or possible locations.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-type"></div>`}),

sp('c1-s2','Read the map',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read the map</h2>${vid({title:'Read the map',len:'90 seconds',script:['Point to the title: the place and the year.','Point to the compass: north is at the top.','Trace the big features: the railway, Main Road, the river.','Say: these fixed features help you describe where everything else is.']})}<p>Before you look for changes, read each map:</p><ul class="clean"><li><b>The title:</b> which place, and which year?</li><li><b>The compass:</b> which way is north? On most maps it is at the top.</li><li><b>The fixed features:</b> roads, rivers and railways. They rarely change, and they help you say where things are.</li></ul>${insight('Ashby’s fixed features','The railway runs along the north of the village, the River Ash along the south, and Main Road runs from north to south through the middle.')}${take('Title, year, compass, fixed features: read these first.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-parts"></div>`}),

sp('c1-s3','Compass directions',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Compass directions</h2>${vid({title:'Compass directions',len:'90 seconds',script:['Draw a compass: north, south, east, west.','Add the in-between directions: north-east, south-east, south-west, north-west.','Place the Ashby features: farmland north-east, woodland south-east, school south-west.','Finish: in the north-east of the village means inside the village, in that part.']})}<svg viewBox="0 0 300 150" aria-hidden="true" style="width:100%;max-width:340px;display:block;margin:6px auto 10px"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="#292929" text-anchor="middle"><line x1="150" y1="20" x2="150" y2="130" stroke="#CFC6B4" stroke-width="2"/><line x1="60" y1="75" x2="240" y2="75" stroke="#CFC6B4" stroke-width="2"/><line x1="95" y1="30" x2="205" y2="120" stroke="#E4DED1" stroke-width="2"/><line x1="205" y1="30" x2="95" y2="120" stroke="#E4DED1" stroke-width="2"/><text x="150" y="14">North</text><text x="150" y="146">South</text><text x="34" y="80">West</text><text x="268" y="80">East</text><text x="80" y="28" font-size="11" fill="#55534E">North-west</text><text x="222" y="28" font-size="11" fill="#55534E">North-east</text><text x="80" y="132" font-size="11" fill="#55534E">South-west</text><text x="222" y="132" font-size="11" fill="#55534E">South-east</text><circle cx="150" cy="75" r="6" fill="#F88B48"/></g></svg><ul class="clean"><li><b>In the north-east of the village:</b> inside the village, in that part.</li><li><b>To the north of the church:</b> outside the church, in that direction.</li><li><b>East of Main Road:</b> on the eastern side of the road.</li></ul>${mistake('<s>The farmland was in the north east.</s> Use a hyphen: <i>north-east</i>.')}${take('In the north-east of = inside it. To the north of = outside it. Hyphenate north-east, south-west and the others.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the map of Ashby in 2000 in Step 1.</p><div data-act="c1-dir1"></div><div data-act="c1-dir2" style="margin-top:14px"></div><div data-act="c1-dir3" style="margin-top:14px"></div>`}),

sp('c1-s4','Spot the changes',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Spot the changes</h2><p>Compare the maps one area at a time. For each feature, ask: did it stay the same, change its use, grow, or disappear?</p>${chart('ashby00b')}${chart('ashby25')}${note('Look at the big picture too: one side of the village changed much more than the other. That belongs in the overview.')}<div class="clear"></div>${take('Compare area by area. Note what changed and what stayed the same, then look for the big picture.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the two maps on the left page.</p><div data-act="c1-diff"></div><div data-act="c1-ov" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: Ashby village',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task.</p>${taskbox(TASK+'.')}${chart('ashby00c')}${chart('ashby25b')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['There are three kinds of map task: past to present, present to planned, and possible locations.','Read the title, the year, the compass and the fixed features first.','In the north-east of = inside; to the north of = outside. Hyphenate the directions.','Compare area by area, then find the big picture for the overview.']})
];

const acts={
'c1-type':{type:'sort',level:'Guided',skill:'Kinds of map task',decision:'Which kind of map task is each one?',cats:['Past to present','Present to planned','Possible locations'],
  items:[{w:'The maps below show the village of Ashby in 2000 and 2025.',c:0,m:'two years, both in the past.'},
         {w:'The maps show the present layout of a school and the plan for its development.',c:1,m:'now, and a plan for the future.'},
         {w:'The map shows two possible sites for a new supermarket in a town.',c:2,m:'one map, two sites to compare.'},
         {w:'The maps show an island before and after the construction of tourist facilities.',c:0,m:'before and after: past changes.'},
         {w:'The plans show how a city park will be redeveloped next year.',c:1,m:'“will be”: a future plan.'}]},
'c1-parts':{type:'hotspots',level:'Guided',skill:'Reading a map',decision:'Find each part of the map.',prompt:'Select the part of the map that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.ashby00,{id:'ch-ashby00-hot',hot:1}),
  parts:{title:'That is the title: the place and the year.',compass:'That is the compass: north is at the top.',school:'That is the school.',farmland:'That is the farmland.',woodland:'That is the woodland.',station:'That is the station.',houses:'Those are houses.',church:'That is the church.',postoffice:'That is the post office.'},
  targets:[{q:'Which year does this map show?',part:'title',ok:'The title gives the place and the year: Ashby village in 2000.'},
           {q:'Which way is north?',part:'compass',ok:'The compass shows north at the top, as on most IELTS maps.'},
           {q:'What was in the south-west of the village?',part:'school',ok:'The school: west of Main Road, near the river.'},
           {q:'What covered the north-east of the village?',part:'farmland',ok:'Farmland, east of Main Road and south of the railway.'}],
  doneMsg:'<b>All found.</b> Before you describe any map, check the title, the year and the compass.'},
'c1-dir1':{type:'choice',level:'Supported',skill:'Directions',decision:'Where was the woodland in 2000?',
  opts:[{t:'In the south-east of the village, beside the river',ok:1,why:'East of Main Road, at the southern edge.'},{t:'In the north-west of the village',why:'That is where the houses and station were.'},{t:'In the south-west of the village',why:'The school was in the south-west.'}]},
'c1-dir2':{type:'choice',level:'Supported',skill:'Directions',decision:'Which sentence is accurate?',
  opts:[{t:'The railway ran along the northern edge of the village.',ok:1,why:'It crosses the top of the map from west to east.'},{t:'The river ran from north to south.',why:'The River Ash runs west to east, along the south.'},{t:'Main Road ran from east to west.',why:'Main Road runs from north to south.'}]},
'c1-dir3':{type:'choice',level:'Supported',skill:'In or to?',decision:'The station is north-west of the church, outside it. Which sentence is correct?',
  opts:[{t:'The station was to the north-west of the church.',ok:1,why:'“To the … of” describes a place outside the other one.'},{t:'The station was in the north-west of the church.',why:'“In” would put the station inside the church.'},{t:'The station was north west the church.',why:'Use a hyphen and “of”: to the north-west of.'}]},
'c1-diff':{type:'sort',level:'Supported',skill:'Spotting changes',decision:'Did each feature change between 2000 and 2025?',cats:['Changed','Stayed the same'],
  items:[{w:'The farmland',c:0,m:'replaced by a housing estate.'},{w:'The church',c:1,m:'still there in 2025.'},{w:'The woodland',c:0,m:'mostly cleared for a supermarket and car park.'},{w:'The station and railway',c:1,m:'unchanged.'},{w:'The post office',c:0,m:'now a café.'},{w:'The houses in the north-west',c:1,m:'unchanged.'}]},
'c1-ov':{type:'choice',level:'Independent',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, the village became much more developed, especially east of Main Road, while the western side changed relatively little.',ok:1,why:'The big picture: where most change happened, and where it didn’t.'},{t:'Overall, a café replaced the post office.',why:'One detail: body paragraph material.'},{t:'Overall, Ashby is a nice place to live.',why:'An opinion. The overview describes the main changes.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The two maps illustrate…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction gives the place and the years.',fix:'Include Ashby, 2000 and 2025.',fn:v=>/ashby/i.test(v.intro)&&/2000/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,”.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'Your overview gives the big picture.',fix:'Say how the village changed in general: more developed, more housing, less countryside.',fn:v=>/(develop|built|housing|residential|urban|countryside|green|farmland|woodland)/i.test(v.ov)},
          {t:'Your overview says where most change happened, or what stayed the same.',fix:'Add where the main changes were (east of Main Road) or what changed little (the west).',fn:v=>/(east|west|unchanged|little|same|remained)/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The two maps illustrate how the village of Ashby changed over the 25 years between 2000 and 2025.</button></p><p><button type="button" class="hl" data-n="1">Overall, the village became considerably more developed, particularly to the east of Main Road</button>, where the farmland and most of the woodland ${T('gave way to')} a housing estate, a supermarket and a car park. <button type="button" class="hl" data-n="2">By contrast, the western side of the village changed relatively little.</button></p>`,
  notes:['A new verb (illustrate) and a new structure (how … changed), with the place and both years.','The big picture first: more developed, and where.','What stayed the same is part of the big picture too.'],
  self:['My introduction gives the place and both years.','I didn’t copy the task sentence.','My overview gives the general change.','My overview says where most change happened.'],revise:1}
};

const gloss={
  'north-east':{term:'north-east',def:'Between north and east. Write it with a hyphen, like north-west, south-east and south-west.',path:'M120,80 L120,10 M120,80 L200,80 M120,80 L190,15',ex:'“The farmland was in the north-east of the village.”'},
  'gave way to':{term:'gave way to',def:'Was replaced by. A useful, natural phrase for a change of land use.',path:'M20,60 L110,60 M130,30 L220,30 M110,60 L130,30',ex:'“The farmland gave way to a housing estate.”'},
  'layout':{term:'layout',def:'The way the parts of a place are arranged.',path:'M30,20 H110 V70 H30 Z M130,20 H210 V45 H130 Z',ex:'“The plan shows the new layout of the school.”'}
};

const retrieval={
 'c1-s1':[{q:'“The plans show how a park will be redeveloped.” Which kind of task?',opts:[{t:'Present to planned',ok:1,why:'“Will be”: the future.'},{t:'Past to present',why:'It is a plan.'}]}],
 'c1-s2':[{q:'Why read the fixed features first?',opts:[{t:'They help you say where things are',ok:1,why:'Roads, rivers, railways.'},{t:'They always change',why:'They rarely change.'}]}],
 'c1-s3':[{q:'The station is outside the church, to its north-west. You write…',opts:[{t:'to the north-west of the church',ok:1,why:'Outside: “to the … of”.'},{t:'in the north-west of the church',why:'That puts it inside.'}]}],
 'c1-s4':[{q:'One side of the village changed much more than the other. Where does that go?',opts:[{t:'The overview',ok:1,why:'It is the big picture.'},{t:'Nowhere',why:'It is a key feature.'}]}],
 'c1-s5':[{q:'Does a map overview need figures?',opts:[{t:'No: maps have none',ok:1,why:'Describe the main changes.'},{t:'Yes',why:'There are no figures on a map.'}]}]
};

const minitest=[
 {q:'“The map shows two possible sites for a new hospital.” Which kind of task?',opts:[{t:'Possible locations',ok:1,why:'Compare the sites.'},{t:'Past to present',why:'No change over time.'},{t:'Present to planned',why:'No “now” and “after” maps.'}],sp:'c1-s1'},
 {q:'Which is the most common kind of map task?',opts:[{t:'Past to present',ok:1,why:'Two maps, two years.'},{t:'Possible locations',why:'Less common.'},{t:'There is only one kind',why:'There are three.'}],sp:'c1-s1'},
 {q:'What does the compass tell you?',opts:[{t:'Which way is north',ok:1,why:'Usually the top.'},{t:'The year',why:'That is in the title.'},{t:'The scale',why:'A scale bar shows distance.'}],sp:'c1-s2'},
 {q:'Which spelling is correct?',opts:[{t:'south-west',ok:1,why:'With a hyphen.'},{t:'south west',why:'Add a hyphen.'},{t:'southwest',why:'Add a hyphen in British English.'}],sp:'c1-s3'},
 {q:'The farmland covered the top right of the village. It was…',opts:[{t:'in the north-east of the village',ok:1,why:'Top right, inside the village.'},{t:'to the north-east of the village',why:'That would be outside the village.'},{t:'in the south-west of the village',why:'That is bottom left.'}],sp:'c1-s3'},
 {q:'The school is near the river, west of Main Road. It is…',opts:[{t:'in the south-west of the village',ok:1,why:'Bottom left.'},{t:'in the north-east',why:'That is the farmland.'},{t:'in the north-west',why:'That is the station and houses.'}],sp:'c1-s3'},
 {q:'Which feature did not change?',opts:[{t:'The church',ok:1,why:'Still there in 2025.'},{t:'The farmland',why:'It became housing.'},{t:'The post office',why:'It became a café.'}],sp:'c1-s4'},
 {q:'Which is the best overview sentence?',opts:[{t:'Overall, the village became more developed, especially in the east.',ok:1,why:'The big picture.'},{t:'Overall, a café opened.',why:'A detail.'},{t:'Overall, the village is better now.',why:'An opinion.'}],sp:'c1-s5'}
];

const cannow=[['Recognise the three kinds of map task','c1-s1'],['Read a map’s title, year, compass and fixed features','c1-s2'],['Describe where things are with compass directions','c1-s3'],['Spot what changed and what stayed the same','c1-s4'],['Write an introduction and an overview for a map task','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{ashby00:C.ashby00,ashby00b:cp('ashby00','ch-ashby00b'),ashby00c:cp('ashby00','ch-ashby00c'),ashby25:C.ashby25,ashby25b:cp('ashby25','ch-ashby25b'),'ashby00-hot':Object.assign({},C.ashby00,{id:'ch-ashby00-hot',hot:1})},retrieval,minitest,cannow});
})();
