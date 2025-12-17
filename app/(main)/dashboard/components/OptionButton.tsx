import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  href?: string;
  logout?: boolean;
}

const OptionButton = ({ text, icon, href, logout }: Props) => {
  return (
    <a
      href={href}
      className={`w-48 flex items-center gap-3 p-3 rounded-md hover:bg-[#EBEBEB] duration-200 ${
        logout ? " text-danger hover:bg-danger/10" : "  "
      }`}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </a>
  );
};

export default OptionButton;
