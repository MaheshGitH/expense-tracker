import React from "react";
import { Type } from "./TransactionForm";

interface Props {
  type: (value: Type) => void;
}
const TypeInput = ({ type }: Props) => {
  return (
    <div>
      <p className="ml-2 mb-2">Type</p>

      <div className="flex gap-4">
        <label
          onClick={() => type("expense")}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <input
            defaultChecked
            type="radio"
            name="type"
            value="expense"
            className="hidden"
          />

          <div className="size-3.5 rounded-full border border-border dark:border-border-dark flex items-center justify-center group-has-[:checked]:border-primary">
            <div className="size-2 rounded-full bg-primary scale-0 group-has-[:checked]:scale-100" />
          </div>

          <span>Expense</span>
        </label>

        <label
          onClick={() => type("income")}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <input type="radio" name="type" value="income" className="hidden" />

          <div className="size-3.5 rounded-full border border-border dark:border-border-dark flex items-center justify-center group-has-[:checked]:border-primary">
            <div className="h-2 w-2 rounded-full bg-primary scale-0 group-has-[:checked]:scale-100" />
          </div>

          <span>Income</span>
        </label>
      </div>
    </div>
  );
};

export default TypeInput;
