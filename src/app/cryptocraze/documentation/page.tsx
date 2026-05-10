import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../../components/sidebarMenu";
import Footer from "../../components/footer";
import { categories } from "../data/categories";

function Documentation() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-stretch min-h-[calc(100vh-3.5rem)] text-cc-dark">
        <div className="w-56">
          <SidebarMenu
            selectedEndpoint={null}
            categories={categories}
            basePath="cryptocraze"
          />
        </div>
        <main className="w-10/12 flex flex-col items-start justify-center rounded-md mt-24">
          <div className="w-10/12 m-auto p-8 bg-white rounded-md">
            <div className="w-full p-8 bg-white rounded-md">
              <h1 className="text-2xl font-bold mb-4 text-pretty">
                General information
              </h1>
              <p className="text-pretty mb-4">
                Welcome to the Crypto Craze API documentation. The coin names
                are real, but all prices, market caps, and price changes are
                fictional and made for coding practice.
              </p>
              <h2 className="text-xl font-bold mb-2 text-pretty">
                Authentication
              </h2>
              <p className="text-pretty mb-2">
                The Crypto Craze API requires an API key. Send your API key in
                the request headers using the{" "}
                <code className="bg-gray-100 px-1 rounded">api-key</code>{" "}
                header.
              </p>
              <p className="text-pretty mb-2">
                In Mimo projects, the API key is available as an environment
                variable{" "}
                <code className="bg-gray-100 px-1 rounded">
                  MIMO_CRYPTO_CRAZE_API_KEY
                </code>
                .
              </p>
              <p className="text-pretty">
                If the API key is missing or incorrect, the API returns a{" "}
                <code className="bg-gray-100 px-1 rounded">401</code> response
                with the body{" "}
                <code className="bg-gray-100 px-1 rounded">
                  {`{ "error": "Missing or invalid API key." }`}
                </code>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Documentation;
