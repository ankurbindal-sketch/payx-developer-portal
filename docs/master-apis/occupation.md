---
title: "Occupation"
sidebar_label: "Occupation"
description: "The Occupation API is used to fetch the occupation."
---
# Occupation

<span className="payx-method payx-method--get">GET</span>

<div className="payx-endpoint">
  <div className="payx-endpoint__row">
    <span className="payx-method payx-method--get">GET</span>
    <code className="payx-endpoint__url">{'http://host/ewallet/api/v1/getOccupation/PAYX/{transactionType}'}</code>
  </div>
</div>

The Occupation API is used to fetch the occupation.

### Request Parameter

| Parameters | Input Type | Length  | Requirement | Description            |
|------------|:-------------:|:------------:|:------------:|------------------------|
| transactionType | Alphanumeric | 03 | M | The harmonized Transaction Type. Fixed default value B2C, B2B, C2C, C2B. |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Request Details

```http
GET /services HTTP/1.0
HOST: XXX.XXX.XXX.XXX:Port
Content-Type: application/json; charset=utf-8
GET http://host/ewallet/api/v1/getOccupation/PAYX/C2C
```

### Response Parameter

| Parameters        |        Data Type | Requirement | Description                                                                 |
|-------------------|:------------:|:------------:|-------------------------------------------------------------------------------|
| requestTime | String | M | This is the requested date and time in the Day Mmm DD HH:MM:SS TIMEZONE YYYY. |
| responseTime | String | M | This is the response date and time in the Day mm DD HH:MM:SS TIMEZONE YYYY. |
| resultCode | String | M | Unique code of the status of the transaction. |
| resultDescription | String | M | Description of the status of the transaction. |
| **Result** |  |  |  |
| Result - data | String | M | The code which needs to be passed in payout. |
| Result - value | String | M |  |

*Requirement legend: M = Mandatory · O = Optional · C = Conditional*

### Response Details

```json
{
"requestTime": "Tue Jan 28 16:35:55 IST 2025",
"responseTime": "Tue Jan 28 16:35:55 IST 2025",
"resultCode": "0",
"resultDescription": "Transaction successful",
"result": [
    {
        "data": "PAYO001",
        "value": "Accountant"
    },
    {
        "data": "PAYO002",
        "value": "Actor / Actress"
    },
    {
        "data": "PAYO003",
        "value": "Architect"
    },
    {
        "data": "PAYO064",
        "value": "Army/Defence"
    },
    {
        "data": "PAYO004",
        "value": "Artist"
    },
    {
        "data": "PAYO005",
        "value": "Assistant"
    },
    {
        "data": "PAYO006",
        "value": "Auditor"
    },
    {
        "data": "PAYO007",
        "value": "BPO"
    },
    {
        "data": "PAYO008",
        "value": "Broker"
    },
    {
        "data": "PAYO063",
        "value": "Business Owner"
    },
    {
        "data": "PAYO009",
        "value": "Butcher"
    },
    {
        "data": "PAYO010",
        "value": "Carpenter"
    },
    {
        "data": "PAYO011",
        "value": "Cashier"
    },
    {
        "data": "PAYO012",
        "value": "Chartered Accountant"
    },
    {
        "data": "PAYO013",
        "value": "Chef"
    },
    {
        "data": "PAYO014",
        "value": "Clerk"
    },
    {
        "data": "PAYO015",
        "value": "Consultant"
    },
    {
        "data": "PAYO016",
        "value": "Cook"
    },
    {
        "data": "PAYO017",
        "value": "Customer Service Executive"
    },
    {
        "data": "PAYO018",
        "value": "Dentist"
    },
    {
        "data": "PAYO019",
        "value": "Designer"
    },
    {
        "data": "PAYO020",
        "value": "Doctor"
    },
    {
        "data": "PAYO021",
        "value": "Driver"
    },
    {
        "data": "PAYO022",
        "value": "Electrician"
    },
    {
        "data": "PAYO023",
        "value": "Engineer"
    },
    {
        "data": "PAYO024",
        "value": "Factory worker"
    },
    {
        "data": "PAYO025",
        "value": "Fisherman"
    },
    {
        "data": "PAYO026",
        "value": "Gardener"
    },
    {
        "data": "PAYO027",
        "value": "Government worker"
    },
    {
        "data": "PAYO029",
        "value": "HOUSEKEEPING"
    },
    {
        "data": "PAYO028",
        "value": "House Maid"
    },
    {
        "data": "PAYO030",
        "value": "Journalist"
    },
    {
        "data": "PAYO031",
        "value": "Judge"
    },
    {
        "data": "PAYO032",
        "value": "Labourer"
    },
    {
        "data": "PAYO033",
        "value": "Lawyer"
    },
    {
        "data": "PAYO034",
        "value": "Librarian"
    },
    {
        "data": "PAYO035",
        "value": "Manager"
    },
    {
        "data": "PAYO036",
        "value": "Mechanic"
    },
    {
        "data": "PAYO037",
        "value": "Musician"
    },
    {
        "data": "PAYO038",
        "value": "Nurses"
    },
    {
        "data": "PAYO039",
        "value": "Office Boy / Peon"
    },
    {
        "data": "PAYO040",
        "value": "Officer"
    },
    {
        "data": "PAYO041",
        "value": "Pharmacist"
    },
    {
        "data": "PAYO042",
        "value": "Physician"
    },
    {
        "data": "PAYO043",
        "value": "Pilot"
    },
    {
        "data": "PAYO044",
        "value": "Plumber"
    },
    {
        "data": "PAYO045",
        "value": "Police Officer"
    },
    {
        "data": "PAYO046",
        "value": "Real estate agent"
    },
    {
        "data": "PAYO049",
        "value": "Receptionist"
    },
    {
        "data": "PAYO050",
        "value": "Researcher / Scientist"
    },
    {
        "data": "PAYO051",
        "value": "Retired"
    },
    {
        "data": "PAYO052",
        "value": "Salesman"
    },
    {
        "data": "PAYO053",
        "value": "Scientist"
    },
    {
        "data": "PAYO065",
        "value": "Seaman"
    },
    {
        "data": "PAYO054",
        "value": "Secretary"
    },
    {
        "data": "PAYO055",
        "value": "Security Officer"
    },
    {
        "data": "PAYO067",
        "value": "Self Employed"
    },
    {
        "data": "PAYO056",
        "value": "Social workers"
    },
    {
        "data": "PAYO057",
        "value": "Software developer"
    },
    {
        "data": "PAYO069",
        "value": "Sports person"
    },
    {
        "data": "PAYO066",
        "value": "Student"
    },
    {
        "data": "PAYO058",
        "value": "Supervisor"
    },
    {
        "data": "PAYO059",
        "value": "Surveyor"
    },
    {
        "data": "PAYO060",
        "value": "Tailor"
    },
    {
        "data": "PAYO061",
        "value": "Teacher"
    },
    {
        "data": "PAYO062",
        "value": "Technician"
    },
    {
        "data": "PAYO047",
        "value": "Travel agent"
    },
    {
        "data": "PAYO068",
        "value": "Unemployed"
    },
    {
        "data": "PAYO048",
        "value": "Waiter/Waitress"
    }
]
}
```
