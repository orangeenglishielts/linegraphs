/* Orange English blog styling for orangeenglish.nl (GoDaddy). Loaded by an HTML section on the homepage.
   GoDaddy rebuilds that section's iframe after the page loads, so this file re-adds itself to the main page and runs there. */
(function(){try{
if(location.href==='about:srcdoc'){var pd=window.parent.document;if(!/godaddy\.com/.test(window.parent.location.hostname)&&!pd.getElementById('oe-blog-js')){var sc=pd.createElement('script');sc.id='oe-blog-js';sc.src=(document.currentScript&&document.currentScript.src)||'https://orangeenglishielts.github.io/linegraphs/site-images/blog-style.js';pd.head.appendChild(sc)}return}
var w=window,d=document;
if(w.__oeBlog)return; w.__oeBlog=1;
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
+".oe-post blockquote{border-left:4px solid #5FB27B;background:#EEF6F0;margin:1.4em 0;padding:14px 18px;border-radius:0 12px 12px 0}";
var st=d.createElement('style');st.id='oe-blog-style';st.textContent=css;d.head.appendChild(st);
var OPEN=new Date('2026-11-27T00:00:00+01:00').getTime(),SUB='https://gem.godaddy.com/signups/subscribe/5cdfe95f1e574a818971f13fe0557ea2',QUIZ='https://orangeenglishielts.github.io/linegraphs/quiz/?utm_source=blog&utm_medium=post_cta';
function ev(n){try{if(w.gtag)w.gtag('event',n,{page_path:w.location.pathname})}catch(e){}}
function ctaCopy(topic,title){
  var when=Date.now()<OPEN?'It opens on Friday 27 November.':'It\u2019s open now.';
  if(/ielts|band\b|task [12]\b/.test(topic+' '+title)){
    var c={k:'Free course from a former IELTS examiner',h:'Master IELTS Task 1 line graphs',p:'Short videos, quizzes and practice you can do at your own pace. '+when};
    if(/task 1\b/.test(topic+' '+title))c.h='Want a higher Task 1 score?';
    else if(/task 2\b|writing/.test(topic+' '+title)){c.h='Now pick up marks on Task 1';c.p='Task 1 counts for a third of your Writing score, and my free line graphs course shows you what examiners look for. '+when}
    return c}
  return null}
function addCta(body,topic,title){
  if(d.getElementById('oe-cta'))return;
  var c=ctaCopy(topic,title),b=d.createElement('aside');b.id='oe-cta';b.className='oe-cta';
  if(!c){b.innerHTML=/business|hospitality|meeting|professional/.test(topic+' '+title)?'<p class="k">Business English coaching</p><p class="h">Want to use this at work?</p><p class="p">I coach professionals one to one, online or in person in Amsterdam, around the real meetings, emails and presentations you deal with.</p><a class="b" href="/business-english">See how it works</a>':'<p class="k">One-to-one English coaching</p><p class="h">Want your English to feel more natural?</p><p class="p">I work with learners one to one, online or in person in Amsterdam, on the English you actually need.</p><a class="b" href="/about">See how I can help</a>';body.parentNode.insertBefore(b,body.nextSibling);return}
  var soon=Date.now()<OPEN?' on 27 November':'';
  b.innerHTML='<p class="k">'+c.k+'</p><p class="h">'+c.h+'</p><p class="p">'+c.p+'</p><form novalidate><div class="r"><input name="signup[email]" type="email" autocomplete="email" aria-label="Your email address" placeholder="you@example.com" required><button type="submit">Send me the free course</button></div><div class="hp" aria-hidden="true"><input type="text" name="d55f345b6aaa74773d072714bd2e52e0" tabindex="-1" autocomplete="off"><input type="checkbox" name="beacon" tabindex="-1"></div><p class="e" hidden></p><p class="s">Free, no card needed. I\u2019ll email you the link'+soon+'. I never share your email, and you can unsubscribe any time. Not sure of your level? <a href="'+QUIZ+'" target="_blank" rel="noopener">Take the band quiz</a>.</p></form><div class="d"><b>Nearly done! Check your inbox.</b><br>Click the link in the email I\u2019ve just sent you to confirm your place. Can\u2019t see it? Look in your spam or promotions folder.</div>';
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
function isHead(e){return /^H[1-6]$/.test(e.tagName)}
function revealAll(els,b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';els.forEach(function(e){e.classList.toggle('oe-hide',o);if(!o&&els.length===1)e.classList.add('oe-shown')});b.setAttribute('aria-expanded',o?'false':'true');b.textContent=o?b.dataset.show:'Hide '+b.dataset.show.replace(/^Show /,'');if(!o)ev('blog_exercise_reveal')})}
function relabel(e){var n=e;while(n&&n.nodeType!==3)n=n.firstChild;if(n&&/^Show answers?/i.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(/^Show answers/i,'Answers').replace(/^Show answer/i,'Answer')}
function quiz(body){
  var kids=[].slice.call(body.querySelectorAll('h1,h2,h3,h4,p,li'));
  kids.forEach(function(e,i){
    if(e.dataset.oeq)return;
    var t=(e.textContent||'').trim(),m;
    // Red flag or green flag: choose first, then see the explanation
    if(e.tagName==='P'&&(m=t.match(/^(Red|Green) flag\./))&&kids[i-1]&&kids[i-1].tagName==='P'&&!/flag\./i.test((kids[i-1].textContent||'').slice(0,12))){
      e.dataset.oeq='1';e.classList.add('oe-hide');var right=m[1];var w0=d.createElement('div');
      ['Green','Red'].forEach(function(c){var x=mkBtn(c+' flag',c==='Green'?'g':'r');x.addEventListener('click',function(){[].forEach.call(w0.querySelectorAll('button'),function(q){q.disabled=true});var v=d.createElement('span');v.className='oe-v'+(c===right?'':' no');v.textContent=c===right?'You’re right!':'Not quite.';e.insertBefore(v,e.firstChild);e.classList.remove('oe-hide');e.classList.add('oe-shown');ev('blog_exercise_answer')});w0.appendChild(x)});
      e.parentNode.insertBefore(w0,e);return}
    // A heading such as "Answers": hide everything up to the next heading
    if(isHead(e)&&/^(\d+\.\s*)?(answers?|answer key.*|show answers?|suggested answers?|possible answers?)$/i.test(t)){
      e.dataset.oeq='1';var els=[],n=e.nextElementSibling;
      while(n&&!isHead(n)&&!n.classList.contains('oe-cta')){els.push(n);n=n.nextElementSibling}
      if(!els.length)return;
      els.forEach(function(x){x.classList.add('oe-hide');x.dataset.oeq='1';[].forEach.call(x.querySelectorAll('p,li'),function(y){y.dataset.oeq='1'})});
      var b=mkBtn('Show answers');b.dataset.show='Show answers';b.setAttribute('aria-expanded','false');revealAll(els,b);e.parentNode.insertBefore(b,e.nextSibling);
      if(/^show/i.test(t))e.classList.add('oe-hide');return}
    // A line such as "Answers: A rose slightly"
    if(/^(P|LI)$/.test(e.tagName)&&/^(show answers?|answers?|suggested answers?|possible answers?|correct answers?)\s*:/i.test(t)){
      if(e.tagName==='LI'&&e.parentNode.children.length>1)return;
      e.dataset.oeq='1';relabel(e);var tgt=e.tagName==='LI'?e.parentNode:e;tgt.classList.add('oe-hide');
      var q=mkBtn(/^[a-z ]*answers\b/i.test(t)?'Show answers':'Show answer');q.dataset.show=q.textContent;q.setAttribute('aria-expanded','false');revealAll([tgt],q);tgt.parentNode.insertBefore(q,tgt)}
  })}
function isPost(){return /^\/(blog\/)?f\//.test(w.location.pathname)}
function run(){
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
  [].forEach.call(d.querySelectorAll('h1'),function(h){if(h.classList.contains('oe-title'))return;var p=d.createElement('p');p.className=h.className;p.innerHTML=h.innerHTML;h.replaceWith(p)});
  var t=outer.querySelector('[data-ux=BlogMainHeading]');
  if(t&&t.tagName!=='H1'){var h1=d.createElement('h1');[].forEach.call(t.attributes,function(a){h1.setAttribute(a.name,a.value)});h1.classList.add('oe-title');h1.innerHTML=t.innerHTML;t.replaceWith(h1)}
  var pb=outer.querySelector('[data-ux=BlogContent]'),pc=outer.querySelector('[data-aid=RSS_POST_CATEGORIES]');if(pb)quiz(pb);if(pb&&t0())addCta(pb,(pc?pc.textContent:'').toLowerCase(),(t0().textContent||'').toLowerCase());
  if(!top0){top0=1;w.scrollTo(0,0)}
}
function t0(){return d.querySelector('.oe-post [data-ux=BlogMainHeading]')}
var top0=0,n=0,iv=setInterval(function(){run();if(n<12&&isPost()&&w.scrollY>1500)w.scrollTo(0,0);if(++n>50)clearInterval(iv)},300);run();
}catch(e){}})();
