import React, { useState } from 'react';
import { RealisticBuilding } from './RealisticBuilding';

interface BuildingData {
  id: number;
  name: string;
  type: string;
  position: { x: number; y: number };
  district: string;
  zoneType: 'industrial' | 'commercial' | 'educational' | 'medical' | 'research';
}

// Binaları uzun ve geniş haritada kademeli olarak yerleştiriyoruz - her seviyede max 3 bina
const buildings: BuildingData[] = [
  { id: 1, name: "ATP Power Plant", type: "atp-power-plant", position: { x: 200, y: 100 }, district: "Energy Basics", zoneType: "industrial" },
  { id: 2, name: "Photosynthesis Greenhouse Park", type: "photosynthesis-solar-park", position: { x: 700, y: 180 }, district: "Photosynthesis Zone", zoneType: "research" },
  { id: 3, name: "Chloroplast Research Laboratory", type: "chloroplast-research-center", position: { x: 1200, y: 260 }, district: "Photosynthesis Zone", zoneType: "research" },
  { id: 4, name: "Light Tower Observatory", type: "light-tower", position: { x: 150, y: 380 }, district: "Photosynthesis Zone", zoneType: "educational" },
  { id: 5, name: "Calvin Cycle Factory", type: "calvin-cycle-factory", position: { x: 650, y: 460 }, district: "Photosynthesis Zone", zoneType: "industrial" },
  { id: 6, name: "Organic Synthesis Laboratory", type: "organic-synthesis-lab", position: { x: 1150, y: 540 }, district: "Synthesis Zone", zoneType: "research" },
  { id: 7, name: "Digestive Diversity Museum", type: "digestive-diversity-museum", position: { x: 250, y: 660 }, district: "Digestion Zone", zoneType: "educational" },
  { id: 8, name: "Digestive Anatomy Tower", type: "digestive-anatomy-tower", position: { x: 750, y: 740 }, district: "Digestion Zone", zoneType: "educational" },
  { id: 9, name: "Human Digestive Hospital", type: "human-digestive-hospital", position: { x: 1250, y: 820 }, district: "Digestion Zone", zoneType: "medical" },
  { id: 10, name: "Chemical Digestion Lab", type: "chemical-digestion-lab", position: { x: 200, y: 940 }, district: "Digestion Zone", zoneType: "research" },
  { id: 11, name: "Absorption & Transport Station", type: "absorption-transport-station", position: { x: 700, y: 1020 }, district: "Transport Zone", zoneType: "commercial" },
  { id: 12, name: "Oxygen Respiration Powerhouse", type: "oxygen-respiration-powerhouse", position: { x: 1200, y: 1100 }, district: "Respiration Zone", zoneType: "industrial" },
  { id: 13, name: "Krebs & ETS Reactor", type: "krebs-ets-reactor", position: { x: 400, y: 1220 }, district: "Respiration Zone", zoneType: "research" },
  { id: 14, name: "Fermentation Brewery", type: "fermentation-brewery", position: { x: 900, y: 1300 }, district: "Respiration Zone", zoneType: "industrial" }
];



const progressConnections = [
  { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 },
  { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 8, to: 9 },
  { from: 9, to: 10 }, { from: 10, to: 11 }, { from: 11, to: 12 }, { from: 12, to: 13 },
  { from: 13, to: 14 }
];

export const CitiesSkylinesMap: React.FC = () => {
  const [unlockedBuildings, setUnlockedBuildings] = useState<Set<number>>(new Set([1]));
  const [activeBuilding, setActiveBuilding] = useState<number>(1);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const handleBuildingClick = (buildingId: number) => {
    if (unlockedBuildings.has(buildingId)) {
      setActiveBuilding(buildingId);
      
      if (buildingId === Math.max(...unlockedBuildings) && buildingId < 14) {
        const nextBuildingId = buildingId + 1;
        setUnlockedBuildings(prev => new Set([...prev, nextBuildingId]));
      }
    }
  };

  const getZoneColor = (zoneType: string) => {
    switch (zoneType) {
      case 'industrial': return 'rgba(255, 165, 0, 0.2)'; // Orange
      case 'research': return 'rgba(0, 255, 255, 0.2)'; // Cyan
      case 'educational': return 'rgba(0, 255, 0, 0.2)'; // Green
      case 'medical': return 'rgba(255, 0, 255, 0.2)'; // Magenta
      case 'commercial': return 'rgba(255, 255, 0, 0.2)'; // Yellow
      default: return 'rgba(128, 128, 128, 0.2)';
    }
  };

  const getDistrictBuildings = (district: string) => {
    return buildings.filter(b => b.district === district);
  };

  const districts = [...new Set(buildings.map(b => b.district))];

  const getProgressPath = (fromId: number, toId: number) => {
    const fromBuilding = buildings.find(b => b.id === fromId);
    const toBuilding = buildings.find(b => b.id === toId);
    
    if (!fromBuilding || !toBuilding) return null;

    const fromX = fromBuilding.position.x + 40;
    const fromY = fromBuilding.position.y + 60;
    const toX = toBuilding.position.x + 40;
    const toY = toBuilding.position.y + 60;

    const isUnlocked = unlockedBuildings.has(toId);

    return (
      <g key={`progress-${fromId}-${toId}`}>
        <line
          x1={fromX}
          y1={fromY}
          x2={toX}
          y2={toY}
          stroke={isUnlocked ? "#00ff00" : "#666666"}
          strokeWidth="3"
          strokeDasharray="8,4"
          opacity={isUnlocked ? 0.8 : 0.4}
          style={{ filter: isUnlocked ? 'drop-shadow(0 0 4px #00ff00)' : 'none' }}
        />
        {isUnlocked && (
          <circle
            cx={toX}
            cy={toY}
            r="4"
            fill="#00ff00"
            opacity="0.8"
          />
        )}
      </g>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-800 via-green-600 to-green-400 relative overflow-auto" style={{ height: "2000px", minWidth: "1800px" }}>
      {/* Cities Skylines-style terrain background */}
      <div className="absolute inset-0">
        {/* Terrain texture */}
        <div 
          className="w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(0,100,0,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, rgba(0,80,0,0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(0,120,0,0.4) 0%, transparent 50%),
              linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.05) 49%, rgba(0,0,0,0.05) 51%, transparent 52%)
            `,
            backgroundSize: '200px 200px, 300px 300px, 250px 250px, 20px 20px'
          }}
        ></div>
        

      </div>





      {/* Progress connections - Enhanced visual path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        {progressConnections.map(connection => {
          const fromBuilding = buildings.find(b => b.id === connection.from);
          const toBuilding = buildings.find(b => b.id === connection.to);
          
          if (!fromBuilding || !toBuilding) return null;

          const fromX = fromBuilding.position.x + 40;
          const fromY = fromBuilding.position.y + 60;
          const toX = toBuilding.position.x + 40;
          const toY = toBuilding.position.y + 60;

          // Tüm bağlantıları göster

          const isFromUnlocked = unlockedBuildings.has(connection.from);
          const isToUnlocked = unlockedBuildings.has(connection.to);
          const isConnectionActive = isFromUnlocked;

          return (
            <g key={`progress-${connection.from}-${connection.to}`}>
              {/* Main connection line */}
              <line
                x1={fromX}
                y1={fromY}
                x2={toX}
                y2={toY}
                stroke={isConnectionActive ? "#10b981" : "#6b7280"}
                strokeWidth="2"
                strokeDasharray="6,3"
                opacity={isConnectionActive ? 0.6 : 0.2}
                style={{ 
                  filter: isConnectionActive ? 'drop-shadow(0 0 3px #10b981)' : 'none'
                }}
              />
              {/* Progress indicator */}
              {isToUnlocked && (
                <circle
                  cx={toX}
                  cy={toY}
                  r="4"
                  fill="#10b981"
                  opacity="0.8"
                  style={{ filter: 'drop-shadow(0 0 3px #10b981)' }}
                />
              )}
              {/* Next building indicator */}
              {isFromUnlocked && !isToUnlocked && (
                <circle
                  cx={toX}
                  cy={toY}
                  r="6"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  opacity="0.6"
                  style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }}
                >

                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* City Features - Lakes, Rivers, Parks */}
      {/* Main Lake */}
      <div 
        className="absolute rounded-full bg-blue-400 opacity-80 shadow-lg"
        style={{ 
          left: '50px', 
          top: '300px', 
          width: '120px', 
          height: '80px',
          background: 'radial-gradient(circle, #60a5fa 0%, #3b82f6 70%, #1d4ed8 100%)',
          zIndex: 3,
          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        {/* Lake ripples */}
        <div className="absolute inset-2 rounded-full border-2 border-blue-300 opacity-50 animate-pulse"></div>
      </div>

      {/* Secondary Lake */}
      <div 
        className="absolute rounded-full bg-blue-400 opacity-80 shadow-lg"
        style={{ 
          left: '1400px', 
          top: '500px', 
          width: '100px', 
          height: '70px',
          background: 'radial-gradient(circle, #60a5fa 0%, #3b82f6 70%, #1d4ed8 100%)',
          zIndex: 3,
          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        <div className="absolute inset-2 rounded-full border-2 border-blue-300 opacity-50 animate-pulse"></div>
      </div>

      {/* Winding River */}
      <div className="absolute" style={{ zIndex: 3 }}>
        <svg width="1800" height="2000" className="absolute top-0 left-0 pointer-events-none">
          <path
            d="M 0 800 Q 200 750 400 800 Q 600 850 800 800 Q 1000 750 1200 800 Q 1400 850 1600 800 Q 1800 750 1800 800"
            stroke="#3b82f6"
            strokeWidth="25"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 0 800 Q 200 750 400 800 Q 600 850 800 800 Q 1000 750 1200 800 Q 1400 850 1600 800 Q 1800 750 1800 800"
            stroke="#60a5fa"
            strokeWidth="15"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Central Park Area */}
      <div 
        className="absolute bg-green-300 opacity-60 rounded-lg shadow-lg"
        style={{ 
          left: '300px', 
          top: '1400px', 
          width: '200px', 
          height: '150px',
          background: 'linear-gradient(45deg, #86efac 0%, #4ade80 50%, #22c55e 100%)',
          zIndex: 4
        }}
      >
        {/* Park paths */}
        <div className="absolute top-4 left-4 w-4 h-4 bg-amber-200 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-amber-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-amber-100 rounded"></div>
      </div>

      {/* Sports Complex */}
      <div 
        className="absolute bg-green-400 opacity-70 rounded-lg shadow-lg"
        style={{ 
          left: '1100px', 
          top: '1500px', 
          width: '180px', 
          height: '120px',
          background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
          zIndex: 4
        }}
      >
        {/* Football field lines */}
        <div className="absolute inset-4 border-2 border-white opacity-80 rounded"></div>
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-80"></div>
      </div>

      {/* Small Ponds */}
      <div 
        className="absolute rounded-full bg-blue-300 opacity-70"
        style={{ 
          left: '500px', 
          top: '1600px', 
          width: '40px', 
          height: '30px',
          zIndex: 3
        }}
      ></div>
      <div 
        className="absolute rounded-full bg-blue-300 opacity-70"
        style={{ 
          left: '1300px', 
          top: '1800px', 
          width: '35px', 
          height: '25px',
          zIndex: 3
        }}
      ></div>

      {/* Mountain Range Background */}
      <div className="absolute" style={{ zIndex: 1 }}>
        <svg width="1800" height="200" className="absolute top-0 left-0 pointer-events-none">
          <polygon
            points="0,200 200,50 400,80 600,30 800,60 1000,20 1200,40 1400,70 1600,35 1800,90 1800,200"
            fill="rgba(107, 114, 128, 0.3)"
          />
          <polygon
            points="0,200 150,80 350,110 550,60 750,90 950,50 1150,70 1350,100 1550,65 1800,120 1800,200"
            fill="rgba(75, 85, 99, 0.2)"
          />
        </svg>
      </div>

      {/* Road Network */}
      <div className="absolute" style={{ zIndex: 2 }}>
        {/* Main Highway */}
        <div 
          className="absolute bg-gray-600 opacity-80"
          style={{ 
            left: '0px', 
            top: '900px', 
            width: '1800px', 
            height: '12px',
            background: 'linear-gradient(90deg, #4b5563 0%, #6b7280 50%, #4b5563 100%)'
          }}
        >
          {/* Road markings */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-yellow-300 opacity-60"
            style={{ 
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 20px, #fde047 20px, #fde047 40px)'
            }}
          ></div>
        </div>

        {/* Vertical Roads */}
        <div 
          className="absolute bg-gray-600 opacity-60"
          style={{ 
            left: '400px', 
            top: '0px', 
            width: '8px', 
            height: '2000px'
          }}
        ></div>
        <div 
          className="absolute bg-gray-600 opacity-60"
          style={{ 
            left: '800px', 
            top: '0px', 
            width: '8px', 
            height: '2000px'
          }}
        ></div>
        <div 
          className="absolute bg-gray-600 opacity-60"
          style={{ 
            left: '1200px', 
            top: '0px', 
            width: '8px', 
            height: '2000px'
          }}
        ></div>
      </div>

      {/* Environmental elements */}
      {/* Trees and decorations - positioned to avoid all building overlaps */}
      {[
        // Top area trees
        { x: 80, y: 50 }, { x: 420, y: 80 }, { x: 900, y: 60 }, { x: 1500, y: 90 }, { x: 1700, y: 70 },
        { x: 480, y: 150 }, { x: 980, y: 140 }, { x: 1550, y: 160 }, { x: 1750, y: 130 },
        
        // Around lakes and avoiding buildings
        { x: 200, y: 250 }, { x: 520, y: 230 }, { x: 1020, y: 220 }, { x: 1600, y: 240 }, { x: 1750, y: 220 },
        { x: 380, y: 340 }, { x: 880, y: 320 }, { x: 1380, y: 350 }, { x: 1650, y: 330 },
        { x: 50, y: 420 }, { x: 480, y: 400 }, { x: 980, y: 410 }, { x: 1580, y: 430 }, { x: 1750, y: 400 },
        
        // Mid section
        { x: 320, y: 500 }, { x: 820, y: 480 }, { x: 1320, y: 490 }, { x: 1700, y: 470 },
        { x: 50, y: 600 }, { x: 480, y: 580 }, { x: 980, y: 590 }, { x: 1580, y: 610 }, { x: 1750, y: 580 },
        { x: 420, y: 680 }, { x: 920, y: 660 }, { x: 1420, y: 690 }, { x: 1650, y: 660 },
        { x: 50, y: 780 }, { x: 520, y: 760 }, { x: 1020, y: 770 }, { x: 1620, y: 790 }, { x: 1750, y: 760 },
        
        // Below river area
        { x: 380, y: 860 }, { x: 880, y: 840 }, { x: 1380, y: 870 }, { x: 1700, y: 850 },
        { x: 50, y: 980 }, { x: 480, y: 960 }, { x: 980, y: 970 }, { x: 1580, y: 990 }, { x: 1750, y: 960 },
        { x: 320, y: 1060 }, { x: 820, y: 1040 }, { x: 1320, y: 1070 }, { x: 1650, y: 1040 },
        { x: 80, y: 1160 }, { x: 620, y: 1140 }, { x: 1080, y: 1150 }, { x: 1620, y: 1170 }, { x: 1750, y: 1140 },
        { x: 280, y: 1260 }, { x: 680, y: 1240 }, { x: 1180, y: 1250 }, { x: 1580, y: 1230 },
        
        // Bottom area - avoiding parks
        { x: 50, y: 1360 }, { x: 180, y: 1340 }, { x: 580, y: 1350 }, { x: 980, y: 1330 }, { x: 1400, y: 1380 }, { x: 1700, y: 1350 },
        { x: 150, y: 1460 }, { x: 580, y: 1440 }, { x: 850, y: 1450 }, { x: 1350, y: 1430 }, { x: 1650, y: 1460 },
        { x: 80, y: 1580 }, { x: 380, y: 1560 }, { x: 780, y: 1570 }, { x: 1050, y: 1540 }, { x: 1450, y: 1580 }, { x: 1750, y: 1560 },
        { x: 200, y: 1700 }, { x: 620, y: 1680 }, { x: 920, y: 1690 }, { x: 1320, y: 1670 }, { x: 1650, y: 1700 },
        { x: 50, y: 1820 }, { x: 350, y: 1800 }, { x: 750, y: 1810 }, { x: 1150, y: 1790 }, { x: 1550, y: 1820 }, { x: 1750, y: 1800 },
        { x: 150, y: 1920 }, { x: 450, y: 1900 }, { x: 850, y: 1910 }, { x: 1250, y: 1890 }, { x: 1650, y: 1920 }
      ].map((pos, index) => (
        <div
          key={`tree-${index}`}
          className="absolute pointer-events-none"
          style={{ left: `${pos.x}px`, top: `${pos.y}px`, zIndex: 8 }}
        >
          <div className="w-3 h-6 bg-amber-800 rounded-sm"></div>
          <div className="absolute -top-3 -left-2 w-7 h-7 bg-green-700 rounded-full opacity-80"></div>
        </div>
      ))}
      

      
      {/* Progress numbers on path */}
      {buildings.map((building, index) => (
        <div
          key={`progress-number-${building.id}`}
          className="absolute pointer-events-none"
          style={{ 
            left: `${building.position.x - 15}px`, 
            top: `${building.position.y - 15}px`, 
            zIndex: 2000 
          }}
        >
          <div className={`w-8 h-8 rounded-full border-3 flex items-center justify-center text-sm font-bold ${
            unlockedBuildings.has(building.id) 
              ? 'bg-green-500 border-green-600 text-white' 
              : 'bg-gray-400 border-gray-500 text-gray-200'
          }`}>
            {building.id}
          </div>
        </div>
      ))}

      {/* Buildings */}
      {buildings.map(building => (
        <RealisticBuilding
          key={building.id}
          id={building.id}
          name={building.name}
          type={building.type}
          isUnlocked={unlockedBuildings.has(building.id)}
          isActive={activeBuilding === building.id}
          onClick={() => handleBuildingClick(building.id)}
          position={building.position}
        />
      ))}


    </div>
  );
};