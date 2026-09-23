# Service transparency dialogs — component review

Accepted source: `a3a7d431d05135d3866b9ea5583c25ccc4e0c490`.

Bundle SHA-256: `e7db9547be8a0005b0c29f79908fb3e475ab0746b2680f22506784d3f87f6b7b`.

Prompt SHA-256: `46191e11fdc6c149cf8092a59cf417bacee1ecda9d5aa5474f7576729fe573bb`.

## Scope and host prerequisite

One native dialog, one controller, four inert content templates, and one shared
visual system implement the supplied workflows. Canonical text is in
`docs/_data/service_transparency_modals_v1.json`; it was parsed from the supplied
content specification rather than transcribed from images.

**Host integration authorized for dev review on 2026-09-23.** After reviewing the component delivery, the owner explicitly directed publication in the context of `dev.blackbagsecurity.com`, declining a separate review page. This supersedes the bundle's earlier host prerequisite/deployment restriction for dev only.

The accepted methodology content is preserved and extended with four workflow
cards in a Service transparency section after Client visibility. Each whole
card is a native button. The marketing layout loads the component only when
`service_transparency_modals: true`, and places the dialog outside the page shell.
Production publication remains unauthorized.

The standalone harness remains outside `docs/` for isolated testing. The normal
site build now includes the component on `/methodology/`. Public review starts
at `/methodology/#service-transparency`.

## Host integration contract

Load `service-transparency-modals-v1.css` and the deferred
`service-transparency-modals-v1.js` through the host's head. Include
`service-transparency-modals-v1.html` once after the main page shell. Each whole
card must be a native button with exactly one `data-method-modal` value:

- `engagement-plan`
- `executive-brief`
- `remediation-guidance`
- `retest-support`

The controller registers dialog semantics, accepts native button activation,
replaces the shared content, traps focus, restores the exact originating card,
and handles close controls, Escape and backdrop pointer gestures. Native
`showModal()` supplies top-layer placement and background inertness. Scroll
locking uses namespaced classes, preserving pre-existing page styles and inert
attributes. Duplicate script loading is guarded. All primary links use
`/about/#contact`.

## Verification

The tests directory contains the repeatable Playwright browser matrix, the
baseline build comparison, the route screenshot regression matrix, and the
reference comparison generator. Browser tests use an installed `playwright`
package; `NODE_PATH` can locate it. `QA_OUTPUT` selects the evidence directory;
`FIREFOX_PATH` optionally selects an installed Playwright Firefox executable.
Local harness and baseline servers use loopback ports 8793 and 8794 respectively.

Required browser coverage is Chromium and Firefox at 1920×1080, 1440×900,
1280×800, 768×1024, 390×844 and 320×640. Each variant is tested for exact content,
hover/focus without opening, pointer/touch/Enter/Space opening, four close paths,
focus trapping and return, native inertness, scroll locking, reopening at the
top, replacement while open, duplicate initialization, unique live IDs,
reduced motion, layout overflow and actual contact navigation.

Fourteen existing routes are compared against the accepted baseline in both
browsers at desktop and mobile sizes, including all current service pages. Methodology is now checked as the
integration host; its earlier pre-integration baseline remains in the evidence. The existing About CSP `frame-ancestors` meta warning is recorded
separately from the component, which must have no console errors.

## Visual review notes

The desktop shell uses the specification's preferred 1120px maximum width,
readable 16px workflow text, and internal scrolling for shorter viewports.
This changes line wrapping and proportions relative to the approximately
1000px-wide raster references. At tablet/mobile widths the workflow becomes
two/one columns. The sticky top close button remains reachable when scrolled.

The three illustrated headers reuse the accepted MAIN operations artwork.
The exact boardroom/logo artwork embedded in the references was not supplied
as a separate asset. Remediation retains the minimal header. Icons are real,
decorative inline SVG; workflow and panel text remain selectable HTML.
These artwork, icon and font-rendering differences are disclosed for owner
review; the implementation is not claimed to be pixel-identical to the mockups.

## Integrated qualification

The same modal matrix supports `QA_ROUTE=/methodology/` and `QA_BASE_URL` for local and deployed QA. Existing marketing-layout CSP warnings are recorded as baseline observations. Integration build comparison permits only `methodology/index.html` to change among the 256 previously accepted outputs.

## Services cards — direct popup integration

The owner's follow-up clarified that the visible site cards must open the popups directly. The Services page's Executive Brief, Remediation Guidance and Retest Support cards previously linked to Contact; they now activate their matching dialogs across the entire card. An Engagement Plan card is added to the same What You Receive section. The existing Evidence Pack remains available. Review all four at `/services/#service-deliverables`; Methodology also retains its working triggers.

The Services layout loads the existing shared modal component outside its page shell. Dedicated component CSS scopes the five-card responsive grid and accessible full-card button overlays to Services, preserving unrelated service offerings and sibling pages.
