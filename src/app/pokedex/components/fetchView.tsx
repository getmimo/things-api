import React from "react";
import { Code } from "bright";
import { draculaAltered } from "../editorTheme";

interface CodeViewProps {
  url: string;
  endpoint: string;
  method: string;
}

const FetchView: React.FC<CodeViewProps> = ({ url, endpoint, method }) => {
  Code.theme = draculaAltered;

  return (
    <>
      <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center">
        {method}
        <span className="w-2"></span>
        <span className="underline decoration-pokemon-yellow">
          {endpoint.toLowerCase().split(" ").join("-")}
        </span>
      </div>
      <div className="bg-pokemon-gray rounded-md -mt-5">
        <Code lang="js" lineNumbers>
          {`fetch("${url}")         
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`}
        </Code>
      </div>
    </>
  );
};

export default FetchView;
