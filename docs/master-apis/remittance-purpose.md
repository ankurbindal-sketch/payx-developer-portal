---
title: "Remittance Purpose"
sidebar_label: "Remittance Purpose"
description: "The Remittance Purpose API is used to fetch the purpose to send the remittance."
---
# Remittance Purpose

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/purposeOfRemittance/PAYX/{transactionType}/{countryCode}'}</code>
  </div>
</div>

The Remittance Purpose API is used to fetch the purpose to send the remittance.

### Request Parameter

| Parameters      | Input Type | Length | Requirement | Description                                                                                                  |
|-----------------|:-----------:|:-----------:|:-----------:|--------------------------------------------------------------------------------------------------------------|
| transactionType | Alphanumeric | 03 | M | The harmonized Transaction Type. Fixed default value B2C, B2B, C2C, C2B. |
| countryCode | Alpha | 03 | M | The country code of reciever. eg: ARE,IND |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
GET /services HTTP/1.0
HOST: XXX.XXX.X.XXX:Port
Content-Type: application/json; charset=utf-8
GET http://host/ewallet/api/v1/purposeOfRemittance/PAYX/C2C/ARE
```

### Response Parameter

| Parameters        |        Data Type | Requirement | Description                                                                 |
|-------------------|:----------:|:------------:|-------------------------------------------------------------------------------|
| requestTime | String | M | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| responseTime | String | M | This is the response date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| resultCode | String | M | The unique code of the status of the transaction. |
| resultDescription | String | M | Description of the status of the transaction. |
| **Result** |  |  |  |
| Result - data | String | M | The code which needs to be passed in payout. |
| Result - value | String | M |  |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"requestTime": "Tue Jan 28 13:10:40 IST 2025",
"responseTime": "Tue Jan 28 13:10:40 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction Successful",
 "result": [
    {
        "data": "PAYP002",
        "value": "INVESTMENT | BUSINESS PROFITS | SAVINGS"
    },
    {
        "data": "PAYP001",
        "value": "MAINTENANCES | PERSONAL EXPENSES"
    },
    {
        "data": "PAYP004",
        "value": "OTHER EXPENSES | SALARY PAYMENTS"
    },
    {
        "data": "PAYP003",
        "value": "TRADE | SERVICE PAYMENTS"
    }
]
}
```
