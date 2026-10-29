/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 2 · DESCRIBING PROPORTIONS
   ACTIVITY IDS (type · level)
     c2-frac    binary    Guided       Step 1  Percentage to fraction
     c2-maj1..3 choice    Supported    Step 2  Majority or minority?
     c2-verb    choice    Supported    Step 3  Which verb?
     c2-fix     fix       Supported    Step 3  Fix the verb pattern
     c2-build   builder   Supported    Step 4  Build the sentence
     c2-vary    choice    Independent  Step 4  Which paragraph varies its language?
     c2-write   write     Independent  Step 5  Describe the visitors
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=PIE;
const P='Chapter 2',CT='Describing Proportions',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'A pie chart answer that repeats “X% … Y% … Z%” limits your Lexical Resource score. Examiners reward accurate variety: fractions, “the majority”, and verbs like “accounted for”. In this chapter I’ll show you how to describe a share in several accurate ways.',
  outcomes:[`turn percentages into accurate fractions: ${T('a third')}, just over a quarter`,`use ${T('the majority')} and ${T('a minority')} accurately`,`describe a share with ${T('accounted for')}, ${T('made up')} and represented`,'vary your language across a paragraph without losing accuracy'],
  illus:illus([34,26,18,12,4,6]),
  steps:[[1,'c2-s1','From percentages to fractions','A third, a quarter, a fifth','Discover'],[2,'c2-s2','Majority and minority','More than half, less than half','Understand'],[3,'c2-s3','Verbs for shares','Accounted for, made up','Understand'],[4,'c2-s4','Vary your language','The same idea, said differently','Practise'],[5,'c2-s5','Chapter challenge','Describe the visitors','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','From percentages to fractions',{
 left:`${head('Step 1 · Discover','Learn')}<h2>From percentages to fractions</h2>${vid({title:'From percentages to fractions',len:'90 seconds',script:['Show the holiday pie. Read the beach segment: 34%.','Ask: which fraction is closest? A third is 33.3%, so 34% is just over a third.','Do the same for 26% (just over a quarter) and 18% (just under a fifth).','Finish: the fraction must be accurate, and in the right direction.']})}<p>Fractions show the examiner you understand the size of a share, and they add variety. They must be accurate.</p><ul class="clean"><li><b>50%</b> half · <b>25%</b> a quarter · <b>75%</b> three-quarters</li><li><b>33%</b> ${T('a third')} · <b>67%</b> two-thirds</li><li><b>20%</b> a fifth, one in five · <b>10%</b> a tenth, one in ten</li><li><b>Close, not exact:</b> 34% is <i>just over a third</i>; 18% is <i>just under a fifth</i>.</li></ul>${chart('holiday')}${note('Give the fraction and the figure together the first time: “just over a third (34%)”.')}<div class="clear"></div>${take('Find the nearest fraction, then say whether the figure is just over or just under it.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the holiday chart on the left page.</p><div data-act="c2-frac"></div>`}),

sp('c2-s2','Majority and minority',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Majority and minority</h2>${vid({title:'Majority and minority',len:'90 seconds',script:['Write 60% on screen. Say: more than half is the majority.','Write 85%: the vast majority. Write 4%: a very small minority.','Show that beach and city breaks together make 60%.','Warn: “the majority of adults” takes a plural verb: were, not was.']})}<p>These phrases describe how a share relates to half of the total.</p><ul class="clean"><li><b>More than half:</b> ${T('the majority')}, most · <i>The majority of adults chose a beach or city holiday.</i></li><li><b>Far more than half</b> (about 80% or more): the vast majority</li><li><b>Less than half:</b> ${T('a minority')} · <b>very little:</b> a very small minority, a tiny fraction</li><li><b>Comparisons with a fraction:</b> fewer than one in five, more than a quarter</li></ul>${mistake('<s>The majority of adults was choosing a beach holiday.</s> Beach holidays alone were 34%, not a majority. And “the majority of adults” takes a plural verb: <i>were</i>, not <i>was</i>.')}${take('More than half: the majority. Far more: the vast majority. Less than half: a minority. Check the figure first.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the holiday chart in Step 1.</p><div data-act="c2-maj1"></div><div data-act="c2-maj2" style="margin-top:14px"></div><div data-act="c2-maj3" style="margin-top:14px"></div>`}),

sp('c2-s3','Verbs for shares',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Verbs for shares</h2><p>These verbs link a category to its share. Each has its own pattern.</p><ul class="clean"><li><b>${T('accounted for')}</b> + share: <i>Beach holidays accounted for 34% of all holidays.</i></li><li><b>${T('made up')}</b> + share: <i>City breaks made up just over a quarter of the total.</i></li><li><b>represented</b> + share: <i>Cruises represented only 4%.</i></li><li><b>X% of + people + verb:</b> <i>18% of adults chose the countryside.</i></li><li><b>was/were chosen by:</b> <i>Cruises were chosen by just 4% of adults.</i></li></ul>${note('“Accounted for” always needs “for”. “Made up” always needs “up”. Don’t use “comprised of”: write “made up” instead.')}<div class="clear"></div>${take('Accounted for, made up, represented: each needs its share straight after it. Learn the pattern, not just the word.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-verb"></div><div data-act="c2-fix" style="margin-top:16px"></div>`}),

sp('c2-s4','Vary your language',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Vary your language</h2>${vid({title:'Varying your language',len:'2 minutes',script:['Read a paragraph that uses “X% chose” four times.','Rewrite it with a fraction, a verb for shares and a comparison.','Show that every figure is still accurate.','Hand over to the sentence builder.']})}<p>One accurate idea can be expressed in several ways. Use a different pattern for each figure.</p><div class="oe-mistake"><span class="lab">Repetitive</span>34% chose a beach holiday. 26% chose a city break. 18% chose the countryside. 12% chose to visit family.</div><div class="oe-insight" style="margin-top:10px"><span class="lab">Varied</span>Beach holidays were the most popular choice, accounting for just over a third of all main holidays (34%). City breaks made up just over a quarter, while fewer than one in five adults chose the countryside. Visiting family represented about one in eight holidays.</div>${note('Vary the pattern, not the facts. Every fraction above matches the figure on the chart.')}<div class="clear"></div>${take('Fraction, verb for shares, comparison: three patterns, one idea each.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><p class="small">The museum visitors by age: 18 to 34, 31%; 35 to 54, 27%; under 18, 22%; 55 and over, 20%.</p><div data-act="c2-vary"></div></div>`}),

sp('c2-s5','Chapter challenge: describe the visitors',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph that describes the age of the museum’s visitors. Use fractions, a verb for shares and “the majority” or a combined share.</p>${taskbox('The chart below shows the age of visitors to a city museum last year.')}${chart('museumage')}${note('Two age groups together make well over half. That is worth reporting.')}<ul class="clean" style="font-size:15px"><li>Four sentences.</li><li>At least two fractions, each accurate.</li><li>One combined share.</li><li>No sentence that starts with a percentage.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Find the nearest fraction, and say whether the figure is just over or just under it.','More than half is the majority; far more is the vast majority; less than half is a minority.','“Accounted for” and “made up” need their prepositions, followed by the share.','Vary the pattern for each figure, but keep every fraction accurate.']})
];

const acts={
'c2-frac':{type:'binary',level:'Guided',skill:'Fractions',decision:'Which fraction describes each share accurately?',labels:['just over a third','just over a quarter','just under a fifth','about one in eight'],
  items:[{t:'Beach holidays: 34%',a:0,right:'A third is 33.3%, so 34% is just over a third.',wrong:'34% is closest to a third (33.3%), and slightly above it.'},
         {t:'City breaks: 26%',a:1,right:'A quarter is 25%, so 26% is just over a quarter.',wrong:'26% is closest to a quarter (25%), and slightly above it.'},
         {t:'Countryside holidays: 18%',a:2,right:'A fifth is 20%, so 18% is just under a fifth.',wrong:'18% is closest to a fifth (20%), and slightly below it.'},
         {t:'Visiting family: 12%',a:3,right:'One in eight is 12.5%, so 12% is about one in eight.',wrong:'12% is very close to one in eight (12.5%).'}]},
'c2-maj1':{type:'choice',level:'Supported',skill:'The majority',decision:'Beach holidays and city breaks together were chosen by ___ of adults.',prompt:'34% + 26%.',
  opts:[{t:'the majority',ok:1,why:'34% + 26% = 60%: more than half, so “the majority”. Three-fifths would also be accurate.'},{t:'the vast majority',why:'60% is a majority, but not a vast one. Save “vast” for about 80% or more.'},{t:'a minority',why:'60% is more than half.'}]},
'c2-maj2':{type:'choice',level:'Supported',skill:'Small shares',decision:'Cruises were chosen by ___ (4%).',
  opts:[{t:'a very small minority of adults',ok:1,why:'4% is a tiny share: a very small minority, or fewer than one in twenty.'},{t:'a quarter of adults',why:'A quarter is 25%.'},{t:'the majority of adults',why:'The majority would be more than 50%.'}]},
'c2-maj3':{type:'choice',level:'Supported',skill:'Comparing with a fraction',decision:'Countryside holidays were chosen by ___ (18%).',
  opts:[{t:'fewer than one in five adults',ok:1,why:'One in five is 20%, so 18% is fewer than one in five.'},{t:'more than a quarter of adults',why:'A quarter is 25%; 18% is less.'},{t:'about a third of adults',why:'A third is 33%.'}]},
'c2-verb':{type:'choice',level:'Supported',skill:'Verb patterns',decision:'Which sentence is correct?',
  opts:[{t:'City breaks made up just over a quarter of all main holidays.',ok:1,why:'“Made up” + share: correct.'},{t:'City breaks accounted just over a quarter of all main holidays.',why:'“Accounted” needs “for”: accounted for.'},{t:'City breaks were consisted of just over a quarter of all main holidays.',why:'“Consist of” means “contain”, and it isn’t used in the passive. Use “made up”.'}]},
'c2-fix':{type:'fix',level:'Supported',skill:'Verb patterns',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Beach holidays accounted 34% of all main holidays.',ok:/accounted for 34/i,bad:/accounted 34/i,hint:'“Accounted” needs a preposition before the share.',err:'accounted 34%',fix:'accounted for 34%',why:'The pattern is “accounted for + share”.',model:'Beach holidays accounted for 34% of all main holidays.'},
         {wrong:'City breaks made 26% of the total.',ok:/made up (26|just over a quarter)/i,bad:/made 26/i,hint:'“Made” on its own means “created”. Add a particle.',err:'made 26%',fix:'made up 26%',why:'“Made up” + share means “formed this part of the total”.',model:'City breaks made up 26% of the total.'},
         {wrong:'Cruises comprised of 4% of all main holidays.',ok:/(made up|accounted for|represented) (only |just )?4%|comprised (only |just )?4%/i,bad:/comprised of/i,hint:'Avoid “comprised of”. Use “made up”, “accounted for” or “represented”.',err:'comprised of 4%',fix:'made up 4%',why:'“Comprised of” is widely considered incorrect. “Made up” is safe.',model:'Cruises made up only 4% of all main holidays.'},
         {wrong:'Most of adults chose a beach holiday or a city break.',ok:/^most adults|the majority of adults|most of the adults/i,bad:/^most of adults/i,hint:'Use “most adults” or “the majority of adults”.',err:'most of adults',fix:'most adults / the majority of adults',why:'“Most of” needs “the”: most of the adults. Or simply “most adults”.',model:'Most adults chose a beach holiday or a city break.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'A varied sentence',decision:'Build an accurate sentence about beach holidays.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Beach holidays','were the most popular choice,','accounting for','just over a third','of all main holidays.'],
  distract:[{t:'accounting',why:'“Accounting” needs “for” before the share.',fix:'accounting for'},{t:'the vast majority',why:'34% is not a majority at all: it is just over a third.',fix:'just over a third'}],
  right:'The ranking, a verb for shares and an accurate fraction in one sentence.',orderMsg:'All the right pieces, but check the order: the category, its ranking, the verb, then the share.',incompleteMsg:'Good so far, but the sentence is incomplete. Add the verb and the share.'},
'c2-vary':{type:'choice',level:'Independent',skill:'Variety',decision:'Which paragraph varies its language best, while staying accurate?',
  opts:[{t:'The largest age group was 18 to 34, accounting for nearly a third of visitors. People aged 35 to 54 made up just over a quarter, while one in five visitors was 55 or over.',ok:1,why:'Three different patterns, and every fraction is accurate: 31% nearly a third, 27% just over a quarter, 20% one in five.'},
        {t:'31% were 18 to 34. 27% were 35 to 54. 22% were under 18. 20% were 55 or over.',why:'Accurate, but every sentence has the same pattern and starts with a figure.'},
        {t:'The vast majority of visitors were aged 18 to 34, while about half were aged 35 to 54.',why:'Varied, but inaccurate: 31% is not a vast majority, and 27% is not about half.'}]},
'c2-write':{type:'write',level:'Independent',skill:'A varied, accurate paragraph',decision:'Write one body paragraph about the museum’s visitors.',prompt:'Four sentences. Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'The largest group of visitors…'}],
  checks:[{t:'You identified the largest group: 18 to 34.',fix:'Start with the largest group: visitors aged 18 to 34 (31%).',fn:v=>/(18 to 34|18–34|18-34)/i.test(v.a)},
          {t:'You used at least two fractions.',fix:'Use two fractions, for example nearly a third and just over a quarter.',fn:v=>(v.a.match(/\b(half|third|quarter|fifth|tenth|one in (five|ten|four|three)|two-thirds|three-quarters)\b/gi)||[]).length>=2},
          {t:'You used a verb for shares.',fix:'Use “accounted for”, “made up” or “represented”.',fn:v=>/(accounted for|accounting for|made up|making up|represented|representing)/i.test(v.a)},
          {t:'You reported a combined share or a majority.',fix:'Combine two groups: 18 to 54 together made up well over half (58%).',fn:v=>/(together|combined|majority|over half|more than half|58)/i.test(v.a)},
          {t:'No sentence starts with a figure.',fix:'Rewrite any sentence that starts with a number. Start with the people instead.',fn:v=>v.a.trim()&&!/(^|[.!?]\s+)\d/.test(v.a.trim())},
          {t:'You gave figures with %.',fix:'Add at least one exact figure with %.',fn:v=>/\d+\s*(%|per ?cent)/i.test(v.a)}],
  modelTitle:'My model paragraph',
  model:`<p>The largest group of visitors was aged 18 to 34, <button type="button" class="hl" data-n="0">accounting for nearly a third (31%)</button> of the total. People aged 35 to 54 <button type="button" class="hl" data-n="1">made up just over a quarter (27%)</button>, <button type="button" class="hl" data-n="2">so together these two age groups represented well over half of all visitors</button>. The remaining visitors were split fairly evenly between the youngest and oldest groups: under-18s accounted for just over a fifth (22%), <button type="button" class="hl" data-n="3">while visitors aged 55 and over made up exactly one in five</button> (20%).</p>`,
  notes:['A verb for shares, a fraction and the exact figure in brackets. 31% is nearly a third (33.3%).','A different verb for the second group. 27% is just over a quarter.','A combined share: 31% + 27% = 58%, which is well over half.','20% is exactly one in five, so “exactly” is accurate here.'],
  self:['Every fraction I used is accurate and in the right direction.','I used at least two different verbs for shares.','I reported a combined share.','None of my sentences starts with a figure.'],revise:1}
};

const gloss={
  'a third':{term:'a third / two-thirds',def:'About 33% and about 67%. 34% is just over a third; 31% is nearly a third.',path:'M120,45 L120,7 A38,38 0 0,1 153,64 Z',ex:'“Beach holidays accounted for just over a third of all main holidays.”'},
  'the majority':{term:'the majority',def:'More than half. The vast majority means far more than half, about 80% or more. It takes a plural verb with plural nouns: the majority of adults were.',path:'M120,45 L120,7 A38,38 0 1,1 87,64 Z',ex:'“The majority of adults chose a beach holiday or a city break.”'},
  'a minority':{term:'a minority',def:'Less than half. A small minority is a small share, usually under about 10%.',path:'M120,45 L120,7 A38,38 0 0,1 145,16 Z',ex:'“Only a small minority of adults went on a cruise.”'},
  'accounted for':{term:'accounted for',def:'Was, as a share of a total. Always followed by “for” and the share.',path:'M120,45 L120,7 A38,38 0 0,1 157,52 Z',ex:'“Beach holidays accounted for 34% of all holidays.”'},
  'made up':{term:'made up',def:'Formed a share of a total. Always followed by “up” and the share. Safer than “comprised of”.',path:'M120,45 L120,7 A38,38 0 0,1 152,25 Z',ex:'“City breaks made up just over a quarter of the total.”'}
};

const retrieval={
 'c2-s1':[{q:'34% is…',opts:[{t:'just over a third',ok:1,why:'A third is 33.3%.'},{t:'just under a third',why:'34% is above 33.3%.'}]},{q:'18% is…',opts:[{t:'just under a fifth',ok:1,why:'A fifth is 20%.'},{t:'about a quarter',why:'A quarter is 25%.'}]}],
 'c2-s2':[{q:'60% is…',opts:[{t:'the majority',ok:1,why:'More than half.'},{t:'the vast majority',why:'Save that for about 80% or more.'}]}],
 'c2-s3':[{q:'Beach holidays ___ 34%.',opts:[{t:'accounted for',ok:1,why:'Accounted for + share.'},{t:'accounted',why:'It needs “for”.'}]}],
 'c2-s4':[{q:'What should you vary?',opts:[{t:'The pattern, not the facts',ok:1,why:'Every fraction must still be accurate.'},{t:'The figures, so they sound different',why:'Figures must match the chart.'}]}],
 'c2-s5':[{q:'31% + 27% = 58% is…',opts:[{t:'well over half',ok:1,why:'More than 50%.'},{t:'about a third',why:'A third is 33%.'}]}]
};

const minitest=[
 {q:'26% is…',opts:[{t:'just over a quarter',ok:1,why:'A quarter is 25%.'},{t:'just under a quarter',why:'26% is above 25%.'},{t:'about a third',why:'A third is 33%.'}],sp:'c2-s1'},
 {q:'12% is about…',opts:[{t:'one in eight',ok:1,why:'One in eight is 12.5%.'},{t:'one in four',why:'That is 25%.'},{t:'a third',why:'That is 33%.'}],sp:'c2-s1'},
 {q:'Which describes 85%?',opts:[{t:'the vast majority',ok:1,why:'Far more than half.'},{t:'a minority',why:'A minority is less than half.'},{t:'about half',why:'85% is much more than half.'}],sp:'c2-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'The majority of adults chose a beach holiday or a city break.',ok:1,why:'Plural verb, past simple.'},{t:'The majority of adults was choosing a beach holiday or a city break.',why:'Wrong verb form.'},{t:'Most of adults chose a beach holiday or a city break.',why:'Most adults, or most of the adults.'}],sp:'c2-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'Cruises accounted for only 4% of holidays.',ok:1,why:'Accounted for + share.'},{t:'Cruises accounted only 4% of holidays.',why:'It needs “for”.'},{t:'Cruises made only 4% of holidays.',why:'It needs “up”.'}],sp:'c2-s3'},
 {q:'Which should you avoid?',opts:[{t:'comprised of',ok:1,why:'Use “made up” instead.'},{t:'made up',why:'This is safe.'},{t:'represented',why:'This is safe.'}],sp:'c2-s3'},
 {q:'Which paragraph is best?',opts:[{t:'Varied patterns with accurate fractions',ok:1,why:'Variety and accuracy together.'},{t:'The same pattern for every figure',why:'Repetitive.'},{t:'Varied patterns with inaccurate fractions',why:'Accuracy comes first.'}],sp:'c2-s4'},
 {q:'Two groups: 31% and 27%. What can you say?',opts:[{t:'Together they made up well over half.',ok:1,why:'58%.'},{t:'Together they made up the vast majority.',why:'58% is not a vast majority.'},{t:'Together they made up a third.',why:'58% is much more than a third.'}],sp:'c2-s5'}
];

const cannow=[['Turn a percentage into an accurate fraction','c2-s1'],['Use the majority, the vast majority and a minority accurately','c2-s2'],['Use accounted for, made up and represented with the right pattern','c2-s3'],['Vary the pattern for each figure without losing accuracy','c2-s4'],['Write a varied paragraph about one pie','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{holiday:C.holiday,museumage:C.museumage},retrieval,minitest,cannow});
})();
