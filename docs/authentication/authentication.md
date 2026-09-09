---
title: "Authentication"
sidebar_label: "Authentication"
slug: "/authentication/authentication"
description: "PAYX Login (Authentication) API — obtain an access token."
---
# Authentication

<span className="payx-method payx-method--post">POST</span>

Authenticate and obtain the access token used by subsequent PAYX API calls.

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--post">POST</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/oauth/token'}</code>
  </div>
</div>

The Login API is used to authenticate and authorize the user.

### Request Parameter

| Parameters | Input Type | Length | Requirement | Description |
|---|---|---|---|---|
| grant_type | Alphanumeric | 08 | M | password |
| username | Alphanumeric | 10 | M | The user ID or username. |
| password | Alphanumeric (Encrypted) | 0 - 128 | M | Password in unreadable/hashed format |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Header Parameter

| Parameters | Input Type | Length | Requirement | Description |
|---|---|---|---|---|
| channel | Alpha | 03 | M | WEB |
| source | Alpha | 05 | M | AGENT |
| Accept-Language | Alpha | 02 | M | en |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
POST /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
POST http://host/ewallet/oauth/token
FormData : grant_type=password&scope=read%20write&username=1000008340
password : 21ED0D51*****FB437*****8ED2123B6
```

### Response Parameter

| Parameters     | Data Type  | Requirement | Description |
|----------|:-----:|:------------:|--------|
| access_token | String | M | Token to identify and authorize the user. |
| token_type | String | M | Type of the access token. |
| expires_in | String | M | Duration of time in seconds within which the access token expires. |
| scope | String | M |  |
| clientCode | String | M |  |
| locale | String | M |  |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"access_token": "15*****f-54fe-43d9-***7-b7dc****1b9",
"token_type": "bearer",
"expires_in": 21150,
"scope": "read write trust",
"clientCode": "1000008483",
"locale": "en"
}
```

## Token fields

The token response returns `access_token` and `token_type` with the value `bearer`, together with `expires_in`, `scope`, `clientCode` and `locale`, as shown in the response parameters and example above.

:::info[Header parameters]

The `channel`, `source` and `Accept-Language` header parameters above are documented by PAYX for the Authentication request. Other PAYX contract pages do not document header parameters, so these are not restated on them.

:::
