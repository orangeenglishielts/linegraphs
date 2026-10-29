/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 2 · DESCRIBING PERCENTAGES AND PROPORTIONS
   The flagship lesson. Sequence: opening chart challenge (Step 1),
   interactive explanation of proportions (Step 1), language exploration
   (Step 2), accuracy and appropriacy (Step 3), sentence construction and
   error analysis (Step 4), guided paragraph and independent application
   (Step 5), feedback and reflection (review).
   ACTIVITY IDS (type · level)
     c2-challenge choice  Guided       Step 1  The opening challenge
     c2-match   sort      Guided       Step 1  Percentages and fractions
     c2-lang    sort      Supported    Step 2  Which phrase fits?
     c2-maj     choice    Supported    Step 2  Majority language
     c2-approp  binary    Supported    Step 3  Accurate and appropriate?
     c2-band    choice    Supported    Step 3  The right strength
     c2-build   builder   Supported    Step 4  Build the sentence
     c2-err     fix       Independent  Step 4  Error analysis
     c2-guided  write     Supported    Step 5  Guided paragraph
     c2-write   write     Independent  Step 5  Independent application
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=DD;
const P='Chapter 2',CT='Describing Percentages and Proportions',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);
const scale=`<svg viewBox="0 0 400 120" aria-hidden="true" style="width:100%;display:block;margin:6px 0 12px"><g font-family="Inter,sans-serif" font-size="11" text-anchor="middle"><rect x="20" y="40" width="360" height="16" rx="8" fill="#E4DED1"/><rect x="20" y="40" width="${360*0.54}" height="16" rx="8" fill="#F88B48"/>${[[0,'0%'],[0.1,'a tenth'],[0.25,'a quarter'],[0.333,'a third'],[0.5,'half'],[0.667,'two-thirds'],[0.75,'three-quarters'],[1,'100%']].map(([p,t],i)=>`<line x1="${20+360*p}" y1="34" x2="${20+360*p}" y2="62" stroke="#292929" stroke-width="1.4"/><text x="${20+360*p}" y="${i%2?82:28}" fill="#292929">${t}</text>`).join('')}<text x="${20+360*0.54}" y="104" fill="#A84A12" font-weight="700">54%: just over half</text></g></svg>`;

const spreads=[
opening({n:2,title:CT,lede:'This is my favourite lesson to teach, because it fixes one of the most common accuracy problems I saw as an examiner. Candidates write “the vast majority” for 54%, or “almost half” for 54%. In the next 25 minutes you’ll learn to turn any percentage into accurate, natural English, and you’ll write two paragraphs of your own.',
  outcomes:['interpret proportions accurately','choose appropriate language for different percentages','tell precise descriptions from misleading ones','build grammatically accurate sentences about proportions','describe and compare the information in a pie chart'],
  illus:illus('54%','just over half'),
  steps:[[1,'c2-s1','The opening challenge','What does 54% look like?','Discover'],[2,'c2-s2','The language of proportion','Fractions, majority, one in ten','Understand'],[3,'c2-s3','Accuracy and appropriacy','The right strength','Understand'],[4,'c2-s4','Building sentences','And spotting errors','Practise'],[5,'c2-s5','Your paragraphs','Guided, then independent','Apply'],['R','c2-review','Feedback and reflection','Your results and your drafts','Improve']]}),

sp('c2-s1','The opening challenge',{exploreFirst:true,
 left:`${head('Step 1 · Discover','Learn')}<h2>The opening challenge</h2>${vid({title:'What does 54% look like?',len:'2 minutes',script:['Show the languages pie. Ask: how would you describe the English slice?','Reveal three answers: the vast majority, almost half, just over half.','Place 54% on a line from 0 to 100: just past the half-way mark.','Say: proportions are positions on this line. Learn the landmarks.']})}<p>Look at the pie chart and try the challenge on the right before you read on.</p>${chart('lang')}<p>A percentage is a position between 0 and 100%. To describe it, find the nearest <b>landmark</b> (a tenth, a quarter, a third, half, two-thirds, three-quarters), then say whether it is just over, just under or about the same.</p>${scale}${take('Find the nearest landmark, then say just over, just under or about.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the pie chart on the left page.</p><div data-act="c2-challenge"></div><div data-act="c2-match" style="margin-top:16px"></div>`}),

sp('c2-s2','The language of proportion',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The language of proportion</h2>${vid({title:'The language of proportion',len:'2 minutes',script:['Show three families of phrases.','Fractions: a quarter, a third, half.','“One in” phrases: one in ten, one in seven.','Majority and minority: the majority, a small minority.','Practise with the pie: 54%, 14%, 9%.']})}<p>There are three families of language for proportions:</p><ul class="clean"><li><b>Fractions:</b> a tenth, a fifth, a quarter, a third, half, two-thirds, three-quarters.</li><li><b>“One in…”:</b> one in ten (10%), about one in seven (14%), one in twenty (5%).</li><li><b>Majority and minority:</b> ${T('the majority')} (more than half), a minority (less than half), a small minority (a small share).</li></ul><p>Add a precision word: <b>just over, just under, almost, nearly, about, roughly, well over</b>.</p>${insight('Applied to the languages pie','English: just over half. Polish: about one pupil in seven. Urdu: just under one in ten.')}${take('Fractions, “one in…”, majority and minority, plus a precision word.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-lang"></div><div data-act="c2-maj" style="margin-top:16px"></div>`}),

sp('c2-s3','Accuracy and appropriacy',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Accuracy and appropriacy</h2>${vid({title:'Accuracy and appropriacy',len:'2 minutes',script:['Read: the vast majority of pupils spoke English (54%).','Ask: is that accurate? It is a majority, but not a vast one.','Show the strength scale: just over half, the majority, a large majority, the vast majority.','Finish: match the strength of the phrase to the figure.']})}<p>A phrase can be grammatically perfect and still wrong for the figure. Match its strength to the number:</p><ul class="clean"><li><b>51 to 55%:</b> just over half.</li><li><b>56 to 64%:</b> well over half, the majority, about three-fifths (60%).</li><li><b>About 65 to 79%:</b> about two-thirds, a large majority, almost or about three-quarters.</li><li><b>About 80% or more:</b> ${T('the vast majority')}, the overwhelming majority (90%+).</li><li><b>Under 10%:</b> a small minority, fewer than one in ten.</li></ul>${mistake('<s>The vast majority of pupils (54%) spoke English at home.</s> Although English speakers form a majority, “the vast majority” suggests a much larger proportion. “Just over half” is more precise.')}${take('Match the strength of the phrase to the figure. “The vast majority” means about 80% or more.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-approp"></div><div data-act="c2-band" style="margin-top:16px"></div>`}),

sp('c2-s4','Building sentences',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Building sentences</h2><p>Three reliable patterns for proportion sentences:</p><ul class="clean"><li><b>Proportion + of + group + verb:</b> <i>Just over half of the pupils spoke English at home.</i></li><li><b>Category + verb for shares:</b> <i>Polish ${T('accounted for')} 14%.</i> Also: made up, represented.</li><li><b>“One in…” + singular noun:</b> <i>About one pupil in seven spoke Polish.</i></li></ul>${note('“The majority of” + plural noun takes a plural verb: the majority of pupils spoke / were. And “most of” needs “the”: most of the pupils, or simply most pupils.')}<div class="clear"></div>${take('Proportion + of + group; category + accounted for; one in + singular noun.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><div data-act="c2-err"></div></div>`}),

sp('c2-s5','Your paragraphs',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Your paragraphs</h2><p><b>First, a guided paragraph</b> about the languages pie, one sentence at a time. <b>Then, on your own</b>, a paragraph about how students travel to classes.</p>${chart('lang2')}${chart('travel')}`,
 right:`${head('Step 5 · Writing tasks','Explore')}<div data-act="c2-guided"></div><div data-gate="c2-guided" hidden style="margin-top:16px"><div data-act="c2-write"></div></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Find the nearest landmark, then say just over, just under or about.','Use fractions, “one in…” and majority or minority, with a precision word.','Match the strength of the phrase to the figure: “the vast majority” is about 80% or more.','Use reliable patterns: proportion + of + group; category + accounted for.']})
];

const acts={
'c2-challenge':{type:'choice',level:'Guided',skill:'Interpreting proportions',decision:'Which description of the English slice (54%) is most accurate?',
  opts:[{t:'Just over half of the pupils spoke English at home.',ok:1,why:'54% is slightly more than 50%: just over half.'},{t:'The vast majority of the pupils spoke English at home.',why:'Although English speakers form a majority, “the vast majority” suggests a much larger proportion, about 80% or more.'},{t:'Almost half of the pupils spoke English at home.',why:'“Almost half” means slightly less than 50%. 54% is more than half.'}]},
'c2-match':{type:'sort',level:'Guided',skill:'Landmarks',decision:'Which landmark is each percentage closest to?',cats:['A quarter','A third','Half','Three-quarters'],
  items:[{w:'27%',c:0,m:'just over a quarter.'},{w:'34%',c:1,m:'just over a third.'},{w:'54%',c:2,m:'just over half.'},{w:'73%',c:3,m:'almost three-quarters.'},{w:'48%',c:2,m:'just under half.'},{w:'24%',c:0,m:'just under a quarter.'}]},
'c2-lang':{type:'sort',level:'Supported',skill:'Choosing the phrase',decision:'Which phrase fits each percentage?',cats:['just over half','just under half','about a third','about one in ten'],
  items:[{w:'54%',c:0,m:'slightly more than 50%.'},{w:'46%',c:1,m:'slightly less than 50%.'},{w:'34%',c:2,m:'close to 33%.'},{w:'9%',c:3,m:'close to 10%.'},{w:'52%',c:0,m:'slightly more than 50%.'},{w:'11%',c:3,m:'close to 10%.'}]},
'c2-maj':{type:'choice',level:'Supported',skill:'Majority and minority',decision:'Together, the pupils who spoke other languages made up 46%. Which is accurate?',
  opts:[{t:'Just under half of the pupils mainly spoke a language other than English.',ok:1,why:'46% is slightly less than 50%.'},{t:'The majority of the pupils spoke another language.',why:'46% is less than half: a minority, not a majority.'},{t:'A small minority of pupils spoke another language.',why:'46% is almost half: “small” understates it.'}]},
'c2-approp':{type:'binary',level:'Supported',skill:'Accuracy and appropriacy',decision:'Is each description accurate and appropriate?',labels:['Accurate','Misleading'],
  items:[{t:'The majority of pupils (54%) spoke English at home.',a:0,right:'54% is more than half: a majority.',wrong:'It is accurate: 54% is a majority, just not a vast one.'},
         {t:'The vast majority of pupils (54%) spoke English at home.',a:1,right:'Right. “The vast majority” suggests about 80% or more. “Just over half” is more precise.',wrong:'“The vast majority” overstates 54%. Use “just over half”.'},
         {t:'A small minority of pupils (9%) spoke Urdu.',a:0,right:'Under one in ten: a small minority.',wrong:'It is accurate: 9% is a small minority.'},
         {t:'Almost half of the pupils (54%) spoke English.',a:1,right:'Right. “Almost half” means less than 50%.',wrong:'54% is more than half, so “almost half” is wrong.'},
         {t:'About one pupil in seven (14%) spoke Polish.',a:0,right:'1 ÷ 7 ≈ 14.3%.',wrong:'It is accurate: one in seven is about 14%.'}]},
'c2-band':{type:'choice',level:'Supported',skill:'Strength',decision:'84% of students travelled by bus, by bicycle or on foot. Which phrase fits?',
  opts:[{t:'the vast majority',ok:1,why:'84% is above 80%.'},{t:'just over half',why:'Far too weak for 84%.'},{t:'a small majority',why:'A small majority is just over 50%.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Sentence construction',decision:'Build a sentence about English and Polish.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Just over half of the pupils','spoke English','as their main language at home,','while about one pupil in seven','spoke Polish.'],
  distract:[{t:'The vast majority of the pupils',why:'54% is not a vast majority: just over half.',fix:'Just over half of the pupils'},{t:'while about one pupils in seven',why:'“One in seven” takes a singular noun: one pupil in seven.',fix:'while about one pupil in seven'}],
  right:'An accurate proportion phrase, a past verb, and a correct “one in…” phrase.',orderMsg:'All the right pieces, but check the order: English first, then the contrast with Polish.',incompleteMsg:'Good so far, but incomplete. Add the Polish speakers.'},
'c2-err':{type:'fix',level:'Independent',skill:'Error analysis',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Most of pupils spoke English at home.',ok:/^(most pupils|most of the pupils|the majority of (the )?pupils)/i,bad:/most of pupils/i,hint:'“Most of” needs “the”, or drop “of”.',err:'Most of pupils',fix:'Most pupils / Most of the pupils',why:'“Most of” needs a determiner: most of the pupils.',model:'Most pupils spoke English at home.'},
         {wrong:'Polish accounted 14% of the pupils.',ok:/accounted for 14/i,bad:/accounted 14/i,hint:'“Accounted” needs a preposition.',err:'accounted 14%',fix:'accounted for 14%',why:'The pattern is “accounted for + share”.',model:'Polish speakers accounted for 14% of the pupils.'},
         {wrong:'The majority of pupils was English speakers.',ok:/majority of (the )?pupils were/i,bad:/pupils was/i,hint:'“The majority of pupils”: is the verb singular or plural?',err:'was',fix:'were',why:'“The majority of” + a plural noun takes a plural verb.',model:'The majority of pupils were English speakers.'},
         {wrong:'The vast majority of pupils (54%) spoke English.',ok:/(just over half|slightly more than half|more than half|over half|the majority)/i,bad:/vast/i,hint:'Match the phrase to the figure.',err:'The vast majority',fix:'Just over half',why:'“The vast majority” suggests about 80% or more.',model:'Just over half of the pupils (54%) spoke English.'}]},
'c2-guided':{type:'write',level:'Supported',skill:'Guided paragraph',decision:'Write a paragraph about the languages pie, one sentence at a time.',prompt:'Follow the prompt for each sentence. Then check your writing.',
  fields:[{k:'s1',label:'Sentence 1: the largest share (English, 54%)',rows:2,ph:'Just over half of the pupils…'},{k:'s2',label:'Sentence 2: Polish, Arabic and Urdu',rows:3,ph:'Polish was the second most common language…'},{k:'s3',label:'Sentence 3: everyone who mainly spoke another language (46%)',rows:2,ph:'Taken together,…'}],
  checks:[{t:'Sentence 1 describes 54% accurately.',fix:'54% is just over half: not “the vast majority” or “almost half”.',fn:v=>/(just over half|slightly more than half|more than half|the majority)/i.test(v.s1)&&!/vast|almost half/i.test(v.s1)},
          {t:'Sentence 2 covers Polish, Arabic and Urdu.',fix:'Include all three languages.',fn:v=>/polish/i.test(v.s2)&&/arabic/i.test(v.s2)&&/urdu/i.test(v.s2)},
          {t:'Sentence 2 uses a proportion phrase.',fix:'Add a phrase such as “about one in seven” or “just under one in ten”.',fn:v=>/(one (pupil |child )?in|tenth|seventh|fraction|quarter|third)/i.test(v.s2)},
          {t:'Sentence 3 describes 46% accurately.',fix:'46% is just under half: a minority, not a majority.',fn:v=>/(just under|almost|nearly|slightly less than|less than|under) half|a minority/i.test(v.s3)},
          {t:'You used the past tense.',fix:'Describe the chart in the past: spoke, accounted for.',fn:v=>/\b(spoke|was|were|accounted|made up)\b/i.test(v.s1+' '+v.s2)}],
  modelTitle:'My model paragraph',
  model:`<p><span class="plabel">Sentence 1</span><button type="button" class="hl" data-n="0">Just over half of the pupils (54%) spoke English as their main language at home.</button></p><p><span class="plabel">Sentence 2</span>Polish was the second most common language, <button type="button" class="hl" data-n="1">spoken by about one pupil in seven (14%)</button>, followed by Arabic at 11% and Urdu at 9%, <button type="button" class="hl" data-n="2">just under one in ten</button>.</p><p><span class="plabel">Sentence 3</span><button type="button" class="hl" data-n="3">Taken together, just under half of the pupils (46%) mainly spoke a language other than English at home.</button></p>`,
  notes:['The nearest landmark (half) plus a precision word (just over).','A “one in…” phrase: 1 ÷ 7 ≈ 14.3%.','Just below a landmark: 9% is just under 10%.','A combined share: 14 + 11 + 9 + 12 = 46, just under half.'],
  self:['I matched each phrase to its figure.','I used fractions, “one in…” and majority or minority.','I used the past tense.','I combined shares where it helped.'],revise:1},
'c2-write':{type:'write',level:'Independent',skill:'Independent application',decision:'Write one paragraph about how students travel to classes.',prompt:'Use proportion language for at least four of the figures. Then check your writing.',
  fields:[{k:'a',label:'My paragraph',rows:7,ph:'The bus was the most common…'}],
  checks:[{t:'You described the bus accurately.',fix:'38% is almost two-fifths, or well over a third.',fn:v=>/bus/i.test(v.a)&&/(two[- ]fifths|over a third|more than a third|nearly two in five|almost two in five|38)/i.test(v.a)},
          {t:'You described cycling accurately.',fix:'27% is just over a quarter.',fn:v=>/(cycl|bicycle|bike)/i.test(v.a)&&/(just over a quarter|more than a quarter|27)/i.test(v.a)},
          {t:'You used “the vast majority” correctly, or not at all.',fix:'Only use “the vast majority” for about 80% or more: here, the 84% who came by bus, bicycle or on foot.',fn:v=>!/vast majority/i.test(v.a)||/84/.test(v.a)||/(bus|bicycle|foot|walk)[^.]*(bus|bicycle|foot|walk)/i.test(v.a)},
          {t:'You described the smallest groups.',fix:'Include the car (11%) and the train (5%).',fn:v=>/car/i.test(v.a)&&/train/i.test(v.a)},
          {t:'You used at least four proportion phrases.',fix:'Use more proportion language: a quarter, a fifth, one in twenty, a small minority.',fn:v=>(v.a.match(/(half|third|quarter|fifth|tenth|fifths|one (student |person )?in|majority|minority)/gi)||[]).length>=4},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p>The bus was the most common way for students to travel to classes, used by 38%, <button type="button" class="hl" data-n="0">almost two-fifths of the total</button>. Just over a quarter cycled (27%), and almost a fifth walked (19%), <button type="button" class="hl" data-n="1">so together these three methods were used by the vast majority of students (84%)</button>. By contrast, <button type="button" class="hl" data-n="2">only a small minority travelled by car (11%) or train (5%)</button>, and the train was used by <button type="button" class="hl" data-n="3">just one student in twenty</button>.</p>`,
  notes:['Two-fifths is 40%, so 38% is almost two-fifths.','“The vast majority” is right here: 38 + 27 + 19 = 84%.','Small shares grouped: a small minority.','5% is exactly one in twenty.'],
  self:['I matched every phrase to its figure.','I used “the vast majority” only for 80% or more.','I grouped small shares.','I varied my proportion language.']}
};

const gloss={
  'the majority':{term:'the majority',def:'More than half. With a plural noun it takes a plural verb: the majority of pupils were.',path:'M120,45 L120,7 A38,38 0 1,1 87,64 Z',ex:'“The majority of pupils spoke English at home.”'},
  'the vast majority':{term:'the vast majority',def:'A very large majority: about 80% or more. Never use it for figures such as 54%.',path:'M120,45 L120,7 A38,38 0 1,1 98,14 Z',ex:'“The vast majority of students (84%) travelled by bus, bicycle or on foot.”'},
  'accounted for':{term:'accounted for',def:'Made up a share of a total. Always with “for”.',path:'M120,45 L120,7 A38,38 0 0,1 153,64 Z',ex:'“Polish speakers accounted for 14% of pupils.”'}
};

const retrieval={
 'c2-s1':[{q:'54% is…',opts:[{t:'just over half',ok:1,why:'Slightly more than 50%.'},{t:'almost half',why:'That is under 50%.'}]}],
 'c2-s2':[{q:'14% is about…',opts:[{t:'one in seven',ok:1,why:'1 ÷ 7 ≈ 14.3%.'},{t:'one in four',why:'That is 25%.'}]}],
 'c2-s3':[{q:'“The vast majority” means about…',opts:[{t:'80% or more',ok:1,why:'A very large majority.'},{t:'just over 50%',why:'That is just over half.'}]}],
 'c2-s4':[{q:'Which is correct?',opts:[{t:'about one pupil in seven',ok:1,why:'Singular noun.'},{t:'about one pupils in seven',why:'One pupil.'}]}],
 'c2-s5':[{q:'Bus 38% + bicycle 27% + walking 19% =',opts:[{t:'84%: the vast majority',ok:1,why:'Well over 80%.'},{t:'74%: about three-quarters',why:'Check the sum.'}]}]
};

const minitest=[
 {q:'Which landmark is 34% closest to?',opts:[{t:'a third',ok:1,why:'33.3%.'},{t:'a quarter',why:'25%.'},{t:'half',why:'50%.'}],sp:'c2-s1'},
 {q:'48% is…',opts:[{t:'just under half',ok:1,why:'Slightly below 50%.'},{t:'just over half',why:'That is above 50%.'},{t:'the majority',why:'Less than half is not a majority.'}],sp:'c2-s1'},
 {q:'Which phrase means 10%?',opts:[{t:'one in ten',ok:1,why:'A tenth.'},{t:'one in four',why:'25%.'},{t:'a fifth',why:'20%.'}],sp:'c2-s2'},
 {q:'Which is a minority?',opts:[{t:'46%',ok:1,why:'Less than half.'},{t:'54%',why:'More than half.'},{t:'84%',why:'A vast majority.'}],sp:'c2-s2'},
 {q:'Which is misleading?',opts:[{t:'The vast majority (54%) spoke English.',ok:1,why:'Overstated.'},{t:'Just over half (54%) spoke English.',why:'Accurate.'},{t:'The majority (54%) spoke English.',why:'Accurate.'}],sp:'c2-s3'},
 {q:'9% is best described as…',opts:[{t:'a small minority',ok:1,why:'Fewer than one in ten.'},{t:'a large minority',why:'Too strong.'},{t:'almost a quarter',why:'25% is much higher.'}],sp:'c2-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'The majority of pupils were English speakers.',ok:1,why:'Plural verb.'},{t:'The majority of pupils was English speakers.',why:'Plural noun, plural verb.'},{t:'Most of pupils were English speakers.',why:'Most of the pupils.'}],sp:'c2-s4'},
 {q:'38% is…',opts:[{t:'almost two-fifths',ok:1,why:'Two-fifths is 40%.'},{t:'over half',why:'38% is under half.'},{t:'about a quarter',why:'25% is much lower.'}],sp:'c2-s5'}
];

const cannow=[['Interpret a proportion against the landmarks','c2-s1'],['Choose fractions, “one in…” and majority or minority','c2-s2'],['Match the strength of a phrase to the figure','c2-s3'],['Build accurate sentences and correct common errors','c2-s4'],['Describe and compare the information in a pie chart','c2-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:2,spreads,acts,gloss,charts:{lang:C.lang,lang2:cp('lang','ch-lang2'),travel:C.travel},retrieval,minitest,cannow});
})();
