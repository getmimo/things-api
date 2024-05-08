"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface CodeViewProps {
  code: string;
  endpoint: string | null;
}

const CodeView: React.FC<CodeViewProps> = ({ code, endpoint }) => {
  const customTheme = {
    ...dracula,
    backgroundColor: "#303943", // "Pokemon Gray"
  };

  return (
    <>
      {endpoint && (
        <code className="bg-pokemon-gray text-white p-2 rounded">
          {endpoint}
        </code>
      )}
      <div className="bg-pokemon-gray rounded-md">
        <CopyBlock
          text={code}
          language={`js`}
          showLineNumbers={true}
          theme={customTheme}
        />
      </div>
    </>
  );
};

export default CodeView;
