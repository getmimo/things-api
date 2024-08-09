"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-creepster navbar flex justify-between p-4 sticky top-0 h-14 bg-black text-white">
      <div className="navbar-brand flex items-center">
        <Image
          src={`/Rick and Morty.png`}
          alt="Rick and Morty logo"
          width="140"
          height="70"
        />
        <Link
          href="/rickandmorty"
          className="flex align-middle font-bold font-creepster text-white text-3xl ml-2"
        >
          API by Mimo
        </Link>
      </div>
      <div className="navbar-end h-full flex items-center text-2xl">
        <Link
          href="/rickandmorty"
          className={`${pathname === "/rickandmorty" || pathname === "/" ? "underline decoration-rm-green" : ""} px-2 py-1 mr-2 hover:bg-rm-green hover:text-black rounded-md`}
        >
          Home
        </Link>
        <Link
          href="/rickandmorty/documentation"
          className={`${pathname === "/rickandmorty/documentation" ? "underline decoration-rm-green" : ""} px-2 py-1 hover:bg-rm-green hover:text-black rounded-md`}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;