import { draculaAlteredForThings } from "./editorThemeThings";

const airportsBlue = "#075985";

export const draculaAlteredForAirports = {
  ...draculaAlteredForThings,
  name: "dracula + Changes for Airports",
  colors: {
    ...draculaAlteredForThings.colors,
    "editor.background": airportsBlue,
    "tab.activeBackground": airportsBlue,
    "panel.background": airportsBlue,
  },
};
