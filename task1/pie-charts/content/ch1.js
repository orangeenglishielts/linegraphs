/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 1 · UNDERSTANDING PIE CHARTS
   ACTIVITY IDS (type · level)
     c1-story   choice    Challenge    Step 1  What is the main story?
     c1-rewrite write     Guided       Step 1  Rewrite the weak sentence
     c1-parts   hotspots  Guided       Step 2  Find the parts of the chart
     c1-share   choice    Supported    Step 2  Shares, not amounts
     c1-kind    sort      Guided       Step 3  What does the chart ask you to do?
     c1-lang    binary    Supported    Step 3  Does it fit a single pie?
     c1-select  binary    Supported    Step 4  Include or leave out?
     c1-stronger choice   Supported    Step 4  Which sentence is stronger?
     c1-exc     choice    Supported    Step 5  Find the exception
     c1-overall choice    Independent  Step 5  Choose the overview
     c1-write   write     Independent  Step 6  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C,illus}=PIE;
const P='Chapter 1',CT='Understanding Pie Charts',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The charts below show how land was used in one region in 1990 and 2020';

const spreads=[
opening({n:1,title:CT,lede:'A pie chart shows how a whole is divided into parts. Before you can describe it well, you need to read it the way an examiner does: as shares of a total. In this chapter you’ll learn to read pie charts accurately and write your first introduction and overview.',
  outcomes:[`read a pie chart’s title, labels, ${T('legend')} and ${T('segment','segments')} accurately`,'tell what a single pie, or two or three pies, asks you to compare',`select the key features: the largest and smallest ${T('share','shares')}, and the biggest changes`,'write an introduction and an overview for two pie charts'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus([45,20,17,10,8]),
  steps:[[1,'c1-s1','Meet the pie chart','Start with a challenge','Discover'],[2,'c1-s2','Read the chart','Shares of a whole','Understand'],[3,'c1-s3','One pie or several?','What to compare','Understand'],[4,'c1-s4','Find the key features','Select what matters','Practise'],[5,'c1-s5','Find the main comparison','Worked example and practice','Practise'],[6,'c1-s6','Chapter challenge','Write an introduction and overview','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  stepsTitle:'Six steps, one skill each',
  extraRight:howto('Every pie adds up to 100%.','accounted for','Heating accounted for almost half')}),

sp('c1-s1','Meet the pie chart',{exploreFirst:true,
 left:`${head('Step 1 · Discover','Learn')}<h2>Meet the pie chart</h2>${vid({title:'Meet the pie chart',len:'90 seconds',script:['Open on the two travel pies with the years covered. Ask: what changed?','Explain that each pie is one whole, 100%, and each segment is one share of it.','Point to the bicycle segment: 10% then 30%. Say: a share that triples is the kind of change an examiner wants you to notice.','Finish: in this step you’ll turn a sentence about colours into a sentence about students.']})}<p>A ${T('pie chart')} shows how one whole is divided up. The whole is always 100%, and each ${T('segment')} is one ${T('share')} of it.</p><p>Task 1 often gives you two or three pies, for different years or different groups. Then the main story is usually how the shares <b>changed</b>, or how the groups <b>differ</b>.</p>${note('With two pies, look first for the segment that changed most, and for any change in which segment is largest.')}<p>Your job is the same as for any Task 1 chart: <b>select</b> the important information, <b>describe</b> it accurately and <b>compare</b> where relevant.</p><div class="clear"></div>${take('A pie chart shows shares of a whole. With two pies, find the biggest change and any change at the top.')}`,
 right:`${head('Start here · Challenge','Explore')}<h2>What is the main story?</h2><p class="small">Try this before you watch the video. Getting it wrong is part of learning.</p>${chart('travel')}<p class="legend-note">Move over or tab to a segment to see its value.</p><div data-act="c1-story" style="margin-top:14px"></div><div data-gate="c1-story" hidden style="margin-top:16px"><div data-act="c1-rewrite"></div></div>`}),

sp('c1-s2','Read the chart',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read the chart</h2>${vid({title:'Read the pie chart',len:'75 seconds',script:['Read the title aloud: what is divided up, where and when.','Point to the labels above each pie: here they are years.','Show the legend: which colour is which category.','Warn: a pie shows shares, not amounts. A smaller share is not always a smaller amount.']})}<p>Read these parts before you write anything.</p><ul class="clean"><li><b>Title:</b> what the whole is, where and when. You will paraphrase it in your introduction.</li><li><b>Pie labels:</b> years, or groups such as age groups. They tell you what to compare.</li><li><b>${T('legend','Legend')}:</b> which colour is which category.</li><li><b>Segments:</b> one share each, usually with its percentage.</li></ul>${note('A pie shows shares, not amounts. If the total grew, a smaller share can still mean more money.')}<div class="clear"></div>${take('Title, labels, legend, percentages. And remember: every pie is 100% of its own total.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-parts"></div><div data-act="c1-share" style="margin-top:16px"></div>`}),

sp('c1-s3','One pie or several?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>One pie or several?</h2><p>The number of pies, and their labels, tell you what kind of comparison to make.</p><ul class="clean"><li><b>One pie:</b> compare the segments. Nothing rises or falls. <i>“Heating accounted for almost half of home energy use.”</i></li><li><b>Two or three pies for different years:</b> describe how the shares changed. <i>“The share of students who cycled tripled.”</i></li><li><b>Pies for different groups</b> (age groups, countries): compare the groups. <i>“Older teenagers spent a bigger share of their screen time on social media.”</i></li></ul>${chart('homeenergy')}${mistake('<s>Heating increased to 45%.</s> One pie has no time period. Compare instead: <i>“Heating used the largest share of energy, at 45%.”</i>')}${take('One pie: compare the segments. Pies for years: describe change. Pies for groups: compare the groups.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c1-kind"></div><div data-act="c1-lang" style="margin-top:16px"></div>`}),

sp('c1-s4','Find the key features',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Find the key features</h2><p>A pie with five segments still has too much detail for every figure. Look for these features.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:6px;font-size:15px"><li><b>The largest share:</b> heating, at 45%, almost half.</li><li><b>The smallest share:</b> lighting, at 8%.</li><li><b>Segments that combine into a big share:</b> heating and hot water together made up 65%, almost two-thirds.</li><li><b>Similar shares:</b> hot water (20%) and appliances (17%).</li></ol><p>With two pies, also look for the <b>biggest change</b> and any change in which segment is <b>largest</b>.</p>${mistake('<s>Heating is 45%, hot water is 20%, appliances are 17%, cooking is 10% and lighting is 8%.</s> This lists every segment and compares nothing.')}${take('Largest, smallest, combined shares, similar shares. With two pies: the biggest change and any new leader.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the home energy chart in Step 3.</p>${note('If a detail would still be true of almost any pie chart, it is not a key feature.')}<div data-act="c1-select"></div><div class="clear"></div><div data-act="c1-stronger" style="margin-top:16px"></div>`}),

sp('c1-s5','Find the main comparison',{
 left:`${head('Step 5 · Practise','Learn')}<h2>Find the main comparison</h2>${vid({title:'Find the main comparison',len:'2 minutes',script:['Show the council budget pies. Ask: which segment was largest in each year?','Walk through the three questions on this page.','Point to health: from second to first. Say: a change at the top belongs in the overview.','Read the overview aloud and show that it has no figures.']})}<h3>Worked example</h3>${chart('budget')}<ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Which segment was largest, and did that change?</b> Education in 2000; health in 2020.</li><li><b>Which shares grew, and which shrank?</b> Health and parks grew; the other three shrank.</li><li><b>What was the biggest change?</b> Health rose by 7 percentage points and overtook education.</li></ol>${insight('My overview','Overall, education received the largest share of the budget in 2000, but by 2020 health had overtaken it. The shares spent on health and parks grew, while the other three areas received a smaller share.')}${take(`An ${T('overview')} names the largest segment, the main changes and any change at the top. No figures.`)}`,
 right:`${head('Step 5 · Practice','Explore')}${chart('elec')}<div data-act="c1-exc" style="margin-top:14px"></div><div data-act="c1-overall" style="margin-top:16px"></div>`}),

sp('c1-s6','Chapter challenge: introduction and overview',{
 left:`${head('Step 6 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the first two parts of a Task 1 answer: the <b>introduction</b> and the <b>overview</b>.</p>${taskbox('The charts below show how land was used in one region in 1990 and 2020.')}${chart('land')}${note('Paraphrase the task: change words and word order. “The charts below show” is the part most often copied.')}<ul class="clean" style="font-size:15px"><li>Introduction: one sentence. What, where and when.</li><li>Overview: two sentences. The largest share, the main changes, any change at the top. No figures.</li></ul><div class="clear"></div>`,
 right:`${head('Step 6 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['A pie chart shows shares of a whole: every pie is 100% of its own total.','A pie shows shares, not amounts. A smaller share is not always a smaller amount.','One pie: compare the segments. Pies for years: describe change. Pies for groups: compare the groups.','Report the largest and smallest shares, combined shares, and with two pies the biggest change.','An overview starts with “Overall,” and has no figures.']})
];

const acts={
'c1-story':{type:'choice',level:'Challenge',skill:'Finding the main story',decision:'Which sentence tells the main story of these two pies?',prompt:'Compare the largest segment in each year before you choose.',
  opts:[{t:'The car was the most common way to travel in 2005, but by 2025 cycling had become the most popular, while the car’s share fell sharply.',ok:1,why:'This gives the change at the top and the biggest fall: car 40% to 15%, bicycle 10% to 30%.'},
        {t:'In 2025, 30% of students cycled to the campus.',why:'Accurate, but it is one figure from one pie. It doesn’t say what changed.'},
        {t:'More students cycle now because the university built new cycle lanes.',why:'The charts give no reasons. In Task 1 you describe the data, not explain it.'},
        {t:'The orange segment is much bigger in the second pie.',why:'This describes the picture. Name the students and the type of transport instead of the colour.'}]},
'c1-rewrite':{type:'write',level:'Guided',skill:'Writing a precise sentence',decision:'Now improve a weak sentence.',prompt:'Rewrite this sentence so it is precise: <b>“The orange part got three times bigger.”</b> Say who and what it shows, give both figures with % and both years, and don’t mention colours or parts.',
  fields:[{k:'a',label:'My sentence',rows:3,ph:'The proportion of students who…'}],
  checks:[{t:'You said who: students.',fix:'Say who was measured: students at the university.',fn:v=>/student/i.test(v.a)},
          {t:'You named the type of transport: cycling.',fix:'Name what the orange segment shows: cycling, or travelling by bicycle.',fn:v=>/(cycl|bicycl|bike)/i.test(v.a)},
          {t:'You gave both figures with %.',fix:'Add both figures with %: 10% and 30%.',fn:v=>/10\s*(%|per ?cent)/i.test(v.a)&&/30\s*(%|per ?cent)/i.test(v.a)},
          {t:'You gave both years.',fix:'Add the years: 2005 and 2025.',fn:v=>/2005/.test(v.a)&&/2025/.test(v.a)},
          {t:'You described the data, not the picture.',fix:'Remove the colour and words like “part”, “segment” or “slice”.',fn:v=>v.a.trim()&&!/(orange|part\b|segment|slice)/i.test(v.a)}],
  modelTitle:'My version',model:'The proportion of students who cycled to the campus tripled, from 10% in 2005 to 30% in 2025.'},
'c1-parts':{type:'hotspots',level:'Guided',skill:'Reading the parts of a pie chart',decision:'Find each part of the chart.',prompt:'Select the part of the chart that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.budget,{id:'ch-budget-hot',hot:1,hotSlice:[1,1]}),
  parts:{title:'That is the title: what the whole is, where and when.',x:'That is a pie label: it tells you which year the pie shows.',legend:'That is the legend: which colour is which area of spending.',point:'That is one segment: one share of the total.'},
  targets:[{q:'What is being divided up?',part:'title',ok:'The title tells you: one city council’s spending. You will paraphrase it in your introduction.'},
           {q:'Which years are compared?',part:'x',ok:'The labels above the pies show the years: 2000 and 2020.'},
           {q:'What do the colours stand for?',part:'legend',ok:'The legend shows the five areas of spending.'},
           {q:'What share of spending went on health in 2020?',part:'point',ok:'32%, up from 25% in 2000. That made health the largest share in 2020.'}],
  doneMsg:'<b>All four found.</b> Before you write about any pie chart, check the title, the pie labels, the legend and the percentages.'},
'c1-share':{type:'choice',level:'Supported',skill:'Shares, not amounts',decision:'Education’s share fell from 35% in 2000 to 30% in 2020. Does that mean the council spent less money on education?',
  opts:[{t:'Not necessarily: a pie shows shares of the total, not amounts',ok:1,why:'If the total budget grew, 30% of a bigger budget could be more money than 35% of a smaller one. Write “a smaller share”, not “less money”.'},{t:'Yes, it spent 5% less money',why:'The pie only shows shares. Without the total, you can’t say how much money was spent.'},{t:'Yes, because the segment is smaller',why:'A smaller segment is a smaller share of that year’s total, not necessarily a smaller amount.'}]},
'c1-kind':{type:'sort',level:'Guided',skill:'What to compare',decision:'What does each chart ask you to do?',cats:['Compare the segments','Describe change in shares','Compare groups'],
  items:[{w:'One pie: how a family spends its monthly income',c:0,m:'is one pie with no time period, so you compare the segments.'},
         {w:'Two pies: sources of electricity in 2000 and 2020',c:1,m:'has two years, so you describe how the shares changed.'},
         {w:'Three pies: how teenagers aged 13 to 14, 15 to 16 and 17 to 18 divide their screen time',c:2,m:'has three age groups, not years, so you compare the groups.'},
         {w:'Three pies: how people listened to music in 2010, 2017 and 2024',c:1,m:'has three years, so you describe how the shares changed.'},
         {w:'Two pies: what men and women spend their free time on',c:2,m:'compares two groups at one time, so you compare the groups.'}]},
'c1-lang':{type:'binary',level:'Supported',skill:'Language for a single pie',decision:'Does each sentence fit the home energy chart?',prompt:'It is one pie, with no time period. Use the chart in Step 3.',labels:['Fits','Doesn’t fit'],
  items:[{t:'Heating accounted for almost half of the energy used in the home.',a:0,right:'45% is almost half, and “accounted for” describes a share.',wrong:'It fits: heating was 45%, almost half.'},
         {t:'Heating rose to 45%.',a:1,right:'Right. One pie has no time period, so nothing rises.',wrong:'There is no earlier figure, so heating can’t have risen. Say: heating accounted for 45%.'},
         {t:'Heating and hot water together made up almost two-thirds of the total.',a:0,right:'45% + 20% = 65%, almost two-thirds (66.7%).',wrong:'It fits: 45% + 20% = 65%, almost two-thirds.'},
         {t:'Lighting used the smallest share, at 8%.',a:0,right:'The smallest share is a key feature.',wrong:'It fits: lighting was the smallest segment.'},
         {t:'Cooking fell to 10%.',a:1,right:'Right. With one pie, nothing falls.',wrong:'There is only one pie, so cooking can’t have fallen.'}]},
'c1-select':{type:'binary',level:'Supported',skill:'Selecting key features',decision:'Include it in your answer, or leave it out?',prompt:'Decide for each sentence about the home energy chart.',labels:['Include','Leave out'],
  items:[{t:'Heating used by far the largest share of energy, at 45%.',a:0,right:'The largest share is always a key feature.',wrong:'This is the largest share, so include it.'},
         {t:'Together, heating and hot water made up almost two-thirds of the total.',a:0,right:'A combined share like this shows you see the pattern.',wrong:'This combined share (65%) is a key feature.'},
         {t:'The chart is a circle divided into five coloured parts.',a:1,right:'Right. This describes the picture.',wrong:'Every pie chart looks like this. It says nothing about energy.'},
         {t:'People use a lot of heating because the winters are cold.',a:1,right:'Right. The chart gives no reasons.',wrong:'The chart doesn’t say why. Task 1 asks you to describe, not explain.'},
         {t:'Lighting accounted for the smallest share, just 8%.',a:0,right:'The smallest share is a key feature.',wrong:'The smallest share is a key feature, so include it.'}]},
'c1-stronger':{type:'choice',level:'Supported',skill:'Precise description',decision:'Which sentence is stronger?',
  opts:[{t:'Heating accounted for almost half of all the energy used in the home (45%), more than twice the share used for hot water.',ok:1,why:'It names what was measured, gives the share as a fraction and a figure, and compares it with another segment: 45 is more than twice 20.'},
        {t:'Heating is the biggest slice.',why:'This describes the picture. Say what it means: the largest share of home energy use.'},
        {t:'Homes use lots of energy for heating.',why:'“Lots of” is vague, and there is no figure or comparison.'}]},
'c1-exc':{type:'choice',level:'Supported',skill:'Exceptions',decision:'Which source of electricity had the same share in both years?',
  opts:[{t:'Nuclear',ok:1,why:'Nuclear power provided 15% in both 2000 and 2020. Every other share changed.'},{t:'Solar',why:'Solar doubled, from 5% to 10%.'},{t:'Gas',why:'Gas rose from 25% to 35% and became the largest source.'}]},
'c1-overall':{type:'choice',level:'Independent',skill:'Writing an overview',decision:'Which is the best overview of the electricity charts?',
  opts:[{t:'Overall, coal went from being the main source of electricity to one of the smaller sources, while gas became the largest source and wind grew dramatically. Only nuclear power kept the same share.',ok:1,why:'The change at the top, the biggest changes and the exception, with no figures.'},
        {t:'Overall, coal fell from 50% to 15%, and wind rose from 5% to 25%.',why:'Accurate, but figures belong in the body paragraphs.'},
        {t:'Overall, the charts show five sources of electricity in two years.',why:'This repeats the introduction. It says nothing about what changed.'},
        {t:'Overall, every source of electricity grew.',why:'Not accurate: coal’s share fell sharply, and nuclear stayed the same.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write your introduction and overview.',prompt:'One introduction sentence and two overview sentences. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The pie charts compare…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction says what was divided up: land use.',fix:'Say what the charts show: how land was used.',fn:v=>/land/i.test(v.intro)},
          {t:'Your introduction gives the two years.',fix:'Give the years: 1990 and 2020.',fn:v=>/1990/.test(v.intro)&&/2020/.test(v.intro)},
          {t:'You paraphrased the task rather than copying it.',fix:'You copied eight or more words in a row from the task. Change some words and the word order.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” or a similar phrase.',fix:'Start your overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary|generally)/i.test(v.ov)},
          {t:'Your overview has no figures.',fix:'Keep the percentages for the body paragraphs.',fn:v=>v.ov.trim()&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names farmland as the largest use.',fix:'Name the largest share in both years: farmland.',fn:v=>/farm/i.test(v.ov)},
          {t:'Your overview mentions the growth of towns and cities.',fix:'Mention the largest rise: towns and cities almost doubled their share.',fn:v=>/(town|cit|urban|built)/i.test(v.ov)}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span><button type="button" class="hl" data-n="0">The pie charts compare</button> the proportions of land in one region <button type="button" class="hl" data-n="1">that were used for five different purposes</button> in 1990 and 2020.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="2">Overall, farmland took up the largest share of land in both years</button>, although its share fell considerably. Over the same period, <button type="button" class="hl" data-n="3">towns and cities almost doubled their share</button>, while forest and water also covered a larger proportion of the region.</p>`,
  notes:['“Compare” suits two pies, and it replaces “show” from the task.','“Used for five different purposes” turns the task’s noun phrase into a clause. Same meaning, new structure.','The largest share, and the fact that it shrank, in one sentence. Farmland fell from 55% to 42%, the biggest fall on the chart.','Towns and cities went from 10% to 18%, almost double. That is the largest rise on the chart, so it belongs in the overview, without the figures.'],
  self:['My introduction says what, where and when.','I changed the task’s words and word order.','My overview starts with “Overall,” and has no figures.','My overview names the largest share and the most striking change.'],revise:1}
};

const gloss={
  'pie chart':{term:'pie chart',def:'A circle divided into segments. The whole circle is 100%, and each segment shows one share of the total.',path:'M120,45 m-38,0 a38,38 0 1,0 76,0 a38,38 0 1,0 -76,0 M120,45 L120,7 M120,45 L156,57',ex:'“The two pie charts compare how students travelled to the campus.”'},
  'segment':{term:'segment',def:'One part of a pie chart, showing one category’s share of the total. Also called a slice or sector.',path:'M120,45 L120,7 A38,38 0 0,1 156,57 Z',ex:'“Each segment shows one type of transport.”'},
  'share':{term:'share',def:'The part of a total that belongs to one category, usually a percentage. A share is not an amount.',path:'M120,45 m-38,0 a38,38 0 1,0 76,0 a38,38 0 1,0 -76,0 M120,45 L120,7 M120,45 L83,52',ex:'“Health’s share of the budget rose from 25% to 32%.”'},
  'legend':{term:'legend',def:'The key that tells you which colour is which category. Read it before you write anything.',path:'M20,24 L40,24 M20,48 L40,48 M20,72 L40,72',ex:'“According to the legend, the green segment shows travel by bus.”'},
  'overview':{term:'overview',def:'One or two sentences that give the big picture: the largest share, the main changes and any change at the top. It has no figures.',path:'M120,45 m-38,0 a38,38 0 1,0 76,0 a38,38 0 1,0 -76,0',ex:'“Overall, farmland took up the largest share of land in both years.”'},
  'accounted for':{term:'accounted for',def:'Was, as a share of a total. It is followed by a percentage or a fraction: accounted for 45%, accounted for almost half.',path:'M120,45 L120,7 A38,38 0 1,1 106,80 Z',ex:'“Heating accounted for almost half of home energy use.”'}
};

const retrieval={
 'c1-s1':[{q:'What does each pie add up to?',opts:[{t:'100%',ok:1,why:'Each pie is one whole.'},{t:'It depends on the chart',why:'A pie always shows a whole: 100%.'}]},{q:'With two pies, what is usually the main story?',opts:[{t:'The biggest change, and any new leader',ok:1,why:'For example cycling overtaking the car.'},{t:'The colour of the largest segment',why:'That describes the picture.'}]}],
 'c1-s2':[{q:'A share fell from 35% to 30%. Did the amount fall?',opts:[{t:'Not necessarily',ok:1,why:'The total may have grown.'},{t:'Yes, always',why:'A pie shows shares, not amounts.'}]}],
 'c1-s3':[{q:'One pie, no years. What do you do?',opts:[{t:'Compare the segments',ok:1,why:'Nothing rises or falls.'},{t:'Describe the trend',why:'There is no time period.'}]},{q:'Three pies for three age groups. What do you do?',opts:[{t:'Compare the groups',ok:1,why:'The labels are groups, not years.'},{t:'Describe change over time',why:'There are no years.'}]}],
 'c1-s4':[{q:'45% and 20% together make…',opts:[{t:'almost two-thirds',ok:1,why:'65% is close to 66.7%.'},{t:'three-quarters',why:'That would be 75%.'}]}],
 'c1-s5':[{q:'Which belongs in an overview of two pies?',opts:[{t:'A change in which segment is largest',ok:1,why:'A change at the top is a key feature.'},{t:'Every percentage',why:'Figures go in the body.'}]}],
 'c1-s6':[{q:'How should the introduction start?',opts:[{t:'The pie charts compare…',ok:1,why:'A new verb, and no “below”.'},{t:'The charts below show…',why:'That copies the task.'}]}]
};

const minitest=[
 {q:'What does a pie chart show?',opts:[{t:'How a whole is divided into shares',ok:1,why:'Each pie is 100%.'},{t:'How amounts change month by month',why:'That is usually a line graph.'},{t:'The steps in a process',why:'That is a process diagram.'}],sp:'c1-s1'},
 {q:'Education fell from 35% to 30% of the budget. Which sentence is accurate?',opts:[{t:'Education received a smaller share of the budget.',ok:1,why:'Shares, not amounts.'},{t:'The council spent less money on education.',why:'The total may have grown.'},{t:'Education spending fell by 5%.',why:'The share fell by 5 percentage points; the change in spending is unknown.'}],sp:'c1-s2'},
 {q:'A chart has three pies labelled 13 to 14, 15 to 16 and 17 to 18. What do you do?',opts:[{t:'Compare the three age groups',ok:1,why:'The labels are groups.'},{t:'Describe change over three years',why:'They are ages, not years.'},{t:'Describe only the first pie',why:'Compare all three.'}],sp:'c1-s3'},
 {q:'One pie: heating 45%. Which sentence fits?',opts:[{t:'Heating accounted for almost half of energy use.',ok:1,why:'One pie: compare.'},{t:'Heating rose to 45%.',why:'Nothing rises in one pie.'},{t:'Heating doubled.',why:'There is nothing to compare it with in time.'}],sp:'c1-s3'},
 {q:'Which is a key feature?',opts:[{t:'Heating and hot water together made up almost two-thirds.',ok:1,why:'A combined share.'},{t:'The pie has five colours.',why:'That is the picture.'},{t:'Winters are cold.',why:'The chart gives no reasons.'}],sp:'c1-s4'},
 {q:'Which source had the same share in 2000 and 2020?',opts:[{t:'Nuclear, at 15%',ok:1,why:'The exception.'},{t:'Wind',why:'Wind rose from 5% to 25%.'},{t:'Coal',why:'Coal fell from 50% to 15%.'}],sp:'c1-s5'},
 {q:'Which is the best overview?',opts:[{t:'Overall, gas became the largest source, while coal’s share fell sharply.',ok:1,why:'A new leader and the biggest change, no figures.'},{t:'Overall, coal was 50% in 2000.',why:'Figures belong in the body.'},{t:'Overall, there are two pies.',why:'No information about the data.'}],sp:'c1-s5'},
 {q:'Which introduction is best for “The charts below show how land was used in one region in 1990 and 2020”?',opts:[{t:'The pie charts compare the proportions of land in one region that were used for different purposes in 1990 and 2020.',ok:1,why:'New words, same details.'},{t:'The charts below show how land was used in one region.',why:'Copied, and the years are missing.'},{t:'The charts are about land.',why:'Too vague.'}],sp:'c1-s6'}
];

const cannow=[['Read a pie chart’s title, labels, legend and percentages','c1-s2'],['Remember that a pie shows shares, not amounts','c1-s2'],['Tell what a single pie, or several pies, asks you to compare','c1-s3'],['Select the largest share, combined shares and the biggest change','c1-s4'],['Write an introduction and an overview for two pies','c1-s6']];
addChapter({n:1,spreads,acts,gloss,charts:{travel:C.travel,homeenergy:C.homeenergy,budget:C.budget,elec:C.elec,land:C.land},retrieval,minitest,cannow});
})();
