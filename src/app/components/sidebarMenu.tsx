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

  const theme = basePath.includes("swapi")
    ? "swapi"
    : basePath.includes("things")
    ? "things"
    : basePath.includes("rickandmorty")
    ? "rickandmorty"
    : "pokemon";

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case "swapi":
        return {
          bg: "bg-black",
          hover: "bg-sw-yellow",
          decoration: "sw-yellow",
          text: "text-white",
        };

      default:
        return {
          bg: "bg-gray-100",
          hover: "bg-pokemon-yellow",
          decoration: "pokemon-blue",
          text: "",
        };
    }
  };

  const themeColors = getThemeColors(theme);

  return (
    <div className={`w-fit min-w-48 max-w-80 p-2 text-sm ${themeColors.bg}`}>
      {categories.map((category) => (
        <div key={category.id} className="mb-1">
          <Link
            href={`/${basePath}/documentation/${
              category.endpoints
                ? formatEndpointId(category.endpoints[0].id)
                : ""
            }`}
          >
            <div
              className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:${
                themeColors.hover
              } ${
                selectedCategory === category.id
                  ? `underline decoration-2 underline-offset-2 decoration-${themeColors.decoration}`
                  : ""
              } ${themeColors.text}`}
            >
              {category.id}
            </div>
          </Link>
          {selectedCategory === category.id && category.endpoints && (
            <div className="pl-2">
              {category.endpoints.map((endpoint) => (
                <Link
                  href={`/${basePath}/documentation/${formatEndpointId(
                    endpoint.id
                  )}`}
                  key={`link-${endpoint.id}`}
                >
                  <div
                    className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:${
                      themeColors.hover
                    } ${
                      selectedEndpoint === formatEndpointId(endpoint.id)
                        ? `underline decoration-2 underline-offset-2 decoration-${themeColors.decoration}`
                        : ""
                    } ${themeColors.text}`}
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
