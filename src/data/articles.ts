import { Article } from '../types';

// Definite articles (der, die, das, die)
export const definiteArticles: Article[] = [
  // Nominative
  {
    value: 'der',
    gender: 'masculine',
    case: 'nominative',
    type: 'definite'
  },
  {
    value: 'die',
    gender: 'feminine',
    case: 'nominative',
    type: 'definite'
  },
  {
    value: 'das',
    gender: 'neuter',
    case: 'nominative',
    type: 'definite'
  },
  {
    value: 'die',
    gender: 'plural',
    case: 'nominative',
    type: 'definite'
  },
  
  // Accusative
  {
    value: 'den',
    gender: 'masculine',
    case: 'accusative',
    type: 'definite'
  },
  {
    value: 'die',
    gender: 'feminine',
    case: 'accusative',
    type: 'definite'
  },
  {
    value: 'das',
    gender: 'neuter',
    case: 'accusative',
    type: 'definite'
  },
  {
    value: 'die',
    gender: 'plural',
    case: 'accusative',
    type: 'definite'
  },
  
  // Dative
  {
    value: 'dem',
    gender: 'masculine',
    case: 'dative',
    type: 'definite'
  },
  {
    value: 'der',
    gender: 'feminine',
    case: 'dative',
    type: 'definite'
  },
  {
    value: 'dem',
    gender: 'neuter',
    case: 'dative',
    type: 'definite'
  },
  {
    value: 'den',
    gender: 'plural',
    case: 'dative',
    type: 'definite'
  },
  
  // Genitive
  {
    value: 'des',
    gender: 'masculine',
    case: 'genitive',
    type: 'definite'
  },
  {
    value: 'der',
    gender: 'feminine',
    case: 'genitive',
    type: 'definite'
  },
  {
    value: 'des',
    gender: 'neuter',
    case: 'genitive',
    type: 'definite'
  },
  {
    value: 'der',
    gender: 'plural',
    case: 'genitive',
    type: 'definite'
  },
];

// Indefinite articles (ein, eine, ein, keine)
export const indefiniteArticles: Article[] = [
  // Nominative
  {
    value: 'ein',
    gender: 'masculine',
    case: 'nominative',
    type: 'indefinite'
  },
  {
    value: 'eine',
    gender: 'feminine',
    case: 'nominative',
    type: 'indefinite'
  },
  {
    value: 'ein',
    gender: 'neuter',
    case: 'nominative',
    type: 'indefinite'
  },
  {
    value: 'keine',
    gender: 'plural',
    case: 'nominative',
    type: 'indefinite'
  },
  
  // Accusative
  {
    value: 'einen',
    gender: 'masculine',
    case: 'accusative',
    type: 'indefinite'
  },
  {
    value: 'eine',
    gender: 'feminine',
    case: 'accusative',
    type: 'indefinite'
  },
  {
    value: 'ein',
    gender: 'neuter',
    case: 'accusative',
    type: 'indefinite'
  },
  {
    value: 'keine',
    gender: 'plural',
    case: 'accusative',
    type: 'indefinite'
  },
  
  // Dative
  {
    value: 'einem',
    gender: 'masculine',
    case: 'dative',
    type: 'indefinite'
  },
  {
    value: 'einer',
    gender: 'feminine',
    case: 'dative',
    type: 'indefinite'
  },
  {
    value: 'einem',
    gender: 'neuter',
    case: 'dative',
    type: 'indefinite'
  },
  {
    value: 'keinen',
    gender: 'plural',
    case: 'dative',
    type: 'indefinite'
  },
  
  // Genitive
  {
    value: 'eines',
    gender: 'masculine',
    case: 'genitive',
    type: 'indefinite'
  },
  {
    value: 'einer',
    gender: 'feminine',
    case: 'genitive',
    type: 'indefinite'
  },
  {
    value: 'eines',
    gender: 'neuter',
    case: 'genitive',
    type: 'indefinite'
  },
  {
    value: 'keiner',
    gender: 'plural',
    case: 'genitive',
    type: 'indefinite'
  },
];

// Possessive articles (mein, meine, mein, meine)
export const possessiveArticles: Article[] = [
  // Nominative
  {
    value: 'mein',
    gender: 'masculine',
    case: 'nominative',
    type: 'possessive'
  },
  {
    value: 'meine',
    gender: 'feminine',
    case: 'nominative',
    type: 'possessive'
  },
  {
    value: 'mein',
    gender: 'neuter',
    case: 'nominative',
    type: 'possessive'
  },
  {
    value: 'meine',
    gender: 'plural',
    case: 'nominative',
    type: 'possessive'
  },
  
  // Accusative
  {
    value: 'meinen',
    gender: 'masculine',
    case: 'accusative',
    type: 'possessive'
  },
  {
    value: 'meine',
    gender: 'feminine',
    case: 'accusative',
    type: 'possessive'
  },
  {
    value: 'mein',
    gender: 'neuter',
    case: 'accusative',
    type: 'possessive'
  },
  {
    value: 'meine',
    gender: 'plural',
    case: 'accusative',
    type: 'possessive'
  },
  
  // Dative
  {
    value: 'meinem',
    gender: 'masculine',
    case: 'dative',
    type: 'possessive'
  },
  {
    value: 'meiner',
    gender: 'feminine',
    case: 'dative',
    type: 'possessive'
  },
  {
    value: 'meinem',
    gender: 'neuter',
    case: 'dative',
    type: 'possessive'
  },
  {
    value: 'meinen',
    gender: 'plural',
    case: 'dative',
    type: 'possessive'
  },
]; 