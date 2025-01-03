export const runtime = "edge";
import React from "react";
import DocumentationPage from "../../../../components/documentationPage";
import { categories } from "../../../data/categories";

export default async function Documentation({
  params,
}: {
  params: { endpoint: string; value: string };
}) {
  const { endpoint, value } = params;
  const url = new URL(`https://things.mimo.dev/api/${endpoint}/${value}`);
  const method = "GET";

  const response = await fetch(url);
  const data: any = response.ok ? await response.json() : null;

  return (
    <DocumentationPage
      endpoint={endpoint}
      url={url.toString()}
      method={method}
      data={data}
      categories={categories}
      basePath={`things`}
    />
  );
}
