import { icon, pageHero, bigDate, newsImg, article, ctaFinal, statusTag } from '../components.mjs';
import { site, news } from '../data.mjs';

const today = {
  file: 'forus-today.html', title: 'FORUS Today', active: 'today', theme: 'light',
  description: 'Partnerships, announcements, independent coverage and perspectives from across the FORUS ecosystem.',
  body: `
${pageHero({ eyebrow: 'FORUS Today', title: 'Follow what we’re building.', lead: 'Partnerships, announcements, independent coverage and perspectives from across the FORUS ecosystem.' })}
<section class="section" style="padding-top:0">
  <div class="container">
    <a class="today-page-feature reveal" href="${news[0].slug}">
      <div class="tpf-media">${newsImg(news[0], '(max-width: 860px) 100vw, 40vw', 'eager')}</div>
      <div>${bigDate(news[0], 'xl')}<span class="cat">${news[0].categoryLabel} · Latest</span><h2>${news[0].title}</h2><p>${news[0].excerpt}</p><span class="link">Read ${icon.arrow}</span></div>
    </a>
    <div class="filters reveal" data-filters role="group" aria-label="Filter by category">
      <button class="filter" type="button" data-filter="all" aria-pressed="true">All</button>
      <button class="filter" type="button" data-filter="newsroom" aria-pressed="false">Newsroom</button>
      <button class="filter" type="button" data-filter="press" aria-pressed="false">Press</button>
      <button class="filter" type="button" data-filter="partnerships" aria-pressed="false">Partnerships</button>
      <button class="filter" type="button" data-filter="perspectives" aria-pressed="false">Perspectives</button>
    </div>
    <div class="news-list">
      ${news.slice(1).map(n => `<a class="news-row v2" href="${n.slug}" data-category="${n.category}">
        <div>${bigDate(n, 'sm')}<span class="cat">${n.categoryLabel}</span>${n.draft ? '<span class="placeholder" style="margin-top:8px">Draft for approval</span>' : ''}</div>
        <div><h3>${n.title}</h3><p>${n.excerpt}</p></div>
        <div class="row-thumb">${newsImg(n, '176px')}</div>
        <span class="route-arrow">${icon.arrow}</span>
      </a>`).join('')}
    </div>
    <div class="notice" data-filter-empty hidden style="margin-top:32px">Independent press coverage will be listed here as it is published. For media enquiries, contact <a href="mailto:${site.email}?subject=Media%20enquiry" style="text-decoration:underline">${site.email}</a>.</div>
  </div>
</section>
${ctaFinal({ title: ['Media enquiries', 'and information.'], copy: 'Corporate boilerplate, logo assets and routes for journalists are on the media page.', label: 'Visit the media page', href: 'media.html' })}
`
};

const N = Object.fromEntries(news.map(n => [n.slug, n]));

const dotcoop = {
  file: 'news-dotcooperation-partnership.html', title: 'FORUS and DotCooperation sign strategic partnership', active: 'today', theme: 'static',
  description: N['news-dotcooperation-partnership.html'].excerpt,
  body: article({
    item: N['news-dotcooperation-partnership.html'],
    standfirst: 'Panama and South Africa, 10 September 2026. DotCooperation LLC and FORUS Digital Cooperative have signed a Strategic Partnership Agreement to support the adoption of trusted .coop digital identities by cooperatives across Africa.',
    aside: `<div class="aside-box"><h4>Status</h4>${statusTag('partnership', 'Partnership')}<p style="margin-top:8px">Strategic Partnership Agreement signed 10 September 2026.</p></div>`,
    body: `
<p>Under the agreement, FORUS is appointed DotCooperation’s Strategic Promotional and Implementation Partner for Africa. The collaboration combines DotCooperation’s cooperative digital identity ecosystem with FORUS’s cooperative network, implementation capability and technical support services.</p>
<h2>A trusted digital home for cooperatives</h2>
<p>The .coop domain gives eligible cooperatives a recognisable digital identity and a dedicated online presence connected to the global cooperative movement. Through the partnership, FORUS will help cooperatives, federations, apex organisations and cooperative networks understand, access and use .coop as part of their digital development.</p>
<p>The partnership will focus on practical adoption, not digital identity in isolation. Activities may include cooperative outreach, awareness campaigns, webinars, conferences, onboarding support, technical assistance, digital-service integration, case studies and promotion through cooperative platforms including WorldMap.coop and Stories.coop.</p>
<h2>From identity to participation</h2>
<p>FORUS’s approach is to connect trusted cooperative identity with practical digital participation. Depending on the needs of each cooperative and the relevant approvals, this may include member and organisation onboarding, payments, commerce, procurement, service access and connections between cooperative economies.</p>
<p>The partnership creates a pathway from identity to trust, connection, participation and growth. The objective is to help African cooperatives become more visible, easier to discover and better positioned to participate in the digital economy while retaining their own ownership, governance and member relationships.</p>
<h2>Built around real cooperative economies</h2>
<p>FORUS is applying this approach through sector-focused cooperative use cases that show how shared digital infrastructure can strengthen real, member-owned economic networks.</p>
<p>FORUS’s strategic collaboration with the World Agriculture Forum (WAF) supports TerraNexus, a cooperative-led agricultural ecosystem designed to connect national apex and tertiary agricultural cooperatives, their primary cooperatives and farmer members to markets, finance, technology, services and investment. WAF contributes its global agricultural network and Country Councils, while FORUS provides cooperative enablement, verified identity, connected workflows and financial rails.</p>
<p>FORUS is developing a pilot programme with Unati in India. Based in Punjab, the Unati Co-operative Marketing-cum-Processing Society Ltd. connects rural communities and producers with agriculture, processing, value addition, technology and markets. Unati shows how cooperative structures can support women-led enterprise, rural livelihoods and digitally enabled value chains.</p>
<p>WOW (Wealth on Wheels), South Africa. WOW-Connect is a cooperative-led digital transformation initiative developed for the Eastern Cape Transport Tertiary Co-operative (ECTTC), the largest public transport co-operative in Africa and winner of the Fintech Innovation of the Year Award (Africa Tech Festival 2024). WOW-Connect is transforming the public transport economy by integrating membership, digital identity, payments, connectivity, mobility, fleet operations, and commercial and financial services into a single digital ecosystem.</p>
<p>These initiatives form part of FORUS’s wider strategy to connect cooperative economies through practical, locally governed digital infrastructure.</p>
<blockquote>The cooperative economy already exists. The next step is to connect it.</blockquote>
<h2>About DotCooperation</h2>
<p>DotCooperation LLC supports the digital identity and visibility of the global cooperative movement through the .coop domain and related cooperative identity services. The .coop domain is available to eligible cooperative organisations and enterprises subject to the applicable eligibility requirements.</p>`
  })
};

const waf = {
  file: 'news-world-agriculture-forum.html', title: 'FORUS and World Agriculture Forum announce collaboration', active: 'today', theme: 'static',
  description: N['news-world-agriculture-forum.html'].excerpt,
  body: article({
    item: N['news-world-agriculture-forum.html'],
    standfirst: 'South Africa, 10 September 2026. FORUS Digital Cooperative and the World Agriculture Forum (WAF) today announced a strategic collaboration to strengthen the participation of farmer-owned agricultural cooperatives in the emerging TerraNexus ecosystem.',
    aside: `<div class="aside-box"><h4>Status</h4>${statusTag('partnership', 'Partnership')}<p style="margin-top:8px">Collaboration announced 10 September 2026. TerraNexus is in development.</p></div>`,
    body: `
<p>TerraNexus is being developed as a cooperative-led global ecosystem connecting agricultural cooperatives and their farmer members to opportunities in markets, finance, technology, services and investment.</p>
<p>The collaboration combines WAF’s global agricultural network and country-level engagement with FORUS’s digital infrastructure for cooperatives, including verified identities, connected digital tools and financial services.</p>
<p>The initiative takes a cooperative-first approach, working through the institutions that farmers already own and trust. This will provide cooperatives with a practical pathway to participate in the broader TerraNexus ecosystem while retaining their local identity, governance and focus on members.</p>
<p>WAF’s Country Councils will help connect agricultural cooperatives with national and international stakeholders, supporting locally grounded implementation while linking farmer organisations to global knowledge, innovation and opportunity.</p>
<blockquote>The most effective way to create lasting value for farmers is to strengthen the cooperative institutions they own and govern. By combining WAF’s global agricultural reach with FORUS’s digital infrastructure, we can create practical, trusted pathways for cooperatives and their members to participate in a more connected agricultural economy.<cite>Sonny Fisher, Founder, FORUS</cite></blockquote>
<p>WAF has set an ambition to reach and support up to 300 million farmers by 2030 through TerraNexus. FORUS will support this ambition by helping establish the digital and financial foundations that enable agricultural cooperatives and their members to participate confidently in the ecosystem.</p>
<blockquote>TerraNexus is intended to mobilise the strength of farmer-owned institutions at meaningful scale. FORUS brings valuable capability in cooperative enablement, verified identity and financial infrastructure, helping translate our global and country-level networks into practical opportunities for agricultural cooperatives and the farmers they serve.<cite>Steve Monty, Senior Director, Farmer Initiatives, World Agriculture Forum</cite></blockquote>
<p>The organisations will now work together to define priority areas for implementation. These are expected to include cooperative onboarding and enablement, pathways for member participation, and the digital and financial infrastructure required to support inclusive agricultural growth.</p>
<h2>About the World Agriculture Forum</h2>
<p>The World Agriculture Forum is a global platform that brings together governments, farmers, agribusinesses, experts and development institutions to advance sustainable agricultural development. Through policy advocacy, trade facilitation, technology-driven solutions and inclusive partnerships, WAF works to strengthen resilient and food-secure agricultural systems.</p>`
  })
};

const unati = {
  file: 'news-connect-with-a-coop.html', title: 'Connect with a Coop', active: 'today', theme: 'static',
  description: N['news-connect-with-a-coop.html'].excerpt,
  body: article({
    item: N['news-connect-with-a-coop.html'],
    standfirst: '4 July 2026, Gqeberha, South Africa and Jammu, India. On the International Day of Cooperatives, FORUS-Grow, Unati / UAMMCL and The Dream marked the signing of a strategic Memorandum of Understanding to build a cooperative-led economic, digital finance, farmer and community impact ecosystem linking Africa and India.',
    aside: `<div class="aside-box"><h4>Status</h4>${statusTag('development', 'In development')}<p style="margin-top:8px">Memorandum of Understanding signed 4 July 2026. Pilot programme in development.</p></div>`,
    body: `
<p>The signing took place during an online ceremony and was framed by the United Nations theme for the day: “Cooperatives for peace and a sustainable world.”</p>
<p>Under the banner “Connect with a Coop”, the partnership brings together FORUS-Grow’s cooperative digital and economic operating infrastructure, UAMMCL’s proven grassroots cooperative movement in India, and The Dream’s long-term impact and scale vision. The MoU establishes FORUS-Grow and UAMMCL as the principal implementation partners for the immediate phase, with The Dream participating as a future impact and farmer-support layer subject to field trials and separate implementation protocols.</p>
<p>The partnership is designed to support cooperative-led finance, wallet-enabled services, merchant and supplier onboarding, controlled value allocation, settlement evidence, reconciliation, working-capital rotation, finance-readiness and funder reporting. Its first implementation focus is the Unati Behen and cooperative supply-chain model, including farmers, PACS, self-help groups, women entrepreneurs, Sevak hubs, local processors, merchants and community-based supply chains.</p>
<blockquote>It is your community, your rules. The technology follows the field.<cite>Mary Brennan, CEO, FORUS</cite></blockquote>
<p>FORUS is itself a cooperative, and its role in the partnership is to provide the economic and digital operating layer needed to support member-owned growth. This includes wallet-enabled journeys, purpose-bound value allocation, merchant and supplier participation, settlement trails, dashboards and finance-readiness evidence.</p>
<p>For UAMMCL, the partnership builds on a grassroots cooperative movement that began in 2003 and has placed women, local trust and practical livelihoods at the centre of its work. The Unati Behen model connects women entrepreneurs, farmers, self-help groups, processors and community hubs to markets, helping build local economic participation from the ground up.</p>
<blockquote>Our true success will not be measured by the agreement we signed today, but by the lives we improve.<cite>Dr Jyoti Saroop, Founder and Director, UAMMCL</cite></blockquote>
<p>The collaboration has ambitions beyond a single country or sector. The parties see potential for the model to extend across the Global South, with agriculture, women-led commerce, rural finance, cooperative merchant networks and community-owned digital infrastructure as natural starting points.</p>
<blockquote>This is more than a partnership between organisations. It is the beginning of a cooperative bridge between Africa and India. If we can connect a coop, we can connect the farmer, the entrepreneur, the merchant, the funder and the community, and we can build an economic system where the value stays with the people.<cite>Sonny Fisher, Founder, FORUS</cite></blockquote>
<h2>About UAMMCL / Unati</h2>
<p>The Unati Agri Allied and Marketing Multistate Cooperative Society Ltd. is an Indian cooperative implementation and field ecosystem partner. Its model connects farmers, women entrepreneurs, PACS, self-help groups, Sevak hubs, processors, cooperative channels and consumer demand through grassroots cooperative structures and community trust.</p>`
  })
};

const perspective = {
  file: 'perspective-infrastructure-not-applications.html', title: 'Why we build infrastructure, not a single application', active: 'today', theme: 'static',
  description: N['perspective-infrastructure-not-applications.html'].excerpt,
  body: article({
    item: N['perspective-infrastructure-not-applications.html'],
    standfirst: 'A note on how FORUS thinks about the layer below the surface. This perspective is a draft for editorial approval and may be replaced.',
    aside: `<div class="aside-box"><h4>Series</h4><p>Perspectives are short pieces from across the FORUS ecosystem on infrastructure, participation and connected economies.</p></div>`,
    body: `
<p>Much of the technology that powers an economy sits out of sight. Identity. Payments. Platforms. Data. Connectivity. Institutional systems. Most people never see these layers, and they should not have to.</p>
<p>When FORUS began, the question was not which application to build. It was what would digital infrastructure look like if more people and organisations could participate in the value it creates. That question led away from a single product and toward a layer that many different experiences could rest on.</p>
<h2>The same foundation, different surfaces</h2>
<p>A cooperative platform, a financial institution’s service, a public programme and an industry network do not need to look alike. They serve different people with different expectations. What they share is a need for trusted identity, the movement of value, a digital environment to operate in and the ability to connect to other systems.</p>
<p>That is the infrastructure layer. FORUS builds it once and lets each organisation shape the experience above it.</p>
<h2>Why it matters for inclusion</h2>
<p>Inclusion is often treated as a campaign. We treat it as architecture. When the same rails serve an informal trader, a regional federation and a large enterprise, participation stops being a special case and becomes the default.</p>
<p>That is what the strategic line means in practice. Connect the network. Coordinate value. Unlock shared opportunity.</p>`
  })
};

export default [today, dotcoop, waf, unati, perspective];
