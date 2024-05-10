import React from "react";

interface EndpointViewProps {
  endpoint: string;
  method: string;
}

const EndpointView: React.FC<EndpointViewProps> = ({ endpoint, method }) => {
  const handleOpenEndpoint = () => {
    window.open(endpoint, "_blank");
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(endpoint);
  };

  return (
    <div className="bg-pokemon-gray text-white p-2 h-12 w-fit rounded flex items-center">
      <span>{method}</span>
      <span className="w-2"></span>
      <span className="underline decoration-pokemon-yellow">{endpoint}</span>
    </div>
  );
};

export default EndpointView;
