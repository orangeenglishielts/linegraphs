/* ==========================================================================
   MODULE 6 · CHAPTER 1 · COMPARATIVES AND SUPERLATIVES
   ACTIVITY IDS (type · level)
     c1-forms   sort      Guided       Step 1  Comparative or superlative?
     c1-top     choice    Supported    Step 2  The highest and lowest
     c1-fix     fix       Supported    Step 2  Fix the form
     c1-size    choice    Supported    Step 3  How big is the difference?
     c1-size2   binary    Supported    Step 3  Accurate or not?
     c1-build   builder   Supported    Step 4  As … as
     c1-write   write     Independent  Step 5  Five gyms
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,howto,opening,review,addChapter}=OE;
const {C,illus}=CMP;
const P='Chapter 1',CT='Comparatives and Superlatives',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:1,title:CT,lede:'Task 1 asks you to “make comparisons where relevant”, and comparatives and superlatives are the basic tools. Most candidates know the forms, but many make small errors under pressure, or compare without saying how big the difference is. In this chapter I’ll show you how to compare accurately and precisely.',
  outcomes:['form comparatives and superlatives correctly: cheaper, more expensive, the cheapest','name the highest and lowest figures with superlatives',`show the size of a difference: ${T('much more','much more expensive')}, slightly cheaper, twice as much`,'use as … as and not as … as'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus([70,105,62,100,48]),
  steps:[[1,'c1-s1','The forms','Cheaper, more expensive','Discover'],[2,'c1-s2','Highest and lowest','Superlatives with data','Understand'],[3,'c1-s3','How big is the difference?','Much, slightly, twice','Understand'],[4,'c1-s4','As … as','Almost as, not as','Practise'],[5,'c1-s5','Chapter challenge','Five gyms','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('A comparison needs two things and the size of the difference.','much more','Eastport is much more expensive than Stenton')}),

sp('c1-s1','The forms',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The forms</h2>${vid({title:'Comparative and superlative forms',len:'90 seconds',script:['Show the gym chart.','Short adjectives: cheap, cheaper, the cheapest.','Long adjectives: expensive, more expensive, the most expensive.','Irregular: good, better, the best; bad, worse, the worst; little, less, the least.']})}<ul class="clean"><li><b>Short adjectives:</b> cheap → cheaper → the cheapest; high → higher → the highest</li><li><b>Long adjectives:</b> expensive → more expensive → the most expensive</li><li><b>Irregular:</b> good → better → the best; bad → worse → the worst; little → less → the least</li></ul>${chart('gym')}${note('This chart has no year, so it describes the present: use the present simple. Membership <i>costs</i>, Eastport <i>is</i>.')}<div class="clear"></div>${take('Short: -er, the -est. Long: more, the most. Learn the irregular ones.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c1-forms"></div>`}),

sp('c1-s2','Highest and lowest',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Highest and lowest</h2>${vid({title:'Highest and lowest',len:'90 seconds',script:['Find the tallest bar: Eastport, €610. The most expensive.','Find the shortest: Stenton, €300. The cheapest.','Say: superlatives need “the”.','Show the errors: more cheaper, the most cheap.']})}<p>Superlatives name the extremes, which are always key features:</p>${insight('The extremes','Eastport is <b>the most expensive</b> city, at €610 a year, and Stenton is <b>the cheapest</b>, at €300.')}${mistake('<s>Stenton is more cheaper than Kelby.</s> “Cheaper” already contains the comparison: <i>Stenton is cheaper than Kelby</i>.')}${take('The most expensive, the cheapest: “the” and no double comparatives.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c1-top"></div><div data-act="c1-fix" style="margin-top:16px"></div>`}),

sp('c1-s3','How big is the difference?',{
 left:`${head('Step 3 · Understand','Learn')}<h2>How big is the difference?</h2>${vid({title:'How big is the difference?',len:'2 minutes',script:['Compare Eastport (610) and Marlow Bay (590): only €20. Slightly more expensive.','Compare Eastport and Stenton: 610 and 300. About twice as much.','Show the modifiers: slightly, a little, much, far, considerably.','Say: calculate, then choose the modifier.']})}<p>Add a word that shows the size of the difference, and check it against the figures:</p><ul class="clean"><li><b>Small:</b> slightly, a little + comparative. <i>Eastport is slightly more expensive than Marlow Bay (€20).</i></li><li><b>Large:</b> much, far, considerably + comparative. <i>Eastport is much more expensive than Stenton.</i></li><li><b>Multiples:</b> twice as much as, three times as much as. <i>A member in Eastport pays about twice as much as one in Stenton (610 ÷ 300 ≈ 2).</i></li></ul>${mistake('<s>Eastport is very more expensive.</s> Use <i>much</i> or <i>far</i> with a comparative, never <i>very</i>.')}${take('Slightly for small gaps, much or far for big ones, twice as much as for multiples. Calculate first.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c1-size"></div><div data-act="c1-size2" style="margin-top:16px"></div>`}),

sp('c1-s4','As … as',{
 left:`${head('Step 4 · Practise','Learn')}<h2>As … as</h2><p>“As … as” compares two things that are equal or nearly equal:</p><ul class="clean"><li><b>almost as … as:</b> <i>Marlow Bay is almost as expensive as Eastport.</i></li><li><b>not as … as:</b> <i>Kelby is not as expensive as Norhaven.</i></li><li><b>twice as much as:</b> <i>Eastport costs about twice as much as Stenton.</i></li></ul>${mistake('<s>Marlow Bay is almost as expensive than Eastport.</s> As … as, never as … than.')}${take('Almost as … as for nearly equal; not as … as for smaller; as … as, never as … than.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c1-build"></div>`}),

sp('c1-s5','Chapter challenge: five gyms',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph comparing the cost of gym membership in the five cities.</p>${chart('gym2')}<ul class="clean" style="font-size:15px"><li>The highest and lowest with superlatives.</li><li>At least one comparative with a modifier: slightly, much, far.</li><li>One as … as or twice as much as.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Short adjectives: -er, the -est. Long: more, the most. Learn the irregular forms.','Name the extremes with superlatives, and never double a comparative.','Show the size of a difference: slightly, much, far, twice as much as.','Almost as … as, not as … as; never as … than.']})
];

const acts={
'c1-forms':{type:'sort',level:'Guided',skill:'Forms',decision:'Comparative or superlative?',cats:['Comparative','Superlative'],
  items:[{w:'cheaper',c:0,m:'compares two.'},{w:'the most expensive',c:1,m:'the top of the group.'},{w:'less',c:0,m:'compares two.'},{w:'the lowest',c:1,m:'the bottom of the group.'},{w:'more expensive',c:0,m:'compares two.'},{w:'the best',c:1,m:'the top of the group.'}]},
'c1-top':{type:'choice',level:'Supported',skill:'Superlatives',decision:'Which sentence is accurate?',
  opts:[{t:'Stenton is the cheapest city for gym membership, at €300 a year.',ok:1,why:'€300 is the lowest figure.'},{t:'Kelby is the cheapest city, at €380.',why:'Stenton is cheaper: €300.'},{t:'Marlow Bay is the most expensive city.',why:'Eastport is: €610 against €590.'}]},
'c1-fix':{type:'fix',level:'Supported',skill:'Forms',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Stenton is more cheaper than Kelby.',ok:/stenton is cheaper than kelby/i,bad:/more cheaper/i,hint:'“Cheaper” is already a comparative.',err:'more cheaper',fix:'cheaper',why:'Never use “more” with an -er comparative.',model:'Stenton is cheaper than Kelby.'},
         {wrong:'Eastport is the most expensivest city.',ok:/the most expensive city/i,bad:/expensivest/i,hint:'Long adjectives use “the most”, without -est.',err:'the most expensivest',fix:'the most expensive',why:'One superlative marker only.',model:'Eastport is the most expensive city.'},
         {wrong:'Membership in Norhaven is expensiver than in Kelby.',ok:/more expensive than/i,bad:/expensiver/i,hint:'“Expensive” is a long adjective.',err:'expensiver',fix:'more expensive',why:'Long adjectives use “more”.',model:'Membership in Norhaven is more expensive than in Kelby.'},
         {wrong:'Stenton is cheapest city.',ok:/the cheapest city/i,bad:/is cheapest city/i,hint:'Superlatives need an article.',err:'cheapest city',fix:'the cheapest city',why:'Use “the” with a superlative before a noun.',model:'Stenton is the cheapest city.'}]},
'c1-size':{type:'choice',level:'Supported',skill:'Size of the difference',decision:'Eastport €610, Marlow Bay €590. Which sentence fits?',
  opts:[{t:'Eastport is slightly more expensive than Marlow Bay.',ok:1,why:'Only €20 difference: slightly.'},{t:'Eastport is far more expensive than Marlow Bay.',why:'€20 is a small difference.'},{t:'Eastport is twice as expensive as Marlow Bay.',why:'Twice €590 would be €1,180.'}]},
'c1-size2':{type:'binary',level:'Supported',skill:'Size of the difference',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Membership in Eastport costs about twice as much as in Stenton.',a:0,right:'610 ÷ 300 ≈ 2.',wrong:'It is accurate: €610 is about twice €300.'},
         {t:'Norhaven is much cheaper than Kelby.',a:1,right:'Right. Norhaven is €40 more expensive.',wrong:'Norhaven costs €420 and Kelby €380: Norhaven is more expensive.'},
         {t:'Eastport is considerably more expensive than Kelby.',a:0,right:'€230 more: a big gap.',wrong:'It is accurate: €610 against €380.'},
         {t:'Stenton is three times cheaper than Eastport.',a:1,right:'Right. Avoid “times cheaper”, and the ratio is about two.',wrong:'Eastport is about twice as expensive; “times cheaper” is also best avoided.'}]},
'c1-build':{type:'builder',level:'Supported',skill:'As … as',decision:'Build a sentence comparing Marlow Bay and Eastport.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['At €590 a year,','membership in Marlow Bay','is almost as expensive','as in Eastport.'],
  distract:[{t:'than in Eastport.',why:'As … as, never as … than.',fix:'as in Eastport.'},{t:'is almost as more expensive',why:'No “more” inside as … as.',fix:'is almost as expensive'}],
  right:'The figure, the subject, almost as … as.',orderMsg:'All the right pieces, but check the order: the figure, the subject, the comparison.',incompleteMsg:'Good so far, but incomplete. Finish the comparison.'},
'c1-write':{type:'write',level:'Independent',skill:'Comparatives and superlatives',decision:'Write one body paragraph comparing the five cities.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Eastport is the most expensive…'}],
  checks:[{t:'You named the most and least expensive cities.',fix:'Name Eastport (the most expensive) and Stenton (the cheapest).',fn:v=>/eastport/i.test(v.a)&&/stenton/i.test(v.a)&&/\bthe (most expensive|cheapest|highest|lowest)\b/i.test(v.a)},
          {t:'You used a comparative with a modifier.',fix:'Add one: slightly cheaper, much more expensive, far higher.',fn:v=>/\b(slightly|a little|much|far|considerably|significantly|marginally)\s+(more|less|\w+er)\b/i.test(v.a)},
          {t:'You used as … as or a multiple.',fix:'Add: almost as expensive as, twice as much as.',fn:v=>/\bas \w+ as\b|twice as|times as/i.test(v.a)},
          {t:'No double comparatives.',fix:'Remove “more” before an -er form, and -est after “most”.',fn:v=>!/more (cheaper|higher|lower|bigger|smaller)|most \w+est|expensiver/i.test(v.a)},
          {t:'You gave prices with €.',fix:'Give prices with €.',fn:v=>(v.a.match(/€\s?\d/g)||[]).length>=3},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">Eastport is the most expensive city for gym membership, at €610 a year</button>, closely followed by Marlow Bay, <button type="button" class="hl" data-n="1">which is almost as expensive as Eastport, at €590</button>. Membership in Norhaven costs €420, €40 more than in Kelby (€380). Stenton is the cheapest city, at €300, <button type="button" class="hl" data-n="2">so a member in Eastport pays about twice as much as one in Stenton</button>. <button type="button" class="hl" data-n="3">Even Kelby, the second-cheapest city, is considerably more expensive than Stenton.</button></p>`,
  notes:['A superlative for the top, with the figure.','Almost as … as for nearly equal figures.','A multiple: 610 ÷ 300 ≈ 2.','A modifier that matches the gap: €80, more than a quarter.'],
  self:['I named the extremes with superlatives.','I used modifiers that match the size of each gap.','I used as … as correctly.','I used the present simple for undated data.'],revise:1}
};

const gloss={
  'much more':{term:'much more',def:'Much, far or considerably + comparative shows a big difference. Never “very more”.',path:'M40,80 V20 H90 V80 M150,80 V60 H200 V80',ex:'“Eastport is much more expensive than Stenton.”'},
  'twice as much as':{term:'twice as much as',def:'Two times the amount. Also: three times as much as.',path:'M40,80 V20 H90 V80 M150,80 V50 H200 V80',ex:'“A member in Eastport pays about twice as much as one in Stenton.”'},
  'almost as':{term:'almost as … as',def:'Nearly equal. Not as … as means smaller.',path:'M40,80 V22 H90 V80 M150,80 V26 H200 V80',ex:'“Marlow Bay is almost as expensive as Eastport.”'}
};

const retrieval={
 'c1-s1':[{q:'The comparative of “expensive” is…',opts:[{t:'more expensive',ok:1,why:'Long adjective.'},{t:'expensiver',why:'Not a word.'}]}],
 'c1-s2':[{q:'Which is correct?',opts:[{t:'Stenton is cheaper than Kelby.',ok:1,why:'One comparative.'},{t:'Stenton is more cheaper than Kelby.',why:'Double comparative.'}]}],
 'c1-s3':[{q:'€610 against €590 is…',opts:[{t:'slightly more expensive',ok:1,why:'€20.'},{t:'far more expensive',why:'Small gap.'}]}],
 'c1-s4':[{q:'Almost as expensive ___ Eastport.',opts:[{t:'as',ok:1,why:'As … as.'},{t:'than',why:'Never as … than.'}]}],
 'c1-s5':[{q:'€610 compared with €300 is…',opts:[{t:'about twice as much',ok:1,why:'≈ 2.'},{t:'three times as much',why:'3 × 300 = 900.'}]}]
};

const minitest=[
 {q:'The superlative of “cheap” is…',opts:[{t:'the cheapest',ok:1,why:'Short adjective.'},{t:'the most cheap',why:'Use -est.'},{t:'cheapest',why:'Add “the”.'}],sp:'c1-s1'},
 {q:'The comparative of “little” is…',opts:[{t:'less',ok:1,why:'Irregular.'},{t:'littler',why:'Use less.'},{t:'more little',why:'Use less.'}],sp:'c1-s1'},
 {q:'Which is correct?',opts:[{t:'Eastport is the most expensive city.',ok:1,why:'The most + long adjective.'},{t:'Eastport is the most expensivest city.',why:'One marker.'},{t:'Eastport is most expensive city.',why:'Add “the”.'}],sp:'c1-s2'},
 {q:'Why name the highest and lowest figures?',opts:[{t:'They are almost always key features',ok:1,why:'The extremes.'},{t:'To add words',why:'Accuracy.'},{t:'They are optional',why:'They are key.'}],sp:'c1-s2'},
 {q:'Which modifier fits a small difference?',opts:[{t:'slightly',ok:1,why:'Small.'},{t:'far',why:'Big.'},{t:'very',why:'Not with comparatives.'}],sp:'c1-s3'},
 {q:'Which is correct?',opts:[{t:'much more expensive',ok:1,why:'Much + comparative.'},{t:'very more expensive',why:'Use much or far.'},{t:'more much expensive',why:'Word order.'}],sp:'c1-s3'},
 {q:'Which is correct?',opts:[{t:'not as expensive as',ok:1,why:'As … as.'},{t:'not as expensive than',why:'As.'},{t:'not so expensive than',why:'As.'}],sp:'c1-s4'},
 {q:'Kelby €380, Stenton €300. Kelby is…',opts:[{t:'considerably more expensive than Stenton',ok:1,why:'€80, over a quarter more.'},{t:'twice as expensive as Stenton',why:'2 × 300 = 600.'},{t:'cheaper than Stenton',why:'It costs more.'}],sp:'c1-s5'}
];

const cannow=[['Form comparatives and superlatives correctly','c1-s1'],['Name the extremes with superlatives','c1-s2'],['Show the size of a difference','c1-s3'],['Use as … as and not as … as','c1-s4'],['Write a paragraph of accurate comparisons','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{gym:C.gym,gym2:cp('gym','ch-m6gym2')},retrieval,minitest,cannow});
})();
