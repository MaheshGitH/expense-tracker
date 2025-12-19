import React from "react";
import TrendChart from "./TrendChart";

const FinancialTrend = () => {
  return (
    <div>
      <p className="font-montserrat font-semibold text-base mb-1">
        Financial Trend
      </p>
      <p className="text-secondary mb-8">Income vs Expense over time.</p>
      <div className="max-w-5xl">
        <TrendChart />
      </div>
    </div>
  );
};

export default FinancialTrend;
