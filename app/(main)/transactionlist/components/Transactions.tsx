import { Transaction } from "./columnsDef";
import Category from "@/app/common-components/Category";
import Dialog from "@/app/common-components/Dialog";
import { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Option from "./Option";

interface Props extends Transaction {
  index: number;
}

const Transactions = ({
  description,
  category,
  date,
  amount,
  type,
  index,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <label htmlFor={index.toString()}>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
          <div>
            <p className="~text-xs/base max-w-xl w-full line-clamp-1">
              {description}
            </p>
            <Category>{category}</Category>
          </div>
        </div>
        <div className="flex items-center gap-2 relative">
          <div className="flex flex-col whitespace-nowrap">
            <span
              className={`${
                type === "expense" ? "text-danger" : "text-profit"
              } font-semibold text-end text-sm`}
            >
              {`${type === "expense" ? "- $" : "+ $"}` + amount}
            </span>
            <span>{date}</span>
          </div>
          <button onClick={() => setOpen(true)} className="py-2">
            <PiDotsThreeOutlineVerticalFill className="~size-3/4" />
          </button>
          <div className="absolute top-full right-0 z-50 bg-white">
            <Dialog isOpen={open} onClose={() => setOpen(false)}>
              <Option />
            </Dialog>
          </div>
        </div>
      </div>
      <span className="inline-block h-px bg-border w-full mt-0.5" />
    </label>
  );
};

export default Transactions;
