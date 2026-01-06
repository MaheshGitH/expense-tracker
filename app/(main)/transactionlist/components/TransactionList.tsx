"use client";

import TransactionsTable from "./TransactionsTable";
import Transactions from "./Transactions";
import { useTransactionStore } from "@/app/store/useTransactionStore";
import Filter from "./Filter";
import Search from "./Search";
import { useFilterStore } from "@/app/store/useFilterStore";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types/transaction";

const TransactionList = () => {
  const [list, setList] = useState<Transaction[]>([]);
  const transactionList = useTransactionStore((s) => s.transactions);

  const filter = useFilterStore((s) => s.filter);

  const search = useFilterStore((s) => s.search);

  useEffect(() => {
    setList(transactionList);
    if (filter === "All Category") return;
    setList((prev) => prev.filter((item) => item.category === filter));
  }, [transactionList, search, filter]);

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <Search />
        <Filter />
      </div>

      <div className="md:border border-border dark:border-border-dark md:p-8 rounded-md mb-4">
        {/* For big screens */}
        <div className="max-lg:hidden">
          <TransactionsTable data={list} />
        </div>
        {/* For small screens */}
        <div className="lg:hidden">
          {list.map((transaction, index) => (
            <Transactions
              key={index}
              amount={transaction.amount}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              type={transaction.type}
              id={transaction.id}
              removeBorder={index === list.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionList;
