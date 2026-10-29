/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 2 · OVERVIEWS FOR TRENDS
   ACTIVITY IDS (type · level)
     c2-dir     sort      Guided       Step 1  Which direction?
     c2-best    choice    Supported    Step 1  The best trend overview
     c2-big     binary    Supported    Step 2  Big picture or small step?
     c2-cross1..2 choice  Supported    Step 3  Crossovers
     c2-build   builder   Supported    Step 4  A trend overview
     c2-tense   fix       Independent  Step 4  Tense in overviews
     c2-write   write     Independent  Step 5  Solar panels
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=OV;
const P='Chapter 2',CT='Overviews for Trends',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);
const TASK='The graph below shows the percentage of households with solar panels in three regions of one country between 2008 and 2024';

const spreads=[
opening({n:2,title:CT,lede:'When a chart shows change over time, the overview describes the overall direction of each line and the moments when the order changes. It ignores the small ups and downs. In this chapter I’ll show you how to see the big picture in a trend, and how to say it in two sentences.',
  outcomes:['describe the overall direction of each line or category','look past small fluctuations to the start-to-end change',`report a ${T('crossover')} as a key feature`,'use the right tense for past data and for projections'],
  illus:illus('line'),
  steps:[[1,'c2-s1','Which way overall?','Start to end','Discover'],[2,'c2-s2','The big picture','Ignore the small steps','Understand'],[3,'c2-s3','Crossovers','When the order changes','Understand'],[4,'c2-s4','The language','Throughout, by contrast, the reverse','Practise'],[5,'c2-s5','Chapter challenge','Solar panels','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Which way overall?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Which way overall?</h2>${vid({title:'Which way overall?',len:'90 seconds',script:['Show the news graph. Cover everything except the first and last points.','Ask: printed news, up or down? Online news?','Say: opposite directions. That is the first half of the overview.','Uncover the middle: where do the lines cross?']})}<p>For each line, compare the first point with the last. That gives you the overall direction:</p>${chart('news')}<ul class="clean"><li><b>Printed newspapers:</b> fell throughout.</li><li><b>Online news:</b> rose throughout.</li></ul>${take('Start to end, for each line: up, down or about the same. That is the first part of a trend overview.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c2-dir"></div><div data-act="c2-best" style="margin-top:16px"></div>`}),

sp('c2-s2','The big picture',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The big picture</h2>${vid({title:'The big picture',len:'90 seconds',script:['Draw a line: 20, 26, 23, 31, 35.','Ask: is the dip at 23 a main feature? No: the line rose overall.','Say: one small dip goes in the body, if anywhere.','Show the overview phrase: rose overall, despite a brief fall.']})}<p>Real data goes up and down. The overview describes the overall movement and ignores the small steps.</p><ul class="clean"><li><b>Values 20, 26, 23, 31, 35:</b> rose overall, despite one brief fall.</li><li><b>Values 50, 52, 49, 51, 50:</b> ${T('remained broadly stable')}.</li><li><b>Values 10, 30, 32, 31, 33:</b> rose sharply at first, then levelled off.</li></ul>${mistake('<s>Overall, it rose, then fell, then rose again, then rose.</s> That is every step, not the big picture.')}${take('Describe the overall movement. A small dip belongs in the body, if anywhere.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-big"></div>`}),

sp('c2-s3','Crossovers',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Crossovers</h2>${vid({title:'Crossovers',len:'90 seconds',script:['Point to where the news lines cross, between 2010 and 2015.','Say: before that, printed news led; after it, online news led.','A change in the order is almost always overview material.','Show: by the end of the period, online news had overtaken printed newspapers.']})}<p>When two lines cross, the order changes. That is one of the most important features of any trend chart.</p><ul class="clean"><li>Printed newspapers had more readers in 2000, 2005 and 2010.</li><li>Online news had more readers from 2015 onwards.</li></ul>${insight('In the overview','By the end of the period, online news had overtaken printed newspapers in daily readership.')}${note('Give the crossover without figures in the overview. The exact years and figures go in the body.')}<div class="clear"></div>${take('A change of order, a crossover, is overview material. Say it without figures.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the graph in Step 1.</p><div data-act="c2-cross1"></div><div data-act="c2-cross2" style="margin-top:14px"></div>`}),

sp('c2-s4','The language',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The language</h2><p>Useful language for trend overviews:</p><ul class="clean"><li><b>Duration:</b> throughout the period, over the twenty years, ${T('by the end of the period')}.</li><li><b>Contrast:</b> while, whereas, by contrast, the reverse was true for…</li><li><b>Change of order:</b> overtook, became the most…, fell to the lowest…</li><li><b>Tense:</b> past simple for past years; “is expected to” or “is projected to” for future years.</li></ul>${insight('Overview','Overall, the number of people reading printed newspapers fell throughout the period, whereas online news attracted more and more readers. By the end of the period, online news had overtaken print in daily readership.')}${take('Duration, contrast, change of order, and the right tense: past for past years, “is projected to” for future ones.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><div data-act="c2-tense"></div></div>`}),

sp('c2-s5','Chapter challenge: solar panels',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task.</p>${taskbox(TASK+'.')}${chart('solar')}${note('Three lines. Which way did each go? Which was highest throughout? Did any line slow down, and did that change the order?')}<div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Compare the start and the end of each line to find its overall direction.','Ignore small ups and downs: describe the overall movement.','A crossover, or any change of order, is overview material.','Use the past for past data, and “is projected to” for future years.']})
];

const acts={
'c2-dir':{type:'sort',level:'Guided',skill:'Overall direction',decision:'What did each line do overall?',cats:['Rose overall','Fell overall'],
  items:[{w:'Printed newspapers',c:1,m:'9 million to 1.9 million.'},{w:'Online news',c:0,m:'0.5 million to 9.6 million.'},{w:'The Coast line (Chapter 1)',c:0,m:'12 million to 26 million.'},{w:'The Valley line (Chapter 1)',c:1,m:'18 million to 12 million.'}]},
'c2-best':{type:'choice',level:'Supported',skill:'Trend overviews',decision:'Which is the best overview of the news graph?',
  opts:[{t:'Overall, the number of readers of printed newspapers fell steadily, while online news grew, overtaking print by the end of the period.',ok:1,why:'Both directions and the crossover, with no figures.'},{t:'Overall, printed newspapers had 9 million readers in 2000.',why:'A single figure.'},{t:'Overall, people prefer reading news online.',why:'An opinion about preferences, in the present tense. The graph shows readers, not preferences.'}]},
'c2-big':{type:'binary',level:'Supported',skill:'Big picture',decision:'Is each one big-picture overview material, or a small step for the body?',labels:['Overview','Body'],
  items:[{t:'Values 20, 26, 23, 31, 35: the line rose overall.',a:0,right:'The overall movement.',wrong:'This is the overall movement: overview.'},
         {t:'Values 20, 26, 23, 31, 35: the line dipped to 23 in the third year.',a:1,right:'One small step: body, if anywhere.',wrong:'A single dip is a detail.'},
         {t:'Values 50, 52, 49, 51, 50: the figure remained broadly stable.',a:0,right:'The overall pattern.',wrong:'This is the big picture: overview.'},
         {t:'Values 10, 30, 32, 31, 33: the figure rose sharply at first, then levelled off.',a:0,right:'The overall shape: overview.',wrong:'This describes the whole line: overview.'}]},
'c2-cross1':{type:'choice',level:'Supported',skill:'Crossovers',decision:'When did online news overtake printed newspapers?',
  opts:[{t:'Between 2010 and 2015',ok:1,why:'2010: 5.5 against 3.9 million; 2015: 3.8 against 6.2 million.'},{t:'Between 2000 and 2005',why:'Print was still far ahead in 2005.'},{t:'Between 2020 and 2025',why:'Online was already ahead by 2015.'}]},
'c2-cross2':{type:'choice',level:'Supported',skill:'Crossovers',decision:'Which overview sentence reports the crossover best?',
  opts:[{t:'By the end of the period, online news had overtaken printed newspapers.',ok:1,why:'The change of order, with no figures.'},{t:'In 2015, online news had 6.2 million readers and print 3.8 million.',why:'Accurate, but detailed figures: body.'},{t:'The lines cross in the middle.',why:'This describes the drawing, not the data.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Trend overviews',decision:'Build an overview sentence for the news graph.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','the number of people reading printed newspapers','fell throughout the period,','whereas online news','attracted more and more readers.'],
  distract:[{t:'from 9 million to 1.9 million,',why:'No figures in the overview.',fix:'fell throughout the period,'},{t:'falls every year,',why:'Past data: use the past tense.',fix:'fell throughout the period,'}],
  right:'Both trends, a contrast and the past tense, with no figures.',orderMsg:'All the right pieces, but check the order: Overall, print and its trend, whereas, online and its trend.',incompleteMsg:'Good so far, but incomplete. Add the contrast with online news.'},
'c2-tense':{type:'fix',level:'Independent',skill:'Tense',decision:'Fix the tense in each overview sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Overall, the number of print readers falls throughout the period.',ok:/\bfell\b|\bdeclined\b|\bdecreased\b/i,bad:/\bfalls\b/i,hint:'The data runs from 2000 to 2025: it is in the past.',err:'falls',fix:'fell',why:'Past data takes the past simple.',model:'Overall, the number of print readers fell throughout the period.'},
         {wrong:'Overall, online readership rose and will rise to 12 million by 2030.',ok:/(is (projected|expected|predicted) to|is likely to)/i,bad:/will rise to 12 million/i,hint:'For a projection, use a form that shows it is a forecast.',err:'will rise',fix:'is projected to rise',why:'Projections are forecasts: “is projected to” or “is expected to”. And the figure belongs in the body.',model:'Overall, online readership rose and is projected to keep rising.'},
         {wrong:'Overall, online news has overtaken printed newspapers in 2015.',ok:/had overtaken|overtook/i,bad:/has overtaken/i,hint:'With a past year, don’t use the present perfect.',err:'has overtaken … in 2015',fix:'overtook / had overtaken by',why:'A finished time (2015) takes the past simple, or “had overtaken by”.',model:'Overall, online news had overtaken printed newspapers by the end of the period.'}]},
'c2-write':{type:'write',level:'Independent',skill:'Trend overviews',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The line graph compares…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction gives the topic, the regions and the years.',fix:'Include solar panels, the three regions, 2008 and 2024.',fn:v=>/solar/i.test(v.intro)&&/region/i.test(v.intro)&&/2008/.test(v.intro)&&/2024/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview says all three rose.',fix:'Say that the proportion rose in all three regions.',fn:v=>/(all|every|each|three)/i.test(v.ov)&&/(rose|increas|grew|went up|higher)/i.test(v.ov)},
          {t:'Your overview names the leading region.',fix:'The South was highest throughout: say so.',fn:v=>/south/i.test(v.ov)},
          {t:'Your overview mentions the change of order or the slowdown.',fix:'Add the West’s slowdown, or that the North overtook the West.',fn:v=>/west/i.test(v.ov)&&/(slow|level|overt|north)/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p>The line graph compares the proportion of homes fitted with solar panels across three regions of a single country from 2008 to 2024.</p><p><button type="button" class="hl" data-n="0">Overall, the proportion of households with solar panels rose in all three regions</button>, <button type="button" class="hl" data-n="1">and the South had the highest rate throughout the period, by far the highest by the end.</button> <button type="button" class="hl" data-n="2">Growth in the West slowed considerably after 2016, so that the North overtook it by the end of the period.</button></p>`,
  notes:['The general pattern for all three lines.','The leader throughout; “by far” only for the end (33% against 15%).','The slowdown and the change of order, without figures. A year is fine; figures are not.'],
  self:['My overview gives the direction of every line.','I named the leader.','I reported the change of order.','I used the past tense and no figures.'],revise:1}
};

const gloss={
  'crossover':{term:'crossover',def:'The point where two lines on a graph cross, so their order changes.',path:'M20,70 L220,20 M20,20 L220,70',ex:'“The crossover happened between 2010 and 2015.”'},
  'remained broadly stable':{term:'remained broadly stable',def:'Changed only a little overall, despite small ups and downs.',path:'M20,46 L70,40 L120,50 L170,42 L220,46',ex:'“The figure remained broadly stable.”'},
  'by the end of the period':{term:'by the end of the period',def:'At or before the last date on the chart. Useful for overviews, often with the past perfect.',path:'M20,60 L200,30 M200,20 V40',ex:'“By the end of the period, online news had overtaken print.”'}
};

const retrieval={
 'c2-s1':[{q:'How do you find a line’s overall direction?',opts:[{t:'Compare the first and last points',ok:1,why:'Start to end.'},{t:'Look at the middle',why:'That shows steps, not direction.'}]}],
 'c2-s2':[{q:'Values 20, 26, 23, 31, 35. Overview?',opts:[{t:'It rose overall',ok:1,why:'The big picture.'},{t:'It rose, fell, rose',why:'Every step.'}]}],
 'c2-s3':[{q:'Two lines cross. Is it overview material?',opts:[{t:'Yes',ok:1,why:'The order changes.'},{t:'No',why:'A change of order is a key feature.'}]}],
 'c2-s4':[{q:'For a projected year, use…',opts:[{t:'is projected to',ok:1,why:'A forecast.'},{t:'the past simple',why:'That is for past years.'}]}],
 'c2-s5':[{q:'Which region was highest throughout?',opts:[{t:'The South',ok:1,why:'5% to 33%.'},{t:'The West',why:'The West slowed down.'}]}]
};

const minitest=[
 {q:'What is the first thing a trend overview gives?',opts:[{t:'The overall direction of each line',ok:1,why:'Start to end.'},{t:'The highest figure',why:'Figures go in the body.'},{t:'Every change',why:'Too much detail.'}],sp:'c2-s1'},
 {q:'Printed newspapers: 9.0 → 1.9 million. Overview?',opts:[{t:'Readership fell throughout the period.',ok:1,why:'Direction, no figures.'},{t:'It fell by 7.1 million.',why:'A figure.'},{t:'It is falling.',why:'Past data: past tense.'}],sp:'c2-s1'},
 {q:'Values 50, 52, 49, 51, 50 are best described as…',opts:[{t:'broadly stable',ok:1,why:'Little overall change.'},{t:'rising sharply',why:'It hardly moved.'},{t:'fluctuating wildly',why:'The changes are small.'}],sp:'c2-s2'},
 {q:'Where does a single small dip belong?',opts:[{t:'The body, if anywhere',ok:1,why:'It is a detail.'},{t:'The overview',why:'Too small.'},{t:'The introduction',why:'No data there.'}],sp:'c2-s2'},
 {q:'Why is a crossover important?',opts:[{t:'The order of the categories changes',ok:1,why:'A key feature.'},{t:'It looks interesting',why:'It is about the data.'},{t:'It always happens',why:'Not always.'}],sp:'c2-s3'},
 {q:'Choose the best overview sentence.',opts:[{t:'By the end of the period, online news had overtaken print.',ok:1,why:'Crossover, no figures.'},{t:'In 2015, online had 6.2 million readers.',why:'A detail.'},{t:'The lines cross.',why:'Describes the drawing.'}],sp:'c2-s3'},
 {q:'Which is correct for past data?',opts:[{t:'Online news overtook print.',ok:1,why:'Past simple.'},{t:'Online news has overtaken print in 2015.',why:'Not with a past year.'},{t:'Online news overtakes print.',why:'Use the past.'}],sp:'c2-s4'},
 {q:'West: 3, 5, 9, 10, 11. Which describes it?',opts:[{t:'It rose, but growth slowed after 2016.',ok:1,why:'Only one point every four years after 2016.'},{t:'It rose steadily throughout.',why:'It slowed.'},{t:'It fell.',why:'It rose.'}],sp:'c2-s5'}
];

const cannow=[['Describe the overall direction of each line','c2-s1'],['Look past small fluctuations','c2-s2'],['Report a crossover in the overview','c2-s3'],['Use the right tense in a trend overview','c2-s4'],['Write an overview for a trend chart','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{news:C.news,solar:C.solar},retrieval,minitest,cannow});
})();
