"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-russo-one navbar sticky top-0 z-10 flex h-14 items-center justify-between gap-2 bg-black px-3 py-2 text-white sm:px-4">
      <div className="navbar-brand min-w-0 text-lg sm:text-3xl">
        <Link
          href="/swapi"
          className="flex align-middle font-bold font-russo-one text-sw-yellow"
        >
          SWAPI by Mimo
        </Link>
      </div>
      <div className="navbar-end flex shrink-0 items-center gap-1 text-sm text-white sm:text-xl">
        <Link
          href="/swapi"
          className={`${pathname === "/swapi" || pathname === "/" ? "underline decoration-2 underline-offset-2 decoration-sw-yellow" : ""} rounded-md px-2 py-1 hover:bg-white hover:text-black`}
        >
          Home
        </Link>
        <Link
          href="/swapi/documentation"
          className={`${pathname.startsWith("/swapi/documentation") ? "underline decoration-2 underline-offset-2 decoration-sw-yellow" : ""} rounded-md px-2 py-1 hover:bg-white hover:text-black`}
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
