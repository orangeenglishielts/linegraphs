/* © 2026 Orange English (orangeenglish.nl). All rights reserved. May not be copied, shared or reused without written permission. */
/* Orange English – Mastering Line Graphs: progress sync
 *
 * Saves everything the book keeps in this browser (localStorage) to the
 * Orange English progress Sheet, and brings it back on another device.
 *
 * Inside Thinkific the lesson URL carries ?email={{email}}&joined={{date_created}}&fname={{first_name}},
 * so students are signed in automatically. Anywhere else they can use their
 * email and the personal code the book shows them (also emailed on request).
 *
 *   OESync.mountPanel(el)       ready-made "save your progress" box
 *   OESync.summary = () => ({}) extra tracking fields (e.g. chaptersFinished)
 *   OESync.on('status', fn)     called whenever the signed-in/saved state changes
 */
(function () {
  const URL_ = 'https://script.google.com/macros/s/AKfycbxVSh_napmDKrYSJVSytMSLU73GrPeg8FSwdAMQbwyO7Vind_8Hb7uTbGBlIV6tpy4n/exec';
  const NS = 'oe-linebook-v1-';
  const EXTRA = ['oe-diagnostic-before', 'oe-diagnostic-after'];
  const SKIP = [NS + 'ga-cid', NS + 'fb-sid'];
  const ID_KEY = 'oe-sync-id';
  const CERT_TASKS = ['c1-write', 'c2-write', 'c3-write', 'c4-write', 'c5-write', 'c6-timed'];

  let ls;
  try { ls = window.localStorage; ls.getItem('x'); } catch (e) { ls = null; }
  const listeners = {};
  const emit = (ev, d) => (listeners[ev] || []).forEach(f => { try { f(d); } catch (e) {} });
  if (!ls) { window.OESync = { on() {}, status: () => ({ signedIn: false, unavailable: true }), mountPanel(el) { if (el) el.innerHTML = '<p>Saving across devices isn’t available in this browser.</p>'; } }; return; }

  const proto = Storage.prototype, rawSet = proto.setItem, rawRemove = proto.removeItem;
  const set = (k, v) => rawSet.call(ls, k, v), del = k => rawRemove.call(ls, k);
  let dirty = false, timer = null, busy = false, lastError = null;

  const params = new URLSearchParams(location.search);
  const TK = {
    email: (params.get('email') || '').trim().toLowerCase(),
    joined: (params.get('joined') || '').trim(),
    name: (params.get('fname') || '').trim()
  };
  const tkValid = !!(TK.email && TK.joined && TK.email.indexOf('{{') < 0 && TK.joined.indexOf('{{') < 0);

  function id() { try { return JSON.parse(ls.getItem(ID_KEY) || 'null'); } catch (e) { return null; } }
  function setId(v) { set(ID_KEY, JSON.stringify(v)); emit('status', api.status()); }
  function ours(k) { return k && (k.indexOf(NS) === 0 || EXTRA.indexOf(k) >= 0) && SKIP.indexOf(k) < 0; }
  function collect() {
    const s = {};
    for (let i = 0; i < ls.length; i++) { const k = ls.key(i); if (ours(k)) s[k] = ls.getItem(k); }
    return s;
  }
  function get(k) { try { return JSON.parse(ls.getItem(NS + k) || 'null'); } catch (e) { return null; } }
  function summary() {
    const out = { challengesDone: CERT_TASKS.filter(t => get('d1-' + t)).length };
    const cert = get('cert'); if (cert && cert.id) out.certificateId = cert.id;
    const goal = get('goal'); if (goal) { out.targetBand = goal.band; out.testDate = goal.date; }
    try { Object.assign(out, (api.summary && api.summary()) || {}); } catch (e) {}
    return out;
  }
  function post(body) {
    return fetch(URL_, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) }).then(r => r.json());
  }
  function normCode(c) { c = String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); return c.slice(0, 3) + '-' + c.slice(3, 6); }

  function save() {
    const who = id(); if (!who) return Promise.resolve({ ok: false, error: 'not_signed_in' });
    if (busy) { dirty = true; return Promise.resolve({ ok: false, error: 'busy' }); }
    busy = true; dirty = false;
    return post({ action: 'save', email: who.email, code: who.code, state: collect(), summary: summary() })
      .then(r => {
        busy = false;
        if (r.ok) { lastError = null; who.savedAt = r.savedAt; set(ID_KEY, JSON.stringify(who)); emit('saved', r); emit('status', api.status()); }
        else { lastError = r.error; if (r.error === 'wrong_code' || r.error === 'not_found') del(ID_KEY); emit('status', api.status()); }
        if (dirty) soon();
        return r;
      })
      .catch(() => { busy = false; dirty = true; lastError = 'offline'; emit('status', api.status()); return { ok: false, error: 'offline' }; });
  }
  function soon() { dirty = true; clearTimeout(timer); timer = setTimeout(() => { if (dirty) save(); }, 4000); }

  // Watch the book's own writes (S.set / removeItem go through Storage.prototype).
  proto.setItem = function (k, v) { rawSet.call(this, k, v); if (this === ls && ours(k) && id()) soon(); };
  proto.removeItem = function (k) { rawRemove.call(this, k); if (this === ls && ours(k) && id()) soon(); };
  function flush() {
    const who = id();
    if (dirty && who && navigator.sendBeacon) {
      dirty = false;
      navigator.sendBeacon(URL_, new Blob([JSON.stringify({ action: 'save', email: who.email, code: who.code, state: collect(), summary: summary() })], { type: 'text/plain' }));
    }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);

  const WORK = /^(d1-|d2-|a-|t-|w-|sc-|mt-|stage-|can-|journal|results|cert|goal|fb-|bm)/;
  function isWork(k) { return EXTRA.indexOf(k) >= 0 || WORK.test(k.slice(NS.length)); }
  function sortObj(o) { const r = {}; Object.keys(o).sort().forEach(k => { r[k] = o[k]; }); return r; }
  function restore(state) {
    Object.keys(collect()).forEach(k => del(k));
    Object.keys(state).forEach(k => { if (ours(k)) set(k, state[k]); });
  }
  /* Once the code is known: bring back saved progress if it is fuller than this device's. */
  function useCode(email, code, opts) {
    const prev = id();
    const switching = !!(prev && prev.email && prev.email !== email); // someone else used this browser before
    return post({ action: 'load', email, code, joined: tkValid && email === TK.email ? TK.joined : '' }).then(r => {
      if (!r.ok) return r;
      setId({ email, code: normCode(code), savedAt: r.savedAt });
      const local = collect(), remote = r.state || {};
      // Never lose work: start from whichever side has more real work on it, then add anything only the other side has.
      const work = st => Object.keys(st).filter(isWork).length;
      const base = switching || work(remote) >= work(local) ? remote : local;
      const merged = switching ? remote : Object.assign({}, base === remote ? local : remote, base);
      if (JSON.stringify(sortObj(merged)) !== JSON.stringify(sortObj(local))) {
        restore(merged);
        if (!opts || opts.reload !== false) { set('oe-sync-restored', '1'); location.reload(); }
        return { ok: true, restored: true };
      }
      return save().then(() => ({ ok: true, restored: false }));
    });
  }

  const api = {
    summary: null,
    needCode: false,
    on(ev, f) { (listeners[ev] = listeners[ev] || []).push(f); },
    status() {
      const w = id();
      return w ? { signedIn: true, email: w.email, code: w.code, savedAt: w.savedAt || null, error: lastError, thinkific: tkValid }
               : { signedIn: false, needCode: api.needCode, email: tkValid ? TK.email : '', error: lastError, thinkific: tkValid };
    },
    register(email) {
      email = String(email || '').trim().toLowerCase();
      return post({ action: 'register', email }).then(r => {
        if (r.ok && r.code) { setId({ email, code: r.code }); return save().then(() => ({ ok: true, code: r.code })); }
        return r; // {ok:true, existing:true} -> code re-sent by email
      });
    },
    signIn(email, code, opts) { return useCode(String(email || '').trim().toLowerCase(), code, opts); },
    resend(email) { return post({ action: 'resend', email: String(email || '').trim().toLowerCase() }); },
    save,
    signOut() { del(ID_KEY); emit('status', api.status()); },
    justRestored() { const v = ls.getItem('oe-sync-restored'); if (v) del('oe-sync-restored'); return !!v; },

    /* Ready-made box, styled with the book's own classes (.btn, .small, .row). */
    mountPanel(el) {
      if (!el) return;
      const field = 'font:inherit;padding:9px 12px;border:1px solid #D8CFBF;border-radius:8px;width:100%;box-sizing:border-box;margin:6px 0;background:#fff';
      const link = 'background:none;border:0;padding:0;color:#A84A12;text-decoration:underline;cursor:pointer;font:inherit';
      const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
      const draw = () => {
        const s = api.status();
        if (s.signedIn) {
          const when = s.savedAt ? new Date(s.savedAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : '';
          el.innerHTML = `<p><b>Your progress is being saved.</b>${when ? ` Last saved ${esc(when)}.` : ''}</p>
            <p>${s.thinkific ? 'Open the course in Thinkific on any device and your work will be there. ' : ''}To open the book on another device outside the course, use your email <b>${esc(s.email)}</b> and your code <b style="letter-spacing:.06em">${esc(s.code)}</b>.</p>
            ${s.error === 'offline' ? '<p class="small" style="color:#A84A12">You seem to be offline. Your work is safe on this device and will be saved when you reconnect.</p>' : ''}
            <p class="small"><button type="button" data-a="mail" style="${link}">Email me my code</button>${s.thinkific ? '' : ` · <button type="button" data-a="out" style="${link}">Not you? Sign out</button>`}</p><p class="small" data-f="msg"></p>`;
          const q = x => el.querySelector(x);
          q('[data-a=mail]').onclick = () => api.resend(s.email).then(() => { q('[data-f=msg]').textContent = 'Sent. Check your inbox (and your spam folder).'; });
          if (q('[data-a=out]')) q('[data-a=out]').onclick = () => { api.signOut(); draw(); };
          return;
        }
        const pre = s.email ? ` value="${esc(s.email)}"` : '';
        el.innerHTML = `${s.needCode
            ? '<p><b>Welcome back.</b> You started this course outside Thinkific. Enter your code once to bring your work here.</p>'
            : '<p><b>Save your progress</b> so you can carry on from your phone or another computer, and keep your certificate.</p>'}
          <input data-f="e" type="email" autocomplete="email" placeholder="Your email"${pre} style="${field}">
          <div data-f="old" ${s.needCode ? '' : 'hidden'}><input data-f="c" placeholder="Your code, e.g. K7P-3MX" autocapitalize="characters" style="${field}"></div>
          <div class="row" style="gap:10px;flex-wrap:wrap;margin-top:6px">
            <button type="button" class="btn" data-a="go">${s.needCode ? 'Load my progress' : 'Save my progress'}</button>
            ${s.needCode ? '' : '<button type="button" class="btn ghost" data-a="show">I already have a code</button>'}
          </div>
          <p class="small" style="margin-top:10px"><button type="button" data-a="lost" style="${link}">Forgotten your code? Email it to me</button></p>
          <p class="small" data-f="msg" style="color:#A84A12"></p>`;
        const q = x => el.querySelector(x), msg = t => { q('[data-f=msg]').textContent = t; };
        let haveCode = s.needCode;
        const showCode = () => { haveCode = true; q('[data-f=old]').hidden = false; q('[data-a=go]').textContent = 'Load my progress'; if (q('[data-a=show]')) q('[data-a=show]').hidden = true; };
        if (q('[data-a=show]')) q('[data-a=show]').onclick = () => { showCode(); q('[data-f=c]').focus(); };
        q('[data-a=go]').onclick = () => {
          const email = q('[data-f=e]').value;
          if (!haveCode) {
            msg('Saving…');
            api.register(email).then(r => {
              if (r.ok && r.code) draw();
              else if (r.ok && r.existing) { showCode(); msg('You already have a code: we’ve just emailed it to you. Enter it above.'); }
              else msg(r.error === 'bad_email' ? 'Please check your email address.' : 'Sorry, that didn’t work. Please try again.');
            }).catch(() => msg('You seem to be offline. Please try again in a moment.'));
          } else {
            msg('Loading…');
            api.signIn(email, q('[data-f=c]').value).then(r => {
              if (r.ok && !r.restored) { api.needCode = false; draw(); }
              else if (!r.ok) msg(r.error === 'wrong_code' || r.error === 'not_found' ? 'That email and code don’t match. Check the email we sent you.' : 'Sorry, that didn’t work. Please try again.');
            }).catch(() => msg('You seem to be offline. Please try again in a moment.'));
          }
        };
        q('[data-a=lost]').onclick = () => { const e = q('[data-f=e]').value; if (!e) { msg('Type your email first.'); return; } api.resend(e).then(() => msg('If that email has a code, it’s on its way. Check your spam folder too.')); };
      };
      draw();
      el._oeDraw = draw;
    }
  };
  window.OESync = api;

  /* Inside Thinkific: sign in automatically. */
  if (tkValid) {
    const who = id();
    if (!who || who.email !== TK.email) {
      post({ action: 'thinkific', email: TK.email, joined: TK.joined, name: TK.name }).then(r => {
        if (r.ok && r.code) return useCode(TK.email, r.code);
        if (r.error === 'need_code') { api.needCode = true; emit('needcode', {}); emit('status', api.status()); }
      }).catch(() => {});
    } else if (!who.savedAt) soon();
  }
})();
