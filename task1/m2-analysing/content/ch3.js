/* ==========================================================================
   MODULE 2 · CHAPTER 3 · SELECTING DATA
   ACTIVITY IDS (type · level)
     c3-incl    binary    Guided       Step 1  Include or leave out?
     c3-years   choice    Supported    Step 2  Which years?
     c3-2020    choice    Supported    Step 2  The unusual year
     c3-grp1    sort      Supported    Step 3  2005 against 2025
     c3-grp2    sort      Supported    Step 3  2025 against 2015
     c3-build   builder   Supported    Step 4  A selective sentence
     c3-ov      choice    Independent  Step 4  The best overview
     c3-write   write     Independent  Step 5  Overview and two body paragraphs
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,figs,opening,review,addChapter}=OE;
const {C,illus}=F2;
const P='Chapter 3',CT='Selecting Data',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const nums=t=>(String(t).match(/\b\d[\d,]*\b/g)||[]).filter(n=>!/^(19|20)\d\d$/.test(n)).length;

const spreads=[
opening({n:3,title:CT,lede:'This table has 25 figures. You have about 20 minutes and around 170 words, so you can’t use them all, and the examiner doesn’t want you to. In this chapter I’ll show you how to choose: the first and last years, the unusual year, and the figures that support your groups.',
  outcomes:['decide which figures to use and which to leave out','use the first year, the last year and any unusual year','group categories that behave in a similar way',`write ${T('selective')} body paragraphs with about ten figures`],
  illus:illus('sieve'),
  steps:[[1,'c3-s1','Too many figures','Include or leave out','Discover'],[2,'c3-s2','Which years?','First, last, unusual','Understand'],[3,'c3-s3','Group the categories','Similar behaviour','Understand'],[4,'c3-s4','Selective sentences','The right figures','Practise'],[5,'c3-s5','Chapter challenge','Five islands','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Too many figures',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Too many figures</h2>${vid({title:'Too many figures',len:'90 seconds',script:['Show the islands table: five islands, five years, 25 figures.','Say: listing them all is a list, not a description.','Circle the figures that matter: Corran highest, the 2020 dip, Bresk’s growth, Dunmore lowest.']})}<p>You don’t need every figure. Choose about ten that support your comparisons, and leave out the rest.</p>${chart('isl')}${mistake('<s>In 2005 Ardel had 120,000, Bresk 40,000, Corran 200,000, Dunmore 15,000 and Eskay 60,000. In 2010 …</s> Reading the table aloud isn’t describing it.')}${take('Select about ten figures that support your comparisons. Leave out the rest.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c3-incl"></div>`}),

sp('c3-s2','Which years?',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Which years?</h2>${vid({title:'Which years?',len:'90 seconds',script:['Say: the first and last years show the overall change.','Point to 2020: every island fell. That is an unusual year.','Say: describe a middle year only when something happens there.']})}<ul class="clean"><li><b>The first and last years</b> show the overall change.</li><li><b>An unusual year</b> earns a mention: here, every island had fewer visitors in 2020 than in 2015.</li><li><b>Other middle years</b> only if something happens there, such as a peak.</li></ul>${insight('The unusual year','Arrivals fell at every island in 2020, before recovering in 2025.')}${take('First, last, and any unusual year. Leave out middle years where nothing happens.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-years"></div><div data-act="c3-2020" style="margin-top:16px"></div>`}),

sp('c3-s3','Group the categories',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Group the categories</h2><p>Categories that behave in the same way can share a sentence or a paragraph. Compare the first and last years for each island:</p><ul class="clean"><li><b>More tourists in 2025 than in 2005:</b> Ardel, Bresk, Dunmore, Eskay.</li><li><b>Fewer tourists in 2025 than in 2005:</b> Corran.</li></ul><p>Then compare 2025 with 2015, before the dip: four islands ended above their 2015 level; Corran didn’t.</p>${note('Corran is the exception twice over, so it deserves its own sentences.')}<div class="clear"></div>${take('Group categories with the same behaviour; give the exception its own sentence.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-grp1"></div><div data-act="c3-grp2" style="margin-top:16px"></div>`}),

sp('c3-s4','Selective sentences',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Selective sentences</h2><p>A selective sentence uses two or three figures to make one clear point:</p>${insight('One point, three figures','Arrivals at Bresk almost tripled, from 40,000 in 2005 to 110,000 in 2025, despite a dip in 2020.')}${mistake('<s>Bresk had 40,000, 55,000, 80,000, 60,000 and 110,000.</s> Five figures, no point. Choose the start, the end and the comparison.')}${take('One point per sentence, with only the figures that prove it.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the table in Step 1.</p><div data-act="c3-build"></div><div data-gate="c3-build" hidden style="margin-top:16px"><div data-act="c3-ov"></div></div>`}),

sp('c3-s5','Chapter challenge: five islands',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write an overview and two body paragraphs. Use no more than about twelve figures.</p><div class="oe-insight"><span class="lab">The task</span>The table below shows the number of tourists who visited five islands between 2005 and 2025.</div>${chart('isl2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Choose about ten figures that support your comparisons.','Use the first and last years, and any unusual year.','Group categories that behave alike; give exceptions their own sentence.','One point per sentence, with only the figures that prove it.']})
];

const acts={
'c3-incl':{type:'binary',level:'Guided',skill:'Selecting',decision:'Include it, or leave it out?',labels:['Include','Leave out'],
  items:[{t:'Corran had the most tourists in every year.',a:0,right:'An extreme that holds throughout.',wrong:'The leader in every year is a key feature.'},
         {t:'Eskay had 62,000 tourists in 2010.',a:1,right:'Right. A middle-year figure with nothing special about it.',wrong:'Nothing happens here: leave it out.'},
         {t:'Every island had fewer tourists in 2020 than in 2015.',a:0,right:'An unusual year affecting all categories.',wrong:'A fall at every island is a key feature.'},
         {t:'Dunmore had 18,000 tourists in 2010.',a:1,right:'Right. A minor middle figure.',wrong:'A middle figure for the smallest island: leave it out.'},
         {t:'Bresk almost tripled its arrivals between 2005 and 2025.',a:0,right:'The biggest relative change.',wrong:'The strongest growth is a key feature.'}]},
'c3-years':{type:'choice',level:'Supported',skill:'Choosing years',decision:'Which years should you mention most?',
  opts:[{t:'2005, 2025 and 2020',ok:1,why:'The start, the end and the unusual year.'},{t:'2010 and 2015',why:'Middle years with nothing special.'},{t:'Every year equally',why:'That makes a list.'}]},
'c3-2020':{type:'choice',level:'Supported',skill:'The unusual year',decision:'Which sentence about 2020 is accurate?',
  opts:[{t:'Arrivals fell at all five islands in 2020, before recovering in 2025.',ok:1,why:'Every 2020 figure is below 2015, and every 2025 figure is above 2020.'},{t:'Only Corran had fewer tourists in 2020.',why:'All five fell.'},{t:'Tourism stopped completely in 2020.',why:'Numbers fell but didn’t reach zero.'}]},
'c3-grp1':{type:'sort',level:'Supported',skill:'Grouping',decision:'More or fewer tourists in 2025 than in 2005?',cats:['More in 2025','Fewer in 2025'],
  items:[{w:'Ardel',c:0,m:'120,000 → 160,000.'},{w:'Bresk',c:0,m:'40,000 → 110,000.'},{w:'Corran',c:1,m:'200,000 → 170,000.'},{w:'Dunmore',c:0,m:'15,000 → 25,000.'},{w:'Eskay',c:0,m:'60,000 → 70,000.'}]},
'c3-grp2':{type:'sort',level:'Supported',skill:'Grouping',decision:'Above or below the 2015 level in 2025?',cats:['Above 2015','Below 2015'],
  items:[{w:'Ardel',c:0,m:'150,000 → 160,000.'},{w:'Bresk',c:0,m:'80,000 → 110,000.'},{w:'Corran',c:1,m:'185,000 → 170,000.'},{w:'Dunmore',c:0,m:'22,000 → 25,000.'},{w:'Eskay',c:0,m:'65,000 → 70,000.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'A selective sentence',decision:'Build a selective sentence about Bresk.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Arrivals at Bresk','almost tripled,','from 40,000 in 2005','to 110,000 in 2025,','despite a dip in 2020.'],
  distract:[{t:'55,000 in 2010, 80,000 in 2015,',why:'Middle figures add nothing to this point.',fix:'from 40,000 in 2005'},{t:'quadrupled,',why:'110 ÷ 40 = 2.75: almost tripled.',fix:'almost tripled,'}],
  right:'One point, the start and end figures, and the unusual year.',orderMsg:'All the right pieces, but check the order: the subject, the change, the start, the end, then the dip.',incompleteMsg:'Good so far, but incomplete. Add the end figure and the dip.'},
'c3-ov':{type:'choice',level:'Independent',skill:'Overview',decision:'Which overview is best?',
  opts:[{t:'Overall, tourist arrivals rose at four of the five islands, although every island saw a fall in 2020. Corran remained the most visited throughout.',ok:1,why:'The pattern, the unusual year and the leader, with no figures.'},{t:'Overall, Corran had 200,000 tourists in 2005.',why:'A figure: body material.'},{t:'Overall, island tourism is growing because travel is cheaper.',why:'A reason the table doesn’t give.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Selective writing',decision:'Write an overview and two body paragraphs.',prompt:'About twelve figures at most. Then check your writing.',
  fields:[{k:'ov',label:'Overview',rows:3,ph:'Overall,…'},{k:'b1',label:'Body paragraph 1',rows:5},{k:'b2',label:'Body paragraph 2',rows:5}],
  checks:[{t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|in summary)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'You mentioned the 2020 fall.',fix:'Every island fell in 2020: include it.',fn:v=>/2020/.test(v.ov+v.b1+v.b2)},
          {t:'You identified Corran as the most visited.',fix:'Say that Corran had the most tourists throughout.',fn:v=>/corran/i.test(v.ov+v.b1)&&/(most|largest|highest|busiest)/i.test(v.ov+v.b1)},
          {t:'You were selective: twelve figures or fewer, not counting years.',fix:'Too many figures: keep the ones that support your points.',fn:v=>{const n=nums(v.b1+' '+v.b2);return n>=5&&n<=12}},
          {t:'You wrote figures in full.',fix:'The table is in thousands: write 110,000, not 110.',fn:v=>/\d{2,3},000/.test(v.b1+' '+v.b2)},
          {t:'Your answer is a good length (110 words or more).',fix:'Add detail: your overview and paragraphs are under 110 words.',fn:v=>((v.ov+' '+v.b1+' '+v.b2).match(/\S+/g)||[]).length>=110}],
  modelTitle:'My model answer',
  model:`<p><span class="plabel">Overview</span>Overall, tourist arrivals rose at four of the five islands, although every island saw a fall in 2020. <button type="button" class="hl" data-n="0">Corran remained the most visited island throughout, despite receiving fewer tourists in 2025 than in 2005.</button></p><p><span class="plabel">Body 1</span>Corran attracted 200,000 tourists in 2005, more than any other island, but its numbers declined gradually to 185,000 in 2015 and dropped to 120,000 in 2020. <button type="button" class="hl" data-n="1">Although they recovered to 170,000 in 2025, this was still below the 2015 level.</button> Ardel followed a similar path in 2020, falling from 150,000 to 90,000, but it then rose to 160,000, its highest figure.</p><p><span class="plabel">Body 2</span>Among the smaller islands, Bresk grew most strongly. <button type="button" class="hl" data-n="2">Arrivals at Bresk almost tripled, from 40,000 in 2005 to 110,000 in 2025</button>, despite a dip in 2020. Eskay and Dunmore saw more modest growth, reaching 70,000 and 25,000 respectively, <button type="button" class="hl" data-n="3">and Dunmore remained the least visited island in every year</button>.</p>`,
  notes:['The exception in the overview, without figures.','A comparison with the year before the dip: the selection tells a story.','Two figures, one point: 110 ÷ 40 = 2.75.','A key feature that needs no figures at all.'],
  self:['I used about ten figures.','I mentioned the first year, the last year and 2020.','I grouped the islands.','I gave the exception its own sentences.'],revise:1}
};

const gloss={
  'selective':{term:'selective',def:'Choosing only the information that matters. A selective answer uses about ten figures, not all of them.',path:'M30,30 H210 M60,50 H180 M100,70 H140',ex:'“A selective paragraph makes one point per sentence.”'},
  'despite':{term:'despite',def:'A contrast linker followed by a noun or an -ing form.',path:'M20,60 L120,60 M120,30 L220,30',ex:'“Bresk almost tripled, despite a dip in 2020.”'},
  'respectively':{term:'respectively',def:'In the same order as the items just mentioned.',path:'M40,80 V40 H90 V80 M150,80 V50 H200 V80',ex:'“Eskay and Dunmore reached 70,000 and 25,000 respectively.”'}
};

const retrieval={
 'c3-s1':[{q:'About how many figures should a body use?',opts:[{t:'About ten',ok:1,why:'Select.'},{t:'All 25',why:'A list.'}]}],
 'c3-s2':[{q:'Which years matter most?',opts:[{t:'First, last and unusual',ok:1,why:'They tell the story.'},{t:'The middle ones',why:'Only if something happens.'}]}],
 'c3-s3':[{q:'Which island had fewer tourists in 2025 than in 2005?',opts:[{t:'Corran',ok:1,why:'200,000 to 170,000.'},{t:'Ardel',why:'It rose.'}]}],
 'c3-s4':[{q:'40,000 to 110,000 is…',opts:[{t:'almost three times',ok:1,why:'2.75.'},{t:'four times',why:'That would be 160,000.'}]}],
 'c3-s5':[{q:'Which island was least visited every year?',opts:[{t:'Dunmore',ok:1,why:'15,000 to 25,000.'},{t:'Eskay',why:'Higher.'}]}]
};

const minitest=[
 {q:'Why not use every figure?',opts:[{t:'It makes a list and leaves no room to compare',ok:1,why:'Select.'},{t:'It is too accurate',why:'Accuracy is good.'},{t:'The examiner can’t read it',why:'Selection is the skill.'}],sp:'c3-s1'},
 {q:'Which is worth including?',opts:[{t:'Every island fell in 2020',ok:1,why:'An unusual year.'},{t:'Eskay in 2010',why:'A minor figure.'},{t:'Dunmore in 2010',why:'A minor figure.'}],sp:'c3-s1'},
 {q:'When do you mention a middle year?',opts:[{t:'When something happens there',ok:1,why:'A dip, a peak.'},{t:'Always',why:'A list.'},{t:'Never',why:'Sometimes it matters.'}],sp:'c3-s2'},
 {q:'Which island ended below its 2015 level?',opts:[{t:'Corran',ok:1,why:'185,000 to 170,000.'},{t:'Bresk',why:'Above.'},{t:'Ardel',why:'Above.'}],sp:'c3-s3'},
 {q:'Categories that behave alike should be…',opts:[{t:'grouped together',ok:1,why:'One sentence or paragraph.'},{t:'described separately',why:'Repetitive.'},{t:'left out',why:'They matter.'}],sp:'c3-s3'},
 {q:'Which sentence is most selective?',opts:[{t:'Bresk almost tripled, from 40,000 to 110,000.',ok:1,why:'One point, two figures.'},{t:'Bresk had 40,000, 55,000, 80,000, 60,000 and 110,000.',why:'A list.'},{t:'Bresk changed.',why:'No detail.'}],sp:'c3-s4'},
 {q:'Which overview is best?',opts:[{t:'Overall, arrivals rose at four islands, despite a fall everywhere in 2020.',ok:1,why:'Pattern and unusual year.'},{t:'Overall, Corran had 170,000 tourists.',why:'A figure.'},{t:'Overall, islands are popular.',why:'Vague.'}],sp:'c3-s4'},
 {q:'Ardel 90,000 in 2020 to 160,000 in 2025. 160,000 was…',opts:[{t:'its highest figure',ok:1,why:'Higher than every earlier year.'},{t:'below its 2015 level',why:'150,000 in 2015.'},{t:'the highest of all islands',why:'Corran had 170,000.'}],sp:'c3-s5'}
];

const cannow=[['Decide which figures to use','c3-s1'],['Use the first, last and unusual years','c3-s2'],['Group categories that behave alike','c3-s3'],['Write selective sentences','c3-s4'],['Write a selective overview and two body paragraphs','c3-s5']];
addChapter({n:3,spreads,acts,gloss,charts:{isl:C.isl,isl2:Object.assign({},C.isl,{id:'ch-f2isl2'})},retrieval,minitest,cannow});
})();
