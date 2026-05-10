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
      {
        id: "Coins",
        values: [
          { id: "All" },
          { id: "bitcoin" },
          { id: "ethereum" },
          { id: "solana" },
          { id: "cardano" },
          { id: "ripple" },
          { id: "dogecoin" },
          { id: "polkadot" },
          { id: "litecoin" },
          { id: "chainlink" },
          { id: "avalanche" },
        ],
      },
    ],
  },
];
