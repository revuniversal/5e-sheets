export const abilities = [
  { name: 'Strength', abbreviation: 'STR', score: 12, modifier: 1 },
  { name: 'Dexterity', abbreviation: 'DEX', score: 13, modifier: 1 },
  { name: 'Constitution', abbreviation: 'CON', score: 14, modifier: 2 },
  { name: 'Intelligence', abbreviation: 'INT', score: 10, modifier: 0 },
  { name: 'Wisdom', abbreviation: 'WIS', score: 11, modifier: 0 },
  { name: 'Charisma', abbreviation: 'CHA', score: 9, modifier: -1 }
];

const savingThrows = [
  { ability: 'Strength', modifier: 1, proficient: true, advantage: false },
  { ability: 'Dexterity', modifier: 1, proficient: false, advantage: false },
  { ability: 'Constitution', modifier: 2, proficient: false, advantage: false },
  { ability: 'Intelligence', modifier: 0, proficient: false, advantage: false },
  { ability: 'Wisdom', modifier: 0, proficient: false, advantage: false },
  { ability: 'Charisma', modifier: -1, proficient: false, advantage: false }
];

const skills = [
  {
    name: 'Acrobatics',
    ability: 'DEX',
    advantage: true,
    proficient: true,
    modifier: 2
  },
  {
    name: 'Animal Handling',
    ability: 'WIS',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Arcana',
    ability: 'INT',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Athletics',
    ability: 'STR',
    advantage: false,
    proficient: true,
    modifier: 1
  },
  {
    name: 'Deception',
    ability: 'CHA',
    advantage: false,
    proficient: false,
    modifier: -1
  },
  {
    name: 'History',
    ability: 'INT',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Insight',
    ability: 'WIS',
    advantage: true,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Intimidation',
    ability: 'CHA',
    advantage: false,
    proficient: true,
    modifier: -1
  },
  {
    name: 'Investigation',
    ability: 'INT',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Medicine',
    ability: 'WIS',
    advantage: true,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Nature',
    ability: 'INT',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Perception',
    ability: 'WIS',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Performance',
    ability: 'CHA',
    advantage: false,
    proficient: false,
    modifier: -1
  },
  {
    name: 'Persuasion',
    ability: 'CHA',
    advantage: false,
    proficient: false,
    modifier: -1
  },
  {
    name: 'Religion',
    ability: 'INT',
    advantage: false,
    proficient: false,
    modifier: 0
  },
  {
    name: 'Sleight of Hand',
    ability: 'DEX',
    advantage: false,
    proficient: false,
    modifier: 1
  },
  {
    name: 'Stealth',
    ability: 'DEX',
    advantage: false,
    proficient: false,
    modifier: 1
  },
  {
    name: 'Survival',
    ability: 'WIS',
    advantage: true,
    proficient: false,
    modifier: 0
  }
];

export const stats = {
  class: 'Fighter',
  abilities,
  savingThrows,
  skills,
  level: 3,
  proficiency: 1,
  hp: 19,
  maxHp: 19,
  armorClass: 15,
  initiative: 1,
  speed: 30,
  experience: 3885,
  nextLevel: 315
};

export default stats;
