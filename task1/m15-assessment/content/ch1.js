/* ==========================================================================
   MODULE 15 · ASSESSMENT AND IMPROVEMENT
   ACTIVITY IDS (type · level)
     f-reflect   write     Guided       Step 1  Where am I now?
     f-key       choice    Supported    Step 2  Final check: key features
     f-ov        choice    Supported    Step 2  Final check: overview
     f-data      fix       Supported    Step 2  Final check: data language
     f-comp      binary    Supported    Step 2  Final check: comparisons
     f-timer     timer     Challenge    Step 3  The final task clock
     f-final     write     Challenge    Step 3  The final task
     f-compare   write     Independent  Step 4  Then and now
     f-plan      write     Independent  Step 5  My revision plan
   WIDGETS (filled by this file, from saved data): progress, portfolio, plan
   ========================================================================== */
(function(){
const {T,head,note,take,chart,mistake,insight,taskbox,copied,opening,review,addChapter}=OE;
const {BOOKS,C}=M15;
const P='Module 15',CT='Assessment and Improvement',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);
const TASK='The chart below shows the average number of hours per week that teenagers in one country spent on four free-time activities in 2010 and 2025';
const words=t=>(String(t).match(/\S+/g)||[]).length;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------------- reading saved work from every book ---------------- */
const get=(k,d)=>{try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}};
const keys=()=>{const out=[];try{for(let i=0;i<localStorage.length;i++)out.push(localStorage.key(i))}catch(e){}return out};
function readBook(b){const res=get(b.ns+'results',{})||{},vals=Object.values(res);const tried=vals.length,first=vals.filter(r=>r&&r.first).length;
  const ks=keys(),drafts={};ks.forEach(k=>{const m=k&&k.startsWith(b.ns)&&k.slice(b.ns.length).match(/^(d1|d2)-(.+)$/);if(m){(drafts[m[2]]=drafts[m[2]]||{})[m[1]]=get(k,null)}});
  return {tried,first,acc:tried?Math.round(100*first/tried):null,drafts}}
const label=id=>{let m=id.match(/^c(\d)-(.+)$/);if(m)return 'Chapter '+m[1]+' · '+(/timed/.test(m[2])?'timed task':/practice/.test(m[2])?'practice answer':'writing task');m=id.match(/^m(\d)-write$/);if(m)return 'Mock '+m[1];m=id.match(/^f-(.+)$/);if(m)return {final:'Final task',compare:'Then and now',plan:'Revision plan',reflect:'Where am I now?'}[m[1]]||id;return id};
const text=v=>v?Object.values(v).filter(x=>x&&String(x).trim()).join('\n\n'):'';
function priorities(){const rows=BOOKS.filter(b=>b.part!=='C').map(b=>Object.assign({b},readBook(b)));
  const weak=rows.filter(r=>r.tried>=5&&r.acc<75).sort((a,b)=>a.acc-b.acc);
  const notStarted=rows.filter(r=>r.tried===0);
  return {rows,weak,notStarted}}

function renderProgress(el){const rows=BOOKS.map(b=>Object.assign({b},readBook(b)));const any=rows.some(r=>r.tried||Object.keys(r.drafts).length);
  el.innerHTML=`<div class="dtable-wrap"><table class="dtable"><caption>Your progress in this browser</caption><thead><tr><th scope="col">Module</th><th scope="col">Activities tried</th><th scope="col">Right first time</th><th scope="col">Writing tasks</th></tr></thead><tbody>${rows.map(r=>`<tr><th scope="row"><a href="${r.b.url}">${esc(r.b.name)}</a></th><td>${r.tried||'–'}</td><td>${r.acc==null?'–':r.acc+'%'}</td><td>${Object.keys(r.drafts).length||'–'}</td></tr>`).join('')}</tbody></table></div>`+
  (any?'':`<p class="small" style="margin-top:8px">Nothing saved yet in this browser. If you studied on another device or browser, your results are saved there instead.</p>`)}
function renderPortfolio(el){const books=BOOKS.map(b=>Object.assign({b},readBook(b))).filter(r=>Object.keys(r.drafts).length);
  if(!books.length){el.innerHTML='<p class="small">Your portfolio is empty in this browser. Writing tasks you finish in any module appear here, with your first draft and your revision side by side.</p>';return}
  el.innerHTML=books.map(r=>`<details class="pf" style="border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:8px 0;background:#fff"><summary style="cursor:pointer;font-weight:700">${esc(r.b.name)} · ${Object.keys(r.drafts).length} task${Object.keys(r.drafts).length>1?'s':''}</summary>${Object.entries(r.drafts).map(([id,d])=>`<div style="margin:12px 0"><p class="small" style="font-weight:700;margin-bottom:6px">${esc(label(id))}</p><div style="display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))"><div><p class="small">First draft · ${words(text(d.d1))} words</p><div class="draft" style="white-space:pre-wrap;font-size:14px">${esc(text(d.d1))||'<i>No first draft.</i>'}</div></div>${d.d2?`<div><p class="small">Revision · ${words(text(d.d2))} words</p><div class="draft" style="white-space:pre-wrap;font-size:14px">${esc(text(d.d2))}</div></div>`:''}</div></div>`).join('')}</details>`).join('')}
function renderPlan(el){const {weak,notStarted}=priorities();const items=[];
  weak.slice(0,3).forEach(r=>items.push(`<li><b><a href="${r.b.url}">${esc(r.b.name)}</a></b>: you got ${r.acc}% right first time. Repeat the chapters where you went wrong, then redo the writing tasks.</li>`));
  notStarted.filter(r=>r.b.part==='A').slice(0,2).forEach(r=>items.push(`<li><b><a href="${r.b.url}">${esc(r.b.name)}</a></b>: not started yet. It covers ${esc(r.b.skill)}.</li>`));
  notStarted.filter(r=>r.b.part==='B').slice(0,2).forEach(r=>items.push(`<li><b><a href="${r.b.url}">${esc(r.b.name)}</a></b>: not started yet. Every task type can appear in the exam.</li>`));
  items.push(`<li><b><a href="../mock-exams/">Task 1 Mock Exams</a></b>: write one mock a week under exam conditions, and compare it with my model.</li>`);
  el.innerHTML=`<h3 style="margin:0 0 6px">Suggested priorities</h3><ol style="padding-left:20px;display:grid;gap:8px;font-size:15px">${items.join('')}</ol><p class="small" style="margin-top:8px">These suggestions come from the activities you have done in this browser. They are a guide, not a band score.</p>`}
const R={progress:renderProgress,portfolio:renderPortfolio,plan:renderPlan};
const fill=()=>document.querySelectorAll('[data-m15]').forEach(el=>{if(el.dataset.done)return;el.dataset.done='1';try{R[el.dataset.m15](el)}catch(e){el.innerHTML='<p class="small">This summary couldn’t load in this browser.</p>'}});
if(typeof MutationObserver!=='undefined')new MutationObserver(fill).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',fill);

const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="12" text-anchor="middle"><path d="M40,120 L120,95 L200,80 L280,50 L360,28" fill="none" stroke="#F88B48" stroke-width="5" stroke-linecap="round"/>${[[40,120],[120,95],[200,80],[280,50],[360,28]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="#fff" stroke="#292929" stroke-width="2.5"/>`).join('')}<text x="40" y="145" fill="#292929">Start</text><text x="360" y="145" fill="#292929">Now</text></g></svg>`;

const spreads=[
opening({n:1,title:CT,lede:'This is the final module. You’ll see how far you have come, take a final check and a final timed task, look back at your writing portfolio, and leave with a revision plan made for you. Be honest with yourself: the aim is to know exactly what to practise next.',
  outcomes:['see your progress across every module','take a final check and a final timed task','compare your first and latest writing','make an individual revision plan'],
  extraLeft:insight('Your progress','Everything on these pages comes from this browser on this device. If you studied somewhere else, open this module there too.'),
  illus:ill,stepsTitle:'Five steps to finish the course',
  steps:[[1,'c1-s1','Where am I now?','Your progress so far','Discover'],[2,'c1-s2','The final check','Five quick questions','Understand'],[3,'c1-s3','The final task','20 minutes, under exam conditions','Apply'],[4,'c1-s4','Your portfolio','Then and now','Improve'],[5,'c1-s5','Your revision plan','What to practise next','Improve'],['R','c1-review','Chapter review','Your results and your drafts','Improve']]}),

sp('c1-s1','Where am I now?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Where am I now?</h2><p>This table shows the activities you have tried in each module, how many you got right first time, and how many writing tasks you have finished.</p><div data-m15="progress"></div>${note('“Right first time” is strict: it only counts your first answer. It shows where your instincts are still unreliable, which is exactly what to practise.')}<div class="clear"></div>${take('Look for two things: modules you haven’t tried, and modules where you were right first time less than three times out of four.')}`,
 right:`${head('Step 1 · Reflection','Explore')}<div data-act="f-reflect"></div>`}),

sp('c1-s2','The final check',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The final check</h2><p>Five quick questions on the skills from the diagnostic in Module 1: key features, overviews, data language and comparisons. Answer without looking back.</p>${chart('free')}${note('Answer on your own first. Each explanation appears after your first try, and only that first try counts.')}<div class="clear"></div>${take('Compare these results with your diagnostic. Any area you still get wrong goes into your revision plan.')}`,
 right:`${head('Step 2 · Final check','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="f-key"></div><div data-act="f-ov" style="margin-top:14px"></div><div data-act="f-data" style="margin-top:14px"></div><div data-act="f-comp" style="margin-top:14px"></div>`}),

sp('c1-s3','The final task',{
 left:`${head('Step 3 · Apply','Learn')}<h2>The final task</h2><p>This is comparable to the writing task in the diagnostic, but now it is a complete answer under exam conditions. Start the clock, write, then check.</p>${taskbox(TASK+'.<br><br>Write at least 150 words.')}${chart('free2')}`,
 right:`${head('Step 3 · Final task','Write')}<div data-act="f-timer"></div><div data-act="f-final" style="margin-top:16px"></div>`}),

sp('c1-s4','Your portfolio',{
 left:`${head('Step 4 · Improve','Learn')}<h2>Your portfolio</h2><p>Every writing task you have finished in any module is here, first draft and revision side by side. Open your earliest answer and your final task.</p><div data-m15="portfolio"></div>${note('Look for patterns, not single slips: an error you made in three different modules is a habit, and habits are what to fix first.')}<div class="clear"></div>${take('Compare your first and latest writing. Name what improved, and what still repeats.')}`,
 right:`${head('Step 4 · Then and now','Explore')}<div data-act="f-compare"></div>`}),

sp('c1-s5','Your revision plan',{
 left:`${head('Step 5 · Improve','Learn')}<h2>Your revision plan</h2><div data-m15="plan"></div>${insight('How I would revise','Three short sessions a week beat one long one. In each session: one activity on a weak skill, one paragraph of writing, and five minutes with your error dictionary.')}${take('Your plan: your target, your three priorities and a weekly routine. Write it down, and come back to it every week.')}`,
 right:`${head('Step 5 · My plan','Explore')}<div data-act="f-plan"></div>`}),

review({n:1,title:CT,write:'f-final',next:['dict','Open my error dictionary →'],last:1,draftsTitle:'Your final task',
  learned:['Your progress shows where to focus: modules not started, and skills you get wrong first time.','The final check and final task show how far you have come since the diagnostic.','Your portfolio shows which errors are habits.','A revision plan turns all of this into a weekly routine.']})
];

const acts={
'f-reflect':{type:'write',level:'Guided',skill:'Reflection',decision:'Where am I now?',prompt:'Answer honestly in a sentence or two each. Nobody else sees this.',
  fields:[{k:'a',label:'Which skill do I feel most confident about now?',rows:2},{k:'b',label:'Which skill still worries me most?',rows:2},{k:'c',label:'What score do I need, and by when?',rows:2}],
  checks:[{t:'You named a strength.',fix:'Name one skill you feel confident about.',fn:v=>words(v.a)>=3},{t:'You named a weakness.',fix:'Name one skill that still worries you.',fn:v=>words(v.b)>=3},{t:'You set a target.',fix:'Write your target score and date.',fn:v=>words(v.c)>=2}],
  modelTitle:'An example',model:'<p><span class="plabel">Most confident</span>Writing an overview with no figures.</p><p><span class="plabel">Still worried</span>Choosing between per cent and percentage points, and finishing in time.</p><p><span class="plabel">Target</span>Band 7 in Writing by June.</p>'},
'f-key':{type:'choice',level:'Supported',skill:'Key features',decision:'What is the most significant change in the chart?',
  opts:[{t:'Time spent on social media quadrupled, from 3 to 12 hours a week.',ok:1,why:'The biggest change, and it moved from last place to first.'},{t:'Time spent on reading halved.',why:'A real change, but smaller: 2 hours.'},{t:'Gaming took 6 hours in 2010.',why:'A single figure, not a change.'}]},
'f-ov':{type:'choice',level:'Supported',skill:'Overviews',decision:'Which is the best overview?',
  opts:[{t:'Overall, teenagers spent more time on gaming and social media and less on sport and reading, with social media rising from the least time-consuming activity to the most.',ok:1,why:'The two patterns and the change of position, with no figures.'},{t:'Overall, social media rose from 3 to 12 hours.',why:'A figure, and only one activity.'},{t:'Overall, teenagers today spend too much time on screens.',why:'An opinion. Task 1 reports the data.'}]},
'f-data':{type:'fix',level:'Supported',skill:'Data language',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Time spent gaming rose by 5% between 2010 and 2025.',ok:/(by|of) (5|five) hours/i,bad:/5%/,hint:'What is the unit of the chart?',err:'5%',fix:'five hours',why:'The chart is in hours, not percentages.',model:'Time spent gaming rose by five hours between 2010 and 2025.'},
         {wrong:'Teenagers spent twice more time on gaming in 2025.',ok:/(almost|nearly) twice as (much|long)|almost doubled|nearly doubled/i,bad:/twice more/i,hint:'Use “twice as much” and check: 6 → 11 is not quite double.',err:'twice more',fix:'almost twice as much',why:'“Twice as much” is the correct pattern, and 11 is just under double 6.',model:'Teenagers spent almost twice as much time on gaming in 2025.'},
         {wrong:'The time spent on reading were halved.',ok:/\bwas halved\b|\bhalved\b/i,bad:/were halved/i,hint:'What is the subject: the time, or reading?',err:'were',fix:'was',why:'“The time” is singular.',model:'The time spent on reading was halved.'}]},
'f-comp':{type:'binary',level:'Supported',skill:'Comparisons',decision:'Is each comparison accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'In 2025, teenagers spent slightly more time on social media than on gaming.',a:0,right:'12 hours against 11.',wrong:'It is accurate: 12 against 11.'},
         {t:'Sport was the most time-consuming activity in both years.',a:1,right:'Right. Sport led in 2010 (7 hours) but not in 2025.',wrong:'In 2025 sport was third, with 5 hours.'},
         {t:'By 2025, teenagers spent six times as long on social media as on reading.',a:0,right:'12 ÷ 2 = 6.',wrong:'It is accurate: 12 ÷ 2 = 6.'},
         {t:'Time spent on reading fell by half a percentage point.',a:1,right:'Right. It fell by two hours: the data are hours.',wrong:'The data are hours, not percentages: it fell by two hours.'}]},
'f-timer':{type:'timer',level:'Challenge',skill:'Exam conditions',decision:'Start the clock before you read the task.',prompt:'The clock moves through the three stages for you. You can pause it, but in the exam you can’t.',
  phases:[{lab:'Plan',s:120,tip:'Read the task. Note the overview, the grouping and your key figures.'},{lab:'Write',s:900,tip:'Write all four parts. Keep going forward; fix small errors later.'},{lab:'Check',s:180,tip:'Check the overview, accuracy, grammar and your word count.'}]},
'f-final':{type:'write',level:'Challenge',skill:'The final task',decision:'Write your answer.',prompt:'At least 150 words. One box, as in the exam; leave a line between paragraphs. Then run the checklist and compare with my model.',
  fields:[{k:'a',label:'My answer',rows:16,ph:'The bar chart…'}],
  checks:[{t:'You wrote at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>words(v.a)>=150},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.a.trim()&&!copied(v.a,TASK,8)},
          {t:'You have an overview starting with “Overall,” or similar.',fix:'Add a clear overview starting with “Overall,”.',fn:v=>/(^|\n|\.\s)\s*(overall|in general|in summary)/i.test(v.a)},
          {t:'You described all four activities.',fix:'Include gaming, sport, reading and social media.',fn:v=>/gam/i.test(v.a)&&/sport/i.test(v.a)&&/read/i.test(v.a)&&/social/i.test(v.a)},
          {t:'You gave figures in hours.',fix:'Give figures with their unit: hours a week.',fn:v=>/\b\w+ hours\b/i.test(v.a)&&!/\d+\s*%/.test(v.a)},
          {t:'You used paragraphs.',fix:'Leave a line between your paragraphs.',fn:v=>(v.a.trim().split(/\n\s*\n/).length>=3)}],
  modelTitle:'My model answer',
  model:`<p>The bar chart compares the weekly hours that teenagers in a particular country devoted to four leisure activities in 2010 and in 2025.</p><p>Overall, the time spent on gaming and social media increased considerably, while sport and reading took up less time. Social media went from being the least time-consuming of the four activities to the most time-consuming.</p><p>In 2010, teenagers spent the most time on sport, at seven hours a week, followed by gaming at six hours. By 2025, however, time spent on sport had fallen to five hours, while gaming had almost doubled to eleven hours. Reading, which accounted for four hours a week in 2010, halved to just two hours.</p><p>The most dramatic change was in social media use. Teenagers spent only three hours a week on social media in 2010, but this figure quadrupled to twelve hours in 2025, overtaking gaming as the activity that took up the most time.</p>`,
  self:['I planned before writing.','My overview gives the main patterns, without figures.','Every figure is accurate and has its unit.','I checked my answer in the last three minutes.'],revise:1},
'f-compare':{type:'write',level:'Independent',skill:'Then and now',decision:'Compare your earliest writing with your final task.',prompt:'Open your earliest answer in the portfolio, and your final task. Then answer.',
  fields:[{k:'a',label:'What is better in my final task?',rows:3},{k:'b',label:'Which mistake still appears in both?',rows:3},{k:'c',label:'One thing I will do differently in the exam',rows:2}],
  checks:[{t:'You named an improvement.',fix:'Name at least one improvement.',fn:v=>words(v.a)>=5},{t:'You named a repeated mistake.',fix:'Name a mistake that still repeats.',fn:v=>words(v.b)>=4},{t:'You made an exam decision.',fix:'Write one thing you will do differently.',fn:v=>words(v.c)>=4}],
  modelTitle:'An example',model:'<p><span class="plabel">Better</span>My overview has no figures now, and my body paragraphs group the data instead of listing it.</p><p><span class="plabel">Still repeating</span>I write “increased by 5%” when I mean percentage points.</p><p><span class="plabel">In the exam</span>I will check every change between percentages before I finish.</p>'},
'f-plan':{type:'write',level:'Independent',skill:'Revision plan',decision:'Write your revision plan.',prompt:'Use the suggested priorities on the left page. Download it or copy it somewhere you will see it.',
  fields:[{k:'a',label:'My target and exam date',rows:2},{k:'b',label:'My three priorities',rows:4,ph:'1.\n2.\n3.'},{k:'c',label:'My weekly routine',rows:4,ph:'Monday: …'}],
  checks:[{t:'You set a target and date.',fix:'Write your target score and exam date.',fn:v=>words(v.a)>=3},{t:'You listed three priorities.',fix:'List three priorities.',fn:v=>(v.b.match(/\S.*$/gm)||[]).length>=3||(v.b.match(/(^|\s)[1-3][.)]\s/g)||[]).length>=3||(v.b.match(/[,;]/g)||[]).length>=2},{t:'You planned a routine.',fix:'Plan at least two sessions a week.',fn:v=>words(v.c)>=8}],
  modelTitle:'An example plan',model:'<p><span class="plabel">Target</span>Band 7 in Writing, exam on 14 June.</p><p><span class="plabel">Priorities</span>1. Percentages and percentage points (Describing Data Accurately, Chapter 5).<br>2. Maps: the passive and locations (Mastering Maps, Chapters 2 and 3).<br>3. Finishing in 20 minutes (one mock a week).</p><p><span class="plabel">Routine</span>Monday and Thursday, 30 minutes: one activity, one paragraph, my error dictionary. Saturday: one timed mock and a comparison with the model.</p>'}
};

const gloss={
  'portfolio':{term:'portfolio',def:'A collection of your writing over time, so you can see your progress.',path:'M40,25 H200 V80 H40 Z M40,40 H200',ex:'“Compare your first and latest answers in your portfolio.”'},
  'revision plan':{term:'revision plan',def:'A written plan of what to practise, when and how, until your exam.',path:'M30,30 H210 M30,50 H190 M30,70 H170',ex:'“My revision plan has three priorities.”'}
};
const retrieval={'c1-s2':[{q:'Social media 3 → 12 hours is…',opts:[{t:'four times as much',ok:1,why:'12 ÷ 3 = 4.'},{t:'three times as much',why:'Check: 3 × 3 = 9.'}]}]};
const minitest=[
 {q:'What does “right first time” measure?',opts:[{t:'Your first answer to each question',ok:1,why:'Later tries don’t count.'},{t:'Your best answer',why:'Only the first try counts.'},{t:'Your band score',why:'It is not a band score.'}],sp:'c1-s1'},
 {q:'Gaming 6 → 11 hours. Which is accurate?',opts:[{t:'almost doubled',ok:1,why:'11 is just under 12.'},{t:'doubled',why:'Double would be 12.'},{t:'rose by 5%',why:'The unit is hours.'}],sp:'c1-s2'},
 {q:'Which overview is best?',opts:[{t:'Overall, screen-based activities took up more time, and sport and reading less.',ok:1,why:'Patterns, no figures.'},{t:'Overall, social media reached 12 hours.',why:'A figure.'},{t:'Overall, teenagers should read more.',why:'An opinion.'}],sp:'c1-s2'},
 {q:'How long should the final task take?',opts:[{t:'About 20 minutes',ok:1,why:'As in the exam.'},{t:'As long as I need',why:'Practise the real timing.'},{t:'40 minutes',why:'That is Task 2.'}],sp:'c1-s3'},
 {q:'An error you made in three different modules is…',opts:[{t:'a habit to fix first',ok:1,why:'Patterns matter most.'},{t:'a one-off slip',why:'Three times is a pattern.'},{t:'not important',why:'Repeated errors cost the most marks.'}],sp:'c1-s4'},
 {q:'Where can you see your first and latest drafts side by side?',opts:[{t:'In the portfolio',ok:1,why:'Step 4.'},{t:'In the glossary',why:'That has definitions.'},{t:'Nowhere',why:'The portfolio shows them.'}],sp:'c1-s4'},
 {q:'Which revision routine works best?',opts:[{t:'Three short sessions a week',ok:1,why:'Regular practice beats cramming.'},{t:'One long session the night before',why:'Too late to fix habits.'},{t:'Only mock exams',why:'Practise weak skills too.'}],sp:'c1-s5'},
 {q:'Are the suggested priorities a band score?',opts:[{t:'No: they are a guide',ok:1,why:'Based on your activities only.'},{t:'Yes',why:'They don’t predict a band.'},{t:'Only for Task 2',why:'They are not a band score at all.'}],sp:'c1-s5'}
];
const cannow=[['See my progress across every module','c1-s1'],['Take a final check of the core skills','c1-s2'],['Write a complete answer in 20 minutes','c1-s3'],['Compare my first and latest writing','c1-s4'],['Make my own revision plan','c1-s5']];
addChapter({n:1,spreads,acts,gloss,charts:{free:C.free,free2:C.free2},retrieval,minitest,cannow});
})();
