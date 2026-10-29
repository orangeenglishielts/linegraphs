/* ==========================================================================
   MODULE 2 · CHAPTER 4 · MAKING MEANINGFUL COMPARISONS
   ACTIVITY IDS (type · level)
     c4-vague   choice    Guided       Step 1  Vague or meaningful?
     c4-calc    binary    Supported    Step 2  Accurate or not?
     c4-ratio   choice    Supported    Step 2  The right ratio
     c4-fix     fix       Supported    Step 3  Comparative structures
     c4-struct  sort      Supported    Step 3  Which structure?
     c4-build   builder   Independent  Step 4  A comparison with a reference
     c4-best    choice    Independent  Step 4  The best comparison
     c4-write   write     Independent  Step 5  A comparative paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=F2;
const P='Chapter 4',CT='Making Meaningful Comparisons',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'The task tells you to “make comparisons where relevant”. A meaningful comparison does more than say one figure is bigger: it says by how much, accurately. In this chapter I’ll show you how to calculate differences, ratios and fractions, and how to express them correctly.',
  outcomes:['turn a vague comparison into a meaningful one','calculate a difference, a '+T('ratio')+' or a fraction before you write it','use comparative structures accurately: twice as … as, cheaper than, the cheapest','compare figures with a reference point'],
  illus:illus('scale'),
  steps:[[1,'c4-s1','Vague or meaningful?','By how much?','Discover'],[2,'c4-s2','Calculate first','Differences, ratios, fractions','Understand'],[3,'c4-s3','Comparative structures','Accurate grammar','Understand'],[4,'c4-s4','A reference point','Compared with what?','Practise'],[5,'c4-s5','Chapter challenge','Five cities','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Vague or meaningful?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Vague or meaningful?</h2>${vid({title:'Vague or meaningful?',len:'90 seconds',script:['Read: City E was more expensive than City A. True, but how much more?','Calculate: 280 ÷ 140 = 2.','Rewrite: A weekly shop in City E cost twice as much as in City A.','Say: the second sentence shows you understand the data.']})}${insight('Vague','City E was more expensive than City A.')}${insight('Meaningful','A weekly shop in City E cost twice as much as in City A: €280 against €140.')}<p>The meaningful version answers the reader’s next question: <i>by how much?</i></p>${chart('shop')}${take('Every comparison should answer “by how much?”')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c4-vague"></div>`}),

sp('c4-s2','Calculate first',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Calculate first</h2>${vid({title:'Calculate first',len:'2 minutes',script:['Show three ways to compare City E and City D.','Difference: 280 − 105 = €175.','Ratio: 280 ÷ 105 ≈ 2.7: more than two and a half times.','Fraction: City D against City A: 105 ÷ 140 = 0.75, three-quarters.']})}<ul class="clean"><li><b>Difference (subtract):</b> City E cost €175 more than City D.</li><li><b>${T('ratio')} (divide):</b> City E cost more than two and a half times as much as City D (280 ÷ 105 ≈ 2.7).</li><li><b>Fraction:</b> a shop in City D cost three-quarters of the price in City A (105 ÷ 140 = 0.75).</li></ul>${mistake('<s>City E cost three times as much as City D.</s> 3 × 105 = 315. Check the sum before you choose the words.')}${take('Subtract for a difference, divide for a ratio or a fraction, and check before you write.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c4-calc"></div><div data-act="c4-ratio" style="margin-top:16px"></div>`}),

sp('c4-s3','Comparative structures',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Comparative structures</h2><ul class="clean"><li><b>Short adjectives:</b> cheaper than, the cheapest.</li><li><b>Long adjectives:</b> more expensive than, the most expensive.</li><li><b>Ratios:</b> twice as much as, three times as expensive as.</li><li><b>Differences:</b> €35 cheaper than, €175 more than.</li></ul>${mistake('<s>City E was twice more expensive than City A.</s> Use the pattern “twice as expensive as”, or “twice as much as”.')}${note('Never “more cheaper” or “the most cheap”: short adjectives take -er and -est.')}<div class="clear"></div>${take('-er/-est for short adjectives, more/most for long ones, and “as … as” for ratios.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c4-fix"></div><div data-act="c4-struct" style="margin-top:16px"></div>`}),

sp('c4-s4','A reference point',{
 left:`${head('Step 4 · Practise','Learn')}<h2>A reference point</h2><p>Comparisons are clearer when several figures are compared with the same ${T('reference point')}, such as the cheapest or the most expensive city.</p>${insight('One reference, several comparisons','City B cost one and a half times as much as City A, and City E cost twice as much.')}<p>Here City A is the reference point. The reader can see the whole range at once.</p>${take('Pick one reference point and compare the others with it.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c4-build"></div><div data-gate="c4-build" hidden style="margin-top:16px"><div data-act="c4-best"></div></div>`}),

sp('c4-s5','Chapter challenge: five cities',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph that compares all five cities, with at least three calculated comparisons.</p><div class="oe-insight"><span class="lab">The task</span>The chart below shows the average cost of a weekly food shop for a family of four in five cities.</div>${chart('shop2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['A meaningful comparison answers “by how much?”.','Subtract for a difference, divide for a ratio or a fraction, and check the sum.','Use -er/-est, more/most and “as … as” accurately.','Compare several figures with one reference point.']})
];

const acts={
'c4-vague':{type:'choice',level:'Guided',skill:'Meaningful comparison',decision:'Which comparison is meaningful?',
  opts:[{t:'A weekly shop in City B cost €70 more than in City A.',ok:1,why:'210 − 140 = 70: it says by how much.'},{t:'City B was more expensive than City A.',why:'True, but it doesn’t say by how much.'},{t:'City B and City A were different.',why:'Vague: different how?'}]},
'c4-calc':{type:'binary',level:'Supported',skill:'Calculations',decision:'Accurate or not?',labels:['Accurate','Not accurate'],
  items:[{t:'City E cost exactly twice as much as City A.',a:0,right:'2 × 140 = 280.',wrong:'It is accurate: 280 ÷ 140 = 2.'},
         {t:'City B cost one and a half times as much as City A.',a:0,right:'1.5 × 140 = 210.',wrong:'It is accurate: 210 ÷ 140 = 1.5.'},
         {t:'City D cost half as much as City A.',a:1,right:'Right. 105 is three-quarters of 140.',wrong:'Half of 140 is 70; 105 is three-quarters.'},
         {t:'City C cost €35 less than City B.',a:0,right:'210 − 175 = 35.',wrong:'It is accurate: €210 − €175 = €35.'}]},
'c4-ratio':{type:'choice',level:'Supported',skill:'Ratios',decision:'City E (€280) compared with City D (€105). Which is accurate?',
  opts:[{t:'more than two and a half times as much',ok:1,why:'280 ÷ 105 ≈ 2.7.'},{t:'three times as much',why:'3 × 105 = 315.'},{t:'twice as much',why:'2 × 105 = 210.'}]},
'c4-fix':{type:'fix',level:'Supported',skill:'Comparative structures',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'City E was twice more expensive than City A.',ok:/twice as (expensive|much) as/i,bad:/twice more/i,hint:'Use the “as … as” pattern.',err:'twice more expensive than',fix:'twice as expensive as',why:'Ratios use “as … as”.',model:'City E was twice as expensive as City A.'},
         {wrong:'City D was more cheaper than City C.',ok:/cheaper than/i,bad:/more cheaper/i,hint:'“Cheaper” is already comparative.',err:'more cheaper',fix:'cheaper',why:'Don’t add “more” to an -er adjective.',model:'City D was cheaper than City C.'},
         {wrong:'City D was the most cheap of the five cities.',ok:/the cheapest/i,bad:/most cheap/i,hint:'A short adjective takes -est.',err:'the most cheap',fix:'the cheapest',why:'Short adjectives: the cheapest.',model:'City D was the cheapest of the five cities.'}]},
'c4-struct':{type:'sort',level:'Supported',skill:'Structures',decision:'What does each structure express?',cats:['A difference','A ratio','A ranking'],
  items:[{w:'€175 more than',c:0,m:'subtracted.'},{w:'twice as much as',c:1,m:'divided.'},{w:'the most expensive',c:2,m:'position.'},{w:'three-quarters of the price',c:1,m:'a fraction is a ratio.'},{w:'the second cheapest',c:2,m:'position.'}]},
'c4-build':{type:'builder',level:'Independent',skill:'A reference point',decision:'Build a comparison using City A as the reference point.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Compared with City A,','a weekly shop cost','one and a half times as much','in City B','and twice as much in City E.'],
  distract:[{t:'one and a half times more',why:'Use “as much as” for ratios.',fix:'one and a half times as much'},{t:'and three times as much in City E.',why:'280 ÷ 140 = 2: twice.',fix:'and twice as much in City E.'}],
  right:'One reference point, two accurate ratios.',orderMsg:'All the right pieces, but check the order: the reference, the subject, then each ratio with its city.',incompleteMsg:'Good so far, but incomplete. Add City E.'},
'c4-best':{type:'choice',level:'Independent',skill:'Comparisons',decision:'Which sentence is strongest?',
  opts:[{t:'The cheapest city was City D, where the shop cost €105, three-quarters of the price in City A.',ok:1,why:'A ranking and a calculated fraction.'},{t:'City D was cheap.',why:'Vague.'},{t:'City D was €105.',why:'A figure, no comparison.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Comparisons',decision:'Write one body paragraph comparing the five cities.',prompt:'At least three calculated comparisons. Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'A weekly food shop…'}],
  checks:[{t:'You mentioned all five cities.',fix:'Include City A to City E.',fn:v=>['a','b','c','d','e'].every(c=>new RegExp('city '+c+'\\b','i').test(v.a))},
          {t:'You used a ratio.',fix:'Add a ratio: twice as much as, one and a half times as much as.',fn:v=>/(twice|times|half|three-quarters|double)/i.test(v.a)},
          {t:'You used a difference.',fix:'Add a difference: €175 more than, €35 cheaper than.',fn:v=>/€\s?\d+\s+(more|less|cheaper)/i.test(v.a)},
          {t:'You used a ranking.',fix:'Add the cheapest or the most expensive.',fn:v=>/\b(the cheapest|the most expensive|the second)/i.test(v.a)},
          {t:'No “twice more than”.',fix:'Use “twice as much as”.',fn:v=>!/twice more/i.test(v.a)},
          {t:'Your paragraph is a good length (70 words or more).',fix:'Add detail: your paragraph is under 70 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model paragraph',
  model:`<p>A weekly food shop for a family of four was most expensive in City E, at €280, <button type="button" class="hl" data-n="0">exactly twice the cost in City A</button> (€140). City B was the second most expensive, at €210, <button type="button" class="hl" data-n="1">one and a half times the figure for City A</button>, while City C was €35 cheaper, at €175. <button type="button" class="hl" data-n="2">The cheapest city was City D</button>, where the same shop cost just €105, <button type="button" class="hl" data-n="3">three-quarters of the price in City A and €175 less than in City E</button>.</p>`,
  notes:['A ratio with City A as the reference point.','The same reference point again: 210 ÷ 140 = 1.5.','A ranking at the bottom of the range.','A fraction and a difference in one phrase.'],
  self:['Every comparison says by how much.','I checked every calculation.','I used comparative structures accurately.','I used one reference point for several comparisons.'],revise:1}
};

const gloss={
  'ratio':{term:'ratio',def:'How many times bigger one figure is than another: divide. 280 ÷ 140 = 2, so twice as much.',path:'M40,80 V60 H90 V80 M140,80 V20 H190 V80',ex:'“City E cost twice as much as City A.”'},
  'reference point':{term:'reference point',def:'One figure that you compare several others with.',path:'M20,50 H220 M120,30 V70',ex:'“Compared with City A, City E cost twice as much.”'},
  'three-quarters':{term:'three-quarters',def:'75%, or 0.75 of something. 105 is three-quarters of 140.',path:'M120,45 L120,15 A30,30 0 1,1 90,45 Z',ex:'“City D cost three-quarters of the price in City A.”'}
};

const retrieval={
 'c4-s1':[{q:'A meaningful comparison answers…',opts:[{t:'by how much?',ok:1,why:'Calculated.'},{t:'why?',why:'No reasons.'}]}],
 'c4-s2':[{q:'105 ÷ 140 =',opts:[{t:'0.75: three-quarters',ok:1,why:'Fraction.'},{t:'0.5: half',why:'Half would be 70.'}]}],
 'c4-s3':[{q:'Which is correct?',opts:[{t:'twice as expensive as',ok:1,why:'as … as.'},{t:'twice more expensive than',why:'Wrong pattern.'}]}],
 'c4-s4':[{q:'A reference point lets you…',opts:[{t:'compare several figures with one',ok:1,why:'Clearer.'},{t:'leave out figures',why:'It organises them.'}]}],
 'c4-s5':[{q:'Which city was second most expensive?',opts:[{t:'City B',ok:1,why:'€210.'},{t:'City C',why:'€175.'}]}]
};

const minitest=[
 {q:'Which is meaningful?',opts:[{t:'City E cost €140 more than City A.',ok:1,why:'By how much.'},{t:'City E was more expensive.',why:'Vague.'},{t:'City E was expensive.',why:'No comparison.'}],sp:'c4-s1'},
 {q:'To find a ratio, you…',opts:[{t:'divide',ok:1,why:'How many times.'},{t:'subtract',why:'That gives a difference.'},{t:'add',why:'No.'}],sp:'c4-s2'},
 {q:'280 compared with 105 is…',opts:[{t:'more than two and a half times as much',ok:1,why:'≈ 2.7.'},{t:'three times as much',why:'315.'},{t:'twice as much',why:'210.'}],sp:'c4-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'City D was the cheapest.',ok:1,why:'-est.'},{t:'City D was the most cheap.',why:'Short adjective.'},{t:'City D was the more cheaper.',why:'Double comparative.'}],sp:'c4-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'City B cost one and a half times as much as City A.',ok:1,why:'as … as.'},{t:'City B cost one and a half times more than City A.',why:'Avoid with ratios.'},{t:'City B cost one and a half than City A.',why:'Missing structure.'}],sp:'c4-s3'},
 {q:'“Compared with City A, …” makes City A…',opts:[{t:'the reference point',ok:1,why:'The others are compared with it.'},{t:'the most expensive',why:'No.'},{t:'irrelevant',why:'It is central.'}],sp:'c4-s4'},
 {q:'City C (€175) and City B (€210). Which is accurate?',opts:[{t:'City C was €35 cheaper.',ok:1,why:'210 − 175.'},{t:'City C was half the price.',why:'No.'},{t:'City C was more expensive.',why:'Cheaper.'}],sp:'c4-s5'},
 {q:'Which city was the most expensive?',opts:[{t:'City E',ok:1,why:'€280.'},{t:'City B',why:'€210.'},{t:'City A',why:'€140.'}],sp:'c4-s5'}
];

const cannow=[['Turn a vague comparison into a meaningful one','c4-s1'],['Calculate differences, ratios and fractions','c4-s2'],['Use comparative structures accurately','c4-s3'],['Compare figures with a reference point','c4-s4'],['Write a comparative paragraph','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{shop:C.shop,shop2:Object.assign({},C.shop,{id:'ch-f2shop2'})},retrieval,minitest,cannow});
})();
