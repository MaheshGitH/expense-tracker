"use client";

import Sidebar from "./Sidebar";
import SidebarSmall from "./SidebarSmall";

const ASide = () => {
  return (
    <aside className="flex-shrink-0">
      {/* Sidebar for smaller screen sizes */}
      <div className="md:hidden">
        <SidebarSmall />
      </div>
      {/* Sidebar for bigger screen sizes */}
      <Sidebar />
    </aside>
  );
};

export default ASide;
