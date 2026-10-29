/* ==========================================================================
   MASTERING MIXED CHARTS · CHAPTER 2 · FINDING THE CONNECTION
   ACTIVITY IDS (type · level)
     c2-match   sort      Guided       Step 1  Match the months
     c2-same    choice    Supported    Step 1  What do the charts share?
     c2-link1..2 choice   Supported    Step 2  Choose the linking sentence
     c2-cause   binary    Supported    Step 3  Describe or explain?
     c2-fix     fix       Independent  Step 3  Remove the cause
     c2-build   builder   Supported    Step 4  A connected overview
     c2-write   write     Independent  Step 5  Overview and body paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,figs,opening,review,addChapter}=OE;
const {C,illus}=MIX;
const P='Chapter 2',CT='Finding the Connection',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'Two charts in one task are there for a reason: they share a place, a time or a topic. The best answers show the reader how the charts connect, without inventing reasons the charts don’t give. In this chapter I’ll show you how to find the connection and write it accurately.',
  outcomes:['find what two charts share: place, time or topic','link facts from two charts with accurate linking language','describe a connection without claiming a cause',`put the connection in your overview with ${T('at the same time')} and whereas`],
  illus:illus('bar','line'),
  steps:[[1,'c2-s1','What do the charts share?','Place, time, topic','Discover'],[2,'c2-s2','Linking language','Whereas, at the same time','Understand'],[3,'c2-s3','Describe, don’t explain','No invented causes','Understand'],[4,'c2-s4','The connection in the overview','One sentence for both','Practise'],[5,'c2-s5','Chapter challenge','Cafés and coffee prices','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','What do the charts share?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>What do the charts share?</h2>${vid({title:'What do the charts share?',len:'90 seconds',script:['Show the rainfall bars and the temperature line for the same city.','Ask: what do they share? The same city, the same twelve months.','Point to July: the warmest month, and the driest.','Finish: when two charts share a time, you can compare them month by month.']})}<p>These two charts share a <b>place</b> (one city) and a <b>time</b> (the same twelve months). So you can compare them month by month.</p>${chart('rain')}${chart('temp')}${insight('The connection','The warmest months were also the driest, while the wettest months were the coldest.')}${take('Find what the charts share: the same place, the same time or the same categories. That is where the connection is.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c2-match"></div><div data-act="c2-same" style="margin-top:16px"></div>`}),

sp('c2-s2','Linking language',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Linking language</h2>${vid({title:'Linking language',len:'2 minutes',script:['Show two facts: July had 15 mm of rain; July averaged 24°C.','Join them: In July, the warmest month, rainfall was at its lowest.','Show a contrast: Rainfall peaked in December, whereas the temperature was at its lowest.','Finish: the linker shows the reader how two facts relate.']})}<p>To connect two charts, put a fact from each into one sentence:</p><ul class="clean"><li><b>Same time:</b> <i>July was the warmest month, at 24°C, and ${T('at the same time')} the driest, with only 15 mm of rain.</i></li><li><b>Contrast:</b> <i>Rainfall peaked at 95 mm in December, <b>whereas</b> the temperature fell to just 6°C.</i></li><li><b>Pattern:</b> <i>As the temperature rose from January to July, rainfall fell every month.</i></li></ul>${note('From January to July, rainfall fell every month as the temperature rose. After July the pattern reversed: rainfall rose again from August as the temperature fell.')}<div class="clear"></div>${take('One sentence, one fact from each chart, a linker that shows how they relate.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the two charts in Step 1.</p><div data-act="c2-link1"></div><div data-act="c2-link2" style="margin-top:14px"></div>`}),

sp('c2-s3','Describe, don’t explain',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Describe, don’t explain</h2>${vid({title:'Describe, don’t explain',len:'90 seconds',script:['Show the cafés line and the coffee price bars.','Read a tempting sentence: Prices rose because more cafés opened. Cross it out.','Say: the charts show both rose. They don’t show why.','Replace it: The number of cafés rose, and over the same period, so did the price of coffee.']})}<p>When two charts move together, it is tempting to say one caused the other. The charts never show that.</p>${chart('cafes')}${chart('coffee')}${mistake('<s>Coffee became more expensive because more cafés opened.</s> The charts show that both rose. They don’t show why.')}${insight('Accurate','The number of cafés rose, and '+T('over the same period')+', the price of a cup of coffee also increased.')}${take('Report that two things happened at the same time. Don’t say one caused the other.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the two charts on the left page.</p><div data-act="c2-cause"></div><div data-act="c2-fix" style="margin-top:16px"></div>`}),

sp('c2-s4','The connection in the overview',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The connection in the overview</h2><p>If the charts connect clearly, put the connection in your overview. One sentence can carry a key feature from each chart <i>and</i> the link between them.</p>${insight('Climate charts','Overall, the city was warmest and driest in the middle of the year, whereas the winter months were cold and wet.')}${insight('Cafés and coffee','Overall, both the number of cafés and the price of coffee rose over the period, although only the number of cafés fell at any point.')}${note('If the charts don’t connect in an obvious way, don’t force it. One feature from each chart is enough.')}<div class="clear"></div>${take('A strong overview for two charts: a feature from each, joined by the connection.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the climate charts in Step 1.</p><div data-act="c2-build"></div>`}),

sp('c2-s5','Chapter challenge: cafés and coffee prices',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and one body paragraph that covers both charts.</p>${taskbox('The line graph shows the number of cafés in one city between 2010 and 2025, and the bar chart shows the average price of a cup of coffee in the same city.')}${chart('cafes2')}${chart('coffee2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Find what the charts share: place, time, topic or categories.','Link a fact from each chart in one sentence: at the same time, whereas, as.','Describe that things happened together; never claim one caused the other.','Put a clear connection in the overview, but don’t force one.']})
];

const acts={
'c2-match':{type:'sort',level:'Guided',skill:'Reading two charts together',decision:'Which description fits each month?',cats:['Warm and dry','Cold and wet','In between'],
  items:[{w:'July',c:0,m:'24°C and 15 mm.'},{w:'December',c:1,m:'6°C and 95 mm.'},{w:'April',c:2,m:'13°C and 45 mm.'},{w:'August',c:0,m:'23°C and 20 mm.'},{w:'January',c:1,m:'6°C and 80 mm.'}]},
'c2-same':{type:'choice',level:'Supported',skill:'Shared features',decision:'What do the two charts share?',
  opts:[{t:'The same city and the same twelve months',ok:1,why:'So you can compare them month by month.'},{t:'The same unit',why:'Millimetres and degrees are different units.'},{t:'Nothing: they are separate topics',why:'Both describe the climate of one city.'}]},
'c2-link1':{type:'choice',level:'Supported',skill:'Linking two charts',decision:'Which sentence links the charts accurately?',
  opts:[{t:'July was the warmest month, at 24°C, and also the driest, with only 15 mm of rain.',ok:1,why:'A fact from each chart, about the same month.'},{t:'July was the warmest month, so it rained less.',why:'“So” claims a cause. The charts only show that both happened.'},{t:'July had 24 mm of rain and a temperature of 15°C.',why:'The figures are swapped: 24°C and 15 mm.'}]},
'c2-link2':{type:'choice',level:'Supported',skill:'Contrast',decision:'Which contrast is accurate?',
  opts:[{t:'Rainfall peaked at 95 mm in December, whereas the temperature fell to just 6°C.',ok:1,why:'The highest rainfall and the joint lowest temperature (with January), in the same month.'},{t:'Rainfall peaked in July, whereas the temperature was at its lowest.',why:'July had the least rain and the highest temperature.'},{t:'Rainfall and the temperature both peaked in December.',why:'December was wet but cold.'}]},
'c2-cause':{type:'binary',level:'Supported',skill:'Describe, don’t explain',decision:'Does each sentence describe the charts, or explain them?',prompt:'Use the café and coffee charts on the left page.',labels:['Describes','Explains (avoid)'],
  items:[{t:'The number of cafés rose from 120 to 300 between 2010 and 2025.',a:0,right:'A fact from the line graph.',wrong:'This only reports the figures: it describes.'},
         {t:'Prices rose because cafés had to pay higher rents.',a:1,right:'Right. Rents are not on either chart.',wrong:'Rents aren’t in the charts. This invents a reason.'},
         {t:'Over the same period, the average price of a cup of coffee also rose.',a:0,right:'It links the charts without a cause.',wrong:'This links the two charts by time only: it describes.'},
         {t:'More cafés opened, so coffee became more expensive.',a:1,right:'Right. “So” claims a cause the charts don’t show.',wrong:'“So” says one caused the other. The charts can’t show that.'}]},
'c2-fix':{type:'fix',level:'Independent',skill:'Removing causes',decision:'Rewrite each sentence so it describes without explaining.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Because the number of cafés fell in 2022, prices rose.',ok:/\b(while|whereas|although|but|and|at the same time|over the same period)\b/i,bad:/because|\bso\b|as a result|led to|caused/i,hint:'Report both facts with “while”, “and” or “at the same time”.',err:'Because … prices rose',fix:'The number of cafés fell slightly between 2019 and 2022, whereas the price of coffee rose at every point shown.',why:'The charts show both facts, not that one caused the other.',model:'The number of cafés fell slightly between 2019 and 2022, whereas the price of coffee rose at every point shown.'},
         {wrong:'The price of coffee rose as a result of the growing number of cafés.',ok:/\b(and|while|at the same time|over the same period|also)\b/i,bad:/as a result|because|due to|caused|led to/i,hint:'Replace “as a result of” with a time link.',err:'as a result of',fix:'over the same period / at the same time',why:'“As a result of” claims a cause.',model:'The number of cafés grew, and over the same period the price of coffee also rose.'},
         {wrong:'Rainfall was low in July due to the high temperature.',ok:/\b(and|while|whereas|at the same time|also|when)\b/i,bad:/due to|because|\bso\b|caused|as a result/i,hint:'Report both facts about July without “due to”.',err:'due to',fix:'July was the warmest month and also the driest.',why:'“Due to” explains. The charts only show that both happened in July.',model:'July was the warmest month and also the driest.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'A connected overview',decision:'Build an overview sentence for the climate charts.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','the city was warmest and driest','in the middle of the year,','whereas','the winter months','were cold and wet.'],
  distract:[{t:'because of the sun,',why:'No reasons: the charts don’t give them.',fix:'in the middle of the year,'},{t:'with 95 mm of rain',why:'Figures belong in the body, not the overview.',fix:'were cold and wet.'}],
  right:'Both charts, the connection and the contrast, with no figures.',orderMsg:'All the right pieces, but check the order: Overall, the summer pattern, whereas, the winter pattern.',incompleteMsg:'Good so far, but incomplete. Add the contrast with the winter months.'},
'c2-write':{type:'write',level:'Independent',skill:'Connecting two charts',decision:'Write an overview and one body paragraph.',prompt:'Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'a',label:'Body paragraph',rows:8,ph:'The city had 120 cafés…'}],
  checks:[{t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview covers both charts.',fix:'Mention both the cafés and the price of coffee in your overview.',fn:v=>/caf/i.test(v.ov)&&/(price|coffee|cost)/i.test(v.ov)},
          {t:'Your body paragraph uses figures from both charts.',fix:'Give figures from both charts: the number of cafés and the price in €.',fn:v=>/\d{3}/.test(v.a)&&/€\s?\d/.test(v.a)},
          {t:'You mentioned the fall in 2022.',fix:'Mention the one fall in the number of cafés: 2022.',fn:v=>/2022/.test(v.a)},
          {t:'You linked the charts without claiming a cause.',fix:'Remove “because”, “so”, “as a result” and “due to”: the charts give no reasons.',fn:v=>v.a.trim()&&!/\b(because|due to|as a result|caused|led to|so that)\b/i.test(v.ov+' '+v.a)},
          {t:'Your paragraph is a good length (70 words or more).',fix:'Add detail: your paragraph is under 70 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model answer',
  model:`<p><button type="button" class="hl" data-n="0">Overall, both the number of cafés and the price of coffee rose over the period.</button> However, while prices went up at every point shown, the number of cafés fell briefly before reaching its highest level in 2025.</p><p>The city had 120 cafés in 2010, and this figure rose each time to reach 260 by 2019. <button type="button" class="hl" data-n="1">After a small fall to 240 in 2022, it climbed again to 300 in 2025</button>, two and a half times the 2010 level. <button type="button" class="hl" data-n="2">Over the same period, the average cost of a coffee went up from €2.20 to €3.80</button>, an increase of almost three-quarters. <button type="button" class="hl" data-n="3">Unlike the number of cafés, the price rose at every point shown</button>, with the largest increase, of 70 cents, between 2020 and 2025.</p>`,
  notes:['A feature from each chart in one overview sentence, with no figures.','The one fall, then the recovery: 300 ÷ 120 = 2.5.','The link is time, not cause: “over the same period”. €1.60 ÷ €2.20 ≈ 0.73, almost three-quarters.','A contrast between the charts, and a calculated difference: €3.80 − €3.10 = 70 cents.'],
  self:['My overview covers both charts.','I linked the charts by time or contrast, not cause.','I used figures from both charts.','I checked every calculation.'],revise:1}
};

const gloss={
  'at the same time':{term:'at the same time',def:'Linking two facts that happened together. It does not say one caused the other.',path:'M20,70 L220,20 M20,20 L220,70',ex:'“July was the warmest month and, at the same time, the driest.”'},
  'over the same period':{term:'over the same period',def:'During the same years. Use it to link two charts that cover the same time.',path:'M20,70 L220,30 M20,60 L220,20',ex:'“Over the same period, the price of coffee also rose.”'},
  'whereas':{term:'whereas',def:'A linker for contrast between two facts in one sentence.',path:'M20,70 L110,20 M130,20 L220,70',ex:'“Rainfall peaked in December, whereas the temperature fell to 6°C.”'}
};

const retrieval={
 'c2-s1':[{q:'Rainfall and temperature for the same city and months share…',opts:[{t:'a place and a time',ok:1,why:'So you can compare month by month.'},{t:'a unit',why:'mm and °C differ.'}]}],
 'c2-s2':[{q:'Which linker shows contrast?',opts:[{t:'whereas',ok:1,why:'Two contrasting facts.'},{t:'at the same time',why:'That shows timing.'}]}],
 'c2-s3':[{q:'“Prices rose because more cafés opened.” What is wrong?',opts:[{t:'It claims a cause',ok:1,why:'The charts give no reasons.'},{t:'Nothing',why:'The charts can’t show why.'}]}],
 'c2-s4':[{q:'Should you force a connection when the charts don’t clearly connect?',opts:[{t:'No',ok:1,why:'A feature from each is enough.'},{t:'Yes',why:'Only connect what the charts show.'}]}],
 'c2-s5':[{q:'€2.20 → €3.80 is an increase of…',opts:[{t:'almost three-quarters',ok:1,why:'€1.60 ÷ €2.20 ≈ 0.73.'},{t:'almost double',why:'Double would be €4.40.'}]}]
};

const minitest=[
 {q:'Where is the connection between two charts usually found?',opts:[{t:'In what they share: place, time or categories',ok:1,why:'Shared features let you compare.'},{t:'In their colours',why:'Colour isn’t data.'},{t:'In their titles only',why:'The data matters.'}],sp:'c2-s1'},
 {q:'Which month was both the warmest and the driest?',opts:[{t:'July',ok:1,why:'24°C and 15 mm.'},{t:'December',why:'Cold and wet.'},{t:'April',why:'In between.'}],sp:'c2-s1'},
 {q:'Choose the accurate sentence.',opts:[{t:'Rainfall peaked in December, whereas the temperature was low.',ok:1,why:'95 mm and 6°C.'},{t:'Rainfall and the temperature peaked together.',why:'They moved in opposite directions.'},{t:'Rainfall was highest in July.',why:'July was the driest.'}],sp:'c2-s2'},
 {q:'Why “rainfall generally fell” from January to August?',opts:[{t:'It didn’t fall in every month',ok:1,why:'15 mm in July, then 20 mm in August.'},{t:'To add words',why:'It is about accuracy.'},{t:'It rose instead',why:'It mostly fell.'}],sp:'c2-s2'},
 {q:'Which sentence is acceptable in Task 1?',opts:[{t:'Over the same period, the price also rose.',ok:1,why:'A time link, no cause.'},{t:'The price rose because of demand.',why:'Demand isn’t on the chart.'},{t:'More cafés caused higher prices.',why:'A cause the charts don’t show.'}],sp:'c2-s3'},
 {q:'Which word claims a cause?',opts:[{t:'due to',ok:1,why:'Avoid it unless the chart gives the reason.'},{t:'while',why:'A time or contrast link.'},{t:'also',why:'Adds a fact.'}],sp:'c2-s3'},
 {q:'What can a strong overview for two charts include?',opts:[{t:'A feature from each and the connection',ok:1,why:'Without figures.'},{t:'All the figures',why:'Figures go in the body.'},{t:'The reasons for the changes',why:'No reasons.'}],sp:'c2-s4'},
 {q:'Cafés 120 → 300. Which is accurate?',opts:[{t:'two and a half times as many',ok:1,why:'300 ÷ 120 = 2.5.'},{t:'three times as many',why:'That would be 360.'},{t:'twice as many',why:'That would be 240.'}],sp:'c2-s5'}
];

const cannow=[['Find what two charts share','c2-s1'],['Link facts from two charts in one sentence','c2-s2'],['Describe a connection without claiming a cause','c2-s3'],['Put the connection in the overview','c2-s4'],['Write an overview and a connected body paragraph','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{rain:C.rain,temp:C.temp,cafes:C.cafes,coffee:C.coffee,cafes2:Object.assign({},C.cafes,{id:'ch-cafes2'}),coffee2:Object.assign({},C.coffee,{id:'ch-coffee2'})},retrieval,minitest,cannow});
})();
