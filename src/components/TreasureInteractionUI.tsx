import React from 'react';
import { Package, Sparkles } from 'lucide-react';

interface TreasureInteractionUIProps {
  isNearTreasure: boolean;
  treasureName?: string;
  onInteract: () => void;
}

export const TreasureInteractionUI: React.FC<TreasureInteractionUIProps> = ({
  isNearTreasure,
  treasureName,
  onInteract
}) => {
  if (!isNearTreasure) return null;

  return (
    <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50">
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 text-center animate-bounce">
        <div className="flex items-center justify-center mb-4">
          <Package className="text-yellow-600 mr-2" size={32} />
          <Sparkles className="text-yellow-500" size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Treasure Box Found!
        </h3>
        
        {treasureName && (
          <p className="text-gray-600 mb-4">
            {treasureName}
          </p>
        )}
        
        <button
          onClick={onInteract}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Open Treasure Box
        </button>
        
        <p className="text-sm text-gray-500 mt-3">
          Or press <kbd className="bg-gray-200 px-2 py-1 rounded">E</kbd> to interact
        </p>
      </div>
    </div>
  );
};