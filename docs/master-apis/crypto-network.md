---
title: "Crypto Network"
sidebar_label: "Crypto Network"
description: "This API is used to fetch the network list of for Crypto payments."
---
# Crypto Network

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/cryptocurrency/{payoutCurrency}'}</code>
  </div>
</div>

This API is used to fetch the network list of for Crypto payments.

### Request Parameter

| Parameters | Input Type | Length | Requirement | Description            |
|------------|:--------------:|:--------------:|:------------:|------------------------|
| payoutCurrency | Alphanumeric | 04 | M | The payout currency opted for crypto payment. eg. USDC, USDT etc |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET http://host/ewallet/api/v1/cryptocurrency/USDC
```

### Response Parameter

| Parameters | Data Type | Requirement | Description |
|---|---|---|---|
| id | String | M | The serial number of the record. |
| code | String | M | The unique code of the record. |
| name | String | M | Currency name |
| currencyCode | String | M | Currency code. eg.USDC |
| symbol | String | M | The symbol of currency |
| network | String | M | The value which needs to be passed/used in payout process. |
| status | String | M | The status of the data. |
| creationDate | String | M | The creation date of the data in the YYYY-MM-DD <br /> &lt;Delimiter> <br /> HH:MM:SS.MS <br /> TIMEZONE |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"transactionId": "10842189",
"requestTime": "Thu Nov 06 14:25:19 IST 2025",
"responseTime": "Thu Nov 06 14:25:21 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction successful",
"cryptoCurrencyBeanList": [
    {
        "id": 2,
        "code": "100001",
        "name": "USD Coin",
        "currencyCode": "USDC",
        "symbol": "â¿",
        "status": "Active",
        "creationDate": "2025-09-26T10:57:30.851+0530",
        "modificationDate": "2025-09-26T10:57:30.851+0530",
        "network": "ERC20"
    }
]
}
```

## Related

- [Validate Crypto Wallet](/docs/master-apis/validate-crypto-wallet)
- [Crypto Payout](/docs/payouts/crypto-payout) — consumes `cryptoNetwork`
