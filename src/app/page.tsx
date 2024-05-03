export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <a href="/swapi" className="text-lg text-blue-500 hover:text-blue-700">
        Go to SWAPI
      </a>
      <a href="/pokedex" className="text-lg text-blue-500 hover:text-blue-700">
        Go to Pokedex
      </a>
    </main>
  );
}
