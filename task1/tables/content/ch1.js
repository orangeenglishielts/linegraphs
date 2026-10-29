/* ==========================================================================
   MASTERING TABLES · CHAPTER 1 · UNDERSTANDING TABLES
   ACTIVITY IDS (type · level)
     c1-story   choice    Challenge    Step 1  What is the main story?
     c1-rewrite write     Guided       Step 1  Rewrite the weak sentence
     c1-parts   hotspots  Guided       Step 2  Find the parts of the table
     c1-unit    choice    Supported    Step 2  Which unit?
     c1-kind    sort      Guided       Step 3  What does the table ask you to do?
     c1-lang    binary    Supported    Step 3  Does it fit the table?
     c1-select  binary    Supported    Step 4  Include or leave out?
     c1-stronger choice   Supported    Step 4  Which sentence is stronger?
     c1-exc     choice    Supported    Step 5  Find the exception
     c1-overall choice    Independent  Step 5  Choose the overview
     c1-write   write     Independent  Step 6  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 1',CT='Understanding Tables',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The table below shows the average journey time to work in one city, by way of travelling, in 2005 and 2025';

const spreads=[
opening({n:1,title:CT,lede:'A table gives you the numbers without a picture. There is no line to follow and no tallest bar to spot, so you have to find the story yourself. In this chapter I’ll show you how to read a table the way an examiner does, and you’ll write your first introduction and overview.',
  outcomes:[`read a table’s title, ${T('column','columns')}, ${T('row','rows')} and ${T('units')} accurately`,'tell what a table asks you to do: compare, describe change, or both','find the key features: the highest and lowest figures, the biggest changes and the exceptions',`write an introduction and an ${T('overview')} for a table`],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus([[0,2],[3,1]]),
  steps:[[1,'c1-s1','Meet the table','Start with a challenge','Discover'],[2,'c1-s2','Read the table','Title, columns, rows, units','Understand'],[3,'c1-s3','Compare or describe change?','What the headings tell you','Understand'],[4,'c1-s4','Find the key features','Select what matters','Practise'],[5,'c1-s5','Find the main comparison','Worked example and practice','Practise'],[6,'c1-s6','Chapter challenge','Write an introduction and overview','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  stepsTitle:'Six steps, one skill each',
  extraRight:howto('Read across the rows and down the columns.','the highest','Rent was the highest in the city centre')}),

sp('c1-s1','Meet the table',{exploreFirst:true,
 left:`${head('Step 1 · Discover','Learn')}<h2>Meet the table</h2>${vid({title:'Meet the table',len:'90 seconds',script:['Show the rent table and ask: where is the story? There is no line or bar to help.','Read down the 2025 column: the city centre is highest, rural areas lowest.','Read across each row: every area went up. Point to the city centre: the biggest rise.','Finish: in a table, you find the picture yourself by reading across and down.']})}<p>A table shows exact figures in ${T('row','rows')} and ${T('column','columns')}. Every candidate sees the same numbers, so the examiner looks for who can find the story in them.</p>${note('Read down each column to compare the categories. Read across each row to see how one category changed.')}<p>Your job is the same as for any chart: <b>select</b> the important information, <b>describe</b> it accurately and <b>compare</b> where relevant. Tables make the selecting harder, because every figure looks equally important.</p><div class="clear"></div>${take('No picture, so you make one: read down the columns, across the rows, and find the extremes and the biggest changes.')}`,
 right:`${head('Start here · Challenge','Explore')}<h2>What is the main story?</h2><p class="small">Try this before you watch the video. Getting it wrong is part of learning.</p>${chart('rent')}<div data-act="c1-story" style="margin-top:14px"></div><div data-gate="c1-story" hidden style="margin-top:16px"><div data-act="c1-rewrite"></div></div>`}),

sp('c1-s2','Read the table',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read the table</h2>${vid({title:'Read the table',len:'75 seconds',script:['Read the title aloud. Find what, where, when, and the unit.','Point to the column headings: here they are age groups.','Point to the row headings: the activities.','Read one figure aloud with its full meaning: 90 people aged 60 and over used the gym each week.']})}<p>Read these parts in order before you write anything.</p><ul class="clean"><li><b>Title:</b> what, where and when. In a table, the ${T('units','unit')} is often in the title, in brackets.</li><li><b>Column headings:</b> along the top. Years, groups, or different measures.</li><li><b>Row headings:</b> down the left. Usually the categories being compared.</li><li><b>The figures:</b> each one belongs to one row and one column.</li></ul>${note('Units can hide in the title or the headings: (€), (millions), per 1,000 people. Find them before you write a single figure.')}<div class="clear"></div>${take('Title, columns, rows, units. Every figure is a row and a column: say both when you report it.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-parts"></div><div data-act="c1-unit" style="margin-top:16px"></div>`}),

sp('c1-s3','Compare or describe change?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Compare or describe change?</h2><p>The headings tell you what kind of language you need.</p><ul class="clean"><li><b>Years along the top:</b> describe change across each row, and compare the rows. <i>“Rents rose in every area.”</i></li><li><b>Groups along the top</b> (age groups, men and women): compare. Nothing rises or falls over time. <i>“The gym was most popular among people under 30.”</i></li><li><b>Different measures along the top</b> (hours, days, salary): compare each measure, then link them. You’ll practise this in Chapter 3.</li></ul>${chart('sport')}${mistake('<s>Gym use fell to 90 in the 60 and over group.</s> These are age groups, not years. Compare instead: <i>“Only 90 people aged 60 and over used the gym each week.”</i>')}${take('Years across the top: change and comparison. Groups across the top: comparison only.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c1-kind"></div><div data-act="c1-lang" style="margin-top:16px"></div>`}),

sp('c1-s4','Find the key features',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Find the key features</h2><p>In a table, every figure looks equally important. Look for these features to find the ones that matter.</p>${chart('rentHl')}<ol style="padding-left:20px;margin:12px 0;display:grid;gap:6px;font-size:15px"><li><b>The highest and lowest figures:</b> city centre in 2025 (€1,400); rural areas in 2015 (€430).</li><li><b>The general pattern:</b> rent rose in every area.</li><li><b>The biggest change:</b> the city centre, up €450.</li><li><b>A gap that changed:</b> the difference between the centre and rural areas grew from €520 to €880.</li></ol>${mistake('<s>In 2015, rent was €950, €700, €520 and €430.</s> This reads out a column and compares nothing.')}${take('Highest, lowest, general pattern, biggest change, changing gaps. Report these, not every cell.')}`,
 right:`${head('Step 4 · Activity','Explore')}${note('If a detail would still be true of almost any table, it is not a key feature.')}<div data-act="c1-select"></div><div class="clear"></div><div data-act="c1-stronger" style="margin-top:16px"></div>`}),

sp('c1-s5','Find the main comparison',{
 left:`${head('Step 5 · Practise','Learn')}<h2>Find the main comparison</h2>${vid({title:'Find the main comparison',len:'2 minutes',script:['Show the leisure centre table. Ask: which activity was most popular?','Show that the answer depends on age: the gym for the under-30s, swimming for the over-60s.','Say: when the leader changes between groups, that is the main comparison.','Read the overview aloud and show that it has no figures.']})}<h3>Worked example</h3><p class="small">Use the leisure centre table in Step 3.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Which category is biggest, and does that change?</b> The gym led among the two younger groups; swimming led among people aged 60 and over.</li><li><b>What is the general pattern?</b> Gym use was much lower among older people.</li><li><b>Is there anything different?</b> Yoga and tennis were most popular with people aged 30 to 59.</li></ol>${insight('My overview','Overall, the gym attracted the most users among people under 60, whereas swimming was the most popular activity for those aged 60 and over. Tennis had the fewest users in every age group.')}${take(`An ${T('overview')} names the biggest category, the main pattern and any change in the leader. No figures.`)}`,
 right:`${head('Step 5 · Practice','Explore')}${chart('serv')}<div data-act="c1-exc" style="margin-top:14px"></div><div data-act="c1-overall" style="margin-top:16px"></div>`}),

sp('c1-s6','Chapter challenge: introduction and overview',{
 left:`${head('Step 6 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the first two parts of a Task 1 answer: the <b>introduction</b> and the <b>overview</b>.</p>${taskbox('The table below shows the average journey time to work in one city, by way of travelling, in 2005 and 2025.')}${chart('trip')}${note('Look for the row that moved in a different direction from the others, and for any change in which journey was longest.')}<ul class="clean" style="font-size:15px"><li>Introduction: one sentence. What, where and when.</li><li>Overview: two sentences. The main pattern, the exception and any change at the top. No figures.</li></ul><div class="clear"></div>`,
 right:`${head('Step 6 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['A table gives exact figures but no picture: read down the columns and across the rows to find the story.','Find the units first: they are often in the title or the headings.','Years across the top: describe change and compare. Groups across the top: compare only.','Report the highest and lowest figures, the general pattern, the biggest change and any changing gap.','An overview usually starts with “Overall,” and has no figures.']})
];

const acts={
'c1-story':{type:'choice',level:'Challenge',skill:'Finding the main story',decision:'Which sentence tells the main story of the rent table?',prompt:'Read down each column and across each row before you choose.',
  opts:[{t:'Rents rose in every area, and the city centre was the most expensive place to rent in both years, with the gap between the centre and rural areas widening.',ok:1,why:'The general pattern, the highest category and a changing gap: €520 in 2015 and €880 in 2025.'},
        {t:'In 2025, a flat in the suburbs cost €980 a month.',why:'Accurate, but it is one figure. It doesn’t tell the reader what happened.'},
        {t:'City centre rents rose because more people want to live there.',why:'The table gives no reasons. In Task 1 you describe the data, not explain it.'},
        {t:'The biggest number is at the top of the last column.',why:'This describes the layout of the table. Say what the figure means: city centre rent in 2025.'}]},
'c1-rewrite':{type:'write',level:'Guided',skill:'Writing a precise sentence',decision:'Now improve a weak sentence.',prompt:'Rewrite this sentence so it is precise: <b>“The first number in the last column is the biggest.”</b> Say what and where, give the figure with its unit and the year, and don’t mention rows, columns or numbers.',
  fields:[{k:'a',label:'My sentence',rows:3,ph:'The average monthly rent…'}],
  checks:[{t:'You said where: the city centre.',fix:'Say which area the figure belongs to: the city centre.',fn:v=>/(city centre|centre|center)/i.test(v.a)},
          {t:'You gave the figure with €.',fix:'Give the figure with its unit: €1,400.',fn:v=>/(€\s?1,?400|1,?400 euros)/i.test(v.a)},
          {t:'You gave the year.',fix:'Add the year: 2025.',fn:v=>/2025/.test(v.a)},
          {t:'You said what was measured: monthly rent.',fix:'Say what the figure is: the average monthly rent for a one-bedroom flat.',fn:v=>/rent/i.test(v.a)},
          {t:'You described the data, not the layout.',fix:'Remove words like “row”, “column” and “number”.',fn:v=>v.a.trim()&&!/(column|row|number)/i.test(v.a)}],
  modelTitle:'My version',model:'In 2025, the average monthly rent for a one-bedroom flat in the city centre was €1,400, the highest figure in the table.'},
'c1-parts':{type:'hotspots',level:'Guided',skill:'Reading the parts of a table',decision:'Find each part of the table.',prompt:'Select the part of the table that answers each question, in order. You can use Tab and Enter.',
  chart:Object.assign({},C.sport,{id:'ch-sport-hot',hot:1,hotCell:[1,3]}),
  parts:{title:'That is the title: what is measured and where.',x:'That is a column heading: an age group.',y:'That is a row heading: one of the activities.',point:'That is one figure: one row and one column.'},
  targets:[{q:'What is being measured?',part:'title',ok:'The title tells you: the average number of weekly users of four activities at a leisure centre.'},
           {q:'What do the columns show?',part:'x',ok:'The columns show three age groups. So you compare the groups; nothing changes over time.'},
           {q:'What do the rows show?',part:'y',ok:'The rows show the four activities.'},
           {q:'How many people aged 60 and over used the gym each week?',part:'point',ok:'90 people a week, compared with 650 people under 30.'}],
  doneMsg:'<b>All four found.</b> Before you write about any table, check the title, the column headings, the row headings and the units.'},
'c1-unit':{type:'choice',level:'Supported',skill:'Units',decision:'The title of the rent table ends “(€)”, and it says “monthly rent”. The 2025 figure for the suburbs is 980. What do you write?',
  opts:[{t:'€980 a month',ok:1,why:'The unit is euros, and the title says the rent is monthly.'},{t:'980 euros a year',why:'The title says monthly rent.'},{t:'€980,000',why:'The table isn’t in thousands. Check the title for “(thousands)” before you add zeros.'}]},
'c1-kind':{type:'sort',level:'Guided',skill:'What a table asks you to do',decision:'What does each table ask you to do?',cats:['Describe change and compare','Compare only'],
  items:[{w:'Rent in four areas in 2015 and 2025',c:0,m:'has two years along the top, so you describe change and compare the areas.'},
         {w:'Weekly users of four activities, by age group',c:1,m:'has age groups along the top, not years, so you compare.'},
         {w:'Household access to four services in 2000, 2010 and 2020',c:0,m:'has three years along the top, so you describe change and compare.'},
         {w:'Students on five subjects, by gender',c:1,m:'has men and women along the top, so you compare.'},
         {w:'Hours, holidays and pay in five occupations',c:1,m:'has three different measures along the top and no time period, so you compare.'}]},
'c1-lang':{type:'binary',level:'Supported',skill:'Language for groups',decision:'Does each sentence fit the leisure centre table?',prompt:'The columns are age groups, not years. Use the table in Step 3 on the left page.',labels:['Fits','Doesn’t fit'],
  items:[{t:'The gym was used most by people under 30, with 650 users a week.',a:0,right:'It compares the groups and gives the figure with its unit.',wrong:'It fits: 650 is the gym’s highest figure, in the under-30 group.'},
         {t:'Yoga increased to 230 users.',a:1,right:'Right. The columns are age groups, so nothing increased over time.',wrong:'There is no time period. Say: yoga attracted 230 users aged 30 to 59.'},
         {t:'Swimming was the most popular activity among people aged 60 and over.',a:0,right:'260, the highest figure in that column.',wrong:'It fits: 260 is the highest figure for people aged 60 and over.'},
         {t:'Tennis had the fewest weekly users in every age group.',a:0,right:'120, 160 and 70: the lowest in each column.',wrong:'It fits: tennis is the lowest figure in all three columns.'},
         {t:'Gym use dropped in 2020.',a:1,right:'Right. There are no years in this table.',wrong:'There are no years in the table, so you can’t mention 2020.'}]},
'c1-select':{type:'binary',level:'Supported',skill:'Selecting key features',decision:'Include it in your answer, or leave it out?',prompt:'Decide for each sentence about the rent table.',labels:['Include','Leave out'],
  items:[{t:'Rent rose in all four areas between 2015 and 2025.',a:0,right:'The general pattern is always a key feature.',wrong:'This is the general pattern, so include it.'},
         {t:'The city centre had the highest rent in both years, reaching €1,400 in 2025.',a:0,right:'The highest figure is a key feature.',wrong:'The highest figure belongs in your answer.'},
         {t:'The table has four rows and two columns of figures.',a:1,right:'Right. This describes the layout, not the data.',wrong:'This would be true of many tables. It says nothing about rent.'},
         {t:'The gap between the city centre and rural areas widened from €520 to €880.',a:0,right:'A changing gap is a key comparison.',wrong:'A gap that widens is a key comparison: 950 − 430 = 520, and 1,400 − 520 = 880.'},
         {t:'City rents are high because of tourism.',a:1,right:'Right. The table gives no reasons.',wrong:'The table doesn’t say why. Task 1 asks you to describe.'}]},
'c1-stronger':{type:'choice',level:'Supported',skill:'Precise description',decision:'Which sentence is stronger?',
  opts:[{t:'Rent in the city centre rose by €450 to €1,400 a month, the largest increase of the four areas.',ok:1,why:'What, how much, the end figure with its unit, and a comparison with the other areas.'},{t:'The city centre row has the biggest numbers.',why:'This describes the table, not the rent.'},{t:'City centre rents went up a lot.',why:'Vague verb, no figures and no comparison.'}]},
'c1-exc':{type:'choice',level:'Supported',skill:'Exceptions',decision:'Which service rose and then fell?',prompt:'Read across each row of the services table.',
  opts:[{t:'Cable TV',ok:1,why:'30% in 2000, 38% in 2010, then down to 22% in 2020.'},{t:'Landline phone',why:'Landline access fell in both decades: 92%, 70%, 41%.'},{t:'Broadband internet',why:'Broadband rose in both decades: 20%, 65%, 92%.'}]},
'c1-overall':{type:'choice',level:'Independent',skill:'Writing an overview',decision:'Which is the best overview of the services table?',
  opts:[{t:'Overall, mobile phones and broadband internet became almost universal, while access to a landline fell sharply. Cable TV rose at first but then declined.',ok:1,why:'The main changes in both directions and the exception, with no figures.'},
        {t:'Overall, mobile phone access rose from 55% to 97%.',why:'Accurate, but figures belong in the body paragraphs.'},
        {t:'Overall, all four services became more common.',why:'Not accurate: landline and cable TV access were lower in 2020 than in 2000.'},
        {t:'Overall, the table has four services and three years.',why:'This describes the table, not the data.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write your introduction and overview.',prompt:'One introduction sentence and two overview sentences. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The table compares…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction says what was measured: journey times to work.',fix:'Say what was measured: how long it took to get to work.',fn:v=>/(journey|travel|commut|get to work|took|minutes)/i.test(v.intro)},
          {t:'Your introduction gives the two years.',fix:'Give the years: 2005 and 2025.',fn:v=>/2005/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task rather than copying it.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,”.',fix:'Start your overview with “Overall,”.',fn:v=>/^\s*(overall|in general|in summary|generally)/i.test(v.ov)},
          {t:'Your overview has no figures.',fix:'Keep the minutes for the body paragraphs.',fn:v=>v.ov.trim()&&!/\d/.test(figs(v.ov))},
          {t:'Your overview reports the exception: car journeys got longer.',fix:'Name the exception: car journeys became longer while the others became slightly shorter.',fn:v=>/car/i.test(v.ov)&&/(longer|rose|increased|grew|slower)/i.test(v.ov)},
          {t:'Your overview reports the change at the top.',fix:'Report the change at the top: by 2025, the car was the slowest way to travel.',fn:v=>/(longest|slowest|overt)/i.test(v.ov)}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span><button type="button" class="hl" data-n="0">The table compares how long it took people in one city to get to work</button> by four different means of transport in 2005 and 2025.</p><p><span class="plabel">Overview</span><button type="button" class="hl" data-n="1">Overall, journeys by car became considerably longer</button>, whereas the other three ways of travelling became slightly quicker. <button type="button" class="hl" data-n="2">As a result, the car went from being one of the faster options to the slowest of the four by 2025.</button></p>`,
  notes:['“Average journey time” becomes a clause: “how long it took people … to get to work”. New words, same meaning.','The exception and the general pattern in one sentence, linked with “whereas”. No figures.','The change at the top: in 2005 the bus was slowest (35 minutes); by 2025 the car was (41 minutes). I checked both columns.'],
  self:['My introduction says what, where and when.','I changed the task’s words and word order.','My overview starts with “Overall,” and has no figures.','My overview reports the exception and the change at the top.'],revise:1}
};

const gloss={
  'row':{term:'row',def:'A line of figures across the table. The row heading on the left tells you which category the figures belong to.',path:'M20,40 H220 M20,40 V60 H220 V40',ex:'“Reading across the city centre row, rent rose from €950 to €1,400.”'},
  'column':{term:'column',def:'A line of figures down the table. The column heading at the top tells you the year, group or measure.',path:'M100,10 V82 M100,10 H140 V82 H100',ex:'“Reading down the 2025 column, the city centre was the most expensive area.”'},
  'units':{term:'units',def:'What the numbers measure. In a table, look for the unit in the title or the headings: (€), (millions), per 1,000 people.',path:'M20,80 L20,10 M20,62 L32,62 M20,44 L32,44 M20,26 L32,26',ex:'“Rent in the suburbs was €980 a month.” (not just “980”)'},
  'overview':{term:'overview',def:'One or two sentences that give the big picture: the main pattern, the biggest category and any exception. It has no figures.',path:'M20,20 H220 M20,40 H220 M20,60 H220',ex:'“Overall, rents rose in every area, and the city centre remained the most expensive.”'},
  'the highest':{term:'the highest / the lowest',def:'The superlative for figures: the highest rent, the lowest figure. Use it to report the extremes in a table.',path:'M30,80 V20 H60 V80 M90,80 V60 H120 V80',ex:'“Rent was the highest in the city centre, at €1,400 a month.”'}
};

const retrieval={
 'c1-s1':[{q:'How do you find the story in a table?',opts:[{t:'Read down the columns and across the rows',ok:1,why:'Compare the categories, then follow the changes.'},{t:'Read every figure in order',why:'That gives a list, not a story.'}]}],
 'c1-s2':[{q:'Where is the unit in a table?',opts:[{t:'Often in the title or the headings',ok:1,why:'For example (€) or (millions).'},{t:'In the legend',why:'Tables don’t usually have a legend.'}]}],
 'c1-s3':[{q:'Age groups along the top. What do you do?',opts:[{t:'Compare the groups',ok:1,why:'Nothing changes over time.'},{t:'Describe change over time',why:'There are no years.'}]}],
 'c1-s4':[{q:'Which is a key feature?',opts:[{t:'A gap that widened',ok:1,why:'A changing gap is a key comparison.'},{t:'The number of rows',why:'That is the layout.'}]}],
 'c1-s5':[{q:'The leader changes between groups. Where does that go?',opts:[{t:'In the overview',ok:1,why:'It is the main comparison.'},{t:'Nowhere',why:'It is a key feature.'}]}],
 'c1-s6':[{q:'What does the overview contain?',opts:[{t:'The main pattern and exceptions, no figures',ok:1,why:'Figures go in the body.'},{t:'The highest and lowest figures',why:'Name them, but keep the figures for the body.'}]}]
};

const minitest=[
 {q:'What makes a table harder than a graph?',opts:[{t:'There is no picture, so you must find the pattern yourself',ok:1,why:'Every figure looks equally important.'},{t:'Tables have no units',why:'They do, often in the title.'},{t:'Tables never show change',why:'Many tables show years.'}],sp:'c1-s1'},
 {q:'The title ends “(millions)”. A figure is 25. What do you write?',opts:[{t:'25 million',ok:1,why:'The unit is in the title.'},{t:'25',why:'Add the unit.'},{t:'25 millions',why:'No -s after a number.'}],sp:'c1-s2'},
 {q:'Columns: Under 30, 30 to 59, 60 and over. Which sentence fits?',opts:[{t:'The gym was most popular among people under 30.',ok:1,why:'A comparison of groups.'},{t:'Gym use fell over the period.',why:'No time period.'},{t:'Gym use rose to 650.',why:'Nothing rises across groups.'}],sp:'c1-s3'},
 {q:'Columns: 2015 and 2025. What should your answer do?',opts:[{t:'Describe the change in each row and compare the rows',ok:1,why:'Both kinds of language.'},{t:'Only compare the 2025 figures',why:'The change is a key feature.'},{t:'List every figure',why:'Listing compares nothing.'}],sp:'c1-s3'},
 {q:'Which is a key feature of the rent table?',opts:[{t:'Rent rose in every area.',ok:1,why:'The general pattern.'},{t:'The table has two columns of figures.',why:'That is the layout.'},{t:'City life is expensive.',why:'An opinion, not data.'}],sp:'c1-s4'},
 {q:'Rent: centre €950 → €1,400, rural €430 → €520. The gap…',opts:[{t:'widened from €520 to €880',ok:1,why:'950 − 430 and 1,400 − 520.'},{t:'narrowed',why:'It became bigger.'},{t:'stayed the same',why:'Calculate it.'}],sp:'c1-s4'},
 {q:'Cable TV: 30%, 38%, 22%. How do you describe it?',opts:[{t:'It rose at first, then fell',ok:1,why:'Up to 2010, then down.'},{t:'It rose steadily',why:'It fell after 2010.'},{t:'It stayed the same',why:'It changed in both decades.'}],sp:'c1-s5'},
 {q:'Which introduction is best for a table of journey times in 2005 and 2025?',opts:[{t:'The table compares how long it took people in one city to get to work by four means of transport in 2005 and 2025.',ok:1,why:'New words, same details.'},{t:'The table below shows the average journey time to work in one city.',why:'Copied, and the years are missing.'},{t:'The table is about transport.',why:'Too vague.'}],sp:'c1-s6'}
];

const cannow=[['Read a table’s title, columns, rows and units','c1-s2'],['Tell whether a table asks you to describe change or compare','c1-s3'],['Find the highest and lowest figures, the biggest change and changing gaps','c1-s4'],['Write an overview with the main pattern and any change at the top','c1-s5'],['Write an introduction and an overview for a table','c1-s6']];
const charts={rent:C.rent,rentHl:Object.assign({},C.rent,{id:'ch-rent-hl',hl:[[0,2],[3,1]]}),sport:C.sport,serv:C.serv,trip:C.trip};
addChapter({n:1,spreads,acts,gloss,charts,retrieval,minitest,cannow});
})();
