/* ==========================================================================
   WRITING EFFECTIVE OVERVIEWS · CHAPTER 3 · OVERVIEWS FOR COMPARISONS
   ACTIVITY IDS (type · level)
     c3-kind    sort      Guided       Step 1  Change or comparison?
     c3-stand1..2 choice  Supported    Step 2  What stands out?
     c3-two     binary    Supported    Step 3  True of every group?
     c3-fix     fix       Supported    Step 3  No change language
     c3-build   builder   Supported    Step 4  A pie chart overview
     c3-best    choice    Independent  Step 4  The best overview
     c3-write   write     Independent  Step 5  The council budget
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,copied,figs,opening,review,addChapter}=OE;
const {C,illus}=OV;
const P='Chapter 3',CT='Overviews for Comparisons',sp=(id,title,o)=>Object.assign({id,ch:3,chLabel:P,chTitle:CT,title},o);
const TASK='The chart below shows how one city council spent its budget last year';

const spreads=[
opening({n:3,title:CT,lede:'Not every chart shows change. Many compare categories at one point in time: age groups, countries, types of spending. With this static data, there is no trend to describe, so the overview compares instead. In this chapter I’ll show you what to look for and how to say it.',
  outcomes:[`recognise ${T('static data')} and avoid the language of change`,'find what stands out: the largest, the smallest, the pattern across groups','spot a comparison that holds in every group','write an overview for a bar chart or a single pie chart'],
  illus:illus('bar'),
  steps:[[1,'c3-s1','Change or comparison?','Static data','Discover'],[2,'c3-s2','What stands out?','Largest, smallest, pattern','Understand'],[3,'c3-s3','True of every group','Two series compared','Understand'],[4,'c3-s4','A single pie','Biggest share, combined shares','Practise'],[5,'c3-s5','Chapter challenge','The council budget','Apply'],['R','c3-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c3-s1','Change or comparison?',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Change or comparison?</h2>${vid({title:'Change or comparison?',len:'90 seconds',script:['Show the volunteering chart. Ask: are there any years?','No: age groups and sexes, at one time. This is static data.','So nothing rises or falls. We compare.','Show the language: higher among, more likely to, the largest share.']})}<p>Check the axis or the labels. If there are no dates, or only one, the data is <b>static</b>: it compares categories at one time.</p>${chart('vol')}<ul class="clean"><li><b>Change language (wrong here):</b> rose, fell, increased with age.</li><li><b>Comparison language (right):</b> was higher among, women were more likely than men to, the highest rate was among.</li></ul>${take('No dates, or one date: static data. Compare; don’t describe change.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c3-kind"></div>`}),

sp('c3-s2','What stands out?',{
 left:`${head('Step 2 · Understand','Learn')}<h2>What stands out?</h2>${vid({title:'What stands out?',len:'90 seconds',script:['Find the tallest bars: the 60 and over group, for both sexes.','Find the shortest: the 30 to 44 group.','Look for a pattern: lowest in the middle years, highest among the oldest.','Say: those features make the overview.']})}<p>For static data, ask:</p><ul class="clean"><li><b>Which category is largest, and which is smallest?</b> Volunteering was highest among people aged 60 and over, and lowest among 30- to 44-year-olds.</li><li><b>Is there a pattern across the groups?</b> Rates dipped in the 30 to 44 group, then rose in each older group.</li></ul>${mistake('<s>Overall, volunteering increased with age.</s> It didn’t: the 30 to 44 group was lower than the youngest group. Check every bar before you claim a pattern.')}${take('Largest, smallest, and a pattern across the groups. Check the pattern holds for every bar.')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c3-stand1"></div><div data-act="c3-stand2" style="margin-top:14px"></div>`}),

sp('c3-s3','True of every group',{
 left:`${head('Step 3 · Understand','Learn')}<h2>True of every group</h2><p>When a chart compares two series, such as men and women, check whether one is higher in <b>every</b> group. If it is, that is a strong overview feature.</p><ul class="clean"><li>Women volunteered more than men in all four age groups.</li><li>The gap was smallest among people aged 60 and over.</li></ul>${insight('Overview','Overall, women were more likely than men to do voluntary work in every age group, and volunteering was most common among people aged 60 and over.')}${note('“In every age group” is powerful, but only when it is true of every group. One exception means you need “in most age groups”.')}<div class="clear"></div>${take('If one series is higher in every group, say so in the overview. Check every group first.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the chart in Step 1.</p><div data-act="c3-two"></div><div data-act="c3-fix" style="margin-top:16px"></div>`}),

sp('c3-s4','A single pie',{
 left:`${head('Step 4 · Practise','Learn')}<h2>A single pie</h2><p>A single pie chart shows how one whole was divided. Its overview usually gives:</p><ul class="clean"><li>the largest share,</li><li>a group of shares that together make up most of the whole,</li><li>the smallest share, if it stands out.</li></ul>${chart('budget')}${insight('Overview','Overall, social care was the council’s largest area of spending, and together with education it accounted for more than half of the budget. Parks received the smallest share.')}${note('“More than half” sums up a combined share in words. Keep the exact percentages for the body.')}<div class="clear"></div>${take('Single pie: the largest share, a combined share in words, and the smallest if it stands out.')}`,
 right:`${head('Step 4 · Activity','Explore')}<p class="small">Use the pie chart on the left page.</p><div data-act="c3-build"></div><div data-gate="c3-build" hidden style="margin-top:16px"><div data-act="c3-best"></div></div>`}),

sp('c3-s5','Chapter challenge: the council budget',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write the introduction and the overview for this task. Try not to look at my overview in Step 4.</p>${taskbox(TASK+'.')}${chart('budget2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c3-write"></div>`}),

review({n:3,title:CT,write:'c3-write',next:['c4-open','Start Chapter 4 →'],
  learned:['Static data compares categories at one time: no change language.','Find the largest, the smallest and any pattern across the groups.','If one series is higher in every group, put it in the overview.','For a single pie: the largest share, a combined share in words, the smallest.']})
];

const acts={
'c3-kind':{type:'sort',level:'Guided',skill:'Static or dynamic',decision:'Does each sentence suit the volunteering chart?',cats:['Suits the chart','Change language: wrong here'],
  items:[{w:'Volunteering was highest among people aged 60 and over.',c:0,m:'a comparison.'},{w:'Volunteering rose among older people.',c:1,m:'no time period: nothing rose.'},{w:'Women were more likely than men to volunteer.',c:0,m:'a comparison.'},{w:'The rate fell to 11% for men aged 30 to 44.',c:1,m:'say “was only 11%”: nothing fell.'}]},
'c3-stand1':{type:'choice',level:'Supported',skill:'Largest and smallest',decision:'Which age group had the lowest rate of volunteering?',
  opts:[{t:'30 to 44, for both men and women',ok:1,why:'11% and 15%: the lowest in each series.'},{t:'18 to 29',why:'14% and 18%: higher than 30 to 44.'},{t:'60 and over',why:'That group had the highest rate.'}]},
'c3-stand2':{type:'choice',level:'Supported',skill:'Patterns',decision:'Which statement about the pattern across age groups is accurate?',
  opts:[{t:'Rates were lowest among 30- to 44-year-olds and highest among people aged 60 and over.',ok:1,why:'Both series dip at 30 to 44 and peak at 60 and over.'},{t:'Volunteering rose steadily with age.',why:'The 30 to 44 group was lower than the 18 to 29 group.'},{t:'All age groups volunteered equally.',why:'From 11% to 27%: far from equal.'}]},
'c3-two':{type:'binary',level:'Supported',skill:'Every group',decision:'Is each statement true of every age group?',labels:['True','False'],
  items:[{t:'Women had a higher rate than men.',a:0,right:'18 v 14, 15 v 11, 21 v 16, 27 v 24.',wrong:'Check every pair: women were higher in all four.'},
         {t:'More than a fifth of women volunteered.',a:1,right:'Right. Only 21% and 27% are above a fifth.',wrong:'18% and 15% are below a fifth.'},
         {t:'Men’s rates were below 25%.',a:0,right:'14, 11, 16 and 24: all below 25.',wrong:'Check: 24% is the highest, below 25%.'},
         {t:'The gap between women and men was 4 percentage points.',a:1,right:'Right. It was 4, 4, 5 and 3.',wrong:'The gap varied: 4, 4, 5 and 3 points.'}]},
'c3-fix':{type:'fix',level:'Supported',skill:'Comparison language',decision:'Rewrite each sentence with comparison language.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Overall, volunteering increased among older people.',ok:/(was (highest|most common|higher)|were (most|more) likely)/i,bad:/increased/i,hint:'There is no time period. Compare instead.',err:'increased',fix:'was highest among',why:'Static data: compare, don’t describe change.',model:'Overall, volunteering was most common among older people.'},
         {wrong:'Overall, women’s volunteering grew compared with men’s.',ok:/(women were more likely|women volunteered more|higher (among|for) women)/i,bad:/grew/i,hint:'Nothing grew. Who was more likely to volunteer?',err:'grew',fix:'women were more likely than men to volunteer',why:'Use comparison language for static data.',model:'Overall, women were more likely than men to volunteer.'}]},
'c3-build':{type:'builder',level:'Supported',skill:'Single pie overview',decision:'Build an overview sentence for the budget.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Overall,','social care was the largest area of spending,','and together with education','it accounted for','more than half of the budget.'],
  distract:[{t:'32% of the budget,',why:'No figures in the overview.',fix:'social care was the largest area of spending,'},{t:'because the city has many elderly people,',why:'No reasons: the chart doesn’t give them.',fix:'and together with education'}],
  right:'The largest share and a combined share in words, with no figures.',orderMsg:'All the right pieces, but check the order: Overall, the largest share, the combination, the result.',incompleteMsg:'Good so far, but incomplete. Finish the combined share.'},
'c3-best':{type:'choice',level:'Independent',skill:'Overviews',decision:'Which overview is best?',
  opts:[{t:'Overall, social care and education took the largest shares of the budget, while parks received the smallest.',ok:1,why:'Largest, smallest, no figures.'},{t:'Overall, the council spent 32% on social care and 6% on parks.',why:'Figures belong in the body.'},{t:'Overall, the council should spend more on parks.',why:'An opinion: Task 1 describes.'}]},
'c3-write':{type:'write',level:'Independent',skill:'Comparison overviews',decision:'Write the introduction and the overview.',prompt:'Then check your writing.',
  fields:[{k:'intro',label:'Introduction',rows:3,ph:'The pie chart illustrates…'},{k:'ov',label:'Overview',rows:4,ph:'Overall,…'}],
  checks:[{t:'Your introduction gives the council and its budget.',fix:'Include the council and its budget or spending.',fn:v=>/council/i.test(v.intro)&&/(budget|spen)/i.test(v.intro)},
          {t:'You paraphrased the task.',fix:'You copied eight or more words in a row from the task.',fn:v=>v.intro.trim()&&!copied(v.intro,TASK,8)},
          {t:'Your overview starts with “Overall,” and has no figures.',fix:'Start with “Overall,” and remove the figures.',fn:v=>/^\s*(overall|in general|it is clear)/i.test(v.ov)&&!/\d/.test(figs(v.ov))},
          {t:'Your overview names the largest share.',fix:'Social care was the largest share: say so.',fn:v=>/social care/i.test(v.ov)},
          {t:'No change language.',fix:'The pie shows one year: remove rose, fell or increased.',fn:v=>!/\b(rose|fell|increased|decreased|grew|declined)\b/i.test(v.ov)},
          {t:'No opinions.',fix:'Remove words like “should”, “too much” or “not enough”.',fn:v=>!/\b(should|too much|not enough|wasted|must)\b/i.test(v.ov)}],
  modelTitle:'My model introduction and overview',
  model:`<p><button type="button" class="hl" data-n="0">The pie chart illustrates how a city council divided its spending between six areas over the previous year.</button></p><p><button type="button" class="hl" data-n="1">Overall, social care was the council’s largest area of spending</button>, and <button type="button" class="hl" data-n="2">together with education it accounted for more than half of the budget.</button> <button type="button" class="hl" data-n="3">By contrast, parks received the smallest share.</button></p>`,
  notes:['A new verb (illustrates) and a new structure (how … divided its spending).','The largest share, without the figure.','A combined share in words: 32% + 26% = 58%, so “more than half”.','The smallest share stands out: 6%.'],
  self:['My introduction says what the chart shows.','My overview gives the largest and smallest shares.','I used no change language.','I gave no figures and no opinions.'],revise:1}
};

const gloss={
  'static data':{term:'static data',def:'Data for one point in time, comparing categories. There is no change to describe.',path:'M40,80 V40 H80 V80 M110,80 V25 H150 V80 M180,80 V55 H220 V80',ex:'“Static data needs comparison language.”'},
  'more likely to':{term:'more likely to',def:'A natural way to compare the behaviour of two groups.',path:'M40,80 V30 H90 V80 M150,80 V50 H200 V80',ex:'“Women were more likely than men to volunteer.”'},
  'accounted for':{term:'accounted for',def:'Made up a share of a total.',path:'M120,45 L120,7 A38,38 0 0,1 153,64 Z',ex:'“Social care accounted for the largest share.”'}
};

const retrieval={
 'c3-s1':[{q:'A chart with age groups and no years shows…',opts:[{t:'static data',ok:1,why:'One time.'},{t:'a trend',why:'No years, no trend.'}]}],
 'c3-s2':[{q:'Volunteering “increased with age”: is it accurate?',opts:[{t:'No: 30 to 44 was lower than 18 to 29',ok:1,why:'Check every bar.'},{t:'Yes',why:'The pattern breaks.'}]}],
 'c3-s3':[{q:'One series is higher in every group. Where does that go?',opts:[{t:'The overview',ok:1,why:'A main feature.'},{t:'Nowhere',why:'It is key.'}]}],
 'c3-s4':[{q:'Social care 32% + education 26% is…',opts:[{t:'more than half',ok:1,why:'58%.'},{t:'less than half',why:'Check the sum.'}]}],
 'c3-s5':[{q:'Which area received the smallest share?',opts:[{t:'Parks',ok:1,why:'6%.'},{t:'Housing',why:'12%.'}]}]
};

const minitest=[
 {q:'How do you recognise static data?',opts:[{t:'No dates, or only one',ok:1,why:'Categories at one time.'},{t:'It has many lines',why:'Lines usually show time.'},{t:'It is always a pie chart',why:'Bars and tables can be static too.'}],sp:'c3-s1'},
 {q:'Which sentence suits static data?',opts:[{t:'Volunteering was highest among people aged 60 and over.',ok:1,why:'Comparison.'},{t:'Volunteering rose with age.',why:'Change language.'},{t:'Volunteering increased in 2020.',why:'No years.'}],sp:'c3-s1'},
 {q:'What does a static overview look for?',opts:[{t:'Largest, smallest, patterns across groups',ok:1,why:'The comparisons.'},{t:'Trends over time',why:'There is no time.'},{t:'Every figure',why:'Figures go in the body.'}],sp:'c3-s2'},
 {q:'Which group had the highest rate of volunteering?',opts:[{t:'60 and over',ok:1,why:'24% and 27%.'},{t:'18 to 29',why:'Lower.'},{t:'30 to 44',why:'The lowest.'}],sp:'c3-s2'},
 {q:'When can you write “in every age group”?',opts:[{t:'Only when it is true of every group',ok:1,why:'Check each one.'},{t:'When it is true of most',why:'Then write “most”.'},{t:'Always',why:'Accuracy matters.'}],sp:'c3-s3'},
 {q:'Which is more natural?',opts:[{t:'Women were more likely than men to volunteer.',ok:1,why:'Comparison of behaviour.'},{t:'Women’s volunteering grew compared with men’s.',why:'Change language.'},{t:'Women were more volunteer.',why:'Not English.'}],sp:'c3-s3'},
 {q:'A single pie overview usually gives…',opts:[{t:'The largest share and a combined share in words',ok:1,why:'The big picture.'},{t:'Every percentage',why:'Too detailed.'},{t:'How shares changed',why:'One pie: no change.'}],sp:'c3-s4'},
 {q:'Which overview sentence is best?',opts:[{t:'Overall, parks received the smallest share.',ok:1,why:'No figures, no opinion.'},{t:'Overall, parks got 6%.',why:'A figure.'},{t:'Overall, parks deserve more money.',why:'An opinion.'}],sp:'c3-s5'}
];

const cannow=[['Recognise static data','c3-s1'],['Find what stands out in a comparison','c3-s2'],['Spot a comparison true of every group','c3-s3'],['Write an overview for a single pie chart','c3-s4'],['Write an introduction and overview for static data','c3-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:3,spreads,acts,gloss,charts:{vol:C.vol,budget:C.budget,budget2:cp('budget','ch-budget2')},retrieval,minitest,cannow});
})();
