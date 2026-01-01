import { Transaction } from "./columnsDef";
import Category from "@/app/common-components/Category";

interface Props extends Transaction {
  index: number;
  onSelect: (id: number, remove?: boolean) => void;
  removeBorder: boolean;
}

const Transactions = ({
  description,
  category,
  date,
  amount,
  type,
  index,
  onSelect,
  removeBorder,
}: Props) => {
  return (
    <label htmlFor={index.toString()}>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
          <input
            onChange={(e) => onSelect(index, e.target.checked)}
            id={index.toString()}
            className="accent-primary "
            type="checkbox"
          />
          <div>
            <p className="~text-xs/base max-w-xl w-full line-clamp-1">
              {description}
            </p>
            <Category>{category}</Category>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <span
            className={`${
              type === "expense"
                ? "text-danger dark:text-danger-dark "
                : "text-profit dark:text-profit-dark "
            } font-semibold text-end text-sm`}
          >
            {`${type === "expense" ? "- $" : "+ $"}` + amount}
          </span>
          <span>{date}</span>
        </div>
      </div>
      {removeBorder ? null : (
        <span className="inline-block h-px bg-border dark:bg-border-dark w-full mt-0.5" />
      )}
    </label>
  );
};

export default Transactions;
