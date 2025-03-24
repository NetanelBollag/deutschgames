# German Grammar Game

A browser-based game for learning German grammar with drag-and-drop exercises.

## Features

- Interactive drag-and-drop exercises for German articles, pronouns, and verb forms
- Mobile and desktop support
- Progress tracking with localStorage
- Adaptive learning that focuses on challenging areas

## Development

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd german-case-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Testing

The project includes a comprehensive test suite using Jest and Testing Library.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Testing individual utility functions (`utils.test.ts`, `extracted-utils.test.ts`)
- **Component Tests**: Testing the rendering and DOM interactions (`rendering.test.ts`)
- **Integration Tests**: Testing game logic and challenge validation (`challenge.test.ts`) 

### Making the Code More Testable

The original codebase has been refactored to:

1. Extract pure utility functions into a separate module (`src/utils.ts`)
2. Separate game logic from rendering logic
3. Make functions more modular and testable

### Adding New Tests

When adding new features, create corresponding test files in the `__tests__` directory.

Example:
```typescript
import { myNewFunction } from '../src/myModule';

describe('My New Feature', () => {
  it('should behave as expected', () => {
    const result = myNewFunction('input');
    expect(result).toBe('expected output');
  });
});
```

## End-to-End Testing

For full end-to-end testing, consider adding Cypress or Playwright tests:

1. Install Cypress:
```bash
npm install --save-dev cypress
```

2. Add a test script to package.json:
```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run"
}
```

3. Create a basic e2e test for the game:
```javascript
// cypress/integration/game.spec.js
describe('German Grammar Game', () => {
  it('loads the game and displays the first challenge', () => {
    cy.visit('/');
    cy.get('h2').should('be.visible');
    cy.get('.draggable-card').should('have.length.greaterThan', 0);
    cy.get('.drop-zone').should('have.length.greaterThan', 0);
  });
  
  it('allows dragging cards to drop zones', () => {
    cy.visit('/');
    // Test drag and drop interaction
    cy.get('.draggable-card').first().drag('.drop-zone').first();
    cy.get('.drop-zone .draggable-card').should('be.visible');
  });
});
``` 