/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 4 · SELECTING AND GROUPING SEGMENTS
   ACTIVITY IDS (type · level)
     c4-pick    binary    Supported    Step 1  Worth reporting on its own?
     c4-small   choice    Supported    Step 1  The small segments
     c4-group   sort      Supported    Step 2  Group the sectors
     c4-gsent   choice    Supported    Step 2  The grouped sentence
     c4-comb1..3 choice   Supported    Step 3  Combined shares
     c4-other   binary    Supported    Step 4  Handling “Other”
     c4-write   write     Independent  Step 5  Two grouped paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=PIE;
const P='Chapter 4',CT='Selecting and Grouping Segments',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:4,title:CT,lede:'Some pie charts have six, eight or ten segments, and two pies can mean twenty figures. Describing every one turns your answer into a list. In this chapter I’ll show you how to choose the segments that matter, group the rest and report combined shares.',
  outcomes:['decide which segments to describe on their own','group segments by meaning, for example production and service sectors',`report ${T('combined')} shares accurately: together, ${T('taken together')}`,`handle small segments and “Other” with ${T('the remaining')}`],
  illus:illus([28,21,14,11,8,7,6,5]),
  steps:[[1,'c4-s1','Too many segments','Choose what to describe','Discover'],[2,'c4-s2','Group by meaning','Segments that belong together','Understand'],[3,'c4-s3','Combined shares','Together, taken together','Understand'],[4,'c4-s4','Small segments and “Other”','The remaining few','Practise'],[5,'c4-s5','Chapter challenge','Two grouped paragraphs','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Too many segments',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Too many segments</h2>${vid({title:'Too many segments',len:'90 seconds',script:['Show the waste pie: eight segments. Ask: how many deserve their own sentence?','Describe the two largest individually: food and paper.','Group the four smallest into one sentence: together just over a quarter.','Finish: big segments get detail, small segments get grouped.']})}<p>This pie has eight segments. Give the largest ones their own detail, and group the small ones.</p>${chart('waste')}<ul class="clean" style="margin-top:10px"><li><b>The largest, on their own:</b> <i>Food waste made up the largest share, at 28%, followed by paper at 21%.</i></li><li><b>The middle:</b> <i>Plastic and garden waste accounted for 14% and 11% respectively.</i></li><li><b>The smallest, grouped:</b> <i>The remaining four types together made up just over a quarter of the total (26%).</i></li></ul>${note('A good rule: if a segment is under about 10%, it usually doesn’t need its own sentence.')}<div class="clear"></div>${take('Detail for the big segments; one grouped sentence for the small ones.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the waste chart on the left page.</p><div data-act="c4-pick"></div><div data-act="c4-small" style="margin-top:16px"></div>`}),

sp('c4-s2','Group by meaning',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Group by meaning</h2>${vid({title:'Grouping by meaning',len:'2 minutes',script:['Show the employment pies: six sectors, two years.','Ask: which sectors belong together? Manufacturing, agriculture and construction make things. Retail, business and the public sector provide services.','Add up each group in each year: 54% to 26%, and 46% to 74%.','Finish: a group with a clear name and a combined share makes a strong topic sentence.']})}<p>Sometimes the categories fall into natural groups. Name the group, and give its combined share.</p>${chart('jobs')}<ul class="clean" style="margin-top:10px"><li><b>Production:</b> manufacturing, agriculture and construction</li><li><b>Services:</b> retail, business and finance, and the public sector</li></ul>${insight('One grouped sentence','Taken together, the share of jobs in the three production sectors fell from just over half of all jobs (54%) to about a quarter (26%).')}${take('Look for groups with a shared meaning, name them, and add up their shares.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the employment charts on the left page.</p><div data-act="c4-group"></div><div data-act="c4-gsent" style="margin-top:16px"></div>`}),

sp('c4-s3','Combined shares',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Combined shares</h2><p>Adding segments together often reveals the real story. Check your sum, then describe it with a fraction.</p><ul class="clean"><li><b>together</b> after the subject: <i>Food and paper together made up just under half of all waste (49%).</i></li><li><b>${T('taken together')}</b> at the start: <i>Taken together, plastic and garden waste accounted for exactly a quarter.</i></li><li><b>${T('combined')}</b>: <i>The combined share of glass, metal and textiles was 19%.</i></li></ul>${mistake('<s>Food and paper together made up the majority of waste.</s> 28% + 21% = 49%: just under half, not a majority.')}${take('Add up first. Then choose an accurate fraction for the combined share.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the waste chart in Step 1.</p><div data-act="c4-comb1"></div><div data-act="c4-comb2" style="margin-top:14px"></div><div data-act="c4-comb3" style="margin-top:14px"></div>`}),

sp('c4-s4','Small segments and “Other”',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Small segments and “Other”</h2><p>Many pies have a segment called “Other”. It mixes several categories, so it tells the reader little on its own.</p><ul class="clean"><li><b>Mention it, briefly:</b> <i>The remaining 7% was made up of other types of waste.</i></li><li><b>Group it with the small segments:</b> <i>${T('the remaining','The remaining')} four categories, including “Other”, together accounted for 26%.</i></li><li><b>Don’t put it in the overview</b>, unless it is one of the largest segments.</li><li><b>Don’t guess</b> what “Other” contains.</li></ul>${note('If “Other” is large, say so: it means the chart leaves part of the total unexplained.')}<div class="clear"></div>${take('Mention “Other” briefly, group it with the small segments, and never build your overview on it.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-other"></div>`}),

sp('c4-s5','Chapter challenge: two grouped paragraphs',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the two body paragraphs for this task: one for the production sectors and one for the service sectors. Give each group’s combined share.</p>${taskbox('The charts below show the proportion of workers employed in six sectors in one country in 1980 and 2020.')}${chart('jobs2')}${note('Start each paragraph with the group’s overall change. Then give the details of the biggest changes inside it.')}<ul class="clean" style="font-size:15px"><li>Paragraph 1: manufacturing, agriculture, construction.</li><li>Paragraph 2: retail, business and finance, public sector.</li><li>A combined share for each group.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Give the large segments their own detail and group the small ones.','Look for groups with a shared meaning, name them and add up their shares.','Add up first, then choose an accurate fraction for the combined share.','Mention “Other” briefly, group it with the small segments, and keep it out of the overview.']})
];

const acts={
'c4-pick':{type:'binary',level:'Supported',skill:'Selecting segments',decision:'Does this segment need its own sentence?',labels:['Its own sentence','Group it'],
  items:[{t:'Food: 28%',a:0,right:'The largest segment always gets its own detail.',wrong:'The largest segment needs its own sentence.'},
         {t:'Paper: 21%',a:0,right:'The second largest: worth its own detail, or a sentence shared with food.',wrong:'At 21%, paper is one of the two biggest segments.'},
         {t:'Metal: 6%',a:1,right:'A small segment: group it with the other small ones.',wrong:'At 6%, metal is small. Group it.'},
         {t:'Textiles: 5%',a:1,right:'The smallest segment: group it.',wrong:'At 5%, textiles is the smallest segment. Group it.'},
         {t:'Glass: 8%',a:1,right:'Under 10%: group it.',wrong:'At 8%, glass is small enough to group.'}]},
'c4-small':{type:'choice',level:'Supported',skill:'Grouping small segments',decision:'Which sentence handles the four smallest segments best?',prompt:'Glass 8%, Other 7%, metal 6%, textiles 5%.',
  opts:[{t:'The remaining four categories together accounted for just over a quarter of all waste (26%).',ok:1,why:'One sentence, an accurate sum (8 + 7 + 6 + 5 = 26) and a fraction.'},{t:'Glass was 8%, Other was 7%, metal was 6% and textiles was 5%.',why:'Accurate, but a list of small figures with no point.'},{t:'The remaining categories made up the majority of waste.',why:'26% is not a majority.'}]},
'c4-group':{type:'sort',level:'Supported',skill:'Grouping by meaning',decision:'Which group does each sector belong to?',cats:['Production','Services'],
  items:[{w:'Manufacturing',c:0,m:'makes goods: production.'},{w:'Agriculture',c:0,m:'produces food: production.'},{w:'Construction',c:0,m:'builds things: production.'},{w:'Retail',c:1,m:'sells to customers: a service.'},{w:'Business and finance',c:1,m:'provides professional services.'},{w:'Public sector',c:1,m:'provides public services such as health and education.'}]},
'c4-gsent':{type:'choice',level:'Supported',skill:'The grouped sentence',decision:'Which sentence groups the data best?',
  opts:[{t:'Taken together, the share of jobs in the three service sectors grew from just under half of all jobs (46%) to almost three-quarters (74%).',ok:1,why:'A named group, a combined share for each year, and accurate fractions: 14 + 12 + 20 = 46, and 16 + 24 + 34 = 74.'},{t:'Retail rose from 14% to 16%, business and finance from 12% to 24%, and the public sector from 20% to 34%.',why:'Accurate, but three separate changes with no group or total.'},{t:'The service sectors took over the economy.',why:'Vague and dramatic, with no figures.'}]},
'c4-comb1':{type:'choice',level:'Supported',skill:'Combined shares',decision:'Food and paper together made up ___ of all waste.',prompt:'28% + 21%.',
  opts:[{t:'just under half',ok:1,why:'28 + 21 = 49: just under half.'},{t:'the majority',why:'49% is less than half.'},{t:'about a third',why:'A third is 33%; 49% is much more.'}]},
'c4-comb2':{type:'choice',level:'Supported',skill:'Combined shares',decision:'Taken together, plastic and garden waste accounted for ___.',prompt:'14% + 11%.',
  opts:[{t:'exactly a quarter',ok:1,why:'14 + 11 = 25.'},{t:'about a third',why:'25% is a quarter.'},{t:'just over a fifth',why:'A fifth is 20%; 25% is a quarter.'}]},
'c4-comb3':{type:'choice',level:'Supported',skill:'Combined shares',decision:'Which sentence is accurate?',
  opts:[{t:'Paper, plastic, glass and metal together made up just under half of the total.',ok:1,why:'21 + 14 + 8 + 6 = 49.'},{t:'Paper, plastic, glass and metal together made up more than half of the total.',why:'21 + 14 + 8 + 6 = 49, just under half.'},{t:'Paper, plastic, glass and metal together made up a third of the total.',why:'49% is much more than a third.'}]},
'c4-other':{type:'binary',level:'Supported',skill:'Handling “Other”',decision:'Good way to handle “Other”, or not?',prompt:'In the waste chart, “Other” is 7%.',labels:['Good','Not good'],
  items:[{t:'Group it with the other small segments: “the remaining four categories, including Other, made up 26%”.',a:0,right:'Brief, accurate and grouped.',wrong:'This is a good approach: brief and grouped.'},
         {t:'Start the overview with it: “Overall, 7% of waste was Other.”',a:1,right:'Right: the overview is for the big picture, and “Other” is a small mix.',wrong:'“Other” is small and mixed. It doesn’t belong in the overview.'},
         {t:'Explain what it probably contains: “Other was mostly electronics.”',a:1,right:'Right: the chart doesn’t say, so this is a guess.',wrong:'The chart doesn’t say what “Other” contains. Don’t guess.'},
         {t:'Mention it in one short phrase: “with other types of waste making up the remaining 7%”.',a:0,right:'Brief and accurate.',wrong:'This is fine: one short, accurate phrase.'}]},
'c4-write':{type:'write',level:'Independent',skill:'Grouped paragraphs',decision:'Write two body paragraphs about the employment charts.',prompt:'One paragraph for each group. Then check your writing.',
  fields:[{k:'p1',label:'Body paragraph 1: production sectors',rows:6,ph:'The three production sectors…'},{k:'p2',label:'Body paragraph 2: service sectors',rows:6,ph:'By contrast, …'}],
  checks:[{t:'Paragraph 1 covers the three production sectors.',fix:'Paragraph 1 needs manufacturing, agriculture and construction.',fn:v=>/manufactur/i.test(v.p1)&&/agricult/i.test(v.p1)&&/construct/i.test(v.p1)},
          {t:'Paragraph 2 covers the three service sectors.',fix:'Paragraph 2 needs retail, business and finance, and the public sector.',fn:v=>/retail/i.test(v.p2)&&/(business|finance)/i.test(v.p2)&&/public/i.test(v.p2)},
          {t:'You gave a combined share for at least one group.',fix:'Add a combined share: the production sectors’ combined share fell from 54% to 26%, or the service sectors’ share rose from 46% to 74%.',fn:v=>/(54|26|46|74)\s*(%|per ?cent)/i.test(v.p1+' '+v.p2)&&/(together|combined|taken together|in total|as a group)/i.test(v.p1+' '+v.p2)},
          {t:'You described shares, not numbers of workers.',fix:'The pies show shares. Write “a smaller share of jobs”, not “fewer workers”.',fn:v=>!/\b(more|fewer|less) (workers|people|jobs)\b/i.test(v.p1+' '+v.p2)},
          {t:'You reported that the public sector became the largest.',fix:'Report the change at the top: the public sector became the largest employer.',fn:v=>/public/i.test(v.p2)&&/(largest|biggest|most|overt)/i.test(v.p2)},
          {t:'You linked the two paragraphs with a contrast.',fix:'Start paragraph 2 with a contrast: By contrast, In contrast, However.',fn:v=>/^\s*(by contrast|in contrast|however|on the other hand|conversely|meanwhile)/i.test(v.p2)}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span><button type="button" class="hl" data-n="0">The three production sectors all accounted for a smaller share of jobs in 2020 than in 1980.</button> Manufacturing, which had been the largest employer with 30% of all workers, saw its share <button type="button" class="hl" data-n="1">more than halve to 14%</button>, while agriculture’s share fell even more steeply in relative terms, from 15% to just 4%. Construction changed little, at 9% and 8%. <button type="button" class="hl" data-n="2">Taken together, these sectors fell from just over half of all employment (54%) to about a quarter (26%).</button></p><p><span class="plabel">Body 2</span><button type="button" class="hl" data-n="3">By contrast,</button> all three service sectors accounted for a larger share of jobs. <button type="button" class="hl" data-n="4">The public sector became the largest employer</button>, its share rising from a fifth (20%) to just over a third (34%), while business and finance doubled its share, from 12% to 24%. Retail’s share grew only slightly, from 14% to 16%. As a result, services accounted for almost three-quarters of all jobs by 2020 (74%).</p>`,
  notes:['A topic sentence for the group, about shares rather than numbers of workers.','Half of 30% is 15%, and 14% is below that, so “more than halve” is accurate.','The combined share, with fractions: 54% is just over half, 26% is about a quarter.','“By contrast” links the two groups, which moved in opposite directions.','The change at the top: the public sector (34%) overtook manufacturing, which had led with 30% in 1980.'],
  self:['Each paragraph is about one named group.','I gave a combined share for each group, and checked the sums.','I wrote about shares, not numbers of workers.','I reported the change at the top.'],revise:1}
};

const gloss={
  'combined':{term:'combined',def:'Added together. Check the sum before you describe it.',path:'M120,45 L120,7 A38,38 0 0,1 156,57 Z',ex:'“The combined share of glass, metal and textiles was 19%.”'},
  'taken together':{term:'taken together',def:'Considered as one group. It usually starts the sentence, followed by a comma.',path:'M120,45 L120,7 A38,38 0 0,1 120,83 Z',ex:'“Taken together, the service sectors accounted for almost three-quarters of all jobs.”'},
  'the remaining':{term:'the remaining',def:'The ones that are left after you have described the main segments. A neat way to group small segments.',path:'M120,45 L83,52 A38,38 0 0,1 120,7 Z',ex:'“The remaining four categories together made up 26%.”'},
  'sector':{term:'sector',def:'One part of the economy, such as manufacturing, agriculture or retail.',path:'M120,45 L120,7 A38,38 0 0,1 153,26 Z',ex:'“The public sector became the largest employer.”'}
};

const retrieval={
 'c4-s1':[{q:'A segment of 6%. What do you usually do?',opts:[{t:'Group it with the other small ones',ok:1,why:'Under about 10%.'},{t:'Give it its own paragraph',why:'Too much space for a small share.'}]}],
 'c4-s2':[{q:'Manufacturing, agriculture and construction are…',opts:[{t:'production sectors',ok:1,why:'They make things.'},{t:'service sectors',why:'Services include retail and finance.'}]}],
 'c4-s3':[{q:'28% + 21% = 49% is…',opts:[{t:'just under half',ok:1,why:'Below 50%.'},{t:'the majority',why:'The majority is over half.'}]}],
 'c4-s4':[{q:'Should “Other” (7%) go in the overview?',opts:[{t:'No',ok:1,why:'It is small and mixed.'},{t:'Yes',why:'The overview is for the big picture.'}]}],
 'c4-s5':[{q:'Production 54% → 26%. Which is accurate?',opts:[{t:'from just over half to about a quarter',ok:1,why:'54% and 26%.'},{t:'from the vast majority to a third',why:'54% is not a vast majority.'}]}]
};

const minitest=[
 {q:'A pie has eight segments. What should you do?',opts:[{t:'Describe the large ones and group the small ones',ok:1,why:'Detail where it matters.'},{t:'Describe all eight equally',why:'That is a list.'},{t:'Describe only the largest',why:'Group the rest, don’t ignore them.'}],sp:'c4-s1'},
 {q:'Glass 8%, Other 7%, metal 6%, textiles 5%. Together they make…',opts:[{t:'just over a quarter',ok:1,why:'26%.'},{t:'about a third',why:'A third is 33%.'},{t:'a fifth',why:'A fifth is 20%.'}],sp:'c4-s1'},
 {q:'Which pair belongs to the same group?',opts:[{t:'Retail, and business and finance',ok:1,why:'Both are services.'},{t:'Retail and manufacturing',why:'Service and production.'},{t:'Agriculture and the public sector',why:'Production and service.'}],sp:'c4-s2'},
 {q:'Services: 14 + 12 + 20 in 1980. The combined share was…',opts:[{t:'46%',ok:1,why:'The sum.'},{t:'54%',why:'That is production.'},{t:'20%',why:'That is one sector.'}],sp:'c4-s2'},
 {q:'14% + 11% is…',opts:[{t:'exactly a quarter',ok:1,why:'25%.'},{t:'just over a fifth',why:'25% is a quarter.'},{t:'nearly a third',why:'A third is 33%.'}],sp:'c4-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'Food and paper together made up just under half of all waste.',ok:1,why:'49%.'},{t:'Food and paper together made up the majority of waste.',why:'49% is not a majority.'},{t:'Food and paper together made up a quarter of waste.',why:'49% is nearly half.'}],sp:'c4-s3'},
 {q:'How should you treat a small “Other” segment?',opts:[{t:'Mention it briefly or group it',ok:1,why:'It is small and mixed.'},{t:'Explain what it contains',why:'The chart doesn’t say.'},{t:'Make it your main point',why:'It isn’t one.'}],sp:'c4-s4'},
 {q:'Manufacturing 30% → 14%. Which is accurate?',opts:[{t:'Its share more than halved.',ok:1,why:'Half of 30 is 15.'},{t:'Its share halved exactly.',why:'Half would be 15%.'},{t:'Fewer people worked in manufacturing.',why:'Shares, not numbers.'}],sp:'c4-s5'}
];

const cannow=[['Decide which segments need their own sentence','c4-s1'],['Group segments by meaning and name the group','c4-s2'],['Calculate and describe a combined share accurately','c4-s3'],['Handle small segments and “Other” briefly','c4-s4'],['Write two grouped paragraphs for two pies','c4-s5']];
addChapter({n:4,spreads,acts,gloss,charts:{waste:C.waste,jobs:C.jobs,jobs2:Object.assign({},C.jobs,{id:'ch-jobs2'})},retrieval,minitest,cannow});
})();
