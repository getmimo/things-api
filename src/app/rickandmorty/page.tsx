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
  description: "Documentation for the Rick and Morty API - provided by Mimo.",
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
        <h2 className="text-3xl font-semibold mb-8 -mt-4">by Mimo</h2>
        <p className="w-11/12 text-lg mb-4">
          Welcome to the Rick and Morty API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.RickAndMorty}
          />
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
          <ResponseView data={data} theme={ThemeOptions.RickAndMorty} />
        </section>
      </main>
      <Footer />
    </>
  );
}
