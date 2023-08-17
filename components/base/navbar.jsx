import React from "react";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import ThemeChanger from "./themechanger";
import Logo from "../ui/logo";

const NavbarHome = () => {
  return (
    <nav className="dark:dark md:py-4 flex dark:rounded-md flex-col gap-4 md:flex-row justify-between items-center ">
      <Logo />
      <div className="flex gap-4">
        <Link href="/login">
          <Button>Giriş Yap</Button>
        </Link>
        <Button variant="secondary" disabled>
          Kayıt Ol
        </Button>
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default NavbarHome;
