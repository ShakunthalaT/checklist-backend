# Title

  Node.js Assessement

## Objective

  Create a Simple Checklist System Using Node.js

## Tech Stack

    The primary technologies Node.js

## Completion Instructions

### Functionality

#### Must Have
   
   You need to create a Checklist System in Node.js that evaluates certain conditions
   based on the provided input data (fetched from an API) and displays a dashboard with
   results showing which conditions have passed and failed.

#### Nice to Have

  • Write Clean Code: Code should follow best practices and be readable and
modular.
• Future Proofing: Design the solution so that adding or modifying checklist rules
is straightforward without significant changes to the existing codebase.

### Guidelines to develop a project

#### Must Have

Checklist Rules:
1. Valuation Fee Paid: isValuationFeePaid should be true.
2. UK Resident: isUkResident should be true.
3. Risk Rating Medium: riskRating should be "Medium".
4. LTV Below 60%: Calculate Loan-to-Value as (Loan Required / Purchase Price) *
100 and ensure it is less than 60%.

#### Nice to Have

   A Dashboard displaying The status (Passed/Failed) of each rule.

## Resources

### APIs

   http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639

### Third-party packages

   npm install axios ,express
