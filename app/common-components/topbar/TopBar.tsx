import AppLogo from "@/app/AppLogo";
import MenuSmallScreen from "../../dashboard/components/MenuSmallScreen";

const TopBar = () => {
  return (
    <div className="flex justify-between">
      <AppLogo />
      <MenuSmallScreen />
    </div>
  );
};

export default TopBar;
