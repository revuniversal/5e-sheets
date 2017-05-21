import Chance from 'chance';
import { expect } from 'chai';
import calculateCharacer from './calculate';

let chance = new Chance();

describe('given a character', () => {
  let character;
  beforeEach(() => character = getExampleCharacter());

  it('it has a name', () => {
    expect(character.name).to.not.be.null;
  });
  it('it has a race', () => {
    expect(character.race).to.not.be.null;
  });
  it('it has 6 abilities', () => {
    expect(character.abilities.length).to.equal(6);
  });
  it('it has at least 1 class', () => {
    expect(character.classes).length.to.be.greaterThan(0);
  });
  it('it has equipment', () => {
    expect(character.equipment).to.not.be.null;
  });
});

function getExampleCharacter() {
  return {
    name: 'Beezus',
    race: { name: 'Human', effects: [] },
    background: 'Charlatan',
    classes: [getExampleClass('Fighter'), getExampleClass('Bard')],
    abilities: [
      generateAbility('Strength', 'STR'),
      generateAbility('Dexterity', 'DEX'),
      generateAbility('Constitution', 'CON'),
      generateAbility('Intelligence', 'INT'),
      generateAbility('Wisdom', 'WIS'),
      generateAbility('Charsima', 'CHA')
    ],
    saves: [],
    skills: []
  };
}

function generateAbility(name, abbreviation) {
  return {
    name,
    abbreviation,
    baseScore: chance.d6() + chance.d6() + chance.d6()
  };
}

function getExampleClass(name) {
  return {
    name,
    level: chance.integer({ min: 1, max: 20 }),
    effects: []
  };
}
