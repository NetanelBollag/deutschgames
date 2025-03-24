// Define gender and case types
export type Gender = 'masculine' | 'feminine' | 'neuter' | 'plural' | 'first-singular' | 'second-singular' | 'third-singular' | 'first-plural' | 'second-plural' | 'third-plural' | 'formal';
export type Case = 'nominative' | 'accusative' | 'dative' | 'genitive' | 'past-tense' | 'conditional' | 'future' | 'future-perfect' | 'reflexive' | 'present' | 'perfect';
export type ArticleType = 'definite' | 'indefinite' | 'possessive' | 'personal' | 'demonstrative' | 'regular-verb' | 'sein' | 'haben' | 'werden' | 'würde' | 'können' | 'reflexive' | 'reflexive-dative' | 'future-perfect' | 'future-perfect-sein' | 'sein-present' | 'sein-perfect';

// Define the structure for an article
export interface Article {
  value: string;
  gender: Gender;
  case: Case;
  type: ArticleType;
  translation: {
    hebrew: string;
  };
}

// Define the structure for a game challenge
export interface Challenge {
  id: string;
  title: string;
  description: string;
  articleType: ArticleType;
  case: Case;
  tableStructure: {
    rows: Array<{ label: string; gender: Gender }>;
    columns: Array<{ label: string; case: Case }>;
  };
  correctAnswers: Article[];
  languageDirection: 'germanToHebrew' | 'hebrewToGerman';
  rank?: number; // Challenge rank from 1-3
  ignored?: boolean; // Whether this challenge is ignored
  onLoad?: () => void; // Optional callback when challenge is loaded
  customValidation?: (zoneGender: string, zoneCase: string, article: string) => boolean; // Custom validation logic
}

// Define game state
export interface GameState {
  currentChallengeIndex: number;
  challenges: Challenge[];
  score: number;
  totalAttempts: number;
  correctAttempts: number;
  ignoredChallenges: string[]; // Array of ids of ignored challenges
  completedChallenges: string[]; // Array of ids of completed challenges (rank 3)
}

// Storage keys for local storage
export const STORAGE_KEYS = {
  CHALLENGE_RANKS: 'germanGame_challengeRanks',
  IGNORED_CHALLENGES: 'germanGame_ignoredChallenges'
};

// Interface for storing challenge ranks
export interface StoredChallengeData {
  [challengeId: string]: {
    rank: number;
    ignored: boolean;
  };
} 