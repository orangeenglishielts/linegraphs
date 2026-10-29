/* ==========================================================================
   MODULE 1 · CHAPTER 6 · DIAGNOSTIC TASK
   Each step tests one skill area and recommends a module after the activities.
   ACTIVITY IDS (type · level)
     c6-key1    choice    Diagnostic   Step 1  The most important feature   → Module 2
     c6-key2    binary    Diagnostic   Step 1  Key or minor?                 → Module 2
     c6-ov1     choice    Diagnostic   Step 2  The best overview             → Module 3
     c6-ov2     binary    Diagnostic   Step 2  Overview or body?             → Module 3
     c6-data1   choice    Diagnostic   Step 3  Percentage points             → Module 4
     c6-data2   fix       Diagnostic   Step 3  Accurate data language        → Module 4
     c6-trend   choice    Diagnostic   Step 4  Trend language                → Module 5
     c6-comp    choice    Diagnostic   Step 4  Comparison                    → Module 6
     c6-write   write     Diagnostic   Step 5  Write an overview             → Module 3
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,figs,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 6',CT='Diagnostic Task',sp=(id,title,o)=>Object.assign({id,ch:6,chLabel:P,chTitle:CT,title},o);
const rec=(gate,mod,url,name,what)=>`<div data-gate="${gate}" hidden style="margin-top:16px"><div class="oe-insight"><span class="lab">What next?</span>If you got any of these wrong on your first try, ${what} Study <a href="${url}">Module ${mod}: ${name}</a>.</div></div>`;

const spreads=[
opening({n:6,title:CT,lede:'This short diagnostic checks five skills that every Task 1 answer depends on. It takes about 15 minutes. It isn’t a band score: it shows you where to focus, and after each step I’ll recommend the module that will help you most.',
  outcomes:['check how well you find key features','check how well you recognise and write overviews','check your data language and your language for trends and comparisons','get a recommendation for which module to study next'],
  extraLeft:insight('Not a band score','This diagnostic checks selected skills only. It is not an IELTS band score. Answer honestly and without notes, so the recommendations are useful.'),
  illus:illus('check'),
  steps:[[1,'c6-s1','Key features','Recommends Module 2','Discover'],[2,'c6-s2','Overviews','Recommends Module 3','Understand'],[3,'c6-s3','Data language','Recommends Module 4','Understand'],[4,'c6-s4','Trends and comparisons','Recommends Modules 5 and 6','Practise'],[5,'c6-s5','Write an overview','Your results and next steps','Apply'],['R','c6-review','Chapter review','Your results and your drafts','Improve']]}),

sp('c6-s1','Diagnostic 1: key features',{
 left:`${head('Diagnostic 1 · Key features','Task')}<h2>Key features</h2><p>All the diagnostic questions use this graph. Take a minute to read it: the title, the axis, the three lines.</p>${chart('elec')}${note('Answer without looking anything up. Your first answer is the one that counts.')}<div class="clear"></div>`,
 right:`${head('Diagnostic 1 · Questions','Explore')}<div data-act="c6-key1"></div><div data-act="c6-key2" style="margin-top:16px"></div>${rec('c6-key2',2,'../m2-analysing/','Analysing Visual Information','you will benefit from practice in finding and selecting key features.')}`}),

sp('c6-s2','Diagnostic 2: overviews',{
 left:`${head('Diagnostic 2 · Overviews','Task')}<h2>Overviews</h2><p>An overview sums up the main features in a sentence or two, with no detailed figures. Use the graph in Diagnostic 1.</p>${chart('elec2')}`,
 right:`${head('Diagnostic 2 · Questions','Explore')}<div data-act="c6-ov1"></div><div data-act="c6-ov2" style="margin-top:16px"></div>${rec('c6-ov2',3,'../m3-overviews/','Writing Effective Overviews','focus on what an overview includes and leaves out.')}`}),

sp('c6-s3','Diagnostic 3: data language',{
 left:`${head('Diagnostic 3 · Data language','Task')}<h2>Data language</h2><p>Accurate figures, fractions and ${T('percentage points')} are part of Task Achievement and Lexical Resource. Use the graph in Diagnostic 1.</p>${chart('elec3')}`,
 right:`${head('Diagnostic 3 · Questions','Explore')}<div data-act="c6-data1"></div><div data-act="c6-data2" style="margin-top:16px"></div>${rec('c6-data2',4,'../m4-describing-data/','Describing Data Accurately','work on numbers, percentages, proportions and approximation.')}`}),

sp('c6-s4','Diagnostic 4: trends and comparisons',{
 left:`${head('Diagnostic 4 · Trends and comparisons','Task')}<h2>Trends and comparisons</h2><p>Precise verbs of change and accurate comparisons carry much of a Task 1 answer. Use the graph in Diagnostic 1.</p>${chart('elec4')}`,
 right:`${head('Diagnostic 4 · Questions','Explore')}<div data-act="c6-trend"></div>${rec('c6-trend',5,'../m5-trends/','Language for Trends and Change','practise verbs, nouns and adverbs of change.')}<div data-act="c6-comp" style="margin-top:16px"></div>${rec('c6-comp',6,'../m6-comparing/','Comparing and Organising Information','practise comparisons, grouping and paragraph organisation.')}`}),

sp('c6-s5','Diagnostic 5: write an overview',{
 left:`${head('Diagnostic 5 · Writing','Task')}<h2>Write an overview</h2><p>Write an overview of the electricity graph in two sentences. Then check it and compare it with my model.</p>${chart('elec5')}<h3>Your next steps</h3><ul class="clean"><li>Missed key features? <a href="../m2-analysing/">Module 2: Analysing Visual Information</a></li><li>Overview problems? <a href="../m3-overviews/">Module 3: Writing Effective Overviews</a></li><li>Data language? <a href="../m4-describing-data/">Module 4: Describing Data Accurately</a></li><li>Trend language? <a href="../m5-trends/">Module 5: Language for Trends and Change</a></li><li>Comparisons and organisation? <a href="../m6-comparing/">Module 6: Comparing and Organising Information</a></li></ul><p class="small">Then apply the skills to each task type: <a href="../../book/">line graphs</a>, <a href="../bar-charts/">bar charts</a>, <a href="../pie-charts/">pie charts</a>, <a href="../tables/">tables</a>, <a href="../mixed-charts/">mixed charts</a>, <a href="../maps/">maps</a> and <a href="../processes/">processes</a>.</p>`,
 right:`${head('Diagnostic 5 · Writing task','Explore')}<div data-act="c6-write"></div>`}),

review({n:6,title:CT,write:'c6-write',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your overview: two drafts',
  learned:['The diagnostic checked key features, overviews, data language, trends and comparisons.','Each step recommended the module that will help most.','Your results below show which questions you answered correctly first time.','Start with the module linked to your lowest results, then move to the task-type books.']})
];

const acts={
'c6-key1':{type:'choice',level:'Diagnostic',skill:'Key features',decision:'Which is the most important feature of the graph?',
  opts:[{t:'Coal fell from the largest source to the smallest, while renewables rose to become the largest.',ok:1,why:'The main change in the graph: the two lines swap places.'},{t:'Gas was 30% in 2005.',why:'A single figure, not a key feature.'},{t:'The graph covers 25 years.',why:'True, but it isn’t a feature of the data.'}]},
'c6-key2':{type:'binary',level:'Diagnostic',skill:'Key features',decision:'Key feature or minor detail?',labels:['Key feature','Minor detail'],
  items:[{t:'Renewables overtook coal between 2010 and 2015.',a:0,right:'A change of position.',wrong:'A change of position is a key feature.'},
         {t:'Gas was 34% in 2010.',a:1,right:'Right. A single middle figure.',wrong:'One middle figure is a minor detail.'},
         {t:'Gas changed much less than the other two sources.',a:0,right:'The contrast with the other lines.',wrong:'The stability of gas is a key contrast.'},
         {t:'Renewables rose by 3 percentage points between 2000 and 2005.',a:1,right:'Right. A small early detail.',wrong:'A small step within the trend is a detail.'}]},
'c6-ov1':{type:'choice',level:'Diagnostic',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, coal’s share fell dramatically while renewables rose to become the main source, and gas changed relatively little.',ok:1,why:'All three lines, the main change, no figures.'},{t:'Overall, renewables were 57% in 2025.',why:'A figure: body material.'},{t:'Overall, renewable energy is better for the environment.',why:'An opinion, not an overview.'}]},
'c6-ov2':{type:'binary',level:'Diagnostic',skill:'Overviews',decision:'Overview or body paragraph?',labels:['Overview','Body'],
  items:[{t:'Coal went from the largest source to the smallest.',a:0,right:'A main change, no figures.',wrong:'A main change without figures: overview.'},
         {t:'Coal fell from 60% to 8%.',a:1,right:'Figures: body.',wrong:'With figures, this is body material.'},
         {t:'Gas peaked at 38% in 2020.',a:1,right:'A detail with a figure.',wrong:'With figures, this is body material.'}]},
'c6-data1':{type:'choice',level:'Diagnostic',skill:'Data language',decision:'Coal fell from 60% to 40% between 2000 and 2010. Which is accurate?',
  opts:[{t:'Coal’s share fell by 20 percentage points, a third of its 2000 level.',ok:1,why:'60 − 40 = 20 points; 20 is a third of 60.'},{t:'Coal’s share fell by 20%.',why:'The change is 20 percentage points (a fall of a third).'},{t:'Coal’s share halved.',why:'Half of 60 is 30.'}]},
'c6-data2':{type:'fix',level:'Diagnostic',skill:'Data language',decision:'Fix the error in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'In 2025, renewables provided the vast majority of electricity (57%).',ok:/(just over half|more than half|over half|the majority|a majority)/i,bad:/vast majority/i,hint:'57% is a majority, but is it a vast one?',err:'the vast majority',fix:'just over half',why:'“The vast majority” suggests about 80% or more.',model:'In 2025, renewables provided just over half of the country’s electricity (57%).'},
         {wrong:'Coal fell to 8 percents in 2025.',ok:/8\s?(%|per ?cent)/i,bad:/percents/i,hint:'“Per cent” has no plural form.',err:'8 percents',fix:'8% / 8 per cent',why:'Per cent never takes -s.',model:'Coal fell to 8% in 2025.'}]},
'c6-trend':{type:'choice',level:'Diagnostic',skill:'Trend language',decision:'Which sentence describes gas accurately?',
  opts:[{t:'The share from gas rose gradually to a peak of 38% in 2020, before dipping slightly to 35%.',ok:1,why:'Gradual rise, a peak, a slight dip: accurate verbs and adverbs.'},{t:'Gas rose dramatically throughout the period.',why:'It rose gradually, and it fell at the end.'},{t:'Gas remained stable at 25%.',why:'It changed: 25% to 38%, then 35%.'}]},
'c6-comp':{type:'choice',level:'Diagnostic',skill:'Comparison',decision:'Which comparison of 2025 is accurate?',
  opts:[{t:'Renewables provided more than seven times as much electricity as coal.',ok:1,why:'57 ÷ 8 ≈ 7.1.'},{t:'Renewables provided twice as much as gas.',why:'Twice 35 is 70.'},{t:'Coal and gas provided similar shares.',why:'8% and 35% are very different.'}]},
'c6-write':{type:'write',level:'Diagnostic',skill:'Writing an overview',decision:'Write an overview of the graph in two sentences.',prompt:'No figures. Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'You started with “Overall,” or similar.',fix:'Start with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'You included no figures.',fix:'Remove the figures: they belong in the body.',fn:v=>v.ov.trim()&&!/\d/.test(figs(v.ov))},
          {t:'You described coal and renewables.',fix:'Include the main change: coal fell and renewables rose.',fn:v=>/coal/i.test(v.ov)&&/renewable/i.test(v.ov)},
          {t:'You mentioned the change of position.',fix:'Say that renewables became the largest source.',fn:v=>/(overt|largest|main|biggest|replaced|most)/i.test(v.ov)},
          {t:'No opinions.',fix:'Remove words like “better”, “good” or “should”.',fn:v=>!/\b(better|good|bad|should|unfortunately)\b/i.test(v.ov)}],
  modelTitle:'My model overview',
  model:`<p><button type="button" class="hl" data-n="0">Overall, the share of electricity generated from coal fell dramatically, while renewables rose continuously to become the largest source by the end of the period.</button> <button type="button" class="hl" data-n="1">Gas changed far less, rising slightly before falling back a little at the end.</button></p>`,
  notes:['The two main lines and the change of position, without figures.','The third line, described as a contrast.'],
  self:['My overview covers all three sources.','It names the main change.','It has no figures.','It has no opinions.'],revise:1}
};

const gloss={
  'percentage points':{term:'percentage points',def:'The difference between two percentages. From 60% to 40% is a fall of 20 percentage points.',path:'M60,80 V20 H100 V80 M140,80 V40 H180 V80',ex:'“Coal fell by 20 percentage points.”'},
  'diagnostic':{term:'diagnostic',def:'A short test that shows your strengths and the areas to work on. It is not a band score.',path:'M60,50 L100,80 L180,20',ex:'“The diagnostic recommends which module to study.”'}
};

const retrieval={
 'c6-s1':[{q:'Which is a key feature?',opts:[{t:'Renewables overtook coal',ok:1,why:'A change of position.'},{t:'Gas was 30% in 2005',why:'A detail.'}]}],
 'c6-s2':[{q:'An overview contains…',opts:[{t:'main features, no figures',ok:1,why:'Figures go in the body.'},{t:'every figure',why:'No.'}]}],
 'c6-s3':[{q:'40% to 60% is a rise of…',opts:[{t:'20 percentage points',ok:1,why:'60 − 40.'},{t:'20%',why:'Percentage points.'}]}],
 'c6-s4':[{q:'57% compared with 8% is…',opts:[{t:'more than seven times',ok:1,why:'≈ 7.1.'},{t:'twice',why:'No.'}]}],
 'c6-s5':[{q:'Is the diagnostic a band score?',opts:[{t:'No',ok:1,why:'It checks selected skills.'},{t:'Yes',why:'No.'}]}]
};

const minitest=[
 {q:'Which source was largest in 2000?',opts:[{t:'Coal',ok:1,why:'60%.'},{t:'Gas',why:'25%.'},{t:'Renewables',why:'15%.'}],sp:'c6-s1'},
 {q:'When did renewables overtake coal?',opts:[{t:'Between 2010 and 2015',ok:1,why:'26 < 40 in 2010; 36 > 28 in 2015.'},{t:'In 2000',why:'Coal was far ahead.'},{t:'They never did',why:'They did.'}],sp:'c6-s1'},
 {q:'Which overview is best?',opts:[{t:'Overall, renewables replaced coal as the main source.',ok:1,why:'Key feature.'},{t:'Overall, coal was 8% in 2025.',why:'A figure.'},{t:'Overall, coal is dirty.',why:'Opinion.'}],sp:'c6-s2'},
 {q:'57% is…',opts:[{t:'just over half',ok:1,why:'A majority, not a vast one.'},{t:'the vast majority',why:'About 80% or more.'},{t:'about a third',why:'No.'}],sp:'c6-s3'},
 {q:'Choose the correct form.',opts:[{t:'8%',ok:1,why:'No plural.'},{t:'8 percents',why:'No -s.'},{t:'8 per cents',why:'No -s.'}],sp:'c6-s3'},
 {q:'Gas 25% → 38% → 35%. Which verb fits the end?',opts:[{t:'dipped slightly',ok:1,why:'A small fall.'},{t:'plummeted',why:'Too strong.'},{t:'soared',why:'It fell.'}],sp:'c6-s4'},
 {q:'Which module helps with comparisons and paragraph organisation?',opts:[{t:'Module 6',ok:1,why:'Comparing and Organising Information.'},{t:'Module 4',why:'Describing data.'},{t:'Module 2',why:'Analysing visuals.'}],sp:'c6-s4'},
 {q:'Which module helps with overviews?',opts:[{t:'Module 3',ok:1,why:'Writing Effective Overviews.'},{t:'Module 5',why:'Trends.'},{t:'Module 1',why:'Foundations.'}],sp:'c6-s5'}
];

const cannow=[['Find the key features of a graph','c6-s1'],['Recognise a strong overview','c6-s2'],['Use percentage points and proportions accurately','c6-s3'],['Describe trends and comparisons accurately','c6-s4'],['Write an overview and choose what to study next','c6-s5']];
const cp=(id)=>Object.assign({},C.elec,{id});
addChapter({n:6,spreads,acts,gloss,charts:{elec:C.elec,elec2:cp('ch-f1elec2'),elec3:cp('ch-f1elec3'),elec4:cp('ch-f1elec4'),elec5:cp('ch-f1elec5')},retrieval,minitest,cannow});
})();
