import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  href: string;
  onClick?: () => void;
  logout?: boolean;
}

const OptionButton = ({ text, icon, href, logout, onClick }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`w-48 flex items-center gap-3 p-3 rounded-md hover:bg-[#EBEBEB]/80 duration-200 ${
        logout ? " text-danger hover:bg-danger/10" : "  "
      } ${pathname === href ? " bg-[#EBEBEB] " : " "}`}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default OptionButton;
