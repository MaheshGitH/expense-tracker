"use client";

import TransactionsTable from "./TransactionsTable";
import { Transaction } from "./columnsDef";
import Transactions from "./Transactions";

const transactions: Transaction[] = [
  {
    amount: 3.12,
    date: "2025-10-24",
    description: "Coffee at Cafe Shop and Eat at Restaurant",
    category: "Food",
    type: "expense",
  },
  {
    amount: 45.5,
    date: "2025-10-23",
    description:
      "Monthly grocery shopping from local supermarket including vegetables, fruits, dairy products and household essentials",
    category: "Shop",
    type: "expense",
  },
  {
    amount: 2000,
    date: "2025-12-23",
    description: "Monthly salary credit",
    category: "Salary",
    type: "income",
  },
];

const TransactionList = () => {
  return (
    <div className="md:border border-border dark:border-border-dark md:p-8 rounded-md">
      {/* For big screens */}
      <div className="max-lg:hidden">
        <TransactionsTable data={transactions} />
      </div>
      {/* For small screens */}
      <div className="lg:hidden">
        {transactions.map((transaction, index) => (
          <Transactions
            key={index}
            amount={transaction.amount}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            type={transaction.type}
            index={index}
            removeBorder={index === transactions.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
