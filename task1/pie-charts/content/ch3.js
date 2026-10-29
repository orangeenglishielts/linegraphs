/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 3 · COMPARING PIES
   ACTIVITY IDS (type · level)
     c3-ch1..3  choice    Guided       Step 1  Describe the change in share
     c3-rank    binary    Supported    Step 2  True or false?
     c3-lead    choice    Supported    Step 2  Report the change at the top
     c3-amt     binary    Supported    Step 3  Can you say this from the pies?
     c3-pp1..3  choice    Supported    Step 4  Points and multiples
     c3-build   builder   Supported    Step 4  Build the sentence
     c3-write   write     Independent  Step 5  Compare the two pies
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=PIE;
const P='Chapter 3',CT='Comparing Pies',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:3,title:CT,lede:'Most pie chart tasks give you two or three pies. The marks are in the comparison: which shares grew, which shrank, and which segment took the lead. In this chapter I’ll show you how to compare pies accurately, including the mistake that costs many students marks.',
  outcomes:['describe how a share changed, with figures and fractions','report changes in ranking: which segment became the largest',`explain why a share is not an amount, and write accordingly`,`use ${T('percentage point','percentage points')} and multiples (${T('-fold','doubled, quadrupled')}) accurately`],
  illus:illus([72,8,10,10]),
  steps:[[1,'c3-s1','Changes in share','Across two or three pies','Discover'],[2,'c3-s2','Changes in ranking','A new leader','Understand'],[3,'c3-s3','Shares are not amounts','What the pies can’t tell you','Understand'],[4,'c3-s4','Points and multiples','How big was the change?','Practise'],[5,'c3-s5','Chapter challenge','Compare the two pies','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Changes in share',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Changes in share</h2>${vid({title:'Comparing pies over time',len:'90 seconds',script:['Show the three music pies. Follow one colour across: streaming.','Read the change: 10%, then 45%, then 72%.','Turn it into words: from a tenth to almost three-quarters.','Finish: follow each category across the pies before you write.']})}<p>With pies for different years, follow one category at a time across the pies. Then describe how its share changed.</p>${chart('music')}<ul class="clean" style="margin-top:10px"><li><b>The figures:</b> <i>Streaming’s share rose from 10% in 2010 to 72% in 2024.</i></li><li><b>Fractions:</b> <i>…from a tenth of all listening to almost three-quarters.</i></li><li><b>Speed:</b> <i>The biggest jump came between 2010 and 2017.</i></li></ul>${note('Use “share” or “proportion” as your subject: the share of streaming, the proportion who used downloads.')}<div class="clear"></div>${take('Follow one category across the pies, then describe its change: figures, a fraction, and when it changed most.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the music charts on the left page.</p><div data-act="c3-ch1"></div><div data-act="c3-ch2" style="margin-top:14px"></div><div data-act="c3-ch3" style="margin-top:14px"></div>`}),

sp('c3-s2','Changes in ranking',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Changes in ranking</h2>${vid({title:'Changes in ranking',len:'90 seconds',script:['Rank the four formats in 2010: CDs, downloads, radio, streaming.','Rank them again in 2017 and 2024.','Show the change at the top: CDs to streaming. Say: this belongs in the overview.','Show “joint second” for equal shares.']})}<p>When the largest segment changes, that is usually the most important feature of the chart. Rank the segments in each pie before you write.</p><ul class="clean"><li><b>A new leader:</b> <i>By 2017, streaming had ${T('overtook','overtaken')} CDs and vinyl to become the most popular format.</i></li><li><b>Falling down the ranking:</b> <i>CDs and vinyl fell from first place in 2010 to third in 2017.</i></li><li><b>Equal shares:</b> <i>In 2024, radio and CDs were ${T('joint','joint second')}, at 10% each.</i></li></ul>${mistake('<s>Streaming became the biggest in 2024.</s> It was already the largest in 2017. Check every pie, not just the first and last.')}${take('Rank every pie. A change at the top is overview material.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the music charts in Step 1.</p><div data-act="c3-rank"></div><div data-act="c3-lead" style="margin-top:16px"></div>`}),

sp('c3-s3','Shares are not amounts',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Shares are not amounts</h2>${vid({title:'Shares are not amounts',len:'2 minutes',script:['Draw two pies, one small and one large, with the same 25% segment.','Ask: is 25% of the small pie the same amount as 25% of the large one?','Say: a pie chart gives no totals, so you can only describe shares.','Show the safe phrases: a smaller share, a smaller proportion.']})}<p>Each pie is 100% of <b>its own total</b>, and the chart doesn’t tell you how big that total is. So you can describe shares, but not amounts.</p><ul class="clean"><li><b>Safe:</b> <i>Radio accounted for a smaller share of listening in 2024 than in 2010.</i></li><li><b>Not safe:</b> <i>Fewer people listened to the radio in 2024.</i> If total listening grew, the number of radio listeners might have risen.</li><li><b>Safe:</b> <i>The proportion of lunches bought as sandwiches fell.</i></li><li><b>Not safe:</b> <i>Fewer sandwiches were sold.</i></li></ul>${note('If a pie chart does give totals (for example “Total: 2 million”), then you can talk about amounts. Most don’t.')}<div class="clear"></div>${take('Write “share” or “proportion”, not “more” or “fewer”, unless the chart gives the totals.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the music charts in Step 1.</p><div data-act="c3-amt"></div>`}),

sp('c3-s4','Points and multiples',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Points and multiples</h2><p>There are two ways to say how big a change in share was. Choose the one that shows the change most clearly.</p><ul class="clean"><li><b>${T('percentage point','Percentage points')}</b> for the difference: <i>The share of home-made lunches fell from 45% to 30%, a drop of 15 percentage points.</i></li><li><b>Multiples</b> for big relative changes: <i>The share of delivered takeaways quadrupled, from 5% to 20%.</i></li><li><b>Fractions of the old share:</b> <i>The share of workers who skipped lunch halved.</i></li></ul>${chart('lunch')}${mistake('<s>Home-made lunches fell by 15%.</s> From 45% to 30% is a fall of 15 <i>percentage points</i>.')}${take('Percentage points for the difference; doubled, quadrupled or halved for big relative changes.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the lunch charts on the left page.</p><div data-act="c3-pp1"></div><div data-act="c3-pp2" style="margin-top:14px"></div><div data-act="c3-pp3" style="margin-top:14px"></div><div data-gate="c3-pp3" hidden style="margin-top:16px"><div data-act="c3-build"></div></div>`}),

sp('c3-s5','Chapter challenge: compare the two pies',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph that compares the two lunch pies. Describe the changes in share, and report any combined share.</p>${taskbox('The charts below show what office workers in one city had for lunch on weekdays in 2004 and 2024.')}${chart('lunch2')}${note('Two options grew fast and ended with the same share. Together they made up a big part of the 2024 pie.')}<ul class="clean" style="font-size:15px"><li>Five sentences.</li><li>Shares, not amounts.</li><li>Percentage points once, and a multiple once.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Follow one category across the pies, then describe its change in share.','Rank every pie: a change at the top belongs in the overview.','A pie shows shares, not amounts. Write “a smaller share”, not “fewer”, unless totals are given.','Use percentage points for the difference, and doubled, quadrupled or halved for big relative changes.']})
];

const acts={
'c3-ch1':{type:'choice',level:'Guided',skill:'Change in share',decision:'Between 2010 and 2024, the share of streaming ___.',prompt:'10% in 2010, 72% in 2024.',
  opts:[{t:'rose from a tenth to almost three-quarters',ok:1,why:'10% is a tenth, and 72% is just under three-quarters (75%).'},{t:'rose by 62%',why:'The figures are percentages, so the difference is 62 percentage points.'},{t:'doubled',why:'From 10% to 72% is more than seven times as big.'}]},
'c3-ch2':{type:'choice',level:'Guided',skill:'Change in share',decision:'Between 2010 and 2017, the share of CDs and vinyl ___.',prompt:'45% in 2010, 20% in 2017.',
  opts:[{t:'more than halved',ok:1,why:'Half of 45% is 22.5%, and 20% is below that.'},{t:'fell slightly',why:'A fall of 25 points is not slight.'},{t:'halved exactly',why:'Half of 45% is 22.5%, not 20%.'}]},
'c3-ch3':{type:'choice',level:'Guided',skill:'Change in share',decision:'Downloads ___ by 2024.',prompt:'30% in 2010, 25% in 2017, 8% in 2024.',
  opts:[{t:'fell sharply to just 8%',ok:1,why:'After a small fall to 25%, the share dropped to 8% by 2024: the sharpest fall came in the second period.'},{t:'remained stable',why:'From 30% to 8% is a large fall.'},{t:'rose to 25%',why:'25% in 2017 was lower than 30% in 2010.'}]},
'c3-rank':{type:'binary',level:'Supported',skill:'Ranking',decision:'True or false?',labels:['True','False'],
  items:[{t:'CDs and vinyl were the most popular format in 2010.',a:0,right:'45%, the largest segment in 2010.',wrong:'It is true: 45% was the largest share in 2010.'},
         {t:'Streaming was already the largest category in 2017.',a:0,right:'45% in 2017, ahead of downloads (25%).',wrong:'It is true: streaming had 45% in 2017, the largest share.'},
         {t:'Downloads overtook CDs and vinyl by 2017.',a:0,right:'25% against 20% in 2017. In 2010, CDs had led with 45% to 30%.',wrong:'It is true: in 2017 downloads had 25% and CDs 20%.'},
         {t:'Radio’s share fell in each period.',a:1,right:'It fell from 15% to 10%, then stayed at 10%.',wrong:'Look again: 15%, then 10%, then 10%. It didn’t fall in the second period.'},
         {t:'Streaming overtook downloads between 2017 and 2024.',a:1,right:'Streaming was already ahead in 2017: 45% against 25%.',wrong:'Check 2017: streaming had 45% and downloads 25%. The overtaking happened before 2017.'}]},
'c3-lead':{type:'choice',level:'Supported',skill:'A new leader',decision:'Which sentence reports the change at the top accurately?',
  opts:[{t:'By 2017, streaming had overtaken CDs and vinyl as the most popular way to listen to music.',ok:1,why:'The change at the top, with the right timing: streaming led in 2017 and 2024, CDs in 2010.'},{t:'In 2024, streaming became the most popular way to listen to music.',why:'Streaming was already the most popular in 2017.'},{t:'Streaming was always the most popular way to listen to music.',why:'In 2010 it was the least popular, at 10%.'}]},
'c3-amt':{type:'binary',level:'Supported',skill:'Shares, not amounts',decision:'Can you say this from the music pies alone?',prompt:'The pies show shares. They don’t give totals.',labels:['Yes','No'],
  items:[{t:'Radio accounted for a smaller share of listening in 2024 than in 2010.',a:0,right:'15% then 10%: a statement about shares.',wrong:'You can say this: it compares shares, 15% and 10%.'},
         {t:'Fewer people listened to the radio in 2024 than in 2010.',a:1,right:'Right. Without the total, a smaller share doesn’t prove a smaller number.',wrong:'The pies don’t give totals. If total listening grew, radio’s audience might have grown too.'},
         {t:'Streaming was the most common way to listen in 2024.',a:0,right:'72%, the largest share.',wrong:'You can say this: 72% was the largest share.'},
         {t:'People bought fewer CDs in 2017 than in 2010.',a:1,right:'Right. The pies show shares of listening, not sales.',wrong:'The pies show shares of listening. They say nothing about how many CDs were bought.'}]},
'c3-pp1':{type:'choice',level:'Supported',skill:'Percentage points',decision:'The share of home-made lunches fell from 45% to 30%, a drop of 15 ___.',
  opts:[{t:'percentage points',ok:1,why:'The difference between two percentages is in percentage points.'},{t:'per cent',why:'A 15% fall from 45% would end at about 38%.'},{t:'lunches',why:'The pies show shares, not numbers of lunches.'}]},
'c3-pp2':{type:'choice',level:'Supported',skill:'Multiples',decision:'The share of delivered takeaways ___, from 5% to 20%.',
  opts:[{t:'quadrupled',ok:1,why:'20 ÷ 5 = 4.'},{t:'doubled',why:'Double 5% is 10%.'},{t:'rose by 15%',why:'The difference is 15 percentage points, and “quadrupled” shows the size more clearly.'}]},
'c3-pp3':{type:'choice',level:'Supported',skill:'Fractions of the old share',decision:'The share of workers who had no lunch ___, from 10% to 5%.',
  opts:[{t:'halved',ok:1,why:'5% is half of 10%.'},{t:'fell by half a percentage point',why:'The fall was 5 percentage points: the share halved.'},{t:'fell slightly',why:'Halving is a big relative change, even if the figures are small.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'A complete comparison',decision:'Build one accurate sentence about cafés and restaurants.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['The proportion of workers','who ate in a café or restaurant','doubled','between 2004 and 2024,','from 10%','to 20%.'],
  distract:[{t:'More workers ate in a café',why:'The pies show shares, not numbers of workers.',fix:'The proportion of workers who ate in a café'},{t:'rose by 10%',why:'From 10% to 20% is 10 percentage points, and “doubled” is clearer.',fix:'doubled'}],
  right:'Shares, not amounts; a multiple; the period and both figures.',orderMsg:'All the right pieces, but check the order: who, what, the change, the period, then the figures.',incompleteMsg:'Good so far, but incomplete. Add the period and both figures.'},
'c3-write':{type:'write',level:'Independent',skill:'Comparing two pies',decision:'Write one body paragraph comparing the two lunch pies.',prompt:'Five sentences. Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Home-made lunches remained…'}],
  checks:[{t:'You said home-made lunches stayed the largest share.',fix:'Start with the largest share: home-made lunches, in both years.',fn:v=>/home/i.test(v.a)},
          {t:'You used percentage points.',fix:'Use percentage points once: home-made lunches fell by 15 percentage points.',fn:v=>/percentage point/i.test(v.a)},
          {t:'You used a multiple.',fix:'Use a multiple once: doubled, quadrupled or halved.',fn:v=>/(doubl|quadrupl|tripl|halv|twice|four times|fourfold)/i.test(v.a)},
          {t:'You wrote about shares, not amounts.',fix:'The pies show shares. Replace “more workers” or “fewer workers” with “a bigger share of workers” or “the proportion of workers”.',fn:v=>v.a.trim()&&!/\b(more|fewer|less) (workers|people|lunches|sandwiches)\b/i.test(v.a)},
          {t:'You reported the two fast-growing options.',fix:'Report the café or restaurant and the delivered takeaway: both rose to 20%.',fn:v=>/(café|cafe|restaurant)/i.test(v.a)&&/(takeaway|deliver)/i.test(v.a)},
          {t:'You gave figures with %.',fix:'Give figures with %.',fn:v=>(v.a.match(/\d+\s*(%|per ?cent)/gi)||[]).length>=3}],
  modelTitle:'My model paragraph',
  model:`<p>Home-made lunches remained the most common choice, <button type="button" class="hl" data-n="0">but their share fell from 45% in 2004 to 30% in 2024, a drop of 15 percentage points</button>. Bought sandwiches also became slightly less popular, falling from 30% to 25%. By contrast, <button type="button" class="hl" data-n="1">the share of workers who ate in a café or restaurant doubled</button>, from 10% to 20%, while the share of delivered takeaways grew even faster, <button type="button" class="hl" data-n="2">quadrupling from 5% to 20%</button>. <button type="button" class="hl" data-n="3">As a result, by 2024 these two options together accounted for 40% of weekday lunches.</button> Meanwhile, the proportion of workers who skipped lunch <button type="button" class="hl" data-n="4">halved</button>, to just 5%.</p>`,
  notes:['Percentage points for the difference between two shares.','“The share of workers”, not “more workers”: the pies don’t give totals.','A multiple shows the size of the change better than “rose by 15 points”.','A combined share: 20% + 20% = 40%. It shows the examiner you can see the pattern.','“Halved” describes a big relative change in a small share.'],
  self:['I followed each category across both pies.','I wrote about shares, not amounts.','I used percentage points and a multiple accurately.','I reported a combined share.'],revise:1}
};

const gloss={
  'percentage point':{term:'percentage point',def:'The difference between two percentages. From 45% to 30% is a fall of 15 percentage points, not 15%.',path:'M60,80 V20 H100 V80 M140,80 V40 H180 V80',ex:'“The share of home-made lunches fell by 15 percentage points.”'},
  'overtook':{term:'overtook / had overtaken',def:'Became larger than a segment that had been larger. “By + year + had overtaken” shows it was complete by then.',path:'M120,45 L120,7 A38,38 0 1,1 90,68 Z',ex:'“By 2017, streaming had overtaken CDs and vinyl.”'},
  'joint':{term:'joint',def:'Sharing the same position: joint second means equal second.',path:'M120,45 L120,7 A38,38 0 0,1 156,33 Z M120,45 L156,33 A38,38 0 0,1 153,64 Z',ex:'“Radio and CDs were joint second, at 10% each.”'},
  '-fold':{term:'doubled, tripled, quadrupled, -fold',def:'Became two, three or four times as large. For bigger multiples, use -fold: a sevenfold rise. Check by dividing.',path:'M40,80 V65 H70 V80 M130,80 V20 H160 V80',ex:'“The share of delivered takeaways quadrupled, from 5% to 20%.”'}
};

const retrieval={
 'c3-s1':[{q:'10% → 72% is…',opts:[{t:'from a tenth to almost three-quarters',ok:1,why:'72% is just under 75%.'},{t:'a rise of 62%',why:'62 percentage points.'}]}],
 'c3-s2':[{q:'Streaming led in 2017 and 2024. When did it become the largest?',opts:[{t:'By 2017',ok:1,why:'It was already ahead in 2017.'},{t:'In 2024',why:'Check every pie.'}]}],
 'c3-s3':[{q:'Radio’s share fell. Can you say fewer people listened?',opts:[{t:'No, the pies don’t give totals',ok:1,why:'Shares are not amounts.'},{t:'Yes',why:'The total might have grown.'}]}],
 'c3-s4':[{q:'5% → 20% is…',opts:[{t:'quadrupled',ok:1,why:'20 ÷ 5 = 4.'},{t:'doubled',why:'Double 5% is 10%.'}]},{q:'45% → 30% is a fall of…',opts:[{t:'15 percentage points',ok:1,why:'The difference between two percentages.'},{t:'15%',why:'Use percentage points.'}]}],
 'c3-s5':[{q:'Café 20% + takeaway 20% in 2024 is…',opts:[{t:'two-fifths of lunches',ok:1,why:'40%.'},{t:'the majority of lunches',why:'40% is less than half.'}]}]
};

const minitest=[
 {q:'45% → 20%. Which is accurate?',opts:[{t:'The share more than halved.',ok:1,why:'Half of 45 is 22.5.'},{t:'The share fell slightly.',why:'25 points is not slight.'},{t:'The share halved exactly.',why:'Half would be 22.5%.'}],sp:'c3-s1'},
 {q:'Which subject is best for a pie chart sentence?',opts:[{t:'the share of streaming',ok:1,why:'Shares, not amounts.'},{t:'the number of streaming',why:'Pies don’t give numbers.'},{t:'the blue part',why:'That describes the picture.'}],sp:'c3-s1'},
 {q:'CDs led in 2010; streaming led in 2017 and 2024. What belongs in the overview?',opts:[{t:'Streaming overtook CDs and vinyl as the most popular format.',ok:1,why:'A change at the top.'},{t:'Radio was 10% in 2024.',why:'A detail for the body.'},{t:'Nothing about ranking',why:'A new leader is a key feature.'}],sp:'c3-s2'},
 {q:'Two segments both have 10%. Which phrase fits?',opts:[{t:'joint second',ok:1,why:'Equal position.'},{t:'both second and third',why:'They share one position.'},{t:'the same second',why:'Not natural English.'}],sp:'c3-s2'},
 {q:'The pies give no totals. Which sentence is safe?',opts:[{t:'Radio accounted for a smaller share of listening.',ok:1,why:'Shares only.'},{t:'Fewer people listened to the radio.',why:'That is an amount.'},{t:'Radio lost listeners.',why:'That is an amount.'}],sp:'c3-s3'},
 {q:'When can you talk about amounts from a pie chart?',opts:[{t:'When the chart gives the totals',ok:1,why:'Then you can calculate amounts.'},{t:'Always',why:'Without totals you can’t.'},{t:'When the share falls',why:'A share is still not an amount.'}],sp:'c3-s3'},
 {q:'10% → 5%. Which is accurate?',opts:[{t:'The share halved.',ok:1,why:'5 is half of 10.'},{t:'The share fell by half a point.',why:'It fell by 5 points.'},{t:'The share fell slightly.',why:'Halving is a big relative change.'}],sp:'c3-s4'},
 {q:'45% → 30%. Which is accurate?',opts:[{t:'a fall of 15 percentage points',ok:1,why:'The difference between two percentages.'},{t:'a fall of 15%',why:'Use percentage points.'},{t:'a fall of half',why:'Half of 45 is 22.5.'}],sp:'c3-s4'}
];

const cannow=[['Describe how a share changed across two or three pies','c3-s1'],['Report a change in ranking with the right timing','c3-s2'],['Write about shares, not amounts, when totals aren’t given','c3-s3'],['Use percentage points and multiples accurately','c3-s4'],['Write a paragraph comparing two pies','c3-s5']];
addChapter({n:3,spreads,acts,gloss,charts:{music:C.music,lunch:C.lunch,lunch2:Object.assign({},C.lunch,{id:'ch-lunch2'})},retrieval,minitest,cannow});
})();
