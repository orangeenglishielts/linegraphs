/* ==========================================================================
   MASTERING PROCESS DIAGRAMS · CHAPTER 4 · COMBINING STAGES
   ACTIVITY IDS (type · level)
     c4-phase   sort      Guided       Step 1  Find the phases
     c4-detail  choice    Supported    Step 2  Keep the details
     c4-units   fix       Supported    Step 2  Times and temperatures
     c4-part    fix       Supported    Step 3  Participle clauses
     c4-copy    binary    Supported    Step 4  Copied or paraphrased?
     c4-build   builder   Independent  Step 4  Combine three stages
     c4-write   write     Independent  Step 5  The bread factory
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C}=PROC;
const P='Chapter 4',CT='Combining Stages',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);
const ill=`<svg class="illus" viewBox="0 0 400 150" aria-hidden="true" style="width:100%;height:auto"><g font-family="Montserrat,sans-serif" font-weight="700" font-size="12" text-anchor="middle">${[0,1,2,3,4,5,6,7].map(i=>`<circle cx="${40+i*45}" cy="62" r="13" fill="${i<4?'#FBE6CF':(i<6?'#F88B48':'#E2EDD6')}" stroke="#292929" stroke-width="1.5"/><text x="${40+i*45}" y="67" fill="#292929">${i+1}</text>`).join('')}<path d="M27,92 H175" stroke="#A84A12" stroke-width="3"/><path d="M207,92 H265" stroke="#A84A12" stroke-width="3"/><path d="M297,92 H355" stroke="#2B6E43" stroke-width="3"/><text x="101" y="114" fill="#A84A12">Dough</text><text x="236" y="114" fill="#A84A12">Bake</text><text x="326" y="114" fill="#2B6E43">Sell</text></g></svg>`;

const spreads=[
opening({n:4,title:CT,lede:'Eight stages could mean eight short, separate sentences. Strong answers group the stages into phases, keep the important details such as times and temperatures, and join stages with a range of structures. In this chapter I’ll show you how.',
  outcomes:['group the stages into phases for your paragraphs','keep the key details: times, temperatures, places',`join stages with participle clauses: after being mixed, ${T('having been')} shaped`,'paraphrase the labels instead of copying them'],
  illus:ill,
  steps:[[1,'c4-s1','Find the phases','Groups of stages','Discover'],[2,'c4-s2','Keep the details','Times and temperatures','Understand'],[3,'c4-s3','Participle clauses','After being mixed','Understand'],[4,'c4-s4','Paraphrase the labels','Don’t copy','Practise'],[5,'c4-s5','Chapter challenge','The bread factory','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','Find the phases',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Find the phases</h2>${vid({title:'Find the phases',len:'90 seconds',script:['Show the bread diagram. Ask: which stages belong together?','Group 1 to 4: making the dough. 5 and 6: baking and cooling. 7 and 8: packaging and delivery.','Say: two body paragraphs, split where one phase ends: after stage 4.']})}<p>A ${T('phase')} is a group of stages with one purpose. Phases give you your paragraphs.</p>${chart('bread')}<ul class="clean"><li><b>Making the dough:</b> stages 1 to 4.</li><li><b>Baking and cooling:</b> stages 5 and 6.</li><li><b>Packaging and delivery:</b> stages 7 and 8.</li></ul>${note('With two body paragraphs, split where a phase ends: stages 1 to 4, then 5 to 8.')}<div class="clear"></div>${take('Group the stages into phases. Split your body paragraphs where a phase ends.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c4-phase"></div>`}),

sp('c4-s2','Keep the details',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Keep the details</h2>${vid({title:'Keep the details',len:'90 seconds',script:['Point to the details on the bread diagram: 1 hour, 230°C, 30 minutes, 2 hours.','Say: these are the only figures; leaving them out loses accuracy.','Show the forms: for an hour, at 230°C, for 30 minutes.']})}<p>Times, temperatures and places on a diagram are key details. Include them, with the right preposition:</p><ul class="clean"><li><b>for</b> + a length of time: left to rise <b>for an hour</b>; baked <b>for 30 minutes</b>.</li><li><b>at</b> + a temperature: baked <b>at 230°C</b>.</li><li><b>in / into</b> + a place or container: stored <b>in steel tanks</b>.</li></ul>${mistake('<s>The bread is baked in 230 degrees.</s> Use “at” for a temperature, and write the unit: <i>at 230°C</i>.')}${take('Include every time and temperature: for + time, at + temperature.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c4-detail"></div><div data-act="c4-units" style="margin-top:16px"></div>`}),

sp('c4-s3','Participle clauses',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Participle clauses</h2>${vid({title:'Participle clauses',len:'2 minutes',script:['Write two sentences: The dough is shaped. Then it is baked.','Join them: Having been shaped, the dough is baked.','Show the alternatives: After being shaped, …; Once shaped, …','Warn: the subject after the comma must be the thing that was shaped.']})}<p>Participle clauses join two stages and show a wider range of grammar:</p><ul class="clean"><li><b>After being + participle:</b> <i>After being mixed, the dough is left to rise.</i></li><li><b>${T('having been')} + participle:</b> <i>Having been shaped, the loaves are baked.</i></li><li><b>Once + participle or adjective:</b> <i>Once cooled, the bread is sliced.</i></li></ul>${mistake('<s>After being baked, the factory cools the bread.</s> The factory wasn’t baked. The subject after the comma must be the bread: <i>After being baked, the bread is cooled.</i>')}${take('After being / Having been / Once + participle or adjective. Check that the subject after the comma is the thing in the clause.')}`,
 right:`${head('Step 3 · Activity','Explore')}<div data-act="c4-part"></div>`}),

sp('c4-s4','Paraphrase the labels',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Paraphrase the labels</h2><p>The labels on a diagram are short notes. Turn them into full sentences in your own words, adding articles, verbs and detail:</p><ul class="clean"><li><b>Label:</b> Left to rise (1 hour) → <i>the dough is then left for an hour so that it rises</i>.</li><li><b>Label:</b> Delivered to supermarkets → <i>the bread is transported to supermarkets</i>.</li></ul>${note('You can keep technical words such as “dough” or “centrifuge”: there is no better word. Change the structure around them.')}<div class="clear"></div>${take('Labels are notes. Make full sentences, change the structure, and keep the technical words.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-copy"></div><div data-act="c4-build" style="margin-top:16px"></div>`}),

sp('c4-s5','Chapter challenge: the bread factory',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write two body paragraphs describing how bread is made: stages 1 to 4, then 5 to 8.</p>${chart('bread2')}<ul class="clean" style="font-size:15px"><li>Every time and temperature, with for and at.</li><li>At least one participle clause.</li><li>Labels paraphrased, not copied.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Group stages into phases, and split paragraphs where a phase ends.','Keep every time and temperature: for + time, at + temperature.','Join stages with after being, having been and once + participle, and check the subject.','Turn labels into full sentences in your own words.']})
];

const acts={
'c4-phase':{type:'sort',level:'Guided',skill:'Phases',decision:'Which phase does each stage belong to?',cats:['Making the dough','Baking and cooling','Packaging and delivery'],
  items:[{w:'Ingredients weighed',c:0,m:'stage 1.'},{w:'Left to rise',c:0,m:'stage 3.'},{w:'Divided and shaped',c:0,m:'stage 4.'},{w:'Baked at 230°C',c:1,m:'stage 5.'},{w:'Cooled for 2 hours',c:1,m:'stage 6.'},{w:'Sliced and packaged',c:2,m:'stage 7.'}]},
'c4-detail':{type:'choice',level:'Supported',skill:'Details',decision:'Which sentence about stage 5 is best?',
  opts:[{t:'The loaves are then baked at 230°C for 30 minutes.',ok:1,why:'Both details, with the right prepositions.'},{t:'The loaves are then baked.',why:'Accurate, but it leaves out the temperature and time.'},{t:'The loaves are baked for 230 minutes at 30°C.',why:'The figures are swapped.'}]},
'c4-units':{type:'fix',level:'Supported',skill:'Times and temperatures',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'The bread is baked in 230 degrees.',ok:/at 230\s?([°º]C|degrees)/i,bad:/in 230/i,hint:'Which preposition goes with a temperature?',err:'in 230 degrees',fix:'at 230°C',why:'Use “at” for a temperature.',model:'The bread is baked at 230°C.'},
         {wrong:'The dough is left to rise during one hour.',ok:/for (one|an|1) hour/i,bad:/during/i,hint:'Which preposition goes with a length of time?',err:'during one hour',fix:'for an hour',why:'“For” + a length of time.',model:'The dough is left to rise for an hour.'},
         {wrong:'The loaves are cooled since two hours.',ok:/for (two|2) hours/i,bad:/since/i,hint:'“Since” needs a starting point in time.',err:'since two hours',fix:'for two hours',why:'“For” + a length of time.',model:'The loaves are cooled for two hours.'}]},
'c4-part':{type:'fix',level:'Supported',skill:'Participle clauses',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'After mixed, the dough is left to rise.',ok:/after (being|having been) mixed/i,bad:/after mixed/i,hint:'Add the missing word before “mixed”.',err:'After mixed',fix:'After being mixed',why:'After + being + participle.',model:'After being mixed, the dough is left to rise.'},
         {wrong:'Having shaped, the loaves are baked.',ok:/having been shaped/i,bad:/having shaped/i,hint:'The loaves didn’t do the shaping.',err:'Having shaped',fix:'Having been shaped',why:'The passive form is “having been + participle”.',model:'Having been shaped, the loaves are baked.'},
         {wrong:'After being baked, the factory cools the bread.',ok:/after being baked, the (bread|loaves) (is|are) cooled/i,bad:/the factory/i,hint:'What was baked? Make that the subject.',err:'the factory cools the bread',fix:'the bread is cooled',why:'The subject after the comma must be the thing that was baked.',model:'After being baked, the bread is cooled.'}]},
'c4-copy':{type:'binary',level:'Supported',skill:'Paraphrasing labels',decision:'Copied from the label, or written in your own words?',labels:['Copied','Own words'],
  items:[{t:'Ingredients weighed.',a:0,right:'Right. A note, not a sentence.',wrong:'This is the label word for word.'},
         {t:'To begin with, the ingredients are weighed.',a:1,right:'A full sentence with a sequencer and the passive.',wrong:'It is a full sentence in new words.'},
         {t:'Sliced and packaged.',a:0,right:'Right. A label, not a sentence.',wrong:'This is the label word for word.'},
         {t:'Once cool, the bread is cut into slices and wrapped.',a:1,right:'New words, a participle clause, a full sentence.',wrong:'It is a paraphrase, with a new structure.'}]},
'c4-build':{type:'builder',level:'Independent',skill:'Combining stages',decision:'Combine stages 2, 3 and 4 in one sentence.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Having been mixed,','the dough is left','to rise for an hour','before it is divided','and shaped into loaves.'],
  distract:[{t:'during an hour',why:'Use “for” with a length of time.',fix:'to rise for an hour'},{t:'Having mixed,',why:'The dough didn’t mix anything: having been mixed.',fix:'Having been mixed,'}],
  right:'A participle clause, a detail with “for”, and “before” to join the last stage.',orderMsg:'All the right pieces, but check the order: the participle clause, the rising and its time, then before the shaping.',incompleteMsg:'Good so far, but incomplete. Add what happens after rising.'},
'c4-write':{type:'write',level:'Independent',skill:'Combining stages',decision:'Write two body paragraphs about the bread factory.',prompt:'Stages 1 to 4, then 5 to 8. Then check your writing.',
  fields:[{k:'b1',label:'Body paragraph 1: stages 1 to 4',rows:5,ph:'To begin with,…'},{k:'b2',label:'Body paragraph 2: stages 5 to 8',rows:5,ph:'Next,…'}],
  checks:[{t:'You included every time and temperature.',fix:'Include an hour, 230°C, 30 minutes and two hours.',fn:v=>{const t=v.b1+' '+v.b2;return /(an|one|1) hour/i.test(t)&&/230/.test(t)&&/((30|thirty) minutes|half an hour)/i.test(t)&&/(two|2) hours/i.test(t)}},
          {t:'You used “at” with the temperature.',fix:'Write “at 230°C”.',fn:v=>/\b(at|of) 230/i.test(v.b1+' '+v.b2)},
          {t:'You used a participle clause.',fix:'Add one: After being mixed, … / Having been shaped, … / Once cool, …',fn:v=>/\b(after being|having been|once (cool|\w+ed))\b/i.test(v.b1+' '+v.b2)},
          {t:'You didn’t invent ingredients.',fix:'The diagram only says “ingredients”: don’t name flour, yeast or salt.',fn:v=>!/\b(flour|yeast|salt|sugar)\b/i.test(v.b1+' '+v.b2)},
          {t:'You wrote full sentences, not labels.',fix:'Turn every label into a full sentence with a verb.',fn:v=>!/(^|\.\s*)(ingredients weighed|sliced and packaged|delivered to supermarkets)\./i.test(v.b1+' '+v.b2)},
          {t:'Your answer is a good length (65 words or more).',fix:'Add detail: your two paragraphs are under 65 words.',fn:v=>((v.b1+' '+v.b2).match(/\S+/g)||[]).length>=65}],
  modelTitle:'My model paragraphs',
  model:`<p><span class="plabel">Body 1</span>To begin with, the ingredients are weighed. <button type="button" class="hl" data-n="0">After being mixed into a dough</button>, they are left <button type="button" class="hl" data-n="1">for an hour</button> so that the dough can rise. The dough is then divided and shaped into individual loaves.</p><p><span class="plabel">Body 2</span>Next, the loaves are baked <button type="button" class="hl" data-n="2">at 230°C for 30 minutes</button>, after which they are left to cool for two hours. <button type="button" class="hl" data-n="3">Once cool, the bread is cut into slices and wrapped</button>, and finally it is transported by lorry to supermarkets, where it is sold.</p>`,
  notes:['A participle clause joins stages 2 and 3.','“For” + a length of time.','“At” + temperature, “for” + time, both from the diagram.','“Once cool” joins stages 6 and 7; the labels are paraphrased.'],
  self:['I included every time and temperature.','I used a participle clause correctly.','I didn’t invent details.','I paraphrased the labels.'],revise:1}
};

const gloss={
  'phase':{term:'phase',def:'A group of stages in a process with one purpose.',path:'M20,60 H100 M140,60 H220 M20,50 V70 M100,50 V70 M140,50 V70 M220,50 V70',ex:'“The first phase is making the dough.”'},
  'having been':{term:'having been',def:'Used with a past participle to show that one passive stage is complete before the next.',path:'M30,60 H100 M140,40 H210 M100,60 L140,40',ex:'“Having been shaped, the loaves are baked.”'},
  'dough':{term:'dough',def:'A thick mixture of flour and liquid, before it is baked.',path:'M40,70 C40,30 200,30 200,70 Z',ex:'“The ingredients are mixed into a dough.”'}
};

const retrieval={
 'c4-s1':[{q:'Where should you split two body paragraphs?',opts:[{t:'Where a phase ends',ok:1,why:'Each paragraph has one purpose.'},{t:'Exactly halfway, always',why:'Follow the phases.'}]}],
 'c4-s2':[{q:'“Baked ___ 230°C.”',opts:[{t:'at',ok:1,why:'Temperature.'},{t:'in',why:'Use at.'}]}],
 'c4-s3':[{q:'“___ shaped, the loaves are baked.”',opts:[{t:'Having been',ok:1,why:'Passive participle clause.'},{t:'Having',why:'The loaves didn’t shape anything.'}]}],
 'c4-s4':[{q:'Can you keep the word “dough”?',opts:[{t:'Yes: it is a technical word',ok:1,why:'Change the structure around it.'},{t:'No, never',why:'There is no better word.'}]}],
 'c4-s5':[{q:'How long are the loaves cooled?',opts:[{t:'Two hours',ok:1,why:'Stage 6.'},{t:'30 minutes',why:'That is baking.'}]}]
};

const minitest=[
 {q:'Which stages make up “making the dough”?',opts:[{t:'1 to 4',ok:1,why:'Weigh, mix, rise, shape.'},{t:'5 and 6',why:'Baking and cooling.'},{t:'7 and 8',why:'Packaging and delivery.'}],sp:'c4-s1'},
 {q:'Choose the correct preposition: “left to rise ___ an hour”.',opts:[{t:'for',ok:1,why:'Length of time.'},{t:'during',why:'Use for.'},{t:'since',why:'Since needs a start point.'}],sp:'c4-s2'},
 {q:'Should you include the baking temperature?',opts:[{t:'Yes: it is a key detail',ok:1,why:'Accuracy.'},{t:'No: no numbers in a process',why:'Include the ones given.'},{t:'Only in the overview',why:'Details go in the body.'}],sp:'c4-s2'},
 {q:'Choose the correct sentence.',opts:[{t:'After being baked, the bread is cooled.',ok:1,why:'The bread was baked.'},{t:'After being baked, the factory cools the bread.',why:'The factory wasn’t baked.'},{t:'After baked, the bread is cooled.',why:'After being baked.'}],sp:'c4-s3'},
 {q:'“Once cool, the bread is sliced.” What does “once cool” do?',opts:[{t:'Joins two stages',ok:1,why:'Cooling and slicing.'},{t:'Gives a reason',why:'It gives the order.'},{t:'Adds a temperature',why:'No figure.'}],sp:'c4-s3'},
 {q:'Which is a paraphrased label?',opts:[{t:'The bread is then cut into slices and wrapped.',ok:1,why:'A full sentence in new words.'},{t:'Sliced and packaged.',why:'Copied.'},{t:'Sliced, packaged.',why:'Still a note.'}],sp:'c4-s4'},
 {q:'The diagram says “Ingredients weighed”. Can you write “flour and yeast are weighed”?',opts:[{t:'No: the diagram doesn’t name them',ok:1,why:'Don’t invent details.'},{t:'Yes: bread always has them',why:'Describe only the diagram.'},{t:'Yes, if you add salt',why:'Still invented.'}],sp:'c4-s4'},
 {q:'How long is the bread baked?',opts:[{t:'30 minutes',ok:1,why:'Stage 5.'},{t:'An hour',why:'That is rising.'},{t:'Two hours',why:'That is cooling.'}],sp:'c4-s5'}
];

const cannow=[['Group stages into phases','c4-s1'],['Include times and temperatures accurately','c4-s2'],['Join stages with participle clauses','c4-s3'],['Paraphrase the labels','c4-s4'],['Write body paragraphs that combine stages','c4-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:4,spreads,acts,gloss,charts:{bread:C.bread,bread2:cp('bread','ch-bread2')},retrieval,minitest,cannow});
})();
