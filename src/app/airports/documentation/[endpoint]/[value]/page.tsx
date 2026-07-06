export const runtime = "edge";

import React from "react";
import { headers } from "next/headers";
import DocumentationPage from "../../../../components/documentationPage";
import { categories, getEndpointDescription } from "../../../data/categories";

function getFetchUrl(host: string, endpoint: string, value: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isAirportsHost = host.includes("airports");
  const path = isAirportsHost
    ? `/api/${endpoint}/${value}`
    : `/api/airports/${endpoint}/${value}`;

  return new URL(`${protocol}://${host}${path}`);
}

export default async function Documentation({
  params,
}: {
  params: { endpoint: string; value: string };
}) {
  const { endpoint, value } = params;
  const method = "GET";
  const displayUrl = new URL(
    `https://airports.mimo.dev/api/${endpoint}/${value}`,
  );
  const host = headers().get("host") ?? "airports.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint, value);

  const response = await fetch(fetchUrl);
  const data: any = response.ok ? await response.json() : null;

  return (
    <DocumentationPage
      endpoint={endpoint}
      url={displayUrl.toString()}
      method={method}
      data={data}
      endpointDescription={getEndpointDescription(endpoint)}
      categories={categories}
      basePath={`airports`}
    />
  );
}
