import React from "react";
import TotalCount from "./TotalCount";

const data = [
  {
    title: "Total Income",
    amount: 5000,
  },
  {
    title: "Total Expenses",
    amount: 3000,
  },
  {
    title: "Net Income",
    amount: 2000,
  },
];

const FinancialSummary = () => {
  return (
    <div className="flex flex-col gap-2 md:border border-border dark:border-border-dark rounded-md md:max-w-96">
      <div className="max-md:mb-6 md:p-6 md:border-b border-border dark:border-border-dark">
        <p className="font-montserrat font-semibold ~text-base/xl mb-2">
          Financial Summary
        </p>
        <p className="text-secondary">Your current financial overview.</p>
      </div>
      <div className="flex flex-col md:p-6 ">
        <TotalCount title="Total Income" amount={5000} profit />
        <TotalCount title="Total Expenses" amount={2000} loss />
        <TotalCount
          title="Net Income"
          amount={3000}
          profit={5000 > 2000}
          loss={5000 < 2000}
        />
      </div>
    </div>
  );
};

export default FinancialSummary;
