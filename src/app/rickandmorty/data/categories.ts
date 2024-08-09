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
      { id: "Character", values: [{ id: "All" }, { id: "1" }] },
      { id: "Episode", values: [{ id: "All" }, { id: "1" }] },
      { id: "Location", values: [{ id: "All" }, { id: "1" }] },
    ],
  },
];
