/* ==========================================================================
   MODULE 5 · CHAPTER 2 · THE SIZE AND SPEED OF CHANGE
   ACTIVITY IDS (type · level)
     c2-see     motion    Guided       Step 1  See the words
     c2-sec     sections  Supported    Step 2  Match the words to the data
     c2-calc    choice    Supported    Step 2  Check the size
     c2-form    fix       Supported    Step 3  Adjective or adverb?
     c2-build   builder   Supported    Step 3  A sharp rise
     c2-steady  choice    Supported    Step 4  Steady or not?
     c2-acc     binary    Independent  Step 4  Accurate or not?
     c2-write   write     Independent  Step 5  Prices and salaries
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=TRD;
const P='Chapter 2',CT='The Size and Speed of Change',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);
const SEC=Object.assign({},C.house,{id:'ch-m5house-sec',sections:[{a:0,b:1,lab:'A',t:0},{a:1,b:2,lab:'B',t:1},{a:2,b:3,lab:'C',t:0},{a:3,b:4,lab:'D',t:2},{a:4,b:5,lab:'E',t:3}]});

const spreads=[
opening({n:2,title:CT,lede:'“Prices rose” is accurate but tells the reader very little. How much did they rise, and how quickly? Words like slightly, sharply and dramatically answer those questions, but only if they match the figures. In this chapter I’ll show you how to choose them, and how to use them as adjectives and adverbs.',
  outcomes:['choose words for the size and speed of a change: slight, steady, sharp, dramatic','match the word to the figures, not to your impression of the line',`use the adjective and adverb forms correctly: a ${T('sharp rise')}, rose sharply`,'tell steady change from uneven change'],
  illus:illus('M30,110 L120,104 L170,60 L240,54 L300,20 L380,18'),
  steps:[[1,'c2-s1','Size and speed','Slight to dramatic','Discover'],[2,'c2-s2','Match the words to the data','Calculate first','Understand'],[3,'c2-s3','Adjective or adverb?','A sharp rise, rose sharply','Understand'],[4,'c2-s4','Steady or uneven?','Regular change','Practise'],[5,'c2-s5','Chapter challenge','Prices and salaries','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Size and speed',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Size and speed</h2>${vid({title:'Size and speed',len:'90 seconds',script:['Draw five lines, each rising differently.','Label them: slightly, gradually, steadily, sharply, dramatically.','Say: slightly is small; sharply is big and quick; dramatically is very big.','Add the flat line: remained stable.']})}<ul class="clean"><li><b>Small:</b> slightly, marginally</li><li><b>Slow over time:</b> gradually</li><li><b>Regular:</b> ${T('steadily')}</li><li><b>Big and quick:</b> sharply, rapidly</li><li><b>Big:</b> significantly, considerably</li><li><b>Very big:</b> dramatically</li></ul>${note('These words are not decoration. Each one makes a claim about the figures, and the examiner checks it.')}<div class="clear"></div>${take('Each word claims a size or a speed. Choose the one the figures support.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c2-see"></div>`}),

sp('c2-s2','Match the words to the data',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Match the words to the data</h2>${vid({title:'Match the words to the data',len:'2 minutes',script:['Show the house price graph. Calculate each two-year change: +4, +26, +6, +54, +2.','Say: +4 is slight; +26 is sharp; +54 is dramatic, the biggest of all.','Point out that the y-axis starts at 150: the line looks steeper than the change.','Finish: calculate, then choose the word.']})}<p>Calculate the change in each section, then choose the word:</p>${chart('house')}<ul class="clean"><li>+€4,000 (2%): <b>slight</b></li><li>+€26,000 (13%): <b>sharp</b></li><li>+€54,000 (23%): <b>dramatic</b>, the biggest rise on the graph</li></ul>${mistake('The axis starts at €150,000, not zero, so every rise looks steeper than it is. Judge the size by the figures, not the slope.')}${take('Calculate the change, then choose the word. Watch axes that don’t start at zero.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-sec"></div><div data-act="c2-calc" style="margin-top:16px"></div>`}),

sp('c2-s3','Adjective or adverb?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Adjective or adverb?</h2>${vid({title:'Adjective or adverb?',len:'90 seconds',script:['Write: prices rose sharply. Verb + adverb.','Write: there was a sharp rise in prices. Adjective + noun.','Show the errors: rose sharp; a sharply rise.','Say: the -ly form goes with the verb; the adjective goes with the noun.']})}<ul class="clean"><li><b>Verb + adverb:</b> prices <b>rose sharply</b>; salaries <b>grew steadily</b>.</li><li><b>Adjective + noun:</b> a <b>sharp rise</b> in prices; <b>steady growth</b> in salaries.</li></ul>${insight('Two ways to say it','Prices rose dramatically between 2020 and 2022. / There was a dramatic rise in prices between 2020 and 2022.')}${mistake('<s>Prices rose dramatical.</s> After a verb, use the adverb: <i>rose dramatically</i>.')}${take('Adverb with a verb (rose sharply); adjective with a noun (a sharp rise).')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-form"></div><div data-act="c2-build" style="margin-top:16px"></div>`}),

sp('c2-s4','Steady or uneven?',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Steady or uneven?</h2><p>“Steadily” means by a similar amount in each period. Check it before you use it.</p>${chart('wage')}<ul class="clean"><li><b>Salaries:</b> +€1,500 every two years. That is steady growth.</li><li><b>House prices:</b> +4, +26, +6, +54, +2. That is uneven: describe the stages separately.</li></ul>${note('Overall, prices rose by almost half (46%) and salaries by a quarter (25%). Percentages make different-sized figures comparable.')}<div class="clear"></div>${take('Steadily = similar changes each period. Uneven change needs a sentence for each stage.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the two graphs in Steps 2 and 4.</p><div data-act="c2-steady"></div><div data-act="c2-acc" style="margin-top:16px"></div>`}),

sp('c2-s5','Chapter challenge: prices and salaries',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph comparing how house prices and salaries changed.</p>${chart('house2')}${chart('wage2')}<ul class="clean" style="font-size:15px"><li>A size word for each stage of the price graph.</li><li>One adjective + noun and one verb + adverb.</li><li>A comparison of the overall change.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Slightly, gradually, steadily, sharply, dramatically: each claims a size or a speed.','Calculate the change first, and watch axes that don’t start at zero.','Adverb with a verb (rose sharply); adjective with a noun (a sharp rise).','Steadily means similar changes in each period.']})
];

const acts={
'c2-see':{type:'motion',level:'Guided',skill:'Size and speed words',decision:'Select each phrase to see the change it describes.',
  items:[{p:'rose slightly',d:'M20,100 L290,88',n:'a small rise.'},{p:'rose gradually',d:'M20,118 C110,114 200,98 290,72',n:'a slow rise over a long time.'},{p:'rose steadily',d:'M20,120 L290,40',n:'the same amount in each period.'},{p:'rose sharply',d:'M20,115 L150,110 L190,42 L290,36',n:'a big, quick rise.'},{p:'rose dramatically',d:'M20,126 L150,120 L200,16 L290,12',n:'a very big rise.'},{p:'remained stable',d:'M20,70 L290,72',n:'almost no change.'}]},
'c2-sec':{type:'sections',level:'Supported',skill:'Matching words to data',decision:'Label each section of the house price graph.',
  chart:SEC,labels:['rose slightly','rose sharply','rose dramatically','remained almost unchanged'],
  explain:(sc,j)=>({A:'€200,000 to €204,000: only €4,000, a slight rise.',B:'€204,000 to €230,000: €26,000 in two years, a sharp rise.',C:'€230,000 to €236,000: €6,000, a slight rise.',D:'€236,000 to €290,000: €54,000, the biggest rise on the graph. That is dramatic.',E:'€290,000 to €292,000: only €2,000. Prices remained almost unchanged.'})[sc.lab]},
'c2-calc':{type:'choice',level:'Supported',skill:'Checking the size',decision:'Which sentence is accurate?',
  opts:[{t:'The biggest rise in prices came between 2020 and 2022, when they increased by €54,000.',ok:1,why:'290 − 236 = 54, the largest change.'},{t:'Prices rose dramatically between 2014 and 2016.',why:'Only €4,000: a slight rise.'},{t:'Prices fell slightly after 2022.',why:'They remained almost unchanged, rising only from €290,000 to €292,000.'}]},
'c2-form':{type:'fix',level:'Supported',skill:'Adjectives and adverbs',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Prices rose sharp between 2016 and 2018.',ok:/rose sharply/i,bad:/rose sharp\b/i,hint:'After a verb, use the adverb.',err:'rose sharp',fix:'rose sharply',why:'Verb + adverb: rose sharply.',model:'Prices rose sharply between 2016 and 2018.'},
         {wrong:'There was a dramatically rise in prices.',ok:/a dramatic (rise|increase)/i,bad:/dramatically rise/i,hint:'Before a noun, use the adjective.',err:'a dramatically rise',fix:'a dramatic rise',why:'Adjective + noun: a dramatic rise.',model:'There was a dramatic rise in prices.'},
         {wrong:'Salaries showed a steadily growth.',ok:/\bsteady growth/i,bad:/steadily growth/i,hint:'“Growth” is a noun.',err:'a steadily growth',fix:'steady growth',why:'Adjective + noun; and “growth” usually needs no “a”.',model:'Salaries showed steady growth.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Adjective + noun',decision:'Build a sentence about 2020 to 2022.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Between 2020 and 2022,','there was','a dramatic rise','of €54,000','in house prices.'],
  distract:[{t:'a dramatically rise',why:'Before a noun, use the adjective: dramatic.',fix:'a dramatic rise'},{t:'of €290,000',why:'€290,000 is the end point; the rise was €54,000.',fix:'of €54,000'}],
  right:'Time, there was, adjective + noun, of + amount, in + thing.',orderMsg:'All the right pieces, but check the order: the time, there was, the rise, the amount, the thing.',incompleteMsg:'Good so far, but incomplete. Add what rose.'},
'c2-steady':{type:'choice',level:'Supported',skill:'Steady change',decision:'Which line rose steadily?',
  opts:[{t:'Salaries: up by €1,500 in every two-year period',ok:1,why:'The same amount each time.'},{t:'House prices: up by different amounts each time',why:'+4, +26, +6, +54, +2: uneven.'},{t:'Both',why:'Only salaries rose by the same amount each time.'}]},
'c2-acc':{type:'binary',level:'Independent',skill:'Accuracy',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Over the decade, house prices rose by almost half.',a:0,right:'+€92,000 on €200,000 = 46%.',wrong:'It is accurate: 92 ÷ 200 = 0.46.'},
         {t:'Salaries rose dramatically.',a:1,right:'Right. Steadily, by a quarter in ten years.',wrong:'+€1,500 every two years is steady, not dramatic.'},
         {t:'House prices rose steadily throughout.',a:1,right:'Right. The rises were very uneven.',wrong:'+4, +26, +6, +54, +2 is not steady.'},
         {t:'Salaries grew by a quarter, from €30,000 to €37,500.',a:0,right:'7.5 ÷ 30 = 0.25.',wrong:'It is accurate: €7,500 is a quarter of €30,000.'}]},
'c2-write':{type:'write',level:'Independent',skill:'Size and speed of change',decision:'Write one body paragraph about house prices and salaries.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'House prices in the town…'}],
  checks:[{t:'You described both graphs.',fix:'Describe house prices and salaries.',fn:v=>/(house|price)/i.test(v.a)&&/salar/i.test(v.a)},
          {t:'You used the dramatic rise in 2020 to 2022.',fix:'Describe the biggest rise: 2020 to 2022, +€54,000.',fn:v=>/(dramatic|sharp|significant|considerabl|rapid)/i.test(v.a)&&/(2022|54,000)/.test(v.a)},
          {t:'You used an adjective + noun.',fix:'Add one: a sharp rise, steady growth.',fn:v=>/\b(slight|gradual|steady|sharp|dramatic|significant|rapid|small|considerable)\s+(rise|increase|growth|fall|decline|drop)\b/i.test(v.a)},
          {t:'You used a verb + adverb.',fix:'Add one: rose sharply, grew steadily.',fn:v=>/\b(rose|grew|increased|climbed|fell|declined)\s+(slightly|gradually|steadily|sharply|dramatically|significantly|rapidly|considerably)\b/i.test(v.a)},
          {t:'You didn’t call the house prices steady.',fix:'House prices rose unevenly: don’t call them steady.',fn:v=>!/prices[^.,]{0,30}\b(rose|grew|increased)\s+steadily|steady (rise|growth|increase) in (house )?prices/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p>House prices in the town <button type="button" class="hl" data-n="0">rose only slightly between 2014 and 2016</button>, from €200,000 to €204,000, before climbing sharply to €230,000 in 2018. After another small increase, <button type="button" class="hl" data-n="1">prices rose dramatically between 2020 and 2022, by €54,000 to €290,000</button>, and then remained almost unchanged. Salaries, by contrast, <button type="button" class="hl" data-n="2">grew steadily, by €1,500 every two years</button>, from €30,000 to €37,500. <button type="button" class="hl" data-n="3">Over the decade as a whole, house prices rose by almost half (46%), whereas salaries rose by a quarter.</button></p>`,
  notes:['Slightly fits: only €4,000.','Dramatically fits the largest rise; by + change, to + end point.','Steadily fits: the same rise every period.','Percentages compare figures of very different sizes.'],
  self:['Each size word matches a calculated change.','I used an adjective + noun and a verb + adverb.','I didn’t call uneven change steady.','I compared the overall changes.'],revise:1}
};

const gloss={
  'steadily':{term:'steadily',def:'By a similar amount in each period.',path:'M20,80 L220,20',ex:'“Salaries grew steadily, by €1,500 every two years.”'},
  'sharp rise':{term:'a sharp rise',def:'A big, quick increase. The adverb is sharply: rose sharply.',path:'M20,80 L110,75 L150,20 L220,15',ex:'“There was a sharp rise in prices between 2016 and 2018.”'},
  'dramatically':{term:'dramatically',def:'By a very large amount. Sharply and dramatically can both describe the biggest changes on a chart.',path:'M20,85 L120,80 L160,8 L220,5',ex:'“Prices rose dramatically between 2020 and 2022.”'}
};

const retrieval={
 'c2-s1':[{q:'Which word claims a very large change?',opts:[{t:'dramatically',ok:1,why:'Very big.'},{t:'slightly',why:'Small.'}]}],
 'c2-s2':[{q:'What should you do before choosing a size word?',opts:[{t:'Calculate the change',ok:1,why:'The word must match.'},{t:'Look at the slope only',why:'Axes can mislead.'}]}],
 'c2-s3':[{q:'Prices rose ___.',opts:[{t:'sharply',ok:1,why:'Verb + adverb.'},{t:'sharp',why:'Use the adverb.'}]}],
 'c2-s4':[{q:'+€1,500 every period is…',opts:[{t:'steady',ok:1,why:'The same each time.'},{t:'dramatic',why:'Small and regular.'}]}],
 'c2-s5':[{q:'€200,000 → €292,000 is a rise of…',opts:[{t:'almost half',ok:1,why:'46%.'},{t:'almost double',why:'Double would be €400,000.'}]}]
};

const minitest=[
 {q:'Which word means “by a small amount”?',opts:[{t:'slightly',ok:1,why:'Small.'},{t:'sharply',why:'Big and quick.'},{t:'dramatically',why:'Very big.'}],sp:'c2-s1'},
 {q:'Which word means “by a similar amount each period”?',opts:[{t:'steadily',ok:1,why:'Regular.'},{t:'sharply',why:'Big and quick.'},{t:'slightly',why:'Small.'}],sp:'c2-s1'},
 {q:'+€4,000 on €200,000 is…',opts:[{t:'a slight rise',ok:1,why:'2%.'},{t:'a dramatic rise',why:'Far too strong.'},{t:'a sharp rise',why:'Too strong.'}],sp:'c2-s2'},
 {q:'Why can a graph make a rise look bigger than it is?',opts:[{t:'The axis may not start at zero',ok:1,why:'Check the figures.'},{t:'The colours',why:'Not data.'},{t:'The title',why:'Not the reason.'}],sp:'c2-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'There was a sharp rise in prices.',ok:1,why:'Adjective + noun.'},{t:'There was a sharply rise in prices.',why:'Use the adjective.'},{t:'Prices rose sharp.',why:'Use the adverb.'}],sp:'c2-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'Salaries grew steadily.',ok:1,why:'Verb + adverb.'},{t:'Salaries grew steady.',why:'Use the adverb.'},{t:'Salaries showed steadily growth.',why:'Use the adjective.'}],sp:'c2-s3'},
 {q:'+4, +26, +6, +54, +2 is best described as…',opts:[{t:'uneven: describe each stage',ok:1,why:'Very different changes.'},{t:'steady',why:'The changes differ a lot.'},{t:'stable',why:'Prices rose by €92,000.'}],sp:'c2-s4'},
 {q:'€30,000 → €37,500 is a rise of…',opts:[{t:'a quarter',ok:1,why:'7.5 ÷ 30.'},{t:'a third',why:'A third would be €10,000.'},{t:'half',why:'Half would be €15,000.'}],sp:'c2-s5'}
];

const cannow=[['Use words for the size and speed of change','c2-s1'],['Match size words to calculated changes','c2-s2'],['Use adjectives with nouns and adverbs with verbs','c2-s3'],['Tell steady change from uneven change','c2-s4'],['Write a paragraph with accurate size and speed words','c2-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:2,spreads,acts,gloss,charts:{house:C.house,wage:C.wage,house2:cp('house','ch-m5house2'),wage2:cp('wage','ch-m5wage2'),'house-sec':SEC},retrieval,minitest,cannow});
})();
