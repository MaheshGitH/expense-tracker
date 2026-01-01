import React from "react";

const TypeInput = () => {
  return (
    <div>
      <p className="ml-2 mb-2">Type</p>

      <div className="flex gap-4">
        <label className="group flex items-center gap-2 cursor-pointer">
          <input defaultChecked type="radio" name="choice" className="hidden" />

          <div className="size-3.5 rounded-full border border-border dark:border-border-dark flex items-center justify-center group-has-[:checked]:border-primary">
            <div className="size-2 rounded-full bg-primary scale-0 group-has-[:checked]:scale-100" />
          </div>

          <span>Expense</span>
        </label>

        <label className="group flex items-center gap-2 cursor-pointer">
          <input type="radio" name="choice" className="hidden" />

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
