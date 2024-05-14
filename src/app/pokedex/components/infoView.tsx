import EndpointView from "../components/endpointView";
import React from "react";
import FetchView from "./fetchView";
import ResponseView from "./responseView";
import { categories } from "../data/categories";

interface InfoViewProps {
  selectedEndpoint: string | null;
}

const fetchData = async (selectedEndpoint: string) => {
  let value = null;

  const foundEndpoint = categories
    .flatMap((category) => category.endpoints || [])
    .find(
      (endpoint) =>
        endpoint.id.toLowerCase().split(" ").join("-") === selectedEndpoint
    );
  if (foundEndpoint && foundEndpoint.values.length > 0) {
    value = foundEndpoint.values[1].id;
  }
  return value?.toLowerCase().split(" ").join("-");
};

const InfoView: React.FC<InfoViewProps> = async ({ selectedEndpoint }) => {
  if (!selectedEndpoint) {
    return (
      <div className="w-full p-8 bg-white rounded-md">
        <h1 className="text-2xl font-press-start font-bold mb-4">
          General information
        </h1>
        <p>ToDo: Add more info!</p>
      </div>
    );
  }

  const endpoint = selectedEndpoint.toLowerCase().split(" ").join("-");
  const value = await fetchData(endpoint);
  const method = "GET";
  const url = new URL(
    `https://pokedex.mimo.dev/api/${endpoint}/${value ? value : ""}`
  );
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;

  return (
    <div className="w-full p-8 bg-white rounded-md">
      <h1 className="text-2xl font-press-start font-bold mb-4">
        Endpoint: {selectedEndpoint}
      </h1>
      <EndpointView url={url.toString()} method="GET" />
      <h2 className="text-3xl font-semibold mt-8 mb-2">Example Request</h2>
      <FetchView endpoint={endpoint} method={method} url={url.toString()} />
      <h2 className="text-3xl font-semibold mt-8 mb-2">Example Response</h2>
      {data && <ResponseView data={data} />}
    </div>
  );
};
export default InfoView;
