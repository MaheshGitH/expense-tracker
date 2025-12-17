"use client";

import DatePickerInput from "./DatePickerInput";
import TypeInput from "./TypeInput";

const BodyCenter = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-montserrat font-semibold text-base">
        Quick Add Transaction
      </p>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <TypeInput />
        <DatePickerInput />
      </form>
    </div>
  );
};

export default BodyCenter;
