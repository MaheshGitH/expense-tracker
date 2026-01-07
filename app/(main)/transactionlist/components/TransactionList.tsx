"use client";

import TransactionsTable from "./TransactionsTable";
import Transactions from "./Transactions";
import { useTransactionStore } from "@/app/store/useTransactionStore";
import Filter from "./Filter";
import Search from "./Search";
import { useFilterStore } from "@/app/store/useFilterStore";

const TransactionList = () => {
  const transactionList = useTransactionStore((s) => s.transactions);
  const filter = useFilterStore((s) => s.filter);
  const search = useFilterStore((s) => s.search);

  const filteredList = [...transactionList]
    .filter((item) => {
      if (filter === "All Category") return true;
      return item.category === filter;
    })
    .filter((item) => {
      if (!search) return true;
      return item.description.toLowerCase().includes(search.toLowerCase());
    })
    .reverse();

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <Search />
        <Filter />
      </div>

      <div className="md:border border-border dark:border-border-dark md:p-8 rounded-md mb-4">
        {/* For big screens */}
        <div className="max-lg:hidden">
          <TransactionsTable data={filteredList} />
        </div>
        {/* For small screens */}
        <div className="lg:hidden">
          {filteredList.map((transaction, index) => (
            <Transactions
              key={transaction.id}
              {...transaction}
              removeBorder={index === filteredList.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionList;
