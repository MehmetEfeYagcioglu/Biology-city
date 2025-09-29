import React from 'react';

export interface BuildingProps {
  id: number;
  name: string;
  isUnlocked: boolean;
  isActive: boolean;
  onClick: () => void;
  position: { x: number; y: number };
  type: string;
}

export const Building: React.FC<BuildingProps> = ({ 
  id, 
  name, 
  isUnlocked, 
  isActive, 
  onClick, 
  position, 
  type 
}) => {
  const getBuildingStyle = () => {
    const baseClasses = "absolute cursor-pointer transition-all duration-300 transform hover:scale-105";
    const stateClasses = isUnlocked 
      ? "opacity-100 saturate-100" 
      : "opacity-50 saturate-0 grayscale";
    const activeClasses = isActive ? "ring-4 ring-yellow-400 animate-pulse" : "";
    
    return `${baseClasses} ${stateClasses} ${activeClasses}`;
  };

  const getBuildingIcon = () => {
    switch (type) {
      case 'atp-power-plant':
        return (
          <div className="w-20 h-20 bg-yellow-500 rounded-lg relative">
            <div className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-600"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-yellow-600 rounded"></div>
          </div>
        );
      case 'photosynthesis-solar-park':
        return (
          <div className="w-20 h-20 bg-green-400 rounded-lg relative">
            <div className="absolute top-1 left-1 w-6 h-6 bg-blue-800 rounded transform rotate-12"></div>
            <div className="absolute top-1 right-1 w-6 h-6 bg-blue-800 rounded transform -rotate-12"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-green-600 rounded-b-lg"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        );
      case 'chloroplast-research-center':
        return (
          <div className="w-20 h-20 bg-green-600 rounded-full relative">
            <div className="absolute top-2 left-2 w-16 h-16 bg-green-500 rounded-full"></div>
            <div className="absolute top-4 left-4 w-12 h-12 bg-green-400 rounded-full"></div>
            <div className="absolute top-6 left-6 w-8 h-8 bg-green-300 rounded-full"></div>
          </div>
        );
      case 'light-tower':
        return (
          <div className="w-20 h-20 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-600 rounded-t-lg"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-200 opacity-70"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-100 opacity-50"></div>
          </div>
        );
      case 'calvin-cycle-factory':
        return (
          <div className="w-20 h-20 bg-purple-500 rounded-full relative">
            <div className="absolute inset-2 border-4 border-purple-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-700 rounded-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-spin"></div>
          </div>
        );
      case 'organic-synthesis-lab':
        return (
          <div className="w-20 h-20 bg-blue-500 rounded-lg relative">
            <div className="absolute top-2 left-2 w-4 h-8 bg-green-400 rounded-t-full"></div>
            <div className="absolute top-2 right-2 w-4 h-6 bg-red-400 rounded-t-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-blue-600 rounded"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-bounce"></div>
          </div>
        );
      case 'digestive-diversity-museum':
        return (
          <div className="w-20 h-20 bg-orange-500 rounded-lg relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-orange-600 rounded-t-lg"></div>
            <div className="absolute top-6 left-2 w-4 h-4 bg-yellow-400 rounded"></div>
            <div className="absolute top-6 right-2 w-4 h-4 bg-yellow-400 rounded"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-brown-600 rounded"></div>
          </div>
        );
      case 'digestive-anatomy-tower':
        return (
          <div className="w-20 h-20 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-20 bg-pink-500 rounded-t-lg"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded"></div>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-400 rounded"></div>
          </div>
        );
      case 'human-digestive-hospital':
        return (
          <div className="w-20 h-20 bg-white rounded-lg relative border-4 border-red-500">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-red-500 rounded"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-red-500 rounded"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded"></div>
          </div>
        );
      case 'chemical-digestion-lab':
        return (
          <div className="w-20 h-20 bg-cyan-500 rounded-lg relative">
            <div className="absolute top-2 left-3 w-3 h-6 bg-green-400 rounded-t-full"></div>
            <div className="absolute top-2 right-3 w-3 h-8 bg-purple-400 rounded-t-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-cyan-600 rounded"></div>
            <div className="absolute top-3 left-4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        );
      case 'absorption-transport-station':
        return (
          <div className="w-20 h-20 bg-teal-500 rounded-lg relative">
            <div className="absolute top-4 left-0 w-20 h-2 bg-blue-400 rounded"></div>
            <div className="absolute top-8 left-0 w-20 h-2 bg-blue-400 rounded"></div>
            <div className="absolute top-12 left-0 w-20 h-2 bg-blue-400 rounded"></div>
            <div className="absolute left-2 top-0 w-2 h-20 bg-teal-600 rounded"></div>
            <div className="absolute right-2 top-0 w-2 h-20 bg-teal-600 rounded"></div>
          </div>
        );
      case 'oxygen-respiration-powerhouse':
        return (
          <div className="w-20 h-20 bg-red-600 rounded-lg relative">
            <div className="absolute top-0 left-2 w-3 h-8 bg-gray-700 rounded-t-lg"></div>
            <div className="absolute top-0 right-2 w-3 h-8 bg-gray-700 rounded-t-lg"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-red-700 rounded"></div>
            <div className="absolute top-1 left-3 w-1 h-2 bg-white opacity-60 animate-pulse"></div>
            <div className="absolute top-1 right-3 w-1 h-2 bg-white opacity-60 animate-pulse"></div>
          </div>
        );
      case 'krebs-ets-reactor':
        return (
          <div className="w-20 h-20 bg-indigo-600 rounded-full relative">
            <div className="absolute inset-1 bg-indigo-500 rounded-full"></div>
            <div className="absolute inset-3 bg-indigo-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full animate-spin"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        );
      case 'fermentation-brewery':
        return (
          <div className="w-20 h-20 bg-amber-600 rounded-lg relative">
            <div className="absolute top-2 left-2 w-6 h-12 bg-amber-700 rounded-t-full"></div>
            <div className="absolute top-2 right-2 w-6 h-12 bg-amber-700 rounded-t-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-14 h-6 bg-brown-700 rounded"></div>
            <div className="absolute top-6 left-4 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce"></div>
          </div>
        );
      default:
        return (
          <div className="w-20 h-20 bg-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-xs">{id}</span>
          </div>
        );
    }
  };

  return (
    <div
      className={getBuildingStyle()}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={onClick}
    >
      {getBuildingIcon()}
      <div className="mt-2 text-center">
        <div className="text-xs bg-white px-2 py-1 rounded shadow-sm max-w-24 mx-auto">
          {name}
        </div>
      </div>
    </div>
  );
};