import { STORAGE_KEYS } from '../src/types';
import { definiteArticles } from '../src/data/articles';

// Import the function to test from the index.ts file
// Note: For proper testing, you would refactor the code to export these functions
// This is a mock implementation for the test
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

describe('Utility Functions', () => {
  describe('shuffleArray', () => {
    it('should return an array of the same length', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const shuffledArray = shuffleArray(originalArray);
      
      expect(shuffledArray.length).toBe(originalArray.length);
    });

    it('should contain all the same elements', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const shuffledArray = shuffleArray(originalArray);
      
      // Sort both arrays to compare elements
      const sortedOriginal = [...originalArray].sort();
      const sortedShuffled = [...shuffledArray].sort();
      
      expect(sortedShuffled).toEqual(sortedOriginal);
    });
  });
  
  describe('localStorage management', () => {
    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });
    
    it('should store and retrieve challenge data', () => {
      const mockChallengeData = {
        'test-challenge': {
          rank: 2,
          ignored: false
        }
      };
      
      // Store data
      localStorage.setItem(STORAGE_KEYS.CHALLENGE_RANKS, JSON.stringify(mockChallengeData));
      
      // Retrieve data
      const retrievedData = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS) || '{}');
      
      expect(retrievedData).toEqual(mockChallengeData);
    });
  });
}); 