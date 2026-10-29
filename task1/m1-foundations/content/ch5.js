/* ==========================================================================
   MODULE 1 · CHAPTER 5 · BAND 6 AND BAND 7 COMPARED
   ACTIVITY IDS (type · level)
     c5-feat    sort      Guided       Step 1  Typical of which band?
     c5-ov      choice    Supported    Step 2  The stronger overview
     c5-ovw     binary    Supported    Step 2  What is wrong?
     c5-data    choice    Supported    Step 3  The stronger body sentence
     c5-acc     binary    Supported    Step 3  Accurate or not?
     c5-build   builder   Supported    Step 4  Upgrade a sentence
     c5-fix     fix       Independent  Step 4  Fix the Band 6 errors
     c5-write   write     Independent  Step 5  Upgrade a paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 5',CT='Band 6 and Band 7 Compared',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const B6='In 2010 the car was the most popular with 40%. In 2025 it go down to 22%. The bicycle was 15% and then it was 30%, so it increase a lot, while bus stayed almost same, at 30% and 28%. Walking was 10% and train was 5%, in 2025 they were 14% and 6%.';

const spreads=[
opening({n:5,title:CT,lede:'Many of my students sit just below their target band: a 6 that needs to become a 7. The difference is rarely about long words. It is about a clear overview, accurate selection and controlled language. In this chapter I’ll show you the difference on one chart, sentence by sentence.',
  outcomes:['describe what typically separates a Band 6 answer from a Band 7 answer','write an overview that identifies the key features clearly','select and report data accurately, with comparisons','upgrade a Band 6 paragraph by fixing errors and adding '+T('precision')],
  extraLeft:insight('Bands are indicative','The bands in this chapter are a guide to what examiners typically look for. Only an official test gives you a band score, and no course can promise one.'),
  illus:illus('bands'),
  steps:[[1,'c5-s1','What examiners look for','Band 6 and Band 7','Discover'],[2,'c5-s2','The overview','Clear key features','Understand'],[3,'c5-s3','The data','Selected and accurate','Understand'],[4,'c5-s4','The language','Precise and controlled','Practise'],[5,'c5-s5','Chapter challenge','Upgrade a paragraph','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','What examiners look for',{
 left:`${head('Step 1 · Discover','Learn')}<h2>What examiners look for</h2>${vid({title:'Band 6 and Band 7',len:'2 minutes',script:['Show two answers to the same pie charts side by side.','Point to the overview: Band 6 has one, but it is vague. Band 7 picks out the key change.','Point to the data: Band 6 covers the features, less precisely; Band 7 selects and compares.','Point to the language: at Band 6, errors are noticeable but rarely get in the way of meaning; Band 7 is mostly accurate and more precise.']})}<p>In my experience, these differences appear again and again. In my own words:</p><ul class="clean"><li><b>Overview:</b> a typical Band 6 answer has an overview, but it may be vague. A Band 7 answer has a clear overview of the main trends or differences.</li><li><b>Key features:</b> at Band 6, key features are covered adequately, but some details may be irrelevant, inaccurate or missing. At Band 7, key features are covered and clearly highlighted.</li><li><b>Language:</b> at Band 6, errors are noticeable but rarely get in the way of meaning. At Band 7, many sentences are error-free and the language is more precise.</li></ul>${chart('uni')}${take('Band 7 is clearer, more selective and more accurate, not more complicated.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c5-feat"></div>`}),

sp('c5-s2','The overview',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The overview</h2>${vid({title:'Two overviews',len:'90 seconds',script:['Read the Band 6 overview: Overall, there were some changes in how students travelled.','Ask: which changes? It is too vague.','Read the Band 7 overview: the bicycle replaced the car as the most common way of travelling.','Say: name the key feature.']})}${insight('More typical of Band 6','Overall, there were some changes in how students travelled to the university.')}${insight('More typical of Band 7','Overall, the bicycle replaced the car as the most common way of travelling to the university, while the shares for the other methods changed relatively little.')}<p>The second overview names the key features: a change at the top, and stability elsewhere.</p>${take('A strong overview names the key features. “Some changes” tells the reader nothing.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the pie charts in Step 1.</p><div data-act="c5-ov"></div><div data-act="c5-ovw" style="margin-top:16px"></div>`}),

sp('c5-s3','The data',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The data</h2><p>Band 6 answers often list figures. Band 7 answers select them and show how they relate:</p>${insight('More typical of Band 6','The bicycle was 15% and then it was 30%.')}${insight('More typical of Band 7','The proportion of students who cycled doubled from 15% to 30%, making the bicycle the most popular choice.')}<p>The second sentence calculates (doubled), compares (the most popular) and uses accurate share language (the proportion of students who cycled).</p>${mistake('<s>The bicycle increased by 15%.</s> From 15% to 30% is a rise of 15 percentage points, and the bicycle didn’t increase: its share did.')}${take('Select, calculate, compare. Write about shares, not things.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the pie charts in Step 1.</p><div data-act="c5-data"></div><div data-act="c5-acc" style="margin-top:16px"></div>`}),

sp('c5-s4','The language',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The language</h2><p>Language at Band 7 is not about rare words. It is about ${T('precision')} and control:</p><ul class="clean"><li><b>Precise verbs:</b> <i>fell, doubled, remained almost unchanged</i> instead of <i>go down, increase a lot</i>.</li><li><b>Accurate grammar:</b> past tenses for past years; <i>it fell</i>, not <i>it go down</i>.</li><li><b>Varied structures:</b> a participle clause (<i>making the bicycle the most popular choice</i>) or a contrast (<i>while</i>).</li></ul>${take('Precise verbs, accurate tenses, and one or two varied structures you can control.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c5-build"></div><div data-gate="c5-build" hidden style="margin-top:16px"><div data-act="c5-fix"></div></div>`}),

sp('c5-s5','Chapter challenge: upgrade a paragraph',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>This body paragraph is more typical of Band 6. Rewrite it so that it selects, compares and uses accurate, precise language.</p><div class="oe-insight"><span class="lab">More typical of Band 6</span>${B6}</div>${chart('uni2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Band 7 is clearer, more selective and more accurate, not more complicated.','A strong overview names the key features.','Select, calculate and compare; write about shares, not things.','Precise verbs, accurate tenses and controlled variety.']})
];

const acts={
'c5-feat':{type:'sort',level:'Guided',skill:'Band features',decision:'More typical of Band 6 or Band 7?',cats:['More typical of Band 6','More typical of Band 7'],
  items:[{w:'An overview that says “there were some changes”.',c:0,m:'vague.'},{w:'An overview that names the change at the top.',c:1,m:'clear key feature.'},{w:'Key features covered, but some details inaccurate or missing.',c:0,m:'adequate, not yet precise.'},{w:'Key figures selected and compared.',c:1,m:'highlighted features.'},{w:'Some grammar errors, for example with tenses, though the meaning stays clear.',c:0,m:'errors that rarely block meaning.'},{w:'Mostly accurate sentences with some variety.',c:1,m:'controlled range.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which overview is more typical of Band 7?',
  opts:[{t:'Overall, cycling overtook driving as the most common way of getting to the university, while the other methods changed relatively little.',ok:1,why:'It names the key features without figures.'},{t:'Overall, there were changes in transport.',why:'Too vague to be useful.'},{t:'Overall, the car fell from 40% to 22%.',why:'A detail with figures, and only one method.'}]},
'c5-ovw':{type:'binary',level:'Supported',skill:'Overviews',decision:'Is each overview acceptable?',labels:['Acceptable','Not acceptable'],
  items:[{t:'Overall, the bicycle replaced the car as the most popular choice.',a:0,right:'A clear key feature.',wrong:'It names the main change: acceptable.'},
         {t:'Overall, students should cycle more.',a:1,right:'Right. An opinion.',wrong:'This is an opinion, not an overview.'},
         {t:'Overall, the bus was 30% in 2010.',a:1,right:'Right. A detail with a figure.',wrong:'A figure is a detail, not an overview.'},
         {t:'Overall, the share of students driving fell sharply, while cycling became the most common method.',a:0,right:'Two key features, no figures.',wrong:'It names two key features: acceptable.'}]},
'c5-data':{type:'choice',level:'Supported',skill:'Reporting data',decision:'Which body sentence is more typical of Band 7?',
  opts:[{t:'The share of students who drove fell from 40% to 22%, so the car lost its place as the most common choice.',ok:1,why:'Accurate share language with a comparison.'},{t:'The car was 40% and 22%.',why:'A list without comparison.'},{t:'The cars decreased by 18%.',why:'The share fell by 18 percentage points; the cars didn’t decrease.'}]},
'c5-acc':{type:'binary',level:'Supported',skill:'Accuracy',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'The proportion of students who cycled doubled.',a:0,right:'15% to 30%.',wrong:'It is accurate: 15% doubled to 30%.'},
         {t:'The bus became the most popular method in 2025.',a:1,right:'Right. The bicycle was (30% against 28%).',wrong:'Cycling (30%) was ahead of the bus (28%).'},
         {t:'The share travelling by train was almost unchanged.',a:0,right:'5% to 6%.',wrong:'It is accurate: only 1 percentage point.'},
         {t:'The car’s share halved.',a:1,right:'Right. 40% to 22% is a fall of just under half.',wrong:'Half of 40 is 20; 22 is close, but “halved” is not accurate.'}]},
'c5-build':{type:'builder',level:'Supported',skill:'Upgrading a sentence',decision:'Upgrade “The bicycle was 15% and then it was 30%.”',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['The proportion of students who cycled','doubled','from 15% to 30%,','making the bicycle','the most popular choice.'],
  distract:[{t:'increase a lot',why:'Imprecise, and the wrong form: doubled.',fix:'doubled'},{t:'by 15%',why:'The change is 15 percentage points, and “doubled” already says it.',fix:'from 15% to 30%,'}],
  right:'A share as the subject, a precise verb, the figures and a participle clause.',orderMsg:'All the right pieces, but check the order: the subject, the verb, the figures, then the result.',incompleteMsg:'Good so far, but incomplete. Add what it made the bicycle.'},
'c5-fix':{type:'fix',level:'Independent',skill:'Grammar',decision:'Fix the Band 6 errors.',prompt:'Type your correction and press Check.',
  items:[{wrong:'In 2025 it go down to 22%.',ok:/(fell|dropped|declined|decreased|had fallen) to 22/i,bad:/go down/i,hint:'Past year, past tense, and a precise verb.',err:'go down',fix:'fell',why:'Past data needs the past simple; “fell” is precise.',model:'In 2025, it fell to 22%.'},
         {wrong:'The bicycle was 15% and then it was 30%, so it increase a lot.',ok:/doubled/i,bad:/increase a lot/i,hint:'Calculate: 15 to 30.',err:'increase a lot',fix:'doubled',why:'“Doubled” is precise and in the past tense.',model:'The share of students who cycled doubled from 15% to 30%.'}]},
'c5-write':{type:'write',level:'Independent',skill:'Upgrading a paragraph',decision:'Rewrite the Band 6 paragraph.',prompt:'Keep the facts; improve the selection, comparison and language. Then check your writing.',
  fields:[{k:'a',label:'My upgraded paragraph',rows:8,ph:'In 2010, the car was…'}],
  checks:[{t:'You used the past tense accurately.',fix:'Replace “go down” and “increase” with past forms such as fell and rose.',fn:v=>v.a.trim()&&!/\b(go down|it increase|they increase)\b/i.test(v.a)},
          {t:'You calculated a change.',fix:'Add a calculation: the cycling share doubled.',fn:v=>/(doubled|twice|half|percentage points)/i.test(v.a)},
          {t:'You wrote about shares.',fix:'Use share, proportion or percentage of students.',fn:v=>/(share|proportion|percentage of students|% of students)/i.test(v.a)},
          {t:'You compared methods.',fix:'Compare: the bicycle became the most popular choice.',fn:v=>/(most popular|most common|overtook|replaced|ahead of)/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p>In 2010, the car was the most common way of getting to the university, used by 40% of students. By 2025, however, <button type="button" class="hl" data-n="0">its share had fallen to 22%</button>. Cycling followed the opposite pattern: <button type="button" class="hl" data-n="1">the proportion of students who cycled doubled from 15% to 30%</button>, making the bicycle the most popular choice. <button type="button" class="hl" data-n="2">The share travelling by bus fell only slightly</button>, from 30% to 28%, while walking and the train each gained a little, rising to 14% and 6% respectively.</p>`,
  notes:['Past perfect with “by 2025”, and “share” as the subject.','A calculation (doubled) and a comparison (the most popular choice).','Precise language for a small change: fell only slightly.'],
  self:['I kept every fact accurate.','I selected and compared, rather than listing.','I used past tenses accurately.','I wrote about shares.'],revise:1}
};

const gloss={
  'precision':{term:'precision',def:'Choosing the word that fits the data exactly: doubled rather than increased a lot.',path:'M120,45 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0 M120,45 m-12,0 a12,12 0 1,0 24,0 a12,12 0 1,0 -24,0',ex:'“The share doubled.”'},
  'respectively':{term:'respectively',def:'In the same order as the items just mentioned.',path:'M40,80 V40 H90 V80 M150,80 V50 H200 V80',ex:'“Walking and the train rose to 14% and 6% respectively.”'},
  'indicative':{term:'indicative',def:'A guide, not a guarantee. Bands in a course are indicative; only an official test gives a score.',path:'M20,60 H220 M120,30 V90',ex:'“These bands are indicative.”'}
};

const retrieval={
 'c5-s1':[{q:'What separates Band 7 from Band 6 most often?',opts:[{t:'Clarity, selection and accuracy',ok:1,why:'Not long words.'},{t:'Rare vocabulary',why:'Precision matters more.'}]}],
 'c5-s2':[{q:'“Overall, there were some changes.” Is this strong?',opts:[{t:'No: too vague',ok:1,why:'Name the key features.'},{t:'Yes',why:'Which changes?'}]}],
 'c5-s3':[{q:'15% to 30% is…',opts:[{t:'a doubling',ok:1,why:'Twice.'},{t:'a rise of 15%',why:'15 percentage points.'}]}],
 'c5-s4':[{q:'Which is more precise?',opts:[{t:'fell',ok:1,why:'Accurate past verb.'},{t:'go down',why:'Wrong tense, less precise.'}]}],
 'c5-s5':[{q:'Which method was most popular in 2025?',opts:[{t:'Bicycle',ok:1,why:'30%.'},{t:'Bus',why:'28%.'}]}]
};

const minitest=[
 {q:'Can a course guarantee a band score?',opts:[{t:'No: bands in a course are indicative',ok:1,why:'Only the test gives a score.'},{t:'Yes',why:'No one can.'},{t:'Only for Task 1',why:'No.'}],sp:'c5-s1'},
 {q:'Which is more typical of Band 7?',opts:[{t:'Key features selected and compared',ok:1,why:'Highlighted.'},{t:'Every figure listed',why:'Mechanical listing is a weaker, Band 5 pattern.'},{t:'Long, rare words with errors',why:'Errors cost marks.'}],sp:'c5-s1'},
 {q:'Which overview is strongest?',opts:[{t:'Overall, cycling replaced driving as the most common method.',ok:1,why:'A key feature.'},{t:'Overall, there were some changes.',why:'Vague.'},{t:'Overall, the bus was 28%.',why:'A figure.'}],sp:'c5-s2'},
 {q:'40% to 22% is…',opts:[{t:'a fall of 18 percentage points',ok:1,why:'40 − 22.'},{t:'exactly half',why:'Half is 20.'},{t:'a fall of 18%',why:'Percentage points.'}],sp:'c5-s3'},
 {q:'Which sentence writes about shares?',opts:[{t:'The share of students who drove fell.',ok:1,why:'A share.'},{t:'The cars fell.',why:'Things don’t fall here.'},{t:'Fewer cars were sold.',why:'Not on the chart.'}],sp:'c5-s3'},
 {q:'“In 2025 it go down.” What is the main problem?',opts:[{t:'Tense: it fell',ok:1,why:'Past year, past tense.'},{t:'Spelling',why:'Spelling is fine.'},{t:'Nothing',why:'Check the verb.'}],sp:'c5-s4'},
 {q:'Which shows controlled variety?',opts:[{t:'…, making the bicycle the most popular choice.',ok:1,why:'A participle clause.'},{t:'It was 15%. It was 30%.',why:'No variety.'},{t:'It was going upping.',why:'Errors.'}],sp:'c5-s4'},
 {q:'Walking 10% → 14%, train 5% → 6%. Which is accurate?',opts:[{t:'Both gained a little.',ok:1,why:'+4 and +1.'},{t:'Both doubled.',why:'No.'},{t:'Both fell.',why:'They rose.'}],sp:'c5-s5'}
];

const cannow=[['Describe what separates Band 6 from Band 7','c5-s1'],['Write an overview that names the key features','c5-s2'],['Select and compare data accurately','c5-s3'],['Use precise, controlled language','c5-s4'],['Upgrade a Band 6 paragraph','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{uni:C.uni,uni2:Object.assign({},C.uni,{id:'ch-f1uni2'})},retrieval,minitest,cannow});
})();
