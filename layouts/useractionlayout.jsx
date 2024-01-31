import ThemeChanger from "@/components/base/themechanger";
import Logo from "@/components/ui/logo";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingSketlon from "@/components/ui/loading";

const UserActionLayout = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full">
        <div className="h-full w-[500px] container py-4 flex flex-col gap-4">
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
  }

  return (
    <div className="p-8 w-screen dark:dark h-screen flex justify-center items-center">
      <LoadingSketlon />
    </div>
  );
};

export default UserActionLayout;
