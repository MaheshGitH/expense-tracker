"use client";

import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import TransactionsTable from "./TransactionsTable";
import Transactions from "./Transaction";
import { useTransactionStore } from "@/app/store/useTransactionStore";

const RecentTransactions = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const transactionList = useTransactionStore((s) => s.transactions);
  const removeTransactions = useTransactionStore((s) => s.removeTransactions);

  const handleSelect = (id: string, checked?: boolean) => {
    setSelected((prev) => {
      if (checked) {
        return prev.includes(id) ? prev : [...prev, id];
      } else {
        return prev.filter((value) => value !== id);
      }
    });
  };

  const handleRemove = () => {
    removeTransactions(selected);
    setSelected([]);
  };

  return (
    <div className="md:border border-border dark:border-border-dark md:p-8 rounded-md">
      <div className="flex justify-between mb-8 lg:m-4 lg:mb-12 duration-150">
        <p className="font-montserrat font-semibold ~text-base/xl">
          Recent Transactions
        </p>
        <button
          disabled={selected.length === 0}
          onClick={handleRemove}
          className="flex items-center gap-1.5 py-1.5 px-3 bg-danger dark:bg-danger-dark rounded-md text-white disabled:opacity-80 lg:hidden"
        >
          Delete {selected.length > 0 ? `(${selected.length})` : <LuTrash2 />}
        </button>
      </div>
      {/* For big screens */}
      <div className="max-lg:hidden">
        <TransactionsTable data={transactionList} />
      </div>
      {/* For small screens */}
      <div className="lg:hidden">
        {transactionList.map((transaction, index) => (
          <Transactions
            key={index}
            amount={transaction.amount}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            type={transaction.type}
            id={transaction.id}
            onSelect={handleSelect}
            removeBorder={transactionList.length - 1 === index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
