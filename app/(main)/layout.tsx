import Sidebar from "./layout-components/sidebar/Sidebar";
import SidebarSmall from "./layout-components/sidebar/SidebarSmall";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="flex-shrink-0">
        {/* Sidebar for smaller screen sizes */}
        <div className="md:hidden">
          <SidebarSmall />
        </div>
        {/* Sidebar for bigger screen sizes */}
        <Sidebar />
      </aside>

      <main className="flex-1 min-w-0 overflow-y-auto pt-14">{children}</main>
    </div>
  );
}
