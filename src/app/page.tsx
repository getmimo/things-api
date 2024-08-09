import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 md:p-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Mimo&rsquo;s API Playground
        </h1>
        <p className="text-xl p-12">
          Explore the amazing world of RESTful APIs with Mimo
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <a
          href="/swapi"
          className="text-lg bg-white text-black py-2 px-4 rounded shadow-lg transform transition-transform hover:scale-105"
        >
          Star Wars API
        </a>
        <a
          href="/pokedex"
          className="text-lg bg-white text-black py-2 px-4 rounded shadow-lg transform transition-transform hover:scale-105"
        >
          Pokemon API
        </a>
        <a
          href="/rickandmorty"
          className="text-lg bg-white text-black py-2 px-4 rounded shadow-lg transform transition-transform hover:scale-105"
        >
          Rick and Morty API
        </a>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
