---
id: "master-index"
title: "Master / reference APIs"
sidebar_label: "Overview"
description: "Index of the 16 public PAYX master and reference APIs."
---
# Master / reference APIs

PAYX exposes 16 reference APIs that supply the coded values its transaction requests expect — remittance purpose, source of fund, bank lists, crypto networks and customer attribute codes.

PAYX describes these as **subject to requirement**: they "provide necessary configuration data (e.g., country list, currency list, payout modes) and should be called early, typically after login and before creating quotations or payouts (if required)".

All 16 are `GET` operations.

## Transaction and compliance

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [Remittance Purpose](/docs/master-apis/remittance-purpose) | `GET` | The Remittance Purpose API is used to fetch the purpose to send the remittance. | `http://host/ewallet/api/v1/purposeOfRemittance/PAYX/{transactionType}/{countryCode}` |
| [Source of Fund](/docs/master-apis/source-of-fund) | `GET` | The Source of Fund API is used to fetch the source of the fund. | `http://host/ewallet/api/v1/getSourceOfFund/PAYX/{transactionType}/{countryCode}` |
| [Relationship](/docs/master-apis/relationship) | `GET` | The Relationship API is used to fetch the relation of the beneficiary with the sender. | `http://host/ewallet/api/v1/getRelationship/PAYX/{transactionType}` |

</div>

## Customer attributes

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [Document ID Type](/docs/master-apis/document-id-type) | `GET` | The Document ID Type API is used to fetch the list of all document types. | `http://host/ewallet/api/v1/getDocumentIdType/PAYX/{transactionType}` |
| [Occupation](/docs/master-apis/occupation) | `GET` | The Occupation API is used to fetch the occupation. | `http://host/ewallet/api/v1/getOccupation/PAYX/{transactionType}` |
| [Customer Legal Status](/docs/master-apis/customer-legal-status) | `GET` | The Customer Type API is used to fetch the legal status of the customer. | `http://host/ewallet/api/v1/customerLegalStatus/getByCustomerTypeCode/{customerTypeCode}` |
| [Customer Occupation Type](/docs/master-apis/customer-occupation-type) | `GET` | The Customer Occupation Type API is used to fetch the occupation of the customer. | `http://host/ewallet/api/v1/customerOccupationType/getByCustomerTypeCode/{customerTypeCode}` |
| [Customer/Individual Document Type](/docs/master-apis/customer-individual-document-type) | `GET` | The Customer Document Type API is used to fetch the ID proof documents of the customer. (for specific customer type) | `http://host/ewallet/api/v1/customerDocumentType/getByCustomerTypeCode/{customerTypeCode}` |

</div>

## Business attributes

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [Business Type](/docs/master-apis/business-type) | `GET` | The Business API is used to fetch the Business type of customer. | `http://host/ewallet/api/v1/masterBusinessTypes/PAYX/{transactionType}` |
| [Business Registration Type](/docs/master-apis/business-registration-type) | `GET` | The Business registration type API is used to fetch the registration type of business customers. | `http://host/ewallet/api/v1/masterBusinessRegistrationTypes/PAYX/{transactionType}` |
| [Nature of Business](/docs/master-apis/nature-of-business) | `GET` | The Nature of Business API is used to fetch the nature of the business run by the customer. | `http://host/ewallet/api/v1/natureOfBusiness/getByCustomerTypeCode/{customerTypeCode}` |

</div>

## Banking

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [Account Type](/docs/master-apis/account-type) | `GET` | The Account Type API is used to fetch the type of the account. | `http://host/ewallet/api/v1/accountType/all` |
| [Bank List](/docs/master-apis/bank-list) | `GET` | The Bank List API is used to fetch the list of the bank. | `http://host/ewallet/api/v1/payoutbanklist/{country}/{currency}/{receiverCode}` |

</div>

## Crypto

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [Crypto Network](/docs/master-apis/crypto-network) | `GET` | This API is used to fetch the network list of for Crypto payments. | `http://host/ewallet/api/v1/cryptocurrency/{payoutCurrency}` |
| [Validate Crypto Wallet](/docs/master-apis/validate-crypto-wallet) | `GET` | This API is used to validate the crypto wallet address for the crypto payments. | `http://host/ewallet/api/v1/payoutProcess/validateAddress/{payoutCurrency}/{cryptoNetworkValue}/{walletAddress}` |

</div>

## WPT

<div className="payx-apitable">

| API | Method | Purpose | Endpoint |
|---|---|---|---|
| [WPT Wallet List](/docs/master-apis/wpt-wallet-list) | `GET` | The Wallet list API is used to fetch the list of WPT providers. | `http://host/ewallet/api/v1/walletList/{countryCode}/{currencyCode}/{receiverCode}/WPT` |

</div>

:::note[Endpoint paths in this reference]

PAYX documents its endpoints as `http://host/...`, where `host` stands for the base URL of the environment you are integrating against. The paths themselves are reproduced exactly as PAYX documents them. See [API environments](/docs/getting-started/api-environments).

:::
