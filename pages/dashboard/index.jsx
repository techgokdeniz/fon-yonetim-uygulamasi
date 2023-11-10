import React from "react";
import { signOut } from "next-auth/react";
import DashobardLayout from "@/layouts/dashobardLayout";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/auth/authSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <DashobardLayout>
      <button
        className="text-black dark:text-white dark:dark"
        onClick={() => handleLogout()}
      >
        {user?.name} - Logout
      </button>
    </DashobardLayout>
  );
};

export default DashboardPage;
