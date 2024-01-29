import { ChevronRightSquare, LayoutDashboard } from "lucide-react";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  const MenuList = [
    {
      name: "Anasayfa",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      name: "Tüm Fonlar",
      icon: <LayoutDashboard />,
      path: "/dashboard/funds",
    },
  ];

  return (
    <nav
      className={`${
        open ? "w-[200px]" : "w-[70px]"
      } relative p-4 min-h-screen dark dark:dark`}
    >
      <div className="absolute dark p-2 rounded-full right-[-10px] top-5">
        <button
          className="text-black dark:text-white dark:dark"
          onClick={() => setOpen(!open)}
        >
          <ChevronRightSquare />
        </button>
      </div>
      <div
        className={`${
          open ? "flex" : "opacity-0"
        } items-center justify-center text-4xl font-bold mt-4`}
      >
        F
      </div>
      <div className="mt-[4rem]">
        <ul>
          {MenuList.map((menu, index) => (
            <Link key={index} href={menu.path}>
              <li className="flex gap-4 my-6">
                {menu.icon}
                {open && <span>{menu.name}</span>}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
