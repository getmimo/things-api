import Footer from "./components/footer";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 md:p-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl p-12">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <a
          href="/"
          className="text-lg bg-white text-black py-2 px-4 rounded shadow-lg transform transition-transform hover:scale-105"
        >
          Go to Home
        </a>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
