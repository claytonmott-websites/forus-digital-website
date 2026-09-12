/* FORUS Digital · site.js
   Header state, navigation dropdowns, mobile drawer, scroll reveal, newsroom filters, partner form.
   No dependencies. */
(function () {
  'use strict';
  var d = document, b = d.body;
  var header = d.querySelector('.site-header');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: transparent over the hero, solid after a short scroll */
  function onScroll() {
    if (!header || header.classList.contains('is-static')) return;
    header.classList.toggle('is-solid', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Dropdowns: hover on desktop, click/tap and keyboard everywhere */
  var items = d.querySelectorAll('.nav-item.has-menu');
  function closeAll(except) {
    items.forEach(function (it) {
      if (it !== except) { it.classList.remove('is-open'); var l = it.querySelector('.nav-link'); if (l) l.setAttribute('aria-expanded', 'false'); }
    });
  }
  items.forEach(function (it) {
    var link = it.querySelector('.nav-link');
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: hover)').matches && !it.classList.contains('is-open')) {
        /* On hover devices a first click follows the link; the menu already shows on hover. */
        return;
      }
      e.preventDefault();
      var open = it.classList.toggle('is-open');
      link.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeAll(it);
    });
    it.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { it.classList.remove('is-open'); link.setAttribute('aria-expanded', 'false'); link.focus(); }
    });
  });
  d.addEventListener('click', function (e) { if (!e.target.closest('.nav-item')) closeAll(); });

  /* Mobile drawer */
  var toggle = d.querySelector('.nav-toggle');
  var drawer = d.querySelector('.nav-drawer');
  function setDrawer(open) {
    b.classList.toggle('nav-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (drawer) drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (!open && toggle) toggle.focus();
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', function () { setDrawer(!b.classList.contains('nav-open')); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && b.classList.contains('nav-open')) setDrawer(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1120 && b.classList.contains('nav-open')) setDrawer(false); });
  }

  /* Scroll reveal */
  var reveals = d.querySelectorAll('.reveal, .rail, .tl2-item');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Newsroom filters (FORUS Today) */
  var filterBar = d.querySelector('[data-filters]');
  if (filterBar) {
    var rows = d.querySelectorAll('[data-category]');
    var buttons = filterBar.querySelectorAll('.filter');
    var empty = d.querySelector('[data-filter-empty]');
    function apply(cat) {
      var n = 0;
      buttons.forEach(function (bt) { bt.setAttribute('aria-pressed', bt.dataset.filter === cat ? 'true' : 'false'); });
      rows.forEach(function (r) {
        var show = cat === 'all' || r.dataset.category === cat;
        r.hidden = !show; if (show) n++;
      });
      if (empty) empty.hidden = n > 0;
      if (history.replaceState) history.replaceState(null, '', cat === 'all' ? location.pathname : '#' + cat);
    }
    buttons.forEach(function (bt) { bt.addEventListener('click', function () { apply(bt.dataset.filter); }); });
    var initial = (location.hash || '#all').slice(1);
    if (!filterBar.querySelector('[data-filter="' + initial + '"]')) initial = 'all';
    apply(initial);
    window.addEventListener('hashchange', function () {
      var h = (location.hash || '#all').slice(1);
      if (filterBar.querySelector('[data-filter="' + h + '"]')) apply(h);
    });
  }

  /* Partner form: client-side validation and a prototype confirmation state.
     Replace the submit handler with a real endpoint (e.g. a form service or API) at implementation. */
  var form = d.querySelector('form[data-partner-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (f) {
        var field = f.closest('.field');
        var valid = f.value.trim() !== '' && (f.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        field.classList.toggle('is-invalid', !valid);
        if (!valid && ok) { ok = false; f.focus(); }
      });
      if (!ok) return;
      form.classList.add('is-sent');
      var s = d.querySelector('.form-success');
      if (s) { s.classList.add('is-visible'); s.setAttribute('tabindex', '-1'); s.focus(); }
    });
    form.querySelectorAll('[required]').forEach(function (f) {
      f.addEventListener('input', function () { f.closest('.field').classList.remove('is-invalid'); });
    });
  }

  /* Current year in the footer */
  var y = d.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
})();
