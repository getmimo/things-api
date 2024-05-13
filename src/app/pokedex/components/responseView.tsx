import React from "react";
import { Code } from "bright";
import { draculaAltered } from "../editorTheme";
import { getFile } from "../utils/fileUtils";

interface ResponseViewProps {
  endpoint: string;
  method: string;
}

const ResponseView: React.FC<ResponseViewProps> = async ({
  endpoint,
  method,
}) => {
  Code.theme = draculaAltered;
  // The endpoint is typically formatted as either "/api/pokemon/charizard"
  // or a full URL like "https://pokedex.mimo.dev/api/pokemon/abomasnow-mega"
  const pathParts = endpoint.split("/");
  const file = pathParts.pop() || "";
  const folder = pathParts.pop() || "";
  const data = await getFile(folder, file);

  return (
    <>
      <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center underline decoration-pokemon-yellow">
        response.json
      </div>
      <div className="bg-pokemon-gray rounded-md max-h-96 -mt-2 overflow-scroll">
        <Code lang="json" lineNumbers>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Code>
      </div>
    </>
  );
};

export default ResponseView;
