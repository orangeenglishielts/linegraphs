/* ==========================================================================
   MASTERING TABLES · CHAPTER 4 · SELECTING FROM A LARGE TABLE
   ACTIVITY IDS (type · level)
     c4-select  binary    Guided       Step 1  Include or leave out?
     c4-ext1..3 choice    Supported    Step 2  The extremes
     c4-group   sort      Supported    Step 3  Group the regions
     c4-build   builder   Supported    Step 3  One sentence for five regions
     c4-mid     choice    Independent  Step 4  When to use the middle years
     c4-pts     fix       Independent  Step 4  Points and per cent
     c4-write   write     Independent  Step 5  Overview and body paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 4',CT='Selecting from a Large Table',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'A large table can hold 24 figures or more. You have about 20 minutes and need only around 150 to 200 words, so you can’t use them all, and the examiner doesn’t want you to. Band 7 asks you to select key features. In this chapter I’ll show you how to choose: the extremes, the groups and the exception.',
  outcomes:['choose which figures to use and which to leave out','start with the extremes: the highest, the lowest, the first and the last','group rows that behave in the same way and describe them together',`describe changes in ${T('percentage points')} accurately`],
  illus:illus([[0,3],[3,0],[3,3]]),
  steps:[[1,'c4-s1','Too many numbers','What to leave out','Discover'],[2,'c4-s2','Start with the extremes','Highest, lowest, first, last','Understand'],[3,'c4-s3','Group the similar rows','Five regions, one sentence','Understand'],[4,'c4-s4','The middle and the points','Which years, which units','Practise'],[5,'c4-s5','Chapter challenge','Six regions, four years','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Too many numbers',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Too many numbers</h2>${vid({title:'Too many numbers',len:'90 seconds',script:['Show the renewable energy table: six regions, four years, 24 figures.','Count them. Say: 24 figures in 150 words is a list, not a description.','Circle the West in 2025, the East in 2010 and the East in 2025.','Finish: choose the figures that tell the story; leave out the rest.']})}${chart('renew')}<p style="margin-top:10px">This table has 24 figures. If you write them all, your answer becomes a list and you have no space for comparisons. At Band 7, the key features you select must be covered and clearly highlighted.</p>${mistake('<s>In 2010 the West was 30%, the South was 25%, the Coast was 18%…</s> Reading the table aloud is not describing it.')}${take('You are not expected to use every figure. Choose about a third of them, and use them as evidence for your comparisons.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c4-select"></div>`}),

sp('c4-s2','Start with the extremes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Start with the extremes</h2>${vid({title:'Start with the extremes',len:'90 seconds',script:['Show the table. Highlight the top row and the bottom row.','Say: the West was highest in every year; the East was lowest in every year.','Highlight the first and last columns. Say: compare these first.','Finish: the extremes give you the frame for everything else.']})}<p>Your first selection is always the same:</p><ul class="clean"><li><b>The highest:</b> the West, in every year (52% in 2025).</li><li><b>The lowest:</b> the East, in every year (8% in 2010).</li><li><b>The first and last columns:</b> 2010 and 2025 show the overall change.</li><li><b>The ranking:</b> did the order change? Here, it ${T('stayed the same')} in every year.</li></ul>${insight('A ranking that doesn’t change is a key feature','If no region overtook another, say so in the overview. It is one of the easiest key features to spot, and many candidates miss it.')}${take('Highest, lowest, first year, last year, and whether the order changed. That is your frame.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c4-ext1"></div><div data-act="c4-ext2" style="margin-top:14px"></div><div data-act="c4-ext3" style="margin-top:14px"></div>`}),

sp('c4-s3','Group the similar rows',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Group the similar rows</h2>${vid({title:'Group the similar rows',len:'2 minutes',script:['Calculate the rise for each region: 22, 22, 23, 24, 23, 7.','Say: five regions rose by almost the same amount. One did not.','Show the sentence: The other five regions rose by between 22 and 24 percentage points.','Finish: one sentence instead of five, and the East stands out.']})}<p>Now calculate the change in each row, from 2010 to 2025:</p><ul class="clean"><li>West +22 · South +22 · Coast +23 · Central +24 · North +23</li><li><b>East +7</b></li></ul><p>Five regions followed ${T('a similar pattern','a very similar pattern')}. Describe them together, with a range:</p>${insight('One sentence, five regions','In five of the six regions, the share rose by between 22 and 24 percentage points.')}<p>Then the exception gets its own sentence: <i>The East, by contrast, ${T('lagged behind')}, rising by only 7 points.</i></p>${take('Calculate the change for every row. Rows that changed by similar amounts go in one sentence, with a range.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c4-group"></div><div data-gate="c4-group" hidden style="margin-top:16px"><div data-act="c4-build"></div></div>`}),

sp('c4-s4','The middle years and the points',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The middle years and the points</h2><p><b>The middle columns.</b> Use them only when something happens there: a peak, a dip, a change of direction or a change of leader. In this table every region rose in every period, so 2010 and 2025 are enough.</p><p><b>${T('percentage points')}.</b> The figures are percentages, so a change between them is in percentage points:</p><ul class="clean"><li>The West rose from 30% to 52%: <b>22 percentage points</b>.</li><li>It did <b>not</b> rise by 22%. That would mean 30% × 1.22 ≈ 37%.</li></ul>${mistake('<s>The North increased by 23%.</s> From 12% to 35% is a rise of 23 <i>percentage points</i>. In relative terms the North almost tripled.')}${take('Use the middle years only for a peak, a dip or a change of order. Changes between percentages are in percentage points.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c4-mid"></div><div data-act="c4-pts" style="margin-top:16px"></div>`}),

sp('c4-s5','Chapter challenge: six regions, four years',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and one body paragraph for this task. Select: don’t list.</p>${taskbox('The table below shows the percentage of energy that came from renewable sources in six regions of one country between 2010 and 2025.')}${chart('renew')}${note('Your frame: the highest, the lowest, the order. Your groups: the similar regions and one exception.')}<ul class="clean" style="font-size:15px"><li>Overview: no figures.</li><li>Body: no more than about ten figures.</li><li>One range and one change in percentage points.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['You don’t need every figure: choose the ones that support your comparisons.','Start with the extremes: the highest, the lowest, the first year, the last year, and the order.','Calculate the change for each row, then group rows that changed by similar amounts.','Use the middle years only when something happens there, and give changes in percentage points.']})
];

const acts={
'c4-select':{type:'binary',level:'Guided',skill:'Selecting',decision:'Include it in your answer, or leave it out?',labels:['Include','Leave out'],
  items:[{t:'The West had the highest share in every year, reaching 52% in 2025.',a:0,right:'The highest figure, and a region that stays on top.',wrong:'The highest region in every year is a key feature.'},
         {t:'The Coast’s share was 24% in 2015 and 33% in 2020.',a:1,right:'Right. Two middle-year figures for a middle region add nothing.',wrong:'These middle figures don’t show anything special. Leave them out.'},
         {t:'The East’s share grew far less than any other region’s.',a:0,right:'The exception is always a key feature.',wrong:'The exception is a key feature: +7 points against 22 to 24.'},
         {t:'Central went from 20% in 2015 to 29% in 2020.',a:1,right:'Right. A middle period with nothing special in it.',wrong:'Nothing special happens here. Leave it out.'},
         {t:'The order of the six regions never changed.',a:0,right:'A stable ranking is an overview feature.',wrong:'A ranking that never changes is a key feature.'}]},
'c4-ext1':{type:'choice',level:'Supported',skill:'The extremes',decision:'Which region had the highest share in every year?',
  opts:[{t:'The West',ok:1,why:'30%, 36%, 44% and 52%: top of every column.'},{t:'The North',why:'The North grew a lot in relative terms, but it was fifth in every year.'},{t:'The South',why:'The South was second in every year.'}]},
'c4-ext2':{type:'choice',level:'Supported',skill:'The order',decision:'Did any region overtake another between 2010 and 2025?',
  opts:[{t:'No. The order was the same in every year.',ok:1,why:'West, South, Coast, Central, North, East in all four columns.'},{t:'Yes. The North overtook Central.',why:'The North was still behind Central in 2025: 35% against 38%.'},{t:'Yes. The Coast overtook the South.',why:'The Coast stayed third: 41% against 47% in 2025.'}]},
'c4-ext3':{type:'choice',level:'Supported',skill:'The gap',decision:'What happened to the gap between the West and the East?',
  opts:[{t:'It widened, from 22 points in 2010 to 37 points in 2025.',ok:1,why:'30 − 8 = 22, and 52 − 15 = 37.'},{t:'It narrowed, because the East almost doubled.',why:'The East almost doubled, but from a low start: it gained 7 points while the West gained 22.'},{t:'It stayed the same.',why:'Calculate it: 22, then 37.'}]},
'c4-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Where was each region in 2025?',cats:['Above 40%','Between 30% and 40%','Below 20%'],
  items:[{w:'West',c:0,m:'52%: the only region above half.'},{w:'South',c:0,m:'47%.'},{w:'Coast',c:0,m:'41%, just above 40%.'},{w:'Central',c:1,m:'38%.'},{w:'North',c:1,m:'35%.'},{w:'East',c:2,m:'15%: far below the rest.'}]},
'c4-build':{type:'builder',level:'Supported',skill:'Grouping with a range',decision:'Build one sentence for the five similar regions.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['In five of the six regions,','the share of renewable energy','rose by between','22 and 24','percentage points','between 2010 and 2025.'],
  distract:[{t:'22% and 24%',why:'The changes are between percentages, so they are percentage points.',fix:'22 and 24'},{t:'In all six regions,',why:'The East rose by only 7 points, so it doesn’t belong in this group.',fix:'In five of the six regions,'}],
  right:'The group, the range, the unit and the period.',orderMsg:'All the right pieces, but check the order: the group, the subject, the change and its range, then the period.',incompleteMsg:'Good so far, but incomplete. Add the range and the period.'},
'c4-mid':{type:'choice',level:'Independent',skill:'The middle years',decision:'When should you mention a middle year?',
  opts:[{t:'When something happens there: a peak, a dip, or a change in the order',ok:1,why:'Otherwise the first and last years tell the story.'},{t:'Always: every year must be mentioned',why:'That turns a large table into a list.'},{t:'Never',why:'A peak or a change of leader in a middle year is a key feature.'}]},
'c4-pts':{type:'fix',level:'Independent',skill:'Percentage points',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The South’s share rose by 22% between 2010 and 2025.',ok:/22 percentage points|22 points/i,bad:/by 22%/i,hint:'The figures are percentages. What do you call the difference between them?',err:'by 22%',fix:'by 22 percentage points',why:'From 25% to 47% is a rise of 22 percentage points.',model:'The South’s share rose by 22 percentage points between 2010 and 2025.'},
         {wrong:'The North’s share doubled, from 12% to 35%.',ok:/(almost|nearly) tripled|almost three times|nearly three times/i,bad:/\bdoubled/i,hint:'Divide 35 by 12.',err:'doubled',fix:'almost tripled',why:'35 ÷ 12 ≈ 2.9.',model:'The North’s share almost tripled, from 12% to 35%.'},
         {wrong:'The East rose sharply, from 8% to 15%.',ok:/(only|slightly|just|by (only|just) 7|modest|slow|gradual)/i,bad:/sharply/i,hint:'Compare the East’s 7 points with the other regions’ 22 to 24.',err:'sharply',fix:'only slightly / by only 7 points',why:'Compared with the other regions, 7 points is small.',model:'The East rose by only 7 percentage points, from 8% to 15%.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Selecting key features',decision:'Write an overview and one body paragraph.',prompt:'Select, don’t list. Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'a',label:'Body paragraph',rows:8,ph:'The West had…'}],
  checks:[{t:'Your overview starts with “Overall,” or similar.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'Your overview has no figures.',fix:'Remove the figures from your overview.',fn:v=>v.ov.trim()&&!/\d/.test(OE.figs(v.ov))},
          {t:'You said the share rose everywhere.',fix:'Say that renewable energy rose in all six regions.',fn:v=>/(all|every|each)\s*(six|of the)?\s*region/i.test(v.ov+v.a)},
          {t:'You identified the East as the exception.',fix:'Describe the East: much slower growth than the rest.',fn:v=>/east/i.test(v.ov+v.a)},
          {t:'You described a group with a range.',fix:'Group the five similar regions with a range: between 22 and 24 percentage points.',fn:v=>/between \d+%? and \d+/i.test(v.a)},
          {t:'You used percentage points.',fix:'A change between percentages is in percentage points.',fn:v=>/percentage points?|\bpoints\b/i.test(v.a)},
          {t:'You selected: about 4 to 12 figures, not counting years.',fix:'Check your figures: select the key ones (about 4 to 12, not counting years).',fn:v=>{const n=(v.a.match(/\b(?!(19|20)\d\d\b)\d+/g)||[]).length;return n>=4&&n<=12}}],
  modelTitle:'My model answer',
  model:`<p><button type="button" class="hl" data-n="0">Overall, the share of energy from renewable sources rose in all six regions, and the order of the regions stayed the same throughout.</button> The East lagged far behind the others, with much slower growth than anywhere else.</p><p>The West had the highest proportion in every year, rising from 30% in 2010 to 52% in 2025, <button type="button" class="hl" data-n="1">when it was the only region to get more than half of its energy from renewables</button>. <button type="button" class="hl" data-n="2">The South, the Coast, Central and the North followed a very similar pattern, each gaining between 22 and 24 percentage points</button>, and in relative terms the North’s share almost tripled, from 12% to 35%. <button type="button" class="hl" data-n="3">The East, by contrast, increased by only 7 percentage points</button>, from 8% to 15%, so the gap between the West and the East widened from 22 to 37 points.</p>`,
  notes:['The general trend and a stable order: two overview features, no figures.','The highest region, and the only one above half.','The four regions below the West in one sentence, with a range. The West, with the same rise, has its own sentence because it was the highest.','The exception, and a calculated gap: 30 − 8 = 22, and 52 − 15 = 37.'],
  self:['I didn’t list every figure.','I described the similar regions together.','I gave the East its own sentence.','I used percentage points for changes.'],revise:1}
};

const gloss={
  'percentage points':{term:'percentage points',def:'The difference between two percentages. From 30% to 52% is a rise of 22 percentage points, not 22%.',path:'M60,80 V36 H100 V80 M140,80 V14 H180 V80',ex:'“The West’s share rose by 22 percentage points.”'},
  'stayed the same':{term:'stayed the same',def:'Did not change. For a ranking, it means no row overtook another.',path:'M20,45 L220,45',ex:'“The order of the regions stayed the same throughout.”'},
  'a similar pattern':{term:'a similar pattern',def:'The same kind of change in several rows. Describe them together with a range.',path:'M20,70 L220,30 M20,60 L220,20',ex:'“Five of the six regions followed a very similar pattern.”'},
  'lagged behind':{term:'lagged behind',def:'Grew more slowly than the others and stayed further back.',path:'M20,60 L220,20 M20,70 L220,58',ex:'“The East lagged behind the other regions.”'}
};

const retrieval={
 'c4-s1':[{q:'Do you need to use all 24 figures?',opts:[{t:'No: select the key ones',ok:1,why:'Band 7 asks you to select key features.'},{t:'Yes',why:'That makes a list.'}]}],
 'c4-s2':[{q:'The order of the rows never changed. Where does that go?',opts:[{t:'The overview',ok:1,why:'A stable ranking is a key feature.'},{t:'Nowhere',why:'It is a key feature.'}]}],
 'c4-s3':[{q:'Five rows rose by 22 to 24 points. How do you write them?',opts:[{t:'Together, with a range',ok:1,why:'One sentence.'},{t:'One sentence each',why:'That repeats the same point.'}]}],
 'c4-s4':[{q:'12% → 35% is a rise of…',opts:[{t:'23 percentage points',ok:1,why:'35 − 12.'},{t:'23%',why:'Use percentage points.'}]}],
 'c4-s5':[{q:'How many figures should your body paragraph have?',opts:[{t:'About ten at most',ok:1,why:'Select, don’t list.'},{t:'All 24',why:'That is a list.'}]}]
};

const minitest=[
 {q:'What does Band 7 ask for?',opts:[{t:'Select key features and highlight them clearly',ok:1,why:'Select the key features.'},{t:'Mention every figure',why:'That is not required.'},{t:'Explain the reasons',why:'Task 1 never asks for reasons.'}],sp:'c4-s1'},
 {q:'Which is part of your first selection?',opts:[{t:'The highest and lowest rows',ok:1,why:'The extremes frame the answer.'},{t:'Every middle-year figure',why:'Only if something happens there.'},{t:'The number of rows',why:'That is layout, not data.'}],sp:'c4-s2'},
 {q:'West 30 → 52; East 8 → 15. The gap…',opts:[{t:'widened from 22 to 37 points',ok:1,why:'30 − 8 and 52 − 15.'},{t:'narrowed',why:'It grew.'},{t:'stayed the same',why:'Calculate it.'}],sp:'c4-s2'},
 {q:'Rises of 22, 22, 23, 24 and 23 points. How do you describe them?',opts:[{t:'Together: between 22 and 24 percentage points',ok:1,why:'A range for a group.'},{t:'Each one separately',why:'Five sentences making one point.'},{t:'As 22%',why:'Use percentage points.'}],sp:'c4-s3'},
 {q:'One row grew much more slowly. What do you do?',opts:[{t:'Give it its own sentence, as the exception',ok:1,why:'The exception is a key feature.'},{t:'Leave it out',why:'It is a key feature.'},{t:'Include it in the group',why:'It doesn’t belong.'}],sp:'c4-s3'},
 {q:'When should you mention a middle year?',opts:[{t:'For a peak, a dip or a change of order',ok:1,why:'Otherwise, first and last.'},{t:'Always',why:'That makes a list.'},{t:'Never',why:'Sometimes it holds a key feature.'}],sp:'c4-s4'},
 {q:'30% → 52%. Choose the accurate sentence.',opts:[{t:'It rose by 22 percentage points.',ok:1,why:'52 − 30.'},{t:'It rose by 22%.',why:'That would be about 37%.'},{t:'It doubled.',why:'Double would be 60%.'}],sp:'c4-s4'},
 {q:'12% → 35%. In relative terms, the share…',opts:[{t:'almost tripled',ok:1,why:'≈ 2.9 times.'},{t:'doubled',why:'Double would be 24%.'},{t:'quadrupled',why:'That would be 48%.'}],sp:'c4-s4'}
];

const cannow=[['Choose which figures to use and which to leave out','c4-s1'],['Start with the extremes and the order','c4-s2'],['Group rows that changed by similar amounts, with a range','c4-s3'],['Use the middle years only when something happens, and give changes in percentage points','c4-s4'],['Write an overview and a selective body paragraph for a large table','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{renew:C.renew},retrieval,minitest,cannow});
})();
