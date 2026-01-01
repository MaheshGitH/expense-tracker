"use client";

import AppLogo from "@/app/AppLogo";

import AppIcon from "@/app/icons/AppIcon";
import { GoSidebarCollapse } from "react-icons/go";
import { HiMenuAlt2 } from "react-icons/hi";
import SidebarContent from "./SidebarContent";
import { useState } from "react";
import ToggleTheme from "../ToggleTheme";

const SidebarSmall = () => {
  const [state, setState] = useState(false);
  const handleOpen = () => {
    setState(true);
  };
  const handleClose = () => {
    setState(false);
  };
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 py-2 px-4 bg-white dark:bg-dark-bg ${
          state ? " z-30 " : "z-50"
        } flex justify-between`}
      >
        <div onClick={handleOpen} className="flex gap-4 items-center">
          <button className="rounded-md hover:bg-surface-bg/80 hover:dark:bg-dark-surface text-end p-2">
            <HiMenuAlt2 className="~size-4/5" />
          </button>

          <AppLogo />
        </div>
        <ToggleTheme />
      </div>

      <div
        className={`fixed z-50 h-screen bg-white dark:bg-dark-bg ${
          state ? " w-72 " : " w-0 "
        } duration-100`}
      >
        <div
          className={`flex flex-col gap-12 h-full ${
            state ? " " : " hidden "
          } p-4`}
        >
          <div className="flex justify-between items-center">
            <div className="pl-2">
              <AppIcon />
            </div>
            <button
              onClick={handleClose}
              className="rounded-md hover:bg-surface-bg/80 hover:dark:bg-dark-surface text-end p-2"
            >
              <GoSidebarCollapse className="~size-4/5 rotate-180" />
            </button>
          </div>
          <SidebarContent onSelect={handleClose} />
        </div>
      </div>
      <div
        onClick={handleClose}
        className={`bg-black/20 fixed inset-0 z-30 ${
          state ? " " : " hidden "
        } `}
      />
    </>
  );
};

export default SidebarSmall;
