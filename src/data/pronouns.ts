import { Article } from '../types';

// Possessive pronouns
export const possessivePronouns: Article[] = [
  // Nominative - 1st singular (my)
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
  
  // Accusative - 1st singular (my)
  {
    value: 'meinen',
    gender: 'masculine',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meine',
    gender: 'feminine',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'mein',
    gender: 'neuter',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meine',
    gender: 'plural',
    case: 'accusative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  
  // Dative - 1st singular (my)
  {
    value: 'meinem',
    gender: 'masculine',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meiner',
    gender: 'feminine',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meinem',
    gender: 'neuter',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meinen',
    gender: 'plural',
    case: 'dative',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  
  // Genitive - 1st singular (my)
  {
    value: 'meines',
    gender: 'masculine',
    case: 'genitive',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meiner',
    gender: 'feminine',
    case: 'genitive',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meines',
    gender: 'neuter',
    case: 'genitive',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
  {
    value: 'meiner',
    gender: 'plural',
    case: 'genitive',
    type: 'possessive',
    translation: {
      hebrew: 'שלי',
    },
  },
];

// Personal pronouns
export const personalPronouns: Article[] = [
  // Nominative
  {
    value: 'ich',
    gender: 'first-singular',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'אני',
    },
  },
  {
    value: 'du',
    gender: 'second-singular',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'אתה/את',
    },
  },
  {
    value: 'er',
    gender: 'masculine',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'הוא',
    },
  },
  {
    value: 'sie',
    gender: 'feminine',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'היא',
    },
  },
  {
    value: 'es',
    gender: 'neuter',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'זה',
    },
  },
  {
    value: 'wir',
    gender: 'first-plural',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'אנחנו',
    },
  },
  {
    value: 'ihr',
    gender: 'second-plural',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'אתם/אתן',
    },
  },
  {
    value: 'sie',
    gender: 'third-plural',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'הם/הן',
    },
  },
  {
    value: 'Sie',
    gender: 'formal',
    case: 'nominative',
    type: 'personal',
    translation: {
      hebrew: 'אדוני/גברתי',
    },
  },
  
  // Accusative
  {
    value: 'mich',
    gender: 'first-singular',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותי',
    },
  },
  {
    value: 'dich',
    gender: 'second-singular',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותך',
    },
  },
  {
    value: 'ihn',
    gender: 'masculine',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותו',
    },
  },
  {
    value: 'sie',
    gender: 'feminine',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותה',
    },
  },
  {
    value: 'es',
    gender: 'neuter',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'את זה',
    },
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותנו',
    },
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אתכם/אתכן',
    },
  },
  {
    value: 'sie',
    gender: 'third-plural',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'אותם/אותן',
    },
  },
  {
    value: 'Sie',
    gender: 'formal',
    case: 'accusative',
    type: 'personal',
    translation: {
      hebrew: 'את אדוני/גברתי',
    },
  },
  
  // Dative
  {
    value: 'mir',
    gender: 'first-singular',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לי',
    },
  },
  {
    value: 'dir',
    gender: 'second-singular',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לך',
    },
  },
  {
    value: 'ihm',
    gender: 'masculine',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לו',
    },
  },
  {
    value: 'ihr',
    gender: 'feminine',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לה',
    },
  },
  {
    value: 'ihm',
    gender: 'neuter',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לזה',
    },
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לנו',
    },
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לכם/לכן',
    },
  },
  {
    value: 'ihnen',
    gender: 'third-plural',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'להם/להן',
    },
  },
  {
    value: 'Ihnen',
    gender: 'formal',
    case: 'dative',
    type: 'personal',
    translation: {
      hebrew: 'לאדוני/לגברתי',
    },
  },
];

// Demonstrative pronouns
export const demonstrativePronouns: Article[] = [
  // Nominative
  {
    value: 'dieser',
    gender: 'masculine',
    case: 'nominative',
    type: 'demonstrative',
    translation: {
      hebrew: 'זה',
    },
  },
  {
    value: 'diese',
    gender: 'feminine',
    case: 'nominative',
    type: 'demonstrative',
    translation: {
      hebrew: 'זו',
    },
  },
  {
    value: 'dieses',
    gender: 'neuter',
    case: 'nominative',
    type: 'demonstrative',
    translation: {
      hebrew: 'זה',
    },
  },
  {
    value: 'diese',
    gender: 'plural',
    case: 'nominative',
    type: 'demonstrative',
    translation: {
      hebrew: 'אלה',
    },
  },
  
  // Accusative
  {
    value: 'diesen',
    gender: 'masculine',
    case: 'accusative',
    type: 'demonstrative',
    translation: {
      hebrew: 'את זה',
    },
  },
  {
    value: 'diese',
    gender: 'feminine',
    case: 'accusative',
    type: 'demonstrative',
    translation: {
      hebrew: 'את זו',
    },
  },
  {
    value: 'dieses',
    gender: 'neuter',
    case: 'accusative',
    type: 'demonstrative',
    translation: {
      hebrew: 'את זה',
    },
  },
  {
    value: 'diese',
    gender: 'plural',
    case: 'accusative',
    type: 'demonstrative',
    translation: {
      hebrew: 'את אלה',
    },
  },
  
  // Dative
  {
    value: 'diesem',
    gender: 'masculine',
    case: 'dative',
    type: 'demonstrative',
    translation: {
      hebrew: 'לזה',
    },
  },
  {
    value: 'dieser',
    gender: 'feminine',
    case: 'dative',
    type: 'demonstrative',
    translation: {
      hebrew: 'לזו',
    },
  },
  {
    value: 'diesem',
    gender: 'neuter',
    case: 'dative',
    type: 'demonstrative',
    translation: {
      hebrew: 'לזה',
    },
  },
  {
    value: 'diesen',
    gender: 'plural',
    case: 'dative',
    type: 'demonstrative',
    translation: {
      hebrew: 'לאלה',
    },
  },
];

// Reflexive pronouns
export const reflexivePronouns: Article[] = [
  // Accusative reflexive pronouns
  {
    value: 'mich',
    gender: 'first-singular',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמי',
    },
  },
  {
    value: 'dich',
    gender: 'second-singular',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמך',
    },
  },
  {
    value: 'sich',
    gender: 'masculine',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמו',
    },
  },
  {
    value: 'sich',
    gender: 'feminine',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמה',
    },
  },
  {
    value: 'sich',
    gender: 'neuter',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמו',
    },
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמנו',
    },
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמכם',
    },
  },
  {
    value: 'sich',
    gender: 'third-plural',
    case: 'reflexive',
    type: 'reflexive',
    translation: {
      hebrew: 'את עצמם',
    },
  },
  
  // Dative reflexive pronouns
  {
    value: 'mir',
    gender: 'first-singular',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמי',
    },
  },
  {
    value: 'dir',
    gender: 'second-singular',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמך',
    },
  },
  {
    value: 'sich',
    gender: 'masculine',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמו',
    },
  },
  {
    value: 'sich',
    gender: 'feminine',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמה',
    },
  },
  {
    value: 'sich',
    gender: 'neuter',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמו',
    },
  },
  {
    value: 'uns',
    gender: 'first-plural',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמנו',
    },
  },
  {
    value: 'euch',
    gender: 'second-plural',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמכם',
    },
  },
  {
    value: 'sich',
    gender: 'third-plural',
    case: 'reflexive',
    type: 'reflexive-dative',
    translation: {
      hebrew: 'לעצמם',
    },
  },
]; 