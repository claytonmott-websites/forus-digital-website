import { icon, pageHero, blocks, people, principles, ctaBand, ctaFinal, statement } from '../components.mjs';
import { site } from '../data.mjs';

const partner = {
  file: 'partner.html', title: 'Partner with FORUS', active: '', theme: 'static',
  description: 'FORUS works with organisations seeking to connect people, systems, services and economic opportunity. Start the conversation.',
  body: `
${pageHero({ eyebrow: 'Partner with FORUS', title: 'What could we build together?', lead: 'FORUS works with organisations seeking to connect people, systems, services and economic opportunity.', mark: true, rule: true })}
<section class="section" style="padding-top:0">
  <div class="container">
    <div class="form-layout">
      <aside class="form-side reveal">
        <div class="aside-box"><h4>What happens next</h4><p>A member of the FORUS team reviews every enquiry and responds directly. Where there is a fit, we arrange an introductory conversation about your organisation, your network and what you would like to connect.</p></div>
        <div class="aside-box"><h4>Cooperatives</h4><p>Cooperatives, federations and apex bodies can also engage through the cooperative ecosystem.</p><a href="${site.coop}" target="_blank" rel="noopener">Visit FORUS.coop ↗</a></div>
        <div class="aside-box"><h4>Other enquiries</h4><a href="mailto:${site.email}?subject=Media%20enquiry">Media enquiries</a><a href="mailto:${site.email}?subject=Investor%20Relations">Investor Relations</a><a href="contact.html">General contact</a></div>
      </aside>
      <div class="reveal" data-delay="1">
        <form class="form-grid" data-partner-form novalidate action="#" method="post">
          <div class="field full">
            <label for="f-type">I represent a</label>
            <select id="f-type" name="organisation_type" required>
              <option value="">Select one</option>
              <option>Cooperative or cooperative network</option>
              <option>Financial institution</option>
              <option>Government or public-sector organisation</option>
              <option>Enterprise or industry network</option>
              <option>Technology organisation</option>
              <option>Development organisation</option>
              <option>Investor</option>
              <option>Media organisation</option>
              <option>Other</option>
            </select>
            <span class="error">Please select the type of organisation you represent.</span>
          </div>
          <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" type="text" autocomplete="name" required><span class="error">Please enter your name.</span></div>
          <div class="field"><label for="f-org">Organisation</label><input id="f-org" name="organisation" type="text" autocomplete="organization" required><span class="error">Please enter your organisation.</span></div>
          <div class="field"><label for="f-role">Role</label><input id="f-role" name="role" type="text" autocomplete="organization-title" required><span class="error">Please enter your role.</span></div>
          <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required><span class="error">Please enter a valid email address.</span></div>
          <div class="field"><label for="f-country">Country</label><input id="f-country" name="country" type="text" autocomplete="country-name" required><span class="error">Please enter your country.</span></div>
          <div class="field"><label for="f-web">Website <span class="opt">(optional)</span></label><input id="f-web" name="website" type="url" autocomplete="url" placeholder="https://"></div>
          <div class="field full"><label for="f-msg">What would you like to explore?</label><textarea id="f-msg" name="message" required></textarea><span class="error">Please tell us what you would like to explore.</span></div>
          <div class="form-foot">
            <button class="btn btn-primary" type="submit">Start the conversation ${icon.arrow}</button>
            <p class="small mute">By submitting this form you agree to FORUS contacting you about your enquiry. See our <a href="privacy.html" style="text-decoration:underline">privacy notice</a>.</p>
          </div>
        </form>
        <div class="form-success" role="status">
          <h3>Thank you. We have your enquiry.</h3>
          <p class="copy">A member of the FORUS team will be in touch. In the meantime, you can explore the <a href="infrastructure.html" style="text-decoration:underline">infrastructure</a> or read the latest from <a href="forus-today.html" style="text-decoration:underline">FORUS Today</a>.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`
};

const contact = {
  file: 'contact.html', title: 'Contact', active: '', theme: 'light',
  description: 'Contact FORUS Digital for partnership, media, investor and general enquiries.',
  body: `
${pageHero({ eyebrow: 'Contact', title: 'Get in touch with FORUS.', lead: 'Choose the route that fits your enquiry. Every message is read by a member of the FORUS team.', rule: true })}
<section class="section" style="padding-top:0">
  <div class="container">
    ${blocks([
      { title: 'Partner with FORUS', copy: 'For cooperatives, institutions, governments, enterprises, networks and technology organisations exploring what could be built together.', href: 'partner.html', label: 'Start the conversation' },
      { title: 'Media enquiries', copy: 'Interviews, comment and information for journalists and publishers.', href: `mailto:${site.email}?subject=Media%20enquiry`, label: site.email },
      { title: 'Investor Relations', copy: 'Investor information is shared directly with qualified parties.', href: `mailto:${site.email}?subject=Investor%20Relations`, label: 'Contact Investor Relations' },
      { title: 'General enquiries', copy: 'Everything else, including technical resources and developer access requests.', href: `mailto:${site.email}`, label: site.email }
    ], 'four')}
    <div class="def-rows" style="margin-top:clamp(48px,6vw,80px)">
      <div class="def-row reveal"><span class="def-key">Organisation</span><p class="def-val" style="font-size:1.125rem;font-weight:500">FORUS Digital Group</p></div>
      <div class="def-row reveal"><span class="def-key">Location</span><p class="def-val" style="font-size:1.125rem;font-weight:500">South Africa <span class="placeholder">Registered address to be confirmed</span></p></div>
      <div class="def-row reveal"><span class="def-key">Cooperative ecosystem</span><p class="def-val" style="font-size:1.125rem;font-weight:500"><a href="${site.coop}" target="_blank" rel="noopener" style="text-decoration:underline">forus.coop</a></p></div>
    </div>
  </div>
</section>
${ctaFinal()}
`
};

const leadership = {
  file: 'leadership.html', title: 'Leadership', active: 'forus', theme: 'light',
  description: 'The people responsible for the FORUS group, its infrastructure and its ecosystem.',
  body: `
${pageHero({ eyebrow: 'Leadership', title: 'The people behind the infrastructure.', lead: 'FORUS Digital Group is led by a team with experience across technology, payments infrastructure, financial services and emerging markets.', rule: true })}
<section class="section" style="padding-top:0">
  <div class="container">
    ${people([
      { name: 'Sonny Fisher', role: 'Founder', bio: 'Conceived FORUS and has led its development over more than ten years, with a background in technology and payments infrastructure in emerging markets.' },
      { name: 'Mary Ann Brennan', role: 'Chief Executive Officer, FORUS Digital Group', bio: 'Chartered Accountant with cross-sector experience across financial services and capital markets in London and Africa.' },
      { name: 'Further leadership', role: 'To be confirmed', bio: 'Additional leadership profiles, photographs and approved biographies will be added on confirmation from the FORUS team.' }
    ])}
    <p class="footnote reveal">Profiles are kept brief and factual. Photographs and extended biographies are added only with each person’s approval.</p>
  </div>
</section>
${ctaBand({ title: 'Media and speaking requests.', copy: 'For interviews, comment or speaking requests, contact the FORUS media team.', label: 'Media enquiries', href: `mailto:${site.email}?subject=Media%20enquiry` })}
`
};

const technical = {
  file: 'technical-resources.html', title: 'Technical Resources', active: 'infrastructure', theme: 'dark',
  description: 'APIs, developer resources and integration information for approved FORUS partners.',
  body: `
${pageHero({ eyebrow: 'Technical resources', title: 'Integration for approved partners.', lead: 'FORUS provides developer and API access to approved partners under operational review. Documentation, credentials and integration support are provided during engagement.', dark: true, ctas: `<a class="btn btn-primary" href="partner.html">Request access ${icon.arrow}</a>` })}
<section class="section" id="apis">
  <div class="container">
    <div class="section-head"><span class="eyebrow reveal">APIs</span><h2 class="reveal" data-delay="1">Connect existing systems to FORUS infrastructure.</h2></div>
    ${principles([
      { title: 'Developer and API access', copy: 'Integrate approved partner and institutional systems with FORUS infrastructure through documented interfaces. Access is granted under operational review.' },
      { title: 'Webhooks and events', copy: 'Receive event notifications so that partner systems can respond to activity within the infrastructure.' },
      { title: 'Approved integrations', copy: 'External integrations are reviewed and approved so that connected systems meet the security and interoperability standards of the environment.' }
    ])}
  </div>
</section>
<section class="section on-paper" id="developers">
  <div class="container">
    <div class="section-head"><span class="eyebrow reveal">Developer resources</span><h2 class="reveal" data-delay="1">Documentation and support during engagement.</h2></div>
    ${blocks([
      { title: 'API documentation', copy: 'Reference documentation is provided to approved partners at the start of an integration engagement.', extra: '<span class="placeholder">Available on request</span>' },
      { title: 'Credentials and environments', copy: 'API credentials and test environments are issued once an integration has been scoped and approved.', extra: '<span class="placeholder">Available on request</span>' },
      { title: 'Integration support', copy: 'FORUS supports partners through scoping, build and go-live for each integration.', href: 'partner.html', label: 'Request access' },
      { title: 'Trust and interoperability', copy: 'How the infrastructure is designed to connect responsibly, and the conditions under which capabilities are deployed.', href: 'trust-interoperability.html', label: 'Read more' }
    ], 'four')}
    <p class="footnote reveal">Developer and API access, webhooks and external integrations are subject to operational review and availability by market and deployment.</p>
  </div>
</section>
${ctaFinal()}
`
};

const legal = (file, title, eyebrow, lead) => ({
  file, title, active: '', theme: 'static',
  description: `${title} for forus.digital.`,
  body: `
${pageHero({ eyebrow, title, lead, mark: false, rule: true })}
<section class="section" style="padding-top:0">
  <div class="container">
    <div class="legal reveal">
      <div class="notice" style="margin-bottom:40px">Content pending. The approved ${title.toLowerCase()} for forus.digital will be published here once reviewed and signed off by FORUS and its legal advisers.</div>
      <h2>Scope</h2>
      <p>This page will describe how FORUS Digital handles information relating to visitors to forus.digital and enquiries submitted through this website. It will be published in full once approved.</p>
      <h2>Contact</h2>
      <p>Questions about this page can be sent to <a href="mailto:${site.email}" style="text-decoration:underline">${site.email}</a>.</p>
    </div>
  </div>
</section>
`
});

export default [
  partner, contact, leadership, technical,
  legal('privacy.html', 'Privacy Notice', 'Legal', 'How FORUS Digital handles personal information on forus.digital.'),
  legal('terms.html', 'Terms of Use', 'Legal', 'The terms that apply to the use of forus.digital.')
];
