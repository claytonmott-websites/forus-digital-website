import { icon, pageHero, split, statement, ideas, defRows, principles, timeline, ctaBand, ctaFinal, blocks } from '../components.mjs';
import { site } from '../data.mjs';

const about = {
  file: 'about.html', title: 'About FORUS', active: 'forus', theme: 'light',
  description: 'FORUS is a technology and infrastructure group developing connected digital systems for institutions, networks and communities.',
  body: `
${pageHero({
  eyebrow: 'About FORUS',
  title: 'Building infrastructure for more inclusive economies.',
  lead: 'FORUS is a technology and infrastructure group developing connected digital systems for institutions, networks and communities.',
  ctas: `<a class="btn btn-primary" href="infrastructure.html">Explore the infrastructure ${icon.arrow}</a><a class="btn btn-outline" href="our-story.html">Our story</a>`
})}
${split({
  eyebrow: 'What sits underneath',
  title: 'Technology underneath. Opportunity above it.',
  copy: `<p>Much of the technology that powers an economy sits out of sight.</p>
    <p><strong>Identity. Payments. Platforms. Data. Connectivity. Institutional systems.</strong></p>
    <p>FORUS brings these elements together within an interoperable infrastructure environment designed to make participation simpler and economic networks more connected.</p>`
})}
<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Foundations</span>
      <h2 class="reveal" data-delay="1">Four foundations. One environment.</h2>
    </div>
    ${ideas([
      { key: 'identity', title: 'Identity', copy: 'Trusted points of participation for people, organisations and institutions.' },
      { key: 'transactions', title: 'Transactions', copy: 'The movement and coordination of value across a network.' },
      { key: 'platforms', title: 'Platforms', copy: 'Digital experiences for organisations, communities and markets.' },
      { key: 'connectivity', title: 'Connectivity', copy: 'Interoperability across institutions, systems and services.' }
    ])}
  </div>
</section>
${split({
  eyebrow: 'Corporate role',
  title: 'One organisation. A growing ecosystem.',
  copy: `<p>FORUS Digital is the group behind the FORUS technology, intellectual property, infrastructure and ecosystem development.</p>
    <p>The infrastructure can sit beneath different organisations, brands and institutional environments. FORUS.coop, the cooperative ecosystem, is one major implementation built on it.</p>`,
  cta: `<div class="btn-group"><a class="btn btn-outline" href="ecosystem.html">Explore the ecosystem ${icon.arrow}</a></div>`,
  reverse: false
})}
<section class="section-sm on-paper" style="padding-top:0;background:var(--white)">
  <div class="container">
    ${blocks([
      { title: 'Our story', copy: 'Built over time. Built with purpose. How a question became an infrastructure ecosystem.', href: 'our-story.html', label: 'Read our story' },
      { title: 'Purpose and principles', copy: 'Technology should expand participation, not limit it. The vision, mission and principles that guide FORUS.', href: 'purpose-principles.html', label: 'Read our principles' },
      { title: 'Leadership', copy: 'The people responsible for the FORUS group, its infrastructure and its ecosystem.', href: 'leadership.html', label: 'Meet the leadership' },
      { title: 'FORUS Today', copy: 'Announcements, partnerships, coverage and perspectives from across the ecosystem.', href: 'forus-today.html', label: 'Follow FORUS' }
    ], 'four')}
  </div>
</section>
${ctaFinal()}
`
};

const story = {
  file: 'our-story.html', title: 'Our Story', active: 'forus', theme: 'light',
  description: 'FORUS did not begin as a single product. It grew from years of exploring how digital infrastructure can connect more people to economic participation and shared opportunity.',
  body: `
${pageHero({
  eyebrow: 'Our story',
  title: 'Built over time. Built with purpose.',
  lead: 'FORUS did not begin as a single product. It grew from years of exploring a much bigger question: how can digital infrastructure connect more people to economic participation and shared opportunity?',
  media: { src: 'community', focus: '50% 45%', alt: 'A cooperative group working together outdoors at a shared table' }
})}
${statement({
  eyebrow: 'The question',
  title: 'What would digital infrastructure look like if more people and organisations could participate in the value it creates?',
  copy: '<p>That question has shaped years of research, development, partnerships and real-world experimentation across identity, payments, commerce, institutional infrastructure and connected economic systems. Today, those ideas have become a growing technology and infrastructure ecosystem.</p>',
  surface: ''
})}
<section class="section on-paper">
  <div class="container">
    <div class="split">
      <div class="split-sticky reveal">
        <span class="eyebrow">Timeline</span>
        <h2>From a question to an ecosystem.</h2>
        <p class="copy" style="margin-top:24px;max-width:36ch">An editorial outline of the journey. Entries marked as placeholders await verified dates and detail from the FORUS team.</p>
      </div>
      <div>
        ${timeline([
          { when: 'Origins', placeholder: true, title: 'A question about participation', copy: 'FORUS begins with a founding idea: infrastructure that lets more people and organisations take part in the value an economy creates. Early work explores identity, payments and the systems that connect them.' },
          { when: 'Research and development', placeholder: true, title: 'Building the foundations', copy: 'Years of research, development and real-world experimentation across identity, payments, commerce and institutional infrastructure shape the interoperable environment FORUS operates today.' },
          { when: '2024', title: 'Recognition for WOW Connect', copy: 'The Eastern Cape Transport Tertiary Co-operative, for which WOW Connect was developed, is named Fintech Innovation of the Year at Africa Tech Festival 2024.' },
          { when: '4 July 2026', title: 'Connect with a Coop', copy: 'On the International Day of Cooperatives, FORUS-Grow, Unati / UAMMCL and The Dream sign a Memorandum of Understanding to build a cooperative-led digital finance, farmer and community impact ecosystem linking Africa and India.' },
          { when: '10 September 2026', title: 'Partnerships for the cooperative economy', copy: 'FORUS signs a Strategic Partnership Agreement with DotCooperation, becoming its Strategic Promotional and Implementation Partner for Africa, and announces a strategic collaboration with the World Agriculture Forum on the TerraNexus ecosystem.' },
          { when: 'Today', now: true, title: 'The next phase', copy: 'FORUS Digital is the group behind a growing infrastructure ecosystem, with FORUS.coop as its cooperative implementation and new partnerships across sectors and regions.' }
        ])}
      </div>
    </div>
  </div>
</section>
${ctaBand({ title: 'The next chapter is written with partners.', copy: 'FORUS works with organisations that bring sector knowledge, institutional capability, distribution, technology and trusted relationships.', secondary: `<a class="btn btn-outline" href="purpose-principles.html">Purpose and principles</a>` })}
`
};

const purpose = {
  file: 'purpose-principles.html', title: 'Purpose & Principles', active: 'forus', theme: 'dark',
  description: 'A world of connected digital economies in which more people can participate in the value they help create.',
  body: `
${pageHero({
  eyebrow: 'Purpose and principles',
  title: 'Technology should expand participation, not limit it.',
  lead: 'FORUS exists to build the infrastructure that lets institutions, networks and communities connect, coordinate and grow together.',
  dark: true
})}
<section class="section">
  <div class="container">
    ${defRows([
      { key: 'Vision', val: 'A world of connected digital economies in which more people can participate in the value they help create.' },
      { key: 'Mission', val: 'Build interoperable digital infrastructure that enables institutions, networks and communities to connect, coordinate and grow.' }
    ])}
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow reveal">Principles</span>
      <h2 class="reveal" data-delay="1">Six principles that shape how we build.</h2>
    </div>
    ${principles([
      { title: 'Inclusive by design', copy: 'Inclusion is the architecture, not a campaign. The same infrastructure serves informal traders, regional organisations and global enterprises.' },
      { title: 'Interoperable by default', copy: 'Systems, institutions and services should connect. FORUS is designed to work alongside what already exists.' },
      { title: 'Built around people', copy: 'Identity, participation and opportunity begin with people, and the infrastructure follows their needs rather than the other way around.' },
      { title: 'Shared opportunity', copy: 'Value should move through a network by clear rules and reach those who help create it.' },
      { title: 'Trust matters', copy: 'Security, transparency and responsible deployment are conditions of participation, not features to add later.' },
      { title: 'Designed to evolve', copy: 'Markets, regulation and technology change. The infrastructure is built to adapt with them.' }
    ])}
  </div>
</section>
${statement({
  eyebrow: 'The strategic line',
  title: site.tagline,
  copy: '<p>A plain statement of what the infrastructure does, and the baseline for everything FORUS communicates.</p>',
  surface: ''
})}
${ctaFinal()}
`
};

export default [about, story, purpose];
