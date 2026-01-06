import ToggleTheme from "./layout-components/ToggleTheme";
import ASide from "./layout-components/sidebar/ASide";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden dark:text-white dark:bg-dark-bg">
      <ASide />
      <main className="flex-1 min-w-0 overflow-y-auto pt-14 md:relative">
        <div className="absolute ~right-2/4 top-2 max-md:hidden">
          <ToggleTheme />
        </div>
        <div className="max-w-screen-xl px-2 md:mx-auto">{children}</div>
      </main>
    </div>
  );
}
