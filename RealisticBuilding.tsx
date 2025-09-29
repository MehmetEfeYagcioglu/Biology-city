import React from 'react';

export interface RealisticBuildingProps {
  id: number;
  name: string;
  isUnlocked: boolean;
  isActive: boolean;
  onClick: () => void;
  position: { x: number; y: number };
  type: string;
}

const getTurkishName = (type: string): string => {
  const nameMap: { [key: string]: string } = {
    'atp-power-plant': 'ATP Enerji Santrali',
    'photosynthesis-solar-park': 'Fotosentez Güneş Parkı',
    'chloroplast-research-center': 'Kloroplast Araştırma Merkezi',
    'light-tower': 'Işık Kulesi Gözlemevi',
    'calvin-cycle-factory': 'Calvin Döngüsü Fabrikası',
    'organic-synthesis-lab': 'Organik Sentez Laboratuvarı',
    'digestive-diversity-museum': 'Sindirim Çeşitliliği Müzesi',
    'digestive-anatomy-tower': 'Sindirim Anatomisi Kulesi',
    'human-digestive-hospital': 'İnsan Sindirim Hastanesi',
    'chemical-digestion-lab': 'Kimyasal Sindirim Laboratuvarı',
    'absorption-transport-station': 'Emilim Taşıma İstasyonu',
    'oxygen-respiration-powerhouse': 'Oksijen Solunum Güç Merkezi',
    'krebs-ets-reactor': 'Krebs ETS Reaktörü',
    'fermentation-brewery': 'Fermantasyon Bira Fabrikası'
  };
  return nameMap[type] || type;
};

export const RealisticBuilding: React.FC<RealisticBuildingProps> = ({ 
  id, 
  name, 
  isUnlocked, 
  isActive, 
  onClick, 
  position, 
  type 
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const turkishName = getTurkishName(type);
  const getBuildingStyle = () => {
    const baseClasses = "absolute cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-1";
    const stateClasses = isUnlocked 
      ? "opacity-100 saturate-100" 
      : "opacity-60 saturate-0 grayscale brightness-75";
    const activeClasses = isActive ? "ring-4 ring-yellow-400 ring-opacity-80" : "";
    
    return `${baseClasses} ${stateClasses} ${activeClasses}`;
  };

  const getRealisticBuilding = () => {
    const windowGlow = isUnlocked ? "bg-yellow-200 shadow-yellow-200 shadow-sm" : "bg-gray-500";
    
    switch (type) {
      case 'atp-power-plant':
        return (
          <div className="relative">
            {/* Main power plant structure */}
            <div className="relative">
              {/* Base building */}
              <div className="w-28 h-20 bg-gray-700 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-28 h-20 bg-gray-600 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-20 bg-gray-800 transform skew-y-12"></div>
              </div>
              
              {/* Cooling towers */}
              <div className="absolute -top-12 left-4 w-8 h-28 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-full">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 rounded-t-full transform -skew-y-6"></div>
                <div className="absolute top-2 left-1 w-6 h-4 bg-gray-400 rounded-t-full"></div>
                {isUnlocked && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-white opacity-70 rounded-full"></div>
                )}
              </div>
              <div className="absolute -top-10 right-4 w-8 h-26 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-full">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 rounded-t-full transform -skew-y-6"></div>
                <div className="absolute top-2 left-1 w-6 h-4 bg-gray-400 rounded-t-full"></div>
                {isUnlocked && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-white opacity-70 rounded-full"></div>
                )}
              </div>
              
              {/* Transmission lines */}
              <div className="absolute -top-6 left-24 w-1 h-12 bg-gray-800"></div>
              <div className="absolute -top-4 left-24 w-12 h-1 bg-gray-800"></div>
              
              {/* Industrial details */}
              <div className="absolute top-4 left-3 w-6 h-8 bg-gray-800 rounded-sm"></div>
              <div className="absolute top-4 right-3 w-6 h-8 bg-gray-800 rounded-sm"></div>
              
              {/* Windows with lights */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-18 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-18 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'photosynthesis-solar-park':
        return (
          <div className="relative">
            {/* Modern greenhouse complex with multiple domes */}
            <div className="relative">
              {/* Main base structure */}
              <div className="w-36 h-20 bg-gradient-to-r from-green-800 to-green-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-36 h-20 bg-gradient-to-r from-green-600 to-green-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-7 h-20 bg-green-900 transform skew-y-12"></div>
              </div>
              
              {/* Multiple glass domes */}
              <div className="absolute -top-12 left-2 w-12 h-12 bg-gradient-to-t from-emerald-400 to-emerald-200 rounded-full opacity-90 shadow-md">
                <div className="absolute top-1 left-1 w-10 h-10 bg-gradient-to-t from-green-300 to-green-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-6 bg-emerald-300 rounded-t-full transform skew-x-3 opacity-70"></div>
                {/* Glass framework */}
                <div className="absolute top-2 left-0 w-12 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-5 left-0 w-12 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-8 left-0 w-12 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
              </div>
              
              <div className="absolute -top-14 left-12 w-14 h-14 bg-gradient-to-t from-emerald-400 to-emerald-200 rounded-full opacity-90 shadow-md">
                <div className="absolute top-1 left-1 w-12 h-12 bg-gradient-to-t from-green-300 to-green-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-14 h-7 bg-emerald-300 rounded-t-full transform skew-x-3 opacity-70"></div>
                <div className="absolute top-2 left-0 w-14 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-5 left-0 w-14 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-8 left-0 w-14 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-11 left-0 w-14 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
              </div>
              
              <div className="absolute -top-10 right-2 w-10 h-10 bg-gradient-to-t from-emerald-400 to-emerald-200 rounded-full opacity-90 shadow-md">
                <div className="absolute top-1 left-1 w-8 h-8 bg-gradient-to-t from-green-300 to-green-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-10 h-5 bg-emerald-300 rounded-t-full transform skew-x-3 opacity-70"></div>
                <div className="absolute top-2 left-0 w-10 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-5 left-0 w-10 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
              </div>
              
              {/* Advanced solar panel arrays */}
              <div className="absolute -top-8 left-28 w-10 h-6 bg-gradient-to-b from-blue-900 to-blue-800 transform rotate-15 rounded-sm shadow-md">
                <div className="absolute inset-0.5 border border-blue-700 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-8 h-1 bg-blue-600 rounded-sm"></div>
                <div className="absolute top-3 left-1 w-8 h-1 bg-blue-600 rounded-sm"></div>
                {isUnlocked && <div className="absolute inset-0 bg-blue-400 opacity-30 rounded-sm animate-pulse"></div>}
              </div>
              <div className="absolute -top-6 left-32 w-10 h-6 bg-gradient-to-b from-blue-900 to-blue-800 transform rotate-12 rounded-sm shadow-md">
                <div className="absolute inset-0.5 border border-blue-700 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-8 h-1 bg-blue-600 rounded-sm"></div>
                <div className="absolute top-3 left-1 w-8 h-1 bg-blue-600 rounded-sm"></div>
                {isUnlocked && <div className="absolute inset-0 bg-blue-400 opacity-30 rounded-sm animate-pulse"></div>}
              </div>
              
              {/* Cooling and ventilation systems */}
              <div className="absolute top-2 left-6 w-3 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-sm">
                <div className="absolute top-0 left-0.5 w-2 h-3 bg-gray-400 rounded-sm"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-4 bg-white opacity-60 rounded-full animate-float"></div>}
              </div>
              <div className="absolute top-1 left-18 w-3 h-13 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-sm">
                <div className="absolute top-0 left-0.5 w-2 h-3 bg-gray-400 rounded-sm"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-4 bg-white opacity-60 rounded-full animate-float"></div>}
              </div>
              
              {/* Entrance and loading bay */}
              <div className="absolute top-20 left-6 w-24 h-6 bg-gradient-to-r from-gray-600 to-gray-500 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-24 h-6 bg-gray-400 transform -skew-y-3 skew-x-3"></div>
                <div className="absolute top-2 left-4 w-4 h-2 bg-yellow-400 rounded-sm"></div>
                <div className="absolute top-2 left-12 w-4 h-2 bg-yellow-400 rounded-sm"></div>
                <div className="absolute top-2 left-20 w-4 h-2 bg-yellow-400 rounded-sm"></div>
              </div>
              
              {/* Thriving plants visible inside domes */}
              {isUnlocked && (
                <>
                  <div className="absolute top-4 left-5 w-1 h-8 bg-green-400 rounded-t-full animate-sway"></div>
                  <div className="absolute top-2 left-7 w-1 h-6 bg-green-500 rounded-t-full animate-sway delay-100"></div>
                  <div className="absolute top-3 left-16 w-1 h-9 bg-green-400 rounded-t-full animate-sway delay-200"></div>
                  <div className="absolute top-1 left-19 w-1 h-7 bg-green-500 rounded-t-full animate-sway delay-300"></div>
                  <div className="absolute top-5 left-26 w-1 h-5 bg-green-400 rounded-t-full animate-sway delay-400"></div>
                  <div className="absolute top-3 left-29 w-1 h-6 bg-green-500 rounded-t-full animate-sway delay-500"></div>
                </>
              )}
            </div>
          </div>
        );

      case 'chloroplast-research-center':
        return (
          <div className="relative">
            {/* Modern research facility */}
            <div className="relative">
              {/* Base building */}
              <div className="w-24 h-18 bg-gray-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-24 h-18 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-5 h-18 bg-gray-700 transform skew-y-12"></div>
              </div>
              
              {/* Iconic green dome */}
              <div className="absolute -top-12 left-2 w-20 h-20 bg-gradient-to-t from-green-700 to-green-500 rounded-full">
                <div className="absolute top-3 left-3 w-14 h-14 bg-gradient-to-t from-green-600 to-green-400 rounded-full"></div>
                <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-t from-green-500 to-green-300 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-10 bg-green-500 rounded-t-full transform skew-x-6 opacity-80"></div>
                
                {/* Dome structure lines */}
                <div className="absolute top-2 left-0 w-20 h-1 bg-green-800 rounded-full opacity-30"></div>
                <div className="absolute top-6 left-0 w-20 h-1 bg-green-800 rounded-full opacity-30"></div>
                <div className="absolute top-10 left-0 w-20 h-1 bg-green-800 rounded-full opacity-30"></div>
                <div className="absolute top-14 left-0 w-20 h-1 bg-green-800 rounded-full opacity-30"></div>
              </div>
              
              {/* Research equipment antennas */}
              <div className="absolute -top-20 left-10 w-1 h-8 bg-gray-800"></div>
              <div className="absolute -top-18 left-9 w-3 h-1 bg-gray-800"></div>
              <div className="absolute -top-20 left-10 w-1 h-6 bg-gray-800"></div>
              <div className="absolute -top-18 left-9 w-3 h-1 bg-gray-800"></div>
              
              {/* Lab windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-3 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 left-7 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 left-11 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-4 left-15 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-3 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-7 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-11 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-15 w-2 h-3 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'light-tower':
        return (
          <div className="relative">
            {/* Observatory tower */}
            <div className="relative">
              {/* Tower base */}
              <div className="w-16 h-12 bg-gray-600 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-16 h-12 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-3 h-12 bg-gray-700 transform skew-y-12"></div>
              </div>
              
              {/* Tower shaft sections */}
              <div className="absolute -top-8 left-5 w-6 h-16 bg-gradient-to-t from-gray-600 to-gray-400">
                <div className="absolute top-0 left-0 w-6 h-16 bg-gray-500 transform skew-x-6"></div>
                <div className="absolute top-0 right-0 w-1 h-16 bg-gray-700"></div>
                {/* Tower segments */}
                <div className="absolute top-4 left-0 w-6 h-1 bg-gray-700"></div>
                <div className="absolute top-8 left-0 w-6 h-1 bg-gray-700"></div>
                <div className="absolute top-12 left-0 w-6 h-1 bg-gray-700"></div>
              </div>
              
              {/* Upper tower section */}
              <div className="absolute -top-20 left-4 w-8 h-12 bg-gradient-to-t from-gray-500 to-gray-300">
                <div className="absolute top-0 left-0 w-8 h-12 bg-gray-400 transform skew-x-6"></div>
                <div className="absolute top-0 right-0 w-1 h-12 bg-gray-600"></div>
              </div>
              
              {/* Observatory dome/light beacon */}
              <div className="absolute -top-28 left-2 w-12 h-8 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-full">
                <div className="absolute top-0 left-0 w-12 h-4 bg-yellow-400 rounded-t-full transform skew-x-6"></div>
                <div className="absolute top-2 left-2 w-8 h-4 bg-yellow-200 rounded-full"></div>
                
                {isUnlocked && (
                  <>
                    {/* Light beams */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-200 opacity-70"></div>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-100 opacity-50"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-50 opacity-30"></div>
                    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-yellow-50 opacity-20"></div>
                  </>
                )}
              </div>
              
              {/* Support structures */}
              <div className="absolute -top-16 left-1 w-1 h-8 bg-gray-700 transform rotate-12"></div>
              <div className="absolute -top-16 right-1 w-1 h-8 bg-gray-700 transform -rotate-12"></div>
            </div>
          </div>
        );

      case 'calvin-cycle-factory':
        return (
          <div className="relative">
            {/* Advanced biochemical processing facility */}
            <div className="relative">
              {/* Main industrial complex */}
              <div className="w-32 h-20 bg-gradient-to-r from-purple-800 to-purple-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-32 h-20 bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-7 h-20 bg-purple-900 transform skew-y-12"></div>
              </div>
              
              {/* Massive central Calvin cycle reactor */}
              <div className="absolute -top-12 left-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full shadow-xl">
                <div className="absolute inset-1 border-2 border-purple-300 rounded-full opacity-60"></div>
                <div className="absolute inset-3 border-2 border-purple-200 rounded-full opacity-40"></div>
                <div className="absolute inset-5 border border-purple-100 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md">
                  <div className="absolute inset-1 bg-purple-200 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                {isUnlocked && (
                  <>
                    <div className="absolute inset-0 border-3 border-yellow-400 rounded-full animate-spin opacity-80"></div>
                    <div className="absolute inset-2 border-2 border-green-400 rounded-full animate-spin reverse opacity-60"></div>
                    <div className="absolute inset-4 border border-blue-400 rounded-full animate-spin opacity-40"></div>
                  </>
                )}
              </div>
              
              {/* Multiple processing towers */}
              <div className="absolute top-2 left-2 w-4 h-16 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-purple-400 rounded-sm"></div>
                <div className="absolute top-6 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-10 left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                {isUnlocked && <div className="absolute -top-3 left-1.5 w-1 h-5 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute top-1 right-2 w-4 h-14 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-purple-400 rounded-sm"></div>
                <div className="absolute top-5 left-1 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
                <div className="absolute top-9 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                {isUnlocked && <div className="absolute -top-3 left-1.5 w-1 h-5 bg-white opacity-70 rounded-full animate-float delay-500"></div>}
              </div>
              
              <div className="absolute top-4 left-26 w-4 h-12 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-purple-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-400"></div>
                <div className="absolute top-8 left-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-600"></div>
                {isUnlocked && <div className="absolute -top-3 left-1.5 w-1 h-5 bg-white opacity-70 rounded-full animate-float delay-700"></div>}
              </div>
              
              {/* Complex pipe network */}
              <div className="absolute top-8 left-6 w-12 h-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-2 w-8 h-2 bg-purple-400 rounded-full"></div>
                {isUnlocked && <div className="absolute top-1 left-1 w-2 h-1 bg-cyan-300 rounded-full animate-pulse"></div>}
              </div>
              <div className="absolute top-12 left-18 w-8 h-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-6 h-2 bg-purple-400 rounded-full"></div>
                {isUnlocked && <div className="absolute top-1 left-6 w-2 h-1 bg-green-300 rounded-full animate-pulse delay-300"></div>}
              </div>
              
              {/* Control room and monitoring systems */}
              <div className="absolute top-20 left-4 w-24 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-24 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                {isUnlocked && (
                  <>
                    <div className={`absolute top-2 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-2 left-6 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-2 left-10 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-2 left-14 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-2 left-18 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-2 left-22 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  </>
                )}
              </div>
            </div>
          </div>
        );

      case 'fermentation-brewery':
        return (
          <div className="relative">
            {/* Industrial-scale fermentation facility */}
            <div className="relative">
              {/* Main brewery complex */}
              <div className="w-32 h-20 bg-gradient-to-r from-amber-800 to-amber-700 transform skew-y-12 relative shadow-xl">
                <div className="absolute top-0 left-0 w-32 h-20 bg-gradient-to-r from-amber-600 to-amber-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-7 h-20 bg-amber-900 transform skew-y-12"></div>
              </div>
              
              {/* Massive fermentation vessels array */}
              <div className="absolute -top-12 left-2 w-10 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full shadow-lg">
                <div className="absolute top-0 left-0 w-10 h-10 bg-amber-500 rounded-t-full transform skew-x-4"></div>
                <div className="absolute top-2 left-1 w-8 h-8 bg-amber-400 rounded-t-full"></div>
                <div className="absolute top-4 left-2 w-6 h-6 bg-amber-300 rounded-t-full"></div>
                {/* Fermentation activity indicators */}
                {isUnlocked && (
                  <>
                    <div className="absolute top-6 left-4 w-2 h-3 bg-white rounded-full opacity-60 animate-bounce"></div>
                    <div className="absolute top-10 left-3 w-1 h-2 bg-yellow-200 rounded-full opacity-80 animate-bounce delay-100"></div>
                    <div className="absolute top-14 left-5 w-1 h-2 bg-amber-200 rounded-full opacity-70 animate-bounce delay-200"></div>
                  </>
                )}
                {/* Vessel details */}
                <div className="absolute top-8 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-12 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-16 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
              </div>
              
              <div className="absolute -top-16 left-14 w-12 h-24 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full shadow-lg">
                <div className="absolute top-0 left-0 w-12 h-12 bg-amber-500 rounded-t-full transform skew-x-4"></div>
                <div className="absolute top-2 left-1 w-10 h-10 bg-amber-400 rounded-t-full"></div>
                <div className="absolute top-4 left-2 w-8 h-8 bg-amber-300 rounded-t-full"></div>
                {isUnlocked && (
                  <>
                    <div className="absolute top-8 left-5 w-2 h-4 bg-white rounded-full opacity-60 animate-bounce delay-150"></div>
                    <div className="absolute top-14 left-4 w-1 h-3 bg-yellow-200 rounded-full opacity-80 animate-bounce delay-250"></div>
                    <div className="absolute top-18 left-6 w-1 h-2 bg-amber-200 rounded-full opacity-70 animate-bounce delay-350"></div>
                  </>
                )}
                <div className="absolute top-10 left-0 w-12 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-15 left-0 w-12 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-20 left-0 w-12 h-0.5 bg-amber-800 rounded-full"></div>
              </div>
              
              <div className="absolute -top-10 right-2 w-10 h-18 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full shadow-lg">
                <div className="absolute top-0 left-0 w-10 h-9 bg-amber-500 rounded-t-full transform skew-x-4"></div>
                <div className="absolute top-2 left-1 w-8 h-7 bg-amber-400 rounded-t-full"></div>
                <div className="absolute top-4 left-2 w-6 h-5 bg-amber-300 rounded-t-full"></div>
                {isUnlocked && (
                  <>
                    <div className="absolute top-6 left-4 w-2 h-3 bg-white rounded-full opacity-60 animate-bounce delay-300"></div>
                    <div className="absolute top-10 left-3 w-1 h-2 bg-yellow-200 rounded-full opacity-80 animate-bounce delay-400"></div>
                    <div className="absolute top-14 left-5 w-1 h-2 bg-amber-200 rounded-full opacity-70 animate-bounce delay-500"></div>
                  </>
                )}
                <div className="absolute top-7 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-11 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
                <div className="absolute top-15 left-0 w-10 h-0.5 bg-amber-800 rounded-full"></div>
              </div>
              
              {/* Industrial brewing equipment */}
              <div className="absolute -top-8 left-28 w-4 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute top-7 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                <div className="absolute top-10 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-400"></div>
                {isUnlocked && <div className="absolute -top-2 left-1.5 w-1 h-3 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              {/* Multiple industrial chimneys */}
              <div className="absolute -top-18 left-22 w-4 h-22 bg-gradient-to-t from-red-800 to-red-700 rounded-t-sm shadow-lg">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-red-600 rounded-t-sm"></div>
                {isUnlocked && (
                  <div className="absolute -top-4 left-1.5 w-1 h-8 bg-gray-300 opacity-70 rounded-full animate-float"></div>
                )}
              </div>
              <div className="absolute -top-14 left-26 w-3 h-18 bg-gradient-to-t from-red-800 to-red-700 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-2 h-3 bg-red-600 rounded-t-sm"></div>
                {isUnlocked && (
                  <div className="absolute -top-3 left-1 w-1 h-6 bg-gray-300 opacity-70 rounded-full animate-float delay-300"></div>
                )}
              </div>
              
              {/* Processing and distribution area */}
              <div className="absolute top-20 left-4 w-24 h-8 bg-gradient-to-r from-amber-700 to-amber-600 rounded-sm shadow-lg">
                <div className="absolute top-0 left-0 w-24 h-8 bg-amber-500 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-3 w-4 h-4 bg-amber-400 rounded-sm"></div>
                <div className="absolute top-2 left-9 w-4 h-4 bg-amber-400 rounded-sm"></div>
                <div className="absolute top-2 left-15 w-4 h-4 bg-amber-400 rounded-sm"></div>
                <div className="absolute top-2 left-21 w-4 h-4 bg-amber-400 rounded-sm"></div>
              </div>
              
              {/* External barrel storage yard */}
              <div className="absolute top-20 left-30 w-6 h-8 bg-gradient-to-r from-amber-800 to-amber-700 rounded-sm shadow-md">
                <div className="absolute top-1 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-3 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-5 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-7 left-1 w-4 h-1 bg-amber-900"></div>
              </div>
              <div className="absolute top-20 left-37 w-6 h-8 bg-gradient-to-r from-amber-800 to-amber-700 rounded-sm shadow-md">
                <div className="absolute top-1 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-3 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-5 left-1 w-4 h-1 bg-amber-900"></div>
                <div className="absolute top-7 left-1 w-4 h-1 bg-amber-900"></div>
              </div>
              
              {/* Brewery facility windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-6 left-12 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-6 left-18 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-6 left-24 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-10 left-6 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-10 left-12 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-10 left-18 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-10 left-24 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-14 left-6 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-14 left-12 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-14 left-18 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                  <div className={`absolute top-14 left-24 w-4 h-3 ${windowGlow} rounded-sm border border-amber-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'organic-synthesis-lab':
        return (
          <div className="relative">
            {/* High-tech molecular synthesis laboratory */}
            <div className="relative">
              {/* Main laboratory building */}
              <div className="w-30 h-18 bg-gradient-to-r from-blue-800 to-blue-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-30 h-18 bg-gradient-to-r from-blue-600 to-blue-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-18 bg-blue-900 transform skew-y-12"></div>
              </div>
              
              {/* Molecular analyzer dome */}
              <div className="absolute -top-10 left-6 w-12 h-8 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-full shadow-md">
                <div className="absolute top-1 left-1 w-10 h-6 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-4 bg-cyan-400 rounded-t-full transform skew-x-4 opacity-80"></div>
                {isUnlocked && <div className="absolute top-2 left-5 w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              </div>
              
              {/* Sophisticated lab equipment array */}
              <div className="absolute -top-12 left-2 w-4 h-16 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-5 left-1 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
                <div className="absolute top-8 left-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-11 left-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-450"></div>
                {isUnlocked && <div className="absolute -top-3 left-1.5 w-1 h-5 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute -top-8 left-18 w-5 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-4 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-3 h-1 bg-cyan-400 animate-pulse"></div>
                <div className="absolute top-3 left-1 w-3 h-1 bg-green-400 animate-pulse delay-200"></div>
                <div className="absolute top-5 left-1 w-3 h-1 bg-purple-400 animate-pulse delay-400"></div>
                {isUnlocked && <div className="absolute top-8 left-2 w-1 h-2 bg-cyan-300 rounded-full animate-bounce"></div>}
              </div>
              
              <div className="absolute -top-6 left-24 w-4 h-10 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-2 h-1 bg-orange-400"></div>
                <div className="absolute top-4 left-1 w-2 h-1 bg-pink-400"></div>
                <div className="absolute top-6 left-1 w-2 h-1 bg-violet-400"></div>
                {isUnlocked && <div className="absolute top-8 left-1.5 w-1 h-1 bg-white rounded-full animate-ping"></div>}
              </div>
              
              {/* Chemical processing pipes */}
              <div className="absolute top-6 left-8 w-10 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-8 h-1 bg-cyan-300 rounded-full"></div>
                {isUnlocked && <div className="absolute top-0.5 left-1 w-2 h-1 bg-white rounded-full animate-pulse"></div>}
              </div>
              <div className="absolute top-10 left-20 w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-6 h-1 bg-pink-300 rounded-full"></div>
                {isUnlocked && <div className="absolute top-0.5 left-5 w-2 h-1 bg-white rounded-full animate-pulse delay-400"></div>}
              </div>
              
              {/* Advanced cleanroom windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-4 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-4 left-14 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-4 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-8 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-8 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-8 left-14 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-8 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-12 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-12 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-12 left-14 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                  <div className={`absolute top-12 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'digestive-diversity-museum':
        return (
          <div className="relative">
            {/* Grand natural history museum */}
            <div className="relative">
              {/* Main museum building with neoclassical design */}
              <div className="w-34 h-20 bg-gradient-to-r from-orange-800 to-orange-700 transform skew-y-12 relative shadow-xl">
                <div className="absolute top-0 left-0 w-34 h-20 bg-gradient-to-r from-orange-600 to-orange-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-7 h-20 bg-orange-900 transform skew-y-12"></div>
              </div>
              
              {/* Magnificent central dome */}
              <div className="absolute -top-16 left-8 w-20 h-20 bg-gradient-to-t from-orange-600 to-orange-300 rounded-full shadow-2xl">
                <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-t from-orange-500 to-orange-200 rounded-full"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-t from-orange-400 to-orange-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-10 bg-orange-400 rounded-t-full transform skew-x-4 opacity-80"></div>
                {/* Dome architectural details */}
                <div className="absolute top-3 left-0 w-20 h-0.5 bg-orange-800 rounded-full opacity-40"></div>
                <div className="absolute top-7 left-0 w-20 h-0.5 bg-orange-800 rounded-full opacity-40"></div>
                <div className="absolute top-11 left-0 w-20 h-0.5 bg-orange-800 rounded-full opacity-40"></div>
                <div className="absolute top-15 left-0 w-20 h-0.5 bg-orange-800 rounded-full opacity-40"></div>
                {/* Dome apex with flag */}
                <div className="absolute -top-4 left-9 w-2 h-8 bg-gray-700"></div>
                <div className="absolute -top-2 left-11 w-4 h-2 bg-red-600"></div>
              </div>
              
              {/* Impressive entrance portico with columns */}
              <div className="absolute top-18 left-2 w-30 h-8 bg-gradient-to-r from-gray-300 to-gray-200 rounded-sm shadow-lg">
                <div className="absolute top-0 left-0 w-30 h-8 bg-gray-100 transform -skew-y-3 skew-x-3"></div>
                {/* Classical columns */}
                <div className="absolute top-0 left-2 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-7 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-12 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-17 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-22 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
                <div className="absolute top-0 left-27 w-3 h-8 bg-gray-200 shadow-md">
                  <div className="absolute top-0 left-0 w-3 h-1 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-1 bg-gray-400"></div>
                </div>
              </div>
              
              {/* Exhibition wings */}
              <div className="absolute top-6 left-32 w-8 h-14 bg-gradient-to-t from-orange-700 to-orange-600 transform skew-y-8 shadow-md">
                <div className="absolute top-0 left-0 w-8 h-14 bg-orange-500 transform -skew-y-8 skew-x-8"></div>
              </div>
              <div className="absolute top-6 left-0 w-8 h-14 bg-gradient-to-t from-orange-700 to-orange-600 transform -skew-y-8 shadow-md">
                <div className="absolute top-0 left-0 w-8 h-14 bg-orange-500 transform skew-y-8 skew-x-8"></div>
              </div>
              
              {/* Museum lighting */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-6 left-12 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-6 left-18 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-6 left-24 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-10 left-6 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-10 left-12 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-10 left-18 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  <div className={`absolute top-10 left-24 w-4 h-3 ${windowGlow} rounded-sm border border-orange-300`}></div>
                  {/* Wing windows */}
                  <div className={`absolute top-8 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-12 left-2 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-8 left-34 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-12 left-34 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'digestive-anatomy-tower':
        return (
          <div className="relative">
            {/* Advanced medical research tower */}
            <div className="relative">
              {/* Tower foundation */}
              <div className="w-20 h-16 bg-gradient-to-r from-red-800 to-red-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-20 h-16 bg-gradient-to-r from-red-600 to-red-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-5 h-16 bg-red-900 transform skew-y-12"></div>
              </div>
              
              {/* Multi-level tower structure */}
              <div className="absolute -top-12 left-4 w-14 h-20 bg-gradient-to-t from-red-700 to-red-500 shadow-xl">
                <div className="absolute top-0 left-0 w-14 h-20 bg-red-600 transform skew-x-2"></div>
                <div className="absolute top-0 right-0 w-1 h-20 bg-red-800"></div>
                {/* Floor divisions */}
                <div className="absolute top-4 left-0 w-14 h-1 bg-red-800 shadow-sm"></div>
                <div className="absolute top-8 left-0 w-14 h-1 bg-red-800 shadow-sm"></div>
                <div className="absolute top-12 left-0 w-14 h-1 bg-red-800 shadow-sm"></div>
                <div className="absolute top-16 left-0 w-14 h-1 bg-red-800 shadow-sm"></div>
              </div>
              
              {/* Upper observation deck */}
              <div className="absolute -top-24 left-5 w-12 h-8 bg-gradient-to-t from-red-600 to-red-400 shadow-md">
                <div className="absolute top-0 left-0 w-12 h-8 bg-red-500 transform skew-x-2"></div>
                <div className="absolute top-0 right-0 w-1 h-8 bg-red-700"></div>
                {/* Panoramic windows */}
                {isUnlocked && (
                  <>
                    <div className={`absolute top-2 left-2 w-8 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                    <div className={`absolute top-5 left-2 w-8 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  </>
                )}
              </div>
              
              {/* Communication and research equipment */}
              <div className="absolute -top-28 left-9 w-2 h-10 bg-gray-700 shadow-sm"></div>
              <div className="absolute -top-26 left-8 w-4 h-1 bg-gray-700"></div>
              <div className="absolute -top-24 left-7 w-6 h-1 bg-gray-600"></div>
              <div className="absolute -top-30 left-10 w-1 h-3 bg-red-500 animate-pulse"></div>
              
              {/* Medical facility equipment on roof */}
              <div className="absolute -top-16 left-2 w-3 h-6 bg-gray-600 rounded-t-sm">
                <div className="absolute top-0 left-0.5 w-2 h-2 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-3 left-1 w-1 h-1 bg-green-400 animate-pulse"></div>
                <div className="absolute top-5 left-1 w-1 h-1 bg-red-400 animate-pulse delay-300"></div>
              </div>
              <div className="absolute -top-14 right-2 w-3 h-4 bg-gray-600 rounded-t-sm">
                <div className="absolute top-0 left-0.5 w-2 h-2 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-1 h-1 bg-blue-400 animate-pulse delay-150"></div>
              </div>
              
              {/* Tower windows with medical imaging displays */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-6 left-11 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-10 left-6 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-10 left-11 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-2 left-6 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-2 left-11 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-14 left-6 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                  <div className={`absolute top-14 left-11 w-3 h-2 ${windowGlow} rounded-sm border border-red-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'human-digestive-hospital':
        return (
          <div className="relative">
            {/* Modern medical center complex */}
            <div className="relative">
              {/* Main hospital building */}
              <div className="w-32 h-22 bg-white transform skew-y-12 relative border-2 border-gray-200 shadow-xl">
                <div className="absolute top-0 left-0 w-32 h-22 bg-gray-50 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-22 bg-gray-100 transform skew-y-12"></div>
              </div>
              
              {/* Emergency wing */}
              <div className="absolute top-6 left-30 w-10 h-16 bg-white transform skew-y-8 border-2 border-gray-200 shadow-lg">
                <div className="absolute top-0 left-0 w-10 h-16 bg-gray-50 transform -skew-y-8 skew-x-8"></div>
                {isUnlocked && (
                  <>
                    <div className={`absolute top-3 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-6 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-9 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                    <div className={`absolute top-12 left-2 w-2 h-2 ${windowGlow} rounded-sm`}></div>
                  </>
                )}
              </div>
              
              {/* Prominent medical cross symbol */}
              <div className="absolute top-8 left-14 w-6 h-2 bg-red-600 shadow-md rounded-sm"></div>
              <div className="absolute top-6 left-16 w-2 h-6 bg-red-600 shadow-md rounded-sm"></div>
              <div className="absolute top-7 left-15 w-4 h-4 bg-red-500 rounded-full opacity-20"></div>
              
              {/* Hospital helipad */}
              <div className="absolute -top-4 left-20 w-8 h-8 bg-gray-300 border-2 border-gray-400 shadow-md">
                <div className="absolute top-0 left-0 w-8 h-8 bg-gray-200 transform -skew-y-4 skew-x-4"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full border border-gray-400">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1.5 left-0.5 w-3 h-1 bg-red-500"></div>
                  <div className="absolute top-0.5 left-1.5 w-1 h-3 bg-red-500"></div>
                </div>
              </div>
              
              {/* Medical equipment and ventilation systems */}
              <div className="absolute -top-2 left-4 w-3 h-8 bg-gray-600 rounded-t-sm shadow-sm">
                <div className="absolute top-0 left-0.5 w-2 h-2 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-3 left-1 w-1 h-1 bg-green-400 animate-pulse"></div>
                <div className="absolute top-5 left-1 w-1 h-1 bg-blue-400 animate-pulse delay-200"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-3 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute -top-1 left-32 w-3 h-6 bg-gray-600 rounded-t-sm shadow-sm">
                <div className="absolute top-0 left-0.5 w-2 h-2 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-3 left-1 w-1 h-1 bg-yellow-400 animate-pulse delay-100"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-3 bg-white opacity-70 rounded-full animate-float delay-300"></div>}
              </div>
              
              {/* Ambulance bay */}
              <div className="absolute top-22 left-4 w-24 h-6 bg-gray-300 border border-gray-400 shadow-md rounded-sm">
                <div className="absolute top-0 left-0 w-24 h-6 bg-gray-200 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-red-400 rounded-sm"></div>
                <div className="absolute top-2 left-8 w-4 h-2 bg-red-400 rounded-sm"></div>
                <div className="absolute top-2 left-14 w-4 h-2 bg-red-400 rounded-sm"></div>
                <div className="absolute top-2 left-20 w-4 h-2 bg-red-400 rounded-sm"></div>
              </div>
              
              {/* Hospital windows with medical activity */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-4 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-4 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-4 left-27 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-8 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-8 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-8 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-8 left-27 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-14 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-14 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-14 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-14 left-27 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-18 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-18 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-18 left-22 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                  <div className={`absolute top-18 left-27 w-3 h-3 ${windowGlow} rounded-sm border border-blue-200`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'chemical-digestion-lab':
        return (
          <div className="relative">
            {/* Advanced biochemical analysis laboratory */}
            <div className="relative">
              {/* Main laboratory building */}
              <div className="w-28 h-18 bg-gradient-to-r from-purple-800 to-purple-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-28 h-18 bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-18 bg-purple-900 transform skew-y-12"></div>
              </div>
              
              {/* Sophisticated chemical analysis towers */}
              <div className="absolute -top-10 left-3 w-4 h-14 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-4 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-2 h-3 bg-green-400 rounded-sm">
                  <div className="absolute top-0.5 left-0.5 w-1 h-2 bg-green-300 rounded-sm"></div>
                </div>
                <div className="absolute top-6 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-9 left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                {isUnlocked && <div className="absolute -top-3 left-1.5 w-1 h-5 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute -top-12 left-9 w-5 h-16 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-full shadow-md">
                <div className="absolute top-1 left-1 w-3 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-full">
                  <div className="absolute top-2 left-0.5 w-2 h-8 bg-blue-300 rounded-t-full"></div>
                  {isUnlocked && <div className="absolute top-4 left-1 w-1 h-4 bg-cyan-200 rounded-full animate-bounce"></div>}
                </div>
                <div className="absolute top-0 left-1.5 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              
              <div className="absolute -top-8 left-16 w-4 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-2 h-4 bg-red-500 rounded-sm">
                  <div className="absolute top-1 left-0.5 w-1 h-2 bg-red-400 rounded-sm"></div>
                </div>
                <div className="absolute top-7 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-400"></div>
                {isUnlocked && <div className="absolute top-9 left-1.5 w-1 h-2 bg-pink-300 rounded-full animate-ping"></div>}
              </div>
              
              <div className="absolute -top-6 left-21 w-4 h-10 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-2 left-1 w-2 h-3 bg-purple-400 rounded-sm">
                  <div className="absolute top-0.5 left-0.5 w-1 h-2 bg-purple-300 rounded-sm"></div>
                </div>
                <div className="absolute top-6 left-1 w-2 h-2 bg-violet-400 rounded-full animate-pulse delay-600"></div>
                {isUnlocked && <div className="absolute top-8 left-1.5 w-1 h-1 bg-white rounded-full animate-ping delay-800"></div>}
              </div>
              
              {/* Chemical processing pipes and connectors */}
              <div className="absolute top-6 left-7 w-8 h-2 bg-gradient-to-r from-purple-600 to-gray-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-6 h-1 bg-purple-400 rounded-full"></div>
                {isUnlocked && <div className="absolute top-0.5 left-1 w-2 h-1 bg-cyan-300 rounded-full animate-pulse"></div>}
              </div>
              <div className="absolute top-10 left-13 w-6 h-2 bg-gradient-to-r from-red-600 to-gray-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-4 h-1 bg-red-400 rounded-full"></div>
                {isUnlocked && <div className="absolute top-0.5 left-3 w-2 h-1 bg-yellow-300 rounded-full animate-pulse delay-300"></div>}
              </div>
              <div className="absolute top-8 left-18 w-4 h-2 bg-gradient-to-r from-blue-600 to-gray-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-0.5 w-3 h-1 bg-blue-400 rounded-full"></div>
                {isUnlocked && <div className="absolute top-0.5 left-2 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>}
              </div>
              
              {/* Advanced laboratory windows with chemical analysis displays */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-5 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-4 left-11 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-4 left-17 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-4 left-23 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-8 left-5 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-8 left-11 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-8 left-17 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-8 left-23 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-12 left-5 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-12 left-11 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-12 left-17 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                  <div className={`absolute top-12 left-23 w-3 h-3 ${windowGlow} rounded-sm border border-purple-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'absorption-transport-station':
        return (
          <div className="relative">
            {/* Advanced molecular transport and logistics hub */}
            <div className="relative">
              {/* Main terminal building */}
              <div className="w-36 h-18 bg-gradient-to-r from-yellow-800 to-yellow-700 transform skew-y-12 relative shadow-lg">
                <div className="absolute top-0 left-0 w-36 h-18 bg-gradient-to-r from-yellow-600 to-yellow-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-7 h-18 bg-yellow-900 transform skew-y-12"></div>
              </div>
              
              {/* Multiple loading and processing docks */}
              <div className="absolute top-18 left-2 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-green-400 rounded-sm animate-pulse"></div>
                {isUnlocked && <div className="absolute top-1 left-1 w-2 h-1 bg-cyan-300 rounded-sm animate-pulse"></div>}
              </div>
              <div className="absolute top-18 left-12 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-blue-400 rounded-sm animate-pulse delay-200"></div>
                {isUnlocked && <div className="absolute top-1 left-1 w-2 h-1 bg-yellow-300 rounded-sm animate-pulse delay-200"></div>}
              </div>
              <div className="absolute top-18 left-22 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-red-400 rounded-sm animate-pulse delay-400"></div>
                {isUnlocked && <div className="absolute top-1 left-1 w-2 h-1 bg-purple-300 rounded-sm animate-pulse delay-400"></div>}
              </div>
              <div className="absolute top-18 left-32 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-md">
                <div className="absolute top-0 left-0 w-8 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-orange-400 rounded-sm animate-pulse delay-600"></div>
                {isUnlocked && <div className="absolute top-1 left-1 w-2 h-1 bg-green-300 rounded-sm animate-pulse delay-600"></div>}
              </div>
              
              {/* Advanced transport tube network */}
              <div className="absolute -top-6 left-4 w-28 h-4 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full shadow-lg">
                <div className="absolute top-0 left-0 w-28 h-4 bg-gray-300 transform -skew-y-2 skew-x-2 rounded-full"></div>
                <div className="absolute top-1 left-2 w-24 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full">
                  {isUnlocked && <div className="absolute top-0 left-0 w-4 h-2 bg-white rounded-full animate-pulse"></div>}
                </div>
                {/* Tube segments */}
                <div className="absolute top-0.5 left-0 w-28 h-0.5 bg-gray-600 rounded-full opacity-50"></div>
                <div className="absolute bottom-0.5 left-0 w-28 h-0.5 bg-gray-600 rounded-full opacity-50"></div>
              </div>
              
              {/* Secondary transport lines */}
              <div className="absolute -top-2 left-8 w-20 h-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full shadow-md">
                <div className="absolute top-0.5 left-1 w-18 h-2 bg-gradient-to-r from-green-400 to-yellow-300 rounded-full">
                  {isUnlocked && <div className="absolute top-0 left-8 w-3 h-2 bg-white rounded-full animate-pulse delay-300"></div>}
                </div>
              </div>
              <div className="absolute top-2 left-12 w-16 h-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full shadow-md">
                <div className="absolute top-0.5 left-1 w-14 h-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full">
                  {isUnlocked && <div className="absolute top-0 left-6 w-3 h-2 bg-white rounded-full animate-pulse delay-600"></div>}
                </div>
              </div>
              
              {/* Control towers and monitoring equipment */}
              <div className="absolute -top-8 left-2 w-4 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-7 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                <div className="absolute top-10 left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                {isUnlocked && <div className="absolute -top-2 left-1.5 w-1 h-3 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute -top-6 right-2 w-4 h-10 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-3 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-450"></div>
                <div className="absolute top-7 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-600"></div>
                {isUnlocked && <div className="absolute -top-2 left-1.5 w-1 h-3 bg-white opacity-70 rounded-full animate-float delay-750"></div>}
              </div>
              
              {/* Operations center windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-4 left-10 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-4 left-16 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-4 left-22 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-4 left-28 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-8 left-4 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-8 left-10 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-8 left-16 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-8 left-22 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-8 left-28 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-12 left-4 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-12 left-10 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-12 left-16 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-12 left-22 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                  <div className={`absolute top-12 left-28 w-4 h-3 ${windowGlow} rounded-sm border border-yellow-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'oxygen-respiration-powerhouse':
        return (
          <div className="relative">
            {/* Power generation facility */}
            <div className="relative">
              {/* Main building */}
              <div className="w-28 h-20 bg-gray-800 transform skew-y-12 relative">
                <div className="absolute top-0 left-0 w-28 h-20 bg-gray-600 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-20 bg-gray-900 transform skew-y-12"></div>
              </div>
              
              {/* Power stacks */}
              <div className="absolute -top-12 left-4 w-6 h-20 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm">
                {isUnlocked && (
                  <div className="absolute -top-4 left-2 w-2 h-8 bg-white opacity-60 rounded-full"></div>
                )}
              </div>
              <div className="absolute -top-14 left-12 w-6 h-22 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm">
                {isUnlocked && (
                  <div className="absolute -top-4 left-2 w-2 h-8 bg-white opacity-60 rounded-full"></div>
                )}
              </div>
              <div className="absolute -top-10 left-20 w-6 h-18 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm">
                {isUnlocked && (
                  <div className="absolute -top-4 left-2 w-2 h-8 bg-white opacity-60 rounded-full"></div>
                )}
              </div>
              
              {/* Power facility windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-18 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-18 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
            </div>
          </div>
        );

      case 'krebs-ets-reactor':
        return (
          <div className="relative">
            {/* High-energy cellular reactor complex */}
            <div className="relative">
              {/* Main reactor facility */}
              <div className="w-30 h-20 bg-gradient-to-r from-teal-800 to-teal-700 transform skew-y-12 relative shadow-xl">
                <div className="absolute top-0 left-0 w-30 h-20 bg-gradient-to-r from-teal-600 to-teal-500 transform -skew-y-12 skew-x-12"></div>
                <div className="absolute top-0 right-0 w-6 h-20 bg-teal-900 transform skew-y-12"></div>
              </div>
              
              {/* Massive central reactor core with multiple energy rings */}
              <div className="absolute -top-16 left-6 w-18 h-18 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full shadow-2xl">
                <div className="absolute top-2 left-2 w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full">
                  <div className="absolute top-2 left-2 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full">
                    <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full">
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-white rounded-full shadow-md">
                        {isUnlocked && (
                          <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Energy containment rings */}
                <div className="absolute inset-1 border-2 border-teal-300 rounded-full opacity-60"></div>
                <div className="absolute inset-3 border border-teal-200 rounded-full opacity-40"></div>
                <div className="absolute inset-5 border border-teal-100 rounded-full opacity-30"></div>
                {isUnlocked && (
                  <>
                    <div className="absolute inset-0 border-3 border-cyan-400 rounded-full animate-spin opacity-80"></div>
                    <div className="absolute inset-2 border-2 border-blue-400 rounded-full animate-spin reverse opacity-60"></div>
                    <div className="absolute inset-4 border border-green-400 rounded-full animate-spin opacity-40"></div>
                  </>
                )}
              </div>
              
              {/* Energy transfer systems and cooling towers */}
              <div className="absolute -top-8 left-2 w-3 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-2 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-1 h-2 bg-cyan-400 animate-pulse"></div>
                <div className="absolute top-7 left-1 w-1 h-2 bg-blue-400 animate-pulse delay-200"></div>
                <div className="absolute top-10 left-1 w-1 h-2 bg-teal-400 animate-pulse delay-400"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-3 bg-white opacity-70 rounded-full animate-float"></div>}
              </div>
              
              <div className="absolute -top-6 right-2 w-3 h-10 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-sm shadow-md">
                <div className="absolute top-0 left-0.5 w-2 h-3 bg-gray-400 rounded-sm"></div>
                <div className="absolute top-4 left-1 w-1 h-2 bg-green-400 animate-pulse delay-100"></div>
                <div className="absolute top-7 left-1 w-1 h-2 bg-yellow-400 animate-pulse delay-300"></div>
                {isUnlocked && <div className="absolute -top-2 left-1 w-1 h-3 bg-white opacity-70 rounded-full animate-float delay-500"></div>}
              </div>
              
              {/* High-energy particle accelerator ring */}
              <div className="absolute -top-4 left-26 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full shadow-lg">
                <div className="absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full">
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-gray-200 rounded-full">
                    {isUnlocked && <div className="absolute top-1 left-1 w-1 h-1 bg-purple-400 rounded-full animate-spin"></div>}
                  </div>
                </div>
                <div className="absolute inset-0.5 border border-gray-300 rounded-full opacity-50"></div>
                {isUnlocked && <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-spin opacity-70"></div>}
              </div>
              
              {/* Energy conduits and transport pipes */}
              <div className="absolute top-8 left-8 w-12 h-3 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-10 h-2 bg-cyan-300 rounded-full"></div>
                {isUnlocked && <div className="absolute top-1 left-2 w-3 h-1 bg-white rounded-full animate-pulse"></div>}
              </div>
              <div className="absolute top-12 left-16 w-8 h-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full shadow-sm">
                <div className="absolute top-0.5 left-1 w-6 h-2 bg-teal-300 rounded-full"></div>
                {isUnlocked && <div className="absolute top-1 left-4 w-2 h-1 bg-white rounded-full animate-pulse delay-400"></div>}
              </div>
              
              {/* Control room and monitoring station */}
              <div className="absolute top-20 left-4 w-22 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm shadow-lg">
                <div className="absolute top-0 left-0 w-22 h-6 bg-gray-500 transform -skew-y-2 skew-x-2"></div>
                {isUnlocked && (
                  <>
                    <div className={`absolute top-2 left-2 w-3 h-2 ${windowGlow} rounded-sm border border-teal-300`}></div>
                    <div className={`absolute top-2 left-7 w-3 h-2 ${windowGlow} rounded-sm border border-teal-300`}></div>
                    <div className={`absolute top-2 left-12 w-3 h-2 ${windowGlow} rounded-sm border border-teal-300`}></div>
                    <div className={`absolute top-2 left-17 w-3 h-2 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  </>
                )}
              </div>
              
              {/* Reactor facility windows */}
              {isUnlocked && (
                <>
                  <div className={`absolute top-4 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-4 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-4 left-20 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-4 left-25 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-8 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-8 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-8 left-20 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-8 left-25 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-14 left-4 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-14 left-9 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-14 left-20 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                  <div className={`absolute top-14 left-25 w-3 h-3 ${windowGlow} rounded-sm border border-teal-300`}></div>
                </>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <div className="w-24 h-20 bg-gray-500 transform skew-y-12 relative">
              <div className="absolute top-0 left-0 w-24 h-20 bg-gray-400 transform -skew-y-12 skew-x-12"></div>
              <div className="absolute top-0 right-0 w-5 h-20 bg-gray-600 transform skew-y-12"></div>
              {isUnlocked && (
                <>
                  <div className={`absolute top-6 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-6 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-6 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                  <div className={`absolute top-10 left-12 w-3 h-2 ${windowGlow} rounded-sm`}></div>
                </>
              )}
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
        zIndex: 20
      }}
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {getRealisticBuilding()}
      
      {/* Tooltip */}
      {showTooltip && (
        <div 
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg z-50 whitespace-nowrap"
          style={{ fontSize: '14px' }}
        >
          <div className="text-center font-medium">{turkishName}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};