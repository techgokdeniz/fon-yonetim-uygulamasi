import NavbarHome from "@/components/base/navbar";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <main className={`container py-4 flex flex-col gap-4`}>
      <NavbarHome />
      {children}
    </main>
  );
}
