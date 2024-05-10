import React from "react";
import { categories } from "../data/categories";
import Link from "next/link";

interface SidebarMenuProps {
  selectedEndpoint: string | null;
}

const formatEndpointId = (id: string) => id.toLowerCase().replace(/\s+/g, "-");

const SidebarMenu: React.FC<SidebarMenuProps> = ({ selectedEndpoint }) => {
  const isEndpointAvailable = categories.some((category) =>
    category.endpoints?.some(
      (endpoint) =>
        formatEndpointId(endpoint.id) === selectedEndpoint
    )
  );

  if (!isEndpointAvailable) {
    selectedEndpoint = "Information";
  }

  const selectedCategory =
    categories.find((category) =>
      category.endpoints?.some(
        (endpoint) =>
          formatEndpointId(endpoint.id) === selectedEndpoint
      )
    )?.id || "Information";

  return (
    <div className="w-fit min-w-48 max-w-80 p-3 text-sm text-pokemon-gray">
      {categories.map((category) => (
        <div key={category.id} className="mb-1">
          <Link
            href={`/pokedex/documentation/${category.endpoints ? formatEndpointId(category.endpoints[0].id) : ""}`}
          >
            <div
              className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-pokemon-yellow ${selectedCategory === category.id ? "underline decoration-2 underline-offset-2 decoration-pokemon-blue" : ""}`}
            >
              {category.id}
            </div>
          </Link>
          {selectedCategory === category.id && category.endpoints && (
            <div className="pl-2">
              {category.endpoints.map((endpoint) => (
                <Link
                  href={`/pokedex/documentation/${formatEndpointId(endpoint.id)}`}
                  key={`link-${endpoint.id}`}
                >
                  <div
                    className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-pokemon-yellow ${selectedEndpoint === formatEndpointId(endpoint.id) ? "underline decoration-2 underline-offset-2 decoration-pokemon-blue" : ""}`}
                  >
                    {endpoint.id}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
