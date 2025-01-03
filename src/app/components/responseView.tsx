import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";
import { draculaAlteredForRickAndMorty } from "../editorThemeRickAndMorty";
import { draculaAlteredForThings } from "../editorThemeThings";
import { ThemeOptions } from "../utils/themeOptions";

interface ResponseViewProps {
  data: string;
  theme: ThemeOptions;
}

const ResponseView: React.FC<ResponseViewProps> = ({ data, theme }) => {
  const selectedTheme: any =
    theme === ThemeOptions.StarWars
      ? draculaAlteredForStarWars
      : theme === ThemeOptions.Pokemon
      ? draculaAlteredForPokemon
      : theme === ThemeOptions.Things
      ? draculaAlteredForThings
      : draculaAlteredForRickAndMorty;
  Code.theme = selectedTheme;

  const getBgColor = () => {
    switch (theme) {
      case ThemeOptions.StarWars:
      case ThemeOptions.RickAndMorty:
        return "bg-black";
      case ThemeOptions.Pokemon:
      case ThemeOptions.Things:
        return "bg-background-gray";
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
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Code>
      </div>
    </>
  );
};

export default ResponseView;
