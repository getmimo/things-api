export const runtime = "edge";

import React from "react";
import { headers } from "next/headers";
import DocumentationPage from "../../../components/documentationPage";
import { categories, getEndpointDescription } from "../../data/categories";
import { fetchAirportLocationsPreview } from "@/app/airportsDataHelper";

function getFetchUrl(host: string, endpoint: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isAirportsHost = host.includes("airports");
  const isLocationsEndpoint = endpoint === "locations";
  const path = isAirportsHost
    ? `/api/${endpoint}${isLocationsEndpoint ? "" : "?limit=25"}`
    : `/api/airports/${endpoint}${isLocationsEndpoint ? "" : "?limit=25"}`;

  return new URL(`${protocol}://${host}${path}`);
}

export default async function Documentation({
  params,
}: {
  params: { endpoint: string };
}) {
  const { endpoint } = params;
  const method = "GET";
  const isLocationsEndpoint = endpoint === "locations";
  const displayUrl = new URL(`https://airports.mimo.dev/api/${endpoint}`);
  if (!isLocationsEndpoint) {
    displayUrl.searchParams.set("limit", "25");
  }
  const host = headers().get("host") ?? "airports.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint);

  const response = isLocationsEndpoint
    ? await fetchAirportLocationsPreview(new Request(fetchUrl))
    : await fetch(fetchUrl);
  const data: any = response.ok ? await response.json() : null;
  const valuesData: any[] | undefined = isLocationsEndpoint
    ? undefined
    : Array.isArray(data?.results)
      ? data.results
      : Array.isArray(data)
        ? data
        : undefined;

  return (
    <DocumentationPage
      endpoint={endpoint}
      url={displayUrl.toString()}
      method={method}
      data={data}
      valuesData={valuesData}
      showValuesView={!isLocationsEndpoint && Array.isArray(valuesData)}
      responseTruncated={isLocationsEndpoint}
      endpointDescription={getEndpointDescription(endpoint)}
      paginationNote={isLocationsEndpoint ? undefined :
        <>
          Collection responses are paginated and returned as{" "}
          <code className="rounded bg-white px-1 py-0.5">
            {"{ count, offset, limit, results }"}
          </code>
          . Use <code className="rounded bg-white px-1 py-0.5">limit</code> and{" "}
          <code className="rounded bg-white px-1 py-0.5">offset</code> to move
          through the dataset. The default limit is 100, and the maximum limit
          is 1,000.
        </>}
      categories={categories}
      basePath={`airports`}
    />
  );
}
