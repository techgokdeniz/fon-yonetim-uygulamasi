import ThemeChanger from "@/components/base/themechanger";
import Logo from "@/components/ui/logo";
import React from "react";

const UserActionLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[500px] p-4 flex flex-col gap-4">
        <div className="flex justify-between ">
          <Logo />
          <ThemeChanger />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="flex-1  h-full hidden md:block user-action-background"></div>
    </div>
  );
};

export default UserActionLayout;
