# Test Plan: Legacy Accounting System

This test plan details the test cases required to validate the student accounting system business logic.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|---|---|---|---|---|---|---|---|
| TC001 | View Student Account Balance | Student account exists with a balance of $50. | 1. Choose Option 1 (View Balance).<br>2. Enter Student ID. | Display the student balance ($50.00). | Balance displayed as $50.00. | Pass | Works as expected. |
| TC002 | Process Payment (Credit) | Student account exists with a balance of $100. | 1. Choose Option 2 (Process Payment).<br>2. Enter Student ID.<br>3. Enter payment amount ($20). | New balance should decrease to $80. | Balance updated to $80.00. | Pass | Credits decrease the outstanding balance. |
| TC003 | Record Purchase (Debit) | Student account exists with a balance of $40. | 1. Choose Option 3 (Record Purchase).<br>2. Enter Student ID.<br>3. Enter purchase amount ($30). | New balance should increase to $70. | Balance updated to $70.00. | Pass | Debits increase the outstanding balance. |
| TC004 | View Non-existent Student Account | Student account does not exist. | 1. Choose Option 1 (View Balance).<br>2. Enter non-existent ID. | Show error message "Student not found". | Error message displayed. | Pass | Proper error handling for missing accounts. |
