# Evidence and Focus Contract

This file applies to every slice in the epic.

## No-mutation-of-focus rule

C-GPT-6 must operate on one slice only.

At slice start:
1. read the epic
2. read this contract
3. read STATUS_LEDGER.md
4. read only the current slice file
5. do not read future slice instructions unless required to resolve a direct dependency

The current slice file defines the only authorized objective.

If work outside the slice appears useful, record it in DEFERRED.md inside the local evidence directory. Do not implement it.

## Isolated workspace

Use:
 /home/foo/Workspace/blackbagsecurity-design-system-v1

Use branch:
 feature/site-design-system-v1-20260919

The first implementation slice must base this branch on the current independently accepted dev source SHA resolved at that time.

Never use production main as the implementation base.

## Clean-worktree gate

Before each slice:
- record HEAD
- record branch
- record origin
- require clean isolated worktree
- fetch without mutating worktree
- verify current HEAD equals prior slice PASS SHA
- verify production main separately

If HEAD is not the prior PASS SHA, stop BLOCKED.

## Focus lock

At slice start create local evidence:
 slice-focus-lock.json

It must contain:
- epic_id
- sprint_id
- slice_id
- start_sha
- objective
- allowed_paths
- allowed_visual_roles
- prohibited_paths
- prohibited_actions
- expected_evidence
- deployment_allowed true/false

Before commit, compare actual changed paths to allowed_paths.

Any unexplained path outside the allowlist is a BLOCKER.

## Evidence root

Use a non-public evidence path:

 /home/foo/Workspace/blackbagsecurity-design-system-v1-evidence/<slice-id>/<timestamp>/

Do not commit browser screenshots or local evidence into public website assets.

## Required evidence per slice

Every slice produces:

1. slice-focus-lock.json
2. preflight.txt
3. changed-paths.txt
4. git-diff.patch
5. build.txt
6. slice-summary.json
7. evidence-manifest.sha256

Visual slices additionally produce:
8. route-matrix.csv
9. before/after screenshots for affected representative routes
10. visual-diff-summary.csv
11. Chromium QA result
12. Firefox QA result
13. responsive QA result where relevant

Qualification slices additionally produce:
14. whole-site-route-report.csv
15. exceptions.json
16. regression-summary.md
17. deployed-source-ref.txt if deployed

## Slice summary minimum schema

slice-summary.json must include:
- epic_id
- sprint_id
- slice_id
- status
- start_sha
- final_sha
- signed_commit
- build
- changed_paths
- allowed_paths_match
- routes_checked
- browsers
- viewports
- deviations_fixed
- deviations_deferred
- exception_ids
- production_touched
- evidence_directory

## Completeness rule

A slice is not complete because code compiles.

PASS requires:
- allowed scope only
- required evidence exists
- evidence manifest validates
- build passes when source changed
- relevant browser QA passes
- no undocumented regressions
- signed commit verifies for implementation slices
- STATUS_LEDGER.md can be updated with objective evidence

## Production rule

PRODUCTION_TOUCHED must always be no.

## Rollback rule

Each implementation slice must finish at a signed, independently verifiable commit.

If a later slice fails:
- return to the prior signed PASS SHA
- do not rewrite history
- do not force push
- preserve failure evidence

## Output discipline

Normal operation is silent.

Permitted messages:
1. genuine blocker
2. required human interaction
3. one final slice completion block

Do not narrate routine progress.
