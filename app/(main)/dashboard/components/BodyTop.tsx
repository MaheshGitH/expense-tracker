import TotalCount from "./TotalCount";

const BodyTop = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <TotalCount
        heading="Total Income"
        amount={4500}
        lastMonthPercent={+2.5}
        type="profit"
        arrow="up"
      />
      <TotalCount
        heading="Total Expense"
        amount={4000}
        lastMonthPercent={-2.5}
        type="expense"
        arrow="down"
      />
      <TotalCount
        heading="Net Balance"
        amount={500}
        lastMonthPercent={-1.5}
        type="balance"
        arrow="none"
      />
    </div>
  );
};

export default BodyTop;
