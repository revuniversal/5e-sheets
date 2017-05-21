import {sum, map, flatten, filter} from 'lodash'

function calculateCharacter(character) {
  let effects = getEffects(character);
  let classLevels = map(character.classes, c => c.level);
  let level = sum(classLevels);
  let abilities = character.abilities.map(a => calculateAbility(a, effects));
  let skills = character.skills.map(s => calculateSkill(character, s, effects));
  let saves = character.saves.map(s => calculateSavingThrow(character, s, effects));

  return {
    ...character,
    level,
    abilities,
    skills,
    saves
  }
}

function getEffects({classes, race}) {
  var fromClasses = flatten(map(classes, c => c.class.effects));
  var fromRace = race.effects;
  return [...fromClasses, ...fromRace];
}

function calculateAbility(ability, effects) {
  const changes = map(effects, (e) => {
    if (e.kind === 'ABILITY' && e.ability === ability.abbreviation) {
      return e.value
    } else {
      return 0
    }
  });
  const change = sum(changes)
  const score = ability.baseScore + change
  const modifier = calculateAbilityModifier(score)
  const skills = []
  
  return {
    ...ability,
    score,
    modifier
  };
}

function calculateSkill(character, skill, effects) {
  return {
    ...skill,
    modifier: 0
  };
}

function calculateSavingThrow(character, save, effects) {
  return {
    ...save,
    modifier: 0
  };
}

function calculateAbilityModifier(score) {
  return Math.floor((score-10) / 2);
}

export default calculateCharacter;