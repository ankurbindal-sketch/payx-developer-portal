---
title: "Response envelope"
sidebar_label: "Response envelope"
description: "The resultCode / resultDescription envelope shared by PAYX API responses."
---
# Response envelope

PAYX responses share a common envelope, followed by the payload specific to the operation.

| Field | Description (as PAYX documents it) |
|---|---|
| `transactionId` | |
| `requestTime` | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| `responseTime` | This is the response date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| `resultCode` | Unique code of the status of the transaction. |
| `resultDescription` | Description of the status of the transaction. |

The per-operation field tables on each contract page document the payload that follows.

## Successful responses

Across the PAYX documentation, successful responses carry `resultCode` `"0"` with `resultDescription` `"Transaction successful"`:

```json
{
"transactionId": "8301012 ",
"requestTime": "Wed Apr 17 21:06:35 IST 2024",
"responseTime": "Wed Apr 17 21:06:36 IST 2024",
"resultCode": "0",
"resultDescription": "Transaction successful",
...
}
```

This example is assembled from the envelope fields as they appear in the PAYX response examples; each contract page carries that operation's own full response example.

## Related

- [Transaction statuses](/docs/status-and-errors/transaction-statuses)
- [How to read this reference](/docs/getting-started/conventions)
