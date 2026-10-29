/* ==========================================================================
   MASTERING TABLES · CHAPTER 2 · FINDING THE STORY IN THE NUMBERS
   ACTIVITY IDS (type · level)
     c2-rows    sort      Guided       Step 1  What pattern does each row follow?
     c2-col1..3 choice    Supported    Step 2  Read down the columns
     c2-calc1..3 choice   Supported    Step 3  Calculate before you write
     c2-build   builder   Supported    Step 4  Build the contrast
     c2-link    choice    Independent  Step 4  Link two patterns
     c2-write   write     Independent  Step 5  Describe the airports
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,opening,review,addChapter}=OE;
const {C,illus}=TAB;
const P='Chapter 2',CT='Finding the Story in the Numbers',sp=(id,title,o)=>Object.assign({id,ch:2,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:2,title:CT,lede:'Every candidate sees the same numbers. The higher bands go to those who see the patterns: which rows rise and fall together, which follow the opposite pattern, and where each column peaks. In this chapter I’ll show you a method for finding the story in any table.',
  outcomes:['read across each row to find its pattern','read down each column to find the leader and how it changes','calculate a change or a ratio before you write it',`link two patterns with ${T('the opposite pattern')} and while`],
  illus:illus([[0,1],[2,3]]),
  steps:[[1,'c2-s1','Read across the rows','The pattern of each category','Discover'],[2,'c2-s2','Read down the columns','Who leads, and when?','Understand'],[3,'c2-s3','Calculate before you write','Changes and ratios','Understand'],[4,'c2-s4','Link the patterns','Same, opposite, stable','Practise'],[5,'c2-s5','Chapter challenge','Describe the airports','Apply'],['R','c2-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c2-s1','Read across the rows',{
 left:`${head('Step 1 · Discover','Learn')}<h2>Read across the rows</h2>${vid({title:'Read across the rows',len:'90 seconds',script:['Show the seaside shop table and cover all but the hot drinks row.','Read it across: high, low, lowest, high again. Say: lowest in summer.','Do the same for ice cream: the opposite pattern.','Finish: one short label for each row is the start of your plan.']})}<p>Read each row from left to right and give it a one-word label: <b>rose</b>, <b>fell</b>, <b>peaked</b>, <b>dipped</b>, <b>stable</b>.</p>${chart('shop')}<ul class="clean" style="margin-top:10px"><li><b>Hot drinks:</b> lowest in summer, high in winter.</li><li><b>Ice cream:</b> the ${T('the opposite pattern','opposite')}: it ${T('peaked')} in summer.</li><li><b>Sandwiches:</b> ${T('fairly stable')} all year.</li><li><b>Umbrellas:</b> few sold, fewest in summer.</li></ul>${note('Rows that follow the same pattern can be described together. Rows with opposite patterns make the best comparisons.')}<div class="clear"></div>${take('Label every row first: rose, fell, peaked, stable. The labels show you which rows belong together.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the shop table on the left page.</p><div data-act="c2-rows"></div>`}),

sp('c2-s2','Read down the columns',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Read down the columns</h2>${vid({title:'Read down the columns',len:'90 seconds',script:['Cover all but the January to March column. Which product sold most?','Do the same for July to September: the leader has changed.','Say: a change of leader is overview material.','Show the sentence: Hot drinks were the best seller in winter, but ice cream took over in summer.']})}<p>Now read down each column. Which category leads, and does the leader change?</p><ul class="clean"><li><b>January to March:</b> hot drinks led, with 900 sold.</li><li><b>July to September:</b> ice cream led, with 950.</li><li><b>Every quarter:</b> umbrellas sold the fewest.</li></ul>${insight('One sentence for the leader','Hot drinks were the best-selling item in the colder months, but ice cream took over in July to September.')}${mistake('<s>The highest number in the third column is 950.</s> Say what it means: <i>ice cream sales peaked at 950 in July to September.</i>')}${take('Read down each column: who leads, who comes last, and does the leader change?')}`,
 right:`${head('Step 2 · Activity','Explore')}<p class="small">Use the shop table in Step 1.</p><div data-act="c2-col1"></div><div data-act="c2-col2" style="margin-top:14px"></div><div data-act="c2-col3" style="margin-top:14px"></div>`}),

sp('c2-s3','Calculate before you write',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Calculate before you write</h2>${vid({title:'Calculate before you write',len:'2 minutes',script:['Write 120 and 950 on screen. Divide: almost eight times.','Write 900 and 300. 300 is a third of 900, so sales fell by two-thirds.','Write 25 and 110: more than four times.','Finish: a calculated comparison shows the examiner you understand the numbers.']})}<p>A table gives you exact figures, so the examiner expects accurate comparisons. Do the sums before you choose the words.</p><ul class="clean"><li><b>A ratio:</b> 950 ÷ 120 ≈ 7.9: <i>almost eight times as many ice creams in summer as in winter.</i></li><li><b>A fraction of the start:</b> 900 → 300 is a third of the start, so <i>sales fell by two-thirds.</i></li><li><b>A difference:</b> 900 − 300 = 600: <i>600 fewer hot drinks.</i></li></ul>${mistake('<s>Ice cream sales were ten times higher in summer.</s> 950 ÷ 120 is just under 8. Check before you write.')}${take('Divide for a ratio, subtract for a difference, and check the direction: almost, just over, more than.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the shop table in Step 1.</p><div data-act="c2-calc1"></div><div data-act="c2-calc2" style="margin-top:14px"></div><div data-act="c2-calc3" style="margin-top:14px"></div>`}),

sp('c2-s4','Link the patterns',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Link the patterns</h2><p>Once you know each row’s pattern, link the rows in pairs.</p><ul class="clean"><li><b>Same pattern:</b> <i>Both hot drinks and umbrellas sold least in summer.</i></li><li><b>Opposite patterns:</b> <i>Ice cream ${T('the opposite pattern','followed the opposite pattern')}, rising from 120 to a peak of 950 in July to September.</i></li><li><b>One stable row:</b> <i>Sandwich sales, by contrast, remained ${T('fairly stable')}, between 640 and 720.</i></li></ul>${note('A range (“between 640 and 720”) describes a stable row in one phrase, instead of four figures.')}<div class="clear"></div>${take('Same pattern: both. Opposite: followed the opposite pattern, while. Stable: a range.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c2-build"></div><div data-gate="c2-build" hidden style="margin-top:16px"><div data-act="c2-link"></div></div>`}),

sp('c2-s5','Chapter challenge: describe the airports',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph that describes the three airports. Label each row first, then link the patterns.</p>${taskbox('The table below shows the number of passengers using three airports in one country in 2005, 2015 and 2025.')}${chart('air')}${note('One airport was the busiest but barely changed; one grew steadily; one hardly changed, then jumped. Check what happened to the gaps.')}<ul class="clean" style="font-size:15px"><li>Four or five sentences.</li><li>A pattern for each airport, with figures and “million”.</li><li>One calculated comparison.</li></ul><div class="clear"></div>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c2-write"></div>`}),

review({n:2,title:CT,write:'c2-write',next:['c3-open','Start Chapter 3 →'],
  learned:['Read across each row and label its pattern: rose, fell, peaked, stable.','Read down each column to find the leader, and check whether it changes.','Calculate before you write: divide for a ratio, subtract for a difference.','Link rows with the same or opposite patterns, and describe a stable row with a range.']})
];

const acts={
'c2-rows':{type:'sort',level:'Guided',skill:'Row patterns',decision:'What pattern does each row follow?',cats:['Peaked in summer','Lowest in summer','Fairly stable'],
  items:[{w:'Hot drinks: 900, 520, 300, 860',c:1,m:'fell to its lowest point in July to September, then rose again.'},
         {w:'Ice cream: 120, 480, 950, 210',c:0,m:'rose to a peak in July to September, then fell.'},
         {w:'Sandwiches: 640, 690, 720, 650',c:2,m:'stayed between 640 and 720 all year.'},
         {w:'Umbrellas: 85, 40, 25, 110',c:1,m:'sold fewest in July to September.'}]},
'c2-col1':{type:'choice',level:'Supported',skill:'Leaders',decision:'Which item sold the most in January to March?',
  opts:[{t:'Hot drinks, with 900',ok:1,why:'The highest figure in that column.'},{t:'Sandwiches, with 640',why:'640 is the second highest; hot drinks sold 900.'},{t:'Ice cream, with 950',why:'950 is in the July to September column.'}]},
'c2-col2':{type:'choice',level:'Supported',skill:'Leaders',decision:'Which item sold the most in April to June?',
  opts:[{t:'Sandwiches, with 690',ok:1,why:'690 is well ahead of hot drinks (520) and ice cream (480).'},{t:'Hot drinks, with 520',why:'Sandwiches sold more: 690.'},{t:'Ice cream, with 950',why:'That is July to September.'}]},
'c2-col3':{type:'choice',level:'Supported',skill:'The leader changes',decision:'Which sentence reports the change of leader accurately?',
  opts:[{t:'Hot drinks were the best-selling item from January to March and from October to December, but ice cream took the lead in July to September.',ok:1,why:'900 and 860 for hot drinks in the colder quarters; 950 for ice cream in summer.'},{t:'Ice cream was the best-selling item all year.',why:'It led only in July to September.'},{t:'Sandwiches were the best-selling item all year.',why:'Sandwiches led only in April to June.'}]},
'c2-calc1':{type:'choice',level:'Supported',skill:'Ratios',decision:'The shop sold ___ ice creams in July to September as in January to March.',prompt:'950 and 120.',
  opts:[{t:'almost eight times as many',ok:1,why:'950 ÷ 120 ≈ 7.9.'},{t:'ten times as many',why:'Ten times 120 would be 1,200.'},{t:'twice as many',why:'Twice 120 would be 240.'}]},
'c2-calc2':{type:'choice',level:'Supported',skill:'Fractions of the start',decision:'Between January to March and July to September, hot drink sales ___.',prompt:'900 and 300.',
  opts:[{t:'fell by two-thirds',ok:1,why:'300 is a third of 900, so two-thirds of the sales were lost.'},{t:'fell by a third',why:'If sales fell by a third, they would be 600.'},{t:'halved',why:'Half of 900 is 450.'}]},
'c2-calc3':{type:'choice',level:'Supported',skill:'Ratios',decision:'Umbrella sales in October to December were ___ those in July to September.',prompt:'110 and 25.',
  opts:[{t:'more than four times',ok:1,why:'110 ÷ 25 = 4.4.'},{t:'exactly four times',why:'Four times 25 is 100.'},{t:'twice',why:'Twice 25 is 50.'}]},
'c2-build':{type:'builder',level:'Supported',skill:'Opposite patterns',decision:'Build a sentence about ice cream that links it to hot drinks.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Ice cream sales','followed the opposite pattern,','rising from 120','in January to March','to a peak of 950','in July to September.'],
  distract:[{t:'the third column',why:'Describe the time, not the layout of the table.',fix:'in July to September'},{t:'peaked to 950',why:'“Peak” takes “at”: peaked at 950, or rose to a peak of 950.',fix:'to a peak of 950'}],
  right:'The link, the start, the peak and both times.',orderMsg:'All the right pieces, but check the order: the item, the link, the start figure and time, then the peak and its time.',incompleteMsg:'Good so far, but incomplete. Add the start and the peak with their times.'},
'c2-link':{type:'choice',level:'Independent',skill:'Linking patterns',decision:'Which sentence describes the sandwiches best?',
  opts:[{t:'Sandwich sales, by contrast, remained fairly stable throughout the year, at between 640 and 720.',ok:1,why:'A contrast with the seasonal rows, and a range instead of four figures.'},{t:'Sandwiches were 640, then 690, then 720, then 650.',why:'A list of four figures with no pattern.'},{t:'Sandwich sales fluctuated wildly.',why:'Inaccurate: the figures stayed within a narrow range.'}]},
'c2-write':{type:'write',level:'Independent',skill:'Patterns in a table',decision:'Write one body paragraph about the three airports.',prompt:'Four or five sentences. Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Central was the busiest airport…'}],
  checks:[{t:'You said Central was the busiest but barely changed.',fix:'Describe Central: the busiest airport, but almost no change (30, 34, 31 million).',fn:v=>/central/i.test(v.a)&&/(busiest|largest|most passengers|highest)/i.test(v.a)},
          {t:'You described North’s steady growth.',fix:'Describe North: steady growth from 12 million to 25 million.',fn:v=>/north/i.test(v.a)&&/(steadi|rose|grew|increas|more than doubled|doubled)/i.test(v.a)},
          {t:'You described South’s late jump.',fix:'Describe South: little change, then more than doubled to 19 million.',fn:v=>/south/i.test(v.a)&&/(doubl|jump|sharp|surge|rose)/i.test(v.a)},
          {t:'You used “million”.',fix:'The figures are in millions: write 31 million passengers.',fn:v=>/million/i.test(v.a)&&!/\d\s*millions\b/i.test(v.a)},
          {t:'You made a calculated comparison.',fix:'Add a calculation: a ratio, a difference or a gap that changed.',fn:v=>/(gap|twice|double|times|half|narrow|difference|more than doubled)/i.test(v.a)},
          {t:'You described patterns, not table positions.',fix:'Remove words like “row” and “column”.',fn:v=>v.a.trim()&&!/\b(rows?|columns?)\b/i.test(v.a)},
          {t:'Your paragraph is a good length (70 words or more).',fix:'Add detail: your paragraph is under 70 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=70}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">Central was the busiest airport throughout the period, but its passenger numbers barely changed</button>, rising from 30 million in 2005 to 34 million in 2015 before slipping back to 31 million. <button type="button" class="hl" data-n="1">North grew steadily</button>, from 12 million to 25 million, <button type="button" class="hl" data-n="2">so the gap between the two airports narrowed from 18 million passengers to just 6 million</button>. South remained the smallest airport in every year. <button type="button" class="hl" data-n="3">After almost no change in the first decade</button>, from 8 million to 9 million, its passenger numbers more than doubled to 19 million by 2025.</p>`,
  notes:['The row label first (busiest, barely changed), then the figures that prove it.','“Steadily” fits: North rose by 6 million, then by 7 million.','A calculated gap: 30 − 12 = 18, and 31 − 25 = 6.','South’s pattern in two stages: almost flat, then 19 ÷ 9 = 2.1, so “more than doubled”.'],
  self:['I labelled each airport’s pattern before writing.','I described patterns, not rows and columns.','I made at least one calculated comparison.','I wrote “million” after each figure.'],revise:1}
};

const gloss={
  'the opposite pattern':{term:'the opposite pattern',def:'A row that moves in the other direction from another row: one peaks when the other is at its lowest.',path:'M20,70 L80,40 L140,20 L220,60 M20,20 L80,50 L140,70 L220,30',ex:'“Ice cream sales followed the opposite pattern, peaking in July to September.”'},
  'peaked':{term:'peaked',def:'Reached its highest point before falling again. Use “at” for the figure: peaked at 950.',path:'M20,70 L80,50 L130,12 L180,48 L220,62',ex:'“Ice cream sales peaked at 950 in July to September.”'},
  'fairly stable':{term:'fairly stable',def:'Changing only a little. Give a range instead of every figure: between 640 and 720.',path:'M20,44 L80,38 L140,34 L220,42',ex:'“Sandwich sales remained fairly stable, at between 640 and 720.”'}
};

const retrieval={
 'c2-s1':[{q:'What is the first thing to do with each row?',opts:[{t:'Label its pattern',ok:1,why:'Rose, fell, peaked, stable.'},{t:'Copy its figures',why:'Figures come later, as evidence.'}]}],
 'c2-s2':[{q:'Hot drinks lead in winter, ice cream in summer. Where does this go?',opts:[{t:'The overview',ok:1,why:'A change of leader.'},{t:'Nowhere',why:'It is a key feature.'}]}],
 'c2-s3':[{q:'900 → 300 is a fall of…',opts:[{t:'two-thirds',ok:1,why:'300 is a third of 900.'},{t:'a third',why:'That would leave 600.'}]}],
 'c2-s4':[{q:'How do you describe a stable row?',opts:[{t:'With a range: between 640 and 720',ok:1,why:'One phrase, not four figures.'},{t:'With all four figures',why:'That is a list.'}]}],
 'c2-s5':[{q:'12 → 18 → 25 is…',opts:[{t:'steady growth',ok:1,why:'+6, then +7.'},{t:'a sudden jump',why:'The steps are similar.'}]}]
};

const minitest=[
 {q:'Ice cream: 120, 480, 950, 210. Which label fits?',opts:[{t:'Peaked in July to September',ok:1,why:'950 is the highest.'},{t:'Fairly stable',why:'It changes a lot.'},{t:'Fell steadily',why:'It rose, then fell.'}],sp:'c2-s1'},
 {q:'Why label each row first?',opts:[{t:'To see which rows belong together',ok:1,why:'Same or opposite patterns.'},{t:'To count the rows',why:'Counting doesn’t give a story.'},{t:'To copy the figures',why:'Figures are evidence, later.'}],sp:'c2-s1'},
 {q:'What do you look for when you read down a column?',opts:[{t:'The leader, the lowest, and whether the leader changes',ok:1,why:'Comparison within one time or group.'},{t:'The trend over time',why:'That comes from reading across.'},{t:'The units',why:'Find the units first, in the title.'}],sp:'c2-s2'},
 {q:'950 and 120. Which is accurate?',opts:[{t:'almost eight times as many',ok:1,why:'≈ 7.9.'},{t:'ten times as many',why:'That would be 1,200.'},{t:'twice as many',why:'That would be 240.'}],sp:'c2-s3'},
 {q:'110 and 25. Which is accurate?',opts:[{t:'more than four times',ok:1,why:'4.4.'},{t:'exactly four times',why:'4 × 25 = 100.'},{t:'three times',why:'3 × 25 = 75.'}],sp:'c2-s3'},
 {q:'Which phrase describes a row moving the other way?',opts:[{t:'followed the opposite pattern',ok:1,why:'A contrast.'},{t:'remained fairly stable',why:'That is for small changes.'},{t:'peaked to',why:'Peak takes “at”.'}],sp:'c2-s4'},
 {q:'Choose the correct form.',opts:[{t:'Sales peaked at 950.',ok:1,why:'peaked at'},{t:'Sales peaked to 950.',why:'Use “at”.'},{t:'Sales were peak 950.',why:'Use the verb: peaked at.'}],sp:'c2-s4'},
 {q:'Central 30 → 31; North 12 → 25. The gap…',opts:[{t:'narrowed from 18 million to 6 million',ok:1,why:'30 − 12 and 31 − 25.'},{t:'widened',why:'It became smaller.'},{t:'stayed the same',why:'Calculate it.'}],sp:'c2-s5'}
];

const cannow=[['Label the pattern of each row','c2-s1'],['Find the leader in each column and whether it changes','c2-s2'],['Calculate a ratio, a fraction or a difference before writing','c2-s3'],['Link rows with the same or opposite patterns','c2-s4'],['Write a paragraph describing the patterns in a table','c2-s5']];
addChapter({n:2,spreads,acts,gloss,charts:{shop:C.shop,air:C.air},retrieval,minitest,cannow});
})();
