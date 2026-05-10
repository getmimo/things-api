import { Metadata } from "next";
import { headers } from "next/headers";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Crypto Craze API by Mimo",
  description:
    "Documentation for the Crypto Craze API - real coins, fake prices, real API practice.",
};

const API_KEY = "mimo-api-key-34d1-1g3f-27s1";

export default async function CryptoCrazeAPI() {
  const endpoint = `/api/coins/bitcoin`;
  const displayUrl = new URL(`https://crypto-craze.mimo.dev${endpoint}`);
  const method = `GET`;

  const host = headers().get("host") ?? "crypto-craze.mimo.dev";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isCryptoCrazeHost = host.includes("crypto-craze");
  const fetchPath = isCryptoCrazeHost ? endpoint : `/api/cryptocraze/coins/bitcoin`;
  const fetchUrl = new URL(`${protocol}://${host}${fetchPath}`);

  const response = await fetch(fetchUrl, {
    headers: { "api-key": API_KEY },
  });
  const data: any = response.ok
    ? await response.json()
    : {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        priceUsd: 68420.55,
        change24h: 2.4,
        marketCapUsd: 1340000000000,
      };
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-cc-dark">
        <h1 className="text-5xl font-bold mb-2">Crypto Craze</h1>
        <h2 className="text-3xl font-semibold mb-4">by Mimo</h2>
        <p className="w-11/12 text-lg mb-2 text-pretty text-center">
          Welcome to the Crypto Craze API. Real coins. Fake prices. Real API
          practice.
        </p>
        <p className="w-11/12 text-sm mb-6 text-pretty text-center text-cc-dark/70">
          The Crypto Craze API requires an API key sent via the{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">api-key</code>{" "}
          header.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={displayUrl.toString()}
            theme={ThemeOptions.CryptoCraze}
          />
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
          <ResponseView data={data} theme={ThemeOptions.CryptoCraze} />
        </section>
      </main>
      <Footer />
    </>
  );
}
