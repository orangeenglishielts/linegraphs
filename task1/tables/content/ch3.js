/* ==========================================================================
   MASTERING TABLES · CHAPTER 3 · COMPARING ROWS AND COLUMNS
   ACTIVITY IDS (type · level)
     c3-parts   hotspots  Guided       Step 1  Each column, its own measure
     c3-unit1..2 choice   Supported    Step 1  Read the units
     c3-fix     fix       Supported    Step 2  Superlatives and fewer
     c3-build   builder   Supported    Step 3  A profile of one occupation
     c3-yet     choice    Supported    Step 3  Choose the linker
     c3-claim   binary    Independent  Step 4  True or false?
     c3-write   write     Independent  Step 5  Overview and body paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 3',CT='Comparing Rows and Columns',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:3,title:CT,lede:'Some tables measure several different things at once: hours, days and euros, all in one table. You can’t compare 50 hours with €88,000. You can compare down each column, and then link the columns for one row to build a picture. This chapter shows you how.',
  outcomes:['read the unit of every column before you compare','use superlatives and “fewer” accurately','build a profile of one row across several columns',`link contrasting facts with ${T('despite')}, yet and while`],
  illus:illus([[0,3],[1,3],[2,3],[3,3]]),
  steps:[[1,'c3-s1','Each column, its own measure','Hours, days and euros','Discover'],[2,'c3-s2','Compare down a column','The most, the fewest','Understand'],[3,'c3-s3','Link across a row','A profile of one job','Understand'],[4,'c3-s4','Test the connections','More hours, more pay?','Practise'],[5,'c3-s5','Chapter challenge','Five occupations','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Each column, its own measure',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Each column, its own measure</h2>${vid({title:'Each column, its own measure',len:'90 seconds',script:['Show the occupations table. Point to each column heading in turn.','Say: hours per week, days per year, thousands of euros. Three different units.','Point to 88. Ask: 88 what? Answer: €88,000 a year.','Finish: read every heading before you compare a single figure.']})}${chart('jobs')}<p style="margin-top:10px">This table has three columns, and each one measures something different:</p><ul class="clean"><li><b>Hours per week:</b> 50 means 50 hours.</li><li><b>Paid holiday (days per year):</b> 40 means 40 days.</li><li><b>Average salary (€000s), thousands of euros:</b> 88 means <b>€88,000</b> a year.</li></ul>${mistake('<s>Lawyers earned 88.</s> Always give the unit: <i>lawyers earned an average of €88,000 a year.</i>')}${take('Read every column heading before you compare. Each column has its own unit, and every figure you write needs it.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c3-parts"></div><div data-gate="c3-parts" hidden style="margin-top:16px"><div data-act="c3-unit1"></div><div data-act="c3-unit2" style="margin-top:14px"></div></div>`}),

sp('c3-s2','Compare down a column',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Compare down a column</h2>${vid({title:'Compare down a column',len:'90 seconds',script:['Cover all but the holiday column. Rank the five jobs from most to fewest.','Say: teachers had the most, chefs had the fewest.','Contrast “fewer days” with “less money”.','Finish: one sentence for the top and the bottom of each column.']})}<p>Inside one column, the figures share a unit, so you can rank them. Use superlatives for the top and the bottom.</p><ul class="clean"><li><b>Hours:</b> lawyers worked the <b>longest</b> hours (50); nurses the <b>shortest</b> (38).</li><li><b>Holidays:</b> teachers had the <b>most</b> (40); chefs had the ${T('the fewest','fewest')} (22).</li><li><b>Salary:</b> lawyers were the <b>highest</b> paid (€88,000); chefs the <b>lowest</b> (€30,000).</li></ul>${insight('Fewer or less?','Days and hours are counted: <i>fewer days, fewer hours</i>. Money is an amount: <i>less money</i>, or better, <i>a lower salary</i>.')}${take('Rank inside one column: the most, the longest, the highest, and at the other end the fewest, the shortest, the lowest.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c3-fix"></div>`}),

sp('c3-s3','Link across a row',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Link across a row</h2>${vid({title:'Link across a row',len:'2 minutes',script:['Highlight the chef row: 46, 22, 30.','Say what each figure means in its column: long hours, fewest holidays, lowest pay.','Build the sentence: Chefs worked 46 hours a week, yet they had the fewest holidays and the lowest salary.','Finish: one row, three columns, one picture.']})}<p>Now read across one row. Where does this occupation sit in each column? Put the answers together.</p><ul class="clean"><li><b>Chefs:</b> second-longest hours (46), the fewest holidays (22) and the lowest salary (€30,000).</li><li><b>Software developers:</b> a short week (39 hours), but the second-highest salary (€62,000).</li></ul><p>When the facts point in different directions, use a contrast linker:</p><ul class="clean"><li><i>Chefs worked 46 hours a week, <b>yet</b> they earned the least.</i></li><li><i>${T('despite','Despite')} working only 39 hours, software developers earned €62,000.</i></li></ul>${note('After “despite”, use a noun or an -ing form: despite working, despite the long hours. Never “despite they worked”.')}<div class="clear"></div>${take('A row profile: where the row sits in each column, joined by yet, while or despite.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-build"></div><div data-gate="c3-build" hidden style="margin-top:16px"><div data-act="c3-yet"></div></div>`}),

sp('c3-s4','Test the connections',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Test the connections</h2><p>Students often assume a connection between columns: longer hours must mean higher pay. Check it against the figures before you write it.</p><ul class="clean"><li><b>Lawyers:</b> the longest hours <i>and</i> the highest pay. The pattern holds.</li><li><b>Chefs:</b> the second-longest hours, but the lowest pay. The pattern breaks.</li><li><b>Software developers:</b> one of the shortest weeks, but the second-highest pay.</li></ul>${insight('What the table can and cannot tell you','You can report that long hours and high pay went together for lawyers but not for chefs. You cannot explain why: Task 1 never asks for reasons.')}${mistake('<s>The more hours people worked, the more they earned.</s> The chefs prove this wrong. Check every row before you write a general rule.')}${take('Before you write a general rule, check it against every row. One exception means you need a contrast instead.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-claim"></div>`}),

sp('c3-s5','Chapter challenge: five occupations',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and one body paragraph for this task.</p>${taskbox('The table below shows the average working hours, days of paid holiday and salary in five occupations in one country.')}${chart('jobs')}${note('Find the top and the bottom of each column, then look for the occupation with the best or the worst combination.')}<ul class="clean" style="font-size:15px"><li>Overview: two or three key features, no figures.</li><li>Body: at least three occupations, every figure with its unit.</li><li>One contrast with yet, while or despite.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Read every column heading: each column can have its own unit.','Rank inside a column with superlatives; use “fewer” for things you count.','Build a profile of one row across all the columns.','Test a general rule against every row; one exception means a contrast.']})
];

const acts={
'c3-parts':{type:'hotspots',level:'Guided',skill:'Reading a table with several measures',decision:'Find each part of the table.',prompt:'Select the part of the table that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.jobs,{id:'ch-jobs-hot',hot:1,hotCell:[0,3]}),
  parts:{title:'That is the title: what is measured.',x:'That is a column heading: one of the three measures, with its unit.',y:'That is a row heading: one of the occupations.',point:'That is one figure: one occupation, one measure.'},
  targets:[{q:'What is the table about?',part:'title',ok:'Working hours, holidays and pay in five occupations in one country.'},
           {q:'Where do you find the unit for each figure?',part:'x',ok:'In the column headings: hours per week, days per year, €000s.'},
           {q:'Which jobs are compared?',part:'y',ok:'The row headings: five occupations, from lawyer to chef.'},
           {q:'What was a lawyer’s average salary?',part:'point',ok:'88 in a column of €000s: €88,000 a year.'}]},
'c3-unit1':{type:'choice',level:'Supported',skill:'Units',decision:'What does 41 in the teacher row mean?',prompt:'Look at the salary column.',
  opts:[{t:'An average salary of €41,000 a year',ok:1,why:'The column is in €000s.'},{t:'41 hours a week',why:'Teachers worked 42 hours. 41 is in the salary column.'},{t:'€41 a year',why:'The heading says €000s, so multiply by 1,000.'}]},
'c3-unit2':{type:'choice',level:'Supported',skill:'Comparing figures',decision:'Which comparison is valid?',
  opts:[{t:'Teachers had 40 days of paid holiday, compared with 22 for chefs.',ok:1,why:'Two figures from the same column, in the same unit.'},{t:'Lawyers worked 50 hours but earned 88, so their salary was higher than their hours.',why:'Hours and euros can’t be compared with each other.'},{t:'Nurses had 27 days of holiday, which was less than their 38 hours.',why:'Days and hours are different measures.'}]},
'c3-fix':{type:'fix',level:'Supported',skill:'Superlatives and fewer',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Lawyers worked the most long hours.',ok:/the longest/i,bad:/most long/i,hint:'“Long” is a short adjective. Its superlative is one word.',err:'the most long',fix:'the longest',why:'Short adjectives take -est: the longest.',model:'Lawyers worked the longest hours.'},
         {wrong:'Chefs had less days of holiday than nurses.',ok:/fewer (days|holiday)/i,bad:/less days/i,hint:'Days are counted one by one.',err:'less days',fix:'fewer days',why:'Use “fewer” for things you count.',model:'Chefs had fewer days of holiday than nurses.'},
         {wrong:'Teachers had the more holidays of the five occupations.',ok:/the most (days|holiday|paid)/i,bad:/the more/i,hint:'You are comparing five occupations, not two.',err:'the more',fix:'the most',why:'With three or more, use the superlative.',model:'Teachers had the most holidays of the five occupations.'},
         {wrong:'Chefs earned the fewest money.',ok:/(the least( money)?|the lowest (salary|pay))/i,bad:/fewest money/i,hint:'Money is an amount, not something you count one by one.',err:'the fewest money',fix:'the least money / the lowest salary',why:'“Fewest” is for things you count. Use “the least”, or “the lowest salary”.',model:'Chefs had the lowest salary.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'A row profile',decision:'Build a sentence about chefs.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Chefs worked','46 hours a week,','yet they had','the fewest days of holiday','and the lowest salary,','at €30,000.'],
  distract:[{t:'at 30.',why:'The salary needs its unit: the column is in €000s.',fix:'at €30,000.'},{t:'the less days of holiday',why:'Days are counted, and you are comparing five jobs: the fewest.',fix:'the fewest days of holiday'}],
  right:'The hours, the contrast, and both lowest positions with the unit.',orderMsg:'All the right pieces, but check the order: the job and its hours, the contrast, then holidays and salary.',incompleteMsg:'Good so far, but incomplete. Add the holidays and the salary.'},
'c3-yet':{type:'choice',level:'Supported',skill:'Contrast linkers',decision:'Which sentence is correct and accurate?',
  opts:[{t:'Despite working only 39 hours a week, software developers earned €62,000, the second-highest salary.',ok:1,why:'“Despite” + -ing, and an accurate contrast: a short week, but high pay.'},{t:'Despite they worked only 39 hours, software developers earned €62,000.',why:'“Despite” can’t be followed by a clause. Use “despite working” or “although they worked”.'},{t:'Software developers worked only 39 hours, so they earned €62,000.',why:'“So” suggests the short hours caused the high pay. The table gives no reasons, and the facts contrast.'}]},
'c3-claim':{type:'binary',level:'Independent',skill:'Testing connections',decision:'Is each statement true according to the table?',prompt:'Check every row.',labels:['True','False'],
  items:[{t:'Lawyers had both the longest working week and the highest salary.',a:0,right:'50 hours and €88,000: the top of both columns.',wrong:'It is true: 50 hours and €88,000 are both the highest figures.'},
         {t:'The occupations with longer hours always earned more.',a:1,right:'Right. Chefs worked 46 hours but earned the least.',wrong:'Chefs worked the second-longest hours but had the lowest salary.'},
         {t:'Teachers had 12 more days of holiday than software developers.',a:0,right:'40 − 28 = 12.',wrong:'It is true: 40 − 28 = 12.'},
         {t:'Nurses worked the shortest hours and had the fewest holidays.',a:1,right:'Right. Nurses had 27 days; chefs had the fewest, with 22.',wrong:'Nurses did have the shortest week, but chefs had the fewest holidays (22).'},
         {t:'Lawyers earned almost three times as much as chefs.',a:0,right:'88 ÷ 30 ≈ 2.9.',wrong:'It is true: 88 ÷ 30 ≈ 2.9, so almost three times.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Comparing several measures',decision:'Write an overview and one body paragraph.',prompt:'Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'a',label:'Body paragraph',rows:7,ph:'Lawyers earned…'}],
  checks:[{t:'Your overview starts with “Overall,” or similar.',fix:'Start the overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)},
          {t:'Your overview has no figures.',fix:'Remove the figures from your overview.',fn:v=>v.ov.trim()&&!/\d/.test(OE.figs(v.ov))},
          {t:'You mentioned the best-paid occupation.',fix:'Lawyers had the highest salary: make sure you mention it.',fn:v=>/lawyer/i.test(v.ov+v.a)},
          {t:'You mentioned the teachers’ holidays.',fix:'Teachers had far more holiday than anyone else: mention it.',fn:v=>/teacher/i.test(v.ov+v.a)&&/holiday/i.test(v.ov+v.a)},
          {t:'You gave salaries in euros and thousands.',fix:'Write salaries in full: €88,000, not 88.',fn:v=>/€\s?\d{2},000|\d{2},000 euros|€\s?\d{2}k/i.test(v.a)},
          {t:'You used a contrast linker.',fix:'Add a contrast with yet, while, whereas, although or despite.',fn:v=>/\b(yet|while|whereas|although|despite|by contrast|however)\b/i.test(v.a)},
          {t:'Your body paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model answer',
  model:`<p><button type="button" class="hl" data-n="0">Overall, lawyers were the best paid of the five occupations by a wide margin, while teachers had considerably more paid holiday than anyone else.</button> <button type="button" class="hl" data-n="1">Chefs had the least favourable conditions</button>, combining long hours with the fewest holidays and the lowest pay.</p><p>Lawyers earned an average of €88,000 a year, <button type="button" class="hl" data-n="2">almost three times as much as chefs</button> (€30,000), and they also worked the longest week, at 50 hours. <button type="button" class="hl" data-n="3">Despite working only 39 hours</button>, software developers were the second-best paid, at €62,000. Chefs, by contrast, worked 46 hours a week but had just 22 days of holiday. Teachers received 40 days of paid holiday, 12 more than software developers, who had the next-highest number.</p>`,
  notes:['The top of two columns, with no figures.','A row profile in the overview: chefs are near the worst end of every column.','A calculated comparison inside one column: 88 ÷ 30 ≈ 2.9.','A contrast across one row: a short week, but high pay.'],
  self:['I read the unit of every column.','My overview has no figures.','Every figure has its unit: hours, days or euros.','I compared figures only within the same column.'],revise:1}
};

const gloss={
  'despite':{term:'despite',def:'A linker for contrast. It is followed by a noun or an -ing form, never by a full clause.',path:'M20,60 L120,60 M120,30 L220,30',ex:'“Despite working only 39 hours, software developers earned €62,000.”'},
  'the fewest':{term:'the fewest',def:'The superlative of “few”, for things you can count: days, hours, people. For amounts, use “the least”.',path:'M20,20 L80,36 L140,50 L220,70',ex:'“Chefs had the fewest days of paid holiday.”'},
  'by a wide margin':{term:'by a wide margin',def:'With a large gap between the first and the second. Check the figures: use it only when the lead is clearly large.',path:'M20,70 L220,70 M20,20 L120,20',ex:'“Lawyers were the best paid by a wide margin.”'}
};

const retrieval={
 'c3-s1':[{q:'88 in a column headed “€000s” means…',opts:[{t:'€88,000',ok:1,why:'Multiply by 1,000.'},{t:'€88',why:'Read the heading.'}]}],
 'c3-s2':[{q:'Days of holiday: fewer or less?',opts:[{t:'fewer',ok:1,why:'Days are counted.'},{t:'less',why:'Less is for amounts.'}]}],
 'c3-s3':[{q:'After “despite” you use…',opts:[{t:'a noun or an -ing form',ok:1,why:'despite working'},{t:'a full clause',why:'Not after despite.'}]}],
 'c3-s4':[{q:'One row breaks your general rule. What do you write?',opts:[{t:'A contrast',ok:1,why:'Report the exception.'},{t:'The rule anyway',why:'That would be inaccurate.'}]}],
 'c3-s5':[{q:'Can you compare 46 hours with €30,000?',opts:[{t:'No: different units',ok:1,why:'Compare within a column.'},{t:'Yes',why:'Hours and euros aren’t comparable.'}]}]
};

const minitest=[
 {q:'What should you read first in a table with several measures?',opts:[{t:'Every column heading',ok:1,why:'Each column has its own unit.'},{t:'The biggest figure',why:'You need its unit first.'},{t:'The last row',why:'Start with the headings.'}],sp:'c3-s1'},
 {q:'Salary column (€000s): 62. How do you write it?',opts:[{t:'€62,000',ok:1,why:'Multiply by 1,000.'},{t:'62 euros',why:'Read the heading.'},{t:'62',why:'Every figure needs its unit.'}],sp:'c3-s1'},
 {q:'Choose the correct superlative.',opts:[{t:'the longest hours',ok:1,why:'Short adjective + -est.'},{t:'the most long hours',why:'Use -est.'},{t:'the longer hours',why:'Comparing five: superlative.'}],sp:'c3-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'Chefs had fewer holidays than nurses.',ok:1,why:'Counted: fewer.'},{t:'Chefs had less holidays than nurses.',why:'Use fewer.'},{t:'Chefs had the fewer holidays than nurses.',why:'No “the” with a comparative here.'}],sp:'c3-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'Despite working 46 hours, chefs earned the least.',ok:1,why:'despite + -ing'},{t:'Despite they worked 46 hours, chefs earned the least.',why:'No clause after despite.'},{t:'Despite of working 46 hours, chefs earned the least.',why:'No “of” after despite.'}],sp:'c3-s3'},
 {q:'What is a row profile?',opts:[{t:'Where one row sits in each column, put together',ok:1,why:'One job, several measures.'},{t:'A list of every figure',why:'That is a list.'},{t:'The title of a row',why:'It is a summary of the row.'}],sp:'c3-s3'},
 {q:'Lawyers: 50 hours, €88,000. Chefs: 46 hours, €30,000. Is “longer hours meant higher pay” accurate?',opts:[{t:'No: chefs are an exception',ok:1,why:'Long hours, lowest pay.'},{t:'Yes',why:'Check every row.'},{t:'It can’t be checked',why:'It can: look at the chefs.'}],sp:'c3-s4'},
 {q:'88 and 30 (€000s). Which is accurate?',opts:[{t:'almost three times as much',ok:1,why:'≈ 2.9.'},{t:'more than three times as much',why:'3 × 30 = 90.'},{t:'twice as much',why:'2 × 30 = 60.'}],sp:'c3-s4'}
];

const cannow=[['Read the unit of every column','c3-s1'],['Rank inside a column with superlatives and “fewer”','c3-s2'],['Build a profile of one row with yet, while or despite','c3-s3'],['Test a general rule against every row','c3-s4'],['Write an overview and a body paragraph for a table with several measures','c3-s5']];
addChapter({n:3,spreads,acts,gloss,charts:{jobs:C.jobs,'jobs-hot':Object.assign({},C.jobs,{id:'ch-jobs-hot',hot:1,hotCell:[0,3]})},retrieval,minitest,cannow});
})();
