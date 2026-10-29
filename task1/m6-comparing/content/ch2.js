/* ==========================================================================
   MODULE 6 · CHAPTER 2 · LINKING COMPARISONS
   ACTIVITY IDS (type · level)
     c2-link    sort      Guided       Step 1  Inside or between sentences?
     c2-pick    choice    Supported    Step 1  The right linker
     c2-punct   binary    Supported    Step 2  Punctuated correctly?
     c2-fix     fix       Supported    Step 3  Compared with
     c2-resp    choice    Supported    Step 4  Respectively
     c2-build   builder   Supported    Step 4  The former and the latter
     c2-write   write     Independent  Step 5  Men and women
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=CMP;
const P='Chapter 2',CT='Linking Comparisons',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'A comparison often needs two facts side by side: women spent seven hours, men spent three. Linking words such as whereas, by contrast and compared with join those facts and show the reader how they relate. In this chapter I’ll show you which linkers join clauses, which start sentences, and how to punctuate them.',
  outcomes:[`join two contrasting facts with ${T('whereas')} and while`,'start a contrasting sentence with by contrast or however','give two figures with compared with and respectively','refer back with the former and the latter'],
  illus:illus([42,36,24,30,50],[84,72,24,6,90].map(v=>v*0.9)),
  steps:[[1,'c2-s1','Contrast linkers','Inside or between sentences','Discover'],[2,'c2-s2','Punctuation','Commas and full stops','Understand'],[3,'c2-s3','Compared with','Two figures, one sentence','Understand'],[4,'c2-s4','Respectively, the former, the latter','Referring back','Practise'],[5,'c2-s5','Chapter challenge','Men and women','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Contrast linkers',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Contrast linkers</h2>${vid({title:'Contrast linkers',len:'90 seconds',script:['Show the household tasks chart. Read cooking: women 7, men 3.','Join the facts with whereas: women spent 7 hours, whereas men spent 3.','Show a new sentence: By contrast, men spent more time on repairs.','Say: whereas and while join clauses; by contrast and however start sentences.']})}<p>Contrast linkers come in two groups:</p><ul class="clean"><li><b>Inside one sentence:</b> whereas, while. <i>Women spent 7 hours cooking, whereas men spent 3.</i></li><li><b>At the start of a new sentence:</b> by contrast, in contrast, however, on the other hand. <i>By contrast, men spent more time on repairs.</i></li></ul>${chart('chore')}${take('Whereas and while join two clauses. By contrast and however start a new sentence.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c2-link"></div><div data-act="c2-pick" style="margin-top:16px"></div>`}),

sp('c2-s2','Punctuation',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Punctuation</h2>${vid({title:'Punctuating contrast',len:'90 seconds',script:['Write: Women spent 6 hours cleaning, whereas men spent 2.','Point to the comma before whereas.','Write: By contrast, men spent 4 hours on repairs. Point to the comma after the linker.','Show the error: Women cleaned more, however men repaired more.']})}<ul class="clean"><li><b>whereas / while:</b> a comma before them, in the middle of the sentence. They can also start a sentence: <i>Whereas women spent 7 hours, men spent 3.</i> (comma after the first clause)</li><li><b>By contrast, / However,</b> at the start of a sentence, followed by a comma.</li></ul>${mistake('<s>Women spent more time cleaning, however men spent more time on repairs.</s> “However” can’t join two sentences with a comma. Use a full stop: <i>… cleaning. However, men…</i>, or use <i>whereas</i>.')}${take('Comma + whereas. Full stop + However, + comma.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c2-punct"></div>`}),

sp('c2-s3','Compared with',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Compared with</h2><p>“${T('compared with')}” puts a second figure at the end of a sentence:</p>${insight('Two figures, one sentence','Women spent 9 hours a week on childcare, <b>compared with</b> 5 hours for men.')}<ul class="clean"><li>Also: <i>in comparison with</i>, <i>as opposed to</i>.</li><li>After “than”, keep the structure parallel: <i>women spent more time cleaning <b>than men did</b></i>.</li></ul>${mistake('<s>Women spent 9 hours, compared with men spent 5.</s> “Compared with” takes a noun phrase: <i>compared with 5 hours for men</i>.')}${take('Compared with + a noun phrase: compared with 5 hours for men.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c2-fix"></div>`}),

sp('c2-s4','Respectively, the former, the latter',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Respectively, the former, the latter</h2><ul class="clean"><li><b>${T('respectively')}:</b> two figures in the same order as two things. <i>Men and women spent 4 hours and 1 hour <b>respectively</b> on repairs.</i></li><li><b>the former / the latter:</b> the first / the second of two things just mentioned. <i>Men and women spent the same time shopping, but <b>the latter</b> spent far more time cleaning.</i></li></ul>${note('Use “the former” and “the latter” only when exactly two things have just been named. Otherwise, repeat the noun.')}<div class="clear"></div>${take('Respectively keeps two figures in order. The former and the latter refer back to two things just named.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c2-resp"></div><div data-act="c2-build" style="margin-top:16px"></div>`}),

sp('c2-s5','Chapter challenge: men and women',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph comparing the time men and women spent on household tasks.</p>${chart('chore2')}<ul class="clean" style="font-size:15px"><li>Whereas or while inside a sentence.</li><li>By contrast or however at the start of one.</li><li>Compared with or respectively.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Whereas and while join clauses; by contrast and however start sentences.','Comma + whereas; full stop + However,.','Compared with + a noun phrase.','Respectively keeps figures in order; the former and the latter refer back to two things.']})
];

const acts={
'c2-link':{type:'sort',level:'Guided',skill:'Contrast linkers',decision:'Where does each linker usually go?',cats:['Inside one sentence','At the start of a sentence'],
  items:[{w:'whereas',c:0,m:'joins two clauses.'},{w:'By contrast,',c:1,m:'starts a new sentence.'},{w:'while',c:0,m:'joins two clauses.'},{w:'However,',c:1,m:'starts a new sentence.'},{w:'On the other hand,',c:1,m:'starts a new sentence.'}]},
'c2-pick':{type:'choice',level:'Supported',skill:'Choosing a linker',decision:'Women spent 6 hours cleaning, ___ men spent 2.',
  opts:[{t:'whereas',ok:1,why:'Joins two contrasting clauses after a comma.'},{t:'however',why:'“However” can’t join two clauses with a comma.'},{t:'by contrast',why:'“By contrast” starts a new sentence.'}]},
'c2-punct':{type:'binary',level:'Supported',skill:'Punctuation',decision:'Is each sentence punctuated correctly?',labels:['Correct','Not correct'],
  items:[{t:'Women spent 7 hours cooking, whereas men spent 3.',a:0,right:'Comma + whereas.',wrong:'It is correct: a comma before whereas.'},
         {t:'Women spent more time cleaning, however men spent more on repairs.',a:1,right:'Right. Use a full stop before However, or use whereas.',wrong:'“However” can’t join two sentences with a comma.'},
         {t:'By contrast, men spent 4 hours a week on repairs.',a:0,right:'A comma after the linker.',wrong:'It is correct: By contrast, + comma.'},
         {t:'Women spent 9 hours on childcare while, men spent 5.',a:1,right:'Right. The comma goes before while.',wrong:'The comma is in the wrong place: …childcare, while men spent 5.'}]},
'c2-fix':{type:'fix',level:'Supported',skill:'Compared with',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Women spent 9 hours on childcare, compared with men spent 5.',ok:/compared with (5|five) (hours )?(for|by) men/i,bad:/compared with men spent/i,hint:'“Compared with” takes a noun phrase, not a clause.',err:'compared with men spent 5',fix:'compared with 5 hours for men',why:'Compared with + noun phrase.',model:'Women spent 9 hours on childcare, compared with 5 hours for men.'},
         {wrong:'Men spent more time on repairs than women spent it.',ok:/than women( did)?\b/i,bad:/women spent it/i,hint:'Keep it short and parallel.',err:'than women spent it',fix:'than women (did)',why:'After “than”, use the noun alone or a short auxiliary.',model:'Men spent more time on repairs than women did.'},
         {wrong:'Women spent 7 hours cooking, comparing with 3 for men.',ok:/compared with 3/i,bad:/comparing with/i,hint:'The fixed phrase uses the past participle.',err:'comparing with',fix:'compared with',why:'The phrase is “compared with”.',model:'Women spent 7 hours cooking, compared with 3 for men.'}]},
'c2-resp':{type:'choice',level:'Supported',skill:'Respectively',decision:'Which sentence about repairs is accurate?',
  opts:[{t:'Men and women spent 4 hours and 1 hour a week respectively on repairs.',ok:1,why:'Same order: men 4, women 1.'},{t:'Men and women spent 1 hour and 4 hours respectively on repairs.',why:'The order is reversed: men spent 4.'},{t:'Men and women respectively spent 4 hours on repairs.',why:'“Respectively” needs a figure for each.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'The former and the latter',decision:'Build a sentence about shopping and cleaning.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Men and women','spent the same time shopping,','but the latter','spent three times as long cleaning.'],
  distract:[{t:'but the former',why:'The former is men; it was women who spent more time cleaning.',fix:'but the latter'},{t:'spent twice as long cleaning.',why:'6 ÷ 2 = 3: three times as long.',fix:'spent three times as long cleaning.'}],
  right:'Two groups named, then “the latter” for the second one.',orderMsg:'All the right pieces, but check the order: both groups, the shared fact, the latter, the contrast.',incompleteMsg:'Good so far, but incomplete. Add the contrast.'},
'c2-write':{type:'write',level:'Independent',skill:'Linking comparisons',decision:'Write one body paragraph comparing men and women.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Women spent more time than men…'}],
  checks:[{t:'You used whereas or while.',fix:'Join two facts with whereas or while.',fn:v=>/\b(whereas|while)\b/i.test(v.a)},
          {t:'You started a sentence with a contrast linker.',fix:'Start a sentence with By contrast, In contrast, or However,.',fn:v=>/(^|[.!?]\s+)(By contrast|In contrast|However|On the other hand),/i.test(v.a)},
          {t:'You used compared with or respectively.',fix:'Add compared with + a noun phrase, or respectively.',fn:v=>/compared with|in comparison with|respectively/i.test(v.a)},
          {t:'No comma splice with however.',fix:'Don’t join two sentences with “, however”. Use a full stop.',fn:v=>!/,\s*however\s+\w/i.test(v.a)},
          {t:'You covered repairs and shopping.',fix:'Include the exceptions: repairs (men more) and shopping (equal).',fn:v=>/repair/i.test(v.a)&&/shop/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p>Women spent more time than men on three of the five tasks. <button type="button" class="hl" data-n="0">They spent 7 hours a week cooking, whereas men spent only 3</button>, and they spent three times as long as men cleaning (6 hours compared with 2). Childcare took up the most time for both groups, <button type="button" class="hl" data-n="1">but women spent almost twice as long on it as men (9 hours and 5 hours respectively)</button>. <button type="button" class="hl" data-n="2">By contrast, men spent four times as long as women on repairs</button>, <button type="button" class="hl" data-n="3">while both groups spent the same amount of time, 3 hours a week, shopping</button>.</p>`,
  notes:['Whereas joins two contrasting facts after a comma.','Respectively keeps the figures in order: women 9, men 5.','By contrast starts a sentence that reverses the pattern.','While adds a final contrast: the one equal task.'],
  self:['I used whereas or while inside a sentence.','I started a sentence with a contrast linker.','I punctuated however correctly.','My multiples are accurate.'],revise:1}
};

const gloss={
  'whereas':{term:'whereas',def:'Joins two contrasting clauses in one sentence, after a comma.',path:'M20,70 L110,30 M130,30 L220,70',ex:'“Women spent 7 hours cooking, whereas men spent 3.”'},
  'compared with':{term:'compared with',def:'Adds a second figure for comparison. Followed by a noun phrase.',path:'M40,80 V20 H90 V80 M150,80 V60 H200 V80',ex:'“…9 hours, compared with 5 hours for men.”'},
  'respectively':{term:'respectively',def:'In the same order as the things just mentioned.',path:'M40,80 V40 H90 V80 M150,80 V70 H200 V80',ex:'“Men and women spent 4 hours and 1 hour respectively on repairs.”'}
};

const retrieval={
 'c2-s1':[{q:'Which linker joins two clauses?',opts:[{t:'whereas',ok:1,why:'Inside a sentence.'},{t:'By contrast,',why:'Starts a sentence.'}]}],
 'c2-s2':[{q:'“…cleaning, however men…” is…',opts:[{t:'a comma splice',ok:1,why:'Use a full stop.'},{t:'correct',why:'However can’t join sentences.'}]}],
 'c2-s3':[{q:'Compared with ___.',opts:[{t:'5 hours for men',ok:1,why:'A noun phrase.'},{t:'men spent 5',why:'A clause.'}]}],
 'c2-s4':[{q:'Men and women spent 4 and 1 hours respectively. Who spent 4?',opts:[{t:'Men',ok:1,why:'Same order.'},{t:'Women',why:'Respectively keeps the order.'}]}],
 'c2-s5':[{q:'Women 6 hours, men 2 hours cleaning. Women spent…',opts:[{t:'three times as long',ok:1,why:'6 ÷ 2.'},{t:'twice as long',why:'2 × 2 = 4.'}]}]
};

const minitest=[
 {q:'Which starts a new sentence?',opts:[{t:'By contrast,',ok:1,why:'Sentence linker.'},{t:'whereas',why:'Joins clauses.'},{t:'while',why:'Joins clauses.'}],sp:'c2-s1'},
 {q:'“Women spent 7 hours cooking, ___ men spent 3.”',opts:[{t:'while',ok:1,why:'Joins clauses.'},{t:'However,',why:'Starts a sentence.'},{t:'By contrast',why:'Starts a sentence.'}],sp:'c2-s1'},
 {q:'Choose the correctly punctuated sentence.',opts:[{t:'Women cleaned more. However, men did more repairs.',ok:1,why:'Full stop, then However,.'},{t:'Women cleaned more, however men did more repairs.',why:'Comma splice.'},{t:'Women cleaned more however, men did more repairs.',why:'Punctuation.'}],sp:'c2-s2'},
 {q:'Where does the comma go with whereas?',opts:[{t:'Before it',ok:1,why:'…cooking, whereas men…'},{t:'After it',why:'Before.'},{t:'Nowhere',why:'Use one before.'}],sp:'c2-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'Women spent 9 hours, compared with 5 for men.',ok:1,why:'Noun phrase.'},{t:'Women spent 9 hours, compared with men spent 5.',why:'Clause.'},{t:'Women spent 9 hours, comparing with 5 for men.',why:'Compared with.'}],sp:'c2-s3'},
 {q:'When can you use “the latter”?',opts:[{t:'When exactly two things were just named',ok:1,why:'Then it is clear.'},{t:'For any list',why:'Only two.'},{t:'At the start of an answer',why:'It refers back.'}],sp:'c2-s4'},
 {q:'Childcare: women 9, men 5. Which is accurate?',opts:[{t:'Women spent almost twice as long as men.',ok:1,why:'9 ÷ 5 = 1.8.'},{t:'Women spent exactly twice as long.',why:'Twice 5 is 10.'},{t:'Men spent more time.',why:'Women did.'}],sp:'c2-s4'},
 {q:'Repairs: men 4, women 1. Which is accurate?',opts:[{t:'Men spent four times as long as women.',ok:1,why:'4 ÷ 1.'},{t:'Men spent three more times.',why:'Use four times as long as.'},{t:'Women spent four times as long.',why:'Reversed.'}],sp:'c2-s5'}
];

const cannow=[['Use whereas, while, by contrast and however','c2-s1'],['Punctuate contrast linkers correctly','c2-s2'],['Use compared with + a noun phrase','c2-s3'],['Use respectively, the former and the latter','c2-s4'],['Write a paragraph of linked comparisons','c2-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:2,spreads,acts,gloss,charts:{chore:C.chore,chore2:cp('chore','ch-m6chore2')},retrieval,minitest,cannow});
})();
