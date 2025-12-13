"use client";
import { useEffect, useRef, useState } from "react";
import { IoMenu, IoSunnyOutline } from "react-icons/io5";
import OptionButton from "./OptionButton";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { FaListOl } from "react-icons/fa6";
import MenuClose from "@/app/icons/MenuClose";

export default function MenuSmallScreen() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <IoMenu size={16} />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 top-0 mb-2 p-2 rounded bg-white border border-border"
        >
          <div className="flex items-center justify-between mb-4 mx-1.5">
            <span className="rounded-md hover:bg-[#EBEBEB] p-2 duration-100">
              <IoSunnyOutline size={16} />
            </span>
            <span className="rounded-md hover:bg-[#EBEBEB] p-2 duration-100">
              <MenuClose />
            </span>
          </div>
          <div>
            <OptionButton
              text="Dashboard"
              icon={<LuLayoutDashboard size={14} className="stroke-[2px]" />}
            />
            <OptionButton
              text="Add Transaction"
              icon={<FiPlusCircle size={14} className="stroke-[2px]" />}
            />
            <OptionButton
              text="Transactions List"
              icon={<FaListOl size={14} className="stroke-[2px]" />}
            />
            <OptionButton
              text="Logout"
              icon={<LuLogOut size={14} className="stroke-[2px]" />}
              logout
            />
          </div>
        </div>
      )}
    </div>
  );
}
