import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 flex justify-end">
      <a href="https://mimo.org" className="flex items-center">
        Provided by <img src="/Mimo.svg" alt="Mimo Logo" className="h-5 m-2" />
      </a>
    </footer>
  );
};

export default Footer;