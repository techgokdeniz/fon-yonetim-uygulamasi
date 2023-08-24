import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DashboardNavbar from "@/components/base/dashboard/navbar";

const DashobardLayout = ({ children }) => {
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
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default DashobardLayout;
DashobardLayout.requireAuth = true;
