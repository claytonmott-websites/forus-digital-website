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
        <div class="nav-menu" role="group" aria-label="${n.label}">
          ${n.items.map(i => i.ext
            ? `<a class="ext" href="${i.href}" target="_blank" rel="noopener">${i.label}${icon.ext}</a>`
            : `<a href="${i.href}">${i.label}</a>`).join('\n          ')}
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
<link rel="stylesheet" href="assets/css/site.css">
</head>
<body>
${header(active, theme)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
${scripts.map(s => `<script src="${s}" defer></script>`).join('\n')}
</body>
</html>
`;
}

/* ---------- Page hero ---------- */
export function pageHero({ eyebrow, title, lead, ctas = '', dark = false, media = null, facts = null, mark = true, rule = false }) {
  const inner = `
      <span class="eyebrow reveal">${eyebrow}</span>
      <h1 class="reveal" data-delay="1">${title}</h1>
      ${lead ? `<p class="lead reveal" data-delay="2">${lead}</p>` : ''}
      ${ctas ? `<div class="btn-group reveal" data-delay="3">${ctas}</div>` : ''}`;
  const body = media ? `
    <div class="page-hero-grid">
      <div>${inner}</div>
      <div class="page-hero-media reveal" data-delay="2" style="--focus:${media.focus || '50% 50%'}">
        <img src="assets/img/${media.src}-1200.jpg" srcset="assets/img/${media.src}-720.jpg 720w, assets/img/${media.src}-1200.jpg 1200w" sizes="(max-width: 860px) 100vw, 40vw" alt="${esc(media.alt)}" fetchpriority="high">
      </div>
    </div>` : inner;
  return `
<section class="page-hero${dark ? ' on-dark' : ''}${media ? ' has-media' : ''}">
  ${mark && !media ? `<div class="hero-mark" aria-hidden="true">${dark ? MARK_WHITE : MARK_COLOUR}</div>` : ''}
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
  const spokes = pts.map(p => `<line class="p-spoke" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}"/>`).join('');
  const flows = pts.map(p => `<line class="p-flow" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}"/>`).join('');
  const nodes = pts.map((p, i) => {
    const anchor = i === 1 ? 'start' : i === 3 ? 'end' : 'middle';
    const lx = i === 1 ? p[0] + 34 : i === 3 ? p[0] - 34 : p[0];
    const ly = i === 0 ? p[1] - 34 : i === 2 ? p[1] + 44 : p[1] + 5;
    return `<circle class="p-node" cx="${p[0]}" cy="${p[1]}" r="18"/><circle class="p-node-dot" cx="${p[0]}" cy="${p[1]}" r="4"/><text class="p-label" x="${lx}" y="${ly}" text-anchor="${anchor}">${p[2]}</text>`;
  }).join('');
  const mark = MARK_WHITE.replace('<svg ', '<svg x="238" y="238" width="124" height="124" class="p-mark" ');
  return `
    <div class="pillars-figure reveal" aria-hidden="true">
      <svg viewBox="0 0 600 600">
        <circle class="p-ring" cx="${cx}" cy="${cy}" r="${R}"/>
        <circle class="p-ring inner" cx="${cx}" cy="${cy}" r="96"/>
        <circle class="p-ring" cx="${cx}" cy="${cy}" r="${R + 60}" stroke-dasharray="2 10"/>
        ${spokes}
        <g>${flows}</g>
        ${nodes}
        <circle cx="${cx}" cy="${cy}" r="84" fill="#1E254A" stroke="rgba(255,255,255,.3)"/>
        ${mark}
      </svg>
    </div>`;
}

export function pillarsSection({ eyebrow = 'Infrastructure', title = 'One infrastructure. Many possibilities.', cta = true } = {}) {
  return `
<section class="section on-dark pillars">
  <div class="bg-mark" aria-hidden="true">${MARK_WHITE}</div>
  <div class="container">
    <div class="pillars-grid">
      <div>
        <span class="eyebrow reveal">${eyebrow}</span>
        <h2 class="reveal" data-delay="1">${title}</h2>
        <div class="pillar-list" style="margin-top:48px">
          ${pillars.map((p, i) => `<div class="pillar reveal" data-delay="${i + 1}">
            <span class="pillar-num">0${i + 1}</span>
            <div><h3>${p.title}</h3><p>${p.line}</p></div>
          </div>`).join('')}
        </div>
        ${cta ? `<div class="btn-group reveal" style="margin-top:40px"><a class="btn btn-primary" href="infrastructure.html">Explore the infrastructure ${icon.arrow}</a></div>` : ''}
      </div>
      ${pillarsFigure()}
    </div>
  </div>
</section>`;
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
  return items.map(it => `
    <article class="case" id="${it.key}">
      <div class="case-side reveal">
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
