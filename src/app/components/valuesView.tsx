import React from "react";
import Link from "next/link";
import { ThemeOptions } from "../utils/themeOptions";

interface ValuesViewProps {
  endpoint: string;
  data: { id: string; name?: string }[];
  basePath: string;
  theme: ThemeOptions;
}

function ValuesView({
  endpoint,
  data,
  basePath,
  theme,
}: ValuesViewProps) {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
      {data.map((item, index) => (
        <Link
          key={index}
          href={`/${basePath}/documentation/${endpoint}/${
            // TODO: generally use id for all APIs
            theme === ThemeOptions.Things ||
            theme === ThemeOptions.CryptoCraze ||
            theme === ThemeOptions.RickAndMorty
              ? item.id
              : item.name
              ? item.name
              : item.id
          }`}
          className={`flex min-h-12 items-center justify-center rounded px-3 py-2 text-center transition-colors ${getValueLinkClassName(
            theme
          )}`}
        >
          <span className="font-bold">
            {index + 1}.{" "}
            {item.name
              ? item.name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : `ID ${item.id}`}
          </span>
        </Link>
      ))}
    </div>
  );
}

function getValueLinkClassName(theme: ThemeOptions) {
  switch (theme) {
    case ThemeOptions.StarWars:
      return "border border-sw-yellow bg-black font-russo-one text-white hover:bg-sw-yellow hover:text-black";
    case ThemeOptions.Pokemon:
      return "border-2 border-pokemon-yellow bg-pokemon-blue font-press-start text-xs leading-relaxed text-pokemon-yellow hover:border-pokemon-blue hover:bg-pokemon-yellow hover:text-pokemon-blue";
    case ThemeOptions.RickAndMorty:
      return "border border-rm-green bg-black font-creepster text-xl text-white hover:bg-rm-green hover:text-black";
    case ThemeOptions.Things:
      return "border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-black";
    case ThemeOptions.CryptoCraze:
      return "border border-cc-gold bg-cc-dark text-cc-gold hover:bg-cc-gold hover:text-cc-dark";
  }
}

export default ValuesView;
