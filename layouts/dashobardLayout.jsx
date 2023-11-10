import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DashboardNavbar from "@/components/base/dashboard/navbar";
import ThemeChanger from "@/components/base/themechanger";
import { useEffect } from "react";
import { useState } from "react";

const DashobardLayout = ({ children, pageTitle = "Dashboard" }) => {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated && domLoaded) {
    return (
      <section className="flex">
        <DashboardNavbar />
        <div className="flex-1 flex gap-4 flex-col items-start p-4">
          <div className="w-full bg-gray-100/50 dark:dark p-2 flex justify-between">
            <h1 className="font-medium">{pageTitle}</h1>
            <ThemeChanger />
          </div>
          {children}
        </div>
      </section>
    );
  }

  return (
    <div className="p-8 w-screen h-screen flex justify-center items-center">
      Loading...
    </div>
  );
};

export default DashobardLayout;
