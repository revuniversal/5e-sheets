# 5e-sheets

## D&D 5e Character Sheets

A geeky experiment using reactjs and styled-components.

## Components

### CharacterSheet

The root component.  A work in progress.  Currently, only the abilities/skills portion of the character sheet is fully fleshed out.

#### Example

```js
import React from 'react';
import CharacterSheet from './character/CharacterSheet';

const Example = ({character}) => (
  <CharacterSheet character={character} />
)
```

#### Properties

- character:
  - name: string
  - stats:
    - class: string
    - level: number
    - proficiency: number
    - hp: number
    - initiative: number
    - speed: number
    - abilities:
      - name: string
      - abbreviation: string
      - score: number
      - modifier: number
      - savingThrows:
        - advantage: boolean
        - proficiency: boolean
        - modifier: number
      - skills: array:
        - name: string
        - advantage: boolean
        - proficiency: boolean
        - modifier: number

## Goals

(In no particular order)

- [ ] Name
- [ ] Personal Info
- [x] Abilities and Skills
- [ ] Click to roll Skill/Save
- [ ] Background (bond, flaw, etc.)
- [ ] Inventory
- [ ] Combat Stats (AC, Speed, HP)
- [ ] Raw to extended stats converter
- [ ] Add tests
- [ ] Publish to npm
