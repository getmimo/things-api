export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 text-white">
      <a href="/swapi" className="text-lg text-pokemon-blue hover:underline">
        Go to SWAPI
      </a>
      <a href="/pokedex" className="text-lg text-pokemon-yellow hover:underline">
        Go to Pokedex
      </a>
    </main>
  );
}
