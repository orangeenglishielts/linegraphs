/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 4 · FRACTIONS, RATIOS AND MULTIPLES
   ACTIVITY IDS (type · level)
     c4-ratio1..2 choice  Guided       Step 1  How many times?
     c4-pat     fix       Supported    Step 2  Twice as much as
     c4-many    binary    Supported    Step 2  Many or much?
     c4-mult    sort      Supported    Step 3  Doubled, tripled, quadrupled
     c4-calc    choice    Supported    Step 3  Rose by half
     c4-build   builder   Supported    Step 4  A fraction of another figure
     c4-frac    binary    Independent  Step 4  Accurate or not?
     c4-write   write     Independent  Step 5  Five salaries
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=DD;
const P='Chapter 4',CT='Fractions, Ratios and Multiples',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'Comparing two figures with a ratio (“twice as much as”, “three times as many as”) shows the examiner that you understand the data, not just that you can copy it. It is also where some of the most common grammar errors appear. In this chapter I’ll show you how to calculate and express ratios accurately.',
  outcomes:['calculate a ratio between two figures before you write it',`use the patterns ${T('twice as much as')} and three times as many as correctly`,'describe change with doubled, tripled, quadrupled and halved','express one figure as a fraction of another'],
  illus:illus('120 : 60','twice as much as'),
  steps:[[1,'c4-s1','How many times?','Divide first','Discover'],[2,'c4-s2','The patterns','Twice as much as, not twice more than','Understand'],[3,'c4-s3','Multiples over time','Doubled, tripled, quadrupled','Understand'],[4,'c4-s4','Fractions of a figure','Three-quarters of…','Practise'],[5,'c4-s5','Chapter challenge','Five salaries','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','How many times?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>How many times?</h2>${vid({title:'How many times?',len:'90 seconds',script:['Show the salary table.','Divide 120 by 60: 2. A surgeon earned twice as much as an engineer.','Divide 120 by 24: 5. Five times as much as a shop assistant.','Say: always divide before you write a ratio.']})}<p>To compare two figures with a ratio, divide the larger by the smaller:</p>${chart('sal')}<ul class="clean"><li>120 ÷ 60 = 2: a surgeon earned <b>twice as much as</b> an engineer.</li><li>120 ÷ 24 = 5: <b>five times as much as</b> a shop assistant.</li><li>60 ÷ 20 = 3: an engineer earned <b>three times as much as</b> a waiter.</li></ul>${note('If the answer isn’t a whole number, approximate: 60 ÷ 24 = 2.5, “two and a half times as much as”.')}<div class="clear"></div>${take('Divide first. Then write the ratio.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c4-ratio1"></div><div data-act="c4-ratio2" style="margin-top:14px"></div>`}),

sp('c4-s2','The patterns',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The patterns</h2>${vid({title:'The patterns',len:'2 minutes',script:['Write the pattern: number + times + as much/many + as.','Show: twice as much as, three times as many as, half as much as.','Cross out: twice more than, two times more than.','Say: much for amounts such as money; many for things you count.']})}<p>The safe pattern is <b>number + times + as much / as many + as</b>:</p><ul class="clean"><li>A surgeon earned <b>twice as much as</b> an engineer.</li><li>City X had <b>four times as many</b> electric buses in 2025 <b>as</b> in 2015.</li><li>A waiter earned <b>a sixth of</b> a surgeon’s salary.</li></ul><p><b>much</b> for amounts (money, time); <b>many</b> for things you count (buses, people).</p>${mistake('<s>A surgeon earned twice more than an engineer.</s> Use “twice as much as”. “Times more than” is often misunderstood, so avoid it in IELTS.')}${take('Number + times + as much/many + as. Much for amounts, many for countable things.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c4-pat"></div><div data-act="c4-many" style="margin-top:16px"></div>`}),

sp('c4-s3','Multiples over time',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Multiples over time</h2>${vid({title:'Multiples over time',len:'90 seconds',script:['Show the electric buses chart.','City X: 20 to 80. Divide: 4. It quadrupled.','City Y: 15 to 45. Three times: it tripled.','City Z: 40 to 60. The rise of 20 is half of 40: it rose by half.']})}<p>When one figure becomes another over time, use a verb:</p>${chart('bus')}<ul class="clean"><li><b>doubled</b> (×2), <b>tripled</b> or trebled (×3), <b>${T('quadrupled')}</b> (×4)</li><li><b>halved</b> (÷2); <b>rose by half</b> (×1.5)</li><li><b>increased fivefold</b>, rose tenfold (×5, ×10)</li></ul>${insight('The buses','City X: 20 → 80, quadrupled. City Y: 15 → 45, tripled. City Z: 40 → 60, rose by half.')}${take('Divide the new figure by the old one, then choose the verb.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c4-mult"></div><div data-act="c4-calc" style="margin-top:16px"></div>`}),

sp('c4-s4','Fractions of a figure',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Fractions of a figure</h2><p>Ratios can also go the other way: one figure as a fraction of another.</p><ul class="clean"><li>45 ÷ 60 = 0.75: an electrician earned <b>three-quarters of</b> an engineer’s salary.</li><li>20 ÷ 120 = one sixth: a waiter earned <b>a sixth of</b> what a surgeon earned.</li><li>15 ÷ 45: City Y had <b>a third as many</b> buses in 2015 as in 2025.</li></ul>${note('Choose whichever direction is clearer for the reader. “Twice as much” and “half as much” describe the same pair, from opposite sides.')}<div class="clear"></div>${take('Smaller ÷ larger gives a fraction: three-quarters of, a sixth of, a third as many as.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1 and the chart in Step 3.</p><div data-act="c4-build"></div><div data-gate="c4-build" hidden style="margin-top:16px"><div data-act="c4-frac"></div></div>`}),

sp('c4-s5','Chapter challenge: five salaries',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph comparing the five salaries. Use at least three accurate ratios or fractions.</p>${taskbox('The table below shows the average annual salary in five jobs in one country.')}${chart('sal2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Divide before you write a ratio.','Use number + times + as much/many + as. Avoid “times more than”.','Over time: doubled, tripled, quadrupled, halved, rose by half.','Smaller ÷ larger gives a fraction: three-quarters of, a sixth of.']})
];

const acts={
'c4-ratio1':{type:'choice',level:'Guided',skill:'Calculating ratios',decision:'How does a surgeon’s salary compare with a shop assistant’s?',prompt:'€120,000 and €24,000.',
  opts:[{t:'Five times as much',ok:1,why:'120 ÷ 24 = 5.'},{t:'Four times as much',why:'4 × 24 = 96.'},{t:'Six times as much',why:'That is the waiter: 120 ÷ 20 = 6.'}]},
'c4-ratio2':{type:'choice',level:'Guided',skill:'Calculating ratios',decision:'How does an engineer’s salary compare with a shop assistant’s?',prompt:'€60,000 and €24,000.',
  opts:[{t:'Two and a half times as much',ok:1,why:'60 ÷ 24 = 2.5.'},{t:'Twice as much',why:'2 × 24 = 48.'},{t:'Three times as much',why:'3 × 24 = 72.'}]},
'c4-pat':{type:'fix',level:'Supported',skill:'Ratio patterns',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'A surgeon earned twice more than an engineer.',ok:/twice as much as/i,bad:/twice more/i,hint:'Use the “as … as” pattern.',err:'twice more than',fix:'twice as much as',why:'“Twice as much as” is clear and correct.',model:'A surgeon earned twice as much as an engineer.'},
         {wrong:'An engineer earned three times as much than a waiter.',ok:/three times as much as/i,bad:/as much than/i,hint:'“As much” is followed by “as”, not “than”.',err:'as much than',fix:'as much as',why:'The pattern is as … as.',model:'An engineer earned three times as much as a waiter.'},
         {wrong:'City X had four times as much electric buses in 2025.',ok:/four times as many/i,bad:/as much electric buses/i,hint:'Buses are counted.',err:'as much',fix:'as many',why:'“Many” for countable nouns.',model:'City X had four times as many electric buses in 2025 as in 2015.'}]},
'c4-many':{type:'binary',level:'Supported',skill:'Much or many',decision:'Much or many?',labels:['as much as','as many as'],
  items:[{t:'twice ___ money',a:0,right:'Money is an amount.',wrong:'Money is uncountable: as much as.'},{t:'three times ___ buses',a:1,right:'Buses are counted.',wrong:'Buses are countable: as many as.'},{t:'half ___ visitors',a:1,right:'Visitors are counted.',wrong:'Visitors are countable: as many as.'},{t:'twice ___ time online',a:0,right:'Time is an amount.',wrong:'Time is uncountable: as much as.'}]},
'c4-mult':{type:'sort',level:'Supported',skill:'Multiples over time',decision:'Which verb describes each change?',cats:['doubled','tripled','quadrupled','rose by half'],
  items:[{w:'City X: 20 → 80',c:2,m:'×4.'},{w:'City Y: 15 → 45',c:1,m:'×3.'},{w:'City Z: 40 → 60',c:3,m:'×1.5.'},{w:'A price: €30 → €60',c:0,m:'×2.'},{w:'Visitors: 120,000 → 360,000',c:1,m:'×3.'}]},
'c4-calc':{type:'choice',level:'Supported',skill:'Rose by half',decision:'City Z went from 40 to 60 electric buses. Which is accurate?',
  opts:[{t:'The number rose by half.',ok:1,why:'The rise (20) is half of the starting figure (40).'},{t:'The number doubled.',why:'Doubling 40 gives 80.'},{t:'The number rose by 50 buses.',why:'It rose by 20 buses, or by 50%.'}]},
'c4-build':{type:'builder',level:'Supported',skill:'Fractions of a figure',decision:'Build a sentence comparing an electrician and an engineer.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['An electrician earned €45,000,','three-quarters of','the salary','of an engineer.'],
  distract:[{t:'half of',why:'45 ÷ 60 = 0.75: three-quarters.',fix:'three-quarters of'},{t:'three-quarters more than',why:'The electrician earned less, not more.',fix:'three-quarters of'}],
  right:'A figure, an accurate fraction, and what it is a fraction of.',orderMsg:'All the right pieces, but check the order: the figure, the fraction, then what it is a fraction of.',incompleteMsg:'Good so far, but incomplete. Say what it is a fraction of.'},
'c4-frac':{type:'binary',level:'Independent',skill:'Accuracy',decision:'Is each comparison accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'A waiter earned a sixth of a surgeon’s salary.',a:0,right:'20 ÷ 120 = 1/6.',wrong:'It is accurate: 120 ÷ 6 = 20.'},
         {t:'In 2015, City Y had a third as many electric buses as in 2025.',a:0,right:'15 ÷ 45 = 1/3.',wrong:'It is accurate: 15 is a third of 45.'},
         {t:'A shop assistant earned half as much as an engineer.',a:1,right:'Right. 24 ÷ 60 = 0.4: two-fifths.',wrong:'Half of 60 is 30, not 24: two-fifths.'},
         {t:'City X’s fleet grew fourfold.',a:0,right:'20 × 4 = 80.',wrong:'It is accurate: ×4.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Ratios and fractions',decision:'Write one body paragraph comparing the five salaries.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'Surgeons earned by far the highest salary…'}],
  checks:[{t:'You used at least three ratios or fractions.',fix:'Add ratios: twice as much as, five times as much as, three-quarters of.',fn:v=>(v.a.match(/\b(twice|half|three times|four times|five times|six times|two and a half times|three-quarters|a sixth|a third|two-fifths|a quarter)\b/gi)||[]).length>=3},
          {t:'No “times more than”.',fix:'Use “as much as”, not “more than”, with a ratio.',fn:v=>!/\b(twice|times) more than\b/i.test(v.a)},
          {t:'“As much … as”, not “as much … than”.',fix:'The pattern is as much as.',fn:v=>!/as (much|many)( \w+){0,3} than/i.test(v.a)},
          {t:'You gave salaries in euros.',fix:'Give salaries in full: €120,000.',fn:v=>(v.a.match(/€\s?\d{2,3},000|\b\d{2,3},000 euros/gi)||[]).length>=3},
          {t:'Your ratios are accurate.',fix:'Check your division: surgeon/engineer 2; surgeon/waiter 6; electrician/engineer 0.75.',fn:v=>!/surgeon[^.]*(three|four) times as much as (an )?engineer/i.test(v.a)&&!/half as much as an engineer/i.test(v.a)},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p>Surgeons earned by far the highest salary, at €120,000 a year, <button type="button" class="hl" data-n="0">twice as much as engineers (€60,000)</button>. Electricians earned €45,000, <button type="button" class="hl" data-n="1">three-quarters of an engineer’s salary</button>. The two lowest-paid jobs were shop assistant and waiter, at €24,000 and €20,000 respectively. <button type="button" class="hl" data-n="2">A surgeon therefore earned five times as much as a shop assistant and six times as much as a waiter</button>, while an engineer earned three times as much as a waiter.</p>`,
  notes:['120 ÷ 60 = 2: twice as much as.','45 ÷ 60 = 0.75: a fraction of another figure.','120 ÷ 24 = 5; 120 ÷ 20 = 6; 60 ÷ 20 = 3.'],
  self:['I divided before writing every ratio.','I used as much as / as many as.','I avoided “times more than”.','I gave every salary in full, in euros.'],revise:1}
};

const gloss={
  'twice as much as':{term:'twice as much as',def:'Two times the amount of. For countable nouns: twice as many as.',path:'M40,80 V20 H90 V80 M150,80 V50 H200 V80',ex:'“A surgeon earned twice as much as an engineer.”'},
  'quadrupled':{term:'quadrupled',def:'Became four times as large.',path:'M40,80 V65 H70 V80 M140,80 V20 H170 V80',ex:'“The number of electric buses in City X quadrupled.”'},
  'respectively':{term:'respectively',def:'In the same order as the items just mentioned.',path:'M40,80 V40 H90 V80 M150,80 V50 H200 V80',ex:'“Shop assistants and waiters earned €24,000 and €20,000 respectively.”'}
};

const retrieval={
 'c4-s1':[{q:'120 and 24: how many times?',opts:[{t:'Five',ok:1,why:'120 ÷ 24.'},{t:'Four',why:'Divide again.'}]}],
 'c4-s2':[{q:'Which is correct?',opts:[{t:'twice as much as',ok:1,why:'The as … as pattern.'},{t:'twice more than',why:'Avoid it.'}]}],
 'c4-s3':[{q:'15 → 45 is…',opts:[{t:'tripled',ok:1,why:'×3.'},{t:'doubled',why:'×2 would be 30.'}]}],
 'c4-s4':[{q:'45 is what fraction of 60?',opts:[{t:'three-quarters',ok:1,why:'0.75.'},{t:'two-thirds',why:'That would be 40.'}]}],
 'c4-s5':[{q:'Surgeon €120,000; waiter €20,000. Ratio?',opts:[{t:'six times as much',ok:1,why:'120 ÷ 20.'},{t:'five times as much',why:'That is the shop assistant.'}]}]
};

const minitest=[
 {q:'What should you do before writing a ratio?',opts:[{t:'Divide one figure by the other',ok:1,why:'Calculate first.'},{t:'Subtract',why:'That gives a difference, not a ratio.'},{t:'Guess from the chart',why:'Calculate.'}],sp:'c4-s1'},
 {q:'60 and 24. Which is accurate?',opts:[{t:'two and a half times as much',ok:1,why:'2.5.'},{t:'twice as much',why:'2 × 24 = 48.'},{t:'three times as much',why:'3 × 24 = 72.'}],sp:'c4-s1'},
 {q:'Choose the correct sentence.',opts:[{t:'An engineer earned three times as much as a waiter.',ok:1,why:'as much as.'},{t:'An engineer earned three times more than a waiter.',why:'Avoid “times more than”.'},{t:'An engineer earned three times as much than a waiter.',why:'as … as.'}],sp:'c4-s2'},
 {q:'“Twice as ___ buses”',opts:[{t:'many',ok:1,why:'Countable.'},{t:'much',why:'Buses are counted.'},{t:'more',why:'Use as many as.'}],sp:'c4-s2'},
 {q:'40 → 60 is…',opts:[{t:'a 50% rise',ok:1,why:'×1.5.'},{t:'doubled',why:'×2 = 80.'},{t:'tripled',why:'×3 = 120.'}],sp:'c4-s3'},
 {q:'20 → 80 is…',opts:[{t:'quadrupled',ok:1,why:'×4.'},{t:'tripled',why:'×3 = 60.'},{t:'rose by 4',why:'It rose by 60.'}],sp:'c4-s3'},
 {q:'A waiter (€20,000) earned what fraction of a surgeon’s salary (€120,000)?',opts:[{t:'a sixth',ok:1,why:'20 ÷ 120.'},{t:'a fifth',why:'That would be €24,000.'},{t:'a quarter',why:'That would be €30,000.'}],sp:'c4-s4'},
 {q:'24 is what fraction of 60?',opts:[{t:'two-fifths',ok:1,why:'0.4.'},{t:'half',why:'Half is 30.'},{t:'a third',why:'A third is 20.'}],sp:'c4-s4'}
];

const cannow=[['Calculate a ratio before writing it','c4-s1'],['Use twice as much as / three times as many as','c4-s2'],['Describe change with doubled, tripled and quadrupled','c4-s3'],['Express one figure as a fraction of another','c4-s4'],['Write a paragraph with accurate ratios','c4-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:4,spreads,acts,gloss,charts:{sal:C.sal,sal2:cp('sal','ch-sal2'),bus:C.bus},retrieval,minitest,cannow});
})();
