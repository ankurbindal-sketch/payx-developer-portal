---
title: "Field requirement rules"
sidebar_label: "Field requirement rules"
description: "How PAYX Mandatory and Conditional payout field requirements interact with correspondent requirements."
---
# Field requirement rules

PAYX states the precedence between the requirement flags on the Payout API and the correspondent-specific requirements in the validation tables. This is the source wording.

:::info[Field requirement clarification]

- Fields marked as Mandatory in the Payout Api must always be provided, irrespective of whether the correspondent requires them or not. These fields are enforced at the application level and are non-negotiable.
- Fields marked as Conditional are subject to correspondent-specific requirements. Such fields are mandatory only when explicitly required by the selected correspondent, as described in the corresponding conditions section below.
- Users are required to validate and comply with correspondent rules only for fields marked as Conditional in the Payout Api. Mandatory fields defined in this documentation(Payout Api) take precedence and must be supplied in all cases.

:::

## Reading the validation tables

:::note

Note: "YES" indicates that the field is mandatory, while "NO" indicates that it is optional.

:::

The two validation references qualify **Conditional** payout fields only:

- [Currency validations](/docs/validation/currency-validations) — by payout currency and rail, for sender and beneficiary, individual and business
- [Country validations](/docs/validation/country-validations) — by destination country on the SWIFT rail

Values are reproduced exactly as PAYX writes them, including annotated cells such as "YES it represents the Swift Code" and currency tokens such as `EUR, EUR-INSTANT` and `USD-USA`.
