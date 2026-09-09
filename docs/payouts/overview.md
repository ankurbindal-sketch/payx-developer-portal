---
title: "Payouts overview"
sidebar_label: "Overview"
description: "The shared PAYX payout request envelope and how the FIAT, Crypto and WPT contracts differ."
---
# Payouts overview

<span className="payx-method payx-method--post">POST</span>

PAYX documents three payout contracts — FIAT, Crypto and WPT. All three are submitted to the same endpoint and share the same four-object request envelope, but the `sender` and `receiver` objects differ by rail, so each has its own contract page.

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--post">POST</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/payoutProcess/api'}</code>
  </div>
</div>

## The three rails

<div className="payx-cards">

<div className="payx-card">
<span className="payx-card__kicker">B2B · C2C · C2B · B2C</span>

### [FIAT Payout](/docs/payouts/fiat-payout)

Bank payouts. The receiver object carries bank account, bank code, SWIFT code and account type fields.

</div>

<div className="payx-card">
<span className="payx-card__kicker">B2B · C2C · C2B · B2C</span>

### [Crypto Payout](/docs/payouts/crypto-payout)

Crypto payouts. The receiver object carries `cryptoNetwork` and `walletAddress` instead of bank fields, and the response returns both.

</div>

<div className="payx-card">
<span className="payx-card__kicker">C2C only</span>

### [WPT Payout](/docs/payouts/wpt-payout)

Wallet payouts. PAYX documents this rail for C2C transactions, with `receiverServiceProvider` fields identifying the wallet provider.

</div>

</div>

## Request structure

PAYX describes the four objects as follows.

| Object | Purpose (as PAYX describes it) |
|---|---|
| `transactionInfo` | Quotation details, currency pair, transaction amount and payout type. |
| `sender` | Complete details of the sender, business entity or individual customer. |
| `receiver` | Beneficiary details — bank account, crypto wallet or wallet provider depending on the rail. |
| `compliance` | Compliance and regulatory information, including purpose codes, source of funds and AML/KYC verification details. |

## How the rails differ

Documented parameter rows per object, per rail:

| Rail | `transactionInfo` | `sender` | `receiver` | `compliance` |
|---|---|---|---|---|
| FIAT | 16 rows | 44 rows | 50 rows | 5 rows |
| Crypto | 16 rows | 44 rows | 38 rows | 5 rows |
| WPT | 16 rows | 23 rows | 20 rows | 5 rows |

The `transactionInfo` and `compliance` objects are documented identically for all three rails. The differences are concentrated in `sender` and `receiver`:

| | FIAT | Crypto | WPT |
|---|---|---|---|
| Transaction types | B2B, C2C, C2B, B2C | B2B, C2C, C2B, B2C | C2C |
| Business sender block | yes | yes | not documented |
| Business receiver block | yes | yes | not documented |
| Beneficiary destination | bank account fields | `cryptoNetwork`, `walletAddress` | `receiverServiceProviderName`, `receiverServiceProviderCode`, `receiverServiceProviderMobile` |
| Rail-specific response fields | — | `walletAddress`, `cryptoNetwork` | — |

## Compliance object

Documented identically on all three contracts:

| Parameter | Description |
|---|---|
| `forexQuoteId` | From the [Quotation](/docs/quotation/quotation) response |
| `remittancePurpose` | See [Remittance Purpose](/docs/master-apis/remittance-purpose) |
| `sourceOfFund` | See [Source of Fund](/docs/master-apis/source-of-fund) |
| `relationship` | See [Relationship](/docs/master-apis/relationship) |

The requirement flags, input types and lengths for these fields are on each contract page.

## Registered versus new customers

Each contract documents both a full sender object and a shortened **Registered Customer** variant. See [On-the-fly registration](/docs/customers/on-the-fly-registration).
