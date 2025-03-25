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
  try {
    // First, load existing challenge data from local storage
    const savedData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
    const challengeData: StoredChallengeData = savedData ? JSON.parse(savedData) : {};
    
    // Save all challenges including those not in the current rotation
    gameState.challenges.forEach(challenge => {
      // Ensure the challenge has a valid rank
      const currentRank = challenge.rank !== undefined ? challenge.rank : 0;
      
      // Log the update for debugging
      console.log(`Saving challenge ${challenge.id} with rank ${currentRank}`);
      
      challengeData[challenge.id] = {
        rank: currentRank,
        ignored: challenge.ignored || false
      };
    });
    
    // Add ignored challenges
    gameState.ignoredChallenges.forEach(id => {
      if (!challengeData[id]) {
        challengeData[id] = {
          rank: 3,
          ignored: true
        };
      } else {
        // If it exists but is not marked as ignored, update it
        challengeData[id].rank = 3;
        challengeData[id].ignored = true;
      }
    });
    
    // Add completed challenges
    gameState.completedChallenges.forEach(id => {
      if (!challengeData[id]) {
        challengeData[id] = {
          rank: 3,
          ignored: false
        };
      } else if (!challengeData[id].ignored) {
        // Only update rank if not ignored
        challengeData[id].rank = 3;
      }
    });
    
    // Save to local storage
    localStorage.setItem(STORAGE_KEYS.CHALLENGE_RANKS, JSON.stringify(challengeData));
    
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error('Error saving challenge ranks:', error);
    return false;
  }
};

/**
 * Reset all storage data
 */
export const resetAllStorage = (): boolean => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CHALLENGE_RANKS);
    localStorage.removeItem(STORAGE_KEYS.IGNORED_CHALLENGES);
    console.log('All storage has been reset');
    return true;
  } catch (error) {
    console.error('Error resetting storage:', error);
    return false;
  }
};

/**
 * Check if we're on a touch device
 */
export const isTouchDevice = (): boolean => {
  return ('ontouchstart' in window) || 
    (navigator.maxTouchPoints > 0);
};

/**
 * Check if a challenge is complete (all zones filled and correct)
 */
export const isGameChallengeComplete = (): boolean => {
  const dropZones = document.querySelectorAll('.drop-zone');
  let allFilled = true;
  let allCorrect = true;
  
  dropZones.forEach(zone => {
    if (!zone.querySelector('.draggable-card')) {
      allFilled = false;
    }
    if (!zone.classList.contains('correct')) {
      allCorrect = false;
    }
  });
  
  return allFilled && allCorrect;
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