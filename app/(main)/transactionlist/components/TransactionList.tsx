"use client";

import TransactionsTable from "./TransactionsTable";
import Transactions from "./Transactions";
import { useTransactionStore } from "@/app/store/useTransactionStore";

const TransactionList = () => {
  const transactionList = useTransactionStore((s) => s.transactions);
  return (
    <div className="md:border border-border dark:border-border-dark md:p-8 rounded-md mb-4">
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
            removeBorder={index === transactionList.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
