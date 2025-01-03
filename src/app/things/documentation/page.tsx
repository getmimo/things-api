import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../../components/sidebarMenu";
import Footer from "../../components/footer";
import { categories } from "../data/categories";

const Documentation = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-56">
          <SidebarMenu
            selectedEndpoint={null}
            categories={categories}
            basePath="things"
          />
        </div>
        <main className="w-10/12 flex flex-col items-start justify-center rounded-md mt-24">
          <div className="w-10/12 m-auto p-8 bg-white rounded-md">
            <div className="w-full p-8 bg-white rounded-md">
              <h1 className="text-2xl font-bold mb-4">General information</h1>
              <p>
                Welcome to the Things API documentation! You can use the API
                without any limitations. Feel free to explore usage examples at{" "}
                <a
                  href="https://mimo.org"
                  className="text-blue-500 hover:underline"
                >
                  https://mimo.org
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
