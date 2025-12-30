"use client";

import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import TransactionsTable from "./TransactionsTable";
import { Transaction } from "./columnsDef";
import Transactions from "./Transaction";

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
];

const RecentTransactions = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (id: number, checked?: boolean) => {
    setSelected((prev) => {
      if (checked) {
        return prev.includes(id) ? prev : [...prev, id];
      } else {
        return prev.filter((value) => value !== id);
      }
    });
  };

  return (
    <div className="mb-12 md:border border-border md:p-8 rounded-md">
      <div className="flex justify-between mb-8 lg:m-4 lg:mb-12 duration-150">
        <p className="font-montserrat font-semibold ~text-base/xl">
          Recent Transactions
        </p>
        <button
          disabled={selected.length === 0}
          className="flex items-center gap-1.5 py-1.5 px-3 bg-danger rounded-md text-white disabled:opacity-80 lg:hidden"
        >
          Delete {selected.length > 0 ? `(${selected.length})` : <LuTrash2 />}
        </button>
      </div>
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
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
