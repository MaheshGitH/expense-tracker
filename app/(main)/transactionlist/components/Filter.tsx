"use client";

import Dialog from "@/app/common-components/Dialog";
import { type Filter, useFilterStore } from "@/app/store/useFilterStore";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Filter() {
  const list: Filter[] = [
    "All Category",
    "Food",
    "Entertainment",
    "Freelance",
    "Investment",
    "Rent",
    "Salary",
    "Transport",
  ];
  const [open, setOpen] = useState(false);

  const setFilter = useFilterStore((s) => s.setFilter);
  const filter = useFilterStore((s) => s.filter);

  const handleClose = (value: Filter) => {
    setOpen(false);
    setFilter(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="relative">
      <div className="flex rounded-md border border-border dark:border-border-dark">
        <input
          readOnly
          value={filter}
          onFocus={handleOpen}
          className="w-full py-3 px-4 outline-none placeholder-secondary cursor-pointer"
          type="text"
        />
        <span className="w-px h-3 bg-border dark:bg-border-dark my-auto" />
        <button onClick={handleOpen} className="px-2 w-fit">
          <IoChevronDownOutline size={16} />
        </button>
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <ul className="absolute top-full bg-white dark:bg-dark-bg w-full mt-2 p-2 rounded-md border border-border dark:border-border-dark z-50">
          {list.map((value, index) => (
            <li
              key={index}
              className={
                index === list.length - 1
                  ? " "
                  : "after:block after:h-[0.5px] after:bg-border after:mb-0.5 after:dark:bg-border-dark "
              }
            >
              <button
                onClick={() => handleClose(value)}
                className="hover:bg-surface-bg hover:dark:bg-dark-surface p-3 w-full text-start rounded-md mb-0.5"
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
