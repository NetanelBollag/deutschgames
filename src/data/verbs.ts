import { Article } from '../types';

// Past tense (Präteritum) - Regular verb example: machen
export const pastTenseRegular: Article[] = [
  {
    value: 'machte',
    gender: 'first-singular',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשיתי',
    },
  },
  {
    value: 'machtest',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשית',
    },
  },
  {
    value: 'machte',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשה/עשתה',
    },
  },
  {
    value: 'machten',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשינו',
    },
  },
  {
    value: 'machtet',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשיתם',
    },
  },
  {
    value: 'machten',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'regular-verb',
    translation: {
      hebrew: 'עשו',
    },
  },
];

// Common irregular verbs in past tense
export const pastTenseIrregular: Article[] = [
  // sein (to be)
  {
    value: 'war',
    gender: 'first-singular',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'הייתי',
    },
  },
  {
    value: 'warst',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'היית',
    },
  },
  {
    value: 'war',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'היה/הייתה',
    },
  },
  {
    value: 'waren',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'היינו',
    },
  },
  {
    value: 'wart',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'הייתם',
    },
  },
  {
    value: 'waren',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'sein',
    translation: {
      hebrew: 'היו',
    },
  },
  
  // haben (to have)
  {
    value: 'hatte',
    gender: 'first-singular',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה לי',
    },
  },
  {
    value: 'hattest',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה לך',
    },
  },
  {
    value: 'hatte',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה לו/לה',
    },
  },
  {
    value: 'hatten',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה לנו',
    },
  },
  {
    value: 'hattet',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה לכם',
    },
  },
  {
    value: 'hatten',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'haben',
    translation: {
      hebrew: 'היה להם',
    },
  },
];

// Conditional forms (Konjunktiv II) - würde + infinitive
export const conditional: Article[] = [
  {
    value: 'würde',
    gender: 'first-singular',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'הייתי',
    },
  },
  {
    value: 'würdest',
    gender: 'second-singular',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'היית',
    },
  },
  {
    value: 'würde',
    gender: 'third-singular',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'היה/הייתה',
    },
  },
  {
    value: 'würden',
    gender: 'first-plural',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'היינו',
    },
  },
  {
    value: 'würdet',
    gender: 'second-plural',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'הייתם',
    },
  },
  {
    value: 'würden',
    gender: 'third-plural',
    case: 'conditional',
    type: 'würde',
    translation: {
      hebrew: 'היו',
    },
  },
];

// Modal verbs in Konjunktiv II - können (can/could)
export const modalVerbs: Article[] = [
  // können (can/could)
  {
    value: 'könnte',
    gender: 'first-singular',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכולתי',
    },
  },
  {
    value: 'könntest',
    gender: 'second-singular',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכולת',
    },
  },
  {
    value: 'könnte',
    gender: 'third-singular',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכול/יכולה',
    },
  },
  {
    value: 'könnten',
    gender: 'first-plural',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכולנו',
    },
  },
  {
    value: 'könntet',
    gender: 'second-plural',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכולתם',
    },
  },
  {
    value: 'könnten',
    gender: 'third-plural',
    case: 'conditional',
    type: 'können',
    translation: {
      hebrew: 'יכולים',
    },
  }
];

// Future tense (Futur I) - werden + infinitive
export const futureTense: Article[] = [
  {
    value: 'werde',
    gender: 'first-singular',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'אעשה',
    },
  },
  {
    value: 'wirst',
    gender: 'second-singular',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'תעשה',
    },
  },
  {
    value: 'wird',
    gender: 'third-singular',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'יעשה/תעשה',
    },
  },
  {
    value: 'werden',
    gender: 'first-plural',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'נעשה',
    },
  },
  {
    value: 'werdet',
    gender: 'second-plural',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'תעשו',
    },
  },
  {
    value: 'werden',
    gender: 'third-plural',
    case: 'future',
    type: 'werden',
    translation: {
      hebrew: 'יעשו',
    },
  },
];

// Future Perfect tense (Futur II) with haben
export const futurePerfectHaben: Article[] = [
  {
    value: 'werde gegessen haben',
    gender: 'first-singular',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'אהיה אכלתי',
    },
  },
  {
    value: 'wirst gegessen haben',
    gender: 'second-singular',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'תהיה אכלת',
    },
  },
  {
    value: 'wird gegessen haben',
    gender: 'third-singular',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'יהיה/תהיה אכל/ה',
    },
  },
  {
    value: 'werden gegessen haben',
    gender: 'first-plural',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'נהיה אכלנו',
    },
  },
  {
    value: 'werdet gegessen haben',
    gender: 'second-plural',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'תהיו אכלתם',
    },
  },
  {
    value: 'werden gegessen haben',
    gender: 'third-plural',
    case: 'future-perfect',
    type: 'future-perfect',
    translation: {
      hebrew: 'יהיו אכלו',
    },
  },
];

// Future Perfect tense (Futur II) with sein
export const futurePerfectSein: Article[] = [
  {
    value: 'werde gekommen sein',
    gender: 'first-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'אהיה באתי',
    },
  },
  {
    value: 'wirst gekommen sein',
    gender: 'second-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'תהיה באת',
    },
  },
  {
    value: 'wird gekommen sein',
    gender: 'third-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'יהיה/תהיה בא/ה',
    },
  },
  {
    value: 'werden gekommen sein',
    gender: 'first-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'נהיה באנו',
    },
  },
  {
    value: 'werdet gekommen sein',
    gender: 'second-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'תהיו באתם',
    },
  },
  {
    value: 'werden gekommen sein',
    gender: 'third-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
    translation: {
      hebrew: 'יהיו באו',
    },
  },
];

// All tenses of sein (to be)
export const seinAllTenses: Article[] = [
  // Present Tense (Präsens)
  {
    value: 'bin',
    gender: 'first-singular',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'אני',
    },
  },
  {
    value: 'bist',
    gender: 'second-singular',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'אתה/את',
    },
  },
  {
    value: 'ist',
    gender: 'third-singular',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'הוא/היא',
    },
  },
  {
    value: 'sind',
    gender: 'first-plural',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'אנחנו',
    },
  },
  {
    value: 'seid',
    gender: 'second-plural',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'אתם/אתן',
    },
  },
  {
    value: 'sind',
    gender: 'third-plural',
    case: 'present',
    type: 'sein-present',
    translation: {
      hebrew: 'הם/הן',
    },
  },
  
  // Perfect Tense (Perfekt)
  {
    value: 'bin gewesen',
    gender: 'first-singular',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'הייתי',
    },
  },
  {
    value: 'bist gewesen',
    gender: 'second-singular',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'היית',
    },
  },
  {
    value: 'ist gewesen',
    gender: 'third-singular',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'היה/הייתה',
    },
  },
  {
    value: 'sind gewesen',
    gender: 'first-plural',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'היינו',
    },
  },
  {
    value: 'seid gewesen',
    gender: 'second-plural',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'הייתם/הייתן',
    },
  },
  {
    value: 'sind gewesen',
    gender: 'third-plural',
    case: 'perfect',
    type: 'sein-perfect',
    translation: {
      hebrew: 'היו',
    },
  },
]; 