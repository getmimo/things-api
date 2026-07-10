import { Metadata } from "next";
import React from "react";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import Image from "next/image";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Rick and Morty API by Mimo",
  description: "Documentation for the Rick and Morty API provided by Mimo.",
};

export default async function RickAndMortyAPI() {
  const endpoint = `/api/character/1`;
  const url = new URL(`https://rickandmorty.mimo.dev${endpoint}`);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-black">
        <Image
          src={`/Rick and Morty.png`}
          alt="Rick and Morty logo"
          width="560"
          height="280"
        />
        <h2 className="-mt-4 mb-8 font-creepster text-2xl font-semibold text-black text-pretty md:text-3xl">
          by Mimo
        </h2>
        <p className="mb-4 w-11/12 text-lg text-pretty">
          Welcome to the Rick and Morty API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="mb-2 mt-8 font-creepster text-2xl font-semibold text-black text-pretty md:text-3xl">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.RickAndMorty}
          />
          <h2 className="mb-2 mt-8 font-creepster text-2xl font-semibold text-black text-pretty md:text-3xl">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.RickAndMorty} />
        </section>
      </main>
      <Footer />
    </>
  );
}
