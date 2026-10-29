/* ==========================================================================
   DESCRIBING DATA ACCURATELY · CHAPTER 1 · NUMBERS AND UNITS
   ACTIVITY IDS (type · level)
     c1-read1..2 choice   Guided       Step 1  Read the unit
     c1-unit    sort      Guided       Step 1  Complete or not?
     c1-mill    fix       Supported    Step 2  Million, thousand, hundred
     c1-conv    choice    Supported    Step 2  0.85 million
     c1-tab     choice    Supported    Step 3  Thousands in a table
     c1-numamt  binary    Supported    Step 4  Number or amount?
     c1-form    fix       Independent  Step 4  Writing numbers
     c1-write   write     Independent  Step 5  Library loans
   ========================================================================== */
(function(){
const {T,head,note,take,chart,vid,mistake,insight,taskbox,howto,opening,review,addChapter}=OE;
const {C,illus}=DD;
const P='Chapter 1',CT='Numbers and Units',sp=(id,title,o)=>Object.assign({id,ch:1,chLabel:P,chTitle:CT,title},o);

const spreads=[
opening({n:1,title:CT,lede:'An accurate answer starts with accurate numbers. Many candidates lose marks not because they misread the chart, but because they write “2.4” instead of “2.4 million visitors”, or “5 millions”. In this chapter I’ll show you how to read every unit and write every number correctly.',
  outcomes:['read the unit of every chart and give it with every figure',`use ${T('million')}, thousand and hundred correctly after a number`,'convert figures given in thousands or millions','choose “the number of” or “the amount of”, and write numbers clearly'],
  extraLeft:insight('Your progress','Your answers, drafts and scores are saved in this browser on this device. Use the same device and browser each time, and use Copy or Download under each writing task to keep your own copy.'),
  illus:illus('2.4','2.4 million visitors'),
  steps:[[1,'c1-s1','Every figure needs a unit','Read the axis and title','Discover'],[2,'c1-s2','Million, thousand, hundred','No -s after a number','Understand'],[3,'c1-s3','Thousands in a table','420 means 420,000','Understand'],[4,'c1-s4','Number or amount?','Writing numbers clearly','Practise'],[5,'c1-s5','Chapter challenge','Library loans','Apply'],['R','c1-review','Chapter review','Your results and your two drafts','Improve']],
  extraRight:howto('Read the unit before any figure. Write it with every figure.','million','Lakeland attracted 4.1 million visitors')}),

sp('c1-s1','Every figure needs a unit',{exploreFirst:true,
 left:`${head('Step 1 · Discover','Learn')}<h2>Every figure needs a unit</h2>${vid({title:'Every figure needs a unit',len:'90 seconds',script:['Show the national parks chart. Point to the axis label: millions.','Read a weak sentence: Lakeland had 4.1.','Ask: 4.1 what? 4.1 million visitors.','Finish: the unit is part of the figure. Without it, the figure is wrong.']})}<p>Before you write any figure, find its unit in the title or on the axis. Then write the unit every time.</p>${chart('parks')}<ul class="clean"><li><s>Lakeland had 4.1.</s> → <i>Lakeland attracted 4.1 million visitors.</i></li><li><s>Redcliff was 1.2 million.</s> → <i>Redcliff had 1.2 million visitors.</i> Add what is being counted.</li></ul>${take('Find the unit first. Write it, and what is being counted, with every figure.')}`,
 right:`${head('Step 1 · Activity','Explore')}<p class="small">Use the chart on the left page.</p><div data-act="c1-read1"></div><div data-act="c1-read2" style="margin-top:14px"></div><div data-act="c1-unit" style="margin-top:16px"></div>`}),

sp('c1-s2','Million, thousand, hundred',{
 left:`${head('Step 2 · Understand','Learn')}<h2>Million, thousand, hundred</h2>${vid({title:'Million, thousand, hundred',len:'90 seconds',script:['Write: 2 million visitors. Not 2 millions.','Say: after a number, million, thousand and hundred take no -s.','Show the exception: millions of visitors, with no number before it.','Convert: 0.85 million is 850,000.']})}<ul class="clean"><li><b>After a number, no -s:</b> 2.4 <b>million</b> visitors, 850 <b>thousand</b>, 3 <b>hundred</b>.</li><li><b>Without a number, -s and “of”:</b> <i>millions of visitors</i>, <i>thousands of loans</i>.</li><li><b>Small decimals:</b> 0.85 million is clearer as <b>850,000</b>.</li></ul>${mistake('<s>Westwood received 0.85 millions visitors.</s> No -s after a number, and 850,000 is clearer: <i>Westwood received 850,000 visitors.</i>')}${take('A number + million (no -s). Millions of (no number). Write small decimals of a million in full.')}`,
 right:`${head('Step 2 · Activity','Explore')}<div data-act="c1-mill"></div><div data-act="c1-conv" style="margin-top:16px"></div>`}),

sp('c1-s3','Thousands in a table',{
 left:`${head('Step 3 · Understand','Learn')}<h2>Thousands in a table</h2>${vid({title:'Thousands in a table',len:'90 seconds',script:['Show the library table. Point to the heading: thousands.','Read 420: that means 420,000 loans.','Read 45: 45,000 audiobook loans.','Say: multiply before you write.']})}<p>Tables often give figures in thousands or millions to save space. The heading tells you.</p>${chart('loans')}<ul class="clean"><li>420 in a column of thousands → <b>420,000</b> fiction loans.</li><li>45 → <b>45,000</b> audiobook loans.</li></ul>${note('You can also write “420 thousand”, but the full form with a comma is clearer and more common in IELTS answers.')}<div class="clear"></div>${take('Check the heading: thousands or millions? Multiply before you write.')}`,
 right:`${head('Step 3 · Activity','Explore')}<p class="small">Use the table on the left page.</p><div data-act="c1-tab"></div>`}),

sp('c1-s4','Number or amount?',{
 left:`${head('Step 4 · Practise','Learn')}<h2>Number or amount?</h2><p>Two small choices make a big difference to accuracy:</p><ul class="clean"><li><b>the number of</b> + things you count: the number of visitors, loans, buses.</li><li><b>the amount of</b> + things you don’t count: the amount of money, water, time.</li><li><b>Writing numbers:</b> use commas in thousands (12,500); don’t start a sentence with a numeral (write “Fiction accounted for 420,000 loans”, not “420,000 loans were fiction”).</li></ul>${mistake('<s>The amount of visitors to Lakeland was 4.1 million.</s> Visitors are counted: <i>the number of visitors</i>.')}${take('Number of + countable; amount of + uncountable. Commas in thousands; no numeral at the start of a sentence.')}`,
 right:`${head('Step 4 · Activity','Explore')}<div data-act="c1-numamt"></div><div data-act="c1-form" style="margin-top:16px"></div>`}),

sp('c1-s5','Chapter challenge: library loans',{
 left:`${head('Step 5 · Apply','Learn')}<h2>Chapter challenge</h2><p>Write one body paragraph describing the library loans. Give every figure in full, with its unit.</p>${taskbox('The table below shows the number of loans from one city’s library service last year, by type.')}${chart('loans2')}`,
 right:`${head('Step 5 · Writing task','Explore')}<div data-act="c1-write"></div>`}),

review({n:1,title:CT,write:'c1-write',next:['c2-open','Start Chapter 2 →'],
  learned:['Find the unit first, and write it with every figure.','After a number, million, thousand and hundred take no -s.','Convert figures in thousands or millions before you write them.','The number of + countable; the amount of + uncountable.']})
];

const acts={
'c1-read1':{type:'choice',level:'Guided',skill:'Reading the unit',decision:'What does 4.1 on the chart mean?',
  opts:[{t:'4.1 million visitors to Lakeland',ok:1,why:'The axis is in millions.'},{t:'4.1 visitors',why:'Read the axis label: millions.'},{t:'4.1% of visitors',why:'The chart shows numbers, not percentages.'}]},
'c1-read2':{type:'choice',level:'Guided',skill:'Comparing with units',decision:'Which sentence is accurate and complete?',
  opts:[{t:'Lakeland attracted 4.1 million visitors, more than three times as many as Redcliff (1.2 million).',ok:1,why:'Units, what is counted, and 4.1 ÷ 1.2 ≈ 3.4.'},{t:'Lakeland was 4.1 and Redcliff was 1.2.',why:'No units: 4.1 what?'},{t:'Lakeland attracted 4.1 millions visitors.',why:'No -s on million after a number.'}]},
'c1-unit':{type:'sort',level:'Guided',skill:'Complete figures',decision:'Is each figure complete?',cats:['Complete','Missing the unit'],
  items:[{w:'Highmoor attracted 2.4 million visitors.',c:0,m:'figure, unit and what is counted.'},{w:'Highmoor was 2.4.',c:1,m:'2.4 what?'},{w:'Westwood received 850,000 visitors.',c:0,m:'complete.'},{w:'Redcliff had 1.2 million.',c:1,m:'1.2 million what? Add “visitors”.'}]},
'c1-mill':{type:'fix',level:'Supported',skill:'Million and thousand',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'Lakeland attracted 4.1 millions visitors.',ok:/4\.1 million visitors/i,bad:/millions/i,hint:'After a number, “million” takes no -s.',err:'millions',fix:'million',why:'A number + million, with no -s.',model:'Lakeland attracted 4.1 million visitors.'},
         {wrong:'The parks attracted million of visitors.',ok:/millions of visitors/i,bad:/\bmillion of\b/i,hint:'There is no number before it.',err:'million of',fix:'millions of',why:'Without a number: millions of.',model:'The parks attracted millions of visitors.'},
         {wrong:'There were 45 thousands audiobook loans.',ok:/45,?000 audiobook|45 thousand audiobook/i,bad:/thousands/i,hint:'After a number, no -s.',err:'45 thousands',fix:'45,000',why:'A number + thousand, with no -s. The full form is clearer.',model:'There were 45,000 audiobook loans.'}]},
'c1-conv':{type:'choice',level:'Supported',skill:'Converting',decision:'Westwood had 0.85 million visitors. Which is the clearest way to write it?',
  opts:[{t:'850,000 visitors',ok:1,why:'0.85 × 1,000,000 = 850,000.'},{t:'85,000 visitors',why:'That would be 0.085 million.'},{t:'8.5 million visitors',why:'That is ten times too many.'}]},
'c1-tab':{type:'choice',level:'Supported',skill:'Thousands in a table',decision:'How many e-book loans were there?',
  opts:[{t:'150,000',ok:1,why:'150 in a column of thousands.'},{t:'150',why:'The heading says thousands.'},{t:'1.5 million',why:'That would be 1,500 thousand.'}]},
'c1-numamt':{type:'binary',level:'Supported',skill:'Number or amount',decision:'“The number of” or “the amount of”?',labels:['the number of','the amount of'],
  items:[{t:'___ visitors',a:0,right:'Visitors are counted.',wrong:'You count visitors: the number of.'},{t:'___ money spent',a:1,right:'Money is uncountable.',wrong:'Money is not counted one by one: the amount of.'},{t:'___ loans',a:0,right:'Loans are counted.',wrong:'You count loans: the number of.'},{t:'___ water used',a:1,right:'Water is uncountable.',wrong:'Water is uncountable: the amount of.'}]},
'c1-form':{type:'fix',level:'Independent',skill:'Writing numbers',decision:'Fix the mistake in each sentence.',prompt:'Type your correction and press Check.',
  items:[{wrong:'420,000 loans were for fiction.',ok:/^(fiction|loans of fiction|there were 420,000)/i,bad:/^420/,hint:'Don’t start a sentence with a numeral.',err:'420,000 … at the start',fix:'Fiction accounted for 420,000 loans.',why:'Start with words, not a numeral.',model:'Fiction accounted for 420,000 loans.'},
         {wrong:'The amount of e-book loans was 150,000.',ok:/the number of e-book loans/i,bad:/the amount of/i,hint:'Loans are counted.',err:'The amount of',fix:'The number of',why:'Countable nouns take “the number of”.',model:'The number of e-book loans was 150,000.'}]},
'c1-write':{type:'write',level:'Independent',skill:'Numbers and units',decision:'Write one body paragraph about the library loans.',prompt:'Then check your writing.',
  fields:[{k:'a',label:'Body paragraph',rows:7,ph:'Fiction was the most popular…'}],
  checks:[{t:'You wrote figures in full, in thousands.',fix:'Write the figures in full: 420,000, not 420.',fn:v=>(v.a.match(/\b\d{2,3},000\b/g)||[]).length>=3},
          {t:'You said what was counted.',fix:'Add “loans” or “books” after your figures.',fn:v=>/\b(loans|books|times)\b/i.test(v.a)},
          {t:'No -s after thousand or million.',fix:'After a number: thousand, million (no -s).',fn:v=>!/\d\s*(thousands|millions)\b/i.test(v.a)},
          {t:'You covered the most and least borrowed types.',fix:'Include fiction (the most) and audiobooks (the fewest).',fn:v=>/fiction/i.test(v.a)&&/audio/i.test(v.a)},
          {t:'No sentence starts with a numeral.',fix:'Start sentences with words, not numerals.',fn:v=>!/(^|[.!?]\s+)\d/.test(v.a.trim())},
          {t:'Your paragraph is a good length (55 words or more).',fix:'Add detail: your paragraph is under 55 words.',fn:v=>(v.a.match(/\S+/g)||[]).length>=55}],
  modelTitle:'My model paragraph',
  model:`<p>Fiction was the most popular type of loan, <button type="button" class="hl" data-n="0">with 420,000 books borrowed over the year</button>, followed by children’s books at 380,000. Non-fiction accounted for 260,000 loans. <button type="button" class="hl" data-n="1">Digital formats were borrowed far less often</button>: there were 150,000 e-book loans and just 45,000 audiobook loans, <button type="button" class="hl" data-n="2">which means that fiction loans outnumbered audiobook loans by more than nine to one</button>.</p>`,
  notes:['A figure in full, with what was counted.','A general point that groups two categories before giving their figures.','A ratio from the figures: 420,000 ÷ 45,000 ≈ 9.3.'],
  self:['Every figure is in full, with its unit.','No -s after thousand or million.','I used “the number of” for loans.','No sentence starts with a numeral.'],revise:1}
};

const gloss={
  'million':{term:'million',def:'1,000,000. After a number it takes no -s: 2.4 million visitors. Without a number: millions of visitors.',path:'M40,80 V20 H90 V80 M150,80 V50 H200 V80',ex:'“Lakeland attracted 4.1 million visitors.”'},
  'unit':{term:'unit',def:'What a figure measures: visitors, euros, hours, per cent. Every figure you write needs one.',path:'M30,50 H210 M30,40 V60 M210,40 V60',ex:'“2.4 million visitors, not 2.4.”'},
  'the number of':{term:'the number of',def:'Used with countable nouns: the number of visitors, loans, buses. For uncountable nouns, use “the amount of”.',path:'M40,70 H200 M60,60 V80 M100,60 V80 M140,60 V80 M180,60 V80',ex:'“The number of e-book loans was 150,000.”'}
};

const retrieval={
 'c1-s1':[{q:'“Lakeland had 4.1.” What is missing?',opts:[{t:'The unit and what is counted',ok:1,why:'4.1 million visitors.'},{t:'Nothing',why:'4.1 what?'}]}],
 'c1-s2':[{q:'Which is correct?',opts:[{t:'2 million visitors',ok:1,why:'No -s after a number.'},{t:'2 millions visitors',why:'No -s.'}]}],
 'c1-s3':[{q:'45 in a column of thousands is…',opts:[{t:'45,000',ok:1,why:'Multiply by 1,000.'},{t:'45',why:'Read the heading.'}]}],
 'c1-s4':[{q:'“___ money”: number or amount?',opts:[{t:'the amount of',ok:1,why:'Uncountable.'},{t:'the number of',why:'Money isn’t counted one by one.'}]}],
 'c1-s5':[{q:'Which type had the fewest loans?',opts:[{t:'Audiobooks',ok:1,why:'45,000.'},{t:'E-books',why:'150,000.'}]}]
};

const minitest=[
 {q:'Where do you find a chart’s unit?',opts:[{t:'In the title or on the axis',ok:1,why:'Check both.'},{t:'In the legend only',why:'The legend shows categories.'},{t:'In the task instructions only',why:'Usually the chart itself.'}],sp:'c1-s1'},
 {q:'Which sentence is complete?',opts:[{t:'Redcliff had 1.2 million visitors.',ok:1,why:'Figure, unit, what is counted.'},{t:'Redcliff was 1.2.',why:'No unit.'},{t:'Redcliff had 1.2 million.',why:'Million what?'}],sp:'c1-s1'},
 {q:'Which is correct?',opts:[{t:'millions of visitors',ok:1,why:'No number before it.'},{t:'4 millions visitors',why:'No -s after a number.'},{t:'million of visitors',why:'Without a number: millions of.'}],sp:'c1-s2'},
 {q:'0.85 million is…',opts:[{t:'850,000',ok:1,why:'0.85 × 1,000,000.'},{t:'85,000',why:'Ten times too small.'},{t:'8.5 million',why:'Ten times too big.'}],sp:'c1-s2'},
 {q:'A table heading says “thousands”. The figure is 380. You write…',opts:[{t:'380,000',ok:1,why:'Multiply.'},{t:'380',why:'Give the full figure.'},{t:'380 thousands',why:'No -s.'}],sp:'c1-s3'},
 {q:'Which needs “the amount of”?',opts:[{t:'water',ok:1,why:'Uncountable.'},{t:'visitors',why:'Countable.'},{t:'buses',why:'Countable.'}],sp:'c1-s4'},
 {q:'Which sentence is better?',opts:[{t:'Fiction accounted for 420,000 loans.',ok:1,why:'Starts with a word.'},{t:'420,000 loans were fiction.',why:'Don’t start with a numeral.'},{t:'420000 loans were fiction.',why:'No comma, and starts with a numeral.'}],sp:'c1-s4'},
 {q:'Fiction 420,000; audiobooks 45,000. Which is accurate?',opts:[{t:'more than nine times as many',ok:1,why:'≈ 9.3.'},{t:'ten times as many',why:'10 × 45,000 = 450,000.'},{t:'twice as many',why:'Far more than twice.'}],sp:'c1-s5'}
];

const cannow=[['Give the unit with every figure','c1-s1'],['Use million, thousand and hundred correctly','c1-s2'],['Convert figures given in thousands','c1-s3'],['Choose “the number of” or “the amount of”','c1-s4'],['Write a body paragraph with accurate numbers','c1-s5']];
const cp=(k,id)=>Object.assign({},C[k],{id});
addChapter({n:1,spreads,acts,gloss,charts:{parks:C.parks,loans:C.loans,loans2:cp('loans','ch-loans2')},retrieval,minitest,cannow});
})();
