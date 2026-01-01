import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const AmountInput = () => {
  return (
    <div>
      <p className="mb-2 ml-2">Amount</p>
      <div className="flex items-center gap-2 pl-4 rounded-md border border-border dark:border-border-dark text-secondary">
        <label htmlFor="amount">
          <BsCurrencyDollar size={16} />
        </label>
        <input
          id="amount"
          placeholder="0.00"
          className="w-full py-3 outline-none text-black dark:text-white placeholder-secondary"
          type="number"
        />
      </div>
    </div>
  );
};

export default AmountInput;
