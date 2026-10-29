/* ==========================================================================
   MODULE 5 · CHAPTER 5 · FUTURE AND PROJECTED DATA
   ACTIVITY IDS (type · level)
     c5-spot    choice    Guided       Step 1  Which figures are projections?
     c5-spot2   binary    Guided       Step 1  Fact or projection?
     c5-phr     fix       Supported    Step 2  Expected to, projected to
     c5-hedge   choice    Supported    Step 2  The best prediction
     c5-fp      choice    Supported    Step 3  By + future year
     c5-build   builder   Supported    Step 3  Will have
     c5-switch  binary    Independent  Step 4  Past or future?
     c5-write   write     Independent  Step 5  An ageing population
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=TRD;
const P='Chapter 5',CT='Future and Projected Data',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:5,title:CT,lede:'Some graphs include figures for the future: predictions, forecasts and projections. Nobody knows them for certain, so your language must show that they are expected, not facts. In this chapter I’ll show you how to spot projected data, how to describe it, and how to move from the past to the future in one answer.',
  outcomes:['spot projected figures: dashed lines, notes in the title, future years',`use ${T('is projected to')}, is expected to and is likely to`,'use by + future year with will have + past participle','switch tenses accurately where the actual data ends'],
  illus:`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><line x1="20" y1="132" x2="390" y2="132" stroke="#CFC6B4"/><line x1="20" y1="10" x2="20" y2="132" stroke="#CFC6B4"/><path d="M30,120 L110,110 L200,80" fill="none" stroke="#2B6E43" stroke-width="4" stroke-linecap="round"/><path d="M200,80 L290,45 L380,30" fill="none" stroke="#2B6E43" stroke-width="4" stroke-dasharray="9 7" stroke-linecap="round"/></svg>`,
  steps:[[1,'c5-s1','Spot the projections','Dashed lines and notes','Discover'],[2,'c5-s2','The language of prediction','Expected, projected, likely','Understand'],[3,'c5-s3','By + future year','Will have risen','Understand'],[4,'c5-s4','From past to future','Switching tenses','Practise'],[5,'c5-s5','Chapter challenge','An ageing population','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','Spot the projections',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Spot the projections</h2>${vid({title:'Spot the projections',len:'90 seconds',script:['Show the electric bus graph.','Point to the note in the title: figures after 2025 are projections.','Point to the dashed line: the projected part.','Say: up to 2025, facts; after 2025, predictions.']})}<p>Projected figures are usually marked by:</p><ul class="clean"><li>a note in the title or under the chart: “projected”, “forecast”, “estimated”</li><li>a <b>dashed line</b> or lighter bars</li><li>years that are still in the future</li></ul>${chart('ebus')}${note('Check every chart for projections. Describing a forecast as a fact is an accuracy error.')}<div class="clear"></div>${take('Find where the actual data ends. Everything after it is a projection.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c5-spot"></div><div data-act="c5-spot2" style="margin-top:16px"></div>`}),

sp('c5-s2','The language of prediction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The language of prediction</h2>${vid({title:'The language of prediction',len:'2 minutes',script:['Write: the number of buses is projected to reach 450 by 2040.','Swap the verb: is expected to, is predicted to, is forecast to.','Add hedging: is likely to.','Show the error: is expected rising. Say: to + base form.']})}<ul class="clean"><li><b>${T('is projected to','is projected to')}</b> / is expected to / is predicted to / is forecast to + base form</li><li><b>is likely to</b> + base form: a little more cautious</li><li><b>will</b> + base form: possible, but it sounds certain. Use it with care.</li></ul>${insight('Projected data','The number of electric buses <b>is projected to rise</b> to 250 by 2030 and <b>is expected to reach</b> 450 by 2040.')}${mistake('<s>The number of buses is expected rising.</s> To + base form: <i>is expected to rise</i>.')}${take('Is projected / expected / predicted to + base form. Prefer these to a bare “will”.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-phr"></div><div data-act="c5-hedge" style="margin-top:16px"></div>`}),

sp('c5-s3','By + future year',{
 left:`${head('Step 3 · Understand','Learn')}<h2>By + future year</h2><p>Just as “by 2005” takes the past perfect, “by 2040” takes the <b>future perfect</b>: will have + past participle.</p>${insight('Future perfect','By 2040, the number of electric buses <b>will have risen</b> to 450.')}<ul class="clean"><li>More cautious: <i>is expected to <b>have risen</b> to 450 by 2040</i>.</li><li>Or keep it simple: <i>is expected to reach 450 by 2040</i>.</li></ul>${note('“By 2040, the number will rise to 450” is acceptable, but the future perfect stresses that the change is complete: <i>will have risen</i>.')}<div class="clear"></div>${take('By + future year: will have + past participle, or is expected to reach.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the graph in Step 1.</p><div data-act="c5-fp"></div><div data-act="c5-build" style="margin-top:16px"></div>`}),

sp('c5-s4','From past to future',{
 left:`${head('Step 4 · Practise','Learn')}<h2>From past to future</h2><p>Many graphs combine actual and projected figures. Switch tense exactly where the actual data ends:</p>${chart('age')}<ul class="clean"><li><b>2000 to 2020 (actual):</b> past simple. <i>The proportion rose from 12% to 18%.</i></li><li><b>2030 to 2050 (projected):</b> prediction language. <i>It is projected to reach 29% by 2050.</i></li></ul>${note('A linking phrase marks the switch: “This growth is expected to continue…”.')}<div class="clear"></div>${take('Past simple up to the last actual year; prediction language after it; a link at the switch.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the graph on the left page.</p><div data-act="c5-switch"></div>`}),

sp('c5-s5','Chapter challenge: an ageing population',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing both countries, past and projected.</p>${chart('age2')}<ul class="clean" style="font-size:15px"><li>Past simple for 2000 to 2020.</li><li>Prediction language for 2030 to 2050.</li><li>A comparison of the two countries.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Projections are marked by notes, dashed lines and future years.','Is projected / expected / predicted to + base form; is likely to for caution.','By + future year: will have + past participle, or is expected to reach.','Switch tense where the actual data ends, with a linking phrase.']})
];

const acts={
'c5-spot':{type:'choice',level:'Guided',skill:'Spotting projections',decision:'Which figures on the bus graph are projections?',
  opts:[{t:'The figures for 2030, 2035 and 2040',ok:1,why:'The title says figures after 2025 are projections, and the line is dashed.'},{t:'All the figures',why:'2015 to 2025 are actual figures.'},{t:'Only 2040',why:'Everything after 2025 is projected.'}]},
'c5-spot2':{type:'binary',level:'Guided',skill:'Fact or projection',decision:'Is each sentence a fact or a projection?',labels:['Fact','Projection'],
  items:[{t:'There were 120 electric buses in 2025.',a:0,right:'2025 is actual data.',wrong:'2025 is the last actual figure: a fact.'},{t:'There will be 380 electric buses in 2035.',a:1,right:'After 2025: a projection.',wrong:'2035 is projected, so this must be described as a prediction.'},{t:'The number of buses quadrupled between 2015 and 2020.',a:0,right:'10 to 40: actual data.',wrong:'Both years are actual: a fact.'}]},
'c5-phr':{type:'fix',level:'Supported',skill:'Prediction phrases',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The number of buses is expected rising to 250 by 2030.',ok:/is expected to (rise|increase|grow|climb|reach)/i,bad:/expected rising/i,hint:'Expected to + base form.',err:'is expected rising',fix:'is expected to rise',why:'The pattern is “is expected to + base form”.',model:'The number of buses is expected to rise to 250 by 2030.'},
         {wrong:'The number is predicted to rose to 380.',ok:/predicted to (rise|reach|increase|grow)/i,bad:/to rose/i,hint:'After “to”, use the base form.',err:'to rose',fix:'to rise',why:'To + base form, never the past simple.',model:'The number is predicted to rise to 380.'},
         {wrong:'The number of buses will to reach 450.',ok:/will reach 450|is (expected|projected|predicted|likely) to reach 450/i,bad:/will to/i,hint:'“Will” is followed directly by the base form.',err:'will to reach',fix:'will reach',why:'Will + base form, without “to”.',model:'The number of buses is projected to reach 450.'}]},
'c5-hedge':{type:'choice',level:'Supported',skill:'Describing projections',decision:'Which sentence describes the projected figures best?',
  opts:[{t:'The number of electric buses is projected to almost quadruple between 2025 and 2040, from 120 to 450.',ok:1,why:'Prediction language, and 450 ÷ 120 = 3.75: almost four times.'},{t:'The number of electric buses quadrupled between 2025 and 2040.',why:'These are projections, not facts, and 3.75 is “almost” four times.'},{t:'The number of electric buses will definitely reach 450.',why:'“Definitely” overstates a projection.'}]},
'c5-fp':{type:'choice',level:'Supported',skill:'By + future year',decision:'Choose the best sentence.',
  opts:[{t:'By 2040, the number of electric buses will have risen to 450.',ok:1,why:'By + future year: will have + past participle.'},{t:'By 2040, the number of electric buses had risen to 450.',why:'Had risen is for the past.'},{t:'By 2040, the number of electric buses has risen to 450.',why:'2040 is in the future.'}]},
'c5-build':{type:'builder',level:'Supported',skill:'Describing projections',decision:'Build a sentence about the final period.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Growth is expected to slow,','with a projected rise of only 70','between 2035 and 2040.'],
  distract:[{t:'Growth slowed',why:'After 2035 is projected: use prediction language.',fix:'Growth is expected to slow,'},{t:'with a projected rise of only 130',why:'130 was the projected rise in each of the two previous periods; 450 − 380 = 70.',fix:'with a projected rise of only 70'}],
  right:'Prediction language, the time, and the calculated rise.',orderMsg:'All the right pieces, but check the order: the prediction, the size, then the period.',incompleteMsg:'Good so far, but incomplete. Add the period.'},
'c5-switch':{type:'binary',level:'Independent',skill:'Switching tenses',decision:'Is the tense right for each sentence about the population graph?',labels:['Right','Wrong'],
  items:[{t:'In 2000, 12% of the population of Country X were aged 65 and over.',a:0,right:'Actual data: past simple.',wrong:'2000 is actual data: past simple is right.'},
         {t:'In Country Y, the proportion rose to 22% in 2050.',a:1,right:'Right. 2050 is projected: is projected to reach 22%.',wrong:'2050 is a projection, not a fact.'},
         {t:'In Country X, the proportion is expected to reach 29% by 2050.',a:0,right:'Prediction language for a projection.',wrong:'It is right: 2050 is projected.'},
         {t:'By 2020, the figure for Country Y will have risen to 11%.',a:1,right:'Right. 2020 is past: had risen.',wrong:'2020 is actual and in the past: had risen.'}]},
'c5-write':{type:'write',level:'Independent',skill:'Past and projected data',decision:'Write one body paragraph about both countries.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'In 2000,…'}],
  checks:[{t:'You described both countries.',fix:'Describe Country X and Country Y.',fn:v=>/country x/i.test(v.a)&&/country y/i.test(v.a)},
          {t:'You used the past for 2000 to 2020.',fix:'Describe the actual figures in the past: rose, had risen, were.',fn:v=>/\b(rose|was|were|had risen|increased|grew|stood)\b/i.test(v.a)},
          {t:'You used prediction language for 2030 to 2050.',fix:'Add: is projected to, is expected to, is predicted to, is likely to.',fn:v=>/\b(is|are) (projected|expected|predicted|forecast|likely|set) to\b|will have/i.test(v.a)},
          {t:'You didn’t describe projections as facts.',fix:'2030 to 2050 are projections: avoid “rose to 29%” or “reached 22% in 2050”.',fn:v=>!/(rose|reached|increased|grew)[^.]{0,25}\b(2030|2040|2050)\b/i.test(v.a)},
          {t:'You compared the two countries.',fix:'Add a comparison: higher, whereas, compared with.',fn:v=>/(higher|lower|whereas|while|compared with|by contrast|gap)/i.test(v.a)},
          {t:'Your paragraph is a good length (60 words or more).',fix:'Add detail: your paragraph is under 60 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=60}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">In 2000, 12% of the population of Country X were aged 65 and over, compared with 8% in Country Y.</button> By 2020, these figures had risen to 18% and 11% respectively. <button type="button" class="hl" data-n="1">This growth is expected to continue in both countries.</button> The proportion in Country X is projected to reach 29% by 2050, <button type="button" class="hl" data-n="2">while in Country Y it is predicted to double from its 2020 level to 22%</button>. <button type="button" class="hl" data-n="3">Country X is therefore likely to keep the higher proportion throughout, and the gap, which was seven percentage points in 2020, is projected to be the same in 2050.</button></p>`,
  notes:['Actual data: past simple, with a comparison.','A linking sentence marks the switch to projections.','Prediction language, and a calculation: 11 × 2 = 22.','Hedged: likely to. The gap is 7 percentage points in 2020 (18 − 11), widens to 8 in 2030 and 2040, and is projected to be 7 again in 2050 (29 − 22).'],
  self:['I used the past for actual data.','I used prediction language for projections.','I marked the switch with a link.','I compared the two countries.'],revise:1}
};

const gloss={
  'is projected to':{term:'is projected to',def:'Is expected to, according to a forecast. Followed by the base form.',path:'M30,90 L120,60',ex:'“The number is projected to reach 450 by 2040.”'},
  'will have risen':{term:'will have risen',def:'The future perfect: the rise will be complete by a future time. Use it with by + future year.',path:'M30,90 L120,60 L210,20 M210,10 V90',ex:'“By 2040, the number will have risen to 450.”'},
  'is likely to':{term:'is likely to',def:'Will probably. A cautious way to describe a projection.',path:'M30,80 L210,30',ex:'“Country X is likely to keep the higher proportion.”'}
};

const retrieval={
 'c5-s1':[{q:'A dashed line usually shows…',opts:[{t:'projected figures',ok:1,why:'Predictions.'},{t:'missing data',why:'It shows forecasts.'}]}],
 'c5-s2':[{q:'Is expected ___ rise.',opts:[{t:'to',ok:1,why:'Expected to + base form.'},{t:'for',why:'Use to.'}]}],
 'c5-s3':[{q:'By 2040, the number ___ to 450.',opts:[{t:'will have risen',ok:1,why:'Future perfect.'},{t:'had risen',why:'That is past.'}]}],
 'c5-s4':[{q:'Where do you switch tense?',opts:[{t:'Where the actual data ends',ok:1,why:'Facts, then predictions.'},{t:'In the middle of the chart',why:'At the last actual year.'}]}],
 'c5-s5':[{q:'11% → 22% is…',opts:[{t:'double',ok:1,why:'× 2.'},{t:'11% higher',why:'11 percentage points.'}]}]
};

const minitest=[
 {q:'Which shows that figures are projections?',opts:[{t:'A note saying “projected” and a dashed line',ok:1,why:'Both are common.'},{t:'A bold title',why:'Not a signal.'},{t:'A legend',why:'Not by itself.'}],sp:'c5-s1'},
 {q:'There were 120 buses in 2025 (actual). Which is right?',opts:[{t:'There were 120 electric buses in 2025.',ok:1,why:'A fact.'},{t:'There are expected to be 120 buses in 2025.',why:'It is actual data.'},{t:'There will be 120 buses in 2025.',why:'It is actual data.'}],sp:'c5-s1'},
 {q:'Choose the correct sentence.',opts:[{t:'The number is expected to rise.',ok:1,why:'To + base form.'},{t:'The number is expected rising.',why:'To + base form.'},{t:'The number is expected to rose.',why:'Base form.'}],sp:'c5-s2'},
 {q:'Which is the most cautious?',opts:[{t:'is likely to reach',ok:1,why:'Hedged.'},{t:'will definitely reach',why:'Too certain.'},{t:'reached',why:'Past fact.'}],sp:'c5-s2'},
 {q:'120 → 450 is…',opts:[{t:'almost four times as many',ok:1,why:'3.75.'},{t:'exactly four times as many',why:'4 × 120 = 480.'},{t:'three times as many',why:'3 × 120 = 360.'}],sp:'c5-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'By 2040, it will have reached 450.',ok:1,why:'Future perfect.'},{t:'By 2040, it will reached 450.',why:'Will have reached.'},{t:'By 2040, it has reached 450.',why:'Future, not present perfect.'}],sp:'c5-s3'},
 {q:'Country X: 18% (2020, actual), 22% (2030, projected). Which is right?',opts:[{t:'It had risen to 18% by 2020 and is projected to reach 22% by 2030.',ok:1,why:'Past, then prediction.'},{t:'It rose to 22% in 2030.',why:'2030 is projected.'},{t:'It will rise to 18% by 2020.',why:'2020 is past.'}],sp:'c5-s4'},
 {q:'Which phrase marks the switch to projections?',opts:[{t:'This growth is expected to continue',ok:1,why:'A link.'},{t:'In conclusion',why:'No conclusion.'},{t:'Firstly',why:'Not a link.'}],sp:'c5-s4'}
];

const cannow=[['Spot projected figures','c5-s1'],['Use the language of prediction','c5-s2'],['Use by + future year with will have','c5-s3'],['Switch tense where the actual data ends','c5-s4'],['Write a paragraph with past and projected data','c5-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:5,spreads,acts,gloss,charts:{ebus:C.ebus,age:C.age,age2:cp('age','ch-m5age2')},retrieval,minitest,cannow});
})();
