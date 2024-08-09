import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Star Wars API (SWAPI) by Mimo",
  description: "Documentation for the Star Wars API - provided by Mimo.",
};

export default async function StarWarsAPI() {
  const endpoint = `/api/people/1`;
  const url = new URL(`https://swapi.dev${endpoint}`);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-star-wars-yellow">
        <h1 className="text-5xl font-bold mb-6 font-russo-one">SWAPI</h1>
        <h2 className="text-3xl font-semibold mb-8 -mt-4 font-russo-one">
          by Mimo
        </h2>
        <p className="w-11/12 text-lg mb-4 font-russo-one">
          Welcome to the Star Wars API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="text-3xl font-semibold mt-8 mb-2 font-russo-one">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.StarWars}
          />
          <h2 className="text-3xl font-semibold mt-8 mb-2 font-russo-one">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.StarWars} />
        </section>
      </main>
      <Footer />
    </>
  );
}
