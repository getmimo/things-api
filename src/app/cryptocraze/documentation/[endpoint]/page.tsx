export const runtime = "edge";
import React from "react";
import { headers } from "next/headers";
import DocumentationPage from "../../../components/documentationPage";
import { categories } from "../../data/categories";

const API_KEY = "mimo-api-key-34d1-1g3f-27s1";

function getFetchUrl(host: string, endpoint: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  // When running on the live crypto-craze.mimo.dev domain, the middleware
  // rewrites /api/coins -> /api/cryptocraze/coins. Anywhere else (e.g. local
  // dev on localhost) we hit the rewritten path directly so the data still
  // loads even when the production domain isn't deployed yet.
  const isCryptoCrazeHost = host.includes("crypto-craze");
  const path = isCryptoCrazeHost
    ? `/api/${endpoint}`
    : `/api/cryptocraze/${endpoint}`;
  return new URL(`${protocol}://${host}${path}`);
}

export default async function Documentation({
  params,
}: {
  params: { endpoint: string };
}) {
  const { endpoint } = params;
  const method = "GET";
  const displayUrl = new URL(
    `https://crypto-craze.mimo.dev/api/${endpoint}`
  );
  const host = headers().get("host") ?? "crypto-craze.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint);

  const response = await fetch(fetchUrl, {
    headers: { "api-key": API_KEY },
  });
  const data: any = response.ok ? await response.json() : null;

  // The /coins endpoint wraps the list in `data` — surface the inner array
  // for the ValuesView so each coin shows up as a clickable card, while
  // still letting the ResponseView render the full wrapped response.
  const valuesData: any[] | undefined = Array.isArray(data?.data)
    ? data.data
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
      categories={categories}
      basePath={`cryptocraze`}
    />
  );
}
