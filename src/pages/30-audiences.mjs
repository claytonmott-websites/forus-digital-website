import { icon, pageHero, split, statement, routes, principles, blocks, ctaBand, ctaFinal } from '../components.mjs';
import { site, audiences } from '../data.mjs';

const overview = {
  file: 'who-we-work-with.html', title: 'Who We Work With', active: 'work', theme: 'light',
  description: 'FORUS works with cooperatives, financial institutions, governments, enterprises, networks, investors and media. Different organisations, shared infrastructure.',
  body: `
${pageHero({
  eyebrow: 'Who we work with',
  title: 'Different organisations. Shared infrastructure.',
  lead: 'FORUS infrastructure supports cooperatives, financial institutions, governments and public-sector organisations, enterprises and industry networks. Find your route.'
})}
<section class="section" style="padding-top:0">
  <div class="container">${routes(audiences)}</div>
</section>
${ctaFinal()}
`
};

const audiencePage = ({ file, title, eyebrow, h1, lead, img, focus, alt, statementTitle, statementCopy, themes, primary, secondary, description }) => ({
  file, title, active: 'work', theme: 'light', description,
  body: `
${pageHero({ eyebrow: `Who we work with · ${eyebrow}`, title: h1, lead, media: { src: img, focus, alt }, ctas: `${primary}${secondary}` })}
${statement({ eyebrow: 'How FORUS helps', title: statementTitle, copy: statementCopy, surface: 'on-paper' })}
<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">What the infrastructure can support</span>
      <h2 class="reveal" data-delay="1">Built on a shared foundation.</h2>
    </div>
    ${principles(themes)}
    <p class="footnote reveal">Specific capabilities, availability and implementation requirements vary by market, partner and deployment.</p>
  </div>
</section>
${ctaBand({ title: 'What could we build together?', copy: 'FORUS works with organisations seeking to connect people, systems, services and economic opportunity.' })}
`
});

const cooperatives = audiencePage({
  file: 'cooperatives.html', title: 'Cooperatives', eyebrow: 'Cooperatives',
  h1: 'Shared infrastructure for shared ownership.',
  lead: 'FORUS helps cooperatives connect their people, services and opportunities through a shared digital environment.',
  img: 'community', focus: '50% 45%', alt: 'Members of a cooperative gathered around a table outdoors',
  primary: `<a class="btn btn-primary" href="${site.coop}" target="_blank" rel="noopener">Visit FORUS.coop ${icon.ext}</a>`,
  secondary: `<a class="btn btn-outline" href="partner.html">Partner with FORUS</a>`,
  statementTitle: 'The cooperative economy already exists. The next step is to connect it.',
  statementCopy: '<p>FORUS.coop is the cooperative implementation of FORUS infrastructure, operated by FORUS Digital Cooperative. Cooperatives, federations and apex bodies engage there. Institutions and networks that work with cooperatives can partner with FORUS Digital directly.</p>',
  themes: [
    { title: 'Cooperative identity', copy: 'A shared identity and organisation profile that lets a cooperative be recognised, connected and trusted.' },
    { title: 'Members, communication and governance', copy: 'Member records, notices, engagement and governance decisions in one connected environment.' },
    { title: 'Learning and capability', copy: 'Role-based learning pathways for members, leaders and administrators.' },
    { title: 'Trade and operations', copy: 'Products, inventory, collective procurement and sector operations for agriculture, retail and transport.' },
    { title: 'Payments and finance readiness', copy: 'Collections, contributions and settlements through approved providers, and the records that support finance readiness.' },
    { title: 'Federations and networks', copy: 'Apex bodies and federations supporting many cooperatives at network scale.' }
  ],
  description: 'FORUS helps cooperatives connect their people, services and opportunities through a shared digital environment. Visit FORUS.coop.'
});

const financial = audiencePage({
  file: 'financial-institutions.html', title: 'Financial Institutions', eyebrow: 'Financial institutions',
  h1: 'Extend the reach of financial services.',
  lead: 'FORUS infrastructure can help financial institutions connect services into new communities, platforms and economic networks.',
  img: 'leadership', focus: '50% 40%', alt: 'A team of professionals reviewing documents together in an office',
  primary: `<a class="btn btn-primary" href="partner.html">Partner with FORUS ${icon.arrow}</a>`,
  secondary: `<a class="btn btn-outline" href="trust-interoperability.html">Trust and interoperability</a>`,
  statementTitle: 'New reach, through networks that already have trust.',
  statementCopy: '<p>Cooperatives, industry networks and public programmes bring organised communities and established relationships. FORUS infrastructure gives financial institutions a connected way to serve them, with identity, transaction records and participation flows in place.</p>',
  themes: [
    { title: 'Connected identity', copy: 'Trusted points of participation for people and organisations that services can build on.' },
    { title: 'Payments and settlement', copy: 'Collections, payouts and settlements coordinated through approved providers and institutional partners.' },
    { title: 'Network distribution', copy: 'Reach members and participants of connected networks through the platforms they already use.' },
    { title: 'Finance readiness', copy: 'Activity records, transaction histories and organisation profiles that support finance readiness within networks.' },
    { title: 'Institutional integration', copy: 'Approved interfaces through which institutional systems connect to FORUS infrastructure.' },
    { title: 'Responsible deployment', copy: 'Regulated services are activated only with the appropriate providers and approvals in place.' }
  ],
  description: 'FORUS infrastructure can help financial institutions connect services into new communities, platforms and economic networks.'
});

const government = audiencePage({
  file: 'government-public-sector.html', title: 'Government & Public Sector', eyebrow: 'Government and public sector',
  h1: 'Connect people, programmes and services.',
  lead: 'FORUS provides digital infrastructure that can support connected public programmes, institutional services and economic participation.',
  img: 'participation', focus: '50% 40%', alt: 'People raising their hands during a community meeting',
  primary: `<a class="btn btn-primary" href="partner.html">Partner with FORUS ${icon.arrow}</a>`,
  secondary: `<a class="btn btn-outline" href="infrastructure.html">Explore the infrastructure</a>`,
  statementTitle: 'Common infrastructure beneath many programmes.',
  statementCopy: '<p>Public programmes, institutional services and economic development initiatives often serve the same people through separate systems. FORUS infrastructure provides a connected foundation that programmes can share while keeping their own identity and governance.</p>',
  themes: [
    { title: 'Participant identity', copy: 'Trusted identity and organisation profiles for programme participants, cooperatives and community organisations.' },
    { title: 'Programme delivery', copy: 'Digital environments through which programmes communicate, enrol and coordinate with participants.' },
    { title: 'Economic participation', copy: 'Pathways for cooperatives, small enterprises and community networks to trade and take part in the formal economy.' },
    { title: 'Records and reporting', copy: 'Activity records and reporting that support programme oversight and evidence.' },
    { title: 'Interoperability', copy: 'Designed to connect with existing institutional systems through approved interfaces.' },
    { title: 'Market-aware deployment', copy: 'Each deployment is scoped to its country, sector and the approvals that apply.' }
  ],
  description: 'FORUS provides digital infrastructure that can support connected public programmes, institutional services and economic participation.'
});

const enterprise = audiencePage({
  file: 'enterprise-networks.html', title: 'Enterprise & Networks', eyebrow: 'Enterprise and networks',
  h1: 'Build the infrastructure around your network.',
  lead: 'FORUS enables organisations to connect customers, members, partners, suppliers or participants through shared digital infrastructure.',
  img: 'logistics', focus: '50% 50%', alt: 'Logistics workers coordinating deliveries at a distribution yard',
  primary: `<a class="btn btn-primary" href="partner.html">Partner with FORUS ${icon.arrow}</a>`,
  secondary: `<a class="btn btn-outline" href="capabilities.html">Capabilities</a>`,
  statementTitle: 'Your network. Your brand. A connected foundation.',
  statementCopy: '<p>Industry networks, supply chains and membership organisations can run their own branded environment on FORUS infrastructure, connecting the people and organisations that make up the network without asking them to change how they operate.</p>',
  themes: [
    { title: 'Network identity', copy: 'Identity and profiles for the customers, members, partners and suppliers in a network.' },
    { title: 'Branded platforms', copy: 'A digital environment that carries the network’s own brand and experience.' },
    { title: 'Transactions across the network', copy: 'Orders, collections, payouts and settlements coordinated between participants.' },
    { title: 'Sector operations', copy: 'Operational tools shaped for agriculture, retail, transport and services networks.' },
    { title: 'Data and insight', copy: 'Activity records and reporting across the network.' },
    { title: 'Integration', copy: 'Approved interfaces that connect existing enterprise systems to the network.' }
  ],
  description: 'FORUS enables organisations to connect customers, members, partners, suppliers or participants through shared digital infrastructure.'
});

const investors = {
  file: 'investors.html', title: 'Investors', active: 'work', theme: 'dark',
  description: 'Infrastructure built for network-scale opportunity. Contact FORUS Investor Relations.',
  body: `
${pageHero({
  eyebrow: 'Investors',
  title: 'Infrastructure built for network-scale opportunity.',
  lead: 'FORUS Digital is the group behind the FORUS technology, intellectual property, infrastructure and ecosystem development. Investor information is shared directly with qualified parties.',
  ctas: `<a class="btn btn-primary" href="mailto:${site.email}?subject=Investor%20Relations">Contact Investor Relations ${icon.arrow}</a>`,
  dark: true
})}
<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Investment themes</span>
      <h2 class="reveal" data-delay="1">Four reasons the infrastructure matters.</h2>
    </div>
    ${principles([
      { title: 'Platform infrastructure', copy: 'A single interoperable environment for identity, transactions, platforms and connectivity, rather than a collection of separate applications.' },
      { title: 'Network expansion', copy: 'Each organisation that joins brings its own members, participants and relationships, and the infrastructure grows with the networks built on it.' },
      { title: 'Multiple economic models', copy: 'Cooperatives, financial institutions, public programmes and industry networks each draw on the same foundation in different ways.' },
      { title: 'Global relevance', copy: 'Designed for markets where connected, inclusive infrastructure is a structural need, with implementations across Africa and partnerships reaching further.' }
    ], 'two')}
  </div>
</section>
${statement({
  eyebrow: 'Investor relations',
  title: 'Investor information is provided directly and under the appropriate arrangements.',
  copy: '<p>FORUS does not publish financial forecasts, valuation or funding detail on this website. Qualified investors are invited to contact Investor Relations.</p>',
  cta: `<a class="btn btn-primary" href="mailto:${site.email}?subject=Investor%20Relations">Contact Investor Relations ${icon.arrow}</a>`
})}
`
};

const media = {
  file: 'media.html', title: 'Media', active: 'work', theme: 'light',
  description: site.boilerplate,
  body: `
${pageHero({ eyebrow: 'Media', title: 'FORUS at a glance.', lead: 'Corporate information, announcements and assets for journalists and publishers.', rule: true })}
<section class="section" style="padding-top:0">
  <div class="container">
    <div class="split">
      <div class="split-sticky reveal"><span class="eyebrow">Boilerplate</span><h2>About FORUS Digital</h2></div>
      <div class="reveal" data-delay="1">
        <div class="copy lead"><p>${site.boilerplate}</p></div>
        <p class="small mute" style="margin-top:20px">Approved short corporate description. Please use as written.</p>
      </div>
    </div>
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="section-head"><span class="eyebrow reveal">Routes</span><h2 class="reveal" data-delay="1">What you need, where it lives.</h2></div>
    ${blocks([
      { title: 'Latest announcements', copy: 'Newsroom announcements and partnership news from FORUS.', href: 'forus-today.html#newsroom', label: 'Newsroom' },
      { title: 'Press coverage', copy: 'Independent coverage of FORUS and the ecosystem.', href: 'forus-today.html#press', label: 'Press' },
      { title: 'Media assets', copy: 'Official FORUS logo files in colour and reversed. Always use the supplied assets; never redraw the mark.', href: 'assets/brand/logo-horizontal-colour.svg', label: 'Download the logo (SVG)', ext: true },
      { title: 'Media enquiries', copy: 'For interviews, comment and information, contact the FORUS media team.', href: `mailto:${site.email}?subject=Media%20enquiry`, label: site.email }
    ], 'four')}
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="split">
      <div class="split-sticky reveal"><span class="eyebrow">Facts</span><h2>Key facts.</h2></div>
      <div class="reveal" data-delay="1">
        <div class="def-rows">
          <div class="def-row"><span class="def-key">Organisation</span><p class="def-val" style="font-size:1.125rem;font-weight:500">FORUS Digital Group, the group behind the FORUS technology, intellectual property, infrastructure and ecosystem development.</p></div>
          <div class="def-row"><span class="def-key">Cooperative ecosystem</span><p class="def-val" style="font-size:1.125rem;font-weight:500">FORUS.coop, operated by FORUS Digital Cooperative, is the cooperative implementation of FORUS infrastructure.</p></div>
          <div class="def-row"><span class="def-key">Headquarters</span><p class="def-val" style="font-size:1.125rem;font-weight:500">South Africa</p></div>
          <div class="def-row"><span class="def-key">Strategic line</span><p class="def-val" style="font-size:1.125rem;font-weight:500">${site.tagline}</p></div>
        </div>
      </div>
    </div>
  </div>
</section>
${ctaFinal({ title: ['Follow what', 'we’re building.'], copy: 'Announcements, partnerships, coverage and perspectives from across the FORUS ecosystem.', label: 'View FORUS Today', href: 'forus-today.html' })}
`
};

export default [overview, cooperatives, financial, government, enterprise, investors, media];
