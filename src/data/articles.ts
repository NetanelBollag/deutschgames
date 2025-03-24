import { Article } from '../types';

// Definite articles (der, die, das, die)
export const definiteArticles: Article[] = [
  // Nominative
  {
    value: 'der',
    gender: 'masculine',
    case: 'nominative',
    type: 'definite',
    translation: {
      hebrew: 'ה',
    },
  },
  {
    value: 'die',
    gender: 'feminine',
    case: 'nominative',
    type: 'definite',
    translation: {
      hebrew: 'ה',
    },
  },
  {
    value: 'das',
    gender: 'neuter',
    case: 'nominative',
    type: 'definite',
    translation: {
      hebrew: 'ה',
    },
  },
  {
    value: 'die',
    gender: 'plural',
    case: 'nominative',
    type: 'definite',
    translation: {
      hebrew: 'ה',
    },
  },
  
  // Accusative
  {
    value: 'den',
    gender: 'masculine',
    case: 'accusative',
    type: 'definite',
    translation: {
      hebrew: 'את ה',
    },
  },
  {
    value: 'die',
    gender: 'feminine',
    case: 'accusative',
    type: 'definite',
    translation: {
      hebrew: 'את ה',
    },
  },
  {
    value: 'das',
    gender: 'neuter',
    case: 'accusative',
    type: 'definite',
    translation: {
      hebrew: 'את ה',
    },
  },
  {
    value: 'die',
    gender: 'plural',
    case: 'accusative',
    type: 'definite',
    translation: {
      hebrew: 'את ה',
    },
  },
  
  // Dative
  {
    value: 'dem',
    gender: 'masculine',
    case: 'dative',
    type: 'definite',
    translation: {
      hebrew: 'ל',
    },
  },
  {
    value: 'der',
    gender: 'feminine',
    case: 'dative',
    type: 'definite',
    translation: {
      hebrew: 'ל',
    },
  },
  {
    value: 'dem',
    gender: 'neuter',
    case: 'dative',
    type: 'definite',
    translation: {
      hebrew: 'ל',
    },
  },
  {
    value: 'den',
    gender: 'plural',
    case: 'dative',
    type: 'definite',
    translation: {
      hebrew: 'ל',
    },
  },
  
  // Genitive
  {
    value: 'des',
    gender: 'masculine',
    case: 'genitive',
    type: 'definite',
    translation: {
      hebrew: 'של ה',
    },
  },
  {
    value: 'der',
    gender: 'feminine',
    case: 'genitive',
    type: 'definite',
    translation: {
      hebrew: 'של ה',
    },
  },
  {
    value: 'des',
    gender: 'neuter',
    case: 'genitive',
    type: 'definite',
    translation: {
      hebrew: 'של ה',
    },
  },
  {
    value: 'der',
    gender: 'plural',
    case: 'genitive',
    type: 'definite',
    translation: {
      hebrew: 'של ה',
    },
  },
];

// Indefinite articles (ein, eine, ein, keine)
export const indefiniteArticles: Article[] = [
  // Nominative
  {
    value: 'ein',
    gender: 'masculine',
    case: 'nominative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחד',
    },
  },
  {
    value: 'eine',
    gender: 'feminine',
    case: 'nominative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחת',
    },
  },
  {
    value: 'ein',
    gender: 'neuter',
    case: 'nominative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחד',
    },
  },
  {
    value: 'keine',
    gender: 'plural',
    case: 'nominative',
    type: 'indefinite',
    translation: {
      hebrew: 'אף אחד',
    },
  },
  
  // Accusative
  {
    value: 'einen',
    gender: 'masculine',
    case: 'accusative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחד',
    },
  },
  {
    value: 'eine',
    gender: 'feminine',
    case: 'accusative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחת',
    },
  },
  {
    value: 'ein',
    gender: 'neuter',
    case: 'accusative',
    type: 'indefinite',
    translation: {
      hebrew: 'אחד',
    },
  },
  {
    value: 'keine',
    gender: 'plural',
    case: 'accusative',
    type: 'indefinite',
    translation: {
      hebrew: 'אף אחד',
    },
  },
  
  // Dative
  {
    value: 'einem',
    gender: 'masculine',
    case: 'dative',
    type: 'indefinite',
    translation: {
      hebrew: 'לאחד',
    },
  },
  {
    value: 'einer',
    gender: 'feminine',
    case: 'dative',
    type: 'indefinite',
    translation: {
      hebrew: 'לאחת',
    },
  },
  {
    value: 'einem',
    gender: 'neuter',
    case: 'dative',
    type: 'indefinite',
    translation: {
      hebrew: 'לאחד',
    },
  },
  {
    value: 'keinen',
    gender: 'plural',
    case: 'dative',
    type: 'indefinite',
    translation: {
      hebrew: 'לאף אחד',
    },
  },
  
  // Genitive
  {
    value: 'eines',
    gender: 'masculine',
    case: 'genitive',
    type: 'indefinite',
    translation: {
      hebrew: 'של אחד',
    },
  },
  {
    value: 'einer',
    gender: 'feminine',
    case: 'genitive',
    type: 'indefinite',
    translation: {
      hebrew: 'של אחת',
    },
  },
  {
    value: 'eines',
    gender: 'neuter',
    case: 'genitive',
    type: 'indefinite',
    translation: {
      hebrew: 'של אחד',
    },
  },
  {
    value: 'keiner',
    gender: 'plural',
    case: 'genitive',
    type: 'indefinite',
    translation: {
      hebrew: 'של אף אחד',
    },
  },
];

// Possessive articles (mein, meine, mein, meine)
export const possessiveArticles: Article[] = [
  // Nominative
  {
    value: 'mein',
    gender: 'masculine',
    case: 'nominative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meine',
    gender: 'feminine',
    case: 'nominative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'mein',
    gender: 'neuter',
    case: 'nominative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meine',
    gender: 'plural',
    case: 'nominative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  
  // Accusative
  {
    value: 'meinen',
    gender: 'masculine',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'את שלי',
    },
  },
  {
    value: 'meine',
    gender: 'feminine',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'את שלי',
    },
  },
  {
    value: 'mein',
    gender: 'neuter',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'את שלי',
    },
  },
  {
    value: 'meine',
    gender: 'plural',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'את שלי',
    },
  },
  
  // Dative
  {
    value: 'meinem',
    gender: 'masculine',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'לשלי',
    },
  },
  {
    value: 'meiner',
    gender: 'feminine',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'לשלי',
    },
  },
  {
    value: 'meinem',
    gender: 'neuter',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'לשלי',
    },
  },
  {
    value: 'meinen',
    gender: 'plural',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'לשלי',
    },
  },
]; 