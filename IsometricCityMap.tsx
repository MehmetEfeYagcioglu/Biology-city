import React, { useState } from 'react';
import { IsometricBuilding } from './IsometricBuilding';

interface BuildingData {
  id: number;
  name: string;
  type: string;
  position: { x: number; y: number };
}

const buildings: BuildingData[] = [
  { id: 1, name: "ATP Power Plant", type: "atp-power-plant", position: { x: 80, y: 500 } },
  { id: 2, name: "Photosynthesis Greenhouse Park", type: "photosynthesis-solar-park", position: { x: 250, y: 450 } },
  { id: 3, name: "Chloroplast Research Laboratory", type: "chloroplast-research-center", position: { x: 420, y: 380 } },
  { id: 4, name: "Light Tower Observatory", type: "light-tower", position: { x: 580, y: 320 } },
  { id: 5, name: "Calvin Cycle Factory", type: "calvin-cycle-factory", position: { x: 720, y: 260 } },
  { id: 6, name: "Organic Synthesis Laboratory", type: "organic-synthesis-lab", position: { x: 850, y: 320 } },
  { id: 7, name: "Digestive Diversity Museum", type: "digestive-diversity-museum", position: { x: 780, y: 480 } },
  { id: 8, name: "Digestive Anatomy Tower", type: "digestive-anatomy-tower", position: { x: 620, y: 540 } },
  { id: 9, name: "Human Digestive Hospital", type: "human-digestive-hospital", position: { x: 450, y: 600 } },
  { id: 10, name: "Chemical Digestion Lab", type: "chemical-digestion-lab", position: { x: 280, y: 560 } },
  { id: 11, name: "Absorption & Transport Station", type: "absorption-transport-station", position: { x: 120, y: 620 } },
  { id: 12, name: "Oxygen Respiration Powerhouse", type: "oxygen-respiration-powerhouse", position: { x: 60, y: 760 } },
  { id: 13, name: "Krebs & ETS Reactor", type: "krebs-ets-reactor", position: { x: 280, y: 720 } },
  { id: 14, name: "Fermentation Brewery", type: "fermentation-brewery", position: { x: 500, y: 780 } }
];

const roadConnections = [
  { from: 1, to: 2, waypoints: [] },
  { from: 2, to: 3, waypoints: [] },
  { from: 3, to: 4, waypoints: [] },
  { from: 4, to: 5, waypoints: [] },
  { from: 5, to: 6, waypoints: [] },
  { from: 6, to: 7, waypoints: [] },
  { from: 7, to: 8, waypoints: [] },
  { from: 8, to: 9, waypoints: [] },
  { from: 9, to: 10, waypoints: [] },
  { from: 10, to: 11, waypoints: [] },
  { from: 11, to: 12, waypoints: [] },
  { from: 12, to: 13, waypoints: [] },
  { from: 13, to: 14, waypoints: [] }
];

export const IsometricCityMap: React.FC = () => {
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

  const getRoadBetweenBuildings = (fromId: number, toId: number) => {
    const fromBuilding = buildings.find(b => b.id === fromId);
    const toBuilding = buildings.find(b => b.id === toId);
    
    if (!fromBuilding || !toBuilding) return null;

    const fromX = fromBuilding.position.x + 40; // Center of building
    const fromY = fromBuilding.position.y + 60; // Bottom of building
    const toX = toBuilding.position.x + 40;
    const toY = toBuilding.position.y + 60;

    const isUnlocked = unlockedBuildings.has(toId);
    const roadClass = isUnlocked ? "stroke-gray-600" : "stroke-gray-400";

    return (
      <g key={`road-${fromId}-${toId}`}>
        {/* Road base */}
        <line
          x1={fromX}
          y1={fromY}
          x2={toX}
          y2={toY}
          stroke={isUnlocked ? "#6b7280" : "#9ca3af"}
          strokeWidth="8"
          opacity={isUnlocked ? 1 : 0.6}
        />
        {/* Road markings */}
        <line
          x1={fromX}
          y1={fromY}
          x2={toX}
          y2={toY}
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="8,8"
          opacity={isUnlocked ? 0.8 : 0.4}
        />
      </g>
    );
  };

  const getEnvironmentalElements = () => {
    const elements = [];
    
    // Trees
    const treePositions = [
      { x: 150, y: 300 }, { x: 350, y: 250 }, { x: 500, y: 200 },
      { x: 680, y: 150 }, { x: 50, y: 400 }, { x: 900, y: 400 },
      { x: 200, y: 650 }, { x: 400, y: 700 }, { x: 600, y: 650 },
      { x: 800, y: 600 }, { x: 100, y: 800 }, { x: 600, y: 850 }
    ];

    treePositions.forEach((pos, index) => {
      elements.push(
        <div
          key={`tree-${index}`}
          className="absolute"
          style={{ left: `${pos.x}px`, top: `${pos.y}px`, zIndex: 50 }}
        >
          {/* Tree trunk */}
          <div className="w-2 h-8 bg-amber-800 transform skew-y-12 relative">
            <div className="absolute top-0 left-0 w-2 h-8 bg-amber-700 transform -skew-y-12 skew-x-12"></div>
          </div>
          {/* Tree canopy */}
          <div className="absolute -top-6 -left-2 w-6 h-6 bg-green-600 rounded-full">
            <div className="absolute top-0 left-0 w-6 h-3 bg-green-500 rounded-t-full transform skew-x-6"></div>
          </div>
        </div>
      );
    });

    // Streetlights
    const lightPositions = [
      { x: 180, y: 420 }, { x: 380, y: 350 }, { x: 550, y: 280 },
      { x: 720, y: 380 }, { x: 350, y: 580 }, { x: 180, y: 640 },
      { x: 380, y: 680 }, { x: 580, y: 720 }
    ];

    lightPositions.forEach((pos, index) => {
      const isLit = unlockedBuildings.size > index;
      elements.push(
        <div
          key={`light-${index}`}
          className="absolute"
          style={{ left: `${pos.x}px`, top: `${pos.y}px`, zIndex: 40 }}
        >
          {/* Light pole */}
          <div className="w-1 h-12 bg-gray-600"></div>
          {/* Light fixture */}
          <div className={`absolute -top-2 -left-1 w-3 h-3 rounded-full ${isLit ? 'bg-yellow-300 shadow-yellow-300 shadow-lg' : 'bg-gray-400'}`}>
            {isLit && (
              <div className="absolute -inset-2 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
            )}
          </div>
        </div>
      );
    });

    // Cars on roads (only on unlocked road segments)
    const carPositions = [
      { x: 200, y: 480, visible: unlockedBuildings.has(2) },
      { x: 350, y: 420, visible: unlockedBuildings.has(3) },
      { x: 500, y: 360, visible: unlockedBuildings.has(4) },
      { x: 650, y: 400, visible: unlockedBuildings.has(6) },
      { x: 400, y: 580, visible: unlockedBuildings.has(9) },
      { x: 200, y: 640, visible: unlockedBuildings.has(11) }
    ];

    carPositions.forEach((car, index) => {
      if (car.visible) {
        elements.push(
          <div
            key={`car-${index}`}
            className="absolute animate-pulse"
            style={{ left: `${car.x}px`, top: `${car.y}px`, zIndex: 60 }}
          >
            <div className="w-4 h-2 bg-blue-600 rounded-sm transform skew-y-12">
              <div className="absolute top-0 left-0 w-4 h-2 bg-blue-500 transform -skew-y-12 skew-x-12 rounded-sm"></div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-80"></div>
            </div>
          </div>
        );
      }
    });

    return elements;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-300 via-sky-200 to-green-200 relative overflow-auto">
      {/* Background sky elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-80 left-1/3 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-60 right-1/4 w-12 h-12 bg-white rounded-full"></div>
      </div>

      {/* Ground texture */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(0,0,0,0.1) 20px,
              rgba(0,0,0,0.1) 22px
            )`
          }}
        ></div>
      </div>

      {/* Roads between buildings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 30 }}>
        {roadConnections.map(connection => 
          getRoadBetweenBuildings(connection.from, connection.to)
        )}
      </svg>

      {/* Environmental elements */}
      {getEnvironmentalElements()}

      {/* Buildings */}
      {buildings.map(building => (
        <IsometricBuilding
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
      <div className="absolute top-6 left-6 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 z-50 backdrop-blur-sm border border-white border-opacity-50">
        <h3 className="mb-3 text-gray-800">Biology City Progress</h3>
        <div className="flex items-center gap-3">
          <div className="w-40 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-700 ease-out"
              style={{ width: `${(unlockedBuildings.size / buildings.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-700">{unlockedBuildings.size}/{buildings.length}</span>
        </div>
        <div className="mt-2 text-xs text-gray-600">
          Complete topics to unlock new buildings!
        </div>
      </div>

      {/* Current building info */}
      {activeBuilding && (
        <div className="absolute top-6 right-6 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 z-50 max-w-80 backdrop-blur-sm border border-white border-opacity-50">
          <h3 className="mb-3 text-gray-800">Current Topic</h3>
          <p className="text-sm text-gray-700 mb-2">
            <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-xs text-center leading-6 mr-2">
              {activeBuilding}
            </span>
            {buildings.find(b => b.id === activeBuilding)?.name}
          </p>
          <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-lg">
            🎯 Study this biology topic to unlock the next building in your learning journey!
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 z-50 text-center backdrop-blur-sm border border-white border-opacity-50">
        <p className="text-sm mb-2 text-gray-800">🧬 Welcome to Biology City</p>
        <p className="text-xs text-gray-600 max-w-md">
          Explore each building to learn biology concepts! Start with the ATP Power Plant and work your way through the city. Completed buildings light up and unlock the next topic in your journey.
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white bg-opacity-95 rounded-xl shadow-xl p-4 z-50 backdrop-blur-sm border border-white border-opacity-50">
        <h4 className="text-sm mb-2 text-gray-800">Legend</h4>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Unlocked & Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Locked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gray-600 rounded"></div>
            <span>Active Roads</span>
          </div>
        </div>
      </div>
    </div>
  );
};