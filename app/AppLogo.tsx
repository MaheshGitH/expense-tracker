import { Wallet } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block bg-primary rounded-md">
        <Wallet size={12} className="text-white m-1.5" />
      </span>
      <p className="text-primary font-montserrat font-semibold text-base">
        Expense Tracker
      </p>
    </div>
  );
};

export default AppLogo;
