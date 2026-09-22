# Contact Page Email-Only Lock

**Status:** LOCKED
**Date:** 2026-09-05
**Applies to:** production redesign implementation

## Decision

The public Contact page MUST NOT expose a web inquiry form or public upload control.

## Approved contact model

- Primary engagement contact: `hello@blackbagsecurity.com`
- Security / disclosure contact: `security@blackbagsecurity.com`
- PGP or another secure transfer channel is established deliberately after initial contact.
- Scheduling may be initiated by email rather than an embedded public booking form.
- No CAPTCHA, public form backend, or public file-upload surface is required.

## Design requirement

The Contact page remains visually rich and consistent with the approved site design, but all primary conversion paths resolve to controlled email actions. The page should communicate secure contact options visually without introducing unnecessary public attack or abuse surfaces.

## Change control

Do not add a public web form, upload widget, or third-party contact widget without explicit new approval from the owner.
