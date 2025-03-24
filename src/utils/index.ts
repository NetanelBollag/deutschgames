import { Challenge, STORAGE_KEYS, StoredChallengeData } from '../types';

/**
 * Shuffle an array (Fisher-Yates algorithm)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Save challenge ranks to local storage
 */
export function saveChallengeRanks(challengeRanks: StoredChallengeData): void {
  localStorage.setItem(STORAGE_KEYS.CHALLENGE_RANKS, JSON.stringify(challengeRanks));
}

/**
 * Load challenge ranks from local storage
 */
export function loadChallengeRanks(): StoredChallengeData {
  const savedData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
  return savedData ? JSON.parse(savedData) : {};
}

/**
 * Apply stored ranks to challenges
 */
export function applyChallengeRanks(challenges: Challenge[]): Challenge[] {
  const storedData = loadChallengeRanks();
  
  return challenges.map(challenge => {
    const storedChallenge = storedData[challenge.id];
    if (storedChallenge) {
      return {
        ...challenge,
        rank: storedChallenge.rank,
        ignored: storedChallenge.ignored
      };
    }
    return { ...challenge, rank: 0, ignored: false };
  });
}

/**
 * Get challenge rank color class
 */
export function getRankColorClass(rank: number = 0): string {
  switch (rank) {
    case 1: return 'rank-bronze';
    case 2: return 'rank-silver';
    case 3: return 'rank-gold';
    default: return 'rank-white';
  }
}

/**
 * Format a zone ID from gender and case
 */
export function formatZoneId(gender: string, caseType: string): string {
  return `${gender}-${caseType}`;
}

/**
 * Parse a drop zone ID into gender and case
 */
export function parseZoneId(zoneId: string): { gender: string; case: string } {
  const parts = zoneId.split('-');
  
  // Special handling for hyphenated genders and cases
  if (parts.length > 2) {
    // For cases like "first-singular-present", the case is the last part
    const caseValue = parts.pop() || '';
    // The gender is everything else
    const genderValue = parts.join('-');
    return { gender: genderValue, case: caseValue };
  }
  
  // Simple case for non-hyphenated values
  return { gender: parts[0], case: parts[1] };
}

/**
 * Check if an answer is correct
 */
export function isAnswerCorrect(
  zoneId: string, 
  value: string, 
  challenge: Challenge
): boolean {
  const { gender, case: caseType } = parseZoneId(zoneId);
  
  // Use custom validation logic if provided
  if (challenge.customValidation) {
    return challenge.customValidation(gender, caseType, value);
  }
  
  // Standard validation
  return challenge.correctAnswers.some(answer => 
    answer.gender === gender && 
    answer.case === caseType && 
    answer.value === value
  );
} 