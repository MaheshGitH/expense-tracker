import FinancialTrend from "./FinancialTrend";
import QuickTransaction from "./QuickTransaction";
import Spendings from "./Spendings";

const BodyCenter = () => {
  return (
    <div className="flex flex-col gap-12">
      <QuickTransaction />
      <Spendings />
      <FinancialTrend />
    </div>
  );
};

export default BodyCenter;
