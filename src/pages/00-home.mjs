import { icon, todaySection, ladder, routes, pillarsSection, featureSplit, implRows, storyTypo, ctaFinal } from '../components.mjs';
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

${todaySection()}

<section class="section" aria-labelledby="what-h">
  <div class="container">
    <div class="statement-xl">
      <span class="eyebrow reveal">What FORUS is</span>
      <h2 class="display-2 reveal" data-delay="1" id="what-h">Infrastructure designed<br>to connect more.</h2>
    </div>
    <div class="ladder-grid">
      <div class="ladder-copy reveal" data-delay="2">
        <div class="copy">
          <p>FORUS brings identity, transactions, digital platforms and connected services together within one interoperable infrastructure environment.</p>
          <p>Built to support different organisations, markets and economic communities, the same underlying infrastructure can enable many different experiences.</p>
        </div>
        <a class="link" href="infrastructure.html">Explore the infrastructure ${icon.arrow}</a>
      </div>
      ${ladder(pillars.map(p => ({ title: p.title, line: p.line })))}
    </div>
  </div>
</section>

<section class="section on-paper" aria-labelledby="who-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Who we work with</span>
      <h2 class="reveal" data-delay="1" id="who-h">Different organisations. Shared infrastructure.</h2>
    </div>
    ${routes()}
  </div>
</section>

${pillarsSection()}

<section class="section" aria-labelledby="action-h">
  <div class="container has-vlabel">
    <span class="vlabel" aria-hidden="true">Evidence</span>
    <div class="section-head">
      <span class="eyebrow reveal">Infrastructure in action</span>
      <h2 class="reveal" data-delay="1" id="action-h">One infrastructure. Many ecosystems.</h2>
      <p class="lead reveal" data-delay="2">FORUS infrastructure can support different organisations, sectors and economic networks without requiring them to operate in the same way or under the same brand.</p>
    </div>
    ${featureSplit({ cta: `<div class="btn-group"><a class="btn btn-primary" href="${site.coop}" target="_blank" rel="noopener">Explore FORUS.coop ${icon.ext}</a></div>` })}
    <div style="margin-top:clamp(56px,6vw,96px)">
      ${implRows(implementations.filter(i => i.key !== 'coop'))}
    </div>
    <div class="section-foot reveal"><a class="link" href="infrastructure-in-action.html">See infrastructure in action ${icon.arrow}</a></div>
  </div>
</section>

${storyTypo()}

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
