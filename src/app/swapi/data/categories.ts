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
    id: "Endpoints",
    endpoints: [
      { id: "Films", values: [{ id: "All" }, { id: "1" }] },
      { id: "People", values: [{ id: "All" }, { id: "Ackbar" }] },
      { id: "Planets", values: [{ id: "All" }, { id: "Alderaan" }] },
      { id: "Species", values: [{ id: "All" }, { id: "Aleena" }] },
      { id: "Starships", values: [{ id: "All" }, { id: "A-wing" }] },
      {
        id: "Vehicles",
        values: [{ id: "All" }, { id: "Armored Assault Tank" }],
      },
    ],
  },
];
