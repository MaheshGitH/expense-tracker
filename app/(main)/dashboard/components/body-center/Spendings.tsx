import BarChart from "./BarChart";

const Spendings = () => {
  return (
    <div>
      <p className="font-montserrat font-semibold text-base mb-1">
        Spending by Category
      </p>
      <p className="text-secondary mb-8">Monthly expense distribution</p>
      <div className="max-w-5xl">
        <BarChart />
      </div>
    </div>
  );
};

export default Spendings;
