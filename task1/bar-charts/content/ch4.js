/* ==========================================================================
   MASTERING BAR CHARTS · CHAPTER 4 · SELECTING AND GROUPING DATA
   ACTIVITY IDS (type · level)
     c4-how     choice    Guided       Step 1  How many figures?
     c4-pick    binary    Supported    Step 1  Worth reporting?
     c4-group   sort      Supported    Step 2  Group the age groups
     c4-gsent   choice    Supported    Step 2  The grouped sentence
     c4-ev1..2  choice    Supported    Step 3  Choose the evidence
     c4-ap      binary    Supported    Step 4  Choose the approximation
     c4-apfix   fix       Independent  Step 4  Fix the approximation
     c4-write   write     Independent  Step 5  Two grouped paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=BAR;
const P='Chapter 4',CT='Selecting and Grouping Data',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'Many bar charts have twelve, fifteen or twenty bars. You can’t report them all, and trying to is a common reason answers lose marks for Task Achievement. In this chapter I’ll show you how to choose the figures that matter and group the rest.',
  outcomes:['decide how many figures to report, and which ones','group categories that behave in the same way','choose figures that prove the point you are making',`round figures accurately with ${T('approximately','approximation')}: just over half, roughly a third`],
  illus:illus([104,88,76,70,60,44],[110,94,82,84,80,68]),
  steps:[[1,'c4-s1','You can’t report every bar','How many figures?','Discover'],[2,'c4-s2','Group the categories','Same pattern, one sentence','Understand'],[3,'c4-s3','Choose your evidence','Figures that prove your point','Understand'],[4,'c4-s4','Round the figures','Just over half, roughly a third','Practise'],[5,'c4-s5','Chapter challenge','Two grouped paragraphs','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','You can’t report every bar',{
 left:`${head('Step 1 · Discover','Learn')}<h2>You can’t report every bar</h2>${vid({title:'Choose what to report',len:'90 seconds',script:['Show the exercise chart: twelve bars. Ask: how many of these figures belong in 150 words?','Say: about eight figures, chosen to support the main points.','Point to the pattern: exercise falls with age, and older groups rose most.','Finish: decide your points first, then choose the figures that prove them.']})}<p>This chart has twelve bars. A good answer reports the pattern and uses about eight figures as evidence, not all twelve in a row.</p>${chart('exer')}<ul class="clean" style="margin-top:10px"><li><b>The main pattern:</b> in both years, older adults were less likely to exercise.</li><li><b>The main change:</b> the figure rose in every age group, but most among the older groups.</li><li><b>The detail that breaks the pattern:</b> in 2020, 45- to 54-year-olds (42%) were slightly more active than 35- to 44-year-olds (41%).</li></ul>${note('Decide your two or three main points first. Then pick the figures that prove each point.')}<div class="clear"></div>${take('Points first, figures second. Report the pattern and the exceptions, with selected figures as evidence.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c4-how"></div><div data-act="c4-pick" style="margin-top:16px"></div>`}),

sp('c4-s2','Group the categories',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Group the categories</h2>${vid({title:'Group the categories',len:'2 minutes',script:['Write the six changes on screen: +3, +3, +3, +7, +10, +12.','Ask: which groups behave the same? The three youngest rose by 3 points each.','Write one sentence for each group instead of six sentences.','Finish: grouping shows the examiner you can see the pattern.']})}<p>When several categories behave in the same way, describe them together. One grouped sentence is clearer than three separate ones.</p><ul class="clean"><li><b>Same change:</b> <i>Among the three youngest age groups, the figure rose by three percentage points in each case.</i></li><li><b>Similar size:</b> <i>The four outer districts were all much cheaper than the centre.</i></li><li><b>The rest:</b> <i>The largest increases were among adults aged 45 and over.</i></li></ul><p>Grouping words: <i>both</i>, <i>all three</i>, <i>each of</i>, <i>in each case</i>, <i>the remaining</i>, <i>the other</i>.</p>${mistake('<s>16 to 24 rose by 3 points. 25 to 34 rose by 3 points. 35 to 44 rose by 3 points.</s> Three sentences with the same message. Group them.')}${take('Find the categories that behave alike and describe them in one sentence. Then deal with the rest.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the exercise chart in Step 1.</p><div data-act="c4-group"></div><div data-act="c4-gsent" style="margin-top:16px"></div>`}),

sp('c4-s3','Choose your evidence',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Choose your evidence</h2><p>Every point you make needs figures that prove it. The best figures are the ones that show the point most clearly, which is often the two ends of a range.</p><div class="oe-insight"><span class="lab">Point and evidence</span><b>Point:</b> exercise became more common in every age group.<br><b>Evidence:</b> even among the over-65s, the least active group, the figure rose from 22% to 34%.</div><ul class="clean" style="margin-top:12px"><li>To prove a <b>pattern</b>, give the two ends: the highest and the lowest.</li><li>To prove a <b>change</b>, give the start and the end.</li><li>To prove a <b>gap</b>, give both figures, or the difference.</li></ul>${note('Figures that don’t support a point are just a list. Every figure should answer the question “so what?”.')}<div class="clear"></div>${take('Make the point, then prove it with the clearest figures: the ends of a range, or the start and end of a change.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the exercise chart in Step 1.</p><div data-act="c4-ev1"></div><div data-act="c4-ev2" style="margin-top:14px"></div>`}),

sp('c4-s4','Round the figures',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Round the figures</h2>${vid({title:'Rounding figures',len:'90 seconds',script:['Write 55%, 47%, 34% and 22% on screen.','Turn each into words: just over half, just under half, about a third, just over one in five.','Show the trap: 47% is just under half, not just over.','Finish: approximations add range, but they must still be accurate.']})}<p>${T('approximately','Approximations')} add variety and show range, but they must be accurate.</p><ul class="clean"><li><b>55%:</b> ${T('just over','just over')} half</li><li><b>47%:</b> just under half</li><li><b>34%:</b> about a third</li><li><b>22%:</b> just over one in five</li><li><b>Numbers:</b> €590,000 → <i>almost €600,000</i> · 248 → <i>roughly 250</i></li></ul>${mistake('<s>Just over half of the 25 to 34 group exercised in 2020 (47%).</s> 47% is <i>just under</i> half. Check the direction.')}<p>Use exact figures for your key evidence and approximations to vary the rest. Don’t write both: <s>around exactly 34%</s>.</p>${take('Approximate in the right direction: just over, just under, about, roughly. Keep exact figures for your key evidence.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-ap"></div><div data-gate="c4-ap" hidden style="margin-top:16px"><div data-act="c4-apfix"></div></div>`}),

sp('c4-s5','Chapter challenge: two grouped paragraphs',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the two body paragraphs for this task. Group the six districts into two groups, and use only the figures that prove your points.</p>${taskbox('The chart below shows the average price of a flat in six districts of one city in 2015 and 2025.')}${chart('flats')}${note('Look for two groups: districts that were expensive and rose fast, and districts that were cheaper and rose slowly.')}<ul class="clean" style="font-size:15px"><li>Paragraph 1: the expensive group.</li><li>Paragraph 2: the cheaper group.</li><li>Grouping words and a range: between €30,000 and €40,000.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Decide your main points first, then choose the figures that prove them: usually eight to twelve, never every figure on a large chart.','Group categories that behave in the same way, and describe them in one sentence.','Prove a pattern with the two ends of a range, and a change with the start and the end.','Approximate in the right direction: just over, just under, about, roughly.','Keep exact figures for your key evidence.']})
];

const acts={
'c4-how':{type:'choice',level:'Guided',skill:'How many figures?',decision:'The exercise chart has twelve bars. How many figures should a 150 to 200-word answer include?',
  opts:[{t:'About eight, chosen to support the main points',ok:1,why:'Enough to prove each point, not so many that the answer becomes a list.'},{t:'All twelve, in order from left to right',why:'Twelve figures in a row is a list. The examiner wants selection and comparison.'},{t:'None: figures are for the overview',why:'The overview has no figures. The body paragraphs need them as evidence.'}]},
'c4-pick':{type:'binary',level:'Supported',skill:'Selecting',decision:'Is this worth reporting?',prompt:'Decide for each detail from the exercise chart.',labels:['Report it','Leave it out'],
  items:[{t:'In both years, the figure fell steadily with age, from the youngest group to the oldest.',a:1,right:'Right: “steadily” is not accurate. In 2020, 45- to 54-year-olds (42%) were slightly more active than 35- to 44-year-olds (41%). Say “generally fell with age”.',wrong:'Check 2020: 41% for 35 to 44, then 42% for 45 to 54. The figure didn’t fall steadily, so this sentence is inaccurate. Say “generally fell with age”.'},
         {t:'Every age group was more active in 2020 than in 2010.',a:0,right:'A key change: all six groups rose.',wrong:'This is a key feature: all six groups rose between 2010 and 2020.'},
         {t:'The figure for the over-65s rose the most, by 12 percentage points.',a:0,right:'The biggest change is always worth reporting.',wrong:'The biggest change (22% to 34%) is a key feature.'},
         {t:'The figure for the 25 to 34 group was 44% in 2010.',a:1,right:'On its own, this figure proves nothing. It only matters as part of a pattern.',wrong:'A single figure without a point is a list item. Group it with the other young groups instead.'},
         {t:'The gap between the youngest and oldest groups narrowed from 30 to 21 percentage points.',a:0,right:'A gap that changes is a key comparison.',wrong:'This is a key comparison: 52 − 22 = 30, and 55 − 34 = 21.'}]},
'c4-group':{type:'sort',level:'Supported',skill:'Grouping',decision:'Sort each age group by how much it changed.',prompt:'Calculate the change from 2010 to 2020 for each one.',cats:['Small rise (3 points)','Larger rise (7 points or more)'],
  items:[{w:'16–24',c:0,m:'rose from 52% to 55%: 3 points.'},{w:'25–34',c:0,m:'rose from 44% to 47%: 3 points.'},{w:'35–44',c:0,m:'rose from 38% to 41%: 3 points.'},{w:'45–54',c:1,m:'rose from 35% to 42%: 7 points.'},{w:'55–64',c:1,m:'rose from 30% to 40%: 10 points.'},{w:'65+',c:1,m:'rose from 22% to 34%: 12 points.'}]},
'c4-gsent':{type:'choice',level:'Supported',skill:'The grouped sentence',decision:'Which sentence groups the data best?',
  opts:[{t:'Among the three youngest age groups, the figure rose by three percentage points in each case, whereas the increases among those aged 45 and over were far larger, at between 7 and 12 points.',ok:1,why:'Two groups in one sentence, with the evidence for each: 3 points, and a range of 7 to 12.'},
        {t:'The 16 to 24 group rose by 3 points, the 25 to 34 group rose by 3 points, and the 35 to 44 group rose by 3 points.',why:'Accurate, but three clauses with the same message. Group them: “in each case”.'},
        {t:'All the groups rose by about the same amount.',why:'Not accurate: 3 points for the youngest groups, up to 12 for the over-65s.'}]},
'c4-ev1':{type:'choice',level:'Supported',skill:'Evidence for a pattern',decision:'Point: exercise became more common in every age group. Which evidence proves it best?',
  opts:[{t:'Even among the least active group, the over-65s, the figure rose from 22% to 34%, while the most active group rose from 52% to 55%.',ok:1,why:'The two ends of the range: if both the most and least active groups rose, the point is proved.'},
        {t:'In 2020, 47% of 25- to 34-year-olds exercised.',why:'One figure from one year can’t prove a change in every group.'},
        {t:'The bars for 2020 are higher than the bars for 2010.',why:'This describes the picture. Give figures.'}]},
'c4-ev2':{type:'choice',level:'Supported',skill:'Evidence for a gap',decision:'Point: the gap between the youngest and oldest groups narrowed. Which evidence proves it?',
  opts:[{t:'It fell from 30 percentage points in 2010 (52% against 22%) to 21 points in 2020 (55% against 34%).',ok:1,why:'Both gaps, with the figures they come from. The reader can check them.'},
        {t:'The oldest group rose by 12 points.',why:'This shows one group changed, but not what happened to the gap.'},
        {t:'Older people became much more active.',why:'No figures, so nothing is proved.'}]},
'c4-ap':{type:'binary',level:'Supported',skill:'Approximation',decision:'Choose the accurate approximation for each figure.',labels:['just over half','just under half','about a third','just over one in five'],
  items:[{t:'55% of 16- to 24-year-olds (2020)',a:0,right:'55% is a little more than 50%.',wrong:'55% is a little more than half: just over half.'},
         {t:'47% of 25- to 34-year-olds (2020)',a:1,right:'47% is a little less than 50%.',wrong:'47% is below 50%, so it is just under half.'},
         {t:'34% of the over-65s (2020)',a:2,right:'34% is close to 33.3%.',wrong:'34% is very close to a third (33.3%).'},
         {t:'22% of the over-65s (2010)',a:3,right:'One in five is 20%, so 22% is just over.',wrong:'22% is a little more than 20%: just over one in five.'}]},
'c4-apfix':{type:'fix',level:'Independent',skill:'Fixing approximations',decision:'Fix the approximation in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Just over half of the 25 to 34 group exercised in 2020 (47%).',ok:/(just|slightly) (under|below) half|nearly half|almost half/i,bad:/just over half/i,hint:'47% is below 50%.',err:'just over half (47%)',fix:'just under half',why:'47% is below 50%, so it is just under half.',model:'Just under half of the 25 to 34 group exercised in 2020 (47%).'},
         {wrong:'About a quarter of the over-65s exercised in 2020 (34%).',ok:/(about|around|roughly|approximately) (a|one) third/i,bad:/quarter/i,hint:'34% is very close to 33.3%.',err:'about a quarter (34%)',fix:'about a third',why:'34% is close to a third, not a quarter (25%).',model:'About a third of the over-65s exercised in 2020 (34%).'},
         {wrong:'Flats in Harbour cost around exactly €590,000 in 2025.',ok:/(almost|nearly|just under|around|about|roughly) €?\s?600,?000|exactly|€590,?000/i,bad:/around exactly|about exactly/i,hint:'Choose one: an exact figure or an approximation, not both.',err:'around exactly €590,000',fix:'almost €600,000 (or exactly €590,000)',why:'“Around” and “exactly” contradict each other.',model:'Flats in Harbour cost almost €600,000 in 2025.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Grouped body paragraphs',decision:'Write two body paragraphs about the flat prices.',prompt:'One paragraph for each group of districts. Then check your writing.',
  fields:[{k:'p1',label:'Body paragraph 1: the expensive districts',rows:5,ph:'The two central districts…'},{k:'p2',label:'Body paragraph 2: the cheaper districts',rows:5,ph:'Prices in the four outer districts…'}],
  checks:[{t:'Paragraph 1 is about the Centre and Harbour.',fix:'Make paragraph 1 about the two expensive districts: the Centre and Harbour.',fn:v=>/centre/i.test(v.p1)&&/harbour/i.test(v.p1)},
          {t:'Paragraph 2 groups the four outer districts.',fix:'Group the other four in paragraph 2: North, South, East and West (or “the four outer districts”).',fn:v=>/(four|other|remaining|outer|rest)/i.test(v.p2)},
          {t:'You used grouping words.',fix:'Use grouping words: both, all four, each of, in each case.',fn:v=>/\b(both|all four|each|all of|in each case|the two|the four)\b/i.test(v.p1+' '+v.p2)},
          {t:'You gave prices with the € sign or “euros”.',fix:'Give prices with their unit: €610,000.',fn:v=>/(€|euro)/i.test(v.p1+' '+v.p2)},
          {t:'You wrote the full amount, not the axis number.',fix:'The axis is in thousands: write €610,000, not €610.',fn:v=>!/€\s?\d{3}(?![\d,.]| ?(000|thousand|k))/i.test(v.p1+' '+v.p2)},
          {t:'Paragraph 2 summarises the four districts with a range or an approximation.',fix:'Summarise the four cheaper districts with a range: rose by between €30,000 and €40,000.',fn:v=>/(between|around|about|roughly|approximately|just|range|from €?\d+,?\d* to)/i.test(v.p2)},
          {t:'You compared the speed of the rises.',fix:'Compare the two groups: prices in the centre rose much faster than in the outer districts.',fn:v=>/(faster|more slowly|far more|much more|modest|slower|smaller|larger|bigger|sharply|steeply)/i.test(v.p1+' '+v.p2)}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="0">The two central districts were by far the most expensive</button> places to buy a flat. In the Centre, the average price rose from €420,000 in 2015 to €610,000 in 2025, <button type="button" class="hl" data-n="1">while prices in Harbour climbed even faster</button>, from €380,000 to €590,000, <button type="button" class="hl" data-n="2">so the gap between them narrowed to just €20,000</button>.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">Prices in the four outer districts were much lower and rose far more modestly.</button> <button type="button" class="hl" data-n="4">In each of North, South, East and West, the average price increased by between €30,000 and €40,000</button>, to <button type="button" class="hl" data-n="5">between €220,000 and €260,000</button> in 2025.</p>`,
  notes:['The first sentence of each paragraph states the group and its point. The figures follow as evidence.','Harbour rose by €210,000, more than the Centre’s €190,000, so “even faster” is accurate.','I calculated the gap: €40,000 in 2015 and €20,000 in 2025. A changing gap is worth reporting.','The topic sentence for the second group: lower prices, slower growth.','One sentence covers four districts. “In each of” and a range replace eight separate figures.','A range for the end prices: East was the lowest at €220,000 and West the highest at €260,000.'],
  self:['Each paragraph is about one group, with a clear first sentence.','I used grouping words and a range instead of listing every district.','I wrote full amounts with €, not the axis numbers.','Every figure I used proves a point.'],revise:1}
};

const gloss={
  'approximately':{term:'approximately',def:'Close to, but not exactly. Also: about, around, roughly. Use it to round a figure in the right direction.',path:'M40,80 V30 H80 V80 M120,80 V34 H160 V80',ex:'“Approximately a third of the over-65s exercised in 2020.”'},
  'just over':{term:'just over / just under',def:'A little more than, or a little less than. 55% is just over half; 47% is just under half.',path:'M60,80 V36 H100 V80 M20,40 H220',ex:'“Just under half of 25- to 34-year-olds exercised regularly.”'},
  'range':{term:'a range',def:'The lowest and highest figure for a group: between €220,000 and €260,000. It summarises several figures at once.',path:'M30,80 V52 H55 V80 M80,80 V40 H105 V80 M130,80 V46 H155 V80 M180,80 V44 H205 V80',ex:'“Prices rose by between €30,000 and €40,000 in each of the four outer districts.”'},
  'in each case':{term:'in each case',def:'For every item in a group. It lets one sentence describe several categories that behaved the same way.',path:'M30,80 V50 H50 V80 M52,80 V44 H72 V80 M100,80 V54 H120 V80 M122,80 V48 H142 V80 M170,80 V60 H190 V80 M192,80 V54 H212 V80',ex:'“The figure rose by three percentage points in each case.”'}
};

const retrieval={
 'c4-s1':[{q:'How many figures suit a 150 to 200-word answer?',opts:[{t:'About eight to twelve',ok:1,why:'Enough to prove each point.'},{t:'Every figure on the chart',why:'That becomes a list.'}]}],
 'c4-s2':[{q:'Three groups each rose by 3 points. What do you write?',opts:[{t:'One grouped sentence: “in each case”',ok:1,why:'Group what behaves alike.'},{t:'Three separate sentences',why:'Same message three times.'}]}],
 'c4-s3':[{q:'To prove a pattern, which figures are best?',opts:[{t:'The two ends of the range',ok:1,why:'Highest and lowest.'},{t:'Any one figure',why:'One figure can’t show a pattern.'}]}],
 'c4-s4':[{q:'47% is…',opts:[{t:'just under half',ok:1,why:'Below 50%.'},{t:'just over half',why:'That would be above 50%.'}]},{q:'34% is about…',opts:[{t:'a third',ok:1,why:'33.3%.'},{t:'a quarter',why:'25%.'}]}],
 'c4-s5':[{q:'How should you organise six districts in two paragraphs?',opts:[{t:'By group: similar districts together',ok:1,why:'One group per paragraph.'},{t:'Three districts per paragraph, in chart order',why:'Chart order isn’t a pattern.'}]}]
};

const minitest=[
 {q:'A chart has eighteen bars. What should your answer do?',opts:[{t:'Report the main patterns with selected figures',ok:1,why:'About eight to twelve figures as evidence.'},{t:'Report all eighteen figures',why:'That is a list.'},{t:'Report only the overview',why:'The body needs figures.'}],sp:'c4-s1'},
 {q:'Which detail is least worth reporting on its own?',opts:[{t:'The figure for the 25 to 34 group was 44% in 2010.',ok:1,why:'One figure with no point.'},{t:'Every age group was more active in 2020.',why:'A key change.'},{t:'The figure for the over-65s rose the most.',why:'The biggest change.'}],sp:'c4-s1'},
 {q:'Three age groups each rose by 3 points. Which sentence is best?',opts:[{t:'The figure rose by three percentage points in each case.',ok:1,why:'One grouped sentence.'},{t:'Each group rose by 3% each.',why:'Repetition, and these are percentage points.'},{t:'They all rose a lot.',why:'Vague and inaccurate.'}],sp:'c4-s2'},
 {q:'Which is a grouping phrase?',opts:[{t:'all four outer districts',ok:1,why:'It covers four categories at once.'},{t:'the bar on the left',why:'That describes the picture.'},{t:'firstly',why:'A sequence word, not a grouping word.'}],sp:'c4-s2'},
 {q:'Point: the gap narrowed. Which evidence proves it?',opts:[{t:'From 30 points in 2010 to 21 points in 2020',ok:1,why:'Both gaps.'},{t:'The oldest group rose by 12 points',why:'That doesn’t show the gap.'},{t:'Older people became more active',why:'No figures.'}],sp:'c4-s3'},
 {q:'55% is…',opts:[{t:'just over half',ok:1,why:'A little more than 50%.'},{t:'just under half',why:'That would be below 50%.'},{t:'about a third',why:'A third is 33%.'}],sp:'c4-s4'},
 {q:'22% is…',opts:[{t:'just over one in five',ok:1,why:'One in five is 20%.'},{t:'about a third',why:'A third is 33%.'},{t:'nearly half',why:'Half is 50%.'}],sp:'c4-s4'},
 {q:'Which is correct?',opts:[{t:'almost €600,000',ok:1,why:'An approximation for €590,000.'},{t:'around exactly €590,000',why:'“Around” and “exactly” contradict each other.'},{t:'€590',why:'The axis is in thousands.'}],sp:'c4-s4'}
];

const cannow=[['Choose the figures that support your main points','c4-s1'],['Group categories that behave in the same way in one sentence','c4-s2'],['Prove a point with the clearest figures','c4-s3'],['Round figures accurately: just over, just under, about a third','c4-s4'],['Write two body paragraphs organised by group','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{exer:C.exer,flats:C.flats},retrieval,minitest,cannow});
})();
