import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";
import { draculaAlteredForRickAndMorty } from "../editorThemeRickAndMorty";
import { draculaAlteredForThings } from "../editorThemeThings";
import { draculaAlteredForCryptoCraze } from "../editorThemeCryptoCraze";
import { draculaAlteredForAirports } from "../editorThemeAirports";
import { ThemeOptions } from "../utils/themeOptions";

interface ResponseViewProps {
  data: unknown;
  theme: ThemeOptions;
  truncated?: boolean;
}

const ResponseView: React.FC<ResponseViewProps> = ({
  data,
  theme,
  truncated = false,
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
  const formattedData = JSON.stringify(data, null, 2);
  const displayedData =
    truncated && Array.isArray(data)
      ? formattedData.replace(/\n\]$/, ",\n  ...\n]")
      : formattedData;

  const getBgColor = () => {
    switch (theme) {
      case ThemeOptions.StarWars:
      case ThemeOptions.RickAndMorty:
        return "bg-black";
      case ThemeOptions.Pokemon:
        return "bg-background-gray";
      case ThemeOptions.Things:
        return "bg-background-gray";
      case ThemeOptions.CryptoCraze:
        return "bg-cc-dark";
      case ThemeOptions.Airports:
        return "bg-airports-blue";
      default:
        return "bg-background-gray";
    }
  };

  return (
    <>
      <div
          className={`${getBgColor()} text-white p-2 h-12 w-fit rounded flex items-center`}
      >
        response.json
      </div>
      <div
        className={`${getBgColor()} rounded-md max-h-96 -mt-2 overflow-scroll`}
      >
        <Code lang="json" lineNumbers>
          <pre>{displayedData}</pre>
        </Code>
      </div>
    </>
  );
};

export default ResponseView;
