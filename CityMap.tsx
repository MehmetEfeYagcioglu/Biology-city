import React, { useState } from 'react';
import { Building } from './Building';

interface BuildingData {
  id: number;
  name: string;
  type: string;
  position: { x: number; y: number };
}

const buildings: BuildingData[] = [
  { id: 1, name: "ATP Power Plant", type: "atp-power-plant", position: { x: 50, y: 400 } },
  { id: 2, name: "Photosynthesis Solar Park", type: "photosynthesis-solar-park", position: { x: 200, y: 350 } },
  { id: 3, name: "Chloroplast Research Center", type: "chloroplast-research-center", position: { x: 350, y: 300 } },
  { id: 4, name: "Light Tower", type: "light-tower", position: { x: 500, y: 250 } },
  { id: 5, name: "Calvin Cycle Factory", type: "calvin-cycle-factory", position: { x: 650, y: 200 } },
  { id: 6, name: "Organic Synthesis Lab", type: "organic-synthesis-lab", position: { x: 750, y: 300 } },
  { id: 7, name: "Digestive Diversity Museum", type: "digestive-diversity-museum", position: { x: 700, y: 450 } },
  { id: 8, name: "Digestive Anatomy Tower", type: "digestive-anatomy-tower", position: { x: 550, y: 500 } },
  { id: 9, name: "Human Digestive Hospital", type: "human-digestive-hospital", position: { x: 400, y: 550 } },
  { id: 10, name: "Chemical Digestion Lab", type: "chemical-digestion-lab", position: { x: 250, y: 500 } },
  { id: 11, name: "Absorption & Transport Station", type: "absorption-transport-station", position: { x: 100, y: 550 } },
  { id: 12, name: "Oxygen Respiration Powerhouse", type: "oxygen-respiration-powerhouse", position: { x: 50, y: 700 } },
  { id: 13, name: "Krebs & ETS Reactor", type: "krebs-ets-reactor", position: { x: 250, y: 750 } },
  { id: 14, name: "Fermentation Brewery", type: "fermentation-brewery", position: { x: 450, y: 700 } }
];

const pathConnections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 9, to: 10 },
  { from: 10, to: 11 },
  { from: 11, to: 12 },
  { from: 12, to: 13 },
  { from: 13, to: 14 }
];

export const CityMap: React.FC = () => {
  const [unlockedBuildings, setUnlockedBuildings] = useState<Set<number>>(new Set([1]));
  const [activeBuilding, setActiveBuilding] = useState<number>(1);

  const handleBuildingClick = (buildingId: number) => {
    if (unlockedBuildings.has(buildingId)) {
      setActiveBuilding(buildingId);
      
      // Unlock the next building if this one is completed
      if (buildingId === Math.max(...unlockedBuildings) && buildingId < 14) {
        const nextBuildingId = buildingId + 1;
        setUnlockedBuildings(prev => new Set([...prev, nextBuildingId]));
      }
    }
  };

  const getPathBetweenBuildings = (fromId: number, toId: number) => {
    const fromBuilding = buildings.find(b => b.id === fromId);
    const toBuilding = buildings.find(b => b.id === toId);
    
    if (!fromBuilding || !toBuilding) return null;

    const fromX = fromBuilding.position.x + 40; // Center of building
    const fromY = fromBuilding.position.y + 40;
    const toX = toBuilding.position.x + 40;
    const toY = toBuilding.position.y + 40;

    const isUnlocked = unlockedBuildings.has(toId);
    const pathClass = isUnlocked ? "stroke-blue-400" : "stroke-gray-300";

    return (
      <line
        key={`path-${fromId}-${toId}`}
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="10,5"
        className={pathClass}
        opacity={isUnlocked ? 1 : 0.3}
      />
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-200 to-green-200 relative overflow-auto">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white rounded-full"></div>
      </div>

      {/* Paths between buildings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {pathConnections.map(connection => 
          getPathBetweenBuildings(connection.from, connection.to)
        )}
      </svg>

      {/* Buildings */}
      {buildings.map(building => (
        <Building
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

      {/* Progress indicator */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 z-10">
        <h3 className="mb-2">Progress</h3>
        <div className="flex items-center gap-2">
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
              style={{ width: `${(unlockedBuildings.size / buildings.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm">{unlockedBuildings.size}/{buildings.length}</span>
        </div>
      </div>

      {/* Current building info */}
      {activeBuilding && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10 max-w-64">
          <h3 className="mb-2">Current Topic</h3>
          <p className="text-sm">
            {buildings.find(b => b.id === activeBuilding)?.name}
          </p>
          <div className="mt-2 text-xs text-gray-600">
            Click to explore and unlock the next building!
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 z-10 text-center">
        <p className="text-sm mb-2">🎓 Biology City Adventure</p>
        <p className="text-xs text-gray-600">
          Click on unlocked buildings to learn and progress through biology topics!
        </p>
      </div>
    </div>
  );
};