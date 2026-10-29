/* ==========================================================================
   MASTERING MAPS · CHAPTER 4 · SELECTING AND GROUPING CHANGES
   ACTIVITY IDS (type · level)
     c4-list    sort      Guided       Step 1  Changed or unchanged?
     c4-what    choice    Supported    Step 1  What happened to the bus station?
     c4-type    sort      Supported    Step 2  Group by type
     c4-area    choice    Supported    Step 3  Type or area?
     c4-ovin    binary    Supported    Step 4  Overview or body?
     c4-ov      choice    Independent  Step 4  The best overview
     c4-write   write     Independent  Step 5  Overview and two body paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 4',CT='Selecting and Grouping Changes',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Inter,sans-serif" font-size="12" font-weight="600"><rect x="30" y="25" width="160" height="100" rx="10" fill="#FBE6CF"/><text x="110" y="48" text-anchor="middle" fill="#A84A12">Transport</text>${[0,1,2].map(i=>`<rect x="50" y="${60+i*20}" width="120" height="10" rx="5" fill="#F88B48" opacity=".7"/>`).join('')}<rect x="210" y="25" width="160" height="100" rx="10" fill="#E2EDD6"/><text x="290" y="48" text-anchor="middle" fill="#2B6E43">New uses</text>${[0,1,2].map(i=>`<rect x="230" y="${60+i*20}" width="120" height="10" rx="5" fill="#2B6E43" opacity=".6"/>`).join('')}</g></svg>`;

const spreads=[
opening({n:4,title:CT,lede:'A town centre map can show eight or ten changes. Describing them one by one, in the order you find them, makes a confusing list. In this chapter I’ll show you how to list every change, group them by type or by area, and turn the groups into paragraphs.',
  outcomes:['list every change, and what stayed the same, before writing','group changes by type: transport, new buildings, new uses','group changes by area when that keeps linked changes together','write an overview from your groups'],
  illus:ill,
  steps:[[1,'c4-s1','List every change','Before you write','Discover'],[2,'c4-s2','Group by type','Transport, new uses','Understand'],[3,'c4-s3','Or group by area','North and south','Understand'],[4,'c4-s4','From groups to overview','The big picture','Practise'],[5,'c4-s5','Chapter challenge','Millbrook town centre','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','List every change',{
 left:`${head('Step 1 · Discover','Learn')}<h2>List every change</h2>${vid({title:'List every change',len:'2 minutes',script:['Show the two Millbrook maps.','Move around the map clockwise, from the north-west.','Note each change in two or three words: cinema → gym; factory → flats.','Note what stayed the same too. Then group.']})}<p>Before you write, move around the maps in one direction and note every change in a few words. Note what stayed the same, too.</p>${chart('mill95')}${chart('mill25')}${note('Work clockwise from the north-west, so you don’t miss anything.')}<div class="clear"></div>${take('List first, in a fixed order. Then group. Then write.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two maps on the left page.</p><div data-act="c4-list"></div><div data-act="c4-what" style="margin-top:16px"></div>`}),

sp('c4-s2','Group by type',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Group by type</h2>${vid({title:'Group by type',len:'90 seconds',script:['Read your list of six changes.','Ask: which are about getting around? The High Street, the bus station, the cycle path.','Which are buildings with new uses? The cinema, the factory, the old bus station site.','Finish: two groups, two body paragraphs.']})}<p>Look at your list and ask: which changes are the same <i>kind</i>?</p><ul class="clean"><li><b>Transport:</b> the High Street became ${T('pedestrianised','pedestrian-only')}, the bus station moved, and a cycle path was added.</li><li><b>New uses for sites:</b> the cinema became a gym, the factory was replaced by flats, and the old bus station site became a shopping centre.</li><li><b>Unchanged:</b> the terraced houses, the market square and the park.</li></ul>${take('Group the changes by kind. Two groups make two body paragraphs; unchanged features fit in the overview or a final sentence.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c4-type"></div>`}),

sp('c4-s3','Or group by area',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Or group by area</h2><p>You can also group by <b>area</b>: the north of the town centre, then the south. This works well when changes in one area are linked.</p><ul class="clean"><li><b>North of the High Street:</b> cinema → gym; factory → flats.</li><li><b>South of the High Street:</b> bus station → shopping centre; car park → new bus station.</li><li><b>Across the whole centre:</b> the High Street and the cycle path.</li></ul>${insight('Linked changes','The bus station moved to the car park site, and its old site became a shopping centre. Grouping by area keeps these two linked changes in the same paragraph.')}${note('Both ways are correct. Choose the one that gives each paragraph a clear focus.')}<div class="clear"></div>${take('By type or by area: choose the grouping that keeps linked changes together and gives each paragraph one focus.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c4-area"></div>`}),

sp('c4-s4','From groups to overview',{
 left:`${head('Step 4 · Practise','Learn')}<h2>From groups to overview</h2><p>Your groups give you the overview. Ask: what do the groups have in common, and what stayed the same?</p>${insight('Overview','Overall, the town centre became less industrial and more '+T('pedestrianised')+', with several sites given new uses, although the park, the market square and the terraced houses remained unchanged.')}${mistake('<s>Overall, the cinema was converted into a gym.</s> One change is a detail. The overview describes the pattern.')}${take('The overview is the pattern behind your groups, plus what stayed the same.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c4-ovin"></div><div data-act="c4-ov" style="margin-top:16px"></div>`}),

sp('c4-s5','Chapter challenge: Millbrook town centre',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and two body paragraphs. Group the changes by type or by area.</p>${taskbox('The maps below show the centre of Millbrook in 1995 and 2025.')}${chart('mill95b')}${chart('mill25b')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['List every change, and what stayed the same, in a fixed order before writing.','Group by type (transport, new uses) or by area (north, south).','Choose the grouping that keeps linked changes together.','The overview is the pattern behind your groups, plus what stayed the same.']})
];

const acts={
'c4-list':{type:'sort',level:'Guided',skill:'Listing changes',decision:'Did each feature change between 1995 and 2025?',cats:['Changed','Stayed the same'],
  items:[{w:'The cinema',c:0,m:'now a gym.'},{w:'The terraced houses',c:1,m:'unchanged.'},{w:'The factory',c:0,m:'replaced by flats.'},{w:'The market square',c:1,m:'unchanged.'},{w:'The High Street',c:0,m:'now for pedestrians only.'},{w:'The park',c:1,m:'unchanged.'},{w:'The car park',c:0,m:'replaced by the bus station.'}]},
'c4-what':{type:'choice',level:'Supported',skill:'Reading changes',decision:'What happened to the bus station?',
  opts:[{t:'It moved to the site of the old car park, and its old site became a shopping centre.',ok:1,why:'Compare both maps: two linked changes.'},{t:'It was demolished, and the town lost its bus station.',why:'There is still a bus station in 2025, by the river.'},{t:'It was extended.',why:'Its old site became a shopping centre.'}]},
'c4-type':{type:'sort',level:'Supported',skill:'Grouping by type',decision:'Which group does each change belong in?',cats:['Transport','New use for a site'],
  items:[{w:'The High Street became pedestrian-only.',c:0,m:'getting around.'},{w:'The cinema was converted into a gym.',c:1,m:'same building, new use.'},{w:'A cycle path was built along the river.',c:0,m:'getting around.'},{w:'The factory was replaced by two blocks of flats.',c:1,m:'a new use for the site.'},{w:'The bus station moved to the old car park.',c:0,m:'transport.'},{w:'The old bus station site became a shopping centre.',c:1,m:'a new use for the site.'}]},
'c4-area':{type:'choice',level:'Supported',skill:'Choosing a grouping',decision:'Why might grouping by area suit Millbrook better than grouping by type?',
  opts:[{t:'The bus station move and the new shopping centre are linked, and both are south of the High Street.',ok:1,why:'Area grouping keeps these linked changes together.'},{t:'Grouping by type is wrong for maps.',why:'Both groupings can work.'},{t:'Area grouping means you can leave out the High Street.',why:'Every key change belongs in the answer.'}]},
'c4-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'The town centre became less industrial.',a:0,right:'A pattern across several changes.',wrong:'This sums up several changes: overview.'},
         {t:'The cinema was converted into a gym.',a:1,right:'One specific change: body.',wrong:'One change is a detail: body.'},
         {t:'The park, the market square and the terraced houses remained unchanged.',a:0,right:'What stayed the same is part of the big picture.',wrong:'Unchanged features belong in the overview.'},
         {t:'A cycle path was built along the river.',a:1,right:'One specific change: body.',wrong:'One change is a detail: body.'}]},
'c4-ov':{type:'choice',level:'Independent',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, the town centre became less industrial and more pedestrianised, with several sites given new uses, although the park and the market square remained.',ok:1,why:'The pattern behind the groups, plus what stayed the same.'},{t:'Overall, the factory was replaced by flats and the cinema became a gym.',why:'Two details, not the pattern.'},{t:'Overall, Millbrook was improved for its residents.',why:'An opinion: “improved” is a judgement.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Grouping changes',decision:'Write an overview and two body paragraphs.',prompt:'Group by type or by area. Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your overview starts with “Overall,”.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'Your overview mentions what stayed the same.',fix:'Add the unchanged features: the park, the market square, the houses.',fn:v=>/(remain|unchanged|same|still)/i.test(v.ov)},
          {t:'You covered the transport changes.',fix:'Include the High Street, the bus station and the cycle path.',fn:v=>/high street/i.test(v.b1+v.b2)&&/bus station/i.test(v.b1+v.b2)&&/cycle/i.test(v.b1+v.b2)},
          {t:'You covered the buildings with new uses.',fix:'Include the cinema, the factory and the shopping centre.',fn:v=>/cinema/i.test(v.b1+v.b2)&&/factory/i.test(v.b1+v.b2)&&/shopping/i.test(v.b1+v.b2)},
          {t:'Your paragraphs use the passive.',fix:'Use the passive: was converted, was replaced, was built.',fn:v=>((v.b1+' '+v.b2).match(/\b(was|were|had been)\s+(\w+ly\s+)?(\w+ed|built|cut|made|knocked down|turned into|kept|added)\b/gi)||[]).length>=3},
          {t:'You gave locations.',fix:'Add locations: in the north-west, beside the river, south of the High Street.',fn:v=>((v.b1+' '+v.b2).match(/(north|south|east|west|beside|along|next to|opposite)/gi)||[]).length>=2}],
  modelTitle:'My model answer (grouped by type)',
  model:`<p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the town centre became less industrial and more pedestrianised, with several sites given new uses</button>, although the park, the market square and the terraced houses remained unchanged.</p><p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="1">The main transport change was that the High Street was closed to traffic</button> and became a pedestrian-only street. The bus station was relocated from its site east of Station Road to the former car park beside the river, and a new cycle path was built along the river’s western bank.</p><p><span class="plabel">Body 2</span>Several buildings were also given new uses. In the north-west, the cinema was converted into a gym, <button type="button" class="hl" data-n="2">while the factory in the north-east was demolished and replaced by two blocks of flats</button>. <button type="button" class="hl" data-n="3">The old bus station site, south of the High Street, was redeveloped as a shopping centre.</button></p>`,
  notes:['The pattern behind both groups, plus the unchanged features.','A topic sentence that names the group: transport.','“Demolished and replaced”: the old building went, and new ones were built.','A linked change: the bus station moved, so its old site was reused.'],
  self:['I listed every change before writing.','Each body paragraph has one focus.','My overview gives the pattern and what stayed the same.','Every change has a location.'],revise:1}
};

const gloss={
  'pedestrianised':{term:'pedestrianised',def:'Closed to traffic, so that only people on foot can use it.',path:'M20,50 H220 M60,40 V60 M120,40 V60 M180,40 V60',ex:'“The High Street was pedestrianised.”'},
  'relocated':{term:'relocated',def:'Moved to a new place.',path:'M40,60 H90 M150,30 H200 M90,60 C120,60 120,30 150,30',ex:'“The bus station was relocated to the former car park.”'},
  'redeveloped':{term:'redeveloped',def:'Of a site: cleared or changed and built on again, for a new use.',path:'M40,80 V40 H100 V80 M140,80 V20 H200 V80',ex:'“The old bus station site was redeveloped as a shopping centre.”'}
};

const retrieval={
 'c4-s1':[{q:'Why list changes in a fixed order?',opts:[{t:'So you don’t miss any',ok:1,why:'For example, clockwise.'},{t:'The examiner wants a list',why:'The list is for planning only.'}]}],
 'c4-s2':[{q:'Cinema → gym belongs in which group?',opts:[{t:'New use for a site',ok:1,why:'Same building, new use.'},{t:'Transport',why:'It isn’t about getting around.'}]}],
 'c4-s3':[{q:'When does grouping by area work well?',opts:[{t:'When linked changes are in the same area',ok:1,why:'They stay together.'},{t:'Never',why:'It is often a good choice.'}]}],
 'c4-s4':[{q:'Where do unchanged features go?',opts:[{t:'The overview, or a final sentence',ok:1,why:'They are part of the picture.'},{t:'Nowhere',why:'They matter.'}]}],
 'c4-s5':[{q:'The factory was knocked down and flats built. Which phrase?',opts:[{t:'demolished and replaced by',ok:1,why:'Both steps.'},{t:'converted into',why:'The building didn’t survive.'}]}]
};

const minitest=[
 {q:'What should you do first with a map that has many changes?',opts:[{t:'List every change in a fixed order',ok:1,why:'Then group.'},{t:'Start writing from the first change you see',why:'That makes a jumbled list.'},{t:'Choose one change',why:'Cover the key changes.'}],sp:'c4-s1'},
 {q:'Which stayed the same in Millbrook?',opts:[{t:'The market square',ok:1,why:'Unchanged.'},{t:'The cinema',why:'Now a gym.'},{t:'The car park',why:'Now the bus station.'}],sp:'c4-s1'},
 {q:'Which change is about transport?',opts:[{t:'The High Street became pedestrian-only',ok:1,why:'Getting around.'},{t:'The cinema became a gym',why:'A new use.'},{t:'Flats replaced the factory',why:'A new use.'}],sp:'c4-s2'},
 {q:'How many body paragraphs do two groups make?',opts:[{t:'Two',ok:1,why:'One per group.'},{t:'Six, one per change',why:'Too many.'},{t:'One',why:'Two groups, two paragraphs.'}],sp:'c4-s2'},
 {q:'Grouping by type or by area: which is correct?',opts:[{t:'Both, if each paragraph has one focus',ok:1,why:'Choose the clearer one.'},{t:'Only by type',why:'Area works too.'},{t:'Only by area',why:'Type works too.'}],sp:'c4-s3'},
 {q:'The bus station moved and its old site became shops. These changes are…',opts:[{t:'linked',ok:1,why:'Keep them together if you can.'},{t:'unrelated',why:'One led to the other on the map.'},{t:'unchanged',why:'Both changed.'}],sp:'c4-s3'},
 {q:'Which is an overview sentence?',opts:[{t:'Overall, the centre became more pedestrianised.',ok:1,why:'A pattern.'},{t:'Overall, a cycle path was built.',why:'A detail.'},{t:'Overall, the town is better.',why:'An opinion.'}],sp:'c4-s4'},
 {q:'Moved to a new place:',opts:[{t:'relocated',ok:1,why:'Moved.'},{t:'redeveloped',why:'Built on again.'},{t:'remained',why:'No change.'}],sp:'c4-s5'}
];

const cannow=[['List every change before writing','c4-s1'],['Group changes by type','c4-s2'],['Group changes by area when it keeps linked changes together','c4-s3'],['Write an overview from your groups','c4-s4'],['Write an overview and two grouped body paragraphs','c4-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:4,spreads,acts,gloss,charts:{mill95:C.mill95,mill25:C.mill25,mill95b:cp('mill95','ch-mill95b'),mill25b:cp('mill25','ch-mill25b')},retrieval,minitest,cannow});
})();
