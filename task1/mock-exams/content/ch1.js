/* ==========================================================================
   TASK 1 MOCK EXAMS · SEVEN MOCK TASKS
   Each mock: a timer (mN-timer) and a one-box timed write (mN-write)
   with checks, a model answer and a self-review checklist.
   ========================================================================== */
(function(){
const {T,head,note,take,chart,insight,taskbox,copied,opening,review,addChapter}=OE;
const {C}=MOCK;
const P='Mock exams',CT='Seven Mock Tasks',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const words=t=>(String(t).match(/\S+/g)||[]).length;
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="13" text-anchor="middle"><circle cx="200" cy="72" r="52" fill="#FBE6CF"/><path d="M200,72 L200,32" stroke="#292929" stroke-width="4" stroke-linecap="round"/><path d="M200,72 L228,87" stroke="#F88B48" stroke-width="4" stroke-linecap="round"/><text x="200" y="144" fill="#292929">20 minutes · 150 words</text></g></svg>`;

const MOCKS=[
 {n:1,kind:'Line graph',charts:['water'],task:'The graph below shows the average amount of water used per person per day in three cities between 2000 and 2025',
  tip:'Three lines: find the two that cross, and the one that peaks.',
  spec:[{t:'You described all three cities.',fix:'Describe City A, City B and City C.',fn:v=>/city a/i.test(v.a)&&/city b/i.test(v.a)&&/city c/i.test(v.a)},
        {t:'You reported that B overtook A.',fix:'The key change: City B overtook City A between 2020 and 2025.',fn:v=>/(overt|cross|surpass|exceed|higher than)/i.test(v.a)}],
  model:`<p>The line graph compares how much water, on average, each resident of three cities used daily over the 25 years from 2000 to 2025.</p><p>Overall, water use per person fell steadily in City A but rose in City B, so that by the end of the period City B had overtaken City A. City C consistently recorded the lowest consumption, with relatively little change.</p><p>In 2000, residents of City A used 185 litres each per day, considerably more than those in City B, who used 110 litres. However, consumption in City A declined in every five-year period, reaching 140 litres in 2025, while the figure for City B climbed steadily to 150 litres. As a result, the two lines crossed between 2020 and 2025.</p><p>City C started at just 90 litres per person. Its consumption rose to a peak of 104 litres in 2010 but then fell gradually, finishing at 88 litres, slightly below its starting level.</p>`},
 {n:2,kind:'Bar chart',charts:['lib'],task:'The chart below shows the percentage of people in four age groups who used public libraries in one country in 2004 and 2024',
  tip:'Three groups moved one way; one moved the other way and changed position.',
  spec:[{t:'You described all four age groups.',fix:'Include 16 to 24, 25 to 44, 45 to 64 and 65 and over.',fn:v=>/16/.test(v.a)&&/25/.test(v.a)&&/45/.test(v.a)&&/65/.test(v.a)},
        {t:'You used percentage points for a change.',fix:'A change between percentages is in percentage points.',fn:v=>/percentage points?/i.test(v.a)}],
  model:`<p>The bar chart illustrates the proportion of people in four age groups in one country who used public libraries in 2004 and 2024.</p><p>Overall, library use declined among the three younger age groups but increased among people aged 65 and over, who went from being the least likely to use libraries to the most likely. As a result, the oldest and youngest groups effectively swapped places.</p><p>In 2004, the youngest group, aged 16 to 24, had the highest rate of library use, at 48%. Twenty years later, this figure had fallen by 13 percentage points to 35%. The 25 to 44 group saw a smaller fall, from 40% to 32%, while the rate among 45- to 64-year-olds remained almost unchanged, dropping only slightly from 38% to 36%.</p><p>The over-65s followed the opposite pattern. Their rate of library use rose by 14 percentage points, from 30%, the lowest figure in 2004, to 44% in 2024, the highest of all four groups.</p>`},
 {n:3,kind:'Pie charts',charts:['visit'],task:'The charts below show the main reasons why people visited a city centre in 2005 and 2025',
  tip:'Shares, not amounts. Which share shrank most, and which almost doubled?',
  spec:[{t:'You wrote about shares, not numbers of people.',fix:'The pies show shares: write “a smaller share of visits”, not “fewer people”.',fn:v=>!/\b(fewer|more) (people|visitors|shoppers)\b/i.test(v.a)},
        {t:'You reported the fall in shopping.',fix:'Shopping’s share fell from 45% to 28%: report it.',fn:v=>/shop/i.test(v.a)&&/45/.test(v.a)&&/28/.test(v.a)}],
  model:`<p>The two pie charts compare why people chose to visit a city centre in 2005 and in 2025, broken down into five main purposes.</p><p>Overall, shopping remained the most common reason for a visit, but its share fell considerably, while eating out and entertainment accounted for a growing proportion of visits.</p><p>In 2005, shopping was the main purpose of almost half of all visits (45%). By 2025, this share had fallen to 28%, just over a quarter. Work was the second most common reason in both years, accounting for around a quarter of visits (25% and 24%).</p><p>By contrast, the share of people who visited mainly to eat out almost doubled, from 12% to 22%, so that by 2025 it was close to the figure for work. Entertainment also became more significant, rising from a tenth of visits to 16%, while other reasons increased slightly, from 8% to 10%. Taken together, eating out and entertainment accounted for 38% of visits in 2025, compared with 22% in 2005.</p>`},
 {n:4,kind:'Table',charts:['ecar'],task:'The table below shows the number of electric cars sold in five regions of one country in 2015, 2020 and 2025',
  tip:'Everything rose. Who led at the start, who led at the end, and who grew fastest from almost nothing?',
  spec:[{t:'You wrote figures in full, in thousands.',fix:'The table is in thousands: write 180,000, not 180.',fn:v=>/\d{2,3},000/.test(v.a)},
        {t:'You reported the change of leader.',fix:'The South overtook the North: report it.',fn:v=>/south/i.test(v.a)&&/(overt|took the lead|surpass|highest|most)/i.test(v.a)}],
  model:`<p>The table compares sales of electric cars across five regions of a single country at three points between 2015 and 2025.</p><p>Overall, sales of electric cars rose sharply in every region. The North sold the most in 2015, but the South had taken the lead by 2020 and sold by far the most in 2025.</p><p>In 2015, sales were highest in the North, at 25,000, followed by the East (17,000) and the South (12,000). By 2020, however, sales in the South had jumped to 90,000, overtaking the North (75,000), and by 2025 they had doubled again to 180,000. The North and the East grew more slowly, reaching 110,000 and 95,000 respectively.</p><p>The most dramatic relative growth occurred in the West and Central regions, where only 2,000 electric cars were sold in 2015. By 2025, sales in Central had risen to 90,000 and those in the West to 70,000, although the West remained the region with the lowest sales.</p>`},
 {n:5,kind:'Mixed charts',charts:['online','goods'],task:'The line graph shows the percentage of retail sales in one country that were made online between 2010 and 2025, and the pie chart shows the types of goods bought online in 2025',
  tip:'One paragraph per chart. The pie is one year only: no verbs of change.',
  spec:[{t:'You described both charts.',fix:'Describe the line graph (online share) and the pie chart (types of goods).',fn:v=>/clothing/i.test(v.a)&&/(5%|26%)/.test(v.a)},
        {t:'No causes linking the charts.',fix:'Remove “because”, “due to” or “as a result”: the charts give no reasons.',fn:v=>!/\b(because|due to|caused|led to)\b/i.test(v.a)}],
  model:`<p>The line graph illustrates how the proportion of retail spending that took place online in one country changed from 2010 to 2025, while the pie chart breaks down online spending in the final year by type of product.</p><p>Overall, the share of retail sales made online rose throughout the period, growing most rapidly in the middle years before slowing towards the end. In 2025, clothing was the largest category of online spending.</p><p>In 2010, just 5% of retail sales were made online. This figure rose gradually to 12% by 2016 and then more quickly, reaching 24% in 2022. After that, growth slowed, and the share stood at just over a quarter (26%) in 2025.</p><p>In that year, clothing accounted for almost a third of online spending (30%), followed by electronics at 22%. Groceries and home goods made up 18% and 16% respectively, while books and other items represented the smallest shares, at 8% and 6%.</p>`},
 {n:6,kind:'Maps',charts:['wf00','wf25'],task:'The maps below show an industrial area called Westfield in 2000 and 2025',
  tip:'Every industrial site changed. Group the changes: the east of Mill Lane, then the west, then transport.',
  spec:[{t:'You used the passive.',fix:'Describe changes with the passive: was converted, were demolished.',fn:v=>(v.a.match(/\b(was|were|had been)\s+(\w+ly\s+)?(\w+ed|built|made|turned into)\b/gi)||[]).length>=3},
        {t:'You described the main changes.',fix:'Include the factory, the warehouses, the freight yard and the empty land.',fn:v=>/factory/i.test(v.a)&&/warehouse/i.test(v.a)&&/freight/i.test(v.a)&&/(empty|land|school)/i.test(v.a)}],
  model:`<p>The maps illustrate the changes that took place in the Westfield industrial area between 2000 and 2025.</p><p>Overall, the area was transformed from an industrial zone into a residential and leisure district. Every industrial site was either converted or redeveloped, and new facilities for education and transport were added.</p><p>To the east of Mill Lane, the factory was converted into an arts centre, while the two warehouses beside it were demolished and replaced by blocks of flats. Further south, the freight yard next to the railway made way for a park.</p><p>On the western side of Mill Lane, the empty land was developed: a school was built in the north-west of the area, with a sports field directly to its south. In addition, a tram stop was opened on the railway line where it crosses Mill Lane, and a riverside path was created along the southern bank of the river. Only the river, the railway and Mill Lane itself remained unchanged.</p>`},
 {n:7,kind:'Process',charts:['tea'],task:'The diagram below shows how tea is produced',
  tip:'A man-made linear process of eight stages: present simple passive, with every time and temperature.',
  spec:[{t:'You gave the number of stages.',fix:'Say how many stages there are: eight.',fn:v=>/(eight|8)\s+(main\s+|distinct\s+)?(stages|steps)/i.test(v.a)},
        {t:'You included the times and the temperature.',fix:'Include 12 hours, two hours and 120°C.',fn:v=>/12 hours/i.test(v.a)&&/(two|2) hours/i.test(v.a)&&/120/.test(v.a)}],
  model:`<p>The diagram illustrates the stages involved in producing tea, from the picking of the leaves to their delivery to shops.</p><p>Overall, tea production is a linear process consisting of eight stages. The leaves are first prepared by withering, rolling and oxidising, and they are then dried, sorted and packed for sale.</p><p>To begin with, the tea leaves are picked by hand. They are then withered with warm air for 12 hours, after which they are rolled so that the leaves are broken. At the next stage, the rolled leaves are left in a humid room for two hours, where they oxidise. At this point, the leaves are ready to be dried.</p><p>Following this, the leaves are dried at a temperature of 120°C. Once dry, they are sorted according to their size and packed into either bags or boxes. Finally, the packed tea is shipped to shops, where it is sold to customers, completing the process.</p>`}
];

const general=(task)=>[
  {t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
  {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,task,8)},
  {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
  {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}];
const SELF=['I planned for about two minutes before writing.','My overview gives the main features without detail.','Every key feature is covered accurately.','I checked grammar, spelling and my word count in the last three minutes.'];

const spreads=[
opening({n:1,title:'Task 1 Mock Exams',lede:'Seven mock tasks, one for each Task 1 type. Treat each one as the real exam: 20 minutes, at least 150 words, no notes and no dictionary. When you finish, check your answer against the checklist, then compare it with my model answer.',
  outcomes:['write a complete Task 1 answer in 20 minutes, for every task type','plan, write and check within the time','check your own answer against the four criteria','compare your answer with a model and decide what to work on next'],
  extraLeft:insight('Exam conditions','Find a quiet place. Start the clock before you read the task. Don’t open the model answer until you have finished and run the checklist. Your answers are saved in this browser on this device.'),
  illus:ill,stepsTitle:'Seven mocks, one for each task type',
  steps:MOCKS.map(m=>[m.n,'c1-m'+m.n,'Mock '+m.n+': '+m.kind,m.tip.split('.')[0],'Apply']).concat([['R','c1-review','Review','Your results and your drafts','Improve']])}),
].concat(MOCKS.map(m=>sp('c1-m'+m.n,'Mock '+m.n+': '+m.kind,{
 left:`${head('Mock '+m.n+' · '+m.kind,'Task')}<h2>Mock ${m.n}: ${m.kind}</h2><p class="small">You should spend about 20 minutes on this task.</p>${taskbox(m.task+'.<br><br>Write at least 150 words.')}${m.charts.map(c=>chart(c)).join('')}${note('Before you start: '+m.tip)}<div class="clear"></div>`,
 right:`${head('Mock '+m.n+' · Timed task','Write')}<div data-act="m${m.n}-timer"></div><div data-act="m${m.n}-write" style="margin-top:16px"></div>`})),
 [review({n:1,title:'Task 1 Mock Exams',write:'m1-write',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Mock 1: your drafts',
   learned:['Plan for two minutes, write for fifteen, check for three.','Every answer: an introduction, an overview and two grouped body paragraphs.','Check your answer against the four criteria before you compare it with the model.','Note the errors you made more than once: those are your priorities.']})]);

const acts={};
MOCKS.forEach(m=>{
  acts['m'+m.n+'-timer']={type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock before you read the task.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
    phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview, your grouping and your key figures or changes.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check the overview, accuracy, grammar and your word count.'}]};
  acts['m'+m.n+'-write']={type:'write',level:'Challenge',skill:'Timed writing: '+m.kind.toLowerCase(),decision:'Write your answer.',prompt:'At least 150 words. One box, as in the exam; leave a line between paragraphs. Your answer is saved in this browser, but finishing does not send it for marking. Afterwards, run the checklist and compare with my model.',
    fields:[{k:'a',label:'My answer',rows:16,ph:'The '+(m.kind==='Maps'?'maps':m.kind==='Process'?'diagram':m.kind==='Table'?'table':'chart')+'…'}],
    checks:general(m.task).concat(m.spec),modelTitle:'My model answer',model:m.model,self:SELF};
});

const minitest=[
 {q:'How long should you spend on Task 1?',opts:[{t:'About 20 minutes',ok:1,why:'Task 2 needs the other 40.'},{t:'About 40 minutes',why:'That is for Task 2.'},{t:'As long as it takes',why:'Time management matters.'}],sp:'c1-m1'},
 {q:'What is the minimum length?',opts:[{t:'150 words',ok:1,why:'Shorter answers lose marks for Task Achievement.'},{t:'250 words',why:'That is Task 2.'},{t:'100 words',why:'Too short.'}],sp:'c1-m1'},
 {q:'Which part must every answer have?',opts:[{t:'A clear overview',ok:1,why:'Without one, Task Achievement is likely to be limited to Band 5.'},{t:'A conclusion with your opinion',why:'No opinions in Task 1.'},{t:'Every figure',why:'Select the key features.'}],sp:'c1-m2'},
 {q:'Pie charts without totals: which is safe?',opts:[{t:'a smaller share of visits',ok:1,why:'Shares only.'},{t:'fewer people',why:'An amount the pie doesn’t give.'},{t:'less money',why:'An amount.'}],sp:'c1-m3'},
 {q:'A table in thousands shows 180. You write…',opts:[{t:'180,000',ok:1,why:'Include the unit.'},{t:'180',why:'Give the unit.'},{t:'180 thousands',why:'Thousand takes no -s after a number.'}],sp:'c1-m4'},
 {q:'Mixed charts: how many body paragraphs, usually?',opts:[{t:'One per chart',ok:1,why:'Linked together.'},{t:'One for both',why:'Hard to follow.'},{t:'Four',why:'Two is enough.'}],sp:'c1-m5'},
 {q:'Which verb form suits a past-to-present map?',opts:[{t:'was converted into',ok:1,why:'Past passive.'},{t:'will be converted into',why:'That is for plans.'},{t:'converts into',why:'Not a process.'}],sp:'c1-m6'},
 {q:'Which verb form suits a man-made process?',opts:[{t:'are dried',ok:1,why:'Present simple passive.'},{t:'were dried',why:'Processes use the present.'},{t:'dry',why:'The leaves don’t dry themselves here.'}],sp:'c1-m7'}
];
const cannow=MOCKS.map(m=>['Write a '+m.kind.toLowerCase()+' answer in 20 minutes','c1-m'+m.n]);
addChapter({n:1,spreads,acts,gloss:{'overview':{term:'overview',def:'A summary of the main features, with no detailed figures. Every Task 1 answer needs one.',path:'M20,70 L80,50 L140,40 L220,20',ex:'“Overall, water use fell in City A but rose in City B.”'}},
  charts:{water:C.water,lib:C.lib,visit:C.visit,ecar:C.ecar,online:C.online,goods:C.goods,wf00:C.wf00,wf25:C.wf25,tea:C.tea},retrieval:{},minitest,cannow});
})();
