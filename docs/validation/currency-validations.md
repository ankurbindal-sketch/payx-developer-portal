---
title: "Currency validations"
sidebar_label: "Currency validations"
description: "Currency- and correspondent-specific conditional field requirements for PAYX payouts."
hide_table_of_contents: true
---
# Currency validations

Per payout currency and rail, which **Conditional** payout fields the correspondent requires. See [Field requirement rules](/docs/validation/field-requirement-rules) for how these interact with fields already marked Mandatory on the Payout API.

PAYX documents four tables — sender and beneficiary, each for individual and business customers — covering 27 currency groups on the `LOCAL` rail.

Note: “YES” indicates that the field is mandatory, while “NO” indicates that it is optional.

### Sender Customer

[Sender fields in the FIAT Payout API](/docs/payouts/fiat-payout#sender-req-param)

**Sender (Individual)**

*Source column groups: Kyc detail fields (4 columns)*

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AED</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MYR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NGN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ARS</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES with value PAYD003(Passport) |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KES</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NPR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KRW</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">INR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">VND</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MXN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">COP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PHP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TRY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BRL</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IDR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZAR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | YES |
| senderIdExpiration | YES |
| senderIdCountry | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HKD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SGD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EUR, EUR-INSTANT</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JPY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GBP, GBP-INSTANT, GBP-STANDARD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CAD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AUD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">USD-USA</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">THB</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| senderIdType | YES |
| senderIssueDate | NO |
| senderIdExpiration | NO |
| senderIdCountry | NO |

</details>

</div>


### Receiver Customer

[Receiver fields in the FIAT Payout API](/docs/payouts/fiat-payout#receiver-req-param)

**Beneficary (Individual)**

*Source column groups: Bank detail fields (8 columns); Additional Kyc detail fields (7 columns)*

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AED</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | YES it represents the Swift Code |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MYR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NGN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ARS</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES with value PAYD010(Tax ID No) |
| receiverIdNumber | YES (for UAT use: 27386132859) |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KES</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NPR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KRW*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">INR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | YES it represents the IFSC Code |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">VND*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MXN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">COP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PHP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TRY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BRL</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | YES |
| receiverBankCountry | YES it represents the Bank Sub Code |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES with value PAYD010(CPF/Tax ID No) |
| receiverIdNumber | YES with min-max length 11 |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IDR*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZAR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HKD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SGD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EUR, EUR-INSTANT</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | NO |
| receiverIdNumber | NO |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JPY*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GBP, GBP-INSTANT, GBP-STANDARD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | NO |
| receiverIdNumber | NO |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CAD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AUD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | YES |
| receiverAccountNumber | YES |
| receiverSwiftCode | YES it represents the BSB Code |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | NO |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | YES |
| receiverIdNumber | YES |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">USD-USA</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | YES it represents the Routing No |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | NO |
| receiverIdNumber | NO |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">THB</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| receiverBankName | YES |
| receiverBankCode | NO |
| receiverAccountNumber | YES |
| receiverSwiftCode | NO |
| receiverAccountHolderName | YES |
| receiverAccountType | NO |
| receiverBankCountry | YES |
| receiverBankAddress | NO |
| receiverMsisdn | YES |
| receiverIdType | NO |
| receiverIdNumber | NO |
| receiverDOB | NO |
| receiverPinCode | YES |
| receiverIdExpiration | NO |

</details>

</div>


*Decimal values are not allowed in the payout amount for these currencies.

### Sender Business

[Sender fields in the FIAT Payout API](/docs/payouts/fiat-payout#sender-req-param)

**Sender (Business)**

*Source column groups: Kyc detail fields (3 columns)*

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AED</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MYR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NGN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ARS</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KES</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NPR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KRW</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">INR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">VND</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MXN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">COP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PHP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TRY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BRL</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IDR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZAR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | YES |
| businessIdValidThru | YES |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HKD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SGD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EUR, EUR-INSTANT</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JPY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GBP, GBP-INSTANT, GBP-STANDARD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CAD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AUD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">USD-USA</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">THB</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessRegistrationIssueDate | NO |
| businessIdValidThru | NO |
| businessPinCode | YES |

</details>

</div>


### Receiver Business

[Receiver fields in the FIAT Payout API](/docs/payouts/fiat-payout#receiver-req-param)

**Beneficary (Business)**

*Source column groups: Bank detail fields (4 columns); Additional Kyc detail fields (5 columns)*

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AED</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | YES it represents the Swift Code |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MYR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NGN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ARS</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KES</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NPR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KRW*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">INR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | YES it represents the IFSC Code |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">VND*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MXN</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">COP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PHP</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TRY</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BRL</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | YES |
| businessBankCountry | YES it represents the Bank Sub Code |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PKR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IDR*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZAR</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HKD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SGD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | NO |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EUR, EUR-INSTANT</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JPY*</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | YES |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | YES |
| businessRegistrationNumber | YES |
| businessPinCode | YES |
| businessIdValidThru | YES |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GBP, GBP-INSTANT, GBP-STANDARD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CAD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | YES it represents the Transit Code |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AUD</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | YES it represents the BSB Code |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">USD-USA</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | YES it represents the Routing No |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">THB</span><span className="payx-req__rail">LOCAL</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankCode | NO |
| businessSwiftCode | NO |
| businessAccountType | NO |
| businessBankCountry | YES |
| businessPrimaryContactNumber | YES |
| businessRegistrationIssueDate | NO |
| businessRegistrationNumber | NO |
| businessPinCode | YES |
| businessIdValidThru | NO |

</details>

</div>


*Decimal values are not allowed in the payout amount for these currencies.
