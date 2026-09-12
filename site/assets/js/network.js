/* FORUS Digital · network.js
   A quiet network field for the homepage hero: a loose lattice of nodes, hairline links,
   and occasional pulses of value travelling between them. Brand blues only, low contrast.
   Respects prefers-reduced-motion (renders a single static frame). */
(function () {
  'use strict';
  var host = document.querySelector('.hero-network');
  if (!host) return;
  var canvas = document.createElement('canvas');
  host.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W, H, dpr, nodes = [], links = [], pulses = [], t0 = performance.now(), raf;

  var NIGHT = '30,37,74', MEDIUM = '2,125,184', LIGHT = '129,202,201', DEEP = '8,68,175';

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = host.clientWidth; H = host.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    nodes = []; links = []; pulses = [];
    var cell = Math.max(96, Math.min(150, W / 11));
    var cols = Math.ceil(W / cell) + 2, rows = Math.ceil(H / cell) + 2;
    var seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = (c - 1) * cell + cell * 0.5 + (rnd() - 0.5) * cell * 0.7;
        var y = (r - 1) * cell + cell * 0.5 + (rnd() - 0.5) * cell * 0.7;
        nodes.push({ x: x, y: y, ox: x, oy: y, ph: rnd() * Math.PI * 2, amp: 4 + rnd() * 8, sp: 0.15 + rnd() * 0.2, big: rnd() > 0.86 });
      }
    }
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].ox - nodes[j].ox, dy = nodes[i].oy - nodes[j].oy;
        var dd = Math.sqrt(dx * dx + dy * dy);
        if (dd < cell * 1.35 && rnd() > 0.42) links.push([i, j, dd]);
      }
    }
  }

  function spawnPulse() {
    if (!links.length) return;
    var l = links[Math.floor(Math.random() * links.length)];
    pulses.push({ l: l, p: 0, v: 0.25 + Math.random() * 0.35, dir: Math.random() > 0.5 ? 1 : -1 });
  }

  function frame(now) {
    var t = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    /* Horizontal weighting: the field is strongest on the right, where the composition leaves room. */
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!reduce) { n.x = n.ox + Math.sin(t * n.sp + n.ph) * n.amp; n.y = n.oy + Math.cos(t * n.sp * 0.8 + n.ph) * n.amp; }
    }
    ctx.lineWidth = 1;
    for (var k = 0; k < links.length; k++) {
      var a = nodes[links[k][0]], c = nodes[links[k][1]];
      var wx = ((a.x + c.x) / 2) / W;
      var alpha = 0.04 + wx * 0.12;
      ctx.strokeStyle = 'rgba(' + NIGHT + ',' + alpha.toFixed(3) + ')';
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(c.x, c.y); ctx.stroke();
    }
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      var w = n.x / W;
      var al = 0.14 + w * 0.42;
      if (n.big) {
        ctx.fillStyle = 'rgba(' + MEDIUM + ',' + (al * 0.9).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(n.x, n.y, 3.2, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(' + MEDIUM + ',' + (al * 0.35).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(n.x, n.y, 9, 0, Math.PI * 2); ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(' + NIGHT + ',' + (al * 0.6).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
    }
    /* Pulses: value moving along a link */
    if (!reduce) {
      if (Math.random() < 0.035 && pulses.length < 7) spawnPulse();
      for (var p = pulses.length - 1; p >= 0; p--) {
        var pu = pulses[p]; pu.p += pu.v / 60;
        if (pu.p >= 1) { pulses.splice(p, 1); continue; }
        var A = nodes[pu.l[0]], C = nodes[pu.l[1]];
        var q = pu.dir > 0 ? pu.p : 1 - pu.p;
        var px = A.x + (C.x - A.x) * q, py = A.y + (C.y - A.y) * q;
        var fade = Math.sin(pu.p * Math.PI);
        ctx.fillStyle = 'rgba(' + DEEP + ',' + (0.85 * fade).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(px, py, 2.4, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(' + LIGHT + ',' + (0.5 * fade).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }
  }

  function start() { cancelAnimationFrame(raf); build(); raf = requestAnimationFrame(frame); }
  var to; window.addEventListener('resize', function () { clearTimeout(to); to = setTimeout(start, 160); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame); });
  start();
})();
