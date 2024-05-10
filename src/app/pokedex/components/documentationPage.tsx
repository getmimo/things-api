import React from "react";
import Navbar from "../components/navbar";
import SidebarMenu from "../components/sidebarMenu";
import InfoView from "../components/infoView";

interface DocumentationPageProps {
  selectedEndpoint: string | null;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({
  selectedEndpoint,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start">
        <div className="w-64 pl-4 pt-2 bg-gray-100">
          <SidebarMenu selectedEndpoint={selectedEndpoint} />
        </div>
        <main className="flex flex-col flex-grow items-start justify-center rounded-md mt-24">
          <div className="w-full p-8 bg-white rounded-md">
            <InfoView
              selectedEndpoint={selectedEndpoint}
              firstFile={null}
              fileData={null}
            />
          </div>
        </main>
        <div className="w-64"></div>
      </div>
    </>
  );
};

export default DocumentationPage;
