/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 3 · APPROXIMATION
   ACTIVITY IDS (type · level)
     c3-why     choice    Guided       Step 1  Why approximate?
     c3-when    binary    Supported    Step 1  Exact or approximate?
     c3-words   sort      Supported    Step 2  Which word?
     c3-dir     choice    Supported    Step 2  Which direction?
     c3-frac    sort      Supported    Step 3  Approximate fractions
     c3-fix     fix       Independent  Step 4  Pitfalls
     c3-acc     binary    Independent  Step 4  Accurate or not?
     c3-write   write     Independent  Step 5  Household ownership
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=DD;
const P='Chapter 3',CT='Approximation',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:3,title:CT,lede:'Examiners don’t expect every figure to be exact, but they do expect every approximation to be accurate. “Almost a third” for 36% is wrong, however natural it sounds. In this chapter I’ll show you when to approximate, which words to use, and the traps to avoid.',
  outcomes:['decide when to give an exact figure and when to approximate',`choose words for each direction: ${T('just over')}, almost, about`,'turn table percentages into accurate fractions','avoid the common approximation traps'],
  illus:illus('64%','almost two-thirds'),
  steps:[[1,'c3-s1','Why approximate?','And when to be exact','Discover'],[2,'c3-s2','Words for each direction','Over, under, either side','Understand'],[3,'c3-s3','Fractions from a table','73% is nearly three-quarters','Understand'],[4,'c3-s4','The traps','Wrong direction, wrong strength','Practise'],[5,'c3-s5','Chapter challenge','Household ownership','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Why approximate?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Why approximate?</h2>${vid({title:'Why approximate?',len:'90 seconds',script:['Show a line between two gridlines. Ask: is it 23 or 24? We can’t tell: about 24.','Show a figure like 2,387,000: roughly 2.4 million is clearer.','Show variety: just over a quarter, about one in five.','Say: when a label gives the exact figure, you can use it.']})}<p>There are three good reasons to approximate:</p><ul class="clean"><li><b>You can’t read the exact value</b>, because it falls between gridlines.</li><li><b>The exact figure is awkward:</b> 2,387,000 is clearer as roughly 2.4 million.</li><li><b>Variety:</b> “just over a quarter” is more informative than a list of percentages.</li></ul>${chart('online')}${note('When the chart labels give exact figures, as here, you can use them. Approximations then add variety and meaning: the youngest group spent just over 30 hours online.')}<div class="clear"></div>${take('Approximate when you can’t read the value exactly, when the figure is awkward, or to add meaning.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c3-why"></div><div data-act="c3-when" style="margin-top:16px"></div>`}),

sp('c3-s2','Words for each direction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Words for each direction</h2>${vid({title:'Words for each direction',len:'2 minutes',script:['Draw a target figure: 30.','Above it: just over, slightly more than, well over.','Below it: almost, nearly, just under, well under.','Either side: about, around, roughly, approximately.','Practise with the online hours: 31, 24, 19.']})}<p>Every approximation word has a direction:</p><ul class="clean"><li><b>Slightly above:</b> just over, slightly more than (31 → just over 30).</li><li><b>Slightly below:</b> almost, nearly, just under (24 → almost 25; 19 → nearly 20).</li><li><b>Either side:</b> about, around, roughly, approximately (a value between 11 and 13 on the grid → about 12).</li><li><b>Far above or below:</b> well over, well under (31 → well over 20; 8 → well under 20).</li></ul>${mistake('<s>The 25 to 34 group spent just over 25 hours online.</s> 24 is below 25: <i>almost 25 hours</i>.')}${take('Check the direction: just over is above, almost is below, about can be either.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c3-words"></div><div data-act="c3-dir" style="margin-top:16px"></div>`}),

sp('c3-s3','Fractions from a table',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Fractions from a table</h2><p>Percentages in a table become clearer as approximate fractions. Find the nearest landmark, then check the direction.</p>${chart('own')}<ul class="clean"><li><b>73%:</b> nearly three-quarters (75%).</li><li><b>64%:</b> almost two-thirds (66.7%).</li><li><b>48%:</b> just under half.</li><li><b>26%:</b> just over a quarter.</li><li><b>21%:</b> about a fifth.</li><li><b>9%:</b> fewer than one in ten.</li></ul>${take('Nearest landmark, then the direction. Write the exact figure in brackets if you like.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c3-frac"></div>`}),

sp('c3-s4','The traps',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The traps</h2><p>Four traps catch candidates again and again:</p><ul class="clean"><li><b>Wrong direction:</b> <s>almost half (52%)</s> → just over half.</li><li><b>Wrong landmark:</b> <s>about a third (26%)</s> → just over a quarter.</li><li><b>Double hedging:</b> <s>around approximately 20</s> → around 20.</li><li><b>Approximate and exact together:</b> <s>about exactly 48%</s> → just under half, or exactly 48%.</li></ul>${insight('The examiner’s view','An approximation that is wrong counts as an inaccurate figure. Accuracy matters more than variety.')}${take('Right landmark, right direction, one approximation word at a time.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-fix"></div><div data-act="c3-acc" style="margin-top:16px"></div>`}),

sp('c3-s5','Chapter challenge: household ownership',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the ownership table. Use an accurate approximation for at least four of the six items.</p>${taskbox('The table below shows the percentage of households in one country that own six items.')}${chart('own2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Approximate when you can’t read a value exactly, when a figure is awkward, or to add meaning.','Every approximation word has a direction: just over (above), almost (below), about (either side).','Turn table percentages into the nearest fraction, then check the direction.','Avoid the traps: wrong direction, wrong landmark, double hedging.']})
];

const acts={
'c3-why':{type:'choice',level:'Guided',skill:'Why approximate',decision:'Which is a good reason to approximate?',
  opts:[{t:'The value falls between two gridlines, so you can’t read it exactly.',ok:1,why:'Give your best accurate estimate: about, around.'},{t:'To avoid checking the figure.',why:'Approximations must be accurate too.'},{t:'Because exact figures are never allowed.',why:'Exact figures are fine when you can read them.'}]},
'c3-when':{type:'binary',level:'Supported',skill:'Exact or approximate',decision:'Is each choice sensible?',labels:['Sensible','Not sensible'],
  items:[{t:'Writing “roughly 2.4 million” for 2,387,000.',a:0,right:'Clearer, and accurate.',wrong:'It is sensible: 2,387,000 rounds to 2.4 million.'},
         {t:'Writing “just over 30 hours” for 31 hours.',a:0,right:'Accurate and natural.',wrong:'It is sensible: 31 is just over 30.'},
         {t:'Writing “about 20 hours” for 31 hours.',a:1,right:'Right. Far too inaccurate.',wrong:'31 is nowhere near 20.'},
         {t:'Approximating in the overview: “just over 30 hours”.',a:1,right:'Right. The overview has no figures at all.',wrong:'Even approximate figures stay out of the overview.'}]},
'c3-words':{type:'sort',level:'Supported',skill:'Direction',decision:'Which phrase fits each figure?',cats:['just over','almost / nearly','about / around'],
  items:[{w:'31 hours (target 30)',c:0,m:'31 is above 30.'},{w:'24 hours (target 25)',c:1,m:'24 is below 25.'},{w:'19 hours (target 20)',c:1,m:'19 is below 20.'},{w:'about 12 hours (read between gridlines)',c:2,m:'near the target, either side: about 12.'},{w:'52% (target half)',c:0,m:'above half.'}]},
'c3-dir':{type:'choice',level:'Supported',skill:'Direction',decision:'People aged 35 to 54 spent 19 hours online. Which is accurate?',
  opts:[{t:'nearly 20 hours a week',ok:1,why:'19 is just below 20.'},{t:'just over 20 hours a week',why:'19 is below 20.'},{t:'well over 20 hours a week',why:'19 is below 20.'}]},
'c3-frac':{type:'sort',level:'Supported',skill:'Approximate fractions',decision:'Which phrase fits each item?',cats:['nearly three-quarters','almost two-thirds','just over a quarter','about a fifth'],
  items:[{w:'Car (73%)',c:0,m:'75% is three-quarters.'},{w:'Tablet computer (64%)',c:1,m:'66.7% is two-thirds.'},{w:'Dog (26%)',c:2,m:'25% is a quarter.'},{w:'Cat (21%)',c:3,m:'20% is a fifth.'}]},
'c3-fix':{type:'fix',level:'Independent',skill:'Avoiding traps',decision:'Fix the approximation in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Just over half of households owned a bicycle (48%).',ok:/(just under|almost|nearly|slightly less than|a little under) half/i,bad:/(just over|more than) half/i,hint:'48% is below 50%.',err:'Just over half',fix:'Just under half',why:'“Just over” means above the target.',model:'Just under half of households owned a bicycle (48%).'},
         {wrong:'About a third of households owned a dog (26%).',ok:/(just over|slightly more than|about|around|roughly) a quarter/i,bad:/third/i,hint:'26% is closest to which landmark?',err:'about a third',fix:'just over a quarter',why:'26% is close to 25%, not 33%.',model:'Just over a quarter of households owned a dog (26%).'},
         {wrong:'Around approximately 20% of households owned a cat.',ok:/^(around|approximately|about|roughly) (a fifth|20|one (household )?in five)/i,bad:/around approximately/i,hint:'One approximation word is enough.',err:'Around approximately',fix:'Around',why:'Two approximation words say the same thing twice.',model:'Around a fifth of households owned a cat.'}]},
'c3-acc':{type:'binary',level:'Independent',skill:'Accuracy',decision:'Is each approximation accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Nearly three-quarters of households owned a car (73%).',a:0,right:'73% is just below 75%.',wrong:'It is accurate.'},
         {t:'Just over two-thirds owned a tablet computer (64%).',a:1,right:'Right. 64% is below two-thirds: almost two-thirds.',wrong:'64% is below 66.7%: “almost”, not “just over”.'},
         {t:'Fewer than one household in ten owned a piano (9%).',a:0,right:'9% is below 10%.',wrong:'It is accurate.'},
         {t:'The 65 and over group spent well under 10 hours online (8 hours).',a:1,right:'Right. 8 is under 10, but not “well” under: “under 10 hours”.',wrong:'8 is only slightly under 10, so “well under” overstates it.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Approximation',decision:'Write one body paragraph about household ownership.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'Cars were the most commonly owned item…'}],
  checks:[{t:'You used at least four approximations.',fix:'Add approximations: nearly three-quarters, almost two-thirds, just under half.',fn:v=>(v.a.match(/\b(just over|just under|almost|nearly|about|around|roughly|approximately|fewer than|more than|slightly)\b/gi)||[]).length>=4},
          {t:'Your car figure is accurate.',fix:'73% is nearly three-quarters.',fn:v=>/car/i.test(v.a)&&!/(over|more than) three-quarters/i.test(v.a)},
          {t:'Your bicycle figure is accurate.',fix:'48% is just under half, not “over half”.',fn:v=>{const s=(v.a.match(/[^.]*\b(bicycle|bike)[^.]*/i)||[''])[0];return !!s&&!/(just over|more than|over) half/i.test(s)}},
          {t:'Your tablet figure is accurate.',fix:'64% is almost two-thirds, not “just over”.',fn:v=>!/(just over|more than) two-thirds/i.test(v.a)},
          {t:'No double hedging.',fix:'Use one approximation word at a time.',fn:v=>!/\b(around|about) approximately\b|\bapproximately about\b|\babout around\b/i.test(v.a)},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p>Cars were the most commonly owned item, <button type="button" class="hl" data-n="0">found in nearly three-quarters of households (73%)</button>, while almost two-thirds had a tablet computer (64%). <button type="button" class="hl" data-n="1">Just under half owned a bicycle (48%).</button> Pets were less common: just over a quarter of households had a dog (26%) and about a fifth had a cat (21%). <button type="button" class="hl" data-n="2">Pianos were the least common item, owned by fewer than one household in ten (9%).</button></p>`,
  notes:['Nearest landmark (75%) and the right direction (below).','Below half: just under, not just over.','Below a landmark: fewer than one in ten.'],
  self:['I chose the nearest landmark each time.','I checked the direction of every approximation.','I used one approximation word at a time.','I gave exact figures in brackets.'],revise:1}
};

const gloss={
  'just over':{term:'just over',def:'Slightly more than. 31 is just over 30; 52% is just over half.',path:'M20,60 H220 M120,40 V80 M128,52 L136,60 L128,68',ex:'“The youngest group spent just over 30 hours a week online.”'},
  'almost':{term:'almost',def:'Slightly less than. Same as “nearly” and “just under”. 24 is almost 25.',path:'M20,60 H220 M120,40 V80 M112,52 L104,60 L112,68',ex:'“Almost two-thirds of households had a tablet.”'},
  'approximately':{term:'approximately',def:'Close to, either above or below. Same as “about”, “around” and “roughly”.',path:'M20,60 H220 M120,40 V80 M100,60 H140',ex:'“Approximately 2.4 million people visited the park.”'}
};

const retrieval={
 'c3-s1':[{q:'Can you approximate in the overview?',opts:[{t:'No: the overview has no figures',ok:1,why:'Not even approximate ones.'},{t:'Yes',why:'No figures at all.'}]}],
 'c3-s2':[{q:'24 hours is…',opts:[{t:'almost 25 hours',ok:1,why:'Below 25.'},{t:'just over 25 hours',why:'24 is below 25.'}]}],
 'c3-s3':[{q:'64% is…',opts:[{t:'almost two-thirds',ok:1,why:'Below 66.7%.'},{t:'just over two-thirds',why:'Below, not above.'}]}],
 'c3-s4':[{q:'“About a third (26%)”: what is wrong?',opts:[{t:'The wrong landmark',ok:1,why:'Just over a quarter.'},{t:'Nothing',why:'26% is near a quarter.'}]}],
 'c3-s5':[{q:'48% is…',opts:[{t:'just under half',ok:1,why:'Below 50%.'},{t:'almost a third',why:'Wrong landmark.'}]}]
};

const minitest=[
 {q:'When should you approximate?',opts:[{t:'When you can’t read the exact value, or to add meaning',ok:1,why:'Good reasons.'},{t:'Always, in every sentence',why:'Exact figures are fine.'},{t:'Only in the overview',why:'The overview has no figures.'}],sp:'c3-s1'},
 {q:'2,387,000 is best written as…',opts:[{t:'roughly 2.4 million',ok:1,why:'Clear and accurate.'},{t:'about 2 million',why:'Too rough.'},{t:'2.4 millions',why:'No -s.'}],sp:'c3-s1'},
 {q:'Which word means slightly below?',opts:[{t:'nearly',ok:1,why:'Below the target.'},{t:'just over',why:'Above.'},{t:'well over',why:'Far above.'}],sp:'c3-s2'},
 {q:'31 hours is…',opts:[{t:'just over 30 hours',ok:1,why:'Above 30.'},{t:'almost 30 hours',why:'Below 30.'},{t:'well under 30 hours',why:'It is over.'}],sp:'c3-s2'},
 {q:'73% is…',opts:[{t:'nearly three-quarters',ok:1,why:'Below 75%.'},{t:'over three-quarters',why:'Below 75%.'},{t:'about two-thirds',why:'Further from 73%.'}],sp:'c3-s3'},
 {q:'21% is…',opts:[{t:'about a fifth',ok:1,why:'20% is a fifth.'},{t:'about a quarter',why:'25%.'},{t:'about a third',why:'33%.'}],sp:'c3-s3'},
 {q:'Which is correct?',opts:[{t:'just over half (52%)',ok:1,why:'Above 50%.'},{t:'almost half (52%)',why:'Wrong direction.'},{t:'around approximately half',why:'Double hedging.'}],sp:'c3-s4'},
 {q:'9% is…',opts:[{t:'fewer than one in ten',ok:1,why:'Below 10%.'},{t:'about a fifth',why:'20%.'},{t:'just over one in ten',why:'Below, not over.'}],sp:'c3-s5'}
];

const cannow=[['Decide when to approximate','c3-s1'],['Choose approximation words by direction','c3-s2'],['Turn table percentages into accurate fractions','c3-s3'],['Avoid the common approximation traps','c3-s4'],['Write a body paragraph with accurate approximations','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{online:C.online,own:C.own,own2:cp('own','ch-own2')},retrieval,minitest,cannow});
})();
