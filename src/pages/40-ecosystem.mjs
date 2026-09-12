import { icon, pageHero, split, statement, featureSplit, implList, cases, blocks, principles, ctaBand, ctaFinal, statusTag } from '../components.mjs';
import { site, implementations, partners } from '../data.mjs';

const overview = {
  file: 'ecosystem.html', title: 'Ecosystem', active: 'ecosystem', theme: 'light',
  description: 'FORUS provides shared infrastructure that can support different platforms, institutions and economic communities.',
  body: `
${pageHero({
  eyebrow: 'Ecosystem',
  title: 'One infrastructure. Many ecosystems.',
  lead: 'FORUS provides shared infrastructure that can support different platforms, institutions and economic communities.',
  ctas: `<a class="btn btn-primary" href="infrastructure-in-action.html">Infrastructure in action ${icon.arrow}</a><a class="btn btn-outline" href="partnerships.html">Partnerships</a>`
})}
${statement({
  eyebrow: 'Key message',
  title: 'Different experiences. A connected foundation.',
  copy: '<p>FORUS does not require every organisation to look the same, operate the same or adopt the same public brand. Each ecosystem keeps its own identity while drawing on the same underlying infrastructure.</p>'
})}
<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">The cooperative ecosystem</span>
      <h2 class="reveal" data-delay="1">FORUS.coop is one major ecosystem built on FORUS infrastructure.</h2>
    </div>
    ${featureSplit({
      lead: 'Digital infrastructure for the cooperative economy, operated by FORUS Digital Cooperative. The public-facing cooperative ecosystem remains separate from the corporate group.',
      cta: `<div class="btn-group"><a class="btn btn-primary" href="${site.coop}" target="_blank" rel="noopener">Explore FORUS.coop ${icon.ext}</a><a class="btn btn-outline" href="cooperatives.html">For cooperatives</a></div>`
    })}
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Implementations and partnerships</span>
      <h2 class="reveal" data-delay="1">Where the infrastructure is being applied.</h2>
      <p class="lead reveal" data-delay="2">Each item carries its current status. We do not blur the line between what is live, what is in pilot and what is in development.</p>
    </div>
    ${implList(implementations.filter(i => i.key !== 'coop'))}
    <div class="section-foot reveal"><a class="link" href="infrastructure-in-action.html">Full detail on each implementation ${icon.arrow}</a></div>
  </div>
</section>
${ctaFinal()}
`
};

const partnerships = {
  file: 'partnerships.html', title: 'Partnerships', active: 'ecosystem', theme: 'dark',
  description: 'FORUS works with organisations that bring sector knowledge, institutional capability, distribution, technology and trusted relationships into the ecosystems we build together.',
  body: `
${pageHero({
  eyebrow: 'Ecosystem · Partnerships',
  title: 'Infrastructure grows through connection.',
  lead: 'FORUS works with organisations that bring sector knowledge, institutional capability, distribution, technology and trusted relationships into the ecosystems we build together.',
  ctas: `<a class="btn btn-primary" href="partner.html">Partner with FORUS ${icon.arrow}</a>`,
  dark: true
})}
<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Current partners</span>
      <h2 class="reveal" data-delay="1">Organisations we work with today.</h2>
    </div>
    ${blocks(partners.map(p => ({ title: p.name, copy: p.role, href: p.href, label: 'Related announcement' })))}
    <p class="footnote reveal">Partners are listed once an agreement has been signed and announced. Partner logos appear only with the partner’s approval.</p>
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">How we partner</span>
      <h2 class="reveal" data-delay="1">What partners bring, and what FORUS brings.</h2>
    </div>
    ${principles([
      { title: 'Sector knowledge', copy: 'Partners understand their members, markets and the realities of their sector. FORUS builds the infrastructure around that knowledge.' },
      { title: 'Institutional capability', copy: 'Federations, apex bodies, institutions and public organisations bring governance, legitimacy and reach.' },
      { title: 'Distribution and trust', copy: 'Established relationships with the people and organisations that will use what is built together.' },
      { title: 'Technology', copy: 'Technology partners integrate through approved interfaces and extend what the infrastructure can do.' },
      { title: 'Implementation', copy: 'FORUS provides the infrastructure, the platform experience and implementation support scoped to each market.' },
      { title: 'Shared outcomes', copy: 'Each partnership is defined by what it connects and the participation it enables, with explicit status at every stage.' }
    ])}
  </div>
</section>
${ctaBand({ title: 'What could we build together?', copy: 'Tell us about your organisation, your network and what you would like to connect.', surface: '' })}
`
};

const inAction = {
  file: 'infrastructure-in-action.html', title: 'Infrastructure in Action', active: 'ecosystem', theme: 'light',
  description: 'From architecture to application: each FORUS implementation with the opportunity, the role of FORUS, what is being built and its current status.',
  body: `
${pageHero({
  eyebrow: 'Ecosystem · Infrastructure in action',
  title: 'From architecture to application.',
  lead: 'Each implementation shows the opportunity, the role of FORUS, what is being built and its current status. Status labels are explicit and are updated as work progresses.',
  facts: [['Live', 'public and operating'], ['Pilot', 'controlled or early deployment'], ['Partnership', 'agreement signed and announced'], ['In development', 'being built, not yet in operation']]
})}
<section class="section" style="padding-top:0">
  <div class="container">
    ${cases(implementations)}
  </div>
</section>
${ctaBand({ title: 'Building something that belongs here?', copy: 'FORUS works with cooperatives, institutions, networks and technology partners on implementations across sectors and regions.' })}
`
};

export default [overview, partnerships, inAction];
