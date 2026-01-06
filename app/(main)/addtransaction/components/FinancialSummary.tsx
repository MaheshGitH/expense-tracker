"use client";

import { useTransactionStore } from "@/app/store/useTransactionStore";
import TotalCount from "./TotalCount";

const FinancialSummary = () => {
  const totalCount = useTransactionStore((s) => s.totals);

  return (
    <div className="flex flex-col gap-2 md:border border-border dark:border-border-dark rounded-md md:max-w-96">
      <div className="max-md:mb-6 md:p-6 md:border-b border-border dark:border-border-dark">
        <p className="font-montserrat font-semibold ~text-base/xl mb-2">
          Financial Summary
        </p>
        <p className="text-secondary">Your current financial overview.</p>
      </div>
      <div className="flex flex-col md:p-6 ">
        <TotalCount title="Total Income" amount={totalCount.income} profit />
        <TotalCount title="Total Expenses" amount={totalCount.expense} loss />
        <TotalCount
          title="Net Income"
          amount={totalCount.netBalance}
          profit={totalCount.income > totalCount.expense}
          loss={totalCount.income < totalCount.expense}
        />
      </div>
    </div>
  );
};

export default FinancialSummary;
