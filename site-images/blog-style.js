/* Orange English blog styling for orangeenglish.nl (GoDaddy). Loaded by an HTML section on the homepage.
   GoDaddy rebuilds that section's iframe after the page loads, so this file re-adds itself to the main page and runs there. */
(function(){try{
if(location.href==='about:srcdoc'){var pd=window.parent.document;if(!/godaddy\.com/.test(window.parent.location.hostname)&&!pd.getElementById('oe-blog-js')){var sc=pd.createElement('script');sc.id='oe-blog-js';sc.src=(document.currentScript&&document.currentScript.src)||'https://orangeenglishielts.github.io/linegraphs/site-images/blog-style.js';pd.head.appendChild(sc)}return}
var w=window,d=document;
if(w.__oeBlog)return; w.__oeBlog=1;
/* Orange English interactive blog exercises.
   Loaded by blog-style.js on post pages. The plain exercise stays in the post text,
   so search engines and readers without JavaScript still get it. */
(function(){
var w=window,d=document;
var DRILLS=[
{title:/don.t know what to say/i,head:/^Try it/i,until:/^Notice how the answer/i,imgs:[{before:/^You don.t need a statistic/,src:'ideas-room-to-grow.png',alt:'Three growing cards showing a claim about cycling developed by asking how, who and when'},{before:/^For cycling, you might consider/,src:'ideas-zoom-out.png',alt:'Nested circles from individual through community, regional and national to global'}],steps:[
 {type:'sort',title:'Step 1: Repeated or developed?',intro:'Does each sentence explain the idea, or just say it again?',opts:['Repeated','Developed'],items:[
  {t:'Exercise is healthy because it is good for your body.',a:0,why:'"Healthy" and "good for your body" say the same thing, so we learn nothing new.'},
  {t:'Walking to school can help children stay active because it builds exercise into their day.',a:1,why:'This explains how the benefit happens.'},
  {t:'Libraries are useful because they are helpful places.',a:0,why:'"Useful" and "helpful" repeat each other. What can people do there?'},
  {t:'Public libraries can support students who have no quiet place to study at home.',a:1,why:'This names a group of people and a reason the library matters to them.'}]},
 {type:'build',title:'Step 2: Build your own idea',intro:'Start with this statement: Public parks are useful for communities. Make a quick note for each question.',qs:['What can people do in a park?','Who might particularly benefit?','Why does that matter?'],
  out:'Now turn your notes into two or three connected sentences.',model:'Public parks provide space for people to exercise and spend time outdoors without paying an entrance fee. This can be particularly useful for families who do not have a garden, as children have somewhere to play close to home.',
  check:['I named a specific benefit','I said who benefits','I explained why it matters','I didn’t need a statistic']}]},
{title:/sound more academic/i,head:/^Try it/i,until:/^These are possible rewrites/i,steps:[
 {type:'pick',title:'Step 1: Choose the best broader version',intro:'Keep the meaning, but avoid suggesting that everyone has the same experience.',items:[
  {q:'My sister studies online because she needs to fit her course around her job.',o:[['Everyone who works should study online.',0,'That turns one person’s situation into a rule for everyone.'],['Online study can help people fit education around their work commitments.',1,'The personal detail has gone, and "can" keeps the claim careful.'],['My sister finds online study very convenient for her job.',0,'This is still about your sister, not the wider issue.']]},
  {q:'My dad drives to work because there isn’t a bus early enough.',o:[['Workers may depend on cars when public transport does not operate at the times they need.',1,'This keeps the idea and shows when it applies.'],['Buses are useless.',0,'One missing early bus doesn’t show that.'],['My dad has to use his car every day.',0,'This is still a personal detail.']]},
  {q:'My friend gets distracted by notifications when she’s doing homework.',o:[['Phones destroy every student’s concentration.',0,'"Destroy" and "every" claim far more than your example shows.'],['My friend is always on her phone.',0,'This moves away from the point and stays personal.'],['Phone notifications can interrupt students’ concentration while they are studying.',1,'The idea is the same, and now it’s about a wider issue.']]}]},
 {type:'write',title:'Step 2: Now write your own',intro:'Rewrite this one yourself: My grandmother finds shopping apps difficult to use.',model:'Some older adults may find shopping apps difficult to use, particularly if they are unfamiliar with the technology.',note:'You could also write "people who are unfamiliar with the technology" if age is not relevant to your argument.',check:['I removed the personal detail','I didn’t claim it’s true of everyone','I kept the original meaning']}]},
{title:/careful language/i,head:/^Try it/i,until:/^Notice that the rewrites/i,steps:[
 {type:'tap',title:'Step 1: Find the word that claims too much',intro:'Tap the word you would find hardest to defend.',items:[
  {s:'All teenagers spend too much time online.',a:'All',why:'Can you defend "all"? "Many" or "some" is easier to support, if it fits what you mean.'},
  {s:'Online courses are always cheaper than classroom courses.',a:'always',why:'One exception breaks "always". Try "can be" or "are often".'},
  {s:'Nobody reads printed newspapers now.',a:'Nobody',why:'You don’t have to look far for an exception. "Fewer people" is more accurate.'}]},
 {type:'pick',title:'Step 2: Pick the most careful claim',intro:'Which sentence gives the reader a claim you could defend?',items:[
  {q:'Social media makes teenagers anxious.',o:[['Social media always makes every teenager anxious.',0,'This makes the claim even larger.'],['Social media can contribute to anxiety among some teenagers.',1,'"Can" and "some" keep the claim proportionate.'],['It might perhaps be possible that social media could potentially affect some teenagers.',0,'This is so cautious that the point gets lost.']]},
  {q:'Free public transport will stop people driving.',o:[['Free public transport may encourage some drivers to switch, especially if services are reliable and convenient.',1,'It adds a condition as well as a hedge, so the idea goes further.'],['Free public transport will stop everyone driving.',0,'"Everyone" makes this easier to disprove.'],['Free public transport is good.',0,'This is vague, and we lose the actual claim.']]}]},
 {type:'write',title:'Step 3: Now write your own',intro:'Rewrite this statement: University graduates earn more money than people without degrees.',model:'A university degree can improve earning prospects in some occupations, although earnings also depend on factors such as experience and industry.',check:['I used a word such as can, may or some','I added a condition or explanation','My point is still clear']}]},
{title:/nowadays/i,head:/^Try it/i,until:/^Neither needs/i,steps:[
 {type:'sort',title:'Step 1: Specific or rehearsed?',intro:'Could this opening fit almost any essay, or does it start with a particular topic?',opts:['Rehearsed','Specific'],items:[
  {t:'In today’s modern world, technology is very important.',a:0,why:'This could open hundreds of essays, and it tells us very little.'},
  {t:'Heavy traffic can make city centres noisy and difficult for pedestrians to navigate.',a:1,why:'We immediately know the topic and the problem.'},
  {t:'Nowadays, there are many advantages and disadvantages to everything.',a:0,why:'It doesn’t tell us what the essay is about.'},
  {t:'Online courses allow people to study without travelling to a classroom.',a:1,why:'This gives us something specific to build on.'}]},
 {type:'pick',title:'Step 2: Match the opening',intro:'Which starting point has the writer used?',items:[
  {q:'Digital technology has expanded the ways in which university courses can be delivered.',o:[['A change over time',1,'The present perfect links a development to the present.'],['A practical issue',0,'Look at what the sentence describes: something that has changed.'],['The debate itself',0,'Nobody is disagreeing yet.']]},
  {q:'Attending university in person can be difficult for students who live far from campus.',o:[['A change over time',0,'Nothing here describes a change.'],['A practical issue',1,'It shows why the topic matters to real people.'],['The debate itself',0,'It raises a problem, but not a disagreement.']]},
  {q:'Whether online courses can fully replace classroom teaching remains a subject of debate.',o:[['A current situation',0,'It does describe now, but look at what it focuses on.'],['A practical issue',0,'It names the disagreement, not a problem people face.'],['The debate itself',1,'It introduces what people disagree about.']]}]},
 {type:'write',title:'Step 3: Write two openings',intro:'Some people think city centres should have fewer private cars. To what extent do you agree or disagree? Write one sentence that introduces a problem, and one that introduces the debate.',model:'1. Heavy traffic can make city centres noisy and difficult for pedestrians to navigate.\n2. Restricting private cars in city centres raises questions about convenience, accessibility and the quality of public spaces.',check:['Neither sentence needs "Nowadays"','Each is about city centres and cars','I could build an introduction on it']}]}
];
var CSS=".oe-d{font-family:'DM Sans',Arial,sans-serif;display:grid;gap:22px;margin:14px 0 8px}"
+".oe-ds{background:#fff;border-radius:16px;padding:18px;display:grid;gap:12px}"
+".oe-post .oe-ds h3.oe-dt{margin:0!important;font-size:20px!important;line-height:1.25!important}"
+".oe-post .oe-ds p{margin:0!important;font-size:17px!important;line-height:1.5!important}"
+".oe-post .oe-ds .oe-qt{font-weight:700;color:#292929!important}"
+".oe-di{display:grid;gap:8px;border-top:1px solid #E7DFD3;padding-top:12px}.oe-di:first-of-type{border-top:0;padding-top:0}"
+".oe-dr{display:flex;flex-wrap:wrap;gap:8px}"
+".oe-db{font:700 15.5px 'DM Sans',Arial,sans-serif;line-height:1.3;text-align:left;padding:10px 16px;border-radius:14px;border:2px solid #E7DFD3;background:#fff;color:#292929;cursor:pointer;min-height:44px}"
+".oe-db:hover:not([disabled]){border-color:#C4521E}.oe-db:focus-visible{outline:3px solid #292929;outline-offset:2px}"
+".oe-db[disabled]{cursor:default;color:#292929}.oe-db.ok{border-color:#3F8A57;background:#EEF6F0}.oe-db.no{border-color:#B8392B;background:#FBEDEA}"
+".oe-dw{display:block;width:100%}.oe-db.oe-go{background:#C4521E;border-color:#C4521E;color:#fff;border-radius:999px;justify-self:start}"
+".oe-post .oe-df{font-size:16px!important;padding:10px 14px;border-radius:12px;background:#FBF1E8}.oe-post .oe-df b{color:#2F6A40}.oe-post .oe-df.no b{color:#A3361A}"
+".oe-dta{width:100%;box-sizing:border-box;min-height:72px;padding:12px 14px;border:2px solid #E7DFD3;border-radius:12px;font:16px/1.5 'DM Sans',Arial,sans-serif;color:#292929;background:#FBF6EF;resize:vertical}"
+".oe-dta:focus{outline:0;border-color:#C4521E}"
+".oe-dl{font-weight:700;font-size:16px;color:#292929;display:block;margin-bottom:6px}"
+".oe-dc{display:flex;gap:10px;align-items:flex-start;font-size:16px;line-height:1.4;color:#3A3530;cursor:pointer}.oe-dc input{width:20px;height:20px;margin:1px 0 0;accent-color:#3F8A57;flex:none}"
+".oe-dw2{display:inline-block;padding:2px 4px;margin:0 1px;border:0;border-radius:6px;background:transparent;font:inherit;font-size:18px;line-height:1.6;color:#292929;cursor:pointer;border-bottom:2px dotted #D9C9B7}"
+".oe-dw2:hover:not([disabled]){background:#FBF1E8}.oe-dw2:focus-visible{outline:3px solid #292929}.oe-dw2[disabled]{cursor:default;border-bottom-color:transparent}.oe-dw2.ok{background:#EEF6F0;color:#2F6A40;font-weight:700}.oe-dw2.no{background:#FBEDEA;text-decoration:line-through}"
+".oe-post .oe-dsc{font-weight:700;color:#8A5A3C!important;font-size:15px!important}";
function el(t,c,x){var e=d.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function ev(n){try{if(w.gtag)w.gtag('event',n,{page_path:w.location.pathname})}catch(e){}}
function fb(box,good,txt){var f=el('p','oe-df'+(good?'':' no'));var b=el('b','',good?'You’re right. ':'Not quite. ');f.appendChild(b);f.appendChild(d.createTextNode(txt));box.appendChild(f);ev('blog_exercise_answer')}
function score(s,total){var p=el('p','oe-dsc');p.hidden=true;s.appendChild(p);var got=0,done=0;return function(ok){done++;if(ok)got++;if(done===total){p.hidden=false;p.textContent='You got '+got+' out of '+total+'.'}}}
function btnBox(s,labels,right,cls,onDone,why){var r=el('div','oe-dr');var box=s;var bs=labels.map(function(l,i){var b=el('button','oe-db'+(cls||''),l);b.type='button';b.addEventListener('click',function(){bs.forEach(function(x){x.disabled=true});var ok=right(i);b.classList.add(ok?'ok':'no');if(!ok)bs.forEach(function(x,j){if(right(j))x.classList.add('ok')});fb(box,ok,why(i));onDone(ok)});r.appendChild(b);return b});box.appendChild(r)}
function sort(s,st){var sc;st.items.forEach(function(it){var i=el('div','oe-di');i.appendChild(el('p','oe-qt',it.t));btnBox(i,st.opts,function(k){return k===it.a},'',function(ok){sc(ok)},function(){return it.why});s.appendChild(i)});sc=score(s,st.items.length)}
function pick(s,st){var sc;st.items.forEach(function(it){var i=el('div','oe-di');i.appendChild(el('p','oe-qt',it.q));btnBox(i,it.o.map(function(o){return o[0]}),function(k){return it.o[k][1]===1},' oe-dw',function(ok){sc(ok)},function(k){return it.o[k][2]});s.appendChild(i)});sc=score(s,st.items.length)}
function tap(s,st){var sc;st.items.forEach(function(it){var i=el('div','oe-di');var p=el('p');var bs=it.s.split(' ').map(function(raw){var wd=raw.replace(/[.,]$/,'');var b=el('button','oe-dw2',raw);b.type='button';b.dataset.w=wd;b.addEventListener('click',function(){bs.forEach(function(x){x.disabled=true});var ok=wd===it.a;b.classList.add(ok?'ok':'no');if(!ok)bs.forEach(function(x){if(x.dataset.w===it.a)x.classList.add('ok')});fb(i,ok,it.why);sc(ok)});p.appendChild(b);p.appendChild(d.createTextNode(' '));return b});i.appendChild(p);s.appendChild(i)});sc=score(s,st.items.length)}
function area(id,label,ph){var w0=el('div');var l=el('label','oe-dl',label);l.htmlFor=id;var t=el('textarea','oe-dta');t.id=id;if(ph)t.placeholder=ph;w0.appendChild(l);w0.appendChild(t);return [w0,t]}
function finish(s,st,uid){var b=el('button','oe-db oe-go','Show a possible answer');b.type='button';s.appendChild(b);var c=el('div','oe-di');c.hidden=true;c.appendChild(el('p','oe-qt','Check your answer'));(st.check||[]).forEach(function(x,i){var l=el('label','oe-dc');var k=el('input');k.type='checkbox';k.id=uid+'c'+i;l.appendChild(k);l.appendChild(d.createTextNode(x));c.appendChild(l)});c.appendChild(el('p','oe-qt','One possible answer'));String(st.model).split('\n').forEach(function(m){c.appendChild(el('p','',m))});if(st.note)c.appendChild(el('p','',st.note));s.appendChild(c);b.addEventListener('click',function(){c.hidden=false;b.hidden=true;ev('blog_exercise_reveal')})}
function write(s,st,uid){var a=area(uid+'t','Your version','Type here. Nothing is saved or sent.');s.appendChild(a[0]);finish(s,st,uid)}
function build(s,st,uid){var ts=st.qs.map(function(q,i){var a=area(uid+'q'+i,q);s.appendChild(a[0]);return a[1]});s.appendChild(el('p','',st.out));var a=area(uid+'o','Your two or three sentences');s.appendChild(a[0]);finish(s,st,uid)}
var KIND={sort:sort,pick:pick,tap:tap,write:write,build:build};
function apply(){
 var t=d.querySelector('.oe-post [data-ux=BlogMainHeading]'),body=d.querySelector('.oe-post [data-ux=BlogContent]');
 if(!t||!body||body.dataset.oeDrill)return;
 var D=DRILLS.filter(function(x){return x.title.test(t.textContent)})[0];if(!D)return;
 var all=[].slice.call(body.querySelectorAll('h1,h2,h3,h4,p,li,ul,ol,div'));
 var h=all.filter(function(e){return /^H[1-6]$/.test(e.tagName)&&D.head.test(e.textContent.trim())})[0];if(!h)return;
 var top=h;while(top.parentNode!==body)top=top.parentNode;
 var kids=[].slice.call(body.children),from=kids.indexOf(top),end=-1;
 for(var i=from+1;i<kids.length;i++)if(D.until.test((kids[i].textContent||'').trim())){end=i;break}
 if(end<0)return;
 body.dataset.oeDrill='1';
 (D.imgs||[]).forEach(function(m){var n=[].slice.call(body.children).filter(function(k){return m.before.test((k.textContent||'').trim())})[0];if(!n)return;var i0=d.createElement('img');i0.src='https://orangeenglishielts.github.io/linegraphs/site-images/'+m.src;i0.alt=m.alt;i0.loading='lazy';i0.style.cssText='display:block;width:100%;height:auto;margin:24px 0';n.parentNode.insertBefore(i0,n)});
 if(!d.getElementById('oe-drill-css')){var c=d.createElement('style');c.id='oe-drill-css';c.textContent=CSS;d.head.appendChild(c)}
  var wrap=el('div','oe-d');
 D.steps.forEach(function(st,n){var s=el('div','oe-ds');s.appendChild(el('h3','oe-dt',st.title));s.appendChild(el('p','',st.intro));KIND[st.type](s,st,'oe'+n);wrap.appendChild(s)});
 top.parentNode.insertBefore(wrap,kids[end]);
 for(i=from+1;i<end;i++)kids[i].remove();
}
w.oeDrills=apply;
})();

// If an article is failing on GoDaddy's side, send readers who click through the site to the Orange English error page
w.addEventListener('click',function(ev0){var a=ev0.target&&ev0.target.closest&&ev0.target.closest('a[href]');if(!a||ev0.metaKey||ev0.ctrlKey||ev0.shiftKey||a.target==='_blank')return;var u;try{u=new URL(a.href,w.location.href)}catch(e){return}if(u.hostname!==w.location.hostname||!/^\/(blog\/)?f\//.test(u.pathname))return;ev0.preventDefault();ev0.stopPropagation();var go=function(){w.location.href=u.href};var t=setTimeout(go,2500);fetch(u.href,{cache:'no-store'}).then(function(r){clearTimeout(t);if(r.status>=500)w.location.href='https://orangeenglishielts.github.io/linegraphs/error/?from='+encodeURIComponent(u.href);else go()}).catch(function(){clearTimeout(t);go()})},true);

var css=""
+".oe-blog [data-ux=SectionHeading]{letter-spacing:-.01em}"
+".oe-blog [data-ux=NavHorizontalList]{gap:8px 8px!important;justify-content:center}"
+".oe-blog [data-ux=NavHorizontalLink],.oe-blog [data-ux=NavHorizontalLinkActive]{display:inline-block;font-size:14px!important;padding:6px 12px!important;border:1px solid #E7DFD3;border-radius:999px;background:#fff;color:#292929!important;margin:3px!important}"
+".oe-blog [data-ux=NavHorizontalLinkActive]{background:#C4521E!important;border-color:#C4521E;color:#fff!important}"
+".oe-blog [data-ux=Card]{background:#fff;border:1px solid #EFE7DC;border-radius:18px;overflow:hidden;box-shadow:0 10px 24px -18px rgba(41,41,41,.45)}"
+".oe-blog [data-ux=Card]>*:not(:first-child){padding-left:22px!important;padding-right:22px!important}"
+".oe-blog [data-ux=Card]>*:last-child{padding-bottom:22px!important}"
+".oe-blog [data-ux=CardHeading]{font-family:Fraunces,Georgia,serif!important;font-weight:700!important;font-size:24px!important;line-height:1.2!important;color:#292929!important;letter-spacing:-.005em}"
+".oe-blog [data-ux=Details]{font-size:12.5px!important;font-weight:700!important;letter-spacing:.08em;text-transform:uppercase;color:#8A5A3C!important}"
+".oe-blog [data-ux=MoreLink]{font-weight:700!important}"
+".oe-post [data-ux=BlogMainHeading],.oe-post h1.oe-title{font-family:Fraunces,Georgia,serif!important;font-weight:700!important;font-size:clamp(30px,4.6vw,46px)!important;line-height:1.1!important;color:#C4521E!important;letter-spacing:-.01em;margin:10px 0 14px!important}"
+".oe-post p,.oe-post li{font-size:18px!important;line-height:1.7!important;color:#3A3530!important}"
+".oe-post h2:not([data-ux=SectionHeading]){font-family:Fraunces,Georgia,serif!important;font-weight:700!important;font-size:clamp(24px,3.2vw,30px)!important;line-height:1.2!important;color:#292929!important;margin:1.6em 0 .5em!important}"
+".oe-post h3:not(.oe-title):not([data-ux=BlogMainHeading]){font-family:Fraunces,Georgia,serif!important;font-weight:700!important;font-size:22px!important;color:#292929!important}"
+".oe-post img{border-radius:16px}"
+".oe-post strong,.oe-post b{color:#292929}"
+"@media (max-width:767px){.oe-pgrid{flex-direction:column!important;flex-wrap:nowrap!important}.oe-pgrid>.oe-side{order:2!important;margin-top:24px}}"
+".oe-cta{background:#FBF1E8;border:1px solid #F0DCCB;border-radius:22px;padding:26px 24px;margin:36px 0 28px;font-family:'DM Sans',Arial,sans-serif}"
+".oe-cta *{box-sizing:border-box}"
+".oe-cta .k{margin:0 0 6px!important;font-size:13px!important;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B4501A!important;line-height:1.4!important}"
+".oe-cta .h{margin:0 0 8px!important;font-family:Fraunces,Georgia,serif;font-weight:700;font-size:clamp(24px,3.4vw,30px)!important;line-height:1.15!important;color:#292929!important}"
+".oe-cta .p{margin:0 0 16px!important;font-size:17px!important;line-height:1.55!important;color:#3A3530!important}"
+".oe-cta form{margin:0}.oe-cta .r{display:flex;flex-wrap:wrap;gap:10px}"
+".oe-cta input[type=email]{flex:1 1 220px;min-width:0;padding:13px 18px;border-radius:999px;border:2px solid #E7DFD3;background:#fff;color:#292929;font:16px 'DM Sans',Arial,sans-serif}"
+".oe-cta button,.oe-cta a.b{flex:0 0 auto;display:inline-block;background:#C4521E;color:#fff!important;border:0;border-radius:999px;padding:14px 24px;font:700 16px 'DM Sans',Arial,sans-serif;cursor:pointer;text-decoration:none}"
+".oe-cta .hp{position:absolute;left:-9999px;height:0;overflow:hidden}"
+".oe-cta .s{margin:10px 0 0!important;font-size:13.5px!important;line-height:1.45!important;color:#5E564E!important}"
+".oe-cta .s a{color:#B4501A!important;font-weight:700}"
+".oe-cta .e{margin:8px 0 0!important;font-size:14px!important;color:#A3361A!important}"
+".oe-cta .d{display:none;background:#DCE8D8;border-radius:16px;padding:16px;font-size:16px;line-height:1.5;color:#292929}"
+".oe-post .oe-hide{display:none!important}"
+".oe-rv{display:inline-block;margin:6px 8px 14px 0;padding:9px 18px;border:2px solid #C4521E;border-radius:999px;background:#fff;color:#C4521E;font:700 15px 'DM Sans',Arial,sans-serif;cursor:pointer;line-height:1.3}"
+".oe-rv:hover,.oe-rv:focus-visible{background:#C4521E;color:#fff}"
+".oe-rv.g{border-color:#3F8A57;color:#2F6A40}.oe-rv.g:hover,.oe-rv.g:focus-visible{background:#3F8A57;color:#fff}"
+".oe-rv.r{border-color:#B8392B;color:#A3361A}.oe-rv.r:hover,.oe-rv.r:focus-visible{background:#B8392B;color:#fff}"
+".oe-rv[disabled]{opacity:.55;cursor:default;background:#fff}"
+".oe-post .oe-shown{background:#FBF1E8;border-radius:12px;padding:12px 16px!important}"
+".oe-post .oe-v{display:block;font-weight:700;color:#2F6A40}.oe-post .oe-v.no{color:#A3361A}"
+".oe-post [data-ux=SectionHeading],.oe-post [data-aid=RSS_SECTION_TITLE_RENDERED]{display:none!important}"
+".oe-post,.oe-post section{padding-top:8px!important}"
+".oe-post .oe-side{display:none!important}"
+".oe-post .oe-pgrid{justify-content:center}.oe-post .oe-pgrid>*:not(.oe-side){flex:0 1 760px!important;max-width:760px!important;width:100%}"
+".oe-blog:not(.oe-post) [data-aid=RSS_FEED_CATEGORIES_RENDERED]{display:none!important}"
+".oe-toc{background:#fff;border:1px solid #EFE7DC;border-radius:14px;padding:14px 18px;margin:22px 0;font-family:'DM Sans',Arial,sans-serif}"
+".oe-toc summary{cursor:pointer;font-weight:700;color:#292929;font-size:16px}"
+".oe-toc ol{margin:12px 0 4px;padding-left:20px}.oe-post .oe-toc li{font-size:16px!important;line-height:1.45!important;margin:6px 0}"
+".oe-toc a{color:#B4501A!important;text-decoration:none}"
+".oe-panel{border-radius:18px;padding:6px 24px 16px;margin:28px 0;background:#FBF1E8;border:1px solid #F0DCCB}"
+".oe-panel.ex{background:#EEF4EC;border-color:#D6E4D2}"
+".oe-panel>*:first-child{margin-top:16px!important}"
+".oe-panel .oe-shown{background:#fff}"
+".oe-post .oe-opt{background:#fff;border:2px solid #E7DFD3;border-radius:12px;padding:12px 16px!important;margin:10px 0!important;cursor:pointer}"
+".oe-post .oe-opt:hover,.oe-post .oe-opt:focus-visible{border-color:#C4521E}"
+".oe-post .oe-opt.ok{border-color:#3F8A57;background:#EEF6F0}.oe-post .oe-opt.no{border-color:#B8392B;background:#FBEDEA}"
+".oe-post blockquote{border-left:4px solid #5FB27B;background:#EEF6F0;margin:1.4em 0;padding:14px 18px;border-radius:0 12px 12px 0}";
var st=d.createElement('style');st.id='oe-blog-style';st.textContent=css;d.head.appendChild(st);
var OPEN=new Date('2026-11-27T00:00:00+01:00').getTime(),SUB='https://gem.godaddy.com/signups/subscribe/5cdfe95f1e574a818971f13fe0557ea2',QUIZ='https://orangeenglishielts.github.io/linegraphs/quiz/?utm_source=blog&utm_medium=post_cta';
function ev(n){try{if(w.gtag)w.gtag('event',n,{page_path:w.location.pathname})}catch(e){}}
function ctaCopy(topic,title){
  var when=Date.now()<OPEN?'It opens on Friday 27 November.':'It\u2019s open now.';
  if(/ielts|band\b|task [12]\b/.test(topic+' '+title)){
    var c={k:'Free course from a former IELTS examiner',h:'Master IELTS Task 1 line graphs',p:'Short videos, quizzes and practice you can do at your own pace. '+when};
    if(/task 1\b/.test(topic+' '+title)){c.h='Get my free Task 1 practice pack';c.p='Ten charts for practising introductions and overviews, with answers, plus a place on my free line graphs course. '+when;c.pack=1}
    else if(/task 2\b|writing/.test(topic+' '+title)){c.h='Now pick up marks on Task 1';c.p='Task 1 counts for a third of your Writing score, and my free line graphs course shows you what examiners look for. '+when}
    return c}
  return null}
function addCta(body,topic,title){
  if(d.getElementById('oe-cta'))return;
  var c=ctaCopy(topic,title),b=d.createElement('aside');b.id='oe-cta';b.className='oe-cta';
  if(!c){b.innerHTML=/business|hospitality|meeting|professional/.test(topic+' '+title)?'<p class="k">Business English coaching</p><p class="h">Want to use this at work?</p><p class="p">I coach professionals one to one, online or in person in Amsterdam, around the real meetings, emails and presentations you deal with.</p><a class="b" href="/business-english">See how it works</a>':'<p class="k">One-to-one English coaching</p><p class="h">Want your English to feel more natural?</p><p class="p">I work with learners one to one, online or in person in Amsterdam, on the English you actually need.</p><a class="b" href="/about">See how I can help</a>';body.parentNode.insertBefore(b,body.nextSibling);return}
  var soon=Date.now()<OPEN?' on 27 November':'';
  b.innerHTML='<p class="k">'+c.k+'</p><p class="h">'+c.h+'</p><p class="p">'+c.p+'</p><form novalidate><div class="r"><input name="signup[email]" type="email" autocomplete="email" aria-label="Your email address" placeholder="you@example.com" required><button type="submit">'+(c.pack?'Send me the pack':'Send me the free course')+'</button></div><div class="hp" aria-hidden="true"><input type="text" name="d55f345b6aaa74773d072714bd2e52e0" tabindex="-1" autocomplete="off"><input type="checkbox" name="beacon" tabindex="-1"></div><p class="e" hidden></p><p class="s">Free, no card needed. '+(c.pack?'Confirm your email and I\u2019ll send you the pack, then your course link'+soon:'I\u2019ll email you the link'+soon)+'. I never share your email, and you can unsubscribe any time. Not sure of your level? <a href="'+QUIZ+'" target="_blank" rel="noopener">Take the band quiz</a>.</p></form><div class="d"><b>Nearly done! Check your inbox.</b><br>Click the link in the email I\u2019ve just sent you to '+(c.pack?'get your pack':'confirm your place')+'. Can\u2019t see it? Look in your spam or promotions folder.</div>';
  body.parentNode.insertBefore(b,body.nextSibling);
  var f=b.querySelector('form'),err=b.querySelector('.e'),done=b.querySelector('.d'),inp=f.querySelector('input[type=email]');
  f.addEventListener('submit',function(e){e.preventDefault();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())){err.textContent='Check your email address, for example name@gmail.com.';err.hidden=false;return}
    err.hidden=true;var q='signup%5Bemail%5D='+encodeURIComponent(inp.value.trim())+'&d55f345b6aaa74773d072714bd2e52e0=';
    var cb='oecb'+Date.now(),s=d.createElement('script'),fin=false;
    function fail(){if(fin)return;fin=true;err.textContent='Sorry, that didn\u2019t go through. Please try again, or use the form on my free course page.';err.hidden=false}
    w[cb]=function(res){if(fin)return;fin=true;if(res&&res.success){f.style.display='none';done.style.display='block';ev('blog_signup')}else fail()};
    s.onerror=fail;setTimeout(fail,8000);s.src=SUB+'.json?callback='+cb+'&'+q;d.body.appendChild(s)})}
function mkBtn(label,cls){var x=d.createElement('button');x.type='button';x.className='oe-rv'+(cls?' '+cls:'');x.textContent=label;return x}
function isHead(e){return /^H[1-6]$/.test(e.tagName)||(e.children.length===1&&/^H[1-6]$/.test(e.firstElementChild.tagName))}
function topOf(e,body){while(e.parentNode!==body)e=e.parentNode;return e}
function revealAll(els,b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';els.forEach(function(e){e.classList.toggle('oe-hide',o);if(!o&&els.length===1)e.classList.add('oe-shown')});b.setAttribute('aria-expanded',o?'false':'true');b.textContent=o?b.dataset.show:'Hide '+b.dataset.show.replace(/^Show /,'');if(!o)ev('blog_exercise_reveal')})}
function relabel(e){var n=e;while(n&&n.nodeType!==3)n=n.firstChild;if(n&&/^Show answers?/i.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(/^Show answers/i,'Answers').replace(/^Show answer/i,'Answer')}
var FAM=[{re:/^(Red flag|Green flag)\./,opts:['Green flag','Red flag'],cls:['g','r']},{re:/^(Accurate|Not accurate)\./,opts:['Accurate','Not accurate']},{re:/^(Same meaning|Meaning changed)\./,opts:['Same meaning','Meaning changed']},{re:/^(Main feature|Minor detail)\./,opts:['Main feature','Minor detail']}];
function quiz(body){
  var kids=[].slice.call(body.querySelectorAll('h1,h2,h3,h4,p,li'));
  kids.forEach(function(e,i){
    if(e.dataset.oeq)return;
    var t=(e.textContent||'').trim(),m;
    // Choose first, then see the explanation (red/green flags, accurate or not, and so on)
    if(e.tagName==='P'){var F=null;FAM.forEach(function(f){var mm=t.match(f.re);if(mm){m=mm;F=f}});
      if(F&&e.previousElementSibling&&!F.re.test(e.previousElementSibling.textContent.trim())){
      e.dataset.oeq='1';e.classList.add('oe-hide');var right=m[1];var w0=d.createElement('div');
      F.opts.forEach(function(c,ci){var x=mkBtn(c,F.cls?F.cls[ci]:'');x.addEventListener('click',function(){[].forEach.call(w0.querySelectorAll('button'),function(q){q.disabled=true});var v=d.createElement('span');v.className='oe-v'+(c===right?'':' no');v.textContent=c===right?'You’re right!':'Not quite.';e.insertBefore(v,e.firstChild);e.classList.remove('oe-hide');e.classList.add('oe-shown');ev('blog_exercise_answer')});w0.appendChild(x)});
      e.parentNode.insertBefore(w0,e);return}}
    // A heading such as "Answers": hide everything up to the next heading
    if(isHead(e)&&/^(\d+\.\s*)?(answers?|answer key.*|show answers?|suggested answers?|possible answers?|possible rewrites)$/i.test(t)){
      e.dataset.oeq='1';var top=topOf(e,body),els=[],n=top.nextElementSibling;
      while(n&&!isHead(n)&&!n.classList.contains('oe-cta')){els.push(n);n=n.nextElementSibling}
      if(!els.length)return;
      els.forEach(function(x){x.classList.add('oe-hide');x.dataset.oeq='1';[].forEach.call(x.querySelectorAll('p,li'),function(y){y.dataset.oeq='1'})});
      if(tfng(top,els))return;
      var b=mkBtn('Show answers');b.dataset.show='Show answers';b.setAttribute('aria-expanded','false');revealAll(els,b);top.parentNode.insertBefore(b,top.nextSibling);
      if(/^show/i.test(t))top.classList.add('oe-hide');return}
    // A line such as "Answers: A rose slightly"
    if(/^(P|LI)$/.test(e.tagName)&&/^(show answers?|answers?|suggested answers?|possible answers?|correct answers?|possible completion|corrected answers|answer key|check your answers)\s*:/i.test(t)){
      if(e.tagName==='LI'&&e.parentNode.children.length>1)return;
      e.dataset.oeq='1';relabel(e);var tgt=e.tagName==='LI'?e.parentNode:e;tgt.classList.add('oe-hide');
      var q=mkBtn(/^[a-z ]*answers\b/i.test(t)?'Show answers':'Show answer');q.dataset.show=q.textContent;q.setAttribute('aria-expanded','false');revealAll([tgt],q);tgt.parentNode.insertBefore(q,tgt)}
  })}
function lst(n){return !n?null:/^(UL|OL)$/.test(n.tagName)?n:n.querySelector('ol,ul')}
function tfng(top,els){
  var ans=lst(els[0]),st=lst(top.previousElementSibling);if(!ans||!st)return false;
  var A=[].slice.call(ans.children),S=[].slice.call(st.children);if(A.length!==S.length||!A.every(function(l){return /^(True|False|Not Given)\./.test(l.textContent.trim())}))return false;
  top.classList.add('oe-hide');
  S.forEach(function(li,i){var a=A[i].textContent.trim(),right=a.match(/^(True|False|Not Given)/)[1],w=d.createElement('div'),o=d.createElement('p');o.className='oe-hide';o.textContent=a;
    ['True','False','Not Given'].forEach(function(c){var x=mkBtn(c);x.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(q){q.disabled=true});var v=d.createElement('span');v.className='oe-v'+(c===right?'':' no');v.textContent=c===right?'You’re right!':'Not quite.';o.insertBefore(v,o.firstChild);o.classList.remove('oe-hide');o.classList.add('oe-shown');ev('blog_exercise_answer')});w.appendChild(x)});
    li.appendChild(w);li.appendChild(o)});return true}
function mcq(e,list){
  var qs=[],n=e.previousElementSibling,A=[].slice.call(list.children);
  while(n&&!isHead(n)){if(n.tagName==='P'&&/^A[.)]\s/.test(n.textContent.trim())&&/B[.)]\s/.test(n.textContent))qs.unshift(n);n=n.previousElementSibling}
  if(qs.length<2||qs.length!==A.length||!A.every(function(l){return /^[A-D][,:.]/.test(l.textContent.trim())}))return false;
  qs.forEach(function(q,i){var a=A[i].textContent.trim(),right=a.charAt(0),lines=q.innerText.split('\n').map(function(x){return x.trim()}).filter(Boolean),fb=d.createElement('p'),opts=[];fb.className='oe-hide';fb.textContent=a;q.dataset.oeq='1';q.classList.add('oe-hide');
    lines.forEach(function(l){var o=d.createElement('p');o.className='oe-opt';o.dataset.oeq='1';o.tabIndex=0;o.setAttribute('role','button');o.textContent=l;opts.push(o);
      function pick(){if(fb.dataset.done)return;fb.dataset.done='1';var c=l.charAt(0);o.classList.add(c===right?'ok':'no');if(c!==right)opts.forEach(function(x){if(x.textContent.charAt(0)===right)x.classList.add('ok')});fb.classList.remove('oe-hide');fb.classList.add('oe-shown');ev('blog_exercise_answer')}
      o.addEventListener('click',pick);o.addEventListener('keydown',function(k){if(k.key==='Enter'||k.key===' '){k.preventDefault();pick()}});q.parentNode.insertBefore(o,q)});
    q.parentNode.insertBefore(fb,q)});return true}
function options(body){
  [].forEach.call(body.querySelectorAll('p'),function(e){
    if(e.dataset.oeq)return;var m=(e.textContent||'').trim().match(/^(?:Best|Correct) answer:\s*([A-D])\b/i);if(!m)return;
    var one=e.previousElementSibling;if(one&&/^A[.)]\s/.test(one.textContent.trim())&&/B[.)]\s/.test(one.textContent)){one.innerText.split('\n').map(function(x){return x.trim()}).filter(Boolean).forEach(function(l){var o=d.createElement('p');o.textContent=l;e.parentNode.insertBefore(o,e)});one.classList.add('oe-hide');one.dataset.oeq='1'}
    var opts=[],n=e.previousElementSibling;
    while(n&&/^[A-D][.)]\s/.test((n.textContent||'').trim())){opts.unshift(n);n=n.previousElementSibling}
    e.dataset.oeq='1';if(opts.length<2)return;e.classList.add('oe-hide');
    opts.forEach(function(o){o.dataset.oeq='1';o.classList.add('oe-opt');o.tabIndex=0;o.setAttribute('role','button');
      function pick(){if(e.dataset.done)return;e.dataset.done='1';var ch=(o.textContent||'').trim().charAt(0);o.classList.add(ch===m[1]?'ok':'no');if(ch!==m[1])opts.forEach(function(x){if((x.textContent||'').trim().charAt(0)===m[1])x.classList.add('ok')});e.classList.remove('oe-hide');e.classList.add('oe-shown');ev('blog_exercise_answer')}
      o.addEventListener('click',pick);o.addEventListener('keydown',function(k){if(k.key==='Enter'||k.key===' '){k.preventDefault();pick()}})})})}
function labels(body){
  [].forEach.call(body.querySelectorAll('p'),function(e){
    if(e.dataset.oeq||!/^(suggested (answers?|corrections?|grouping)|possible answers?|answers?|show answers?|(show )?(the )?model answer|a stronger version might be|formal versions):?$/i.test((e.textContent||'').trim()))return;
    e.dataset.oeq='1';var els=[],n=e.nextElementSibling;
    if(n&&lst(n)&&(n.textContent.trim().length-lst(n).textContent.trim().length)<3)els=[n];else while(n&&!isHead(n)){els.push(n);n=n.nextElementSibling}
    if(!els.length)return;
    els.forEach(function(x){x.classList.add('oe-hide');x.dataset.oeq='1';[].forEach.call(x.querySelectorAll('p,li'),function(y){y.dataset.oeq='1'})});
    if(lst(els[0])&&mcq(e,lst(els[0]))){e.classList.add('oe-hide');return}
    var b=mkBtn(/model/i.test(e.textContent)?'Show model answer':/answers?/i.test(e.textContent)?'Show answers':'Show corrections');b.dataset.show=b.textContent;b.setAttribute('aria-expanded','false');revealAll(els,b);e.parentNode.insertBefore(b,e.nextSibling);e.classList.add('oe-hide')})}
function lvl(e){var h=/^H[1-6]$/.test(e.tagName)?e:e.firstElementChild;return +h.tagName.charAt(1)}
function panels(body){
  if(body.dataset.oeP)return;body.dataset.oeP='1';
  var EX=/practi[sc]e|exercise|drill|activity|quiz|\bgame\b|challenge|your turn|try it|common errors|test yourself|^(\d+\.\s*)?answers?\b|answer key/i,MD=/model (answer|response)|sample answer|practice charts?/i;
  [].slice.call(body.children).forEach(function(e){
    if(e.parentNode!==body||!isHead(e))return;var t=(e.textContent||'').trim();
    var md=MD.test(t),ex=EX.test(t);if(!md&&!ex)return;
    var L=lvl(e),w=d.createElement('div');w.className='oe-panel'+(md?' ex':'');body.insertBefore(w,e);
    var n=e,x;while(n&&!n.classList.contains('oe-toc')){x=n.nextElementSibling;w.appendChild(n);n=x;if(n&&isHead(n)&&lvl(n)<=L)break}})}
function toc(body){
  if(body.querySelector('.oe-toc'))return;var hs=[].slice.call(body.querySelectorAll('h2')).filter(function(h){return !h.closest('.oe-hide')});if(hs.length<4)return;
  var o=d.createElement('details');o.className='oe-toc';var h='<summary>In this article</summary><ol>';
  hs.forEach(function(x,i){x.id=x.id||('s'+(i+1));h+='<li><a href="#'+x.id+'">'+x.textContent.replace(/</g,'&lt;')+'</a></li>'});o.innerHTML=h+'</ol>';
  var f=body.firstElementChild,im=f&&(f.tagName==='IMG'||f.querySelector('img'))?f:null;body.insertBefore(o,im?im.nextSibling:f)}
function isPost(){return /^\/(blog\/)?f\//.test(w.location.pathname)}
function run(){
  [].forEach.call(d.querySelectorAll('img[src*="orangeenglishielts.github.io"]'),function(i){var u=i.getAttribute('src').split('/:/')[0];if(u!==i.getAttribute('src'))i.setAttribute('src',u)});
  var secs=[].slice.call(d.querySelectorAll('section'));
  var blog=secs.filter(function(s){return s.querySelector('[data-aid=RSS_POST_DATE],[data-aid=RSS_FEEDS_RENDERED],[data-ux=BlogMainHeading]')&&/All Posts/.test(s.textContent)});
  var outer=blog[0]; if(!outer)return;
  outer.classList.add('oe-blog');
  if(!isPost())return;
  outer.classList.add('oe-post');
  // Post pages: show only the header, the post and the footer
  secs.forEach(function(s,i){
    if(i===0||s===outer||outer.contains(s)||s.contains(outer)||i===secs.length-1)return;
    if(s.style.display!=='none')s.style.setProperty('display','none','important');
  });
  var sb=outer.querySelector('[data-aid=RSS_VIEWPOST_SIDEBAR]');var cell=sb&&sb.closest('[data-ux=GridCell]');if(cell){cell.classList.add('oe-side');cell.parentElement.classList.add('oe-pgrid')}
  // One H1 per post page: the post title
  [].forEach.call(d.querySelectorAll('h1'),function(h){if(h.classList.contains('oe-title'))return;var p=d.createElement('p');if(outer.contains(h)&&/^Orange English Blog$/.test(h.textContent.trim()))p.style.setProperty('display','none','important');p.className=h.className;p.innerHTML=h.innerHTML;h.replaceWith(p)});
  var t=outer.querySelector('[data-ux=BlogMainHeading]');
  if(t&&t.tagName!=='H1'){var h1=d.createElement('h1');[].forEach.call(t.attributes,function(a){h1.setAttribute(a.name,a.value)});h1.classList.add('oe-title');h1.innerHTML=t.innerHTML;t.replaceWith(h1)}
  var pb=outer.querySelector('[data-ux=BlogContent]'),pc=outer.querySelector('[data-aid=RSS_POST_CATEGORIES]');if(pb&&w.oeDrills)w.oeDrills();if(pb){options(pb);labels(pb);quiz(pb);if(n>=3){panels(pb);toc(pb)}}if(pb)share(pb);if(pb&&t0())addCta(pb,(pc?pc.textContent:'').toLowerCase(),(t0().textContent||'').toLowerCase());
  if(!top0){top0=1;w.scrollTo(0,0)}
}
function share(pb){
  if(d.querySelector('.oe-share'))return;
  if(!d.getElementById('oe-share-css')){var c=d.createElement('style');c.id='oe-share-css';c.textContent='.oe-share{margin:32px 0 8px;padding:18px 20px;border:1px solid #E6DCCD;border-radius:18px;background:#FFFDF8;font-family:inherit}.oe-share p{margin:0 0 12px!important;font-weight:700;font-size:16px;color:#292929}.oe-share div{display:flex;flex-wrap:wrap;gap:10px}.oe-share a,.oe-share button{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border-radius:999px;border:1.5px solid #292929;background:#fff;color:#292929!important;font-family:inherit;font-size:15px;font-weight:600;line-height:1;text-decoration:none!important;cursor:pointer}.oe-share a:hover,.oe-share button:hover{background:#292929;color:#FBF7F0!important}.oe-share svg{width:18px;height:18px;flex:none}';d.head.appendChild(c)}
  var u=w.location.origin+w.location.pathname,t=((t0()&&t0().textContent)||d.title||'').trim(),U=encodeURIComponent(u),T=encodeURIComponent(t);
  var I=function(p){return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'};
  var b=d.createElement('div');b.className='oe-share';
  b.innerHTML='<p>Share this post</p><div>'+
   '<a href="https://wa.me/?text='+T+'%20'+U+'" target="_blank" rel="noopener">'+I('<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/>')+'WhatsApp</a>'+
   '<a href="https://www.linkedin.com/sharing/share-offsite/?url='+U+'" target="_blank" rel="noopener">'+I('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>')+'LinkedIn</a>'+
   '<a href="mailto:?subject='+T+'&amp;body='+T+'%0A%0A'+U+'">'+I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>')+'Email</a>'+
   '<button type="button" class="oe-copy">'+I('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>')+'<span>Copy link</span></button></div>';
  pb.parentNode.insertBefore(b,pb.nextSibling);
  b.querySelector('.oe-copy').addEventListener('click',function(){var sp=this.querySelector('span'),ok=function(){sp.textContent='Link copied';setTimeout(function(){sp.textContent='Copy link'},2000)};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,function(){fb()})}else fb();
    function fb(){var a=d.createElement('textarea');a.value=u;d.body.appendChild(a);a.select();try{d.execCommand('copy');ok()}catch(e){}a.remove()}})}
/* Scroll reveal: sections gently fade up as they come into view (pages that load this file, not blog posts) */
function scrollReveal(){
  if(w.__oeRv||isPost()||!('IntersectionObserver' in w))return;
  if(w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  w.__oeRv=1;
  var c=d.createElement('style');c.id='oe-rv-css';c.textContent='html body .oe-rv{transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)!important}@media screen{html body .oe-rv:not(.oe-in){opacity:0!important;transform:translateY(28px)!important}}';d.head.appendChild(c);
  var items=[],secs=[].slice.call(d.querySelectorAll('section'));
  secs.forEach(function(s,i){
    if(i<2)return;
    var box=s.querySelector('[data-ux=Container],[data-ux=SplitLayout]')||s;
    [].forEach.call(box.children,function(ch){
      var cells=ch.querySelectorAll(':scope > [data-ux=GridCell], :scope > [data-ux=Grid] > [data-ux=GridCell]');
      if(cells.length>1)[].forEach.call(cells,function(g,k){g.style.transitionDelay=(k%3)*110+'ms';items.push(g)});
      else items.push(ch);
    });
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('oe-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  items.forEach(function(el){
    if(el.offsetHeight<2||el.getBoundingClientRect().top<w.innerHeight)return;
    el.classList.add('oe-rv');io.observe(el);
  });
  // Backup in case the observer is slow: show anything that has scrolled into view
  var tk=0;function chk(){tk=0;var v=w.innerHeight;[].forEach.call(d.querySelectorAll('.oe-rv:not(.oe-in)'),function(el){if(el.getBoundingClientRect().top<v*0.95)el.classList.add('oe-in')})}
  w.addEventListener('scroll',function(){if(!tk)tk=setTimeout(chk,250)},{passive:true});
}
function t0(){return d.querySelector('.oe-post [data-ux=BlogMainHeading]')}
var top0=0,n=0,iv=setInterval(function(){run();if(n<12&&isPost()&&w.scrollY>1500)w.scrollTo(0,0);if(n===4)scrollReveal();if(++n>50)clearInterval(iv)},300);run();
}catch(e){}})();
