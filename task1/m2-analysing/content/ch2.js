/* ==========================================================================
   MODULE 2 · CHAPTER 2 · FINDING KEY FEATURES
   ACTIVITY IDS (type · level)
     c2-ext     choice    Guided       Step 1  Highest and lowest
     c2-ext2    choice    Supported    Step 1  The lowest in 2025
     c2-chg     binary    Supported    Step 2  Biggest changes
     c2-abs     choice    Supported    Step 2  Absolute or relative?
     c2-exc     sort      Supported    Step 3  Rose, fell or unchanged?
     c2-pos     choice    Supported    Step 4  Change of position
     c2-build   builder   Independent  Step 4  An overview from key features
     c2-write   write     Independent  Step 5  Overview and body paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,figs,opening,review,addChapter}=OE;
const {C,illus}=F2;
const P='Chapter 2',CT='Finding Key Features',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'Examiners reward answers that highlight the key features: the things a reader must know. Most charts have the same kinds of key feature: the extremes, the biggest changes, the exceptions and any change of position. In this chapter I’ll show you how to find them on any chart.',
  outcomes:['find the highest and lowest figures','find the biggest changes, in '+T('absolute')+' and '+T('relative')+' terms','spot exceptions to the general pattern','notice changes of position, and build an overview from them'],
  illus:illus('star'),
  steps:[[1,'c2-s1','The extremes','Highest and lowest','Discover'],[2,'c2-s2','The biggest changes','Absolute and relative','Understand'],[3,'c2-s3','The exceptions','What breaks the pattern','Understand'],[4,'c2-s4','Changes of position','Who overtook whom','Practise'],[5,'c2-s5','Chapter challenge','Five stations','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','The extremes',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The extremes</h2>${vid({title:'The extremes',len:'90 seconds',script:['Show the stations chart. Ask: which station was busiest? Central, in both years.','Ask: which was quietest? Airport Link in 2010, Market in 2025.','Say: the lowest can change even when the highest doesn’t. Check both years.']})}<p>Start with the highest and the lowest, in every year shown:</p><ul class="clean"><li><b>Highest:</b> Central, in both 2010 and 2025.</li><li><b>Lowest in 2010:</b> Airport Link (6 million).</li><li><b>Lowest in 2025:</b> Market (15 million).</li></ul>${chart('stn')}${take('Find the highest and lowest in every year. The lowest can change even when the highest doesn’t.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c2-ext"></div><div data-act="c2-ext2" style="margin-top:14px"></div>`}),

sp('c2-s2','The biggest changes',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The biggest changes</h2>${vid({title:'Absolute and relative change',len:'2 minutes',script:['Calculate each change: Central +13, Harbour −2, Airport Link +18, University +7, Market 0.','Say: the biggest absolute change is Airport Link, 18 million.','Now divide: Airport Link 24 ÷ 6 = 4. Central 55 ÷ 42 ≈ 1.3.','Say: Airport Link is also the biggest relative change: it quadrupled.']})}<p>There are two ways to measure a change:</p><ul class="clean"><li><b>${T('absolute')}:</b> the difference. Airport Link rose by 18 million; Central by 13 million.</li><li><b>${T('relative')}:</b> how many times bigger. Airport Link quadrupled; Central grew by less than a third.</li></ul>${insight('Both together','Airport Link quadrupled, from 6 million to 24 million: the largest increase of any station, in absolute and relative terms.')}${take('Subtract for the absolute change; divide for the relative change. Check both before you choose.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c2-chg"></div><div data-act="c2-abs" style="margin-top:16px"></div>`}),

sp('c2-s3','The exceptions',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The exceptions</h2><p>Once you know the general pattern, look for anything that breaks it. An ${T('exception')} is almost always a key feature.</p><ul class="clean"><li><b>The pattern:</b> passenger numbers rose at three stations.</li><li><b>Exception 1:</b> Harbour was the only station to fall, from 18 to 16 million.</li><li><b>Exception 2:</b> Market stayed exactly the same, at 15 million.</li></ul>${mistake('<s>Passenger numbers rose at all five stations.</s> Check every bar: Harbour fell and Market didn’t change.')}${take('Find the pattern, then the exceptions. Words like “all” and “every” need checking.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c2-exc"></div>`}),

sp('c2-s4','Changes of position',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Changes of position</h2><p>Compare the order of the categories at the start and at the end. A change of position is a striking key feature, and it often belongs in the overview.</p><ul class="clean"><li><b>2010:</b> Central, Harbour, Market, University, Airport Link.</li><li><b>2025:</b> Central, Airport Link, University, Harbour, Market.</li></ul>${insight('The striking change','Airport Link went from the least used station to the second busiest.')}${take('Rank the categories at the start and at the end. Anything that moved a long way is a key feature.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c2-pos"></div><div data-act="c2-build" style="margin-top:16px"></div>`}),

sp('c2-s5','Chapter challenge: five stations',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and one body paragraph for this chart, built on its key features.</p><div class="oe-insight"><span class="lab">The task</span>The chart below shows the number of passengers who used five railway stations in one city in 2010 and 2025.</div>${chart('stn2')}${note('Your key features: the busiest station, the biggest change, the exceptions and the change of position.')}<div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Find the highest and lowest in every year.','Measure change in absolute terms (subtract) and relative terms (divide).','Find the pattern, then the exceptions.','Rank the categories at the start and the end to find changes of position.']})
];

const acts={
'c2-ext':{type:'choice',level:'Guided',skill:'Extremes',decision:'Which station was the busiest?',
  opts:[{t:'Central, in both years',ok:1,why:'42 million and 55 million: the highest each time.'},{t:'Airport Link, in 2025',why:'Airport Link had 24 million; Central had 55 million.'},{t:'Harbour, in 2010',why:'Harbour was second, with 18 million.'}]},
'c2-ext2':{type:'choice',level:'Supported',skill:'Extremes',decision:'Which station had the fewest passengers in 2025?',
  opts:[{t:'Market, with 15 million',ok:1,why:'The lowest bar in 2025.'},{t:'Airport Link',why:'That was 2010. By 2025 it had 24 million.'},{t:'Harbour',why:'Harbour had 16 million, just above Market.'}]},
'c2-chg':{type:'binary',level:'Supported',skill:'Changes',decision:'Accurate or not?',labels:['Accurate','Not accurate'],
  items:[{t:'Airport Link quadrupled its passenger numbers.',a:0,right:'6 × 4 = 24.',wrong:'It is accurate: 6 million to 24 million.'},
         {t:'Central had the largest increase in absolute terms.',a:1,right:'Right. Central rose by 13 million; Airport Link by 18 million.',wrong:'Airport Link rose by 18 million, more than Central’s 13 million.'},
         {t:'University rose by 7 million.',a:0,right:'19 − 12 = 7.',wrong:'It is accurate.'},
         {t:'Central doubled its passenger numbers.',a:1,right:'Right. 42 to 55 is an increase of less than a third.',wrong:'Double 42 is 84: Central grew by less than a third.'}]},
'c2-abs':{type:'choice',level:'Supported',skill:'Absolute and relative',decision:'Which sentence compares Central and University accurately?',
  opts:[{t:'Central gained more passengers (13 million), but University grew more in relative terms (by over half).',ok:1,why:'13 > 7, but 7 ÷ 12 ≈ 58% against 13 ÷ 42 ≈ 31%.'},{t:'University gained more passengers than Central.',why:'7 million is less than 13 million.'},{t:'Both grew by the same proportion.',why:'About 31% against about 58%.'}]},
'c2-exc':{type:'sort',level:'Supported',skill:'Exceptions',decision:'What happened at each station?',cats:['Rose','Fell','Unchanged'],
  items:[{w:'Central',c:0,m:'42 to 55 million.'},{w:'Harbour',c:1,m:'18 to 16 million.'},{w:'Airport Link',c:0,m:'6 to 24 million.'},{w:'University',c:0,m:'12 to 19 million.'},{w:'Market',c:2,m:'15 million in both years.'}]},
'c2-pos':{type:'choice',level:'Supported',skill:'Changes of position',decision:'Which change of position is accurate?',
  opts:[{t:'Airport Link moved from last place to second.',ok:1,why:'Fifth in 2010, second in 2025.'},{t:'Harbour moved from second place to first.',why:'Harbour fell to fourth.'},{t:'Market moved up to third.',why:'Market fell to last.'}]},
'c2-build':{type:'builder',level:'Independent',skill:'An overview from key features',decision:'Build an overview sentence.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','Central remained by far the busiest station,','while Airport Link','went from the least used station','to the second busiest.'],
  distract:[{t:'with 55 million passengers,',why:'No figures in the overview.',fix:'Central remained by far the busiest station,'},{t:'because of more flights.',why:'No reasons: the chart doesn’t give them.',fix:'to the second busiest.'}],
  right:'Two key features, a contrast linker, no figures.',orderMsg:'All the right pieces, but check the order: Overall, Central, while, Airport Link’s change.',incompleteMsg:'Good so far, but incomplete. Finish the change of position.'},
'c2-write':{type:'write',level:'Independent',skill:'Key features',decision:'Write an overview and one body paragraph.',prompt:'Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'a',label:'Body paragraph',rows:8,ph:'Central handled…'}],
  checks:[{t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names the busiest station.',fix:'Say that Central was the busiest.',fn:v=>/central/i.test(v.ov)},
          {t:'You described Airport Link’s growth.',fix:'Airport Link quadrupled: include it.',fn:v=>/airport/i.test(v.ov+v.a)&&/(quadrupl|four times|fourfold)/i.test(v.ov+v.a)},
          {t:'You included the exceptions.',fix:'Mention Harbour’s fall and Market’s lack of change.',fn:v=>/harbour/i.test(v.a)&&/market/i.test(v.a)},
          {t:'You wrote “million” with the figures.',fix:'Add “million”: 55 million passengers.',fn:v=>/\d+\s*million/i.test(v.a)},
          {t:'Your paragraph is a good length (70 words or more).',fix:'Add detail: your paragraph is under 70 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Overview</span><button type="button" class="hl" data-n="0">Overall, passenger numbers rose at three of the five stations, with Central remaining by far the busiest.</button> The most striking change was at Airport Link, which went from the least used station to the second busiest.</p><p><span class="plabel">Body</span>Central handled 42 million passengers in 2010 and 55 million in 2025, <button type="button" class="hl" data-n="1">more than twice as many as any other station in both years</button>. Airport Link grew fastest: <button type="button" class="hl" data-n="2">its passenger numbers quadrupled from 6 million to 24 million</button>, an increase of 18 million, the largest of any station. University also grew, from 12 million to 19 million. <button type="button" class="hl" data-n="3">By contrast, Harbour was the only station to see a fall</button>, from 18 million to 16 million, while Market remained unchanged at 15 million.</p>`,
  notes:['The pattern and the busiest station, with no figures.','A calculated comparison: 55 ÷ 24 ≈ 2.3 and 42 ÷ 18 ≈ 2.3.','The biggest change, in relative and absolute terms.','The exceptions, introduced with a contrast linker.'],
  self:['I named the highest and lowest.','I described the biggest change accurately.','I included the exceptions.','My overview has no figures.'],revise:1}
};

const gloss={
  'absolute':{term:'absolute change',def:'The difference between two figures: subtract. 6 million to 24 million is an absolute rise of 18 million.',path:'M40,80 V60 H90 V80 M140,80 V20 H190 V80',ex:'“The largest absolute increase was at Airport Link.”'},
  'relative':{term:'relative change',def:'How many times bigger or smaller: divide. 6 million to 24 million is a fourfold rise.',path:'M40,80 V70 H70 V80 M140,80 V20 H170 V80',ex:'“In relative terms, Airport Link grew fastest.”'},
  'exception':{term:'exception',def:'Something that doesn’t follow the general pattern. It is almost always a key feature.',path:'M20,70 L60,55 L100,40 L140,75 L180,25 L220,15',ex:'“Harbour was the only exception.”'}
};

const retrieval={
 'c2-s1':[{q:'Can the lowest category change between years?',opts:[{t:'Yes: check every year',ok:1,why:'Airport Link, then Market.'},{t:'No',why:'It changed here.'}]}],
 'c2-s2':[{q:'To find the relative change, you…',opts:[{t:'divide',ok:1,why:'How many times bigger.'},{t:'subtract',why:'That is absolute.'}]}],
 'c2-s3':[{q:'An exception is…',opts:[{t:'something that breaks the pattern',ok:1,why:'A key feature.'},{t:'a small detail',why:'It is key.'}]}],
 'c2-s4':[{q:'Airport Link moved from fifth to…',opts:[{t:'second',ok:1,why:'24 million.'},{t:'first',why:'Central was first.'}]}],
 'c2-s5':[{q:'Which station was the only one to fall?',opts:[{t:'Harbour',ok:1,why:'18 to 16.'},{t:'Market',why:'Unchanged.'}]}]
};

const minitest=[
 {q:'Which is a key feature?',opts:[{t:'The busiest station',ok:1,why:'An extreme.'},{t:'The colour of the bars',why:'Not data.'},{t:'University in 2010',why:'A detail.'}],sp:'c2-s1'},
 {q:'Which station was quietest in 2010?',opts:[{t:'Airport Link',ok:1,why:'6 million.'},{t:'Market',why:'15 million.'},{t:'Harbour',why:'18 million.'}],sp:'c2-s1'},
 {q:'6 million to 24 million is…',opts:[{t:'a fourfold increase',ok:1,why:'× 4.'},{t:'a threefold increase',why:'× 3 would be 18.'},{t:'an increase of 24 million',why:'18 million.'}],sp:'c2-s2'},
 {q:'Absolute change means…',opts:[{t:'the difference between two figures',ok:1,why:'Subtract.'},{t:'how many times bigger',why:'That is relative.'},{t:'a large change',why:'Any difference.'}],sp:'c2-s2'},
 {q:'“Passenger numbers rose at all five stations.” Is it accurate?',opts:[{t:'No: Harbour fell and Market didn’t change',ok:1,why:'Two exceptions.'},{t:'Yes',why:'Check every bar.'},{t:'Only for 2025',why:'The claim is wrong.'}],sp:'c2-s3'},
 {q:'Market 15 → 15 is…',opts:[{t:'unchanged',ok:1,why:'Same figure.'},{t:'a slight rise',why:'No change.'},{t:'a fall',why:'No change.'}],sp:'c2-s3'},
 {q:'Why rank the categories at the start and end?',opts:[{t:'To find changes of position',ok:1,why:'Often an overview feature.'},{t:'To list them all',why:'Select.'},{t:'It isn’t useful',why:'It is.'}],sp:'c2-s4'},
 {q:'Central 55 million, Airport Link 24 million in 2025. Central had…',opts:[{t:'more than twice as many',ok:1,why:'≈ 2.3 times.'},{t:'three times as many',why:'3 × 24 = 72.'},{t:'about the same',why:'No.'}],sp:'c2-s5'}
];

const cannow=[['Find the highest and lowest in every year','c2-s1'],['Measure change in absolute and relative terms','c2-s2'],['Spot the exceptions','c2-s3'],['Find changes of position','c2-s4'],['Write an overview and body paragraph from key features','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{stn:C.stn,stn2:Object.assign({},C.stn,{id:'ch-f2stn2'})},retrieval,minitest,cannow});
})();
