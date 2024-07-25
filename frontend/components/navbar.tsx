"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme ();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // Here you would also apply the theme change to your app
  };

  return (
    <nav className="bg-card shadow-md border-b-2 border-red-600">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">{children}</div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleTheme}
              className="p-2 aspect-square"
              variant="outline"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </Button>
            <Link
              href="/profile"
              className="text-secondary-foreground hover:text-foreground"
              aria-label="Profile"
            >
              <FaUser />
            </Link>
            <Link
              href="/logout"
              className="text-secondary-foreground hover:text-foreground"
              aria-label="Logout"
            >
              <FaSignOutAlt />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
