# German Learning Game Requirements

## Overview
A simple drag-and-drop game for practicing German case declensions (Nominative, Accusative, Dative) and verb conjugations. The user will match correct declensions or verb forms to their position in grammar tables.

## User Interface
- Interface language: English
- Translation directions: Hebrew ↔ German
- Simple, minimalist design
- Single HTML file output for easy transfer to Android device
- Row labels should be in English for personal pronouns to avoid confusion (e.g., use "I" instead of "ich")

## Core Functionality
- Present declension tables with missing entries
- Generate draggable cards with possible answers
- Allow users to drag correct cards to appropriate table cells
- Provide immediate feedback on correct/incorrect placements
- Track session progress (correct vs incorrect answers)
- Support multiple grammatical features:
  - Case declensions (Nominative, Accusative, Dative)
  - Verb conjugations (Regular, Irregular, Modal verbs)
  - Verb tenses (Present, Past, Future, Conditional)

## Technical Requirements
- Written in TypeScript, compiled to JavaScript
- No backend dependencies (purely client-side)
- Single HTML file output with embedded CSS/JS
- Mobile-friendly interface
- Local storage for saving progress
- Robust zone ID parsing that correctly handles hyphenated gender and case values
- Custom validation for special cases like conditional forms and past tense verbs

## Game Mechanics
- Challenges appear in random order
- Start with simpler tables and progress to more complex ones
- Focus on definite articles, then indefinite articles, then possessive articles, then pronouns, then verb conjugations
- Practice both recognition (selecting correct form) and recall (typing correct form)
- Support for different challenge types (articles, pronouns, verbs)

## Ranking System
- All challenges start with rank 1
- After completing a challenge, its rank increases by 1
- Challenges at rank 3, once completed, will not be shown again
- An "Ignore me" button allows users to move a challenge directly to an ignored list
- Challenge selection feature for users to choose specific challenges

## Error Handling
- Clearly display expected values when incorrect answers are provided
- Special validation for challenges with complex rules (like conditional forms)
- Provide specific handling for verb conjugations and tenses

## Example Game Flow
1. User sees table with missing entries for accusative case or verb conjugation
2. Cards with possible answers appear below the table
3. User drags "den" to masculine accusative position or "würde" to first-person singular
4. Immediate visual feedback indicates correct placement
5. Progress to next challenge after table completion

## Content
- Include all declension tables as shown in the provided data
- Cover all three cases: Nominative, Accusative, Dative
- Include definite articles, indefinite articles, possessive pronouns, personal pronouns, and demonstrative pronouns
- Include verb conjugations for regular and irregular verbs
- Include verb tenses: present, past, future, and conditional

## Things to Avoid
- Complex animations or graphics that increase file size
- Server-based functionality requiring internet connection
- Complicated setup processes or installation steps
- Excessive error messages or intimidating feedback
- Complex scoring systems that distract from learning
- Desktop-only interface elements (ensure mobile compatibility)
- Auto-playing sounds or disruptive notifications
