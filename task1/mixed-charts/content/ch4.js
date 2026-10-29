/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 4 · COMPARING ACROSS CHARTS
   ACTIVITY IDS (type · level)
     c4-unit1..2 choice   Guided       Step 1  Two units
     c4-time    binary    Supported    Step 2  Can you say this?
     c4-tense   fix       Supported    Step 2  Fix the time
     c4-comb    binary    Supported    Step 3  Can you combine them?
     c4-calc    choice    Independent  Step 3  Combine accurately
     c4-build   builder   Supported    Step 4  A linking sentence
     c4-write   write     Independent  Step 5  Overview and two body paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,figs,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 4',CT='Comparing Across Charts',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'Two charts often use different units and cover different times: thousands of students over twenty years in one, percentages for a single year in the other. Mixing them up is one of the most common accuracy errors in mixed tasks. In this chapter I’ll show you how to keep each figure with its own unit and time, and when you can safely combine them.',
  outcomes:['keep each figure with its own unit','describe a one-year chart without verbs of change','check whether two figures can be combined: same group, same time',`link the charts with ${T('in that year')} and similar phrases`],
  illus:illus('line','table'),
  steps:[[1,'c4-s1','Two units','Thousands and percentages','Discover'],[2,'c4-s2','Two time frames','Twenty years and one year','Understand'],[3,'c4-s3','Can you combine them?','Same group, same time','Understand'],[4,'c4-s4','The linking sentence','From one chart to the other','Practise'],[5,'c4-s5','Chapter challenge','International students','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Two units',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Two units</h2>${vid({title:'Two units',len:'90 seconds',script:['Show the line graph: international students, in thousands.','Show the table: percentages of international students in 2025.','Point to 110 on the line: 110,000 students. Point to 34 in the table: 34%.','Finish: each figure takes its own unit, every time.']})}<p>Each chart has its own unit:</p><ul class="clean"><li><b>The line graph:</b> students, in <b>thousands</b>. 110 means <b>110,000 students</b>.</li><li><b>The table:</b> <b>percentages</b> of all international students. 34 means <b>34%</b>.</li></ul>${chart('intl')}${chart('subj')}${mistake('<s>Business had 34 students.</s> The table gives percentages: <i>34% of international students studied business.</i>')}${take('Read the unit of each chart separately. Every figure you write takes the unit of the chart it came from.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c4-unit1"></div><div data-act="c4-unit2" style="margin-top:14px"></div>`}),

sp('c4-s2','Two time frames',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Two time frames</h2>${vid({title:'Two time frames',len:'90 seconds',script:['Show the line graph: 2005 to 2025. Say: this chart is about change.','Show the table: 2025 only. Say: this chart is a snapshot.','Read a wrong sentence: Business grew to 34%. Cross out “grew”.','Finish: verbs of change for the line, verbs for shares for the table.']})}<p>The charts cover different times:</p><ul class="clean"><li><b>The line graph:</b> 2005 to 2025. Use verbs of change: <i>rose, fell, climbed</i>.</li><li><b>The table:</b> 2025 only. Use verbs for shares: <i>accounted for, made up, ${T('were studying')}</i>.</li></ul>${mistake('<s>The percentage studying business increased to 34%.</s> The table has one year, so nothing increased. Say: <i>34% were studying business in 2025.</i>')}${insight('Past tense for both','Both charts describe the past, so use past tenses: “were studying”, “rose”. The table is 2025, so “in 2025” keeps it clear.')}${take('Change verbs for the chart that covers a period. Share verbs for the one-year chart.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c4-time"></div><div data-act="c4-tense" style="margin-top:16px"></div>`}),

sp('c4-s3','Can you combine them?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Can you combine them?</h2>${vid({title:'Can you combine figures?',len:'2 minutes',script:['Ask: can I say how many students studied business in 2025?','Check: same group? International students. Same time? 2025. Yes.','Calculate: 34% of 110,000 is about 37,000.','Contrast with the sports centre: visits are not members, so you can’t combine there.']})}<p>You can combine figures from two charts <b>only</b> when they refer to the same group and the same time.</p><ul class="clean"><li><b>Same group?</b> Both charts are about international students in one country.</li><li><b>Same time?</b> The table is 2025; the line has a figure for 2025: 110,000.</li></ul><p>So you <i>can</i> say: <i>about 37,000 international students were studying business in 2025</i> (34% of 110,000).</p>${note('You don’t have to combine figures. If you aren’t sure the groups and times match, keep the figures apart.')}<div class="clear"></div>${take('Combine only when the group and the time match. If in doubt, don’t.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c4-comb"></div><div data-act="c4-calc" style="margin-top:16px"></div>`}),

sp('c4-s4','The linking sentence',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The linking sentence</h2><p>Your second body paragraph should start with a link to the first, so the reader moves smoothly from one chart to the other. The shared time is often the best link:</p>${insight('A linking sentence','In 2025, when the number of international students was at its highest, just over a third of them were studying business.')}<ul class="clean"><li><b>${T('in that year')}</b>: <i>In that year, business was the most popular subject.</i></li><li><b>Of these students</b>: <i>Of these students, 34% were studying business.</i></li></ul>${take('Start the second body paragraph with a link: the shared year, or “of these students”.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-build"></div>`}),

sp('c4-s5','Chapter challenge: international students',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and two body paragraphs. Start the second paragraph with a link to the first.</p>${taskbox('The line graph shows the number of international students at universities in one country between 2005 and 2025, and the table shows the subjects they studied in 2025.')}${chart('intl2')}${chart('subj2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Every figure takes the unit of the chart it came from.','Use verbs of change for a period, and verbs for shares for a single year.','Combine figures only when the group and the time match.','Start the second body paragraph with a link: the shared year or “of these students”.']})
];

const acts={
'c4-unit1':{type:'choice',level:'Guided',skill:'Units',decision:'What does 80 on the line graph mean?',
  opts:[{t:'80,000 international students in 2015',ok:1,why:'The line graph is in thousands.'},{t:'80% of students',why:'The line gives numbers, not percentages.'},{t:'80 students',why:'Read the unit: thousands.'}]},
'c4-unit2':{type:'choice',level:'Guided',skill:'Units',decision:'What does 22 in the table mean?',
  opts:[{t:'22% of international students were studying engineering in 2025.',ok:1,why:'The table gives percentages for 2025.'},{t:'22,000 students were studying engineering.',why:'The table gives percentages, not thousands.'},{t:'Engineering grew by 22%.',why:'The table has one year: no growth.'}]},
'c4-time':{type:'binary',level:'Supported',skill:'Time frames',decision:'Can you write this, based on the charts?',labels:['Yes','No'],
  items:[{t:'The number of international students fell between 2015 and 2020.',a:0,right:'80,000 to 70,000.',wrong:'Yes: the line falls from 80 to 70.'},
         {t:'The share of students studying computing rose to 18%.',a:1,right:'Right. The table shows 2025 only.',wrong:'The table has one year, so no share rose.'},
         {t:'In 2025, medicine accounted for one in ten international students.',a:0,right:'10% is one in ten.',wrong:'Yes: 10% is one in ten.'},
         {t:'Business was the most popular subject in 2005.',a:1,right:'Right. There are no subject figures for 2005.',wrong:'The table covers 2025 only.'}]},
'c4-tense':{type:'fix',level:'Supported',skill:'One-year charts',decision:'Fix the verb in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The percentage of students taking engineering grew to 22% in 2025.',ok:/(was|were|accounted for|made up|stood at|represented)/i,bad:/grew|rose|increased/i,hint:'There is no earlier year in the table. Use a verb for a share.',err:'grew to',fix:'was / accounted for',why:'The table shows one year, so nothing grew.',model:'Engineering accounted for 22% of international students in 2025.'},
         {wrong:'Medicine dropped to 10% of international students.',ok:/(was|accounted for|made up|represented|only)/i,bad:/dropped|fell|decreased/i,hint:'One year only: no fall.',err:'dropped to',fix:'accounted for / made up',why:'With one year, there is no change to describe.',model:'Medicine made up only 10% of international students in 2025.'}]},
'c4-comb':{type:'binary',level:'Supported',skill:'Combining figures',decision:'Can these two figures be combined?',labels:['Yes, safely','No'],
  items:[{t:'34% (business, 2025) and 110,000 (all international students, 2025)',a:0,right:'Same group, same year: about 37,000 business students.',wrong:'Same group and same year, so they can be combined.'},
         {t:'34% (business, 2025) and 80,000 (all international students, 2015)',a:1,right:'Right. Different years.',wrong:'The years don’t match: the table is 2025.'},
         {t:'40% of visits to the gym and 2,000 members (the sports centre, 2025)',a:1,right:'Right. Visits are not members.',wrong:'The measures don’t match: visits and members.'}]},
'c4-calc':{type:'choice',level:'Independent',skill:'Combining accurately',decision:'About how many international students were studying computing in 2025?',prompt:'18% of 110,000.',
  opts:[{t:'about 20,000',ok:1,why:'110,000 × 0.18 = 19,800.'},{t:'18,000',why:'18% is not the same as 18,000: multiply by the total.'},{t:'about 11,000',why:'That would be 10%.'}]},
'c4-build':{type:'builder',level:'Supported',skill:'Linking two charts',decision:'Build the first sentence of the second body paragraph.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['In 2025,','when the number of international students','was at its highest,','just over a third of them','were studying business.'],
  distract:[{t:'grew to 34%',why:'One year only: no growth.',fix:'were studying business.'},{t:'34 students',why:'The table gives percentages.',fix:'just over a third of them'}],
  right:'A link through the shared year, then the share with a share verb.',orderMsg:'All the right pieces, but check the order: the year, the link to the line graph, then the share.',incompleteMsg:'Good so far, but incomplete. Add the share and the subject.'},
'c4-write':{type:'write',level:'Independent',skill:'Comparing across charts',decision:'Write an overview and two body paragraphs.',prompt:'Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1: the line graph',rows:5,ph:'There were 40,000…'},{k:'b2',label:'Body paragraph 2: the table',rows:5,ph:'In 2025,…'}],
  checks:[{t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview covers both charts.',fix:'Add a feature of each chart: the trend in numbers and the most popular subject.',fn:v=>/(student|number)/i.test(v.ov)&&/business/i.test(v.ov)},
          {t:'Body 1 gives student numbers in full (e.g. 40,000).',fix:'Write the line graph figures in full: 40,000, not 40.',fn:v=>/\d{2,3},000/.test(v.b1)},
          {t:'Body 1 mentions the fall.',fix:'Mention the one fall: between 2015 and 2020.',fn:v=>/(fell|fall|drop|declin|decreas)/i.test(v.b1)},
          {t:'Body 2 uses share verbs, not change verbs.',fix:'The table is one year: replace “grew” or “rose” with “accounted for” or “were studying”.',fn:v=>v.b2.trim()&&!/\b(grew|rose|increased|fell|dropped|decreased)\b/i.test(v.b2)},
          {t:'Body 2 starts with a link.',fix:'Start body paragraph 2 with “In 2025,” or “Of these students,”.',fn:v=>/^\s*(in 2025|in that year|of these|that year|by 2025|in the final year)/i.test(v.b2)}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, the number of international students rose considerably over the twenty years, despite one fall, and was at its highest in 2025.</button> In that year, business was clearly the most popular subject.</p><p><span class="plabel">Body 1</span>There were 40,000 international students in 2005. This figure rose to 55,000 in 2010 and to 80,000 in 2015, <button type="button" class="hl" data-n="1">before falling to 70,000 in 2020</button>. It then climbed sharply to 110,000 in 2025, almost three times the 2005 level.</p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="2">In 2025, just over a third of international students were studying business (34%).</button> Engineering was the second most popular subject, at 22%, followed by computing at 18%, <button type="button" class="hl" data-n="3">so these three subjects together accounted for almost three-quarters of the total</button>. Only one in ten international students was studying medicine.</p>`,
  notes:['A feature from each chart; “in that year” links them.','The one fall, with its own figures in thousands, written in full.','The link through the shared year, and a share verb, not a change verb.','A combined share: 34 + 22 + 18 = 74, almost three-quarters.'],
  self:['Every figure has the unit of its own chart.','I used share verbs for the table.','My second paragraph starts with a link.','I combined figures only where the group and year matched.'],revise:1}
};

const gloss={
  'were studying':{term:'were studying',def:'The past continuous, for what was happening at one time. It suits a one-year chart about people’s activities.',path:'M20,45 L220,45 M120,20 V70',ex:'“In 2025, 34% of international students were studying business.”'},
  'in that year':{term:'in that year',def:'Refers back to a year you have just mentioned. A smooth link from one chart to the other.',path:'M20,60 L200,30 M200,20 V40',ex:'“In that year, business was the most popular subject.”'},
  'climbed sharply':{term:'climbed sharply',def:'Rose quickly by a large amount. Check the figures: it should be a steep rise, often the steepest on the chart.',path:'M20,70 L120,60 L220,15',ex:'“The number climbed sharply to 110,000 in 2025.”'}
};

const retrieval={
 'c4-s1':[{q:'110 on a line graph in thousands means…',opts:[{t:'110,000',ok:1,why:'Multiply by 1,000.'},{t:'110%',why:'Not a percentage.'}]}],
 'c4-s2':[{q:'Which verb fits a one-year table?',opts:[{t:'accounted for',ok:1,why:'A share verb.'},{t:'increased',why:'No change in one year.'}]}],
 'c4-s3':[{q:'When can you combine figures from two charts?',opts:[{t:'Same group and same time',ok:1,why:'Otherwise they don’t match.'},{t:'Always',why:'Check the group and time.'}]}],
 'c4-s4':[{q:'A good way to start the second body paragraph?',opts:[{t:'In 2025, when…',ok:1,why:'A link through the shared year.'},{t:'Secondly,',why:'That doesn’t link the charts.'}]}],
 'c4-s5':[{q:'40,000 → 110,000 is…',opts:[{t:'almost three times',ok:1,why:'2.75.'},{t:'more than three times',why:'3 × 40,000 = 120,000.'}]}]
};

const minitest=[
 {q:'The table shows 18 for computing. You write…',opts:[{t:'18% of international students',ok:1,why:'The table is in percentages.'},{t:'18,000 students',why:'That is the line graph’s unit.'},{t:'18 students',why:'Use the unit.'}],sp:'c4-s1'},
 {q:'Why read the unit of each chart separately?',opts:[{t:'The charts can use different units',ok:1,why:'Thousands and percentages.'},{t:'They always use the same unit',why:'Not in mixed tasks.'},{t:'Units don’t matter',why:'Every figure needs one.'}],sp:'c4-s1'},
 {q:'Choose the accurate sentence about the table.',opts:[{t:'Business accounted for 34% of international students in 2025.',ok:1,why:'A share verb, one year.'},{t:'Business rose to 34%.',why:'No earlier year.'},{t:'Business fell to 34%.',why:'No earlier year.'}],sp:'c4-s2'},
 {q:'Which tense suits “international students ___ business in 2025”?',opts:[{t:'were studying',ok:1,why:'Past, at one time.'},{t:'are studying',why:'2025 is in the past here.'},{t:'will study',why:'Not a prediction.'}],sp:'c4-s2'},
 {q:'Can 34% (2025) be combined with 80,000 (2015)?',opts:[{t:'No: different years',ok:1,why:'Same time is required.'},{t:'Yes',why:'The years don’t match.'},{t:'Yes, roughly',why:'Different years.'}],sp:'c4-s3'},
 {q:'18% of 110,000 is about…',opts:[{t:'20,000',ok:1,why:'19,800.'},{t:'18,000',why:'Multiply, don’t copy.'},{t:'11,000',why:'That is 10%.'}],sp:'c4-s3'},
 {q:'Which phrase links back to the line graph?',opts:[{t:'In 2025, when numbers were at their highest,',ok:1,why:'The shared year.'},{t:'On the other hand,',why:'That signals contrast, not a link.'},{t:'In conclusion,',why:'No conclusion in Task 1.'}],sp:'c4-s4'},
 {q:'34% + 22% + 18% = 74%. Which is accurate?',opts:[{t:'almost three-quarters',ok:1,why:'75% is three-quarters.'},{t:'more than three-quarters',why:'74 is just under 75.'},{t:'two-thirds',why:'That is about 67%.'}],sp:'c4-s5'}
];

const cannow=[['Keep each figure with the unit of its own chart','c4-s1'],['Use share verbs for a one-year chart','c4-s2'],['Check whether two figures can be combined','c4-s3'],['Link the second body paragraph to the first','c4-s4'],['Write an overview and two linked body paragraphs','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{intl:C.intl,subj:C.subj,intl2:Object.assign({},C.intl,{id:'ch-intl2'}),subj2:Object.assign({},C.subj,{id:'ch-subj2'})},retrieval,minitest,cannow});
})();
