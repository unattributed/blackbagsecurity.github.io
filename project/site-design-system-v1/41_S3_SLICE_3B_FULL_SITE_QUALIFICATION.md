# S3.3B — Full-Site Design System Qualification

SPRINT=3
SLICE=S3.3B
TYPE=qualification
DEPLOYMENT_ALLOWED=yes

## Objective

Perform final whole-site design-system qualification against all public routes and approved flagship page references.

No new feature work is authorized.

## Qualification scope

Every public route must be:
- built
- requested successfully
- checked for expected title/route identity
- checked for missing assets
- checked for console errors where browser-tested
- checked for header/footer contract
- checked for favicon/no-logo contract
- checked for typography/action grammar
- checked for overflow at relevant viewports

Every page family must receive real-browser visual QA.

Approved flagship pages must receive screenshot comparison against their accepted reference where available.

## Required final artifacts

- whole-site-route-report.csv
- whole-site-design-system-matrix.csv
- flagship-reference-comparison/
- responsive-matrix.csv
- exceptions.json
- regression-summary.md
- deployed-source-ref.txt
- evidence-manifest.sha256

## Defect policy

Only defects preventing qualification may be corrected.
Each correction must:
- identify failed gate
- identify exact path
- remain within design-system scope
- receive before/after evidence

Do not perform opportunistic cleanup.

## Deploy

After local PASS:
- update dev preview source-ref to tested signed SHA
- wait for successful deployment
- verify exact deployed SHA
- repeat route smoke and representative browser QA

## Acceptance

PASS only if:
- zero unexplained design-system deviations
- zero broken public routes
- zero uncontrolled chrome variants
- exception registry matches observed exceptions
- deployed SHA proven
- production untouched

## Final block

SITE_DS_V1_S3_3B_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
WHOLE_SITE_ROUTE_QA=pass
DESIGN_SYSTEM_MATRIX=pass
FLAGSHIP_REFERENCE_QA=pass
RESPONSIVE_MATRIX=pass
EXCEPTION_REGISTRY_QA=pass
FIREFOX_QA=pass
CHROMIUM_QA=pass
DEV_DEPLOYMENT=pass
DEPLOYED_SHA_VERIFIED=pass
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
