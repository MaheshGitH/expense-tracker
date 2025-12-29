"use client";

import Button from "@/app/common-components/Button";
import ContentContainer from "./ContentContainer";

import AmountInput from "./quick-transaction/AmountInput";
import DatePickerInput from "./quick-transaction/DatePickerInput";
import DescriptionInput from "./quick-transaction/DescriptionInput";
import SelectCategoryInput from "./quick-transaction/SelectCategoryInput";
import TypeInput from "./quick-transaction/TypeInput";

import BarChart from "./BarChart";
import TrendChart from "./TrendChart";

const BodyCenter = () => {
  return (
    <div className="flex flex-col gap-12">
      <ContentContainer heading="Quick Add Transaction">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
          action=""
        >
          <TypeInput />
          <DatePickerInput />
          <SelectCategoryInput />
          <DescriptionInput />
          <AmountInput />
          <Button>Add Transaction</Button>
        </form>
      </ContentContainer>
      <ContentContainer
        heading="Spending by Category"
        subheading="Monthly expense distribution"
      >
        <BarChart />
      </ContentContainer>
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
