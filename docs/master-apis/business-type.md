---
title: "Business Type"
sidebar_label: "Business Type"
description: "The Business API is used to fetch the Business type of customer."
---
# Business Type

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/masterBusinessTypes/PAYX/{transactionType}'}</code>
  </div>
</div>

The Business API is used to fetch the Business type of customer.

### Request Parameter

| Parameters | Input Type | Length | Requirement | Description            |
|------------|:-------------:|:-------------:|:------------:|------------------------|
| transactionType | Alphanumeric | 03 | M | The harmonized Transaction Type. Fixed default value B2C, B2B, C2C, C2B. |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET http://host/ewallet/api/v1/masterBusinessTypes/PAYX/B2B
```

### Response Parameter

| Parameters | Data Type | Requirement | Description |
|---|---|---|---|
| transactionId | String | M |  |
| requestTime | String | M | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| responseTime | String | M | This is the response date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| resultCode | String | M | Unique code of the status of the transaction. |
| resultDescription | String | M | Description of the status of the transaction. |
| **Nature of Business List** |  |  |  |
| id | String | M | The serial number of the record. |
| code | String | M | The code which needs to be passed in payout. |
| name | String | M | The nature of the business run by the customer. |
| status | String | M | The status of the customer. |
| creationDate | String | M | The creation date of the customer in the YYYY-MM-DD <br /> &lt;Delimiter> <br /> HH:MM:SS.MS <br /> TIMEZONE |
| partnerCode | String | M | The unique code of payout partner (receiverCode). |
| serviceTypeCode | String | M | The transaction type code. eg: B2B. |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"transactionId": "9217725",
"requestTime": "Tue Jan 28 16:23:11 IST 2025",
"responseTime": "Tue Jan 28 16:23:11 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction successful",
"masterBusinessTypesBeanList": [
    {
        "id": 643,
        "code": "PAYT001",
        "name": "Agriculture",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 644,
        "code": "PAYT002",
        "name": "Automotive",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 645,
        "code": "PAYT003",
        "name": "Banking",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 646,
        "code": "PAYT004",
        "name": "Construction",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 647,
        "code": "PAYT005",
        "name": "Education",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 648,
        "code": "PAYT006",
        "name": "Information Technology",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 649,
        "code": "PAYT007",
        "name": "Manufacturing",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 654,
        "code": "PAYT012",
        "name": "Others",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 653,
        "code": "PAYT011",
        "name": "Professional Services",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 651,
        "code": "PAYT009",
        "name": "Real Estate",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 650,
        "code": "PAYT008",
        "name": "Retail",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    },
    {
        "id": 652,
        "code": "PAYT010",
        "name": "Transportation and Logistics",
        "status": "Y",
        "creationDate": "2025-01-16T16:49:15.236+0530",
        "partnerCode": "PAYX",
        "serviceTypeCode": "B2B"
    }
]
}
```
