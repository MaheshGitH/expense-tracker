"use client";
import { useEffect, useRef, useState } from "react";
import OptionButton from "./OptionButton";

import { IoMenu, IoSunnyOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { FaListOl } from "react-icons/fa6";
import MenuClose from "@/app/icons/MenuClose";
import Dialog from "@/app/common-components/Dialog";

export default function MenuSmallScreen() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        <IoMenu size={16} />
      </button>

      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="absolute right-0 top-0 mb-2 p-2 rounded bg-white border border-border z-50">
          <div className="flex items-center justify-between mb-4 mx-1.5">
            <button className="rounded-md hover:bg-[#EBEBEB] p-2 duration-100">
              <IoSunnyOutline size={16} />
            </button>
            <button className="rounded-md hover:bg-[#EBEBEB] p-2 duration-100">
              <MenuClose />
            </button>
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
      </Dialog>
    </div>
  );
}
