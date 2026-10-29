/* ==========================================================================
   MODULE 5 · CHAPTER 3 · TIME EXPRESSIONS AND TENSES
   ACTIVITY IDS (type · level)
     c3-tense   binary    Guided       Step 1  Right tense?
     c3-by      choice    Supported    Step 2  By + year
     c3-pp      fix       Supported    Step 2  The past perfect
     c3-pres    sort      Supported    Step 3  Which tense does the task need?
     c3-prep    fix       Supported    Step 4  Prepositions of time
     c3-build   builder   Supported    Step 4  A time phrase
     c3-write   write     Independent  Step 5  The library
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=TRD;
const P='Chapter 3',CT='Time Expressions and Tenses',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:3,title:CT,lede:'Every change happens at a time, and the tense and the time phrase must match it. Mixing them up is one of the most common grammar errors in Task 1. In this chapter I’ll show you which tense to use for past data, when the past perfect helps, when the present perfect is right, and the prepositions that go with each.',
  outcomes:['use the past simple for finished years',`use the past perfect with ${T('by + year')}`,'decide whether a task needs the present perfect','use prepositions of time accurately: in, between … and, from … to, by'],
  illus:illus('M30,100 L140,70 L250,85 L380,40'),
  steps:[[1,'c3-s1','The past simple','Finished years','Discover'],[2,'c3-s2','The past perfect','By + year','Understand'],[3,'c3-s3','The present perfect','When the period reaches now','Understand'],[4,'c3-s4','Prepositions of time','In, between, from, by','Practise'],[5,'c3-s5','Chapter challenge','The library','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','The past simple',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The past simple</h2>${vid({title:'The past simple',len:'90 seconds',script:['Show the library graph: 1995 to 2025.','Ask: are these years finished? Yes. So the past simple.','Read sentences aloud: membership rose; it fell; it stood at 47,000.','Show the error: membership rises. The present simple says it is happening now.']})}<p>When the years on a chart are finished, use the past simple:</p>${chart('lib')}<ul class="clean"><li>Membership <b>rose</b> between 1995 and 2005.</li><li>It <b>fell</b> to 47,000 in 2015.</li><li>In 2025, it <b>stood at</b> 61,000.</li></ul>${mistake('<s>Between 2005 and 2015, membership falls.</s> The years are finished: <i>membership fell</i>.')}${take('Finished years: past simple, all the way through.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c3-tense"></div>`}),

sp('c3-s2','The past perfect',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The past perfect with by</h2>${vid({title:'The past perfect',len:'90 seconds',script:['Write: by 2005. Say: by means at or before that time.','The change was complete by then: had risen.','Write: By 2005, membership had risen to 52,000.','Contrast: In 2005, membership stood at 52,000. In + year: past simple.']})}<p>“${T('by + year','By + year')}” means “at or before that time”. The change was complete by then, so use the past perfect:</p>${insight('By + year','<b>By 2005</b>, membership <b>had risen</b> to 52,000.')}<ul class="clean"><li><b>In 2005</b>, membership <b>stood at</b> 52,000. (past simple)</li><li><b>By 2005</b>, it <b>had risen</b> to 52,000. (past perfect)</li></ul>${mistake('<s>By 2025, membership rose to 61,000.</s> With “by”, use the past perfect: <i>had risen</i>.')}${take('In + year: past simple. By + year: past perfect (had + past participle).')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c3-by"></div><div data-act="c3-pp" style="margin-top:16px"></div>`}),

sp('c3-s3','The present perfect',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The present perfect</h2><p>The present perfect (<i>has risen</i>) links the past to now. In Task 1 it is right only when the period reaches the present:</p><ul class="clean"><li><b>“from 2015 to the present”</b>, “over the last ten years”: <i>membership has risen</i>.</li><li><b>“from 1995 to 2025”</b>, finished years: <i>membership rose</i>.</li></ul>${note('If you aren’t sure, the past simple is almost always safe for data with years.')}<div class="clear"></div>${mistake('<s>In 2015, membership has fallen to 47,000.</s> A finished year never takes the present perfect: <i>fell</i>.')}${take('Present perfect only when the period runs up to now. Never with a finished year.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c3-pres"></div>`}),

sp('c3-s4','Prepositions of time',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Prepositions of time</h2><ul class="clean"><li><b>in</b> + year: in 2015</li><li><b>between</b> 2005 <b>and</b> 2015 (never “between … to”)</li><li><b>from</b> 2005 <b>to</b> 2015</li><li><b>by</b> 2025: at or before then</li><li><b>over</b> the period, <b>over</b> the next ten years, <b>in</b> the following decade</li></ul>${mistake('<s>Between 2005 to 2015, membership fell.</s> Between … and; from … to. Don’t mix them.')}${insight('Moving through time','Membership rose <b>over the following decade</b>. It then fell <b>between 2005 and 2015</b>, before recovering <b>in the final ten years</b>.')}${take('Between … and; from … to; in + year; by + year; over the period.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c3-prep"></div><div data-act="c3-build" style="margin-top:16px"></div>`}),

sp('c3-s5','Chapter challenge: the library',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the changes in library membership.</p>${chart('lib2')}<ul class="clean" style="font-size:15px"><li>The past simple for finished years.</li><li>At least one past perfect with by.</li><li>Varied, accurate time phrases.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Finished years: past simple.','By + year: past perfect (had + past participle).','Present perfect only when the period reaches now, never with a finished year.','Between … and; from … to; in + year; over the period.']})
];

const acts={
'c3-tense':{type:'binary',level:'Guided',skill:'The past simple',decision:'Is the tense right for this graph?',labels:['Right','Wrong'],
  items:[{t:'Membership rose between 1995 and 2005.',a:0,right:'Finished years: past simple.',wrong:'It is right: finished years take the past simple.'},
         {t:'In 2015, membership falls to 47,000.',a:1,right:'Right. 2015 is finished: fell.',wrong:'The present simple describes now. Use fell.'},
         {t:'In 2025, membership stood at 61,000.',a:0,right:'Past simple for a finished year.',wrong:'It is right: stood at, past simple.'},
         {t:'Membership is rising between 2015 and 2025.',a:1,right:'Right. Use rose.',wrong:'Finished years: rose, not is rising.'}]},
'c3-by':{type:'choice',level:'Supported',skill:'By + year',decision:'Choose the best sentence.',
  opts:[{t:'By 2025, membership had risen to 61,000.',ok:1,why:'By + year: past perfect.'},{t:'By 2025, membership has risen to 61,000.',why:'2025 is finished: had risen.'},{t:'By 2025, membership was rising to 61,000.',why:'Use the past perfect with by.'}]},
'c3-pp':{type:'fix',level:'Supported',skill:'The past perfect',decision:'Fix the verb in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'By 2005, membership rose to 52,000.',ok:/had (risen|grown|increased|climbed) to 52,000/i,bad:/membership rose/i,hint:'With “by”, use had + past participle.',err:'rose',fix:'had risen',why:'By + year needs the past perfect.',model:'By 2005, membership had risen to 52,000.'},
         {wrong:'By 2015, it had fell to 47,000.',ok:/had (fallen|dropped|declined|decreased) to 47,000/i,bad:/had fell/i,hint:'The past participle of fall is irregular.',err:'had fell',fix:'had fallen',why:'Had + past participle: fallen.',model:'By 2015, it had fallen to 47,000.'},
         {wrong:'By 2025, membership had rose to 61,000.',ok:/had (risen|grown|increased|climbed) to 61,000/i,bad:/had rose/i,hint:'Rise, rose, risen.',err:'had rose',fix:'had risen',why:'The past participle of rise is risen.',model:'By 2025, membership had risen to 61,000.'}]},
'c3-pres':{type:'sort',level:'Supported',skill:'Choosing the tense',decision:'Which tense does each task need for the changes?',cats:['Past simple','Present perfect','Future'],
  items:[{w:'The graph shows library membership from 1995 to 2025.',c:0,m:'finished years.'},{w:'The graph shows how membership has changed over the last ten years.',c:1,m:'a period that reaches now.'},{w:'The graph shows projected membership from 2030 to 2050.',c:2,m:'projections: will, is expected to.'},{w:'The chart compares sales in 2010 and 2020.',c:0,m:'two finished years.'},{w:'The graph shows sales from 2018 to the present.',c:1,m:'“to the present” reaches now.'}]},
'c3-prep':{type:'fix',level:'Supported',skill:'Prepositions of time',decision:'Fix the preposition in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Between 2005 to 2015, membership fell.',ok:/between 2005 and 2015|from 2005 to 2015/i,bad:/between 2005 to/i,hint:'Between … and; from … to.',err:'between … to',fix:'between … and',why:'Don’t mix the two patterns.',model:'Between 2005 and 2015, membership fell.'},
         {wrong:'On 2025, membership reached 61,000.',ok:/^in 2025/i,bad:/^on 2025/i,hint:'Years take “in”.',err:'On 2025',fix:'In 2025',why:'In + year.',model:'In 2025, membership reached 61,000.'},
         {wrong:'Membership rose since 1995 to 2005.',ok:/from 1995 to 2005|between 1995 and 2005/i,bad:/since 1995 to/i,hint:'“Since” needs the present perfect and no end year.',err:'since … to',fix:'from … to',why:'For a finished period, use from … to or between … and.',model:'Membership rose from 1995 to 2005.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'Time phrases',decision:'Build a sentence about the last decade.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Membership then recovered strongly','in the final ten years,','and by 2025','it had reached 61,000.'],
  distract:[{t:'it has reached 61,000.',why:'2025 is finished, and “by” needs the past perfect: had reached.',fix:'it had reached 61,000.'},{t:'and on 2025',why:'Years take “in” or “by”, never “on”.',fix:'and by 2025'}],
  right:'Past simple for the change, by + past perfect for the end point.',orderMsg:'All the right pieces, but check the order: the change, when, by + year, the result.',incompleteMsg:'Good so far, but incomplete. Add where membership ended.'},
'c3-write':{type:'write',level:'Independent',skill:'Tenses and time phrases',decision:'Write one body paragraph about library membership.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'In 1995, the library had…'}],
  checks:[{t:'You covered all four years.',fix:'Include 1995, 2005, 2015 and 2025.',fn:v=>/1995/.test(v.a)&&/2005/.test(v.a)&&/2015/.test(v.a)&&/2025/.test(v.a)},
          {t:'You used the past perfect with “by”.',fix:'Add one: By 2005, membership had risen to 52,000.',fn:v=>/\bby (19|20)\d\d\b[^.]*\bhad\s+(\w+ed|risen|fallen|grown|reached|dropped|climbed|recovered)\b/i.test(v.a)},
          {t:'No present tenses for finished years.',fix:'Use the past simple: rose, fell, not rises, has risen.',fn:v=>!/\b(rises|falls|grows|has risen|has fallen|has grown|have risen|is rising|is falling)\b/i.test(v.a)},
          {t:'Your prepositions of time are correct.',fix:'Check: between … and, from … to, in + year (not on 2015, not between … to).',fn:v=>!/between (19|20)\d\d to|\bon (19|20)\d\d|since (19|20)\d\d to/i.test(v.a)},
          {t:'You gave figures with their units.',fix:'Give figures in full: 52,000 members.',fn:v=>/\d{2},000/.test(v.a)},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">In 1995, the library had 40,000 members.</button> Membership rose over the following decade, <button type="button" class="hl" data-n="1">and by 2005 it had reached 52,000</button>. <button type="button" class="hl" data-n="2">Between 2005 and 2015, however, it fell by 5,000</button> to 47,000. It then recovered strongly in the final ten years of the period, climbing to 61,000 in 2025, its highest level. <button type="button" class="hl" data-n="3">Over the thirty years as a whole, membership rose by just over half.</button></p>`,
  notes:['In + year, past simple.','By + year, past perfect.','Between … and, past simple.','Over the period: 21,000 on 40,000 = 52.5%, just over half.'],
  self:['I used the past simple for finished years.','I used the past perfect with by.','I used between … and and from … to correctly.','I didn’t use the present perfect for finished years.'],revise:1}
};

const gloss={
  'by + year':{term:'by + year',def:'At or before that time. It usually takes the past perfect: by 2005, it had risen.',path:'M30,80 L180,30 M180,15 V90',ex:'“By 2005, membership had risen to 52,000.”'},
  'stood at':{term:'stood at',def:'Was (at a particular level). A neutral way to give a figure.',path:'M30,50 H210',ex:'“In 2025, membership stood at 61,000.”'},
  'recovered':{term:'recovered',def:'Rose again after a fall.',path:'M20,40 L100,70 L220,20',ex:'“Membership recovered strongly after 2015.”'}
};

const retrieval={
 'c3-s1':[{q:'Data for 1995 to 2025 takes…',opts:[{t:'the past simple',ok:1,why:'Finished years.'},{t:'the present simple',why:'That is for now.'}]}],
 'c3-s2':[{q:'“By 2015, membership ___ to 47,000.”',opts:[{t:'had fallen',ok:1,why:'By + past perfect.'},{t:'has fallen',why:'2015 is finished.'}]}],
 'c3-s3':[{q:'When is the present perfect right?',opts:[{t:'When the period reaches now',ok:1,why:'“to the present”.'},{t:'For any past year',why:'Never with a finished year.'}]}],
 'c3-s4':[{q:'Between 2005 ___ 2015.',opts:[{t:'and',ok:1,why:'Between … and.'},{t:'to',why:'From … to.'}]}],
 'c3-s5':[{q:'40,000 → 61,000 is a rise of…',opts:[{t:'just over half',ok:1,why:'52.5%.'},{t:'almost double',why:'Double would be 80,000.'}]}]
};

const minitest=[
 {q:'Choose the correct sentence.',opts:[{t:'In 2015, membership fell to 47,000.',ok:1,why:'Past simple.'},{t:'In 2015, membership falls to 47,000.',why:'Finished year.'},{t:'In 2015, membership has fallen to 47,000.',why:'No present perfect with a finished year.'}],sp:'c3-s1'},
 {q:'Which describes a finished year neutrally?',opts:[{t:'stood at 61,000',ok:1,why:'Past simple.'},{t:'is standing at 61,000',why:'Present.'},{t:'will stand at 61,000',why:'Future.'}],sp:'c3-s1'},
 {q:'Choose the correct sentence.',opts:[{t:'By 2005, membership had risen to 52,000.',ok:1,why:'By + past perfect.'},{t:'By 2005, membership had rose to 52,000.',why:'Participle: risen.'},{t:'By 2005, membership rises to 52,000.',why:'Past perfect.'}],sp:'c3-s2'},
 {q:'“In 2005” or “by 2005” with “had risen”?',opts:[{t:'by 2005',ok:1,why:'By goes with the past perfect.'},{t:'in 2005',why:'In + year takes the past simple.'},{t:'Either',why:'By.'}],sp:'c3-s2'},
 {q:'“The graph shows sales from 2018 to the present.” Which tense?',opts:[{t:'Present perfect',ok:1,why:'Reaches now.'},{t:'Past perfect',why:'No “by”.'},{t:'Future',why:'Not projections.'}],sp:'c3-s3'},
 {q:'Which is wrong?',opts:[{t:'In 2015, membership has fallen.',ok:1,why:'Finished year.'},{t:'Membership has risen over the last ten years.',why:'Correct: reaches now.'},{t:'Membership fell in 2015.',why:'Correct.'}],sp:'c3-s3'},
 {q:'Choose the correct phrase.',opts:[{t:'from 2005 to 2015',ok:1,why:'From … to.'},{t:'between 2005 to 2015',why:'Between … and.'},{t:'since 2005 to 2015',why:'Since has no end year.'}],sp:'c3-s4'},
 {q:'Choose the correct phrase.',opts:[{t:'in 2025',ok:1,why:'In + year.'},{t:'on 2025',why:'On is for days.'},{t:'at 2025',why:'At is for times.'}],sp:'c3-s4'}
];

const cannow=[['Use the past simple for finished years','c3-s1'],['Use the past perfect with by + year','c3-s2'],['Decide when the present perfect is right','c3-s3'],['Use prepositions of time accurately','c3-s4'],['Write a paragraph with accurate tenses and time phrases','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{lib:C.lib,lib2:cp('lib','ch-m5lib2')},retrieval,minitest,cannow});
})();
