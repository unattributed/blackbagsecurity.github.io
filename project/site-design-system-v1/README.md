# Black Bag Security Site Design System V1

This directory is the governed execution plan for whole-site visual continuity remediation.

## Mission

Make the site feel like one institution without making every page look the same.

Normalize the shared chassis:
- shell
- header
- brand geometry
- navigation
- favicon/no-logo policy
- footer
- typography roles
- CTA grammar
- section grammar
- card/surface treatment
- responsive behavior

Preserve page personality:
- approved copy
- approved section order
- approved imagery
- page-specific product/service storytelling
- approved page-specific descriptors where explicitly required

## Scope

This is a whole-site program. It is not a single-page task.

The program covers every public route generated from the website source, including current and future page families. Localized content is in scope for shared chrome and system consistency only; localized wording is out of scope unless separately authorized.

## Execution rule

Give C-GPT-6 exactly one slice file at a time.

For every slice, also provide:
1. 00_EPIC_SITE_DESIGN_SYSTEM_V1.md
2. 01_EVIDENCE_AND_FOCUS_CONTRACT.md
3. STATUS_LEDGER.md

Do not provide later slice files early.

## Ordered runbook

Sprint 0 — Baseline and contract
1. 10_S0_SLICE_0A_BASELINE_INVENTORY.md
2. 11_S0_SLICE_0B_DESIGN_SYSTEM_CONTRACT.md

Sprint 1 — Global chassis
3. 20_S1_SLICE_1A_GLOBAL_TOKENS_AND_SHELL.md
4. 21_S1_SLICE_1B_HEADER_NAV_FAVICON.md
5. 22_S1_SLICE_1C_FOOTER_AND_QUALIFICATION.md

Sprint 2 — Content grammar
6. 30_S2_SLICE_2A_TYPOGRAPHY_AND_CTAS.md
7. 31_S2_SLICE_2B_SECTION_AND_CARD_GRAMMAR.md
8. 32_S2_SLICE_2C_SPRINT_2_QUALIFICATION.md

Sprint 3 — Responsive convergence and final qualification
9. 40_S3_SLICE_3A_RESPONSIVE_CONVERGENCE.md
10. 41_S3_SLICE_3B_FULL_SITE_QUALIFICATION.md
11. 42_S3_SLICE_3C_FREEZE_AND_HANDOFF.md

## Branch safety

The planning files live on:
planning/site-design-system-v1-20260919

This planning branch is documentation only. It must not control dev preview and must never be promoted to production as a site release.

Implementation begins later from the then-current independently accepted dev source SHA on:
feature/site-design-system-v1-20260919

## Governing principle

Global chrome should be boringly consistent.
Page content should remain distinctive.
