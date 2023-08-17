import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
    </Link>
  );
};

export default Logo;
