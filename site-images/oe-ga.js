/* Orange English: Google Analytics (G-3NFGSQZVRJ, same property as orangeenglish.nl)
   for the GitHub Pages sign-up pages, plus a "sign_up" event whenever a Kit form
   subscription succeeds. No cookies: a random ID kept for this browser tab only. */
(function(w,d){
  var GA_ID='G-3NFGSQZVRJ';
  if(w.__oeGA)return;w.__oeGA=1;
  var cid;
  try{cid=w.sessionStorage.getItem('oe-ga-cid')}catch(e){}
  if(!cid){cid=Math.floor(Math.random()*1e9)+'.'+Math.floor(Date.now()/1000);try{w.sessionStorage.setItem('oe-ga-cid',cid)}catch(e){}}
  w.dataLayer=w.dataLayer||[];
  if(!w.gtag){w.gtag=function(){w.dataLayer.push(arguments)}}
  w.gtag('js',new Date());
  w.gtag('config',GA_ID,{client_storage:'none',client_id:cid,anonymize_ip:true});
  var sc=d.createElement('script');sc.async=true;sc.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;(d.head||d.documentElement).appendChild(sc);

  var FORMS={'10193083':'free_course','10193224':'topics_guide','10193153':'speaking_game'};
  var sent={};
  function signUp(id){
    if(sent[id])return;sent[id]=1;
    try{w.gtag('event','sign_up',{method:'kit',form_id:id,form_name:FORMS[id]||'other',page_path:w.location.pathname})}catch(e){}
  }
  w.oeSignUp=signUp;

  // Watch Kit form posts made with fetch (every sign-up form on these pages uses it).
  var f0=w.fetch;
  if(f0){
    w.fetch=function(u,o){
      var p=f0.apply(this,arguments);
      try{
        var m=String(u&&u.url||u).match(/kit\.com\/forms\/(\d+)\/subscriptions/);
        if(m){
          var id=m[1];
          p.then(function(r){
            if(r.type==='opaque')return signUp(id); // no-cors post (band quiz): can't read the reply
            return r.clone().json().then(function(j){if(j&&j.status==='success')signUp(id)});
          }).catch(function(){});
        }
      }catch(e){}
      return p;
    };
  }
})(window,document);
