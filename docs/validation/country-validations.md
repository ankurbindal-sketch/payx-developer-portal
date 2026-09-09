---
title: "Country validations"
sidebar_label: "Country validations"
description: "Country- and correspondent-specific conditional field requirements for PAYX payouts on the SWIFT rail."
hide_table_of_contents: true
---
# Country validations

Per destination country on the `SWIFT` rail, which **Conditional** payout fields the correspondent requires. Column headers pair the business and customer field names, since one column governs both.

:::note[Country codes on this page]

These tables use two-letter country codes. The payout `destinationCountryCode` and `sourceCountry` fields use three-letter codes. See [How to read this reference](/docs/getting-started/conventions).

:::

PAYX documents eight tables. Each is introduced by its own "SWIFT Transaction Requirements" heading and the list of countries it applies to, followed by the fields those countries require.

[Receiver fields in the FIAT Payout API](/docs/payouts/fiat-payout#receiver-req-param)

**SWIFT Transaction Requirements** <br /><br />
**AR – Argentina, BB – Barbados, BM – Bermuda, BN – Brunei, BS – Bahamas, CO – Colombia, DZ – Algeria,** <br />
**EC – Ecuador, FJ – Fiji, HN – Honduras, JM – Jamaica, JP – Japan, KE – Kenya, KR – South Korea,** <br />
**KY – Cayman Islands, MO – Macao, MW – Malawi, NG – Nigeria, NI – Nicaragua, NP – Nepal, NZ – New Zealand,** <br />
**PE – Peru, SZ – Eswatini, TH – Thailand, UG – Uganda, ZA – South Africa**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName - used to capture Bank name details
- businessAccountNumber, receiverAccountNumber - used to capture **Bank Account Number details**
- businessSwiftCode, receiverSwiftCode - used to capture Swift Code details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BB</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BM</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BN</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BS</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">DZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EC</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">FJ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HN</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JM</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JP</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KY</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MW</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NG</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NI</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NP</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TH</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">UG</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**AE – United Arab Emirates, AL – Albania, AT – Austria, BE – Belgium, BG – Bulgaria, BH – Bahrain, CH – Switzerland,** <br />
**CR – Costa Rica, CY – Cyprus, CZ – Czech Republic, DE – Germany, DK – Denmark, EE – Estonia, ES – Spain,** <br />
**FI – Finland, FR – France, GR – Greece, GT – Guatemala, HR – Croatia, HU – Hungary, IE – Ireland, IL – Israel,** <br />
**IT – Italy, JO – Jordan, KW – Kuwait, KZ – Kazakhstan, LB – Lebanon, LI – Liechtenstein, LT – Lithuania,** <br />
**LU – Luxembourg, LV – Latvia, MC – Monaco, MT – Malta, MU – Mauritius, MZ – Mozambique, NL – Netherlands,** <br />
**NO – Norway, OM – Oman, PK – Pakistan, PL – Poland, PT – Portugal, QA – Qatar, RO – Romania, RS – Serbia,** <br />
**SA – Saudi Arabia, SE – Sweden, SI – Slovenia, SK – Slovakia, TN – Tunisia, TR – Turkey, UA – Ukraine**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture **IBAN details**
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AL</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">AT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BG</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BH</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CH</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CY</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">DE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">DK</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ES</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">FI</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">FR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">GT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HU</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IL</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">JO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KW</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">KZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LB</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LI</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LU</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">LV</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MC</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MU</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MZ</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NL</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">NO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">OM</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PK</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PL</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">QA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">RO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">RS</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SE</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SI</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SK</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TN</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">UA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**GB – United Kingdom, MY – Malaysia, ZM – Zambia**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture bank account number details
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details
- businessBankCode, receiverBankCode – used to capture bank sort code details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">GB</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MY</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ZM</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**LK – Sri Lanka, MA – Morocco, TT – Trinidad and Tobago**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture bank account number details
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details
- businessBankCode, receiverBankCode – used to capture bank code details
- businessBankCountry, receiverBankCountry – used to capture branch code details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">LK</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TT</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**CN – China, HK – Hong Kong, TW – Taiwan**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details
- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture bank account number details
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">CN</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessAccountHolderName, receiverAccountHolderName | Yes |
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">HK</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessAccountHolderName, receiverAccountHolderName | Yes |
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">TW</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessAccountHolderName, receiverAccountHolderName | Yes |
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**AM – Armenia, BD – Bangladesh**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture bank account number details
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details
- businessBankCode, receiverBankCode – used to capture bank code details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AM</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BD</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**DO – Dominican Republic, UY – Uruguay**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used to capture bank name details
- businessAccountNumber, receiverAccountNumber – used to capture bank account number details
- businessSwiftCode, receiverSwiftCode – used to capture SWIFT code details
- businessAccountType, receiverAccountType – used to capture account type details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">DO</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountType, receiverAccountType | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">UY</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessAccountType, receiverAccountType | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>


---

**SWIFT Transaction Requirements** <br /><br />
**AU – Australia, BR – Brazil, CA – Canada, CL – Chile, EG – Egypt, ID – Indonesia, IN – India,** <br />
**IS – Iceland, MX – Mexico, PH – Philippines, SG – Singapore, US – United States**

For the countries listed above, when transactions are processed through the SWIFT network, the following bank-related fields are mandatory for successful transaction processing:

- businessBankName, receiverBankName – used for Bank name details
- businessAccountNumber, receiverAccountNumber – used for Bank Account Number details
- businessSwiftCode, receiverSwiftCode – used for Swift Code details
- businessBankCountry, receiverBankCountry – used to capture branch code details
- businessBankCode, receiverBankCode – used to capture bank code/ IFSC/ BSB NO/ Routing no details based on country
- businessAccountType, receiverAccountType – used to capture account type details
- businessAccountHolderName, receiverAccountHolderName – used to capture beneficiary name details

In the table below, the column headers represent the applicable API field requirements for both business and customer contexts.

Note: “YES” indicates that the field is mandatory and accepts the value/information specified above. If a different value/information is accepted, it is explicitly mentioned in the table. “NO” indicates that it is optional.

<div className="payx-reqs">

<details className="payx-req">
<summary><span className="payx-req__code">AU</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | Yes used for bsb no |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">BR</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountType, receiverAccountType | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CA</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | Yes used for transitCode |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">CL</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | No |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">EG</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | No |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">ID</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IN</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | Yes used for IFSC code |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">IS</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | No |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">MX</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes (used for CLABE / Mexican bank account number) |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | No |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">PH</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | Yes used for routing no |
| businessAccountType, receiverAccountType | Yes |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">SG</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | Yes |
| businessBankCode, receiverBankCode | Yes |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

<details className="payx-req">
<summary><span className="payx-req__code">US</span><span className="payx-req__rail">SWIFT</span><span className="payx-req__cta">View requirements</span></summary>

| Field | Requirement |
|---|---|
| businessBankName, receiverBankName | Yes |
| businessAccountNumber, receiverAccountNumber | Yes |
| businessSwiftCode, receiverSwiftCode | Yes |
| businessBankCountry, receiverBankCountry | No |
| businessBankCode, receiverBankCode | Yes used for routing no |
| businessAccountType, receiverAccountType | No |
| businessAccountHolderName, receiverAccountHolderName | Yes |

</details>

</div>
