/* ==========================================================================
   MASTERING TABLES · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-org     choice    Supported    Step 4  By column or by group?
     c5-split   sort      Supported    Step 4  Which body paragraph?
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The table below shows the average price per kilo of five foods in one country in 2005, 2015 and 2025';

const spreads=[
opening({n:5,title:CT,lede:'A table tempts you to follow its layout: the first column, then the second, or one row after another. That separates every comparison. In this chapter I’ll show you how to organise a table answer around the groups in the data, and you’ll write a complete answer of your own.',
  outcomes:['use the four-part shape: introduction, overview, two body paragraphs','paraphrase the task without changing its meaning','write an overview that a reader could remember',`organise the body by group, not by column, with ${T('outnumbered')} and similar comparisons`],
  illus:illus([[0,1],[0,2],[1,1],[1,2]]),
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','Paraphrase the task','Understand'],[3,'c5-s3','The overview','The big picture','Understand'],[4,'c5-s4','The body paragraphs','Group, don’t follow the layout','Practise'],[5,'c5-s5','Chapter challenge','A complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four empty boxes: introduction, overview, body 1, body 2.','Say what goes in each, in one line.','Stress that there is no conclusion: the overview does that job.','Finish: the same shape for every Task 1 answer.']})}<p>Every Task 1 answer has the same four parts:</p><ul class="clean"><li><b>Introduction:</b> one sentence that paraphrases the task.</li><li><b>Overview:</b> two or three main features, with no figures.</li><li><b>Body 1 and Body 2:</b> the details, with figures, one group in each.</li></ul>${chart('subj')}${note('No overview is likely to limit your Task Achievement score to Band 5. Start it with “Overall,”.')}<div class="clear"></div>${take('Introduction, overview, two body paragraphs. No conclusion: the overview does that job.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the table of university students on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'The introduction',len:'90 seconds',script:['Show the task sentence.','Change the verb: shows → compares, gives information about.','Change the structure: the number of men and women studying → how many men and women were studying.','Finish: keep every detail. Change the words, not the meaning.']})}<p>Paraphrase the task in one sentence. Change the words and the structure, and keep every detail.</p>${taskbox('The table below shows the number of men and women studying five subjects at universities in one country.')}<ul class="clean"><li><b>A new verb:</b> shows → <i>compares</i>, <i>gives figures for</i>.</li><li><b>A new structure:</b> the number of men and women studying → <i>how many men and women were studying</i>.</li><li><b>Keep:</b> five subjects, universities, one country.</li></ul>${mistake('<s>The table shows how many people go to university around the world.</s> This loses the five subjects and the gender split, and changes one country into the world.')}${take('A new verb, a new structure, every detail kept.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2>${vid({title:'The overview',len:'2 minutes',script:['Show the table. Ask: if you could tell a friend only two things about it, what would they be?','Answer: men far outnumbered women in engineering and computing; women were in the majority in medicine and education.','Add: business was almost equal.','Write it with “Overall,” and no figures.']})}<p>The overview is what a reader would remember after one look at the table. For a table that compares groups, ask:</p><ul class="clean"><li>Which group led in which rows?</li><li>Were any rows close to equal?</li></ul>${insight('The overview for the student table','Overall, men far outnumbered women in engineering and computing, whereas women were in the majority in medicine and education. Business attracted similar numbers of both.')}<p class="small">Use the table in Step 1.</p>${take('The overview answers: what would a reader remember? Groups and patterns, never figures.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','The body paragraphs',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The body paragraphs</h2><p>Don’t follow the layout of the table. A paragraph about the men’s column, then one about the women’s column, separates every comparison.</p><p>Instead, group the rows by what they have in common:</p><ul class="clean"><li><b>Body 1:</b> subjects where men far ${T('outnumbered')} women: engineering and computing.</li><li><b>Body 2:</b> subjects where women were in the majority, medicine and education, plus business, where the numbers were ${T('almost equal')}.</li></ul><p>Now every sentence compares men and women directly:</p>${insight('A direct comparison','There were more than three times as many men as women studying engineering, at 62,000 and 18,000.')}${mistake('<s>Men were 62 in engineering.</s> The table is in thousands, and “men were 62” is not English. Write: <i>62,000 men were studying engineering.</i>')}${take('Group the rows by what they have in common, so each sentence can compare directly.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c5-org"></div><div data-act="c5-split" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write a complete answer: introduction, overview and two body paragraphs. Aim for at least 150 words.</p>${taskbox(TASK+'.')}${chart('food')}${note('Two foods were far more expensive than the other three. That is your grouping. Then check which foods rose most in relative terms, and whether any changed places.')}<div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, two body paragraphs. No conclusion.','Paraphrase the task with a new verb and a new structure, and keep every detail.','The overview says what a reader would remember: groups and patterns, never figures.','Organise the body by group, not by column, so every sentence can compare directly.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The table compares how many men and women were studying five subjects at universities in one country.',c:0,m:'paraphrases the task.'},
         {w:'Overall, men far outnumbered women in engineering and computing.',c:1,m:'gives a main pattern with no figures.'},
         {w:'There were 48,000 male computing students, compared with just 14,000 female students.',c:2,m:'has detailed figures: body.'},
         {w:'Women were in the majority in medicine and education.',c:1,m:'states a main pattern without figures: overview.'},
         {w:'Business was almost evenly balanced, with 55,000 men and 52,000 women.',c:2,m:'gives the evidence with figures: body.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Task: “The table below shows the number of men and women studying five subjects at universities in one country.” Which introduction is best?',
  opts:[{t:'The table compares how many men and women were studying five different subjects at universities in one country.',ok:1,why:'A new verb and a new structure (how many … were studying), with every detail kept.'},{t:'The table below shows the number of men and women studying five subjects at universities in one country.',why:'This copies the task. The examiner doesn’t count copied words.'},{t:'The table shows that more men than women go to university.',why:'This is a finding, not an introduction, and it loses the five subjects.'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Good paraphrase, or does it change the meaning?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“the number of men and women studying” → “how many men and women were studying”',a:0,right:'Same meaning, new structure.',wrong:'This keeps the meaning: a noun phrase becomes a clause.'},
         {t:'“at universities in one country” → “at universities worldwide”',a:1,right:'Right: one country is not the world.',wrong:'“Worldwide” changes the meaning. Keep “in one country”.'},
         {t:'“five subjects” → “five different subjects”',a:0,right:'Same meaning.',wrong:'This keeps the meaning.'},
         {t:'“men and women” → “young people”',a:1,right:'Right: the gender split is the point of the table.',wrong:'“Young people” loses the comparison between men and women.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Writing an overview',decision:'Which is the best overview of the student table?',
  opts:[{t:'Overall, men far outnumbered women in engineering and computing, whereas women were in the majority in medicine and education. Business attracted similar numbers of both.',ok:1,why:'Which group led where, and the balanced subject, with no figures.'},{t:'Overall, 62,000 men studied engineering, compared with 18,000 women.',why:'Figures belong in the body, and this covers only one subject.'},{t:'Overall, business was the most popular subject because it leads to good jobs.',why:'Business did have the most students in total, but the table gives no reasons, and this overview misses the differences between men and women.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Men far outnumbered women in two of the five subjects.',a:0,right:'A main pattern, no figures.',wrong:'This is a main pattern with no figures: overview.'},
         {t:'Medicine had 41,000 female students and 30,000 male students.',a:1,right:'Detailed figures: body.',wrong:'This has figures, so it belongs in a body paragraph.'},
         {t:'Business attracted similar numbers of men and women.',a:0,right:'A main feature, stated without figures.',wrong:'A main feature without figures belongs in the overview.'},
         {t:'There were more than three times as many women as men studying education.',a:1,right:'A calculated comparison: body.',wrong:'A specific calculated comparison is body material: 38 ÷ 12 ≈ 3.2.'}]},
'c5-org':{type:'choice',level:'Supported',skill:'Organising the body',decision:'How would you organise the two body paragraphs for the student table?',
  opts:[{t:'Body 1: engineering and computing. Body 2: medicine, education and business.',ok:1,why:'Men outnumbered women in the first group; in the second, women were in the majority or the numbers were close. Each sentence can compare men and women directly.'},{t:'Body 1: the men. Body 2: the women.',why:'This follows the columns and separates every comparison. The reader has to match 62,000 with 18,000 across two paragraphs.'},{t:'Body 1: business and engineering. Body 2: computing, medicine and education.',why:'These groups mix subjects with very different gender balances, so neither paragraph has a clear point.'}]},
'c5-split':{type:'sort',level:'Supported',skill:'Grouping',decision:'Which body paragraph does each subject belong in?',cats:['Body 1: far more men','Body 2: more women, or close'],
  items:[{w:'Engineering',c:0,m:'62,000 men and 18,000 women.'},{w:'Computing',c:0,m:'48,000 men and 14,000 women.'},{w:'Medicine',c:1,m:'41,000 women and 30,000 men.'},{w:'Education',c:1,m:'38,000 women and 12,000 men.'},{w:'Business',c:1,m:'55,000 men and 52,000 women: almost equal.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The table compares…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction gives the foods, their price and the years.',fix:'Include the five foods, their price, and the years.',fn:v=>/food/i.test(v.intro)&&/(price|cost)/i.test(v.intro)&&/2005/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview says that all prices rose.',fix:'Say that every food became more expensive.',fn:v=>/(all|every|each)/i.test(v.ov)&&/(rose|increas|more expensive|went up|grew|higher)/i.test(v.ov)},
          {t:'You grouped coffee and cheese.',fix:'Put the two expensive foods, coffee and cheese, together in one paragraph.',fn:v=>/coffee/i.test(v.b1)&&/cheese/i.test(v.b1)},
          {t:'You grouped the three cheaper foods.',fix:'Put bread, apples and rice together in the other paragraph.',fn:v=>/bread/i.test(v.b2)&&/apple/i.test(v.b2)&&/rice/i.test(v.b2)},
          {t:'You gave prices with €.',fix:'Give prices with €, for example €18.20.',fn:v=>((v.b1+' '+v.b2).match(/€\s?\d/g)||[]).length>=4},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The table compares <button type="button" class="hl" data-n="0">how much five foods cost per kilo, on average,</button> in one country at three points between 2005 and 2025.</p><p><span class="plabel">Overview</span>Overall, all five foods became more expensive over the period, and coffee was the most expensive item in every year. <button type="button" class="hl" data-n="1">Coffee and rice saw the largest increases in relative terms, while apples rose the least.</button></p><p><span class="plabel">Body 1</span>Coffee and cheese were far more expensive than the other three foods. The price of coffee roughly doubled, from €9.00 to €18.20 per kilo, with the steeper rise in the second decade. <button type="button" class="hl" data-n="2">Cheese cost only slightly less than coffee in 2005, at €8.50, but it rose more slowly</button>, to €12.60, so by 2025 coffee cost €5.60 more per kilo.</p><p><span class="plabel">Body 2</span>The three cheaper foods all cost less than €3.50 per kilo throughout. Bread remained the most expensive of these, rising from €2.10 to €3.40. <button type="button" class="hl" data-n="3">The price of rice doubled, from €1.40 to €2.80, so that by 2025 it had overtaken apples</button>, which had been more expensive in both 2005 and 2015. Apples saw the smallest increase of all, just €0.80, to €2.60.</p>`,
  notes:['“How much … cost” turns the task’s noun phrase into a clause, and “at three points between” avoids copying the years list.','Relative change: coffee 18.20 ÷ 9.00 ≈ 2.0, rice 2.80 ÷ 1.40 = 2.0, apples 2.60 ÷ 1.80 ≈ 1.4.','A widening gap: €0.50 in 2005, €5.60 in 2025.','A change of position, with the past perfect: “by 2025 it had overtaken”.'],
  self:['My overview gives the general trend and the most expensive food, with no figures.','I organised the body by group, not by year.','I gave prices with € and two decimal places.','I checked every ratio before writing it.'],revise:1}
};

const gloss={
  'outnumbered':{term:'outnumbered',def:'Were more numerous than. “Men outnumbered women” means there were more men.',path:'M40,80 V20 H90 V80 M150,80 V60 H200 V80',ex:'“Men far outnumbered women in engineering.”'},
  'almost equal':{term:'almost equal',def:'Very close. Use it when the gap is small compared with the figures: 55,000 and 52,000.',path:'M40,80 V24 H90 V80 M150,80 V28 H200 V80',ex:'“The numbers of men and women studying business were almost equal.”'},
  'overtaken':{term:'had overtaken',def:'Had moved ahead of another category. Use the past perfect with “by” + a time.',path:'M20,70 L220,20 M20,50 L220,40',ex:'“By 2025, rice had overtaken apples.”'}
};

const retrieval={
 'c5-s1':[{q:'Does a Task 1 answer need a conclusion?',opts:[{t:'No: the overview does that job',ok:1,why:'Four parts only.'},{t:'Yes',why:'The overview replaces it.'}]}],
 'c5-s2':[{q:'Which paraphrase changes the meaning?',opts:[{t:'one country → worldwide',ok:1,why:'Different meaning.'},{t:'shows → compares',why:'Same meaning.'}]}],
 'c5-s3':[{q:'What never goes in the overview?',opts:[{t:'Figures',ok:1,why:'Patterns only.'},{t:'The main pattern',why:'That is what it is for.'}]}],
 'c5-s4':[{q:'Body 1: the men’s column; Body 2: the women’s. Why is this weak?',opts:[{t:'It separates every comparison',ok:1,why:'Group by subject instead.'},{t:'It is too short',why:'Length isn’t the problem.'}]}],
 'c5-s5':[{q:'Rice €1.40 → €2.80 is…',opts:[{t:'doubled',ok:1,why:'2.80 ÷ 1.40 = 2.'},{t:'tripled',why:'That would be €4.20.'}]}]
};

const minitest=[
 {q:'What are the four parts of a Task 1 answer?',opts:[{t:'Introduction, overview, two body paragraphs',ok:1,why:'No conclusion.'},{t:'Introduction, two body paragraphs, conclusion',why:'The overview is essential.'},{t:'Overview and one long paragraph',why:'Introduce, then group.'}],sp:'c5-s1'},
 {q:'Which part has no figures?',opts:[{t:'The overview',ok:1,why:'Patterns only.'},{t:'Body 1',why:'Body paragraphs need figures.'},{t:'Body 2',why:'Body paragraphs need figures.'}],sp:'c5-s1'},
 {q:'Which is the best paraphrase of “the table below shows”?',opts:[{t:'The table compares',ok:1,why:'A new verb.'},{t:'The table below shows',why:'Copied.'},{t:'The graph proves',why:'Not a graph, and it proves nothing.'}],sp:'c5-s2'},
 {q:'Which overview is best?',opts:[{t:'Overall, men were in the majority in three subjects and women in two.',ok:1,why:'Patterns, no figures.'},{t:'Overall, 62,000 men studied engineering.',why:'A detail with a figure.'},{t:'Overall, the table is interesting.',why:'Says nothing.'}],sp:'c5-s3'},
 {q:'Medicine: women 41, men 30 (thousands). Which is accurate?',opts:[{t:'Women outnumbered men in medicine.',ok:1,why:'41 > 30.'},{t:'There were twice as many women.',why:'Twice 30 is 60.'},{t:'Medicine was almost equal.',why:'An 11,000 gap is not “almost equal”.'}],sp:'c5-s4'},
 {q:'How should you organise the body for a table comparing two groups?',opts:[{t:'By rows with something in common',ok:1,why:'Direct comparisons.'},{t:'By column',why:'Separates the comparisons.'},{t:'In the order of the table',why:'Follow the data, not the layout.'}],sp:'c5-s4'},
 {q:'Education: 38 women, 12 men (thousands). Which is accurate?',opts:[{t:'more than three times as many women',ok:1,why:'≈ 3.2.'},{t:'four times as many women',why:'4 × 12 = 48.'},{t:'twice as many women',why:'2 × 12 = 24.'}],sp:'c5-s4'},
 {q:'Apples €1.80 → €2.60; rice €1.40 → €2.80. By 2025, rice…',opts:[{t:'had overtaken apples',ok:1,why:'€2.80 > €2.60.'},{t:'was still cheaper than apples',why:'Check 2025.'},{t:'cost the same as apples',why:'€2.80 and €2.60.'}],sp:'c5-s5'}
];

const cannow=[['Use the four-part shape','c5-s1'],['Paraphrase the task without changing its meaning','c5-s2'],['Write an overview with groups and patterns, no figures','c5-s3'],['Organise the body by group, not by column','c5-s4'],['Write a complete answer to a table task','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{subj:C.subj,food:C.food},retrieval,minitest,cannow});
})();
