---
title: "Integration journey"
sidebar_label: "Integration journey"
description: "What it takes to complete a PAYX payout, the supporting APIs called on need, and what else you can integrate."
---
# Integration journey

What a PAYX integration does, in the order it does it, and which APIs are called only when the transaction needs them.

## What it takes to complete a payout

To complete a payout, an integration authenticates, requests a quotation, submits the payout and then confirms the outcome through transaction enquiry. Supporting APIs are used where the transaction, the rail or the customer requires them.

PAYX states this directly:

:::info[From the PAYX API call sequence]

However, the API call sequence is limited to the Login API, Quotation API, Payout API, and Transaction Enquiry API and the remaining APIs can be called based on the need.

:::

<div className="payx-journey">

<div className="payx-journey__step">
<span className="payx-journey__index">01</span>
<span className="payx-journey__kind">Authenticate</span>

**[Authentication](/docs/authentication/authentication)**

Obtain the access token used by every subsequent PAYX call.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">02</span>
<span className="payx-journey__kind">Price the transfer</span>

**[Quotation](/docs/quotation/quotation)**

Fetch the exchange rate and charges before initiating a payout. The response carries the `forexQuoteId` and `fxRateValue` the payout request must quote.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">03</span>
<span className="payx-journey__kind">Submit the payout</span>

**[Payout](/docs/payouts/overview)**

Initiate the fund transfer based on the selected quotation and beneficiary. Which contract you send depends on the rail — FIAT, Crypto or WPT.

</div>

<div className="payx-journey__step">
<span className="payx-journey__index">04</span>
<span className="payx-journey__kind">Confirm the outcome</span>

**[Transaction Enquiry](/docs/enquiry/transaction-enquiry)**

Check the status of a previously initiated payout using the reference the payout returned.

</div>

</div>

### What the payout step requires, by rail

The three payout contracts share one endpoint and the same four-object request envelope, but their beneficiary requirements differ. These differences are part of the contract, not presentation.

| Payout | Transaction types | Beneficiary destination | Reference data used |
|---|---|---|---|
| [FIAT Payout](/docs/payouts/fiat-payout) | B2B, C2C, C2B, B2C | Bank account details on the receiver object | [Bank List](/docs/master-apis/bank-list), [Account Type](/docs/master-apis/account-type) |
| [Crypto Payout](/docs/payouts/crypto-payout) | B2B, C2C, C2B, B2C | `cryptoNetwork` and `walletAddress` on the receiver object, in place of bank details | [Crypto Network](/docs/master-apis/crypto-network), [Validate Crypto Wallet](/docs/master-apis/validate-crypto-wallet) |
| [WPT Payout](/docs/payouts/wpt-payout) | C2C only | `receiverServiceProviderName`, `receiverServiceProviderCode` and `receiverServiceProviderMobile` | [WPT Wallet List](/docs/master-apis/wpt-wallet-list) |

See [Payouts overview](/docs/payouts/overview) for the shared request envelope and the full per-rail comparison.

### Identifying the customer

A payout needs a customer in place. PAYX supports two routes, and the [Quotation](/docs/quotation/quotation) response field `customerRegistrationAllowed` indicates whether the registration service is enabled:

- Register the customer first with [Customer Registration](/docs/customers/customer-registration), as a Business or an Individual customer.
- Or create the customer within the payout request itself — see [On-the-fly registration](/docs/customers/on-the-fly-registration).

Where ID proofs or invoices are needed, [Document Upload](/docs/documents/document-upload) returns the `docReferenceNumber` the payout `sender` object carries.

### Data carried between the calls

These links are the ones the PAYX field tables establish.

| Produced by | Field | Consumed by |
|---|---|---|
| Quotation | `forexQuoteId` | Payout — `compliance.forexQuoteId` |
| Quotation | `fxRateValue` | Payout — `transactionInfo.fxRateValue` |
| Document Upload | `docReferenceNumber` | Payout — `sender.docReferenceNumber` |
| Payout | `transReference` | Transaction Enquiry — `value` |
| Quotation | `customerRegistrationAllowed` | Governs whether on-the-fly registration is available |

## Supporting capabilities

Called based on the need of the transaction, the rail and the customer. PAYX describes the Master APIs as "subject to requirement".

<div className="payx-cards">

<div className="payx-card">

### [Master APIs](/docs/master-apis)

Provide necessary configuration data (e.g., country list, currency list, payout modes) and should be called early, typically after login and before creating quotations or payouts (if required).

</div>

<div className="payx-card">

### [Bank List](/docs/master-apis/bank-list)

Retrieves the list of bank details and related parameters required by a specific correspondent, based on the provided receiver code. Used for FIAT bank payouts.

</div>

<div className="payx-card">

### [Crypto Network](/docs/master-apis/crypto-network)

Fetches the network list for Crypto payments.

</div>

<div className="payx-card">

### [Validate Crypto Wallet](/docs/master-apis/validate-crypto-wallet)

Validates the crypto wallet address for crypto payments.

</div>

<div className="payx-card">

### [WPT Wallet List](/docs/master-apis/wpt-wallet-list)

Fetches the list of WPT providers.

</div>

<div className="payx-card">

### [Customer Registration](/docs/customers/customer-registration)

Registers the customer in the system. A customer can also be created during the payout request itself.

</div>

<div className="payx-card">

### [Document Upload](/docs/documents/document-upload)

Enables the client to upload customer-related documents, including ID proofs and invoices.

</div>

</div>

## What else you can integrate

Documented PAYX capabilities that are not required to understand the standard payout journey.

<div className="payx-cards">

<div className="payx-card">

### [Balance Enquiry](/docs/enquiry/balance-enquiry)

Retrieves the current wallet or account balance. PAYX lists this outside the four-call sequence, to be called based on need.

</div>

<div className="payx-card">

### [On-the-fly registration](/docs/customers/on-the-fly-registration)

Create the customer as part of the payout request instead of registering first, using `isAutoRegistered` and `declaration`.

</div>

<div className="payx-card">

### [Validation rules](/docs/validation/field-requirement-rules)

Which conditional payout fields a correspondent requires, by currency and rail and by destination country.

</div>

<div className="payx-card">

### [Status and response codes](/docs/status-and-errors)

The transaction statuses a payout moves through and the response envelope every PAYX API returns.

</div>

</div>

## Sequence as PAYX documents it

The eight-step ordering, reproduced from the PAYX source.

### Sequence of API Call
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
