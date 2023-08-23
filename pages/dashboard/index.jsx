import React from "react";
import { signOut } from "next-auth/react";
import DashobardLayout from "@/layouts/dashobardLayout";

const DashboardPage = () => {
  return (
    <DashobardLayout>
      <button className="text-black" onClick={() => signOut()}>
        Logout
      </button>
    </DashobardLayout>
  );
};

export default DashboardPage;
