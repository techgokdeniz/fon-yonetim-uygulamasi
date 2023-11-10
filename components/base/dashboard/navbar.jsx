import { ChevronRightSquare } from "lucide-react";
import React from "react";
import { useState } from "react";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`${
        open ? "w-[250px]" : "w-[80px]"
      } relative p-4 h-screen dark dark:dark`}
    >
      <div className="absolute dark p-2 rounded-full right-[-10px] top-5">
        <button
          className="text-black dark:text-white dark:dark"
          onClick={() => setOpen(!open)}
        >
          <ChevronRightSquare />
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
