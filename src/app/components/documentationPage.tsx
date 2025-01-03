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
  showValuesView?: boolean;
  categories: any;
  basePath: string;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({
  endpoint,
  url,
  method,
  data,
  showValuesView,
  categories,
  basePath,
}) => {
  const theme = url.includes("swapi")
    ? ThemeOptions.StarWars
    : url.includes("pokedex")
    ? ThemeOptions.Pokemon
    : url.includes("things")
    ? ThemeOptions.Things
    : ThemeOptions.RickAndMorty;

  const Navbar =
    theme === ThemeOptions.StarWars
      ? require("../swapi/components/navbar").default
      : theme === ThemeOptions.Pokemon
      ? require("../pokedex/components/navbar").default
      : theme === ThemeOptions.Things
      ? require("../things/components/navbar").default
      : require("../rickandmorty/components/navbar").default;

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-56">
          <SidebarMenu
            selectedEndpoint={endpoint}
            categories={categories}
            basePath={basePath}
          />
        </div>
        <main className="w-10/12 flex flex-col items-start justify-center rounded-md mt-24">
          <div className="w-10/12 m-auto p-8 bg-white rounded-md">
            <div className="w-full p-8 bg-white rounded-md">
              <h1 className="text-3xl font-semibold mb-4">
                Endpoint: {endpoint}
              </h1>
              <EndpointView url={url} method={method} theme={theme} />
              <h2 className="text-3xl font-semibold mt-8 mb-2">Request</h2>
              <FetchView
                endpoint={endpoint}
                method={method}
                url={url}
                theme={theme}
              />
              <h2 className="text-3xl font-semibold mt-8 mb-2">Response</h2>
              {data && <ResponseView data={data} theme={theme} />}
              {showValuesView && (
                <ValuesView
                  endpoint={endpoint}
                  data={data}
                  basePath={basePath}
                  theme={theme}
                />
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationPage;
