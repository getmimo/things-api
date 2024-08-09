import React from "react";
import Link from "next/link";
import { ThemeOptions } from "../utils/themeOptions";

interface ValuesViewProps {
  endpoint: string;
  data: { id: string; name?: string }[];
  basePath: string;
  theme: ThemeOptions;
}

const ValuesView: React.FC<ValuesViewProps> = ({
  endpoint,
  data,
  basePath,
  theme,
}) => {
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <Link
          key={index}
          href={`/${basePath}/documentation/${endpoint}/${item.name ? item.name : item.id}`}
          className={`${theme === ThemeOptions.StarWars ? "bg-black" : "bg-background-gray"} text-white p-2 rounded flex items-center justify-center hover:bg-pokemon-yellow hover:text-background-gray`}
        >
          <span className="font-bold">
            {index + 1}.{" "}
            {item.name
              ? item.name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : `ID ${item.id}`}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ValuesView;
