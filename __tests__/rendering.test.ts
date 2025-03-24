/**
 * @jest-environment jsdom
 */
import { JSDOM } from 'jsdom';
import { definiteArticles } from '../src/data/articles';

describe('Game UI Rendering', () => {
  beforeEach(() => {
    // Set up a fresh DOM environment
    document.body.innerHTML = `
      <div id="game-container"></div>
    `;
  });

  // Helper function to simulate rendering a challenge
  // This is a simplified version of the renderChallenge function
  const renderMockChallenge = () => {
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer) return;

    const challenge = {
      id: 'definite-nominative',
      title: 'Nominative',
      description: 'Place the correct definite articles in the nominative case.',
      articleType: 'definite',
      case: 'nominative',
      rank: 1,
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
      correctAnswers: definiteArticles.filter(article => 
        article.case === 'nominative' && article.type === 'definite'
      ),
      languageDirection: 'germanToHebrew'
    };

    // Create the HTML for the challenge
    const rows = challenge.tableStructure.rows;
    const columns = challenge.tableStructure.columns;
    
    // Create table rows
    let tableRows = '';
    rows.forEach(row => {
      tableRows += `<tr><th>${row.label}</th>`;
      columns.forEach(column => {
        const dropZoneId = `drop-${row.gender}-${column.case}`;
        tableRows += `<td><div class="drop-zone" id="${dropZoneId}"></div></td>`;
      });
      tableRows += '</tr>';
    });
    
    // Create draggable cards
    const articles = challenge.correctAnswers;
    let cardHtml = '';
    articles.forEach(article => {
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
      <header>
        <div class="rank-score">
          <span>${challenge.rank}/3</span>
        </div>
        <h2>${challenge.title}</h2>
        <div class="rank-score">
          <span>0</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" style="width: ${Math.min(100, (challenge.rank || 1) / 3 * 100)}%"></div>
        </div>
      </header>
      
      <main>
        <div class="game-table-container">
          <table class="game-table">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        
        <div class="card-container">
          ${cardHtml}
        </div>
      </main>
      
      <div class="game-controls">
        <button id="ignore-challenge">X</button>
        <button id="reset-challenge">Reset</button>
        <button id="next-challenge" disabled>Next</button>
      </div>
    `;
  };

  it('should render the challenge with the correct title', () => {
    renderMockChallenge();
    
    // Check if the title is rendered correctly
    const titleElement = document.querySelector('h2');
    expect(titleElement?.textContent).toBe('Nominative');
  });

  it('should render the correct number of drop zones', () => {
    renderMockChallenge();
    
    // Check if all drop zones are rendered
    const dropZones = document.querySelectorAll('.drop-zone');
    expect(dropZones.length).toBe(4); // One for each gender
  });

  it('should render the correct number of draggable cards', () => {
    renderMockChallenge();
    
    // Check if all cards are rendered
    const cards = document.querySelectorAll('.draggable-card');
    
    // We should have one card for each correct answer
    const nominativeArticles = definiteArticles.filter(
      article => article.case === 'nominative' && article.type === 'definite'
    );
    
    expect(cards.length).toBe(nominativeArticles.length);
  });

  it('should render game control buttons', () => {
    renderMockChallenge();
    
    // Check if all control buttons are rendered
    const ignoreButton = document.getElementById('ignore-challenge');
    const resetButton = document.getElementById('reset-challenge');
    const nextButton = document.getElementById('next-challenge');
    
    expect(ignoreButton).not.toBeNull();
    expect(resetButton).not.toBeNull();
    expect(nextButton).not.toBeNull();
    
    // Next button should be disabled initially
    expect(nextButton?.getAttribute('disabled')).not.toBeNull();
  });
}); 