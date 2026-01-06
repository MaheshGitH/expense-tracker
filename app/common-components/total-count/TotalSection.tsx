"use client";
import TotalCount from "./TotalCount";
import { useTransactionStore } from "@/app/store/useTransactionStore";

interface Props {
  hideLastMonthPercent?: boolean;
}

const TotalSection = ({ hideLastMonthPercent }: Props) => {
  const totalCount = useTransactionStore((s) => s.totals);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TotalCount
        heading="Total Income"
        amount={totalCount.income}
        lastMonthPercent={+100}
        type="profit"
        arrow="up"
        hideLastMonthPercent={hideLastMonthPercent}
      />
      <TotalCount
        heading="Total Expense"
        amount={totalCount.expense}
        lastMonthPercent={+100}
        type="expense"
        arrow="down"
        hideLastMonthPercent={hideLastMonthPercent}
      />
      <TotalCount
        heading="Net Balance"
        amount={totalCount.netBalance}
        lastMonthPercent={+100}
        type="balance"
        arrow="none"
        hideLastMonthPercent={hideLastMonthPercent}
      />
    </div>
  );
};

export default TotalSection;
