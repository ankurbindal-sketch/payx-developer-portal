# PAYX Developer Portal 1.0

Public developer documentation for the PAYX (Pay CrossBorder) cross-border payment APIs.

Built with Docusaurus 3.x using the PAYX Developer Portal design system and
documentation architecture.

Every contract in this reference is reproduced from the authoritative PAYX API
documentation source. No API behaviour is inferred from any other product.

## Quick start

```bash
npm install
npm start            # local dev server
npm run build        # production build -> build/
npm run serve        # serve the production build locally
```

## Repository contents

```
docs/          40 generated public documentation pages
src/css/       design system (custom.css)
src/pages/     landing page
static/img/    PAYX logo
sidebars.js    navigation
docusaurus.config.js
package.json
```

## Regenerating the documentation

`docs/` is **generated output — do not hand-edit it.** Pages are produced by a generator
that reads the authoritative PAYX documentation source export.

That source export is **not part of this repository.** It contains recovered internal
commentary, intentionally hidden API contracts and original personal data in example
payloads, none of which belongs in a public repository. It is held in the separate
internal source/audit package, together with the generator and the full audit trail:

```
PAYX Developer Portal — INTERNAL SOURCE/AUDIT package
  source/PAYX_FULL_SOURCE_EXPORT.json     authoritative source of truth
  source/PAYX_ASSET_MANIFEST.json
  source/PAYX_EXAMPLE_DATA_POLICY.json    example-data substitutions
  source/TABLEOFVALIDATIONS.xlsx          recovered, not published
  tools/payxconv.py                       source -> MDX converter
  tools/generate.py                       portal generator
  tools/build-manifest.json               page/operation provenance
  internal-audit/                          13 audit records (not routed)
  COMPLETENESS_REPORT.md
```

To regenerate:

1. Obtain the internal package (it is not on GitHub).
2. Overlay its `source/` and `tools/` directories onto a checkout of this repository.
3. Run `python3 tools/generate.py`, which rewrites `docs/` and writes the internal
   audit set to `internal-audit/`.
4. Run `npm run build` and commit only `docs/`. **Do not commit `source/`, `tools/` or
   `internal-audit/`** — `.gitignore` excludes all three as a safeguard.

## Content rules the generator enforces

1. Every technical statement on a public page originates in **active** PAYX source.
   Commented, hidden and legacy source is never published; it is preserved in the
   internal audit set, outside the Docusaurus content path, so no route exists for it.
2. No API field, endpoint, method, input type, length, requirement flag, validation,
   status or code is invented, renamed, reordered or silently corrected. Source
   contradictions are reproduced and recorded, not resolved.
3. FIAT, Crypto and WPT payouts are three separate contracts.
4. Unresolved items are recorded in the internal completeness report only. No TODO or
   REVIEW REQUIRED text appears on a client-facing page.
5. Example values carrying real personal or company identities are replaced with
   synthetic equivalents. Field names, endpoints, methods, requirement flags, lengths,
   PAYX result and status codes, currencies, country codes, crypto networks, validation
   values and every other wire-level identifier are never altered.

## Before publishing to integrators

Six items must be confirmed first; they are listed with full detail in the internal
completeness report. In short: the PAYX Sandbox and Production API base URLs, the
Authentication `scope` behaviour, access-token presentation on subsequent calls, the
`customerDocumentType` endpoint path conflict, and the Document Upload request
transport. None has been resolved by inference.
