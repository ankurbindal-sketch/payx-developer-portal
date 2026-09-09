---
title: "On-the-fly registration"
sidebar_label: "On-the-fly registration"
description: "Registering a PAYX customer during the payout request using isAutoRegistered and declaration."
---
# On-the-fly registration

A payout can carry full sender details and create the customer as part of the transaction, instead of requiring a prior call to [Customer Registration](/docs/customers/customer-registration). PAYX controls this with two boolean fields in the payout `sender` object.

## The controlling fields

| Sender block | Parameter | Input Type | Length | Requirement | Description |
|---|---|---|---|---|---|
| FIAT / Crypto — business | `isAutoRegistered` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg:true |
| FIAT / Crypto — business | `declaration` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg: true |
| FIAT / Crypto — business | `docReferenceNumber` | Alphanumeric | 10 - 30 | M | Should contains 10 to 30 digits alpha numeric only. eg:GJGJ877HNGG |
| FIAT / Crypto — customer | `isAutoRegistered` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg: true |
| FIAT / Crypto — customer | `declaration` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg: true |
| FIAT / Crypto — customer | `docReferenceNumber` | Alphanumeric | 01 - 30 | M | Should contains 10 to 30 digits alpha numeric only. eg:GJGJ877HNGG |
| WPT — customer | `isAutoRegistered` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg: true |
| WPT — customer | `declaration` | Boolean | 04 - 05 | M | true: in case of on the fly customer registration, <br /> false: in case of manual customer registration. eg: true |
| WPT — customer | `docReferenceNumber` | Alphanumeric | 01 - 30 | M | Should contains 10 to 30 digits alpha numeric only. eg:GJGJ877HNGG |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

The descriptions above are the PAYX field descriptions: `true` for on-the-fly customer registration, `false` for manual customer registration.

:::note[Declared length of `docReferenceNumber`]

PAYX declares this field as `10 - 30` in the business sender block and `01 - 30` in the customer sender block. Both are shown above exactly as documented.

:::

## Whether registration is available

The [Quotation](/docs/quotation/quotation) response carries `customerRegistrationAllowed`, which PAYX describes as indicating whether the "Customer registration service is enabled or not".

## Already-registered customers

Where the customer already exists, PAYX documents a shortened sender object on each payout contract, under **Registered Customer**:

- [FIAT Payout — Registered Customer](/docs/payouts/fiat-payout)
- [Crypto Payout — Registered Customer](/docs/payouts/crypto-payout)
- [WPT Payout — Registered Customer](/docs/payouts/wpt-payout)

PAYX describes this path as requiring "only a few key reference parameters … to identify the registered entities within the system", with the rest of the request unchanged.
