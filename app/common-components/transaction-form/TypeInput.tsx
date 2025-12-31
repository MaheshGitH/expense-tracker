import React from "react";

const TypeInput = () => {
  return (
    <div>
      <p className="ml-2 mb-2">Type</p>
      <div>
        <label className="inline-flex gap-2">
          <input
            className="accent-primary"
            type="radio"
            name="choice"
            defaultChecked
          />
          Expense
        </label>
        <label className="inline-flex gap-2 ml-2">
          <input className="accent-primary" type="radio" name="choice" />
          Income
        </label>
      </div>
    </div>
  );
};

export default TypeInput;
