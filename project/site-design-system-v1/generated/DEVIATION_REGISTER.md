# Site Design System V1 Deviation Register

Baseline source: `230499fb260786d555177154178edad074038a86`

Slice: S0.0A diagnostic inventory

Deviations: 18

Unknown-authority conflicts: 4

No item in this register was remediated. Classification follows the S0.0A vocabulary and preserves approved page identity where authority is already explicit.

| ID | Role | Classification | Affected scope | Baseline observation |
|---|---|---|---|---|
| DSV1-001 | Shared shell and chrome | HISTORICAL_DEBT | All 26 HTML routes | Eight active layout/chrome implementations produce 1320px and 1440px shells plus materially different header/footer geometry. |
| DSV1-002 | Header brand mark | HISTORICAL_DEBT | 14 `home-v2` routes | A graphical bag mark remains in the legacy shared header while current flagship layouts use text branding. |
| DSV1-003 | Favicon | UNKNOWN_AUTHORITY | All 26 HTML routes | Routes alternate between `logo-bag.svg` and a blank data URI, including differences inside SERVICE_CHILD. |
| DSV1-004 | Header geometry | APPROVED_PAGE_IDENTITY | `/about/` | ABOUT uses a 93px desktop header compared with the 64px MAIN/SERVICES baseline. |
| DSV1-005 | Header geometry | APPROVED_PAGE_IDENTITY | `/arsenal/aotp/` | Approved AOTP V4 uses a 50px desktop header and no descriptor. |
| DSV1-006 | Header geometry | HISTORICAL_DEBT | `home-v2` routes and `/methodology/` | Legacy shared layouts use 73px, 79px, and 85px desktop headers. |
| DSV1-007 | Brand descriptor | APPROVED_PAGE_IDENTITY | Flagship and approved child families | Descriptor content varies among institutional, research/engineering/operations, resilience, and absent forms. |
| DSV1-008 | Primary navigation taxonomy | HISTORICAL_DEBT | `home-v2` and `marketing` routes | Legacy navigation uses Method/Proof taxonomy or a four-item subset instead of the current Home/Services/Capability taxonomy. |
| DSV1-009 | Active navigation state | SHARED_SYSTEM_DEFECT | Five public secondary routes | `/industries/`, `/methodology/`, `/on-site-engagements/`, `/policies/`, and `/trust/` render no active primary-nav state. |
| DSV1-010 | Footer | UNKNOWN_AUTHORITY | All HTML families, especially Red Teaming | Footer geometry/content varies; Red Teaming exposes legal links only while sibling services expose global navigation. |
| DSV1-011 | Typography roles | HISTORICAL_DEBT | All HTML families | Desktop H1 roles span Georgia serif, Arial/Helvetica sans, and Space Grotesk at 32px through 93.6px. |
| DSV1-012 | CTA grammar | HISTORICAL_DEBT | All rendered page families | Independent class systems produce divergent fill, border, radius, type, and dimensional treatments. |
| DSV1-013 | Section-label grammar | HISTORICAL_DEBT | All rendered page families | Eyebrows, breadcrumbs, rules, casing, tracking, and accent treatments vary by layout. |
| DSV1-014 | Card and surface grammar | UNKNOWN_AUTHORITY | Content-bearing families | Borders, radii, gradients, and structures vary; the shared-token boundary versus approved composition is not yet named. |
| DSV1-015 | Responsive breakpoints | HISTORICAL_DEBT | All HTML families | Active CSS uses many independent breakpoint conditions from 1150px through 420px. |
| DSV1-016 | Public route behavior | HISTORICAL_DEBT | `/research/` | The sitemap indexes a 200 HTML client redirect that resolves to `/arsenal/`. |
| DSV1-017 | Public route authority | UNKNOWN_AUTHORITY | `/compare/services-before-technical-writing/` | A previous-version comparison page is generated, indexable, and present in the sitemap. |
| DSV1-018 | Localized route generation | APPROVED_PAGE_IDENTITY | 90 source pages in nine locale directories | The accepted configuration is explicitly English-only and generates zero localized routes while preserving translated source. |

## Unknown-authority conflicts

1. **DSV1-003 — favicon exception boundary.** The epic names global no-graphical-logo/favicon behavior, but S0.0A has no accepted rule that distinguishes prohibited graphical favicons from any permitted approved-page exception.
2. **DSV1-010 — Red Teaming footer.** The page-specific approved implementation conflicts with the epic's global-footer target. The contract must name either the approved exception or the shared footer requirement.
3. **DSV1-014 — card/surface boundary.** The epic targets shared grammar while explicitly allowing distinctive product and editorial composition. The token-versus-composition boundary needs an explicit contract.
4. **DSV1-017 — comparison route publication.** No current authority establishes whether the indexed previous-version comparison page is intentionally public.

## Evidence linkage

The local S0.0A evidence directory contains the authoritative per-route stylesheet order, computed desktop geometry, breakpoint conditions, focus-rule presence, screenshots, route/family matrices, and the detailed rationale for each classification. No future-slice instruction was used to classify or remediate these items.
