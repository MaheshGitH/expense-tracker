"use client";

import { useRef, useState } from "react";
import AmountInput from "./AmountInput";
import DatePickerInput from "./DatePickerInput";
import DescriptionInput from "./DescriptionInput";
import SelectCategoryInput from "./SelectCategoryInput";
import TypeInput from "./TypeInput";
import Button from "@/app/common-components/Button";

interface Props {
  isClearable?: boolean;
}

const TransactionForm = ({ isClearable }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [reset, setReset] = useState(false);
  return (
    <form
      ref={formRef}
      className="flex flex-col gap-6"
      onSubmit={(e) => e.preventDefault()}
      action=""
    >
      <TypeInput />
      <DatePickerInput reset={reset} />
      <SelectCategoryInput reset={reset} />
      <DescriptionInput />
      <AmountInput />

      {isClearable && (
        <div className="flex gap-2 place-self-end">
          <button
            className="py-3 px-6 border border-border dark:border-border-dark rounded-md"
            onClick={() => {
              setReset(!reset);
              formRef.current?.reset();
            }}
          >
            Clear
          </button>
          <button className="py-3 px-6 rounded-md bg-primary text-white">
            Add Transaction
          </button>
        </div>
      )}
      {isClearable ? null : <Button>Add Transaction</Button>}
    </form>
  );
};

export default TransactionForm;
