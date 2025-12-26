import React from "react";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { FaListOl } from "react-icons/fa6";
import MenuButton, { MenuButtonProps } from "./MenuButton";

const menuItem: MenuButtonProps[] = [
  {
    href: "/dashboard",
    icon: <LuLayoutDashboard className="~size-4/5" />,
    text: "Dashboard",
  },
  {
    href: "/addtransaction",
    icon: <FiPlusCircle className="~size-4/5" />,
    text: "Add Transaction",
  },
  {
    href: "/transactionlist",
    icon: <FaListOl className="~size-4/5" />,
    text: "Transactions List",
  },
];

interface Props {
  collapsed?: boolean;
  onClick?: () => void;
  onSelect?: () => void;
}

const SidebarContent = ({ collapsed, onClick, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-0.5 h-full">
      {menuItem.map((item, index) => (
        <MenuButton
          key={index}
          href={item.href}
          icon={item.icon}
          text={item.text}
          collapsed={collapsed}
          onClick={onSelect}
        />
      ))}

      <button
        onClick={onClick}
        className="flex-1 max-md:hidden hover:cursor-e-resize"
      />
      <div className="max-md:mt-auto">
        <MenuButton
          href="/logout"
          icon={<LuLogOut className="~size-4/5" />}
          text="Logout"
          logout
          collapsed={collapsed}
          onClick={onSelect}
        />
      </div>
    </div>
  );
};

export default SidebarContent;
