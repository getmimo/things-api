import React from "react";
import { Code } from "bright";
import { draculaAltered } from "../editorTheme";

import fsPromises from "fs/promises";
import path from "path";

interface ResponseViewProps {
  endpoint: string;
  method: string;
}

const ResponseView: React.FC<ResponseViewProps> = async ({
  endpoint,
  method,
}) => {
  Code.theme = draculaAltered;
  const file = endpoint.replace("/api", ""); // the endpoint looks like /api/pokemon/charizard
  const data = await getResponseJSON(file);

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

async function getResponseJSON(file: string) {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, `../../../../public/data/pokedex/${file}.json`)
  );
  return JSON.parse(jsonFile.toString());
}
