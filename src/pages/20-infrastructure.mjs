import { icon, pageHero, split, statement, ideas, pillarsSection, capRows, principles, ctaBand, ctaFinal } from '../components.mjs';
import { pillars } from '../data.mjs';

const overview = {
  file: 'infrastructure.html', title: 'Infrastructure', active: 'infrastructure', theme: 'dark',
  description: 'FORUS provides an interoperable infrastructure layer through which institutions and networks can build connected digital experiences, services and economic ecosystems.',
  body: `
${pageHero({
  eyebrow: 'Infrastructure',
  title: 'Connect systems. Connect organisations. Connect economies.',
  lead: 'FORUS provides an interoperable infrastructure layer through which institutions and networks can build connected digital experiences, services and economic ecosystems.',
  ctas: `<a class="btn btn-primary" href="capabilities.html">Capabilities ${icon.arrow}</a><a class="btn btn-outline" href="trust-interoperability.html">Trust and interoperability</a>`,
  dark: true
})}
<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Four foundations</span>
      <h2 class="reveal" data-delay="1">Everything FORUS builds rests on four foundations.</h2>
    </div>
    ${ideas(pillars.map(p => ({ key: p.key, title: p.title, copy: p.copy })))}
  </div>
</section>
${split({
  eyebrow: 'A layer, not an app',
  title: 'Infrastructure, not a single application.',
  copy: `<p>FORUS can sit beneath different user experiences, brands and institutional environments.</p>
    <p>A cooperative platform may look completely different from a financial institution, public programme or industry network while drawing on the same underlying infrastructure.</p>`,
  cta: `<div class="btn-group"><a class="btn btn-outline" href="ecosystem.html">See the ecosystem ${icon.arrow}</a></div>`,
  surface: 'on-paper'
})}
${pillarsSection({ eyebrow: 'How it fits together', title: 'One infrastructure. Many possibilities.', cta: false })}
<section class="section">
  <div class="container">
    <div class="split">
      <div class="split-sticky reveal">
        <span class="eyebrow">Go deeper</span>
        <h2>Outcomes first. Detail on request.</h2>
      </div>
      <div class="reveal" data-delay="1">
        <div class="copy lead">
          <p>The capabilities page describes what the infrastructure enables, grouped by outcome rather than by product. Trust and interoperability explains how FORUS is designed to connect responsibly.</p>
          <p>Technical documentation, APIs and developer resources are available to approved partners.</p>
        </div>
        <div class="btn-group" style="margin-top:32px">
          <a class="btn btn-primary" href="capabilities.html">Capabilities ${icon.arrow}</a>
          <a class="btn btn-outline" href="technical-resources.html">Technical resources</a>
        </div>
      </div>
    </div>
  </div>
</section>
${ctaFinal()}
`
};

const capabilities = {
  file: 'capabilities.html', title: 'Capabilities', active: 'infrastructure', theme: 'light',
  description: 'What FORUS infrastructure enables, grouped by outcome: identity and access, money and transactions, platforms and operations, commerce and participation, data and intelligence, integration.',
  body: `
${pageHero({
  eyebrow: 'Infrastructure · Capabilities',
  title: 'What the infrastructure enables.',
  lead: 'Six capability groups, described by outcome rather than by product. Each is drawn on differently by each organisation, market and deployment.'
})}
<section class="section" style="padding-top:0">
  <div class="container">
    ${capRows([
      { glyph: 'identity', title: 'Identity and access', copy: 'Trusted points of participation for people and organisations, with secure sign-in and organisation profiles.', points: ['Person and organisation identity', 'Secure sign-in across services', 'Organisation and membership profiles'] },
      { glyph: 'money', title: 'Money and transactions', copy: 'The movement and coordination of value between participants through approved providers.', points: ['Payments, collections and settlements', 'Contributions, levies and payouts', 'Reconciliation and settlement records'] },
      { glyph: 'operations', title: 'Platforms and operations', copy: 'Digital environments for organisations to communicate, organise and run their operations.', points: ['Member communication and engagement', 'Governance notices and decisions', 'Teams, roles, workflow and reporting'] },
      { glyph: 'commerce', title: 'Commerce and participation', copy: 'Ways for participants to trade, buy together, reach markets and take part in economic activity.', points: ['Products, inventory and orders', 'Collective procurement and market access', 'Sector operations for agriculture, retail and transport'] },
      { glyph: 'data', title: 'Data and intelligence', copy: 'Activity records and reporting that help organisations understand their networks and prepare for finance.', points: ['Activity and membership reporting', 'Provenance and traceability records', 'Finance-readiness evidence'] },
      { glyph: 'integration', title: 'Integration', copy: 'Approved interfaces through which partners and existing systems connect to FORUS infrastructure.', points: ['Developer and API access', 'Webhooks and event integration', 'Approved external integrations'] }
    ])}
    <p class="footnote reveal">Specific capabilities, availability and implementation requirements vary by market, partner and deployment. Payments and regulated financial services require provider, operational and, where applicable, regulatory approvals.</p>
  </div>
</section>
${ctaBand({ title: 'Explore what could be built on FORUS infrastructure.', copy: 'Tell us about your organisation and what you would like to connect.', secondary: `<a class="btn btn-outline" href="trust-interoperability.html">Trust and interoperability</a>` })}
`
};

const trust = {
  file: 'trust-interoperability.html', title: 'Trust & Interoperability', active: 'infrastructure', theme: 'dark',
  description: 'Infrastructure designed to connect responsibly: secure by design, built for interoperability, market-aware and responsibly deployed.',
  body: `
${pageHero({
  eyebrow: 'Infrastructure · Trust and interoperability',
  title: 'Infrastructure designed to connect responsibly.',
  lead: 'Trust is a condition of participation. FORUS is designed so that institutions, networks and communities can connect with confidence in how the infrastructure behaves.',
  dark: true
})}
<section class="section">
  <div class="container">
    ${principles([
      { title: 'Secure by design', copy: 'Identity, access and transaction flows are designed with security as a starting condition. Controls are applied across the infrastructure rather than added at the edge of any single application.' },
      { title: 'Built for interoperability', copy: 'FORUS is designed to work alongside the systems institutions already run. Integration happens through approved interfaces so that organisations connect without having to be rebuilt.' },
      { title: 'Market-aware', copy: 'Availability, integrations and requirements differ by country and sector. Each deployment is scoped to its operating market and the approvals that apply there.' },
      { title: 'Responsible deployment', copy: 'Capabilities move from planned to pilot to available under explicit conditions. Payments and regulated financial services are activated only with the appropriate providers and approvals in place.' }
    ], 'two')}
  </div>
</section>
${statement({
  eyebrow: 'A note on claims',
  title: 'We describe what is in place, and we say when something is still in progress.',
  copy: '<p>FORUS does not publish assurances, certifications or regulatory approvals that have not been verified for the deployment in question. Detailed security, compliance and integration information is shared with partners during engagement.</p>',
  cta: `<a class="btn btn-primary" href="partner.html">Talk to FORUS ${icon.arrow}</a><a class="btn btn-outline" href="technical-resources.html">Technical resources</a>`
})}
${ctaFinal()}
`
};

export default [overview, capabilities, trust];
