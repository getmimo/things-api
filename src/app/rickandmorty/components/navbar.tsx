"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-creepster navbar sticky top-0 z-10 flex h-14 items-center justify-between gap-2 bg-black px-3 py-2 text-white sm:px-4">
      <div className="navbar-brand flex min-w-0 items-center">
        <Link href="/rickandmorty" className="flex items-center">
          <Image
            src={`/Rick and Morty.png`}
            alt="Rick and Morty logo"
            width="140"
            height="70"
            className="h-8 w-auto sm:h-[70px]"
          />
        </Link>
        <Link
          href="/rickandmorty"
          className="ml-2 hidden align-middle font-creepster text-3xl font-bold text-white sm:flex"
        >
          API by Mimo
        </Link>
      </div>
      <div className="navbar-end flex shrink-0 items-center gap-1 text-lg sm:text-2xl">
        <Link
          href="/rickandmorty"
          className={`${pathname === "/rickandmorty" || pathname === "/" ? "underline decoration-rm-green" : ""} rounded-md px-2 py-1 hover:bg-rm-green hover:text-black`}
        >
          Home
        </Link>
        <Link
          href="/rickandmorty/documentation"
          className={`${pathname.startsWith("/rickandmorty/documentation") ? "underline decoration-rm-green" : ""} rounded-md px-2 py-1 hover:bg-rm-green hover:text-black`}
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
