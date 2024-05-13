export interface Category {
  id: string;
  endpoints?: Array<{ id: string }>;
}

export const categories: Category[] = [
  {
    id: "Information",
  },
  {
    id: "Berries",
    endpoints: [
      { id: "Berry" },
      { id: "Berry Firmness" },
      { id: "Berry Flavor" },
    ],
  },
  {
    id: "Contests",
    endpoints: [
      { id: "Contest Type" },
      { id: "Contest Effect" },
      { id: "Super Contest Effect" },
    ],
  },
  {
    id: "Encounters",
    endpoints: [
      { id: "Encounter Method" },
      { id: "Encounter Condition" },
      { id: "Encounter Condition Value" },
    ],
  },
  {
    id: "Evolution",
    endpoints: [{ id: "Evolution Chain" }, { id: "Evolution Trigger" }],
  },
  {
    id: "Games",
    endpoints: [
      { id: "Generation" },
      { id: "Pokedex" },
      { id: "Version" },
      { id: "Version Group" },
    ],
  },
  {
    id: "Items",
    endpoints: [
      { id: "Item" },
      { id: "Item Attribute" },
      { id: "Item Category" },
      { id: "Item Fling Effect" },
      { id: "Item Pocket" },
    ],
  },
  {
    id: "Locations",
    endpoints: [
      { id: "Location" },
      { id: "Location Area" },
      { id: "Pal Park Area" },
      { id: "Region" },
    ],
  },
  {
    id: "Machines",
    endpoints: [{ id: "Machine" }],
  },
  {
    id: "Moves",
    endpoints: [
      { id: "Move" },
      { id: "Move Ailment" },
      { id: "Move Battle Style" },
      { id: "Move Category" },
      { id: "Move Damage Class" },
      { id: "Move Learn Method" },
      { id: "Move Target" },
    ],
  },
  {
    id: "Pokemon",
    endpoints: [
      { id: "Ability" },
      { id: "Characteristic" },
      { id: "Egg Group" },
      { id: "Gender" },
      { id: "Growth Rate" },
      { id: "Nature" },
      { id: "Pokeathlon Stat" },
      { id: "Pokemon" },
      { id: "Pokemon Location Area" },
      { id: "Pokemon Color" },
      { id: "Pokemon Form" },
      { id: "Pokemon Habitat" },
      { id: "Pokemon Shape" },
      { id: "Pokemon Species" },
      { id: "Stat" },
      { id: "Type" },
    ],
  },
];
