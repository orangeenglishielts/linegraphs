X = '<span class="no">✗</span>'
OK = '<span class="yes">✓</span>'
def bad(t): return f'<span class="red">{X}{t}</span>'
def good(t): return f'<span class="grn">{OK}{t}</span>'
def ex(t): return f'<span class="ex">{t}</span>'

SHEETS = {}

SHEETS[1] = dict(
 title='Understanding Line Graphs',
 sub='Read the graph before you write a word.',
 rule='Select the key features, describe them accurately and compare. Don’t just list figures.',
 graph='g1',
 cards=[
  ('white','Read in this order', '''<ol>
<li><b>Title:</b> what is measured, where and when. You will paraphrase it.</li>
<li><b>Horizontal axis:</b> the time period.</li>
<li><b>Vertical axis:</b> the quantity and its unit: %, thousands, litres.</li>
<li><b>Legend:</b> what each line represents.</li>
<li><b>Data points:</b> the values at each interval.</li></ol>'''),
  ('white','Describe the data, not the line', f'''<table class="tbl two"><thead><tr><th>Don’t write</th><th>Write</th></tr></thead><tbody>
<tr><td>{bad('The line goes up.')}</td><td>{good('The number of visitors rose.')}</td></tr>
<tr><td>{bad('The lines cross.')}</td><td>{good('Online reading overtook print.')}</td></tr>
<tr><td>{bad('Print is above online.')}</td><td>{good('Print reading was higher than online reading.')}</td></tr>
<tr><td>{bad('The orange line')}</td><td>{good('the figure for Japan')}</td></tr></tbody></table>'''),
  ('peach','Five key features', '''<ol>
<li>The <b>overall trend</b> of each line</li>
<li><b>Start and end points</b></li>
<li><b>Significant changes:</b> sharp rises, sudden falls</li>
<li><b>Peaks and lowest points</b></li>
<li><b>Comparisons:</b> which line is highest, and where lines cross</li></ol>
<p>If a detail would be true of almost any graph (it has a title and a legend), it is not a key feature.</p>'''),
  ('white','Number, amount or percentage?', '''<ul>
<li><b>the number of</b> + countable noun: visitors, cars</li>
<li><b>the amount of</b> + uncountable noun: water, coffee</li>
<li><b>the percentage / proportion of</b> + noun, when the figures are %</li></ul>'''),
  ('white','Your job in Task 1', '''<p><b>Select</b> the important information, <b>describe</b> it accurately and <b>compare</b> where relevant.</p>
<p><b>Don’t just list figures.</b> The most common mistake is describing each line on its own. Say which was highest, which changed most, and how the lines relate.</p>
<p>Don’t explain why the data changed. Reasons are not in the graph.</p>'''),
  ('peach','Units and numbers', '''<ul>
<li>Always give the unit: <i>from 18% to 74%</i>, not <i>from 18 to 74</i>.</li>
<li>Axis says <i>(millions)</i>? Write <b>10 million</b>, never 10 millions.</li>
<li>The noun stays plural: <b>2 million books</b>.</li>
<li>For thousands, write the full number: <b>4,000 visitors</b>.</li></ul>'''),
  ('mint','Introduction and overview', '''<p><b>Introduction:</b> one sentence. What, who, where, when, in your own words. Never “the graph below”.</p>
<p><b>Overview:</b> starts with <i>Overall,</i>. The main trends and the key comparison. No data figures.</p>'''),
 ])

SHEETS[2] = dict(
 title='Describing Trends',
 sub='Choose the word the data supports: direction first, then size and speed.',
 rule='Direction first, then size and speed. Calculate the change before you choose your word.',
 graph='g2',
 cards=[
  ('white','Verbs by direction', '''<table class="tbl two"><thead><tr><th>Up</th><th>Down</th></tr></thead><tbody>
<tr><td>rose, increased, grew, climbed</td><td>fell, decreased, declined, dropped</td></tr>
<tr><td>edged up (very small)</td><td>dipped (small and short)</td></tr>
<tr><td>surged, soared (large, fast)</td><td>plummeted (large, fast)</td></tr></tbody></table>
<p><b>No change:</b> remained stable, levelled off (after a rise or fall), plateaued, hovered around 40%.</p>
<p><b>Up and down:</b> fluctuated, rose and fell. It is not an increase or a decrease.</p>'''),
  ('white','Time expressions', '''<ul>
<li><b>A point:</b> in 2010, at the start of the period</li>
<li><b>A period:</b> between 2010 and 2015, from 2010 to 2015, over the decade</li>
<li><b>Throughout:</b> throughout the period, in every year shown</li>
<li><b>An end point:</b> by 2015, by the end of the period</li></ul>'''),
  ('peach','Adverbs: size and speed', '''<ul>
<li><b>slightly</b>: a small change (50,000 to 51,000)</li>
<li><b>gradually, steadily</b>: slow and even over time. This is about speed, not size.</li>
<li><b>sharply</b>: fast and steep</li>
<li><b>significantly, considerably</b>: large</li>
<li><b>dramatically</b>: very large. Save it for the biggest change.</li></ul>
<p><b>Calculate before you choose.</b> 51,000 to 70,000 is about 37%. That is not slight.</p>'''),
  ('peach','Keep the tone neutral', f'''<p>Some verbs carry a feeling. <i>Boomed</i> and <i>flourished</i> are positive; <i>slumped</i> and <i>spiralled</i> are negative. Use them only when the feeling matches the topic: {good('sales boomed')}, never {bad('mortality boomed')}.</p>
<p><b>Neutral verbs are always safe:</b> rose, fell, remained stable.</p>'''),
  ('white','Two sentence patterns', f'''<p class="tight"><b>Verb + adverb</b></p><p>{ex('Passenger numbers rose sharply from 51,000 to 70,000 between March and April.')}</p>
<p class="tight"><b>There was + adjective + noun</b></p><p>{ex('There was a sharp rise in passenger numbers, from 51,000 to 70,000.')}</p>
<p>Don’t mix them: {bad('rose sharp')}, {bad('a sharply rise')}.</p>'''),
  ('white','Common mistakes', f'''<ul>
<li>{bad('rised')} → <b>rose</b> (rise, rose, risen)</li>
<li>{bad('surged steadily')}: a surge is sudden</li>
<li>{bad('remained stably')} → remained <b>stable</b></li>
<li>{bad('declined of 21 points')} → declined <b>by</b> 21 points</li>
<li>{bad('fluctuated')} for a line with one dip</li></ul>'''),
  ('mint','Check before you write', '''<ol>
<li>Which way did the line move?</li>
<li>How big was the change? Calculate it.</li>
<li>How fast?</li>
<li>Does my word carry a feeling the data doesn’t? Choose a neutral one.</li></ol>'''),
 ])

SHEETS[3] = dict(
 title='Grammar for Data Description',
 sub='Tense, prepositions, comparisons and linking: the grammar that matters most in Task 1.',
 rule='Match the tense to the time on the graph. Recorded data takes the past simple.',
 graph='g3',
 cards=[
  ('white','Which tense?', f'''<table class="tbl three"><thead><tr><th>Data</th><th>Tense</th><th>Example</th></tr></thead><tbody>
<tr><td>Recorded, even last year</td><td>past simple</td><td>{ex('Cycling rose to 34% in 2020.')}</td></tr>
<tr><td>Projected (dashed line)</td><td>future form</td><td>{ex('The share is expected to reach 45% by 2030.')}</td></tr>
<tr><td>Complete before a past point</td><td>past perfect + by</td><td>{ex('By 2021, the share had risen to 9%.')}</td></tr></tbody></table>
<p>Irregular verbs: rise, <b>rose</b>, risen · fall, <b>fell</b>, fallen · grow, <b>grew</b>, grown.</p>'''),
  ('white','Linking two trends', f'''<p class="tight"><b>In one sentence:</b> while, whereas</p><p>{ex('Car use fell to 37%, whereas cycling rose to 34%.')}</p>
<p class="tight"><b>In a new sentence:</b> In contrast, By contrast, However,</p><p>{ex('Car use fell. In contrast, cycling rose.')}</p>'''),
  ('peach','Prepositions for amounts', '''<ul>
<li><b>by</b> the size of the change: rose <b>by</b> 22 percentage points</li>
<li><b>to</b> the end point: fell <b>to</b> 37%</li>
<li><b>from … to</b> both points: <b>from</b> 58% <b>to</b> 37%</li>
<li><b>at</b> a level: stood <b>at</b> 12%, peaked <b>at</b> 42%</li>
<li><b>of</b> after a noun: a rise <b>of</b> 7 points</li></ul>
<p>Verb + <b>by</b>, noun + <b>of</b>.</p>'''),
  ('peach','Subject–verb agreement', f'''<p>The subject is the first noun, not the one after <i>of</i>:</p>
<p class="tight">{good('The percentage of journeys <b>was</b> higher.')}</p><p>{bad('The percentage of journeys were higher.')}</p>'''),
  ('white','Comparatives and superlatives', f'''<p><b>Comparative</b> for two things: higher than, lower than, sharper than, more gradual than, twice as high as.</p>
<p><b>Superlative</b> for the whole set: the highest, the sharpest, the most rapid. It usually needs <i>the</i>, but a possessive replaces it: <i>Spain’s highest figure</i>.</p>
<p>Never {bad('more higher')}, {bad('the highest than')}, {bad('gradualer')}.</p>'''),
  ('mint','Band 7+: relative clauses', f'''<ul>
<li>{ex('Cycling rose to 34%, <b>which</b> was its highest figure.')}</li>
<li>{ex('The sharpest rise came between 2010 and 2015, <b>when</b> cycling grew by 7 points.')}</li>
<li>{ex('The graph shows three sources, <b>only one of which</b> grew throughout.')}</li></ul>
<p>After a comma, use <i>which</i>, never <i>that</i>. Use <i>when</i> for years, not <i>where</i>.</p>'''),
 ])

SHEETS[4] = dict(
 title='Making Comparisons',
 sub='Compare lines precisely, so the examiner sees you understand the data.',
 rule='Compare like with like, and divide before you write a multiple or a fraction.',
 graph='g4',
 cards=[
  ('peach','Like with like', f'''<p>Both sides of <i>than</i> or <i>compared with</i> must be the same kind of thing: a figure with a figure.</p>
<p class="tight">{bad('Northport was higher than Easton’s water use.')}</p>
<p class="tight">{good('Water use in Northport was higher than in Easton.')}</p>
<p>{good('Westvale’s figure was much lower than <b>that of</b> Northport.')}</p>
<p><i>That of</i> = the figure of. <i>Those of</i> = the figures of.</p>'''),
  ('peach','Crossovers, peaks and lowest points', f'''<ul>
<li><b>overtook</b>: the rising line went above. {ex('Gas overtook coal between 2008 and 2012.')}</li>
<li><b>fell below</b>: the falling line went under.</li>
<li><b>peaked at</b> 42% in 2012 · <b>reached its lowest point</b>, 12%, in 2020</li></ul>
<p>Give the period of a crossover, not one year, unless the lines meet on a point.</p>'''),
  ('white','Multiples and fractions', '''<p class="tight"><b>Divide before you write.</b></p>
<table class="tbl three nohead"><tbody>
<tr><td>180 and 45</td><td>180 ÷ 45 = 4</td><td>four times as high as</td></tr>
<tr><td>150 and 60</td><td>150 ÷ 60 = 2.5</td><td>two and a half times</td></tr>
<tr><td>45 and 150</td><td>45 ÷ 150 = 0.3</td><td>just under a third</td></tr>
<tr><td>45 and 95</td><td>45 ÷ 95 ≈ 0.47</td><td>just under half</td></tr></tbody></table>
<p>Not exact? Use <i>roughly, almost, just under, just over</i>.</p>'''),
  ('white','Useful comparison structures', '''<ul>
<li>X was more / less ___ than Y</li>
<li>X was not as ___ as Y</li>
<li>Both X and Y ___, but ___</li>
<li>While X ___, Y ___</li>
<li>Compared with X’s figure, Y’s was ___</li>
<li>X had the highest figure, followed by Y, while Z’s was by far the lowest.</li></ul>'''),
  ('white','Comparing change over time', f'''<ul>
<li>{ex('Water use in Easton rose faster than in Northport, increasing by 60 litres compared with 30.')}</li>
<li>Being higher is not the same as rising faster.</li>
<li><b>The gap:</b> subtract at the start and the end. It <b>widened</b> (grew) or <b>narrowed</b> (got smaller).</li></ul>'''),
  ('mint','Only compare what matters', '''<p>Compare start and end points, crossovers, peaks, lowest points and the gap. Skip single middle values and anything that isn’t in the graph.</p>'''),
 ])

SHEETS[5] = dict(
 title='Structuring the Response',
 sub='Four paragraphs: a reliable shape for any line graph.',
 rule='Four parts, in this order: introduction, overview, body paragraph 1, body paragraph 2.',
 graph='g5',
 cards=[
  ('peach','The four-part shape', '''<ol>
<li><b>Introduction:</b> one sentence that paraphrases the task.</li>
<li><b>Overview:</b> one or two sentences on the main patterns, no data figures.</li>
<li><b>Body paragraph 1:</b> one logical group, with figures.</li>
<li><b>Body paragraph 2:</b> the rest, with figures.</li></ol>
<p>In this course the overview comes second, so you never run out of time before you write it. IELTS also accepts it at the end.</p>'''),
  ('peach','Grouping the body paragraphs', '''<ul>
<li><b>By category:</b> the line that stands apart, then the lines that behave alike</li>
<li><b>By time period:</b> first half, second half, if the pattern changes</li>
<li><b>By trend:</b> the lines that rose, the lines that fell</li></ul>
<p>Keep each line in one place. Never one paragraph per year.</p>'''),
  ('white','Paraphrasing the task', f'''<ul>
<li><b>Change the verb:</b> illustrates, compares, gives information about. Not {bad('proves')} or {bad('explains')}.</li>
<li><b>Change the structure:</b> <i>the number of visitors</i> → <i>how many people visited</i></li>
<li><b>Change the time phrase:</b> <i>between 1995 and 2015</i> → <i>over the twenty-year period from 1995 to 2015</i>. Not {bad('over the last twenty years')} or {bad('since')}.</li>
<li><b>Keep every detail:</b> what, who, where, when.</li>
<li>Don’t copy eight or more words in a row, and don’t write {bad('the graph below')}.</li></ul>'''),
  ('white','Useful phrases', '''<table class="tbl phr nohead"><tbody>
<tr><th>Introduction</th><td>The line graph illustrates… · …over the period from X to Y</td></tr>
<tr><th>Overview</th><td>Overall, … · In general, … · It is clear that…</td></tr>
<tr><th>Body</th><td>In 2010, … · In contrast, … · Meanwhile, … · By the end of the period, …</td></tr></tbody></table>'''),
  ('white','What goes in the overview', '''<ul>
<li>The overall direction of the lines</li>
<li>Which line was highest or lowest, and whether that changed</li>
<li>A crossover, or one line that changed much faster</li></ul>
<p>Years as time references are fine: <i>after 2015</i>. Data figures belong in the body.</p>'''),
  ('mint','Overview check', f'''<p class="tight">{bad('Overall, City A had 1.2 million visitors in 2020.')}</p>
<p>Detail, not a pattern.</p>
<p>{good('Overall, City A consistently attracted far more visitors than the other two, and all three saw long-term growth.')}</p>'''),
 ])

SHEETS[6] = dict(
 title='Writing a Complete Answer',
 sub='Plan, write and check in 20 minutes.',
 rule='2 minutes to plan, 15 to write, 3 to check. Write at least 150 words.',
 graph='g6',
 cards=[
  ('peach','The 20-minute budget', '''<table class="tbl budget nohead"><tbody>
<tr><th>2<br>min</th><td>Plan: read the question, note the overview, the grouping and 3–4 key figures per body paragraph.</td></tr>
<tr><th>15<br>min</th><td>Write all four parts. Keep going forward; fix small errors later.</td></tr>
<tr><th>3<br>min</th><td>Check tense, the overview and your word count.</td></tr></tbody></table>'''),
  ('peach','Self-editing: six questions', '''<ol>
<li>Have I selected the main features, with figures that match the graph?</li>
<li>Does my overview summarise the pattern rather than recount detail?</li>
<li>Are my comparisons between equivalent figures?</li>
<li>Is my grouping logical?</li>
<li>Are my words precise, and does the tense match the time?</li>
<li>Do the links between sentences make sense: <i>in contrast</i> for a contrast, <i>meanwhile</i> for the same time?</li></ol>'''),
  ('white','Read the question first', '''<ul>
<li><b>Graph type</b> and how many lines</li>
<li><b>Time period:</b> start, end and the total span</li>
<li><b>Units:</b> %, thousands, litres per day. Check the brackets.</li>
<li><b>Every category:</b> you can group them, but you can’t leave one out</li></ul>'''),
  ('white','The four marking criteria', '''<table class="tbl phr nohead"><tbody>
<tr><th>Task Achievement</th><td>every category, a clear overview, accurate figures, 150+ words</td></tr>
<tr><th>Coherence and Cohesion</th><td>clear paragraphs, links that fit the ideas</td></tr>
<tr><th>Lexical Resource</th><td>precise words, a range where it helps</td></tr>
<tr><th>Grammatical Range and Accuracy</th><td>correct tense, comparatives, complex sentences</td></tr></tbody></table>'''),
  ('white','How long?', '''<table class="tbl phr nohead"><tbody>
<tr><th>Introduction</th><td>25–30 words</td></tr>
<tr><th>Overview</th><td>30–40 words</td></tr>
<tr><th>Body paragraph 1</th><td>50–60 words</td></tr>
<tr><th>Body paragraph 2</th><td>50–60 words</td></tr></tbody></table>
<p>Write at least 150 words. A short answer may not cover the key features.</p>'''),
  ('mint','Last-minute check', '''<ul>
<li><b>Did I compare?</b> At least one comparison in the overview and in each body paragraph</li>
<li>Past simple for recorded years</li>
<li>10 <b>million</b>, not millions</li>
<li>Every figure has its unit</li>
<li>No opinions, no reasons</li></ul>'''),
 ])
