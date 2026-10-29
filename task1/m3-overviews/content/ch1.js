/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 1 · WHAT AN OVERVIEW IS
   ACTIVITY IDS (type · level)
     c1-which   choice    Guided       Step 1  Which one is the overview?
     c1-sort    sort      Guided       Step 1  Overview or detail?
     c1-facts   binary    Supported    Step 2  True or false?
     c1-main1..2 choice   Supported    Step 3  The main features
     c1-build   builder   Supported    Step 4  Build an overview
     c1-fix     fix       Supported    Step 4  Take the figures out
     c1-write   write     Independent  Step 5  Introduction and overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,howto,opening,review,addChapter}=OE;
const {C,illus}=OV;
const P='Chapter 1',CT='What an Overview Is',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The graph below shows the number of passengers who used three railway lines in one country between 2005 and 2025';

const spreads=[
opening({n:1,title:CT,lede:'The overview is the most important paragraph in your Task 1 answer, and the one candidates most often get wrong. As an examiner, it was the first thing I looked for. In this chapter I’ll show you what an overview is, why it matters so much, and how to write one from the main features of a chart.',
  outcomes:['say what an overview is and where it goes','explain why a missing overview holds back your Task Achievement score',`find the ${T('main features')} of a chart by asking three questions`,'write a two-sentence overview with no figures'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('line'),
  steps:[[1,'c1-s1','The big picture','Overview or detail?','Discover'],[2,'c1-s2','Why it matters','The examiner’s view','Understand'],[3,'c1-s3','Find the main features','Three questions','Understand'],[4,'c1-s4','Write it','Two sentences, no figures','Practise'],[5,'c1-s5','Chapter challenge','Three railway lines','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('The overview describes patterns, never individual figures.','main features','Overall, the main features are clear')}),

sp('c1-s1','The big picture',{exploreFirst:true,
 left:`${head('Step 1 · Discover','Learn')}<h2>The big picture</h2>${vid({title:'The big picture',len:'90 seconds',script:['Show the railway graph for five seconds, then hide it.','Ask: what do you remember? One line went up, one went down, one stayed low.','Say: that is an overview. What a reader remembers, not every figure.','Finish: it comes straight after the introduction and starts with “Overall,”.']})}<p>An <b>overview</b> is a short summary of the main features of the chart: the patterns a reader would remember after one look. It has no detailed figures.</p>${chart('train')}<ul class="clean"><li><b>Where:</b> straight after the introduction (or, less often, at the end).</li><li><b>How long:</b> usually one or two sentences.</li><li><b>How it starts:</b> usually “Overall,”.</li></ul>${take('An overview is the big picture in words: what a reader would remember, with no detailed figures.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c1-which"></div><div data-act="c1-sort" style="margin-top:16px"></div>`}),

sp('c1-s2','Why it matters',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Why it matters</h2>${vid({title:'Why the overview matters',len:'90 seconds',script:['Show the Task Achievement band descriptors side by side.','Band 7: a clear overview of the main trends, differences or stages.','Band 5: no clear overview.','Say: as an examiner, the overview was one of the first things I checked.']})}<p>Task Achievement is one of the four criteria, a quarter of your Task 1 score. The public band descriptors describe the overview directly:</p><ul class="clean"><li><b>Band 7:</b> the answer presents a clear overview of the main trends, differences or stages.</li><li><b>Band 5:</b> there is no clear overview.</li></ul>${insight('The examiner’s view','When I marked Task 1, the overview was one of the first things I looked for. Without a clear overview, your Task Achievement score is likely to be limited to Band 5, however good your details are.')}${note('“Clear” matters. A vague or inaccurate overview doesn’t count as a clear one.')}<div class="clear"></div>${take('No clear overview is likely to limit Task Achievement to Band 5. A clear one is part of Band 7.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-facts"></div>`}),

sp('c1-s3','Find the main features',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Find the main features</h2>${vid({title:'Three questions',len:'2 minutes',script:['Ask question one: what is the general pattern? Two lines move in opposite directions.','Question two: what is the most striking change? The Coast line overtakes the Valley line.','Question three: is there an exception? The Northern line hardly changes.','Finish: two or three answers make your overview.']})}<p>Ask three questions about any chart:</p><ul class="clean"><li><b>What is the general pattern?</b> Up, down, or different directions?</li><li><b>What is the most striking feature?</b> A change of leader, the biggest change, the highest or lowest.</li><li><b>Is there an exception?</b> A category that behaves differently.</li></ul>${insight('The railway lines','Coast up, Valley down; the Coast line overtakes the Valley line; the Northern line stays lowest with little change.')}<p class="small">Use the graph in Step 1.</p>${take('Pattern, most striking feature, exception: two or three answers are your overview.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the graph in Step 1.</p><div data-act="c1-main1"></div><div data-act="c1-main2" style="margin-top:14px"></div>`}),

sp('c1-s4','Write it',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Write it</h2><p>Turn your answers into one or two sentences. Use general language, not figures:</p><ul class="clean"><li><b>Openers:</b> Overall, · In general, · It is clear that…</li><li><b>General words:</b> rose, fell, remained, the busiest, the least used, overtook.</li><li><b>Links:</b> while, whereas, and, although.</li></ul>${insight('Overview','Overall, passenger numbers on the Coast line rose throughout the period, while those on the Valley line fell, so that the Coast line became the busiest. The Northern line remained the least used, with little change.')}${mistake('<s>Overall, the Coast line rose from 12 million to 26 million.</s> Detailed figures belong in the body. Say what happened, not by how much.')}${take('One or two sentences, an opener, general words and links, no figures.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c1-build"></div><div data-gate="c1-build" hidden style="margin-top:16px"><div data-act="c1-fix"></div></div>`}),

sp('c1-s5','Chapter challenge: three railway lines',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task.</p>${taskbox(TASK+'.')}${chart('train2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['An overview summarises the main features, with no detailed figures.','Without a clear overview, Task Achievement is likely to be limited to Band 5.','Ask three questions: the general pattern, the most striking feature, the exception.','Write one or two sentences with an opener, general words and links.']})
];

const acts={
'c1-which':{type:'choice',level:'Guided',skill:'Recognising an overview',decision:'Which sentence is an overview of the railway graph?',
  opts:[{t:'Overall, the Coast line became the busiest, while use of the Valley line declined.',ok:1,why:'The big picture, with no figures.'},{t:'In 2015, 17 million passengers used the Coast line.',why:'One figure for one year: a detail.'},{t:'The graph shows passengers on three railway lines.',why:'That is the introduction: it says what the graph shows, not what it tells us.'}]},
'c1-sort':{type:'sort',level:'Guided',skill:'Overview or detail',decision:'Overview or detail?',cats:['Overview','Detail'],
  items:[{w:'Passenger numbers moved in opposite directions on the Coast and Valley lines.',c:0,m:'a general pattern.'},{w:'The Valley line carried 18 million passengers in 2005.',c:1,m:'one figure.'},{w:'The Northern line was the least used throughout.',c:0,m:'a main feature, no figures.'},{w:'Between 2020 and 2025, the Coast line gained 5 million passengers.',c:1,m:'a specific change with a figure.'}]},
'c1-facts':{type:'binary',level:'Supported',skill:'The overview and the criteria',decision:'True or false?',labels:['True','False'],
  items:[{t:'The overview is part of Task Achievement.',a:0,right:'The band descriptors mention it under Task Achievement.',wrong:'It is true: the overview is assessed under Task Achievement.'},
         {t:'A Band 7 answer presents a clear overview of the main trends, differences or stages.',a:0,right:'That is the Band 7 wording.',wrong:'It is true: that is how the Band 7 descriptor puts it.'},
         {t:'An overview should include the most important figures.',a:1,right:'Right. Figures belong in the body.',wrong:'False: an overview describes patterns, not figures.'},
         {t:'If your details are excellent, you don’t need an overview.',a:1,right:'Right. Without a clear overview, Task Achievement is likely to be limited to Band 5.',wrong:'False: excellent details can’t replace a clear overview.'}]},
'c1-main1':{type:'choice',level:'Supported',skill:'The most striking feature',decision:'What is the most striking feature of the railway graph?',
  opts:[{t:'The Coast line overtook the Valley line to become the busiest.',ok:1,why:'A change of leader is often the most striking feature.'},{t:'The Northern line carried 7 million passengers in 2010.',why:'A single figure, not a main feature.'},{t:'All three lines rose.',why:'The Valley line fell.'}]},
'c1-main2':{type:'choice',level:'Supported',skill:'The exception',decision:'Which line is the exception?',
  opts:[{t:'The Northern line: it changed very little and stayed the least used.',ok:1,why:'6 to 8 million: almost flat.'},{t:'The Coast line: it rose.',why:'Its rise is part of the main pattern.'},{t:'The Valley line: it fell.',why:'Its fall is part of the main pattern.'}]},
'c1-build':{type:'builder',level:'Supported',skill:'Building an overview',decision:'Build the first overview sentence.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','passenger numbers on the Coast line rose,','while those on the Valley line fell,','so that the Coast line','became the busiest.'],
  distract:[{t:'from 12 million to 26 million,',why:'No figures in the overview.',fix:'passenger numbers on the Coast line rose,'},{t:'because more people live by the sea,',why:'No reasons: the graph doesn’t give them.',fix:'so that the Coast line'}],
  right:'An opener, two contrasting trends and the change of leader, with no figures.',orderMsg:'All the right pieces, but check the order: Overall, the Coast line, the Valley line, the result.',incompleteMsg:'Good so far, but incomplete. Add the result: which line became the busiest.'},
'c1-fix':{type:'fix',level:'Supported',skill:'No figures',decision:'Rewrite each overview sentence without figures.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Overall, the Valley line fell from 18 million to 12 million.',ok:/^overall,? (passenger numbers on |use of |the number of passengers on )?the valley line (fell|declined|decreased|lost)/i,bad:/\d/,hint:'Keep the trend; remove the numbers.',err:'from 18 million to 12 million',fix:'(remove the figures)',why:'An overview gives the trend without figures.',model:'Overall, the number of passengers on the Valley line fell.'},
         {wrong:'Overall, the Northern line stayed between 6 and 8 million passengers.',ok:/(little change|changed (very )?little|remained (fairly |relatively )?(stable|steady|low)|least used|lowest)/i,bad:/\d/,hint:'Describe the pattern: how much did it change?',err:'between 6 and 8 million',fix:'changed very little / remained the least used',why:'Describe the pattern, not the range.',model:'Overall, the Northern line remained the least used, with little change.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Introduction and overview',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The line graph illustrates…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction gives the topic and the years.',fix:'Include the railway lines, 2005 and 2025.',fn:v=>/(rail|line|train)/i.test(v.intro)&&/2005/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” or similar.',fix:'Start with “Overall,” or “In general,”.',fn:v=>/^\s*(overall|in general|it is clear|in summary)/i.test(v.ov)},
          {t:'Your overview has no figures.',fix:'Remove the figures from your overview.',fn:v=>v.ov.trim()&&!/\d/.test(figs(v.ov))},
          {t:'Your overview gives the two opposite trends.',fix:'Say that the Coast line rose and the Valley line fell.',fn:v=>/coast/i.test(v.ov)&&/valley/i.test(v.ov)},
          {t:'Your overview mentions the exception.',fix:'Add the Northern line: the least used, with little change.',fn:v=>/northern/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The line graph illustrates how many people travelled on three railway lines in one country over the twenty years from 2005 to 2025.</button></p><p><button type="button" class="hl" data-n="1">Overall, passenger numbers on the Coast line rose throughout the period, while those on the Valley line fell</button>, <button type="button" class="hl" data-n="2">so that the Coast line became the busiest of the three.</button> <button type="button" class="hl" data-n="3">The Northern line remained the least used, with little change.</button></p>`,
  notes:['A new verb (illustrates) and a new structure (how many people travelled).','The general pattern: two lines in opposite directions.','The most striking feature: a change of leader.','The exception, with no figures.'],
  self:['My introduction says what the graph shows, where and when.','My overview starts with “Overall,”.','My overview has the pattern, the striking feature and the exception.','My overview has no figures.'],revise:1}
};

const gloss={
  'main features':{term:'main features',def:'The most important patterns in a chart: the general trend, the biggest changes, the highest and lowest, and any exception.',path:'M20,70 L80,50 L140,40 L220,20',ex:'“The overview describes the main features.”'},
  'overview':{term:'overview',def:'A short summary of the main features of a chart, with no detailed figures. It usually starts with “Overall,”.',path:'M20,25 H220 M20,45 H180 M20,65 H200',ex:'“Overall, passenger numbers on the Coast line rose.”'},
  'Task Achievement':{term:'Task Achievement',def:'One of the four criteria: how well you cover the requirements of the task, including the overview. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'“A clear overview is part of Band 7 Task Achievement.”'}
};

const retrieval={
 'c1-s1':[{q:'Where does the overview usually go?',opts:[{t:'Straight after the introduction',ok:1,why:'Or, less often, at the end.'},{t:'In the middle of the body',why:'It is a separate paragraph.'}]}],
 'c1-s2':[{q:'No clear overview is likely to limit Task Achievement to…',opts:[{t:'Band 5',ok:1,why:'The Band 5 descriptor mentions it.'},{t:'Band 8',why:'Much lower.'}]}],
 'c1-s3':[{q:'Which question finds the exception?',opts:[{t:'Is there a category that behaves differently?',ok:1,why:'The exception.'},{t:'What is the highest figure?',why:'That finds a main feature.'}]}],
 'c1-s4':[{q:'Can an overview include figures?',opts:[{t:'No: patterns only',ok:1,why:'Figures go in the body.'},{t:'Yes, the key ones',why:'Keep them for the body.'}]}],
 'c1-s5':[{q:'What happened to the Valley line?',opts:[{t:'Its passenger numbers fell',ok:1,why:'18 to 12 million.'},{t:'It became the busiest',why:'That is the Coast line.'}]}]
};

const minitest=[
 {q:'What is an overview?',opts:[{t:'A summary of the main features, with no detailed figures',ok:1,why:'The big picture.'},{t:'A paraphrase of the task',why:'That is the introduction.'},{t:'A conclusion with your opinion',why:'No opinions in Task 1.'}],sp:'c1-s1'},
 {q:'How does an overview usually start?',opts:[{t:'Overall,',ok:1,why:'Or “In general,”.'},{t:'In conclusion,',why:'Task 1 has no conclusion.'},{t:'Firstly,',why:'That starts a list.'}],sp:'c1-s1'},
 {q:'Which criterion assesses the overview?',opts:[{t:'Task Achievement',ok:1,why:'Main trends, differences or stages.'},{t:'Lexical Resource',why:'That is vocabulary.'},{t:'Grammatical Range and Accuracy',why:'That is grammar.'}],sp:'c1-s2'},
 {q:'Which describes Band 7 Task Achievement?',opts:[{t:'A clear overview of the main trends, differences or stages',ok:1,why:'The Band 7 wording.'},{t:'No clear overview',why:'That is Band 5.'},{t:'An overview with every figure',why:'Figures go in the body.'}],sp:'c1-s2'},
 {q:'Which is a main feature of the railway graph?',opts:[{t:'The Coast line overtook the Valley line',ok:1,why:'A change of leader.'},{t:'14 million in 2010',why:'A figure.'},{t:'The graph has three lines',why:'That describes the layout.'}],sp:'c1-s3'},
 {q:'Which overview sentence is best?',opts:[{t:'Overall, the Northern line remained the least used.',ok:1,why:'A main feature, no figures.'},{t:'Overall, the Northern line carried 8 million in 2025.',why:'A figure.'},{t:'Overall, the Northern line is not popular.',why:'Present tense for past data, and vague.'}],sp:'c1-s4'},
 {q:'How long is a typical overview?',opts:[{t:'One or two sentences',ok:1,why:'Short and clear.'},{t:'Half the answer',why:'Too long.'},{t:'One word',why:'Too short.'}],sp:'c1-s4'},
 {q:'Coast 12 → 26 million. In the overview you write…',opts:[{t:'passenger numbers on the Coast line rose',ok:1,why:'The trend, no figures.'},{t:'it rose by 14 million',why:'A figure.'},{t:'it more than doubled to 26 million',why:'A figure: keep it for the body.'}],sp:'c1-s5'}
];

const cannow=[['Say what an overview is and where it goes','c1-s1'],['Explain why the overview matters for Task Achievement','c1-s2'],['Find the main features with three questions','c1-s3'],['Write an overview with no figures','c1-s4'],['Write an introduction and an overview','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{train:C.train,train2:cp('train','ch-train2')},retrieval,minitest,cannow});
})();
