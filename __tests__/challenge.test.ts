import { definiteArticles } from '../src/data/articles';
import { personalPronouns } from '../src/data/pronouns';

// Mock of the custom validation function
const customValidation = (zoneGender: string, zoneCase: string, article: string) => {
  // Map of expected values for each gender
  const expectedValues: Record<string, string> = {
    'first-singular': 'könnte',
    'second-singular': 'könntest',
    'third-singular': 'könnte',
    'first-plural': 'könnten',
    'second-plural': 'könntet',
    'third-plural': 'könnten'
  };
  
  return expectedValues[zoneGender] === article;
};

describe('Challenge Validation', () => {
  describe('Definite Articles', () => {
    it('should correctly validate nominative articles', () => {
      const nominativeArticles = definiteArticles.filter(
        article => article.case === 'nominative' && article.type === 'definite'
      );
      
      // There should be one article for each gender in nominative case
      expect(nominativeArticles.length).toBe(4); // masculine, feminine, neuter, plural
      
      // Check if the masculine nominative article is 'der'
      const masculineArticle = nominativeArticles.find(article => article.gender === 'masculine');
      expect(masculineArticle?.value).toBe('der');
      
      // Check if the feminine nominative article is 'die'
      const feminineArticle = nominativeArticles.find(article => article.gender === 'feminine');
      expect(feminineArticle?.value).toBe('die');
    });
  });
  
  describe('Personal Pronouns', () => {
    it('should correctly validate nominative personal pronouns', () => {
      const nominativePronouns = personalPronouns.filter(pronoun => pronoun.case === 'nominative');
      
      // There should be one pronoun for each person in nominative case
      expect(nominativePronouns.length).toBeGreaterThan(0);
      
      // Check first person singular
      const firstPersonSingular = nominativePronouns.find(pronoun => pronoun.gender === 'first-singular');
      expect(firstPersonSingular?.value).toBe('ich');
    });
  });
  
  describe('Custom Validation', () => {
    it('should correctly validate können conjugations', () => {
      // Test first person singular
      expect(customValidation('first-singular', 'conditional', 'könnte')).toBe(true);
      expect(customValidation('first-singular', 'conditional', 'könntest')).toBe(false);
      
      // Test second person singular
      expect(customValidation('second-singular', 'conditional', 'könntest')).toBe(true);
      expect(customValidation('second-singular', 'conditional', 'könnte')).toBe(false);
      
      // Test plural forms
      expect(customValidation('first-plural', 'conditional', 'könnten')).toBe(true);
      expect(customValidation('second-plural', 'conditional', 'könntet')).toBe(true);
      expect(customValidation('third-plural', 'conditional', 'könnten')).toBe(true);
    });
  });
}); 