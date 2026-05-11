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
  const endpoint = `/api/films/1`;
  const url = new URL(`https://swapi.mimo.dev${endpoint}`);
  console.log(url);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-black">
        <h1 className="mb-6 font-russo-one text-2xl font-semibold text-black underline decoration-sw-yellow decoration-4 underline-offset-4 text-pretty md:text-3xl">
          SWAPI
        </h1>
        <h2 className="-mt-4 mb-8 font-russo-one text-xl font-semibold text-black text-pretty md:text-2xl">
          by Mimo
        </h2>
        <p className="mb-4 w-11/12 text-lg font-russo-one text-pretty">
          Welcome to the Star Wars API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="mb-2 mt-8 font-russo-one text-xl font-semibold text-black text-pretty md:text-2xl">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.StarWars}
          />
          <h2 className="mb-2 mt-8 font-russo-one text-xl font-semibold text-black text-pretty md:text-2xl">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.StarWars} />
        </section>
      </main>
      <Footer />
    </>
  );
}
