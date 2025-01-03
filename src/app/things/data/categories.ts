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
    endpoints: [{ id: "Things", values: [{ id: "All" }, { id: "1" }] }],
  },
];
