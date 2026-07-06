import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";
import { draculaAlteredForRickAndMorty } from "../editorThemeRickAndMorty";
import { draculaAlteredForThings } from "../editorThemeThings";
import { draculaAlteredForCryptoCraze } from "../editorThemeCryptoCraze";
import { draculaAlteredForAirports } from "../editorThemeAirports";
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
      : theme === ThemeOptions.Things
      ? draculaAlteredForThings
      : theme === ThemeOptions.Airports
      ? draculaAlteredForAirports
      : theme === ThemeOptions.CryptoCraze
      ? draculaAlteredForCryptoCraze
      : draculaAlteredForRickAndMorty;
  Code.theme = selectedTheme;

  return (
    <>
      <div
        className={`${
          theme === ThemeOptions.StarWars
            ? "bg-black"
            : theme === ThemeOptions.Pokemon
            ? "bg-background-gray"
            : theme === ThemeOptions.Things
            ? "bg-background-gray"
            : theme === ThemeOptions.Airports
            ? "bg-airports-blue"
            : theme === ThemeOptions.CryptoCraze
            ? "bg-cc-dark"
            : "bg-black"
        } text-white p-2 h-12 w-fit rounded flex items-center`}
      >
        {method}
        <span className="w-2"></span>
        <span>{endpoint.toLowerCase().split(" ").join("-")}</span>
      </div>
      <div
        className={`${
          theme === ThemeOptions.CryptoCraze
            ? "bg-cc-dark"
            : theme === ThemeOptions.Airports
            ? "bg-airports-blue"
            : theme === ThemeOptions.Things
            ? "bg-background-gray"
            : "bg-background-gray"
        } rounded-md -mt-5`}
      >
        <Code lang="js" lineNumbers>
          {theme === ThemeOptions.CryptoCraze
            ? `fetch("${url}", {
  headers: { "api-key": "YOUR_API_KEY" }
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`
            : `fetch("${url}")         
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`}
        </Code>
      </div>
    </>
  );
};

export default FetchView;
