import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface MenuButtonProps {
  text: string;
  icon: ReactNode;
  href: string;
  onClick?: () => void;
  logout?: boolean;
  collapsed?: boolean;
}

const MenuButton = ({
  text,
  icon,
  href,
  logout,
  onClick,
  collapsed,
}: MenuButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      href={href}
      className={` ${
        collapsed ? " w-fit " : "  w-full "
      } flex items-center gap-3 p-3 rounded-md ${
        logout ? " text-danger hover:bg-danger/10" : " hover:bg-surface-bg/80 "
      } ${pathname === href ? " bg-surface-bg " : " "}`}
    >
      <span>{icon}</span>
      <p className={collapsed ? " hidden " : " text-nowrap "}>{text}</p>
    </Link>
  );
};

export default MenuButton;
