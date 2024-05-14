import React from "react";
import { Code } from "bright";
import { draculaAltered } from "../editorTheme";

interface CodeViewProps {
  code: string;
  endpoint: string;
  method: string;
}

const CodeView: React.FC<CodeViewProps> = ({ code, endpoint, method }) => {
  Code.theme = draculaAltered;

  return (
    <>
      <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center">
        {method}
        <span className="w-2"></span>
        <span className="underline decoration-pokemon-yellow">{endpoint.toLowerCase().split(' ').join('-')}</span>
      </div>
      <div className="bg-pokemon-gray rounded-md -mt-5">
        <Code lang="js" lineNumbers>
          {code}
        </Code>
      </div>
    </>
  );
};

export default CodeView;
