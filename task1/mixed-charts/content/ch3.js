/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 3 · SELECTING FROM TWO CHARTS
   ACTIVITY IDS (type · level)
     c3-budget  choice    Guided       Step 1  Share out the words
     c3-select  binary    Supported    Step 1  Include or leave out?
     c3-grid    sort      Supported    Step 2  Size and recycling rate
     c3-head1..2 choice   Supported    Step 3  The headline of each chart
     c3-build   builder   Supported    Step 4  The overview
     c3-ov      choice    Independent  Step 4  The best overview
     c3-write   write     Independent  Step 5  Overview and two body paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,figs,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 3',CT='Selecting from Two Charts',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:3,title:CT,lede:'Two charts, the same time limit, about the same number of words. So you can’t give each chart as much detail as you would on its own. In this chapter I’ll show you how to share out your words, find the headline in each chart and choose the details that connect them.',
  outcomes:['share out about 170 words between two charts','choose the headline feature of each chart',`compare the same categories across two charts, ${T('even though')} they measure different things`,'leave out details that don’t support a comparison'],
  illus:illus('pie','bar'),
  steps:[[1,'c3-s1','Share out the words','Half for each chart','Discover'],[2,'c3-s2','The same categories','Compare across the charts','Understand'],[3,'c3-s3','The headline of each chart','One key feature each','Understand'],[4,'c3-s4','The overview','Both headlines, one sentence','Practise'],[5,'c3-s5','Chapter challenge','Waste and recycling','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Share out the words',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Share out the words</h2>${vid({title:'Share out the words',len:'90 seconds',script:['Draw a bar of about 170 words.','Split it: introduction 25, overview 35, body 1 about 55, body 2 about 55.','Say: each chart gets one body paragraph, so each gets about 55 words.','Finish: that is room for four or five figures per chart, not ten.']})}<p>A good mixed-chart answer is about 170 to 190 words. Share them out:</p><ul class="clean"><li><b>Introduction:</b> about 25 words, naming both charts.</li><li><b>Overview:</b> about 35 words, a key feature from each.</li><li><b>Body 1:</b> about 55 words for the first chart.</li><li><b>Body 2:</b> about 55 words for the second chart, linked to the first.</li></ul>${chart('waste')}${chart('recyc')}${take('About 55 words per chart means four or five figures each. Choose them carefully.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c3-budget"></div><div data-act="c3-select" style="margin-top:16px"></div>`}),

sp('c3-s2','The same categories',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The same categories</h2>${vid({title:'The same categories',len:'2 minutes',script:['Point out that both charts use the same types of waste.','Read food across both: 35% of waste, but only 15% recycled.','Read glass: only 10% of waste, but 65% recycled.','Finish: when two charts share categories, compare each category across the charts.']})}<p>These charts share their categories: food, paper, plastic, glass and garden waste. But they measure different things:</p><ul class="clean"><li><b>The pie:</b> what share of <b>all waste</b> each type makes up.</li><li><b>The bars:</b> what percentage of <b>that type</b> is recycled.</li></ul><p>So read each category across both charts:</p><ul class="clean"><li><b>Food:</b> the largest share (35%), but the lowest recycling rate (15%).</li><li><b>Glass:</b> a small share (10%), but a high rate (65%).</li></ul>${mistake('<s>Food waste fell to 15%.</s> The 15% is a different measure, from a different chart. Food was 35% of all waste, and 15% of food waste was recycled.')}${take('Same categories, different measures: read each category across both charts, and say which measure each figure belongs to.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c3-grid"></div>`}),

sp('c3-s3','The headline of each chart',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The headline of each chart</h2><p>Before you choose details, find the one feature of each chart that a reader would remember:</p><ul class="clean"><li><b>The pie:</b> food was the largest type of waste, followed by paper. Together they made up 60%.</li><li><b>The bars:</b> paper had the highest recycling rate and food the lowest.</li></ul>${insight('The headlines connect','The largest category, food, had the lowest recycling rate. That contrast is the most important point in the task.')}${note('Then choose details that support the headlines: the figures for food and paper, and one or two that stand out, such as glass.')}<div class="clear"></div>${take('Find one headline per chart. Choose details that support it, and leave out the rest.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c3-head1"></div><div data-act="c3-head2" style="margin-top:14px"></div>`}),

sp('c3-s4','The overview',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The overview</h2><p>Put both headlines in one or two sentences, with no figures. When the headlines connect, join them with a contrast:</p>${insight('Overview','Overall, food made up the largest share of household waste but had the lowest recycling rate, whereas paper, the second-largest type, had the highest recycling rate.')}${mistake('<s>Overall, people waste too much food and should recycle more.</s> An opinion, not an overview. Task 1 describes.')}${take('Both headlines, joined by the connection, no figures and no opinions.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c3-build"></div><div data-gate="c3-build" hidden style="margin-top:16px"><div data-act="c3-ov"></div></div>`}),

sp('c3-s5','Chapter challenge: waste and recycling',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and two body paragraphs: one for each chart. Link the second paragraph to the first.</p>${taskbox('The pie chart shows the types of household waste produced in one country, and the bar chart shows the percentage of each type that was recycled.')}${chart('waste2')}${chart('recyc2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Share out about 170 words: about 55 for each chart’s body paragraph.','When the charts share categories, read each category across both, and keep the measures apart.','Find one headline per chart and choose details that support it.','Put both headlines in the overview, joined by the connection.']})
];

const acts={
'c3-budget':{type:'choice',level:'Guided',skill:'Planning length',decision:'About how many figures can each body paragraph hold?',
  opts:[{t:'Four or five',ok:1,why:'About 55 words leaves room for four or five figures with comparisons.'},{t:'All of them',why:'That would turn each paragraph into a list and push you far over time.'},{t:'None',why:'Body paragraphs need figures as evidence.'}]},
'c3-select':{type:'binary',level:'Supported',skill:'Selecting from two charts',decision:'Include it, or leave it out?',labels:['Include','Leave out'],
  items:[{t:'Food made up just over a third of all household waste.',a:0,right:'The largest share: a key feature.',wrong:'The largest share is a key feature.'},
         {t:'Only 15% of food waste was recycled.',a:0,right:'The lowest rate, and it connects with the pie.',wrong:'This is the lowest rate, and it links to food’s large share.'},
         {t:'Other materials made up 7% of waste.',a:1,right:'Right. “Other” is the smallest and doesn’t appear in the bar chart.',wrong:'This is a minor detail with no link to the bar chart.'},
         {t:'Glass made up only a tenth of waste but was recycled at a rate of 65%.',a:0,right:'A striking contrast across the charts.',wrong:'A small share with a high rate is a striking contrast.'},
         {t:'Garden waste made up 8% of waste, and other materials 7%, a difference of 1 percentage point.',a:1,right:'Right. A tiny difference between two small categories.',wrong:'This compares two minor categories: leave it out.'}]},
'c3-grid':{type:'sort',level:'Supported',skill:'Reading across two charts',decision:'Where does each type of waste belong?',prompt:'Large share: a quarter or more of all waste. High rate: half or more recycled.',cats:['Large share, high rate','Large share, low rate','Small share, high rate','Small share, low rate'],
  items:[{w:'Food',c:1,m:'35% of waste, 15% recycled.'},{w:'Paper',c:0,m:'25% of waste, 70% recycled.'},{w:'Glass',c:2,m:'10% of waste, 65% recycled.'},{w:'Garden waste',c:2,m:'8% of waste, 55% recycled.'},{w:'Plastic',c:3,m:'15% of waste, 30% recycled.'}]},
'c3-head1':{type:'choice',level:'Supported',skill:'The headline',decision:'What is the headline of the pie chart?',
  opts:[{t:'Food was the largest type of waste, followed by paper.',ok:1,why:'The two biggest categories: 35% and 25%.'},{t:'Other materials made up 7%.',why:'The smallest category is a detail, not the headline.'},{t:'Glass was recycled at 65%.',why:'That is from the bar chart.'}]},
'c3-head2':{type:'choice',level:'Supported',skill:'The headline',decision:'What is the headline of the bar chart?',
  opts:[{t:'Paper had the highest recycling rate and food the lowest.',ok:1,why:'The highest (70%) and lowest (15%) rates.'},{t:'Garden waste was recycled at 55%.',why:'A middle figure: a detail.'},{t:'Food made up 35% of waste.',why:'That is from the pie chart.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'A connected overview',decision:'Build the overview.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','food made up the largest share of household waste','but had the lowest recycling rate,','whereas paper,','the second-largest type,','had the highest recycling rate.'],
  distract:[{t:'at 35%,',why:'No figures in the overview.',fix:'food made up the largest share of household waste'},{t:'because people throw it away,',why:'No reasons: the charts don’t give them.',fix:'but had the lowest recycling rate,'}],
  right:'Both headlines and the contrast between them, with no figures.',orderMsg:'All the right pieces, but check the order: Overall, food and its contrast, whereas, paper and its rate.',incompleteMsg:'Good so far, but incomplete. Add paper as the contrast.'},
'c3-ov':{type:'choice',level:'Independent',skill:'The best overview',decision:'Which overview is best?',
  opts:[{t:'Overall, the largest type of waste, food, had the lowest recycling rate, while paper was both the second-largest type and the most recycled.',ok:1,why:'Both headlines, linked, no figures.'},{t:'Overall, food was 35% of waste and paper 25%, and 70% of paper was recycled.',why:'Figures belong in the body.'},{t:'Overall, food was the largest type of waste.',why:'Only one chart.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Selecting from two charts',decision:'Write an overview and two body paragraphs.',prompt:'One body paragraph for each chart. Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1: the pie chart',rows:5,ph:'Food accounted for…'},{k:'b2',label:'Body paragraph 2: the bar chart',rows:5,ph:'Paper was the most…'}],
  checks:[{t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview covers both charts.',fix:'Add a feature of each chart: the largest type of waste, and the recycling rates.',fn:v=>/(largest|biggest|most)/i.test(v.ov)&&/recycl/i.test(v.ov)},
          {t:'Body 1 is about the shares of waste.',fix:'Make body paragraph 1 about the pie chart: the shares of waste.',fn:v=>/food/i.test(v.b1)&&/paper/i.test(v.b1)&&/%|quarter|third/i.test(v.b1)},
          {t:'Body 2 is about the recycling rates.',fix:'Make body paragraph 2 about the bar chart: the recycling rates.',fn:v=>/recycl/i.test(v.b2)&&/\d+\s*%/.test(v.b2)},
          {t:'Body 2 links back to the pie chart.',fix:'Link the rates to the shares: food was the largest type but the lowest recycling rate.',fn:v=>/(largest|biggest|despite|although|even though|share|only a tenth|small)/i.test(v.b2)},
          {t:'You selected: no more than about 12 figures in the body.',fix:'Too many figures: choose four or five per chart.',fn:v=>((v.b1+' '+v.b2).match(/\d+/g)||[]).length<=12}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, food made up the largest share of household waste but had the lowest recycling rate</button>, whereas paper, the second-largest type, had the highest recycling rate.</p><p><span class="plabel">Body 1</span>Food accounted for just over a third of all household waste (35%), and paper for a quarter. <button type="button" class="hl" data-n="1">Together, these two types made up 60% of the total.</button> Plastic contributed 15%, while glass, garden waste and other materials each made up a tenth or less.</p><p><span class="plabel">Body 2</span>Paper was the most widely recycled material, at 70%, followed closely by glass at 65%, <button type="button" class="hl" data-n="2">even though glass made up only a tenth of all waste</button>. Just over half of garden waste was recycled (55%), compared with under a third of plastic (30%). <button type="button" class="hl" data-n="3">Food waste, despite being the largest category, had the lowest recycling rate of all</button>, at only 15%, half the rate for plastic.</p>`,
  notes:['Both headlines in one sentence, joined by “whereas”, with no figures.','A combined share from the pie: 35 + 25 = 60.','A link back to the pie chart: a small share, but a high rate.','The key connection, with a calculated comparison: 15 is half of 30.'],
  self:['My overview covers both charts and has no figures.','Each body paragraph is about one chart.','My second paragraph links back to the first.','I kept the two measures apart: share of waste, and rate of recycling.'],revise:1}
};

const gloss={
  'even though':{term:'even though',def:'A strong contrast linker: the second fact is surprising given the first.',path:'M20,70 L110,60 M130,20 L220,30',ex:'“Glass was recycled at 65%, even though it made up only a tenth of all waste.”'},
  'recycling rate':{term:'recycling rate',def:'The percentage of one type of waste that is recycled. It is a different measure from the share of all waste.',path:'M40,80 V30 H90 V80 M150,80 V60 H200 V80',ex:'“Paper had the highest recycling rate, at 70%.”'},
  'followed closely by':{term:'followed closely by',def:'Second, and not far behind the first. Check that the gap really is small.',path:'M40,80 V20 H90 V80 M150,80 V26 H200 V80',ex:'“Paper (70%), followed closely by glass (65%).”'}
};

const retrieval={
 'c3-s1':[{q:'About how many words for each chart’s body paragraph?',opts:[{t:'About 55',ok:1,why:'Half the body each.'},{t:'About 150',why:'That is the whole answer.'}]}],
 'c3-s2':[{q:'Food: 35% in the pie, 15% in the bars. Are these the same measure?',opts:[{t:'No',ok:1,why:'Share of waste; rate of recycling.'},{t:'Yes',why:'Different charts, different measures.'}]}],
 'c3-s3':[{q:'What should details do?',opts:[{t:'Support the headline',ok:1,why:'Choose with a purpose.'},{t:'Cover every category',why:'That makes a list.'}]}],
 'c3-s4':[{q:'What does the overview need?',opts:[{t:'Both headlines, no figures',ok:1,why:'A feature from each chart.'},{t:'An opinion',why:'Task 1 describes.'}]}],
 'c3-s5':[{q:'Food 35% + paper 25% =',opts:[{t:'60%',ok:1,why:'More than half of all waste.'},{t:'50%',why:'Check the sum.'}]}]
};

const minitest=[
 {q:'How long is a good mixed-chart answer?',opts:[{t:'About 170 to 190 words',ok:1,why:'Enough for both charts.'},{t:'Exactly 150 words',why:'150 is the minimum.'},{t:'300 words',why:'Too long for 20 minutes.'}],sp:'c3-s1'},
 {q:'Which detail would you leave out?',opts:[{t:'Garden waste 8% and other 7%',ok:1,why:'Two minor categories.'},{t:'Food 35%',why:'The largest share.'},{t:'Food recycled at 15%',why:'The lowest rate.'}],sp:'c3-s1'},
 {q:'What does the bar chart measure?',opts:[{t:'The percentage of each type that was recycled',ok:1,why:'A rate within each type.'},{t:'The share of all waste',why:'That is the pie.'},{t:'The weight recycled',why:'No weights are given.'}],sp:'c3-s2'},
 {q:'Glass: 10% of waste, 65% recycled. Which is accurate?',opts:[{t:'A small share, but a high recycling rate',ok:1,why:'Both measures, kept apart.'},{t:'Glass rose from 10% to 65%',why:'Two measures, not a change.'},{t:'Most waste was glass',why:'Only a tenth.'}],sp:'c3-s2'},
 {q:'What is the headline of the bar chart?',opts:[{t:'Paper had the highest rate, food the lowest',ok:1,why:'Highest and lowest rates.'},{t:'Garden waste 55%',why:'A middle figure.'},{t:'Plastic 15% of waste',why:'That is the pie.'}],sp:'c3-s3'},
 {q:'Paper 70%, glass 65%. Which phrase fits?',opts:[{t:'followed closely by',ok:1,why:'A gap of 5 percentage points.'},{t:'far ahead of',why:'The gap is small.'},{t:'twice as high as',why:'Twice 65 is 130.'}],sp:'c3-s3'},
 {q:'Which overview is best?',opts:[{t:'Overall, food was the largest type of waste but the lowest recycling rate.',ok:1,why:'Both charts, linked.'},{t:'Overall, we should recycle more food.',why:'An opinion.'},{t:'Overall, 70% of paper was recycled.',why:'A figure, one chart.'}],sp:'c3-s4'},
 {q:'15% compared with 30%. Which is accurate?',opts:[{t:'half the rate',ok:1,why:'15 is half of 30.'},{t:'a third of the rate',why:'A third of 30 is 10.'},{t:'almost the same',why:'Half is a big difference.'}],sp:'c3-s5'}
];

const cannow=[['Share out the words between two charts','c3-s1'],['Compare the same categories across two charts','c3-s2'],['Find the headline of each chart','c3-s3'],['Write an overview with both headlines','c3-s4'],['Write a selective overview and two body paragraphs','c3-s5']];
addChapter({n:3,spreads,acts,gloss,charts:{waste:C.waste,recyc:C.recyc,waste2:Object.assign({},C.waste,{id:'ch-waste2'}),recyc2:Object.assign({},C.recyc,{id:'ch-recyc2'})},retrieval,minitest,cannow});
})();
