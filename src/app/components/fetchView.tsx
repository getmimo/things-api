import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";
import { draculaAlteredForRickAndMorty } from "../editorThemeRickAndMorty";
import { ThemeOptions } from "../utils/themeOptions";

interface CodeViewProps {
  url: string;
  endpoint: string;
  method: string;
  theme: ThemeOptions;
}

const FetchView: React.FC<CodeViewProps> = ({
  url,
  endpoint,
  method,
  theme,
}) => {
  const selectedTheme: any =
    theme === ThemeOptions.StarWars
      ? draculaAlteredForStarWars
      : theme === ThemeOptions.Pokemon
        ? draculaAlteredForPokemon
        : draculaAlteredForRickAndMorty;
  Code.theme = selectedTheme;

  return (
    <>
      <div
        className={`${theme === ThemeOptions.StarWars ? "bg-black" : theme === ThemeOptions.Pokemon ? "bg-background-gray" : "bg-black"} text-white p-2 h-12 w-fit rounded flex items-center`}
      >
        {method}
        <span className="w-2"></span>
        <span>{endpoint.toLowerCase().split(" ").join("-")}</span>
      </div>
      <div className="bg-background-gray rounded-md -mt-5">
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
