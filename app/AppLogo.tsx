import AppIcon from "./icons/AppIcon";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <AppIcon />

      <p className="text-primary font-montserrat font-semibold ~text-base/xl">
        Expense Tracker
      </p>
    </div>
  );
};
export default AppLogo;
