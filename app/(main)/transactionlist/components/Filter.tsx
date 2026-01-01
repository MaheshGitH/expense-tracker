"use client";

import Dialog from "@/app/common-components/Dialog";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Filter() {
  const list = ["All Category", "Food", "Travel", "Movie", "Entertaiment"];
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("All Category");

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

  const handleClose = (value: string) => {
    setValue(value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="relative">
      <div className="flex rounded-md border border-border dark:border-border-dark">
        <input
          readOnly
          value={value}
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
