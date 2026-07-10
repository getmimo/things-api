export interface Value {
  id: string;
}

export interface Endpoint {
  id: string;
  values: Value[];
  description?: string;
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
        id: "Airports",
        values: [{ id: "All" }, { id: "6523" }],
        description: "Information on all available airports on this site",
      },
      {
        id: "Random Airport",
        values: [],
        description:
          "A randomly selected airport. A fresh selection is made for every request.",
      },
      {
        id: "Airport Frequencies",
        values: [{ id: "All" }, { id: "70518" }],
        description: "Communication frequencies for the available airports",
      },
      {
        id: "Airport Comments",
        values: [{ id: "All" }, { id: "609629" }],
        description: "Member comments for the available airports",
      },
      {
        id: "Runways",
        values: [{ id: "All" }, { id: "269408" }],
        description: "Runways for the available airports",
      },
      {
        id: "Navaids",
        values: [{ id: "All" }, { id: "85050" }],
        description: "Worldwide radio navigation aids",
      },
      {
        id: "Countries",
        values: [{ id: "All" }, { id: "302672" }],
        description: "List of the world's countries",
      },
      {
        id: "Regions",
        values: [{ id: "All" }, { id: "302811" }],
        description:
          "List of all countries' top-level administrative subdivisions (provinces, governorates, states, etc.)",
      },
    ],
  },
];

const formatEndpointId = (id: string) => id.toLowerCase().replace(/\s+/g, "-");

export function getEndpointDescription(
  endpointSlug: string,
): string | undefined {
  const endpointsCategory = categories.find((category) => category.endpoints);
  const endpoint = endpointsCategory?.endpoints?.find(
    (endpoint) => formatEndpointId(endpoint.id) === endpointSlug,
  );

  return endpoint?.description;
}
