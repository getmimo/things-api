"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCopy } from "@fortawesome/free-solid-svg-icons";

interface EndpointViewProps {
  endpoint: string;
  method: string;
}

const EndpointView: React.FC<EndpointViewProps> = ({ endpoint, method }) => {
  const fullUrl = `https://pokedex.mimo.dev/api/${endpoint}`;

  const handleOpenEndpoint = () => {
    window.open(fullUrl, "_blank");
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(fullUrl);
  };

  return (
    <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center">
      <span>{method}</span>
      <span className="w-2"></span>
      <span className="underline decoration-pokemon-yellow">{fullUrl}</span>
      <button onClick={handleOpenEndpoint} className="ml-2">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </button>
      <button onClick={handleCopyEndpoint} className="ml-2">
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

export default EndpointView;
