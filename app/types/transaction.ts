export type ExpenseCategory = "Food" | "Rent" | "Transport" | "Entertainment";

export type IncomeCategory = "Salary" | "Freelance" | "Investment";

interface TransactionExtend {
  id: string;
  date: string;
  description: string;
  amount: number;
}

interface ExpenseTransaction extends TransactionExtend {
  type: "expense";
  category: ExpenseCategory;
}

interface IncomeTransaction extends TransactionExtend {
  type: "income";
  category: IncomeCategory;
}

export type Transaction = ExpenseTransaction | IncomeTransaction;
