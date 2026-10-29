/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 1 · UNDERSTANDING MIXED CHARTS
   ACTIVITY IDS (type · level)
     c1-what    sort      Guided       Step 1  What can each chart tell you?
     c1-read1..3 choice   Supported    Step 2  Read each chart on its own
     c1-trap    binary    Supported    Step 2  Can you say this?
     c1-build   builder   Supported    Step 3  An introduction for two charts
     c1-intro   choice    Supported    Step 3  The best introduction
     c1-ov      choice    Independent  Step 4  An overview for both
     c1-ovin    binary    Independent  Step 4  Overview or body?
     c1-write   write     Independent  Step 5  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 1',CT='Understanding Mixed Charts',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The line graph shows the number of members of a city sports centre between 2015 and 2025, and the pie chart shows how members used the centre in 2025';

const spreads=[
opening({n:1,title:CT,lede:'Sometimes Task 1 gives you two visuals: a line graph and a pie chart, a bar chart and a table. Many candidates panic and try to describe everything. You don’t need to. In this chapter I’ll show you how to read each chart on its own, then write one introduction and one overview that cover both.',
  outcomes:['say what each type of chart can and cannot tell you','read the unit and the time of each chart separately',`introduce both charts in one sentence with ${T('while')}`,'write an overview with one key feature from each chart'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('line','pie'),
  steps:[[1,'c1-s1','Two charts, one task','What each chart can tell you','Discover'],[2,'c1-s2','Read each chart on its own','Units and time','Understand'],[3,'c1-s3','One introduction','Both charts in one sentence','Understand'],[4,'c1-s4','One overview','A key feature from each','Practise'],[5,'c1-s5','Chapter challenge','The sports centre','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Read each chart on its own before you link them.','illustrates','The line graph illustrates how membership changed')}),

sp('c1-s1','Two charts, one task',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Two charts, one task</h2>${vid({title:'Two charts, one task',len:'90 seconds',script:['Show the sports centre line graph and pie chart side by side.','Ask: what does each one tell you? The line: change over ten years. The pie: shares in one year.','Say: same topic, different questions.','Finish: you still have about 20 minutes and around 170 words, so you choose fewer details from each.']})}<p>Each type of chart answers a different question:</p><ul class="clean"><li><b>Line graph:</b> how did something change over time?</li><li><b>Bar chart:</b> how do categories compare, at one time or across years?</li><li><b>Pie chart:</b> how was a whole divided, at one time?</li><li><b>Table:</b> what are the exact figures?</li></ul>${chart('memb')}${chart('use')}${take('Two charts usually share a topic but answer different questions. Find the question each one answers.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c1-what"></div>`}),

sp('c1-s2','Read each chart on its own',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read each chart on its own</h2>${vid({title:'Read each chart on its own',len:'90 seconds',script:['Cover the pie. Read the line graph: members, 2015 to 2025, a dip in 2021.','Cover the line. Read the pie: percentages of visits, 2025 only.','Say: the pie has no earlier year, so you can’t say any activity grew.','Finish: read the unit and the time of each chart before you write.']})}<p>Before you write, read each chart separately. Check two things:</p><ul class="clean"><li><b>The unit:</b> the line graph counts <b>members</b>; the pie chart shows <b>percentages of visits</b>.</li><li><b>The time:</b> the line graph covers <b>2015 to 2025</b>; the pie chart covers <b>2025 only</b>.</li></ul>${mistake('<s>The gym grew to 40% of visits.</s> The pie chart shows one year, so nothing in it grew. Say: <i>the gym accounted for 40% of visits in 2025.</i>')}${insight('Two different times','The line graph is about change; the pie chart is a snapshot of the last year. Use past verbs of change for the line, and verbs for shares for the pie.')}${take('Unit and time, for each chart. A pie chart for one year can’t show growth.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c1-read1"></div><div data-act="c1-read2" style="margin-top:14px"></div><div data-act="c1-read3" style="margin-top:14px"></div><div data-act="c1-trap" style="margin-top:16px"></div>`}),

sp('c1-s3','One introduction for two charts',{
 left:`${head('Step 3 · Understand','Learn')}<h2>One introduction for two charts</h2>${vid({title:'One introduction',len:'90 seconds',script:['Show the task sentence: two charts, two halves.','Paraphrase the first half: the line graph illustrates how membership changed.','Join with “while”: while the pie chart shows what members used the centre for.','Finish: one sentence, both charts, every detail kept.']})}<p>Paraphrase the task in one sentence that names both charts. Join the two halves with ${T('while')} or <i>and</i>.</p>${taskbox(TASK+'.')}<ul class="clean"><li><b>Chart 1:</b> the line graph ${T('illustrates')} how membership of the centre changed between 2015 and 2025,</li><li><b>Link:</b> while</li><li><b>Chart 2:</b> the pie chart shows what members used the centre for in ${T('the final year')}.</li></ul>${note('Name each chart type. “The charts show…” hides the fact that there are two different kinds.')}<div class="clear"></div>${take('One sentence: chart 1 + while + chart 2, with new words and every detail.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c1-build"></div><div data-gate="c1-build" hidden style="margin-top:16px"><div data-act="c1-intro"></div></div>`}),

sp('c1-s4','One overview for both',{
 left:`${head('Step 4 · Practise','Learn')}<h2>One overview for both</h2><p>Your overview needs <b>at least one key feature from each chart</b>. If it describes only one chart, it is incomplete.</p><ul class="clean"><li><b>From the line graph:</b> membership grew overall, despite a sharp fall in 2021, and reached its highest point in 2025.</li><li><b>From the pie chart:</b> the gym was the most popular facility.</li></ul>${insight('One overview, two charts','Overall, membership of the centre grew over the decade despite a sharp fall in 2021, and the gym was the most popular facility in 2025.')}${mistake('<s>Overall, membership grew from 1,200 to 2,000.</s> Two problems: figures in the overview, and nothing about the pie chart.')}${take('An overview for two charts: one main feature from each, no figures.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c1-ov"></div><div data-act="c1-ovin" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: the sports centre',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task.</p>${taskbox(TASK+'.')}${chart('memb2')}${chart('use2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Each chart answers a different question: change, comparison, shares or exact figures.','Read the unit and the time of each chart separately.','Introduce both charts in one sentence, naming each type.','Your overview needs a key feature from each chart, with no figures.']})
];

const acts={
'c1-what':{type:'sort',level:'Guided',skill:'What each chart shows',decision:'Which chart tells you this?',cats:['The line graph','The pie chart','Neither chart'],
  items:[{w:'How many members the centre had in 2019',c:0,m:'1,500 members.'},
         {w:'Which facility members used most in 2025',c:1,m:'the gym, with 40% of visits.'},
         {w:'When membership fell',c:0,m:'between 2019 and 2021.'},
         {w:'Whether swimming was more popular in 2015 than in 2025',c:2,m:'the pie chart shows 2025 only.'},
         {w:'Why membership fell in 2021',c:2,m:'no chart gives reasons, and Task 1 doesn’t ask for them.'}]},
'c1-read1':{type:'choice',level:'Supported',skill:'Units',decision:'What does the pie chart measure?',
  opts:[{t:'The percentage of visits to each facility in 2025',ok:1,why:'Read the title: % of visits, 2025.'},{t:'The number of members in each activity',why:'The pie gives percentages, not numbers of people.'},{t:'How each facility changed over ten years',why:'A single pie shows one year only.'}]},
'c1-read2':{type:'choice',level:'Supported',skill:'Reading the line graph',decision:'What happened to membership between 2019 and 2021?',
  opts:[{t:'It fell sharply, from 1,500 to 1,100.',ok:1,why:'The only fall on the graph.'},{t:'It rose steadily.',why:'Look at 2021: the line drops.'},{t:'It stayed the same.',why:'It fell by 400.'}]},
'c1-read3':{type:'choice',level:'Supported',skill:'Reading the pie chart',decision:'Which statement about 2025 is accurate?',
  opts:[{t:'The gym and swimming together accounted for almost two-thirds of visits.',ok:1,why:'40 + 25 = 65%.'},{t:'Swimming accounted for half of all visits.',why:'Swimming was 25%: a quarter.'},{t:'Fitness classes were the most popular activity.',why:'The gym was: 40%.'}]},
'c1-trap':{type:'binary',level:'Supported',skill:'What the charts allow',decision:'Can you write this, based on the two charts?',labels:['Yes','No'],
  items:[{t:'Membership reached its highest point, 2,000, in 2025.',a:0,right:'The highest point on the line.',wrong:'Yes: 2,000 in 2025 is the highest point.'},
         {t:'The share of visits to the gym rose to 40%.',a:1,right:'Right. The pie shows one year, so no share “rose”.',wrong:'The pie chart shows 2025 only, so you can’t say any share rose.'},
         {t:'Racket sports made up a tenth of visits in 2025.',a:0,right:'10% is a tenth.',wrong:'Yes: 10% is one tenth.'},
         {t:'In 2025, 800 members used the gym.',a:1,right:'Right. The pie shows visits, not members, so you can’t combine the charts like this.',wrong:'40% of visits is not 40% of members. The charts measure different things.'}]},
'c1-build':{type:'builder',level:'Supported',skill:'Introducing two charts',decision:'Build an introduction that covers both charts.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['The line graph illustrates','how membership of a city sports centre','changed between 2015 and 2025,','while the pie chart shows','what members used the centre for','in the final year.'],
  distract:[{t:'The charts show',why:'Name each chart: the line graph, the pie chart.',fix:'The line graph illustrates'},{t:'how membership grew in every year,',why:'Membership fell in 2021. And trends belong in the overview, not the introduction.',fix:'changed between 2015 and 2025,'}],
  right:'Both charts named, each paraphrased, joined with while.',orderMsg:'All the right pieces, but check the order: chart 1, its topic and time, while, chart 2, its topic and time.',incompleteMsg:'Good so far, but incomplete. Add the second chart.'},
'c1-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Which introduction is best?',
  opts:[{t:'The line graph illustrates how many members a city sports centre had from 2015 to 2025, and the pie chart shows how its facilities were used in 2025.',ok:1,why:'Both charts named and paraphrased, every detail kept.'},{t:'The line graph shows the number of members of a city sports centre between 2015 and 2025.',why:'It leaves out the pie chart.'},{t:'The charts give information about a sports centre.',why:'Too vague: no chart types, no times.'}]},
'c1-ov':{type:'choice',level:'Independent',skill:'An overview for two charts',decision:'Which is the best overview?',
  opts:[{t:'Overall, membership of the centre grew over the period despite a sharp fall in 2021, and the gym was the facility members used most.',ok:1,why:'One key feature from each chart, and no figures.'},{t:'Overall, membership grew from 1,200 to 2,000, despite a fall to 1,100 in 2021.',why:'Figures belong in the body, and the pie chart is missing.'},{t:'Overall, the gym was the most popular facility, followed by swimming.',why:'This covers only the pie chart.'}]},
'c1-ovin':{type:'binary',level:'Independent',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Membership was higher in 2025 than at any other time.',a:0,right:'A main feature, no figures.',wrong:'This is a main feature with no figures: overview.'},
         {t:'Membership fell from 1,500 to 1,100 between 2019 and 2021.',a:1,right:'A detail with figures: body.',wrong:'The figures make this body material.'},
         {t:'The gym attracted the largest share of visits.',a:0,right:'The key feature of the pie, no figures.',wrong:'The largest share, without figures, belongs in the overview.'},
         {t:'Racket sports and other activities together made up 15% of visits.',a:1,right:'A detail with a figure: body.',wrong:'With a combined figure, this belongs in the body.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The line graph illustrates…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction names both charts.',fix:'Name both charts: the line graph and the pie chart.',fn:v=>/line/i.test(v.intro)&&/pie/i.test(v.intro)},
          {t:'Your introduction gives the times.',fix:'Include 2015 to 2025 for the line graph and 2025 for the pie chart.',fn:v=>/2015/.test(v.intro)&&/2025|final year|last year/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview has a feature from the line graph.',fix:'Add the main trend in membership.',fn:v=>/member/i.test(v.ov)},
          {t:'Your overview has a feature from the pie chart.',fix:'Add the main feature of the pie chart: the gym was the most popular.',fn:v=>/gym/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The line graph illustrates how membership of a sports centre in one city changed between 2015 and 2025</button>, <button type="button" class="hl" data-n="1">while the pie chart shows what members used the centre for in the final year.</button></p><p><button type="button" class="hl" data-n="2">Overall, the number of members grew considerably over the decade, despite a sharp fall in 2021, and it was at its highest in 2025.</button> <button type="button" class="hl" data-n="3">The gym was clearly the most popular facility, accounting for the largest share of visits.</button></p>`,
  notes:['Chart 1, paraphrased: “how membership … changed” replaces “the number of members”.','“While” joins the two charts; “the final year” avoids repeating 2025.','The main feature of the line graph: growth, the dip and the peak, with no figures.','The main feature of the pie chart. 40% against the next largest, 25%, is a clear lead, so “clearly” fits.'],
  self:['My introduction names both chart types.','I kept every detail: the city, the years.','My overview has a feature from each chart.','My overview has no figures.'],revise:1}
};

const gloss={
  'while':{term:'while',def:'A linker that joins two facts side by side. In an introduction for two charts, it joins chart 1 to chart 2.',path:'M20,60 L110,30 M130,30 L220,60',ex:'“The line graph shows…, while the pie chart illustrates…”'},
  'illustrates':{term:'illustrates',def:'Shows. A useful alternative to “shows” in an introduction.',path:'M20,70 L80,40 L140,50 L220,20',ex:'“The line graph illustrates how membership changed.”'},
  'the final year':{term:'the final year',def:'The last year of a period. It avoids repeating the same date.',path:'M20,60 L200,30 M200,20 V40',ex:'“The pie chart shows how members used the centre in the final year.”'}
};

const retrieval={
 'c1-s1':[{q:'Which chart shows how a whole was divided at one time?',opts:[{t:'A pie chart',ok:1,why:'Shares of a whole.'},{t:'A line graph',why:'That shows change over time.'}]}],
 'c1-s2':[{q:'The pie chart shows 2025 only. Can you say a share rose?',opts:[{t:'No',ok:1,why:'One year: no change.'},{t:'Yes',why:'There is nothing to compare it with.'}]}],
 'c1-s3':[{q:'What joins the two charts in the introduction?',opts:[{t:'while (or and)',ok:1,why:'Chart 1, while, chart 2.'},{t:'because',why:'No cause.'}]}],
 'c1-s4':[{q:'An overview that covers only one chart is…',opts:[{t:'incomplete',ok:1,why:'One feature from each.'},{t:'fine',why:'Both charts need a key feature.'}]}],
 'c1-s5':[{q:'Membership 1,200 → 2,000 is a rise of…',opts:[{t:'two-thirds',ok:1,why:'800 ÷ 1,200.'},{t:'a half',why:'Half of 1,200 is 600.'}]}]
};

const minitest=[
 {q:'Which chart is best for exact figures?',opts:[{t:'A table',ok:1,why:'Every figure is written.'},{t:'A pie chart',why:'Shares, often without totals.'},{t:'A line graph',why:'Change over time.'}],sp:'c1-s1'},
 {q:'Can either chart explain why membership fell in 2021?',opts:[{t:'No: charts give no reasons',ok:1,why:'Describe, don’t explain.'},{t:'Yes, the pie chart',why:'It shows 2025 only.'},{t:'Yes, the line graph',why:'It shows when, not why.'}],sp:'c1-s1'},
 {q:'What is the unit of the pie chart?',opts:[{t:'Percentage of visits',ok:1,why:'Read the title.'},{t:'Number of members',why:'That is the line graph.'},{t:'Hours',why:'Not on either chart.'}],sp:'c1-s2'},
 {q:'40% of visits went to the gym. Can you say 800 members used the gym?',opts:[{t:'No: visits are not members',ok:1,why:'Different measures.'},{t:'Yes: 40% of 2,000',why:'The pie is about visits.'},{t:'Yes, approximately',why:'The measures don’t match.'}],sp:'c1-s2'},
 {q:'Which introduction is best?',opts:[{t:'The line graph illustrates…, while the pie chart shows…',ok:1,why:'Both charts named.'},{t:'The charts show a sports centre.',why:'Too vague.'},{t:'The line graph illustrates membership.',why:'The pie chart is missing.'}],sp:'c1-s3'},
 {q:'Why name each chart type in the introduction?',opts:[{t:'Each chart shows something different',ok:1,why:'The reader needs both.'},{t:'To add words',why:'Accuracy, not length.'},{t:'It isn’t necessary',why:'It is clearer.'}],sp:'c1-s3'},
 {q:'What does the overview need?',opts:[{t:'A key feature from each chart, no figures',ok:1,why:'Both charts.'},{t:'The figures for both charts',why:'Figures go in the body.'},{t:'Only the bigger chart',why:'Both charts.'}],sp:'c1-s4'},
 {q:'Gym 40%, next largest 25%. Is “clearly the most popular” accurate?',opts:[{t:'Yes: a clear lead of 15 percentage points',ok:1,why:'40 is well ahead of 25.'},{t:'No: they are almost equal',why:'15 points is a big gap here.'},{t:'No: 40% is not a majority',why:'“Most popular” doesn’t need a majority.'}],sp:'c1-s5'}
];

const cannow=[['Say what each type of chart can tell you','c1-s1'],['Read the unit and time of each chart separately','c1-s2'],['Introduce two charts in one sentence','c1-s3'],['Write an overview with a key feature from each chart','c1-s4'],['Write an introduction and overview for a mixed task','c1-s5']];
addChapter({n:1,spreads,acts,gloss,charts:{memb:C.memb,use:C.use,memb2:Object.assign({},C.memb,{id:'ch-memb2'}),use2:Object.assign({},C.use,{id:'ch-use2'})},retrieval,minitest,cannow});
})();
