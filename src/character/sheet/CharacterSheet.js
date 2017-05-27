import React from 'react';
import HorizontalStatBlock from './stats/HorizontalStatBlock';
import PersonalInfo from './personal/PersonalInfo';

const CharacterSheet = ({ character }) => (
  <div>
    <PersonalInfo character={character} />
    <HorizontalStatBlock stats={character.stats} />
  </div>
);

export default CharacterSheet;
