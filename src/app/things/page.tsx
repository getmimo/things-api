import { Metadata } from "next";
import Navbar from "./components/navbar";
import FetchView from "../components/fetchView";
import ResponseView from "../components/responseView";
import Footer from "../components/footer";
import { ThemeOptions } from "../utils/themeOptions";

export const metadata: Metadata = {
  title: "Things API by Mimo",
  description: "Documentation for the Things API - provided by Mimo.",
};

export default async function ThingsAPI() {
  const endpoint = `/api/things/1`;
  const url = new URL(`https://things.mimo.dev${endpoint}`);
  const method = `GET`;
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-12 text-things-yellow">
        <h1 className="text-5xl font-bold mb-6">Things</h1>
        <h2 className="text-3xl font-semibold mb-8 -mt-4">by Mimo</h2>
        <p className="w-11/12 text-lg mb-4">
          Welcome to the Things API documentation. Here, you can find
          information on how to use the API.
        </p>
        <section className="w-11/12 m-auto">
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>
          <FetchView
            endpoint={endpoint}
            method={method}
            url={url.toString()}
            theme={ThemeOptions.Things}
          />
          <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
          <ResponseView data={data} theme={ThemeOptions.Things} />
        </section>
      </main>
      <Footer />
    </>
  );
}
