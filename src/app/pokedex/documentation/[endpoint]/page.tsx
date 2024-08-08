export const runtime = "edge";
import React from "react";
import DocumentationPage from "../../../components/documentationPage";
import { categories } from "../../data/categories";

export default async function Documentation({
  params,
}: {
  params: { endpoint: string };
}) {
  const { endpoint } = params;
  const method = "GET";
  const url = new URL(`https://pokedex.mimo.dev/api/${endpoint}`);
  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;

  return (
    <DocumentationPage
      endpoint={endpoint}
      url={url.toString()}
      method={method}
      data={data}
      showValuesView={true}
      categories={categories}
      basePath={`pokedex`}
    />
  );
}
