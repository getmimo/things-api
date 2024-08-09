import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 flex justify-end">
      <a href="https://mimo.org" className="flex items-center">
        Provided by{" "}
        <Image
          src="/Mimo.svg"
          alt="Mimo Logo"
          className="h-5 m-2"
          width={60}
          height={20}
        />
      </a>
    </footer>
  );
};

export default Footer;
