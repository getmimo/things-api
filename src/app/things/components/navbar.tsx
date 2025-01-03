"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar flex justify-between p-4 sticky top-0 h-14 bg-white text-black">
      <div className="navbar-brand text-3xl">
        <Link href="/things" className="flex align-middle font-bold text-black">
          Things API by Mimo
        </Link>
      </div>
      <div className="navbar-end h-full flex items-center text-xl text-black">
        <Link
          href="/things"
          className={`${
            pathname === "/things" || pathname === "/"
              ? "underline decoration-2 underline-offset-2 decoration-black"
              : ""
          } px-2 py-1 mr-2 hover:bg-black hover:text-white rounded-md`}
        >
          Home
        </Link>
        <Link
          href="/things/documentation"
          className={`${
            pathname.startsWith("/things/documentation")
              ? "underline decoration-2 underline-offset-2 decoration-black"
              : ""
          } px-2 py-1 hover:bg-black hover:text-white rounded-md`}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
