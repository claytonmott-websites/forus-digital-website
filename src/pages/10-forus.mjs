import { icon, pageHero, split, statement, ideas, defRows, principles, timeline2, layersMoment, routes, ctaBand, ctaFinal } from '../components.mjs';
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
${layersMoment()}
${split({
  eyebrow: 'Corporate role',
  title: 'One organisation. A growing ecosystem.',
  copy: `<p>FORUS Digital is the group behind the FORUS technology, intellectual property, infrastructure and ecosystem development.</p>
    <p>The infrastructure can sit beneath different organisations, brands and institutional environments. FORUS.coop, the cooperative ecosystem, is one major implementation built on it.</p>`,
  cta: `<div class="btn-group"><a class="btn btn-outline" href="ecosystem.html">Explore the ecosystem ${icon.arrow}</a></div>`,
  reverse: false
})}
<section class="section-sm" style="padding-top:0">
  <div class="container">
    ${routes([
      { title: 'Our story', href: 'our-story.html', line: 'Built over time. Built with purpose.' },
      { title: 'Purpose and principles', href: 'purpose-principles.html', line: 'Technology should expand participation, not limit it.' },
      { title: 'Leadership', href: 'leadership.html', line: 'The people responsible for the group, its infrastructure and its ecosystem.' },
      { title: 'FORUS Today', href: 'forus-today.html', line: 'Announcements, partnerships, coverage and perspectives.' }
    ])}
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
        <p class="copy" style="margin-top:24px;max-width:36ch">Verified milestones only. Earlier chapters are added as they are confirmed.</p>
      </div>
      <div>
        ${timeline2([
          { day: '10+', my: 'years ago', cat: 'The beginning', title: 'A question about participation', copy: 'FORUS begins with a founding idea: infrastructure that lets more people and organisations take part in the value an economy creates. Years of research, development and real-world experimentation across identity, payments, commerce and institutional infrastructure follow.' },
          { day: '2024', my: 'Africa Tech<br>Festival', cat: 'Recognition', title: 'Fintech Innovation of the Year', copy: 'The Eastern Cape Transport Tertiary Co-operative, for which WOW Connect was developed, is named Fintech Innovation of the Year at Africa Tech Festival 2024.' },
          { day: '04', my: 'Jul 2026', iso: '2026-07-04', cat: 'Memorandum of Understanding', title: 'Connect with a Coop', copy: 'On the International Day of Cooperatives, FORUS-Grow, Unati / UAMMCL and The Dream sign a Memorandum of Understanding to build a cooperative-led digital finance, farmer and community impact ecosystem linking Africa and India.', href: 'news-connect-with-a-coop.html' },
          { day: '10', my: 'Sep 2026', iso: '2026-09-10', cat: 'Partnerships', title: 'Partnerships for the cooperative economy', copy: 'FORUS signs a Strategic Partnership Agreement with DotCooperation, becoming its Strategic Promotional and Implementation Partner for Africa, and announces a strategic collaboration with the World Agriculture Forum on the TerraNexus ecosystem.', href: 'news-dotcooperation-partnership.html' },
          { day: 'Now', my: 'Next phase', now: true, cat: 'Today', title: 'A growing ecosystem', copy: 'FORUS Digital is the group behind a growing infrastructure ecosystem, with FORUS.coop as its cooperative implementation and new partnerships across sectors and regions.' }
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
