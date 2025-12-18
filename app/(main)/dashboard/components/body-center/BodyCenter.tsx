"use client";

import TypeInput from "./TypeInput";
import DatePickerInput from "./DatePickerInput";
import SelectCategoryInput from "./SelectCategoryInput";
import DescriptionInput from "./DescriptionInput";
import AmountInput from "./AmountInput";
import SubmitButton from "@/app/common-components/sign/SubmitButton";

const BodyCenter = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-montserrat font-semibold text-base">
        Quick Add Transaction
      </p>
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
        <SubmitButton>Add Transaction</SubmitButton>
      </form>
    </div>
  );
};

export default BodyCenter;
