# Legacy Accounting System Documentation

This documentation covers the legacy COBOL-based accounting system used by Mergington High School.

## System Architecture and COBOL Files

- **`main.cob`**: This is the main entry point of the application. It manages the user interface, displays the interactive menu, handles user inputs, and routes actions based on user selection (view balance, process payment, record purchase, or exit).
- **`operations.cob`**: This file contains the core business logic for executing student account operations. It implements the calculations for processing payments (crediting accounts) and recording purchases (debiting accounts).
- **`data.cob`**: This file serves as the data storage manager. It handles retrieving and saving student account balances from the underlying persistent storage.

## Data Flow Diagram

The following sequence diagram illustrates the flow of data within the system during common student account operations:

```mermaid
sequenceDiagram
    participant User
    participant main.cob
    participant operations.cob
    participant data.cob

    User->>main.cob: Select Menu Option
    alt View Balance
        main.cob->>data.cob: Retrieve Student Balance
        data.cob-->>main.cob: Balance Data
        main.cob-->>User: Display Balance
    else Process Payment / Record Purchase
        main.cob->>operations.cob: Execute Operation Request
        operations.cob->>data.cob: Fetch Current Balance
        data.cob-->>operations.cob: Current Balance
        operations.cob->>operations.cob: Compute New Balance
        operations.cob->>data.cob: Store Updated Balance
        data.cob-->>operations.cob: Save Confirmation
        operations.cob-->>main.cob: Operation Success
        main.cob-->>User: Display Confirmation
    end
```
