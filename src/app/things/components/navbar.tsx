"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar sticky top-0 z-10 flex h-14 items-center justify-between gap-2 border-b border-gray-200 bg-white px-3 py-2 text-black sm:px-4">
      <div className="navbar-brand min-w-0 text-lg sm:text-3xl">
        <Link href="/things" className="flex align-middle font-bold text-black">
          <span className="truncate sm:hidden">Things</span>
          <span className="hidden sm:inline">Things API by Mimo</span>
        </Link>
      </div>
      <div className="navbar-end flex shrink-0 items-center gap-1 text-sm text-black sm:text-xl">
        <Link
          href="/things"
          className={`${
            pathname === "/things" || pathname === "/"
              ? "underline decoration-2 underline-offset-2 decoration-black"
              : ""
          } rounded-md px-2 py-1 hover:bg-black hover:text-white`}
        >
          Home
        </Link>
        <Link
          href="/things/documentation"
          className={`${
            pathname.startsWith("/things/documentation")
              ? "underline decoration-2 underline-offset-2 decoration-black"
              : ""
          } rounded-md px-2 py-1 hover:bg-black hover:text-white`}
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
