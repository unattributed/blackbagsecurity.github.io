# S0.0A — Whole-Site Baseline Inventory

SPRINT=0
SLICE=S0.0A
TYPE=diagnostic
DEPLOYMENT_ALLOWED=no

## Objective

Create the authoritative whole-site route, page-family and visual-system inventory before any remediation.

No visual/source implementation changes are authorized.

## Allowed changes

Only planning/governance artifacts under:
 project/site-design-system-v1/

Prefer no source changes other than updating this epic's audit outputs and STATUS_LEDGER.md on the implementation branch.

## Work

1. Resolve current independently accepted dev source SHA.
2. Create/verify isolated implementation workspace and branch.
3. Build the site with repository-supported tooling.
4. Enumerate every public route generated from authoritative source.
5. Classify each route into a page family.
6. Record source layout and stylesheet for each route.
7. Record shell, header, brand, descriptor, nav, active state, footer, favicon, typography roles, CTA styles, section grammar, card grammar and responsive breakpoints.
8. Capture baseline screenshots for representative pages from every family.
9. Create a deviation matrix.
10. Classify each deviation:
   - APPROVED_PAGE_IDENTITY
   - HISTORICAL_DEBT
   - UNINTENTIONAL_INCONSISTENCY
   - SHARED_SYSTEM_DEFECT
   - UNKNOWN_AUTHORITY
11. Do not fix anything.

## Required outputs

Local evidence:
- route-inventory.csv
- page-family-matrix.csv
- visual-system-inventory.csv
- deviation-matrix.csv
- baseline-screenshots/
- baseline-sha256.txt
- slice-summary.json
- evidence-manifest.sha256

Repository planning output:
- project/site-design-system-v1/generated/ROUTE_INVENTORY.md
- project/site-design-system-v1/generated/DEVIATION_REGISTER.md

## Acceptance

PASS only if:
- every public route is accounted for
- every route has a page-family classification
- every route has a source layout/CSS mapping
- no visual source files changed
- no dev deployment occurred
- production untouched
- unknown-authority conflicts are explicitly listed

## Final block

SITE_DS_V1_S0_0A_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<signed planning/audit sha or same sha if no commit required>
ROUTES_INVENTORIED=<count>
PAGE_FAMILIES=<count>
DEVIATIONS=<count>
UNKNOWN_AUTHORITY=<count>
SOURCE_MUTATION=no
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
