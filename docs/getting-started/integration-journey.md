---
title: "Integration journey"
sidebar_label: "Integration journey"
description: "The PAYX API call sequence: the documented core flow and the supporting APIs called on need."
---
# Integration journey

PAYX documents its API call sequence in two parts: a constant core, and supporting APIs called according to need. The source is explicit about the distinction:

:::info[The documented sequence]

However, the API call sequence is limited to the Login API, Quotation API, Payout API, and Transaction Enquiry API and the remaining APIs can be called based on the need.

:::

## Core flow

These four APIs are the sequence PAYX names. Every integration calls them, in this order.

<div className="payx-journey">

<div className="payx-journey__step">
<span className="payx-journey__index">01</span>
<span className="payx-journey__kind">Core transaction API</span>

**[Authentication](/docs/authentication/authentication)**

Authenticate and obtain the access token.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">02</span>
<span className="payx-journey__kind">Core transaction API</span>

**[Quotation](/docs/quotation/quotation)**

Fetch the exchange rate and charges before initiating a payout.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">03</span>
<span className="payx-journey__kind">Core transaction API</span>

**[Payout](/docs/payouts/overview)**

Initiate the fund transfer based on the selected quotation and beneficiary — FIAT, Crypto or WPT.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">04</span>
<span className="payx-journey__kind">Core transaction API</span>

**[Transaction Enquiry](/docs/enquiry/transaction-enquiry)**

Check the status of a previously initiated payout.

</div>

</div>

## Supporting APIs

Called based on the need of the transaction, the payout rail and the customer. PAYX describes the Master APIs as "subject to requirement".

<div className="payx-cards">

<div className="payx-card">

### [Master APIs](/docs/master-apis)

Provide necessary configuration data (e.g., country list, currency list, payout modes) and should be called early, typically after login and before creating quotations or payouts (if required).

</div>

<div className="payx-card">

### [Bank List](/docs/master-apis/bank-list)

Retrieves the list of bank details and related parameters required by a specific correspondent, based on the provided receiver code. Required for FIAT bank payouts.

</div>

<div className="payx-card">

### [Crypto Network](/docs/master-apis/crypto-network)

Fetches the network list for Crypto payments. Required for Crypto payouts.

</div>

<div className="payx-card">

### [Validate Crypto Wallet](/docs/master-apis/validate-crypto-wallet)

Validates the crypto wallet address for crypto payments.

</div>

<div className="payx-card">

### [WPT Wallet List](/docs/master-apis/wpt-wallet-list)

Fetches the list of WPT providers. Required for WPT payouts.

</div>

<div className="payx-card">

### [Document Upload](/docs/documents/document-upload)

Enables the client to upload customer-related documents, including ID proofs and invoices.

</div>

<div className="payx-card">

### [Customer Registration](/docs/customers/customer-registration)

Registers the customer in the system. May also be performed on the fly during payout.

</div>

<div className="payx-card">

### [Balance Enquiry](/docs/enquiry/balance-enquiry)

Retrieves the current wallet or account balance.

</div>

</div>

## Data carried between the calls

These links are the ones the PAYX field tables establish.

| Produced by | Field | Consumed by |
|---|---|---|
| Quotation | `forexQuoteId` | Payout — `compliance.forexQuoteId` |
| Quotation | `fxRateValue` | Payout — `transactionInfo.fxRateValue` |
| Document Upload | `docReferenceNumber` | Payout — `sender.docReferenceNumber` |
| Payout | `transReference` | Transaction Enquiry — `value` |
| Quotation | `customerRegistrationAllowed` | Governs whether on-the-fly registration is available |

## Sequence as originally numbered

For reference, the eight-step ordering as PAYX lists it:

# Sequence of API Call

The Pay CrossBorder supports the API call in the following sequence.
 1. **[Login (Authentication) API](/docs/authentication/authentication)**
    ➤ Required to authenticate and obtain access tokens for subsequent calls.
 2. **[Master APIs (subject to requirement)](/docs/master-apis)**
    ➤ These provide necessary configuration data (e.g., country list, currency list, payout modes) and should be called early, typically after login and before creating quotations or payouts (if required).
 3. **[Quotation API](/docs/quotation/quotation)**
    ➤ Used to fetch the exchange rate and charges before initiating a payout.
 4. **[Bank List API](/docs/master-apis/bank-list)**
    ➤ Retrieves the list of bank details and related parameters required by a specific correspondent, based on the provided receiver code.
 5. **[Document Upload API](/docs/documents/document-upload)**
    ➤ Enables the client to upload customer-related documents, including ID proofs and invoices.
 6. **[Payout API](/docs/payouts/fiat-payout)**
    ➤ Initiates the fund transfer based on the selected quotation and beneficiary.
 7. **[Transaction Enquiry API](/docs/enquiry/transaction-enquiry)**
    ➤ Used to check the status of a previously initiated payout.
 8. **[Balance API](/docs/enquiry/balance-enquiry)**
    ➤ Retrieves the current wallet or account balance.

However, the API call sequence is limited to the Login API, Quotation API, Payout API, and Transaction Enquiry API and the remaining APIs can be called based on the need.
