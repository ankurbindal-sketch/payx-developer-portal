---
title: "Document ID Type"
sidebar_label: "Document ID Type"
description: "The Document ID Type API is used to fetch the list of all document types."
---
# Document ID Type

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__label">For document id types</div>
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/getDocumentIdType/PAYX/{transactionType}'}</code>
  </div>
</div>

The Document ID Type API is used to fetch the list of all document types.

### Request Parameter of Document ID Types

| Parameters | Input Type | Length | Requirement | Description           |
|------------|:------------------:|:------------------:|:------------:|-----------------------|
| transactionType | Alphanumeric | 03 | M | The harmonized Transaction Type. Fixed default value B2C, B2B, C2C, C2B. |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details of Document ID Types

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET - host/ewallet/api/v1/getDocumentIdType/PAYX/C2C
```

### Response Parameter of Document ID Types

| Parameters | Data Type | Requirement | Description |
|---|---|---|---|
| transactionId | String | M |  |
| requestTime | String | M | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| responseTime | String | M | This is the response date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| resultCode | String | M | Unique code of the status of the transaction. |
| resultDescription | String | M | Description of the status of the transaction. |
| **Result** |  |  |  |
| data | String | M | Document name code which needs to be passed in payout. |
| value | String | M | Document name |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details of Document ID Types

```json
{
"requestTime": "Tue Jan 28 16:33:00 IST 2025",
"responseTime": "Tue Jan 28 16:33:00 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction successful",
"result": [
    {
        "data": "PAYD005",
        "value": "Citizenship Card"
    },
    {
        "data": "PAYD002",
        "value": "DrivingLicense"
    },
    {
        "data": "PAYD009",
        "value": "Emirates ID"
    },
    {
        "data": "PAYD008",
        "value": "GCC ID"
    },
    {
        "data": "PAYD004",
        "value": "Govt.ApprovedID"
    },
    {
        "data": "PAYD001",
        "value": "National ID Card"
    },
    {
        "data": "PAYD003",
        "value": "Passport"
    },
    {
        "data": "PAYD007",
        "value": "Residence Permit"
    },
    {
        "data": "PAYD006",
        "value": "Senior Citizen card"
    },
    {
        "data": "PAYD010",
        "value": "CPF/Tax ID No"
    }
]
}
```
