import { Challenge, GameState, STORAGE_KEYS, StoredChallengeData } from './types';

/**
 * Fisher-Yates shuffle algorithm for randomizing arrays
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Save challenge ranks to local storage
 */
export const saveChallengeRanks = (gameState: GameState) => {
  const challengeData: StoredChallengeData = {};
  
  // Save all challenges including those not in the current rotation
  gameState.challenges.forEach(challenge => {
    challengeData[challenge.id] = {
      rank: challenge.rank || 1,
      ignored: challenge.ignored || false
    };
  });
  
  // Add ignored challenges
  gameState.ignoredChallenges.forEach(id => {
    if (!challengeData[id]) {
      challengeData[id] = {
        rank: 1,
        ignored: true
      };
    }
  });
  
  // Add completed challenges
  gameState.completedChallenges.forEach(id => {
    if (!challengeData[id]) {
      challengeData[id] = {
        rank: 3,
        ignored: false
      };
    }
  });
  
  localStorage.setItem(STORAGE_KEYS.CHALLENGE_RANKS, JSON.stringify(challengeData));
};

/**
 * Check if we're on a touch device
 */
export const isTouchDevice = (): boolean => {
  return ('ontouchstart' in window) || 
    (navigator.maxTouchPoints > 0);
};

/**
 * Check if a challenge is complete (all zones filled)
 */
export const isGameChallengeComplete = (): boolean => {
  const dropZones = document.querySelectorAll('.drop-zone');
  let allFilled = true;
  
  dropZones.forEach(zone => {
    if (!zone.querySelector('.draggable-card')) {
      allFilled = false;
    }
  });
  
  return allFilled;
};

/**
 * Find a drop zone element under touch coordinates
 */
export const getTouchDropZone = (x: number, y: number): HTMLElement | null => {
  const elements = document.elementsFromPoint(x, y);
  for (const el of elements) {
    if (el.classList.contains('drop-zone')) {
      return el as HTMLElement;
    }
  }
  return null;
}; 