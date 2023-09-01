import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DashboardNavbar from "@/components/base/dashboard/navbar";
import ThemeChanger from "@/components/base/themechanger";

const DashobardLayout = ({ children, pageTitle = "Dashboard" }) => {
  const { push } = useRouter();

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      push("/login");
    },
  });

  if (status === "loading")
    return (
      <div className="p-8 w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  return (
    <div className="flex">
      <DashboardNavbar />
      <div className="flex-1 flex gap-4 flex-col items-start p-4">
        <div className="w-full bg-gray-100/50 dark:dark p-2 flex justify-between">
          <h1 className="font-medium">{pageTitle}</h1>
          <ThemeChanger />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashobardLayout;
DashobardLayout.requireAuth = true;
