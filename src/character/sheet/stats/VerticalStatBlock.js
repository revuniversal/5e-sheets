import React from 'react';
import Abilities from '../abilities/Abilities';

const VerticalStatBlock = ({ stats: { abilities } }) => {
  return (
    <div>
      <Abilities abilities={abilities} />
    </div>
  );
};

export default VerticalStatBlock;
