export const abilities = [
  {
    name: 'Strength',
    abbreviation: 'STR',
    score: 12,
    modifier: 1,
    savingThrows: { advantage: false, proficient: true, modifier: 1 },
    skills: [
      { name: 'Athletics', advantage: false, proficient: true, modifier: 1 }
    ]
  },
  {
    name: 'Dexterity',
    abbreviation: 'DEX',
    score: 13,
    modifier: 1,
    savingThrows: { advantage: true, proficient: false, modifier: 1 },
    skills: [
      { name: 'Acrobatics', advantage: true, proficient: true, modifier: 2 },
      {
        name: 'Sleight of Hand',
        advantage: false,
        proficient: false,
        modifier: 1
      },
      { name: 'Stealth', advantage: false, proficient: false, modifier: 1 }
    ]
  },
  {
    name: 'Constitution',
    abbreviation: 'CON',
    score: 14,
    modifier: 2,
    savingThrows: { advantage: false, proficient: false, modifier: 2 },
    skills: []
  },
  {
    name: 'Intelligence',
    abbreviation: 'INT',
    score: 10,
    modifier: 0,
    savingThrows: { advantage: false, proficient: false, modifier: 0 },
    skills: [
      { name: 'Arcana', advantage: false, proficient: false, modifier: 0 },
      { name: 'History', advantage: false, proficient: false, modifier: 0 },
      {
        name: 'Investigation',
        advantage: false,
        proficient: false,
        modifier: 0
      },
      { name: 'Nature', advantage: false, proficient: false, modifier: 0 },
      { name: 'Religion', advantage: false, proficient: false, modifier: 0 }
    ]
  },
  {
    name: 'Wisdom',
    abbreviation: 'WIS',
    score: 11,
    modifier: 0,
    savingThrows: { advantage: false, proficient: false, modifier: 0 },
    skills: [
      {
        name: 'Animal Handling',
        advantage: false,
        proficient: false,
        modifier: 0
      },
      { name: 'Insight', advantage: true, proficient: false, modifier: 0 },
      { name: 'Medicine', advantage: true, proficient: false, modifier: 0 },
      { name: 'Perception', advantage: false, proficient: false, modifier: 0 },
      { name: 'Survival', advantage: true, proficient: false, modifier: 0 }
    ]
  },
  {
    name: 'Charisma',
    abbreviation: 'CHA',
    score: 9,
    modifier: -1,
    savingThrows: { advantage: false, modifier: -1 },
    skills: [
      { name: 'Deception', advantage: false, proficient: false, modifier: -1 },
      {
        name: 'Intimidation',
        advantage: false,
        proficient: true,
        modifier: -1
      },
      {
        name: 'Performance',
        advantage: false,
        proficient: false,
        modifier: -1
      },
      { name: 'Persuasion', advantage: false, proficient: false, modifier: -1 }
    ]
  }
];

export const stats = {
  class: 'Fighter',
  abilities,
  level: 3,
  proficiency: 1,
  hp: 13,
  initiative: 14,
  speed: 30,
  experience: 3885,
  nextLevel: 315
};

export default stats;
