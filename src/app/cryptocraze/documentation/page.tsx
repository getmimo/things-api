import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../../components/sidebarMenu";
import Footer from "../../components/footer";
import { categories } from "../data/categories";

function Documentation() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col text-cc-dark sm:flex-row sm:items-stretch">
        <div className="w-full sm:flex sm:w-56 sm:self-stretch">
          <SidebarMenu
            selectedEndpoint={null}
            categories={categories}
            basePath="cryptocraze"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mt-6 flex flex-1 flex-col items-start justify-start rounded-md px-4 md:mt-24 md:justify-center md:px-0">
          <div className="m-auto w-full rounded-md bg-white p-4 md:w-10/12 md:p-8">
            <div className="w-full rounded-md bg-white p-4 md:p-8">
              <h1 className="mb-4 text-3xl font-bold text-cc-dark underline decoration-cc-gold decoration-4 underline-offset-4 text-pretty">
                General information
              </h1>
              <p className="text-pretty mb-4">
                Welcome to the Crypto Craze API documentation. The coin names
                are real, but all prices, market caps, and price changes are
                fictional and made for coding practice.
              </p>
              <h2 className="mb-2 text-2xl font-bold text-cc-dark text-pretty">
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Documentation;
