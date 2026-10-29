/* ==========================================================================
   MASTERING MAPS · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-split   sort      Supported    Step 4  Which body paragraph?
     c5-route   choice    Supported    Step 4  A route through the map
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,opening,review,addChapter}=OE;
const {C}=MAP;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The maps below show Greenhill Park in 2005 and 2025';
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="11" text-anchor="middle">${[['Introduction','#E4DED1'],['Overview','#FBE6CF'],['Body 1','#E2EDD6'],['Body 2','#E2EDD6']].map(([t,c],i)=>`<rect x="${20+i*92}" y="40" width="84" height="70" rx="8" fill="${c}"/><text x="${62+i*92}" y="80" fill="#292929">${t}</text>`).join('')}</g></svg>`;

const spreads=[
opening({n:5,title:CT,lede:'A map answer has the same four parts as every Task 1 answer. Without figures, though, the overview and the order of the body paragraphs carry even more weight. In this chapter I’ll show you how to structure a complete map answer, and you’ll write one of your own.',
  outcomes:['use the four-part shape for a map task','paraphrase a short map task without changing its meaning','write an overview with the general change, where it happened, and what stayed the same',`order the body paragraphs as a ${T('route')} through the map`],
  illus:ill,
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','A short task to paraphrase','Understand'],[3,'c5-s3','The overview','Three questions','Understand'],[4,'c5-s4','The body paragraphs','A route through the map','Practise'],[5,'c5-s5','Chapter challenge','A complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four boxes: introduction, overview, body 1, body 2.','Say what goes in each for a map: the place and years; the general change; one area or group each.','Stress: no conclusion, and no opinions about whether the changes were good.']})}<ul class="clean"><li><b>Introduction:</b> the place and the years, paraphrased.</li><li><b>Overview:</b> the general change, where most of it happened, what stayed the same.</li><li><b>Body 1 and Body 2:</b> the changes, one area or one group in each, with locations.</li></ul>${chart('park05')}${chart('park25')}${mistake('<s>In conclusion, the park is now much better for families.</s> No conclusion, and no opinions. The overview does the summing up.')}${take('Introduction, overview, two body paragraphs. No conclusion and no opinions.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two maps on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'The introduction',len:'90 seconds',script:['Show the task: The maps below show Greenhill Park in 2005 and 2025.','Change the verb: show → illustrate.','Change the structure: add “the changes made to”.','Keep the place and both years.']})}<p>Map task sentences are short, so there is little to paraphrase. Change the verb, add what the maps are about (the changes), and keep the place and years.</p>${taskbox(TASK+'.')}${insight('Introduction','The two maps illustrate the changes that were made to Greenhill Park over the twenty years from 2005 to 2025.')}${mistake('<s>The maps show a park.</s> Too vague: which park, which years?')}${take('New verb, “the changes made to”, the place and both years.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2>${vid({title:'The overview',len:'2 minutes',script:['Ask three questions about the park maps.','One: what was the general change? More facilities for leisure and sport.','Two: where did most change happen? The north and around the lake.','Three: what stayed the same? The playground, the woodland, the entrance.']})}<p>A map overview answers three questions:</p><ul class="clean"><li><b>What was the general change?</b> More leisure and sports facilities.</li><li><b>Where did most of it happen?</b> In the north and around the lake.</li><li><b>What stayed the same?</b> The playground, the woodland and the entrance.</li></ul>${insight('Overview','Overall, the park gained a range of new leisure and sports facilities, with most of the changes in its northern half and around the lake. The playground, the woodland and the main entrance remained unchanged.')}${take('General change, where, and what stayed the same.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','The body paragraphs',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The body paragraphs</h2><p>Order the body paragraphs as a ${T('route')} through the map, so the reader can follow you: north to south, or west to east, or from the entrance inwards.</p><ul class="clean"><li><b>Body 1: the north.</b> The car park, the café, the tennis courts.</li><li><b>Body 2: the lake and the south.</b> The footpath, the boat hire, the open grass, and what stayed the same.</li></ul>${note('Use moving phrases to guide the reader: “In the north of the park,…”, “Around the lake,…”, “Further south,…”.')}<div class="clear"></div>${take('A route through the map: one area per paragraph, with moving phrases at the start of each.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the maps in Step 1.</p><div data-act="c5-split"></div><div data-act="c5-route" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write a complete answer: introduction, overview and two body paragraphs. Aim for at least 150 words.</p>${taskbox(TASK+'.')}${chart('park05b')}${chart('park25b')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, two body paragraphs. No conclusion, no opinions.','Introduce the place and years with a new verb and “the changes made to”.','The overview gives the general change, where most of it happened, and what stayed the same.','Order the body as a route through the map, one area per paragraph.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The two maps illustrate the changes made to Greenhill Park between 2005 and 2025.',c:0,m:'the place and years, paraphrased.'},
         {w:'Overall, the park gained a range of new leisure and sports facilities.',c:1,m:'the general change.'},
         {w:'The tennis courts in the north-east were converted into a skate park.',c:2,m:'one change, with its location.'},
         {w:'The playground, the woodland and the main entrance remained unchanged.',c:1,m:'what stayed the same: part of the big picture.'},
         {w:'In the south-east, the open grass was turned into a football pitch.',c:2,m:'one change, with its location.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Which introduction is best?',
  opts:[{t:'The two maps illustrate the changes that were made to Greenhill Park over the twenty years from 2005 to 2025.',ok:1,why:'A new verb, what the maps are about, the place and both years.'},{t:'The maps below show Greenhill Park in 2005 and 2025.',why:'Copied from the task.'},{t:'The maps show how a park was improved.',why:'No name, no years, and “improved” is an opinion.'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Good paraphrase, or does it change the meaning?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“show” → “illustrate”',a:0,right:'Same meaning.',wrong:'This keeps the meaning.'},
         {t:'“in 2005 and 2025” → “over the twenty years from 2005 to 2025”',a:0,right:'Same period, new words.',wrong:'This keeps the meaning.'},
         {t:'“Greenhill Park” → “a city centre”',a:1,right:'Right: a park is not a city centre.',wrong:'This changes the place.'},
         {t:'“show Greenhill Park” → “show how Greenhill Park was improved”',a:1,right:'Right: “improved” adds an opinion.',wrong:'“Improved” is a judgement the task doesn’t make.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, the park gained new leisure and sports facilities, mainly in the north and around the lake, while the playground and the woodland remained unchanged.',ok:1,why:'General change, where, and what stayed the same.'},{t:'Overall, the tennis courts became a skate park.',why:'One detail.'},{t:'Overall, the park became more attractive to young people.',why:'An opinion, and a guess about who uses it.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Most of the changes took place in the northern half of the park.',a:0,right:'Where most change happened: overview.',wrong:'This sums up where the changes were: overview.'},
         {t:'A boat hire jetty was added on the north-eastern shore of the lake.',a:1,right:'One change: body.',wrong:'One specific change: body.'},
         {t:'The car park was enlarged.',a:1,right:'One change: body.',wrong:'One specific change: body.'},
         {t:'The park gained a range of new leisure facilities.',a:0,right:'The general change.',wrong:'This is the general change: overview.'}]},
'c5-split':{type:'sort',level:'Supported',skill:'Grouping by area',decision:'Which body paragraph does each change belong in?',cats:['Body 1: the north','Body 2: the lake and the south'],
  items:[{w:'The car park was enlarged.',c:0,m:'north-west.'},{w:'The café became a larger restaurant.',c:0,m:'north.'},{w:'The tennis courts became a skate park.',c:0,m:'north-east.'},{w:'A footpath was built around the lake.',c:1,m:'the lake.'},{w:'The open grass became a football pitch.',c:1,m:'south-east.'}]},
'c5-route':{type:'choice',level:'Supported',skill:'Ordering the body',decision:'Which order is easiest for the reader to follow?',
  opts:[{t:'North first (car park, restaurant, skate park), then the lake, then the south.',ok:1,why:'A route through the map: the reader always knows where they are.'},{t:'Skate park, playground, car park, football pitch, restaurant.',why:'This jumps around the map.'},{t:'The biggest building first, then the smallest.',why:'Size order makes the reader jump around the map.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The two maps illustrate…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5,ph:'In the north of the park,…'},{k:'b2',label:'Body paragraph 2',rows:5,ph:'Around the lake,…'}],
  checks:[{t:'Your introduction gives the park and the years.',fix:'Include Greenhill Park, 2005 and 2025.',fn:v=>/greenhill/i.test(v.intro)&&/2005/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and says what stayed the same.',fix:'Start with “Overall,” and include what remained unchanged.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&/(remain|unchanged|same|still)/i.test(v.ov)},
          {t:'Your body paragraphs start with a location.',fix:'Start each body paragraph with where: In the north of the park,… / Around the lake,…',fn:v=>/^\s*(in|on|around|to|at|further|near|along|by)\b/i.test(v.b1)&&/^\s*(in|on|around|to|at|further|near|along|by)\b/i.test(v.b2)},
          {t:'You covered the main changes.',fix:'Include the car park, the café or restaurant, the tennis courts, the lake and the open grass.',fn:v=>{const t=v.b1+' '+v.b2;return /car park/i.test(t)&&/(caf|restaurant)/i.test(t)&&/(tennis|skate)/i.test(t)&&/lake/i.test(t)&&/(grass|football|pitch)/i.test(t)}},
          {t:'No opinions.',fix:'Remove judgements like “better”, “improved” or “nicer”.',fn:v=>!/\b(better|improved|nicer|worse|beautiful|attractive)\b/i.test(v.intro+v.ov+v.b1+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The two maps illustrate the changes that were made to Greenhill Park over the twenty years from 2005 to 2025.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the park gained a range of new leisure and sports facilities, with most of the changes taking place in its northern half and around the lake.</button> The playground, the woodland and the main entrance remained unchanged.</p><p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="1">In the north of the park,</button> the car park in the north-west was enlarged considerably. The café was expanded into a larger restaurant with an outdoor seating area facing the lake, <button type="button" class="hl" data-n="2">and the tennis courts in the north-east were converted into a skate park.</button></p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">Around the lake,</button> a footpath was built around the whole shoreline, and a boat hire jetty was added on the north-eastern shore. Further south, the open grass in the south-east was turned into a football pitch, <button type="button" class="hl" data-n="4">while the playground in the south-west and the woodland between them stayed the same.</button></p>`,
  notes:['General change and where it happened, with no opinion.','A moving phrase starts the route.','Same space, new use: converted into.','The route continues: from the north to the lake.','What stayed the same, with locations, to finish the route.'],
  self:['My introduction gives the place and years.','My overview covers the change, where, and what stayed the same.','My body paragraphs follow a route.','I gave no opinions.'],revise:1}
};

const gloss={
  'route':{term:'route',def:'A path through the map that the reader can follow: north to south, or from the entrance inwards.',path:'M30,20 C100,20 60,80 130,80 S200,40 210,20',ex:'“Order your body paragraphs as a route through the map.”'},
  'enlarged':{term:'enlarged',def:'Made bigger.',path:'M60,60 H100 V80 H60 Z M140,30 H220 V80 H140 Z',ex:'“The car park was enlarged.”'},
  'shoreline':{term:'shoreline',def:'The edge of a lake or the sea.',path:'M40,50 C40,20 200,20 200,50 C200,80 40,80 40,50',ex:'“A footpath follows the whole shoreline.”'}
};

const retrieval={
 'c5-s1':[{q:'Does a map answer need a conclusion?',opts:[{t:'No',ok:1,why:'The overview sums up.'},{t:'Yes',why:'Four parts, no conclusion.'}]}],
 'c5-s2':[{q:'Which word adds an opinion to an introduction?',opts:[{t:'improved',ok:1,why:'A judgement.'},{t:'illustrate',why:'Neutral.'}]}],
 'c5-s3':[{q:'A map overview answers…',opts:[{t:'what changed, where, and what stayed the same',ok:1,why:'Three questions.'},{t:'why it changed',why:'No reasons.'}]}],
 'c5-s4':[{q:'Why follow a route through the map?',opts:[{t:'The reader always knows where they are',ok:1,why:'One area at a time.'},{t:'It is shorter',why:'It is clearer.'}]}],
 'c5-s5':[{q:'Start a body paragraph with…',opts:[{t:'a location: In the north of the park,',ok:1,why:'A moving phrase.'},{t:'Firstly,',why:'Says nothing about where.'}]}]
};

const minitest=[
 {q:'Which sentence does not belong in a Task 1 map answer?',opts:[{t:'The park is now much better for families.',ok:1,why:'An opinion.'},{t:'The car park was enlarged.',why:'A change.'},{t:'The woodland remained.',why:'Unchanged features matter.'}],sp:'c5-s1'},
 {q:'Which introduction is best?',opts:[{t:'The maps illustrate the changes made to Greenhill Park between 2005 and 2025.',ok:1,why:'New verb, place, years.'},{t:'The maps show a park.',why:'Vague.'},{t:'The maps below show Greenhill Park in 2005 and 2025.',why:'Copied.'}],sp:'c5-s2'},
 {q:'Which paraphrase changes the meaning?',opts:[{t:'in 2005 and 2025 → in the 1990s',ok:1,why:'Wrong years.'},{t:'show → illustrate',why:'Same.'},{t:'in 2005 and 2025 → between 2005 and 2025',why:'Same period.'}],sp:'c5-s2'},
 {q:'Which belongs in the overview?',opts:[{t:'Most changes took place in the north.',ok:1,why:'Where most change happened.'},{t:'A skate park replaced the tennis courts.',why:'A detail.'},{t:'The café became a restaurant.',why:'A detail.'}],sp:'c5-s3'},
 {q:'What else should the overview include?',opts:[{t:'What stayed the same',ok:1,why:'Part of the big picture.'},{t:'The number of trees',why:'A detail.'},{t:'An opinion',why:'Never.'}],sp:'c5-s3'},
 {q:'Which order follows a route?',opts:[{t:'North, then the lake, then the south',ok:1,why:'The reader can follow.'},{t:'Biggest to smallest',why:'Jumps around.'},{t:'Alphabetical',why:'Jumps around.'}],sp:'c5-s4'},
 {q:'Which is a moving phrase?',opts:[{t:'Further south,',ok:1,why:'Moves the reader.'},{t:'In conclusion,',why:'No conclusion.'},{t:'Firstly,',why:'Not about place.'}],sp:'c5-s4'},
 {q:'The café became a bigger restaurant. Which verb fits?',opts:[{t:'was expanded into',ok:1,why:'Bigger, new use.'},{t:'was demolished',why:'It was reused and enlarged.'},{t:'remained',why:'It changed.'}],sp:'c5-s5'}
];

const cannow=[['Use the four-part shape for a map task','c5-s1'],['Paraphrase a short map task','c5-s2'],['Write an overview: what changed, where, what stayed the same','c5-s3'],['Order the body as a route through the map','c5-s4'],['Write a complete map answer','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss,charts:{park05:C.park05,park25:C.park25,park05b:cp('park05','ch-park05b'),park25b:cp('park25','ch-park25b')},retrieval,minitest,cannow});
})();
