---
title: "Validate Crypto Wallet"
sidebar_label: "Validate Crypto Wallet"
description: "This API is used to validate the crypto wallet address for the crypto payments."
---
# Validate Crypto Wallet

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/payoutProcess/validateAddress/{payoutCurrency}/{cryptoNetworkValue}/{walletAddress}'}</code>
  </div>
</div>

This API is used to validate the crypto wallet address for the crypto payments.

### Request Parameter

| Parameters | Input Type | Length | Requirement | Description            |
|------------|:--------------:|:------------:|:------------:|------------------------|
| payoutCurrency | Alphanumeric | 04 | M | The payout currency opted for crypto payment. eg. USDC, USDT etc |
| cryptoNetworkValue | Alphanumeric | 05 | M | The value received in `network` tag of crypto network Api response. eg. ERC20 |
| walletAddress | Alphanumeric | 26 - 50 | M | The crypto wallet address of the receiver. |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET http://host/ewallet/api/v1/payoutProcess/validateAddress/USDC/ERC20/0xervjsj90dgdg********
```

- If this Api will validate the Wallet Address as correct, it will send response with the "resultCode": "0" & "resultDescription": "Transaction successful".
- If the Wallet Address can't be verified as correct, it will through an error in response.

### Response Parameter

| Parameters | Data Type | Requirement | Description |
|---|---|---|---|
| amount | String | M |  |
| fee | String | M |  |
| receiverAmount | String | M |  |
| sendClientMarginValue | String | M |  |
| corridorAmount | String | M |  |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"transactionId": "10842189",
"requestTime": "Thu Nov 06 14:25:19 IST 2025",
"responseTime": "Thu Nov 06 14:25:21 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction successful",
"payoutProcessBean": {
    "amount": 0.0,
    "fee": 0.0,
    "receiverAmount": 0.0,
    "sendClientMarginValue": 0.0,
    "corridorAmount": 0.0
}
}
```

## Related

- [Crypto Network](/docs/master-apis/crypto-network)
- [Crypto Payout](/docs/payouts/crypto-payout) — consumes `walletAddress`
