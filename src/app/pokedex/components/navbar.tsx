"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-press-start navbar sticky top-0 z-10 flex h-14 items-center justify-between gap-2 bg-pokemon-blue px-3 py-2 text-highlight-gray sm:px-4">
      <div className="navbar-brand min-w-0">
        <Link
          href="/pokedex"
          className="flex items-center align-middle font-press-start text-xs font-bold text-pokemon-yellow md:text-xl"
        >
          <Image
            src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/25.png`}
            alt="Pokemon"
            width="72"
            height="72"
            className="-ml-2 -mr-1 h-10 w-10 md:-ml-4 md:h-14 md:w-14"
          />
          <span className="truncate">Pokedex</span>
          <span className="hidden md:inline">&nbsp;by Mimo</span>
        </Link>
      </div>
      <div className="navbar-end flex shrink-0 items-center gap-1 text-[10px] sm:text-sm">
        <Link
          href="/pokedex"
          className={`${pathname === "/pokedex" || pathname === "/" ? "underline decoration-2 underline-offset-2 decoration-pokemon-yellow" : ""} rounded-md px-2 py-1 hover:bg-pokemon-yellow`}
        >
          Home
        </Link>
        <Link
          href="/pokedex/documentation"
          className={`${pathname.startsWith("/pokedex/documentation") ? "underline decoration-2 underline-offset-2 decoration-pokemon-yellow" : ""} rounded-md px-2 py-1 hover:bg-pokemon-yellow`}
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
