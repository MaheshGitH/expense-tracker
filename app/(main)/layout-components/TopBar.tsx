import AppLogo from "@/app/AppLogo";
import MenuSmallScreen from "./MenuSmallScreen";

const TopBar = () => {
  return (
    <div className="flex justify-between mx-2 mt-2">
      <AppLogo />
      <MenuSmallScreen />
    </div>
  );
};

export default TopBar;
