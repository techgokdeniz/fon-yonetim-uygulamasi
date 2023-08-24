import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ThemeChanger from "./themechanger";
import Logo from "../ui/logo";
import { Menu } from "lucide-react";

const NavbarHome = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="md:py-4 flex dark:rounded-md gap-4 md:flex-row justify-between items-center mt-4">
      <Logo />
      <div className="gap-4 hidden md:flex">
        <Link href="/login">
          <Button>Giriş Yap</Button>
        </Link>
        <Link href="/register">
          <Button variant="secondary" className="w-full">
            Kayıt Ol
          </Button>
        </Link>
        <ThemeChanger />
      </div>
      <div className="block relative md:hidden">
        <Menu size={32} onClick={handleMenu} className="relative z-50" />
        {navbarOpen && (
          <div className="fixed inset-0 bg-black/50  z-40 flex items-center justify-end">
            <div className="dark:dark bg-white text-black dark:text-white w-64 h-screen px-4 py-28">
              <div className="flex flex-col gap-4">
                <Link href="/login">
                  <Button className="w-full">Giriş Yap</Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">Kayıt Ol</Button>
                </Link>
                <ThemeChanger />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
