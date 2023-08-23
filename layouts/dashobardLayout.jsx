import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DashobardLayout = ({ children }) => {
  const { push } = useRouter();

  const { status } = useSession({
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

  return <div className="p-8">{children}</div>;
};

export default DashobardLayout;
DashobardLayout.requireAuth = true;
