import { shuffleArray, saveChallengeRanks, isGameChallengeComplete } from '../src/utils';
import { STORAGE_KEYS, GameState, Challenge } from '../src/types';

describe('Extracted Utility Functions', () => {
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
  
  describe('saveChallengeRanks', () => {
    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });
    
    it('should save challenge data to localStorage', () => {
      // Create mock challenges that satisfy the Challenge type
      const mockChallenges: Challenge[] = [
        {
          id: 'challenge1',
          title: 'Test Challenge 1',
          description: 'Test Description',
          articleType: 'definite',
          case: 'nominative',
          rank: 2,
          ignored: false,
          tableStructure: {
            rows: [],
            columns: []
          },
          correctAnswers: [],
          languageDirection: 'germanToHebrew'
        },
        {
          id: 'challenge2',
          title: 'Test Challenge 2',
          description: 'Test Description',
          articleType: 'definite',
          case: 'accusative',
          rank: 1,
          ignored: false,
          tableStructure: {
            rows: [],
            columns: []
          },
          correctAnswers: [],
          languageDirection: 'germanToHebrew'
        }
      ];
      
      const mockGameState: GameState = {
        currentChallengeIndex: 0,
        challenges: mockChallenges,
        score: 10,
        totalAttempts: 5,
        correctAttempts: 3,
        ignoredChallenges: ['ignored1'],
        completedChallenges: ['completed1']
      };
      
      saveChallengeRanks(mockGameState);
      
      // Get the saved data
      const savedData = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS) || '{}');
      
      // Check challenge data
      expect(savedData.challenge1.rank).toBe(2);
      expect(savedData.challenge2.rank).toBe(1);
      
      // Check ignored challenges
      expect(savedData.ignored1.ignored).toBe(true);
      
      // Check completed challenges
      expect(savedData.completed1.rank).toBe(3);
    });
  });
  
  describe('isGameChallengeComplete', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="drop-zone"></div>
        <div class="drop-zone"></div>
        <div class="drop-zone"></div>
      `;
    });
    
    it('should return false when not all zones are filled', () => {
      // Fill only one drop zone
      document.querySelectorAll('.drop-zone')[0].innerHTML = `
        <div class="draggable-card">Test Card</div>
      `;
      
      expect(isGameChallengeComplete()).toBe(false);
    });
    
    it('should return true when all zones are filled', () => {
      // Fill all drop zones
      document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = `<div class="draggable-card">Test Card</div>`;
      });
      
      expect(isGameChallengeComplete()).toBe(true);
    });
  });
}); 