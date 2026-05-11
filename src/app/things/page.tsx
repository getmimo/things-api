import { Metadata } from "next";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Things API by Mimo",
  description: "Documentation for the Things API - provided by Mimo.",
};

export default async function ThingsAPI() {
  const endpoint = `/api/things/1`;
  const url = new URL(`https://things.mimo.dev${endpoint}`);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-gray-50 p-6 text-gray-900 md:p-12">
        <h1 className="mb-4 text-2xl font-semibold text-gray-900 text-pretty md:text-3xl">
          Things
        </h1>
        <h2 className="-mt-2 mb-8 text-xl font-semibold text-gray-900 text-pretty md:text-2xl">
          by Mimo
        </h2>
        <p className="mb-8 w-11/12 max-w-5xl text-lg text-gray-600 text-pretty">
          Welcome to the Things API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="m-auto w-11/12 max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 text-pretty md:text-2xl">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.Things}
          />
          <h2 className="mb-3 mt-8 text-xl font-semibold text-gray-900 text-pretty md:text-2xl">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.Things} />
        </section>
      </main>
      <Footer />
    </>
  );
}
