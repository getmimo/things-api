import { Metadata } from "next";
import { headers } from "next/headers";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Airports API by Mimo",
  description: "Documentation for the Airports API provided by Mimo.",
};

function getFetchUrl(host: string, endpoint: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isAirportsHost = host.includes("airports");
  const path = isAirportsHost
    ? endpoint
    : endpoint.replace("/api/", "/api/airports/");

  return new URL(`${protocol}://${host}${path}`);
}

export default async function AirportsAPI() {
  const endpoint = `/api/airports/6523`;
  const displayUrl = new URL(`https://airports.mimo.dev${endpoint}`);
  const method = `GET`;
  const host = headers().get("host") ?? "airports.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint);

  const response = await fetch(fetchUrl);
  const data: any = response.ok ? await response.json() : null;

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-slate-50 p-6 text-gray-900 md:p-12">
        <h1 className="mb-4 text-2xl font-semibold text-airports-blue underline decoration-airports-sky decoration-4 underline-offset-4 text-pretty md:text-3xl">
          Airports
        </h1>
        <h2 className="-mt-2 mb-8 text-xl font-semibold text-airports-blue text-pretty md:text-2xl">
          by Mimo
        </h2>
        <p className="mb-8 w-11/12 max-w-5xl text-center text-lg text-gray-600 text-pretty">
          Welcome to the Airports API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="m-auto w-11/12 max-w-5xl rounded-md border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-airports-blue text-pretty md:text-2xl">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={displayUrl.toString()}
            theme={ThemeOptions.Airports}
          />
          <h2 className="mb-3 mt-8 text-xl font-semibold text-airports-blue text-pretty md:text-2xl">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.Airports} />
        </section>
      </main>
      <Footer />
    </>
  );
}
