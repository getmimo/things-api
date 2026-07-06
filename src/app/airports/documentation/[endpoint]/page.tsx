export const runtime = "edge";

import React from "react";
import { headers } from "next/headers";
import DocumentationPage from "../../../components/documentationPage";
import { categories, getEndpointDescription } from "../../data/categories";

function getFetchUrl(host: string, endpoint: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isAirportsHost = host.includes("airports");
  const path = isAirportsHost
    ? `/api/${endpoint}?limit=25`
    : `/api/airports/${endpoint}?limit=25`;

  return new URL(`${protocol}://${host}${path}`);
}

export default async function Documentation({
  params,
}: {
  params: { endpoint: string };
}) {
  const { endpoint } = params;
  const method = "GET";
  const displayUrl = new URL(`https://airports.mimo.dev/api/${endpoint}`);
  displayUrl.searchParams.set("limit", "25");
  const host = headers().get("host") ?? "airports.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint);

  const response = await fetch(fetchUrl);
  const data: any = response.ok ? await response.json() : null;
  const valuesData: any[] | undefined = Array.isArray(data?.results)
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
      showValuesView={Array.isArray(valuesData)}
      endpointDescription={getEndpointDescription(endpoint)}
      paginationNote={
        <>
          Collection responses are paginated and returned as{" "}
          <code className="rounded bg-white px-1 py-0.5">
            {"{ count, offset, limit, results }"}
          </code>
          . Use <code className="rounded bg-white px-1 py-0.5">limit</code> and{" "}
          <code className="rounded bg-white px-1 py-0.5">offset</code> to move
          through the dataset. The default limit is 100, and the maximum limit
          is 1,000.
        </>
      }
      categories={categories}
      basePath={`airports`}
    />
  );
}
