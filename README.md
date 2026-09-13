# forus.digital · corporate website rebuild

**Version 1.2 · 13 September 2026 · Motion pass: scroll-built scenes, parallax and the eight-arrow hero**

A complete, responsive, working prototype of the new FORUS Digital corporate website. This is a full strategic redesign: nothing from the old site's structure, copy, hierarchy or layout is inherited. The old site and the forus.coop review build were used only for brand assets, verified facts and technical convention.

## How to view it

**Review build:** https://claytonmott-websites.github.io/forus-digital-website/ (GitHub Pages, repository `claytonmott-websites/forus-digital-website`). Pushing to `main` redeploys the `site/` folder automatically through the workflow in `.github/workflows/pages.yml`.

Open `site/index.html` in a browser. Every page links to every other page with relative paths, so the site works from disk or from any static host. The workspace already uses Firebase Hosting for another project (`firebase.json` at the workspace root serves the `public` folder, which belongs to a separate app), so deploy this site as its own Firebase Hosting site or target pointed at `site/`, or to GitHub Pages for review, rather than into that `public` folder.

## How it is built

The site is plain HTML, CSS and JavaScript, which matches the existing project stack (static hosting, no framework). The pages are assembled from reusable components by a small Node build so that the header, footer, hero, cards, routing and CTA blocks are defined once.

```
src/
  build.mjs        node src/build.mjs  ->  writes site/*.html
  components.mjs   Header, footer, layout, page hero, split, statement, ideas, audience routes,
                   pillars figure, feature panel, implementation list, news cards, CTA components,
                   principles, definition rows, timeline, capability groups, cases, blocks, people,
                   article, status tag
  data.mjs         Navigation, pillars, audiences, editorial items, implementations, partners
  pages/           One module per page group; each exports page objects
site/
  *.html           Built pages (28)
  assets/css/site.css   The design system: tokens, base, header, buttons, sections, components, footer, responsive
  assets/js/site.js     Header state, dropdowns, mobile drawer, scroll reveal, newsroom filters, partner form
  assets/js/network.js  The homepage hero network field (canvas)
  assets/brand/         Logo (colour, reversed, white), mark (colour, white), pattern tile. Converted from the
                        official SVG collection with explicit fills so they can be inlined safely. Never redrawn.
  assets/img/           Approved photography from the forus.coop build, three widths each
```

Rebuild after any change to `src/`:

```
node src/build.mjs
```

The build refuses to write a page that contains an em dash.

## Motion layer (version 1.2)

The site now builds itself as you scroll. Everything lives in two files, `site/assets/css/motion.css` and `site/assets/js/motion.js`, and is scoped to `html.motion`. The page head only sets that class when the visitor has not asked for reduced motion, and every CSS custom property defaults to its finished state, so the site is complete and readable without JavaScript or with motion turned off.

**How the engine works.** Any element with `data-scene="pin"` (a tall wrapper with a sticky child) or `data-scene="view"` receives `--p` (build progress), `--pe` (entry progress) and `--pv` (progress through the viewport). Children with `data-range="a b"` receive `--t`, a 0 to 1 value between those two points of the scene. `data-steps` switches `.is-active` across `[data-step-item]` children. `data-parallax="0.1"` drifts an element against its parent. `data-count` counts up when seen. Headings are split into words (or characters with `data-split="chars"`) and rise into place. Shared components are wired automatically, so inner pages pick this up without template changes.

**Homepage scenes.**

| Scene | What happens |
|---|---|
| Hero | The eight arrows of the real FORUS mark fly in scattered, drift, then converge into the mark as you scroll. The copy lifts away, the mark centres and the strategic line builds beneath it. |
| FORUS Today | Slides up over the hero as a rounded sheet, with a pulsing live indicator. |
| What FORUS is | Pinned four-step build. Each foundation takes over in large type while a diagram assembles: identity ring, value moving between two nodes, stacked platform planes, then eight nodes in the division colours connecting into a network. |
| Breadth band | Two rows of large type, one solid and one outlined, move against each other with scroll. |
| Who we work with | Pinned horizontal track on desktop. Each audience panel carries one arrow of the mark in its division colour, drifting with the scroll. Stacks vertically on mobile. |
| Infrastructure | The dark section opens from an inset rounded frame to full bleed, then pins while the figure draws its rings and spokes, pops its nodes and turns the mark. |
| Evidence | The FORUS.coop photograph opens from a small circle; implementation rows slide in one after another. |
| Story | The numeral counts up to ten while the mark turns slowly behind it. |
| Closing CTA | The three lines of the strategic line arrive from alternate sides. |

A top progress bar uses the eight division colours. Buttons and row arrows are subtly magnetic on pointer devices.

**Tuning.** Scene lengths are set in `motion.css` (for example `.motion .stage-hero { height: 220vh }` and `.motion .pl-track { height: 420vh }`). Shorter heights make scenes play faster. Pinned scenes fall back to normal flow on small or short screens where noted in the responsive block.

## Homepage order (version 1.1)

Hero · FORUS Today activity layer · What FORUS is · Who we work with · Infrastructure · Infrastructure in action · Our story · Final CTA. The activity layer shows one featured item and two quieter headlines with large date numerals, drawn from the same verified items as the FORUS Today page; the former news card section at the foot of the page was removed so nothing appears twice. The FORUS Today dropdown carries a small "Latest activity" column with the two most recent items.

## Sitemap and navigation

Primary navigation (five items plus two utilities): FORUS · Infrastructure · Who We Work With · Ecosystem · FORUS Today · FORUS.coop ↗ · Partner with FORUS.

| Group | Pages |
|---|---|
| Home | `index.html` |
| FORUS | `about.html`, `our-story.html`, `purpose-principles.html` |
| Infrastructure | `infrastructure.html`, `capabilities.html`, `trust-interoperability.html` |
| Who We Work With | `who-we-work-with.html`, `cooperatives.html`, `financial-institutions.html`, `government-public-sector.html`, `enterprise-networks.html`, `investors.html`, `media.html` |
| Ecosystem | `ecosystem.html`, FORUS.coop (external), `partnerships.html`, `infrastructure-in-action.html` |
| FORUS Today | `forus-today.html` (filters: All, Newsroom, Press, Partnerships, Perspectives), three announcement pages, one perspective (draft) |
| Conversion | `partner.html` |
| Footer only | `leadership.html`, `contact.html`, `technical-resources.html` (APIs and Developer Resources), `privacy.html`, `terms.html` |

Desktop dropdowns open on hover and on click or keyboard. FORUS.coop is a Night Blue pill button carrying the FORUS mark, so it reads as a separate destination rather than a navigation item; it inverts to white over dark heroes. Partner with FORUS is an outlined button beside it. Below 1360px the header tightens (chevrons hidden); below 1200px the menu becomes a full-screen drawer with every group expanded, so no destination is hidden behind interaction.

## Design system in brief

- **Palette.** White and a cool paper tint carry most of the site. Night Blue anchors the dark full-bleed moments (infrastructure pillars, closing CTA, footer, selected heroes). Deep Blue for links and hover. Medium Blue for eyebrows on light, Light Blue on dark. The eight-colour spectrum appears only inside the mark. No gradients, no glow.
- **Type.** Montserrat throughout. Display up to 92px at 700 weight with tight tracking. Eyebrows 600, uppercase, tracked. Body 400 at 1.7 line height.
- **Layout.** 1280px container on the 8px mini-unit. Hairline rules structure content instead of card stacks. Editorial split sections with a sticky headline column. Rectangular buttons with a 4px radius.
- **Motion.** Hero entrance, scroll reveal, hover underlines and arrow nudges, the slow network field in the hero, slow pulses of value along the pillars figure, rails that draw in and timeline nodes that activate. Everything is disabled under `prefers-reduced-motion`.
- **Typographic and geometric systems (1.1).** Big date numerals (`.bigdate`), the numbered ladder list with a rail (`.ladder`), the oversized outlined numeral in the story band, the two-layer "Technology underneath. Opportunity above it." moment on About, the large-date timeline on Our Story, numbered capability rows, ring geometry on selected heroes, vertical gutter labels on wide screens, and cropped marks as watermarks. Cards now appear only where they aid navigation.
- **Photography.** Used in five places only: the FORUS.coop feature, the story band, and the four audience page heroes. Each image carries a `--focus` custom property for its crop.

## Content rules the build follows

- Both anchor lines appear exactly as supplied: the brand statement in the hero and footer, the strategic line as the closing CTA and the hero rule.
- No em dashes anywhere.
- No products, crypto, tokens, blockchain or stablecoins in any copy. No hostility toward banks, governments or institutions.
- No valuation, raise, forecasts, country licence material or store availability. The Investors page carries themes and a contact route only.
- Statuses on implementations are explicit: Live, Pilot, Partnership, In development. They come from the approved press releases of 4 July and 10 September 2026 and the capability catalogue. Do not upgrade them without confirmation.
- Editorial items are the two approved press releases of 10 September 2026, the approved press release of 4 July 2026, and one Perspective clearly labelled as a draft for approval.
- Leadership shows two published roles (Founder; CEO, FORUS Digital Group) with one-line factual descriptions and a placeholder for further profiles.

## Items marked as placeholders or awaiting confirmation

| Item | Where | Current treatment |
|---|---|---|
| Earlier milestones | `our-story.html` timeline | Verified milestones only; the first entry is the founding question without a specific date. Earlier chapters can be added once confirmed |
| Registered address | `contact.html` | Marked to be confirmed |
| Media and investor contact addresses | Media, Investors, Contact, articles | All route to `info@forus.digital` with a subject line. Replace with dedicated addresses if preferred |
| WOW Connect status | Ecosystem, Infrastructure in Action | Shown as Pilot, matching the capability catalogue. The press release uses present tense; confirm if it should read In implementation |
| Press coverage | FORUS Today, Press filter | Empty state with a note; add items as coverage is published |
| Perspective piece | `perspective-infrastructure-not-applications.html` | Written from approved positioning only, labelled Draft for approval |
| Partner form endpoint | `partner.html` | Client-side validation and a confirmation state only. Connect to a form service or API at implementation |
| Privacy and Terms | `privacy.html`, `terms.html` | Branded shells marked content pending |
| Leadership photographs and further profiles | `leadership.html` | Placeholder |
| API documentation | `technical-resources.html` | Marked available on request |
| Partner logos | `partnerships.html` | Names only, pending permission |

## Checked before handover

Every page rendered at 1440px and 390px with no horizontal overflow, the mobile drawer and desktop dropdowns working, filters on FORUS Today working from the URL hash, and the partner form validating and confirming. No em dashes in any built page.
