"use client";

import ContentContainer from "./ContentContainer";

import BarChart from "./BarChart";
import TrendChart from "./TrendChart";
import TransactionForm from "@/app/common-components/transaction-form/TransactionForm";

const BodyCenter = () => {
  return (
    <div className="flex flex-col gap-12">
      <ContentContainer heading="Quick Add Transaction">
        <TransactionForm />
      </ContentContainer>
      {/* <ContentContainer
        heading="Spending by Category"
        subheading="Monthly expense distribution"
      >
        <BarChart />
      </ContentContainer> */}
      <ContentContainer
        heading="Financial Trend"
        subheading="Income vs Expense over time."
      >
        <TrendChart />
      </ContentContainer>
    </div>
  );
};

export default BodyCenter;
