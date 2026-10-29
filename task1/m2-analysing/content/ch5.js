/* ==========================================================================
   MODULE 2 · CHAPTER 5 · STATIC AND DYNAMIC DATA
   ACTIVITY IDS (type · level)
     c5-sd      sort      Guided       Step 1  Static or dynamic?
     c5-stat    choice    Supported    Step 2  Language for static data
     c5-share   fix       Supported    Step 2  Shares, not change
     c5-dyn     binary    Supported    Step 3  Language for dynamic data
     c5-verb    choice    Supported    Step 3  The right verb
     c5-both    choice    Independent  Step 4  Compare in a dynamic chart
     c5-match   sort      Supported    Step 4  Which chart?
     c5-write   write     Independent  Step 5  Two paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=F2;
const P='Chapter 5',CT='Static and Dynamic Data',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:5,title:CT,lede:'Some charts show one moment; others show change over time. The two need different language. Describing a single pie chart with “rose” and “fell” is one of the most common accuracy errors I see. In this chapter I’ll show you how to tell the two apart and choose the right language for each.',
  outcomes:['tell '+T('static data')+' from '+T('dynamic data'),'describe static data with shares and comparisons','describe dynamic data with verbs of change and time phrases','compare within a dynamic chart, without adding change to a static one'],
  illus:illus('still'),
  steps:[[1,'c5-s1','Static or dynamic?','Look for time','Discover'],[2,'c5-s2','Static language','Shares and comparisons','Understand'],[3,'c5-s3','Dynamic language','Change over time','Understand'],[4,'c5-s4','Both at once','Comparing within change','Practise'],[5,'c5-s5','Chapter challenge','Two paragraphs','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','Static or dynamic?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Static or dynamic?</h2>${vid({title:'Static or dynamic?',len:'90 seconds',script:['Show the office pie: no time at all. Static.','Show the house price line: five years. Dynamic.','Say: look for time. One point in time: static. Two or more: dynamic.']})}<p>Look for time on the visual:</p><ul class="clean"><li><b>No time, or one point in time:</b> static. You compare.</li><li><b>Two or more points in time:</b> dynamic. You describe change, and compare.</li></ul>${chart('office')}${chart('house')}${take('One point in time: static. Two or more: dynamic.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c5-sd"></div>`}),

sp('c5-s2','Static language',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Static language</h2>${vid({title:'Static language',len:'90 seconds',script:['Describe the office pie with shares: heating accounted for 35%.','Rank: the largest share, followed by lighting.','Use fractions: computers used a fifth.','Never: heating rose to 35%.']})}<ul class="clean"><li><b>Shares:</b> accounted for, made up, represented.</li><li><b>Rankings:</b> the largest share, followed by, the smallest.</li><li><b>Fractions and comparisons:</b> a fifth, twice as much as, together.</li></ul>${insight('Static','Heating accounted for the largest share of energy use, at 35%, followed closely by lighting at 30%.')}${mistake('<s>Heating increased to 35%.</s> The pie has no time: nothing increased.')}${take('Static data: shares, rankings, fractions, comparisons. No verbs of change.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the office pie in Step 1.</p><div data-act="c5-stat"></div><div data-act="c5-share" style="margin-top:16px"></div>`}),

sp('c5-s3','Dynamic language',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Dynamic language</h2>${vid({title:'Dynamic language',len:'90 seconds',script:['Trace the house price line.','Rose to €210,000 in 2010. Dipped to €195,000 in 2015. Climbed to €240,000, then rose more sharply to €300,000.','Say: a verb, a figure and a time for each movement.']})}<ul class="clean"><li><b>Verbs:</b> rose, climbed, fell, dipped, peaked, levelled off.</li><li><b>Adverbs:</b> sharply, steadily, slightly.</li><li><b>Time phrases:</b> in 2015, between 2020 and 2025, by 2025.</li></ul>${insight('Dynamic','House prices dipped to €195,000 in 2015, before rising sharply to €300,000 by 2025.')}${take('Dynamic data: a verb, a figure and a time for each movement.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the house price graph in Step 1.</p><div data-act="c5-dyn"></div><div data-act="c5-verb" style="margin-top:16px"></div>`}),

sp('c5-s4','Both at once',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Both at once</h2><p>Dynamic charts need comparison language too: compare the start with the end, or one period with another.</p><ul class="clean"><li><b>Start and end:</b> <i>Prices in 2025 were two-thirds higher than in 2005.</i></li><li><b>Periods:</b> <i>The rise between 2020 and 2025 (€60,000) was the largest of any five-year period.</i></li></ul>${note('The opposite is never true: a static chart never needs verbs of change.')}<div class="clear"></div>${take('Dynamic: change and comparison. Static: comparison only.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the charts in Step 1.</p><div data-act="c5-both"></div><div data-act="c5-match" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: two paragraphs',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one short paragraph for each chart, using the right language for each.</p>${chart('office2')}${chart('house2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['One point in time: static. Two or more: dynamic.','Static: shares, rankings, fractions and comparisons, never verbs of change.','Dynamic: a verb, a figure and a time for each movement.','Dynamic charts also need comparisons: start with end, period with period.']})
];

const acts={
'c5-sd':{type:'sort',level:'Guided',skill:'Static or dynamic',decision:'Static or dynamic?',cats:['Static','Dynamic'],
  items:[{w:'How energy is used in an office building (one pie)',c:0,m:'no time.'},{w:'Average house prices, 2005 to 2025',c:1,m:'five years.'},{w:'The cost of a weekly shop in five cities',c:0,m:'no time.'},{w:'Passengers at five stations, 2010 and 2025',c:1,m:'two years.'},{w:'Exercise time by age group',c:0,m:'no time.'}]},
'c5-stat':{type:'choice',level:'Supported',skill:'Static language',decision:'Which sentence suits the office pie?',
  opts:[{t:'Heating and lighting together accounted for almost two-thirds of energy use.',ok:1,why:'35 + 30 = 65: a combined share, no change.'},{t:'Heating rose to 35%.',why:'No time: nothing rose.'},{t:'Lighting fell to 30% by 2025.',why:'There are no years on the pie.'}]},
'c5-share':{type:'fix',level:'Supported',skill:'Static language',decision:'Rewrite each sentence for a static chart.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Computers increased to 20% of energy use.',ok:/(accounted for|made up|represented|used|were responsible for)/i,bad:/increased/i,hint:'There is no time on the pie.',err:'increased to',fix:'accounted for',why:'A static share needs a share verb.',model:'Computers accounted for 20% of energy use.'},
         {wrong:'The kitchen dropped to a tenth of the total.',ok:/(accounted for|made up|represented|used)/i,bad:/dropped/i,hint:'Nothing dropped: describe the share.',err:'dropped to',fix:'accounted for',why:'Use a share verb.',model:'The kitchen accounted for a tenth of the total.'}]},
'c5-dyn':{type:'binary',level:'Supported',skill:'Dynamic language',decision:'Accurate for the house price graph?',labels:['Accurate','Not accurate'],
  items:[{t:'Prices dipped slightly in 2015.',a:0,right:'€210,000 to €195,000.',wrong:'It is accurate: a fall of €15,000.'},
         {t:'Prices rose steadily throughout the period.',a:1,right:'Right. There was a dip in 2015.',wrong:'There was a fall in 2015, so “throughout” is wrong.'},
         {t:'The sharpest rise came between 2020 and 2025.',a:0,right:'€60,000, the largest increase.',wrong:'It is accurate: +€60,000.'},
         {t:'Prices peaked in 2010.',a:1,right:'Right. The highest price was in 2025.',wrong:'€210,000 was overtaken later: the peak was €300,000 in 2025.'}]},
'c5-verb':{type:'choice',level:'Supported',skill:'Verbs of change',decision:'Which verb best describes 2010 to 2015?',
  opts:[{t:'dipped',ok:1,why:'A small, temporary fall: €15,000.'},{t:'plummeted',why:'Far too strong for €15,000.'},{t:'soared',why:'Prices fell.'}]},
'c5-both':{type:'choice',level:'Independent',skill:'Comparing in a dynamic chart',decision:'Which sentence compares the start and the end accurately?',
  opts:[{t:'By 2025, the average price was two-thirds higher than in 2005.',ok:1,why:'€120,000 is two-thirds of €180,000.'},{t:'By 2025, the average price had doubled.',why:'Double €180,000 is €360,000.'},{t:'Prices in 2025 were €300,000 higher than in 2005.',why:'The difference is €120,000.'}]},
'c5-match':{type:'sort',level:'Supported',skill:'Choosing language',decision:'Which chart could each sentence describe?',cats:['The office pie','The house price graph'],
  items:[{w:'… made up a fifth of the total.',c:0,m:'a share.'},{w:'… climbed to €240,000 in 2020.',c:1,m:'change over time.'},{w:'… followed closely by lighting.',c:0,m:'a ranking.'},{w:'… before rising sharply.',c:1,m:'change over time.'}]},
'c5-write':{type:'write',level:'Independent',skill:'Static and dynamic language',decision:'Write one paragraph for each chart.',prompt:'Then check your writing.',
  fields:[{k:'s',label:'Paragraph 1: the office pie (static)',rows:5,ph:'Heating accounted for…'},{k:'d',label:'Paragraph 2: house prices (dynamic)',rows:5,ph:'The average house price…'}],
  checks:[{t:'Static: no verbs of change.',fix:'Remove rose, fell, increased or decreased from the pie paragraph.',fn:v=>v.s.trim()&&!/\b(rose|fell|increased|decreased|grew|dropped|declined)\b/i.test(v.s)},
          {t:'Static: you used share language.',fix:'Use accounted for, made up or represented.',fn:v=>/(accounted for|made up|represented|share)/i.test(v.s)},
          {t:'Dynamic: you used verbs of change.',fix:'Use rose, dipped, climbed or fell.',fn:v=>/\b(rose|fell|dipped|climbed|increased|decreased|grew|dropped)\b/i.test(v.d)},
          {t:'Dynamic: you mentioned the dip in 2015.',fix:'Prices fell in 2015: include it.',fn:v=>/2015/.test(v.d)},
          {t:'Dynamic: you wrote prices in full.',fix:'The graph is in thousands: write €300,000.',fn:v=>/€\s?\d{3},000/.test(v.d)},
          {t:'Your paragraphs are a good length (80 words or more in total).',fix:'Add detail: your paragraphs are under 80 words.',fn:v=>((v.s+' '+v.d).match(/\S+/g)||[]).length>=80}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Static</span><button type="button" class="hl" data-n="0">Heating accounted for the largest share of the building’s energy use, at 35%</button>, followed closely by lighting at 30%. Together, these two uses made up almost two-thirds of the total. Computers used a fifth of the energy, while the kitchen and other uses accounted for just 10% and 5% respectively.</p><p><span class="plabel">Dynamic</span>The average house price in the region rose from €180,000 in 2005 to €210,000 in 2010, <button type="button" class="hl" data-n="1">before dipping to €195,000 in 2015</button>. After that, prices climbed again, reaching €240,000 in 2020, <button type="button" class="hl" data-n="2">and then rose more sharply to €300,000 in 2025</button>, <button type="button" class="hl" data-n="3">two-thirds higher than at the start of the period</button>.</p>`,
  notes:['Share language and a ranking: no time, no change.','A verb, a figure and a time for the dip.','An adverb shows that the last rise was the largest.','A comparison of the start and the end: 120 ÷ 180 = two-thirds.'],
  self:['I used no verbs of change for the pie.','I used a verb, a figure and a time for each movement.','I compared the start and the end.','I wrote every figure with its unit.'],revise:1}
};

const gloss={
  'static data':{term:'static data',def:'Data for one point in time, or with no time at all. Describe it with shares and comparisons.',path:'M40,80 V40 H80 V80 M110,80 V20 H150 V80 M180,80 V55 H220 V80',ex:'“Heating accounted for the largest share.”'},
  'dynamic data':{term:'dynamic data',def:'Data for two or more points in time. Describe change, and compare.',path:'M20,70 L80,55 L140,62 L220,20',ex:'“Prices rose sharply between 2020 and 2025.”'},
  'dipped':{term:'dipped',def:'Fell slightly and briefly, before rising again.',path:'M20,40 L100,35 L140,55 L220,20',ex:'“Prices dipped to €195,000 in 2015.”'}
};

const retrieval={
 'c5-s1':[{q:'A single pie chart with no year is…',opts:[{t:'static',ok:1,why:'One moment.'},{t:'dynamic',why:'No time.'}]}],
 'c5-s2':[{q:'Which verb suits static data?',opts:[{t:'accounted for',ok:1,why:'A share.'},{t:'rose',why:'Change.'}]}],
 'c5-s3':[{q:'€210,000 → €195,000 is best described as…',opts:[{t:'a dip',ok:1,why:'Small and brief.'},{t:'a collapse',why:'Too strong.'}]}],
 'c5-s4':[{q:'Do dynamic charts need comparisons?',opts:[{t:'Yes',ok:1,why:'Start with end, period with period.'},{t:'No',why:'They do.'}]}],
 'c5-s5':[{q:'€180,000 → €300,000 is a rise of…',opts:[{t:'two-thirds',ok:1,why:'120 ÷ 180.'},{t:'a half',why:'That would be €270,000.'}]}]
};

const minitest=[
 {q:'How do you tell static from dynamic data?',opts:[{t:'Look for time',ok:1,why:'One point or several.'},{t:'Look at the colours',why:'Not data.'},{t:'Count the categories',why:'Time decides.'}],sp:'c5-s1'},
 {q:'Which chart is dynamic?',opts:[{t:'House prices, 2005 to 2025',ok:1,why:'Five years.'},{t:'Office energy use',why:'Static.'},{t:'A weekly shop in five cities',why:'Static.'}],sp:'c5-s1'},
 {q:'Choose the sentence for a static pie.',opts:[{t:'Lighting accounted for 30%.',ok:1,why:'A share.'},{t:'Lighting fell to 30%.',why:'No change.'},{t:'Lighting peaked at 30%.',why:'No time.'}],sp:'c5-s2'},
 {q:'35% + 30% = 65% is…',opts:[{t:'almost two-thirds',ok:1,why:'Two-thirds is about 67%.'},{t:'three-quarters',why:'75%.'},{t:'half',why:'50%.'}],sp:'c5-s2'},
 {q:'Which is a dynamic sentence?',opts:[{t:'Prices rose more sharply after 2020.',ok:1,why:'Change.'},{t:'Heating was the largest share.',why:'Static.'},{t:'Computers used a fifth.',why:'Static.'}],sp:'c5-s3'},
 {q:'When did house prices fall?',opts:[{t:'Between 2010 and 2015',ok:1,why:'€210,000 to €195,000.'},{t:'Between 2020 and 2025',why:'They rose.'},{t:'Never',why:'They dipped once.'}],sp:'c5-s3'},
 {q:'Which period had the biggest rise?',opts:[{t:'2020 to 2025',ok:1,why:'+€60,000.'},{t:'2005 to 2010',why:'+€30,000.'},{t:'2015 to 2020',why:'+€45,000.'}],sp:'c5-s4'},
 {q:'Which pie sentence is wrong?',opts:[{t:'The kitchen dropped to 10%.',ok:1,why:'No change on a pie.'},{t:'The kitchen accounted for 10%.',why:'Correct.'},{t:'The kitchen used a tenth of the energy.',why:'Correct.'}],sp:'c5-s5'}
];

const cannow=[['Tell static from dynamic data','c5-s1'],['Describe static data with shares and comparisons','c5-s2'],['Describe dynamic data with verbs, figures and times','c5-s3'],['Compare within a dynamic chart','c5-s4'],['Write paragraphs for static and dynamic data','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{office:C.office,house:C.house,office2:Object.assign({},C.office,{id:'ch-f2office2'}),house2:Object.assign({},C.house,{id:'ch-f2house2'})},retrieval,minitest,cannow});
})();
