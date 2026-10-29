/* ==========================================================================
   MODULE 5 · CHAPTER 4 · PEAKS, DIPS AND PLATEAUS
   ACTIVITY IDS (type · level)
     c4-see     motion    Guided       Step 1  See the words
     c4-sec     sections  Supported    Step 2  Label the stages
     c4-fluct   choice    Supported    Step 3  Describing fluctuation
     c4-fluct2  binary    Supported    Step 3  Accurate or not?
     c4-prep    fix       Supported    Step 4  Peaked at, levelled off at
     c4-build   builder   Independent  Step 4  The peak
     c4-write   write     Independent  Step 5  Board games
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,opening,review,addChapter}=OE;
const {C,illus}=TRD;
const P='Chapter 4',CT='Peaks, Dips and Plateaus',sp=(id,title,o)=>Object.assign({id,ch:4,chLabel:P,chTitle:CT,title},o);
const SEC=Object.assign({},C.games,{id:'ch-m5games-sec',sections:[{a:0,b:4,lab:'A',t:0},{a:4,b:5,lab:'B',t:1},{a:5,b:6,lab:'C',t:2},{a:6,b:7,lab:'D',t:3}]});

const spreads=[
opening({n:4,title:CT,lede:'Real data rarely moves in one direction. It goes up and down, reaches a high point, drops back and settles. Students often describe every small movement, or ignore them all. In this chapter I’ll show you the language for these patterns and how to describe them without listing every figure.',
  outcomes:[`describe a line that ${T('fluctuated')}, with a range`,'use peak, dip and low point accurately','describe a line that levelled off or reached a plateau','use the right prepositions: peaked at, levelled off at, fluctuated between'],
  illus:illus('M30,100 L80,85 L130,100 L180,82 L230,98 L280,25 L330,60 L380,60'),
  steps:[[1,'c4-s1','The words','Fluctuate, peak, dip, level off','Discover'],[2,'c4-s2','Label the stages','One word per stage','Understand'],[3,'c4-s3','Describing fluctuation','A range, not a list','Understand'],[4,'c4-s4','The prepositions','Peaked at, levelled off at','Practise'],[5,'c4-s5','Chapter challenge','Board games','Apply'],['R','c4-review','Chapter review','Your results and your two drafts','Improve']]}),

sp('c4-s1','The words',{
 left:`${head('Step 1 · Discover','Learn')}<h2>The words</h2>${vid({title:'Peaks, dips and plateaus',len:'90 seconds',script:['Draw a line that goes up and down: fluctuated.','Draw a line with one high point: peaked.','Draw a short drop and recovery: dipped.','Draw a line that flattens out: levelled off, reached a plateau.']})}<ul class="clean"><li><b>fluctuated:</b> went up and down several times</li><li><b>peaked / reached a ${T('peak')}:</b> reached its highest point</li><li><b>dipped / a dip:</b> fell briefly, then recovered</li><li><b>hit a low:</b> reached its lowest point</li><li><b>levelled off / reached a ${T('plateau')}:</b> stopped changing after a rise or fall</li></ul>${take('Fluctuate, peak, dip, low, level off: five patterns that most graphs contain.')}`,
 right:`${head('Step 1 · Activity','Explore')}<div data-act="c4-see"></div>`}),

sp('c4-s2','Label the stages',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Label the stages</h2>${vid({title:'Label the stages',len:'2 minutes',script:['Show the board game graph.','Mark the stages: 2010 to 2018, up and down; 2018 to 2020, a big jump; 2020 to 2022, a fall; 2022 to 2024, flat.','Give each stage one word: fluctuated, rose sharply, fell, levelled off.','Say: four stages, four sentences.']})}<p>Before you write, divide the line into stages and give each one a word:</p>${chart('games')}<ul class="clean"><li>2010 to 2018: <b>fluctuated</b></li><li>2018 to 2020: <b>rose sharply</b> to a <b>peak</b></li><li>2020 to 2022: <b>fell</b></li><li>2022 to 2024: <b>levelled off</b></li></ul>${take('Divide the line into stages. One word per stage, one sentence per stage.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c4-sec"></div>`}),

sp('c4-s3','Describing fluctuation',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Describing fluctuation</h2><p>Don’t list every up and down. Give the <b>range</b> and say whether there was an overall direction:</p>${insight('A range','Between 2010 and 2018, sales fluctuated between 4.0 and 4.7 million, with no clear upward or downward trend.')}${mistake('<s>Sales rose to 4.6 million, fell to 4.1 million, rose to 4.7 million and fell to 4.2 million.</s> Accurate, but a list. The range says it in one phrase.')}${note('If a fluctuating line also moves up or down overall, say so: “fluctuated, but rose overall”.')}<div class="clear"></div>${take('Fluctuated between X and Y: one phrase instead of a list. Add the overall direction if there is one.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the graph in Step 2.</p><div data-act="c4-fluct"></div><div data-act="c4-fluct2" style="margin-top:16px"></div>`}),

sp('c4-s4','The prepositions',{
 left:`${head('Step 4 · Practise','Learn')}<h2>The prepositions</h2><ul class="clean"><li><b>peaked at</b> 7.5 million / <b>reached a peak of</b> 7.5 million</li><li><b>hit a low of</b> 4.0 million</li><li><b>dipped to</b> 4.2 million</li><li><b>levelled off at</b> 5.6 million</li><li><b>fluctuated between</b> 4.0 <b>and</b> 4.7 million</li></ul>${mistake('<s>Sales peaked to 7.5 million.</s> The verb takes “at”; the noun takes “of”: <i>peaked at</i>, <i>a peak of</i>.')}${take('Peaked at; a peak of; levelled off at; fluctuated between … and.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c4-prep"></div><div data-act="c4-build" style="margin-top:16px"></div>`}),

sp('c4-s5','Chapter challenge: board games',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the sales of board games.</p>${chart('games2')}<ul class="clean" style="font-size:15px"><li>One sentence for each stage.</li><li>A range for the fluctuation.</li><li>The peak and the levelling off, with the right prepositions.</li></ul>`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c4-write"></div>`}),

review({n:4,title:CT,write:'c4-write',next:['c5-open','Start Chapter 5 →'],
  learned:['Fluctuated, peaked, dipped, hit a low, levelled off.','Divide the line into stages, one word per stage.','Describe fluctuation with a range, not a list.','Peaked at; a peak of; levelled off at; fluctuated between … and.']})
];

const acts={
'c4-see':{type:'motion',level:'Guided',skill:'Patterns of change',decision:'Select each phrase to see the pattern it describes.',
  items:[{p:'fluctuated',d:'M20,80 L65,60 L110,85 L155,58 L200,82 L245,62 L290,78',n:'went up and down several times.'},{p:'peaked',d:'M20,110 L110,90 L160,25 L210,70 L290,85',n:'reached its highest point, then fell.'},{p:'dipped',d:'M20,60 L120,58 L160,100 L200,62 L290,58',n:'fell briefly, then recovered.'},{p:'levelled off',d:'M20,120 L120,60 L170,45 L290,44',n:'stopped rising and stayed at about the same level.'},{p:'hit a low',d:'M20,40 L110,70 L160,118 L220,90 L290,80',n:'reached its lowest point, then rose.'}]},
'c4-sec':{type:'sections',level:'Supported',skill:'Labelling stages',decision:'Label each stage of the board game graph.',
  chart:SEC,labels:['fluctuated','rose sharply','fell','levelled off'],
  explain:(sc,j)=>({A:'2010 to 2018: up and down between 4.0 and 4.7 million. It fluctuated.',B:'2018 to 2020: from 4.2 to 7.5 million, a jump of 3.3 million. It rose sharply.',C:'2020 to 2022: from 7.5 to 5.6 million. It fell.',D:'2022 to 2024: 5.6 million both years. It levelled off.'})[sc.lab]},
'c4-fluct':{type:'choice',level:'Supported',skill:'Describing fluctuation',decision:'Which sentence describes 2010 to 2018 best?',
  opts:[{t:'Sales fluctuated between 4.0 and 4.7 million, with no clear trend.',ok:1,why:'A range and the overall direction, in one sentence.'},{t:'Sales rose steadily from 4.0 to 4.2 million.',why:'They went up and down; “steadily” is wrong.'},{t:'Sales were 4.0, 4.6, 4.1, 4.7 and 4.2 million.',why:'Accurate, but a list with no pattern.'}]},
'c4-fluct2':{type:'binary',level:'Supported',skill:'Accuracy',decision:'Is each sentence accurate?',labels:['Accurate','Not accurate'],
  items:[{t:'Sales peaked at 7.5 million in 2020.',a:0,right:'The highest point on the graph.',wrong:'It is accurate: 7.5 million is the peak.'},
         {t:'Sales hit a low of 4.0 million in 2010.',a:0,right:'The lowest figure on the graph.',wrong:'It is accurate: 4.0 million is the lowest point.'},
         {t:'After 2022, sales continued to fall.',a:1,right:'Right. They levelled off at 5.6 million.',wrong:'5.6 million in 2022 and 2024: they levelled off.'},
         {t:'Sales in 2024 were higher than in 2010.',a:0,right:'5.6 against 4.0 million: 40% higher.',wrong:'It is accurate: 5.6 is higher than 4.0.'}]},
'c4-prep':{type:'fix',level:'Supported',skill:'Prepositions',decision:'Fix the preposition in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Sales peaked to 7.5 million in 2020.',ok:/peaked at 7\.5/i,bad:/peaked to/i,hint:'The verb “peak” takes one particular preposition.',err:'peaked to',fix:'peaked at',why:'Peaked at + figure.',model:'Sales peaked at 7.5 million in 2020.'},
         {wrong:'Sales reached a peak at 7.5 million.',ok:/a peak of 7\.5/i,bad:/a peak at/i,hint:'The noun takes a different preposition from the verb.',err:'a peak at',fix:'a peak of',why:'A peak of + figure.',model:'Sales reached a peak of 7.5 million.'},
         {wrong:'Sales levelled off in 5.6 million.',ok:/levelled off at 5\.6/i,bad:/levelled off in/i,hint:'Which preposition gives a level?',err:'levelled off in',fix:'levelled off at',why:'Levelled off at + figure.',model:'Sales levelled off at 5.6 million.'},
         {wrong:'Sales fluctuated from 4.0 and 4.7 million.',ok:/fluctuated between 4\.0 and 4\.7/i,bad:/from 4\.0 and/i,hint:'For a range, use between … and.',err:'from … and',fix:'between … and',why:'Fluctuated between X and Y.',model:'Sales fluctuated between 4.0 and 4.7 million.'}]},
'c4-build':{type:'builder',level:'Independent',skill:'The peak',decision:'Build a sentence about 2018 to 2020.',prompt:'Select the pieces in order. Two pieces don’t belong.',
  chips:['Sales then rose sharply,','by 3.3 million,','to reach a peak of','7.5 million in 2020.'],
  distract:[{t:'to reach a peak at',why:'The noun takes “of”.',fix:'to reach a peak of'},{t:'by 7.5 million,',why:'7.5 million is the end point; the rise was 3.3 million.',fix:'by 3.3 million,'}],
  right:'The change, by + size, a peak of + figure and year.',orderMsg:'All the right pieces, but check the order: the change, its size, the peak, the figure.',incompleteMsg:'Good so far, but incomplete. Add the peak.'},
'c4-write':{type:'write',level:'Independent',skill:'Patterns of change',decision:'Write one body paragraph about sales of board games.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:8,ph:'Between 2010 and 2018,…'}],
  checks:[{t:'You described the fluctuation with a range.',fix:'Add: fluctuated between 4.0 and 4.7 million.',fn:v=>/fluctuat/i.test(v.a)&&/between 4\.0 and 4\.7|4\.0 and 4\.7/i.test(v.a)},
          {t:'You described the peak.',fix:'Add the peak: 7.5 million in 2020.',fn:v=>/peak/i.test(v.a)&&/7\.5/.test(v.a)},
          {t:'You described the levelling off.',fix:'Add: levelled off at 5.6 million.',fn:v=>/(levell?ed off|plateau|remained (stable|unchanged)|stayed)/i.test(v.a)},
          {t:'Your prepositions are correct.',fix:'Check: peaked at, a peak of, levelled off at.',fn:v=>!/peaked to|peak at \d|levell?ed off in/i.test(v.a)},
          {t:'You didn’t list every figure.',fix:'Describe the fluctuation with a range instead of listing 4.6, 4.1 and so on.',fn:v=>!(/4\.6/.test(v.a)&&/4\.1/.test(v.a))},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p><button type="button" class="hl" data-n="0">Between 2010 and 2018, sales of board games fluctuated between 4.0 and 4.7 million</button>, with no clear upward or downward trend. <button type="button" class="hl" data-n="1">They then rose sharply, by 3.3 million, to reach a peak of 7.5 million in 2020.</button> After this peak, sales fell to 5.6 million in 2022, <button type="button" class="hl" data-n="2">and they levelled off at this level for the rest of the period</button>. <button type="button" class="hl" data-n="3">By 2024, sales were 40% higher than in 2010.</button></p>`,
  notes:['A range replaces a list of five figures.','By + the size of the rise; a peak of + figure.','Levelled off at: no change between 2022 and 2024.','An overall comparison: 5.6 ÷ 4.0 = 1.4.'],
  self:['I divided the line into stages.','I gave a range for the fluctuation.','I used peaked at, a peak of and levelled off at correctly.','I didn’t list every figure.'],revise:1}
};

const gloss={
  'fluctuated':{term:'fluctuated',def:'Went up and down several times. Give a range: fluctuated between X and Y.',path:'M20,50 L60,30 L100,55 L140,28 L180,52 L220,32',ex:'“Sales fluctuated between 4.0 and 4.7 million.”'},
  'peak':{term:'peak',def:'The highest point. Verb: peaked at. Noun: a peak of.',path:'M20,80 L100,70 L130,10 L170,50 L220,60',ex:'“Sales reached a peak of 7.5 million in 2020.”'},
  'plateau':{term:'plateau',def:'A period with little or no change after a rise. Reached a plateau = levelled off.',path:'M20,85 L90,35 L220,33',ex:'“Sales reached a plateau at 5.6 million.”'}
};

const retrieval={
 'c4-s1':[{q:'A line that goes up and down several times…',opts:[{t:'fluctuated',ok:1,why:'Up and down.'},{t:'levelled off',why:'That is flat.'}]}],
 'c4-s2':[{q:'2022 to 2024: 5.6 and 5.6 million. Which word?',opts:[{t:'levelled off',ok:1,why:'No change after a fall.'},{t:'peaked',why:'The peak was 2020.'}]}],
 'c4-s3':[{q:'How do you describe fluctuation?',opts:[{t:'With a range',ok:1,why:'between X and Y.'},{t:'List every figure',why:'Too long.'}]}],
 'c4-s4':[{q:'Sales peaked ___ 7.5 million.',opts:[{t:'at',ok:1,why:'Peaked at.'},{t:'to',why:'Wrong preposition.'}]}],
 'c4-s5':[{q:'4.2 → 7.5 million is a rise of…',opts:[{t:'3.3 million',ok:1,why:'7.5 − 4.2.'},{t:'7.5 million',why:'That is the end point.'}]}]
};

const minitest=[
 {q:'Which word means “reached its highest point”?',opts:[{t:'peaked',ok:1,why:'The top.'},{t:'dipped',why:'A brief fall.'},{t:'fluctuated',why:'Up and down.'}],sp:'c4-s1'},
 {q:'Which word means “fell briefly, then recovered”?',opts:[{t:'dipped',ok:1,why:'A brief fall.'},{t:'levelled off',why:'Flat.'},{t:'peaked',why:'The top.'}],sp:'c4-s1'},
 {q:'Why divide a line into stages?',opts:[{t:'One word and one sentence per stage',ok:1,why:'Clear and complete.'},{t:'To count the points',why:'Stages are patterns.'},{t:'It isn’t useful',why:'It organises the paragraph.'}],sp:'c4-s2'},
 {q:'2018 to 2020: 4.2 → 7.5 million. Which word?',opts:[{t:'rose sharply',ok:1,why:'A big, quick rise.'},{t:'rose slightly',why:'+3.3 million is big.'},{t:'fluctuated',why:'One direction.'}],sp:'c4-s2'},
 {q:'Which describes fluctuation best?',opts:[{t:'fluctuated between 4.0 and 4.7 million',ok:1,why:'A range.'},{t:'rose and fell and rose and fell',why:'No figures, repetitive.'},{t:'remained stable',why:'It moved up and down.'}],sp:'c4-s3'},
 {q:'Choose the correct sentence.',opts:[{t:'Sales reached a peak of 7.5 million.',ok:1,why:'A peak of.'},{t:'Sales reached a peak at 7.5 million.',why:'Of.'},{t:'Sales peaked to 7.5 million.',why:'At.'}],sp:'c4-s4'},
 {q:'Choose the correct sentence.',opts:[{t:'Sales levelled off at 5.6 million.',ok:1,why:'At + level.'},{t:'Sales levelled off on 5.6 million.',why:'At.'},{t:'Sales levelled off to 5.6 million.',why:'At.'}],sp:'c4-s4'},
 {q:'5.6 compared with 4.0 million is…',opts:[{t:'40% higher',ok:1,why:'5.6 ÷ 4.0 = 1.4.'},{t:'double',why:'Double would be 8.0.'},{t:'16% higher',why:'Calculate: 1.6 ÷ 4.0.'}],sp:'c4-s5'}
];

const cannow=[['Use fluctuate, peak, dip and level off','c4-s1'],['Divide a line into stages','c4-s2'],['Describe fluctuation with a range','c4-s3'],['Use the right prepositions with peaks and levels','c4-s4'],['Write a paragraph about an uneven line','c4-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:4,spreads,acts,gloss,charts:{games:C.games,games2:cp('games','ch-m5games2'),'games-sec':SEC},retrieval,minitest,cannow});
})();
