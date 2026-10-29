/* ==========================================================================
   MODULE 6 · CHAPTER 4 · ORGANISING PARAGRAPHS
   ACTIVITY IDS (type · level)
     c4-topic   choice    Guided       Step 1  The best topic sentence
     c4-topic2  binary    Supported    Step 1  Topic sentence or detail?
     c4-order   choice    Supported    Step 2  The best order
     c4-split   sort      Supported    Step 3  Which paragraph?
     c4-plan    choice    Supported    Step 3  By activity or by age?
     c4-sign    choice    Supported    Step 4  Moving on
     c4-build   builder   Independent  Step 4  A linking topic sentence
     c4-write   write     Independent  Step 5  Two body paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=CMP;
const P='Chapter 4',CT='Organising Paragraphs',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'A Task 1 answer with good grammar can still lose marks for Coherence and Cohesion if the reader can’t follow it. Clear body paragraphs have one focus, a sentence that announces it, and details in a logical order. In this chapter I’ll show you how to plan and organise two body paragraphs.',
  outcomes:[`write a ${T('topic sentence')} that announces each paragraph’s focus`,'order the details: the main point first, then the evidence','split the information into two balanced paragraphs','move between paragraphs with a signpost'],
  illus:illus([90,60,40,10],[80,30,50,20]),
  steps:[[1,'c4-s1','Topic sentences','One focus per paragraph','Discover'],[2,'c4-s2','Logical order','Main point, then evidence','Understand'],[3,'c4-s3','Two body paragraphs','How to split','Understand'],[4,'c4-s4','Signposting','Moving on','Practise'],[5,'c4-s5','Chapter challenge','Leisure spending','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Topic sentences',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Topic sentences</h2>${vid({title:'Topic sentences',len:'90 seconds',script:['Show the leisure spending chart.','Read a paragraph that starts with a figure: the reader doesn’t know where it is going.','Add a topic sentence: Spending on eating out and on events fell with age.','Say: the first sentence tells the reader what the paragraph will show.']})}<p>A topic sentence opens a paragraph and tells the reader its focus. It is general; the figures follow.</p>${chart('leis')}${insight('A topic sentence','Spending on eating out and on concerts and events fell with age.')}${mistake('<s>The 18 to 29 group spent €45 on eating out.</s> A figure is a poor first sentence: the reader doesn’t yet know the point.')}${take('Start each body paragraph with its focus, in general words. Figures come next.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c4-topic"></div><div data-act="c4-topic2" style="margin-top:16px"></div>`}),

sp('c4-s2','Logical order',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Logical order</h2>${vid({title:'Logical order',len:'90 seconds',script:['After the topic sentence, give the most important evidence.','Then the smaller details or the exception.','Show a paragraph in random order, then the same sentences reordered.']})}<p>Inside a paragraph, move from the main point to the details:</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li>Topic sentence: the focus.</li><li>The biggest or clearest evidence.</li><li>Smaller details, contrasts or exceptions.</li></ol>${note('Within a comparison, keep the same order each time: youngest to oldest, or highest to lowest. Switching confuses the reader.')}<div class="clear"></div>${take('Topic sentence, main evidence, then details. Keep a consistent order inside comparisons.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c4-order"></div>`}),

sp('c4-s3','Two body paragraphs',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Two body paragraphs</h2><p>Split the information so that each paragraph has one clear focus. For the leisure chart, the patterns across age groups give the split:</p><ul class="clean"><li><b>Body 1: spending fell with age</b>: eating out and concerts and events.</li><li><b>Body 2: other patterns</b>: books rose with age; sport was highest in the middle group.</li></ul>${mistake('<s>Body 1: the 18 to 29 group. Body 2: the other two groups.</s> This separates every comparison across ages.')}${take('Split by pattern, so each paragraph has one focus and every comparison stays together.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c4-split"></div><div data-act="c4-plan" style="margin-top:16px"></div>`}),

sp('c4-s4','Signposting',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Signposting</h2><p>A ${T('signpost')} at the start of the second paragraph tells the reader you are moving on:</p><ul class="clean"><li><i>Turning to the other two activities, …</i></li><li><i>As for books, …</i></li><li><i>In contrast to these, …</i></li></ul>${note('One signpost per paragraph is enough. Don’t start every sentence with a linker.')}<div class="clear"></div>${take('A short signpost opens the second paragraph. Don’t overdo it.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-sign"></div><div data-act="c4-build" style="margin-top:16px"></div>`}),

sp('c4-s5','Chapter challenge: leisure spending',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write two body paragraphs about the leisure spending chart.</p>${chart('leis2')}<ul class="clean" style="font-size:15px"><li>A topic sentence for each paragraph.</li><li>Main evidence first, then details.</li><li>A signpost at the start of Body 2.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Start each body paragraph with a topic sentence that gives its focus.','Main evidence first, then details; a consistent order inside comparisons.','Split the information by pattern so comparisons stay together.','One signpost opens the second paragraph.']})
];

const acts={
'c4-topic':{type:'choice',level:'Guided',skill:'Topic sentences',decision:'Which is the best topic sentence for a paragraph about eating out and events?',
  opts:[{t:'Spending on eating out and on concerts and events fell with age.',ok:1,why:'General, and it announces the focus.'},{t:'The 18 to 29 group spent €45 on eating out.',why:'A detail, not a focus.'},{t:'There are four activities and three age groups.',why:'This describes the layout, not a pattern.'}]},
'c4-topic2':{type:'binary',level:'Supported',skill:'Topic sentences',decision:'Topic sentence or detail?',labels:['Topic sentence','Detail'],
  items:[{t:'Spending on books followed the opposite pattern.',a:0,right:'General: it announces a focus.',wrong:'This is general, so it can open a paragraph.'},
         {t:'People aged 50 and over spent €20 a week on books.',a:1,right:'A specific figure: a detail.',wrong:'This is a figure: evidence, not a topic sentence.'},
         {t:'The youngest group spent three times as much on events as the oldest.',a:1,right:'Specific evidence.',wrong:'This is evidence for a topic sentence.'},
         {t:'Eating out was the largest item for every age group.',a:0,right:'A general pattern.',wrong:'This is a general pattern: a good topic sentence.'}]},
'c4-order':{type:'choice',level:'Supported',skill:'Logical order',decision:'Which order is best for the books paragraph?',
  opts:[{t:'Topic sentence (books rose with age) → the figures from youngest to oldest → the multiple (four times as much).',ok:1,why:'Focus, evidence in a consistent order, then the comparison.'},{t:'The multiple → the oldest group → the topic sentence → the youngest group.',why:'The focus comes last, and the order of ages jumps.'},{t:'The figures only, in random order.',why:'No focus and no consistent order.'}]},
'c4-split':{type:'sort',level:'Supported',skill:'Splitting the body',decision:'Which paragraph does each point belong in?',cats:['Body 1: fell with age','Body 2: other patterns'],
  items:[{w:'Eating out: €45, €40, €35',c:0,m:'falls with age.'},{w:'Concerts and events: €30, €15, €10',c:0,m:'falls with age.'},{w:'Books: €5, €10, €20',c:1,m:'rises with age.'},{w:'Sport: €20, €25, €15',c:1,m:'highest in the middle group.'}]},
'c4-plan':{type:'choice',level:'Supported',skill:'Choosing a split',decision:'Why not write Body 1 about the 18 to 29 group and Body 2 about the older groups?',
  opts:[{t:'It separates every comparison across the age groups.',ok:1,why:'The patterns run across the ages, so keep each activity’s figures together.'},{t:'The 18 to 29 group is too small.',why:'Size isn’t the issue: the comparisons are.'},{t:'It would be too short.',why:'Length isn’t the problem.'}]},
'c4-sign':{type:'choice',level:'Supported',skill:'Signposting',decision:'Which is the best opening for Body 2?',
  opts:[{t:'Turning to the other two activities, spending on books followed the opposite pattern.',ok:1,why:'A signpost and a topic sentence in one.'},{t:'Firstly, secondly, the books.',why:'Not a sentence, and “firstly” doesn’t fit a second paragraph.'},{t:'In conclusion, books rose.',why:'No conclusion in a body paragraph.'}]},
'c4-build':{type:'builder',level:'Independent',skill:'A linking topic sentence',decision:'Build the first sentence of Body 2.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Turning to the other two activities,','spending on books','followed the opposite pattern,','rising with age.'],
  distract:[{t:'falling with age.',why:'Books rose with age: €5, €10, €20.',fix:'rising with age.'},{t:'In conclusion,',why:'A body paragraph never starts with a conclusion.',fix:'Turning to the other two activities,'}],
  right:'Signpost, subject, the pattern, and how it differs.',orderMsg:'All the right pieces, but check the order: signpost, subject, pattern, detail.',incompleteMsg:'Good so far, but incomplete. Say how books changed with age.'},
'c4-write':{type:'write',level:'Independent',skill:'Organising paragraphs',decision:'Write two body paragraphs about leisure spending.',prompt:'Then check your writing.',
  fields:[{k:'b1',label:'Body paragraph 1',rows:5,ph:'Spending on eating out and on concerts…'},{k:'b2',label:'Body paragraph 2',rows:5,ph:'Turning to the other two activities,…'}],
  checks:[{t:'Body 1 starts with a general topic sentence.',fix:'Start Body 1 with the focus, not a figure.',fn:v=>{const f=(v.b1.split(/[.!?]/)[0]||'');return f.trim().length>15&&!/\d/.test(f)}},
          {t:'Body 2 starts with a signpost or topic sentence.',fix:'Start Body 2 with a signpost: Turning to…, As for…, In contrast…',fn:v=>{const f=(v.b2.split(/[.!?]/)[0]||'');return /^\s*(turning to|as for|in contrast|by contrast|meanwhile|on the other hand|however|spending on)/i.test(f)||!/\d/.test(f)}},
          {t:'Body 1 covers eating out and events.',fix:'Put eating out and concerts and events in Body 1.',fn:v=>/eating/i.test(v.b1)&&/(concert|event)/i.test(v.b1)},
          {t:'Body 2 covers books and sport.',fix:'Put books and sport in Body 2.',fn:v=>/book/i.test(v.b2)&&/sport/i.test(v.b2)},
          {t:'You gave figures with €.',fix:'Give amounts with €.',fn:v=>((v.b1+' '+v.b2).match(/€\s?\d/g)||[]).length>=4},
          {t:'Your answer is a good length (80 words or more).',fix:'Add detail: your paragraphs are under 80 words.',fn:v=>((v.b1+' '+v.b2).match(/\S+/g)||[]).length>=80}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="0">Spending on eating out and on concerts and events fell with age.</button> Eating out was the largest item for every age group, but weekly spending on it fell from €45 for 18- to 29-year-olds to €35 for those aged 50 and over. <button type="button" class="hl" data-n="1">The decline was much sharper for concerts and events</button>, where the youngest group spent €30, three times as much as the oldest (€10).</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="2">Turning to the other two activities, spending on books followed the opposite pattern</button>, rising with age from just €5 to €20, so the oldest group spent four times as much as the youngest. <button type="button" class="hl" data-n="3">Spending on sport, meanwhile, was highest among people aged 30 to 49</button>, who spent €25 a week on it, compared with €20 and €15 for the younger and older groups respectively.</p>`,
  notes:['A topic sentence: general, no figures.','Main evidence, then the sharper contrast.','A signpost and a topic sentence in one.','The exception: sport peaks in the middle group.'],
  self:['Each paragraph starts with its focus.','Evidence follows in a consistent order.','My split keeps comparisons together.','I used one signpost for Body 2.'],revise:1}
};

const gloss={
  'topic sentence':{term:'topic sentence',def:'The first sentence of a paragraph, which states its focus in general words.',path:'M20,25 H220 M20,45 H200 M20,65 H210',ex:'“Spending on eating out and on events fell with age.”'},
  'signpost':{term:'signpost',def:'A short phrase that tells the reader where the text is going next.',path:'M100,90 V20 M100,25 H180 L195,35 L180,45 H100',ex:'“Turning to the other two activities, …”'},
  'focus':{term:'focus',def:'The one main point a paragraph is about.',path:'M120,45 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0 M120,45 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0',ex:'“Each body paragraph should have one focus.”'}
};

const retrieval={
 'c4-s1':[{q:'A topic sentence is…',opts:[{t:'general: it gives the focus',ok:1,why:'Figures follow.'},{t:'the biggest figure',why:'That is evidence.'}]}],
 'c4-s2':[{q:'After the topic sentence comes…',opts:[{t:'the main evidence',ok:1,why:'Then details.'},{t:'the conclusion',why:'No conclusion.'}]}],
 'c4-s3':[{q:'Split the body…',opts:[{t:'by pattern',ok:1,why:'Comparisons stay together.'},{t:'by age group',why:'Separates comparisons here.'}]}],
 'c4-s4':[{q:'How many signposts per paragraph?',opts:[{t:'One is enough',ok:1,why:'Don’t overdo it.'},{t:'One per sentence',why:'Too many.'}]}],
 'c4-s5':[{q:'Books: €5 → €20 across the age groups is…',opts:[{t:'four times as much',ok:1,why:'20 ÷ 5.'},{t:'twice as much',why:'2 × 5 = 10.'}]}]
};

const minitest=[
 {q:'Which is a topic sentence?',opts:[{t:'Spending on books rose with age.',ok:1,why:'A general focus.'},{t:'The oldest group spent €20 on books.',why:'A detail.'},{t:'The chart has three colours.',why:'Layout.'}],sp:'c4-s1'},
 {q:'Why start with a topic sentence?',opts:[{t:'The reader knows the point before the figures',ok:1,why:'Easier to follow.'},{t:'To add words',why:'Clarity.'},{t:'It is a rule for Task 2 only',why:'Task 1 too.'}],sp:'c4-s1'},
 {q:'Inside a comparison across ages, you should…',opts:[{t:'keep the same order each time',ok:1,why:'Youngest to oldest, for example.'},{t:'change the order for variety',why:'Confusing.'},{t:'give only one age group',why:'Compare them.'}],sp:'c4-s2'},
 {q:'Which belongs in “fell with age”?',opts:[{t:'Concerts and events',ok:1,why:'€30, €15, €10.'},{t:'Books',why:'Rose with age.'},{t:'Sport',why:'Highest in the middle.'}],sp:'c4-s3'},
 {q:'Body 1: 18 to 29s; Body 2: older groups. The problem?',opts:[{t:'It separates comparisons',ok:1,why:'Keep each activity together.'},{t:'Too few paragraphs',why:'Two is right.'},{t:'Nothing',why:'It splits the patterns.'}],sp:'c4-s3'},
 {q:'Which is a signpost?',opts:[{t:'Turning to the other two activities,',ok:1,why:'Moves the reader on.'},{t:'In conclusion,',why:'No conclusion.'},{t:'The chart shows,',why:'Introduction language.'}],sp:'c4-s4'},
 {q:'Events: €30 (18 to 29) and €10 (50+). The youngest spent…',opts:[{t:'three times as much',ok:1,why:'30 ÷ 10.'},{t:'twice as much',why:'2 × 10 = 20.'},{t:'€30 more',why:'€20 more.'}],sp:'c4-s5'},
 {q:'Spending on sport was highest among…',opts:[{t:'people aged 30 to 49',ok:1,why:'€25.'},{t:'18 to 29s',why:'€20.'},{t:'people aged 50 and over',why:'€15.'}],sp:'c4-s5'}
];

const cannow=[['Write topic sentences','c4-s1'],['Order details logically','c4-s2'],['Split the body into two focused paragraphs','c4-s3'],['Use a signpost to move on','c4-s4'],['Write two well-organised body paragraphs','c4-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:4,spreads,acts,gloss,charts:{leis:C.leis,leis2:cp('leis','ch-m6leis2')},retrieval,minitest,cannow});
})();
