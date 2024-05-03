import { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Pokedex API",
  description: "Documentation for the Pokedex API.",
};

export default function PokemonAPI() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6">Pokemon API Documentation</h1>
      <p className="text-lg mb-4">
        Welcome to the Pokemon API documentation. Here you can find information
        on how to use the API to fetch data about various Pokemon.
      </p>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Endpoints</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Pokedex:</strong> /api/pokedex
          </li>
          <li>
            <strong>Pokemon:</strong> /api/pokemon
          </li>
          <li>
            <strong>Types:</strong> /api/types
          </li>
          <li>
            <strong>Abilities:</strong> /api/abilities
          </li>
          <li>
            <strong>Moves:</strong> /api/moves
          </li>
          <li>
            <strong>Items:</strong> /api/items
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-3">Example Request</h2>
        <Image src={`/data/pokedex/files/sprites/master/sprites/pokemon/6.png`} alt="Pokemon" width="64" height="64" />
        <code className="bg-gray-700 text-sm p-2 rounded">
          GET /api/pokemon/charizard
        </code>
      </section>
    </main>
  );
}