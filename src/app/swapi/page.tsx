import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Wars API",
  description: "Documentation for the Star Wars API.",
};

export default function StarWarsAPI() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6">SWAPI Documentation</h1>
      <p className="text-lg mb-4">
        Welcome to the Star Wars API documentation. Here you can find
        information on how to use the API to fetch data about the Star Wars
        universe.
      </p>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Endpoints</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Films:</strong> /api/films
          </li>
          <li>
            <strong>People:</strong> /api/people
          </li>
          <li>
            <strong>Planets:</strong> /api/planets
          </li>
          <li>
            <strong>Species:</strong> /api/species
          </li>
          <li>
            <strong>Starships:</strong> /api/starships
          </li>
          <li>
            <strong>Vehicles:</strong> /api/vehicles
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-3">Example Request</h2>
        <code className="bg-gray-700 text-sm p-2 rounded">
          GET /api/films/1
        </code>
      </section>
    </main>
  );
}
