import React from "react";
import Link from "next/link";

interface SidebarMenuProps {
  selectedEndpoint: string | null;
  categories: Category[];
  basePath: string;
}

interface Category {
  id: string;
  endpoints?: Endpoint[];
}

interface Endpoint {
  id: string;
  values: Value[];
}

interface Value {
  id: string;
}

const formatEndpointId = (id: string) => id.toLowerCase().replace(/\s+/g, "-");

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  selectedEndpoint,
  categories,
  basePath,
}) => {
  const isEndpointAvailable = categories.some((category) =>
    category.endpoints?.some(
      (endpoint) => formatEndpointId(endpoint.id) === selectedEndpoint
    )
  );

  if (!isEndpointAvailable) {
    selectedEndpoint = "Information";
  }

  const selectedCategory =
    categories.find((category) =>
      category.endpoints?.some(
        (endpoint) => formatEndpointId(endpoint.id) === selectedEndpoint
      )
    )?.id || "Information";

  const theme = basePath.includes("swapi") ? "swapi" : "pokemon";

  return (
    <div
      className={`w-fit min-w-48 max-w-80 p-2 text-sm ${theme === "swapi" ? "bg-black" : "bg-gray-100"}`}
    >
      {categories.map((category) => (
        <div key={category.id} className="mb-1">
          <Link
            href={`/${basePath}/documentation/${category.endpoints ? formatEndpointId(category.endpoints[0].id) : ""}`}
          >
            <div
              className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-${theme === "swapi" ? "sw-yellow" : "pokemon-yellow"} ${selectedCategory === category.id ? `underline decoration-2 underline-offset-2 decoration-${theme === "swapi" ? "sw-yellow" : "pokemon-blue"}` : ""} ${theme === "swapi" ? "text-white" : ""}`}
            >
              {category.id}
            </div>
          </Link>
          {selectedCategory === category.id && category.endpoints && (
            <div className="pl-2">
              {category.endpoints.map((endpoint) => (
                <Link
                  href={`/${basePath}/documentation/${formatEndpointId(endpoint.id)}`}
                  key={`link-${endpoint.id}`}
                >
                  <div
                    className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-${theme === "swapi" ? "sw-yellow" : "pokemon-yellow"} ${selectedEndpoint === formatEndpointId(endpoint.id) ? `underline decoration-2 underline-offset-2 decoration-${theme === "swapi" ? "sw-yellow" : "pokemon-blue"}` : ""} ${theme === "swapi" ? "text-white" : ""}`}
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
