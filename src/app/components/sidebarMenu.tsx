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

function SidebarMenu({
  selectedEndpoint,
  categories,
  basePath,
}: SidebarMenuProps) {
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
    : basePath.includes("cryptocraze")
    ? "cryptocraze"
    : basePath.includes("airports")
    ? "airports"
    : basePath.includes("rickandmorty")
    ? "rickandmorty"
    : "pokemon";

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case "swapi":
        return {
          bg: "bg-black",
          hover: "hover:bg-sw-yellow hover:text-black hover:decoration-black",
          decoration: "decoration-sw-yellow",
          text: "text-white",
        };
      case "cryptocraze":
        return {
          bg: "bg-cc-dark",
          // Static classes so Tailwind keeps them in the build.
          hover: "hover:bg-cc-gold hover:text-cc-dark hover:decoration-black",
          decoration: "decoration-cc-gold",
          text: "text-cc-gold",
        };
      case "things":
        return {
          bg: "bg-white border-r border-gray-200",
          hover: "hover:bg-gray-100 hover:text-black hover:decoration-black",
          decoration: "decoration-black",
          text: "text-gray-700",
        };
      case "airports":
        return {
          bg: "bg-white border-r border-gray-200",
          hover:
            "hover:bg-airports-blue hover:text-white hover:decoration-airports-sky",
          decoration: "decoration-airports-sky",
          text: "text-airports-blue",
        };
      case "rickandmorty":
        return {
          bg: "bg-black font-creepster text-xl",
          hover: "hover:bg-rm-green hover:text-black hover:decoration-black",
          decoration: "decoration-rm-green",
          text: "text-white",
        };

      default:
        return {
          bg: "bg-gray-100",
          hover: "hover:bg-pokemon-yellow",
          decoration: "decoration-pokemon-blue",
          text: "",
        };
    }
  };

  const themeColors = getThemeColors(theme);

  return (
    <>
      <details
        className={`sticky top-14 z-10 w-full border-b p-3 text-sm sm:hidden ${themeColors.bg} ${themeColors.text}`}
      >
        <summary className="cursor-pointer select-none rounded-lg px-2 py-1 font-bold">
          Documentation menu
        </summary>
        <div className="mt-2 max-h-[60vh] overflow-y-auto">
          {renderMenuItems(
            categories,
            basePath,
            selectedCategory,
            selectedEndpoint,
            themeColors,
            true
          )}
        </div>
      </details>
      <div
        className={`sticky top-14 hidden max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] w-full min-w-48 max-w-80 flex-1 overflow-y-auto p-2 text-sm sm:block ${themeColors.bg}`}
      >
        {renderMenuItems(
          categories,
          basePath,
          selectedCategory,
          selectedEndpoint,
          themeColors,
          false
        )}
      </div>
    </>
  );
}

function renderMenuItems(
  categories: Category[],
  basePath: string,
  selectedCategory: string,
  selectedEndpoint: string | null,
  themeColors: { hover: string; decoration: string; text: string },
  showAllEndpoints: boolean
) {
  return categories.map((category) => (
    <div key={category.id} className="mb-1">
      <Link
        href={`/${basePath}/documentation/${
          category.endpoints ? formatEndpointId(category.endpoints[0].id) : ""
        }`}
      >
        <div
          className={`mb-1 cursor-pointer rounded-lg px-2 py-1 ${
            themeColors.hover
          } ${
            selectedCategory === category.id
              ? `underline decoration-2 underline-offset-2 ${themeColors.decoration}`
              : ""
          } ${themeColors.text}`}
        >
          {category.id}
        </div>
      </Link>
      {category.endpoints &&
        (showAllEndpoints || selectedCategory === category.id) && (
        <div className="pl-2">
          {category.endpoints.map((endpoint) => (
            <Link
              href={`/${basePath}/documentation/${formatEndpointId(
                endpoint.id
              )}`}
              key={`link-${endpoint.id}`}
            >
              <div
                className={`mb-1 cursor-pointer rounded-lg px-2 py-1 ${
                  themeColors.hover
                } ${
                  selectedEndpoint === formatEndpointId(endpoint.id)
                    ? `underline decoration-2 underline-offset-2 ${themeColors.decoration}`
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
  ));
}

export default SidebarMenu;
