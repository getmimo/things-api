import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Pokedex API by Mimo",
  description: "Documentation for the Pokedex API provided by Mimo.",
};

export default async function PokemonAPI() {
  const endpoint = `/api/pokemon/charizard`;
  const url = new URL(`https://pokedex.mimo.dev${endpoint}`);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-black">
        <h1 className="mb-6 font-press-start text-base font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-xl">
          Pokedex
        </h1>
        <h2 className="-mt-4 mb-8 font-press-start text-sm font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-lg">
          by Mimo
        </h2>
        <p className="mb-4 w-11/12 text-lg text-pretty">
          Welcome to the Pokemon API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <Image
            src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/6.png`}
            alt="Pokemon"
            width="64"
            height="64"
            className="-mb-8"
          />
          <h2 className="mb-2 mt-8 font-press-start text-sm font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-lg">
            Example Request
          </h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.Pokemon}
          />
          <h2 className="mb-2 mt-8 font-press-start text-sm font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-lg">
            Example Response
          </h2>
          <ResponseView data={data} theme={ThemeOptions.Pokemon} />
        </section>
      </main>
      <Footer />
    </>
  );
}
