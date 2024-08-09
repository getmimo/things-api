import React from "react";
import { Code } from "bright";
import { draculaAlteredForStarWars } from "../editorThemeStarWars";
import { draculaAlteredForPokemon } from "../editorThemePokemon";
import { draculaAlteredForRickAndMorty } from "../editorThemeRickAndMorty";
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
        : draculaAlteredForRickAndMorty;
  Code.theme = selectedTheme;

  return (
    <>
      <div
        className={`${theme === ThemeOptions.StarWars || theme === ThemeOptions.RickAndMorty ? "bg-black" : "bg-background-gray"} text-white p-2 h-12 w-fit rounded flex items-center`}
      >
        response.json
      </div>
      <div
        className={`${theme === ThemeOptions.StarWars || theme === ThemeOptions.RickAndMorty ? "bg-black" : "bg-background-gray"} rounded-md max-h-96 -mt-2 overflow-scroll`}
      >
        <Code lang="json" lineNumbers>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Code>
      </div>
    </>
  );
};

export default ResponseView;
