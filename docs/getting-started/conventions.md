---
title: "How to read this reference"
sidebar_label: "How to read this reference"
description: "Requirement flags, endpoint path conventions, response envelope, code systems and field-name handling."
---
# How to read this reference

Every contract on this portal is reproduced from the PAYX API documentation source. Field names, types, lengths, requirement flags, endpoint strings and examples are presented as PAYX documents them.

## Requirement flags

Field tables mark each parameter with a requirement flag.

| Flag | Meaning |
|---|---|
| M | Mandatory |
| O | Optional |
| C | Conditional |

For payout fields, PAYX states the precedence explicitly: fields marked Mandatory in the Payout API must always be provided regardless of the correspondent, while Conditional fields become mandatory only where the selected correspondent requires them. See [Field requirement rules](/docs/validation/field-requirement-rules).

## Endpoint paths

:::note[Endpoint paths in this reference]

PAYX documents its endpoints as `http://host/...`, where `host` stands for the base URL of the environment you are integrating against. The paths themselves are reproduced exactly as PAYX documents them. See [API environments](/docs/getting-started/api-environments).

:::

## Response envelope

PAYX responses share a common envelope. See [Response envelope](/docs/status-and-errors/response-envelope).

| Field | Description |
|---|---|
| `transactionId` | |
| `requestTime` | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| `resultCode` | Unique code of the status of the transaction. |
| `resultDescription` | Description of the status of the transaction. |

## Country and currency codes

PAYX uses two different country code systems, and they are not interchangeable:

| Where | Code system | Example |
|---|---|---|
| Payout `destinationCountryCode`, `sourceCountry` | three-letter | `ARE`, `IND`, `NGA`, `GHA` |
| [Country validations](/docs/validation/country-validations) tables | two-letter | `AE`, `IN`, `NG`, `GB` |

Currency values are not always plain ISO 4217. The source uses composite and variant tokens such as `USD-USA`, `EUR-INSTANT`, `GBP-STANDARD` and, for Crypto, `USDC`. These are reproduced exactly as PAYX writes them.

## Field names

Long identifiers are reproduced whole. Where the PAYX source breaks a name across lines for its own table layout — for example `sendClientTrxReference` or `businessRegistrationNumber` — this portal renders the unbroken identifier, since the line break is presentation rather than part of the name.

Spellings are preserved as the source writes them, including where a name looks irregular, because the name is what goes on the wire.

## Examples

Request and response examples are reproduced from the source. They may contain masked values, older formatting or values that differ from the field tables; they are shown as documented rather than rewritten.
