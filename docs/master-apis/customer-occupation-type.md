---
title: "Customer Occupation Type"
sidebar_label: "Customer Occupation Type"
description: "The Customer Occupation Type API is used to fetch the occupation of the customer."
---
# Customer Occupation Type

<span className="payx-method payx-method--get">GET</span>

[Individual fields in the Customer Registration API](/docs/customers/customer-registration#request-parameter-of-individual-customer)

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/customerOccupationType/getByCustomerTypeCode/{customerTypeCode}'}</code>
  </div>
</div>

The Customer Occupation Type API is used to fetch the occupation of the customer.

### Request Parameter of Customer Occupation

| Parameters | Input Type |  Length | Requirement | Description                        |
|------------|:----------:|:----------:|:------------:|------------------------------------|
| customerTypeCode | Numeric | 06 | M | The unique code of the customer type, for Individual customer : 100001 |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details of Customer Occupation

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET - http://host/ewallet/api/v1/customerOccupationType/getByCustomerTypeCode/100001
```

### Response Parameter

| Parameters | Data Type | Requirement | Description |
|---|---|---|---|
| transactionId | String | M |  |
| requestTime | String | M | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| responseTime | String | M | This is the response date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| resultCode | String | M | Unique code of the status of the transaction. |
| resultDescription | String | M | Description of the status of the transaction. |
| **Customer Occupation Type List** |  |  |  |
| id | String | M | The serial number of the record. |
| code | String | M | The unique code of the customer's occupation, which needs to be passed while customer registration process. |
| customerTypeCode | String | M | The unique code of the following. • Individual <br /> • Business |
| name | String | M | The occupation of the customer. |
| status | String | M | The status of the record. <br /> note: Only records with status "Active" needs to be used |
| creationDate | String | M | The creation date of the customer in the YYYY-MM-DD <br /> &lt;Delimiter> <br /> HH:MM:SS.MS <br /> TIMEZONE |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

Note: The response may include records with `"status": "Inactive"`. These should be ignored. Only the data with `"status": "Active"` must be filtered and used.

### Response Details

```json
{
"transactionId": "8306125",
"requestTime": "Wed Apr 17 21:06:35 IST 2024",
"responseTime": "Wed Apr 17 21:06:36 IST 2024",
"resultCode": "0",
"resultDescription": "Transaction successful",
"customerOccupationTypeList": [
  {
  "id": 196,
  "code": "PAYO064",
  "customerTypeCode": "100001",
  "name": "Army/Defence",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 197,
  "code": "PAYO065",
  "customerTypeCode": "100001",
  "name": "Seaman",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 198,
  "code": "PAYO066",
  "customerTypeCode": "100001",
  "name": "Student",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 137,
  "code": "PAYO005",
  "customerTypeCode": "100001",
  "name": "Assistant",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 138,
  "code": "PAYO006",
  "customerTypeCode": "100001",
  "name": "Auditor",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 139,
  "code": "PAYO007",
  "customerTypeCode": "100001",
  "name": "BPO",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 148,
  "code": "PAYO016",
  "customerTypeCode": "100001",
  "name": "Cook",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 150,
  "code": "PAYO018",
  "customerTypeCode": "100001",
  "name": "Dentist",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 151,
  "code": "PAYO019",
  "customerTypeCode": "100001",
  "name": "Designer",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 152,
  "code": "PAYO020",
  "customerTypeCode": "100001",
  "name": "Doctor",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 153,
  "code": "PAYO021",
  "customerTypeCode": "100001",
  "name": "Driver",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 154,
  "code": "PAYO022",
  "customerTypeCode": "100001",
  "name": "Electrician",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 155,
  "code": "PAYO023",
  "customerTypeCode": "100001",
  "name": "Engineer",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 156,
  "code": "PAYO024",
  "customerTypeCode": "100001",
  "name": "Factory worker",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 157,
  "code": "PAYO025",
  "customerTypeCode": "100001",
  "name": "Fisherman",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 158,
  "code": "PAYO026",
  "customerTypeCode": "100001",
  "name": "Gardener",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 159,
  "code": "PAYO027",
  "customerTypeCode": "100001",
  "name": "Government worker",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
{
  "id": 160,
  "code": "PAYO028",
  "customerTypeCode": "100001",
  "name": "House Maid",
  "status": "Active",
  "creationDate": "2025-03-19T17:23:54.415+0530"
},
.........
.........etc
]
}
```
