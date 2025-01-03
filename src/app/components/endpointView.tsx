"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import { ThemeOptions } from "../utils/themeOptions";

interface EndpointViewProps {
  url: string;
  method: string;
  theme: ThemeOptions;
}

const EndpointView: React.FC<EndpointViewProps> = ({ url, method, theme }) => {
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
      return routePart;
    }
    return "";
  };

  const getBackgroundColor = () => {
    switch (theme) {
      case ThemeOptions.StarWars:
      case ThemeOptions.RickAndMorty:
        return "bg-black";
      default:
        return "bg-background-gray";
    }
  };

  return (
    <div
      className={`${getBackgroundColor()} text-white p-2 h-12 w-full rounded flex items-center justify-between`}
    >
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
