---
title: "API index"
sidebar_label: "API index"
hide_table_of_contents: true
description: "Index of the public PAYX APIs, with purpose, integration stage and endpoint."
---
# API index

Every API in the public PAYX reference, with the stage of an integration at which it is used. Purposes are PAYX's own descriptions.

## Transaction APIs

<div className="payx-apitable">

| API | Method | Purpose | Integration stage | Endpoint | Page |
|---|---|---|---|---|---|
| Authentication | `POST` | The Login API is used to authenticate and authorize the user. | Start | `http://host/ewallet/oauth/token` | [Open](/docs/authentication/authentication) |
| Quotation | `POST` | The Quotation API is used to fetch the forex rate between the payin and payout currencies. This is an indicative price and transaction limit. | Pricing | `http://host/ewallet/api/v1/fxratequotation/api` | [Open](/docs/quotation/quotation) |
| Document Upload | `POST` | The Document Upload API is used to upload the ID proof documents of the specific customer of the send client. | Payout preparation | `http://host/ewallet/api/v1/documentUpload/upload/customer` | [Open](/docs/documents/document-upload) |
| Customer Registration | `POST` | The Customer-Registration API is used to register or create the customer in the system. | Conditional customer setup | `http://host/ewallet/api/v1/customer-registration` | [Open](/docs/customers/customer-registration) |
| FIAT Payout | `POST` | The Payout API is used to perform all types of FIAT transactions (B2B,C2C,C2B,B2C). | Transaction | `http://host/ewallet/api/v1/payoutProcess/api` | [Open](/docs/payouts/fiat-payout) |
| CRYPTO Payout | `POST` | This Payout API is used to perform all types of crypto transactions (B2B,C2C,C2B,B2C). | Transaction | `http://host/ewallet/api/v1/payoutProcess/api` | [Open](/docs/payouts/crypto-payout) |
| WPT Payout | `POST` | This Payout API is used to perform all types of Wallet transactions (C2C). | Transaction | `http://host/ewallet/api/v1/payoutProcess/api` | [Open](/docs/payouts/wpt-payout) |
| Transaction Enquiry | `GET` | The Transaction Enquiry API is used to fetch the statement for the specified period. | Post-payout | `http://host/ewallet/api/v1/transactionInfo/api?types=all&status=all&transId={value}` | [Open](/docs/enquiry/transaction-enquiry) |
| Balance Enquiry | `GET` | The Balance API is used to fetch the current balance in the ledger of the partner. The balance can be fetched for the entire ledger of a specific currency. | Supporting | `http://host/ewallet/api/v1/wallet/walletOwner/{walletOwnerCode}` | [Open](/docs/enquiry/balance-enquiry) |

</div>

FIAT, Crypto and WPT payouts are separate contracts submitted to the same endpoint. See [Payouts overview](/docs/payouts/overview).

## Master / reference APIs

<div className="payx-apitable">

| API | Method | Purpose | Endpoint | Page |
|---|---|---|---|---|
| Remittance Purpose | `GET` | The Remittance Purpose API is used to fetch the purpose to send the remittance. | `http://host/ewallet/api/v1/purposeOfRemittance/PAYX/{transactionType}/{countryCode}` | [Open](/docs/master-apis/remittance-purpose) |
| Source of Fund | `GET` | The Source of Fund API is used to fetch the source of the fund. | `http://host/ewallet/api/v1/getSourceOfFund/PAYX/{transactionType}/{countryCode}` | [Open](/docs/master-apis/source-of-fund) |
| Relationship | `GET` | The Relationship API is used to fetch the relation of the beneficiary with the sender. | `http://host/ewallet/api/v1/getRelationship/PAYX/{transactionType}` | [Open](/docs/master-apis/relationship) |
| Document ID Type | `GET` | The Document ID Type API is used to fetch the list of all document types. | `http://host/ewallet/api/v1/getDocumentIdType/PAYX/{transactionType}` | [Open](/docs/master-apis/document-id-type) |
| Occupation | `GET` | The Occupation API is used to fetch the occupation. | `http://host/ewallet/api/v1/getOccupation/PAYX/{transactionType}` | [Open](/docs/master-apis/occupation) |
| Business Type | `GET` | The Business API is used to fetch the Business type of customer. | `http://host/ewallet/api/v1/masterBusinessTypes/PAYX/{transactionType}` | [Open](/docs/master-apis/business-type) |
| Business Registration Type | `GET` | The Business registration type API is used to fetch the registration type of business customers. | `http://host/ewallet/api/v1/masterBusinessRegistrationTypes/PAYX/{transactionType}` | [Open](/docs/master-apis/business-registration-type) |
| WPT Wallet List | `GET` | The Wallet list API is used to fetch the list of WPT providers. | `http://host/ewallet/api/v1/walletList/{countryCode}/{currencyCode}/{receiverCode}/WPT` | [Open](/docs/master-apis/wpt-wallet-list) |
| Crypto Network | `GET` | This API is used to fetch the network list of for Crypto payments. | `http://host/ewallet/api/v1/cryptocurrency/{payoutCurrency}` | [Open](/docs/master-apis/crypto-network) |
| Validate Crypto Wallet | `GET` | This API is used to validate the crypto wallet address for the crypto payments. | `http://host/ewallet/api/v1/payoutProcess/validateAddress/{payoutCurrency}/{cryptoNetworkValue}/{walletAddress}` | [Open](/docs/master-apis/validate-crypto-wallet) |
| Account Type | `GET` | The Account Type API is used to fetch the type of the account. | `http://host/ewallet/api/v1/accountType/all` | [Open](/docs/master-apis/account-type) |
| Bank List | `GET` | The Bank List API is used to fetch the list of the bank. | `http://host/ewallet/api/v1/payoutbanklist/{country}/{currency}/{receiverCode}` | [Open](/docs/master-apis/bank-list) |
| Customer Legal Status | `GET` | The Customer Type API is used to fetch the legal status of the customer. | `http://host/ewallet/api/v1/customerLegalStatus/getByCustomerTypeCode/{customerTypeCode}` | [Open](/docs/master-apis/customer-legal-status) |
| Nature of Business | `GET` | The Nature of Business API is used to fetch the nature of the business run by the customer. | `http://host/ewallet/api/v1/natureOfBusiness/getByCustomerTypeCode/{customerTypeCode}` | [Open](/docs/master-apis/nature-of-business) |
| Customer Occupation Type | `GET` | The Customer Occupation Type API is used to fetch the occupation of the customer. | `http://host/ewallet/api/v1/customerOccupationType/getByCustomerTypeCode/{customerTypeCode}` | [Open](/docs/master-apis/customer-occupation-type) |
| Customer/Individual Document Type | `GET` | The Customer Document Type API is used to fetch the ID proof documents of the customer. (for specific customer type) | `http://host/ewallet/api/v1/customerDocumentType/getByCustomerTypeCode/{customerTypeCode}` | [Open](/docs/master-apis/customer-individual-document-type) |

</div>

:::note[Endpoint paths in this reference]

PAYX documents its endpoints as `http://host/...`, where `host` stands for the base URL of the environment you are integrating against. The paths themselves are reproduced exactly as PAYX documents them. See [API environments](/docs/getting-started/api-environments).

:::
