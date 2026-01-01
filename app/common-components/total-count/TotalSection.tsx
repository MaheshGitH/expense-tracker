import TotalCount from "./TotalCount";

interface Props {
  hideLastMonthPercent?: boolean;
}

const TotalSection = ({ hideLastMonthPercent }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TotalCount
        heading="Total Income"
        amount={4500}
        lastMonthPercent={+2.5}
        type="profit"
        arrow="up"
        hideLastMonthPercent={hideLastMonthPercent}
      />
      <TotalCount
        heading="Total Expense"
        amount={4000}
        lastMonthPercent={-2.5}
        type="expense"
        arrow="down"
        hideLastMonthPercent={hideLastMonthPercent}
      />
      <TotalCount
        heading="Net Balance"
        amount={500}
        lastMonthPercent={-1.5}
        type="balance"
        arrow="none"
        hideLastMonthPercent={hideLastMonthPercent}
      />
    </div>
  );
};

export default TotalSection;
