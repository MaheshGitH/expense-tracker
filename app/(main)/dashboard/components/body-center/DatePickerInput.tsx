"use client";

import { useEffect, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

import { IoIosClose } from "react-icons/io";

import { DayPicker } from "react-day-picker";
import { format, isValid, parse } from "date-fns";
import "react-day-picker/dist/style.css";
import Dialog from "@/app/common-components/Dialog";

export default function DatepickerInput() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [inputValue, setInputValue] = useState(
    format(new Date(), "dd - MM - yyyy")
  );
  const [open, setOpen] = useState(false);

  // Calendar selection
  const handleSelect = (date?: Date) => {
    if (!date) return;
    setSelectedDate(date);
    setInputValue(format(date, "dd - MM - yyyy"));
  };

  // Input typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const parsed = parse(value, "dd - MM - yyyy", new Date());
    if (isValid(parsed)) {
      setSelectedDate(parsed);
    } else {
      setSelectedDate(undefined);
    }
  };

  // Today button
  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setInputValue(format(today, "dd - MM - yyyy"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <p className="mb-2 ml-2">Date</p>
      <div className="flex justify-between rounded-md border border-border">
        <div className="flex flex-1 items-center gap-2 pl-4">
          <label htmlFor="dateInput">
            <MdOutlineCalendarMonth className="text-secondary" size={16} />
          </label>

          <input
            id="dateInput"
            type="text"
            onFocus={() => {
              setOpen(true);
            }}
            inputMode="none"
            placeholder="DD - MM - YYYY"
            value={inputValue}
            onChange={handleInputChange}
            className="py-3 w-full"
          />
        </div>
        <span className="w-px h-3 bg-border my-auto" />
        <button
          onClick={() => {
            setSelectedDate(undefined);
            setInputValue("");
          }}
          className="px-2 w-fit"
        >
          <IoIosClose size={16} />
        </button>
      </div>

      <Dialog
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="z-50 absolute top-full mt-2 p-4 rounded-md border border-border bg-white">
          <DayPicker
            onDayClick={() => setOpen(false)}
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            autoFocus
            footer={
              <button
                className="w-full rounded-md bg-primary text-white py-3"
                onClick={handleToday}
              >
                Today
              </button>
            }
          />
        </div>
      </Dialog>
    </div>
  );
}
