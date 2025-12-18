"use client";

import DatePickerInput from "./DatePickerInput";
import SelectCategoryInput from "./SelectCategoryInput";
import TypeInput from "./TypeInput";

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
      </form>
    </div>
  );
};

export default BodyCenter;
