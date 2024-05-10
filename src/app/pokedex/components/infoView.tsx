import EndpointView from "../components/endpointView";
import React from "react";

interface InfoViewProps {
  selectedEndpoint: string | null;
  firstFile: string | null;
  fileData: any;
}

const InfoView: React.FC<InfoViewProps> = ({
  selectedEndpoint,
  firstFile,
  fileData,
}) => {
  return (
    <div className="w-full p-8 bg-white rounded-md">
      <h1 className="text-2xl font-press-start font-bold mb-4">Hi</h1>
      {selectedEndpoint ? (
        <EndpointView endpoint={selectedEndpoint} method="GET" />
      ) : null}
      <p>ToDo: Add more info!</p>
    </div>
  );
};

export default InfoView;