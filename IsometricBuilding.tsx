import React from 'react';

export interface IsometricBuildingProps {
  id: number;
  name: string;
  isUnlocked: boolean;
  isActive: boolean;
  onClick: () => void;
  position: { x: number; y: number };
  type: string;
}

export const IsometricBuilding: React.FC<IsometricBuildingProps> = ({ 
  id, 
  name, 
  isUnlocked, 
  isActive, 
  onClick, 
  position, 
  type 
}) => {
  const getBuildingStyle = () => {
    const baseClasses = "absolute cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-1";
    const stateClasses = isUnlocked 
      ? "opacity-100 saturate-100" 
      : "opacity-60 saturate-0 grayscale brightness-50";
    const activeClasses = isActive ? "ring-4 ring-yellow-400 ring-opacity-80 animate-pulse" : "";
    
    return `${baseClasses} ${stateClasses} ${activeClasses}`;
  };

  const getIsometricBuilding = () => {
    const windowGlow = isUnlocked ? "bg-yellow-200 shadow-yellow-200 shadow-sm" : "bg-gray-400";
    
    switch (type) {
      case 'atp-power-plant':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Main building */}
            <div className="relative">
              {/* Base structure */}
              <div className="w-20 h-16 bg-yellow-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-16 bg-yellow-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-16 bg-yellow-700 transform skew-y-12"></div>
              </div>
              
              {/* Cooling towers */}
              <div className="absolute -top-8 left-2 w-6 h-20 bg-gray-600 rounded-t-full">
                <div className="absolute top-0 left-0 w-6 h-4 bg-gray-500 rounded-t-full transform -skew-y-6"></div>
                {isUnlocked && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-white opacity-70 rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="absolute -top-6 right-2 w-6 h-18 bg-gray-600 rounded-t-full">
                <div className="absolute top-0 left-0 w-6 h-4 bg-gray-500 rounded-t-full transform -skew-y-6"></div>
                {isUnlocked && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-white opacity-70 rounded-full animate-pulse"></div>
                )}
              </div>
              
              {/* Windows */}
              <div className="absolute top-2 left-2 w-2 h-3 bg-yellow-200 rounded-sm"></div>
              <div className="absolute top-2 left-6 w-2 h-3 bg-yellow-200 rounded-sm"></div>
              <div className="absolute top-6 left-2 w-2 h-3 bg-yellow-200 rounded-sm"></div>
              <div className="absolute top-6 left-6 w-2 h-3 bg-yellow-200 rounded-sm"></div>
            </div>
          </div>
        );

      case 'photosynthesis-solar-park':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-12 left-4 w-24 h-8 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Greenhouse base */}
            <div className="relative">
              <div className="w-20 h-12 bg-green-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-12 bg-green-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-12 bg-green-700 transform skew-y-12"></div>
              </div>
              
              {/* Glass roof */}
              <div className="absolute -top-6 left-0 w-20 h-8 bg-blue-200 bg-opacity-60 transform skew-y-12 rounded-t-lg">
                <div className="absolute top-0 left-0 w-20 h-8 bg-blue-100 bg-opacity-40 transform -skew-y-12 skew-x-12 rounded-t-lg"></div>
              </div>
              
              {/* Solar panels */}
              <div className="absolute -top-4 left-2 w-6 h-3 bg-blue-900 transform rotate-12 rounded-sm"></div>
              <div className="absolute -top-4 right-2 w-6 h-3 bg-blue-900 transform -rotate-12 rounded-sm"></div>
              
              {/* Plants inside */}
              {isUnlocked && (
                <>
                  <div className="absolute top-2 left-3 w-1 h-4 bg-green-300 rounded-t-full"></div>
                  <div className="absolute top-2 left-6 w-1 h-3 bg-green-300 rounded-t-full"></div>
                  <div className="absolute top-2 left-9 w-1 h-5 bg-green-300 rounded-t-full"></div>
                </>
              )}
            </div>
          </div>
        );

      case 'chloroplast-research-center':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Base building */}
            <div className="relative">
              <div className="w-18 h-14 bg-gray-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-18 h-14 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-gray-700 transform skew-y-12"></div>
              </div>
              
              {/* Green dome */}
              <div className="absolute -top-8 left-1 w-16 h-16 bg-green-600 rounded-full">
                <div className="absolute top-2 left-2 w-12 h-12 bg-green-500 rounded-full"></div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-8 bg-green-500 rounded-t-full transform skew-x-6"></div>
              </div>
              
              {/* Lab windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-3 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-3 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-7 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-7 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'light-tower':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-20 left-4 w-16 h-8 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Tower base */}
            <div className="relative">
              <div className="w-12 h-8 bg-gray-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-12 h-8 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-3 h-8 bg-gray-700 transform skew-y-12"></div>
              </div>
              
              {/* Tower shaft */}
              <div className="absolute -top-16 left-4 w-4 h-20 bg-gray-500">
                <div className="absolute top-0 left-0 w-4 h-20 bg-gray-400 transform skew-x-6"></div>
                <div className="absolute top-0 right-0 w-1 h-20 bg-gray-600"></div>
              </div>
              
              {/* Light beacon */}
              <div className="absolute -top-20 left-2 w-8 h-6 bg-yellow-400 rounded-full">
                <div className="absolute top-0 left-0 w-8 h-3 bg-yellow-300 rounded-t-full transform skew-x-6"></div>
                {isUnlocked && (
                  <>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-200 opacity-70 animate-pulse"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-100 opacity-50 animate-pulse"></div>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-50 opacity-30 animate-pulse"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        );

      case 'calvin-cycle-factory':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Factory base */}
            <div className="relative">
              <div className="w-20 h-14 bg-purple-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-14 bg-purple-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-purple-700 transform skew-y-12"></div>
              </div>
              
              {/* Circular reactor */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-purple-800 rounded-full">
                <div className="absolute inset-1 border-2 border-purple-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                {isUnlocked && (
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-spin"></div>
                )}
              </div>
              
              {/* Pipes */}
              <div className="absolute top-2 left-2 w-2 h-8 bg-purple-500 rounded-t-sm"></div>
              <div className="absolute top-2 right-2 w-2 h-6 bg-purple-500 rounded-t-sm"></div>
              
              {/* Windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'organic-synthesis-lab':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-14 left-4 w-24 h-10 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Lab building */}
            <div className="relative">
              <div className="w-20 h-12 bg-blue-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-12 bg-blue-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-12 bg-blue-700 transform skew-y-12"></div>
              </div>
              
              {/* Lab equipment on roof */}
              <div className="absolute -top-6 left-3 w-3 h-8 bg-green-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-green-200 rounded-full animate-bounce"></div>
                )}
              </div>
              <div className="absolute -top-4 left-8 w-3 h-6 bg-red-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-red-200 rounded-full animate-bounce delay-150"></div>
                )}
              </div>
              <div className="absolute -top-5 right-3 w-3 h-7 bg-purple-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-purple-200 rounded-full animate-bounce delay-300"></div>
                )}
              </div>
              
              {/* Lab windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-2 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 left-7 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-7 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'digestive-diversity-museum':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-28 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Museum building */}
            <div className="relative">
              <div className="w-24 h-14 bg-orange-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-24 h-14 bg-orange-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-orange-700 transform skew-y-12"></div>
              </div>
              
              {/* Museum roof */}
              <div className="absolute -top-4 left-0 w-24 h-6 bg-orange-800 transform skew-y-12">
                <div className="absolute top-0 left-0 w-24 h-6 bg-orange-700 transform -skew-y-12 skew-x-12"></div>
              </div>
              
              {/* Entrance columns */}
              <div className="absolute top-2 left-4 w-2 h-10 bg-white rounded-sm"></div>
              <div className="absolute top-2 left-8 w-2 h-10 bg-white rounded-sm"></div>
              <div className="absolute top-2 left-12 w-2 h-10 bg-white rounded-sm"></div>
              <div className="absolute top-2 left-16 w-2 h-10 bg-white rounded-sm"></div>
              
              {/* Sculptures outside */}
              <div className="absolute top-14 left-1 w-3 h-4 bg-gray-500 rounded-sm"></div>
              <div className="absolute top-14 right-1 w-3 h-4 bg-gray-500 rounded-sm"></div>
              
              {/* Museum lights */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-14 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'digestive-anatomy-tower':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-20 left-4 w-16 h-10 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Tower base */}
            <div className="relative">
              <div className="w-12 h-8 bg-pink-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-12 h-8 bg-pink-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-3 h-8 bg-pink-700 transform skew-y-12"></div>
              </div>
              
              {/* Tower shaft */}
              <div className="absolute -top-16 left-2 w-8 h-20 bg-pink-500">
                <div className="absolute top-0 left-0 w-8 h-20 bg-pink-400 transform skew-x-6"></div>
                <div className="absolute top-0 right-0 w-2 h-20 bg-pink-600"></div>
              </div>
              
              {/* Anatomical displays */}
              {isUnlocked && (
                <>
                  <div className="absolute -top-14 left-3 w-3 h-2 bg-red-400 rounded-sm"></div>
                  <div className="absolute -top-10 left-3 w-3 h-2 bg-red-400 rounded-sm"></div>
                  <div className="absolute -top-6 left-3 w-3 h-2 bg-red-400 rounded-sm"></div>
                </>
              )}
              
              {/* Medical cross */}
              <div className="absolute -top-18 left-4 w-4 h-1 bg-red-500"></div>
              <div className="absolute -top-17 left-5 w-1 h-4 bg-red-500"></div>
            </div>
          </div>
        );

      case 'human-digestive-hospital':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Hospital building */}
            <div className="relative">
              <div className="w-20 h-14 bg-white transform skew-y-12 relative border-2 border-red-500">
                <div className="absolute top-0 left-0 w-20 h-14 bg-gray-100 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-gray-300 transform skew-y-12"></div>
              </div>
              
              {/* Hospital roof */}
              <div className="absolute -top-4 left-0 w-20 h-6 bg-red-600 transform skew-y-12">
                <div className="absolute top-0 left-0 w-20 h-6 bg-red-500 transform -skew-y-12 skew-x-12"></div>
              </div>
              
              {/* Red cross */}
              <div className="absolute -top-2 left-8 w-4 h-1 bg-red-600"></div>
              <div className="absolute -top-1 left-9 w-1 h-4 bg-red-600"></div>
              
              {/* Hospital windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-2 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
              
              {/* Ambulance */}
              <div className="absolute top-14 left-22 w-6 h-3 bg-white border border-red-400 rounded-sm">
                <div className="absolute top-1 left-1 w-1 h-1 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        );

      case 'chemical-digestion-lab':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-14 left-4 w-24 h-10 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Lab building */}
            <div className="relative">
              <div className="w-20 h-12 bg-cyan-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-12 bg-cyan-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-12 bg-cyan-700 transform skew-y-12"></div>
              </div>
              
              {/* Lab equipment */}
              <div className="absolute -top-6 left-4 w-2 h-8 bg-green-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-green-200 rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="absolute -top-8 left-8 w-2 h-10 bg-purple-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-purple-200 rounded-full animate-pulse delay-150"></div>
                )}
              </div>
              <div className="absolute -top-4 right-4 w-2 h-6 bg-blue-500 rounded-t-full">
                {isUnlocked && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-blue-200 rounded-full animate-pulse delay-300"></div>
                )}
              </div>
              
              {/* Windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-2 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 right-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 right-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'absorption-transport-station':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-28 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Station building */}
            <div className="relative">
              <div className="w-24 h-14 bg-teal-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-24 h-14 bg-teal-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-teal-700 transform skew-y-12"></div>
              </div>
              
              {/* Transport pipes */}
              <div className="absolute top-4 left-0 w-24 h-1 bg-blue-500 rounded"></div>
              <div className="absolute top-6 left-0 w-24 h-1 bg-blue-500 rounded"></div>
              <div className="absolute top-8 left-0 w-24 h-1 bg-blue-500 rounded"></div>
              <div className="absolute top-10 left-0 w-24 h-1 bg-blue-500 rounded"></div>
              
              {/* Vertical supports */}
              <div className="absolute left-2 top-0 w-1 h-14 bg-teal-700"></div>
              <div className="absolute left-8 top-0 w-1 h-14 bg-teal-700"></div>
              <div className="absolute left-14 top-0 w-1 h-14 bg-teal-700"></div>
              <div className="absolute right-2 top-0 w-1 h-14 bg-teal-700"></div>
              
              {/* Station lights */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-2 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-2 left-16 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
              
              {/* Transport vehicle */}
              <div className="absolute top-14 left-26 w-8 h-3 bg-blue-600 rounded-sm">
                <div className="absolute top-0 left-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-0 right-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        );

      case 'oxygen-respiration-powerhouse':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Powerhouse building */}
            <div className="relative">
              <div className="w-20 h-14 bg-red-700 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-14 bg-red-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-red-800 transform skew-y-12"></div>
              </div>
              
              {/* Industrial chimneys */}
              <div className="absolute -top-8 left-3 w-3 h-12 bg-gray-700 rounded-t-sm">
                {isUnlocked && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-300 opacity-70 rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="absolute -top-10 right-3 w-3 h-14 bg-gray-700 rounded-t-sm">
                {isUnlocked && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-300 opacity-70 rounded-full animate-pulse delay-200"></div>
                )}
              </div>
              
              {/* Industrial details */}
              <div className="absolute top-2 left-2 w-4 h-6 bg-red-800 rounded-sm"></div>
              <div className="absolute top-2 right-2 w-4 h-6 bg-red-800 rounded-sm"></div>
              
              {/* Windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'krebs-ets-reactor':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Reactor base */}
            <div className="relative">
              <div className="w-20 h-12 bg-indigo-700 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-12 bg-indigo-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-12 bg-indigo-800 transform skew-y-12"></div>
              </div>
              
              {/* Reactor dome */}
              <div className="absolute -top-8 left-4 w-12 h-12 bg-indigo-600 rounded-full">
                <div className="absolute inset-1 bg-indigo-500 rounded-full"></div>
                <div className="absolute inset-2 bg-indigo-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full">
                  {isUnlocked && (
                    <div className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-spin"></div>
                  )}
                </div>
                <div className="absolute top-0 left-0 w-12 h-6 bg-indigo-500 rounded-t-full transform skew-x-6"></div>
              </div>
              
              {/* Energy conduits */}
              <div className="absolute top-2 left-2 w-1 h-8 bg-yellow-400 rounded-sm"></div>
              <div className="absolute top-2 right-2 w-1 h-8 bg-yellow-400 rounded-sm"></div>
              
              {/* Control panels */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 right-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-8 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'fermentation-brewery':
        return (
          <div className="relative">
            {/* Building shadow */}
            <div className="absolute top-16 left-4 w-24 h-12 bg-black opacity-20 rounded-full transform skew-x-12"></div>
            
            {/* Brewery building */}
            <div className="relative">
              <div className="w-20 h-14 bg-amber-700 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-20 h-14 bg-amber-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-4 h-14 bg-amber-800 transform skew-y-12"></div>
              </div>
              
              {/* Fermentation tanks */}
              <div className="absolute -top-4 left-2 w-6 h-8 bg-amber-800 rounded-t-full">
                <div className="absolute top-0 left-0 w-6 h-4 bg-amber-700 rounded-t-full transform skew-x-6"></div>
                {isUnlocked && (
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-60 animate-bounce"></div>
                )}
              </div>
              <div className="absolute -top-6 right-2 w-6 h-10 bg-amber-800 rounded-t-full">
                <div className="absolute top-0 left-0 w-6 h-5 bg-amber-700 rounded-t-full transform skew-x-6"></div>
                {isUnlocked && (
                  <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-full opacity-60 animate-bounce delay-150"></div>
                )}
              </div>
              
              {/* Brewery details */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-4 bg-brown-700 rounded-sm"></div>
              
              {/* Barrels outside */}
              <div className="absolute top-14 left-22 w-3 h-4 bg-brown-600 rounded-sm"></div>
              <div className="absolute top-14 left-26 w-3 h-4 bg-brown-600 rounded-sm"></div>
              
              {/* Windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 left-8 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-4 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-8 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <div className="w-20 h-16 bg-gray-500 transform skew-y-12 relative">
              <div className="absolute top-0 left-0 w-20 h-16 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
              <div className="absolute top-0 right-0 w-4 h-16 bg-gray-600 transform skew-y-12"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
              {id}
            </div>
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
        zIndex: 100 - position.y, // Buildings further down appear in front
      }}
      onClick={onClick}
    >
      {getIsometricBuilding()}
      
      {/* Building label */}
      <div className="mt-4 text-center">
        <div className="text-xs bg-white bg-opacity-90 px-2 py-1 rounded shadow-md max-w-28 mx-auto backdrop-blur-sm">
          {name}
        </div>
      </div>
    </div>
  );
};