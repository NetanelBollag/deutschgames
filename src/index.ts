import './styles.css';
import { Challenge, GameState, STORAGE_KEYS, StoredChallengeData } from './types';
import { definiteArticles, indefiniteArticles } from './data/articles';
import { possessivePronouns, personalPronouns, demonstrativePronouns, reflexivePronouns } from './data/pronouns';
import { pastTenseRegular, pastTenseIrregular, conditional, modalVerbs, futureTense, futurePerfectHaben, futurePerfectSein, seinAllTenses } from './data/verbs';
import { shuffleArray, saveChallengeRanks, isTouchDevice, isGameChallengeComplete, getTouchDropZone, resetAllStorage } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('game-container');
  if (!gameContainer) return;
  
  // Set a class on the body for touch devices
  if (isTouchDevice()) {
    document.body.classList.add('touch-device');
  }
  
  // Sample challenges - in a real implementation, these would be loaded from a data file
  const createChallenges = (): Challenge[] => {
    return [
      {
        id: 'definite-nominative',
        title: 'Nominative',
        description: 'Place the correct definite articles in the nominative case.',
        articleType: 'definite',
        case: 'nominative',
        tableStructure: {
          rows: [
            { label: 'der', gender: 'masculine' },
            { label: 'die', gender: 'feminine' },
            { label: 'das', gender: 'neuter' },
            { label: 'die (Pl.)', gender: 'plural' }
          ],
          columns: [
            { label: 'Nominative', case: 'nominative' }
          ]
        },
        correctAnswers: definiteArticles.filter(article => article.case === 'nominative' && article.type === 'definite'),
      },
      {
        id: 'definite-accusative',
        title: 'Accusative',
        description: 'Place the correct definite articles in the accusative case.',
        articleType: 'definite',
        case: 'accusative',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Accusative', case: 'accusative' }
          ]
        },
        correctAnswers: definiteArticles.filter(article => article.case === 'accusative' && article.type === 'definite'),
      },
      {
        id: 'definite-dative',
        title: 'Dative',
        description: 'Place the correct definite articles in the dative case.',
        articleType: 'definite',
        case: 'dative',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Dative', case: 'dative' }
          ]
        },
        correctAnswers: definiteArticles.filter(article => article.case === 'dative' && article.type === 'definite'),
      },
      
      // Possessive pronoun challenges
      {
        id: 'possessive-nominative',
        title: 'Possessive Nominative',
        description: 'Place the correct possessive pronouns in the nominative case.',
        articleType: 'possessive',
        case: 'nominative',
        tableStructure: {
          rows: [
            { label: 'der', gender: 'masculine' },
            { label: 'die', gender: 'feminine' },
            { label: 'das', gender: 'neuter' },
            { label: 'die (Pl.)', gender: 'plural' }
          ],
          columns: [
            { label: 'Nominative', case: 'nominative' }
          ]
        },
        correctAnswers: possessivePronouns.filter(pronoun => pronoun.case === 'nominative'),
      },
      {
        id: 'possessive-accusative',
        title: 'Possessive Accusative',
        description: 'Place the correct possessive pronouns in the accusative case.',
        articleType: 'possessive',
        case: 'accusative',
        tableStructure: {
          rows: [
            { label: 'der', gender: 'masculine' },
            { label: 'die', gender: 'feminine' },
            { label: 'das', gender: 'neuter' },
            { label: 'die (Pl.)', gender: 'plural' }
          ],
          columns: [
            { label: 'Accusative', case: 'accusative' }
          ]
        },
        correctAnswers: possessivePronouns.filter(pronoun => pronoun.case === 'accusative'),
      },
      {
        id: 'possessive-dative',
        title: 'Possessive Dative',
        description: 'Place the correct possessive pronouns in the dative case.',
        articleType: 'possessive',
        case: 'dative',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Dative', case: 'dative' }
          ]
        },
        correctAnswers: possessivePronouns.filter(pronoun => pronoun.case === 'dative'),
      },
      
      // Personal pronoun challenges
      {
        id: 'personal-nominative',
        title: 'Personal Nominative',
        description: 'Place the correct personal pronouns in the nominative case.',
        articleType: 'personal',
        case: 'nominative',
        tableStructure: {
          rows: [
            { label: 'I', gender: 'first-singular' },
            { label: 'You (informal)', gender: 'second-singular' },
            { label: 'He', gender: 'masculine' },
            { label: 'She', gender: 'feminine' },
            { label: 'It', gender: 'neuter' },
            { label: 'We', gender: 'first-plural' },
            { label: 'You (plural)', gender: 'second-plural' },
            { label: 'They', gender: 'third-plural' },
            { label: 'You (formal)', gender: 'formal' }
          ],
          columns: [
            { label: 'Nominative', case: 'nominative' }
          ]
        },
        correctAnswers: personalPronouns.filter(pronoun => pronoun.case === 'nominative'),
      },
      {
        id: 'personal-accusative',
        title: 'Personal Accusative',
        description: 'Place the correct personal pronouns in the accusative case.',
        articleType: 'personal',
        case: 'accusative',
        tableStructure: {
          rows: [
            { label: 'I', gender: 'first-singular' },
            { label: 'You (informal)', gender: 'second-singular' },
            { label: 'He', gender: 'masculine' },
            { label: 'She', gender: 'feminine' },
            { label: 'It', gender: 'neuter' },
            { label: 'We', gender: 'first-plural' },
            { label: 'You (plural)', gender: 'second-plural' },
            { label: 'They', gender: 'third-plural' },
            { label: 'You (formal)', gender: 'formal' }
          ],
          columns: [
            { label: 'Accusative', case: 'accusative' }
          ]
        },
        correctAnswers: personalPronouns.filter(pronoun => pronoun.case === 'accusative'),
      },
      {
        id: 'personal-dative',
        title: 'Personal Dative',
        description: 'Place the correct personal pronouns in the dative case.',
        articleType: 'personal',
        case: 'dative',
        tableStructure: {
          rows: [
            { label: 'I', gender: 'first-singular' },
            { label: 'You (informal)', gender: 'second-singular' },
            { label: 'He', gender: 'masculine' },
            { label: 'She', gender: 'feminine' },
            { label: 'It', gender: 'neuter' },
            { label: 'We', gender: 'first-plural' },
            { label: 'You (plural)', gender: 'second-plural' },
            { label: 'They', gender: 'third-plural' },
            { label: 'You (formal)', gender: 'formal' }
          ],
          columns: [
            { label: 'Dative', case: 'dative' }
          ]
        },
        correctAnswers: personalPronouns.filter(pronoun => pronoun.case === 'dative'),
      },
      
      // Demonstrative pronoun challenges
      {
        id: 'demonstrative-nominative',
        title: 'Demonstrative Nominative',
        description: 'Place the correct demonstrative pronouns in the nominative case.',
        articleType: 'demonstrative',
        case: 'nominative',
        tableStructure: {
          rows: [
            { label: 'der', gender: 'masculine' },
            { label: 'die', gender: 'feminine' },
            { label: 'das', gender: 'neuter' },
            { label: 'die (Pl.)', gender: 'plural' }
          ],
          columns: [
            { label: 'Nominative', case: 'nominative' }
          ]
        },
        correctAnswers: demonstrativePronouns.filter(pronoun => pronoun.case === 'nominative'),
      },
      {
        id: 'demonstrative-accusative',
        title: 'Demonstrative Accusative',
        description: 'Place the correct demonstrative pronouns in the accusative case.',
        articleType: 'demonstrative',
        case: 'accusative',
        tableStructure: {
          rows: [
            { label: 'der', gender: 'masculine' },
            { label: 'die', gender: 'feminine' },
            { label: 'das', gender: 'neuter' },
            { label: 'die (Pl.)', gender: 'plural' }
          ],
          columns: [
            { label: 'Accusative', case: 'accusative' }
          ]
        },
        correctAnswers: demonstrativePronouns.filter(pronoun => pronoun.case === 'accusative'),
      },
      {
        id: 'demonstrative-dative',
        title: 'Demonstrative Dative',
        description: 'Place the correct demonstrative pronouns in the dative case.',
        articleType: 'demonstrative',
        case: 'dative',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Dative', case: 'dative' }
          ]
        },
        correctAnswers: demonstrativePronouns.filter(pronoun => pronoun.case === 'dative'),
      },
      
      // Past tense verb challenges
      {
        id: 'past-tense-regular',
        title: 'Regular Past Tense',
        description: 'Place the correct past tense forms for the regular verb "machen" (to do/make).',
        articleType: 'regular-verb',
        case: 'past-tense',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Präteritum', case: 'past-tense' }
          ]
        },
        correctAnswers: pastTenseRegular,
      },
      {
        id: 'past-tense-sein',
        title: 'Past Tense: Sein',
        description: 'Place the correct past tense forms for the irregular verb "sein" (to be).',
        articleType: 'sein',
        case: 'past-tense',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Präteritum', case: 'past-tense' }
          ]
        },
        correctAnswers: pastTenseIrregular.filter(verb => verb.type === 'sein'),
      },
      {
        id: 'past-tense-haben',
        title: 'Past Tense: Haben',
        description: 'Place the correct past tense forms for the irregular verb "haben" (to have).',
        articleType: 'haben',
        case: 'past-tense',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Präteritum', case: 'past-tense' }
          ]
        },
        correctAnswers: pastTenseIrregular.filter(verb => verb.type === 'haben'),
      },
      
      // Conditional form challenges
      {
        id: 'conditional-würde',
        title: 'Conditional: Würde',
        description: 'Place the correct conditional forms with "würde" (would).',
        articleType: 'würde',
        case: 'conditional',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Konjunktiv II', case: 'conditional' }
          ]
        },
        correctAnswers: conditional,
        customValidation: (zoneGender: string, zoneCase: string, article: string) => {
          // Map of expected values for each gender
          const expectedValues: Record<string, string> = {
            'first-singular': 'würde',
            'second-singular': 'würdest',
            'third-singular': 'würde',
            'first-plural': 'würden',
            'second-plural': 'würdet',
            'third-plural': 'würden'
          };
          
          return expectedValues[zoneGender] === article;
        },
        onLoad: () => {
          console.log('Loaded würde challenge with data:', {
            answers: conditional.map(item => ({
              value: item.value,
              gender: item.gender,
              case: item.case,
              type: item.type
            }))
          });
        }
      },
      {
        id: 'conditional-können',
        title: 'Conditional: Können',
        description: 'Place the correct conditional forms for the modal verb "können" (can/could).',
        articleType: 'können',
        case: 'conditional',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Konjunktiv II', case: 'conditional' }
          ]
        },
        correctAnswers: modalVerbs,
        customValidation: (zoneGender: string, zoneCase: string, article: string) => {
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
        },
        onLoad: () => {
          console.log('Loaded können challenge with data:', {
            answers: modalVerbs.map(item => ({
              value: item.value,
              gender: item.gender,
              case: item.case,
              type: item.type
            }))
          });
        }
      },
      
      // Future tense challenge
      {
        id: 'future-werden',
        title: 'Future Tense',
        description: 'Place the correct future tense forms with "werden" (will).',
        articleType: 'werden',
        case: 'future',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Futur I', case: 'future' }
          ]
        },
        correctAnswers: futureTense,
      },
      
      // Genitive case challenge
      {
        id: 'definite-genitive',
        title: 'Genitive',
        description: 'Place the correct definite articles in the genitive case.',
        articleType: 'definite',
        case: 'genitive',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Genitive', case: 'genitive' }
          ]
        },
        correctAnswers: definiteArticles.filter(article => article.case === 'genitive' && article.type === 'definite'),
      },
      
      {
        id: 'indefinite-genitive',
        title: 'Indefinite Genitive',
        description: 'Place the correct indefinite articles in the genitive case.',
        articleType: 'indefinite',
        case: 'genitive',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Genitive', case: 'genitive' }
          ]
        },
        correctAnswers: indefiniteArticles.filter(article => article.case === 'genitive' && article.type === 'indefinite'),
      },
      
      // Possessive pronoun in genitive
      {
        id: 'possessive-genitive',
        title: 'Possessive Genitive',
        description: 'Place the correct possessive pronouns in the genitive case.',
        articleType: 'possessive',
        case: 'genitive',
        tableStructure: {
          rows: [
            { label: 'Masculine', gender: 'masculine' },
            { label: 'Feminine', gender: 'feminine' },
            { label: 'Neuter', gender: 'neuter' },
            { label: 'Plural', gender: 'plural' }
          ],
          columns: [
            { label: 'Genitive', case: 'genitive' }
          ]
        },
        correctAnswers: possessivePronouns.filter(pronoun => pronoun.case === 'genitive'),
      },
      
      // Reflexive pronouns in accusative
      {
        id: 'reflexive-accusative',
        title: 'Reflexive Pronouns (Accusative)',
        description: 'Place the correct reflexive pronouns in the accusative case.',
        articleType: 'reflexive',
        case: 'reflexive',
        tableStructure: {
          rows: [
            { label: 'I', gender: 'first-singular' },
            { label: 'You (informal)', gender: 'second-singular' },
            { label: 'He', gender: 'masculine' },
            { label: 'She', gender: 'feminine' },
            { label: 'It', gender: 'neuter' },
            { label: 'We', gender: 'first-plural' },
            { label: 'You (plural)', gender: 'second-plural' },
            { label: 'They', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Reflexive', case: 'reflexive' }
          ]
        },
        correctAnswers: reflexivePronouns.filter(pronoun => pronoun.type === 'reflexive'),
      },
      
      // Reflexive pronouns in dative
      {
        id: 'reflexive-dative',
        title: 'Reflexive Pronouns (Dative)',
        description: 'Place the correct reflexive pronouns in the dative case.',
        articleType: 'reflexive-dative',
        case: 'reflexive',
        tableStructure: {
          rows: [
            { label: 'I', gender: 'first-singular' },
            { label: 'You (informal)', gender: 'second-singular' },
            { label: 'He', gender: 'masculine' },
            { label: 'She', gender: 'feminine' },
            { label: 'It', gender: 'neuter' },
            { label: 'We', gender: 'first-plural' },
            { label: 'You (plural)', gender: 'second-plural' },
            { label: 'They', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Reflexive (Dative)', case: 'reflexive' }
          ]
        },
        correctAnswers: reflexivePronouns.filter(pronoun => pronoun.type === 'reflexive-dative'),
      },
      
      // Future Perfect with haben
      {
        id: 'future-perfect-haben',
        title: 'Future Perfect (haben)',
        description: 'Place the correct future perfect forms with "haben" (will have).',
        articleType: 'future-perfect',
        case: 'future-perfect',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Futur II', case: 'future-perfect' }
          ]
        },
        correctAnswers: futurePerfectHaben,
      },
      
      // Future Perfect with sein
      {
        id: 'future-perfect-sein',
        title: 'Future Perfect (sein)',
        description: 'Place the correct future perfect forms with "sein" (will have been).',
        articleType: 'future-perfect-sein',
        case: 'future-perfect',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Futur II', case: 'future-perfect' }
          ]
        },
        correctAnswers: futurePerfectSein,
      },
      
      // Sein in present tense
      {
        id: 'sein-present',
        title: 'Sein - Present Tense',
        description: 'Place the correct present tense forms of "sein" (to be).',
        articleType: 'sein-present',
        case: 'present',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Präsens', case: 'present' }
          ]
        },
        correctAnswers: seinAllTenses.filter(verb => verb.type === 'sein-present'),
      },
      
      // Sein in perfect tense
      {
        id: 'sein-perfect',
        title: 'Sein - Perfect Tense',
        description: 'Place the correct perfect tense forms of "sein" (to be).',
        articleType: 'sein-perfect',
        case: 'perfect',
        tableStructure: {
          rows: [
            { label: 'ich', gender: 'first-singular' },
            { label: 'du', gender: 'second-singular' },
            { label: 'er/sie/es', gender: 'third-singular' },
            { label: 'wir', gender: 'first-plural' },
            { label: 'ihr', gender: 'second-plural' },
            { label: 'sie (Pl.)', gender: 'third-plural' }
          ],
          columns: [
            { label: 'Perfekt', case: 'perfect' }
          ]
        },
        correctAnswers: seinAllTenses.filter(verb => verb.type === 'sein-perfect'),
      }
    ];
  };
  
  // Initialize game state
  const initializeGameState = (): GameState => {
    // Initialize all challenges with rank 0 by default
    const challenges = createChallenges();
    
    // Load saved challenge ranks from local storage
    const savedData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
    const challengeData: StoredChallengeData = savedData ? JSON.parse(savedData) : {};
    
    // Apply saved ranks to challenges
    challenges.forEach(challenge => {
      if (challengeData[challenge.id]) {
        challenge.rank = challengeData[challenge.id].rank;
        challenge.ignored = challengeData[challenge.id].ignored;
      } else {
        challenge.rank = 0;
        challenge.ignored = false;
      }
    });
    
    // Initialize game state
    return {
      currentChallengeIndex: 0,
      challenges: shuffleArray(challenges.filter(c => !c.ignored && (c.rank || 0) < 3)),
      score: 0,
      totalAttempts: 0,
      correctAttempts: 0,
      ignoredChallenges: challenges.filter(c => c.ignored).map(c => c.id),
      completedChallenges: challenges.filter(c => (c.rank || 0) >= 3 && !c.ignored).map(c => c.id)
    };
  };
  
  // Initialize game state
  let gameState = initializeGameState();
  
  // Force dropdown to close when anything outside it is clicked
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('challenge-selector');
    const selectButton = document.getElementById('select-challenge');
    const target = event.target as HTMLElement;
    
    // Debug what was clicked
    console.log('Clicked element:', target.tagName, target.id, target.className);
    
    // Show path to help debug
    let parentChain = '';
    let currentEl = target;
    while (currentEl && currentEl !== document.body) {
      parentChain = parentChain + ' > ' + (currentEl.id || currentEl.tagName);
      currentEl = currentEl.parentElement as HTMLElement;
    }
    console.log('Element path:', parentChain);
    
    // Only handle if dropdown exists and isn't the target
    if (dropdown && selectButton) {
      console.log('Global document click handler fired');
      
      // Is the dropdown visible?
      const dropdownVisible = window.getComputedStyle(dropdown).display !== 'none';
      console.log('Dropdown visible:', dropdownVisible);
      
      // Direct checks with full debug
      const isInDropdown = dropdown.contains(target);
      const isInButton = selectButton.contains(target);
      console.log('In dropdown:', isInDropdown);
      console.log('In button:', isInButton);
      
      // Check if click is outside both dropdown and button
      const clickedOutside = !isInDropdown && !isInButton;
      console.log('Clicked outside:', clickedOutside);
      
      if (dropdownVisible && clickedOutside) {
        console.log('CLOSING DROPDOWN from global handler');
        dropdown.style.display = 'none';
      }
    }
  }, true); // Use capturing phase!

  // Add a reliable backup method to close the dropdown
  document.body.addEventListener('click', function(e) {
    const dropdown = document.getElementById('challenge-selector');
    const selectButton = document.getElementById('select-challenge');
    const target = e.target as HTMLElement;
    
    console.log('BODY CLICK HANDLER FIRED');
    
    // If dropdown is open and click is outside dropdown and not on the select button
    if (dropdown && 
        selectButton && 
        dropdown.style.display === 'flex' && 
        target !== dropdown && 
        !dropdown.contains(target) && 
        target !== selectButton && 
        !selectButton.contains(target)) {
      
      console.log('BODY HANDLER: Closing dropdown');
      dropdown.style.display = 'none';
      e.stopPropagation();
    }
  });

  // Function to render current challenge
  const renderChallenge = () => {
    if (gameState.challenges.length === 0) {
      // No more challenges to show
      gameContainer.innerHTML = `
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-initial" style="width: 0%"></div>
            <div class="progress-bronze" style="width: 0%"></div>
            <div class="progress-silver" style="width: 0%"></div>
            <div class="progress-gold" style="width: 100%"></div>
          </div>
        </div>
        <div class="game-complete">
          <h2>All challenges completed!</h2>
          <p>Correct attempts: ${gameState.correctAttempts} / ${gameState.totalAttempts}</p>
          <button id="reset-game">Start Over</button>
        </div>
      `;
      
      const resetButton = document.getElementById('reset-game');
      if (resetButton) {
        resetButton.addEventListener('click', () => {
          // Reset ranks for all challenges
          localStorage.removeItem(STORAGE_KEYS.CHALLENGE_RANKS);
          gameState = initializeGameState();
          renderChallenge();
        });
      }
      
      return;
    }
    
    const challenge = gameState.challenges[gameState.currentChallengeIndex];
    
    // Calculate counts by rank
    const rankCounts: Record<string | number, number> = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      ignored: 0
    };
    
    // Count all challenges by rank
    createChallenges().forEach(c => {
      const challengeData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
      const savedData = challengeData ? JSON.parse(challengeData) : {};
      
      if (savedData[c.id] && savedData[c.id].ignored) {
        rankCounts.ignored++;
      } else if (savedData[c.id] && savedData[c.id].rank !== undefined) {
        rankCounts[savedData[c.id].rank]++;
      } else {
        rankCounts[0]++; // Default rank is 0
      }
    });
    
    // Calculate progress percentages
    const totalChallenges = rankCounts[0] + rankCounts[1] + rankCounts[2] + rankCounts[3] + rankCounts.ignored;
    const initialPercent = (rankCounts[0] / totalChallenges) * 100;
    const bronzePercent = (rankCounts[1] / totalChallenges) * 100;
    const silverPercent = (rankCounts[2] / totalChallenges) * 100;
    const goldPercent = ((rankCounts[3] + rankCounts.ignored) / totalChallenges) * 100;
    
    // Call the onLoad function if it exists
    if (challenge.onLoad) {
      challenge.onLoad();
    }
    
    // Create the HTML for the challenge
    const rows = challenge.tableStructure.rows;
    const columns = challenge.tableStructure.columns;
    
    // Create table rows
    let tableRows = '';
    rows.forEach(row => {
      tableRows += `<tr><th data-label="${row.label}">${row.label}</th>`;
      columns.forEach(column => {
        const dropZoneId = `drop-${row.gender}-${column.case}`;
        tableRows += `<td><div class="drop-zone" id="${dropZoneId}"></div></td>`;
      });
      tableRows += '</tr>';
    });
    
    // Create draggable cards
    const articles = challenge.correctAnswers;
    let cardHtml = '';
    const shuffledArticles = shuffleArray(articles);
    shuffledArticles.forEach(article => {
      // Log each card being created
      console.log('Creating card:', {
        value: article.value,
        gender: article.gender,
        case: article.case,
        type: article.type
      });
      
      cardHtml += `<div class="draggable-card" draggable="true" 
                    data-article="${article.value}" 
                    data-gender="${article.gender}" 
                    data-case="${article.case}"
                    data-type="${article.type}">
                    ${article.value}
                  </div>`;
    });
    
    // Render the challenge
    gameContainer.innerHTML = `
      <div class="progress-bar-container">
        <div class="progress-bar">
          <div class="progress-gold" style="width: ${goldPercent}%"></div>
          <div class="progress-silver" style="width: ${silverPercent}%"></div>
          <div class="progress-bronze" style="width: ${bronzePercent}%"></div>
          <div class="progress-initial" style="width: ${initialPercent}%"></div>
        </div>
      </div>
      
      <header>
        <div class="instruction-frame">Place correctly</div>
        <h2>${challenge.title}</h2>
      </header>
      
      <main>
        <div class="game-table-container">
          <table class="game-table">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        
        <div id="success-indicator" class="success-indicator" style="display: none;">
          ✓
        </div>
        
        <div class="card-container">
          ${cardHtml}
        </div>
      </main>
      
      <div class="game-controls">
        <button id="ignore-challenge">I already know it</button>
        <button id="reset-challenge">Reset this</button>
        <button id="select-challenge">Jump to...</button>
        <div class="rank-stats">
          <span>
            Challenge: 
            <span class="rank-card ${challenge.rank === 0 ? 'rank-initial' : challenge.rank === 1 ? 'rank-bronze' : challenge.rank === 2 ? 'rank-silver' : 'rank-gold'}">${challenge.rank}</span>
            | Completed cards: 
            <span class="rank-bronze rank-card">1</span> ${rankCounts[1]} 
            <span class="rank-silver rank-card">2</span> ${rankCounts[2]} 
            <span class="rank-gold rank-card">3</span> ${rankCounts[3] + rankCounts.ignored}
          </span>
        </div>
      </div>
      
      <div id="challenge-selector-overlay" class="challenge-selector-overlay" style="display: none;"></div>
      <div id="challenge-selector" class="challenge-selector" style="display: none;">
        <div class="challenge-selector-header">
          <h3>Select Challenge</h3>
          <button id="reset-storage" class="reset-storage-btn" title="Reset all progress">
            <span class="reset-icon">↺</span>
          </button>
        </div>
        <input type="text" id="challenge-search" placeholder="Search challenges...">
        <div class="challenge-list">
          ${createChallenges().map(c => {
            // Find the status for this challenge
            const isCompleted = gameState.completedChallenges.includes(c.id);
            const isIgnored = gameState.ignoredChallenges.includes(c.id);
            const isCurrent = gameState.challenges.some(challenge => 
              challenge.id === c.id && gameState.challenges[gameState.currentChallengeIndex].id === c.id
            );
            
            // Determine status class
            let statusClass = '';
            let statusText = '';
            
            if (isCompleted) {
              statusClass = 'status-completed';
              statusText = '✓ Completed';
            } else if (isIgnored) {
              statusClass = 'status-ignored';
              statusText = '✗ Already known';
            } else if (isCurrent) {
              statusClass = 'status-current';
              statusText = '▶ Current';
            }
            
            // Get the challenge rank
            const challengeData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
            const savedData = challengeData ? JSON.parse(challengeData) : {};
            const rank = savedData[c.id] ? savedData[c.id].rank : 0;
            
            // Determine rank class
            const rankClass = rank === 0 ? 'rank-initial' : 
                             rank === 1 ? 'rank-bronze' : 
                             rank === 2 ? 'rank-silver' : 
                             'rank-gold';
            
            return `
              <div class="challenge-item ${statusClass}" data-id="${c.id}">
                <span class="rank-card ${rankClass}">${rank}</span>
                <div class="challenge-title">${c.title}</div>
                <div class="challenge-details">
                  <span class="challenge-type">${c.articleType}, ${c.case}</span>
                  ${statusText ? `<span class="challenge-status">${statusText}</span>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>`
    
    // Add event listener for Ignore button
    const ignoreButton = document.getElementById('ignore-challenge');
    if (ignoreButton) {
      ignoreButton.addEventListener('click', () => {
        challenge.ignored = true;
        gameState.ignoredChallenges.push(challenge.id);
        
        // Set challenge to gold rank (3) directly instead of just ignoring
        challenge.rank = 3;
        
        // Update the rank card display to show gold immediately
        const rankCard = document.querySelector('.rank-stats .rank-card');
        if (rankCard) {
          rankCard.className = 'rank-card rank-gold';
          rankCard.textContent = '3';
        }
        
        // Add a visual indicator that the challenge is now complete
        const header = document.querySelector('header h2');
        if (header) {
          header.innerHTML += ' <span class="completion-indicator">✓</span>';
          
          // Add style for the completion indicator if not already present
          if (!document.getElementById('completion-indicator-style')) {
            const style = document.createElement('style');
            style.id = 'completion-indicator-style';
            style.textContent = `
              .completion-indicator {
                color: gold;
                font-weight: bold;
                animation: pulse 0.5s ease-in-out;
              }
              @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.5); }
                100% { transform: scale(1); }
              }
            `;
            document.head.appendChild(style);
          }
        }
        
        // Short delay to show the gold state before moving on
        setTimeout(() => {
          // Remove from current challenges
          gameState.challenges.splice(gameState.currentChallengeIndex, 1);
          
          // Add to completed challenges
          gameState.completedChallenges.push(challenge.id);
          
          // Save to local storage
          saveChallengeRanks(gameState);
          
          // If we've removed the last challenge, reset the index
          if (gameState.currentChallengeIndex >= gameState.challenges.length) {
            gameState.currentChallengeIndex = 0;
          }
          
          // Render the next challenge
          renderChallenge();
        }, 800);
      });
    }
    
    // Add event listener for Reset button
    const resetButton = document.getElementById('reset-challenge');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        // Get all cards in drop zones
        const placedCards = document.querySelectorAll('.drop-zone .draggable-card');
        
        // Make all original cards visible again
        placedCards.forEach(placedCard => {
          const placedCardEl = placedCard as HTMLElement;
          const article = placedCardEl.dataset.article || '';
          const gender = placedCardEl.dataset.gender || '';
          const caseType = placedCardEl.dataset.case || '';
          
          // Find the original card and make it visible
          const originalCard = document.querySelector(
            `.card-container [data-article="${article}"][data-gender="${gender}"][data-case="${caseType}"]`
          ) as HTMLElement;
          
          if (originalCard) {
            originalCard.style.visibility = 'visible';
          }
        });
        
        // Clear all drop zones
        const dropZones = document.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
          zone.innerHTML = '';
          zone.classList.remove('correct', 'incorrect');
        });
      });
    }
    
    // Add event listener for Select Challenge button
    const selectChallengeButton = document.getElementById('select-challenge');
    const challengeSelector = document.getElementById('challenge-selector');
    
    if (selectChallengeButton && challengeSelector) {
      const overlay = document.getElementById('challenge-selector-overlay');
      
      // Handle click event for the select challenge button
      selectChallengeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Select button clicked');
        
        // Toggle the challenge selector and overlay
        if (challengeSelector.style.display === 'none') {
          console.log('Opening dropdown and overlay');
          challengeSelector.style.display = 'block';
          if (overlay) overlay.style.display = 'block';
        } else {
          console.log('Closing dropdown and overlay');
          challengeSelector.style.display = 'none';
          if (overlay) overlay.style.display = 'none';
        }
      });
      
      // Add click handler to overlay to close dropdown
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Overlay clicked - closing dropdown');
          challengeSelector.style.display = 'none';
          overlay.style.display = 'none';
        });
      }
      
      // Add search functionality
      const searchInput = document.getElementById('challenge-search') as HTMLInputElement;
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const searchTerm = searchInput.value.toLowerCase();
          const challengeItems = document.querySelectorAll('.challenge-item');
          
          challengeItems.forEach(item => {
            const text = (item as HTMLElement).innerText.toLowerCase();
            if (text.includes(searchTerm)) {
              (item as HTMLElement).style.display = 'block';
            } else {
              (item as HTMLElement).style.display = 'none';
            }
          });
        });
      }
      
      // Add click handlers for challenge items
      const challengeItems = document.querySelectorAll('.challenge-item');
      challengeItems.forEach(item => {
        item.addEventListener('click', () => {
          const selectedId = (item as HTMLElement).getAttribute('data-id');
          if (selectedId) {
            // Find the challenge in the complete list
            const allChallenges = createChallenges();
            const selectedChallenge = allChallenges.find(c => c.id === selectedId);
            
            if (selectedChallenge) {
              // Check if this challenge is already in the current game state
              const existingIndex = gameState.challenges.findIndex(c => c.id === selectedId);
              
              if (existingIndex >= 0) {
                // Challenge exists, just navigate to it
                gameState.currentChallengeIndex = existingIndex;
              } else {
                // Challenge doesn't exist in current set, add it
                const loadedChallenge = { ...selectedChallenge, rank: 0, ignored: false };
                gameState.challenges.push(loadedChallenge);
                gameState.currentChallengeIndex = gameState.challenges.length - 1;
                
                // If it was in completed or ignored, remove it
                gameState.completedChallenges = gameState.completedChallenges.filter(id => id !== selectedId);
                gameState.ignoredChallenges = gameState.ignoredChallenges.filter(id => id !== selectedId);
                
                // Save changes
                saveChallengeRanks(gameState);
              }
              
              // Close the selector
              challengeSelector.style.display = 'none';
              
              // Load the challenge
              renderChallenge();
            }
          }
        });
      });
      
      // Add reset storage button functionality
      const resetStorageButton = document.getElementById('reset-storage');
      if (resetStorageButton) {
        resetStorageButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          // Create and show confirmation dialog
          showConfirmationDialog(
            'Reset Progress', 
            'Are you sure you want to reset all your progress? This action cannot be undone.',
            () => {
              // User confirmed - perform reset
              resetAllStorage();
              
              // Reset game state
              gameState = initializeGameState();
              
              // Close the challenge selector
              if (challengeSelector) {
                challengeSelector.style.display = 'none';
                if (overlay) overlay.style.display = 'none';
              }
              
              // Render the challenge again
              renderChallenge();
            }
          );
        });
      }
    }
    
    // Setup drag and drop functionality
    setupDragAndDrop();
  };
  
  // Function to show a confirmation dialog
  const showConfirmationDialog = (title: string, message: string, onConfirm: () => void) => {
    // Create overlay
    const dialogOverlay = document.createElement('div');
    dialogOverlay.className = 'confirmation-dialog-overlay';
    
    // Create dialog
    const dialog = document.createElement('div');
    dialog.className = 'confirmation-dialog';
    
    // Create dialog content
    dialog.innerHTML = `
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="confirmation-buttons">
        <button class="cancel-btn">Cancel</button>
        <button class="confirm-btn">Reset</button>
      </div>
    `;
    
    // Add event listeners
    const confirmBtn = dialog.querySelector('.confirm-btn');
    const cancelBtn = dialog.querySelector('.cancel-btn');
    
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        document.body.removeChild(dialogOverlay);
        onConfirm();
      });
    }
    
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        document.body.removeChild(dialogOverlay);
      });
    }
    
    // Add dialog to overlay and overlay to body
    dialogOverlay.appendChild(dialog);
    document.body.appendChild(dialogOverlay);
  };
  
  // Function to handle drop of a card
  const handleDrop = (zone: HTMLElement, article: string, gender: string, caseType: string) => {
    // Check if the zone is already filled
    if (zone.querySelector('.draggable-card')) {
      return;
    }
    
    // Get the current challenge
    const challenge = gameState.challenges[gameState.currentChallengeIndex];
    
    // Check if correct
    const zoneId = zone.id;
    
    // Get the correct zone gender and case by referencing the tableStructure
    let zoneGender = '';
    let zoneCase = '';
    
    // Loop through the tableStructure to find which gender and case this zone belongs to
    const rows = challenge.tableStructure.rows;
    const columns = challenge.tableStructure.columns;
    
    // Check each possible combination to find the matching ID
    for (const row of rows) {
      for (const column of columns) {
        const expectedZoneId = `drop-${row.gender}-${column.case}`;
        if (expectedZoneId === zoneId) {
          zoneGender = row.gender;
          zoneCase = column.case;
          break;
        }
      }
      if (zoneGender && zoneCase) break; // Stop if we found a match
    }
    
    // If no match found in the table structure, extract from the ID directly
    if (!zoneGender || !zoneCase) {
      const parts = zoneId.split('-');
      if (parts.length >= 3) {
        zoneGender = parts[1];
        zoneCase = parts[2];
      }
    }
    
    // Find the correct article for this zone
    const correctArticle = challenge.correctAnswers.find(
      a => a.gender === zoneGender && a.case === zoneCase
    );
    
    // For debugging purposes
    console.log('Drop validation:', {
      zone: zoneId,
      zoneGender,
      zoneCase,
      droppedArticle: article,
      droppedGender: gender,
      droppedCase: caseType,
      correctArticleValue: correctArticle?.value,
      correctArticleGender: correctArticle?.gender,
      correctArticleCase: correctArticle?.case
    });
    
    // Determine if the answer is correct using custom validation if available
    let isCorrect = false;
    let expectedValue = correctArticle?.value;
    
    if (challenge.customValidation && typeof challenge.customValidation === 'function') {
      // Use custom validation function
      const validationResult = challenge.customValidation(zoneGender, zoneCase, article);
      isCorrect = validationResult === true;
      
      // For custom validation, extract the expected value from the validation function
      // This assumes that challenges with customValidation have expectedValues defined inside
      if (challenge.id === 'conditional-würde') {
        // These should match the mapping in the customValidation function
        const expectedValues: Record<string, string> = {
          'first-singular': 'würde',
          'second-singular': 'würdest',
          'third-singular': 'würde',
          'first-plural': 'würden',
          'second-plural': 'würdet',
          'third-plural': 'würden'
        };
        expectedValue = expectedValues[zoneGender];
      } else if (challenge.id === 'conditional-können') {
        // These should match the mapping in the customValidation function
        const expectedValues: Record<string, string> = {
          'first-singular': 'könnte',
          'second-singular': 'könntest',
          'third-singular': 'könnte',
          'first-plural': 'könnten',
          'second-plural': 'könntet',
          'third-plural': 'könnten'
        };
        expectedValue = expectedValues[zoneGender];
      }
      
      console.log('Using custom validation:', { 
        result: isCorrect, 
        expectedValue,
        zoneGender,
        zoneCase
      });
    } else {
      // Use standard validation
      isCorrect = Boolean(correctArticle && correctArticle.value === article);
      
      // Special case for past tense challenges that don't have custom validation
      if (!correctArticle && challenge.case === 'past-tense') {
        // Handle haben (to have) past tense
        if (challenge.id === 'past-tense-haben') {
          const expectedValues: Record<string, string> = {
            'first-singular': 'hatte',
            'second-singular': 'hattest',
            'third-singular': 'hatte',
            'first-plural': 'hatten',
            'second-plural': 'hattet',
            'third-plural': 'hatten'
          };
          expectedValue = expectedValues[zoneGender];
          isCorrect = expectedValues[zoneGender] === article;
        }
        // Handle sein (to be) past tense
        else if (challenge.id === 'past-tense-sein') {
          const expectedValues: Record<string, string> = {
            'first-singular': 'war',
            'second-singular': 'warst',
            'third-singular': 'war',
            'first-plural': 'waren',
            'second-plural': 'wart',
            'third-plural': 'waren'
          };
          expectedValue = expectedValues[zoneGender];
          isCorrect = expectedValues[zoneGender] === article;
        }
        // Handle regular verbs past tense
        else if (challenge.id === 'past-tense-regular') {
          const expectedValues: Record<string, string> = {
            'first-singular': 'machte',
            'second-singular': 'machtest',
            'third-singular': 'machte',
            'first-plural': 'machten',
            'second-plural': 'machtet',
            'third-plural': 'machten'
          };
          expectedValue = expectedValues[zoneGender];
          isCorrect = expectedValues[zoneGender] === article;
        }
        
        console.log('Using special case for past tense:', {
          challengeId: challenge.id,
          result: isCorrect,
          expectedValue,
          zoneGender,
          zoneCase
        });
      }
    }
    
    // Find the card and add it to the drop zone
    const card = document.querySelector(`[data-article="${article}"][data-gender="${gender}"][data-case="${caseType}"]`);
    if (card) {
      // Clone the card to add to the zone
      const cardClone = card.cloneNode(true) as HTMLElement;
      cardClone.classList.remove('dragging');
      cardClone.draggable = false;
      
      // Add correct or incorrect class
      if (isCorrect) {
        cardClone.classList.add('correct');
        zone.classList.add('correct');
        gameState.correctAttempts++;
      } else {
        cardClone.classList.add('incorrect');
        zone.classList.add('incorrect');
        
        // Add enhanced error animation
        cardClone.style.animation = 'error-pulse 0.6s ease-in-out 3';
        
        // Add keyframe animation if not already in document
        if (!document.getElementById('error-animation-style')) {
          const style = document.createElement('style');
          style.id = 'error-animation-style';
          style.textContent = `
            @keyframes error-pulse {
              0% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 0, 0, 0.5); }
              50% { transform: scale(1.1); box-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
              100% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 0, 0, 0.5); }
            }
            .incorrect {
              background-color: #ffcccc !important;
              color: #cc0000 !important;
              border: 2px solid #cc0000 !important;
            }
          `;
          document.head.appendChild(style);
        }
        
        console.log('Incorrect answer:', {
          expected: expectedValue,
          received: article,
          allCorrectAnswers: challenge.correctAnswers.map(a => ({
            value: a.value,
            gender: a.gender,
            case: a.case
          }))
        });
      }
      
      gameState.totalAttempts++;
      
      // Add a class to indicate card is removable
      cardClone.classList.add('removable');
      cardClone.title = 'Click to remove';
      
      // Add click event to remove card
      cardClone.addEventListener('click', () => {
        // Remove the card from the drop zone
        zone.removeChild(cardClone);
        
        // Remove the correct/incorrect class from the zone
        zone.classList.remove('correct', 'incorrect');
        
        // Make the original card visible again
        (card as HTMLElement).style.visibility = 'visible';
        
        // Update the next button state
        checkChallengeComplete();
      });
      
      zone.appendChild(cardClone);
      
      // Hide the original card
      (card as HTMLElement).style.visibility = 'hidden';
      
      // Check if all drop zones are filled
      checkChallengeComplete();
    }
  };
  
  // Check if all drop zones are filled and handle completion
  const checkChallengeComplete = () => {
    const dropZones = document.querySelectorAll('.drop-zone');
    let allFilled = true;
    let allCorrect = true;
    
    dropZones.forEach(zone => {
      if (!zone.querySelector('.draggable-card')) {
        allFilled = false;
      }
      if (!zone.classList.contains('correct')) {
        allCorrect = false;
      }
    });
    
    // Show success indicator if all answers are correct
    const successIndicator = document.getElementById('success-indicator');
    if (allFilled && allCorrect && successIndicator) {
      successIndicator.style.display = 'flex';
    } else if (successIndicator) {
      successIndicator.style.display = 'none';
    }
    
    if (allFilled && allCorrect) {
      // Only if all answers are correct, increment rank and proceed
      const challenge = gameState.challenges[gameState.currentChallengeIndex];
      
      // Check current rank to see if it's already been incremented in this session
      const previousRank = challenge.rank !== undefined ? challenge.rank : 0;
      
      // Increment rank of completed challenge
      if (challenge.rank !== undefined) {
        challenge.rank++;
        
        // If rank is 3, remove from challenges and add to completed
        if (challenge.rank >= 3) {
          gameState.completedChallenges.push(challenge.id);
          gameState.challenges.splice(gameState.currentChallengeIndex, 1);
        }
      } else {
        challenge.rank = 1; // Move from 0 to 1
      }
      
      // Save to local storage
      saveChallengeRanks(gameState);
      
      // Update the rank card display to show new rank immediately
      const rankCard = document.querySelector('.rank-stats .rank-card');
      if (rankCard) {
        // Update the rank card class and text
        rankCard.className = `rank-card ${challenge.rank === 1 ? 'rank-bronze' : challenge.rank === 2 ? 'rank-silver' : 'rank-gold'}`;
        rankCard.textContent = challenge.rank.toString();
      }
      
      console.log(`Challenge rank updated: ${previousRank} → ${challenge.rank}`);
      
      // Recalculate rank counts to update UI
      const rankCounts: Record<string | number, number> = {
        0: 0, 1: 0, 2: 0, 3: 0, ignored: 0
      };
      
      // Count all challenges by rank
      createChallenges().forEach(c => {
        const challengeData = localStorage.getItem(STORAGE_KEYS.CHALLENGE_RANKS);
        const savedData = challengeData ? JSON.parse(challengeData) : {};
        
        if (savedData[c.id] && savedData[c.id].ignored) {
          rankCounts.ignored++;
        } else if (savedData[c.id] && savedData[c.id].rank !== undefined) {
          rankCounts[savedData[c.id].rank]++;
        } else {
          rankCounts[0]++; // Default rank is 0
        }
      });
      
      // Update rank counts in UI
      const rankCountDisplay = document.querySelector('.rank-stats span');
      if (rankCountDisplay) {
        rankCountDisplay.innerHTML = `
          Challenge: 
          <span class="rank-card ${challenge.rank === 0 ? 'rank-initial' : challenge.rank === 1 ? 'rank-bronze' : challenge.rank === 2 ? 'rank-silver' : 'rank-gold'}">${challenge.rank}</span>
          | Completed cards: 
          <span class="rank-bronze rank-card">1</span> ${rankCounts[1]} 
          <span class="rank-silver rank-card">2</span> ${rankCounts[2]} 
          <span class="rank-gold rank-card">3</span> ${rankCounts[3] + rankCounts.ignored}
        `;
      }
      
      // Short delay before moving to next challenge
      setTimeout(() => {
        // Move to next challenge or reset if at the end
        if (gameState.challenges.length > 0) {
          gameState.currentChallengeIndex = (gameState.currentChallengeIndex + 1) % gameState.challenges.length;
        } else {
          gameState.currentChallengeIndex = 0;
        }
        
        // Render the next challenge
        renderChallenge();
      }, 1000);
    } else if (allFilled && !allCorrect) {
      // If all zones are filled but some answers are incorrect,
      // add a small shake animation to the incorrect answers
      document.querySelectorAll('.drop-zone:not(.correct)').forEach(zone => {
        zone.classList.add('shake-error');
        setTimeout(() => {
          zone.classList.remove('shake-error');
        }, 500);
      });
    }
  };
  
  // Variables to track touch/drag state
  let draggedItem: HTMLElement | null = null;
  let touchActive = false;
  let currentDropZone: HTMLElement | null = null;
  let rafId: number | null = null;
  
  // Setup drag and drop functionality
  const setupDragAndDrop = () => {
    const cards = document.querySelectorAll('.draggable-card');
    const dropZones = document.querySelectorAll('.drop-zone');
    const cardContainer = document.querySelector('.card-container');
    
    // Clean up any previous handlers
    draggedItem = null;
    touchActive = false;
    currentDropZone = null;
    
    // Remove any existing event listeners (cleaner approach)
    if (cardContainer) {
      const newCardContainer = cardContainer.cloneNode(true);
      cardContainer.parentNode?.replaceChild(newCardContainer, cardContainer);
    }
    
    // Add single event listener on the card container using event delegation
    // This handles all card clicks in one place, simplifying the code
    document.querySelector('.card-container')?.addEventListener('click', (e) => {
      // Stop event from bubbling to document
      e.stopPropagation();
      e.preventDefault();
      
      // Find if we clicked on a card
      let target = e.target as HTMLElement;
      
      // Walk up the DOM to find the card if we clicked on something inside it
      while (target && !target.classList.contains('draggable-card') && target !== e.currentTarget) {
        target = target.parentElement as HTMLElement;
      }
      
      // If we found a card
      if (target && target.classList.contains('draggable-card')) {
        console.log('Card clicked via delegation:', target.textContent?.trim());
        
        // Find the first empty drop zone
        const emptyDropZones = Array.from(dropZones).filter(
          zone => !zone.querySelector('.draggable-card')
        );
        
        if (emptyDropZones.length > 0) {
          const firstEmptyZone = emptyDropZones[0] as HTMLElement;
          const article = target.dataset.article || '';
          const gender = target.dataset.gender || '';
          const caseType = target.dataset.case || '';
          
          // Use handleDrop to place the card
          handleDrop(firstEmptyZone, article, gender, caseType);
        }
      }
    }, { capture: true });
    
    // DESKTOP DRAG FUNCTIONALITY
    cards.forEach(card => {
      // Drag start (desktop)
      card.addEventListener('dragstart', (e) => {
        const dragEvent = e as DragEvent;
        draggedItem = card as HTMLElement;
        dragEvent.dataTransfer?.setData('article', draggedItem.dataset.article || '');
        dragEvent.dataTransfer?.setData('gender', draggedItem.dataset.gender || '');
        dragEvent.dataTransfer?.setData('case', draggedItem.dataset.case || '');
        card.classList.add('dragging');
      });
      
      // Drag end (desktop)
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        draggedItem = null;
      });
    });
    
    // TOUCH FUNCTIONALITY (MOBILE)
    let touchStartX = 0;
    let touchStartY = 0;
    let isTap = false;
    
    // Touch handling using event delegation
    const cardContainerEl = document.querySelector('.card-container');
    
    // Touch start on container with delegation
    cardContainerEl?.addEventListener('touchstart', (e: Event) => {
      const touchEvent = e as TouchEvent;
      const touch = touchEvent.touches[0];
      
      // Find if we touched on a card
      let target = touchEvent.target as HTMLElement;
      
      // Walk up the DOM to find the card if we touched something inside it
      while (target && !target.classList.contains('draggable-card') && target !== cardContainerEl) {
        target = target.parentElement as HTMLElement;
      }
      
      // If we found a card
      if (target && target.classList.contains('draggable-card')) {
        e.stopPropagation();
        e.preventDefault();
        
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        isTap = true;
        draggedItem = target;
        
        console.log('Touch start on card (delegation):', draggedItem.textContent?.trim());
      }
    }, { passive: false, capture: true });
    
    // Touch end on container with delegation
    cardContainerEl?.addEventListener('touchend', (e: Event) => {
      const touchEvent = e as TouchEvent;
      
      // Only handle if we're tracking a dragged item
      if (draggedItem && isTap) {
        e.stopPropagation();
        e.preventDefault();
        
        console.log('Touch end on card (delegation):', draggedItem.textContent?.trim());
        
        // Find the first empty drop zone
        const emptyDropZones = Array.from(dropZones).filter(
          zone => !zone.querySelector('.draggable-card')
        );
        
        if (emptyDropZones.length > 0) {
          const firstEmptyZone = emptyDropZones[0] as HTMLElement;
          const article = draggedItem.dataset.article || '';
          const gender = draggedItem.dataset.gender || '';
          const caseType = draggedItem.dataset.case || '';
          
          // Use handleDrop to place the card
          handleDrop(firstEmptyZone, article, gender, caseType);
          
          // Reset state
          draggedItem.classList.remove('dragging');
          draggedItem = null;
          isTap = false;
        }
      }
    }, { passive: false, capture: true });
    
    // Touch move on document - needed for drag operations
    document.addEventListener('touchmove', (e) => {
      if (!draggedItem) return;
      
      const touch = e.touches[0];
      
      // If moved more than 10px, consider it a drag not a tap
      if (isTap && (Math.abs(touch.clientX - touchStartX) > 10 || 
                   Math.abs(touch.clientY - touchStartY) > 10)) {
        isTap = false;
        touchActive = true;
        draggedItem.classList.add('dragging');
        // Now prevent default to prevent scrolling
        e.preventDefault();
      }
      
      if (touchActive) {
        // Find drop zone under finger
        if (currentDropZone) {
          currentDropZone.classList.remove('active');
        }
        
        currentDropZone = getTouchDropZone(touch.clientX, touch.clientY);
        
        if (currentDropZone) {
          currentDropZone.classList.add('active');
        }
      }
    });
    
    // Touch end on document - needed for drag operations
    document.addEventListener('touchend', (e) => {
      if (!draggedItem || !touchActive) return;
      
      if (currentDropZone) {
        currentDropZone.classList.remove('active');
      }
      
      // Only handle drag operations here (taps are handled by the container handler)
      if (currentDropZone) {
        // If drag ended over a drop zone, place it there
        const article = draggedItem.dataset.article || '';
        const gender = draggedItem.dataset.gender || '';
        const caseType = draggedItem.dataset.case || '';
        
        handleDrop(currentDropZone, article, gender, caseType);
      } else {
        // If drag ended outside a drop zone, find first available
        const emptyDropZones = Array.from(dropZones).filter(
          zone => !zone.querySelector('.draggable-card')
        );
        
        if (emptyDropZones.length > 0) {
          const firstEmptyZone = emptyDropZones[0] as HTMLElement;
          const article = draggedItem.dataset.article || '';
          const gender = draggedItem.dataset.gender || '';
          const caseType = draggedItem.dataset.case || '';
          
          handleDrop(firstEmptyZone, article, gender, caseType);
        }
      }
      
      // Reset state
      if (draggedItem) {
        draggedItem.classList.remove('dragging');
      }
      draggedItem = null;
      touchActive = false;
      currentDropZone = null;
      isTap = false;
    });
    
    // DROPZONE HANDLERS (DESKTOP)
    dropZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('active');
      });
      
      zone.addEventListener('dragleave', () => {
        zone.classList.remove('active');
      });
      
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('active');
        
        // Verify zone is empty
        if (zone.querySelector('.draggable-card')) {
          return;
        }
        
        const dropEvent = e as DragEvent;
        const article = dropEvent.dataTransfer?.getData('article');
        const gender = dropEvent.dataTransfer?.getData('gender');
        const caseType = dropEvent.dataTransfer?.getData('case');
        
        if (!article || !gender || !caseType) return;
        
        handleDrop(zone as HTMLElement, article, gender, caseType);
      });
    });
  };
  
  // Initialize the game
  renderChallenge();
}); 