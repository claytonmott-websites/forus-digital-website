/* FORUS Digital · content data
   Navigation, editorial items, ecosystem implementations, audiences.
   Every factual item below traces to an approved source noted in README.md. */

export const site = {
  name: 'FORUS Digital',
  domain: 'forus.digital',
  statement: 'The infrastructure layer for inclusive digital economies.',
  tagline: 'Connect the network. Coordinate value. Unlock shared opportunity.',
  email: 'info@forus.digital',
  coop: 'https://forus.coop',
  boilerplate: 'FORUS Digital is a technology and infrastructure group building the infrastructure layer for inclusive digital economies. FORUS connects identity, transactions, digital platforms and services to help institutions, networks and communities participate in connected economic ecosystems.'
};

export const nav = [
  { key: 'forus', label: 'FORUS', href: 'about.html', items: [
    { label: 'About FORUS', href: 'about.html' },
    { label: 'Our Story', href: 'our-story.html' },
    { label: 'Purpose & Principles', href: 'purpose-principles.html' }
  ]},
  { key: 'infrastructure', label: 'Infrastructure', href: 'infrastructure.html', items: [
    { label: 'Overview', href: 'infrastructure.html' },
    { label: 'Capabilities', href: 'capabilities.html' },
    { label: 'Trust & Interoperability', href: 'trust-interoperability.html' }
  ]},
  { key: 'work', label: 'Who We Work With', href: 'who-we-work-with.html', items: [
    { label: 'Cooperatives', href: 'cooperatives.html' },
    { label: 'Financial Institutions', href: 'financial-institutions.html' },
    { label: 'Government & Public Sector', href: 'government-public-sector.html' },
    { label: 'Enterprise & Networks', href: 'enterprise-networks.html' },
    { label: 'Investors', href: 'investors.html' },
    { label: 'Media', href: 'media.html' }
  ]},
  { key: 'ecosystem', label: 'Ecosystem', href: 'ecosystem.html', items: [
    { label: 'Overview', href: 'ecosystem.html' },
    { label: 'FORUS.coop', href: 'https://forus.coop', ext: true },
    { label: 'Partnerships', href: 'partnerships.html' },
    { label: 'Infrastructure in Action', href: 'infrastructure-in-action.html' }
  ]},
  { key: 'today', label: 'FORUS Today', href: 'forus-today.html', items: [
    { label: 'Latest', href: 'forus-today.html' },
    { label: 'Newsroom', href: 'forus-today.html#newsroom' },
    { label: 'Press', href: 'forus-today.html#press' },
    { label: 'Perspectives', href: 'forus-today.html#perspectives' }
  ]}
];

export const footerNav = {
  organisation: [
    { label: 'About FORUS', href: 'about.html' },
    { label: 'Our Story', href: 'our-story.html' },
    { label: 'Purpose & Principles', href: 'purpose-principles.html' },
    { label: 'Leadership', href: 'leadership.html' },
    { label: 'Contact', href: 'contact.html' }
  ],
  infrastructure: [
    { label: 'Overview', href: 'infrastructure.html' },
    { label: 'Capabilities', href: 'capabilities.html' },
    { label: 'Trust & Interoperability', href: 'trust-interoperability.html' },
    { label: 'Technical Resources', href: 'technical-resources.html' },
    { label: 'APIs', href: 'technical-resources.html#apis' },
    { label: 'Developer Resources', href: 'technical-resources.html#developers' }
  ],
  work: [
    { label: 'Cooperatives', href: 'cooperatives.html' },
    { label: 'Financial Institutions', href: 'financial-institutions.html' },
    { label: 'Government & Public Sector', href: 'government-public-sector.html' },
    { label: 'Enterprise & Networks', href: 'enterprise-networks.html' },
    { label: 'Investors', href: 'investors.html' },
    { label: 'Media', href: 'media.html' }
  ],
  ecosystem: [
    { label: 'Ecosystem Overview', href: 'ecosystem.html' },
    { label: 'FORUS.coop', href: 'https://forus.coop', ext: true },
    { label: 'Partnerships', href: 'partnerships.html' },
    { label: 'Infrastructure in Action', href: 'infrastructure-in-action.html' },
    { label: 'FORUS Today', href: 'forus-today.html' },
    { label: 'Partner with FORUS', href: 'partner.html' }
  ],
  legal: [
    { label: 'Privacy', href: 'privacy.html' },
    { label: 'Terms', href: 'terms.html' }
  ]
};

/* Four foundations of the infrastructure. Used on the homepage and infrastructure pages. */
export const pillars = [
  { key: 'identity', title: 'Identity', line: 'Trusted points of participation.', copy: 'Trusted points of participation for people, organisations and institutions.' },
  { key: 'transactions', title: 'Transactions', line: 'The movement and coordination of value.', copy: 'The movement and coordination of value across a network.' },
  { key: 'platforms', title: 'Platforms', line: 'Digital experiences for organisations, communities and markets.', copy: 'Digital experiences for organisations, communities and markets.' },
  { key: 'connectivity', title: 'Connectivity', line: 'Interoperability across institutions, systems and services.', copy: 'Interoperability across institutions, systems and services.' }
];

/* Audience routes. One sentence each. */
export const audiences = [
  { key: 'cooperatives', title: 'Cooperatives', href: 'cooperatives.html', line: 'Shared infrastructure for shared ownership, connected through FORUS.coop.' },
  { key: 'financial', title: 'Financial Institutions', href: 'financial-institutions.html', line: 'Extend the reach of financial services into new communities and networks.' },
  { key: 'government', title: 'Government & Public Sector', href: 'government-public-sector.html', line: 'Connect people, programmes and services through common digital infrastructure.' },
  { key: 'enterprise', title: 'Enterprise & Networks', href: 'enterprise-networks.html', line: 'Build the infrastructure around your customers, members, partners and suppliers.' },
  { key: 'investors', title: 'Investors', href: 'investors.html', line: 'Infrastructure built for network-scale opportunity.' },
  { key: 'media', title: 'Media', href: 'media.html', line: 'FORUS at a glance, announcements, coverage and media enquiries.' }
];

/* Editorial items. Sources: approved press releases of 4 July 2026 and 10 September 2026.
   Category keys: newsroom | press | partnerships | perspectives */
export const news = [
  {
    slug: 'news-dotcooperation-partnership.html',
    category: 'partnerships', categoryLabel: 'Partnership',
    date: '2026-09-10', dateLabel: '10 September 2026', day: '10', my: 'Sep 2026', navTitle: 'FORUS × DotCooperation',
    title: 'FORUS and DotCooperation sign strategic partnership to expand trusted digital identity for African cooperatives',
    short: 'FORUS and DotCooperation sign strategic partnership to expand trusted digital identity for African cooperatives.',
    excerpt: 'FORUS is appointed DotCooperation’s Strategic Promotional and Implementation Partner for Africa, combining the .coop digital identity ecosystem with FORUS’s cooperative network and implementation capability.',
    source: 'FORUS announcement'
  },
  {
    slug: 'news-world-agriculture-forum.html',
    category: 'partnerships', categoryLabel: 'Partnership',
    date: '2026-09-10', dateLabel: '10 September 2026', day: '10', my: 'Sep 2026', navTitle: 'FORUS × World Agriculture Forum',
    title: 'FORUS and World Agriculture Forum announce collaboration to strengthen farmer-owned cooperatives globally',
    short: 'FORUS and World Agriculture Forum announce collaboration around the TerraNexus ecosystem.',
    excerpt: 'A strategic collaboration to support agricultural cooperatives and their members within the emerging TerraNexus ecosystem, combining WAF’s global agricultural network with FORUS digital infrastructure.',
    source: 'Joint announcement'
  },
  {
    slug: 'news-connect-with-a-coop.html',
    category: 'newsroom', categoryLabel: 'Newsroom',
    date: '2026-07-04', dateLabel: '4 July 2026', day: '04', my: 'Jul 2026', navTitle: 'Connect with a Coop',
    title: 'Connect with a Coop: African and Indian cooperatives join hands on International Day of Cooperatives',
    short: 'Connect with a Coop: African and Indian cooperatives join hands.',
    excerpt: 'FORUS-Grow, Unati / UAMMCL and The Dream sign a Memorandum of Understanding to build a cooperative-led digital finance, farmer and community impact ecosystem linking Africa and India.',
    source: 'FORUS announcement'
  },
  {
    slug: 'perspective-infrastructure-not-applications.html',
    category: 'perspectives', categoryLabel: 'Perspective',
    date: '2026-09-12', dateLabel: 'September 2026', day: '12', my: 'Sep 2026', navTitle: 'Why infrastructure, not an application',
    title: 'Why we build infrastructure, not a single application',
    excerpt: 'The same underlying infrastructure can sit beneath very different experiences. A note on how FORUS thinks about the layer below the surface.',
    source: 'FORUS perspective', draft: true
  }
];

/* Ecosystem implementations. Status wording is deliberate and must not be softened or upgraded
   without confirmation. Source: press releases of 10 September 2026 and 4 July 2026. */
export const implementations = [
  {
    key: 'coop', title: 'FORUS.coop', where: 'Cooperative economy, global',
    status: 'live', statusLabel: 'Live',
    line: 'Digital infrastructure for the cooperative economy. The cooperative implementation of FORUS infrastructure, operated by FORUS Digital Cooperative.',
    href: 'https://forus.coop', ext: true,
    opportunity: 'Cooperatives and their members need a shared digital environment that connects identity, communication, services and opportunity while leaving ownership, governance and member relationships where they belong.',
    role: 'FORUS provides the underlying infrastructure and the cooperative platform experience. FORUS Digital Cooperative operates the public-facing ecosystem at forus.coop.',
    building: 'A connected environment for cooperatives, federations and apex bodies, with a pathway from cooperative identity to practical digital participation.',
    current: 'Public and operating. Specific capabilities, availability and implementation requirements vary by market and deployment.'
  },
  {
    key: 'dotcoop', title: 'DotCooperation and .coop for Africa', where: 'Africa',
    status: 'partnership', statusLabel: 'Partnership',
    line: 'FORUS is appointed DotCooperation’s Strategic Promotional and Implementation Partner for Africa, supporting adoption of trusted .coop digital identities.',
    href: 'news-dotcooperation-partnership.html',
    opportunity: 'The .coop domain gives eligible cooperatives a recognisable digital identity connected to the global cooperative movement. Adoption across Africa needs outreach, onboarding and technical support.',
    role: 'Strategic Promotional and Implementation Partner for Africa under a Strategic Partnership Agreement signed 10 September 2026.',
    building: 'A pathway from identity to trust, connection, participation and growth: awareness, onboarding support, technical assistance and integration with digital services.',
    current: 'Partnership signed. Activities are being planned with DotCooperation and cooperative networks.'
  },
  {
    key: 'terranexus', title: 'TerraNexus with the World Agriculture Forum', where: 'Agricultural cooperatives, global',
    status: 'partnership', statusLabel: 'Partnership',
    line: 'A strategic collaboration to strengthen farmer-owned cooperatives within TerraNexus, a cooperative-led agricultural ecosystem being developed with WAF.',
    href: 'news-world-agriculture-forum.html',
    opportunity: 'Connect national apex, tertiary and primary agricultural cooperatives and their farmer members to markets, finance, technology, services and investment.',
    role: 'FORUS contributes cooperative enablement, identity, connected workflows and financial infrastructure. WAF contributes its global agricultural network and Country Councils.',
    building: 'Priority areas are being defined, expected to include cooperative onboarding and enablement, member participation pathways, and the digital and financial foundations for inclusive agricultural growth.',
    current: 'Collaboration announced 10 September 2026. TerraNexus is in development.'
  },
  {
    key: 'wow', title: 'WOW Connect with ECTTC', where: 'Eastern Cape, South Africa',
    status: 'pilot', statusLabel: 'Pilot',
    line: 'A cooperative-led digital transformation initiative developed for the Eastern Cape Transport Tertiary Co-operative, the largest public transport cooperative in Africa.',
    href: 'infrastructure-in-action.html#wow',
    opportunity: 'A public transport economy in which membership, identity, payments, mobility, fleet operations and commercial services can work together rather than apart.',
    role: 'FORUS provides the infrastructure and the WOW Connect platform experience for transport operators, vehicles, drivers and routes.',
    building: 'Integration of membership, digital identity, payments, connectivity, mobility, fleet operations and commercial and financial services into a single digital ecosystem.',
    current: 'In pilot. ECTTC was named Fintech Innovation of the Year at Africa Tech Festival 2024.'
  },
  {
    key: 'unati', title: 'Connect with a Coop with Unati', where: 'Punjab and Jammu, India',
    status: 'development', statusLabel: 'In development',
    line: 'A pilot programme being developed with the Unati Co-operative Marketing-cum-Processing Society, connecting rural producers and women-led enterprise with markets and finance.',
    href: 'news-connect-with-a-coop.html',
    opportunity: 'Connect farmers, women entrepreneurs, self-help groups, processors and community hubs to markets through the grassroots cooperative structures they already trust.',
    role: 'Under a Memorandum of Understanding signed 4 July 2026, FORUS-Grow and UAMMCL are the principal implementation partners for the immediate phase.',
    building: 'Cooperative-led finance, wallet-enabled services, merchant and supplier onboarding, settlement evidence and finance-readiness, beginning with the Unati Behen supply-chain model.',
    current: 'Pilot programme in development.'
  }
];

export const partners = [
  { name: 'DotCooperation LLC', role: 'Cooperative digital identity. Manages the .coop domain. FORUS is its Strategic Promotional and Implementation Partner for Africa.', href: 'news-dotcooperation-partnership.html' },
  { name: 'World Agriculture Forum', role: 'Global agricultural platform and Country Councils. Strategic collaboration on the TerraNexus ecosystem.', href: 'news-world-agriculture-forum.html' },
  { name: 'Eastern Cape Transport Tertiary Co-operative', role: 'The largest public transport cooperative in Africa. WOW Connect is developed for ECTTC.', href: 'infrastructure-in-action.html#wow' },
  { name: 'Unati / UAMMCL', role: 'Indian cooperative implementation and field ecosystem partner under the Connect with a Coop Memorandum of Understanding.', href: 'news-connect-with-a-coop.html' }
];
