export interface Value {
  id: string;
}

export interface Endpoint {
  id: string;
  values: Value[];
}

export interface Category {
  id: string;
  endpoints?: Endpoint[];
}

export const categories: Category[] = [
  {
    id: "Information",
  },
  {
    id: "Berries",
    endpoints: [
      { id: "Berry", values: [{ id: "All" }, { id: "Aguav" }] },
      { id: "Berry Firmness", values: [{ id: "All" }, { id: "Hard" }] },
      { id: "Berry Flavor", values: [{ id: "All" }, { id: "Bitter" }] },
    ],
  },
  {
    id: "Contests",
    endpoints: [
      { id: "Contest Type", values: [{ id: "All" }, { id: "Beauty" }] },
      { id: "Contest Effect", values: [{ id: "All" }, { id: "1" }] },
      { id: "Super Contest Effect", values: [{ id: "All" }, { id: "1" }] },
    ],
  },
  {
    id: "Encounters",
    endpoints: [
      {
        id: "Encounter Method",
        values: [{ id: "All" }, { id: "Berry Piles" }],
      },
      {
        id: "Encounter Condition",
        values: [{ id: "All" }, { id: "First Party Pokemon" }],
      },
      {
        id: "Encounter Condition Value",
        values: [{ id: "All" }, { id: "First Party Pokemon High Friendship" }],
      },
    ],
  },
  {
    id: "Evolution",
    endpoints: [
      { id: "Evolution Chain", values: [{ id: "All" }, { id: "1" }] },
      {
        id: "Evolution Trigger",
        values: [{ id: "All" }, { id: "Agile Style Move" }],
      },
    ],
  },
  {
    id: "Games",
    endpoints: [
      { id: "Generation", values: [{ id: "All" }, { id: "Generation I" }] },
      { id: "Pokedex", values: [{ id: "All" }, { id: "Blueberry" }] },
      { id: "Version", values: [{ id: "All" }, { id: "Alpha Sapphire" }] },
      {
        id: "Version Group",
        values: [{ id: "All" }, { id: "Black 2 White 2" }],
      },
    ],
  },
  {
    id: "Items",
    endpoints: [
      { id: "Item", values: [{ id: "All" }, { id: "Ability Capsule" }] },
      { id: "Item Attribute", values: [{ id: "All" }, { id: "Consumable" }] },
      { id: "Item Category", values: [{ id: "All" }, { id: "All Machines" }] },
      {
        id: "Item Fling Effect",
        values: [{ id: "All" }, { id: "Badly Poison" }],
      },
      { id: "Item Pocket", values: [{ id: "All" }, { id: "Battle" }] },
    ],
  },
  {
    id: "Locations",
    endpoints: [
      { id: "Location", values: [{ id: "All" }, { id: "Abandoned Ship" }] },
      {
        id: "Location Area",
        values: [{ id: "All" }, { id: "Abandoned Ship Area" }],
      },
      { id: "Pal Park Area", values: [{ id: "All" }, { id: "Field" }] },
      { id: "Region", values: [{ id: "All" }, { id: "Alola" }] },
    ],
  },
  {
    id: "Machines",
    endpoints: [{ id: "Machine", values: [{ id: "All" }, { id: "1" }] }],
  },
  {
    id: "Moves",
    endpoints: [
      {
        id: "Move",
        values: [{ id: "All" }, { id: "10 000 000 Volt Thunderbolt" }],
      },
      { id: "Move Ailment", values: [{ id: "All" }, { id: "Burn" }] },
      { id: "Move Battle Style", values: [{ id: "All" }, { id: "Attack" }] },
      { id: "Move Category", values: [{ id: "All" }, { id: "Ailment" }] },
      { id: "Move Damage Class", values: [{ id: "All" }, { id: "Physical" }] },
      {
        id: "Move Learn Method",
        values: [{ id: "All" }, { id: "Colosseum Purification" }],
      },
      { id: "Move Target", values: [{ id: "All" }, { id: "All Allies" }] },
    ],
  },
  {
    id: "Pokemon",
    endpoints: [
      { id: "Ability", values: [{ id: "All" }, { id: "Adaptability" }] },
      { id: "Characteristic", values: [{ id: "All" }, { id: "1" }] },
      { id: "Egg Group", values: [{ id: "All" }, { id: "Bug" }] },
      { id: "Gender", values: [{ id: "All" }, { id: "Female" }] },
      {
        id: "Growth Rate",
        values: [{ id: "All" }, { id: "Fast Then Very Slow" }],
      },
      { id: "Nature", values: [{ id: "All" }, { id: "Adamant" }] },
      { id: "Pokeathlon Stat", values: [{ id: "All" }, { id: "Jump" }] },
      { id: "Pokemon", values: [{ id: "All" }, { id: "Abomasnow Mega" }] },
      {
        id: "Pokemon Location Area",
        values: [{ id: "All" }, { id: "Abandoned Ship Area" }],
      },
      { id: "Pokemon Color", values: [{ id: "All" }, { id: "Black" }] },
      { id: "Pokemon Form", values: [{ id: "All" }, { id: "Abomasnow Mega" }] },
      { id: "Pokemon Habitat", values: [{ id: "All" }, { id: "Cave" }] },
      { id: "Pokemon Shape", values: [{ id: "All" }, { id: "Armor" }] },
      { id: "Pokemon Species", values: [{ id: "All" }, { id: "Abomasnow" }] },
      { id: "Stat", values: [{ id: "All" }, { id: "Accuracy" }] },
      { id: "Type", values: [{ id: "All" }, { id: "Bug" }] },
    ],
  },
];
