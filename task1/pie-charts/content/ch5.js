/* ==========================================================================
   MASTERING PIE CHARTS · CHAPTER 5 · STRUCTURING THE RESPONSE
   ACTIVITY IDS (type · level)
     c5-parts   sort      Guided       Step 1  Which part does it belong in?
     c5-intro   choice    Supported    Step 2  The best introduction
     c5-para    binary    Supported    Step 2  Good paraphrase?
     c5-ov      choice    Supported    Step 3  The best overview
     c5-ovin    binary    Supported    Step 3  Overview or body?
     c5-org     choice    Supported    Step 4  By pie or by group?
     c5-split   sort      Supported    Step 4  Which body paragraph?
     c5-write   write     Independent  Step 5  A complete answer
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=PIE;
const P='Chapter 5',CT='Structuring the Response',sp=(id,title,o)=>Object.assign({id,ch:5,chLabel:P,chTitle:CT,title},o);
const TASK='The charts below show the proportion of one university’s income that came from five sources in 2005 and 2025';

const spreads=[
opening({n:5,title:CT,lede:'Two pies can tempt you into describing one pie, then the other. That separates every comparison. In this chapter I’ll show you how to organise a pie chart answer so the comparisons stay together, and you’ll write a complete answer.',
  outcomes:['write a four-part answer: introduction, overview and two body paragraphs',`${T('paraphrase')} a pie chart task in one sentence`,'write an overview with the largest share, the main changes and any change at the top','organise the body by groups of segments, not one pie at a time'],
  illus:illus([48,26,16,6,4]),
  steps:[[1,'c5-s1','The four-part shape','What goes where','Discover'],[2,'c5-s2','The introduction','Paraphrase the task','Understand'],[3,'c5-s3','The overview','The big picture for pies','Understand'],[4,'c5-s4','Organise the body','By group, not by pie','Practise'],[5,'c5-s5','Chapter challenge','Write a complete answer','Apply'],['R','c5-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c5-s1','The four-part shape',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The four-part shape</h2>${vid({title:'The four-part shape',len:'90 seconds',script:['Show four empty boxes: introduction, overview, body 1, body 2.','Say what goes in each, in one line.','Stress that the overview is the most important paragraph.','Hand over to the sorting activity.']})}<p>Every Task 1 answer has the same four parts, whatever the chart.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Introduction</b> (one sentence): ${T('paraphrase')} the task.</li><li><b>Overview</b> (two sentences): the largest share and the main changes. No figures.</li><li><b>Body paragraph 1:</b> the first group of segments, with figures.</li><li><b>Body paragraph 2:</b> the second group, with figures and comparisons.</li></ol>${chart('visit')}${note('No overview is likely to limit your Task Achievement score to Band 5. Start it with “Overall,”.')}<div class="clear"></div>${take('Introduction, overview, two body paragraphs. No conclusion: the overview does that job.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">These sentences are about the visitor charts on the left page.</p><div data-act="c5-parts"></div>`}),

sp('c5-s2','The introduction',{
 left:`${head('Step 2 · Understand','Learn')}<h2>The introduction</h2>${vid({title:'Paraphrasing a pie chart task',len:'2 minutes',script:['Show the visitor task and underline the key words.','Change the verb: show becomes compare.','Change the structure: the main reason for visiting becomes why people visited.','Keep the details: the city, the two years.']})}<p>Your introduction says the same as the task in new words and a new structure.</p><ul class="clean"><li><b>The verb:</b> show → compare, illustrate</li><li><b>The structure:</b> <i>the main reason for visiting one city</i> → <i>why people visited one city</i></li><li><b>Keep every detail:</b> the city, 2014 and 2024</li></ul>${insight('Example','<b>Task:</b> The charts below show the main reason for visiting one city in 2014 and 2024.<br><b>Introduction:</b> The pie charts compare why people visited one city in 2014 and 2024.')}${mistake('<s>The charts below show…</s> “Below” only makes sense on the exam paper.')}${take('New verb, new structure, every detail kept, no “below”.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c5-intro"></div><div data-act="c5-para" style="margin-top:16px"></div>`}),

sp('c5-s3','The overview',{
 left:`${head('Step 3 · Understand','Learn')}<h2>The overview</h2><p>For two pies, the overview answers three questions.</p><ol style="padding-left:20px;margin:12px 0;display:grid;gap:8px;font-size:15px"><li><b>Which segment was largest, and did that change?</b> <i>Tourism remained the most common reason.</i></li><li><b>Which shares grew, and which shrank?</b> <i>Tourism and business trips fell; the other three grew.</i></li><li><b>Is there a striking change?</b> <i>The share of visitors who came to study doubled.</i></li></ol>${insight('My overview','Overall, tourism remained the most common reason for visiting the city, although its share fell, as did that of business trips. By contrast, visiting friends and family and studying made up a growing share.')}${note('No figures in the overview. “Doubled” is fine, but leave the percentages for the body.')}<div class="clear"></div>${take('The largest segment, which shares grew and shrank, and any striking change. Two sentences, no figures.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">These use the university income pies (you’ll see them in Step 5). 2005 → 2025: government grants 55% → 30%, tuition fees 25% → 45%, research contracts 12% → 15%, other income 5% → 8%, donations 3% → 2%.</p><div data-act="c5-ov"></div><div data-act="c5-ovin" style="margin-top:16px"></div>`}),

sp('c5-s4','Organise the body',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Organise the body</h2>${vid({title:'By group, not by pie',len:'2 minutes',script:['Show two ways to organise the visitor answer.','By pie: 2014 in one paragraph, 2024 in the other. Every category appears twice, and no change is described.','By group: the two shrinking reasons together, the three growing reasons together.','Finish: organise by group so each change is described in one place.']})}<p>With two pies, it is tempting to describe one pie, then the other. That puts each category in two places and hides the changes.</p><ul class="clean"><li><b>By pie</b> (avoid): <i>In 2014, tourism was 48%, business 26%… In 2024, tourism was 40%, business 18%…</i></li><li><b>By group</b> (better): Body 1, the reasons that shrank: tourism and business. Body 2, the reasons that grew: friends and family, study and other.</li></ul>${mistake('<s>One paragraph for 2014, one for 2024.</s> The reader has to compare the figures themselves. Do it for them.')}${note('Within each group, describe each category’s change in one sentence: from … to ….')}<div class="clear"></div>${take('Organise by group, not by pie, so each change appears in one place.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the visitor charts in Step 1.</p><div data-act="c5-org"></div><div data-act="c5-split" style="margin-top:16px"></div>`}),

sp('c5-s5','Chapter challenge: a complete answer',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write a complete answer: introduction, overview and two body paragraphs. Aim for at least 150 words.</p>${taskbox('The charts below show the proportion of one university’s income that came from five sources in 2005 and 2025.')}${chart('uni')}${note('Look for a change at the top. Then group the three small sources together.')}<ul class="clean" style="font-size:15px"><li>Introduction: one sentence.</li><li>Overview: the change at the top, and the small sources.</li><li>Body 1: the two large sources. Body 2: the three small ones.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c5-write"></div>`}),

review({n:5,title:CT,write:'c5-write',next:['c6-open','Start Chapter 6 →'],
  learned:['Four parts: introduction, overview, two body paragraphs. No conclusion.','Paraphrase the task with a new verb and a new structure, and keep every detail.','The overview gives the largest segment, which shares grew and shrank, and any striking change.','Organise the body by groups of segments, not one pie at a time.']})
];

const acts={
'c5-parts':{type:'sort',level:'Guided',skill:'What goes where',decision:'Which part of the answer does each sentence belong in?',cats:['Introduction','Overview','Body'],
  items:[{w:'The pie charts compare why people visited one city in 2014 and 2024.',c:0,m:'paraphrases the task.'},
         {w:'Overall, tourism remained the most common reason for visiting, although its share fell.',c:1,m:'gives the big picture with no figures.'},
         {w:'The share of business trips fell from 26% to 18%.',c:2,m:'has detailed figures: body.'},
         {w:'The proportion of visitors who came to study doubled, from 6% to 12%.',c:2,m:'gives the evidence with figures: body.'},
         {w:'By contrast, visiting friends and family and studying made up a growing share.',c:1,m:'states a main change without figures: overview.'}]},
'c5-intro':{type:'choice',level:'Supported',skill:'Introductions',decision:'Task: “The charts below show the proportion of one university’s income that came from five sources in 2005 and 2025.” Which introduction is best?',
  opts:[{t:'The pie charts compare where one university’s income came from in 2005 and 2025.',ok:1,why:'A new verb and a new structure (where … came from), with every detail kept.'},{t:'The charts below show the proportion of one university’s income that came from five sources.',why:'This copies the task, including “below”, and drops the years.'},{t:'The pie charts show how much money a university made.',why:'Inaccurate: the pies show shares of income, not how much money.'}]},
'c5-para':{type:'binary',level:'Supported',skill:'Paraphrasing',decision:'Good paraphrase, or does it change the meaning?',labels:['Good paraphrase','Changes the meaning'],
  items:[{t:'“the proportion of income that came from five sources” → “where the university’s income came from”',a:0,right:'Same meaning, new structure.',wrong:'This keeps the meaning: where the income came from.'},
         {t:'“the proportion of income” → “how much money the university received”',a:1,right:'Right: the pies show shares, not amounts of money.',wrong:'This changes the meaning. The pies show shares, not how much money.'},
         {t:'“the main reason for visiting” → “why people visited”',a:0,right:'Same meaning, new structure.',wrong:'This keeps the meaning.'},
         {t:'“in 2014 and 2024” → “over the last decade”',a:1,right:'Right: it loses the exact years, and suggests information about the years in between.',wrong:'This loses the years and suggests the whole decade. Keep “in 2014 and 2024”.'}]},
'c5-ov':{type:'choice',level:'Supported',skill:'Writing an overview',decision:'Which is the best overview of the university income charts?',
  opts:[{t:'Overall, government grants were the main source of income in 2005, but by 2025 tuition fees had overtaken them. The other three sources made up only a small share in both years.',ok:1,why:'The change at the top and the small sources, with no figures.'},
        {t:'Overall, grants fell from 55% to 30%, while fees rose from 25% to 45%.',why:'Accurate, but these figures belong in the body.'},
        {t:'Overall, the university made more money from students in 2025.',why:'The pies show shares, not amounts of money.'}]},
'c5-ovin':{type:'binary',level:'Supported',skill:'Overview or body?',decision:'Overview or body paragraph?',labels:['Overview','Body paragraph'],
  items:[{t:'Tuition fees overtook government grants as the main source of income.',a:0,right:'A change at the top, without figures.',wrong:'A change at the top is overview material.'},
         {t:'Research contracts rose from 12% to 15%.',a:1,right:'A detail with figures: body.',wrong:'This has figures, so it belongs in a body paragraph.'},
         {t:'Donations were the smallest source in both years, at 3% and 2%.',a:1,right:'A detail with figures: body.',wrong:'With its figures, this belongs in the body.'},
         {t:'The three smallest sources made up only a small share in both years.',a:0,right:'A general point about a group, no figures.',wrong:'This summarises a group without figures: overview.'}]},
'c5-org':{type:'choice',level:'Supported',skill:'Organising the body',decision:'How would you organise the body of the visitor answer?',
  opts:[{t:'Body 1: tourism and business, which shrank. Body 2: friends and family, study and other, which grew.',ok:1,why:'Each paragraph has one point, and each change appears in one place.'},
        {t:'Body 1: the 2014 pie. Body 2: the 2024 pie.',why:'Every category appears twice, and the reader has to work out the changes.'},
        {t:'Body 1: tourism and study. Body 2: business, friends and family, and other.',why:'These groups don’t share a pattern: tourism shrank but study grew.'}]},
'c5-split':{type:'sort',level:'Supported',skill:'Grouping for paragraphs',decision:'Which body paragraph does each reason belong in?',prompt:'Body 1: the reasons whose share fell. Body 2: the reasons whose share grew.',cats:['Body 1','Body 2'],
  items:[{w:'Tourism: 48% → 40%',c:0,m:'was the largest reason, but its share fell.'},{w:'Business: 26% → 18%',c:0,m:'fell by 8 points, like tourism.'},{w:'Friends and family: 16% → 22%',c:1,m:'grew by 6 points.'},{w:'Study: 6% → 12%',c:1,m:'doubled.'},{w:'Other: 4% → 8%',c:1,m:'doubled, but it is a small, mixed category.'}]},
'c5-write':{type:'write',level:'Independent',skill:'A complete answer',decision:'Write a complete answer.',prompt:'Introduction, overview and two body paragraphs. At least 150 words. Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The pie charts compare…'},{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your introduction gives the university, income and the two years.',fix:'Include the university, its income, and 2005 and 2025.',fn:v=>/universit/i.test(v.intro)&&/income/i.test(v.intro)&&/2005/.test(v.intro)&&/2025/.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start the overview with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview reports the change at the top.',fix:'Report that tuition fees overtook government grants as the main source.',fn:v=>/(fee|tuition)/i.test(v.ov)&&/(grant|government)/i.test(v.ov)},
          {t:'You wrote about shares, not amounts of money.',fix:'The pies show shares. Write “a smaller share of income”, not “less money”.',fn:v=>!/\b(more|less) (money|income)\b|\bmade more\b|\bearned more\b/i.test(v.ov+' '+v.b1+' '+v.b2)},
          {t:'You grouped the three small sources.',fix:'Group research contracts, other income and donations in one paragraph.',fn:v=>/research/i.test(v.b2)&&/donation/i.test(v.b2)},
          {t:'You gave figures with %.',fix:'Give figures with %.',fn:v=>((v.b1+' '+v.b2).match(/\d+\s*(%|per ?cent)/gi)||[]).length>=4},
          {t:'Your answer is at least 150 words.',fix:'Your answer is under 150 words.',fn:v=>((v.intro+' '+v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=150}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Introduction</span>The pie charts compare <button type="button" class="hl" data-n="0">where one university’s income came from</button> in 2005 and 2025, and how it was divided between five sources.</p><p><span class="plabel">Overview</span>Overall, government grants were the largest source of income in 2005, <button type="button" class="hl" data-n="1">but by 2025 tuition fees had overtaken them</button>. The other three sources made up only a small share in both years.</p><p><span class="plabel">Body 1</span>In 2005, government grants provided more than half of the university’s income (55%), <button type="button" class="hl" data-n="2">more than twice the share from tuition fees</button> (25%). Twenty years later, <button type="button" class="hl" data-n="3">the positions had been reversed</button>: the share from grants had fallen to 30%, while tuition fees accounted for 45%, almost half of the total.</p><p><span class="plabel">Body 2</span>The remaining three sources were much smaller. Research contracts made up 12% of income in 2005 and 15% in 2025, and the share from other income rose from 5% to 8%. Donations were the smallest source in both years, their share falling slightly from 3% to 2%. <button type="button" class="hl" data-n="4">Taken together, these three sources grew from a fifth of income to exactly a quarter.</button></p>`,
  notes:['“Where … came from” turns the task’s noun phrase into a clause.','The change at the top, with the past perfect: “by 2025 … had overtaken”.','55 is more than twice 25, so “more than twice the share” is accurate.','“The positions had been reversed” makes the comparison for the reader.','A combined share for the group: 12 + 5 + 3 = 20 (a fifth), and 15 + 8 + 2 = 25 (a quarter).'],
  self:['My overview reports the change at the top, with no figures.','I organised the body by group, not by pie.','I wrote about shares, not amounts of money.','I gave a combined share and checked the sum.'],revise:1}
};

const gloss={
  'paraphrase':{term:'paraphrase',def:'Say the same thing in different words and a different structure. Your introduction paraphrases the task.',path:'M20,30 H110 M20,50 H90 M130,30 H220 M150,50 H220',ex:'“the main reason for visiting one city” → “why people visited one city”'}
};

const retrieval={
 'c5-s1':[{q:'Where do figures go?',opts:[{t:'In the body paragraphs',ok:1,why:'The overview has none.'},{t:'In the overview',why:'The overview gives the big picture.'}]}],
 'c5-s2':[{q:'“the proportion of income” → “how much money”. Good paraphrase?',opts:[{t:'No, it changes the meaning',ok:1,why:'Shares, not amounts.'},{t:'Yes',why:'The pies show shares.'}]}],
 'c5-s3':[{q:'What goes first in a pie chart overview?',opts:[{t:'The largest segment, and whether it changed',ok:1,why:'Then the main changes.'},{t:'The smallest segment',why:'Start with the most important.'}]}],
 'c5-s4':[{q:'Two pies: how should you organise the body?',opts:[{t:'By group of segments',ok:1,why:'Each change in one place.'},{t:'One pie per paragraph',why:'That repeats every category.'}]}],
 'c5-s5':[{q:'12 + 5 + 3 = 20% is…',opts:[{t:'a fifth',ok:1,why:'20%.'},{t:'a quarter',why:'A quarter is 25%.'}]}]
};

const minitest=[
 {q:'How many parts does a Task 1 answer need?',opts:[{t:'Four',ok:1,why:'Introduction, overview, two body paragraphs.'},{t:'Five, with a conclusion',why:'The overview does that job.'},{t:'Two',why:'You need an introduction and an overview too.'}],sp:'c5-s1'},
 {q:'Which belongs in the overview?',opts:[{t:'Tourism remained the most common reason, although its share fell.',ok:1,why:'Big picture, no figures.'},{t:'Business trips fell from 26% to 18%.',why:'Detail with figures.'},{t:'Study was 6% in 2014.',why:'One figure.'}],sp:'c5-s1'},
 {q:'Which is a good paraphrase of “the main reason for visiting one city”?',opts:[{t:'why people visited one city',ok:1,why:'Same meaning, new structure.'},{t:'how many people visited one city',why:'That is an amount.'},{t:'the main reason for visiting one city',why:'That is copied.'}],sp:'c5-s2'},
 {q:'Which introduction is best?',opts:[{t:'The pie charts compare where one university’s income came from in 2005 and 2025.',ok:1,why:'New words, same details.'},{t:'The charts below show the university’s income.',why:'Copied, and details lost.'},{t:'The pie charts show how much money a university made.',why:'Shares, not money.'}],sp:'c5-s2'},
 {q:'Tuition fees overtook government grants. Where does this go?',opts:[{t:'The overview',ok:1,why:'A change at the top.'},{t:'Nowhere',why:'It is the main feature.'},{t:'Only in body 2',why:'It belongs in the overview first.'}],sp:'c5-s3'},
 {q:'Which overview has a problem?',opts:[{t:'Overall, the university made more money from students.',ok:1,why:'Pies show shares, not money.'},{t:'Overall, tuition fees overtook grants as the main source.',why:'This is accurate.'},{t:'Overall, the three smallest sources stayed small.',why:'This is accurate.'}],sp:'c5-s3'},
 {q:'Why avoid one paragraph per pie?',opts:[{t:'Every category appears twice and the changes are hidden',ok:1,why:'The reader has to compare for you.'},{t:'It is too short',why:'Length is not the problem.'},{t:'It is not allowed',why:'It is allowed, but weaker.'}],sp:'c5-s4'},
 {q:'Tourism and business both shrank. Study and family both grew. How do you organise?',opts:[{t:'Body 1: shrinking reasons; Body 2: growing reasons',ok:1,why:'One point per paragraph.'},{t:'Body 1: 2014; Body 2: 2024',why:'By pie hides the changes.'},{t:'One paragraph per reason',why:'Too many short paragraphs.'}],sp:'c5-s4'}
];

const cannow=[['Write a four-part answer with a clear overview','c5-s1'],['Paraphrase a pie chart task without changing its meaning','c5-s2'],['Write an overview with the change at the top','c5-s3'],['Organise the body by group, not by pie','c5-s4'],['Write a complete answer of at least 150 words','c5-s5']];
addChapter({n:5,spreads,acts,gloss,charts:{visit:C.visit,uni:C.uni},retrieval,minitest,cannow});
})();
