import React from "react";
import TopBar from "./layout-components/TopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide TopBar over Small-screen */}
      <TopBar />
      {children}
    </>
  );
}
