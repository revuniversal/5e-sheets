# 5e-sheets

## D&D 5e Character Sheets

A geeky experiment using reactjs and styled-components.

## Components

### CharacterSheet

Web-based representation of a DnD 5e character sheet.
This is a work in progress, so not everything is fleshed out.

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

- [x] Name
- [x] Basic Info
- [x] Abilities and Skills
- [ ] Background (bond, flaw, etc.)
- [ ] Combat Stats (AC, Speed, HP)
- [ ] Inventory
- [ ] Raw to extended stats converter
- [ ] Click to roll Skill/Save
- [ ] Add tests
- [ ] Publish to npm
