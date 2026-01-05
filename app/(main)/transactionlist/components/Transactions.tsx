import Category from "@/app/common-components/Category";
import Dialog from "@/app/common-components/Dialog";
import { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Option from "./Option";

type Props = {
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  removeBorder: boolean;
};

const Transactions = ({
  description,
  category,
  date,
  amount,
  type,
  id,
  removeBorder,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <label htmlFor={id}>
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
                type === "expense"
                  ? "text-danger dark:text-danger-dark"
                  : "text-profit dark:text-profit-dark"
              } font-semibold text-end text-sm`}
            >
              {`${type === "expense" ? "- $" : "+ $"}` + amount}
            </span>
            <span>{date}</span>
          </div>
          <button onClick={() => setOpen(true)} className="py-2">
            <PiDotsThreeOutlineVerticalFill className="~size-3/4" />
          </button>
          <div className="absolute top-full right-0 z-50 bg-white dark:bg-dark-bg">
            <Dialog isOpen={open} onClose={() => setOpen(false)}>
              <Option onClick={() => setOpen(false)} id={id} />
            </Dialog>
          </div>
        </div>
      </div>
      {removeBorder ? null : (
        <span className="inline-block h-px bg-border dark:bg-border-dark w-full mt-0.5" />
      )}
    </label>
  );
};

export default Transactions;
