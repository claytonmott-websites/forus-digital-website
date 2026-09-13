import { icon, heroStage, todaySection, pillarsScroll, tagBand, audienceTrack, pillarsSection, featureSplit, implRows, storyTypo, ctaFinal } from '../components.mjs';
import { site, implementations } from '../data.mjs';

const body = `
${heroStage()}

${todaySection()}

${pillarsScroll()}

${tagBand()}

${audienceTrack()}

${pillarsSection({ list: false, title: 'One infrastructure. Many possibilities.', line: 'Identity, transactions, platforms and connectivity, drawn together in one interoperable environment.' })}

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
