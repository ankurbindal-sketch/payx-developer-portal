---
title: "API environments"
sidebar_label: "API environments"
description: "How PAYX endpoint paths are written and how base URLs apply."
---
# API environments

PAYX documents its endpoints against a placeholder host. Every path in this reference is written exactly as PAYX writes it:

```http
http://host/ewallet/api/v1/...
```

where `host` stands for the base URL of the environment you are integrating against. Prefix the documented path with that base URL.

:::info[Base URLs and credentials]

Environment base URLs and your client credentials — including your client code — are supplied through PAYX onboarding. The PAYX documentation source this portal is built from documents the paths only, so no base URL is reproduced here.

:::

## Authentication applies to every environment

Obtain an access token from the [Authentication API](/docs/authentication/authentication) and use it on subsequent calls. The token response returns `access_token`, `token_type` (`bearer`), `expires_in`, `scope`, `clientCode` and `locale`.

## Related

- [Authentication](/docs/authentication/authentication)
- [How to read this reference](/docs/getting-started/conventions)
- [Integration journey](/docs/getting-started/integration-journey)
