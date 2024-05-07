"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";

import { categories } from "../data/categories";

const APIPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.id
  );
  const [selectedEndpoint, setselectedEndpoint] = useState<string | null>(
    categories[0]?.endpoints?.[0]?.id || null
  );

  const handleEndpointSelect = (
    categoryId: string,
    endpointId: string | null
  ) => {
    setSelectedCategory(categoryId);
    setselectedEndpoint(endpointId);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-64 pl-4 pt-2 bg-gray-100">
          <SidebarMenu onEndpointSelect={handleEndpointSelect} />
        </div>
        <main className="flex flex-col flex-grow items-start justify-center rounded-md mt-24">
          <div className="w-full p-8 bg-white rounded-md">
            <h1 className="text-2xl font-press-start font-bold mb-4">
              {selectedCategory}
            </h1>
            {selectedEndpoint && (
              <p>
                Selected category: {selectedCategory}
                <br />
                Selected edndpoint: {selectedEndpoint}
              </p>
            )}
            {!selectedEndpoint && <p>Selected Category: {selectedCategory}</p>}
          </div>
        </main>
        <div className="w-64"></div>
      </div>
    </>
  );
};

interface SidebarMenuProps {
  onEndpointSelect?: (categoryId: string, endpointId: string | null) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onEndpointSelect }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedEndpoint, setselectedEndpoint] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    if (openCategory === id) {
      return;
    }

    const isOpening = openCategory !== id;
    setOpenCategory(isOpening ? id : null);

    const firstendpointId = isOpening
      ? categories.find((category) => category.id === id)?.endpoints?.[0]?.id ||
        null
      : null;
    setselectedEndpoint(firstendpointId);

    onEndpointSelect && onEndpointSelect(id, firstendpointId || null);
  };

  const selectEndpoint = (id: string) => {
    setselectedEndpoint(id);
    onEndpointSelect && onEndpointSelect(openCategory || "", id);
  };

  return (
    <div className="w-fit min-w-48 max-w-80 p-3 text-sm text-pokemon-gray">
      {categories.map((category) => (
        <div key={category.id} className="mb-1">
          <div
            className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-pokemon-yellow ${openCategory === category.id ? "underline decoration-2 underline-offset-2 decoration-pokemon-blue" : ""}`}
            onClick={() => toggleCategory(category.id)}
          >
            {category.id}
          </div>

          {openCategory === category.id && category.endpoints && (
            <div className="pl-2">
              {category.endpoints.map((endpoint) => (
                <div
                  key={endpoint.id}
                  className={`cursor-pointer px-2 py-1 mb-1 rounded-lg hover:bg-pokemon-yellow ${selectedEndpoint === endpoint.id ? "underline decoration-2 underline-offset-2 decoration-pokemon-blue" : ""}`}
                  onClick={() => selectEndpoint(endpoint.id)}
                >
                  {endpoint.id}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default APIPage;
