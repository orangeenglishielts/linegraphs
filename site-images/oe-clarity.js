/* Orange English: Microsoft Clarity (heatmaps and visit recordings) for the course pages.
   Clarity project "Orange English course" (zinb685tp2), separate from orangeenglish.nl.

   Clarity is loaded only after the visitor says yes, so before that nothing is recorded
   and no Clarity cookie is set. Anything a student types, and the places where their own
   words, name or email are shown back to them, are masked so they never reach Clarity.

   On a page:  <script src="../site-images/oe-clarity.js" data-ask="auto"></script>
     data-ask="auto"   show the small question bar if the visitor hasn't answered yet
     data-bottom="84"  lift the bar above a fixed footer (pixels)
   From page code:
     oeClarity.state()            'yes', 'no' or null
     oeClarity.grant() / deny()   record the answer (grant also starts Clarity)
     oeClarity.tag(key, value)    label the visit, e.g. tag('chapter','3')
     oeClarity.event(name)        mark a moment, e.g. event('chapter_finished') */
(function (w, d) {
  if (w.oeClarity) return;
  var ID = 'zinb685tp2', K = 'oe_clarity_consent';
  var me = d.currentScript, on = false, mem = null, tags = {}, events = [], bar = null;

  function get() { try { var v = w.localStorage.getItem(K); if (v === 'yes' || v === 'no') return v; } catch (e) {} return mem; }
  function put(v) { mem = v; try { w.localStorage.setItem(K, v); } catch (e) {} }

  /* Typed text is masked by Clarity itself; this also covers the boxes that repeat a
     student's words (AI feedback, the drafts portfolio), their name and their email. */
  var MASK = 'textarea,input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]),select,[contenteditable],.aiout,.portfolio,#syncpanel,.certprev,#printview,[data-oe-private]';
  function maskIn(root) {
    try {
      if (root.matches && root.matches(MASK) && !root.hasAttribute('data-clarity-mask')) root.setAttribute('data-clarity-mask', 'true');
      var n = root.querySelectorAll(MASK);
      for (var i = 0; i < n.length; i++) if (!n[i].hasAttribute('data-clarity-mask')) n[i].setAttribute('data-clarity-mask', 'true');
    } catch (e) {}
  }
  function watch() {
    maskIn(d.documentElement);
    try {
      new MutationObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          var a = list[i].addedNodes;
          for (var j = 0; j < a.length; j++) if (a[j].nodeType === 1) maskIn(a[j]);
        }
      }).observe(d.documentElement, { childList: true, subtree: true });
    } catch (e) {}
  }

  function load() {
    if (on) return; on = true;
    watch();
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(w, d, 'clarity', 'script', ID);
    try {
      w.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
      for (var k in tags) if (Object.prototype.hasOwnProperty.call(tags, k)) w.clarity('set', k, tags[k]);
      for (var i = 0; i < events.length; i++) w.clarity('event', events[i]);
    } catch (e) {}
    events = [];
  }

  function hide() { if (bar && bar.parentNode) bar.parentNode.removeChild(bar); bar = null; }
  function ask() {
    if (bar || get() || !d.body) return;
    var bottom = parseInt(me && me.getAttribute('data-bottom'), 10) || 12;
    var st = d.createElement('style');
    st.textContent = '.oe-cq{position:fixed;left:12px;right:12px;bottom:' + bottom + 'px;max-width:560px;margin:0 auto;z-index:55;background:#292929;color:#fff;border-radius:16px;padding:12px 14px;font:14px/1.4 Inter,system-ui,-apple-system,"Segoe UI",sans-serif;display:flex;gap:10px;align-items:center;flex-wrap:wrap;box-shadow:0 8px 24px rgba(0,0,0,.18)}' +
      '.oe-cq p{margin:0;flex:1 1 240px;color:#fff;font:inherit}.oe-cq a{color:#fff;text-decoration:underline}' +
      '.oe-cq button{flex:0 0 auto;font:600 14.5px/1.2 Inter,system-ui,sans-serif;border-radius:999px;padding:10px 16px;min-height:40px;cursor:pointer;border:1.5px solid #fff;background:transparent;color:#fff}' +
      '.oe-cq button.y{background:#F88B48;border-color:#F88B48;color:#292929}' +
      '.oe-cq button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '@media (max-width:480px){.oe-cq{left:8px;right:8px;padding:10px 12px;font-size:14px;line-height:1.35;gap:8px;border-radius:14px}.oe-cq p{flex-basis:100%}.oe-cq button{font-size:14px;padding:8px 16px;min-height:40px}}' +
      '@media print{.oe-cq{display:none}}';
    d.head.appendChild(st);
    bar = d.createElement('div');
    bar.className = 'oe-cq'; bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-label', 'Recording choice');
    bar.innerHTML = '<p>Can I record your taps and scrolling to improve the course? It uses cookies. <a href="https://orangeenglish.nl/privacy-policy" target="_blank" rel="noopener">Details</a></p>' +
      '<button type="button" class="n">No thanks</button><button type="button" class="y">Yes</button>';
    bar.querySelector('.y').onclick = function () { api.grant(); };
    bar.querySelector('.n').onclick = function () { api.deny(); };
    d.body.appendChild(bar);
  }

  var api = w.oeClarity = {
    id: ID,
    state: get,
    grant: function () { put('yes'); hide(); load(); },
    deny: function () { put('no'); hide(); tags = {}; events = []; },
    ask: ask,
    tag: function (k, v) {
      v = String(v == null ? '' : v).slice(0, 80);
      if (on) { try { w.clarity('set', k, v); } catch (e) {} } else if (get() !== 'no') tags[k] = v;
    },
    event: function (n) {
      if (on) { try { w.clarity('event', n); } catch (e) {} } else if (get() !== 'no' && events.length < 30) events.push(n);
    }
  };

  if (get() === 'yes') load();
  else if (me && me.getAttribute('data-ask') === 'auto') {
    if (d.body) ask(); else d.addEventListener('DOMContentLoaded', ask);
  }
})(window, document);
