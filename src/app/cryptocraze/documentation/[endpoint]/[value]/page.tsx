export const runtime = "edge";
import React from "react";
import { headers } from "next/headers";
import DocumentationPage from "../../../../components/documentationPage";
import { categories } from "../../../data/categories";

const API_KEY = "mimo-api-key-34d1-1g3f-27s1";

function getFetchUrl(host: string, endpoint: string, value: string) {
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const isCryptoCrazeHost = host.includes("crypto-craze");
  const path = isCryptoCrazeHost
    ? `/api/${endpoint}/${value}`
    : `/api/cryptocraze/${endpoint}/${value}`;
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
    `https://crypto-craze.mimo.dev/api/${endpoint}/${value}`
  );
  const host = headers().get("host") ?? "crypto-craze.mimo.dev";
  const fetchUrl = getFetchUrl(host, endpoint, value);

  const response = await fetch(fetchUrl, {
    headers: { "api-key": API_KEY },
  });
  const data: any = response.ok ? await response.json() : null;

  return (
    <DocumentationPage
      endpoint={endpoint}
      url={displayUrl.toString()}
      method={method}
      data={data}
      categories={categories}
      basePath={`cryptocraze`}
    />
  );
}
