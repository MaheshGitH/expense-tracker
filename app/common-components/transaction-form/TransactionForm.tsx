"use client";

import { useRef, useState } from "react";

import AmountInput from "./AmountInput";
import DatePickerInput from "./DatePickerInput";
import DescriptionInput from "./DescriptionInput";
import SelectCategoryInput from "./SelectCategoryInput";
import TypeInput from "./TypeInput";

import Button from "@/app/common-components/Button";
import { useTransactionStore } from "@/app/store/useTransactionStore";
import { Transaction } from "@/app/types/transaction";

interface Props {
  isClearable?: boolean;
}

export type Type = "expense" | "income";

const TransactionForm = ({ isClearable }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [reset, setReset] = useState(false);
  const [type, setType] = useState<Type>("expense");
  const addTransaction = useTransactionStore((s) => s.addTransaction);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const transaction = {
      id: crypto.randomUUID(),
      type: formData.get("type") as "income" | "expense",
      amount: Number(formData.get("amount")),
      category: String(formData.get("category")),
      date: String(formData.get("date")),
      description: String(formData.get("description") || ""),
    };

    addTransaction(transaction as Transaction);

    e.currentTarget.reset();
    handleReset();
  };

  const handleReset = () => {
    setReset(!reset);
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-6"
      onSubmit={handleSubmit}
      action=""
    >
      <TypeInput type={(value) => setType(value)} />
      <DatePickerInput reset={reset} />
      <SelectCategoryInput type={type} reset={reset} />
      <DescriptionInput />
      <AmountInput />

      {isClearable && (
        <div className="flex gap-2 place-self-end">
          <button
            className="py-3 px-6 border border-border dark:border-border-dark rounded-md"
            onClick={handleReset}
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
