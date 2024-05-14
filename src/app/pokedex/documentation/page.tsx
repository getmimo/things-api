import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../components/sidebarMenu";

const Documentation = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-56 pl-4 pt-2 bg-gray-100">
          <SidebarMenu selectedEndpoint={null} />
        </div>
        <main className="w-10/12 flex flex-col items-start justify-center rounded-md mt-24">
          <div className="w-10/12 m-auto p-8 bg-white rounded-md">
            <div className="w-full p-8 bg-white rounded-md">
              <h1 className="text-2xl font-press-start font-bold mb-4">
                General information
              </h1>
              <p>ToDo: Add more info!</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Documentation;
