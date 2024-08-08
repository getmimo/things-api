import React from "react";
import Navbar from "../pokedex/components/navbar";
import SidebarMenu from "./sidebarMenu";
import EndpointView from "./endpointView";
import FetchView from "./fetchView";
import ResponseView from "./responseView";
import ValuesView from "./valuesView";
import Footer from "./footer";

interface DocumentationPageProps {
  endpoint: string;
  url: string;
  method: string;
  data: any;
  showValuesView?: boolean;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({
  endpoint,
  url,
  method,
  data,
  showValuesView,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-56 pl-4 pt-2 bg-gray-100">
          <SidebarMenu selectedEndpoint={endpoint} />
        </div>
        <main className="w-10/12 flex flex-col items-start justify-center rounded-md mt-24">
          <div className="w-10/12 m-auto p-8 bg-white rounded-md">
            <div className="w-full p-8 bg-white rounded-md">
              <h1 className="text-3xl font-semibold mb-4">
                Endpoint: {endpoint}
              </h1>
              <EndpointView url={url} method={method} />
              <h2 className="text-3xl font-semibold mt-8 mb-2">Request</h2>
              <FetchView endpoint={endpoint} method={method} url={url} />
              <h2 className="text-3xl font-semibold mt-8 mb-2">Response</h2>
              {data && <ResponseView data={data} />}
              {showValuesView && <ValuesView endpoint={endpoint} data={data} />}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationPage;
