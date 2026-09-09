---
title: "Transaction statuses"
sidebar_label: "Transaction statuses"
description: "The PAYX transaction statuses available in Production."
---
# Transaction statuses

In Production, the following statuses will be available:

| Name | Description            |
|------|------------------------|
| In Process | Payload validated and ready for processing. |
| Payout Processing | Transaction validated and sent to the correspondent to credit the beneficiary. |
| Payout Pass | Amount successfully credited to the beneficiary’s account. |
| Payout Fail | Transaction failed. |
| Reverse | Amount credited back to the wallet after failure. |
| Technical Failure | Transaction failed due to timeout, network issue, or uncaught exception. |

## Where statuses appear

The [Transaction Enquiry](/docs/enquiry/transaction-enquiry) response carries the `status` field, and the payout response carries `status` on submission.
