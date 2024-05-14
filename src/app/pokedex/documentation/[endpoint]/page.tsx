export const runtime = "edge";
import React from "react";
import DocumentationPage from "../../components/documentationPage";

export default function Documentation({
  params,
}: {
  params: { endpoint: string };
}) {
  const { endpoint } = params;
  return <DocumentationPage selectedEndpoint={endpoint} />;
}