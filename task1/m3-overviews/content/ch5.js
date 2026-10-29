/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 5 · COMMON OVERVIEW MISTAKES
   ACTIVITY IDS (type · level)
     c5-type    sort      Guided       Step 1  What is wrong?
     c5-fig     fix       Supported    Step 2  Figures and details
     c5-opin    binary    Supported    Step 3  Acceptable or not?
     c5-concl   fix       Supported    Step 3  No conclusion, no reasons
     c5-vague   choice    Supported    Step 4  Make it clear
     c5-acc     binary    Independent  Step 4  Accurate or not?
     c5-write   write     Independent  Step 5  Rewrite a weak overview
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,figs,opening,review,addChapter}=OE;
const {C}=OV;
const P='Chapter 5',CT='Common Overview Mistakes',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="800" font-size="13">${['Figures','Details','Opinions','Conclusions','Vague'].map((t,i)=>`<rect x="${14+i*76}" y="52" width="68" height="44" rx="10" fill="#EDE8F7"/><text x="${48+i*76}" y="79" text-anchor="middle" font-size="11" fill="#4E4178">${t}</text><path d="M${20+i*76},58 L${76+i*76},90" stroke="#A84A12" stroke-width="2.5"/>`).join('')}</g></svg>`;

const spreads=[
opening({n:5,title:CT,lede:'When I marked Task 1, the same overview mistakes came up again and again: figures, too much detail, opinions, conclusions and overviews so vague they said nothing. Each one can cost you marks. In this chapter you’ll learn to spot and fix all five.',
  outcomes:['recognise the five common overview mistakes','remove figures and details without losing the main point',`replace opinions, reasons and conclusions with ${T('description')}`,'make a vague or inaccurate overview clear and accurate'],
  illus:ill,
  steps:[[1,'c5-s1','Spot the mistake','Five common problems','Discover'],[2,'c5-s2','Figures and details','Keep the pattern, lose the numbers','Understand'],[3,'c5-s3','Opinions and conclusions','Describe, don’t judge','Understand'],[4,'c5-s4','Vague or inaccurate','Say something true and specific','Practise'],[5,'c5-s5','Chapter challenge','Rewrite a weak overview','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','Spot the mistake',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Spot the mistake</h2>${vid({title:'Five common mistakes',len:'2 minutes',script:['Show the attractions table.','Read five weak overviews aloud, one for each mistake.','Ask students to name the problem each time.','Finish: figures, details, opinions, conclusions, vagueness.']})}<p>These are the five mistakes I saw most often as an examiner:</p><ul class="clean"><li><b>Figures:</b> exact numbers in the overview.</li><li><b>Details:</b> one small change instead of the big picture.</li><li><b>Opinions or reasons:</b> judging the data or explaining it.</li><li><b>Conclusions:</b> “In conclusion,…” at the end, often repeating the body.</li><li><b>Vagueness:</b> an overview that says nothing specific.</li></ul>${chart('attr')}${take('Figures, details, opinions, conclusions, vagueness: check every overview for all five.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c5-type"></div>`}),

sp('c5-s2','Figures and details',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Figures and details</h2>${vid({title:'Figures and details',len:'90 seconds',script:['Read: Overall, the aquarium rose from 180,000 to 310,000.','Ask: what is the point behind the figures? The aquarium grew most.','Rewrite: Overall, the aquarium saw the biggest increase and became the most visited attraction.']})}<p>Both mistakes have the same fix: ask what the figure or detail <i>shows</i>, and write that instead.</p><ul class="clean"><li><s>Overall, the aquarium rose from 180,000 to 310,000 visitors.</s> → <i>Overall, the aquarium saw by far the largest increase.</i></li><li><s>Overall, the gallery lost 10,000 visitors.</s> → <i>The zoo and the gallery both attracted slightly fewer visitors.</i></li></ul>${note('Years are fine in an overview (“by 2025”). Figures for the data are not.')}<div class="clear"></div>${take('Ask what the figure shows, and write that instead.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c5-fig"></div>`}),

sp('c5-s3','Opinions and conclusions',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Opinions and conclusions</h2>${vid({title:'Opinions and conclusions',len:'90 seconds',script:['Read: Overall, the aquarium is the best attraction in the city.','Say: best is a judgement. The table shows visitors.','Read: In conclusion, the aquarium became popular because it was modernised.','Say: no conclusion heading, and no reasons the table doesn’t give.']})}<p>Task 1 asks you to report the data. It doesn’t ask what you think, or why things happened.</p><ul class="clean"><li><b>Opinion:</b> <s>the aquarium was the best attraction</s> → <i>the aquarium attracted the most visitors</i>.</li><li><b>Reason:</b> <s>because families prefer animals</s> → leave it out.</li><li><b>Conclusion:</b> <s>In conclusion,</s> → put the overview after the introduction, starting “Overall,”.</li></ul>${insight('The examiner’s view','A conclusion that repeats the body adds no information. If it gives opinions or reasons, it can also count against your Task Achievement score.')}${take('Report, don’t judge or explain. Use “Overall,”, not “In conclusion,”.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c5-opin"></div><div data-act="c5-concl" style="margin-top:16px"></div>`}),

sp('c5-s4','Vague or inaccurate',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Vague or inaccurate</h2><p>A vague overview is true of almost any chart. An inaccurate one is specific, but wrong.</p><ul class="clean"><li><b>Vague:</b> <s>Overall, there were some changes in visitor numbers.</s></li><li><b>Inaccurate:</b> <s>Overall, all four attractions became more popular.</s> The zoo and the gallery fell.</li><li><b>Clear and accurate:</b> <i>Overall, the aquarium grew far more than any other attraction and overtook the zoo as the most visited, while the zoo and the gallery saw small falls.</i></li></ul>${mistake('<s>Overall, the table shows interesting information.</s> This could be written without looking at the table.')}${take('Test your overview: could it describe any chart? Then it is too vague. Is every word true? Check before you move on.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c5-vague"></div><div data-act="c5-acc" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: rewrite a weak overview',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>This overview has four of the five mistakes. Rewrite it as a clear, accurate overview of the attractions table.</p>${taskbox('<b>Weak overview:</b> In conclusion, the aquarium was the best attraction because it went up from 180,000 to 310,000 visitors, and there were some other changes too.')}${chart('attr2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Check every overview for five mistakes: figures, details, opinions, conclusions, vagueness.','Replace a figure with what it shows.','Report the data: no opinions, no reasons, no “In conclusion”.','Make it specific and true: test it against every row or line.']})
];

const acts={
'c5-type':{type:'sort',level:'Guided',skill:'Spotting mistakes',decision:'What is wrong with each overview?',cats:['Figures','Opinion or reason','Vague','Conclusion'],
  items:[{w:'Overall, the aquarium had 310,000 visitors in 2025.',c:0,m:'an exact figure.'},{w:'Overall, the aquarium was the most impressive attraction.',c:1,m:'“impressive” is a judgement.'},{w:'Overall, visitor numbers changed in different ways.',c:2,m:'true of almost any table.'},{w:'In conclusion, the aquarium became the most visited attraction.',c:3,m:'Task 1 has an overview, not a conclusion.'},{w:'Overall, the castle grew because of its new exhibition.',c:1,m:'a reason the table doesn’t give.'}]},
'c5-fig':{type:'fix',level:'Supported',skill:'Removing figures',decision:'Rewrite each overview sentence without figures.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Overall, the aquarium rose from 180,000 to 310,000 visitors.',ok:/aquarium/i,bad:/\d/,hint:'What does the rise show? Say that, without numbers.',err:'from 180,000 to 310,000',fix:'saw by far the largest increase',why:'Keep the meaning; lose the figures.',model:'Overall, the aquarium saw by far the largest increase in visitors.'},
         {wrong:'Overall, the zoo fell by 10,000 and the gallery by 10,000.',ok:/(slightly|small|a little|both)/i,bad:/\d/,hint:'Both fell a little. Say that.',err:'by 10,000 … by 10,000',fix:'both attracted slightly fewer visitors',why:'The pattern, not the amounts.',model:'Overall, the zoo and the gallery both attracted slightly fewer visitors.'}]},
'c5-opin':{type:'binary',level:'Supported',skill:'Opinions and reasons',decision:'Acceptable in a Task 1 overview?',labels:['Acceptable','Not acceptable'],
  items:[{t:'Overall, the aquarium attracted the most visitors by 2025.',a:0,right:'A fact from the table.',wrong:'This reports the data: acceptable.'},
         {t:'Overall, the gallery was disappointing.',a:1,right:'Right. “Disappointing” is an opinion.',wrong:'“Disappointing” is a judgement, not data.'},
         {t:'Overall, the castle became more popular because of tourism.',a:1,right:'Right. The table gives no reasons.',wrong:'The table doesn’t explain why: no reasons.'},
         {t:'Overall, two attractions grew and two saw small falls.',a:0,right:'A clear pattern.',wrong:'This summarises the data: acceptable.'}]},
'c5-concl':{type:'fix',level:'Supported',skill:'No conclusions',decision:'Fix each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'In conclusion, the aquarium overtook the zoo.',ok:/^overall,? the aquarium overtook the zoo/i,bad:/in conclusion/i,hint:'Change the opener.',err:'In conclusion,',fix:'Overall,',why:'Task 1 has an overview, after the introduction, not a conclusion.',model:'Overall, the aquarium overtook the zoo.'},
         {wrong:'Overall, the castle grew because it was renovated.',ok:/^overall,? the castle (grew|became|attracted|saw)/i,bad:/because/i,hint:'Keep the fact; remove the reason.',err:'because it was renovated',fix:'(remove the reason)',why:'The table gives no reasons.',model:'Overall, the castle grew in popularity.'}]},
'c5-vague':{type:'choice',level:'Supported',skill:'Clarity',decision:'Which overview is clear and specific?',
  opts:[{t:'Overall, the aquarium grew far more than any other attraction and overtook the zoo as the most visited, while the zoo and the gallery saw small falls.',ok:1,why:'Specific, true and figure-free.'},{t:'Overall, there were some changes in visitor numbers.',why:'True of almost any table: too vague.'},{t:'Overall, the table shows interesting information about attractions.',why:'Says nothing about the data.'}]},
'c5-acc':{type:'binary',level:'Independent',skill:'Accuracy',decision:'Is each overview claim accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'All four attractions became more popular.',a:1,right:'Right. The zoo and the gallery fell.',wrong:'Check: 300 → 290 and 150 → 140 are falls.'},
         {t:'The zoo was the most visited attraction in 2015.',a:0,right:'300,000: the highest in 2015.',wrong:'It is accurate: 300 was the top figure in 2015.'},
         {t:'The aquarium was the most visited attraction in 2025.',a:0,right:'310,000: the highest in 2025.',wrong:'It is accurate: 310 is the top figure in 2025.'},
         {t:'The castle overtook the zoo.',a:1,right:'Right. The castle (260) stayed below the zoo (290).',wrong:'Check 2025: castle 260, zoo 290.'}]},
'c5-write':{type:'write',level:'Independent',skill:'Fixing overviews',decision:'Rewrite the weak overview.',prompt:'Two sentences. Then check your writing.',
  fields:[{k:'ov',label:'My improved overview',rows:5,ph:'Overall,…'}],
  checks:[{t:'It starts with “Overall,” or similar.',fix:'Start with “Overall,”, not “In conclusion,”.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.ov)},
          {t:'It has no figures.',fix:'Remove the figures.',fn:v=>v.ov.trim()&&!/\d/.test(figs(v.ov))},
          {t:'It has no opinions or reasons.',fix:'Remove “best”, “because” and other judgements or reasons.',fn:v=>!/\b(best|worst|because|impressive|disappointing|due to)\b/i.test(v.ov)},
          {t:'It reports the change of leader.',fix:'Say that the aquarium overtook the zoo, or became the most visited.',fn:v=>/aquarium/i.test(v.ov)&&/(overt|most visited|most popular|the highest|took the lead)/i.test(v.ov)},
          {t:'It says what happened to the others.',fix:'Add the zoo and the gallery: small falls.',fn:v=>/(zoo|gallery)/i.test(v.ov)&&/(fell|fewer|decline|decreas|drop|slight)/i.test(v.ov)}],
  modelTitle:'My model overview',
  model:`<p><button type="button" class="hl" data-n="0">Overall,</button> <button type="button" class="hl" data-n="1">the aquarium saw by far the largest increase in visitors</button> <button type="button" class="hl" data-n="2">and overtook the zoo to become the most visited attraction.</button> <button type="button" class="hl" data-n="3">The castle also grew in popularity, whereas the zoo and the art gallery both attracted slightly fewer visitors.</button></p>`,
  notes:['“Overall,” replaces “In conclusion,”.','“Best” and the figures are replaced by what the figures show.','The change of leader: a key feature the weak version missed.','The other attractions, specifically: this replaces “some other changes”.'],
  self:['I removed all figures.','I removed the opinion and the conclusion.','My overview is specific.','Every claim is true for every row.'],revise:1}
};

const gloss={
  'description':{term:'description',def:'Reporting what the data shows, without judging it or explaining it.',path:'M20,30 H220 M20,50 H200 M20,70 H180',ex:'“Task 1 is description, not discussion.”'},
  'vague':{term:'vague',def:'Not specific: true of almost any chart, so it tells the reader nothing.',path:'M20,50 C60,40 100,60 140,50 S200,40 220,50',ex:'“‘There were some changes’ is too vague.”'},
  'judgement':{term:'judgement',def:'An opinion about whether something is good or bad. Task 1 never asks for one.',path:'M40,70 L120,20 L200,70',ex:'“‘The best attraction’ is a judgement.”'}
};

const retrieval={
 'c5-s1':[{q:'Which is one of the five mistakes?',opts:[{t:'A conclusion with “In conclusion,”',ok:1,why:'Use an overview instead.'},{t:'Starting with “Overall,”',why:'That is correct.'}]}],
 'c5-s2':[{q:'How do you fix a figure in an overview?',opts:[{t:'Write what the figure shows',ok:1,why:'The meaning, not the number.'},{t:'Round it',why:'Still a figure.'}]}],
 'c5-s3':[{q:'“Because of tourism” in an overview is…',opts:[{t:'a reason: leave it out',ok:1,why:'Not from the data.'},{t:'fine',why:'The table gives no reasons.'}]}],
 'c5-s4':[{q:'How do you test for vagueness?',opts:[{t:'Could it describe any chart?',ok:1,why:'Then it is too vague.'},{t:'Is it short?',why:'Short can be clear.'}]}],
 'c5-s5':[{q:'Which attraction was most visited in 2025?',opts:[{t:'The aquarium',ok:1,why:'310,000.'},{t:'The zoo',why:'290,000.'}]}]
};

const minitest=[
 {q:'Which overview has a figure?',opts:[{t:'Overall, the aquarium had 310,000 visitors.',ok:1,why:'A figure.'},{t:'Overall, the aquarium grew most.',why:'No figure.'},{t:'Overall, two attractions fell slightly.',why:'No figure.'}],sp:'c5-s1'},
 {q:'Which is a vague overview?',opts:[{t:'Overall, there were some changes.',ok:1,why:'True of anything.'},{t:'Overall, the aquarium overtook the zoo.',why:'Specific.'},{t:'Overall, the castle grew.',why:'Specific.'}],sp:'c5-s1'},
 {q:'Are years acceptable in an overview?',opts:[{t:'Yes, for time: “by 2025”',ok:1,why:'Not data figures.'},{t:'No, never',why:'Years are fine.'},{t:'Only in brackets',why:'No rule like that.'}],sp:'c5-s2'},
 {q:'Which sentence is acceptable?',opts:[{t:'Overall, the gallery attracted slightly fewer visitors.',ok:1,why:'A fact.'},{t:'Overall, the gallery was disappointing.',why:'An opinion.'},{t:'Overall, the gallery fell because it was boring.',why:'Opinion and reason.'}],sp:'c5-s3'},
 {q:'What replaces “In conclusion,”?',opts:[{t:'An overview starting “Overall,”, after the introduction',ok:1,why:'Task 1 has no conclusion.'},{t:'“To sum up,”',why:'Still a conclusion.'},{t:'Nothing: just stop',why:'You need an overview.'}],sp:'c5-s3'},
 {q:'“All four attractions became more popular.” Is it accurate?',opts:[{t:'No: the zoo and the gallery fell',ok:1,why:'Check every row.'},{t:'Yes',why:'Two fell.'},{t:'It can’t be checked',why:'The table shows it.'}],sp:'c5-s4'},
 {q:'Did the castle overtake the zoo?',opts:[{t:'No: 260 against 290 in 2025',ok:1,why:'Still behind.'},{t:'Yes',why:'Check 2025.'},{t:'They were equal',why:'260 and 290.'}],sp:'c5-s4'},
 {q:'What did the weak overview miss?',opts:[{t:'The aquarium overtaking the zoo',ok:1,why:'The key change.'},{t:'The figures',why:'Figures don’t belong.'},{t:'A reason',why:'No reasons.'}],sp:'c5-s5'}
];

const cannow=[['Recognise the five common overview mistakes','c5-s1'],['Replace figures and details with what they show','c5-s2'],['Remove opinions, reasons and conclusions','c5-s3'],['Make a vague overview clear and accurate','c5-s4'],['Rewrite a weak overview','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss,charts:{attr:C.attr,attr2:cp('attr','ch-attr2')},retrieval,minitest,cannow});
})();
