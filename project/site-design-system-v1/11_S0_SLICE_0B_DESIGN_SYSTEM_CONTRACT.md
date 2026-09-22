# S0.0B — Design System Contract and Exception Registry

SPRINT=0
SLICE=S0.0B
TYPE=governance
DEPLOYMENT_ALLOWED=no

## Objective

Convert the baseline inventory into a precise Design System V1 contract without changing page rendering.

## Preconditions

S0.0A=PASS
Current HEAD must equal S0.0A final SHA.

## Work

Define and document:
- shell max width and outer behavior
- desktop header height
- brand lockup slot
- descriptor slot
- nav scale/gaps
- active underline
- no-graphical-logo/favicon policy
- footer geometry
- serif/sans roles
- lime/cyan/border tokens
- CTA roles
- eyebrow/section-title/directional-microcopy grammar
- card/surface grammar
- focus treatment
- canonical responsive breakpoints

Create an exception registry.

Every exception must have:
- exception_id
- route/family
- role
- default contract
- exception value
- approved authority
- reason
- permanent_or_temporary

Do not infer an exception merely because current CSS differs.

## Required repository outputs

- project/site-design-system-v1/generated/DESIGN_SYSTEM_V1_CONTRACT.md
- project/site-design-system-v1/generated/EXCEPTION_REGISTRY.md
- project/site-design-system-v1/generated/TOKEN_TABLE.md

## Acceptance

PASS only if:
- all global roles have one default contract
- every known approved deviation has an exception entry
- no unresolved conflict is hidden
- no rendering/source implementation changed
- owner approval is required only for true authority conflicts
- production untouched

## Final block

SITE_DS_V1_S0_0B_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<signed governance sha>
GLOBAL_ROLES_DEFINED=<count>
EXCEPTIONS=<count>
UNRESOLVED_CONFLICTS=0
SOURCE_VISUAL_MUTATION=no
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
