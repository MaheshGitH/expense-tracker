import AppLogo from "@/app/AppLogo";

const TextArea = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <AppLogo />
      <div>
        <p className="font-montserrat font-semibold text-base text-center">
          Create your account
        </p>

        <p className="text-secondary text-center font-lato text-xs">
          Start tracking your expenses and managing your finances today.
        </p>
      </div>
    </div>
  );
};

export default TextArea;
