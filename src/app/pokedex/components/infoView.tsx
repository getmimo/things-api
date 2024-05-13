import EndpointView from "../components/endpointView";
import React from "react";
import { getFile, getFirstFileNameInFolder } from "../utils/fileUtils";
import CodeView from "./codeView";
import ResponseView from "./responseView";

interface InfoViewProps {
  selectedEndpoint: string | null;
}

const InfoView: React.FC<InfoViewProps> = async ({ selectedEndpoint }) => {
  const fetchData = async () => {
    let firstFileName = null;
    let fileData = null;

    if (selectedEndpoint) {
      let folder = selectedEndpoint.toLowerCase().split(" ").join("-");
      if (folder) {
        firstFileName = await getFirstFileNameInFolder(folder);
        if (firstFileName && typeof selectedEndpoint === "string") {
          fileData = await getFile(selectedEndpoint, firstFileName);
        }
      }
    }
    return { firstFileName, fileData };
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

  const { firstFileName, fileData } = await fetchData();
  const method = "GET";
  const url = `https://pokedex.mimo.dev/api/${selectedEndpoint}/${firstFileName ? firstFileName.replace(".json", "") : ""}`;

  return (
    <div className="w-full p-8 bg-white rounded-md">
      <h1 className="text-2xl font-press-start font-bold mb-4">Endpoint: {selectedEndpoint}</h1>
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
