"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-russo-one navbar flex justify-between p-4 sticky top-0 h-14 bg-black text-white">
      <div className="navbar-brand text-3xl">
        <Link
          href="/swapi"
          className="flex align-middle font-bold font-russo-one text-sw-yellow"
        >
          SWAPI by Mimo
        </Link>
      </div>
      <div className="navbar-end h-full flex items-center text-xl text-white">
        <Link
          href="/swapi"
          className={`${pathname === "/swapi" || pathname === "/" ? "underline decoration-2 underline-offset-2 decoration-sw-yellow" : ""} px-2 py-1 mr-2 hover:bg-white hover:text-black rounded-md`}
        >
          Home
        </Link>
        <Link
          href="/swapi/documentation"
          className={`${pathname.startsWith("/swapi/documentation") ? "underline decoration-2 underline-offset-2 decoration-sw-yellow" : ""} px-2 py-1 hover:bg-white hover:text-black rounded-md`}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
