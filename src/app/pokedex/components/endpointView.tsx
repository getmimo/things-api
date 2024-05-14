"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCopy } from "@fortawesome/free-solid-svg-icons";

interface EndpointViewProps {
  url: URL;
  method: string;
}

const EndpointView: React.FC<EndpointViewProps> = ({ url, method }) => {
  const handleOpenEndpoint = () => {
    window.open(url, "_blank");
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(url.toString());
  };

  return (
    <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center">
      <span>{method}</span>
      <span className="w-2"></span>
      <span className="underline decoration-pokemon-yellow">{url.toString()}</span>
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
