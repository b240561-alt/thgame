import { useState, useCallback, useEffect } from 'react';
import { GameState, Player, TreasureBox, Question } from '../types/game';
import { getRandomQuestions, getQuestionsByClass } from '../data/questions';

type GamePhase = 'start' | 'loading' | 'playing' | 'completed';

const INITIAL_PLAYER: Player = {
  x: 0,
  y: 0,
  coins: 0,
  xp: 0,
  level: 1,
  completedBoxes: []
};

const createTreasureBoxes = (questions: Question[]): TreasureBox[] => {
  // Generate diverse positions across the jungle map in different zones
  const zones = [
    { centerX: 0, centerY: -60, radius: 25 },    // North zone
    { centerX: 60, centerY: -30, radius: 25 },   // Northeast zone
    { centerX: 60, centerY: 30, radius: 25 },    // Southeast zone
    { centerX: 0, centerY: 60, radius: 25 },     // South zone
    { centerX: -60, centerY: 30, radius: 25 },   // Southwest zone
    { centerX: -60, centerY: -30, radius: 25 },  // Northwest zone
    { centerX: 90, centerY: 0, radius: 20 },     // Far East
    { centerX: -90, centerY: 0, radius: 20 },    // Far West
    { centerX: 0, centerY: 90, radius: 20 },     // Far South
    { centerX: 0, centerY: -90, radius: 20 },    // Far North
    { centerX: 45, centerY: 45, radius: 15 },    // SE corner
    { centerX: -45, centerY: -45, radius: 15 }   // NW corner
  ];
  
  const positions: { x: number; y: number }[] = [];
  
  for (let i = 0; i < questions.length; i++) {
    const zone = zones[i % zones.length];
    let x, y, attempts = 0;
    let tooCloseToSpawn, tooCloseToOthers;
    
    do {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * zone.radius;
      x = zone.centerX + Math.cos(angle) * distance;
      y = zone.centerY + Math.sin(angle) * distance;
      
      // Ensure minimum distance from spawn (0,0) and other boxes
      const distanceFromSpawn = Math.sqrt(x * x + y * y);
      tooCloseToSpawn = distanceFromSpawn < 20;
      tooCloseToOthers = positions.some(pos => 
        Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)) < 20
      );
      
      attempts++;
      if (attempts > 50) break; // Prevent infinite loop
    } while ((tooCloseToSpawn || tooCloseToOthers) && attempts < 50);
    
    positions.push({ x, y });
  }

  return questions.map((question, index) => ({
    id: `box_${index + 1}`,
    x: positions[index].x,
    y: positions[index].y,
    question,
    isUnlocked: true, // All boxes are unlocked for exploration
    isCompleted: false,
    coins: 50 + (question.difficulty === 'easy' ? 25 : question.difficulty === 'medium' ? 50 : 75) // Difficulty-based rewards
  }));
};

export const useGameState = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('start');
  const [nearbyTreasure, setNearbyTreasure] = useState<TreasureBox | null>(null);
  
  const [gameState, setGameState] = useState<GameState>(() => {
    // Mix questions from all classes for variety
    const class6Questions = getQuestionsByClass(6, 4);
    const class7Questions = getQuestionsByClass(7, 4);
    const class8Questions = getQuestionsByClass(8, 4);
    const questions = [...class6Questions, ...class7Questions, ...class8Questions].sort(() => 0.5 - Math.random());
    
    const treasureBoxes = createTreasureBoxes(questions);
    
    return {
      player: INITIAL_PLAYER,
      treasureBoxes,
      currentEnvironment: 'jungle',
      isQuestionModalOpen: false,
      currentQuestion: null,
      attempts: 0,
      hintsEnabled: true
    };
  });

  const startGame = useCallback(() => {
    setGamePhase('playing');
  }, []);

  // Save game state to localStorage
  useEffect(() => {
    if (gamePhase !== 'playing') return;
    
    const saveData = {
      player: gameState.player,
      completedBoxes: gameState.treasureBoxes.filter(box => box.isCompleted).map(box => box.id),
      level: gameState.player.level
    };
    localStorage.setItem('treasureHuntSave', JSON.stringify(saveData));
  }, [gameState]);

  // Load game state from localStorage
  useEffect(() => {
    if (gamePhase !== 'playing') return;
    
    const savedData = localStorage.getItem('treasureHuntSave');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setGameState(prev => ({
          ...prev,
          player: { ...prev.player, ...parsed.player },
          treasureBoxes: prev.treasureBoxes.map(box => ({
            ...box,
            isCompleted: parsed.completedBoxes.includes(box.id),
            isUnlocked: box.isUnlocked || parsed.completedBoxes.includes(box.id)
          }))
        }));
      } catch (error) {
        console.error('Failed to load saved game:', error);
      }
    }
  }, [gamePhase]);

  const movePlayer = useCallback((x: number, y: number) => {
    // Check for nearby treasures
    const nearTreasure = gameState.treasureBoxes.find(box => {
      const distance = Math.sqrt(Math.pow(x - box.x, 2) + Math.pow(y - box.y, 2));
      return distance < 8 && box.isUnlocked && !box.isCompleted;
    });
    
    setNearbyTreasure(nearTreasure || null);
    
    setGameState(prev => ({
      ...prev,
      player: {
        ...prev.player,
        x,
        y
      }
    }));
  }, [gameState.treasureBoxes]);

  const interactWithTreasureBox = useCallback((boxId: string) => {
    const box = gameState.treasureBoxes.find(b => b.id === boxId);
    if (box && box.isUnlocked && !box.isCompleted) {
      console.log('Opening treasure box:', boxId, box.question);
      setGameState(prev => ({
        ...prev,
        isQuestionModalOpen: true,
        currentQuestion: box.question,
        attempts: 0
      }));
    }
  }, [gameState.treasureBoxes]);

  const answerQuestion = useCallback((answerIndex: number) => {
    if (!gameState.currentQuestion) return;

    const isCorrect = answerIndex === gameState.currentQuestion.correctAnswer;
    const newAttempts = gameState.attempts + 1;

    setGameState(prev => {
      const updatedBoxes = prev.treasureBoxes.map(box => {
        if (box.question.id === prev.currentQuestion?.id) {
          if (isCorrect || newAttempts >= 3) {
            // Mark box as completed and unlock next box
            const boxIndex = prev.treasureBoxes.findIndex(b => b.id === box.id);
            const nextBox = prev.treasureBoxes[boxIndex + 1];
            
            return { ...box, isCompleted: true };
          }
        }
        return box;
      });

      // Unlock next box if current is completed
      const completedBoxIndex = updatedBoxes.findIndex(box => 
        box.question.id === prev.currentQuestion?.id && box.isCompleted
      );
      
      if (completedBoxIndex !== -1 && completedBoxIndex < updatedBoxes.length - 1) {
        updatedBoxes[completedBoxIndex + 1].isUnlocked = true;
      }

      // Award coins and XP
      const coinsEarned = isCorrect ? (updatedBoxes.find(box => box.question.id === prev.currentQuestion?.id)?.coins || 0) : 0;
      const xpEarned = isCorrect ? 100 : (newAttempts >= 3 ? 25 : 0);

      return {
        ...prev,
        treasureBoxes: updatedBoxes,
        attempts: newAttempts,
        player: {
          ...prev.player,
          coins: prev.player.coins + coinsEarned,
          xp: prev.player.xp + xpEarned,
          completedBoxes: isCorrect || newAttempts >= 3 
            ? [...prev.player.completedBoxes, updatedBoxes.find(box => box.question.id === prev.currentQuestion?.id)?.id || '']
            : prev.player.completedBoxes
        }
      };
    });
  }, [gameState.currentQuestion, gameState.attempts]);

  const closeQuestionModal = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isQuestionModalOpen: false,
      currentQuestion: null,
      attempts: 0
    }));
  }, []);

  const toggleHints = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      hintsEnabled: !prev.hintsEnabled
    }));
  }, []);

  const interactWithNearbyTreasure = useCallback(() => {
    if (nearbyTreasure) {
      interactWithTreasureBox(nearbyTreasure.id);
    }
  }, [nearbyTreasure, interactWithTreasureBox]);

  const resetGame = useCallback(() => {
    // Generate new mix of questions for replay value
    const class6Questions = getQuestionsByClass(6, 4);
    const class7Questions = getQuestionsByClass(7, 4);
    const class8Questions = getQuestionsByClass(8, 4);
    const questions = [...class6Questions, ...class7Questions, ...class8Questions].sort(() => 0.5 - Math.random());
    
    const treasureBoxes = createTreasureBoxes(questions);
    
    setGameState({
      player: INITIAL_PLAYER,
      treasureBoxes,
      currentEnvironment: 'jungle',
      isQuestionModalOpen: false,
      currentQuestion: null,
      attempts: 0,
      hintsEnabled: true
    });
    
    localStorage.removeItem('treasureHuntSave');
    setGamePhase('start');
    setNearbyTreasure(null);
  }, []);

  // Check if game is completed
  useEffect(() => {
    if (gamePhase === 'playing') {
      const completedCount = gameState.treasureBoxes.filter(box => box.isCompleted).length;
      if (completedCount === gameState.treasureBoxes.length && completedCount > 0) {
        setGamePhase('completed');
      }
    }
  }, [gameState.treasureBoxes, gamePhase]);

  return {
    gameState,
    gamePhase,
    nearbyTreasure,
    actions: {
      startGame,
      movePlayer,
      interactWithTreasureBox,
      interactWithNearbyTreasure,
      answerQuestion,
      closeQuestionModal,
      toggleHints,
      resetGame
    }
  };
};