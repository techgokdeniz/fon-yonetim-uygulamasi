import {
  ChevronRightSquare,
  LayoutDashboard,
  BringToFront,
  GalleryVerticalEnd,
  BarChart2,
  BarChart3
} from "lucide-react";
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
      name: "Günlük  Veriler (Tefas)",
      icon: <BarChart2 />,
      path: "/dashboard/daily/tefas",
    },
    {
      name: "Günlük  Veriler (Emeklilik)",
      icon: <BarChart3 />,
      path: "/dashboard/daily/pension",
    },
    {
      name: "Tüm Fonlar",
      icon: <GalleryVerticalEnd />,
      path: "/dashboard/funds",
    },
    {
      name: "Hisse Senedi Fonları",
      icon: <BringToFront />,
      path: "/dashboard/funds/stocks",
    },
  ];

  return (
    <nav
      className={`${
        open ? "w-[280px]" : "w-[70px]"
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
              <li className={`flex gap-4 my-6 items-center ${!open && "justify-center"}`} title={!open ? menu.name : ""}>
                {React.cloneElement(menu.icon, { title: menu.name })}
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
