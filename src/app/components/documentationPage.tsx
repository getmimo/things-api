import React from "react";
import SidebarMenu from "./sidebarMenu";
import EndpointView from "./endpointView";
import FetchView from "./fetchView";
import ResponseView from "./responseView";
import ValuesView from "./valuesView";
import Footer from "./footer";
import { ThemeOptions } from "../utils/themeOptions";

interface DocumentationPageProps {
  endpoint: string;
  url: string;
  method: string;
  data: any;
  valuesData?: any[];
  showValuesView?: boolean;
  responseTruncated?: boolean;
  paginationNote?: React.ReactNode;
  endpointDescription?: React.ReactNode;
  categories: any;
  basePath: string;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({
  endpoint,
  url,
  method,
  data,
  valuesData,
  showValuesView,
  responseTruncated,
  paginationNote,
  endpointDescription,
  categories,
  basePath,
}) => {
  const theme = url.includes("swapi")
    ? ThemeOptions.StarWars
    : url.includes("pokedex")
    ? ThemeOptions.Pokemon
    : url.includes("crypto-craze")
    ? ThemeOptions.CryptoCraze
    : url.includes("airports")
    ? ThemeOptions.Airports
    : url.includes("things")
    ? ThemeOptions.Things
    : ThemeOptions.RickAndMorty;

  const Navbar =
    theme === ThemeOptions.StarWars
      ? require("../swapi/components/navbar").default
      : theme === ThemeOptions.Pokemon
      ? require("../pokedex/components/navbar").default
      : theme === ThemeOptions.CryptoCraze
      ? require("../cryptocraze/components/navbar").default
      : theme === ThemeOptions.Airports
      ? require("../airports/components/navbar").default
      : theme === ThemeOptions.Things
      ? require("../things/components/navbar").default
      : require("../rickandmorty/components/navbar").default;

  const isCryptoCraze = theme === ThemeOptions.CryptoCraze;

  return (
    <>
      <Navbar />
      <div
        className={`flex min-h-[calc(100vh-3.5rem)] flex-col sm:flex-row sm:items-stretch ${
          isCryptoCraze ? "text-cc-dark" : ""
        }`}
      >
        <div className="w-full sm:flex sm:w-56 sm:self-stretch">
          <SidebarMenu
            selectedEndpoint={endpoint}
            categories={categories}
            basePath={basePath}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mt-6 flex flex-1 flex-col items-start justify-start rounded-md px-4 md:mt-24 md:justify-center md:px-0">
            <div className="m-auto w-full rounded-md bg-white p-4 md:w-10/12 md:p-8">
              <div className="w-full rounded-md bg-white p-4 md:p-8">
                <h1 className={`mb-4 ${getHeadingClassName(theme)}`}>
                  Endpoint: {endpoint}
                </h1>
                {endpointDescription && (
                  <p className="mb-4 text-sm leading-6 text-gray-600 text-pretty">
                    {endpointDescription}
                  </p>
                )}
                <EndpointView url={url} method={method} theme={theme} />
                {paginationNote && (
                  <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                    {paginationNote}
                  </div>
                )}
                <h2 className={`mb-2 mt-8 ${getSubheadingClassName(theme)}`}>
                  Request
                </h2>
                <FetchView
                  endpoint={endpoint}
                  method={method}
                  url={url}
                  theme={theme}
                />
                <h2 className={`mb-2 mt-8 ${getSubheadingClassName(theme)}`}>
                  Response
                </h2>
                {data && (
                  <ResponseView
                    data={data}
                    theme={theme}
                    truncated={responseTruncated}
                  />
                )}
                {showValuesView && (
                  <ValuesView
                    endpoint={endpoint}
                    data={valuesData ?? data}
                    basePath={basePath}
                    theme={theme}
                  />
                )}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

function getHeadingClassName(theme: ThemeOptions) {
  switch (theme) {
    case ThemeOptions.StarWars:
      return "font-russo-one text-2xl font-semibold text-black underline decoration-sw-yellow decoration-4 underline-offset-4 text-pretty md:text-3xl";
    case ThemeOptions.Pokemon:
      return "font-press-start text-base font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-xl";
    case ThemeOptions.RickAndMorty:
      return "font-creepster text-3xl font-semibold text-black underline decoration-rm-green decoration-4 underline-offset-4 text-pretty md:text-4xl";
    case ThemeOptions.Things:
      return "text-2xl font-semibold text-gray-900 text-pretty md:text-3xl";
    case ThemeOptions.CryptoCraze:
      return "text-2xl font-semibold text-cc-dark underline decoration-cc-gold decoration-4 underline-offset-4 text-pretty md:text-3xl";
    case ThemeOptions.Airports:
      return "text-2xl font-semibold text-airports-blue underline decoration-airports-sky decoration-4 underline-offset-4 text-pretty md:text-3xl";
  }
}

function getSubheadingClassName(theme: ThemeOptions) {
  switch (theme) {
    case ThemeOptions.StarWars:
      return "font-russo-one text-xl font-semibold text-black text-pretty md:text-2xl";
    case ThemeOptions.Pokemon:
      return "font-press-start text-sm font-semibold leading-relaxed text-pokemon-blue text-pretty md:text-lg";
    case ThemeOptions.RickAndMorty:
      return "font-creepster text-2xl font-semibold text-black text-pretty md:text-3xl";
    case ThemeOptions.Things:
      return "text-xl font-semibold text-gray-900 text-pretty md:text-2xl";
    case ThemeOptions.CryptoCraze:
      return "text-xl font-semibold text-cc-dark text-pretty md:text-2xl";
    case ThemeOptions.Airports:
      return "text-xl font-semibold text-airports-blue text-pretty md:text-2xl";
  }
}

export default DocumentationPage;
