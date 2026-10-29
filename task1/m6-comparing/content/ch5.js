/* ==========================================================================
   MODULE 6 · CHAPTER 5 · COHESION AND REFERENCING
   ACTIVITY IDS (type · level)
     c5-ref     choice    Guided       Step 1  What does it refer to?
     c5-ref2    choice    Guided       Step 1  The same period
     c5-sub     fix       Supported    Step 2  Avoid repetition
     c5-link    binary    Supported    Step 3  Natural or over-linked?
     c5-best    choice    Supported    Step 3  The better version
     c5-amb     choice    Supported    Step 4  Clear reference
     c5-build   builder   Independent  Step 4  A cohesive sentence
     c5-write   write     Independent  Step 5  Rewrite the paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=CMP;
const P='Chapter 5',CT='Cohesion and Referencing',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const WEAK='The number of visitors to the Science Museum was 300,000 in 2010. The number of visitors to the Science Museum rose to 400,000 in 2025. Furthermore, the number of visitors to the Art Gallery was 250,000 in 2010. Moreover, the number of visitors to the Art Gallery fell to 180,000 in 2025. In addition, the number of visitors to the Art Gallery fell most between 2020 and 2025.';

const spreads=[
opening({n:5,title:CT,lede:'Cohesion is what makes sentences stick together: words that point back, phrases that avoid repetition, and linkers used where they help. Many candidates either repeat the same long noun phrase in every sentence or start every sentence with “Furthermore”. In this chapter I’ll show you the tools that make writing flow naturally.',
  outcomes:[`refer back with ${T('this figure')}, it, these and the same period`,'avoid repeating long noun phrases: the figure for, that of','use linkers only where they add meaning','make every reference clear'],
  illus:`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Inter,sans-serif" font-size="13" font-weight="600"><rect x="20" y="40" width="160" height="34" rx="8" fill="#FBE6CF"/><text x="100" y="62" text-anchor="middle" fill="#292929">300,000 visitors</text><rect x="220" y="80" width="160" height="34" rx="8" fill="#E2EDD6"/><text x="300" y="102" text-anchor="middle" fill="#292929">this figure</text><path d="M240,80 C220,60 200,58 182,58" fill="none" stroke="#F88B48" stroke-width="2.5"/><path d="M182,58 l8,-5 v10 Z" fill="#F88B48"/></g></svg>`,
  steps:[[1,'c5-s1','Referring back','This figure, it, the same period','Discover'],[2,'c5-s2','Avoiding repetition','The figure for, that of','Understand'],[3,'c5-s3','Linkers that help','Not Furthermore every time','Understand'],[4,'c5-s4','Clear reference','Which one is “it”?','Practise'],[5,'c5-s5','Chapter challenge','Rewrite the paragraph','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','Referring back',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Referring back</h2>${vid({title:'Referring back',len:'90 seconds',script:['Show the museum graph.','Write: The Science Museum attracted 300,000 visitors in 2010, and this figure rose to 400,000.','Point to “this figure”: it points back to 300,000 visitors.','Add: Over the same period, the Art Gallery’s visitor numbers fell.']})}<p>Reference words point back to something you have just said, so you don’t repeat it:</p><ul class="clean"><li><b>this figure / these figures:</b> a number just given</li><li><b>it / they / its:</b> a noun just named</li><li><b>over the same period / in that year:</b> a time just mentioned</li><li><b>the former / the latter:</b> the first / second of two things</li></ul>${chart('mus')}${insight('Pointing back','The Science Museum attracted 300,000 visitors in 2010, and <b>this figure</b> rose in every five-year period.')}${take('Point back instead of repeating: this figure, it, the same period.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c5-ref"></div><div data-act="c5-ref2" style="margin-top:14px"></div>`}),

sp('c5-s2','Avoiding repetition',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Avoiding repetition</h2>${vid({title:'Avoiding repetition',len:'90 seconds',script:['Read a sentence that repeats “the number of visitors to the Art Gallery” three times.','Replace the second with “the figure for the Art Gallery”.','Replace the third with “its visitor numbers”.','Show “that of”: the Science Museum’s total was higher than that of the gallery.']})}<p>Long noun phrases are tiring when they repeat. Shorten them:</p><ul class="clean"><li><b>the figure for</b> + name: <i>the figure for the Art Gallery</i></li><li><b>its / their</b> + noun: <i>its visitor numbers</i></li><li><b>that of / those of:</b> <i>The Science Museum’s visitor numbers were higher than <b>those of</b> the gallery.</i></li></ul>${mistake('<s>The number of visitors to the Art Gallery fell, and the number of visitors to the Art Gallery fell most after 2020.</s> Say it once; then point back.')}${take('Name it fully once, then shorten: the figure for, its, that of.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-sub"></div>`}),

sp('c5-s3','Linkers that help',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Linkers that help</h2><p>Linkers show a relationship: addition, contrast, result. Use one only when that relationship is real, and not at the start of every sentence.</p><ul class="clean"><li><b>Overused:</b> Furthermore, Moreover, In addition at the start of every sentence.</li><li><b>Natural:</b> reference words and a few well-chosen linkers: <i>by contrast</i>, <i>over the same period</i>, <i>as a result</i>.</li></ul>${mistake('<s>Furthermore, the gallery had 250,000 visitors. Moreover, it fell to 180,000.</s> “Furthermore” and “moreover” add a new point; here they add nothing.')}${note('The IELTS descriptors penalise mechanical, overused linking. Accurate, well-chosen linkers score better than frequent ones.')}<div class="clear"></div>${take('A linker must show a real relationship. Reference words often do the job better.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c5-link"></div><div data-act="c5-best" style="margin-top:16px"></div>`}),

sp('c5-s4','Clear reference',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Clear reference</h2><p>When two things have just been named, “it” can point to either. Make the reference clear:</p>${mistake('<s>The Science Museum attracted more visitors than the Art Gallery, and it fell after 2020.</s> Which one fell? Name it: <i>the gallery’s visitor numbers fell</i>.')}<ul class="clean"><li>Use <b>it</b> only when one thing could be meant.</li><li>Otherwise, repeat a short name: <i>the gallery</i>, <i>the museum</i>.</li></ul>${take('If “it” could mean two things, use a short name instead.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c5-amb"></div><div data-act="c5-build" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: rewrite the paragraph',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>This paragraph is accurate but repetitive and over-linked. Rewrite it so it flows, and add the comparison it is missing.</p><div class="oe-insight"><span class="lab">The weak paragraph</span>${WEAK}</div>${chart('mus2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Refer back with this figure, it, these and the same period.','Name things fully once, then shorten: the figure for, its, that of.','Use linkers only for real relationships; avoid a linker in every sentence.','Use “it” only when the reference is clear.']})
];

const acts={
'c5-ref':{type:'choice',level:'Guided',skill:'Reference',decision:'“The Science Museum attracted 300,000 visitors in 2010, and this figure rose to 400,000.” What does “this figure” refer to?',
  opts:[{t:'The 300,000 visitors to the Science Museum',ok:1,why:'It points back to the number just given.'},{t:'The year 2010',why:'A year is not a figure that rises.'},{t:'The Art Gallery’s visitors',why:'The gallery hasn’t been mentioned.'}]},
'c5-ref2':{type:'choice',level:'Guided',skill:'Reference',decision:'Which phrase links the gallery’s figures to the same years as the museum’s?',
  opts:[{t:'Over the same period,',ok:1,why:'It refers back to 2010 to 2025.'},{t:'Furthermore,',why:'It adds a point, but doesn’t link the times.'},{t:'In conclusion,',why:'No conclusion in a body paragraph.'}]},
'c5-sub':{type:'fix',level:'Supported',skill:'Avoiding repetition',decision:'Rewrite each sentence without the repetition.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The number of visitors to the Art Gallery fell, and the number of visitors to the Art Gallery fell most after 2020.',ok:/(and|with) (it|its|this figure|the figure|the decline|the fall)/i,bad:/the number of visitors to the art gallery fell, and the number of visitors/i,hint:'Name it once, then point back.',err:'the number of visitors to the Art Gallery (twice)',fix:'…, and it fell most after 2020.',why:'Point back with it, its or this figure.',model:'The number of visitors to the Art Gallery fell, and the fall was steepest after 2020.'},
         {wrong:'The Science Museum’s visitor numbers were higher than the Art Gallery’s visitor numbers.',ok:/(than those (of|for) the (art )?gallery|than the (art )?gallery['’]?s?\.?$|than the figures? for the (art )?gallery)/i,bad:/gallery['’]s visitor numbers/i,hint:'Use “those of” for a plural noun.',err:'the Art Gallery’s visitor numbers',fix:'those of the Art Gallery',why:'“Those of” replaces a repeated plural noun.',model:'The Science Museum’s visitor numbers were higher than those of the Art Gallery.'},
         {wrong:'In 2025, the number of visitors to the Science Museum was 400,000, and the number of visitors to the Art Gallery was 180,000.',ok:/(the figure for the (art )?gallery|the gallery['’]?s? figure|compared with 180,000|while the gallery)/i,bad:/and the number of visitors to the art gallery was/i,hint:'Shorten the second noun phrase.',err:'the number of visitors to the Art Gallery',fix:'the figure for the Art Gallery',why:'“The figure for” shortens a long noun phrase.',model:'In 2025, the Science Museum had 400,000 visitors, while the figure for the Art Gallery was 180,000.'}]},
'c5-link':{type:'binary',level:'Supported',skill:'Linkers',decision:'Natural, or over-linked?',labels:['Natural','Over-linked'],
  items:[{t:'The museum attracted 300,000 visitors in 2010, and this figure rose steadily.',a:0,right:'Reference does the linking.',wrong:'It is natural: “this figure” links the ideas.'},
         {t:'Furthermore, the museum had 320,000 visitors in 2015. Moreover, it had 360,000 in 2020.',a:1,right:'Right. The linkers add nothing.',wrong:'“Furthermore” and “moreover” are mechanical here.'},
         {t:'By contrast, the gallery’s visitor numbers fell.',a:0,right:'A real contrast.',wrong:'It is natural: the gallery moved the other way.'},
         {t:'In addition, firstly, the gallery fell.',a:1,right:'Right. Two linkers, and neither fits.',wrong:'Two linkers stacked, and neither adds meaning.'}]},
'c5-best':{type:'choice',level:'Supported',skill:'Cohesion',decision:'Which version is better?',
  opts:[{t:'The Art Gallery attracted 250,000 visitors in 2010, but its numbers had fallen to 180,000 by 2025, with the steepest fall after 2020.',ok:1,why:'One full name, then “its”, and accurate linking.'},{t:'Furthermore, the Art Gallery had 250,000. Moreover, the Art Gallery had 180,000. In addition, the Art Gallery fell most after 2020.',why:'Repetitive, and the linkers add nothing.'},{t:'It had 250,000 and then it fell and then it fell more.',why:'“It” has no clear reference, and “and then” repeats.'}]},
'c5-amb':{type:'choice',level:'Supported',skill:'Clear reference',decision:'Which sentence has a clear reference?',
  opts:[{t:'The Science Museum stayed ahead of the gallery, and the gallery’s visitor numbers continued to fall.',ok:1,why:'Short names make it clear which one fell.'},{t:'The Science Museum stayed ahead of the gallery, and it continued to fall.',why:'Which one fell? “It” could be either.'},{t:'It stayed ahead of it, and it fell.',why:'Impossible to follow.'}]},
'c5-build':{type:'builder',level:'Independent',skill:'Cohesive sentence',decision:'Build a sentence about the gap.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['As a result,','the gap between the two museums','widened from 50,000 visitors','to 220,000 over the same period.'],
  distract:[{t:'Furthermore, moreover,',why:'Stacked linkers add nothing.',fix:'As a result,'},{t:'narrowed from 50,000 visitors',why:'The gap grew: 50,000 in 2010, 220,000 in 2025.',fix:'widened from 50,000 visitors'}],
  right:'A real result linker, a clear noun phrase, and “the same period” pointing back.',orderMsg:'All the right pieces, but check the order: the linker, the gap, from, to.',incompleteMsg:'Good so far, but incomplete. Finish the change.'},
'c5-write':{type:'write',level:'Independent',skill:'Cohesion',decision:'Rewrite the weak paragraph.',prompt:'Keep the facts, remove the repetition, add the comparison. Then check your writing.',
  fields:[{k:'a',label:'My rewritten paragraph',rows:8,ph:'The Science Museum attracted…'}],
  checks:[{t:'You used a reference word or phrase.',fix:'Point back: this figure, its, over the same period.',fn:v=>/\b(this figure|these figures|its|over the same period|in the same period|the figure for|that of|those of)\b/i.test(v.a)},
          {t:'You removed the repetition.',fix:'Write “the number of visitors to the …” no more than once for each museum.',fn:v=>((v.a.match(/the number of visitors to the/gi)||[]).length)<=2},
          {t:'You cut the mechanical linkers.',fix:'Use furthermore, moreover and in addition no more than once in total.',fn:v=>((v.a.match(/\b(furthermore|moreover|in addition)\b/gi)||[]).length)<=1},
          {t:'You added a comparison.',fix:'Compare the museums: the gap, by contrast, the opposite direction.',fn:v=>/(gap|by contrast|in contrast|whereas|while|opposite|compared with)/i.test(v.a)},
          {t:'You kept the key figures.',fix:'Include 300,000, 400,000, 250,000 and 180,000.',fn:v=>['300,000','400,000','250,000','180,000'].every(n=>v.a.includes(n))},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model rewrite',
  model:`<p>The Science Museum attracted 300,000 visitors in 2010, <button type="button" class="hl" data-n="0">and this figure rose in every five-year period</button>, reaching 400,000 in 2025, a third higher than at the start. <button type="button" class="hl" data-n="1">Over the same period, the Art Gallery moved in the opposite direction.</button> <button type="button" class="hl" data-n="2">Its visitor numbers fell slightly at first</button>, from 250,000 to 230,000 in 2020, before dropping more sharply to 180,000 in 2025. <button type="button" class="hl" data-n="3">As a result, the gap between the two museums widened from 50,000 visitors in 2010 to 220,000 in 2025.</button></p>`,
  notes:['“This figure” points back to 300,000 visitors.','“Over the same period” links the two museums by time and announces a contrast.','“Its” replaces the long noun phrase.','A real result linker, and a calculated comparison: 300 − 250 and 400 − 180.'],
  self:['I named each museum fully only once.','I pointed back with this figure, its and the same period.','I removed the mechanical linkers.','I added a comparison.'],revise:1}
};

const gloss={
  'this figure':{term:'this figure',def:'Points back to a number you have just given.',path:'M30,50 H110 M130,50 H210 M120,30 V70',ex:'“…300,000 visitors in 2010, and this figure rose…”'},
  'those of':{term:'that of / those of',def:'Replaces a repeated noun: that of for singular, those of for plural.',path:'M40,80 V30 H90 V80 M150,80 V50 H200 V80',ex:'“The museum’s numbers were higher than those of the gallery.”'},
  'cohesion':{term:'cohesion',def:'How the sentences in a text are joined: reference words, substitution and linkers.',path:'M20,40 H100 M140,40 H220 M100,40 C120,40 120,60 140,60 H220',ex:'“Good cohesion makes writing easy to follow.”'}
};

const retrieval={
 'c5-s1':[{q:'“This figure” points back to…',opts:[{t:'a number just given',ok:1,why:'Reference.'},{t:'the title',why:'The number.'}]}],
 'c5-s2':[{q:'Replace “the Art Gallery’s visitor numbers” after “than”:',opts:[{t:'those of the Art Gallery',ok:1,why:'Plural: those of.'},{t:'that of the Art Gallery',why:'Numbers is plural.'}]}],
 'c5-s3':[{q:'“Furthermore” at the start of every sentence is…',opts:[{t:'mechanical overuse',ok:1,why:'Penalised.'},{t:'good cohesion',why:'It adds nothing.'}]}],
 'c5-s4':[{q:'When is “it” unclear?',opts:[{t:'When two things were just named',ok:1,why:'Use a short name.'},{t:'Never',why:'It can be ambiguous.'}]}],
 'c5-s5':[{q:'The gap in 2025 was…',opts:[{t:'220,000 visitors',ok:1,why:'400,000 − 180,000.'},{t:'50,000 visitors',why:'That was 2010.'}]}]
};

const minitest=[
 {q:'Which phrase refers back to a time?',opts:[{t:'over the same period',ok:1,why:'Time reference.'},{t:'this figure',why:'A number.'},{t:'the latter',why:'The second of two things.'}],sp:'c5-s1'},
 {q:'“The museum had 300,000 visitors, and ___ rose.”',opts:[{t:'this figure',ok:1,why:'Points back.'},{t:'furthermore',why:'Not a reference.'},{t:'the latter',why:'Only one thing named.'}],sp:'c5-s1'},
 {q:'Which shortens a repeated noun phrase?',opts:[{t:'the figure for the gallery',ok:1,why:'Substitution.'},{t:'moreover',why:'A linker.'},{t:'in conclusion',why:'Not a substitute.'}],sp:'c5-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'The museum’s numbers were higher than those of the gallery.',ok:1,why:'Plural: those.'},{t:'The museum’s numbers were higher than that of the gallery.',why:'Numbers: those.'},{t:'The museum’s numbers were higher than the gallery numbers of it.',why:'Unclear.'}],sp:'c5-s2'},
 {q:'What do the IELTS descriptors say about overused linkers?',opts:[{t:'They are penalised',ok:1,why:'Mechanical cohesion.'},{t:'They always help',why:'Not when overused.'},{t:'They don’t matter',why:'They affect Coherence and Cohesion.'}],sp:'c5-s3'},
 {q:'Which linker shows a real result?',opts:[{t:'As a result, the gap widened.',ok:1,why:'The gap follows from the two trends.'},{t:'Moreover, the gap widened.',why:'Adds, doesn’t show result.'},{t:'Firstly, the gap widened.',why:'Not a sequence.'}],sp:'c5-s3'},
 {q:'“The museum stayed ahead of the gallery, and it fell.” The problem?',opts:[{t:'“It” could be either',ok:1,why:'Use a name.'},{t:'Nothing',why:'It is ambiguous.'},{t:'Wrong tense',why:'The tense is fine.'}],sp:'c5-s4'},
 {q:'Science Museum 300,000 → 400,000 is a rise of…',opts:[{t:'a third',ok:1,why:'100,000 ÷ 300,000.'},{t:'a quarter',why:'That would be 75,000.'},{t:'half',why:'That would be 150,000.'}],sp:'c5-s5'}
];

const cannow=[['Refer back with this figure, it and the same period','c5-s1'],['Avoid repeating long noun phrases','c5-s2'],['Use linkers only for real relationships','c5-s3'],['Keep every reference clear','c5-s4'],['Rewrite a paragraph so it flows','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss,charts:{mus:C.mus,mus2:cp('mus','ch-m6mus2')},retrieval,minitest,cannow});
})();
