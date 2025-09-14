import React, { useState, useEffect } from 'react';
import { TreePine, Play, Settings, Trophy, BookOpen } from 'lucide-react';

interface GameStartScreenProps {
  onStartGame: () => void;
  isLoading: boolean;
}

export const GameStartScreen: React.FC<GameStartScreenProps> = ({ onStartGame, isLoading }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-600 via-green-500 to-green-400 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <TreePine className="text-white mx-auto mb-4" size={80} />
            <h1 className="text-4xl font-bold text-white mb-2">NCERT Math Adventure</h1>
            <p className="text-green-100 text-lg">Loading your jungle adventure...</p>
          </div>
          
          <div className="w-80 bg-white bg-opacity-20 rounded-full h-4 mb-4">
            <div 
              className="bg-white h-4 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            ></div>
          </div>
          
          <p className="text-white text-sm">
            {loadingProgress < 30 && "Generating jungle terrain..."}
            {loadingProgress >= 30 && loadingProgress < 60 && "Placing treasure boxes..."}
            {loadingProgress >= 60 && loadingProgress < 90 && "Loading NCERT questions..."}
            {loadingProgress >= 90 && "Almost ready!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-600 via-green-500 to-green-400 flex items-center justify-center z-50">
      <div className="text-center max-w-2xl px-8">
        {/* Game Logo */}
        <div className="mb-8">
          <TreePine className="text-white mx-auto mb-4" size={100} />
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            NCERT Math Adventure
          </h1>
          <p className="text-green-100 text-xl mb-2">
            Explore the jungle and solve NCERT mathematics problems!
          </p>
          <p className="text-green-200 text-lg">
            Classes 6-8 • Interactive Learning • 3D Adventure
          </p>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <BookOpen className="text-white mx-auto mb-3" size={40} />
            <h3 className="text-white font-bold text-lg mb-2">NCERT Curriculum</h3>
            <p className="text-green-100 text-sm">
              Solve authentic NCERT mathematics problems from Classes 6-8
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <TreePine className="text-white mx-auto mb-3" size={40} />
            <h3 className="text-white font-bold text-lg mb-2">3D Jungle World</h3>
            <p className="text-green-100 text-sm">
              Explore a vast 3D jungle environment with hidden treasures
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <Trophy className="text-white mx-auto mb-3" size={40} />
            <h3 className="text-white font-bold text-lg mb-2">Earn Rewards</h3>
            <p className="text-green-100 text-sm">
              Collect coins and XP by solving problems correctly
            </p>
          </div>
        </div>

        {/* Game Instructions */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h3 className="text-white font-bold text-lg mb-4">How to Play</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="text-green-100">
              <p className="mb-2">🎮 <strong>Controls:</strong> WASD to move, Mouse to look, SPACE to jump</p>
              <p className="mb-2">🏃‍♂️ <strong>Movement:</strong> Walk around the jungle to find treasure boxes</p>
            </div>
            <div className="text-green-100">
              <p className="mb-2">📦 <strong>Treasures:</strong> Get close to glowing boxes to open them</p>
              <p className="mb-2">🧠 <strong>Questions:</strong> Solve NCERT math problems to earn rewards</p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartGame}
          className="bg-white hover:bg-green-50 text-green-600 font-bold text-xl px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl flex items-center space-x-3 mx-auto"
        >
          <Play size={28} />
          <span>Start Adventure</span>
        </button>

        <p className="text-green-200 text-sm mt-6">
          Click anywhere on the game screen to lock your mouse cursor for better control
        </p>
      </div>
    </div>
  );
};