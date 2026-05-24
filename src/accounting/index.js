// Student Accounting System modernized from COBOL to Node.js
// Handles student balances, credits (payments), and debits (purchases)

const readline = require('readline');

// Mock data storage for student balances
const studentBalances = {
  "1001": 50.00,
  "1002": 150.00,
  "1003": 0.00
};

// Credit operation (processing payment decreases student's outstanding balance)
function processCredit(studentId, amount) {
  if (!studentBalances[studentId] && studentBalances[studentId] !== 0) {
    throw new Error("Student not found");
  }
  studentBalances[studentId] -= amount;
  return studentBalances[studentId];
}

// Debit operation (recording purchase increases student's outstanding balance)
function processDebit(studentId, amount) {
  if (!studentBalances[studentId] && studentBalances[studentId] !== 0) {
    throw new Error("Student not found");
  }
  studentBalances[studentId] += amount;
  return studentBalances[studentId];
}

function getBalance(studentId) {
  if (!studentBalances[studentId] && studentBalances[studentId] !== 0) {
    throw new Error("Student not found");
  }
  return studentBalances[studentId];
}

// Main CLI Menu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\nMergington High School Accounting Menu:");
  console.log("1. View Balance");
  console.log("2. Process Payment (Credit)");
  console.log("3. Record Purchase (Debit)");
  console.log("4. Exit");
  rl.question("Select Option: ", handleMenuOption);
}

function handleMenuOption(option) {
  if (option === "4") {
    rl.close();
    return;
  }

  rl.question("Enter Student ID: ", (studentId) => {
    try {
      if (option === "1") {
        const balance = getBalance(studentId);
        console.log(`Current Balance: $${balance.toFixed(2)}`);
        showMenu();
      } else if (option === "2") {
        rl.question("Enter Credit Amount (Payment): ", (amount) => {
          const newBalance = processCredit(studentId, parseFloat(amount));
          console.log(`Payment processed. New balance: $${newBalance.toFixed(2)}`);
          showMenu();
        });
      } else if (option === "3") {
        rl.question("Enter Debit Amount (Purchase): ", (amount) => {
          const newBalance = processDebit(studentId, parseFloat(amount));
          console.log(`Purchase recorded. New balance: $${newBalance.toFixed(2)}`);
          showMenu();
        });
      } else {
        console.log("Invalid option selected.");
        showMenu();
      }
    } catch (err) {
      console.log(`Error: ${err.message}`);
      showMenu();
    }
  });
}

// Start menu if executed directly
if (require.main === module) {
  showMenu();
}

module.exports = {
  processCredit,
  processDebit,
  getBalance,
  studentBalances
};
