/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-org     sort      Supported    Step 4  Which structure?
     c5-gap     choice    Supported    Step 4  The gap between the lines
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The line graph shows the percentage of adults in one country who owned a smartphone between 2010 and 2025, by age group, and the pie chart shows what smartphone owners mainly used their phones for in 2025';

const spreads=[
opening({n:5,title:CT,lede:'A mixed-chart answer has the same four parts as any Task 1 answer. The difference is in the body: usually one paragraph for each chart, linked together. In this chapter I’ll show you the standard structure, when to change it, and you’ll write a complete answer of your own.',
  outcomes:['use the four-part shape for two charts','paraphrase a two-part task in one sentence','write an overview with a key feature from each chart',`choose between one paragraph per chart and grouping by ${T('category')}`],
  illus:illus('line','pie'),
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','Two charts, one sentence','Understand'],[3,'c5-s3','The overview','One feature from each','Understand'],[4,'c5-s4','The body paragraphs','One per chart, or by category','Practise'],[5,'c5-s5','Chapter challenge','A complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four boxes: introduction, overview, body 1, body 2.','Label body 1 “chart 1” and body 2 “chart 2”.','Draw an arrow from body 2 back to body 1: the link.','Finish: same shape as always, one chart per body paragraph.']})}<ul class="clean"><li><b>Introduction:</b> one sentence naming both charts.</li><li><b>Overview:</b> a key feature from each chart, no figures.</li><li><b>Body 1:</b> the first chart, with figures.</li><li><b>Body 2:</b> the second chart, with figures, starting with a link to the first.</li></ul>${chart('phone')}${chart('puse')}${take('Introduction, overview, one body paragraph per chart. The second body paragraph links back to the first.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'The introduction',len:'90 seconds',script:['Show the long task sentence. Split it where the second chart begins: “, and the pie chart”.','Paraphrase half one: the line graph compares the proportion of younger and older adults who had a smartphone.','Paraphrase half two: the pie chart illustrates the main purpose for which owners used their phones.','Join with “while”.']})}<p>A two-chart task sentence is long. Split it in two where the second chart begins, paraphrase each half, and join them with <i>while</i>.</p>${taskbox(TASK+'.')}<ul class="clean"><li><b>Half 1:</b> the percentage of adults who owned a smartphone, by age group → <i>the proportion of younger and older adults who had a smartphone</i></li><li><b>Half 2:</b> what owners mainly used their phones for → <i>the main purpose for which owners used their phones</i></li></ul>${mistake('<s>The line graph and the pie chart show smartphones.</s> Too vague: no age groups, no years, no uses.')}${take('Split the task where the second chart begins, paraphrase each half, keep every detail.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2>${vid({title:'The overview',len:'2 minutes',script:['Cover the pie. What would you remember about the line graph? Both rose; older adults closed much of the gap.','Cover the line. What would you remember about the pie? Messaging and social media led.','Join them in two sentences, with no figures.']})}<p>One key feature from each chart:</p><ul class="clean"><li><b>Line graph:</b> ownership rose in both groups; younger adults were always ahead, but older adults narrowed the gap.</li><li><b>Pie chart:</b> messaging and social media were the most common uses.</li></ul>${insight('Overview','Overall, smartphone ownership rose in both age groups, and although younger adults were more likely to own one throughout, older adults narrowed the gap considerably. In 2025, messaging and social media were the most common uses.')}<p class="small">Use the charts in Step 1.</p>${take('One key feature from each chart, no figures.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','The body paragraphs',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The body paragraphs</h2><p><b>Usually: one paragraph per chart.</b> When the charts measure different things, such as ownership over time and uses in one year, give each chart its own paragraph.</p><p><b>Sometimes: by ${T('category')}.</b> When the charts share the same categories, like the waste types in Chapter 3, you can instead group the categories, describing each one across both charts.</p>${insight('Inside the line graph paragraph','With two lines, follow the gap: it widened from 35 percentage points in 2010 to 55 in 2016, then narrowed to 23 by 2025.')}${note('Calculate the gap at the start, at its widest and at the end. Three figures tell the whole story of two lines.')}<div class="clear"></div>${take('Different measures: one paragraph per chart. Shared categories: you can group by category instead.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">The last question uses the line graph in Step 1.</p><div data-act="c5-org"></div><div data-act="c5-gap" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write a complete answer: introduction, overview and two body paragraphs. Aim for about 170 to 200 words.</p>${taskbox(TASK+'.')}${chart('phone2')}${chart('puse2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, one body paragraph per chart.','Split a two-chart task where the second chart begins, paraphrase each half, join with “while”.','The overview has a key feature from each chart, with no figures.','Charts with shared categories can be grouped by category instead.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body 1 (line)','Body 2 (pie)'],
  items:[{w:'The line graph compares how many younger and older adults had a smartphone, while the pie chart shows what owners mainly used them for.',c:0,m:'names both charts.'},
         {w:'Overall, ownership rose in both age groups, and older adults narrowed the gap.',c:1,m:'a main feature, no figures.'},
         {w:'Among adults aged 55 and over, ownership rose from 10% to 74%.',c:2,m:'figures from the line graph.'},
         {w:'In 2025, almost a third of owners mainly used their phones for messaging.',c:3,m:'figures from the pie chart, with a linking year.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Which introduction is best?',
  opts:[{t:'The line graph compares the proportion of younger and older adults in one country who had a smartphone from 2010 to 2025, while the pie chart illustrates the main purpose for which owners used their phones in the final year.',ok:1,why:'Both halves paraphrased, every detail kept, joined with “while”.'},{t:'The line graph shows the percentage of adults in one country who owned a smartphone between 2010 and 2025.',why:'Copied, and the pie chart is missing.'},{t:'The charts show that young people use smartphones more.',why:'A finding, not an introduction, and it loses the details.'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Good paraphrase, or does it change the meaning?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“by age group” → “among younger and older adults”',a:0,right:'Same meaning, names the two groups.',wrong:'This keeps the meaning.'},
         {t:'“in 2025” → “in the final year”',a:0,right:'Same year, different words.',wrong:'2025 is the final year of the line graph.'},
         {t:'“owned a smartphone” → “used the internet”',a:1,right:'Right: the internet is not the same as a smartphone.',wrong:'This changes what was measured.'},
         {t:'“adults in one country” → “people around the world”',a:1,right:'Right: one country, not the world.',wrong:'Keep “in one country”.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, smartphone ownership rose in both age groups, with older adults closing much of the gap, while messaging and social media were the main uses in 2025.',ok:1,why:'A feature from each chart, no figures.'},{t:'Overall, 97% of younger adults owned a smartphone in 2025.',why:'A figure, and only one chart.'},{t:'Overall, messaging was the most common use, at 32%.',why:'A figure, and only the pie chart.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Younger adults were more likely to own a smartphone throughout the period.',a:0,right:'A main feature, no figures.',wrong:'No figures, and true for the whole period: overview.'},
         {t:'The gap between the groups narrowed to 23 percentage points.',a:1,right:'A detail with a figure: body.',wrong:'With a figure, this belongs in the body.'},
         {t:'Phone calls were the main use for only 6% of owners.',a:1,right:'A detail with a figure: body.',wrong:'The figure makes this body material.'},
         {t:'Messaging and social media were the most common uses.',a:0,right:'The key feature of the pie, no figures.',wrong:'No figures, a key feature: overview.'}]},
'c5-org':{type:'sort',level:'Supported',skill:'Choosing a structure',decision:'Which structure suits each pair of charts?',cats:['One paragraph per chart','Group by category'],
  items:[{w:'Smartphone ownership by age (line) and main uses in 2025 (pie)',c:0,m:'different measures and different categories.'},
         {w:'Types of household waste (pie) and the recycling rate of each type (bar)',c:1,m:'the same five categories in both charts.'},
         {w:'Sports centre members over ten years (line) and how they used the centre in 2025 (pie)',c:0,m:'different measures and categories.'},
         {w:'Rainfall per month (bar) and temperature per month (line) in one city',c:1,m:'the same twelve months: you can group the months by season.'}]},
'c5-gap':{type:'choice',level:'Supported',skill:'The gap between two lines',decision:'What happened to the gap between the two age groups?',
  opts:[{t:'It widened from 35 percentage points in 2010 to 55 in 2016, then narrowed to 23 by 2025.',ok:1,why:'45 − 10 = 35; 85 − 30 = 55; 97 − 74 = 23.'},{t:'It narrowed steadily from 2010 to 2025.',why:'It widened first, until 2016.'},{t:'It stayed about the same.',why:'It changed from 35 to 55 to 23.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. Aim for about 170 to 200 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The line graph compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1: the line graph',rows:6},{k:'b2',label:'Body paragraph 2: the pie chart',rows:5}],
  checks:[{t:'Your introduction names both charts.',fix:'Name both charts: the line graph and the pie chart.',fn:v=>/line/i.test(v.intro)&&/pie/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview covers both charts.',fix:'Add a feature of each chart: ownership, and the main uses.',fn:v=>/(own|smartphone)/i.test(v.ov)&&/(messag|social)/i.test(v.ov)},
          {t:'Body 1 compares the two age groups.',fix:'Compare the two groups in body paragraph 1.',fn:v=>/(18|young)/i.test(v.b1)&&/(55|old)/i.test(v.b1)},
          {t:'Body 1 describes the gap.',fix:'Describe the gap between the lines: how it widened, then narrowed.',fn:v=>/(gap|difference|narrow|closer)/i.test(v.b1)},
          {t:'Body 2 uses share language, not change.',fix:'The pie is one year: don’t write “rose” or “fell”.',fn:v=>v.b2.trim()&&!/\b(rose|grew|increased|fell|dropped|decreased)\b/i.test(v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The line graph compares the proportion of younger and older adults in one country who had a smartphone from 2010 to 2025, <button type="button" class="hl" data-n="0">while the pie chart illustrates the main purpose for which owners used their phones in the final year.</button></p><p><span class="plabel">Overview</span>Overall, smartphone ownership rose in both age groups, and although younger adults were more likely to own one throughout, older adults narrowed the gap considerably. In 2025, messaging and social media were the most common uses.</p><p><span class="plabel">Body 1</span>In 2010, 45% of adults aged 18 to 34 owned a smartphone, compared with just 10% of those aged 55 and over. Ownership among younger adults rose rapidly to 85% by 2016 and then levelled off, reaching 97% in 2025. <button type="button" class="hl" data-n="1">The figure for the older group grew throughout the period, to 74%, more than seven times its 2010 level.</button> <button type="button" class="hl" data-n="2">The gap between the two groups, which had widened to 55 percentage points in 2016, therefore narrowed to 23 percentage points by 2025.</button></p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">In that year, almost a third of owners mainly used their phones for messaging (32%)</button>, and just over a quarter for social media (26%), so these two uses together accounted for well over half of the total. Phone calls, by contrast, were the main use for only 6% of owners.</p>`,
  notes:['“While” joins the two paraphrased halves; “the final year” avoids repeating 2025.','A ratio: 74 ÷ 10 = 7.4, so “more than seven times”.','The gap at its widest and at the end: 85 − 30 = 55 and 97 − 74 = 23.','The link: “in that year” points back to 2025 in the line graph. Share language only.'],
  self:['My introduction names both charts and keeps every detail.','My overview has a feature from each chart and no figures.','Body 1 compares the two lines and follows the gap.','Body 2 links back and uses share language.'],revise:1}
};

const gloss={
  'category':{term:'category',def:'One of the groups a chart is divided into: a type of waste, a month, a subject.',path:'M40,80 V40 H80 V80 M110,80 V25 H150 V80 M180,80 V55 H220 V80',ex:'“When both charts share categories, you can group by category.”'},
  'levelled off':{term:'levelled off',def:'Stopped rising quickly and stayed near the same level.',path:'M20,75 L90,30 L150,20 L220,17',ex:'“Ownership among younger adults rose rapidly and then levelled off.”'},
  'respectively':{term:'respectively',def:'In the same order as the items just mentioned. Use it to give two figures for two items in one sentence.',path:'M40,80 V40 H90 V80 M150,80 V50 H200 V80',ex:'“Browsing and video made up 18% and 14% respectively.”'}
};

const retrieval={
 'c5-s1':[{q:'How many body paragraphs for two charts, usually?',opts:[{t:'Two: one per chart',ok:1,why:'Linked together.'},{t:'One',why:'Each chart needs its own space.'}]}],
 'c5-s2':[{q:'A long two-chart task sentence: what do you do?',opts:[{t:'Split it at “, and the pie chart”, paraphrase each half',ok:1,why:'Then join with while.'},{t:'Copy it',why:'Copied words don’t count.'}]}],
 'c5-s3':[{q:'An overview with only the line graph is…',opts:[{t:'incomplete',ok:1,why:'One feature from each chart.'},{t:'fine',why:'Both charts.'}]}],
 'c5-s4':[{q:'Waste types and their recycling rates share categories. You can…',opts:[{t:'group by category',ok:1,why:'Each type across both charts.'},{t:'only use one paragraph per chart',why:'Grouping by category also works.'}]}],
 'c5-s5':[{q:'Older adults 10% → 74% is…',opts:[{t:'more than seven times',ok:1,why:'7.4.'},{t:'seven times exactly',why:'7 × 10 = 70.'}]}]
};

const minitest=[
 {q:'Which part has a key feature from each chart and no figures?',opts:[{t:'The overview',ok:1,why:'Both charts, no figures.'},{t:'The introduction',why:'That paraphrases the task.'},{t:'Body 2',why:'Body paragraphs need figures.'}],sp:'c5-s1'},
 {q:'How should the second body paragraph start?',opts:[{t:'With a link to the first chart',ok:1,why:'For example, “In that year,”.'},{t:'With “Secondly,”',why:'That doesn’t link the charts.'},{t:'With the smallest figure',why:'Start with a link.'}],sp:'c5-s1'},
 {q:'Which paraphrase changes the meaning?',opts:[{t:'owned a smartphone → used the internet',ok:1,why:'A different thing.'},{t:'in 2025 → in the final year',why:'Same year.'},{t:'by age group → among younger and older adults',why:'Same meaning.'}],sp:'c5-s2'},
 {q:'Which overview is best?',opts:[{t:'Overall, ownership rose in both groups, and messaging and social media were the main uses.',ok:1,why:'Both charts.'},{t:'Overall, 97% of younger adults owned one.',why:'A figure.'},{t:'Overall, smartphones are useful.',why:'An opinion.'}],sp:'c5-s3'},
 {q:'Which pair suits grouping by category?',opts:[{t:'Waste types and recycling rates per type',ok:1,why:'Same categories.'},{t:'Smartphone owners by age and main uses',why:'Different categories.'},{t:'Members over time and visits by activity',why:'Different categories.'}],sp:'c5-s4'},
 {q:'Younger 85%, older 30% in 2016. The gap was…',opts:[{t:'55 percentage points',ok:1,why:'85 − 30.'},{t:'55%',why:'Use percentage points.'},{t:'almost three times',why:'That is a ratio, not the gap.'}],sp:'c5-s4'},
 {q:'Messaging 32% + social media 26% = 58%. Which is accurate?',opts:[{t:'well over half',ok:1,why:'58% > 50%.'},{t:'the vast majority',why:'Keep that for about 80% or more.'},{t:'just under half',why:'58 is over half.'}],sp:'c5-s5'},
 {q:'Browsing 18%, video 14%. Which is correct?',opts:[{t:'Browsing and video made up 18% and 14% respectively.',ok:1,why:'Same order.'},{t:'Browsing and video made up 14% and 18% respectively.',why:'Wrong order.'},{t:'Browsing and video made up 32% respectively.',why:'“Respectively” needs one figure per item.'}],sp:'c5-s5'}
];

const cannow=[['Use the four-part shape for two charts','c5-s1'],['Paraphrase a two-part task in one sentence','c5-s2'],['Write an overview with a feature from each chart','c5-s3'],['Choose between one paragraph per chart and grouping by category','c5-s4'],['Write a complete answer to a mixed task','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{phone:C.phone,puse:C.puse,phone2:Object.assign({},C.phone,{id:'ch-phone2'}),puse2:Object.assign({},C.puse,{id:'ch-puse2'})},retrieval,minitest,cannow});
})();
