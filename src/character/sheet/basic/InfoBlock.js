import React from 'react';
import styled from 'styled-components';
import { Cell, Values, Labels } from '../common';

const Container = styled.div`
  width: 70%;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 0.5em;
  font-size: 1.2em;
`;
const CollapsibleCell = styled(Cell)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoBlock = ({ character }) => (
  <Container>
    <Values>
      <CollapsibleCell columns={6}>
        Level {character.stats.level} {character.stats.class}
      </CollapsibleCell>
      <CollapsibleCell columns={6}>{character.playerName}</CollapsibleCell>
    </Values>
    <Labels>
      <CollapsibleCell columns={6}>Level and Class</CollapsibleCell>
      <CollapsibleCell columns={6}>Player Name</CollapsibleCell>
    </Labels>
    <Values>
      <CollapsibleCell columns={3}>
        {character.background.name}
      </CollapsibleCell>
      <CollapsibleCell columns={3}>{character.race}</CollapsibleCell>
      <CollapsibleCell columns={3}>
        {character.stats.experience}
      </CollapsibleCell>
      <CollapsibleCell columns={3}>
        {character.stats.nextLevel}
      </CollapsibleCell>
    </Values>
    <Labels>
      <CollapsibleCell columns={3}>Background</CollapsibleCell>
      <CollapsibleCell columns={3}>Race</CollapsibleCell>
      <CollapsibleCell columns={3}>Experience</CollapsibleCell>
      <CollapsibleCell columns={3}>Next Level</CollapsibleCell>
    </Labels>
  </Container>
);

export default InfoBlock;
