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
            basePath="airports"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mt-6 flex flex-1 flex-col items-start justify-start rounded-md px-4 md:mt-24 md:justify-center md:px-0">
            <div className="m-auto w-full rounded-md bg-white p-4 md:w-10/12 md:p-8">
              <div className="w-full rounded-md bg-white p-4 md:p-8">
                <h1 className="mb-4 text-2xl font-semibold text-airports-blue text-pretty">
                  General information
                </h1>
                <p>
                  Welcome to the Airports API documentation! You can use the API
                  without any limitations. Feel free to explore usage examples
                  at{" "}
                  <a
                    href="https://mimo.org"
                    className="text-airports-blue underline decoration-airports-sky underline-offset-2 hover:decoration-airports-blue"
                  >
                    https://mimo.org
                  </a>
                  .
                </p>
                <p className="mt-4">
                  Collection endpoints, except the locations endpoint, are paginated.
                  Use{" "}
                  <code className="rounded bg-gray-100 px-1 py-0.5">limit</code>{" "}
                  and{" "}
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    offset
                  </code>{" "}
                  query parameters to page through results. If no limit is
                  provided, the API returns 100 records by default, and limits
                  above 1,000 are capped at 1,000.
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
