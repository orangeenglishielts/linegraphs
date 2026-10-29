/* ==========================================================================
   MODULE 6 · CHAPTER 3 · GROUPING INFORMATION
   ACTIVITY IDS (type · level)
     c3-sort    sort      Guided       Step 1  Make three groups
     c3-range   choice    Supported    Step 2  One sentence per group
     c3-range2  binary    Supported    Step 2  Accurate or not?
     c3-cat     choice    Supported    Step 3  Category or similarity?
     c3-time    sections  Supported    Step 4  Two phases
     c3-build   builder   Supported    Step 4  A group by time
     c3-write   write     Independent  Step 5  Eight products
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=CMP;
const P='Chapter 3',CT='Grouping Information',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const SEC=Object.assign({},C.train,{id:'ch-m6train-sec',sections:[{a:0,b:2,lab:'A',t:0},{a:2,b:3,lab:'B',t:1},{a:3,b:5,lab:'C',t:2}]});

const spreads=[
opening({n:3,title:CT,lede:'A chart with eight categories invites eight separate sentences, and the reader has to find the pattern alone. Grouping does that work for them: three products rose strongly, two barely changed, three fell. In this chapter I’ll show you three ways to group information and how to choose between them.',
  outcomes:['group categories that behave in a similar way','describe a group in one sentence, with a range',`decide when grouping by ${T('category')} helps and when it hides the pattern`,'group a period of time into phases'],
  illus:illus([100,80,70,20,15]),
  steps:[[1,'c3-s1','Why group?','Eight rows, three groups','Discover'],[2,'c3-s2','Group by similarity','One sentence, one range','Understand'],[3,'c3-s3','Group by category','When it helps','Understand'],[4,'c3-s4','Group by time','Phases','Practise'],[5,'c3-s5','Chapter challenge','Eight products','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Why group?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Why group?</h2>${vid({title:'Why group?',len:'90 seconds',script:['Show the supermarket table: eight products.','Read it top to bottom: plus 62, plus 48, plus 40, plus 3, plus 1, minus 12, minus 18, minus 25.','Say: three big rises, two tiny changes, three falls.','Finish: three groups, and the reader sees the pattern at once.']})}<p>Look at what the rows have in common. Here, three patterns appear:</p>${chart('grow')}<ul class="clean"><li><b>Strong growth:</b> plant-based milk, organic fruit, ready salads</li><li><b>Almost no change:</b> bread, eggs</li><li><b>Falls:</b> frozen meals, sweets, fizzy drinks</li></ul>${note('These are percentage changes, so “rose by 62%” is correct here: the table already gives the change.')}<div class="clear"></div>${take('Look for rows that behave alike. Three groups are easier to read than eight rows.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c3-sort"></div>`}),

sp('c3-s2','Group by similarity',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Group by similarity</h2>${vid({title:'Group by similarity',len:'2 minutes',script:['Take the falling group: minus 12, minus 18, minus 25.','Write one sentence with a range: sales fell by between 12% and 25%.','Add the extreme: the biggest fall was fizzy drinks.','Say: one sentence covers three rows.']})}<p>Describe each group in one sentence, with a ${T('range')} and, if useful, the extreme:</p>${insight('One group, one sentence','Sales of the three remaining products fell, by between 12% and 25%, with fizzy drinks recording the largest decline.')}${mistake('<s>Frozen meals fell by 12%. Sweets fell by 18%. Fizzy drinks fell by 25%.</s> Three sentences making one point. Group them.')}${take('One group, one sentence: the shared pattern, a range, and the extreme.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-range"></div><div data-act="c3-range2" style="margin-top:16px"></div>`}),

sp('c3-s3','Group by category',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Group by category</h2><p>Sometimes the categories themselves form natural groups: age groups, regions, types of product. Grouping by category works when the members of each category behave alike.</p><ul class="clean"><li><b>Hides the pattern:</b> grouping the table into “drinks” and “food” puts plant-based milk (+62%) with fizzy drinks (−25%).</li><li><b>Shows the pattern:</b> grouping by what happened puts the three strong risers together.</li></ul>${note('Ask: does each group have one clear story? If not, group by similarity instead.')}<div class="clear"></div>${take('Group by category only when each category tells one story. Otherwise, group by similarity.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c3-cat"></div>`}),

sp('c3-s4','Group by time',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Group by time</h2><p>On a graph over time, group the years into ${T('phase','phases')}: periods with one direction.</p>${chart('train')}<ul class="clean"><li><b>2000 to 2008:</b> journeys rose, from 3.0 to a peak of 4.5 million.</li><li><b>2008 to 2012:</b> almost no change.</li><li><b>2012 to 2020:</b> journeys fell, to 2.9 million, slightly below the 2000 level.</li></ul>${take('Divide time into phases with one direction each. Each phase gets a sentence.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-time"></div><div data-act="c3-build" style="margin-top:16px"></div>`}),

sp('c3-s5','Chapter challenge: eight products',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write two body paragraphs describing the eight products. Group them by similarity.</p>${chart('grow2')}<ul class="clean" style="font-size:15px"><li>Body 1: the strong risers.</li><li>Body 2: the products that barely changed and those that fell.</li><li>A range for at least one group.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Group rows that behave in the same way.','One sentence per group: the pattern, a range and the extreme.','Group by category only when each category tells one story.','On a graph over time, group the years into phases.']})
];

const acts={
'c3-sort':{type:'sort',level:'Guided',skill:'Grouping',decision:'Which group does each product belong in?',cats:['Strong growth','Almost no change','Fall'],
  items:[{w:'Plant-based milk',c:0,m:'+62%.'},{w:'Bread',c:1,m:'+3%.'},{w:'Fizzy drinks',c:2,m:'−25%.'},{w:'Ready salads',c:0,m:'+40%.'},{w:'Eggs',c:1,m:'+1%.'},{w:'Sweets',c:2,m:'−18%.'},{w:'Organic fruit',c:0,m:'+48%.'},{w:'Frozen meals',c:2,m:'−12%.'}]},
'c3-range':{type:'choice',level:'Supported',skill:'Describing a group',decision:'Which sentence describes the strong risers best?',
  opts:[{t:'Sales of plant-based milk, organic fruit and ready salads all rose considerably, by between 40% and 62%.',ok:1,why:'The group, the shared pattern and a range.'},{t:'Plant-based milk rose by 62%. Organic fruit rose by 48%. Ready salads rose by 40%.',why:'Accurate, but three sentences making one point.'},{t:'Sales of most products rose considerably.',why:'Only three of the eight rose considerably.'}]},
'c3-range2':{type:'binary',level:'Supported',skill:'Accuracy',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Sales of bread and eggs remained almost unchanged.',a:0,right:'+3% and +1%.',wrong:'It is accurate: tiny rises of 3% and 1%.'},
         {t:'Three products fell, by between 12% and 25%.',a:0,right:'Frozen meals, sweets and fizzy drinks.',wrong:'It is accurate: −12%, −18%, −25%.'},
         {t:'Fizzy drinks recorded the smallest fall.',a:1,right:'Right. The largest: −25%.',wrong:'−25% is the largest fall.'},
         {t:'Sales of plant-based milk rose by more than half.',a:0,right:'+62% is more than half.',wrong:'It is accurate: 62% is more than 50%.'}]},
'c3-cat':{type:'choice',level:'Supported',skill:'Choosing a grouping',decision:'Why is “drinks” a weak group for this table?',
  opts:[{t:'It puts plant-based milk (+62%) with fizzy drinks (−25%), which went in opposite directions.',ok:1,why:'A group needs one clear story.'},{t:'Drinks are not food.',why:'The problem is that the group has no single pattern.'},{t:'There are too few drinks.',why:'Size isn’t the problem: the directions are.'}]},
'c3-time':{type:'sections',level:'Supported',skill:'Phases',decision:'Label each phase of the train graph.',
  chart:SEC,labels:['rose to a peak','remained almost unchanged','fell'],
  explain:(sc,j)=>({A:'2000 to 2008: from 3.0 to 4.5 million, the peak. Journeys rose.',B:'2008 to 2012: 4.5 to 4.4 million. Almost no change.',C:'2012 to 2020: from 4.4 to 2.9 million. Journeys fell.'})[sc.lab]},
'c3-build':{type:'builder',level:'Supported',skill:'A phase',decision:'Build a sentence about the final phase.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['From 2012 onwards,','the number of journeys fell steadily,','to 2.9 million in 2020,','slightly below the 2000 level.'],
  distract:[{t:'well above the 2000 level.',why:'2.9 million is just below the 3.0 million of 2000.',fix:'slightly below the 2000 level.'},{t:'the number of journeys fluctuated,',why:'It fell in each period: 4.4, 3.6, 2.9.',fix:'the number of journeys fell steadily,'}],
  right:'The phase, its direction, the end point and a comparison with the start.',orderMsg:'All the right pieces, but check the order: when, what happened, the end point, the comparison.',incompleteMsg:'Good so far, but incomplete. Add the comparison with 2000.'},
'c3-write':{type:'write',level:'Independent',skill:'Grouping',decision:'Write two body paragraphs about the eight products.',prompt:'Then check your writing.',
  fields:[{k:'b1',label:'Body paragraph 1: the strong risers',rows:5,ph:'The strongest growth was in…'},{k:'b2',label:'Body paragraph 2: little change and falls',rows:5,ph:'Sales of bread and eggs…'}],
  checks:[{t:'Body 1 groups the three strong risers.',fix:'Put plant-based milk, organic fruit and ready salads in paragraph 1.',fn:v=>/plant/i.test(v.b1)&&/fruit/i.test(v.b1)&&/salad/i.test(v.b1)},
          {t:'Body 2 covers the other five products.',fix:'Include bread, eggs, frozen meals, sweets and fizzy drinks in paragraph 2.',fn:v=>['bread','egg','frozen','sweet','fizzy'].every(w=>new RegExp(w,'i').test(v.b2))},
          {t:'You described a group with a range.',fix:'Add a range: by between 12% and 25%.',fn:v=>/(between \d+% and \d+%|from \d+% (for \w+ )?to \d+%|ranging from)/i.test(v.b1+' '+v.b2)},
          {t:'You didn’t list every product in its own sentence.',fix:'Combine products with the same pattern in one sentence.',fn:v=>((v.b1+' '+v.b2).split(/[.!?]/).filter(s=>s.trim()).length)<=7},
          {t:'Your answer is a good length (65 words or more).',fix:'Add detail: your paragraphs are under 65 words.',fn:v=>((v.b1+' '+v.b2).match(/\S+/g)||[]).length>=65}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="0">The strongest growth was in three products.</button> Sales of plant-based milk rose by 62%, the largest increase of all, <button type="button" class="hl" data-n="1">while organic fruit and ready salads also grew considerably, by 48% and 40% respectively</button>.</p><p><span class="plabel">Body 2</span>Sales of bread and eggs, by contrast, remained almost unchanged, rising by only 3% and 1%. <button type="button" class="hl" data-n="2">The remaining three products all saw falls in sales, ranging from 12% for frozen meals to 25% for fizzy drinks</button>, <button type="button" class="hl" data-n="3">with sweets in between at 18%</button>.</p>`,
  notes:['A topic sentence names the group.','Respectively keeps two figures in order.','One sentence and a range cover three products.','The middle figure completes the group.'],
  self:['Each paragraph has one group or two related groups.','I described groups, not single rows.','I gave a range.','I used percentages correctly for percentage changes.'],revise:1}
};

const gloss={
  'range':{term:'range',def:'The lowest and highest figures in a group: by between 12% and 25%.',path:'M40,60 H200 M40,50 V70 M200,50 V70',ex:'“Sales fell by between 12% and 25%.”'},
  'category':{term:'category',def:'One of the groups a chart is divided into: a product, a region, an age group.',path:'M40,80 V40 H80 V80 M110,80 V25 H150 V80 M180,80 V55 H220 V80',ex:'“Group by category only when each category tells one story.”'},
  'phase':{term:'phase',def:'A period of time with one main direction: rising, falling or stable.',path:'M20,80 L100,30 L140,32 L220,75',ex:'“In the first phase, journeys rose to a peak.”'}
};

const retrieval={
 'c3-s1':[{q:'+62, +48, +40 belong in…',opts:[{t:'one group: strong growth',ok:1,why:'Same pattern.'},{t:'three separate sentences',why:'Group them.'}]}],
 'c3-s2':[{q:'How do you describe a group?',opts:[{t:'One sentence with a range',ok:1,why:'Efficient.'},{t:'One sentence per row',why:'That is a list.'}]}],
 'c3-s3':[{q:'When does grouping by category work?',opts:[{t:'When each category tells one story',ok:1,why:'Clear pattern.'},{t:'Always',why:'It can hide patterns.'}]}],
 'c3-s4':[{q:'A phase is…',opts:[{t:'a period with one direction',ok:1,why:'Rising, falling or stable.'},{t:'a single year',why:'A period.'}]}],
 'c3-s5':[{q:'2.9 million (2020) against 3.0 million (2000) is…',opts:[{t:'slightly below',ok:1,why:'0.1 million lower.'},{t:'much lower',why:'Very small gap.'}]}]
};

const minitest=[
 {q:'Why group information?',opts:[{t:'So the reader sees the pattern at once',ok:1,why:'Fewer, clearer points.'},{t:'To leave out data',why:'Key features stay.'},{t:'To add words',why:'Clarity.'}],sp:'c3-s1'},
 {q:'Which belongs with bread (+3%)?',opts:[{t:'Eggs (+1%)',ok:1,why:'Almost no change.'},{t:'Ready salads (+40%)',why:'Strong growth.'},{t:'Sweets (−18%)',why:'A fall.'}],sp:'c3-s1'},
 {q:'Which sentence describes a group?',opts:[{t:'Three products fell, by between 12% and 25%.',ok:1,why:'Pattern + range.'},{t:'Sweets fell by 18%.',why:'One row.'},{t:'There were eight products.',why:'Layout.'}],sp:'c3-s2'},
 {q:'Which product had the largest fall?',opts:[{t:'Fizzy drinks',ok:1,why:'−25%.'},{t:'Frozen meals',why:'−12%.'},{t:'Sweets',why:'−18%.'}],sp:'c3-s2'},
 {q:'Grouping by “drinks” here…',opts:[{t:'mixes opposite trends',ok:1,why:'+62% and −25%.'},{t:'shows the main pattern',why:'It hides it.'},{t:'is required',why:'Choose the clearest grouping.'}],sp:'c3-s3'},
 {q:'On a graph over time, how do you group?',opts:[{t:'Into phases',ok:1,why:'Periods with one direction.'},{t:'By colour',why:'Not data.'},{t:'Alphabetically',why:'No pattern.'}],sp:'c3-s4'},
 {q:'Train journeys peaked in…',opts:[{t:'2008, at 4.5 million',ok:1,why:'The highest point.'},{t:'2012',why:'4.4 million.'},{t:'2020',why:'The lowest.'}],sp:'c3-s4'},
 {q:'+62% means sales…',opts:[{t:'rose by more than half',ok:1,why:'62 > 50.'},{t:'more than doubled',why:'That would be over +100%.'},{t:'rose by 62 percentage points',why:'This is a percentage change.'}],sp:'c3-s5'}
];

const cannow=[['Group categories that behave alike','c3-s1'],['Describe a group with a range','c3-s2'],['Decide when to group by category','c3-s3'],['Group time into phases','c3-s4'],['Write grouped body paragraphs','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{grow:C.grow,grow2:cp('grow','ch-m6grow2'),train:C.train,'train-sec':SEC},retrieval,minitest,cannow});
})();
