import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../../components/sidebarMenu";
import Footer from "../../components/footer";
import { categories } from "../data/categories";

const Documentation = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col sm:flex-row sm:items-stretch">
        <div className="w-full sm:flex sm:w-56 sm:self-stretch">
          <SidebarMenu
            selectedEndpoint={null}
            categories={categories}
            basePath="swapi"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mt-6 flex flex-1 flex-col items-start justify-start rounded-md px-4 md:mt-24 md:justify-center md:px-0">
          <div className="m-auto w-full rounded-md bg-white p-4 md:w-10/12 md:p-8">
            <div className="w-full rounded-md bg-white p-4 md:p-8">
              <h1 className="mb-4 font-russo-one text-2xl font-bold text-black underline decoration-sw-yellow decoration-4 underline-offset-4 text-pretty">
                General information
              </h1>
              <p>
                Welcome to the Star Wars API documentation! You can use the API
                without any limitations. Feel free to explore usage examples at{" "}
                <a
                  href="https://mimo.org"
                  className="text-black underline decoration-sw-yellow decoration-2 underline-offset-2 hover:bg-sw-yellow"
                >
                  https://mimo.org
                </a>
                .
              </p>
            </div>
          </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Documentation;
