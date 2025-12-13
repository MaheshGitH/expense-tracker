import { CiWallet } from "react-icons/ci";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block bg-primary rounded-md">
        <CiWallet size={12} className="text-white m-1.5 stroke-1" />
      </span>
      <p className="text-primary font-montserrat font-semibold text-base">
        Expense Tracker
      </p>
    </div>
  );
};

export default AppLogo;
