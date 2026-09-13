/* FORUS Digital · reusable global components
   Header, footer, page hero, editorial cards, audience routing, CTA components, news cards, shared sections.
   Each function returns an HTML string. */
import { readFileSync } from 'node:fs';
import { site, nav, footerNav, pillars, audiences, news, implementations } from './data.mjs';

const brand = (f) => readFileSync(new URL(`../site/assets/brand/${f}`, import.meta.url), 'utf8');
const LOGO_COLOUR = brand('logo-horizontal-colour.svg');
const LOGO_REVERSED = brand('logo-horizontal-reversed.svg');
const MARK_COLOUR = brand('mark-colour.svg');
const MARK_WHITE = brand('mark-white.svg');

export const icon = {
  arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4"/></svg>',
  ext: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l6-6M4 3h5v5"/></svg>',
  down: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4l4 4 4-4"/></svg>',
  person: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="24" cy="18" r="8"/><path d="M8 42c2-9 8-13 16-13s14 4 16 13"/></svg>'
};

/* Line glyphs, 24 viewBox, single weight. */
export const glyph = {
  identity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
  transactions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h13M13 4l4 4-4 4M20 16H7M11 12l-4 4 4 4"/></svg>',
  platforms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/><path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5"/></svg>',
  connectivity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><path d="M7 12h3M13.6 10.8l3.8-4.4M13.6 13.2l3.8 4.4"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9h.01M18 15h.01"/></svg>',
  operations: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h4M8 16h8"/></svg>',
  commerce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h2l2.2 10h10.6L20 8H7"/><circle cx="9" cy="19" r="1.2"/><circle cx="16" cy="19" r="1.2"/></svg>',
  data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M4 19V10M10 19V5M16 19v-8M22 19H2"/></svg>',
  integration: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4H5a1 1 0 0 0-1 1v4M15 4h4a1 1 0 0 1 1 1v4M9 20H5a1 1 0 0 1-1-1v-4M15 20h4a1 1 0 0 0 1-1v-4"/><path d="M8 12h8M12 8v8"/></svg>',
  secure: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>'
};

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- Header ---------- */
export function header(active, theme) {
  const cls = ['site-header'];
  if (theme === 'dark') cls.push('on-dark-hero');
  if (theme === 'static') cls.push('is-static');
  const items = nav.map(n => `
      <li class="nav-item has-menu${n.key === active ? ' is-active' : ''}">
        <a class="nav-link" href="${n.href}" aria-haspopup="true" aria-expanded="false">${n.label}${icon.down}</a>
        <div class="nav-menu${n.key === 'today' ? ' wide' : ''}" role="group" aria-label="${n.label}">
          <div class="nav-menu-col">
          ${n.items.map(i => i.ext
            ? `<a class="ext" href="${i.href}" target="_blank" rel="noopener">${i.label}${icon.ext}</a>`
            : `<a href="${i.href}">${i.label}</a>`).join('\n          ')}
          </div>
          ${n.key === 'today' ? `<div class="nav-latest"><span class="nav-menu-label">Latest activity</span>${news.filter(x => !x.draft).slice(0, 2).map(x => `<a href="${x.slug}"><time datetime="${x.date}">${x.day} ${x.my.split(' ')[0]}</time><span>${x.navTitle}</span></a>`).join('')}<a class="nav-latest-all" href="forus-today.html">View all ${icon.arrow}</a></div>` : ''}
        </div>
      </li>`).join('');
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="${cls.join(' ')}" data-header>
  <div class="container">
    <a class="logo" href="index.html" aria-label="FORUS Digital Group, home">
      <span class="logo-colour">${LOGO_COLOUR}</span>
      <span class="logo-reversed">${LOGO_REVERSED}</span>
    </a>
    <nav class="nav-primary" aria-label="Primary">
      <ul class="nav-primary" style="margin:0">${items}
      </ul>
    </nav>
    <div class="nav-utility">
      <a class="nav-coop" href="${site.coop}" target="_blank" rel="noopener" aria-label="FORUS.coop, opens in a new tab"><span class="nav-coop-mark">${MARK_COLOUR}</span><span>FORUS.coop</span>${icon.ext}</a>
      <a class="btn btn-outline nav-cta" href="partner.html">Partner with FORUS</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu"><span></span></button>
    </div>
  </div>
</header>
<div class="nav-drawer" id="nav-drawer" aria-hidden="true">
  ${nav.map(n => `<div class="drawer-group">
    <a class="drawer-title" href="${n.href}">${n.label}</a>
    <div class="drawer-links">
      ${n.items.map(i => i.ext ? `<a href="${i.href}" target="_blank" rel="noopener">${i.label} ↗</a>` : `<a href="${i.href}">${i.label}</a>`).join('\n      ')}
    </div>
  </div>`).join('\n  ')}
  <div class="drawer-utility">
    <a class="nav-coop drawer-coop" href="${site.coop}" target="_blank" rel="noopener"><span class="nav-coop-mark">${MARK_COLOUR}</span><span>FORUS.coop</span>${icon.ext}</a>
    <a class="btn btn-outline" href="partner.html">Partner with FORUS</a>
  </div>
  <div class="drawer-foot">
    <a href="leadership.html">Leadership</a><a href="contact.html">Contact</a><a href="technical-resources.html">Technical Resources</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a>
  </div>
</div>`;
}

/* ---------- Footer ---------- */
export function footer() {
  const col = (title, list) => `
      <div class="footer-col">
        <h4>${title}</h4>
        <ul>${list.map(i => i.ext
          ? `<li><a class="ext" href="${i.href}" target="_blank" rel="noopener">${i.label}${icon.ext}</a></li>`
          : `<li><a href="${i.href}">${i.label}</a></li>`).join('')}</ul>
      </div>`;
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="index.html" aria-label="FORUS Digital Group">${LOGO_REVERSED}</a>
        <p>${site.statement}</p>
        <p class="footer-line">${site.tagline}</p>
      </div>
      ${col('Organisation', footerNav.organisation)}
      ${col('Infrastructure', footerNav.infrastructure)}
      ${col('Who we work with', footerNav.work)}
      ${col('Ecosystem', footerNav.ecosystem)}
    </div>
    <div class="footer-bottom">
      <p>&copy; <span data-year>2026</span> FORUS Digital Group. All rights reserved.</p>
      <ul>
        ${footerNav.legal.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join('')}
        <li><a href="${site.coop}" target="_blank" rel="noopener">FORUS.coop ↗</a></li>
        <li><a href="mailto:${site.email}">${site.email}</a></li>
      </ul>
    </div>
  </div>
</footer>`;
}

/* ---------- Layout ---------- */
export function layout({ file, title, description, body, active = '', theme = 'light', scripts = [] }) {
  const t = title ? `${title} | FORUS Digital` : 'FORUS Digital | The infrastructure layer for inclusive digital economies';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(description || site.boilerplate)}">
<meta property="og:title" content="${esc(t)}">
<meta property="og:description" content="${esc(description || site.boilerplate)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#1E254A">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script>if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')</script>
<link rel="stylesheet" href="assets/css/site.css">
<link rel="stylesheet" href="assets/css/motion.css">
</head>
<body>
<div class="scroll-progress" aria-hidden="true"></div>
${header(active, theme)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
<script src="assets/js/motion.js" defer></script>
${scripts.map(s => `<script src="${s}" defer></script>`).join('\n')}
</body>
</html>
`;
}

/* ---------- Page hero ---------- */
export function pageHero({ eyebrow, title, lead, ctas = '', dark = false, media = null, facts = null, mark = true, rule = false, ring = false, mediaLeft = false, surface = '' }) {
  const inner = `
      <span class="eyebrow reveal">${eyebrow}</span>
      <h1 class="reveal" data-delay="1">${title}</h1>
      ${lead ? `<p class="lead reveal" data-delay="2">${lead}</p>` : ''}
      ${ctas ? `<div class="btn-group reveal" data-delay="3">${ctas}</div>` : ''}`;
  const body = media ? `
    <div class="page-hero-grid${mediaLeft ? ' media-left' : ''}">
      <div>${inner}</div>
      <div class="page-hero-media reveal" data-delay="2" style="--focus:${media.focus || '50% 50%'}">
        <img src="assets/img/${media.src}-1200.jpg" srcset="assets/img/${media.src}-720.jpg 720w, assets/img/${media.src}-1200.jpg 1200w" sizes="(max-width: 860px) 100vw, 40vw" alt="${esc(media.alt)}" fetchpriority="high">
      </div>
    </div>` : inner;
  return `
<section class="page-hero${dark ? ' on-dark' : ''}${media ? ' has-media' : ''}${surface ? ' ' + surface : ''}">
  ${ring ? heroRing() : (mark && !media ? `<div class="hero-mark" aria-hidden="true">${dark ? MARK_WHITE : MARK_COLOUR}</div>` : '')}
  <div class="container">
    ${body}
    ${facts ? `<div class="hero-rule"></div><div class="hero-facts reveal">${facts.map(f => `<span><strong>${f[0]}</strong> ${f[1]}</span>`).join('')}</div>` : (rule ? '<div class="hero-rule"></div>' : '')}
  </div>
</section>`;
}

/* ---------- Editorial sections ---------- */
export function split({ eyebrow, title, copy, cta = '', reverse = false, surface = '', sticky = true, id = '' }) {
  return `
<section class="section ${surface}"${id ? ` id="${id}"` : ''}>
  <div class="container">
    <div class="split${reverse ? ' reverse' : ''}">
      <div class="${sticky ? 'split-sticky ' : ''}reveal">
        ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
        <h2>${title}</h2>
      </div>
      <div class="reveal" data-delay="1">
        <div class="copy lead">${copy}</div>
        ${cta}
      </div>
    </div>
  </div>
</section>`;
}

export function statement({ eyebrow, title, copy = '', cta = '', surface = 'on-paper' }) {
  return `
<section class="statement ${surface}">
  <div class="container">
    ${eyebrow ? `<span class="eyebrow reveal">${eyebrow}</span>` : ''}
    <h2 class="reveal" data-delay="1">${title}</h2>
    ${copy ? `<div class="copy lead reveal" data-delay="2">${copy}</div>` : ''}
    ${cta ? `<div class="btn-group reveal" data-delay="3" style="margin-top:40px">${cta}</div>` : ''}
  </div>
</section>`;
}

export function ideas(items) {
  return `
    <div class="ideas">
      ${items.map((it, i) => `<div class="idea reveal" data-delay="${i + 1}">
        <span class="idea-num">0${i + 1}</span>
        <div class="idea-glyph">${glyph[it.key] || glyph.identity}</div>
        <h3>${it.title}</h3>
        <p>${it.copy}</p>
      </div>`).join('')}
    </div>`;
}

export function routes(items = audiences) {
  return `
    <div class="routes">
      ${items.map((a, i) => `<a class="route reveal" data-delay="${Math.min(i + 1, 4)}" href="${a.href}">
        <h3>${a.title}</h3>
        <p>${a.line}</p>
        <span class="route-arrow">${icon.arrow}</span>
      </a>`).join('')}
    </div>`;
}

/* The infrastructure figure: one centre, four foundations, value in motion. */
export function pillarsFigure() {
  const cx = 300, cy = 300, R = 214;
  const pts = [[cx, cy - R, 'Identity'], [cx + R, cy, 'Transactions'], [cx, cy + R, 'Platforms'], [cx - R, cy, 'Connectivity']];
  const spokes = pts.map(p => `<line class="p-spoke" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}" pathLength="1"/>`).join('');
  const flows = pts.map(p => `<line class="p-flow" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}"/>`).join('');
  const nodes = pts.map((p, i) => {
    const anchor = i === 1 ? 'start' : i === 3 ? 'end' : 'middle';
    const lx = i === 1 ? p[0] + 34 : i === 3 ? p[0] - 34 : p[0];
    const ly = i === 0 ? p[1] - 34 : i === 2 ? p[1] + 44 : p[1] + 5;
    return `<g class="p-nodegrp" style="--i:${i}"><circle class="p-node" cx="${p[0]}" cy="${p[1]}" r="18"/><circle class="p-node-dot" cx="${p[0]}" cy="${p[1]}" r="4"/><text class="p-label" x="${lx}" y="${ly}" text-anchor="${anchor}">${p[2]}</text></g>`;
  }).join('');
  const mark = MARK_WHITE.replace('<svg ', '<svg x="238" y="238" width="124" height="124" class="p-mark" ');
  return `
    <div class="pillars-figure reveal" aria-hidden="true">
      <svg viewBox="0 0 600 600">
        <circle class="p-ring" cx="${cx}" cy="${cy}" r="${R}" pathLength="1"/>
        <circle class="p-ring inner" cx="${cx}" cy="${cy}" r="96" pathLength="1"/>
        <circle class="p-ring outer" cx="${cx}" cy="${cy}" r="${R + 60}" stroke-dasharray="2 10"/>
        ${spokes}
        <g class="p-flows">${flows}</g>
        ${nodes}
        <g class="p-center"><circle cx="${cx}" cy="${cy}" r="84" fill="#1E254A" stroke="rgba(255,255,255,.3)"/>${mark}</g>
      </svg>
    </div>`;
}

export function pillarsSection({ eyebrow = 'Infrastructure', title = 'One infrastructure. Many possibilities.', cta = true, list = true, line = '' } = {}) {
  return `
<div class="pillars-scene" data-scene="pin">
<section class="section on-dark pillars">
  <div class="bg-mark" aria-hidden="true">${MARK_WHITE}</div>
  <div class="container">
    <div class="pillars-grid">
      <div>
        <span class="eyebrow reveal">${eyebrow}</span>
        <h2 class="reveal${list ? '' : ' pillars-big'}" data-delay="1">${title}</h2>
        ${line ? `<p class="lead reveal" data-delay="2" style="margin-top:28px;max-width:34ch">${line}</p>` : ''}
        ${list ? `<div class="pillar-list" style="margin-top:48px">
          ${pillars.map((p, i) => `<div class="pillar reveal" data-delay="${i + 1}" style="--i:${i}">
            <span class="pillar-num">0${i + 1}</span>
            <div><h3>${p.title}</h3><p>${p.line}</p></div>
          </div>`).join('')}
        </div>` : ''}
        ${cta ? `<div class="btn-group reveal" style="margin-top:40px"><a class="btn btn-primary" href="infrastructure.html">Explore the infrastructure ${icon.arrow}</a></div>` : ''}
      </div>
      ${pillarsFigure()}
    </div>
  </div>
</section>
</div>`;
}

export function featurePanel({ badge, title, copy, cta, img, focus = '50% 50%', alt }) {
  return `
    <div class="feature-panel reveal">
      <div class="feature-panel-media" style="--focus:${focus}">
        <img src="assets/img/${img}-1200.jpg" srcset="assets/img/${img}-720.jpg 720w, assets/img/${img}-1200.jpg 1200w, assets/img/${img}-1672.jpg 1672w" sizes="(max-width: 860px) 100vw, 50vw" alt="${esc(alt)}" loading="lazy">
        ${badge ? `<span class="badge-corner">${badge}</span>` : ''}
      </div>
      <div class="feature-panel-body">
        <h3>${title}</h3>
        <div class="copy">${copy}</div>
        ${cta}
      </div>
    </div>`;
}

export function statusTag(status, label) { return `<span class="status" data-status="${status}">${label}</span>`; }

export function implList(items) {
  return `
    <div class="impl-list">
      ${items.map((it, i) => `<div class="impl reveal" data-delay="${(i % 2) + 1}">
        <div class="impl-top"><h3>${it.title}</h3>${statusTag(it.status, it.statusLabel)}</div>
        <p>${it.line}</p>
        <span class="impl-meta">${it.where}</span>
        <a class="link${it.ext ? ' ext' : ''}" href="${it.href}"${it.ext ? ' target="_blank" rel="noopener"' : ''}>${it.ext ? 'Visit' : 'Read more'} ${it.ext ? icon.ext : icon.arrow}</a>
      </div>`).join('')}
    </div>`;
}

export function newsCard(n, i = 0) {
  return `<a class="news-card reveal" data-delay="${i + 1}" href="${n.slug}">
        <div class="news-meta"><span>${n.categoryLabel}</span><time datetime="${n.date}">${n.dateLabel}</time></div>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <span class="link">Read ${icon.arrow}</span>
      </a>`;
}
export function newsGrid(items = news.slice(0, 3)) {
  return `<div class="news-grid">${items.map((n, i) => newsCard(n, i)).join('')}</div>`;
}
export function newsList(items = news) {
  return `
    <div class="news-list">
      ${items.map(n => `<a class="news-row" href="${n.slug}" data-category="${n.category}">
        <div class="news-meta"><span>${n.categoryLabel}</span><time datetime="${n.date}">${n.dateLabel}</time>${n.draft ? '<span class="placeholder">Draft for approval</span>' : ''}</div>
        <div><h3>${n.title}</h3><p>${n.excerpt}</p></div>
        <span class="route-arrow">${icon.arrow}</span>
      </a>`).join('')}
    </div>`;
}

export function ctaFinal({ title = ['Connect the network.', 'Coordinate value.', 'Unlock shared opportunity.'], copy = 'Whether you’re building for a cooperative, institution, market or community, FORUS provides infrastructure designed to connect what comes next.', label = 'Partner with FORUS', href = 'partner.html' } = {}) {
  return `
<section class="cta-final on-dark">
  <div class="pattern" aria-hidden="true"></div>
  <div class="fade" aria-hidden="true"></div>
  <div class="container">
    <h2 class="reveal">${title.map(l => `<span>${l}</span>`).join('')}</h2>
    <p class="copy reveal" data-delay="1">${copy}</p>
    <div class="btn-group reveal" data-delay="2"><a class="btn btn-primary" href="${href}">${label} ${icon.arrow}</a></div>
  </div>
</section>`;
}

export function ctaBand({ title, copy, label = 'Partner with FORUS', href = 'partner.html', secondary = '', surface = 'on-paper' }) {
  return `
<section class="cta-band ${surface}">
  <div class="container">
    <div class="inner">
      <div class="reveal"><h2>${title}</h2>${copy ? `<p class="copy">${copy}</p>` : ''}</div>
      <div class="btn-group reveal" data-delay="1"><a class="btn btn-primary" href="${href}">${label} ${icon.arrow}</a>${secondary}</div>
    </div>
  </div>
</section>`;
}

export function principles(items, cls = '') {
  return `
    <div class="principles ${cls}">
      ${items.map((p, i) => `<div class="principle reveal" data-delay="${(i % 3) + 1}">
        <span class="principle-num">0${i + 1}</span>
        <h3>${p.title}</h3>
        <p>${p.copy}</p>
      </div>`).join('')}
    </div>`;
}

export function defRows(items) {
  return `<div class="def-rows">${items.map(d => `<div class="def-row reveal"><span class="def-key">${d.key}</span><p class="def-val">${d.val}</p></div>`).join('')}</div>`;
}

export function timeline(items) {
  return `
    <div class="timeline">
      ${items.map(t => `<div class="tl-item reveal${t.now ? ' is-now' : ''}">
        <span class="tl-when">${t.when}${t.placeholder ? ' <span class="placeholder">Placeholder</span>' : ''}</span>
        <h3>${t.title}</h3>
        <p>${t.copy}</p>
      </div>`).join('')}
    </div>`;
}

export function capGroups(items) {
  return `
    <div class="cap-groups">
      ${items.map((c, i) => `<div class="cap reveal" data-delay="${(i % 3) + 1}">
        <div class="cap-glyph">${glyph[c.glyph]}</div>
        <h3>${c.title}</h3>
        <p>${c.copy}</p>
        ${c.points ? `<ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
      </div>`).join('')}
    </div>`;
}

export function cases(items = implementations) {
  return items.map((it, i) => `
    <article class="case" id="${it.key}" data-status="${it.status}">
      <div class="case-side reveal">
        <span class="case-num" aria-hidden="true">0${i + 1}</span>
        ${statusTag(it.status, it.statusLabel)}
        <h3>${it.title}</h3>
        <p class="case-where">${it.where}</p>
        <a class="link${it.ext ? ' ext' : ''}" href="${it.href}"${it.ext ? ' target="_blank" rel="noopener"' : ''}>${it.ext ? 'Visit FORUS.coop' : 'Related announcement'} ${it.ext ? icon.ext : icon.arrow}</a>
      </div>
      <div class="case-facts reveal" data-delay="1">
        <div class="case-fact"><h4>The opportunity</h4><p>${it.opportunity}</p></div>
        <div class="case-fact"><h4>The role of FORUS</h4><p>${it.role}</p></div>
        <div class="case-fact"><h4>What is being built</h4><p>${it.building}</p></div>
        <div class="case-fact"><h4>Current status</h4><p>${it.current}</p></div>
      </div>
    </article>`).join('');
}

export function blocks(items, cls = '') {
  return `
    <div class="blocks ${cls}">
      ${items.map((b, i) => b.href
        ? `<a class="block reveal" data-delay="${(i % 4) + 1}" href="${b.href}"${b.ext ? ' target="_blank" rel="noopener"' : ''}><h3>${b.title}</h3><p>${b.copy}</p><span class="link${b.ext ? ' ext' : ''}">${b.label || 'Continue'} ${b.ext ? icon.ext : icon.arrow}</span></a>`
        : `<div class="block reveal" data-delay="${(i % 4) + 1}"><h3>${b.title}</h3><p>${b.copy}</p>${b.extra || ''}</div>`).join('')}
    </div>`;
}

export function people(items) {
  return `
    <div class="people">
      ${items.map((p, i) => `<div class="person reveal" data-delay="${(i % 3) + 1}">
        <div class="person-photo">${p.photo ? `<img src="${p.photo}" alt="${esc(p.name)}">` : icon.person}</div>
        <h3>${p.name}</h3>
        <p class="person-role">${p.role}</p>
        ${p.bio ? `<p>${p.bio}</p>` : ''}
      </div>`).join('')}
    </div>`;
}

export function article({ item, standfirst, body, aside = '' }) {
  return `
<section class="article-hero">
  <div class="container">
    <div class="news-meta reveal"><span>${item.categoryLabel}</span><time datetime="${item.date}">${item.dateLabel}</time>${item.draft ? '<span class="placeholder">Draft for approval</span>' : ''}</div>
    <h1 class="reveal" data-delay="1">${item.title}</h1>
    ${standfirst ? `<p class="lead article-standfirst reveal" data-delay="2">${standfirst}</p>` : ''}
  </div>
</section>
<section class="article-body">
  <div class="container">
    <div class="article-grid">
      <div class="prose reveal">${body}</div>
      <aside class="article-aside reveal" data-delay="1">
        ${aside}
        <div class="aside-box"><h4>About FORUS Digital</h4><p>${site.boilerplate}</p></div>
        <div class="aside-box"><h4>Media enquiries</h4><a href="mailto:${site.email}?subject=Media%20enquiry">${site.email}</a><a href="media.html">Media page ↗</a></div>
        <div class="aside-box"><h4>More from FORUS Today</h4>${news.filter(n => n.slug !== item.slug).slice(0, 3).map(n => `<a href="${n.slug}">${n.title}</a>`).join('')}</div>
      </aside>
    </div>
  </div>
</section>`;
}

export const markColour = MARK_COLOUR;
export const markWhite = MARK_WHITE;


/* ---------- Refinement pass components ---------- */
export function bigDate(n, size = '') {
  return `<time class="bigdate ${size}" datetime="${n.date}"><span class="bd-day">${n.day}</span><span class="bd-my">${n.my.replace(' ', '<br>')}</span></time>`;
}

/* Editorial image for a FORUS Today item, using the approved photography set */
export function newsImg(n, sizes = '(max-width: 860px) 100vw, 50vw', loading = 'lazy') {
  if (!n.image) return '';
  return `<img src="assets/img/${n.image}-1200.jpg" srcset="assets/img/${n.image}-720.jpg 720w, assets/img/${n.image}-1200.jpg 1200w" sizes="${sizes}" alt="${esc(n.alt || '')}" loading="${loading}" style="--focus:${n.focus || '50% 50%'}">`;
}

/* Homepage activity layer: one featured item, two quieter items */
export function todaySection(items = news.filter(n => !n.draft).slice(0, 3)) {
  const [f, ...rest] = items;
  return `
<section class="today on-paper" aria-labelledby="today-h">
  <div class="container has-vlabel">
    <span class="vlabel" aria-hidden="true">Current activity</span>
    <div class="today-head">
      <span class="eyebrow" id="today-h"><span class="live-dot" aria-hidden="true"></span>FORUS Today</span>
      <p class="today-sub">Latest from across the FORUS ecosystem.</p>
      <a class="link" href="forus-today.html">View FORUS Today ${icon.arrow}</a>
    </div>
    <div class="today-grid">
      <a class="today-feature reveal" href="${f.slug}">
        ${f.image ? `<div class="today-media">${newsImg(f, '(max-width: 860px) 100vw, 56vw')}</div>` : ''}
        <div class="today-meta">${bigDate(f)}<span class="cat">${f.categoryLabel}</span></div>
        <h2>${f.short}</h2>
        <span class="link">Read ${icon.arrow}</span>
      </a>
      <div class="today-side">
        ${rest.map((n, i) => `<a class="today-item reveal" data-delay="${i + 1}" href="${n.slug}">
          ${bigDate(n, 'sm')}
          <div><span class="cat">${n.categoryLabel}</span><h3>${n.short}</h3></div>
          ${n.image ? `<div class="today-thumb">${newsImg(n, '96px')}</div>` : ''}
        </a>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* Numbered typographic list with a rail */
export function ladder(items, cls = '') {
  return `<ol class="ladder rail ${cls}">${items.map((it, i) => `<li class="reveal" data-delay="${i + 1}"><span class="num">0${i + 1}</span><div><h3>${it.title}</h3><p>${it.line || it.copy}</p></div></li>`).join('')}</ol>`;
}

/* FORUS.coop feature without a box */
export function featureSplit({ eyebrow = 'Cooperative ecosystem', status = 'live', statusLabel = 'Live', title = 'FORUS.coop', lead = 'Digital infrastructure for the cooperative economy.', cta, img = 'market', focus = '50% 40%', alt = 'Traders and customers at a busy city market' }) {
  return `
    <div class="feature-split">
      <div class="fs-media reveal" style="--focus:${focus}">
        <div class="fs-clip"><img src="assets/img/${img}-1200.jpg" srcset="assets/img/${img}-720.jpg 720w, assets/img/${img}-1200.jpg 1200w, assets/img/${img}-1672.jpg 1672w" sizes="(max-width: 860px) 100vw, 50vw" alt="${esc(alt)}" loading="lazy"></div>
        <span class="fs-ring" aria-hidden="true"></span>
        <span class="fs-mark" aria-hidden="true">${MARK_COLOUR}</span>
      </div>
      <div class="fs-body reveal" data-delay="1">
        <span class="eyebrow">${eyebrow} ${statusTag(status, statusLabel)}</span>
        <h3>${title}</h3>
        <p class="lead">${lead}</p>
        ${cta}
      </div>
    </div>`;
}

/* Implementation rows: concise evidence list */
export function implRows(items) {
  return `
    <div class="impl-rows">
      ${items.map((it, i) => `<a class="impl-row reveal" data-delay="${Math.min(i + 1, 4)}" style="--i:${i}" href="${it.href}"${it.ext ? ' target="_blank" rel="noopener"' : ''}>
        <span class="impl-num">0${i + 1}</span>
        <div><h3>${it.title}</h3><p class="impl-where">${it.where}</p></div>
        ${statusTag(it.status, it.statusLabel)}
        <span class="row-arrow">${it.ext ? icon.ext : icon.arrow}</span>
      </a>`).join('')}
    </div>`;
}

/* Story as typography: oversized numeral, short copy */
export function storyTypo() {
  return `
<section class="section on-grey story-typo">
  <div class="story-mark" aria-hidden="true">${MARK_COLOUR}</div>
  <div class="container">
    <div class="story-grid">
      <div class="story-num reveal" aria-hidden="true" data-count="10">10<small>years in the making</small></div>
      <div class="story-body reveal" data-delay="1">
        <span class="eyebrow">Our story</span>
        <h2 class="display-3">Ten years in the making.</h2>
        <div class="copy">
          <p>FORUS began with a simple question: what would digital infrastructure look like if more people and organisations could participate in the value it creates?</p>
          <p>Years of research, development, partnerships and real-world experimentation have since become a growing technology and infrastructure ecosystem.</p>
        </div>
        <a class="link" href="our-story.html">Discover our story ${icon.arrow}</a>
      </div>
    </div>
  </div>
</section>`;
}

/* About: the layered statement */
export function layersMoment() {
  return `
<section class="layers" aria-labelledby="layers-h">
  <div class="layers-top">
    <div class="container">
      <span class="eyebrow reveal">Technology underneath. Opportunity above it.</span>
      <h2 class="display-2 reveal" data-delay="1" id="layers-h">Opportunity above it.</h2>
      <p class="copy lead reveal" data-delay="2">What people experience: participation, services, trade and connection.</p>
    </div>
  </div>
  <div class="layers-line" aria-hidden="true"><div class="container"><span class="layers-label">The surface</span></div></div>
  <div class="layers-bottom">
    <div class="bg-mark" aria-hidden="true">${MARK_WHITE}</div>
    <div class="container">
      <h2 class="display-2 reveal">Technology underneath.</h2>
      <ul class="word-row reveal" data-delay="1"><li>Identity</li><li>Payments</li><li>Platforms</li><li>Data</li><li>Connectivity</li><li>Institutional systems</li></ul>
      <p class="copy reveal" data-delay="2">Much of the technology that powers an economy sits out of sight. FORUS brings these elements together within an interoperable infrastructure environment designed to make participation simpler and economic networks more connected.</p>
    </div>
  </div>
</section>`;
}

/* Timeline v2: large dates as the spine */
export function timeline2(items) {
  return `<div class="tl2">${items.map(t => `
    <div class="tl2-item${t.now ? ' is-now' : ''}">
      <div class="tl2-date"><time class="bigdate" datetime="${t.iso || ''}"><span class="bd-day">${t.day}</span><span class="bd-my">${t.my}</span></time></div>
      <div class="tl2-spine" aria-hidden="true"><span class="tl2-node"></span></div>
      <div class="tl2-body">${t.cat ? `<span class="cat">${t.cat}</span>` : ''}<h3>${t.title}</h3><p>${t.copy}</p>${t.href ? `<a class="link" href="${t.href}" style="margin-top:14px">Read the announcement ${icon.arrow}</a>` : ''}</div>
    </div>`).join('')}</div>`;
}

/* Capability rows */
export function capRows(items) {
  return `<div class="cap-rows">${items.map((c, i) => `
    <div class="cap-row reveal" data-delay="${(i % 2) + 1}">
      <span class="num">0${i + 1}</span>
      <div><h3>${c.title}</h3><p class="cap-copy">${c.copy}</p></div>
      <ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('')}</div>`;
}

/* Theme rows (audience pages) */
export function themeRows(items) {
  return `<div class="theme-rows">${items.map((t, i) => `<div class="theme-row reveal" data-delay="${(i % 3) + 1}"><span class="num">0${i + 1}</span><h3>${t.title}</h3><p>${t.copy}</p></div>`).join('')}</div>`;
}

export function heroRing() { return '<div class="hero-ring" aria-hidden="true"><span></span><span></span><span></span></div>'; }


/* ---------- Motion pass components ---------- */
const MARK_PATHS = [...MARK_COLOUR.matchAll(/<path fill="([^"]+)" d="([^"]+)"\/>/g)].map(m => ({ fill: m[1], d: m[2] }));
/* Approximate centroid of each arrow in the mark's own coordinate space (viewBox 1503.72 x 1500). */
const ARROW_CENTRES = [[752, 1253], [752, 246], [1257, 749], [246, 750], [1132, 333], [332, 333], [1165, 1164], [335, 1165]];

/* Hero stage: the eight arrows of the real mark start scattered and converge as you scroll. */
export function heroStage() {
  if (MARK_PATHS.length !== 8) throw new Error('Expected eight arrow paths in the FORUS mark');
  return `
<section class="stage-hero" data-scene="pin" data-hero-stage>
  <div class="stage-sticky">
    <div class="hero-network" aria-hidden="true"></div>
    <div class="hero-mark-wrap" aria-hidden="true">
      <svg class="hero-arrows" viewBox="0 0 1503.72 1500"><g class="arw-all">${MARK_PATHS.map(p => `<path fill="${p.fill}" d="${p.d}"/>`).join('')}</g></svg>
    </div>
    <div class="container hero-copy">
      <span class="eyebrow hero-in">FORUS Digital</span>
      <h1 class="display" data-split>The infrastructure layer for inclusive digital economies.</h1>
      <p class="lead hero-in" data-delay="2">FORUS builds the digital infrastructure that helps institutions, networks and communities connect, coordinate and participate in shared economic opportunity.</p>
      <div class="btn-group hero-in" data-delay="3">
        <a class="btn btn-primary" href="about.html">Explore FORUS ${icon.arrow}</a>
        <a class="btn btn-outline" href="partner.html">Partner with FORUS</a>
      </div>
    </div>
    <p class="hero-tagline"><span class="container" style="display:block"><span>Connect the network.</span> <span>Coordinate value.</span> <span>Unlock shared opportunity.</span></span></p>
    <div class="container hero-foot" aria-hidden="true"><span class="scroll-cue">Scroll to connect <i></i></span></div>
  </div>
</section>`;
}

/* What FORUS is: intro, then a pinned four-step build of the foundations. */
export function pillarsScroll() {
  const colours = ['#FBBA00', '#F5971B', '#DD062B', '#692482', '#0844AF', '#027DB8', '#81CAC9', '#8DBF2E'];
  const R = 230, c = 300;
  const pts = colours.map((col, i) => { const a = (-90 + i * 45) * Math.PI / 180; return [c + R * Math.cos(a), c + R * Math.sin(a), col]; });
  const ring = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
  const plane = (y, k, fill) => `<polygon class="dg-plane" style="--k:${k}" fill="${fill}" points="300,${y - 24} 390,${y} 300,${y + 24} 210,${y}"/>`;
  return `
<section class="scene-pillars" aria-labelledby="what-h">
  <div class="container pl-intro">
    <div class="split">
      <div>
        <span class="eyebrow reveal">What FORUS is</span>
        <h2 class="display-2" id="what-h">Infrastructure designed to connect more.</h2>
      </div>
      <div class="reveal" data-delay="1">
        <div class="copy lead">
          <p>FORUS brings identity, transactions, digital platforms and connected services together within one interoperable infrastructure environment.</p>
          <p>Built to support different organisations, markets and economic communities, the same underlying infrastructure can enable many different experiences.</p>
        </div>
        <a class="link" href="infrastructure.html">Explore the infrastructure ${icon.arrow}</a>
      </div>
    </div>
  </div>
  <div class="pl-track" data-scene="pin" data-steps="4">
    <div class="pl-sticky">
      <div class="container pl-grid">
        <div class="pl-left">
          <div class="pl-count" aria-hidden="true"><span class="pl-roll"><span>01<br>02<br>03<br>04</span></span><span>/ 04</span><span class="pl-label">Four foundations</span></div>
          <div class="pl-words">
            ${pillars.map((p, i) => `<div class="pl-word${i === 0 ? ' is-active' : ''}" data-step-item><h3 data-split="chars" data-split-manual>${p.title}</h3><p>${p.line}</p></div>`).join('')}
          </div>
          <div class="pl-progress" aria-hidden="true">${[0, 1, 2, 3].map(i => `<i data-range="${i / 4} ${(i + 1) / 4}"></i>`).join('')}</div>
        </div>
        <div class="pl-figure" aria-hidden="true">
          <svg viewBox="0 0 600 600">
            <g data-range="0 .18">
              <circle class="dg-stroke dg-faint" cx="300" cy="300" r="122" pathLength="1"/>
              <circle class="dg-stroke" cx="300" cy="300" r="64" pathLength="1"/>
              <circle class="dg-pop" cx="300" cy="300" r="11" fill="#1E254A"/>
              <g class="dg-fade"><circle class="dg-pulse" cx="300" cy="300" r="64"/></g>
            </g>
            <g data-range=".26 .44">
              <line class="dg-stroke" x1="236" y1="300" x2="70" y2="300" pathLength="1"/>
              <line class="dg-stroke" x1="364" y1="300" x2="530" y2="300" pathLength="1"/>
              <g class="dg-pop"><circle cx="70" cy="300" r="20" fill="#fff" stroke="#1E254A" stroke-width="1.5"/><circle cx="70" cy="300" r="6" fill="#027DB8"/></g>
              <g class="dg-pop"><circle cx="530" cy="300" r="20" fill="#fff" stroke="#1E254A" stroke-width="1.5"/><circle cx="530" cy="300" r="6" fill="#0844AF"/></g>
              <g class="dg-fade"><circle class="dg-dot" cx="70" cy="300" r="5"/><circle class="dg-dot d2" cx="530" cy="300" r="5"/></g>
            </g>
            <g data-range=".51 .69">
              ${plane(496, 0, 'rgba(129,202,201,.45)')}
              ${plane(474, 1, 'rgba(2,125,184,.28)')}
              ${plane(452, 2, 'rgba(255,255,255,.92)')}
            </g>
            <g data-range=".76 .9">
              <path class="dg-stroke" d="${ring}" pathLength="1"/>
              ${pts.map(p => `<line class="dg-stroke dg-faint" x1="300" y1="300" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" pathLength="1"/>`).join('')}
            </g>
            ${pts.map((p, i) => `<g class="dg-node" data-range="${(.8 + i * .022).toFixed(3)} ${(.86 + i * .022).toFixed(3)}"><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="24" fill="none" stroke="${p[2]}" stroke-opacity=".35" stroke-width="1.5"/><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="12" fill="${p[2]}"/></g>`).join('')}
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

/* Breadth band: two rows of type that move against each other with scroll. */
export function tagBand(words = ['Cooperatives', 'Financial institutions', 'Governments', 'Public programmes', 'Enterprises', 'Industry networks', 'Technology partners']) {
  const mark = MARK_COLOUR.replace('<svg ', '<svg aria-hidden="true" ');
  const row = (list) => list.map(w => `<span>${w}${mark}</span>`).join('');
  const r1 = row(words), r2 = row([...words].reverse());
  return `
<section class="tag-band">
  <p class="visually-hidden">FORUS infrastructure can support ${words.join(', ').toLowerCase()}.</p>
  <div class="tb-row r1" aria-hidden="true">${r1}${r1}${r1}</div>
  <div class="tb-row r2" aria-hidden="true">${r2}${r2}${r2}</div>
</section>`;
}

/* Who we work with: a horizontal track pinned on desktop. Each panel carries one arrow of the mark in its division colour. */
export function audienceTrack(items = audiences) {
  const pick = [5, 7, 4, 1, 2, 6];
  return `
<section class="scene-aud on-dark" aria-labelledby="aud-h">
  <div class="aud-wrap" data-scene="pin" data-htrack>
    <div class="aud-sticky">
      <div class="aud-track">
        <div class="aud-intro">
          <span class="eyebrow">Who we work with</span>
          <h2 id="aud-h">Different organisations. Shared infrastructure.</h2>
          <p>Six routes into FORUS. Find yours.</p>
          <span class="aud-hint" aria-hidden="true">Scroll <i></i></span>
        </div>
        ${items.map((a, i) => {
          const k = pick[i % pick.length], [ax, ay] = ARROW_CENTRES[k];
          return `<a class="aud-panel" href="${a.href}" style="--accent:${MARK_PATHS[k].fill}">
          <div class="aud-body"><span class="aud-num">0${i + 1}</span><h3>${a.title}</h3><p>${a.line}</p><span class="aud-go">Explore ${icon.arrow}</span></div>
          <div class="aud-art" aria-hidden="true"><svg viewBox="0 0 1503.72 1500" style="--ax:-${(ax / 1503.72 * 100).toFixed(2)}%;--ay:-${(ay / 1500 * 100).toFixed(2)}%">${MARK_PATHS.map((p, j) => `<path${j === k ? ' class="on"' : ''} d="${p.d}"/>`).join('')}</svg></div>
        </a>`;
        }).join('')}
      </div>
    </div>
  </div>
</section>`;
}
