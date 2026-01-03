import Dialog from "@/app/common-components/Dialog";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Reset } from "./types";
import { Type } from "./TransactionForm";
import { ExpenseCategory, IncomeCategory } from "@/app/types/transaction";

interface Props extends Reset {
  type: Type;
}

const expenseList: ExpenseCategory[] = [
  "Food",
  "Rent",
  "Transport",
  "Entertainment",
];

const incomeList: IncomeCategory[] = ["Freelance", "Investment", "Salary"];

export default function SelectCategoryInput({ reset, type }: Props) {
  const [list, setList] = useState([""]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev < list.length - 1 ? prev + 1 : 0));
      }

      if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : list.length - 1));
      }

      if (e.key === "Enter") {
        e.preventDefault();
        setValue(list[activeIndex]);
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, list]);

  useEffect(() => {
    if (type == "expense") {
      setList(expenseList);
    } else {
      setList(incomeList);
    }
  }, [type]);

  useEffect(() => {
    setValue("");
    setActiveIndex(0);
    setList(expenseList);
  }, [reset]);

  const handleClose = (value: string) => {
    setValue(value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="relative">
      <p className="mb-2 ml-2">Category</p>
      <div className="flex rounded-md border border-border dark:border-border-dark">
        <input
          readOnly
          required
          name="category"
          value={value}
          placeholder="Select a category"
          onClick={handleOpen}
          className="w-full py-3 px-4 outline-none placeholder-secondary cursor-pointer"
          type="text"
        />
        <span className="w-px h-3 bg-border dark:bg-border-dark my-auto" />
        <button onClick={handleOpen} className="px-2 w-fit">
          <IoChevronDownOutline size={16} />
        </button>
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <ul className="absolute top-full bg-white dark:bg-dark-bg w-full mt-2 p-2 rounded-md border border-border dark:border-border-dark">
          {list.map((value, index) => (
            <li
              key={index}
              className={`after:block after:h-[0.5px] after:bg-border after:dark:bg-border-dark after:mb-0.5 ${
                index === list.length - 1 ? " after:hidden " : ""
              }`}
            >
              <button
                onClick={() => handleClose(value)}
                className={`${
                  index === activeIndex
                    ? "bg-surface-bg dark:bg-dark-surface "
                    : "  "
                } p-3 w-full text-start rounded-md mb-0.5`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </Dialog>
    </div>
  );
}
