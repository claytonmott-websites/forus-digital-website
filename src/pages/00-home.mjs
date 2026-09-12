import { icon, ideas, routes, pillarsSection, featurePanel, implList, newsGrid, ctaFinal, markColour } from '../components.mjs';
import { site, pillars, implementations } from '../data.mjs';

const body = `
<section class="hero-home">
  <div class="hero-network" aria-hidden="true"></div>
  <div class="container">
    <span class="eyebrow hero-in">FORUS Digital</span>
    <h1 class="display hero-in" data-delay="1">The infrastructure layer for inclusive digital economies.</h1>
    <p class="lead hero-in" data-delay="2">FORUS builds the digital infrastructure that helps institutions, networks and communities connect, coordinate and participate in shared economic opportunity.</p>
    <div class="btn-group hero-in" data-delay="3">
      <a class="btn btn-primary" href="about.html">Explore FORUS ${icon.arrow}</a>
      <a class="btn btn-outline" href="partner.html">Partner with FORUS</a>
    </div>
    <div class="hero-brandline hero-in" data-delay="3">
      <span>${site.tagline}</span>
      <span class="scroll-cue">Scroll ${icon.down}</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split-sticky reveal">
        <span class="eyebrow">What FORUS is</span>
        <h2>Infrastructure designed to connect more.</h2>
      </div>
      <div class="reveal" data-delay="1">
        <div class="copy lead">
          <p>FORUS brings identity, transactions, digital platforms and connected services together within one interoperable infrastructure environment.</p>
          <p>Built to support different organisations, markets and economic communities, the same underlying infrastructure can enable many different experiences.</p>
        </div>
        <a class="link" href="infrastructure.html" style="margin-top:32px">Explore the infrastructure ${icon.arrow}</a>
      </div>
    </div>
    <div style="margin-top:clamp(56px,6vw,96px)">
      ${ideas(pillars.map(p => ({ key: p.key, title: p.title, copy: p.copy })))}
    </div>
  </div>
</section>

<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Who we work with</span>
      <h2 class="reveal" data-delay="1">Different organisations. Shared infrastructure.</h2>
    </div>
    ${routes()}
  </div>
</section>

${pillarsSection()}

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Infrastructure in action</span>
      <h2 class="reveal" data-delay="1">One infrastructure. Many ecosystems.</h2>
      <p class="lead reveal" data-delay="2">FORUS infrastructure can support different organisations, sectors and economic networks without requiring them to operate in the same way or under the same brand.</p>
    </div>
    ${featurePanel({
      badge: 'Cooperative ecosystem',
      title: 'FORUS.coop',
      copy: '<p>Digital infrastructure for the cooperative economy. The cooperative implementation of FORUS infrastructure, connecting cooperatives, federations and their members through a shared digital environment.</p>',
      cta: `<div class="btn-group"><a class="btn btn-primary" href="${site.coop}" target="_blank" rel="noopener">Explore FORUS.coop ${icon.ext}</a></div>`,
      img: 'market', focus: '50% 40%', alt: 'Traders and customers at a busy city market'
    })}
    ${implList(implementations.filter(i => i.key !== 'coop').slice(0, 4))}
    <div class="section-foot reveal"><a class="link" href="infrastructure-in-action.html">See infrastructure in action ${icon.arrow}</a></div>
  </div>
</section>

<section class="section on-grey story-band">
  <div class="container">
    <div class="split reverse">
      <div class="story-media reveal" style="--focus:50% 45%">
        <img src="assets/img/agriculture-1200.jpg" srcset="assets/img/agriculture-720.jpg 720w, assets/img/agriculture-1200.jpg 1200w, assets/img/agriculture-1672.jpg 1672w" sizes="(max-width: 860px) 100vw, 50vw" alt="Members of an agricultural cooperative standing together on a hillside" loading="lazy">
        <span class="mark-tag" aria-hidden="true">${markColour}</span>
      </div>
      <div class="reveal" data-delay="1">
        <span class="eyebrow">Our story</span>
        <h2>Ten years in the making.</h2>
        <div class="copy" style="margin-top:28px">
          <p>FORUS began with a simple question: what would digital infrastructure look like if more people and organisations could participate in the value it creates?</p>
          <p>That question has shaped years of research, development, partnerships and real-world experimentation across identity, payments, commerce, institutional infrastructure and connected economic systems.</p>
          <p>Today, those ideas have become a growing technology and infrastructure ecosystem.</p>
        </div>
        <a class="link" href="our-story.html" style="margin-top:32px">Discover our story ${icon.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">FORUS Today</span>
      <h2 class="reveal" data-delay="1">Follow what we’re building.</h2>
      <p class="lead reveal" data-delay="2">Partnerships, announcements, independent coverage and perspectives from across the FORUS ecosystem.</p>
    </div>
    ${newsGrid()}
    <div class="section-foot reveal"><a class="btn btn-outline" href="forus-today.html">View FORUS Today ${icon.arrow}</a></div>
  </div>
</section>

${ctaFinal()}
`;

export default {
  file: 'index.html',
  title: '',
  description: site.boilerplate,
  active: '',
  theme: 'light',
  scripts: ['assets/js/network.js'],
  body
};
