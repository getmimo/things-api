import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";

export enum ThemeOptions {
  StarWars = "starwars",
  Pokemon = "pokemon",
}

interface CodeViewProps {
  url: string;
  endpoint: string;
  method: string;
  theme: ThemeOptions;
}

const FetchView: React.FC<CodeViewProps> = ({ url, endpoint, method, theme }) => {
  const selectedTheme: any = theme === ThemeOptions.StarWars ? draculaAlteredForStarWars : draculaAlteredForPokemon;
  Code.theme = selectedTheme;

  return (
    <>
      <div className={`${theme === ThemeOptions.StarWars ? "bg-black" : "bg-background-gray"} text-white p-2 h-12 w-fit rounded flex items-center`}>
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
