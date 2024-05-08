"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-press-start navbar flex justify-between p-4 sticky top-0 h-14 bg-pokemon-blue text-pokemon-gray">
      <div className="navbar-brand">
        <h1 className="flex align-middle font-bold font-press-start text-pokemon-yellow">
          <Image
            src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/25.png`}
            alt="Pokemon"
            width="72"
            height="72"
            className="-mt-6 -ml-4 -mr-1"
          />
          Pokedex by Mimo
        </h1>
      </div>
      <div className="navbar-end text-xs h-full flex">
        <Link
          href="/pokedex"
          className={`${pathname === "/" ? "underline decoration-2 underline-offset-2 decoration-pokemon-yellow" : ""} px-2 py-1 mr-2 hover:bg-pokemon-yellow rounded-md`}
        >
          Home
        </Link>
        <Link
          href="/pokedex/about"
          className={`${pathname === "/pokedex/about" ? "underline decoration-2 underline-offset-2 decoration-pokemon-yellow" : ""} px-2 py-1 mr-2 hover:bg-pokemon-yellow rounded-md`}
        >
          About
        </Link>
        <Link
          href="/pokedex/documentation"
          className={`${pathname === "/pokedex/documentation" ? "underline decoration-2 underline-offset-2 decoration-pokemon-yellow" : ""} px-2 py-1 hover:bg-pokemon-yellow rounded-md`}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
