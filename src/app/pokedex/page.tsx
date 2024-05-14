import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/navbar";
import CodeView from "./components/codeView";
import ResponseView from "./components/responseView";

export const metadata: Metadata = {
  title: "Pokedex API by Mimo",
  description: "Documentation for the Pokedex API - provided by Mimo.",
};

export default function PokemonAPI() {
  const endpoint = `/api/pokemon/charizard`;
  const url = new URL(`https://pokedex.mimo.dev${endpoint}`);
  const method = `GET`;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-24 text-pokemon-gray">
        <h1 className="text-5xl font-bold mb-6 font-press-start">Pokedex</h1>
        <h2 className="text-3xl font-semibold mb-8 -mt-4">by Mimo</h2>
        <p className="text-lg mb-4">
          Welcome to the Pokemon API documentation. Here you can find
          information on how to use the API to fetch data about various Pokemon.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>

          <Image
            src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/6.png`}
            alt="Pokemon"
            width="64"
            height="64"
          />
          <CodeView
            endpoint={endpoint}
            method={method}
            code={`fetch("${url}")         
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`}
          />
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
          <ResponseView url={url} method={method} />
        </section>
      </main>
    </>
  );
}
4;
