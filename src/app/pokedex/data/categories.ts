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
      { id: "Berries" },
      { id: "Berry Firmnesses" },
      { id: "Berry Flavors" },
    ],
  },
  {
    id: "Contests",
    endpoints: [
      { id: "Contest Types" },
      { id: "Contest Effects" },
      { id: "Super Contest Effects" },
    ],
  },
  {
    id: "Encounters",
    endpoints: [
      { id: "Encounter Methods" },
      { id: "Encounter Conditions" },
      { id: "Encounter Condition Values" },
    ],
  },
  {
    id: "Evolution",
    endpoints: [{ id: "Evolution Chains" }, { id: "Evolution Triggers" }],
  },
  {
    id: "Games",
    endpoints: [
      { id: "Generations" },
      { id: "Pokedexes" },
      { id: "Version" },
      { id: "Version Groups" },
    ],
  },
  {
    id: "Items",
    endpoints: [
      { id: "Item" },
      { id: "Item Attributes" },
      { id: "Item Categories" },
      { id: "Item Fling Effects" },
      { id: "Item Pockets" },
    ],
  },
  {
    id: "Locations",
    endpoints: [
      { id: "Locations" },
      { id: "Location Areas" },
      { id: "Pal Park Areas" },
      { id: "Regions" },
    ],
  },
  {
    id: "Machines",
    endpoints: [{ id: "Machines" }],
  },
  {
    id: "Moves",
    endpoints: [
      { id: "Moves" },
      { id: "Move Ailments" },
      { id: "Move Battle Styles" },
      { id: "Move Categories" },
      { id: "Move Damage Classes" },
      { id: "Move Learn Methods" },
      { id: "Move Targets" },
    ],
  },
  {
    id: "Pokemon",
    endpoints: [
      { id: "Abilities" },
      { id: "Characteristics" },
      { id: "Egg Groups" },
      { id: "Genders" },
      { id: "Growth Rates" },
      { id: "Natures" },
      { id: "Pokeathlon Stats" },
      { id: "Pokemon" },
      { id: "Pokemon Location Areas" },
      { id: "Pokemon Colors" },
      { id: "Pokemon Forms" },
      { id: "Pokemon Habitats" },
      { id: "Pokemon Shapes" },
      { id: "Pokemon Species" },
      { id: "Stats" },
      { id: "Types" },
    ],
  },
];
