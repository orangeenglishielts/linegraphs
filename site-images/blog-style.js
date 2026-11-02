(function(){try{
var w=window.parent,d=w.document;
if(/godaddy\.com/.test(w.location.hostname)||w.__oeBlog)return; w.__oeBlog=1;
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
+".oe-post blockquote{border-left:4px solid #5FB27B;background:#EEF6F0;margin:1.4em 0;padding:14px 18px;border-radius:0 12px 12px 0}";
var st=d.createElement('style');st.id='oe-blog-style';st.textContent=css;d.head.appendChild(st);
function run(){
  var secs=[].slice.call(d.querySelectorAll('section'));
  var blog=secs.filter(function(s){return s.querySelector('[data-aid=RSS_POST_DATE],[data-ux=BlogMainHeading]')&&/All Posts/.test(s.textContent)});
  var outer=blog[0]; if(!outer)return;
  outer.classList.add('oe-blog');
  if(!/^\/f\//.test(w.location.pathname))return;
  outer.classList.add('oe-post');
  // Post pages: show only the header, the post and the footer
  secs.forEach(function(s,i){
    if(i===0||s===outer||outer.contains(s)||s.contains(outer)||i===secs.length-1)return;
    if(s.style.display!=='none')s.style.setProperty('display','none','important');
  });
  var sb=outer.querySelector('[data-aid=RSS_VIEWPOST_SIDEBAR]');var cell=sb&&sb.closest('[data-ux=GridCell]');if(cell){cell.classList.add('oe-side');cell.parentElement.classList.add('oe-pgrid')}
  // One H1 per post page: the post title
  [].forEach.call(d.querySelectorAll('h1'),function(h){if(outer.contains(h))return;var p=d.createElement('p');p.className=h.className;p.innerHTML=h.innerHTML;h.replaceWith(p)});
  var t=outer.querySelector('[data-ux=BlogMainHeading]');
  if(t&&t.tagName!=='H1'){var h1=d.createElement('h1');[].forEach.call(t.attributes,function(a){h1.setAttribute(a.name,a.value)});h1.classList.add('oe-title');h1.innerHTML=t.innerHTML;t.replaceWith(h1)}
  if(!top0){top0=1;w.scrollTo(0,0)}
}
var top0=0,n=0,iv=setInterval(function(){run();if(n<12&&/^\/f\//.test(w.location.pathname)&&w.scrollY>1500)w.scrollTo(0,0);if(++n>50)clearInterval(iv)},300);run();
}catch(e){}})();
