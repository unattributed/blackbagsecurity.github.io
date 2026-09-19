# S1.1C — Footer Normalization and Sprint 1 Qualification

SPRINT=1
SLICE=S1.1C
TYPE=implementation+qualification
DEPLOYMENT_ALLOWED=yes

## Objective

Normalize footer chassis sitewide, then qualify and deploy Sprint 1 global-chassis changes to dev.

## Authorized roles

- footer height/min-height
- footer horizontal padding
- brand position
- philosophy/descriptor slot
- footer nav
- footer active state if present
- terminal lime rule/accent
- footer responsive wrapping

Approved page-specific footer wording may remain only when documented in the exception registry.

## Prohibited changes

No body-section typography normalization.
No CTA normalization.
No card/section grammar work.
No page copy or imagery changes.

## Qualification

After footer work:
1. full build
2. Chromium and Firefox desktop smoke
3. mobile smoke
4. every public route HTTP/load check
5. representative screenshot for every page family
6. compare Sprint 1 baseline to post-Sprint 1 rendering
7. prove only chassis changed

Then update dev source-ref to this signed SHA and wait for successful dev deployment.

Repeat smoke against deployed site.

## Acceptance

PASS only if:
- shell/header/nav/favicon/footer all conform to Design System V1
- approved exceptions are explicit
- all public routes load
- no page content regression
- deployed SHA equals tested SHA
- production untouched

Suggested commit:
 normalize site footer and qualify global chassis

## Final block

SITE_DS_V1_S1_1C_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
FOOTER_CONTRACT=pass
SPRINT_1_QUALIFICATION=pass
WHOLE_SITE_ROUTE_QA=pass
FIREFOX_QA=pass
CHROMIUM_QA=pass
MOBILE_QA=pass
DEV_DEPLOYMENT=pass
DEPLOYED_SHA_VERIFIED=pass
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
