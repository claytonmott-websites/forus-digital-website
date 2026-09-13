/* FORUS Digital · motion.js
   Scroll engine for pinned scenes, scrubbed build-outs, parallax, word reveals,
   count-ups, magnetic buttons and the eight-arrow hero. No dependencies.
   Runs only when <html> has the .motion class, which the page head sets unless
   the visitor has asked for reduced motion. */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  if (!root.classList.contains('motion')) return;

  var vh = innerHeight, vw = innerWidth, mobile = vw < 861;
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  /* ---------- Auto-wire shared components ---------- */
  var autoScene = '.page-hero, .cta-final, .story-typo, .feature-split, .impl-rows, .tag-band, .today, .layers-bottom';
  d.querySelectorAll(autoScene).forEach(function (el) { if (!el.hasAttribute('data-scene')) el.setAttribute('data-scene', 'view'); });
  var autoPar = { '.page-hero-media img': .07, '.page-hero .hero-mark': .22, '.story-num': .16, '.case-num': .1, '.today-feature .bigdate': .08, '.pillars .bg-mark': .1, '.layers-bottom .bg-mark': .12, '.story-media img': .06 };
  Object.keys(autoPar).forEach(function (sel) {
    d.querySelectorAll(sel).forEach(function (el) { if (!el.hasAttribute('data-parallax')) el.setAttribute('data-parallax', autoPar[sel]); });
  });
  d.querySelectorAll('.layers-bottom .word-row li').forEach(function (li, i) { li.style.setProperty('--i', i); });

  /* ---------- Word and character splitting ---------- */
  var splitSel = '[data-split], .page-hero h1, .section-head h2, .statement h2, .display-2, .split-sticky h2, .cta-band h2, .article-hero h1, .fs-body h3, .story-body h2, .aud-intro h2, .pillars h2';
  function split(el, chars) {
    var i = 0;
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = d.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(d.createTextNode(part)); return; }
            var w = d.createElement('span'); w.className = 'w';
            (chars ? part.split('') : [part]).forEach(function (c) {
              var s = d.createElement('span'); s.textContent = c; s.style.setProperty('--wi', i++); w.appendChild(s);
            });
            frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== 'BR' && !n.classList.contains('w') && !n.classList.contains('live-dot')) {
          walk(n);
        }
      });
    })(el);
  }
  var splitIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('split-in'); splitIO.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  d.querySelectorAll(splitSel).forEach(function (el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    split(el, el.getAttribute('data-split') === 'chars');
    if (!el.hasAttribute('data-split-manual')) splitIO.observe(el);
  });

  /* ---------- Count-ups ---------- */
  var countIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      var node = e.target.firstChild, to = +e.target.getAttribute('data-count'), t0 = performance.now();
      (function tick(now) {
        var k = clamp((now - t0) / 1900);
        node.textContent = String(Math.round(ease(k) * to)).padStart(String(to).length, '0');
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: .35 });
  d.querySelectorAll('[data-count]').forEach(function (el) {
    if (el.firstChild && el.firstChild.nodeType === 3) { el.firstChild.textContent = '00'; countIO.observe(el); }
  });

  /* ---------- Magnetic buttons ---------- */
  if (matchMedia('(pointer: fine)').matches) {
    d.querySelectorAll('.btn, .nav-coop, .route-arrow, .row-arrow').forEach(function (b) {
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * .32).toFixed(1) + 'px';
      });
      b.addEventListener('mouseleave', function () { b.style.translate = ''; });
    });
  }

  /* ---------- Hero: eight arrows converge into the mark ---------- */
  var hero = d.querySelector('[data-hero-stage]'), heroArrows = [], heroAll = null, heroWrap = null, heroP = 0, heroOn = true, t0 = performance.now();
  if (hero) {
    heroAll = hero.querySelector('.arw-all');
    heroWrap = hero.querySelector('.hero-mark-wrap');
    heroArrows = [].map.call(hero.querySelectorAll('.arw-all path'), function (el, i) {
      var b = el.getBBox(), cx = b.x + b.width / 2 - 751.86, cy = b.y + b.height / 2 - 750, L = Math.hypot(cx, cy) || 1;
      return { el: el, ux: cx / L, uy: cy / L, rot: (i % 2 ? 1 : -1) * (38 + i * 12), ph: i * .83, sp: .55 + (i % 3) * .17 };
    });
  }
  function heroTick(now) {
    var p = heroP, pa = ease(clamp(p / .48)), pbRaw = clamp((p - .5) / .3), pb = ease(pbRaw);
    var intro = ease(clamp((now - t0) / 1700)), t = now / 1000, free = 1 - pa;
    hero.style.setProperty('--pa', pa.toFixed(4));
    hero.style.setProperty('--pb', pbRaw.toFixed(4));
    hero.style.setProperty('--pbe', pb.toFixed(4));
    var far = mobile ? 560 : 640;
    for (var i = 0; i < heroArrows.length; i++) {
      var a = heroArrows[i];
      var wob = Math.sin(t * a.sp + a.ph) * 28 * free;
      var D = (far + (1 - intro) * 1100) * free + wob;
      var dx = a.ux * D, dy = a.uy * D;
      if (!mobile && a.ux < -.3) { dx = a.ux * D * .12; dy = a.uy * D * 1.15; }
      else if (!mobile && a.ux > .3) { dx = a.ux * D * .28; dy = a.uy * D * 1.1 + (a.uy === 0 ? 0 : 0); }
      var r = a.rot * free + Math.sin(t * .45 + a.ph) * 7 * free;
      a.el.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) rotate(' + r.toFixed(2) + 'deg)';
      a.el.style.opacity = intro.toFixed(3);
    }
    heroAll.style.transform = 'rotate(' + ((mobile ? free * -40 : free * 14) + Math.sin(t * .3) * 2 * free).toFixed(2) + 'deg)';
  }

  /* ---------- Scenes and parallax ---------- */
  var scenes = [], pars = [], tracks = [];
  function measure() {
    vh = innerHeight; vw = innerWidth; mobile = vw < 861;
    tracks = [].slice.call(d.querySelectorAll('[data-htrack]'));
    tracks.forEach(function (w) {
      var t = w.querySelector('.aud-track'), pinned = getComputedStyle(t).display === 'flex';
      if (!pinned) { w.style.height = ''; return; }
      var dist = Math.max(0, t.scrollWidth - vw);
      w.style.setProperty('--dist', dist);
      w.style.height = (dist + vh) + 'px';
    });
    scenes = [].map.call(d.querySelectorAll('[data-scene]'), function (el) {
      return {
        el: el,
        pin: el.getAttribute('data-scene') === 'pin',
        steps: +el.getAttribute('data-steps') || 0,
        items: [].slice.call(el.querySelectorAll('[data-step-item]')),
        step: -1,
        ranges: [].map.call(el.querySelectorAll('[data-range]'), function (r) {
          var a = r.getAttribute('data-range').split(/[\s,]+/).map(Number);
          return { el: r, a: a[0], b: a[1] };
        })
      };
    });
    pars = [].slice.call(d.querySelectorAll('[data-parallax]')).map(function (el) { return { el: el, sp: parseFloat(el.getAttribute('data-parallax')) || 0 }; });
    if (hero && heroWrap) {
      var cs = getComputedStyle(heroWrap);
      var left = heroWrap.offsetLeft, w = heroWrap.offsetWidth;
      hero.style.setProperty('--shift', mobile ? '0px' : ((vw / 2) - (left + w / 2)).toFixed(0) + 'px');
    }
  }

  var lastY = -1, dirty = true;
  function update(now) {
    var y = scrollY;
    if (dirty || y !== lastY) {
      dirty = false; lastY = y;
      root.style.setProperty('--doc-p', clamp(y / Math.max(1, root.scrollHeight - vh)).toFixed(4));
      for (var i = 0; i < scenes.length; i++) {
        var s = scenes[i], r = s.el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        var tall = s.pin && r.height > vh * 1.15;
        var pe = clamp((vh - r.top) / (vh * .8));
        var p = tall ? clamp(-r.top / (r.height - vh)) : pe;
        var pv = clamp((vh - r.top) / (vh + r.height));
        s.el.style.setProperty('--p', p.toFixed(4));
        s.el.style.setProperty('--pe', pe.toFixed(4));
        s.el.style.setProperty('--pv', pv.toFixed(4));
        for (var k = 0; k < s.ranges.length; k++) {
          var g = s.ranges[k];
          g.el.style.setProperty('--t', clamp((p - g.a) / (g.b - g.a)).toFixed(4));
        }
        if (s.steps) {
          var st = Math.min(s.steps - 1, Math.floor(p * s.steps));
          if (st !== s.step) {
            s.step = st;
            s.el.style.setProperty('--step', st);
            s.items.forEach(function (it, j) { it.classList.toggle('is-active', j === st); });
          }
        }
        if (s.el === hero) { heroP = p; heroOn = r.bottom > 0; }
      }
      var m = mobile ? .5 : 1;
      for (var j = 0; j < pars.length; j++) {
        var pr = pars[j], box = pr.el.parentElement.getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        pr.el.style.setProperty('--py', ((box.top + box.height / 2 - vh / 2) * -pr.sp * m).toFixed(1) + 'px');
      }
    }
    if (hero && heroOn) heroTick(now);
    requestAnimationFrame(update);
  }

  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { measure(); dirty = true; }, 120); });
  window.addEventListener('load', function () { measure(); dirty = true; });
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { measure(); dirty = true; });
  measure();
  requestAnimationFrame(update);
})();
