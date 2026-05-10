import { draculaAlteredForThings } from "./editorThemeThings";

// Crypto Craze reuses the Things editor theme but swaps the dark surface
// colors to the crypto craze dark (#0A0E10) so the rendered code blocks
// blend with the surrounding cc-dark labels and page background.
export const draculaAlteredForCryptoCraze = {
  ...draculaAlteredForThings,
  name: "dracula + Changes for Crypto Craze",
  colors: {
    ...draculaAlteredForThings.colors,
    "editor.background": "#0A0E10",
    "tab.activeBackground": "#0A0E10",
    "panel.background": "#0A0E10",
  },
};
