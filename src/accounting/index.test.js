// Unit tests for the modernized Node.js accounting application
const { processCredit, processDebit, getBalance, studentBalances } = require('./index');

describe('Student Accounting System Unit Tests', () => {
  beforeEach(() => {
    // Reset balances
    studentBalances["1001"] = 50.00;
    studentBalances["1002"] = 100.00;
    studentBalances["1003"] = 40.00;
  });

  test('TC001 - View Student Account Balance', () => {
    expect(getBalance("1001")).toBe(50.00);
  });

  test('TC002 - Process Payment (Credit)', () => {
    const newBalance = processCredit("1002", 20.00);
    expect(newBalance).toBe(80.00);
  });

  test('TC003 - Record Purchase (Debit)', () => {
    const newBalance = processDebit("1003", 30.00);
    expect(newBalance).toBe(70.00);
  });

  test('TC004 - View Non-existent Student Account', () => {
    expect(() => getBalance("9999")).toThrow("Student not found");
  });
});
