/* ==========================================================================
   MODULE 1 · CHAPTER 2 · THE FOUR MARKING CRITERIA
   ACTIVITY IDS (type · level)
     c2-match   sort      Guided       Step 1  Which criterion?
     c2-ta      choice    Supported    Step 2  Stronger Task Achievement
     c2-tain    binary    Supported    Step 2  Does it affect Task Achievement?
     c2-cc      choice    Supported    Step 3  Clearer organisation
     c2-ref     fix       Supported    Step 3  Referencing
     c2-lrgra   sort      Supported    Step 4  Vocabulary or grammar?
     c2-fix     fix       Independent  Step 4  Fix the error
     c2-write   write     Independent  Step 5  A body paragraph
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=F1;
const P='Chapter 2',CT='The Four Marking Criteria',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'As an examiner, I marked every Task 1 answer against the same four criteria. Each is worth a quarter of your Task 1 score. When you know what each criterion looks for, you know exactly where your marks come from, and where they go.',
  outcomes:['name the four criteria and what each one looks for','recognise what strengthens '+T('Task Achievement'),'organise ideas for Coherence and Cohesion, including referencing','tell a vocabulary problem from a grammar problem'],
  illus:illus('four'),
  steps:[[1,'c2-s1','Four criteria, four quarters','What each one looks for','Discover'],[2,'c2-s2','Task Achievement','Overview, key features, accuracy','Understand'],[3,'c2-s3','Coherence and Cohesion','Organisation and linking','Understand'],[4,'c2-s4','Vocabulary and grammar','Range and accuracy','Practise'],[5,'c2-s5','Chapter challenge','A paragraph, four criteria','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Four criteria, four quarters',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Four criteria, four quarters</h2>${vid({title:'The four criteria',len:'2 minutes',script:['Draw a square divided into four.','Label each quarter: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.','Give one question for each quarter: did you answer the task? Is it organised? Are the words precise? Is the grammar varied and accurate?','Finish: each quarter is marked separately, so a weakness in one pulls your Task 1 band down.']})}<ul class="clean"><li><b>${T('Task Achievement')}:</b> do you cover the requirements: an overview, the key features, accurate data?</li><li><b>Coherence and Cohesion:</b> is the answer logically organised, with clear paragraphs and linking?</li><li><b>Lexical Resource:</b> is your vocabulary precise, varied and correctly spelt?</li><li><b>Grammatical Range and Accuracy:</b> do you use a range of structures, mostly without errors?</li></ul>${chart('mus')}${take('Four criteria, equally weighted. Your band for Task 1 combines all four.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c2-match"></div>`}),

sp('c2-s2','Task Achievement',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Task Achievement</h2>${vid({title:'Task Achievement',len:'2 minutes',script:['Show two answers about the museum graph: one with an overview, one without.','Say: without a clear overview, your Task Achievement score is likely to be limited to Band 5.','Show an inaccurate figure: 160 written as 150. Say: accuracy is part of this criterion too.','Finish: overview, key features, accurate figures.']})}<p>Task Achievement asks three questions:</p><ul class="clean"><li><b>Is there a clear overview?</b> Without one, your score for this criterion is likely to be limited to Band 5.</li><li><b>Are the key features selected and highlighted?</b> Not every figure, the important ones.</li><li><b>Is the data accurate?</b> Wrong figures or wrong trends cost marks here.</li></ul>${mistake('<s>The science museum always had more visitors.</s> Inaccurate: the art museum had more until 2019.')}${take('Task Achievement: a clear overview, well-chosen key features, accurate data.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the museum graph in Step 1.</p><div data-act="c2-ta"></div><div data-act="c2-tain" style="margin-top:16px"></div>`}),

sp('c2-s3','Coherence and Cohesion',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Coherence and Cohesion</h2>${vid({title:'Coherence and Cohesion',len:'90 seconds',script:['Coherence: the ideas are in a logical order, in clear paragraphs.','Cohesion: the sentences are joined: linkers, and words that refer back.','Show referencing: this figure, the former, the latter, it.','Warn: too many linkers sound mechanical.']})}<ul class="clean"><li><b>Coherence:</b> ideas in a logical order, grouped into clear paragraphs.</li><li><b>Cohesion:</b> sentences joined by linkers (however, while, by contrast) and by ${T('referencing')} words (this figure, the former, it).</li></ul>${insight('Referencing','The art museum had 160,000 visitors in 2015. <b>This figure</b> fell to 120,000 by 2025.')}${mistake('<s>Firstly, … Secondly, … Thirdly, … Moreover, … Furthermore, …</s> Linkers in every sentence sound mechanical. Use them where they show a real relationship.')}${take('Logical paragraphs, purposeful linking and referencing words that avoid repetition.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-cc"></div><div data-act="c2-ref" style="margin-top:16px"></div>`}),

sp('c2-s4','Vocabulary and grammar',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Vocabulary and grammar</h2><p><b>Lexical Resource</b> is about words: precise choices (<i>climbed</i> rather than <i>went up a lot</i>), natural combinations (<i>a sharp rise</i>), and spelling.</p><p><b>Grammatical Range and Accuracy</b> is about structures: a mix of simple and complex sentences, accurate tenses, agreement and articles.</p>${insight('Range with accuracy','A complex sentence with errors is not better than a simple sentence without them. Aim for range you can control.')}${mistake('<s>The visitors of the science museum rised.</s> Two problems: “rised” is grammar (rose); “visitors of” is vocabulary (visitors to).')}${take('Words: precise, natural, correctly spelt. Grammar: varied and controlled.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-lrgra"></div><div data-act="c2-fix" style="margin-top:16px"></div>`}),

sp('c2-s5','Chapter challenge: a paragraph, four criteria',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the two museums. Then check it against all four criteria.</p>${chart('mus2')}<ul class="clean" style="font-size:15px"><li>Accurate figures, with “visitors” and thousands written in full.</li><li>A contrast linker and a referencing phrase.</li><li>At least one complex sentence.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Four criteria, each worth a quarter: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.','Task Achievement needs a clear overview, key features and accurate data.','Coherence and Cohesion: logical paragraphs, purposeful linkers and referencing.','Vocabulary and grammar: precision and range you can control.']})
];

const acts={
'c2-match':{type:'sort',level:'Guided',skill:'The four criteria',decision:'Which criterion is each comment mainly about?',cats:['Task Achievement','Coherence and Cohesion','Lexical Resource','Grammatical Range and Accuracy'],
  items:[{w:'There is no overview.',c:0,m:'a task requirement.'},{w:'The paragraphs jump between the museums with no clear order.',c:1,m:'organisation.'},{w:'“Went up a lot” is repeated several times.',c:2,m:'word choice.'},{w:'The past tense is used inaccurately.',c:3,m:'grammar.'},{w:'The figure for 2015 is wrong.',c:0,m:'accuracy of data.'},{w:'“Museum” is spelt “musuem”.',c:2,m:'spelling is part of Lexical Resource.'}]},
'c2-ta':{type:'choice',level:'Supported',skill:'Task Achievement',decision:'Which opening has stronger Task Achievement?',
  opts:[{t:'Overall, visitor numbers rose at the science museum but fell at the art museum, which it overtook after the two attracted the same number of visitors in 2019.',ok:1,why:'A clear overview with the key features: opposite trends and the crossover.'},{t:'In 2015 the science museum had 120,000 visitors and in 2017 it had 135,000.',why:'Accurate, but detail without an overview.'},{t:'Overall, museums are an important part of city life.',why:'An opinion, and no features of the graph.'}]},
'c2-tain':{type:'binary',level:'Supported',skill:'Task Achievement',decision:'Does each problem affect Task Achievement?',labels:['Yes','No, another criterion'],
  items:[{t:'The answer says the art museum rose.',a:0,right:'Inaccurate data: Task Achievement.',wrong:'A wrong trend is a Task Achievement problem.'},
         {t:'“Musuem” is misspelt.',a:1,right:'Right. Spelling is Lexical Resource.',wrong:'Spelling belongs to Lexical Resource.'},
         {t:'The answer is 110 words long.',a:0,right:'Under 150 words affects Task Achievement.',wrong:'An answer under 150 words loses marks for Task Achievement.'},
         {t:'Every sentence starts with “Then”.',a:1,right:'Right. That is Coherence and Cohesion.',wrong:'Repetitive linking is Coherence and Cohesion.'}]},
'c2-cc':{type:'choice',level:'Supported',skill:'Organisation',decision:'Which body plan is clearer?',
  opts:[{t:'Body 1: the science museum’s rise. Body 2: the art museum’s fall, compared with the science museum.',ok:1,why:'One idea per paragraph, in a logical order, with comparison.'},{t:'Body 1: 2015 and 2017. Body 2: 2019, 2021, 2023 and 2025.',why:'Year by year splits each trend into pieces.'},{t:'One long paragraph with every figure.',why:'No paragraphing makes the answer hard to follow.'}]},
'c2-ref':{type:'fix',level:'Supported',skill:'Referencing',decision:'Replace the repetition with a referencing phrase.',prompt:'Type your improved sentence and press Check.',
  items:[{wrong:'The art museum had 160,000 visitors in 2015. The art museum’s 160,000 visitors fell to 120,000 by 2025.',ok:/\b(this figure|this number|the figure|it|attendance there|its visitor numbers|this total)\b/i,bad:/the art museum['’]s 160,000 visitors fell/i,hint:'Refer back to the figure instead of repeating it.',err:'The art museum’s 160,000 visitors',fix:'This figure',why:'“This figure” refers back and avoids repetition.',model:'The art museum had 160,000 visitors in 2015. This figure fell to 120,000 by 2025.'},
         {wrong:'The science museum and the art museum both had 150,000 visitors in 2019. After that, the science museum rose and the art museum fell.',ok:/(the former|the latter)/i,bad:/the science museum rose and the art museum fell/i,hint:'Use “the former” and “the latter”.',err:'the science museum … the art museum',fix:'the former … the latter',why:'“The former” and “the latter” refer back to two things in order.',model:'The science museum and the art museum both had 150,000 visitors in 2019. After that, the former rose and the latter fell.'}]},
'c2-lrgra':{type:'sort',level:'Supported',skill:'Vocabulary or grammar',decision:'Is each error mainly vocabulary or grammar?',cats:['Lexical Resource','Grammatical Range and Accuracy'],
  items:[{w:'“The number of visitors were 150,000.”',c:1,m:'agreement: the number … was.'},{w:'“The visitors made a big jump.”',c:0,m:'an unnatural word choice: rose sharply.'},{w:'“In 2025 the science museum has 190,000 visitors.”',c:1,m:'tense: had.'},{w:'“The art museum’s visitors decreased dramatically” for a fall of 5,000.',c:0,m:'an imprecise word: slightly.'},{w:'“Visitors of the museum.”',c:0,m:'a collocation: visitors to.'}]},
'c2-fix':{type:'fix',level:'Independent',skill:'Accuracy',decision:'Fix the error in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The number of visitors were 150,000 in 2019.',ok:/number of visitors was/i,bad:/visitors were 150/i,hint:'What is the subject: the number, or the visitors?',err:'were',fix:'was',why:'The subject is “the number”, which is singular.',model:'The number of visitors was 150,000 in 2019.'},
         {wrong:'Visitors to the science museum rised to 190,000.',ok:/(rose|had risen|climbed|increased) to/i,bad:/rised/i,hint:'“Rise” is irregular.',err:'rised',fix:'rose',why:'The past simple of rise is rose.',model:'Visitors to the science museum rose to 190,000.'},
         {wrong:'The art museum had more visitors than science museum in 2015.',ok:/than the science museum/i,bad:/than science museum/i,hint:'A missing article.',err:'than science museum',fix:'than the science museum',why:'A specific museum needs “the”.',model:'The art museum had more visitors than the science museum in 2015.'}]},
'c2-write':{type:'write',level:'Independent',skill:'All four criteria',decision:'Write one body paragraph about the two museums.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'In 2015, the art museum…'}],
  checks:[{t:'Task Achievement: you described both museums accurately.',fix:'Describe both: the science museum rose overall; the art museum fell.',fn:v=>/science/i.test(v.a)&&/art/i.test(v.a)&&/190[, ]?000/.test(v.a)&&/120[, ]?000/.test(v.a)},
          {t:'Task Achievement: you mentioned 2019, when the figures were equal.',fix:'Mention 2019: both museums had 150,000 visitors.',fn:v=>/2019/.test(v.a)&&/150,000/.test(v.a)},
          {t:'Coherence and Cohesion: you used a contrast linker.',fix:'Add however, by contrast, while or whereas.',fn:v=>/\b(however|by contrast|while|whereas|in contrast|on the other hand)\b/i.test(v.a)},
          {t:'Coherence and Cohesion: you used a referencing phrase.',fix:'Add this figure, the former, the latter or it.',fn:v=>/\b(this figure|the figure|the former|the latter|this number|its)\b/i.test(v.a)},
          {t:'Grammar: you wrote “rose”, not “rised”.',fix:'The past of rise is rose.',fn:v=>!/\brised\b/i.test(v.a)},
          {t:'Your paragraph is a good length (70 words or more).',fix:'Add detail: your paragraph is under 70 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model paragraph',
  model:`<p>In 2015, the art museum attracted 160,000 visitors, compared with 120,000 for the science museum. Over the following four years, however, <button type="button" class="hl" data-n="0">the figures moved in opposite directions</button>, and in 2019 both museums received 150,000 visitors. <button type="button" class="hl" data-n="1">After a brief fall to 140,000 in 2021, attendance at the science museum climbed to 190,000 in 2025.</button> The art museum, by contrast, continued to decline, <button type="button" class="hl" data-n="2">ending the period at 120,000, a quarter fewer visitors than in 2015</button>. By then, <button type="button" class="hl" data-n="3">its figure</button> was 70,000 lower than that of the science museum.</p>`,
  notes:['Coherence and Cohesion: “however” signals the change of direction.','Grammatical Range: a fronted time phrase (After a brief fall…) and an accurate past tense (climbed).','Task Achievement: an accurate calculated comparison (40,000 is a quarter of 160,000).','Cohesion: “its figure” refers back to the art museum.'],
  self:['My figures are accurate.','I used a linker that shows a real relationship.','I avoided repetition with referencing.','My grammar is accurate, including irregular verbs.'],revise:1}
};

const gloss={
  'Task Achievement':{term:'Task Achievement',def:'How fully and accurately you answer the task: a clear overview, well-chosen key features and accurate data. A quarter of your Task 1 score.',path:'M40,25 H200 M40,45 H200 M40,65 H200 M100,15 V75',ex:'An answer with no overview is likely to be limited to Band 5 for Task Achievement.'},
  'referencing':{term:'referencing',def:'Using words like this figure, the former, the latter or it to refer back and avoid repetition.',path:'M200,50 C150,10 90,10 40,50 M40,50 L50,40 M40,50 L52,56',ex:'“This figure fell to 120,000 by 2025.”'},
  'complex sentence':{term:'complex sentence',def:'A sentence with a main clause and at least one dependent clause, for example with while, which or after.',path:'M20,50 H120 M120,50 L220,30 M120,50 L220,70',ex:'“After attendance fell briefly in 2021, it climbed to 190,000.”'}
};

const retrieval={
 'c2-s1':[{q:'How much is each criterion worth?',opts:[{t:'A quarter',ok:1,why:'Equal weighting.'},{t:'It depends on the task',why:'Always equal.'}]}],
 'c2-s2':[{q:'No overview is likely to limit Task Achievement to…',opts:[{t:'Band 5',ok:1,why:'A clear overview is essential.'},{t:'Band 8',why:'Much lower.'}]}],
 'c2-s3':[{q:'Which is a referencing phrase?',opts:[{t:'this figure',ok:1,why:'It refers back.'},{t:'however',why:'That is a linker.'}]}],
 'c2-s4':[{q:'“Visitors of the museum” is a…',opts:[{t:'vocabulary (collocation) error',ok:1,why:'Visitors to.'},{t:'tense error',why:'No verb problem.'}]}],
 'c2-s5':[{q:'160,000 to 120,000 is a fall of…',opts:[{t:'a quarter',ok:1,why:'40,000 ÷ 160,000.'},{t:'a third',why:'That would be about 53,000.'}]}]
};

const minitest=[
 {q:'Which is not one of the four criteria?',opts:[{t:'Creativity',ok:1,why:'Task 1 is descriptive.'},{t:'Lexical Resource',why:'It is one.'},{t:'Coherence and Cohesion',why:'It is one.'}],sp:'c2-s1'},
 {q:'A wrong figure mainly affects…',opts:[{t:'Task Achievement',ok:1,why:'Accuracy of data.'},{t:'Lexical Resource',why:'Words may be fine.'},{t:'Grammar',why:'Grammar may be fine.'}],sp:'c2-s2'},
 {q:'Which overview is strongest?',opts:[{t:'Overall, the science museum overtook the art museum, whose visitor numbers fell.',ok:1,why:'Key features, no figures.'},{t:'Overall, both museums are popular.',why:'Vague.'},{t:'Overall, the science museum had 190,000 visitors.',why:'A figure, one museum.'}],sp:'c2-s2'},
 {q:'Linkers in every sentence…',opts:[{t:'can sound mechanical',ok:1,why:'Use them for real relationships.'},{t:'always raise your score',why:'Overuse can lower it.'},{t:'are required',why:'Not in every sentence.'}],sp:'c2-s3'},
 {q:'“The former … the latter” refer to…',opts:[{t:'the first and second of two things',ok:1,why:'In order.'},{t:'the past and the future',why:'No.'},{t:'two years',why:'Two things just mentioned.'}],sp:'c2-s3'},
 {q:'“The number of visitors were high.” What is wrong?',opts:[{t:'Agreement: the number was',ok:1,why:'Singular subject.'},{t:'Spelling',why:'Spelling is fine.'},{t:'Nothing',why:'Check agreement.'}],sp:'c2-s4'},
 {q:'Which is better for Grammatical Range and Accuracy?',opts:[{t:'Varied structures you can control',ok:1,why:'Range with accuracy.'},{t:'Long sentences with errors',why:'Errors cost marks.'},{t:'Only short sentences',why:'No range.'}],sp:'c2-s4'},
 {q:'In which year were the two museums equal?',opts:[{t:'2019',ok:1,why:'150,000 each.'},{t:'2015',why:'160,000 and 120,000.'},{t:'2025',why:'190,000 and 120,000.'}],sp:'c2-s5'}
];

const cannow=[['Name the four criteria and what each looks for','c2-s1'],['Strengthen Task Achievement','c2-s2'],['Organise and link ideas, with referencing','c2-s3'],['Tell vocabulary errors from grammar errors','c2-s4'],['Check a paragraph against all four criteria','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{mus:C.mus,mus2:Object.assign({},C.mus,{id:'ch-f1mus2'})},retrieval,minitest,cannow});
})();
