import React from "react";
import Link from "next/link";

interface ValuesViewProps {
  endpoint: string;
  data: { id: string; name?: string }[];
}

const ValuesView: React.FC<ValuesViewProps> = ({ endpoint, data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <Link
          key={index}
          href={`/pokedex/documentation/${endpoint}/${item.id}`}
          className="bg-pokemon-gray text-white p-2 rounded flex items-center justify-center hover:bg-pokemon-yellow hover:text-pokemon-gray"
        >
          <span className="font-bold">
            {index + 1}.{" "}
            {item.name
              ? item.name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : `ID ${item.id
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}`}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ValuesView;
