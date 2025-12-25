import toggleTheme from "@/app/libs/toggleTheme";
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const ToggleTheme = () => {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-md hover:bg-surface-bg/80 text-end p-2"
    >
      <IoSunnyOutline className="~size-4/5 dark:hidden" />
      <BsMoonStars className="~size-4/5 hidden dark:block" />
    </button>
  );
};

export default ToggleTheme;
