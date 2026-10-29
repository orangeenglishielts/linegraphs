/* ==========================================================================
   MODULE 5 · CHAPTER 1 · VERBS AND NOUNS OF CHANGE
   ACTIVITY IDS (type · level)
     c1-dir     sort      Guided       Step 1  Up, down or no change?
     c1-pick    choice    Supported    Step 1  The right verb
     c1-forms   fix       Supported    Step 2  Irregular forms
     c1-by1..2  choice    Supported    Step 3  By, to or from?
     c1-noun    binary    Supported    Step 4  Correct or not?
     c1-build   builder   Supported    Step 4  A noun phrase
     c1-write   write     Independent  Step 5  Two charts, two patterns
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,howto,opening,review,addChapter}=OE;
const {C,illus}=TRD;
const P='Chapter 1',CT='Verbs and Nouns of Change',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:1,title:CT,lede:'Most Task 1 answers describe change: something rose, fell, or stayed the same. The examiner is looking for accurate verbs, correct irregular forms and the right preposition after each one. In this chapter I’ll show you the core verbs and nouns of change, and the patterns that make them precise.',
  outcomes:['choose verbs for upward, downward and no change','use irregular forms correctly: rose, fell, grew',`use ${T('rose by')} and rose to accurately`,'turn a verb into a noun phrase: a rise of 9,000, a rise in cycling'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('M30,110 L100,100 L170,80 L240,60 L310,48 L380,30'),
  steps:[[1,'c1-s1','Verbs of change','Up, down, the same','Discover'],[2,'c1-s2','Irregular forms','Rose, fell, grew','Understand'],[3,'c1-s3','By, to and from','The prepositions','Understand'],[4,'c1-s4','Nouns of change','A rise of, a rise in','Practise'],[5,'c1-s5','Chapter challenge','Cycling and cinemas','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Every change needs a verb, a size and a time.','rose by','Cycling rose by 32,000 people')}),

sp('c1-s1','Verbs of change',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Verbs of change</h2>${vid({title:'Verbs of change',len:'90 seconds',script:['Show the cycling graph and the cinema graph side by side.','Say: one line goes up, one goes down. Which verbs fit each?','List them: rise, increase, grow, climb; fall, decrease, decline, drop.','Add the no-change verbs: remain stable, stay the same.']})}<ul class="clean"><li><b>Up:</b> rise, increase, grow, climb</li><li><b>Down:</b> fall, decrease, decline, drop</li><li><b>No change:</b> remain stable, stay the same, remain unchanged</li></ul>${chart('bike')}${chart('cine')}${note('Vary the verb, but never at the cost of accuracy. “Climbed” suits a steady upward line; “dropped” suits a clear fall.')}<div class="clear"></div>${take('Three groups: up, down, no change. Vary the verbs within each group.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-dir"></div><div data-act="c1-pick" style="margin-top:16px"></div>`}),

sp('c1-s2','Irregular forms',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Irregular forms</h2>${vid({title:'Irregular forms',len:'90 seconds',script:['Write three columns: base, past simple, past participle.','Fill them: rise, rose, risen; fall, fell, fallen; grow, grew, grown.','Show the errors: rised, falled, has rose.','Say: in Task 1 you will mostly need the middle column, the past simple.']})}<p>Three of the most useful verbs are irregular:</p><ul class="clean"><li><b>rise</b> → rose → risen</li><li><b>fall</b> → fell → fallen</li><li><b>grow</b> → grew → grown</li></ul>${insight('The past simple for past data','Cycling <b>rose</b> from 18,000 to 50,000. Admissions <b>fell</b> to 80 million.')}${mistake('<s>The number of cyclists rised.</s> <i>Rose</i>. And never <s>falled</s>: <i>fell</i>.')}${take('Rose, fell, grew. Learn the three columns, and use the past simple for past data.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-forms"></div>`}),

sp('c1-s3','By, to and from',{
 left:`${head('Step 3 · Understand','Learn')}<h2>By, to and from</h2>${vid({title:'By, to and from',len:'2 minutes',script:['Point to 18,000 in 2000 and 50,000 in 2025.','Say: rose from 18,000 to 50,000. “To” gives the end point.','Subtract: 32,000. Say: rose by 32,000. “By” gives the size of the change.','Put them together: rose by 32,000 to 50,000.']})}<p>The preposition after the verb tells the reader which figure you mean:</p><ul class="clean"><li><b>from … to:</b> the start and the end. <i>Cycling rose from 18,000 to 50,000.</i></li><li><b>${T('rose by','by')}:</b> the size of the change. <i>Cycling rose by 32,000.</i></li><li><b>to:</b> the end point. <i>Admissions fell to 80 million.</i></li></ul>${mistake('<s>Admissions fell by 80 million.</s> 80 million is where they ended. They fell <i>by</i> 40 million, <i>to</i> 80 million.')}${take('From = start. To = end. By = the size of the change. Calculate before you write “by”.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the charts in Step 1.</p><div data-act="c1-by1"></div><div data-act="c1-by2" style="margin-top:14px"></div>`}),

sp('c1-s4','Nouns of change',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Nouns of change</h2><p>Most verbs of change have a noun form. Nouns let you vary your sentences:</p><ul class="clean"><li><b>a rise / an increase / growth</b>; <b>a fall / a decrease / a decline / a drop</b></li><li><b>a ${T('rise in','rise in')} + the thing:</b> <i>a rise in cycling</i></li><li><b>a rise of + the amount:</b> <i>a rise of 32,000</i></li></ul>${insight('Two patterns','<b>There was</b> a rise of 9,000 in the number of cyclists between 2010 and 2015. / The period from 2005 to 2010 <b>saw</b> a fall of 14 million in admissions.')}${mistake('<s>There was a rise of cycling.</s> “Of” is for the amount; “in” is for the thing: <i>a rise in cycling</i>.')}${take('A rise in + the thing. A rise of + the amount.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c1-noun"></div><div data-act="c1-build" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: cycling and cinemas',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the changes in both graphs.</p>${chart('bike2')}${chart('cine2')}<ul class="clean" style="font-size:15px"><li>At least one verb with by or to.</li><li>At least one noun phrase: a rise of, a fall in.</li><li>Past simple, correct irregular forms.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Verbs for up (rise, increase), down (fall, decline) and no change (remain stable).','Rise, rose, risen; fall, fell, fallen; grow, grew, grown.','From = start, to = end, by = the size of the change.','A rise in + the thing; a rise of + the amount.']})
];

const acts={
'c1-dir':{type:'sort',level:'Guided',skill:'Verbs of change',decision:'What direction does each verb describe?',cats:['Up','Down','No change'],
  items:[{w:'climbed',c:0,m:'went up.'},{w:'declined',c:1,m:'went down.'},{w:'remained stable',c:2,m:'no change.'},{w:'grew',c:0,m:'went up.'},{w:'dropped',c:1,m:'went down.'},{w:'stayed the same',c:2,m:'no change.'}]},
'c1-pick':{type:'choice',level:'Supported',skill:'Choosing the verb',decision:'Which sentence describes the cinema graph accurately?',
  opts:[{t:'Cinema admissions declined in every five-year period.',ok:1,why:'120, 112, 98, 90, 84, 80: down every time.'},{t:'Cinema admissions remained stable.',why:'They fell by 40 million.'},{t:'Cinema admissions climbed to 80 million.',why:'80 million was the lowest point: they fell to it.'}]},
'c1-forms':{type:'fix',level:'Supported',skill:'Irregular verbs',decision:'Fix the verb in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The number of cyclists rised to 50,000.',ok:/\brose to 50,000/i,bad:/rised/i,hint:'“Rise” is irregular.',err:'rised',fix:'rose',why:'The past simple of rise is rose.',model:'The number of cyclists rose to 50,000.'},
         {wrong:'Cinema admissions falled to 80 million.',ok:/\bfell to 80/i,bad:/falled/i,hint:'“Fall” is irregular.',err:'falled',fix:'fell',why:'The past simple of fall is fell.',model:'Cinema admissions fell to 80 million.'},
         {wrong:'Between 2010 and 2015, cycling growed by 9,000.',ok:/\bgrew by 9,000/i,bad:/growed/i,hint:'“Grow” is irregular.',err:'growed',fix:'grew',why:'The past simple of grow is grew.',model:'Between 2010 and 2015, cycling grew by 9,000.'},
         {wrong:'In 2005, admissions have fell to 112 million.',ok:/\b(admissions )?fell to 112/i,bad:/have fell/i,hint:'A finished year needs the past simple.',err:'have fell',fix:'fell',why:'2005 is finished: past simple. And “have” would need the participle, fallen.',model:'In 2005, admissions fell to 112 million.'}]},
'c1-by1':{type:'choice',level:'Supported',skill:'By or to',decision:'Between 2000 and 2025, cycling rose ___.',prompt:'18,000 in 2000; 50,000 in 2025.',
  opts:[{t:'by 32,000 to 50,000',ok:1,why:'By = the change (50,000 − 18,000); to = the end point.'},{t:'by 50,000',why:'50,000 is the end point, not the change.'},{t:'to 32,000',why:'32,000 is the change, not the end point.'}]},
'c1-by2':{type:'choice',level:'Supported',skill:'By or to',decision:'Which sentence about cinema admissions is accurate?',
  opts:[{t:'Admissions fell by a third, from 120 million to 80 million.',ok:1,why:'40 million is a third of 120 million.'},{t:'Admissions fell by 80 million.',why:'They fell to 80 million, by 40 million.'},{t:'Admissions fell by half.',why:'Half of 120 million would leave 60 million.'}]},
'c1-noun':{type:'binary',level:'Supported',skill:'Nouns of change',decision:'Is each sentence correct?',labels:['Correct','Not correct'],
  items:[{t:'There was a rise of 9,000 in the number of cyclists.',a:0,right:'Of + amount; in + thing.',wrong:'It is correct: a rise of 9,000 in the number of cyclists.'},
         {t:'There was a fall of cinema admissions.',a:1,right:'Right. A fall in admissions.',wrong:'“Of” needs an amount. Use: a fall in cinema admissions.'},
         {t:'The period saw steady growth in cycling.',a:0,right:'Growth in + thing.',wrong:'It is correct: growth in cycling.'},
         {t:'There was an increase in 32,000.',a:1,right:'Right. An increase of 32,000.',wrong:'With an amount, use “of”: an increase of 32,000.'}]},
'c1-build':{type:'builder',level:'Supported',skill:'Noun phrases',decision:'Build a sentence about the biggest fall in admissions.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Between 2005 and 2010,','there was','a fall of 14 million','in cinema admissions.'],
  distract:[{t:'a fall in 14 million',why:'With an amount, use “of”.',fix:'a fall of 14 million'},{t:'there were',why:'“A fall” is singular: there was.',fix:'there was'}],
  right:'Time, there was, of + amount, in + thing.',orderMsg:'All the right pieces, but check the order: the time, there was, the amount, the thing.',incompleteMsg:'Good so far, but incomplete. Add what fell.'},
'c1-write':{type:'write',level:'Independent',skill:'Verbs and nouns of change',decision:'Write one body paragraph about both graphs.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'The number of people cycling to work…'}],
  checks:[{t:'You described both graphs.',fix:'Describe cycling and cinema admissions.',fn:v=>/cycl/i.test(v.a)&&/cinema|admission/i.test(v.a)},
          {t:'You used a verb with “by” or “to”.',fix:'Add a verb pattern: rose by 32,000, fell to 80 million.',fn:v=>/\b(rose|fell|grew|increased|decreased|declined|dropped|climbed)\s+(\w+ly\s+)?(by|to)\b/i.test(v.a)},
          {t:'You used a noun phrase of change.',fix:'Add a noun phrase: a rise of 9,000, a fall in admissions.',fn:v=>/\b(a|an|the)\s+(\w+\s+)?(rise|increase|fall|decrease|decline|drop|growth)\s+(of|in)\b/i.test(v.a)},
          {t:'Your irregular verbs are correct.',fix:'Check: rose, fell, grew (not rised, falled, growed).',fn:v=>!/\b(rised|falled|growed|has rose|have rose|has fell|have fell|had fell)\b/i.test(v.a)},
          {t:'You gave figures with their units.',fix:'Give figures with units: 50,000 people, 80 million.',fn:v=>/\d{2},000|million/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p>The number of people cycling to work in the city <button type="button" class="hl" data-n="0">rose in every five-year period, from 18,000 in 2000 to 50,000 in 2025</button>, an increase of 32,000. <button type="button" class="hl" data-n="1">The biggest rise, of 9,000, came between 2010 and 2015.</button> Cinema admissions, by contrast, fell in every period. <button type="button" class="hl" data-n="2">There was a fall of 14 million between 2005 and 2010 alone</button>, and by 2025 admissions had dropped to 80 million, <button type="button" class="hl" data-n="3">a third lower than in 2000</button>.</p>`,
  notes:['A verb with from … to: the start and the end.','A noun phrase: the biggest rise, of + amount.','There was + a fall of + amount.','A calculated comparison: 40 million is a third of 120 million.'],
  self:['I used the past simple with correct irregular forms.','I used by and to accurately.','I used at least one noun phrase.','I calculated before writing “by”.'],revise:1}
};

const gloss={
  'rose by':{term:'rose by',def:'Rose by + the size of the change. Compare: rose to + the end point.',path:'M30,80 L210,20 M210,20 V80',ex:'“Cycling rose by 32,000 to 50,000.”'},
  'rise in':{term:'a rise in',def:'A noun phrase: a rise in + the thing that rose. For the amount, use “a rise of”.',path:'M30,80 L120,60 L210,20',ex:'“There was a rise in cycling.”'},
  'remain stable':{term:'remain stable',def:'Stay at about the same level.',path:'M20,45 L80,43 L140,46 L220,44',ex:'“Sales remained stable at 5.6 million between 2022 and 2024.”'}
};

const retrieval={
 'c1-s1':[{q:'Which verb describes a downward change?',opts:[{t:'declined',ok:1,why:'Down.'},{t:'climbed',why:'Up.'}]}],
 'c1-s2':[{q:'The past simple of “rise” is…',opts:[{t:'rose',ok:1,why:'Irregular.'},{t:'rised',why:'Not a word.'}]}],
 'c1-s3':[{q:'120 → 80 million. Admissions fell ___ 40 million.',opts:[{t:'by',ok:1,why:'The size of the change.'},{t:'to',why:'To is the end point: 80 million.'}]}],
 'c1-s4':[{q:'A rise ___ cycling.',opts:[{t:'in',ok:1,why:'In + the thing.'},{t:'of',why:'Of + the amount.'}]}],
 'c1-s5':[{q:'Cycling 18,000 → 50,000 is…',opts:[{t:'almost three times',ok:1,why:'50 ÷ 18 ≈ 2.8.'},{t:'more than three times',why:'3 × 18,000 = 54,000.'}]}]
};

const minitest=[
 {q:'Which verb describes no change?',opts:[{t:'remained stable',ok:1,why:'No change.'},{t:'dropped',why:'Down.'},{t:'grew',why:'Up.'}],sp:'c1-s1'},
 {q:'Which verb suits a line that goes up steadily?',opts:[{t:'climbed',ok:1,why:'An upward verb.'},{t:'declined',why:'Down.'},{t:'remained',why:'No change.'}],sp:'c1-s1'},
 {q:'Choose the correct sentence.',opts:[{t:'Admissions fell to 80 million.',ok:1,why:'fell'},{t:'Admissions falled to 80 million.',why:'Irregular: fell.'},{t:'Admissions fallen to 80 million.',why:'Participle without have.'}],sp:'c1-s2'},
 {q:'The past simple of “grow” is…',opts:[{t:'grew',ok:1,why:'Irregular.'},{t:'growed',why:'Not a word.'},{t:'grown',why:'That is the participle.'}],sp:'c1-s2'},
 {q:'18,000 → 50,000. Cycling rose ___ 50,000.',opts:[{t:'to',ok:1,why:'The end point.'},{t:'by',why:'By would need the change: 32,000.'},{t:'of',why:'Of follows a noun.'}],sp:'c1-s3'},
 {q:'Which is accurate?',opts:[{t:'Admissions fell by 40 million.',ok:1,why:'120 − 80.'},{t:'Admissions fell by 80 million.',why:'They fell to 80 million.'},{t:'Admissions fell by 120 million.',why:'That would leave none.'}],sp:'c1-s3'},
 {q:'Choose the correct noun phrase.',opts:[{t:'a rise of 9,000 in the number of cyclists',ok:1,why:'Of + amount, in + thing.'},{t:'a rise in 9,000 of the number of cyclists',why:'Swapped.'},{t:'a rise of the number of cyclists',why:'In + thing.'}],sp:'c1-s4'},
 {q:'Choose the correct sentence.',opts:[{t:'There was a fall in admissions.',ok:1,why:'In + thing.'},{t:'There were a fall in admissions.',why:'Singular: was.'},{t:'There was a fall of admissions.',why:'Of + amount.'}],sp:'c1-s4'}
];

const cannow=[['Choose verbs for up, down and no change','c1-s1'],['Use irregular forms correctly','c1-s2'],['Use by, to and from accurately','c1-s3'],['Use nouns of change with of and in','c1-s4'],['Write a paragraph with verbs and nouns of change','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{bike:C.bike,cine:C.cine,bike2:cp('bike','ch-m5bike2'),cine2:cp('cine','ch-m5cine2')},retrieval,minitest,cannow});
})();
