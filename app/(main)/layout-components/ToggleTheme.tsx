"use client";

import toggleTheme from "@/app/libs/toggleTheme";
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const ToggleTheme = () => {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-md hover:bg-surface-bg/80 dark:hover:bg-dark-surface text-end p-2 relative group"
    >
      <IoSunnyOutline className="~size-4/5 dark:hidden" />
      <BsMoonStars className="~size-4/5 hidden dark:block" />
      <span className="bg-surface-bg dark:bg-dark-bg absolute right-full bottom-1/2 translate-y-1/2 mr-2 px-2 py-1 rounded-md group-hover:block hidden">
        <p className="dark:hidden">Light</p>
        <p className="hidden dark:block">Dark</p>
      </span>
    </button>
  );
};

export default ToggleTheme;
