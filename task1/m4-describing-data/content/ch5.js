/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 5 · POINTS, PERCENTAGES AND SHARES
   ACTIVITY IDS (type · level)
     c5-pts     choice    Guided       Step 1  Points or per cent?
     c5-both    sort      Supported    Step 1  Two ways to say it
     c5-calc1..2 choice   Supported    Step 2  Calculate the change
     c5-fix     fix       Supported    Step 2  Fix the change
     c5-share   binary    Supported    Step 3  Share or amount?
     c5-amt     choice    Independent  Step 4  From share to amount
     c5-build   builder   Independent  Step 4  Share down, amount up
     c5-write   write     Independent  Step 5  Household spending
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=DD;
const P='Chapter 5',CT='Points, Percentages and Shares',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:5,title:CT,lede:'Two of the most common accuracy errors in Task 1 involve percentages. A rate that goes from 8% to 4% did not “fall by 4%”, and a share that shrinks doesn’t always mean less money. In this chapter I’ll show you how to describe changes between percentages, and how to keep shares and amounts apart.',
  outcomes:[`describe a change between percentages in ${T('percentage points')}`,'calculate a percentage change when it helps','keep shares and amounts apart in pie charts','calculate amounts when a chart gives the total'],
  illus:illus('8% → 4%','−4 points, halved'),
  steps:[[1,'c5-s1','Points or per cent?','Two different measures','Discover'],[2,'c5-s2','Calculating the change','Points and percentage change','Understand'],[3,'c5-s3','Shares and amounts','What a pie chart shows','Understand'],[4,'c5-s4','When you have the total','Share down, amount up','Practise'],[5,'c5-s5','Chapter challenge','Household spending','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','Points or per cent?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Points or per cent?</h2>${vid({title:'Points or per cent?',len:'2 minutes',script:['Show the unemployment graph: 8.0% in 2010, 4.0% in 2025.','Ask: by how much did it fall? Subtract: 4 percentage points.','Ask: by what percentage? 4 is half of 8: it fell by 50%, it halved.','Say: “fell by 4%” is wrong. Use points, or say it halved.']})}<p>When a figure is already a percentage, a change can be measured in two ways:</p>${chart('unemp')}<ul class="clean"><li><b>Percentage points</b> (subtract): 8.0% − 4.0% = a fall of <b>4 percentage points</b>.</li><li><b>Percentage change</b> (divide): 4 ÷ 8 = a fall of <b>50%</b>. In other words, the rate <b>halved</b>.</li></ul>${mistake('<s>Unemployment fell by 4%.</s> That would mean 8.0% → 7.7%. Write: <i>fell by 4 percentage points</i>, or <i>halved</i>.')}${take('Subtract for percentage points; divide for percentage change. Never “by 4%” for 8% → 4%.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c5-pts"></div><div data-act="c5-both" style="margin-top:16px"></div>`}),

sp('c5-s2','Calculating the change',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Calculating the change</h2>${vid({title:'Calculating the change',len:'90 seconds',script:['Write the two calculations.','Points: new minus old. 30% − 20% = 10 points.','Percentage change: change ÷ old × 100. 10 ÷ 20 = 50%.','Say: a rise of 10 points can be a 50% increase. Both are true; say which you mean.']})}<ul class="clean"><li><b>Points:</b> new − old. 20% → 30% = a rise of <b>10 percentage points</b>.</li><li><b>Percentage change:</b> (change ÷ old) × 100. 10 ÷ 20 = a <b>50% increase</b>.</li></ul>${insight('The same change, two ways','“The rate rose from 20% to 30%, an increase of 10 percentage points.” Or: “…, a rise of half.” Both are accurate. “Rose by 10%” is not.')}${note('Percentage points are safer for Task 1. Use percentage change only when it adds meaning, such as halved or doubled.')}<div class="clear"></div>${take('New − old = points. Change ÷ old = percentage change. Points are the safer choice.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-calc1"></div><div data-act="c5-calc2" style="margin-top:14px"></div><div data-act="c5-fix" style="margin-top:16px"></div>`}),

sp('c5-s3','Shares and amounts',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Shares and amounts</h2>${vid({title:'Shares and amounts',len:'2 minutes',script:['Show the spending pies. Point to the totals: €2,000 and €2,500.','Food: 20% then 18%. A smaller share.','Calculate: 20% of 2,000 is 400; 18% of 2,500 is 450.','Say: a smaller share of a bigger total can be more money.']})}<p>A pie chart shows <b>shares</b> of a total. A smaller share does not always mean a smaller amount:</p>${chart('spend')}<ul class="clean"><li><b>Without totals:</b> write about shares only: “a smaller share of spending”.</li><li><b>With totals:</b> you can also calculate amounts, and they can move the opposite way.</li></ul>${mistake('<s>Households spent less on food in 2025.</s> Food’s share fell, but 18% of €2,500 (€450) is more than 20% of €2,000 (€400).')}${take('Shares and amounts are different measures. Without totals, write about shares only.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the pie charts on the left page.</p><div data-act="c5-share"></div>`}),

sp('c5-s4','When you have the total',{
 left:`${head('Step 4 · Practise','Learn')}<h2>When you have the total</h2><p>With the totals, multiply each share by the total to find the amount:</p><ul class="clean"><li><b>Housing:</b> 35% of €2,000 = €700; 40% of €2,500 = €1,000.</li><li><b>Food:</b> 20% of €2,000 = €400; 18% of €2,500 = €450.</li><li><b>Transport:</b> 15% of €2,000 = €300; 12% of €2,500 = €300.</li><li><b>Other:</b> 30% of €2,000 = €600; 30% of €2,500 = €750.</li></ul>${insight('The interesting cases','Food: a smaller share, but more money. Transport: a smaller share, the same money. Other: the same share, more money.')}${take('Share × total = amount. Report the cases where share and amount move differently.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the pie charts in Step 3.</p><div data-act="c5-amt"></div><div data-act="c5-build" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: household spending',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph about the household spending pies. Describe the shares in percentage points, and use the totals to show what happened to the amounts.</p>${taskbox('The pie charts below show how households in one country divided their monthly spending in 2005 and 2025, and the total amount spent in each year.')}${chart('spend2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['A change between percentages is measured in percentage points: subtract.','Percentage change means divide by the starting figure; use it only when it adds meaning.','A pie chart shows shares; without totals, don’t write about amounts.','With totals, share × total = amount, and amounts can move the opposite way.']})
];

const acts={
'c5-pts':{type:'choice',level:'Guided',skill:'Percentage points',decision:'Unemployment went from 8.0% in 2010 to 4.0% in 2025. Which is accurate?',
  opts:[{t:'It fell by 4 percentage points.',ok:1,why:'8.0 − 4.0 = 4 points.'},{t:'It fell by 4%.',why:'A 4% fall from 8.0% would leave about 7.7%.'},{t:'It fell by 8%.',why:'It fell by 4 points, or by 50%.'}]},
'c5-both':{type:'sort',level:'Supported',skill:'Two ways to say it',decision:'Is each description of 8.0% → 4.0% accurate?',cats:['Accurate','Not accurate'],
  items:[{w:'fell by 4 percentage points',c:0,m:'8 − 4.'},{w:'halved',c:0,m:'4 is half of 8.'},{w:'fell by 50%',c:0,m:'4 ÷ 8 = 50%.'},{w:'fell by 4%',c:1,m:'confuses points with per cent.'},{w:'fell by half a percentage point',c:1,m:'it fell by 4 points.'}]},
'c5-calc1':{type:'choice',level:'Supported',skill:'Points',decision:'A rate rose from 20% to 30%. By how many percentage points?',
  opts:[{t:'10 percentage points',ok:1,why:'30 − 20.'},{t:'50 percentage points',why:'50% is the percentage change, not the points.'},{t:'10%',why:'That is a different measure: the rate rose by 50%.'}]},
'c5-calc2':{type:'choice',level:'Supported',skill:'Percentage change',decision:'The same rate rose from 20% to 30%. What is the percentage change?',
  opts:[{t:'An increase of 50%',ok:1,why:'10 ÷ 20 = 0.5.'},{t:'An increase of 10%',why:'That confuses points with per cent.'},{t:'An increase of 30%',why:'30 is the new figure, not the change.'}]},
'c5-fix':{type:'fix',level:'Supported',skill:'Describing changes',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Unemployment fell by 4% between 2010 and 2025.',ok:/4 percentage points|halved|by 50%|by half/i,bad:/by 4%/i,hint:'8.0% → 4.0%: subtract, or divide.',err:'by 4%',fix:'by 4 percentage points',why:'8.0 − 4.0 = 4 points; 4 ÷ 8 = 50%.',model:'Unemployment fell by 4 percentage points between 2010 and 2025.'},
         {wrong:'Housing’s share rose by 5% to 40%.',ok:/5 percentage points/i,bad:/by 5%/i,hint:'35% → 40%: what kind of change?',err:'by 5%',fix:'by 5 percentage points',why:'A change between percentages is in percentage points.',model:'Housing’s share rose by 5 percentage points to 40%.'}]},
'c5-share':{type:'binary',level:'Supported',skill:'Shares and amounts',decision:'Accurate for the spending pies?',labels:['Accurate','Not accurate'],
  items:[{t:'Food accounted for a smaller share of spending in 2025.',a:0,right:'20% → 18%.',wrong:'It is accurate: the share fell.'},
         {t:'Households spent less money on food in 2025.',a:1,right:'Right. 18% of €2,500 = €450, more than €400.',wrong:'Calculate: €400 in 2005, €450 in 2025.'},
         {t:'The amount spent on transport stayed the same.',a:0,right:'€300 in both years.',wrong:'It is accurate: 15% of €2,000 = 12% of €2,500 = €300.'},
         {t:'The share of other spending rose.',a:1,right:'Right. It was 30% in both years; only the amount rose.',wrong:'The share stayed at 30%.'}]},
'c5-amt':{type:'choice',level:'Independent',skill:'Calculating amounts',decision:'How much was spent on housing each month in 2025?',prompt:'40% of €2,500.',
  opts:[{t:'€1,000',ok:1,why:'0.4 × 2,500.'},{t:'€700',why:'That is 2005: 35% of €2,000.'},{t:'€400',why:'That is food in 2005.'}]},
'c5-build':{type:'builder',level:'Independent',skill:'Share and amount',decision:'Build a sentence about food.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Although the share spent on food','fell from 20% to 18%,','the actual amount','rose from €400','to €450.'],
  distract:[{t:'fell by 2%,',why:'20% → 18% is 2 percentage points.',fix:'fell from 20% to 18%,'},{t:'households spent less on food',why:'The amount rose: €400 → €450.',fix:'the actual amount'}],
  right:'The share and the amount, moving in opposite directions, linked with “although”.',orderMsg:'All the right pieces, but check the order: although + the share, then the amount.',incompleteMsg:'Good so far, but incomplete. Add the amounts.'},
'c5-write':{type:'write',level:'Independent',skill:'Shares and amounts',decision:'Write one body paragraph about household spending.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Housing took up a larger share…'}],
  checks:[{t:'You used percentage points for a change in share.',fix:'Describe a change in share in percentage points.',fn:v=>/percentage points?/i.test(v.a)},
          {t:'No “by X%” for a change between percentages.',fix:'35% → 40% is 5 percentage points, not 5%.',fn:v=>!/(rose|fell|increased|decreased|dropped|grew) by (2|3|5)%/i.test(v.a)},
          {t:'You gave amounts in euros.',fix:'Use the totals to give amounts: €1,000, €450.',fn:v=>(v.a.match(/€\s?\d/g)||[]).length>=4},
          {t:'You reported the food paradox.',fix:'Food’s share fell, but the amount rose: report it.',fn:v=>/food/i.test(v.a)&&/450/.test(v.a)},
          {t:'Your amounts are accurate.',fix:'Check: housing €700 → €1,000; food €400 → €450; transport €300 both years; other €600 → €750.',fn:v=>!/€\s?(625|500|375|1,?200)\b/.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p>Housing took up a larger share of household spending in 2025 than in 2005, <button type="button" class="hl" data-n="0">rising by 5 percentage points to 40%</button>, and with the total budget also growing, from €2,000 to €2,500, the amount spent on housing increased from €700 to €1,000 a month. <button type="button" class="hl" data-n="1">The share spent on food fell slightly, from 20% to 18%, yet the actual amount rose from €400 to €450.</button> <button type="button" class="hl" data-n="2">Transport’s share fell by 3 percentage points to 12%, although the amount spent on it remained the same, at €300.</button> Other spending accounted for 30% in both years, <button type="button" class="hl" data-n="3">which meant an increase in the amount from €600 to €750.</button></p>`,
  notes:['A change in share, in percentage points.','Share down, amount up: the most interesting feature.','Share down, amount unchanged.','Share unchanged, amount up: 30% of a bigger total.'],
  self:['I used percentage points for changes in share.','I used the totals to calculate amounts.','I reported where shares and amounts moved differently.','I checked every calculation.'],revise:1}
};

const gloss={
  'percentage points':{term:'percentage points',def:'The difference between two percentages: new minus old. From 8% to 4% is a fall of 4 percentage points.',path:'M60,80 V36 H100 V80 M140,80 V14 H180 V80',ex:'“Unemployment fell by 4 percentage points.”'},
  'percentage change':{term:'percentage change',def:'How much a figure changed compared with where it started: change ÷ starting figure × 100.',path:'M20,70 L220,30',ex:'“From 20% to 30% is a 50% increase.”'},
  'share':{term:'share',def:'The part of a whole, usually shown as a percentage. A share is not an amount.',path:'M120,45 L120,7 A38,38 0 0,1 153,64 Z',ex:'“Food accounted for a smaller share of spending.”'}
};

const retrieval={
 'c5-s1':[{q:'8% → 4% is a fall of…',opts:[{t:'4 percentage points',ok:1,why:'Subtract.'},{t:'4%',why:'That confuses the measures.'}]}],
 'c5-s2':[{q:'20% → 30% is a percentage change of…',opts:[{t:'50%',ok:1,why:'10 ÷ 20.'},{t:'10%',why:'That is the points.'}]}],
 'c5-s3':[{q:'A pie chart without totals shows…',opts:[{t:'shares only',ok:1,why:'No amounts.'},{t:'amounts',why:'Not without totals.'}]}],
 'c5-s4':[{q:'18% of €2,500 is…',opts:[{t:'€450',ok:1,why:'0.18 × 2,500.'},{t:'€400',why:'That is 20% of €2,000.'}]}],
 'c5-s5':[{q:'What happened to transport spending?',opts:[{t:'Its share fell; the amount stayed at €300',ok:1,why:'Both measures.'},{t:'It fell by €300',why:'The amount was the same.'}]}]
};

const minitest=[
 {q:'How do you calculate percentage points?',opts:[{t:'New percentage minus old percentage',ok:1,why:'Subtract.'},{t:'Divide the change by the start',why:'That is percentage change.'},{t:'Add them',why:'No.'}],sp:'c5-s1'},
 {q:'Which is accurate for 8.0% → 4.0%?',opts:[{t:'It halved.',ok:1,why:'4 is half of 8.'},{t:'It fell by 4%.',why:'Points, not per cent.'},{t:'It fell by 2 points.',why:'It fell by 4.'}],sp:'c5-s1'},
 {q:'20% → 30%: which pair is accurate?',opts:[{t:'10 percentage points; a 50% increase',ok:1,why:'Both measures.'},{t:'10%; a 10-point increase',why:'Mixed up.'},{t:'50 points; a 10% increase',why:'Reversed.'}],sp:'c5-s2'},
 {q:'Which is the safer choice in Task 1?',opts:[{t:'Percentage points',ok:1,why:'Clear and accurate.'},{t:'Always percentage change',why:'Use it only when it adds meaning.'},{t:'Neither',why:'Describe the change.'}],sp:'c5-s2'},
 {q:'Food: 20% of €2,000 → 18% of €2,500. The amount…',opts:[{t:'rose from €400 to €450',ok:1,why:'Calculate.'},{t:'fell',why:'The share fell; the amount rose.'},{t:'stayed the same',why:'€400 and €450.'}],sp:'c5-s3'},
 {q:'A pie chart has no totals. Which is safe?',opts:[{t:'a larger share of spending',ok:1,why:'Shares only.'},{t:'more money',why:'Unknown without totals.'},{t:'€200 more',why:'Unknown.'}],sp:'c5-s3'},
 {q:'30% of €2,000 and 30% of €2,500: the amount…',opts:[{t:'rose from €600 to €750',ok:1,why:'Same share, bigger total.'},{t:'stayed the same',why:'The share did, not the amount.'},{t:'fell',why:'It rose.'}],sp:'c5-s4'},
 {q:'Housing 35% → 40%. Which is accurate?',opts:[{t:'Its share rose by 5 percentage points.',ok:1,why:'40 − 35.'},{t:'Its share rose by 5%.',why:'Points, not per cent.'},{t:'Its share doubled.',why:'Far from double.'}],sp:'c5-s5'}
];

const cannow=[['Describe a change between percentages in points','c5-s1'],['Calculate a percentage change','c5-s2'],['Keep shares and amounts apart','c5-s3'],['Calculate amounts from shares and totals','c5-s4'],['Write a paragraph with shares and amounts','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss,charts:{unemp:C.unemp,spend:C.spend,spend2:cp('spend','ch-spend2')},retrieval,minitest,cannow});
})();
