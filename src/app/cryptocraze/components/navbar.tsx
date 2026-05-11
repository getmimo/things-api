"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar sticky top-0 z-10 flex h-14 items-center justify-between gap-2 border-b border-cc-gold/30 bg-cc-dark px-3 py-2 text-cc-gold sm:px-4">
      <div className="navbar-brand min-w-0 text-lg md:text-3xl">
        <Link
          href="/cryptocraze"
          className="flex align-middle font-bold text-cc-gold"
        >
          <span className="truncate md:hidden">Crypto Craze</span>
          <span className="hidden md:inline">Crypto Craze API by Mimo</span>
        </Link>
      </div>
      <div className="navbar-end flex shrink-0 items-center gap-1 text-sm sm:text-xl">
        <Link
          href="/cryptocraze"
          className={`${
            pathname === "/cryptocraze" || pathname === "/"
              ? "underline decoration-2 underline-offset-2 decoration-cc-gold"
              : ""
          } rounded-md px-2 py-1 hover:bg-cc-gold hover:text-cc-dark`}
        >
          Home
        </Link>
        <Link
          href="/cryptocraze/documentation"
          className={`${
            pathname.startsWith("/cryptocraze/documentation")
              ? "underline decoration-2 underline-offset-2 decoration-cc-gold"
              : ""
          } rounded-md px-2 py-1 hover:bg-cc-gold hover:text-cc-dark`}
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
