import React from "react";
import { Code } from "bright";
import { draculaAltered } from "../editorTheme";
import { handleRequest } from "@/app/pokedexHelper";

interface ResponseViewProps {
  url: URL;
  method: string;
}

const ResponseView: React.FC<ResponseViewProps> = async ({
  url,
  method,
}) => {
  Code.theme = draculaAltered;
  // The URL looks like "https://pokedex.mimo.dev/api/pokemon/abomasnow-mega"
  const response = await fetch(url);
  const data = response.ok ? await response.json() : null;
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
