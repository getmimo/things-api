import EndpointView from "../components/endpointView";
import React from "react";
import CodeView from "./codeView";
import ResponseView from "./responseView";
import { categories } from "../data/categories";

interface InfoViewProps {
  selectedEndpoint: string | null;
}

const InfoView: React.FC<InfoViewProps> = async ({ selectedEndpoint }) => {
  const fetchData = async () => {
    let valueForEndpoint = null;

    if (selectedEndpoint) {
      const endpoint = categories
        .flatMap((category) => category.endpoints || [])
        .find(
          (endpoint) =>
            endpoint.id.toLowerCase().replace(/\s+/g, "-") === selectedEndpoint
        );
      if (endpoint && endpoint.values.length > 0) {
        valueForEndpoint = endpoint.values[1].id;
      }
    }
    return valueForEndpoint;
  };

  if (selectedEndpoint === null) {
    return (
      <div className="w-full p-8 bg-white rounded-md">
        <h1 className="text-2xl font-press-start font-bold mb-4">
          General information
        </h1>
        <p>ToDo: Add more info!</p>
      </div>
    );
  }

  const valueForEndpoint = await fetchData();
  const method = "GET";
  const url = `https://pokedex.mimo.dev/api/${selectedEndpoint}/${valueForEndpoint ? valueForEndpoint.replace(".json", "") : ""}`;

  return (
    <div className="w-full p-8 bg-white rounded-md">
      <h1 className="text-2xl font-press-start font-bold mb-4">
        Endpoint: {selectedEndpoint}
      </h1>
      <EndpointView endpoint={selectedEndpoint} method="GET" />
      <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>
      <CodeView
        endpoint={selectedEndpoint}
        method={method}
        code={`fetch("${url}")         
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`}
      />
      <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
      <ResponseView endpoint={url} method={method} />
    </div>
  );
};

export default InfoView;
