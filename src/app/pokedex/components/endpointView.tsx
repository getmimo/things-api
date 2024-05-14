"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCopy } from "@fortawesome/free-solid-svg-icons";

interface EndpointViewProps {
  url: string;
  method: string;
}

const EndpointView: React.FC<EndpointViewProps> = ({ url, method }) => {
  const handleOpenEndpoint = () => {
    window.open(url, "_blank");
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(url.toString());
  };

  const getRouteSpecificPart = (url: string) => {
    const apiIndex = url.indexOf("/api/");
    if (apiIndex !== -1) {
      const routePart = url.substring(apiIndex + 5);
      const slashIndex = routePart.indexOf("/");
      if (slashIndex !== -1) {
        return (
          <>
            <span className="underline decoration-pokemon-yellow">
              {routePart.substring(0, slashIndex)}
            </span>
            <span className="w-2">/</span>
            <span className="underline decoration-pokemon-yellow">
              {routePart.substring(slashIndex+1)}
            </span>
          </>
        );
      }
      return (
        <span className="underline decoration-pokemon-yellow">{routePart}</span>
      );
    }
    return "";
  };

  return (
    <div className="bg-pokemon-gray text-white p-2 h-12 w-full rounded flex items-center justify-between">
      <div className="flex items-center">
        <span>{method}</span>
        <span className="w-2"></span>
        <span>
          {url.substring(0, url.indexOf("/api/") + 5)}
          {getRouteSpecificPart(url)}
        </span>
      </div>
      <div className="flex items-center">
        <button onClick={handleOpenEndpoint} className="ml-2">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
        <button onClick={handleCopyEndpoint} className="ml-2">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
};

export default EndpointView;
