import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl md:text-2xl font-bold">
        {siteConfig.name}{" "}
        <span className="text-red-800 dark:text-white dark:bg-red-800 dark:px-1">
          Uygulaması
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
