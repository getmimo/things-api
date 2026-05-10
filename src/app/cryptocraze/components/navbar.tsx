"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar flex justify-between p-4 sticky top-0 h-14 bg-cc-dark text-cc-gold border-b border-cc-gold/30 z-10">
      <div className="navbar-brand text-3xl">
        <Link
          href="/cryptocraze"
          className="flex align-middle font-bold text-cc-gold"
        >
          Crypto Craze API by Mimo
        </Link>
      </div>
      <div className="navbar-end h-full flex items-center text-xl">
        <Link
          href="/cryptocraze"
          className={`${
            pathname === "/cryptocraze" || pathname === "/"
              ? "underline decoration-2 underline-offset-2 decoration-cc-gold"
              : ""
          } px-2 py-1 mr-2 hover:bg-cc-gold hover:text-cc-dark rounded-md`}
        >
          Home
        </Link>
        <Link
          href="/cryptocraze/documentation"
          className={`${
            pathname.startsWith("/cryptocraze/documentation")
              ? "underline decoration-2 underline-offset-2 decoration-cc-gold"
              : ""
          } px-2 py-1 hover:bg-cc-gold hover:text-cc-dark rounded-md`}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
