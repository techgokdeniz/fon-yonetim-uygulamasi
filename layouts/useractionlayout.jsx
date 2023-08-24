import ThemeChanger from "@/components/base/themechanger";
import Logo from "@/components/ui/logo";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const UserActionLayout = ({ children }) => {
  const { push } = useRouter();

  const { status, data: session } = useSession();

  if (status === "loading")
    return (
      <div className="p-8 w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (status === "authenticated") push("/dashboard");

  if (status === "unauthenticated") {
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
};

export default UserActionLayout;
