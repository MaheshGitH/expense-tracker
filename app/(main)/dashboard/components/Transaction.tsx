import React from "react";

interface Props {
  description: string;
  tag: string;
  date: string;
  amount: number;
  loss?: boolean;
}

const Transaction = ({ description, tag, date, amount, loss }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
          <input className="accent-primary" type="checkbox" />
          <div>
            <p className="text-base max-w-xl w-full line-clamp-1">
              {description}
            </p>
            <span className="inline-block mt-0.5 py-1.5 px-3 rounded-full text-primary bg-primary-bg">
              {tag}
            </span>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <span
            className={`${
              loss ? "text-danger" : "text-profit"
            } font-semibold text-end text-sm`}
          >
            {`${loss ? "- $" : "+ $"}` + amount}
          </span>
          <span>{date}</span>
        </div>
      </div>
      <span className="inline-block h-px bg-border w-full mt-0.5" />
    </>
  );
};

export default Transaction;
