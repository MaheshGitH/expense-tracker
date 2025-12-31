import Dialog from "@/app/common-components/Dialog";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Reset } from "./types";

const list = ["Food", "Travel", "Movie", "Entertaiment"];

export default function SelectCategoryInput({ reset }: Reset) {
  const [filteredList, setFilteredList] = useState([""]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) =>
          prev < filteredList.length - 1 ? prev + 1 : 0
        );
      }

      if (e.key === "ArrowUp") {
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : filteredList.length - 1
        );
      }

      if (e.key === "Enter") {
        e.preventDefault();
        setValue(filteredList[activeIndex]);
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredList]);

  useEffect(() => {
    setFilteredList(list);
  }, []);

  useEffect(() => {
    setValue("");
    setActiveIndex(0);
    setFilteredList(list);
  }, [reset]);

  const filterCategory = (list: string[], filter: string) => {
    const filtered = list.filter((value) =>
      value.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const handleClose = (value: string) => {
    setValue(value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    filterCategory(list, e.currentTarget.value);
    setActiveIndex(0);
  };

  return (
    <div className="relative">
      <p className="mb-2 ml-2">Category</p>
      <div className="flex rounded-md border border-border">
        <input
          value={value}
          onFocus={handleOpen}
          placeholder="Select a category"
          onChange={(e) => {
            handleChange(e);
          }}
          className="w-full py-3 px-4 outline-none placeholder-secondary"
          type="text"
        />
        <span className="w-px h-3 bg-border my-auto" />
        <button onClick={handleOpen} className="px-2 w-fit">
          <IoChevronDownOutline size={16} />
        </button>
      </div>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <ul className="absolute top-full bg-white w-full mt-2 p-2 rounded-md border border-border">
          {filteredList.map((value, index) => (
            <li
              key={index}
              className={`after:block after:h-[0.5px] after:bg-border after:mb-0.5 ${
                index === filteredList.length - 1 ? " after:hidden " : ""
              }`}
            >
              <button
                onClick={() => handleClose(value)}
                className={`${
                  index === activeIndex ? "bg-surface-bg " : "  "
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
