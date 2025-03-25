import { Article } from '../types';

// Possessive pronouns
export const possessivePronouns: Article[] = [
  // Nominative - 1st singular (my)
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
  
  // Accusative - 1st singular (my)
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
  
  // Dative - 1st singular (my)
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
  
  // Genitive - 1st singular (my)
  {
    value: 'meines',
    gender: 'masculine',
    case: 'genitive',
    type: 'possessive'
  },
  {
    value: 'meiner',
    gender: 'feminine',
    case: 'genitive',
    type: 'possessive'
  },
  {
    value: 'meines',
    gender: 'neuter',
    case: 'genitive',
    type: 'possessive'
  },
  {
    value: 'meiner',
    gender: 'plural',
    case: 'genitive',
    type: 'possessive'
  },
];

// Personal pronouns
export const personalPronouns: Article[] = [
  // Nominative
  {
    value: 'ich',
    gender: 'first-singular',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'du',
    gender: 'second-singular',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'er',
    gender: 'masculine',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'sie',
    gender: 'feminine',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'es',
    gender: 'neuter',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'wir',
    gender: 'first-plural',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'ihr',
    gender: 'second-plural',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'sie',
    gender: 'third-plural',
    case: 'nominative',
    type: 'personal'
  },
  {
    value: 'Sie',
    gender: 'formal',
    case: 'nominative',
    type: 'personal'
  },
  
  // Accusative
  {
    value: 'mich',
    gender: 'first-singular',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'dich',
    gender: 'second-singular',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'ihn',
    gender: 'masculine',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'sie',
    gender: 'feminine',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'es',
    gender: 'neuter',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'sie',
    gender: 'third-plural',
    case: 'accusative',
    type: 'personal'
  },
  {
    value: 'Sie',
    gender: 'formal',
    case: 'accusative',
    type: 'personal'
  },
  
  // Dative
  {
    value: 'mir',
    gender: 'first-singular',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'dir',
    gender: 'second-singular',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'ihm',
    gender: 'masculine',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'ihr',
    gender: 'feminine',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'ihm',
    gender: 'neuter',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'ihnen',
    gender: 'third-plural',
    case: 'dative',
    type: 'personal'
  },
  {
    value: 'Ihnen',
    gender: 'formal',
    case: 'dative',
    type: 'personal'
  },
];

// Demonstrative pronouns
export const demonstrativePronouns: Article[] = [
  // Nominative
  {
    value: 'dieser',
    gender: 'masculine',
    case: 'nominative',
    type: 'demonstrative'
  },
  {
    value: 'diese',
    gender: 'feminine',
    case: 'nominative',
    type: 'demonstrative'
  },
  {
    value: 'dieses',
    gender: 'neuter',
    case: 'nominative',
    type: 'demonstrative'
  },
  {
    value: 'diese',
    gender: 'plural',
    case: 'nominative',
    type: 'demonstrative'
  },
  
  // Accusative
  {
    value: 'diesen',
    gender: 'masculine',
    case: 'accusative',
    type: 'demonstrative'
  },
  {
    value: 'diese',
    gender: 'feminine',
    case: 'accusative',
    type: 'demonstrative'
  },
  {
    value: 'dieses',
    gender: 'neuter',
    case: 'accusative',
    type: 'demonstrative'
  },
  {
    value: 'diese',
    gender: 'plural',
    case: 'accusative',
    type: 'demonstrative'
  },
  
  // Dative
  {
    value: 'diesem',
    gender: 'masculine',
    case: 'dative',
    type: 'demonstrative'
  },
  {
    value: 'dieser',
    gender: 'feminine',
    case: 'dative',
    type: 'demonstrative'
  },
  {
    value: 'diesem',
    gender: 'neuter',
    case: 'dative',
    type: 'demonstrative'
  },
  {
    value: 'diesen',
    gender: 'plural',
    case: 'dative',
    type: 'demonstrative'
  },
];

// Reflexive pronouns
export const reflexivePronouns: Article[] = [
  // Accusative reflexive pronouns
  {
    value: 'mich',
    gender: 'first-singular',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'dich',
    gender: 'second-singular',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'sich',
    gender: 'masculine',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'sich',
    gender: 'feminine',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'sich',
    gender: 'neuter',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'reflexive',
    type: 'reflexive'
  },
  {
    value: 'sich',
    gender: 'third-plural',
    case: 'reflexive',
    type: 'reflexive'
  },
  
  // Dative reflexive pronouns
  {
    value: 'mir',
    gender: 'first-singular',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'dir',
    gender: 'second-singular',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'sich',
    gender: 'masculine',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'sich',
    gender: 'feminine',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'sich',
    gender: 'neuter',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
  {
    value: 'sich',
    gender: 'third-plural',
    case: 'reflexive',
    type: 'reflexive-dative'
  },
]; 