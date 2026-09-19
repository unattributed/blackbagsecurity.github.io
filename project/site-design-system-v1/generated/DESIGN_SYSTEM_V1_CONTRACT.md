# Black Bag Security Design System V1 Contract

SLICE=S0.0B
START_SHA=8a196b81ef927236d6327e98557795454fc4b96c
GLOBAL_ROLES_DEFINED=22
EXCEPTIONS=10
UNRESOLVED_CONFLICTS=0
TYPE=governance
DEPLOYMENT_ALLOWED=no

## Authority and meaning

This contract defines the target shared system for the entire generated public site. It does not claim that the existing rendering already conforms. S0.0A's 18 observations remain an immutable baseline; this document records their disposition without rewriting that audit.

Authority is current owner direction, then mandatory approved-reference requirements, then this contract, accepted rendering, and historical implementation. The current S0.0B owner direction resolves DSV1-003, DSV1-010, DSV1-014 and DSV1-017. It also preserves /research/ as route-governance debt.

A CSS value, screenshot measurement, old layout name, page age, successful deployment, or audit classification alone cannot establish an exception. Each operative exception is enumerated in [EXCEPTION_REGISTRY.md](EXCEPTION_REGISTRY.md) with exact role, bounded value and approved authority. Numerical defaults and units are in [TOKEN_TABLE.md](TOKEN_TABLE.md). Named values in that table are governance notation, not implemented CSS custom properties.

The MAIN/SERVICES desktop shell, header and readable type supply the default scale. Where their historic implementations differ, this contract chooses one value explicitly. This is a governance decision within S0.0B, not a claim that both stylesheets already use that value.

## Whole-site applicability

The accepted S0.0A inventory accounts for **33 routes in 10 families**: 26 HTML outputs including one client redirect, plus seven non-HTML support/hosting endpoints. Twenty-five routes render content. Legacy layouts are fully in scope. Asset resources remain regression dependencies of their consumers, not additional page families.

| Family | Count | Explicit route set | Applicability | Registry |
|---|---|---|---|---|
| MAIN | 1 | / | all visual roles | EX-005 |
| SERVICES | 1 | /services/ | all visual roles | EX-005 |
| SERVICE_CHILD | 9 | /services/penetration-testing/; /services/red-teaming/; /services/reverse-engineering/; /services/secure-code-review/; /services/secure-engineering/; /services/adversary-validation/; /services/ai-security/; /services/application-api-security/; /services/secure-systems-engineering/ | all visual roles; includes legacy home-v2 routes | EX-002 (secure-engineering); EX-004 (red-teaming); EX-005 |
| CAPABILITY | 1 | /capability/ | all visual roles | EX-002; EX-005; EX-006 |
| CAPABILITY_SUBPAGE | 6 | /arsenal/; /arsenal/aotp/; /arsenal/browser-safe-ai-security/; /arsenal/openbsd-mailstack/; /arsenal/osmap/; /arsenal/security-engagement-platform/ | all visual roles; includes legacy landing and products | EX-003 (AOTP); EX-005; EX-007 |
| ABOUT | 1 | /about/ | all visual roles; /about/#contact retained as fragment, not a separate page | EX-001; EX-005 |
| SECONDARY_PUBLIC | 5 | /industries/; /methodology/; /on-site-engagements/; /policies/; /trust/ | all visual roles; both home-v2 and marketing implementations | EX-005 |
| PUBLIC_REDIRECT | 1 | /research/ | redirect behavior and destination regression; no visible chassis insertion | EX-009 |
| INTERNAL_COMPARISON | 1 | /compare/services-before-technical-writing/ | existing public route, full applicable shared-grammar coverage, publication behavior frozen | EX-005; EX-008 |
| PUBLIC_SUPPORT_ENDPOINT | 7 | /CNAME; /llms.txt; /robots.txt; /security.txt; /.well-known/security.txt; /.well-known/autoconfig/mail/config-v1.1.xml; /sitemap.xml | build/output coverage; no HTML visual roles | EX-010 |

The 90 localized source pages in ar, de, es, fr, he, ja, ko, pt-br and th are excluded by the accepted build. There are no generated localized public routes in this baseline. Do not change exclusion settings or translations. If an independently authorized future build emits localized public routes, the shared system applies to them too, with logical inline alignment, correct direction and preserved translated content; they must be added to coverage before claiming whole-site qualification.

No /contact/ page is invented. Existing /about/#contact is a required fragment target. No route, redirect, content, metadata, robots policy or sitemap publication behavior is changed by S0.0B.

## Global roles

| ID | Global role | One default contract |
|---|---|---|
| G01 | Desktop shell | 1320px maximum; width min(92vw,1320px) at >=1100px; centered; 30px bottom space; 1px frame, square top and 7px lower corners. Below 1100px: full width, no outer side/bottom frame, no outer radius or bottom gap. Internal content may retain its approved arrangement. |
| G02 | Header geometry | 64px desktop baseline with 32px inline padding and columns 230px minmax(0,1fr) 280px. Use min-height and content expansion for zoom or long text, not clipping. Below 1100px use the common two-row reflow. No page-wide scale transform or optical translation. |
| G03 | Brand lockup slot | Text-only BLACK BAG SECURITY, 14px sans, weight 700, .16em tracking, left aligned. Its home link remains /. The brand slot is separate from navigation and descriptor slots. Approved compound lockups use EX-001/EX-002; no pictorial substitute. |
| G04 | Descriptor slot | Default existing institutional wording PEOPLE / PERSPECTIVE / PROGRESS, 10px sans, weight 700, .15em tracking, right aligned within 280px. Text wraps or the header reflows; it is not cropped. Approved wording/placement or absence is enumerated in EX-001 through EX-003; never invent replacement copy. |
| G05 | Primary navigation | One default ordered taxonomy: Home (/), Services (/services/), Capability (/capability/), About (/about/), Contact (/about/#contact). Sans 12px/700, .12em, uppercase visual treatment, gap clamp(22px,2.2cqw,34px). No horizontal translation; preserve keyboard order. |
| G06 | Active navigation | One location indicator, 2px lime underline centered on the label, width label+12px, bottom aligned. Exact route uses aria-current=page. A child route marks its section parent as the current location without falsely declaring it the current page. The route map below resolves secondary pages and contact fragments. |
| G07 | Brand and favicon policy | Black Bag Security has no graphical logo. Every HTML document uses one deliberate empty favicon declaration: `<link rel="icon" href="data:,">`. No bag, shield, monogram, invented symbol, graphical favicon, alternate touch icon or manifest icon is a permitted brand exception. Existing graphical uses are historical debt. Functional content icons and genuine product imagery are not BBS branding. |
| G08 | Footer chassis | Shared 82px minimum desktop band, 30px inline padding, grid 200px minmax(0,1fr) auto, 22px column gap, centered vertically, 1px structural separator. Brand/descriptor/navigation occupy the same slots. Wording and legal items may wrap within them and expand height intrinsically. Below 1100px: one column, 20px block/16px inline padding, 13px row gap; navigation wraps. EX-002/EX-004 change content only. |
| G09 | Serif typography | Georgia, Times New Roman, Times, serif; weight 400 for editorial display and section headings. Default H1 clamp(39px,4.4cqw,58px), line-height 1.05, tracking -.025em; display H2 clamp(28px,2.8cqw,37px), line-height 1.1. Retain semantic heading order; product/title distinctions in EX-006/EX-007 are not browser chrome. |
| G10 | Sans typography | Arial, Helvetica, sans-serif for body, navigation, labels and actions. Body 16px/1.5, lead 17px/1.4, card heading 15px/1.2 weight 700, card body 13px/1.4, supporting text 12px/1.4. Do not shrink readable type to fit a raster coordinate or override real product screenshot typography. |
| G11 | Palette and accent hierarchy | Deep navy/graphite surfaces; primary text #f2f5f5, muted #a8b5bd; lime #d7ff22 for primary action/current location/focus; cyan #39c9ff for contextual technical support. Product screenshots and approved imagery retain their own pixels. Cyan does not become a second primary brand/action system. |
| G12 | Border and divider family | Structural steel #244150, stronger card edge #315466, outer frame #294656; solid 1px baseline. Emphasis/focus/accent rules use 2px. Maintain continuous section dividers; no ad-hoc neon, bevel or shadow family. |
| G13 | Primary CTA | Lime fill and border, #071016 label, 46px minimum height, 220px desktop minimum width, 20px inline padding, 2px radius, 13px/700 sans; label and optional arrow separated by 16px. Allow intrinsic height for wrapping. Preserve action label, order and destination. |
| G14 | Secondary CTA | Same type, padding, height and radius; transparent/deep-navy surface, #f2f5f5 label, 1px #577180 outline; 202px desktop minimum width. An outlined lime variant may express the page's primary action where required by approved hierarchy (EX-005); it is not an unrelated component. |
| G15 | Tertiary CTA | Text link with optional directional arrow; 13px/700 sans, lime for action and cyan only for contextual technical links; visible underline on hover and focus, 2px focus ring. No filled box by default. Inline prose links keep their sentence typography. |
| G16 | Eyebrow grammar | 11px/700 sans, line-height 1.4, .16em uppercase, muted text with a 28px by 2px lime leading rule and 14px gap. Preserve wording and breadcrumb semantics; short labels may wrap without hiding content. |
| G17 | Section-title grammar | Distinguish compact index label (11px/700 sans, .14em uppercase; 30px by 2px adjacent rule) from editorial H2 (G09). Do not turn every H2 into a small eyebrow or every compact section label into a display headline. Preserve existing heading hierarchy and approved composition. |
| G18 | Directional microcopy | 10px/700 sans, line-height 1.4, .13em uppercase; muted when descriptive, lime when an action. It cannot carry essential body information alone. Preserve its text; use logical reading order and wrap/reposition rather than clipping. |
| G19 | Card and surface grammar | Shared border, weight, radius, surface, interaction and typography tokens apply to live site cards. Default card: 1px strong edge, 4px radius, surface-raised, 15px heading/13px body. Do not standardize information architecture, imagery, density, grid counts or internal arrangement. Static cards have no fake hover affordance; actionable cards use the shared state family. |
| G20 | Focus treatment | Every keyboard action exposes a 2px lime outline with 3px offset, not only a color change. Do not clip focus within shells/cards or remove native fallback. Keep a visible skip link on focus. Product screenshots remain noninteractive imagery; actual controls must have meaningful names. |
| G21 | Responsive system | Canonical thresholds: 1100px desktop, 760px tablet, 500px narrow-mobile boundary. Ranges are exhaustive and non-overlapping; use intrinsic wrapping between thresholds. Shared chrome reflows before overlap. Preserve source order, imagery subjects, CTA order and contact anchors; no viewport-wide overflow or typography scaling tricks. |
| G22 | Interaction and motion | Shared 160ms ease transitions for color/border/surface only by default; hover strengthens card border to #5e8497, not card dimensions. Keyboard focus is equally discoverable. With prefers-reduced-motion:reduce, remove transitions and smooth scrolling. Do not add motion or interaction to decorative or static panels. |

## Header, footer and reference-boundary decisions

The shared default is a 64px desktop header and 82px minimum footer. Those are readable browser-space roles, not a scaled raster page height. Intrinsic growth for long approved wording, text enlargement or wrapping is part of the shared chassis; it is not a page-specific geometry exception.

ABOUT requires the two-part brand/descriptor lockup and vertical lime separator. CAPABILITY and Secure Engineering require their research/engineering/operations subline. AOTP explicitly prohibits right-side philosophy text. These bounded inner-slot requirements are registered; they do not authorize an independent global header or footer component.

The approved ABOUT and Red Teaming layout handoffs expressly identify mapped band values as screenshot comparison coordinates. AOTP's band list is expressly derived first-pass geometry requiring reference remeasurement. These do not, by themselves, require fixed browser heights of 93px, 50px, 104px, 134px or 96px. Therefore this contract grants **zero numerical footer-geometry exceptions** and **zero fixed header-height exceptions** from those measurements. This qualifies the broad S0.0A APPROVED_PAGE_IDENTITY labels without altering its historical findings.

If an actual approved reference subsequently demonstrates a mandatory geometry that cannot coexist with the chassis, preserve that reference requirement and register the exact role, reference location, scope and value before implementation. Do not infer it from current CSS or treat permission for different wording as geometry authority. There is no identified unresolved requirement of that kind in the reviewed S0.0B authority set.

Footer legal/wording exceptions remain content inside the shared grid. Empty content slots need not be filled with invented copy; existing additional legal/security links may remain accessible within the navigation/auxiliary region. Do not remove legal content merely to fit a band.

## Current-location mapping

| Route condition | Visual current section | Accessible location rule |
|---|---|---|
| / | Home | aria-current=page on exact Home link |
| /services/ | Services | aria-current=page on exact Services link |
| /services/*/ | Services | Section-parent indication; do not label /services/ as the current page |
| /capability/ | Capability | aria-current=page on exact Capability link |
| /arsenal/ and /arsenal/*/ | Capability | Section-parent indication; preserve exact page title/location separately |
| /about/ without contact fragment | About | aria-current=page on About |
| /about/#contact | Contact | Contact location takes precedence; no simultaneous About underline |
| /industries/, /methodology/, /on-site-engagements/, /policies/, /trust/ | No invented top-level parent | Expose exact page location using the existing page title and contextual/breadcrumb current item where present; no false aria-current on Home or About |
| /compare/services-before-technical-writing/ | No invented top-level parent | Preserve exact comparison page identity and publication; context must not imply it is current /services/ |
| /research/ | Destination owns state | Preserve client redirect; /arsenal/ uses Capability parent state |
| Seven support endpoints | Not applicable | No HTML navigation injected |

A missing top-level active item on a page absent from the primary taxonomy is not cured by falsely selecting another page. G06 requires truthful current-location semantics and a consistent indicator where a primary section exists. This contract resolves the design treatment of S0.0A DSV1-009; it does not modify markup in this slice.

## Responsive contract and units

Use viewport CSS pixels for thresholds and shell-relative container units only for the named fluid values. Establish the site shell as the inline-size container. At 1100px and above use desktop chrome; at 760..1099 use compact chrome with brand/descriptor followed by navigation; at 500..759 allow further wrapping; below 500 use single-column actions and content-directed stacks.

At any width, text enlargement or a registered compound lockup may trigger intrinsic wrapping before a collision. Allow height growth, wrapping footer links and local navigation scrolling if needed to keep all links available; do not create global horizontal scrolling, hide essential wording, or introduce a page-specific global breakpoint. Source order, content density, imagery subject, product hierarchy and CTA precedence remain unchanged. Page-specific grid counts and responsive compositions belong to EX-005, not a second chassis.

For later authorized implementation, check the boundaries immediately on both sides of 500, 760 and 1100, plus narrow mobile, tablet, desktop and wide desktop in Chromium and Firefox. This is a future acceptance rule, not a browser QA claim for S0.0B.

## Protected composition and card boundary

Normalize the live site's border family, border weight, radius family, surface tokens, hover/focus behavior and typography relationships. Preserve card information architecture, imagery, real product UX, density and approved internal arrangement. Use semantic variants for structural panels, cards, actions and process markers; do not force unrelated types into one universal component.

Preserve approved heroes, product narrative, section order, text, existing CTA destinations and intentional image treatments. Technical imagery may contain its own cyan palette; a screenshot is not a source of new site-wide tokens. Functional icons are distinct from graphical BBS branding.

## S0.0A disposition ledger

| Baseline ID | Disposition | Contract consequence |
|---|---|---|
| DSV1-001 | Historical chassis debt | G01-G08; no layout-generation exemption |
| DSV1-002 | Historical branding debt | G03/G07; no graphical BBS logo exception |
| DSV1-003 | RESOLVED by owner | G07: one empty non-graphical favicon; logo-bag.svg use is historical debt, never an approved page exception |
| DSV1-004 | Approved ABOUT identity narrowed to actual authority | EX-001 preserves mandated lockup; 93px existing CSS/QA band is not evidence of a mandatory global-header-height exception |
| DSV1-005 | Approved AOTP identity narrowed to actual authority | EX-003/EX-007 preserve absent philosophy and product story; 50px existing/derived QA band is not a mandatory global-header-height exception |
| DSV1-006 | Historical header debt | G02/G21 |
| DSV1-007 | Approved text/lockup exceptions | EX-001 through EX-003; no new wording |
| DSV1-008 | Historical navigation taxonomy debt | G05; route URLs and existing page content remain governed |
| DSV1-009 | Location-state debt with explicit mapping | G06 and current-location mapping; no falsely current parent pages |
| DSV1-010 | RESOLVED by owner | G08; EX-002/EX-004 content-only footer exceptions; geometry requires its own proved authority |
| DSV1-011 | Typography normalization debt; approved role distinctions retained | G09/G10; EX-005/EX-006/EX-007 |
| DSV1-012 | Action grammar debt | G13-G15; approved labels, destinations and hierarchy protected |
| DSV1-013 | Label grammar debt | G16-G18 |
| DSV1-014 | RESOLVED by owner | G19 and EX-005/EX-007 separate shared grammar from composition and genuine product UX |
| DSV1-015 | Responsive convergence debt | G21; responsive applicability does not grant page-specific global breakpoints |
| DSV1-016 | Existing route-governance debt | EX-009; preserve /research/ client redirect; no S0.0B remediation |
| DSV1-017 | RESOLVED FOR THIS EPIC ONLY | EX-008; public regression coverage; publication/indexing hygiene deferred outside this epic |
| DSV1-018 | Excluded-source boundary preserved | 90 source pages, nine locales, zero generated localized routes; preserve translated content and current exclusion settings |

The four authority findings are resolved by explicit owner direction, not by CSS inference. Publication/indexing hygiene for the comparison route remains separately deferred; /research/ client-redirect behavior remains existing route-governance debt. Neither disposition authorizes an implementation change.

## Completion and implementation boundaries

S0.0B changes only its three generated governance documents and its own status-ledger row. The S0.0A inventory, evidence and deviation register remain unchanged. No source build or browser rerun is necessary when the website source tree is byte-identical; evidence records that exemption explicitly rather than representing old QA as new.

Validation must prove 22 defined global roles, 10 complete authority-grounded exceptions, all 33 baseline routes mapped, all 18 findings dispositioned, zero unresolved current authority conflicts, required evidence checksums, signed governance checkpoint and publication to the existing feature branch. A separate signed ledger closure may record the governance checkpoint; its exact final HEAD is recorded in the slice evidence and final completion block.

No later slice starts through this contract. Any visual implementation, dev deployment, production update or independent route-hygiene work remains outside this slice.
