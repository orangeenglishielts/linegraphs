/* Orange English: page-movement check (added 27 Nov 2026).
   Finds out why Clarity reports the course pages "jumping". When part of the page moves
   without the student having just tapped, this sends one small event to the course's
   cookie-free Google Analytics saying WHICH element moved, by how much, and how long after
   the last tap. It sends element names only (tag, id, class), never any text or anything
   the student typed, and at most 6 events per page load. Safe to remove once the cause is known.
   Needs window.gtag (set up by the page). Also tags the Clarity session when Clarity is on. */
(function () {
  'use strict';
  try {
    if (!('PerformanceObserver' in window) || !PerformanceObserver.supportedEntryTypes ||
        PerformanceObserver.supportedEntryTypes.indexOf('layout-shift') < 0) return;
    var MAX = 6, MIN = 0.05, sent = 0, lastTap = 0;
    var embedded = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
    ['pointerdown', 'keydown'].forEach(function (t) {
      addEventListener(t, function () { lastTap = performance.now(); }, { capture: true, passive: true });
    });
    function name(n) {
      if (!n) return 'gone';
      if (n.nodeType !== 1) n = n.parentElement;
      if (!n || !n.tagName) return 'gone';
      var c = (n.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.');
      return (n.tagName.toLowerCase() + (n.id ? '#' + n.id : '') + (c ? '.' + c : '')).slice(0, 40);
    }
    function area(s) { var r = s.currentRect, p = s.previousRect; return Math.max(r.width * r.height, p.width * p.height); }
    function page() {
      var f = (location.pathname.split('/').filter(Boolean).pop() || 'book').replace('.html', '');
      return (f + (location.hash || '')).slice(0, 40);
    }
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) {
        if (e.hadRecentInput || e.value < MIN || sent >= MAX) return;
        sent++;
        var src = (e.sources || []).slice().sort(function (a, b) { return area(b) - area(a); });
        var a = src[0], b = src[1];
        var moved = name(a && a.node), also = b ? name(b.node) : '';
        var dy = a ? Math.round(a.currentRect.y - a.previousRect.y) : 0;
        var dx = a ? Math.round(a.currentRect.x - a.previousRect.x) : 0;
        var afterTap = lastTap && e.startTime >= lastTap ? Math.round(e.startTime - lastTap) : -1;
        var size = Math.round(e.value * 1000) / 1000;
        var tapBand = afterTap < 0 ? 'no tap' : afterTap <= 500 ? 'within 0.5s' : afterTap <= 1500 ? '0.5 to 1.5s' : 'over 1.5s';
        var info = [moved, 'tap=' + (afterTap < 0 ? 'none' : afterTap + 'ms'), 'load=' + Math.round(e.startTime) + 'ms',
          'size=' + size, 'dy=' + dy, 'dx=' + dx, innerWidth + 'x' + innerHeight, embedded ? 'thinkific' : 'direct', page()].join('|').slice(0, 100);
        try {
          if (window.gtag) gtag('event', 'layout_shift', {
            shift_info: info, shift_moved: moved, shift_also: also, shift_size: size,
            shift_tap: tapBand, ms_after_tap: afterTap, ms_after_load: Math.round(e.startTime), shift_page: page(),
            embedded: embedded ? 'thinkific' : 'direct', value: Math.round(e.value * 1000)
          });
        } catch (err) {}
        try {
          if (window.oeClarity && oeClarity.tag) {
            oeClarity.tag('shift_moved', moved);
            oeClarity.tag('shift_after_tap', tapBand);
            if (oeClarity.event) oeClarity.event('layout_shift');
          }
        } catch (err) {}
      });
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {}
})();
