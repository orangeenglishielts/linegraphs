/* ==========================================================================
   MASTERING BAR CHARTS · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-org     choice    Supported    Step 4  How would you organise it?
     c5-split   sort      Supported    Step 4  Which body paragraph?
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=BAR;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The chart below shows the number of international students at universities in one country, by region of origin, in 2012 and 2022';

const spreads=[
opening({n:5,title:CT,lede:'Coherence and cohesion is a quarter of your score, and it starts with structure. A clear four-part answer lets the examiner find your overview and follow your comparisons. In this chapter I’ll show you how to organise a bar chart answer, and you’ll write a complete one.',
  outcomes:['write a four-part answer: introduction, overview and two body paragraphs',`${T('paraphrase')} a bar chart task in one sentence`,'write an overview with the biggest category, the main pattern and the exception','choose how to organise the body: by group of categories, or by year'],
  illus:illus([90,80,24,10],[108,100,58,62]),
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','Paraphrase the task','Understand'],[3,'c5-s3','The overview','The big picture for a bar chart','Understand'],[4,'c5-s4','Organise the body','By group or by year','Practise'],[5,'c5-s5','Chapter challenge','Write a complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four empty boxes: introduction, overview, body 1, body 2.','Say what goes in each, in one line.','Point out that the overview is the most important paragraph: no overview, no Band 6 for Task Achievement.','Hand over to the sorting activity.']})}<p>Every Task 1 answer has the same four parts. Each one has a clear job.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Introduction</b> (one sentence): ${T('paraphrase')} the task. What, who, where and when.</li><li><b>Overview</b> (two sentences): the big picture. No figures.</li><li><b>Body paragraph 1:</b> the first group of details, with figures.</li><li><b>Body paragraph 2:</b> the second group, with figures and comparisons.</li></ol>${chart('recyc')}${note('No overview means you can’t score above Band 5 for Task Achievement. Make yours easy to find: start it with “Overall,”.')}<div class="clear"></div>${take('Introduction, overview, two body paragraphs. Each part has one job. No conclusion is needed: the overview does that work.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">These sentences are about the recycling chart on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'Paraphrasing a bar chart task',len:'2 minutes',script:['Show the recycling task and underline the key words.','Change the verb: shows becomes compares or illustrates.','Change the structure: the percentage of … becomes what proportion of …','Keep the details: what, where and when must all stay.']})}<p>Your introduction ${T('paraphrase','paraphrases')} the task: same meaning, different words and structure.</p><ul class="clean"><li><b>Change the verb:</b> shows → compares, illustrates, gives information about</li><li><b>Change the structure:</b> <i>the percentage of waste recycled</i> → <i>what proportion of waste was recycled</i></li><li><b>Keep every detail:</b> the four types of waste, one country, 2005 and 2025</li></ul>${insight('Example','<b>Task:</b> The chart below shows the percentage of four types of household waste recycled in one country in 2005 and 2025.<br><b>Introduction:</b> The bar chart compares what proportion of four kinds of household waste was recycled in one country in 2005 and 2025.')}${mistake('<s>The chart below shows…</s> “Below” only makes sense on the exam paper. Write “The bar chart compares…”.')}${take('Change the verb and the structure, keep every detail, and never copy “below”.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2><p>For a bar chart, the overview answers three questions. You won’t always need all three, but always include the main pattern or comparison.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Which category was biggest?</b> <i>Paper was the most recycled material in both years.</i></li><li><b>What was the main pattern or change?</b> <i>Recycling rates rose for all four types of waste.</i></li><li><b>Was there an exception or a striking change?</b> <i>The most dramatic growth was in food waste.</i></li></ol>${insight('My overview','Overall, recycling rates rose for all four types of waste, and paper remained the most recycled material. The most dramatic growth was in food waste, which overtook plastic.')}${note('No figures in the overview. Save them for the body, where they prove what the overview says.')}<div class="clear"></div>${take('The overview is the answer to “what does this chart show?” in two sentences: the biggest, the pattern, the striking change.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the recycling chart in Step 1.</p><div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','Organise the body',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Organise the body</h2>${vid({title:'Organising the body',len:'2 minutes',script:['Show the recycling chart and two empty body paragraphs.','Option 1, by group: paper and glass together, plastic and food waste together.','Option 2, by year: 2005 in one paragraph, 2025 in the other. Show why it repeats the categories.','Finish: choose the organisation that keeps comparisons together.']})}<p>There are two main ways to organise the body of a bar chart answer.</p><ul class="clean"><li><b>By group of categories</b> (usually best): put categories that behave alike together. Paper and glass started high and rose by similar amounts; plastic and food waste started low and grew fastest in relative terms.</li><li><b>By year:</b> one paragraph for the first year, one for the last. This works when the ranking changed completely, but it often repeats every category twice.</li></ul>${mistake('<s>Body 1: paper. Body 2: glass. Body 3: plastic. Body 4: food waste.</s> One paragraph per bar is a list, and it separates the comparisons.')}${note('Start each body paragraph with a topic sentence that says what the group has in common.')}<div class="clear"></div>${take('Group categories that behave alike. One group per paragraph, with a topic sentence.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the recycling chart in Step 1.</p><div data-act="c5-org"></div><div data-act="c5-split" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Now write a complete answer: introduction, overview and two body paragraphs. Aim for at least 150 words.</p>${taskbox('The chart below shows the number of international students at universities in one country, by region of origin, in 2012 and 2022.')}${chart('stud')}${note('Look for the largest region, the one region that fell, and the two that more than doubled.')}<ul class="clean" style="font-size:15px"><li>Introduction: one sentence.</li><li>Overview: the largest region, the main change, the exception.</li><li>Body 1 and Body 2: one group each.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, two body paragraphs. No conclusion is needed.','Paraphrase the task: change the verb and the structure, keep every detail, and don’t copy “below”.','The overview gives the biggest category, the main pattern and any striking change, with no figures.','Organise the body by groups of categories that behave alike, with a topic sentence for each.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The bar chart compares what proportion of four kinds of household waste was recycled in one country in 2005 and 2025.',c:0,m:'paraphrases the task: what, where and when.'},
         {w:'Overall, recycling rates rose for all four types of waste, and paper remained the most recycled material.',c:1,m:'gives the big picture with no figures.'},
         {w:'The recycling rate for paper rose from 45% to 72%, while the rate for glass climbed from 40% to 66%.',c:2,m:'gives detailed figures, so it belongs in a body paragraph.'},
         {w:'The most dramatic growth was in food waste, which overtook plastic.',c:1,m:'is a striking change stated without figures: overview material.'},
         {w:'Only 5% of food waste was recycled in 2005, but by 2025 the figure had risen to 41%.',c:2,m:'gives the evidence, with figures and years: body.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Task: “The chart below shows the number of international students at universities in one country, by region of origin, in 2012 and 2022.” Which introduction is best?',
  opts:[{t:'The bar chart compares how many international students from five regions of the world studied at universities in one country in 2012 and 2022.',ok:1,why:'A new verb (compares), a new structure (how many … studied) and every detail kept.'},
        {t:'The chart below shows the number of international students at universities in one country.',why:'This copies the task, including “below”, and drops the two years.'},
        {t:'The bar chart is about students from different places.',why:'Too vague: which students, where, and when?'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Is each one a good paraphrase of the original?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“the percentage of waste recycled” → “what proportion of waste was recycled”',a:0,right:'Same meaning, different structure.',wrong:'This keeps the meaning: proportion means percentage here.'},
         {t:'“in one country” → “around the world”',a:1,right:'Right: one country is not the world.',wrong:'“Around the world” changes the meaning. Keep “in one country”.'},
         {t:'“in 2005 and 2025” → “between 2005 and 2025”',a:1,right:'Right: the chart shows two years, not the whole period in between.',wrong:'“Between” suggests every year in the period. The chart only shows two years, so use “in 2005 and 2025”.'},
         {t:'“by region of origin” → “according to where they came from”',a:0,right:'Same meaning, new words.',wrong:'This keeps the meaning: region of origin means where they came from.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Writing an overview',decision:'Which is the best overview of the recycling chart?',
  opts:[{t:'Overall, recycling rates rose for all four types of waste, and paper remained the most recycled. The most dramatic growth was in food waste.',ok:1,why:'The pattern, the biggest category and the striking change, with no figures.'},
        {t:'Overall, paper rose from 45% to 72% and food waste from 5% to 41%.',why:'Figures belong in the body. The overview summarises.'},
        {t:'Overall, the chart shows four types of waste in 2005 and 2025.',why:'This repeats the introduction. It says nothing about what happened.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Recycling rates rose for every type of waste.',a:0,right:'The main pattern, no figures.',wrong:'This is the main pattern with no figures: overview.'},
         {t:'The glass recycling rate climbed from 40% to 66%.',a:1,right:'Detailed figures: body.',wrong:'This has figures, so it belongs in a body paragraph.'},
         {t:'Food waste overtook plastic by 2025.',a:0,right:'A striking change, stated without figures.',wrong:'A striking change without figures belongs in the overview.'},
         {t:'Plastic recycling more than tripled, from 12% to 38%.',a:1,right:'Evidence with figures: body.',wrong:'The figures make this body material.'}]},
'c5-org':{type:'choice',level:'Supported',skill:'Organising the body',decision:'How would you organise the two body paragraphs for the recycling chart?',
  opts:[{t:'Body 1: paper and glass. Body 2: plastic and food waste.',ok:1,why:'Paper and glass started high and rose by similar amounts. Plastic and food waste started low and grew fastest in relative terms: plastic more than tripled, and food waste rose eightfold. Each paragraph has one point.'},
        {t:'Body 1: paper and plastic. Body 2: glass and food waste.',why:'These pairs don’t share a pattern, so neither paragraph has a clear point.'},
        {t:'One body paragraph for each type of waste.',why:'Four short paragraphs separate the comparisons. Group them.'}]},
'c5-split':{type:'sort',level:'Supported',skill:'Grouping for paragraphs',decision:'Which body paragraph does each figure belong in?',prompt:'Body 1: the materials that were already widely recycled. Body 2: the materials that grew fastest.',cats:['Body 1','Body 2'],
  items:[{w:'Paper: 45% to 72%',c:0,m:'started high and rose by 27 points, like glass.'},{w:'Glass: 40% to 66%',c:0,m:'started high and rose by 26 points, like paper.'},{w:'Plastic: 12% to 38%',c:1,m:'started low and more than tripled.'},{w:'Food waste: 5% to 41%',c:1,m:'started lowest and grew eightfold, overtaking plastic.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The bar chart compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction gives what, where and the two years.',fix:'Include the students, one country, and 2012 and 2022.',fn:v=>/student/i.test(v.intro)&&/2012/.test(v.intro)&&/2022/.test(v.intro)},
          {t:'You paraphrased the task rather than copying it.',fix:'You copied eight or more words in a row from the task. Change the verb and the structure.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names Asia as the largest source.',fix:'Name the biggest category in the overview: Asia.',fn:v=>/asia/i.test(v.ov)},
          {t:'You reported the exception: Europe fell.',fix:'Report the exception: Europe was the only region where numbers fell.',fn:v=>/europe/i.test(v.ov+v.b1+v.b2)&&/(fell|fall|declin|decreas|drop|only)/i.test(v.ov+v.b1+v.b2)},
          {t:'You wrote full numbers, not the axis figures.',fix:'The axis is in thousands: write 95,000 students, not 95.',fn:v=>/(\d{1,3},000|thousand)/i.test(v.b1+v.b2)},
          {t:'You used a comparison word.',fix:'Compare the regions: while, whereas, compared with, more than, twice as many.',fn:v=>/(while|whereas|compared|than|twice|by contrast|respectively)/i.test(v.b1+v.b2)},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words. Add evidence to your body paragraphs.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The bar chart compares how many international students from five regions of the world <button type="button" class="hl" data-n="0">studied at universities in one country</button> in 2012 and 2022.</p><p><span class="plabel">Overview</span>Overall, Asia was by far the largest source of international students in both years, and <button type="button" class="hl" data-n="1">numbers rose from every region except Europe</button>. The fastest growth was in students from Africa and the Middle East.</p><p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="2">The two largest groups moved in opposite directions.</button> In 2012, there were 60,000 students from Asia, well ahead of the 35,000 from Europe. Over the next ten years, <button type="button" class="hl" data-n="3">the number of Asian students rose by more than half</button>, to 95,000, while the number from Europe fell slightly to 30,000.</p><p><span class="plabel">Body 2</span>The other three regions sent far fewer students. Numbers from Africa and the Middle East more than doubled, from 10,000 to 22,000 and from 8,000 to 18,000 <button type="button" class="hl" data-n="4">respectively</button>, <button type="button" class="hl" data-n="5">so both overtook the Americas</button>, which saw only a small rise, from 12,000 to 15,000.</p>`,
  notes:['“Studied at universities” turns the task’s noun phrase into a clause. Every detail is still there.','The pattern and the exception in one clause: “every region except Europe”.','A topic sentence: it tells the reader what the paragraph is about before the figures.','60,000 to 95,000 is a rise of 35,000, which is more than half of 60,000. I checked before writing it.','“Respectively” matches the figures to Africa and the Middle East in order.','A comparison the chart doesn’t show directly: in 2012 the Americas (12,000) had more students than Africa or the Middle East, and by 2022 they had fewer.'],
  self:['My answer has four parts, and the overview starts with “Overall,”.','My overview has no figures.','Each body paragraph is about one group, with a topic sentence.','I wrote full numbers and compared the regions.'],revise:1}
};

const gloss={
  'paraphrase':{term:'paraphrase',def:'Say the same thing in different words and a different structure. In Task 1, your introduction paraphrases the task.',path:'M20,30 H110 M20,50 H90 M130,30 H220 M150,50 H220',ex:'“the percentage of waste recycled” → “what proportion of waste was recycled”'},
  'topic sentence':{term:'topic sentence',def:'The first sentence of a body paragraph. It says what the paragraph is about, before the figures that prove it.',path:'M20,20 H220 M20,40 H200 M20,55 H210 M20,70 H180',ex:'“The two largest groups moved in opposite directions.”'}
};

const retrieval={
 'c5-s1':[{q:'How many parts does a Task 1 answer have?',opts:[{t:'Four: introduction, overview, two body paragraphs',ok:1,why:'No conclusion is needed.'},{t:'Five, with a conclusion',why:'The overview does the job of a conclusion.'}]}],
 'c5-s2':[{q:'Should your introduction say “The chart below shows”?',opts:[{t:'No',ok:1,why:'Copied words don’t show your own language, and “below” shows you copied.'},{t:'Yes',why:'It copies the task.'}]}],
 'c5-s3':[{q:'What goes in a bar chart overview?',opts:[{t:'The biggest category, the pattern, the striking change',ok:1,why:'With no figures.'},{t:'The most important figures',why:'Figures go in the body.'}]}],
 'c5-s4':[{q:'Usually the best way to organise the body?',opts:[{t:'By groups of categories that behave alike',ok:1,why:'Comparisons stay together.'},{t:'One paragraph per bar',why:'That is a list.'}]}],
 'c5-s5':[{q:'Minimum length for Task 1?',opts:[{t:'150 words',ok:1,why:'Under 150 loses marks.'},{t:'250 words',why:'That is Task 2.'}]}]
};

const minitest=[
 {q:'Which part of the answer has no figures?',opts:[{t:'The overview',ok:1,why:'It gives the big picture.'},{t:'Body paragraph 1',why:'Body paragraphs need figures.'},{t:'Body paragraph 2',why:'Body paragraphs need figures.'}],sp:'c5-s1'},
 {q:'Do you need a conclusion in Task 1?',opts:[{t:'No, the overview does that job',ok:1,why:'Four parts are enough.'},{t:'Yes, always',why:'A conclusion would repeat the overview.'},{t:'Only if you have time',why:'It is not needed.'}],sp:'c5-s1'},
 {q:'Which is a good paraphrase of “in 2005 and 2025”?',opts:[{t:'in the years 2005 and 2025',ok:1,why:'Same meaning.'},{t:'between 2005 and 2025',why:'That suggests every year in between.'},{t:'from 2005 onwards',why:'That changes the meaning.'}],sp:'c5-s2'},
 {q:'Which introduction is best?',opts:[{t:'The bar chart compares what proportion of four kinds of waste was recycled in one country in 2005 and 2025.',ok:1,why:'New words, same details.'},{t:'The chart below shows the percentage of waste recycled.',why:'Copied, and details missing.'},{t:'This chart is about recycling.',why:'Too vague.'}],sp:'c5-s2'},
 {q:'Which belongs in the overview?',opts:[{t:'Recycling rates rose for every type of waste.',ok:1,why:'The pattern, no figures.'},{t:'Glass rose from 40% to 66%.',why:'Detail with figures: body.'},{t:'In 2005, 12% of plastic was recycled.',why:'One figure: body.'}],sp:'c5-s3'},
 {q:'A good overview for a bar chart usually includes…',opts:[{t:'the biggest category and the main pattern',ok:1,why:'Plus any striking change.'},{t:'every category in order',why:'That is a list.'},{t:'the reasons for the changes',why:'Task 1 doesn’t ask for reasons.'}],sp:'c5-s3'},
 {q:'Paper and glass rose by similar amounts; plastic and food waste grew fastest in relative terms. How do you organise the body?',opts:[{t:'Paper and glass, then plastic and food waste',ok:1,why:'One group per paragraph.'},{t:'One paragraph per material',why:'Four short lists.'},{t:'Paper and plastic, then glass and food waste',why:'Those pairs don’t share a pattern.'}],sp:'c5-s4'},
 {q:'What should the first sentence of a body paragraph do?',opts:[{t:'Say what the group has in common',ok:1,why:'A topic sentence.'},{t:'Give the first figure on the chart',why:'Figures follow the point.'},{t:'Repeat the overview',why:'Each paragraph has its own point.'}],sp:'c5-s4'}
];

const cannow=[['Write a four-part answer with a clear overview','c5-s1'],['Paraphrase a bar chart task in one sentence','c5-s2'],['Write an overview with the biggest category and the main pattern','c5-s3'],['Organise the body by groups of categories','c5-s4'],['Write a complete answer of at least 150 words','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{recyc:C.recyc,stud:C.stud},retrieval,minitest,cannow});
})();
