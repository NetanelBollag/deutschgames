import { Article } from '../types';

// Past tense (Präteritum) - Regular verb example: machen
export const pastTenseRegular: Article[] = [
  {
    value: 'machte',
    gender: 'first-singular',
    case: 'past-tense',
    type: 'regular-verb'
  },
  {
    value: 'machtest',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'regular-verb'
  },
  {
    value: 'machte',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'regular-verb'
  },
  {
    value: 'machten',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'regular-verb'
  },
  {
    value: 'machtet',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'regular-verb'
  },
  {
    value: 'machten',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'regular-verb'
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
  },
  {
    value: 'warst',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'sein',
  },
  {
    value: 'war',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'sein',
  },
  {
    value: 'waren',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'sein',
  },
  {
    value: 'wart',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'sein',
  },
  {
    value: 'waren',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'sein',
  },
  {
    value: 'hatte',
    gender: 'first-singular',
    case: 'past-tense',
    type: 'haben',
  },
  {
    value: 'hattest',
    gender: 'second-singular',
    case: 'past-tense',
    type: 'haben',
  },
  {
    value: 'hatte',
    gender: 'third-singular',
    case: 'past-tense',
    type: 'haben',
  },
  {
    value: 'hatten',
    gender: 'first-plural',
    case: 'past-tense',
    type: 'haben',
  },
  {
    value: 'hattet',
    gender: 'second-plural',
    case: 'past-tense',
    type: 'haben',
  },
  {
    value: 'hatten',
    gender: 'third-plural',
    case: 'past-tense',
    type: 'haben',
  },
];

// Conditional forms (Konjunktiv II) - würde + infinitive
export const conditional: Article[] = [
  {
    value: 'würde',
    gender: 'first-singular',
    case: 'conditional',
    type: 'würde',
  },
  {
    value: 'würdest',
    gender: 'second-singular',
    case: 'conditional',
    type: 'würde',
  },
  {
    value: 'würde',
    gender: 'third-singular',
    case: 'conditional',
    type: 'würde',
  },
  {
    value: 'würden',
    gender: 'first-plural',
    case: 'conditional',
    type: 'würde',
  },
  {
    value: 'würdet',
    gender: 'second-plural',
    case: 'conditional',
    type: 'würde',
  },
  {
    value: 'würden',
    gender: 'third-plural',
    case: 'conditional',
    type: 'würde',
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
  },
  {
    value: 'könntest',
    gender: 'second-singular',
    case: 'conditional',
    type: 'können',
  },
  {
    value: 'könnte',
    gender: 'third-singular',
    case: 'conditional',
    type: 'können',
  },
  {
    value: 'könnten',
    gender: 'first-plural',
    case: 'conditional',
    type: 'können',
  },
  {
    value: 'könntet',
    gender: 'second-plural',
    case: 'conditional',
    type: 'können',
  },
  {
    value: 'könnten',
    gender: 'third-plural',
    case: 'conditional',
    type: 'können',
  }
];

// Future tense (Futur I) - werden + infinitive
export const futureTense: Article[] = [
  {
    value: 'werde',
    gender: 'first-singular',
    case: 'future',
    type: 'werden',
  },
  {
    value: 'wirst',
    gender: 'second-singular',
    case: 'future',
    type: 'werden',
  },
  {
    value: 'wird',
    gender: 'third-singular',
    case: 'future',
    type: 'werden',
  },
  {
    value: 'werden',
    gender: 'first-plural',
    case: 'future',
    type: 'werden',
  },
  {
    value: 'werdet',
    gender: 'second-plural',
    case: 'future',
    type: 'werden',
  },
  {
    value: 'werden',
    gender: 'third-plural',
    case: 'future',
    type: 'werden',
  },
];

// Future Perfect tense (Futur II) with haben
// Example: ___ gegessen haben
export const futurePerfectHaben: Article[] = [
  {
    value: 'werde',
    gender: 'first-singular',
    case: 'future-perfect',
    type: 'future-perfect',
  },
  {
    value: 'wirst',
    gender: 'second-singular',
    case: 'future-perfect',
    type: 'future-perfect',
  },
  {
    value: 'wird',
    gender: 'third-singular',
    case: 'future-perfect',
    type: 'future-perfect',
  },
  {
    value: 'werden',
    gender: 'first-plural',
    case: 'future-perfect',
    type: 'future-perfect',
  },
  {
    value: 'werdet',
    gender: 'second-plural',
    case: 'future-perfect',
    type: 'future-perfect',
  },
  {
    value: 'werden',
    gender: 'third-plural',
    case: 'future-perfect',
    type: 'future-perfect',
  },
];

// Future Perfect tense (Futur II) with sein
// Example: ___ gekommen sein
export const futurePerfectSein: Article[] = [
  {
    value: 'werde',
    gender: 'first-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
  },
  {
    value: 'wirst',
    gender: 'second-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
  },
  {
    value: 'wird',
    gender: 'third-singular',
    case: 'future-perfect',
    type: 'future-perfect-sein',
  },
  {
    value: 'werden',
    gender: 'first-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
  },
  {
    value: 'werdet',
    gender: 'second-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
  },
  {
    value: 'werden',
    gender: 'third-plural',
    case: 'future-perfect',
    type: 'future-perfect-sein',
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
  },
  {
    value: 'bist',
    gender: 'second-singular',
    case: 'present',
    type: 'sein-present',
  },
  {
    value: 'ist',
    gender: 'third-singular',
    case: 'present',
    type: 'sein-present',
  },
  {
    value: 'sind',
    gender: 'first-plural',
    case: 'present',
    type: 'sein-present',
  },
  {
    value: 'seid',
    gender: 'second-plural',
    case: 'present',
    type: 'sein-present',
  },
  {
    value: 'sind',
    gender: 'third-plural',
    case: 'present',
    type: 'sein-present',
  },
  {
    value: 'bin',
    gender: 'first-singular',
    case: 'perfect',
    type: 'sein-perfect',
  },
  {
    value: 'bist',
    gender: 'second-singular',
    case: 'perfect',
    type: 'sein-perfect',
  },
  {
    value: 'ist',
    gender: 'third-singular',
    case: 'perfect',
    type: 'sein-perfect',
  },
  {
    value: 'sind',
    gender: 'first-plural',
    case: 'perfect',
    type: 'sein-perfect',
  },
  {
    value: 'seid',
    gender: 'second-plural',
    case: 'perfect',
    type: 'sein-perfect',
  },
  {
    value: 'sind',
    gender: 'third-plural',
    case: 'perfect',
    type: 'sein-perfect',
  },
]; 